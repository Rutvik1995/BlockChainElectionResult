App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load pets.
    return App.initWeb3();
  },

  initWeb3: async function() {
    console.log(web3);
    /*
     * Replace me...
     */
    if(typeof web3 !=='undefined'){
      
    //   App.web3Provider =web3.currentProvider;
    //   web3 = new Web3(web3.currentProvider);
    //   web3.eth.getAccounts().then(console.log);
     
    // }
    // else{
      App.web3Provider= new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
      console.log(web3.eth.accounts);
 
    }

    return App.initContract();
  },

  initContract: function() {
    /*
     * Replace me...
     */

     $.getJSON("Election.json",function(election){
        App.contracts.Election = TruffleContract(election);
        App.contracts.Election.setProvider(App.web3Provider);
        console.log( App.contracts);
        console.log(App.contracts.Election);
        return App.render();
     })
  },

render:function(){
  var electionInstance;
  var loader = $("#loader");
  var content = $("#content");
 // loader.show();
 // content.hide();
 



web3.eth.getAccounts(function(err,account){
  console.log(account);
  if(err===null){
    App.account = account[0];
    console.log(App.account[0]);
    $("#accountAddress").html("Your account: "+account[0]);
  }
});

App.contracts.Election.deployed().then(function(instance){
  electionInstance=instance;
  return electionInstance.candidateCount();
}).then(function(candidateCount){
  var candidateResults = $("#candidateResults");
  candidateResults.empty();

for(var i=1;i<=candidateCount;i++){
  console.log("in loops");
  electionInstance.candidate(i).then(function(candidate){
    console.log("in loops");
    var id = candidate[0];
    var name = candidate[1];
    var voteCount = candidate[2];

    var candidateTemplate ="<tr><th>"+ id +"</th><td>"+ name +"</td><td>"+ voteCount +"</td></tr>";
    candidateResults.append(candidateTemplate);
  })

  console.log("after function");
}
//loader.hide();
//loader.show();

}).catch(function(error){
  console.log(error);
});



},


  // bindEvents: function() {
  //   $(document).on('click', '.btn-adopt', App.handleAdopt);
  // },

  // markAdopted: function(adopters, account) {
  //   /*
  //    * Replace me...
  //    */
  // },

  // handleAdopt: function(event) {
  //   event.preventDefault();

  //   var petId = parseInt($(event.target).data('id'));

  //   /*
  //    * Replace me...
  //    */
  // }
 
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
