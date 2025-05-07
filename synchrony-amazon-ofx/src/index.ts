import FileSaver from "file-saver";
import { SynchronyParser } from "./synchrony-parser";
import { AppVersion } from "./app-version";
import { LoadingSpinner } from "./loading-spinner";

class Main {
  async run(): Promise<void> {
    console.log("App version: " + AppVersion.VERSION)

    const spinner = new LoadingSpinner();
    await spinner.show();

    let ofx: string;
    try {
      let parser = new SynchronyParser();
      ofx = parser.parseToOfx(document);
    } finally {
      await spinner.hide();
    }

    var blob = new Blob([ofx], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "synchrony-credit-statement.ofx");
  }

}

new Main().run()
