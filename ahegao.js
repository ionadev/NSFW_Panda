const Discord = require('discord.js');
const randomPuppy = require('random-puppy');


module.exports = class AhegaoCommand extends Commands {
    constructor(client) {
        super(client, {
            name: 'ahegao',
            group: 'nsfw',
            memberName: 'ahegao',
            guildOnly: true,
            description: 'Finds ahegao for you!',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~ahegao'],
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

        randomPuppy('ahegao')
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setFooter(`ahegao`)
                    .setDescription(`[Image URL](${url})`)
                    .setImage(url)
                    .setColor('#A187E0');
                return message.channel.send({ embed });
            })
    }
}
