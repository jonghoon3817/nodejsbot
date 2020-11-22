const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Nzc5NjQ0NTM4OTAxODg5MDM3.X7jijw.ZcB-myaF0zMpe-H-mzDV2pRC_rM';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '!랭크') {
    message.reply('랭크8 마이쮸 하나,랭크15 초콜릿 하나,랭크22 왕꿈틀이 젤리,랭크39 음료수 1500이하,랭크47 불닭볶음면,랭크56 삼김2,랭크57 삼김=불닭,나의 사랑,종훈이의 사랑,지호의 사랑,랭크65 뚜레쥬르 빵 3000원까지,랭크70 넙적다리 +라면,댕크90 cu7000원 상품권');
  }
});

client.login(token);