// Code your solutions in this file
const writeCards = (name) => {
   let ans = []
   for (let i = 0; i < name.length; i++) {
      ans.push("Thank you, " + name[i] + ", for the wonderful surprise gift!")
   }
   return ans
}

const countDown = (num) => {
   let i = num

   while (i >= 0) {
      console.log(i)
      i--
   }
      
}