const SHA256 = require('crypto-js/sha256'); //importing crypto-js, a module

class Block{
    constructor(index, timestamp, user, amount, previousHash = ' '){
        this.index = index;
        this.timestamp = timestamp;
        this.user = user;
        this.amount = amount;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.user + this.timestamp + JSON.stringify(this.amount)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.firstBlock()];
    }
    
    firstBlock(){
        return new Block(0, new Date().toLocaleString(), "0", "0");
    }
    
    getNewestBlock(){
        return this.chain[this.chain.length - 1];
    }
    
    addBlock(newBlock){
        newBlock.previousHash = this.getNewestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    
    //Checking if the blockchain is valid
    checkChain(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
    }
}

let transaction = new Blockchain();
transaction.addBlock(new Block(1, new Date().toLocaleString(), "Bob", 4));  //Adding blocks
transaction.addBlock(new Block(2, new Date().toLocaleString(), "Bob", 10));

console.log(JSON.stringify(transaction, null, 4));

let transaction2 = new Blockchain();
transaction2.addBlock(new Block(1, new Date().toLocaleString(), "John", 2));
transaction2.addBlock(new Block(2, new Date().toLocaleString(), "John", 51));

console.log(JSON.stringify(transaction2, null, 4));
