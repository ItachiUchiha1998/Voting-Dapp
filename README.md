# Voting-Dapp
A simple decentralised application to allow secure and anonymous voting of candidates via Ethereum Smart Contracts

# Setup
1) Clone the Repository
2) open it in the terminal
3) Install all required modules using command: `npm install`
4) You can setup a local blockchain server using ganache-cli with command: 
  `./node_modules/.bin/ganache-cli`<br>
    Do not close this instance.
5) Now open another terminal and input `node server`
    this will return the address at which your blockchain has been deployed
6) Copy the address returned and paste in `index.js` file
    at `contractInstance = VotingContract.at('BLOCKCHAIN_ADDRESS');`

7) Now open `index.html` to use the voting app

