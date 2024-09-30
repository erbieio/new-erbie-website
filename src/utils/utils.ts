import { dealType } from "../assets/json/deal.json";
import { ERBIE_COIN_FIXED_LENGTH } from "../const/coin";
// tx type
export function txInputToType(hexCharCodeStr: string) {
  if (hexCharCodeStr) {
    // //console.log(hexCharCodeStr)
    const trimedStr = hexCharCodeStr.trim();
    if (trimedStr === "0x") {
      return "Transfer";
    }
    const rawStr =
      trimedStr.substr(0, 2).toLowerCase() === "0x"
        ? trimedStr.substr(2)
        : trimedStr;
    const len = rawStr.length;
    if (len % 2 !== 0) {
      // alert("Illegal Format ASCII Code!");
      return "";
    }
    let curCharCode = 0;
    const resultStr = [];
    for (let i = 0; i < len; i = i + 2) {
      curCharCode = parseInt(rawStr.substr(i, 2), 16); // ASCII Code Value
      resultStr.push(String.fromCharCode(curCharCode));
    }
    const StrTran = resultStr.join("");
    if (StrTran.substring(0, StrTran.indexOf(":")) !== "erbie") {
      return "Contract Based Transaction";
    } else {
      const obj = JSON.parse(StrTran.substring(6));
      dealType.forEach((item) => {
        obj.type === item.type ? (obj.name = item.name) : "";
      });
      return obj.name;
    }
  }
}

const DREBlockReward = 0.5436;
const ReduceRewardPeriod = 365 * 720 * 24 * 7;
const DeflationRate = 0.85;
// calc erb rewards
export function calcERBRewardsTimes(
  blocknumber: number,
  _DREBlockReward?: number
) {
  const times = blocknumber / ReduceRewardPeriod;
  const rewardratio = DeflationRate ** times;
  const u = rewardratio * (_DREBlockReward || DREBlockReward);
  return u;
}

// 保留位数
export function toFixed(
  val: string | number,
  FIXED_LEN = ERBIE_COIN_FIXED_LENGTH
) {
  // if (!val) return 0;
  // let muVal = "1";
  // for (let i = 0; i < FIXED_LEN; i++) {
  //   muVal += "0";
  // }
  // const intMuVal = Number(muVal);
  // return Math.floor(Number(val) * intMuVal) / intMuVal;
  // 检查val是否为字符串
  // if (typeof val !== "string") {
  //   throw new TypeError("val参数必须是字符串类型");
  // }
  const newVal = String(val)

  // 检查len是否为正整数
  if (
    typeof FIXED_LEN !== "number" ||
    FIXED_LEN < 0 ||
    !Number.isInteger(FIXED_LEN)
  ) {
    throw new TypeError("len参数必须是正整数");
  }

  // 找到小数点的位置
  const dotIndex = newVal.indexOf(".");

  // 如果没有小数点，则直接返回原字符串
  if (dotIndex === -1) {
    return val;
  }

  // 获取小数点后的字符串
  const decimalPart = newVal.substring(dotIndex + 1);

  // 如果小数点后的位数没有超过len，则直接返回原字符串
  if (decimalPart.length <= FIXED_LEN) {
    return newVal;
  }

  // 如果超过了，则截取小数点后len位，并拼接回原字符串
  const integerPart = newVal.substring(0, dotIndex + 1); // 整数部分加上小数点
  const truncatedDecimalPart = decimalPart.substring(0, FIXED_LEN); // 截取后的小数部分
  return integerPart + truncatedDecimalPart;
}
