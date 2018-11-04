const Discord = require('discord.js');
const randomPuppy = require('random-puppy');


module.exports = class TrapCommand extends Commands {
    constructor(client) {
        super(client, {
            name: 'trap',
            aliases: ['traps'],
            group: 'nsfw',
            memberName: 'trap',
            guildOnly: true,
            description: 'Finds...traps? for...you?',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~trap'],
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

        randomPuppy('traphentai')
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setFooter(`traphentai`)
                    .setDescription(`[Image URL](${url})`)
                    .setImage(url)
                    .setColor('#A187E0');
                return message.channel.send({ embed });
            })
    }
}
