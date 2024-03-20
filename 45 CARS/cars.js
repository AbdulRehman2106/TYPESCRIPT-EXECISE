"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carinfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carinfo;
}
let answer = storeCarInfo('Honda', 'Civic', { color: 'black' }, { features: ['Navigation', 'Power Window'] });
console.log(answer);
