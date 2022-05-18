const data = require('./data');

/** 1 - Retorne e exiba um array com as informações da primeira e da segunda banda utilizando destructuring
*/
const getBandsInformation = () => {
    const array = [data.bands[0], data.bands[1]];
    return array;
};

module.exports = getBandsInformation;
