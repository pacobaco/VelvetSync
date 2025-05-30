import CryptoJS from 'crypto-js';

const SECRET = '0123456789abcdef0123456789abcdef';

export function encryptSignal(message) {
  const iv = CryptoJS.lib.WordArray.random(16);
  const encrypted = CryptoJS.AES.encrypt(message, CryptoJS.enc.Hex.parse(SECRET), {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  return {
    encryptedData: encrypted.ciphertext.toString(CryptoJS.enc.Hex),
    iv: iv.toString(CryptoJS.enc.Hex)
  };
}