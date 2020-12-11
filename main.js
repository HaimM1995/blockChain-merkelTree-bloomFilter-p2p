const {
    Blockchain,
    Block,
    Transaction
} = require('./Blockchain4.js')

const EC = require('elliptic').ec

const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('e1809134428d3432f51d708592bcfffd6e58dd735feee50190e3a55617556178')

const myWalletAddress = myKey.getPublic('hex')

let micaCoin = new Blockchain()

const tx1 = new Transaction(myWalletAddress, 'address2', 30)
tx1.signTransaction(myKey)
micaCoin.addTransaction(tx1)
micaCoin.miningPendingTransaction(myWalletAddress)

const tx2 = new Transaction(myWalletAddress, 'address1', 20)
tx2.signTransaction(myKey)
micaCoin.addTransaction(tx2)

micaCoin.miningPendingTransaction(myWalletAddress)

console.log('\nBalance of micaWallet: ', micaCoin.getBalanceOfAddress(myWalletAddress));
//console.log(JSON.stringify(micaCoin, null, 4));