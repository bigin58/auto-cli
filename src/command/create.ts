import path from "path";
import fs from "fs-extra";
import { select, input } from "@inquirer/prompts";
import { clone } from "../utils/clone";
import chalk from "chalk";
import { version, name as packageName } from "../../package.json";
import { gt } from "lodash";

export interface TemplateInfo {
  name: string;
  description: string;
  downloadUrl: string;
  branch: string;
}

export const templates: Map<string, TemplateInfo> = new Map([
  [
    "vue3-ts",
    {
      name: "vue3-ts",
      description: "Vue3 + TypeScript 模板",
      downloadUrl: "https://gitee.com/bigin/admin-pro.git",
      branch: "dev6",
    },
  ],
  [
    "react-ts",
    {
      name: "react-ts",
      description: "React + TypeScript 模板",
      downloadUrl: "https://gitee.com/bigin/admin-pro.git",
      branch: "dev6",
    },
  ],
]);

export const isOverwrite = (projectPath: string) => {
  console.warn(`${chalk.red("文件夹已存在")} ${projectPath}`);
  return select({
    message: "文件夹已存在，是否覆盖？",
    choices: [
      { name: "是", value: true },
      { name: "否", value: false },
    ],
  });
};

// 获取wve-cli最新版本
export const getNpmLatesVersion = async (packageName: string) => {
  const response = await fetch(`https://registry.npmjs.org/${packageName}`);
  const data = await response.json();
  return data["dist-tags"].latest;
};

// 检查wve-cli最新版本
export const checkNpmLatestVersion = async () => {
  const latestVersion = await getNpmLatesVersion(packageName);
  const needUpdate = gt(latestVersion, version);
  if (needUpdate) {
    console.warn(`${chalk.red("有新版本")} ${packageName}@${latestVersion}`);
    console.log(
      `可使用： ${chalk.yellow(
        "npm install wve-cli@latest"
      )}，或者使用：${chalk.yellow("wve update")}更新`
    );
  }
  return needUpdate;
};

export default async function create(projectName?: string) {
  await checkNpmLatestVersion();
  const templatesList = Array.from(templates.values()).map((template) => ({
    name: template.name,
    value: template.name,
    description: template.description,
  }));

  if (!projectName) {
    projectName = await input({
      message: "请输入项目名称",
      default: "my-project",
    });
  }

  // 如果文件夹存在，提示是否覆盖
  const projectPath = path.resolve(process.cwd(), projectName);
  // 判断文件夹是否存在
  if (fs.existsSync(projectPath)) {
    const run = await isOverwrite(projectPath);
    if (run) {
      await fs.remove(projectPath);
    } else {
      return;
    }
  }

  const template = await select({
    message: "请选择模板",
    choices: templatesList,
  });
  const info = templates.get(template);
  if (!info) {
    throw new Error("模板不存在");
  }

  clone(info.downloadUrl, projectName, [
    `--branch=${info.branch}`,
    "--depth=1",
  ]);
  // console.log(info);
}
