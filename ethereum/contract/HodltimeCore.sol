pragma solidity ^0.4.23;

import 'browser/HodlToken.sol';
import 'browser/SafeMath.sol';


contract HodlTime {
    // Account data structure and mapping to addresses
    struct HodlTime {
        uint balance;
        uint timeLock;
        uint daysSet;
        uint timeStart;
        uint depositLock;
        uint amountEarnedFromHodl;
    }

    
    address token_address = 0x5bfdf56460cdd4cd9418b5e889d022545e2785b9;
    HodlToken hodl_token = HodlToken(token_address);

    

    mapping (address => HodlTime) private accounts;
    uint public users = 0;
    uint public minimumWeeklySavingsAmount = 10000000000000000;
    uint public minimumTimeForPayout = 30;
    
    address public creator;
    // Constructor
    constructor() public {
        creator = msg.sender;
    }
    
    function changeTokenAddress(address newTokenAddress) public {
        require(msg.sender == creator);
        token_address = newTokenAddress;
    }

    // Get the deployed contract address
    function getContractAddress() public view returns (address) {
        return this;
    }
    
    function changeMinimumAmount(uint newValue) public {
        require(msg.sender == creator);
        minimumWeeklySavingsAmount = newValue;
    }
    
    function changeMinimumTime(uint newValue) public {
        require(msg.sender == creator);
        minimumTimeForPayout = newValue;
    }

    // Get total ether balance of this contract
    function getContractBalance() public view returns (uint) {
        return this.balance;
    }

    // Get ether balance of an address
    function getBalance(address addr) public view returns (uint) {
        return accounts[addr].balance;
    }
    
    function getSenderBalance() public view returns (uint) {
        return accounts[msg.sender].balance;
    }
    
    function getAvailableFundAmount10()public view returns (uint){
        //return (accounts[this].balance)/ (users*10);
        return SafeMath.div(accounts[this].balance, SafeMath.mul(users, 10));
        
    }
    
    function getAvailableFundAmount5()public view returns (uint){
        //eturn (accounts[this].balance)/ (users*5);
        return SafeMath.div(accounts[this].balance, SafeMath.mul(users, 5));
        
    }
    
    
    
    //get balance of weakhandfund
    function getFundBalance() public view returns (uint){
        return accounts[this].balance;
    }
    
    function setHodlTime(uint time)public {
        require(time > 0);
        require(time==30 || time == 90 || time == 180 || time == 365);
        require( SafeMath.add(now, SafeMath.mul(time, 1 minutes)) > accounts[msg.sender].timeLock);
        //SafeMath.add(now, SafeMath.mul(time, 1 minutes))

        accounts[msg.sender].timeLock = SafeMath.add(now, SafeMath.mul(time, 1 minutes));
        accounts[msg.sender].daysSet = time;
        accounts[msg.sender].timeStart = now;
        users += 1;
        
    }
    
    function getDepositLock() public view returns(uint){
        return accounts[msg.sender].depositLock;
    }

    // Deposit ether to this contract and credit the sender account
    function deposit() public payable {
        require(accounts[msg.sender].timeLock > 0);
        require(accounts[msg.sender].depositLock < now);
        require(msg.value >= minimumWeeklySavingsAmount);
        
        
        //weakhand fund payout to user
        if(accounts[this].balance > 0 && accounts[msg.sender].daysSet > minimumTimeForPayout){
            if(msg.value < 100000000000000000){
                accounts[msg.sender].balance += SafeMath.div(accounts[this].balance, SafeMath.mul(users, 10));
                accounts[msg.sender].amountEarnedFromHodl += SafeMath.div(accounts[this].balance, SafeMath.mul(users, 10));
                accounts[this].balance -= SafeMath.div(accounts[this].balance, SafeMath.mul(users, 10));

                //hodl_token.transferFrom(this, msg.sender, 1000);

            } else{
                accounts[msg.sender].balance += SafeMath.div(accounts[this].balance, SafeMath.mul(users, 5));
                accounts[msg.sender].amountEarnedFromHodl += SafeMath.div(accounts[this].balance, SafeMath.mul(users, 5));
                accounts[this].balance -= SafeMath.div(accounts[this].balance, SafeMath.mul(users, 5));
            }
                
        }
            //token payout to user
        
        if(accounts[msg.sender].daysSet == 30){
            hodl_token.transferFrom(creator, msg.sender, 100);
        }
        else if(accounts[msg.sender].daysSet == 180){
            hodl_token.transferFrom(creator, msg.sender, 500);
        }
        else if(accounts[msg.sender].daysSet == 365){
            hodl_token.transferFrom(creator, msg.sender, 1000);
        }

        
        accounts[msg.sender].depositLock = (now + 7 minutes);
        accounts[msg.sender].balance += msg.value;
        
    }
    
    function getDaysSet() public view returns (uint){
        return accounts[msg.sender].daysSet;
    }
    
    // Withdraw a specified amount of ether from the sender account
    function _withdraw(uint amount) private {
        // Verify sender and contract have enough ether
        require(amount <= accounts[msg.sender].balance);
        require(amount <= this.balance);
        // Verify funds are not time-locked
        require(now >= accounts[msg.sender].timeLock);
        
        
        // Process the withdrawal
        accounts[msg.sender].balance -= (amount);
        msg.sender.transfer(amount);
        
        users -= 1;
        accounts[msg.sender].timeLock = 0;
        accounts[msg.sender].daysSet = 0;
    }

    // Withdraw all funds belonging to the sender
    //
    // Currently serving as the public method so
    // no user can make a partial withdraw
    function withdraw() public {
        _withdraw(accounts[msg.sender].balance);
    }

    // Transfer 10% to the contract and then withdraw the rest
    function earlyWithdraw() public {
        // Send 5% to the contract
        uint penalty = SafeMath.div(accounts[msg.sender].balance, 20);
        
        
        
        accounts[msg.sender].balance -= penalty;
        
        accounts[this].balance += (penalty / 2);
        creator.transfer(penalty / 2);
    
        
        // Remove the time-lock and withdraw
        accounts[msg.sender].timeLock = now;
        _withdraw(accounts[msg.sender].balance);
        
    }

    function amountEarnedFromHodl()public view returns (uint){
        return accounts[msg.sender].amountEarnedFromHodl;
    }
    

    // Get the sender's current time-lock
    function getTimeLock() public view returns (uint) {
        return accounts[msg.sender].timeLock;
    }

    

    function tokenFallback(address _sender, uint256 _value) public returns (bool) {

        require(msg.sender == token_address); //token address has to be sender

        require(_value == 50000); //value has to be desired value for voiding time contract


        //here can we void timecontract for sender
        accounts[_sender].timeLock = now;
        
        return true;
    }
    
    
    
    
}