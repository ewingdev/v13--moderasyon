const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const MLOG = require("../schemas/komutlar")

module.exports = {
    description: 'éwing v13 Moderasyon Botu | UnMute Komutu',
  
    options:[{
      name: "kullanıcı",
      description: "Bir kullanıcı etiketlendiğinde o kullanıcıyı muteler!",
      type: "USER",
      required: true
    }],
  
    run: async (client, interaction) => {
if(!interaction.member.permissions.has("MANAGE_CHANNELS")){return interaction.reply({ content: "Bu işlemi yapman için `KANALLARI_YONET` iznine sahip olmalısın!", ephemeral: false })};
 const m = interaction.options.getMember('kullanıcı')
  const ml = MLOG.findOne({ guildID: interaction.guild.id });
   const mlo = ml ? "açık" : "kapalı";
   if(mlo === "kapalı"){return interaction.reply({ content: "Bu işlemi gerçekleştirmem için komutları açmanız gerekli!", ephemeral: false })};     
   if(!m){return interaction.reply({ content: "Belirtilen ID'ye sahip kullanıcı bulunamadı!", ephemeral: false})}


  if(!m.roles.cache.has("925121404591038485")){return interaction.reply({ content: "Bu kullanıcı mutelenmemiş!", ephemeral: false })}
      m.roles.remove("925121404591038485", ["Sebep Girebilirsiniz!"])
        const embed = new MessageEmbed()
        .setTitle('éwing v13 Moderasyon Botu | UnMute Komutu', true)
        .setDescription("Başarıyla kullanıcı'nın mutesi kaldırıldı!")
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