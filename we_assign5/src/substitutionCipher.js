function generateRandomKey() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let key = alphabet.split('');
    for (let i = key.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [key[i], key[j]] = [key[j], key[i]];
    }
    return key.join('');
}

function createCipherMap(key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const cipherMap = {};
    for (let i = 0; i < alphabet.length; i++) {
        cipherMap[alphabet[i]] = key[i];
    }
    return cipherMap;
}

function encodeMessage(message, cipherMap) {
    return message.toUpperCase().split('').map(char => {
        return cipherMap[char] || char;
    }).join('');
}

const key = generateRandomKey();
const cipherMap = createCipherMap(key);

console.log("Generated Key: ", key);

const message = "HELLO WORLD";
const encodedMessage = encodeMessage(message, cipherMap);

console.log("Original Message: ", message);
console.log("Encoded Message: ", encodedMessage);