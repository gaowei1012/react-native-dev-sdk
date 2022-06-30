/*
 * @Author: mingwei
 * @Date: 2022-06-30 15:28:56
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-30 15:40:39
 * @FilePath: /react-native-dev-sdk/src/tools/utils/shadow/tools.ts
 * @Description:
 */

export function colorRgb(color) {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  let sColor = color.toLowerCase();
  let rgb = [];
  if (sColor && reg.test(sColor)) {
    if (sColor.length == 4) {
      let sColoeNew = '#';
      for (let i = 1; i < 4; i++) {
        sColoeNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColoeNew;
    }
    for (let i = 1; i < 7; i += 2) {
      rgb.push(parseInt('0x' + sColor.slice(i, i + 2)));
    }
    return rgb;
  } else {
    throw Error('Invalid color');
  }
}
