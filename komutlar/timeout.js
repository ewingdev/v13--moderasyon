const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const MLOG = require("../schemas/komutlar")
const ms = require('ms')

module.exports = {
    description: 'éwing v13 Moderasyon Botu | Timeout Komutu',
  
    options:[{
      name: "kullanıcı",
      description: "Bir kullanıcı ID'si girdiğinde o kullanıcıya timeout uygulanır!",
      type: "USER",
      required: true
    },{
       name: "sebep",
       description: "Sebebini belirtmelisin!",
       type: "STRING",
       required: true
    },{
      name: "süre",
      description: "1s = 1sn / 1m = 1dk / 1h = 1sa / 1d = 1 gün",
      type: "STRING",
      required: true}],
  
    run: async (client, interaction) => {
if(!interaction.member.permissions.has("MANAGE_CHANNELS")){return interaction.reply({ content: "Bu işlemi yapman için `KANALLARI_YONET` iznine sahip olmalısın!", ephemeral: false })};
   
const ml = MLOG.findOne({ guildID: interaction.guild.id });
 const mlo = ml ? "açık" : "kapalı";
  if(mlo === "kapalı"){return interaction.reply({ content: "Bu işlemi gerçekleştirmem için komutları açmanız gerekli!", ephemeral: false })};
      
      const m = interaction.options.getMember('kullanıcı')
      const sebep = interaction.options.getString('sebep')
      const sür = interaction.options.getString('süre')
      const süre = ms(sür)
      
      m.timeout(süre, sebep)
        const embed = new MessageEmbed()
        .setTitle('éwing v13 Moderasyon Botu | Timeout Komutu', true)
        .setDescription("Başarıyla kullanıcı timeout'landı!")
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