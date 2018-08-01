const HelperCommand = require('../../structures/Command');

module.exports = class DocsCommand extends HelperCommand {
    constructor(client) {
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
                }
            ]
        });
    } // end of constructor

    run(msg, { doc }) {
        const radocs = "https://docs.retroachievements.org/";
        let docName;

        switch(doc) {
            case "dev":
            case "developer":
                docName = "Developer-docs";
                break;

            case "devstart":
            case "dev-start":
            case "start-dev":
            case "jrdev":
            case "jr-dev":
                docName = "Getting-Started-as-an-Achievement-Developer";
                break;

            case "logic":
                docName = "Achievement-Logic-Features";
                break;

            case "delta":
                docName = "Achievement-Logic-Features#delta-values";
                break;

            case "hitcounts":
            case "hits":
                docName = "Achievement-Logic-Features#hit-counts";
                break;

            case "resetif":
                docName = "Achievement-Logic-Features#resetif";
                break;

            case "pauseif":
                docName = "Achievement-Logic-Features#pauseif";
                break;

            case "add-source":
            case "addsource":
                docName = "Achievement-Logic-Features#add-source";
                break;

            case "sub-source":
            case "subsource":
                docName = "Achievement-Logic-Features#sub-source";
                break;

            case "add-hits":
            case "addhits":
                docName = "Achievement-Logic-Features#add-hits";
                break;

            case "altgroups":
            case "alts":
            case "alt":
                docName = "Achievement-Logic-Features#alt-groups";
                break;

            case "examples":
                docName = "Real-Examples";
                break;

            case "templates":
                docName = "Achievement-Templates";
                break;

            case "finishlevel":
            case "finish-level":
                docName = "Achievement-Templates#finish-level-n";
                break;
      
            case "damageless":
            case "deathless":
                docName = "Achievement-Templates#finish-level-n-without-dying-or-getting-hit-using-a-weapon-etc";
                break;

            case "collect":
            case "collect-item":
            case "collectitem":
                docName = "Achievement-Templates#collect-an-item-in-a-specific-level";
                break;

            case "fromv1tov2":
            case "changingvalues":
            case "changeval":
                docName = "Achievement-Templates#check-for-a-specific-value-changing-to-another-specific-value-ten-times";
                break;

            case "condreset":
            case "conditionalreset":
            case "conditional-reset":
                docName = "Achievement-Templates#conditional-resets"
                break;

            case "difficulty":
                docName = "Difficulty-Scale-and-Balance";
                break;

            case "roadmap":
            case "dev-roadmap":
                docName = "Set-Development-Roadmap";
                break;

            case "badge":
            case "badges":
            case "icon":
            case "icons":
                docName = "Badge-and-Icon-Creation";
                break;

            case "leaderboards":
            case "lbs":
            case "lboards":
                docName = "Leaderboards";
                break;

            case "richpresence":
            case "rich-presence":
            case "rps":
            case "rp":
                docName = "Rich-Presence";
                break;

            case "cheevo-design":
            case "achievement-design":
            case "cheevodesign":
            case "achievementdesign":
                docName = "Achievement-Design";
                break;

            case "bonus":
            case "bonus-set":
                docName = "Bonus-Sets";
                break;

            case "hacks":
                docName = "Achievements-for-ROM-hacks";
                break;

            case "lazy":
            case "lazydev":
            case "lazynoob":
                docName = "I-am-too-lazy-to-read-the-docs";
                break;

            case "coc":
            case "conduct":
                docName = "Users-Code-of-Conduct";
                break;

            case "faq":
                docName = "FAQ";
                break;

            case "nocheevos":
            case "missing-cheevos":
                docName = "My-game-is-not-loading-achievements";
                break;

            case "contribute":
                docName = "How-to-contribute-if-you-are-not-a-developer";
                break;

            case "loadstate":
            case "softcore":
                docName = "Why-you-shouldn't-use-the-load-state-feature";
                break;

            case "about":
                docName = "About";
                break;

            case "RALibretro":
                docName = "About";
                break;

            default:
                docName = "";
        }

	return msg.say('<'+ radocs + docName +'>');
    } // end of run()
};
