import * as fs from 'fs';


class VanguardFormatter {

  /** this takes an OFX from vanguard and adds missing </..> tags
   * so that the saved format is ~valid~ xml... or at least
   * valid enough to format
   */
  static formatVanguard(): void {
    let ofx = fs.readFileSync("vanguard.ofx", 'utf8');
    ofx = this.removeBeforeFirstAngleBracket(ofx);
    ofx = ofx.replace(/</g, "\n<")
    let split = ofx.split("\n")
    split = split.map(singleLine => {
      return this.appendClosingTagIfNeeded(singleLine);
    })

    let joined = split.join("\n");
    let header = `<?xml version="1.0" encoding="UTF-8"?>\n<?OFX OFXHEADER="200" VERSION="220" SECURITY="NONE" OLDFILEUID="NONE" NEWFILEUID="NONE"?>`
    joined = header + joined;
    console.log(joined)
    fs.writeFileSync("vanguard-formatted.xml", joined);
  }

  private static removeBeforeFirstAngleBracket(input: string): string {
    const index = input.indexOf('<');
    if (index === -1) {
      // If there is no "<" in the string, return the original string
      return input;
    }
    // Return the substring starting from the "<" character
    return input.substring(index);
  }


  private static appendClosingTagIfNeeded(text: string): string {
    // Check if the last character is '>'
    if (text.charAt(text.length - 1) !== '>') {
      // Find the last opening tag
      const lastOpenTagMatch = text.match(/<([\w.]+)>[^<]*$/);
      if (lastOpenTagMatch) {
        const tagName = lastOpenTagMatch[1];
        return text + `</${tagName}>`;
      }
    }
    // Return the original text if it already ends with '>'
    return text;
  }
}


VanguardFormatter.formatVanguard();