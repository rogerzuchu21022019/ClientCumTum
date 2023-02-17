
import {
  logger,
  consoleTransport,
  fileAsyncTransport,
} from "react-native-logs";

const config = {
  transport: __DEV__ ? consoleTransport : fileAsyncTransport,
  severity: __DEV__ ? "debug" : "error",
  transportOptions: {
    colors: {
      info: "blue",
      warn: "green",
      error: "red",
    },
  },
};

export const LOG = logger.createLogger(config);
