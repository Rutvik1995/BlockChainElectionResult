App = {
  web3Provider: null,
  contracts: {},
  account:'0x0',

  init: async function() {
    // Load pets.
    return App.initWeb3();
  },

  initWeb3: async function() {
    console.log(web3);
    /*
     * Replace me...
     */
    console.log(web3.isConnected());
    // if(typeof web3 !=='undefined'){
      
    //   App.web3Provider =web3.currentProvider;
    //   web3 = new Web3(web3.currentProvider);
    //  console.log(web3.eth.blockNumber);
    //  console.log(web3.eth.accounts);
 
    // }
    // else{
      App.web3Provider= new Web3.providers.HttpProvider('http://127.0.0.1:7545');
      web3 = new Web3(App.web3Provider);
      console.log(web3.eth.accounts);
 
   // }

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
        //App.listenForEvents();
        return App.render();
     })
  },

render:function(){
  var electionInstance;
  var loader = $("#loader");
  var content = $("#content");
 // loader.show();
 // content.hide();
 



// web3.eth.getAccounts(function(err,account){
//   console.log(account);
//   if(err===null){
//     App.account = account[0];
//     console.log(App.account[0]);
//     $("#accountAddress").html("Your account: "+account[0]);
//   }
// });

web3.eth.getCoinbase(function(err,account){
  if(err==null){
    App.account=account;
    $("#accountAddress").html("Your account: "+account);
  }
})



App.contracts.Election.deployed().then(function(instance){
  electionInstance=instance;
  return electionInstance.candidateCount();
}).then(function(candidateCount){
  var candidateResults = $("#candidateResults");
  candidateResults.empty();

  var candidateList=[]; 
  var count=0;
  var selectCandidateUI = document.getElementById("selectCandidate");

  for(var i=1;i<=candidateCount;i++){
  //  candidateList[count]=candidate[1];
    //console.log(candidateList[count]);
    //count++;

    electionInstance.candidate(i).then(function(candidate){
      var opt = candidate[1];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      selectCandidateUI.appendChild(el);
    })
  }


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
  castVote: function(){
  alert("in cast vote");
  //var selectCandidate = document.getElementById("selectCandidate");
  selectTags = document.getElementById("selectCandidate");
  console.log(selectTags.selectedIndex);
  
    

  }
};





$(function() {
  $(window).load(function() {
    App.init();
  });
});
