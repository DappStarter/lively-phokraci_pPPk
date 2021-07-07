require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name return payment uniform include arch surge gesture'; 
let testAccounts = [
"0xac64c2b5accd326c91ca3ed3ce4f24e601648e578223c76618f7fd06fb9b2ea2",
"0x4f838cee51b591ff11a827809804c4a3f05f67a5fa3374656003d187e7f60581",
"0x26ec4bb326cdf845417876775117ef10a04f685a2e6fd89006e80909c8f74b74",
"0x0e7d8d6f0ff059774f8272b4d8896acc34adfa5544524a64c66a122f655293d2",
"0x50915ddcf9ad87691d64446470acd8f387fd8a5f660043b88e6e9bed484308a8",
"0x2ef0778654bfec5433f89746157a312e6cc284a7b97a4e59ccd23a12c7d1e918",
"0xb688cc9d4045e105cacb9858879ea38629e0c4a7373a31f28d54ca4d9abe110e",
"0x972ff984d34fcb21c5f1bc451911d7a8e82a2417ccfface1ce586d2f9b7ec197",
"0xb39c9cc4c9f9a32b6fb8b11ecde9244d13c3aa1e2ea76885aa0aab4036efd58d",
"0xfa01db96ceb106cbb8b6d657297daf169282aff79f37cfa48e958433e6c345db"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

