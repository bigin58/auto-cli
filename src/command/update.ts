import process from "child_process"; // 引入子进程模块
import ora from "ora";
import chalk from "chalk";

const spinner = ora({
  text: "更新中...",
  spinner: {
    interval: 300, // 更新间隔时间
    frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"].map((frame) =>
      chalk.green(frame)
    ),
  },
});

export default function update() {
  spinner.start();
  process.exec("npm install -g wve-cli@latest", (error) => {
    spinner.stop();
    if (error) {
      console.error(chalk.red("更新失败:" + error.message));
    } else {
      console.log(chalk.green("更新成功"));
    }
  });
}
