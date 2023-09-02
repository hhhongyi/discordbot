const { Client, GatewayIntentBits} = require('discord.js')
require('dotenv/config')


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate',  message => {
    if (message.content ==='掰提'){
        message.reply('I Love You!')
    }
}) //掰提（I Love You!)

client.on('messageCreate',  message => {
    if (message.content ==='小宝'){
        message.reply('乖乖学习！')
    }
})//小宝（乖乖学习！）

client.on('messageCreate',  message => {
    if (message.content ==='我也不知道'){
        message.reply('好好想想！')
    }
})//我也不知道（好好想想！）

client.on('messageCreate',  message => {
    if (message.content ==='掰提大笨蛋'){
        message.reply('尊嘟假嘟！')
    }
})//掰提大笨蛋（尊嘟假嘟！）

client.on('messageCreate',  message => {
    if (message.content ==='小宝乖乖'){
        message.reply('你最乖了！')
    }
})//小宝乖乖（你最乖了！）

client.on('messageCreate',  message => {
    if (message.content ==='你是大笨蛋'){
        message.reply('我是大笨蛋！')
    }
})//你是大笨蛋（我是大笨蛋！）

client.on('messageCreate',  message => {
    if (message.content ==='尊嘟'){
        message.reply('假嘟！')
    }
})//尊嘟（假嘟！）

client.on('messageCreate',  message => {
    if (message.content ==='假嘟'){
        message.reply('尊嘟！')
    }
})//假嘟（尊嘟！）

client.on('messageCreate',  message => {
    if (message.content ==='略略略'){
        message.reply('啵啵啵！')
    }
})//略略略（啵啵啵！）

client.on('messageCreate',  message => {
    if (message.content ==='小宝不乖'){
        message.reply('要乖乖的！')
    }
})//小宝不乖（要乖乖的！）

client.on('messageCreate',  message => {
    if (message.content ==='啵啵'){
        message.reply('啵唧！')
    }
})//啵啵（啵唧！）

client.on('messageCreate',  message => {
    if (message.content ==='我想你了'){
        message.reply('我也想你！')
    }
})//我想你了（我也想你！）

client.on('messageCreate',  message => {
    if (message.content ==='我想你了，掰提'){
        message.reply('我也想你！')
    }
})//我想你了，掰提（我也想你！）

client.on('messageCreate',  message => {
    if (message.content ==='我想你啦'){
        message.reply('我也想你！')
    }
})//我想你啦（我也想你！）

client.on('messageCreate',  message => {
    if (message.content ==='喜欢你'){
        message.reply('我也喜欢你！')
    }
})//喜欢你（我也喜欢你！）

client.on('messageCreate',  message => {
    if (message.content ==='我爱你'){
        message.reply('我也爱你！')
    }
})//我爱你（我也爱你！）

client.on('messageCreate',  message => {
    if (message.content ==='宝宝'){
        message.reply('啵啵！')
    }
})//宝宝（啵啵！）

client.on('messageCreate',  message => {
    if (message.content ==='我可爱你'){
        message.reply('可爱你了！')
    }
})//我可爱你（可爱你了！）

client.on('messageCreate',  message => {
    if (message.content ==='你想我么'){
        message.reply('我可想你！')
    }
})//你想我么（我可想你！）

client.on('messageCreate',  message => {
    if (message.content ==='你想我吗'){
        message.reply('我可想你！')
    }
})//你想我吗（我可想你！）

client.on('messageCreate',  message => {
    if (message.content ==='晚安'){
        message.reply('晚安！')
    }
})//晚安（晚安！）

client.on('messageCreate',  message => {
    if (message.content ==='爱你呀'){
        message.reply('爱你！')
    }
})//爱你呀（爱你！）

client.on('messageCreate',  message => {
    if (message.content ==='爱你掰提'){
        message.reply('爱你小宝！')
    }
})//爱你呀（爱你！）

client.on('messageCreate',  message => {
    if (message.content ==='小宝超爱掰提'){
        message.reply('掰提超爱小宝！')
    }
})//小宝超爱掰提（掰提超爱小宝！）

client.on('messageCreate',  message => {
    if (message.content ==='小宝最爱掰提'){
        message.reply('掰提最爱小宝！')
    }
})//小宝最爱掰提（掰提最爱小宝！）

client.on('messageCreate',  message => {
    if (message.content ==='小宝会和掰提一直一直在一起'){
        message.reply('一定会的！')
    }
})//小宝会和掰提一直一直在一起（一定会的！）

client.on('messageCreate',  message => {
    if (message.content ==='啵啵你'){
        message.reply('啵啵啵！')
    }
})//啵啵你（啵啵啵！）

client.on('messageCreate',  message => {
    if (message.content ==='yyq'){
        message.reply('Iloveyou！')
    }
})//yyq（Iloveyou！）

client.on('messageCreate',  message => {
    if (message.content ==='gyd'){
        message.reply('Iloveyou！')
    }
})//gyd（Iloveyou！）

client.on('messageCreate',  message => {
    if (message.content ==='ily'){
        message.reply('love you too！')
    }
})//ily（love you too！）
 
//Hello



client.login(process.env.TOKEN)