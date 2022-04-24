const Web3 = require('web3');
const { abi } = require('./compile');


/*
   -- Define Provider & Variables --
*/
// Provider
const providerRPC = {
    development: 'http://localhost:9933',
    moonbase: 'https://rpc.api.moonbase.moonbeam.network',
 };
 const web3 = new Web3(providerRPC.moonbase); //Change to correct network
 
 // Variables
 const account_from = {
    privateKey: '30058d27558faf9403773d140e0ea1ff85917176a3e8edea79bf93008957b688',
 };
 const contractAddress = '0xD8Ae3edcD5F81406e076A2BFA4b379E36Cbb939B';

 //Create contract instance
 const incrementer = new web3.eth.Contract(abi, contractAddress);

 //build reset Tx
 const resetTx = incrementer.methods.reset();

 const reset = async () => {
     console.log(
         `calling the reset function in the contract at address ${contractAddress}`
     );

     //sign Tx with PK
     const createTransaction = await web3.eth.accounts.signTransaction(
         {
             to: contractAddress,
             data: resetTx.encodeABI(),
             gas: await resetTx.estimateGas(),
         },
         account_from.privateKey
     );

     //send Tx and wait for receipt
     const createReceipt = await web3.eth.sendSignedTransaction(
         createTransaction.rawTransaction
     );

     console.log(
         `Tx successful with hash: ${createReceipt.transactionHash}`
     );
 };

 reset();

