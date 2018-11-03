const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();


  
client.on('ready', async() => {
var server = "502578149423448074"; // ايدي السررفر
var channel = "507984864096550922";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**- SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM **')
    },305);
})
 
client2.on('ready', async() => {
var server = "502578149423448074"; // ايدي السررفر
var channel = "507984888641880071";//ايدي الروم
    setInterval(()=>{
    client2.guilds.get(server).channels.get(channel).send('**- SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM **')
    },305);
})


  
client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);


