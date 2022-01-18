const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
    description: 'éwing v13 Moderasyon Botu | Yardım Menüsü',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle('éwing v13 Moderasyon Botu | Yardım Menüsü', true)
        .addField("`/yardım`", "Yardım Menüsüne bakarsın.", true)
        .addField("`/komutları-aç`", "Bütün komutları aktif hale getirir.", true)
        
        .addField("`/kick`", "Belirtilen kullanıcıyı sunucu'dan atar.", true)
        .addField("`/ban`", "Belirtilen kullanıcıyı sunucu'dan yasaklar.", true)
        .addField("`/mute`", "Belirtilen kullanıcıyı susturur.", true)
        .addField("`/jail`", "Belirtilen kullanıcıyı hapise atar.", true)
        .addField("`/timeout`", "Belirtilen kullanıcıyı süreye atar.", true)
        
        .addField("`/unban`", "Belirtilen kullanıcı'nın yasağını açar.", true)
        .addField("`/unmute`", "Belirtilen kullanıcı'nın susturmasını açar.", true)
        .addField("`/unjail`", "Belirtilen kullanıcı'nın hapsini açar.", true)
        .setThumbnail("https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png")
const buton = new MessageButton().setLabel('éwing').setStyle('LINK').setURL('https://discord.gg/jtttWdfPas');
const button = new MessageButton().setLabel('Ewing Bot').setStyle('LINK').setURL('https://discord.com/api/oauth2/authorize?client_id=927201360871587870&permissions=8&scope=bot')

        const row = new MessageActionRow().addComponents(buton).addComponents(button)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
        
interaction.reply({ embeds:[embed] })}
} 