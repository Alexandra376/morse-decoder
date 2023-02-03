const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrSymbol = [];
    let string = '';
    let num = 0;

    for (let key of expr) {
        string += key;
        num++;
        if (num === 10) {
            arrSymbol.push(string)
            string = '';
            num = 0;
        }
    }
    return arrSymbol.map(elem => {
        let symbol = '';
        if (elem === '**********') {
            symbol = ' ';
            return symbol;
        }
        for (let i = 0; i <= elem.length; i = i + 2) {
            if (elem[i] === '1' && elem[i + 1] === '1') symbol += '-';
            if (elem[i] === '1' && elem[i + 1] === '0') symbol += '.';
        }
        return symbol;
    }).map(symbol => {
        if (symbol === ' ') return ' ';
        if (symbol in MORSE_TABLE) {
            return MORSE_TABLE[symbol]
        }
    }).join('');
}


module.exports = {
    decode
}