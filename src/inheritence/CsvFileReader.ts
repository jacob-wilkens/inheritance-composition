import fs from "fs/promises";

export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  async read(): Promise<void> {
    this.data = (
      await fs.readFile(this.filename, {
        encoding: "utf-8",
      })
    )
      .split("\n")
      .map((row: string) => row.split(","))
      .map(this.mapRow);
  }
}
