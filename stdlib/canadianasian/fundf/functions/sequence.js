const lib = require('lib');

/**
*searches the e.coli k12 genome  for a  specific sequence and text mesage results
* @param {string} seq the sequence to search for
* @param {string} tel the number to text message
* @returns {any}
*/
module.exports = (seq = 'ATGC', tel = '7788405025', context, callback) => {

  //gives u the object containing all the vars u want to text
  lib.keith.sequence['@dev']({q: seq}, (err, result) => {

    if (err) {
      return callback(err);
    }

    //store the strcuture with all wanted vars
    let item = result.results[0];

    lib.utils.sms({
      to: tel,
      //body: 'hey we found ${seq} in the E.coli K12 genomes at position ${item.postion} with match ${item.sequence}'
      body: 'Funds successfully sent!'
    }, (err, result)=> {
      callback(err, result);
    })

  });

};
