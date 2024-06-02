import { AppVersion } from "./app-version";
import { fakeDoc } from "./fake-document";
import { SynchronyParser } from "./synchrony-parser";
import * as fs from 'fs';

class Main {
  run(): void {
    console.log("*** Running test mode")
    console.log("App version: " + AppVersion.VERSION)
    
    let parser = new SynchronyParser();
    let ofx = parser.parseToOfx(fakeDoc)
    
    console.log("writing statement.ofx")
    fs.writeFileSync("statement.ofx", ofx);
  }
}

new Main().run();
