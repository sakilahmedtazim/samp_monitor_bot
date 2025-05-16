const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('tattle')
    .setDescription('Show user database info in embedded format'),

  async execute(interaction) {
    const userId = '';
    const discordName = '';
    const ignName = '';
    const secondName = '';
    const role = '';

    // Random Embed Color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    const embed = new EmbedBuilder()
      .setTitle('📋 Tattle : User Database')
      .setColor(`#${randomColor}`)
      .addFields(
        { name: 'ℹ️ User ID :', value: `\`\`\`${userId}\`\`\`` },
        { name: '♻️ Discord Name :', value: `\`\`\`${discordName}\`\`\`` },
        { name: '👤 ING Name :', value: `\`\`\`${ignName}\`\`\`` },
        { name: '🔂 2nd Name :', value: `\`\`\`${secondName}\`\`\`` },
        { name: '⚛️ Role :', value: `\`\`\`${role}\`\`\`` }
      )
      .setFooter({ 
        text: 'Tattle Database System', 
        iconURL: 'https://i.imgur.com/your-footer-image.png' // এখানে আপনার ফোটার ইমেজ URL দিন
      })
      .setTimestamp();

    // Replace 'YOUR_CHANNEL_ID' with the target channel ID
    const channel = interaction.client.channels.cache.get('YOUR_CHANNEL_ID');
    if (channel) {
      await channel.send({ embeds: [embed] });
      await interaction.reply({ content: '✅ Tattle data sent!', ephemeral: true });
    } else {
      await interaction.reply({ content: '❌ Channel not found!', ephemeral: true });
    }
  }
};
