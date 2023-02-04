import fs from "fs/promises";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  async read(): Promise<void> {
    this.data = (
      await fs.readFile(this.filename, {
        encoding: "utf-8",
      })
    )
      .split("\n")
      .map((row: string) => row.split(","));
  }
}
