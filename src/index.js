module.exports = function toReadable(number) {

    let first_10 = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    let dozens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    let hundredths = {
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred',
    }

    if (number.toString().length == 1) return (first_10[number])

    if (number.toString().length == 2) {
        if (number.toString().substring(1) == 0) return dozens[number];
        if (number <= 20) return (dozens[number])
        if (number > 20) return (`${dozens[parseInt(number.toString().substring(0, 1) + '0')]} ${first_10[parseInt(number.toString().substring(1))]}`)
    }

    if (number.toString().length == 3) {
        if (parseInt(number.toString().substring(1, number.length)) == 0) { return hundredths[number] }
        if (number <= parseInt(number.toString().substring(0, 1) + '00') + 9) { return `${hundredths[parseInt(number.toString().substring(0, 1) + '00')]} ${first_10[parseInt(number.toString().substring(2))]}`; }
        if (number <= parseInt(number.toString().substring(0, 1) + '00') + 20 && number >= parseInt(number.toString().substring(0, 1) + '00') + 10) { return `${hundredths[parseInt(number.toString().substring(0, 1) + '00')]} ${dozens[parseInt(number.toString().substring(1, number.length))]}`; }
        if (number.toString().substring(2) == 0) { return `${hundredths[parseInt(number.toString().substring(0, 1) + '00')]} ${dozens[parseInt(number.toString().substring(1, number.length))]}` }
        if (number > parseInt(number.toString().substring(0, 1) + '00') + 20) { return `${hundredths[parseInt(number.toString().substring(0, 1) + '00')]} ${dozens[parseInt(number.toString().substring(1, 2) + '0')]} ${first_10[parseInt(number.toString().substring(2))]}` }
    }

}
