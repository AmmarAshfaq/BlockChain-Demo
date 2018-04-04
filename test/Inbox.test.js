 const assert = require('assert');// assert is used to making assertion about that
 const ganache = require('ganache-cli');// is used for testing local network running in locally
 const Web3 = require('web3');// Web is a constructor function which make instances
const provider = ganache.provider();
 const web3 = new Web3(provider);// instances interact with deiffernt ethereum network // provider make communication b/w web3 and other etherum network
const {interface,bytecode} = require('../compile')

let accounts;
let inbox;
beforeEach(async ()=>{
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();
// console.log(bytecode)
//   // use one of theese accounts to deploy the new contract
inbox = await new web3.eth.Contract(JSON.parse(interface))//creating an instance of the contracts
  .deploy({data : bytecode , arguments : ['Hi there!']})
  .send({from : accounts[0],gas:'1000000'})

  inbox.setProvider(provider);
})


describe('Inbox',()=>{
  it('deploys a contract',()=>{
assert.ok(inbox.options.address)
  })

it('has a default message',async () =>{
  const message = await inbox.methods.message().call();
assert.equal(message,'Hi there!')
})
it('can change the message',async ()=>{
  await inbox.methods.setMessage('bye').send({from : accounts[0]});
  const message = await inbox.methods.message().call();
  assert.equal(message,'bye');
})
})
