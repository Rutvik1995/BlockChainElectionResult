pragma solidity ^0.5.0;
contract Election {

   
    
    //Fetch the candidate
    //Store candidate count

    //string public candidate;
     //Model the candidate
        struct Candidate{
         uint id;
         string name;
         uint voteCount;   
    }
    //Store the candidate
     mapping(uint=>Candidate) public candidate;

    //Store candidate count
     uint public candidateCount;

     function addCandidate(string memory _name) private {
         candidateCount++;
         candidate[candidateCount]= Candidate(candidateCount,_name,0);
     }

  

    //Constructor
    constructor() public{
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }
}