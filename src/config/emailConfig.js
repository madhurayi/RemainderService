const nodemailer= require('nodemailer');

const {EMAIL_ID,EMAIL_PASS} = require('./serverConfig');
console.log("hii ",EMAIL_ID,EMAIL_PASS);
const sender= nodemailer.createTransport({
    //host: "smtp.ethereal.email",
  //port: 587,
  //secure: false,
   service: 'Gmail',
    auth:{
        user:EMAIL_ID,
        pass:EMAIL_PASS
    }
});

module.exports= sender;