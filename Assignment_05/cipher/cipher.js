document.getElementById('encodeButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value.toLowerCase();
    const encodedText = document.getElementById('encodedText');

    const key = generateRandomKey();
    const encryptedText = substitutionCipher(textInput, key);

    encodedText.textContent = `Encoded Text: ${encryptedText}`;
});

function generateRandomKey() {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join('');
}

function substitutionCipher(text, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const mapping = {};
    for (let i = 0; i < alphabet.length; i++) {
        mapping[alphabet[i]] = key[i];
    }

    let encryptedText = '';
    for (const char of text) {
        encryptedText += mapping[char] || char;
    }

    return encryptedText;
}