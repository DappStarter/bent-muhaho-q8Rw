require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food struggle reflect mad assume coral light army genre'; 
let testAccounts = [
"0x4b804cca45b20e1024bb6bb774af445ca34a2cee4a4e52e70dc17908c1261c4a",
"0x6b22c7eb8e16db762af69ee3d8395787a94c40ef8385421f8b96804a3ee44efb",
"0xbb0753bd5a8de76c62b79bc138d82501d66ba6497725c557a1a4d77d0c2d0306",
"0x4b0e2c610b60bffd830e90f69c4372408b94c6ddd72766ca49a463d171a20fdf",
"0xf5b9cc892165fdd4e918de6fa889fc40ec3e312f35f7e053e6343cb4875437d4",
"0xdec615fbc66144a9c913450e33fbe3b33bf47b83e376aa655622d6a01550ae46",
"0xc46c5d9103280a3c6dedccefe6751c3956a668791826e60ecb9e431e1ded1f05",
"0x886afc04a2e6669fee064791024c88f2261ae6da5f2aa09279a151d8b3ad6159",
"0xf29b3cfb1b8cda4510d618f2db1f31e860d74f941cfaa95cfc25ac772fbd7b9c",
"0x291f3aee9308c7a570a1ce6fa51792412cda4922f7b118ec8659a6905bba9221"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


