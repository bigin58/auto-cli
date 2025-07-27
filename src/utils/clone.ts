import { simpleGit, SimpleGitOptions } from "simple-git";
import createLogger from "progress-estimator";
import chalk from "chalk";
import { exec } from "child_process";
import { promisify } from "util";

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
    console.log();
    console.log(`项目创建成功 ${chalk.blue(projectName)}`);
    console.log();
    console.log("执行一下命名启动项目");
    console.log();
    console.log(`cd ${chalk.blue(projectName)}`);
    console.log(`${chalk.yellowBright("pnpm")} install`);
    console.log(`${chalk.yellowBright("pnpm")} run dev`);
  } catch (error) {
    console.error("代码下载失败:", error);
    throw error;
  }
};
