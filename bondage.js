const Discord = require('discord.js');
const randomPuppy = require('random-puppy');


module.exports = class HentaiBondageCommand extends Commands {
    constructor(client) {
        super(client, {
            name: 'bondage',
            aliases: ['hbondage', 'hentaibondage'],
            group: 'nsfw',
            memberName: 'bondage',
            guildOnly: true,
            description: 'Finds...hentai..bondage??..For...you!',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~bondage'],
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

        randomPuppy('hentaibondage')
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setFooter(`hentaibondage`)
                    .setDescription(`[Image URL](${url})`)
                    .setImage(url)
                    .setColor('#A187E0');
                return message.channel.send({ embed });
            })
    }
}