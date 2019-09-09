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

     mapping(address=>bool) public voters;

    //Store candidate count
     uint public candidateCount;

     function addCandidate(string memory _name) private {
         candidateCount++;
         candidate[candidateCount]= Candidate(candidateCount,_name,0);
     }

  
    function vote (uint  _candidateId) public {

        uint checkId = _candidateId;

        require( (voters[msg.sender]==false)  && (checkId<=candidateCount) && (checkId>0));



        if(voters[msg.sender]!=true ){
            // record the voter has voted 
            voters[msg.sender]=true;

            //update Cadidaye vote count
           uint countAdd= candidate[_candidateId].voteCount;
            countAdd++;
            candidate[_candidateId].voteCount=countAdd++;

        }
        else{

        }


       
    }



    //Constructor
    constructor() public{
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }
}