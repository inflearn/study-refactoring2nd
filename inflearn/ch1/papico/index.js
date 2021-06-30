const usd = new Intl.NumberFormat(
  'en-US',
  { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format;


function amountFor(aPerformance, play) {
  let result = 0;

  switch (play.type) {
    case 'tragedy': // 비극
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case 'comedy': // 희극
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }

  return result;
}

export const statementPapico = (invoice, plays) => {
  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    const play = playFor(perf);
    let thisAmount = amountFor(perf, play);
    // 포인트 적립
    volumeCredits += Math.max(perf.audience - 30, 0);
    // 희극은 관객 5명마다 추가 포인트
    if ('comedy' === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // 청구 내역 출력
    result += `  ${play.name}: ${usd(thisAmount / 100)} (${perf.audience}석)\n`;
    totalAmount += thisAmount;
  }
  result += `총액: ${usd(totalAmount/100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
};
