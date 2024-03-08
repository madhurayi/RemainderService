const sender= require('../config/emailConfig');

const sendBasicEmail=async (mailFrom,mailTo,mailSubject,mailBody)=>{
    try{
        console.log(mailFrom,mailTo);
    const response=await sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody
    });
    console.log(response);
    return response;
    }catch(error){
        console.log(error);
    }
    
}

module.exports= {
    sendBasicEmail
}

/**
 * SMPT -> a@b.com
 * reciever -> d@em.com
 * 
 * from : support@noti.com
 */