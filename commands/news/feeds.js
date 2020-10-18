const mTxServCommand = require('../mTxServCommand.js');
const Discord = require('discord.js');

module.exports = class FeedCommand extends mTxServCommand {
    constructor(client) {
        super(client, {
            name: 'feeds',
            aliases: ['feed'],
            group: 'news',
            memberName: 'feeds',
            description: 'Display feeds list.',
            guarded: true,
            guildOnly: true,
        });
    }

    async run(msg) {
        const lang = require(`../../languages/${this.resolveLangOfMessage(msg)}.json`)

        const games = [
            {
                name: 'Minecraft',
                key: 'minecraft'
            },
            {
                name: 'Hytale',
                key: 'hytale'
            },
            {
                name: 'GMod',
                key: 'gmod'
            },
            {
                name: 'Rust',
                key: 'rust'
            },
            {
                name: 'ARK',
                key: 'ark'
            },
            {
                name: 'FiveM',
                key: 'fivem'
            },
            {
                name: 'CS:GO',
                key: 'csgo'
            },
            {
                name: 'Valorant',
                key: 'valorant'
            },
            {
                name: 'League of Legends',
                key: 'lol'
            },
            {
                name: 'Overwatch',
                key: 'overwatch'
            },
            {
                name: 'Fortnite',
                key: 'fortnite'
            },
            {
                name: 'Rocket League',
                key: 'rocketleague'
            },
            {
                name: 'Fifa 21',
                key: 'fifa21'
            },
            {
                name: 'Call of Duty',
                key: 'cod'
            },
            {
                name: 'Onset',
                key: 'onset'
            },
            {
                name: 'S&Box',
                key: 'sandbox'
            },
        ]

        const embed = new Discord.MessageEmbed()
            .setAuthor(lang['feeds']['title'])
            .setColor('BLUE')
            .setDescription(lang['feeds']['description'])
        ;

        for (const game of games) {
            embed.addField(`❯ ${game.name}`, this.client.guildSettings.hasSubscribeToTag(msg.guild.id, game.key) ? lang['feeds']['follow'] : lang['feeds']['unfollow'], true)
        }

        return msg.say({
            embed
        });
    }
};