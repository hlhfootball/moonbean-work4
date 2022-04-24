const Web3 = require('web3');

/*
   -- Define Provider & Variables --
*/
// Provider
const providerRPC = {
   development: 'http://localhost:9933',
   moonbase: 'https://rpc.api.moonbase.moonbeam.network',
};
const web3 = new Web3(providerRPC.moonbase); //Change to correct network

const account = {
   privateKey: '30058d27558faf9403773d140e0ea1ff85917176a3e8edea79bf93008957b688',
   address: '0x19FF9a16c574690e896717feCDc7eB0B3fE92A95',
};

/*
   -- get balance --
*/
const balance = async () => {
   console.log(
      `Attempting to get balance from ${account.address}`
   );

   var balance = web3.utils.fromWei(
      await web3.eth.getBalance(account.address),
      'ether'
   ); 

   console.log(`The balance is ${balance} ETH`);
};
balance();