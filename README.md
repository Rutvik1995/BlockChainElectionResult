# Project Detail


<h2>truffle unbox pet-shop</h2> <br>
<b>This command generate boiler plate file and diretory for truffle project</b>

<h2>truffle migrate </h2><br>
To migrate the contract<br>
TO migrate the contract and deployed on blockchain<br>
Make sure the ganache is open which is our local block chain <br>


<h2>truffle console</h2><br>
To go into console mode<br>

<h2>call function to check variable inside the contracts</h2><br>
Election.deployed().then(
    function(instance){
        app = instance;
    }
) 

<br>
<h2><b>truffle migrate --reset</b></h2>
Blockchain is immutable (unchangable) so we --reset everytime<br>
It is like dropping all the table in database and starting from begining <br>

call function get candidate at 1
app.candidate(1).then( function(c){candidate =c;})
undefined
truffle(development)> candidate
Result {
  '0': <BN: 1>,
  '1': 'Candidate 1',
  '2': <BN: 0>,
  id: <BN: 1>,
  name: 'Candidate 1',
  voteCount: <BN: 0> }
truffle(development)> candidate[0]
<BN: 1>
truffle(development)> candidate[1]
'Candidate 1'
truffle(development)> candidate[2]
<BN: 0>
truffle(development)> candidate[2].toNumber()
0
truffle(development)> 