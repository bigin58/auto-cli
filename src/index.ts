import { Command } from "commander";
import { version } from "../package.json";
import create from "./command/create";

const program = new Command("auto-cli");
program.version(version, "-v, --version");

program
  .command("create")
  .description("创建项目")
  .argument("[project-name]", "项目名称") // [project-name] 表示可选参数  <project-name> 表示必选参数
  .action((projectName) => {
    create(projectName);
  });

program.parse(); // 解析命令行参数
