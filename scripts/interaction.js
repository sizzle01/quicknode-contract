import { ethers } from "ethers";
require("dotenv").config({ path: ".env" });
import abi from '../artifacts/contracts/wallet.sol/Wallet.json'

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
 
const contractAddress = '0x0F0c34648C2CCfa10DFAa6430eD0bcCba3B1d1Be'

const getSomethingAsync = async ()=>{
    const provider = new ethers.providers.JsonRpcProvider(QUICKNODE_HTTP_URL);
    const walletContract = new ethers.Contract(contractAddress, abi, provider);
//     const supply = await tokenContract.totalSupply();
//    const  decimalValue = supply.toString()
//     const symbol = await tokenContract.symbol();
//     const owner = await tokenContract.owner();
    // console.log( decimalValue, owner, symbol, "await supply")
    // const [res1, res2, res3]= await Promise.all([decimalValue,symbol, owner])
    // console.log(res1, res2, res3)
}
getSomethingAsync()
console.log(ethers)