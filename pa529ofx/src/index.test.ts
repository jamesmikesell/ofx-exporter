import * as fs from 'fs';
import { Pa529CsvTransformer } from "./pa-529-csv-transformer";
import { fakeCsv } from "./fake-csv";
import { OfxSecurityGenerator } from "./ofx-security-stocks";


class TestCsvToOfxConverter {

  static convert(): void {
    let config = Pa529CsvTransformer.convertCsvToOfxCreationDto(fakeCsv, true);
    let ofx = OfxSecurityGenerator.generateOfx(config);
    fs.writeFileSync("pa529.ofx", ofx);
  }

}

TestCsvToOfxConverter.convert();
