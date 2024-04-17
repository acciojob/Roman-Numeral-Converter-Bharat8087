function convertToRoman(num) {
    const obj = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let romanNumeral = '';

    for (let i = 0; i < obj.length; i++) {
        while (num >= obj[i][1]) {
            romanNumeral += obj[i][0];
            num -= obj[i][1];
        }
    }

    return romanNumeral;
}

console.log(convertToRoman(14));   
console.log(convertToRoman(798));  
console.log(convertToRoman(36));   

module.exports = convertToRoman;
