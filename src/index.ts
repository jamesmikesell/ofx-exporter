import FileSaver from "file-saver";
import { SynchronyParser } from "./synchrony-parser";

class Main {
  run(): void {
    let parser = new SynchronyParser();
    let ofx = parser.parseToOfx(document);

    var blob = new Blob([ofx], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "statement.ofx");
  }

}

new Main().run()
