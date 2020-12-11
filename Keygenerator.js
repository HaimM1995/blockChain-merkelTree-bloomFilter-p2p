const EC = require('elliptic').ec

const ec = new EC('secp256k1')

const key = ec.genKeyPair()

const publicKey = key.getPublic('hex')
const privateKey = key.getPrivate('hex')

console.log();
console.log('Your public key ,free shareable \n', publicKey);

console.log();
console.log('Your private key ,keep it secret \n', privateKey);