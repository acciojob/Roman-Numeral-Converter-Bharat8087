function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let romanNumeral = '';

    for (let key in obj) {
        while (num >= obj[key][1]) {
            romanNumeral += obj[key][0];
            num -= obj[key][1];
        }
    }

    return romanNumeral;
}

// Test cases
console.log(convertToRoman(14));   
console.log(convertToRoman(798));  

// Test with input 36
console.log(convertToRoman(36));

module.exports = convertToRoman;
