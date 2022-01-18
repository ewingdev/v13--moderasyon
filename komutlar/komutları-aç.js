const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const MLOG = require("../schemas/komutlar")

module.exports = {
    description: 'éwing v13 Moderasyon Botu | KomutlarıAç Komutu',
  
    run: async (client, interaction) => {
if(!interaction.member.permissions.has("MANAGE_CHANNELS")){return interaction.reply({ content: "Bu işlemi yapman için `KANALLARI_YONET` iznine sahip olmalısın!", ephemeral: false })};

const mlog = await MLOG.findOne({ guildID: interaction.guild.id });
 const k = mlog ? mlog.modlog : null;
  const ko = k === null ? "kapalı" : "açık";
  if(ko === "açık") return interaction.reply({ content: "Komutlar zaten açık!", ephemeral: false });
      

await MLOG.findOneAndUpdate({ guildID: interaction.guild.id, userID: interaction.user.id }, { $set: { komutlar: "açık" }}, { upsert: true });
  
      const embed = new MessageEmbed()
        .setTitle('éwing v13 Moderasyon Botu | KomutlarıAç Komutu', true)
        .setDescription("Başarıyla Komutlar açıldı!")
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