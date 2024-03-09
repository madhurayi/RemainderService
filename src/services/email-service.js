const sender= require('../config/emailConfig');
const TicketRepository= require('../repository/ticket-repository');

const repo= new TicketRepository();

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
const fetchPendingEmails= async (timestamp)=>{
    try{
        const response=await repo.get({status: "PENDING"});
        return response;
    }catch(error){
        throw error;
    }
}

const updateTicket= async (ticketId,data)=>{
    try{
        const response= await repo.update(ticketId,data);
        return response;
    }catch(error){
        throw error;
    }
}
const createNotification= async (data)=>{
    try{
        console.log(data);
        const response= await repo.create(data);
        return response;
    }catch(error){
        throw error;
    }
}
module.exports= {
    sendBasicEmail,
    fetchPendingEmails,
    updateTicket,
    createNotification
}

/**
 * SMPT -> a@b.com
 * reciever -> d@em.com
 * 
 * from : support@noti.com
 */