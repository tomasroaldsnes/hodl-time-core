pragma solidity ^0.4.23;


contract Accounts {
    // Account data structure and mapping to addresses
    struct Account {
        uint balance;
        uint timeLock;
        uint daysSet;
        uint timeStart;
        uint depositLock;
        uint amountEarnedFromHodl;
    }
    mapping (address => Account) private accounts;
    uint public users = 0;
    uint public minimumWeeklySavingsAmount = 10000000000000000;
    uint public minimumTimeForPayout = 30;
    
    address public creator;
    // Constructor
    constructor() public {
        creator = msg.sender;
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
        return (accounts[this].balance)/ (users*10);
        
    }
    
    function getAvailableFundAmount5()public view returns (uint){
        return (accounts[this].balance)/ (users*5);
        
    }
    
    
    
    //get balance of weakhandfund
    function getFundBalance() public view returns (uint){
        return accounts[this].balance;
    }
    
    function setHodlTime(uint time)public {
        require(time > 0);
        require(time==30 || time == 90 || time == 180 || time == 365);
        require( (now + time * 1 minutes) > accounts[msg.sender].timeLock);
        
        accounts[msg.sender].timeLock = (now + time * 1 minutes);
        accounts[msg.sender].daysSet = (time);
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
        
        
        
        if(accounts[this].balance > 0 && accounts[msg.sender].daysSet > minimumTimeForPayout){
            if(msg.value < 100000000000000000){
                accounts[msg.sender].balance += accounts[this].balance / (users*10);
                accounts[msg.sender].amountEarnedFromHodl += accounts[this].balance / (users*10);
                accounts[this].balance -= accounts[this].balance / (users*10);
            } else{
                accounts[msg.sender].balance += (accounts[this].balance)/ (users*5);
                accounts[msg.sender].amountEarnedFromHodl += accounts[this].balance / (users*5);
                accounts[this].balance -= (accounts[this].balance)/ (users*5);
            }
                
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
        uint penalty = (accounts[msg.sender].balance / 20);
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
    
    
    
    
}