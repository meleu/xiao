const { Command } = require('discord.js-commando');

class HelperCommand extends Command {
    constructor(client, info) {
        super(client, info);

        this.group = 'helper';

        this.argsSingleQuotes = info.argsSingleQuotes || false;
        this.throttling = info.throttling || { usages: 2, duration: 5 };
    }
}

module.exports = HelperCommand;
