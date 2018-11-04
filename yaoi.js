const Discord = require('discord.js');
const randomPuppy = require('random-puppy');


module.exports = class YaoiCommand extends Commands {
    constructor(client) {
        super(client, {
            name: 'yaoi',
            aliases: ['bl'],
            group: 'nsfw',
            memberName: 'yaoi',
            guildOnly: true,
            description: 'Finds yaoi for you!',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~yaoi'],
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

        randomPuppy('yaoi')
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setFooter(`yaoi`)
                    .setDescription(`[Image URL](${url})`)
                    .setImage(url)
                    .setColor('#A187E0');
                return message.channel.send({ embed });
            })
    }
}
