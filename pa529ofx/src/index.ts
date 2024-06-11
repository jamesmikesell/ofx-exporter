import { Pa529CsvTransformer } from "./pa-529-csv-transformer";
import { OfxSecurityGenerator } from "./ofx-security-stocks";
import FileSaver from "file-saver";
import { AppVersion } from "./app-version";


console.log("App version: " + AppVersion.VERSION)


export class Pa529CsvToOfxConverter {
  static convertCsvToOfx(csv: string): void {
    let createFake = this.createFakeTransactions();
    let config = Pa529CsvTransformer.convertCsvToOfxCreationDto(csv, createFake);
    let ofx = OfxSecurityGenerator.generateOfx(config);
    var blob = new Blob([ofx], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "statement.ofx");
  }

  private static createFakeTransactions(): boolean {
    return (document.getElementById('fake-transactions') as HTMLInputElement).checked;
  }
}



const dropArea = document.getElementById('drop-area');

dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.style.backgroundColor = '#e0e0e0';
});


dropArea.addEventListener('dragleave', () => {
  dropArea.style.backgroundColor = '#f9f9f9';
});


dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dropArea.style.backgroundColor = '#f9f9f9';

  const files = event.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    console.log(`File name: ${file.name}`);
    const reader = new FileReader();
    reader.onload = function (e) {
      const content = e.target.result;
      Pa529CsvToOfxConverter.convertCsvToOfx(content.toString());
    };

    reader.onerror = function (e) {
      console.error("An error occurred while reading the file", e);
    };

    reader.readAsText(file);
  }
});