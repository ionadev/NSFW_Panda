const Discord = require('discord.js');
const randomPuppy = require('random-puppy');


module.exports = class YuriCommand extends Commands {
    constructor(client) {
        super(client, {
            name: 'yuri',
            aliases: ['gl'],
            group: 'nsfw',
            memberName: 'yuri',
            guildOnly: true,
            description: 'Finds yuri for you!',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~yuri'],
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    run(message) {
        var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send(errMessage);
        }

        randomPuppy('yuri')
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setFooter(`yuri`)
                    .setDescription(`[Image URL](${url})`)
                    .setImage(url)
                    .setColor('#A187E0');
                return message.channel.send({ embed });
            })
    }
}
