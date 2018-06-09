var Web3 = require('web3');
var solc = require('solc');
var fs = require('fs');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var accounts_list = web3.eth.accounts;
var code = fs.readFileSync('Voting.sol').toString();
var compiledCode = solc.compile(code);
var abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
var VotingContract = web3.eth.contract(abiDefinition)
var byteCode = compiledCode.contracts[':Voting'].bytecode

VotingContract.new(['Itachi','Luffy','Midoriya'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000}, function (err, deployedContract) {
    if (deployedContract.address) {
        // use deployedContract here
        var deployedContractAddress = deployedContract.address;
        var contractInstance = VotingContract.at(deployedContract.address);
        console.log(`Address: ${contractInstance.address}`);
    }
});

// contractInstance.voteForCandidate('Itachi', {from: web3.eth.accounts[0]}) // function to vote for Itachi
// contractInstance.totalVotesFor.call('Itachi').toLocaleString() // function to return Itachi's votes
