// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   console.log("Returned planet: ", mars);
// };

// setTimeout(getPlanet, 4000) // imprime Marte depois de 4 segundos


// 

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// crie a função sendMarsTemperature abaixo

// const sendMarsTemperature = () => {
//   console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`)
// };

// setTimeout(sendMarsTemperature, 5000); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// 
// 
// 

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...

// const sendMarsTemperature = (callback) => {
//   const temp = () => callback(getMarsTemperature());
//   setTimeout(temp, messageDelay());
// }

// sendMarsTemperature(temperatureInFahrenheit) // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// 
// 
// 

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const sucess = () => {
//   const sucessTemp = Math.floor(Math.random() * 100);
//   if (sucessTemp <= 60) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// // definição da função sendMarsTemperature...

// const sendMarsTemperature = (callback, erro) => {
//   const temp = () => callback(getMarsTemperature());
//   if (sucess()) {
//     setTimeout(temp, messageDelay());
//   } else {
//     erro('Robot is busy');
//   }
// };

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);

// 
// 
// 

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

module.exports = uppercase;