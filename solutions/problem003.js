const isPrime = num => {
    for(let i = 2; i < num; (i % 2 == 0) ? (i = i + 1) : (i = i + 2)  )
      if(num % i === 0) return false;
    return num > 1;
  }

const primeFactor = (num) =>{
    let odds = 0
    for(let i = num; i >= 0; (isPrime(i)) ? (i = i- 1) : (i = i - 2) ){
        console.log(i)
        if(isPrime(i)){
            odds = i
            // console.log(odds)
            break
        }
    }
    console.log("done")
    return odds

}

// console.log(primeFactor(600851475141))
console.log(isPrime(600851475141))

// let temp = []
// let stopper = false
// let ct = 600851475141 - 1000
// let index = 0
// while(!stopper){
//     if(isPrime(ct)){
//         console.log(ct)
//         temp.push(ct)
//         index = index + 1
//     }
//     // console.log(temp[ct])
//     (ct % 2 == 0) ? (ct = ct + 1) : (ct = ct + 2)
//     if(ct >= 600851475141){
//         stopper = true
//         break
//     }
    
    
// }
// console.log(temp)