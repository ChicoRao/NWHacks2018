// //old code****************************************************************************************************
//
// //need to run initial shit to install cmd tools and log into myaccount
// const lib = require('lib')({token: '2a07gmdz9-nJdpVguXbEdhElKNSp3TfzKywkUVUqLRdkywonjdyuheYkRJenedAG'});
//
// module.exports = (context, callback) => { //need typing before context (see ex) unless bypassed
//
//   // callback
//   lib.messagebird.tel['@0.0.14'].sms({ //dont need version number
//     originator: null, // (required)
//     recipient: context.params.phoneNumber, // (required) bypasses typeing
//     body: null // (required) //same but go context.params.message
//   }, (err, result) => {
//     return callback(err, result);
//   });
//
// };

//planning ****************************************************************************************************
// lib.dfgdg..funds({ //dfgd is the path up to funds
//   phoneNumber: number, //number is the variable, aka 778 840 5025. note comma cuz object
//   message: message //message is a string
// }, function(err, result) {
//   /** handle errors and results */  //aka display error on fornt end
// });


//actual code ****************************************************************************************************
//need to run initial shit to install cmd tools and log into myaccount
const lib = require('lib')({token: '2a07gmdz9-nJdpVguXbEdhElKNSp3TfzKywkUVUqLRdkywonjdyuheYkRJenedAG'});

module.exports = (context, callback) => { //need typing before context (see ex) unless bypassed


  // callback
  lib.messagebird.tel['@0.0.14'].sms({ //dont need version number
    originator: context.params.origNumber, // CANNOT BE EMPTY NEEDS TO BE A STRING
    recipient: context.params.phoneNumber, // (required) bypasses typeing
    body: context.params.message // (required) //same but go context.params.message
  }, (err, result) => {
    return callback(err, result);
  });

};


lib.canadianasian.fundf.functions.funds1({
  origNumber: '14509905537',
  phoneNumber: '7788405025', //number is the variable, aka 778 840 5025. note comma cuz object
  message: 'Funds Received!' //message is a string
}, function(err, result) {
  /** handle errors and results */  //aka display error on fornt end
});






//old version NOT as a function
//   // callback
//   lib.messagebird.tel['@0.0.14'].sms({ //dont need version number
//     originator: '14509905537', // CANNOT BE EMPTY NEEDS TO BE A STRING
//     recipient: '7788405025', // (required) bypasses typeing
//     body: "hi" // (required) //same but go context.params.message
//   }, (err, result) => {
//     return callback(err, result);
//   });
//
// };
