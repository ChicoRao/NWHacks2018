//need to run initial shit to install cmd tools and log into myaccount
const lib = require('lib')({token: '2a07gmdz9-nJdpVguXbEdhElKNSp3TfzKywkUVUqLRdkywonjdyuheYkRJenedAG'});

module.exports = (context, callback) => { //need typing before context (see ex) unless bypassed

  // callback
  lib.messagebird.tel['@0.0.14'].sms({ //dont need version number
    originator: '14509905537', // CANNOT BE EMPTY NEEDS TO BE A STRING 
    recipient: '7788405025', // (required) bypasses typeing
    body: "hi" // (required) //same but go context.params.message
  }, (err, result) => {
    return callback(err, result);
  });

};
