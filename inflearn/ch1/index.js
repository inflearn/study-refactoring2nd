import { invoices, plays } from './origin/data';
import { statementOrigin } from './origin/statement';
import { statementHoori } from './hoori/statement';

const CHAPTER_1_INDEX = 1;
const subChapterIndex = 1;
const chapterLog = (...info) => {
  console.log(`# # # ${CHAPTER_1_INDEX}-${subChapterIndex}`);
  console.log(...info);
};

for (const invoice of invoices) {
  chapterLog(
    checkDiffrence(
      statementOrigin(invoice, plays),
      statementHoori(invoice, plays),
    ),
    new Date(),
  );
}
