import logSymbols from "log-symbols";

const log = (
  message: string,
  type: "success" | "error" | "warning" | "info"
) => {
  console.log(logSymbols[type], message);
};

export default log;
