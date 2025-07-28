import { Command } from "commander";
import { version } from "../package.json";
import create from "./command/create";
import update from "./command/update";

const program = new Command("wve-cli");
program.version(version, "-v, --version");

// 创建项目
program
  .command("create")
  .description("创建项目")
  .argument("[project-name]", "项目名称") // [project-name] 表示可选参数  <project-name> 表示必选参数
  .action((projectName) => {
    create(projectName);
  });

// 更新wve-cli
program
  .command("update")
  .description("更新wve-cli")
  .action(() => {
    update();
  });

program.parse(); // 解析命令行参数
