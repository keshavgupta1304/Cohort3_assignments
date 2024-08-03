/*
Give me an input string that outputs a SHA-256 hash that starts with 00000 
*/

import crypto from "crypto"
function findHashWithPrefix(prefix)
{
  let input=0
  while(true)
  {
    let inputStr=input.toString()
    let hash=crypto.createHash('sha256').update(inputStr).digest('hex')
    if(hash.startsWith(prefix))
    {
      return {input:inputStr,hash:hash}
    }
    input++;
  }
}
const str=findHashWithPrefix('00000')
console.log(`Input: ${str.input}`)
console.log(`Hash: ${str.hash}`)