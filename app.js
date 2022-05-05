const express = require('express')
const {Client} = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { userRoutes } = require('./routes/userRoutes');

const client = new Client();

const app = express();

app.use(express.json());

//Endpoints

app.use( '/api/v1/users', userRoutes )

const PORT = 4002

app.listen(PORT, () =>{
    console.log(`Running server PORT ${PORT}`);
})

/*client.on('qr', qr => {
    // Generate and scan this code with your phone
    qrcode.generate(qr, {small: true}) 
});


client.on('ready', () => {
    console.log('Client is ready!');
});


client.on('message', message => {
    console.log(message.body)
})

client.initialize();*/