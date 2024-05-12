const {
    Client,
    EmbedBuilder,
    GuildExplicitContentFilter,
    ChannelType,
    PermissionsBitField,
    PermissionFlagsBits,
    ButtonBuilder,
    Permissions,
    MessageManager,
    Embed,
    Collection,
    Events,
    GatewayIntentBits,
    Partials,
    GatewayDispatchEvents,
  } = require(`discord.js`);
  const Discord = require('discord.js');
  
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildIntegrations,
      GatewayIntentBits.GuildWebhooks,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildEmojisAndStickers,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.DirectMessageTyping,
      GatewayIntentBits.GuildModeration,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildWebhooks,
      GatewayIntentBits.AutoModerationConfiguration,
      GatewayIntentBits.GuildScheduledEvents,
      GatewayIntentBits.GuildMessageTyping,
      GatewayIntentBits.AutoModerationExecution,
    ],
    partials: [
      Partials.GuildMember,
      Partials.Channel,
      Partials.GuildScheduledEvent,
      Partials.Message,
      Partials.Reaction,
      Partials.ThreadMember,
      Partials.User,
    ],
  });
  
  client.setMaxListeners(500);
  
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    let deletedCount = 0;
    client.guilds.cache.forEach((guild) => {
      guild.channels.cache.forEach((channel) => {
        if (channel.type === ChannelType.GuildText) {
          channel.messages.fetch().then((messages) => {
            messages.forEach((message) => {
              if (message.content.includes('WORD TO DELETE')) {
                message.delete();
                deletedCount++;
              }
            });
          });
        }
      });
    });
    console.log(`Deleted ${deletedCount} messages containing @everyone`);
  });
  
  client.login('BOT TOKEN');
