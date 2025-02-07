// This file implements a Substitution Cipher. It exports two functions: 
// `generateKey` which creates a random substitution key for encoding letters, 
// and `encode` which takes a plaintext string and encodes it using the generated key.

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generateKey() {
    const shuffled = alphabet.split('').sort(() => 0.5 - Math.random()).join('');
    const key = {};
    for (let i = 0; i < alphabet.length; i++) {
        key[alphabet[i]] = shuffled[i];
    }
    return key;
}

function encode(plaintext, key) {
    return plaintext.toUpperCase().split('').map(char => {
        return key[char] || char; // Return the encoded character or the original if not in key
    }).join('');
}

export { generateKey, encode };