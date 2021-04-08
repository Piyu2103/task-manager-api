const sgMail=require('@sendgrid/mail');
require('dotenv').config();
const apiKey = process.env.SENDGRID_API_KEY 
sgMail.setApiKey(apiKey)


const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'singhalpiyush21@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'singhalpiyush21@gmail.com',
        subject:'Cancellation of the account',
        text:`Goodbye, ${name}. Let me know the reason for the cancellation of the account`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}