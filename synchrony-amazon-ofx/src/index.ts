import FileSaver from "file-saver";
import { SynchronyParser } from "./synchrony-parser";
import { AppVersion } from "./app-version";

class Main {
  run(): void {
    console.log("App version: " + AppVersion.VERSION)
    let parser = new SynchronyParser();
    let ofx = parser.parseToOfx(document);

    var blob = new Blob([ofx], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "synchrony-credit-statement.ofx");
  }

}

new Main().run()
