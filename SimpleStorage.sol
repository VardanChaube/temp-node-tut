pragma solidity ^0.6.0;
//
contract SimpleStorage{
    //this is intialisied to zero
    uint256 public fN;
    bool b=true;
     function store (uint256 _fN) public {
         fN=_fN;
         
     }
     
     struct People{
         uint nfn;
         string name;
     }
     People[] public people;
     mapping(string => uint) public nameTofN;
     function retrieve() public view returns(uint256){
         return fN;

     }
     function addPerson(string memory _name,uint _fN)public{
         people.push(People(_fN,_name));
         nameTofN[_name]=_fN;
     }



}