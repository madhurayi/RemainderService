const express= require('express');
const bodyParser= require('body-parser');

const {PORT} = require('../src/config/serverConfig');
//const {createChannel } = require('./utils/messageQueue');
//const {sendBasicEmail} = require('./services/email-service');
const TIcketController= require('./controller/ticket-controllre');

const jobs= require('./utils/job');

const setupAndStartServer=async ()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    //const channel= await createChannel();
    app.post('/api/v1/tickets',TIcketController.create);
    app.listen(PORT,()=>{
        console.log("Server started at ",PORT);
        jobs();
        // sendBasicEmail(
        //     'madhupriya.rayi@gmail.com',
        //     'vinodkumar.nelanakula@gmail.com',
        //     'Final Payment Remainder Due on 11/03/2024',
        //     'Hi vinod, we are reaching out a final time about the payment that is due on 11/03/2024 '
        // );
        
    })
}

setupAndStartServer();