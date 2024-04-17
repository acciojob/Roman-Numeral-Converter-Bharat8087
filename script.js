function convertToRoman(num) {
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let romanNumeral = '';

    for (let i = 0; i < romanSymbols.length; i++) {
        while (num >= romanSymbols[i][1]) {
            romanNumeral += romanSymbols[i][0];
            num -= romanSymbols[i][1];
        }
    }

    return romanNumeral;
}

console.log(convertToRoman(14)); 
console.log(convertToRoman(798)); 
console.log(convertToRoman(36)); 

module.exports = convertToRoman;
