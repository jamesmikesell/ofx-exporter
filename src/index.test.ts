import { fakeDoc } from "./fake-document";
import { SynchronyParser } from "./synchrony-parser";
import * as fs from 'fs';

class Main {
  run(): void {
    console.log("*** Running test mode")

    let parser = new SynchronyParser();
    let ofx = parser.parseToOfx(fakeDoc)

    fs.writeFileSync("statement.ofx", ofx);
  }
}

new Main().run();
