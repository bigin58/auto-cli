import { simpleGit, SimpleGitOptions } from "simple-git";
import createLogger from "progress-estimator";
import chalk from "chalk";
import { exec } from "child_process";
import { promisify } from "util";
import log from "./log";
import figlet from "figlet";

const execAsync = promisify(exec);

// 初始化进度条
const logger = createLogger({
  spinner: {
    interval: 100,
    frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"].map((frame) =>
      chalk.green(frame)
    ),
  },
});

//
export const printLogo = () => {
  const logo = figlet.textSync("WVE CLI", {
    font: "Standard",
    horizontalLayout: "default",
  });
  console.log(chalk.rgb(40, 156, 193).visible(logo));
};

const gitOptions: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: "git",
  maxConcurrentProcesses: 6,
  trimmed: false,
};

export const clone = async (
  url: string,
  projectName: string,
  options: string[]
) => {
  const git = simpleGit(gitOptions);

  try {
    await logger(git.clone(url, projectName, options), "代码下载中:", {
      estimate: 8000, // 估计时间为8秒
    });
    log(`项目创建成功 ${chalk.blue(projectName)}`, "success");
    console.log();
    log("执行一下命名启动项目", "info");
    log(`cd ${chalk.blue(projectName)}`, "info");
    log(`${chalk.yellowBright("pnpm")} install`, "info");
    log(`${chalk.yellowBright("pnpm")} run dev`, "info");
    printLogo();
  } catch (error) {
    log(`代码下载失败: ${error}`, "error");
    throw error;
  }
};
