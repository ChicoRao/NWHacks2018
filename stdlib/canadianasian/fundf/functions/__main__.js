/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @param {number} age your age
* @returns {string}
*/
module.exports = (name = 'world', age=28, context, callback) => {

  callback(null, `hello ${name}, you are ${age}`);

};
