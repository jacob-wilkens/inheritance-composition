import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

//async immediately invoked function expression
(async () => {
  const reader = MatchReader.fromCsv("football.csv");
  const summary = Summary.winsAnalysisWithHtmlReport("Man United");

  const { matches } = reader;

  await reader.load();
  summary.buildAndPrintReport(matches);
})();
