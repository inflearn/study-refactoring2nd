/**
 * data.key1, data.key2,,, 패턴을
 * const { key1, key2,,, } = data; 패턴으로 변경.
 *
 * 1. 함수의 파라미터로 전달된 invoice -> { customer, performances }
 * 2. for 문의 perf -> { playID, audience }
 * 3. for 문 내부의 첫번째 변수 play -> { type, name }
 *
 * 이유1: data 객체에서 사용되는 키값들이 무엇인지 한눈에 파악할 수 있다.
 * 이유2: 각 키값들이 어디에 어떻게 사용되는지 추적하기 쉽다.
 * 이유3: data 포맷 변경시(key-val 추가/삭제 및 keyName 수정 등) 위 2가지(이유1, 이유2) 덕분에 버그 발생율을 줄일 수 있다.
 * */
export const statement_v1 = (/**1**/{ customer, performances }, plays) => {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${/**1**/customer})\n`;
  const format = new Intl.NumberFormat(
    'en-US',
    { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format;

  for (let /**2**/{ playID, audience } of /**1**/performances) {
    const /**3**/{ type, name } = plays[/**2**/playID];
    let thisAmount = 0;

    switch (/**3**/type) {
      case 'tragedy': // 비극
        thisAmount = 40000;
        if (/**2**/audience > 30) {
          thisAmount += 1000 * (/**2**/audience - 30);
        }
        break;
      case 'comedy': // 희극
        thisAmount = 30000;
        if (/**2**/audience > 20) {
          thisAmount += 10000 + 500 * (/**2**/audience - 20);
        }
        thisAmount += 300 * /**2**/audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${/**3**/type}`);
    }
    // 포인트 적립
    volumeCredits += Math.max(/**2**/audience - 30, 0);
    // 희극은 관객 5명마다 추가 포인트
    if ('comedy' === /**3**/type) volumeCredits += Math.floor(/**2**/audience / 5);

    // 청구 내역 출력
    result += `  ${/**3**/name}: ${format(thisAmount / 100)} (${/**2**/audience}석)\n`;
    totalAmount += thisAmount;
  }
  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
};
