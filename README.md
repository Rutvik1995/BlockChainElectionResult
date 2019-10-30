# Project Detail


<h2>truffle unbox pet-shop</h2> <br>
<b>This command generate boiler plate file and directory for truffle project</b>

<h2>truffle migrate </h2><br>
To migrate the contract to blockchain<br>
TO migrate the contract and deployed on blockchain<br>
Make sure the ganache is open which is our local blockchain <br>


<h2>truffle console</h2><br>
To go into truffle console mode<br>

<h2>call function to check variable inside the contracts</h2><br>
Election.deployed().then(function(instance){app = instance;}) 

app.candidate();
-----------------
'Candidate 1'


<br>
<h2><b>truffle migrate --reset</b></h2>
Blockchain is immutable (unchangeable) so we have to --reset everythin <br>
It is like dropping all the table in database and starting from beginning <br>

call function get candidate at 1<br>
app.candidate(1).then( function(c){candidate =c;}) <br>
undefined
truffle(development)> candidate<br>
Result {
  '0': <BN: 1>,
  '1': 'Candidate 1',

  '2': <BN: 0>,
  id: <BN: 1>,
  name: 'Candidate 1',
  voteCount: <BN: 0> }
truffle(development)> candidate[0]<br>
<BN: 1>
truffle(development)> candidate[1]<br>
'Candidate 1'
truffle(development)> candidate[2]<br>
<BN: 0>
truffle(development)> candidate[2].toNumber()<br>
0
truffle(development)> 

<br>
See accounts in w3 command<br>
web3.eth.getAccounts()

<br>
<h4>lite-server</h4><br>
npm run dev<br>
This command run lite serve and open browser <br>


<br>
<h4>Command to get all accounts</h4><br>
web3.eth.getAccounts().then(function(accounts){acc=accounts;})acc




web3.eth.getAccounts().then(function(allAcc){acc=allAcc;}).then(function(acc){selected=acc[0];})
