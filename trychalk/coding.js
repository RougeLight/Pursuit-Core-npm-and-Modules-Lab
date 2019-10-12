function printMe (wordArray){
//    for (i = 0; i < wordArray.length; i++) { 
//       for (j = 0; j < wordArray.length; j++) {
//          let counter = 0
//          if(wordArray[j] === wordArray[j]++) {
//             counter++
//          } 
//          if (counter % 2 === 0) {
//             console.log(wordArray[j])
//          }
//       }
   
//    }
// }
   let result = ''
   let obj = {}
   wordArray.forEach(el => {
      if(obj[el]){
         obj[el] = 0
         result += el
      }else {
         obj[el] = 1
      }
   })
   console.log(result)
}
let arr = ["a", "b", "a", "c", "a", "d", "a"]
printMe(arr)