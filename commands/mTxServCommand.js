const DiscordCommando = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class mTxServCommand extends DiscordCommando.Command {
    onError(err, message, args, fromPattern, result) { // eslint-disable-line no-unused-vars
        console.error(err);

        const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTimestamp()
            .setTitle('An error occured with the bot')
            .setDescription(`StackTrace: \n\`\`\`${err.stack}\`\`\``)
            .addField('Command:', `${message.content.split(' ').join(' ')}`);

        return this.getSuperAdminUser().send({ embed })
    }

    getSuperAdminUser() {
        const owner = this.client.owners.filter(owner => owner.id === '515178853967331328')
        if (!owner.length) {
            throw new Error(`Super administrator not found`)
        }

        return owner.shift()
    }

    getLangOfMember(member) {
        if (!member) {
            return 'en';
        }

        return member.roles.cache.some(role => role.name === '🇫🇷') ? 'fr' : 'en';
    }
};
