const chalk = require ('chalk') 

function helloBlue () {
  let blue = chalk.blue('Hello World')
  console.log (blue)
}

function helloRed () {
   let red = chalk.red('Hello World')
   console.log(red)
}

function stringToColor (color,string) {
chalk.color(`${string}`)
}

const evensBlueOddsYellow = (string) => {
   let stringSplit = string.split(' ');
   let stringJoin = [];
      for (let i = 0; i < stringSplit.length; i++) {
          if (i % 2 === 0) {
              let blue = chalk.blue(stringSplit[i]);
              stringJoin.push(blue)
          } else {
              let yellow = chalk.yellow(stringSplit[i]);
              stringJoin.push(yellow);
          }
      }
      console.log(stringJoin.join(' '));
   }

helloBlue()
helloRed()
//stringToColor()
evensBlueOddsYellow('are you that bad')

// const boldFirstUnderlineLast = () => {
  
//    let array = string.split(' ');
//    let first  = chalk.bold(array[0]);
//    let last  = chalk.underline(array[array.length - 1]);
//    array[0] = first;
//    array[array.length-1] = last;
//    console.log(array.join(' '))
//   }
//   boldFirstUnderlineLast('mic check 1212')
// }