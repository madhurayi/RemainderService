const express= require('express');
const bodyParser= require('body-parser');

const {PORT} = require('../src/config/serverConfig');
//const {createChannel } = require('./utils/messageQueue');
//const {sendBasicEmail} = require('./services/email-service');

const cron= require('node-cron');

const setupAndStartServer=async ()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    //const channel= await createChannel();

    app.listen(PORT,()=>{
        console.log("Server started at ",PORT);
        // sendBasicEmail(
        //     'madhupriya.rayi@gmail.com',
        //     'vinodkumar.nelanakula@gmail.com',
        //     'Final Payment Remainder Due on 11/03/2024',
        //     'Hi vinod, we are reaching out a final time about the payment that is due on 11/03/2024 '
        // );
        cron.schedule('*/2 * * * *',()=>{
            console.log('Running a taskfor every two minutes');
        });
        
    })
}

setupAndStartServer();