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
    const qty = expr.length / 10;
    let symbol;
    let arr = [];

    for (let i = 1, j = 0; i <= qty; i++, j+=10) {
        symbol = expr.substring( 0 + j, 10 + j); // 10, 19

        const morseLetter = symbol.replaceAll('00', '').replaceAll('10', '.').replaceAll('11', '-')

        for (const [key, value] of Object.entries(MORSE_TABLE)) {
            if (key === morseLetter) {
                
                arr.push(value)
            }
        }

        if (morseLetter === '**********') {
            arr.push(' ')
        }        
    }

    return arr.join('')
}

module.exports = {
    decode
}