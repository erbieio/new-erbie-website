import {dealType} from '../assets/json/deal.json'
// tx type
export function txInputToType(hexCharCodeStr: string) {
    if (hexCharCodeStr) {
        // //console.log(hexCharCodeStr)
        const trimedStr = hexCharCodeStr.trim();
        if (trimedStr === '0x') {
            return 'Transfer';
        }
        const rawStr =
            trimedStr.substr(0, 2).toLowerCase() === '0x'
                ? trimedStr.substr(2)
                : trimedStr;
                const len = rawStr.length;
        if (len % 2 !== 0) {
            // alert("Illegal Format ASCII Code!");
            return '';
        }
        let curCharCode = 0;
        const resultStr = [];
        for (let i = 0; i < len; i = i + 2) {
            curCharCode = parseInt(rawStr.substr(i, 2), 16); // ASCII Code Value
            resultStr.push(String.fromCharCode(curCharCode));
        }
        const StrTran = resultStr.join('');
        if (StrTran.substring(0, StrTran.indexOf(':')) !== 'erbie') {
            return 'Contract Based Transaction';
        } else {
            const obj = JSON.parse(StrTran.substring(6));
            dealType.forEach((item) => {
                obj.type === item.type ? (obj.name = item.name) : '';
            });
            return obj.name;
        }
    }
}

const DREBlockReward = 0.5436
const ReduceRewardPeriod = 365 * 720 * 24 * 7
const DeflationRate = 0.85
// calc erb rewards
export function calcERBRewardsTimes(blocknumber: number, _DREBlockReward?: number){
    const times = blocknumber / ReduceRewardPeriod
	const rewardratio = DeflationRate**times
	const u = rewardratio * (_DREBlockReward || DREBlockReward)
	return u
}