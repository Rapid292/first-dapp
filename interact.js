// Import the Web3 library
import Web3 from 'web3';

// Connect to the local Ganache instance
const web3 = new Web3('http://localhost:7545');

// Define the ABI for the SimpleStorage contract
const contractABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "data",
          "type": "uint256"
        }
      ],
      "name": "DataStored",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "x",
          "type": "uint256"
        }
      ],
      "name": "set",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];

const contractAddress = '0x117584D9641BD03277C4e30abC7aD99E4f17Fb01';

// Create a new contract instance with the ABI and address
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function interact() {
  // Get the list of accounts from the local node
  const accounts = await web3.eth.getAccounts();

  // Set data on the contract
  await contract.methods.set(123).send({ from: accounts[0] });

  // Get data from the contract
  const result = await contract.methods.get().call();
  console.log(result); // Should print 123
}

// Run the interact function
interact();
