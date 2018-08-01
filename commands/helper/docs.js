const HelperCommand = require('../../structures/Command');

module.exports = class DocsCommand extends HelperCommand {
    let docsMap = new Map();


    constructor(client) {
        mappingDocs("Developer-docs",
            ['dev', 'developer']);

        mappingDocs("Getting-Started-as-an-Achievement-Developer",
            ['devstart', 'dev-start', 'jrdev', 'jr-dev']);

        mappingDocs("Achievement-Logic-Features",
            ['logic']);

        mappingDocs("Achievement-Logic-Features#delta-values",
            ['delta']);

        mappingDocs("Achievement-Logic-Features#hit-counts",
            ['hitcounts', 'hits']);

        mappingDocs("Achievement-Logic-Features#resetif",
            ['resetif']);

        mappingDocs("Achievement-Logic-Features#pauseif",
            ['pauseif']);

        mappingDocs("Achievement-Logic-Features#add-source",
            ['add-source', 'addsource']);

        mappingDocs("Achievement-Logic-Features#sub-source",
            ['sub-source', 'subsource']);

        mappingDocs("Achievement-Logic-Features#add-hits",
            ['add-hits', 'addhits']);

        mappingDocs("Achievement-Logic-Features#alt-groups",
            ['altgroups', 'alts', 'alt']);

        mappingDocs("Real-Examples",
            ['examples']);

        mappingDocs("Achievement-Templates",
            ['templates']);

        mappingDocs("Achievement-Templates#finish-level-n",
            ['finishlevel', 'finish-level']);

        mappingDocs("Achievement-Templates#finish-level-n-without-dying-or-getting-hit-using-a-weapon-etc",
            ['damageless', 'deathless']);

        mappingDocs("Achievement-Templates#collect-an-item-in-a-specific-level",
            ['collect', 'collectitem', 'getitem', 'get-item']);

        mappingDocs("Achievement-Templates#check-for-a-specific-value-changing-to-another-specific-value-ten-times",
            ['changeval', 'changingvalues']);

        mappingDocs("Achievement-Templates#conditional-resets",
            ['condreset', 'conditionalreset', 'conditional-reset']);

        mappingDocs("Difficulty-Scale-and-Balance",
            ['difficulty']);

        mappingDocs("Set-Development-Roadmap",
            ['roadmap', 'dev-roadmap']);

        mappingDocs("Badge-and-Icon-Creation",
            ['badge', 'icon']);

        mappingDocs("Leaderboards",
            ['leaderboards', 'lbs', 'lboards']);

        mappingDocs("Rich-Presence",
            ['richpresence', 'rich-presence', 'rps', 'rp']);

        mappingDocs("Achievement-Design",
            ['cheevo-design', 'achievement-design', 'cheevodesign', 'achievementdesign']);

        mappingDocs("Bonus-Sets",
            ['bonus', 'bonus-set']);

        mappingDocs("Achievements-for-ROM-hacks",
            ['hacks']);

        mappingDocs("I-am-too-lazy-to-read-the-docs",
            ['lazy', 'lazydev', 'lazynoob']);

        mappingDocs("Users-Code-of-Conduct",
            ['coc', 'conduct']);

        mappingDocs("FAQ",
            ['faq']);

        mappingDocs("My-game-is-not-loading-achievements",
            ['nocheevos', 'missing-cheevos']);

        mappingDocs("How-to-contribute-if-you-are-not-a-developer",
            ['contribute']);

        mappingDocs("Why-you-shouldn't-use-the-load-state-feature",
            ['loadstate', 'softcore']);

        mappingDocs("About",
            ['about']);

        mappingDocs("RALibretro",
            ['RALibretro']);

        super(client, {
            name: 'docs',
            memberName: 'docs',
            description: 'Provide links to documentation.',
            examples ['docs pauseif'],
            args: [
                {
                    key: 'doc',
                    prompt: 'What text would you like the bot to say?',
                    type: 'string'
                    validate: doc => docsMap.has(doc);
                }
            ]
        });

    } // end of constructor()


    mappingDocs(doc, keys) {
        for(var i = 0; i < keys.length; i++)
            docsMap.set(keys[i], doc);
    }


    run(msg, { doc }) {
        return msg.say('<https://docs.retroachievements.org/'+ docsMap.get(doc) +'>');
    }
};
