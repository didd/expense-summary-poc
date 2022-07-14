import NextApp from "next/app";
import { App } from "src/views/App";

export default class MainApp extends NextApp {
  render() {
    return <App {...this.props} />;
  }
}
