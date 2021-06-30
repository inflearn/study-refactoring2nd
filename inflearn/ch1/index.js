import { invoices, plays } from './0rigin/data';
import { statementOrigin } from './0rigin/statement';
import { statementHoori } from './hoori/statement.js';
import { statementPapico } from './papico';

const ch_i = 1;
let i = 1;
const ch1Log = (...as) => {
  log('# # #', ch_i, `-`, i++);
  log(...as);
};


for (let invoice of invoices) {
  ch1Log(
    check(
      statementOrigin(invoice, plays),
      statementHoori(invoice, plays),
      statementPapico(invoice, plays),
    ),
    new Date);
}
