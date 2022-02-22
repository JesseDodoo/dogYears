// Age converter based on the Bulldog Breed
const bulldog = (age) => {
  return `Your Bulldog is ${age * 8} years old` 
};

const chihuahua = (age) => {
  return `Your Chihuahua is ${age * 15} years old`
}

const germanShepherd = (age) => {
  return `Your German Shepherd is ${age * 12} years old`
}

const dalmation = (age) => {
  return `Your Dalmation is ${age * 12} years old`
}

console.log(bulldog(21))

module.exports= {
  bulldog, chihuahua, germanShepherd, dalmation
}
