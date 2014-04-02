var Deckie = {};

Deckie.classes = [
	{id:1,name:"Druid"},
	{id:2,name:"Hunter"},
	{id:3,name:"Mage"},
	{id:4,name:"Paladin"},
	{id:5,name:"Priest"},
	{id:6,name:"Rogue"},
	{id:7,name:"Shaman"},
	{id:8,name:"Warlock"},
	{id:9,name:"Warrior"}
];

Deckie.artists = [
	{id:1,name:"Doug Alexander",url:"http://www.ainokostudios.com/"},
	{id:2,name:"Trent Kaniuga",url:"http://creedguy.blogspot.com/"},
	{id:3,name:"Dan Scott",url:"http://danscottart.4ormat.com/"},
	{id:4,name:"Richard Wright",url:null},
	{id:5,name:"Dany Orizio",url:"http://www.danyorizio.com/"},
	{id:6,name:"Leo Che",url:null},
	{id:7,name:"Dave Rapoza",url:"http://daverapoza.blogspot.com/"},
	{id:8,name:"Brad Vancata",url:"http://www.bradvancata.com/"},
	{id:9,name:"Steve Tappin",url:"http://www.stephentappin.com/"},
	{id:10,name:"James Ryman",url:"http://jamesryman.blogspot.com/"},
	{id:11,name:"Raymond Swanland",url:"http://www.raymondswanland.com/"},
	{id:12,name:"Alex Horley Orlandelli",url:"http://www.alexhorleyart.com/"},
	{id:13,name:"Luca Zontini",url:"http://lucazontini.blogspot.com/"},
	{id:14,name:"Cyril Van Der Haegen",url:"http://www.cyrilvdh.com/"},
	{id:15,name:"Clint Langley",url:"http://www.clintlangley.com/"},
	{id:16,name:"Grace Liu",url:"http://graceliu.daportfolio.com/"},
	{id:17,name:"Tom Baxa",url:"http://www.baxaart.com/"},
	{id:18,name:"Gabor Szikszai",url:"http://boros-szikszai.com/"},
	{id:19,name:"Markus Erdt",url:"http://www.niefali.com/"},
	{id:20,name:"Sean O’Daniels",url:"http://www.odbrush.com/"},
	{id:21,name:"James Brady",url:null},
	{id:22,name:"Terese Nielsen",url:"http://www.tnielsen.com/"},
	{id:23,name:"Trevor Jacobs",url:null},
	{id:24,name:"Patrik Hjelm",url:"http://unidcolor.deviantart.com/"},
	{id:25,name:"Dave Allsop",url:"http://daveallsop.info/"},
	{id:26,name:"Jimmy Lo",url:"http://www.jloart.blogspot.co.uk/"},
	{id:27,name:"Tyler Walpole",url:"http://www.tylerwalpole.com/"},
	{id:28,name:"Malcolm Davis",url:null},
	{id:29,name:"Mauro Cascioli",url:null},
	{id:30,name:"Brandon Kitkouski",url:"http://www.bkstudio.com/"},
	{id:31,name:"Matt Gaser",url:"http://www.mattgaser.com/"},
	{id:32,name:"Daren Bader",url:"http://darenbader.blogspot.com/"},
	{id:33,name:"Jim Nelson",url:"http://www.jimnelsonart.com/"},
	{id:34,name:"Bernie Kang",url:"http://berniekang.carbonmade.com/"},
	{id:35,name:"Lorenzo Minaca",url:"http://lorenzominaca.com/"},
	{id:36,name:"Velvet Engine",url:"http://velvetengine.com/"},
	{id:37,name:"Wei Wang",url:"http://blizzardart.deviantart.com/"},
	{id:38,name:"Steve Prescott",url:"http://prescottartblog.blogspot.com/"},
	{id:39,name:"Gabe from Penny Arcade",url:"http://www.penny-arcade.com/"},
	{id:40,name:"Dan Brereton",url:"http://www.nocturnals.com/"},
	{id:41,name:"Benjamin Zhang",url:null},
	{id:42,name:"Lars Grant-West",url:"http://www.larsgrantwest.com/"},
	{id:43,name:"Milivoj Ceran",url:"http://www.mceran-art.com/"},
	{id:44,name:"Peter C. Lee",url:"http://www.peterconcept.com/"},
	{id:45,name:"Warren Mahy",url:"http://www.mahystudio.com/‎"},
	{id:46,name:"Blizzard Cinematics",url:"http://www.blizzard.com/‎"},
	{id:47,name:"Howard Lyon",url:"http://howardlyon.com/"},
	{id:48,name:"Steve Ellis",url:"http://steveellisart.com/"},
	{id:49,name:"Dave Berggren",url:null},
	{id:50,name:"Jason Chan",url:"http://www.jasonchanart.com/"},
	{id:51,name:"Josh Tallman",url:"http://www.joshtallman.com/"},
	{id:52,name:"Alex Garner",url:"http://www.alexgarner.com/"},
	{id:53,name:"Carl Frank",url:"http://98.131.19.208/"},
	{id:54,name:"Concept Art House",url:null},
	{id:55,name:"Raven Mimura",url:"http://www.ravenmimura.com/"},
	{id:56,name:"Gonzalo Ordonez",url:"http://genzoman.deviantart.com/"},
	{id:57,name:"Michael Komarck",url:"http://www.komarckart.com/"},
	{id:58,name:"Ralph Horsley",url:"http://www.ralphhorsley.co.uk/"},
	{id:59,name:"Vance Kovacs",url:"http://www.vancekovacs.com/"},
	{id:60,name:"John Avon",url:"http://www.johnavon.com/"},
	{id:61,name:"Chris Seaman",url:"http://www.chrisseamanart.com/"},
	{id:62,name:"Wayne Reynolds",url:"http://www.waynereynolds.com/"},
	{id:63,name:"Romain De Santi",url:null},
	{id:64,name:"Zoltan Boros",url:"http://boros-szikszai.com/"},
	{id:65,name:"Mike \"Daarken\" Lim",url:"https://daarken.com/"},
	{id:66,name:"Michael Sutfin",url:"http://www.mikesutfin.com/"},
	{id:67,name:"Slawomir Maniak",url:"http://www.maniakart.com/"},
	{id:68,name:"Brian \"Chippy\" Dugan",url:"http://chippywork.blogspot.com/"},
	{id:69,name:"Glenn Rane",url:"http://www.glennrane.com/"},
	{id:70,name:"Zoltan & Gabor",url:"http://boros-szikszai.com/"},
	{id:71,name:"Ittoku Seta",url:null},
	{id:72,name:"Michael Ivan",url:"http://michalivan.net/"},
	{id:73,name:"Lucas Graciano",url:"http://www.lucasgraciano.com/"},
	{id:74,name:"Efrem Palacios",url:"http://efrempalacios.blogspot.com/"},
	{id:75,name:"Ryan Sook",url:"http://www.ryansook.com/"},
	{id:76,name:"Justin Sweet",url:"http://justinsweet.com/"},
	{id:77,name:"E.M. Gist",url:"http://www.erikgist.com/"},
	{id:78,name:"Brom",url:"http://www.bromart.com/"},
	{id:79,name:"Jessica Jung",url:"http://miladymorigane.deviantart.com/"},
	{id:80,name:"Jim Pavelec",url:"http://www.jimpavelec.com/"},
	{id:81,name:"Darrell Riche",url:"http://www.darrellriche.com/"},
	{id:82,name:"Mark Gibbons",url:null},
	{id:83,name:"Karl Richardson",url:"http://tankskullx66.deviantart.com/"},
	{id:84,name:"Graven Tung",url:"http://www.artofgt.com/"},
	{id:85,name:"Steve Hui",url:"http://stevehu1.blogspot.com/"},
	{id:86,name:"Frank Cho",url:"http://www.libertymeadows.com/"},
	{id:87,name:"Hideaki Takamura",url:null},
	{id:88,name:"Ariel Olivetti",url:"http://en.wikipedia.org/wiki/Ariel_Olivetti"},
	{id:89,name:"Ben Olson",url:"http://www.sketchthing.com/"},
	{id:90,name:"Scott Altmann",url:"http://www.scottaltmann.com/"},
	{id:91,name:"Jesper Ejsing",url:"http://jesperejsing.blogspot.com/"},
	{id:92,name:"Andrew Robinson",url:"http://www.nextexitcomics.com/"},
	{id:93,name:"James Zhang",url:"http://www.jzconcepts.com/"},
	{id:94,name:"Christopher Moeller",url:"http://www.moellerillustrations.com/"},
	{id:95,name:"Ron Spencer",url:"http://ronspencer.wordpress.com/"},
	{id:96,name:"Brian Huang",url:"http://www.huangstudio.com/"},
	{id:97,name:"Tom Fleming",url:"http://www.flemart.com/"},
	{id:98,name:"Kevin Chin",url:"http://kevinchinart.blogspot.com/"},
	{id:99,name:"Jonathan Ryder",url:"http://squaredpixel.blogspot.com/"},
	{id:100,name:"Nathan Bowden",url:null},
	{id:101,name:"John \"JP\" Polidora",url:"http://polidorusrex.blogspot.com/"},
	{id:102,name:"Robb Shoberg",url:"http://www.therobbsho.com/"},
	{id:103,name:"Ben Wootten",url:"http://benwootten.deviantart.com/"},
	{id:104,name:"Matt Dixon",url:"http://www.mattdixon.co.uk/"},
	{id:105,name:"Don Hazeltine",url:"http://www.donhazeltine.com/"},
	{id:106,name:"Dave Kendall",url:"http://www.rustybaby.com/"},
	{id:107,name:"Matt Cavotta",url:"http://www.cavotta.com/"},
	{id:108,name:"Jonboy Meyers",url:"http://www.jonboymeyers.com/"},
	{id:109,name:"Greg Hildebrandt",url:"http://www.brothershildebrandt.com/"},
	{id:110,name:"Phroilan Gardner",url:"http://phroilangardner.blogspot.com/"},
	{id:111,name:"Simon Bisley",url:"http://www.simonbisleyart.com/"},
	{id:112,name:"Samwise Didier",url:"http://www.artofsamwise.com/"},
	{id:113,name:"Stefan Kopinski",url:"http://www.stefankopinski.com/"},
	{id:114,name:"Mike Sass",url:"http://www.sassart.com/"},
	{id:115,name:"Randy Gallegos",url:"http://blog.gallegosart.com/"},
	{id:116,name:"Donato Giancola",url:"http://www.donatoart.com/"},
	{id:117,name:"Phil Saunders",url:"http://philsaunders.blogspot.com/"},
	{id:118,name:"Jaemin Kim",url:"http://jjaem.com/"},
	{id:119,name:"Erik Ko",url:"http://www.udonentertainment.com/"},
	{id:120,name:"Carl Critchlow",url:"http://www.carlcritchlow.com/"},
	{id:121,name:"Chris Rahn",url:"http://www.rahnart.com/"},
	{id:122,name:"Jakub Kasper",url:"http://jakubkasper.com/"},
	{id:123,name:"John Dickenson",url:"http://jdickensonart.com/"},
	{id:124,name:"Richie Marella",url:"http://wreckonning.deviantart.com/"},
	{id:125,name:"Mark Zug",url:"http://markzug.com/"},
	{id:126,name:"Ron Spears",url:"http://ronspearsart.com/"},
	{id:127,name:"Arthur Gimaldinov",url:"http://gimaldinov.deviantart.com/"},
	{id:128,name:"Brian Despain",url:"http://despainart.com/"},
	{id:129,name:"Tooth",url:null},
	{id:130,name:"Imaginary FS",url:"http://imaginaryfs.sg/"},
	{id:131,name:"Tim McBurnie",url:"http://www.timmcburnie.com/"},
	{id:132,name:"Karl Kopinski",url:"http://www.karlkopinski.com/"},
	{id:133,name:"Phill Gonzales",url:"http://phillgonzo.deviantart.com/"},
	{id:134,name:"Ken Steacy",url:"http://www.kenspublishing.com/"},
	{id:135,name:"Paul Warzecha",url:null},
	{id:136,name:"Scott Hampton",url:"http://en.wikipedia.org/wiki/Scott_Hampton"},
	{id:137,name:"Court Jones",url:"http://www.courtjones.com/"},
	{id:138,name:"Cole Eastburn",url:"http://thecolehole.blogspot.com/"},
	{id:139,name:"Ladronn",url:"http://www.ladronn.com/"},
	{id:140,name:"Monica Langlois",url:"http://monicalanglois.com/en/"},
	{id:141,name:"Matt Starbuck",url:"http://mattstarbuck.blogspot.com/"},
	{id:142,name:"Kev Walker",url:null},
	{id:143,name:"Ludo Lullabi",url:"http://ludolullabi.deviantart.com/"},
	{id:144,name:"Laurel \"LD\" Austin",url:"http://ldaustinart.blogspot.com/"},
	{id:145,name:"Andrea Uderzo",url:"http://andreauderzo.deviantart.com/"},
	{id:146,name:"Luke \"Mr. Jack\" Mancini",url:"http://mr--jack.deviantart.com/"},
	{id:147,name:"Ian Ameling",url:"http://ianameling.blogspot.com/"},
	{id:148,name:"Greg Staples",url:"http://www.gregstaples.co.uk/"},
	{id:149,name:"Svetlin Velinov",url:"http://svetlinvelinov.tumblr.com/"}
];

Deckie.cards = {
	qualities: [
		{id:1,name:"Free"},
		{id:2,name:"Common",craft:20,gcraft:400,de:5,gde:50},
		{id:3,name:"Rare",craft:100,gcraft:800,de:20,gde:100},
		{id:4,name:"Epic",craft:400,gcraft:1600,de:100,gde:400},
		{id:5,name:"Legendary",craft:1600,gcraft:3200,de:400,gde:1600}
	],
	types: [
		{id:1,name:"Spell"},
		{id:2,name:"Minion"},
		{id:3,name:"Weapon"}
	],
	races: [
		{id:1,name:"Beast"},
		{id:2,name:"Demon"},
		{id:3,name:"Dragon"},
		{id:4,name:"Murloc"},
		{id:5,name:"Pirate"},
		{id:6,name:"Totem"}
	],
	sets: [
		{id:1,name:"Basic"},
		{id:2,name:"Expert"},
		{id:3,name:"Promotion"},
		{id:4,name:"Reward"}
	],
	list: [
		/* druid */
		{id:1,name:"Innervate",typeid:1,qualityid:1,setid:1,cost:0,artistid:1,classid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hpid:548,hsid:366,hhid:254,hhimg:"EX1_169"},
		{id:2,name:"Moonfire",typeid:1,qualityid:2,setid:1,cost:0,artistid:4,classid:1,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:40,hpid:619,hsid:46,hhid:467,hhimg:"CS2_008"},
		{id:3,name:"Claw",typeid:1,qualityid:1,setid:1,cost:1,artistid:5,classid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:32,hpid:532,hsid:282,hhid:1050,hhimg:"CS2_005"},
		{id:4,name:"Naturalize",typeid:1,qualityid:2,setid:2,cost:1,artistid:6,classid:1,hpid:154,hsid:322,hhid:233,hhimg:"EX1_161"},
		{id:5,name:"Savagery",typeid:1,qualityid:3,setid:2,cost:1,artistid:7,classid:1,hpid:148,hsid:123,hhid:481,hhimg:"EX1_578"},
		{id:6,name:"Mark of the Wild",typeid:1,qualityid:1,setid:1,cost:2,artistid:8,classid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:28,taunt:true,hpid:480,hsid:27,hhid:213,hhimg:"CS2_009"},
		{id:7,name:"Power of the Wild",typeid:1,qualityid:2,setid:2,cost:2,artistid:9,classid:1,choose_one:true,hpid:165,hsid:144,hhid:503,hhimg:"EX1_160"},
		{id:8,name:"Wild Growth",typeid:1,qualityid:1,setid:1,cost:2,artistid:10,classid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:23,hpid:282,hsid:205,hhid:1124,hhimg:"CS2_013"},
		{id:9,name:"Wrath",typeid:1,qualityid:2,setid:2,cost:2,artistid:11,classid:1,choose_one:true,hpid:633,hsid:323,hhid:836,hhimg:"EX1_154"},
		{id:10,name:"Healing Touch",typeid:1,qualityid:1,setid:1,cost:3,artistid:14,classid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hpid:258,hsid:224,hhid:773,hhimg:"CS2_007"},
		{id:11,name:"Mark of Nature",typeid:1,qualityid:2,setid:2,cost:3,artistid:15,classid:1,choose_one:true,taunt:true,hpid:149,hsid:347,hhid:151,hhimg:"EX1_155"},
		{id:12,name:"Savage Roar",typeid:1,qualityid:2,setid:1,cost:3,artistid:16,classid:1,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:43,hpid:329,hsid:365,hhid:742,hhimg:"CS2_011"},
		{id:13,name:"Bite",typeid:1,qualityid:3,setid:2,cost:4,artistid:17,classid:1,hpid:266,hsid:292,hhid:577,hhimg:"EX1_570"},
		{id:14,name:"Keeper of the Grove",typeid:2,qualityid:3,setid:2,cost:4,artistid:18,health:4,attack:2,classid:1,choose_one:true,silence:true,hpid:459,hsid:93,hhid:601,hhimg:"EX1_166"},
		{id:15,name:"Soul of the Forest",typeid:1,qualityid:2,setid:2,cost:4,artistid:19,classid:1,deathrattle:true,hpid:311,hsid:111,hhid:381,hhimg:"EX1_158"},
		{id:16,name:"Swipe",typeid:1,qualityid:2,setid:1,cost:4,artistid:20,classid:1,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:47,hpid:620,hsid:307,hhid:64,hhimg:"CS2_012"},
		{id:17,name:"Druid of the Claw",typeid:2,qualityid:2,setid:2,cost:5,artistid:21,health:4,attack:4,classid:1,charge:true,choose_one:true,taunt:true,hpid:587,hsid:208,hhid:692,hhimg:"EX1_165"},
		{id:18,name:"Nourish",typeid:1,qualityid:3,setid:2,cost:5,artistid:22,classid:1,choose_one:true,hpid:120,hsid:150,hhid:95,hhimg:"EX1_164"},
		{id:19,name:"Starfall",typeid:1,qualityid:3,setid:2,cost:5,artistid:4,classid:1,choose_one:true,hpid:464,hsid:56,hhid:86,hhimg:"NEW1_007"},
		{id:20,name:"Force of Nature",typeid:1,qualityid:4,setid:2,cost:6,artistid:23,classid:1,charge:true,hpid:237,hsid:156,hhid:493,hhimg:"EX1_571"},
		{id:21,name:"Starfire",typeid:1,qualityid:2,setid:1,cost:6,artistid:12,classid:1,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:45,hpid:667,hsid:239,hhid:823,hhimg:"EX1_173"},
		{id:22,name:"Ancient of Lore",typeid:2,qualityid:4,setid:2,cost:7,artistid:24,health:5,attack:5,classid:1,choose_one:true,hpid:34,hsid:102,hhid:920,hhimg:"NEW1_008"},
		{id:23,name:"Ancient of War",typeid:2,qualityid:4,setid:2,cost:7,artistid:20,health:5,attack:5,classid:1,choose_one:true,taunt:true,hpid:242,hsid:305,hhid:1035,hhimg:"EX1_178"},
		{id:24,name:"Ironbark Protector",typeid:2,qualityid:2,setid:1,cost:8,artistid:25,health:8,attack:8,classid:1,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:49,taunt:true,hpid:238,hsid:377,hhid:205,hhimg:"CS2_232"},
		{id:25,name:"Cenarius",typeid:2,qualityid:5,setid:2,cost:9,artistid:12,health:8,attack:5,classid:1,choose_one:true,taunt:true,hpid:605,hsid:200,hhid:36,hhimg:"EX1_573"},
		/* hunter */
		{id:26,name:"Hunter's Mark",typeid:1,qualityid:2,setid:1,cost:0,artistid:26,classid:2,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:40,hpid:22,hsid:297,hhid:141,hhimg:"CS2_084"},
		{id:27,name:"Arcane Shot",typeid:1,qualityid:1,setid:1,cost:1,artistid:13,classid:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:32,hpid:167,hsid:62,hhid:877,hhimg:"DS1_185"},
		{id:28,name:"Bestial Wrath",typeid:1,qualityid:4,setid:2,cost:1,artistid:12,classid:2,immune:true,hpid:304,hsid:210,hhid:903,hhimg:"EX1_549"},
		{id:29,name:"Flare",typeid:1,qualityid:3,setid:2,cost:1,artistid:27,classid:2,secret:true,stealth:true,hpid:630,hsid:218,hhid:896,hhimg:"EX1_544"},
		{id:30,name:"Timber Wolf",typeid:2,qualityid:1,setid:1,cost:1,artistid:28,health:1,attack:1,raceid:1,classid:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:23,hpid:86,hsid:135,hhid:606,hhimg:"DS1_175"},
		{id:31,name:"Tracking",typeid:1,qualityid:1,setid:1,cost:1,artistid:29,classid:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hpid:163,hsid:272,hhid:1047,hhimg:"DS1_184"},
		{id:32,name:"Explosive Trap",typeid:1,qualityid:2,setid:2,cost:2,artistid:30,classid:2,secret:true,hpid:344,hsid:202,hhid:585,hhimg:"EX1_610"},
		{id:33,name:"Freezing Trap",typeid:1,qualityid:2,setid:2,cost:2,artistid:31,classid:2,secret:true,hpid:99,hsid:234,hhid:519,hhimg:"EX1_611"},
		{id:34,name:"Misdirection",typeid:1,qualityid:3,setid:2,cost:2,artistid:32,classid:2,secret:true,hpid:447,hsid:11,hhid:1091,hhimg:"EX1_533"},
		{id:35,name:"Scavenging Hyena",typeid:2,qualityid:2,setid:2,cost:2,artistid:33,health:2,attack:2,raceid:1,classid:2,hpid:279,hsid:160,hhid:1281,hhimg:"EX1_531"},
		{id:36,name:"Snake Trap",typeid:1,qualityid:4,setid:2,cost:2,artistid:34,classid:2,secret:true,hpid:210,hsid:247,hhid:455,hhimg:"EX1_554"},
		{id:37,name:"Snipe",typeid:1,qualityid:2,setid:2,cost:2,artistid:35,classid:2,secret:true,hpid:553,hsid:290,hhid:814,hhimg:"EX1_609"},
		{id:38,name:"Starving Buzzard",typeid:2,qualityid:2,setid:1,cost:2,artistid:34,health:1,attack:2,raceid:1,classid:2,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:47,hpid:101,hsid:212,hhid:1241,hhimg:"CS2_237"},
		{id:39,name:"Unleash the Hounds",typeid:1,qualityid:2,setid:2,cost:2,artistid:36,classid:2,charge:true,hpid:317,hsid:78,hhid:1243,hhimg:"EX1_538"},
		{id:40,name:"Animal Companion",typeid:1,qualityid:2,setid:1,cost:3,artistid:37,classid:2,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:45,hpid:578,hsid:53,hhid:437,hhimg:"NEW1_031"},
		{id:41,name:"Deadly Shot",typeid:1,qualityid:2,setid:2,cost:3,artistid:38,classid:2,hpid:239,hsid:281,hhid:1093,hhimg:"EX1_617"},
		{id:42,name:"Eaglehorn Bow",typeid:3,qualityid:3,setid:2,cost:3,artistid:14,attack:3,durability:2,classid:2,hpid:363,hsid:255,hhid:1662,hhimg:"EX1_536"},
		{id:43,name:"Kill Command",typeid:1,qualityid:2,setid:1,cost:3,artistid:39,classid:2,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:49,hpid:488,hsid:257,hhid:296,hhimg:"EX1_539"},
		{id:44,name:"Houndmaster",typeid:2,qualityid:1,setid:1,cost:4,artistid:40,health:3,attack:4,classid:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:28,battlecry:true,taunt:true,hpid:225,hsid:253,hhid:1003,hhimg:"DS1_070"},
		{id:45,name:"Multi-Shot",typeid:1,qualityid:1,setid:1,cost:4,artistid:41,classid:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hpid:407,hsid:94,hhid:292,hhimg:"DS1_183"},
		{id:46,name:"Explosive Shot",typeid:1,qualityid:3,setid:2,cost:5,artistid:17,classid:2,hpid:114,hsid:283,hhid:394,hhimg:"EX1_537"},
		{id:47,name:"Tundra Rhino",typeid:2,qualityid:2,setid:1,cost:5,artistid:42,health:5,attack:2,raceid:1,classid:2,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:43,charge:true,hpid:162,hsid:333,hhid:699,hhimg:"DS1_178"},
		{id:48,name:"Savannah Highmane",typeid:2,qualityid:3,setid:2,cost:6,artistid:43,health:5,attack:6,raceid:1,classid:2,deathrattle:true,hpid:8,hsid:86,hhid:1261,hhimg:"EX1_534"},
		{id:49,name:"Gladiator's Longbow",typeid:3,qualityid:4,setid:2,cost:7,artistid:44,attack:5,durability:2,classid:2,immune:true,hpid:278,hsid:381,hhid:311,hhimg:"DS1_188"},
		{id:50,name:"King Krush",typeid:2,qualityid:5,setid:2,cost:9,artistid:12,health:8,attack:8,raceid:1,classid:2,charge:true,hpid:194,hsid:295,hhid:1114,hhimg:"EX1_543"},
		/* mage */
		{id:51,name:"Arcane Missiles",typeid:1,qualityid:1,setid:1,cost:1,artistid:45,classid:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:32,hpid:589,hsid:304,hhid:564,hhimg:"EX1_277"},
		{id:52,name:"Ice Lance",typeid:1,qualityid:2,setid:2,cost:1,artistid:12,classid:3,freeze:true,hpid:188,hsid:83,hhid:172,hhimg:"CS2_031"},
		{id:53,name:"Mana Wyrm",typeid:2,qualityid:2,setid:2,cost:1,artistid:46,health:3,attack:1,classid:3,hpid:263,hsid:122,hhid:405,hhimg:"NEW1_012"},
		{id:54,name:"Mirror Image",typeid:1,qualityid:2,setid:1,cost:1,artistid:33,classid:3,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:36,taunt:true,hpid:30,hsid:213,hhid:1084,hhimg:"CS2_027"},
		{id:55,name:"Arcane Explosion",typeid:1,qualityid:1,setid:1,cost:2,artistid:47,classid:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:28,hpid:56,hsid:318,hhid:447,hhimg:"CS2_025"},
		{id:56,name:"Frostbolt",typeid:1,qualityid:2,setid:1,cost:2,artistid:48,classid:3,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:40,freeze:true,hpid:177,hsid:29,hhid:662,hhimg:"CS2_024"},
		{id:57,name:"Sorcerer's Apprentice",typeid:2,qualityid:2,setid:2,cost:2,artistid:12,health:2,attack:3,classid:3,hpid:4,hsid:169,hhid:614,hhimg:"EX1_608"},
		{id:58,name:"Arcane Intellect",typeid:1,qualityid:1,setid:1,cost:3,artistid:49,classid:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hpid:489,hsid:149,hhid:555,hhimg:"CS2_023"},
		{id:59,name:"Counterspell",typeid:1,qualityid:3,setid:2,cost:3,artistid:50,classid:3,counter:true,secret:true,hpid:531,hsid:265,hhid:113,hhimg:"EX1_287"},
		{id:60,name:"Frost Nova",typeid:1,qualityid:2,setid:1,cost:3,artistid:51,classid:3,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:23,freeze:true,hpid:49,hsid:263,hhid:587,hhimg:"CS2_026"},
		{id:61,name:"Ice Barrier",typeid:1,qualityid:2,setid:2,cost:3,artistid:52,classid:3,secret:true,hpid:672,hsid:340,hhid:621,hhimg:"EX1_289"},
		{id:62,name:"Ice Block",typeid:1,qualityid:4,setid:2,cost:3,artistid:53,classid:3,immune:true,secret:true,hpid:28,hsid:114,hhid:192,hhimg:"EX1_295"},
		{id:63,name:"Kirin Tor Mage",typeid:2,qualityid:3,setid:2,cost:3,artistid:54,health:3,attack:4,classid:3,battlecry:true,secret:true,hpid:411,hsid:166,hhid:748,hhimg:"EX1_612"},
		{id:64,name:"Mirror Entity",typeid:1,qualityid:2,setid:2,cost:3,artistid:55,classid:3,secret:true,hpid:569,hsid:264,hhid:195,hhimg:"EX1_294"},
		{id:65,name:"Spellbender",typeid:1,qualityid:4,setid:2,cost:3,artistid:56,classid:3,secret:true,hpid:309,hsid:314,hhid:366,hhimg:"tt_010"},
		{id:66,name:"Vaporize",typeid:1,qualityid:3,setid:2,cost:3,artistid:11,classid:3,secret:true,hpid:160,hsid:328,hhid:286,hhimg:"EX1_594"},
		{id:67,name:"Cone of Cold",typeid:1,qualityid:2,setid:2,cost:4,artistid:54,classid:3,freeze:true,hpid:26,hsid:57,hhid:430,hhimg:"EX1_275"},
		{id:68,name:"Ethereal Arcanist",typeid:2,qualityid:3,setid:2,cost:4,artistid:57,health:3,attack:3,classid:3,secret:true,hpid:125,hsid:278,hhid:1737,hhimg:"EX1_274"},
		{id:69,name:"Fireball",typeid:1,qualityid:1,setid:1,cost:4,artistid:58,classid:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:44,hpid:522,hsid:273,hhid:315,hhimg:"CS2_029"},
		{id:70,name:"Polymorph",typeid:1,qualityid:1,setid:1,cost:4,artistid:59,classid:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:47,hpid:595,hsid:21,hhid:77,hhimg:"CS2_022"},
		{id:71,name:"Water Elemental",typeid:2,qualityid:2,setid:1,cost:4,artistid:60,health:6,attack:3,classid:3,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:49,freeze:true,hpid:274,hsid:254,hhid:395,hhimg:"CS2_033"},
		{id:72,name:"Blizzard",typeid:1,qualityid:3,setid:2,cost:6,artistid:61,classid:3,freeze:true,hpid:276,hsid:77,hhid:457,hhimg:"CS2_028"},
		{id:73,name:"Archmage Antonidas",typeid:2,qualityid:5,setid:2,cost:7,artistid:62,health:7,attack:5,classid:3,hpid:220,hsid:256,hhid:1080,hhimg:"EX1_559"},
		{id:74,name:"Flamestrike",typeid:1,qualityid:2,setid:1,cost:7,artistid:63,classid:3,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:51,hpid:44,hsid:360,hhid:1004,hhimg:"CS2_032"},
		{id:75,name:"Pyroblast",typeid:1,qualityid:4,setid:2,cost:10,artistid:13,classid:3,hpid:496,hsid:312,hhid:1087,hhimg:"EX1_279"},
		/* paladin */
		{id:76,name:"Blessing of Might",typeid:1,qualityid:1,setid:1,cost:1,artistid:64,classid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hpid:394,hsid:19,hhid:70,hhimg:"CS2_087"},
		{id:77,name:"Blessing of Wisdom",typeid:1,qualityid:2,setid:2,cost:1,artistid:68,classid:4,hpid:100,hsid:88,hhid:1373,hhimg:"EX1_363"},
		{id:78,name:"Eye for an Eye",typeid:1,qualityid:2,setid:2,cost:1,artistid:10,classid:4,secret:true,hpid:206,hsid:126,hhid:462,hhimg:"EX1_132"},
		{id:79,name:"Hand of Protection",typeid:1,qualityid:1,setid:1,cost:1,artistid:15,classid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:23,divine_shield:true,hpid:499,hsid:327,hhid:727,hhimg:"EX1_371"},
		{id:80,name:"Humility",typeid:1,qualityid:2,setid:1,cost:1,artistid:32,classid:4,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:28,hpid:189,hsid:25,hhid:854,hhimg:"EX1_360"},
		{id:81,name:"Light's Justice",typeid:3,qualityid:1,setid:1,cost:1,artistid:69,attack:1,durability:4,classid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hpid:250,hsid:341,hhid:383,hhimg:"CS2_091"},
		{id:82,name:"Noble Sacrifice",typeid:1,qualityid:2,setid:2,cost:1,artistid:70,classid:4,secret:true,hpid:158,hsid:320,hhid:584,hhimg:"EX1_130"},
		{id:83,name:"Redemption",typeid:1,qualityid:2,setid:2,cost:1,artistid:71,classid:4,secret:true,hpid:657,hsid:194,hhid:140,hhimg:"EX1_136"},
		{id:84,name:"Repentance",typeid:1,qualityid:2,setid:2,cost:1,artistid:56,classid:4,secret:true,hpid:642,hsid:351,hhid:232,hhimg:"EX1_379"},
		{id:85,name:"Argent Protector",typeid:2,qualityid:2,setid:2,cost:2,artistid:1,health:2,attack:2,classid:4,battlecry:true,divine_shield:true,hpid:191,hsid:285,hhid:1022,hhimg:"EX1_362"},
		{id:86,name:"Equality",typeid:1,qualityid:3,setid:2,cost:2,artistid:72,classid:4,hpid:383,hsid:51,hhid:756,hhimg:"EX1_619"},
		{id:87,name:"Holy Light",typeid:1,qualityid:1,setid:1,cost:2,artistid:70,classid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hpid:108,hsid:373,hhid:291,hhimg:"CS2_089"},
		{id:88,name:"Aldor Peacekeeper",typeid:2,qualityid:3,setid:2,cost:3,artistid:5,health:3,attack:3,classid:4,battlecry:true,hpid:23,hsid:76,hhid:1167,hhimg:"EX1_382"},
		{id:89,name:"Divine Favor",typeid:1,qualityid:3,setid:2,cost:3,artistid:73,classid:4,hpid:581,hsid:369,hhid:679,hhimg:"EX1_349"},
		{id:90,name:"Sword of Justice",typeid:3,qualityid:4,setid:2,cost:3,artistid:74,attack:1,durability:5,classid:4,hpid:567,hsid:354,hhid:643,hhimg:"EX1_366"},
		{id:91,name:"Blessing of Kings",typeid:1,qualityid:2,setid:1,cost:4,artistid:73,classid:4,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:49,hpid:29,hsid:20,hhid:943,hhimg:"CS2_092"},
		{id:92,name:"Consecration",typeid:1,qualityid:2,setid:1,cost:4,artistid:59,classid:4,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:43,hpid:260,hsid:338,hhid:476,hhimg:"CS2_093"},
		{id:93,name:"Hammer of Wrath",typeid:1,qualityid:1,setid:1,cost:4,artistid:74,classid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:32,hpid:350,hsid:335,hhid:250,hhimg:"CS2_094"},
		{id:94,name:"Truesilver Champion",typeid:3,qualityid:2,setid:1,cost:4,artistid:75,attack:4,durability:2,classid:4,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:40,hpid:293,hsid:118,hhid:847,hhimg:"CS2_097"},
		{id:95,name:"Blessed Champion",typeid:1,qualityid:3,setid:2,cost:5,artistid:27,classid:4,hpid:7,hsid:85,hhid:1522,hhimg:"EX1_355"},
		{id:96,name:"Holy Wrath",typeid:1,qualityid:3,setid:2,cost:5,artistid:76,classid:4,hpid:355,hsid:186,hhid:435,hhimg:"EX1_365"},
		{id:97,name:"Avenging Wrath",typeid:1,qualityid:4,setid:2,cost:6,artistid:52,classid:4,hpid:142,hsid:284,hhid:1174,hhimg:"EX1_384"},
		{id:98,name:"Guardian of Kings",typeid:2,qualityid:2,setid:1,cost:7,artistid:77,health:6,attack:5,classid:4,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:47,battlecry:true,hpid:283,hsid:220,hhid:1068,hhimg:"CS2_088"},
		{id:99,name:"Lay on Hands",typeid:1,qualityid:4,setid:2,cost:8,artistid:11,classid:4,hpid:506,hsid:35,hhid:594,hhimg:"EX1_354"},
		{id:100,name:"Tirion Fordring",typeid:2,qualityid:5,setid:2,cost:8,artistid:78,health:6,attack:6,classid:4,deathrattle:true,divine_shield:true,taunt:true,hpid:391,hsid:59,hhid:890,hhimg:"EX1_383"},
		/* priest */
		{id:101,name:"Circle of Healing",typeid:1,qualityid:2,setid:2,cost:0,artistid:65,classid:5,hpid:38,hsid:246,hhid:1362,hhimg:"EX1_621"},
		{id:102,name:"Silence",typeid:1,qualityid:2,setid:2,cost:0,artistid:70,classid:5,silence:true,hpid:544,hsid:358,hhid:1189,hhimg:"EX1_332"},
		{id:103,name:"Holy Smite",typeid:1,qualityid:1,setid:1,cost:1,artistid:48,classid:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:23,hpid:409,hsid:185,hhid:279,hhimg:"CS1_130"},
		{id:104,name:"Inner Fire",typeid:1,qualityid:2,setid:2,cost:1,artistid:38,classid:5,hpid:207,hsid:110,hhid:376,hhimg:"CS1_129"},
		{id:105,name:"Mind Vision",typeid:1,qualityid:2,setid:1,cost:1,artistid:57,classid:5,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:32,hpid:438,hsid:37,hhid:1099,hhimg:"CS2_003"},
		{id:106,name:"Northshire Cleric",typeid:2,qualityid:1,setid:1,cost:1,artistid:22,health:3,attack:1,classid:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:40,hpid:600,hsid:287,hhid:1650,hhimg:"CS2_235"},
		{id:107,name:"Power Word: Shield",typeid:1,qualityid:1,setid:1,cost:1,artistid:79,classid:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:47,hpid:431,hsid:148,hhid:613,hhimg:"CS2_004"},
		{id:108,name:"Divine Spirit",typeid:1,qualityid:2,setid:1,cost:2,artistid:80,classid:5,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:28,hpid:554,hsid:330,hhid:1361,hhimg:"CS2_236"},
		{id:109,name:"Lightwell",typeid:2,qualityid:3,setid:2,cost:2,artistid:81,health:5,attack:0,classid:5,hpid:117,hsid:41,hhid:797,hhimg:"EX1_341"},
		{id:110,name:"Mind Blast",typeid:1,qualityid:1,setid:1,cost:2,artistid:25,classid:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hpid:415,hsid:134,hhid:545,hhimg:"DS1_233"},
		{id:111,name:"Shadow Word: Pain",typeid:1,qualityid:1,setid:1,cost:2,artistid:11,classid:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hpid:315,hsid:319,hhid:1367,hhimg:"CS2_234"},
		{id:112,name:"Shadow Word: Death",typeid:1,qualityid:2,setid:1,cost:3,artistid:11,classid:5,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:43,hpid:547,hsid:348,hhid:1363,hhimg:"EX1_622"},
		{id:113,name:"Shadowform",typeid:1,qualityid:4,setid:2,cost:3,artistid:12,classid:5,hpid:421,hsid:262,hhid:1368,hhimg:"EX1_625"},
		{id:114,name:"Thoughtsteal",typeid:1,qualityid:2,setid:2,cost:3,artistid:52,classid:5,hpid:62,hsid:159,hhid:30,hhimg:"EX1_339"},
		{id:115,name:"Auchenai Soulpriest",typeid:2,qualityid:3,setid:2,cost:4,artistid:1,health:5,attack:3,classid:5,hpid:656,hsid:209,hhid:237,hhimg:"EX1_591"},
		{id:116,name:"Lightspawn",typeid:2,qualityid:2,setid:2,cost:4,artistid:65,health:5,attack:0,classid:5,hpid:192,hsid:157,hhid:886,hhimg:"EX1_335"},
		{id:117,name:"Mass Dispel",typeid:1,qualityid:3,setid:2,cost:4,artistid:20,classid:5,silence:true,hpid:249,hsid:48,hhid:1366,hhimg:"EX1_626"},
		{id:118,name:"Mindgames",typeid:1,qualityid:4,setid:2,cost:4,artistid:70,classid:5,hpid:301,hsid:152,hhid:145,hhimg:"EX1_345"},
		{id:119,name:"Shadow Madness",typeid:1,qualityid:3,setid:2,cost:4,artistid:82,classid:5,hpid:442,hsid:50,hhid:220,hhimg:"EX1_334"},
		{id:120,name:"Holy Nova",typeid:1,qualityid:2,setid:1,cost:5,artistid:13,classid:5,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:45,hpid:671,hsid:16,hhid:841,hhimg:"CS1_112"},
		{id:121,name:"Cabal Shadow Priest",typeid:2,qualityid:4,setid:2,cost:6,artistid:68,health:5,attack:4,classid:5,battlecry:true,hpid:147,hsid:248,hhid:272,hhimg:"EX1_091"},
		{id:122,name:"Holy Fire",typeid:1,qualityid:3,setid:2,cost:6,artistid:83,classid:5,hpid:457,hsid:170,hhid:1365,hhimg:"EX1_624"},
		{id:123,name:"Temple Enforcer",typeid:2,qualityid:2,setid:2,cost:6,artistid:32,health:6,attack:6,classid:5,battlecry:true,hpid:232,hsid:363,hhid:1364,hhimg:"EX1_623"},
		{id:124,name:"Prophet Velen",typeid:2,qualityid:5,setid:2,cost:7,artistid:37,health:7,attack:7,classid:5,hpid:228,hsid:162,hhid:9,hhimg:"EX1_350"},
		{id:125,name:"Mind Control",typeid:1,qualityid:2,setid:1,cost:10,artistid:20,classid:5,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:49,hpid:401,hsid:81,hhid:8,hhimg:"CS1_113"},
		/* rogue */
		{id:126,name:"Backstab",typeid:1,qualityid:1,setid:1,cost:1,artistid:66,classid:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hpid:471,hsid:69,hhid:180,hhimg:"CS2_072"},
		{id:127,name:"Preparation",typeid:1,qualityid:4,setid:2,cost:0,artistid:15,classid:6,hpid:364,hsid:215,hhid:1158,hhimg:"EX1_145"},
		{id:128,name:"Shadowstep",typeid:1,qualityid:2,setid:2,cost:0,artistid:84,classid:6,hpid:550,hsid:71,hhid:365,hhimg:"EX1_144"},
		{id:129,name:"Cold Blood",typeid:1,qualityid:2,setid:2,cost:1,artistid:12,classid:6,combo:true,hpid:92,hsid:196,hhid:268,hhimg:"CS2_073"},
		{id:130,name:"Conceal",typeid:1,qualityid:2,setid:2,cost:1,artistid:85,classid:6,stealth:true,hpid:284,hsid:177,hhid:990,hhimg:"EX1_128"},
		{id:131,name:"Deadly Poison",typeid:1,qualityid:1,setid:1,cost:1,artistid:23,classid:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:43,hpid:87,hsid:97,hhid:459,hhimg:"CS2_074"},
		{id:132,name:"Sinister Strike",typeid:1,qualityid:1,setid:1,cost:1,artistid:86,classid:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hpid:205,hsid:316,hhid:710,hhimg:"CS2_075"},
		{id:133,name:"Betrayal",typeid:1,qualityid:2,setid:2,cost:2,artistid:73,classid:6,hpid:198,hsid:231,hhid:282,hhimg:"EX1_126"},
		{id:134,name:"Blade Flurry",typeid:1,qualityid:3,setid:2,cost:2,artistid:87,classid:6,hpid:244,hsid:47,hhid:1064,hhimg:"CS2_233"},
		{id:135,name:"Defias Ringleader",typeid:2,qualityid:2,setid:2,cost:2,artistid:74,health:2,attack:2,classid:6,combo:true,hpid:417,hsid:293,hhid:201,hhimg:"EX1_131"},
		{id:136,name:"Eviscerate",typeid:1,qualityid:2,setid:2,cost:2,artistid:88,classid:6,combo:true,hpid:382,hsid:350,hhid:904,hhimg:"EX1_124"},
		{id:137,name:"Patient Assassin",typeid:2,qualityid:4,setid:2,cost:2,artistid:89,health:1,attack:1,classid:6,stealth:true,hpid:14,hsid:12,hhid:1133,hhimg:"EX1_522"},
		{id:138,name:"Sap",typeid:1,qualityid:1,setid:1,cost:2,artistid:90,classid:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:40,hpid:385,hsid:79,hhid:461,hhimg:"EX1_581"},
		{id:139,name:"Shiv",typeid:1,qualityid:2,setid:1,cost:2,artistid:52,classid:6,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:45,hpid:164,hsid:183,hhid:573,hhimg:"EX1_278"},
		{id:140,name:"Edwin VanCleef",typeid:2,qualityid:5,setid:2,cost:3,artistid:91,health:2,attack:2,classid:6,combo:true,hpid:3,hsid:1,hhid:306,hhimg:"EX1_613"},
		{id:141,name:"Fan of Knives",typeid:1,qualityid:2,setid:1,cost:3,artistid:92,classid:6,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:29,hpid:378,hsid:98,hhid:667,hhimg:"EX1_129"},
		{id:142,name:"Headcrack",typeid:1,qualityid:3,setid:2,cost:3,artistid:93,classid:6,combo:true,hpid:135,hsid:61,hhid:708,hhimg:"EX1_137"},
		{id:143,name:"Perdition's Blade",typeid:3,qualityid:3,setid:2,cost:3,artistid:32,attack:2,durability:2,classid:6,battlecry:true,combo:true,hpid:82,hsid:2,hhid:391,hhimg:"EX1_133"},
		{id:144,name:"SI:7 Agent",typeid:2,qualityid:3,setid:2,cost:3,artistid:94,health:3,attack:3,classid:6,combo:true,hpid:286,hsid:161,hhid:1117,hhimg:"EX1_134"},
		{id:145,name:"Master of Disguise",typeid:2,qualityid:3,setid:2,cost:4,artistid:95,health:4,attack:4,classid:6,battlecry:true,stealth:true,hpid:127,hsid:207,hhid:887,hhimg:"NEW1_014"},
		{id:146,name:"Assassin's Blade",typeid:3,qualityid:2,setid:1,cost:5,artistid:96,attack:3,durability:4,classid:6,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:32,hpid:433,hsid:74,hhid:421,hhimg:"CS2_080"},
		{id:147,name:"Assassinate",typeid:1,qualityid:1,setid:1,cost:5,artistid:69,classid:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:47,hpid:568,hsid:31,hhid:345,hhimg:"CS2_076"},
		{id:148,name:"Kidnapper",typeid:2,qualityid:4,setid:2,cost:6,artistid:25,health:3,attack:5,classid:6,combo:true,hpid:562,hsid:67,hhid:287,hhimg:"NEW1_005"},
		{id:149,name:"Vanish",typeid:1,qualityid:2,setid:1,cost:6,artistid:20,classid:6,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:23,hpid:658,hsid:116,hhid:196,hhimg:"NEW1_004"},
		{id:150,name:"Sprint",typeid:1,qualityid:2,setid:1,cost:7,artistid:97,classid:6,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:49,hpid:90,hsid:206,hhid:630,hhimg:"CS2_077"},
		/* shaman */
		{id:151,name:"Ancestral Healing",typeid:1,qualityid:1,setid:1,cost:0,artistid:3,classid:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,taunt:true,hpid:216,hsid:176,hhid:149,hhimg:"CS2_041"},
		{id:152,name:"Totemic Might",typeid:1,qualityid:2,setid:1,cost:0,artistid:2,classid:7,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:28,hpid:367,hsid:7,hhid:830,hhimg:"EX1_244"},
		{id:153,name:"Dust Devil",typeid:2,qualityid:2,setid:2,cost:1,artistid:11,health:1,attack:3,classid:7,overload:true,windfury:true,hpid:129,hsid:372,hhid:618,hhimg:"EX1_243"},
		{id:154,name:"Earth Shock",typeid:1,qualityid:2,setid:2,cost:1,artistid:98,classid:7,silence:true,hpid:77,hsid:58,hhid:767,hhimg:"EX1_245"},
		{id:155,name:"Forked Lightning",typeid:1,qualityid:2,setid:2,cost:1,artistid:58,classid:7,overload:true,hpid:530,hsid:326,hhid:299,hhimg:"EX1_251"},
		{id:156,name:"Frost Shock",typeid:1,qualityid:1,setid:1,cost:1,artistid:12,classid:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:32,freeze:true,hpid:233,hsid:223,hhid:971,hhimg:"CS2_037"},
		{id:157,name:"Lightning Bolt",typeid:1,qualityid:2,setid:2,cost:1,artistid:65,classid:7,overload:true,hpid:10,hsid:92,hhid:505,hhimg:"EX1_238"},
		{id:158,name:"Rockbiter Weapon",typeid:1,qualityid:1,setid:1,cost:1,artistid:12,classid:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hpid:491,hsid:211,hhid:239,hhimg:"CS2_045"},
		{id:159,name:"Ancestral Spirit",typeid:1,qualityid:3,setid:2,cost:2,artistid:70,classid:7,hpid:526,hsid:72,hhid:404,hhimg:"CS2_038"},
		{id:160,name:"Flametongue Totem",typeid:2,qualityid:2,setid:1,cost:2,artistid:99,health:3,attack:0,raceid:6,classid:7,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:43,hpid:390,hsid:30,hhid:1008,hhimg:"EX1_565"},
		{id:161,name:"Stormforged Axe",typeid:3,qualityid:2,setid:2,cost:2,artistid:100,attack:2,durability:3,classid:7,overload:true,hpid:152,hsid:362,hhid:960,hhimg:"EX1_247"},
		{id:162,name:"Windfury",typeid:1,qualityid:1,setid:1,cost:2,artistid:76,classid:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:23,windfury:true,hpid:146,hsid:251,hhid:51,hhimg:"CS2_039"},
		{id:163,name:"Far Sight",typeid:1,qualityid:4,setid:2,cost:3,artistid:42,classid:7,hpid:107,hsid:44,hhid:818,hhimg:"CS2_053"},
		{id:164,name:"Feral Spirit",typeid:1,qualityid:3,setid:2,cost:3,artistid:15,classid:7,overload:true,taunt:true,hpid:214,hsid:374,hhid:238,hhimg:"EX1_248"},
		{id:165,name:"Hex",typeid:1,qualityid:1,setid:1,cost:3,artistid:85,classid:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:47,taunt:true,hpid:270,hsid:308,hhid:766,hhimg:"EX1_246"},
		{id:166,name:"Lava Burst",typeid:1,qualityid:3,setid:2,cost:3,artistid:3,classid:7,overload:true,hpid:679,hsid:342,hhid:864,hhimg:"EX1_241"},
		{id:167,name:"Lightning Storm",typeid:1,qualityid:3,setid:2,cost:3,artistid:94,classid:7,overload:true,hpid:676,hsid:40,hhid:629,hhimg:"EX1_259"},
		{id:168,name:"Mana Tide Totem",typeid:2,qualityid:3,setid:2,cost:3,artistid:90,health:3,attack:0,raceid:6,classid:7,hpid:613,hsid:258,hhid:513,hhimg:"EX1_575"},
		{id:169,name:"Unbound Elemental",typeid:2,qualityid:2,setid:2,cost:3,artistid:31,health:4,attack:2,classid:7,overload:true,hpid:51,hsid:18,hhid:774,hhimg:"EX1_258"},
		{id:170,name:"Windspeaker",typeid:2,qualityid:2,setid:1,cost:4,artistid:59,health:3,attack:3,classid:7,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:45,battlecry:true,windfury:true,hpid:151,hsid:155,hhid:178,hhimg:"EX1_587"},
		{id:171,name:"Bloodlust",typeid:1,qualityid:2,setid:1,cost:5,artistid:13,classid:7,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:40,hpid:256,hsid:66,hhid:1171,hhimg:"CS2_046"},
		{id:172,name:"Doomhammer",typeid:3,qualityid:4,setid:2,cost:5,artistid:101,attack:2,durability:8,classid:7,overload:true,windfury:true,hpid:172,hsid:271,hhid:352,hhimg:"EX1_567"},
		{id:173,name:"Earth Elemental",typeid:2,qualityid:4,setid:2,cost:5,artistid:3,health:8,attack:7,classid:7,overload:true,taunt:true,hpid:124,hsid:367,hhid:1141,hhimg:"EX1_250"},
		{id:174,name:"Fire Elemental",typeid:2,qualityid:2,setid:1,cost:6,artistid:58,health:5,attack:6,classid:7,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:49,battlecry:true,hpid:636,hsid:289,hhid:189,hhimg:"CS2_042"},
		{id:175,name:"Al'Akir the Windlord",typeid:2,qualityid:5,setid:2,cost:8,artistid:11,health:5,attack:3,classid:7,charge:true,divine_shield:true,taunt:true,windfury:true,hpid:335,hsid:142,hhid:32,hhimg:"NEW1_010"},
		/* warlock */
		{id:176,name:"Sacrificial Pact",typeid:1,qualityid:2,setid:1,cost:0,artistid:33,classid:8,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:15,hpid:348,hsid:226,hhid:163,hhimg:"NEW1_003"},
		{id:177,name:"Soulfire",typeid:1,qualityid:2,setid:1,cost:0,artistid:11,classid:8,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:28,hpid:529,hsid:163,hhid:974,hhimg:"EX1_308"},
		{id:178,name:"Blood Imp",typeid:2,qualityid:2,setid:2,cost:1,artistid:34,health:1,attack:0,raceid:2,classid:8,stealth:true,hpid:196,hsid:311,hhid:469,hhimg:"CS2_059"},
		{id:179,name:"Corruption",typeid:1,qualityid:2,setid:1,cost:1,artistid:62,classid:8,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:32,hpid:252,hsid:214,hhid:982,hhimg:"CS2_063"},
		{id:180,name:"Flame Imp",typeid:2,qualityid:2,setid:2,cost:1,artistid:12,health:2,attack:3,raceid:2,classid:8,battlecry:true,hpid:85,hsid:233,hhid:1090,hhimg:"EX1_319"},
		{id:181,name:"Mortal Coil",typeid:1,qualityid:2,setid:1,cost:1,artistid:31,classid:8,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:43,hpid:43,hsid:64,hhid:1092,hhimg:"EX1_302"},
		{id:182,name:"Power Overwhelming",typeid:1,qualityid:2,setid:2,cost:1,artistid:17,classid:8,hpid:170,hsid:317,hhid:846,hhimg:"EX1_316"},
		{id:183,name:"Voidwalker",typeid:2,qualityid:1,setid:1,cost:1,artistid:102,health:3,attack:1,raceid:2,classid:8,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hpid:340,hsid:359,hhid:48,hhimg:"CS2_065"},
		{id:184,name:"Demonfire",typeid:1,qualityid:2,setid:2,cost:2,artistid:103,classid:8,hpid:452,hsid:193,hhid:1142,hhimg:"EX1_596"},
		{id:185,name:"Succubus",typeid:2,qualityid:1,setid:1,cost:2,artistid:104,health:3,attack:4,raceid:2,classid:8,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:40,battlecry:true,hpid:208,hsid:279,hhid:592,hhimg:"EX1_306"},
		{id:186,name:"Drain Life",typeid:1,qualityid:1,setid:1,cost:3,artistid:105,classid:8,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:45,hpid:332,hsid:259,hhid:919,hhimg:"CS2_061"},
		{id:187,name:"Felguard",typeid:2,qualityid:3,setid:2,cost:3,artistid:101,health:5,attack:3,raceid:2,classid:8,battlecry:true,taunt:true,hpid:236,hsid:286,hhid:517,hhimg:"EX1_301"},
		{id:188,name:"Sense Demons",typeid:1,qualityid:2,setid:2,cost:3,artistid:55,classid:8,hpid:327,hsid:100,hhid:860,hhimg:"EX1_317"},
		{id:189,name:"Shadow Bolt",typeid:1,qualityid:1,setid:1,cost:3,artistid:25,classid:8,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:47,hpid:647,hsid:277,hhid:914,hhimg:"CS2_057"},
		{id:190,name:"Void Terror",typeid:2,qualityid:3,setid:2,cost:3,artistid:12,health:3,attack:3,raceid:2,classid:8,battlecry:true,hpid:119,hsid:63,hhid:1221,hhimg:"EX1_304"},
		{id:191,name:"Hellfire",typeid:1,qualityid:1,setid:1,cost:4,artistid:68,classid:8,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:49,hpid:122,hsid:145,hhid:950,hhimg:"CS2_062"},
		{id:192,name:"Pit Lord",typeid:2,qualityid:4,setid:2,cost:4,artistid:69,health:6,attack:5,raceid:2,classid:8,battlecry:true,hpid:402,hsid:132,hhid:783,hhimg:"EX1_313"},
		{id:193,name:"Shadowflame",typeid:1,qualityid:3,setid:2,cost:4,artistid:106,classid:8,hpid:673,hsid:302,hhid:147,hhimg:"EX1_303"},
		{id:194,name:"Summoning Portal",typeid:2,qualityid:2,setid:2,cost:4,artistid:27,health:4,attack:0,classid:8,hpid:566,hsid:334,hhid:969,hhimg:"EX1_315"},
		{id:195,name:"Bane of Doom",typeid:1,qualityid:4,setid:2,cost:5,artistid:11,classid:8,hpid:670,hsid:227,hhid:23,hhimg:"EX1_320"},
		{id:196,name:"Doomguard",typeid:2,qualityid:3,setid:2,cost:5,artistid:73,health:7,attack:5,raceid:2,classid:8,battlecry:true,charge:true,hpid:507,hsid:141,hhid:631,hhimg:"EX1_310"},
		{id:197,name:"Dread Infernal",typeid:2,qualityid:2,setid:1,cost:6,artistid:70,health:6,attack:6,raceid:2,classid:8,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:23,battlecry:true,hpid:36,hsid:321,hhid:1019,hhimg:"CS2_064"},
		{id:198,name:"Siphon Soul",typeid:1,qualityid:3,setid:2,cost:6,artistid:27,classid:8,hpid:573,hsid:34,hhid:1100,hhimg:"EX1_309"},
		{id:199,name:"Twisting Nether",typeid:1,qualityid:4,setid:2,cost:8,artistid:25,classid:8,hpid:398,hsid:107,hhid:859,hhimg:"EX1_312"},
		{id:200,name:"Lord Jaraxxus",typeid:2,qualityid:5,setid:2,cost:9,artistid:12,health:15,attack:3,raceid:2,classid:8,battlecry:true,hpid:482,hsid:195,hhid:777,hhimg:"EX1_323"},
		/* warrior */
		{id:201,name:"Inner Rage",typeid:1,qualityid:2,setid:2,cost:0,artistid:67,classid:9,hpid:366,hsid:269,hhid:22,hhimg:"EX1_607"},
		{id:202,name:"Execute",typeid:1,qualityid:1,setid:1,cost:1,artistid:5,classid:9,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:47,hpid:227,hsid:65,hhid:785,hhimg:"CS2_108"},
		{id:203,name:"Shield Slam",typeid:1,qualityid:4,setid:2,cost:1,artistid:11,classid:9,hpid:50,hsid:250,hhid:546,hhimg:"EX1_410"},
		{id:204,name:"Upgrade!",typeid:1,qualityid:3,setid:2,cost:1,artistid:107,classid:9,hpid:638,hsid:249,hhid:511,hhimg:"EX1_409"},
		{id:205,name:"Whirlwind",typeid:1,qualityid:2,setid:1,cost:1,artistid:108,classid:9,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:32,hpid:161,hsid:355,hhid:636,hhimg:"EX1_400"},
		{id:206,name:"Armorsmith",typeid:2,qualityid:3,setid:2,cost:2,artistid:109,health:4,attack:1,classid:9,hpid:644,hsid:331,hhid:596,hhimg:"EX1_402"},
		{id:207,name:"Battle Rage",typeid:1,qualityid:2,setid:2,cost:2,artistid:12,classid:9,hpid:664,hsid:189,hhid:400,hhimg:"EX1_392"},
		{id:208,name:"Cleave",typeid:1,qualityid:2,setid:1,cost:2,artistid:110,classid:9,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:40,hpid:81,hsid:237,hhid:940,hhimg:"CS2_114"},
		{id:209,name:"Commanding Shout",typeid:1,qualityid:3,setid:2,cost:2,artistid:62,classid:9,hpid:166,hsid:17,hhid:1026,hhimg:"NEW1_036"},
		{id:210,name:"Cruel Taskmaster",typeid:2,qualityid:2,setid:2,cost:2,artistid:110,health:2,attack:2,classid:9,battlecry:true,hpid:328,hsid:91,hhid:285,hhimg:"EX1_603"},
		{id:211,name:"Fiery War Axe",typeid:3,qualityid:1,setid:1,cost:2,artistid:73,attack:3,durability:2,classid:9,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:49,hpid:632,hsid:133,hhid:401,hhimg:"CS2_106"},
		{id:212,name:"Heroic Strike",typeid:1,qualityid:1,setid:1,cost:2,artistid:108,classid:9,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hpid:1,hsid:270,hhid:1007,hhimg:"CS2_105"},
		{id:213,name:"Rampage",typeid:1,qualityid:2,setid:2,cost:2,artistid:108,classid:9,hpid:454,hsid:242,hhid:1108,hhimg:"CS2_104"},
		{id:214,name:"Slam",typeid:1,qualityid:2,setid:2,cost:2,artistid:77,classid:9,hpid:215,hsid:353,hhid:1074,hhimg:"EX1_391"},
		{id:215,name:"Charge",typeid:1,qualityid:1,setid:1,cost:3,artistid:12,classid:9,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:23,charge:true,hpid:646,hsid:23,hhid:344,hhimg:"CS2_103"},
		{id:216,name:"Frothing Berserker",typeid:2,qualityid:3,setid:2,cost:3,artistid:111,health:4,attack:2,classid:9,hpid:69,hsid:143,hhid:654,hhimg:"EX1_604"},
		{id:217,name:"Shield Block",typeid:1,qualityid:2,setid:1,cost:3,artistid:57,classid:9,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:28,hpid:493,hsid:101,hhid:1023,hhimg:"EX1_606"},
		{id:218,name:"Warsong Commander",typeid:2,qualityid:1,setid:1,cost:3,artistid:37,health:3,attack:2,classid:9,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,charge:true,hpid:193,hsid:121,hhid:1009,hhimg:"EX1_084"},
		{id:219,name:"Arathi Weaponsmith",typeid:2,qualityid:2,setid:2,cost:4,artistid:112,health:3,attack:3,classid:9,battlecry:true,hpid:504,hsid:14,hhid:538,hhimg:"EX1_398"},
		{id:220,name:"Kor'kron Elite",typeid:2,qualityid:2,setid:1,cost:4,artistid:12,health:3,attack:4,classid:9,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:44,charge:true,hpid:130,hsid:129,hhid:28,hhimg:"NEW1_011"},
		{id:221,name:"Mortal Strike",typeid:1,qualityid:3,setid:2,cost:4,artistid:70,classid:9,hpid:345,hsid:217,hhid:804,hhimg:"EX1_408"},
		{id:222,name:"Arcanite Reaper",typeid:3,qualityid:2,setid:1,cost:5,artistid:113,attack:5,durability:2,classid:9,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:51,hpid:182,hsid:178,hhid:304,hhimg:"CS2_112"},
		{id:223,name:"Brawl",typeid:1,qualityid:4,setid:2,cost:5,artistid:62,classid:9,hpid:297,hsid:115,hhid:75,hhimg:"EX1_407"},
		{id:224,name:"Gorehowl",typeid:3,qualityid:4,setid:2,cost:7,artistid:70,attack:7,durability:1,classid:9,hpid:96,hsid:43,hhid:810,hhimg:"EX1_411"},
		{id:225,name:"Grommash Hellscream",typeid:2,qualityid:5,setid:2,cost:8,artistid:69,health:9,attack:4,classid:9,charge:true,enrage:true,hpid:643,hsid:139,hhid:338,hhimg:"EX1_414"},
		/* neutral */
		{id:226,name:"Wisp",typeid:2,qualityid:2,setid:2,cost:0,artistid:28,health:1,attack:1,hpid:273,hsid:5,hhid:179,hhimg:"CS2_231"},
		{id:227,name:"Abusive Sergeant",typeid:2,qualityid:2,setid:2,cost:1,artistid:13,health:1,attack:2,battlecry:true,hpid:577,hsid:89,hhid:242,hhimg:"CS2_188"},
		{id:228,name:"Angry Chicken",typeid:2,qualityid:3,setid:2,cost:1,artistid:114,health:1,attack:1,raceid:1,enrage:true,hpid:57,hsid:151,hhid:1688,hhimg:"EX1_009"},
		{id:229,name:"Argent Squire",typeid:2,qualityid:2,setid:2,cost:1,artistid:70,health:1,attack:1,divine_shield:true,hpid:473,hsid:172,hhid:757,hhimg:"EX1_008"},
		{id:230,name:"Bloodsail Corsair",typeid:2,qualityid:3,setid:2,cost:1,artistid:115,health:2,attack:1,raceid:5,battlecry:true,hpid:453,hsid:112,hhid:997,hhimg:"NEW1_025"},
		{id:231,name:"Elven Archer",typeid:2,qualityid:2,setid:1,cost:1,artistid:38,health:1,attack:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:1,battlecry:true,hpid:356,hsid:137,hhid:309,hhimg:"CS2_189"},
		{id:232,name:"Goldshire Footman",typeid:2,qualityid:2,setid:1,cost:1,artistid:116,health:2,attack:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:4,taunt:true,hpid:564,hsid:240,hhid:922,hhimg:"CS1_042"},
		{id:233,name:"Grimscale Oracle",typeid:2,qualityid:2,setid:1,cost:1,artistid:117,health:1,attack:1,raceid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:8,hpid:510,hsid:39,hhid:510,hhimg:"EX1_508"},
		{id:234,name:"Hungry Crab",typeid:2,qualityid:4,setid:2,cost:1,artistid:118,health:2,attack:1,raceid:1,battlecry:true,hpid:660,hsid:10,hhid:443,hhimg:"NEW1_017"},
		{id:235,name:"Leper Gnome",typeid:2,qualityid:2,setid:2,cost:1,artistid:69,health:1,attack:2,deathrattle:true,hpid:513,hsid:288,hhid:658,hhimg:"EX1_029"},
		{id:236,name:"Lightwarden",typeid:2,qualityid:3,setid:2,cost:1,artistid:119,health:2,attack:1,hpid:436,hsid:197,hhid:1655,hhimg:"EX1_001"},
		{id:237,name:"Murloc Raider",typeid:2,qualityid:1,setid:1,cost:1,artistid:3,health:1,attack:2,raceid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:5,hpid:55,hsid:313,hhid:191,hhimg:"CS2_168"},
		{id:238,name:"Murloc Tidecaller",typeid:2,qualityid:3,setid:2,cost:1,artistid:118,health:2,attack:1,raceid:4,hpid:420,hsid:165,hhid:475,hhimg:"EX1_509"},
		{id:239,name:"Secretkeeper",typeid:2,qualityid:3,setid:2,cost:1,artistid:56,health:2,attack:1,secret:true,hpid:483,hsid:324,hhid:158,hhimg:"EX1_080"},
		{id:240,name:"Shieldbearer",typeid:2,qualityid:2,setid:2,cost:1,artistid:120,health:4,attack:0,taunt:true,hpid:24,hsid:99,hhid:866,hhimg:"EX1_405"},
		{id:241,name:"Southsea Deckhand",typeid:2,qualityid:2,setid:2,cost:1,artistid:40,health:1,attack:2,raceid:5,charge:true,hpid:103,hsid:235,hhid:724,hhimg:"CS2_146"},
		{id:242,name:"Stonetusk Boar",typeid:2,qualityid:1,setid:1,cost:1,artistid:47,health:1,attack:1,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:2,charge:true,hpid:76,hsid:175,hhid:648,hhimg:"CS2_171"},
		{id:243,name:"Voodoo Doctor",typeid:2,qualityid:1,setid:1,cost:1,artistid:83,health:1,attack:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:6,battlecry:true,hpid:410,hsid:276,hhid:132,hhimg:"EX1_011"},
		{id:244,name:"Worgen Infiltrator",typeid:2,qualityid:2,setid:2,cost:1,artistid:11,health:1,attack:2,stealth:true,hpid:112,hsid:28,hhid:994,hhimg:"EX1_010"},
		{id:245,name:"Young Dragonhawk",typeid:2,qualityid:2,setid:2,cost:1,artistid:109,health:1,attack:1,raceid:1,windfury:true,hpid:629,hsid:222,hhid:641,hhimg:"CS2_169"},
		{id:246,name:"Young Priestess",typeid:2,qualityid:3,setid:2,cost:1,artistid:59,health:1,attack:2,hpid:123,hsid:54,hhid:1634,hhimg:"EX1_004"},
		{id:247,name:"Acidic Swamp Ooze",typeid:2,qualityid:2,setid:1,cost:2,artistid:121,health:2,attack:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:6,battlecry:true,hpid:74,hsid:84,hhid:906,hhimg:"EX1_066"},
		{id:248,name:"Amani Berserker",typeid:2,qualityid:2,setid:2,cost:2,artistid:68,health:3,attack:2,enrage:true,hpid:641,hsid:376,hhid:790,hhimg:"EX1_393"},
		{id:249,name:"Ancient Watcher",typeid:2,qualityid:3,setid:2,cost:2,artistid:4,health:5,attack:4,hpid:153,hsid:173,hhid:605,hhimg:"EX1_045"},
		{id:250,name:"Bloodfen Raptor",typeid:2,qualityid:1,setid:1,cost:2,artistid:40,health:2,attack:3,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:2,hpid:576,hsid:236,hhid:216,hhimg:"CS2_172"},
		{id:251,name:"Bloodmage Thalnos",typeid:2,qualityid:5,setid:2,cost:2,artistid:12,health:1,attack:1,deathrattle:true,spell_damage:true,hpid:525,hsid:4,hhid:749,hhimg:"EX1_012"},
		{id:252,name:"Bloodsail Raider",typeid:2,qualityid:2,setid:2,cost:2,artistid:33,health:3,attack:2,raceid:5,battlecry:true,hpid:637,hsid:3,hhid:999,hhimg:"NEW1_018"},
		{id:253,name:"Bluegill Warrior",typeid:2,qualityid:2,setid:1,cost:2,artistid:122,health:1,attack:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:4,charge:true,hpid:289,hsid:188,hhid:739,hhimg:"CS2_173"},
		{id:254,name:"Captain's Parrot",typeid:2,qualityid:4,setid:4,cost:2,artistid:32,health:1,attack:1,raceid:1,soulbound:true,gsoulbound:true,battlecry:true,hpid:559,hsid:243,hhid:530,hhimg:"NEW1_016"},
		{id:255,name:"Crazed Alchemist",typeid:2,qualityid:3,setid:2,cost:2,artistid:97,health:2,attack:2,battlecry:true,hpid:612,hsid:49,hhid:801,hhimg:"EX1_059"},
		{id:256,name:"Dire Wolf Alpha",typeid:2,qualityid:2,setid:2,cost:2,artistid:123,health:2,attack:2,raceid:1,hpid:305,hsid:87,hhid:985,hhimg:"EX1_162"},
		{id:257,name:"Doomsayer",typeid:2,qualityid:4,setid:2,cost:2,artistid:12,health:7,attack:0,hpid:467,hsid:260,hhid:138,hhimg:"NEW1_021"},
		{id:258,name:"Faerie Dragon",typeid:2,qualityid:2,setid:2,cost:2,artistid:112,health:2,attack:3,raceid:3,hpid:213,hsid:315,hhid:609,hhimg:"NEW1_023"},
		{id:259,name:"Frostwolf Grunt",typeid:2,qualityid:2,setid:1,cost:2,artistid:124,health:2,attack:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:7,taunt:true,hpid:663,hsid:104,hhid:41,hhimg:"CS2_121"},
		{id:260,name:"Ironbeak Owl",typeid:2,qualityid:2,setid:2,cost:2,artistid:23,health:1,attack:2,raceid:1,silence:true,hpid:500,hsid:349,hhid:290,hhimg:"CS2_203"},
		{id:261,name:"Knife Juggler",typeid:2,qualityid:3,setid:2,cost:2,artistid:107,health:2,attack:3,hpid:422,hsid:339,hhid:1073,hhimg:"NEW1_019"},
		{id:262,name:"Kobold Geomancer",typeid:2,qualityid:2,setid:1,cost:2,artistid:18,health:2,attack:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:8,spell_damage:true,hpid:479,hsid:199,hhid:672,hhimg:"CS2_142"},
		{id:263,name:"Loot Hoarder",typeid:2,qualityid:2,setid:2,cost:2,artistid:33,health:1,attack:2,deathrattle:true,hpid:395,hsid:230,hhid:251,hhimg:"EX1_096"},
		{id:264,name:"Lorewalker Cho",typeid:2,qualityid:5,setid:2,cost:2,artistid:125,health:4,attack:0,hpid:456,hsid:296,hhid:1135,hhimg:"EX1_100"},
		{id:265,name:"Mad Bomber",typeid:2,qualityid:2,setid:2,cost:2,artistid:114,health:2,attack:3,battlecry:true,hpid:80,hsid:337,hhid:762,hhimg:"EX1_082"},
		{id:266,name:"Mana Addict",typeid:2,qualityid:3,setid:2,cost:2,artistid:87,health:3,attack:1,hpid:67,hsid:182,hhid:12,hhimg:"EX1_055"},
		{id:267,name:"Mana Wraith",typeid:2,qualityid:3,setid:2,cost:2,artistid:13,health:2,attack:2,hpid:197,hsid:171,hhid:715,hhimg:"EX1_616"},
		{id:268,name:"Master Swordsmith",typeid:2,qualityid:3,setid:2,cost:2,artistid:77,health:3,attack:1,hpid:584,hsid:138,hhid:351,hhimg:"NEW1_037"},
		{id:269,name:"Millhouse Manastorm",typeid:2,qualityid:5,setid:2,cost:2,artistid:33,health:4,attack:4,battlecry:true,hpid:339,hsid:109,hhid:855,hhimg:"NEW1_029"},
		{id:270,name:"Murloc Tidehunter",typeid:2,qualityid:2,setid:1,cost:2,artistid:3,health:1,attack:2,raceid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:6,battlecry:true,hpid:357,hsid:332,hhid:976,hhimg:"EX1_506"},
		{id:271,name:"Nat Pagle",typeid:2,qualityid:5,setid:2,cost:2,artistid:38,health:4,attack:0,hpid:19,hsid:252,hhid:1147,hhimg:"EX1_557"},
		{id:272,name:"Novice Engineer",typeid:2,qualityid:1,setid:1,cost:2,artistid:83,health:1,attack:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:1,battlecry:true,hpid:435,hsid:174,hhid:284,hhimg:"EX1_015"},
		{id:273,name:"Pint-Sized Summoner",typeid:2,qualityid:3,setid:2,cost:2,artistid:126,health:2,attack:2,hpid:54,hsid:95,hhid:37,hhimg:"EX1_076"},
		{id:274,name:"River Crocolisk",typeid:2,qualityid:1,setid:1,cost:2,artistid:32,health:3,attack:2,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:1,hpid:535,hsid:361,hhid:1369,hhimg:"CS2_120"},
		{id:275,name:"Sunfury Protector",typeid:2,qualityid:3,setid:2,cost:2,artistid:10,health:3,attack:2,battlecry:true,taunt:true,hpid:372,hsid:371,hhid:891,hhimg:"EX1_058"},
		{id:276,name:"Wild Pyromancer",typeid:2,qualityid:3,setid:2,cost:2,artistid:12,health:2,attack:3,hpid:25,hsid:105,hhid:1014,hhimg:"NEW1_020"},
		{id:277,name:"Youthful Brewmaster",typeid:2,qualityid:2,setid:2,cost:2,artistid:37,health:2,attack:3,battlecry:true,hpid:247,hsid:191,hhid:415,hhimg:"EX1_049"},
		{id:278,name:"Acolyte of Pain",typeid:2,qualityid:2,setid:2,cost:3,artistid:106,health:3,attack:1,hpid:428,hsid:15,hhid:1659,hhimg:"EX1_007"},
		{id:279,name:"Alarm-o-Bot",typeid:2,qualityid:3,setid:2,cost:3,artistid:20,health:3,attack:0,hpid:425,hsid:52,hhid:1658,hhimg:"EX1_006"},
		{id:280,name:"Arcane Golem",typeid:2,qualityid:3,setid:2,cost:3,artistid:36,health:2,attack:4,battlecry:true,charge:true,hpid:97,hsid:310,hhid:466,hhimg:"EX1_089"},
		{id:281,name:"Big Game Hunter",typeid:2,qualityid:4,setid:2,cost:3,artistid:61,health:2,attack:4,battlecry:true,hpid:73,hsid:75,hhid:1657,hhimg:"EX1_005"},
		{id:282,name:"Blood Knight",typeid:2,qualityid:4,setid:2,cost:3,artistid:2,health:3,attack:3,battlecry:true,divine_shield:true,hpid:75,hsid:184,hhid:755,hhimg:"EX1_590"},
		{id:283,name:"Coldlight Oracle",typeid:2,qualityid:3,setid:2,cost:3,artistid:38,health:2,attack:2,raceid:4,battlecry:true,hpid:88,hsid:300,hhid:1016,hhimg:"EX1_050"},
		{id:284,name:"Coldlight Seer",typeid:2,qualityid:3,setid:2,cost:3,artistid:127,health:3,attack:2,raceid:4,battlecry:true,hpid:424,hsid:42,hhid:453,hhimg:"EX1_103"},
		{id:285,name:"Dalaran Mage",typeid:2,qualityid:2,setid:1,cost:3,artistid:33,health:4,attack:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:3,spell_damage:true,hpid:388,hsid:298,hhid:175,hhimg:"EX1_582"},
		{id:286,name:"Demolisher",typeid:2,qualityid:3,setid:2,cost:3,artistid:11,health:4,attack:1,hpid:212,hsid:370,hhid:979,hhimg:"EX1_102"},
		{id:287,name:"Earthen Ring Farseer",typeid:2,qualityid:2,setid:2,cost:3,artistid:12,health:3,attack:3,battlecry:true,hpid:557,hsid:180,hhid:1651,hhimg:"CS2_117"},
		{id:288,name:"Emperor Cobra",typeid:2,qualityid:3,setid:2,cost:3,artistid:42,health:3,attack:2,raceid:1,hpid:625,hsid:280,hhid:1098,hhimg:"EX1_170"},
		{id:289,name:"Flesheating Ghoul",typeid:2,qualityid:2,setid:2,cost:3,artistid:12,health:3,attack:2,hpid:610,hsid:229,hhid:397,hhimg:"tt_004"},
		{id:290,name:"Harvest Golem",typeid:2,qualityid:2,setid:2,cost:3,artistid:128,health:3,attack:2,deathrattle:true,hpid:386,hsid:294,hhid:778,hhimg:"EX1_556"},
		{id:291,name:"Imp Master",typeid:2,qualityid:3,setid:2,cost:3,artistid:82,health:5,attack:1,hpid:178,hsid:364,hhid:926,hhimg:"EX1_597"},
		{id:292,name:"Injured Blademaster",typeid:2,qualityid:3,setid:2,cost:3,artistid:112,health:7,attack:4,battlecry:true,hpid:209,hsid:33,hhid:1109,hhimg:"CS2_181"},
		{id:293,name:"Ironforge Rifleman",typeid:2,qualityid:2,setid:1,cost:3,artistid:129,health:2,attack:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:3,battlecry:true,hpid:41,hsid:187,hhid:339,hhimg:"CS2_141"},
		{id:294,name:"Ironfur Grizzly",typeid:2,qualityid:2,setid:1,cost:3,artistid:42,health:3,attack:3,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:2,taunt:true,hpid:519,hsid:60,hhid:1182,hhimg:"CS2_125"},
		{id:295,name:"Jungle Panther",typeid:2,qualityid:2,setid:2,cost:3,artistid:118,health:2,attack:4,raceid:1,stealth:true,hpid:392,hsid:130,hhid:921,hhimg:"EX1_017"},
		{id:296,name:"King Mukla",typeid:2,qualityid:5,setid:2,cost:3,artistid:130,health:5,attack:5,raceid:1,battlecry:true,hpid:373,hsid:117,hhid:1693,hhimg:"EX1_014"},
		{id:297,name:"Magma Rager",typeid:2,qualityid:1,setid:1,cost:3,artistid:31,health:1,attack:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:7,hpid:362,hsid:266,hhid:1653,hhimg:"CS2_118"},
		{id:298,name:"Mind Control Tech",typeid:2,qualityid:3,setid:2,cost:3,artistid:6,health:3,attack:3,battlecry:true,hpid:368,hsid:343,hhid:734,hhimg:"EX1_085"},
		{id:299,name:"Murloc Warleader",typeid:2,qualityid:4,setid:2,cost:3,artistid:131,health:3,attack:3,raceid:4,hpid:222,hsid:70,hhid:1063,hhimg:"EX1_507"},
		{id:300,name:"Questing Adventurer",typeid:2,qualityid:3,setid:2,cost:3,artistid:132,health:2,attack:2,hpid:157,hsid:198,hhid:791,hhimg:"EX1_044"},
		{id:301,name:"Raging Worgen",typeid:2,qualityid:2,setid:2,cost:3,artistid:5,health:3,attack:3,enrage:true,windfury:true,hpid:95,hsid:179,hhid:1155,hhimg:"EX1_412"},
		{id:302,name:"Raid Leader",typeid:2,qualityid:1,setid:1,cost:3,artistid:133,health:2,attack:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:9,hpid:502,hsid:375,hhid:1401,hhimg:"CS2_122"},
		{id:303,name:"Razorfen Hunter",typeid:2,qualityid:2,setid:1,cost:3,artistid:15,health:3,attack:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:2,battlecry:true,hpid:47,hsid:106,hhid:257,hhimg:"CS2_196"},
		{id:304,name:"Scarlet Crusader",typeid:2,qualityid:2,setid:2,cost:3,artistid:56,health:1,attack:3,divine_shield:true,hpid:475,hsid:275,hhid:642,hhimg:"EX1_020"},
		{id:305,name:"Shattered Sun Cleric",typeid:2,qualityid:2,setid:1,cost:3,artistid:1,health:2,attack:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:5,battlecry:true,hpid:434,hsid:125,hhid:608,hhimg:"EX1_019"},
		{id:306,name:"Silverback Patriarch",typeid:2,qualityid:2,setid:1,cost:3,artistid:71,health:4,attack:1,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:9,taunt:true,hpid:611,hsid:380,hhid:67,hhimg:"CS2_127"},
		{id:307,name:"Southsea Captain",typeid:2,qualityid:4,setid:2,cost:3,artistid:134,health:3,attack:3,raceid:5,hpid:324,hsid:291,hhid:680,hhimg:"NEW1_027"},
		{id:308,name:"Tauren Warrior",typeid:2,qualityid:2,setid:2,cost:3,artistid:135,health:3,attack:2,enrage:true,taunt:true,hpid:477,hsid:201,hhid:45,hhimg:"EX1_390"},
		{id:309,name:"Thrallmar Farseer",typeid:2,qualityid:2,setid:2,cost:3,artistid:76,health:3,attack:2,windfury:true,hpid:265,hsid:167,hhid:765,hhimg:"EX1_021"},
		{id:310,name:"Tinkmaster Overspark",typeid:2,qualityid:5,setid:2,cost:3,artistid:17,health:3,attack:3,battlecry:true,hpid:245,hsid:113,hhid:570,hhimg:"EX1_083"},
		{id:311,name:"Wolfrider",typeid:2,qualityid:1,setid:1,cost:3,artistid:5,health:1,attack:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:9,charge:true,hpid:174,hsid:267,hhid:289,hhimg:"CS2_124"},
		{id:312,name:"Ancient Brewmaster",typeid:2,qualityid:2,setid:2,cost:4,artistid:34,health:4,attack:5,battlecry:true,hpid:572,hsid:221,hhid:186,hhimg:"EX1_057"},
		{id:313,name:"Ancient Mage",typeid:2,qualityid:3,setid:2,cost:4,artistid:47,health:5,attack:2,spell_damage:true,hpid:176,hsid:346,hhid:915,hhimg:"EX1_584"},
		{id:314,name:"Chillwind Yeti",typeid:2,qualityid:2,setid:1,cost:4,artistid:29,health:5,attack:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:9,hpid:31,hsid:45,hhid:90,hhimg:"CS2_182"},
		{id:315,name:"Cult Master",typeid:2,qualityid:2,setid:2,cost:4,artistid:11,health:2,attack:4,hpid:140,hsid:204,hhid:811,hhimg:"EX1_595"},
		{id:316,name:"Dark Iron Dwarf",typeid:2,qualityid:2,setid:2,cost:4,artistid:136,health:4,attack:4,battlecry:true,hpid:128,hsid:22,hhid:348,hhimg:"EX1_046"},
		{id:317,name:"Defender of Argus",typeid:2,qualityid:3,setid:2,cost:4,artistid:12,health:3,attack:2,battlecry:true,taunt:true,hpid:542,hsid:73,hhid:763,hhimg:"EX1_093"},
		{id:318,name:"Dragonling Mechanic",typeid:2,qualityid:2,setid:1,cost:4,artistid:45,health:4,attack:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:3,battlecry:true,hpid:472,hsid:8,hhid:523,hhimg:"EX1_025"},
		{id:319,name:"Dread Corsair",typeid:2,qualityid:2,setid:2,cost:4,artistid:2,health:3,attack:3,raceid:5,taunt:true,hpid:261,hsid:325,hhid:878,hhimg:"NEW1_022"},
		{id:320,name:"Gnomish Inventor",typeid:2,qualityid:2,setid:1,cost:4,artistid:137,health:4,attack:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:5,battlecry:true,hpid:246,hsid:80,hhid:308,hhimg:"CS2_147"},
		{id:321,name:"Leeroy Jenkins",typeid:2,qualityid:5,setid:2,cost:4,artistid:39,health:2,attack:6,battlecry:true,charge:true,hpid:674,hsid:153,hhid:559,hhimg:"EX1_116"},
		{id:322,name:"Mogu'shan Warden",typeid:2,qualityid:2,setid:2,cost:4,artistid:138,health:7,attack:1,taunt:true,hpid:346,hsid:9,hhid:700,hhimg:"EX1_396"},
		{id:323,name:"Oasis Snapjaw",typeid:2,qualityid:1,setid:1,cost:4,artistid:32,health:7,attack:2,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:1,hpid:15,hsid:103,hhid:1370,hhimg:"CS2_119"},
		{id:324,name:"Ogre Magi",typeid:2,qualityid:2,setid:1,cost:4,artistid:10,health:4,attack:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:8,spell_damage:true,hpid:659,hsid:164,hhid:995,hhimg:"CS2_197"},
		{id:325,name:"Old Murk-Eye",typeid:2,qualityid:5,setid:4,cost:4,artistid:3,health:4,attack:2,raceid:4,charge:true,hpid:217,hsid:68,hhid:736,hhimg:"EX1_062"},
		{id:326,name:"Sen'jin Shieldmasta",typeid:2,qualityid:1,setid:1,cost:4,artistid:128,health:5,attack:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:6,taunt:true,hpid:326,hsid:6,hhid:635,hhimg:"CS2_179"},
		{id:327,name:"Silvermoon Guardian",typeid:2,qualityid:2,setid:2,cost:4,artistid:110,health:3,attack:3,divine_shield:true,hpid:634,hsid:36,hhid:34,hhimg:"EX1_023"},
		{id:328,name:"Spellbreaker",typeid:2,qualityid:2,setid:2,cost:4,artistid:107,health:3,attack:4,battlecry:true,silence:true,hpid:42,hsid:96,hhid:754,hhimg:"EX1_048"},
		{id:329,name:"Stormwind Knight",typeid:2,qualityid:2,setid:1,cost:4,artistid:139,health:5,attack:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:4,charge:true,hpid:603,hsid:336,hhid:622,hhimg:"CS2_131"},
		{id:330,name:"Twilight Drake",typeid:2,qualityid:3,setid:2,cost:4,artistid:118,health:1,attack:4,raceid:3,battlecry:true,hpid:360,hsid:299,hhid:1037,hhimg:"EX1_043"},
		{id:331,name:"Violet Teacher",typeid:2,qualityid:3,setid:2,cost:4,artistid:10,health:5,attack:3,hpid:523,hsid:13,hhid:1029,hhimg:"NEW1_026"},
		{id:332,name:"Abomination",typeid:2,qualityid:3,setid:2,cost:5,artistid:12,health:4,attack:4,deathrattle:true,taunt:true,hpid:597,hsid:228,hhid:440,hhimg:"EX1_097"},
		{id:333,name:"Azure Drake",typeid:2,qualityid:3,setid:2,cost:5,artistid:41,health:4,attack:4,raceid:3,battlecry:true,spell_damage:true,hpid:280,hsid:127,hhid:825,hhimg:"EX1_284"},
		{id:334,name:"Booty Bay Bodyguard",typeid:2,qualityid:2,setid:1,cost:5,artistid:107,health:4,attack:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:7,taunt:true,hpid:27,hsid:274,hhid:1140,hhimg:"CS2_187"},
		{id:335,name:"Captain Greenskin",typeid:2,qualityid:5,setid:2,cost:5,artistid:3,health:4,attack:5,raceid:5,battlecry:true,hpid:267,hsid:136,hhid:456,hhimg:"NEW1_024"},
		{id:336,name:"Darkscale Healer",typeid:2,qualityid:2,setid:1,cost:5,artistid:91,health:5,attack:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:5,battlecry:true,hpid:84,hsid:261,hhid:582,hhimg:"DS1_055"},
		{id:337,name:"Elite Tauren Chieftain",typeid:2,qualityid:5,setid:3,cost:5,artistid:112,health:5,attack:5,gsoulbound:true,battlecry:true,hpid:682,hsid:382,hhid:1754,hhimg:"PRO_001"},
		{id:338,name:"Faceless Manipulator",typeid:2,qualityid:4,setid:2,cost:5,artistid:11,health:3,attack:3,hpid:450,hsid:368,hhid:531,hhimg:"EX1_564"},
		{id:339,name:"Fen Creeper",typeid:2,qualityid:2,setid:2,cost:5,artistid:140,health:6,attack:3,taunt:true,hpid:476,hsid:238,hhid:602,hhimg:"CS1_069"},
		{id:340,name:"Frostwolf Warlord",typeid:2,qualityid:2,setid:1,cost:5,artistid:10,health:4,attack:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:7,battlecry:true,hpid:604,hsid:168,hhid:496,hhimg:"CS2_226"},
		{id:341,name:"Gadgetzan Auctioneer",typeid:2,qualityid:3,setid:2,cost:5,artistid:104,health:4,attack:4,hpid:131,hsid:55,hhid:932,hhimg:"EX1_095"},
		{id:342,name:"Gurubashi Berserker",typeid:2,qualityid:2,setid:1,cost:5,artistid:12,health:7,attack:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:8,hpid:624,hsid:154,hhid:768,hhimg:"EX1_399"},
		{id:343,name:"Harrison Jones",typeid:2,qualityid:5,setid:2,cost:5,artistid:104,health:4,attack:5,battlecry:true,hpid:602,hsid:119,hhid:912,hhimg:"EX1_558"},
		{id:344,name:"Nightblade",typeid:2,qualityid:1,setid:1,cost:5,artistid:11,health:4,attack:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:1,battlecry:true,hpid:184,hsid:190,hhid:670,hhimg:"EX1_593"},
		{id:345,name:"Silver Hand Knight",typeid:2,qualityid:2,setid:2,cost:5,artistid:141,health:4,attack:4,battlecry:true,hpid:648,hsid:219,hhid:69,hhimg:"CS2_151"},
		{id:346,name:"Spiteful Smith",typeid:2,qualityid:2,setid:2,cost:5,artistid:76,health:6,attack:4,enrage:true,hpid:627,hsid:124,hhid:61,hhimg:"CS2_221"},
		{id:347,name:"Stampeding Kodo",typeid:2,qualityid:3,setid:2,cost:5,artistid:32,health:5,attack:3,raceid:1,battlecry:true,hpid:389,hsid:24,hhid:1371,hhimg:"NEW1_041"},
		{id:348,name:"Stormpike Commando",typeid:2,qualityid:2,setid:1,cost:5,artistid:142,health:2,attack:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:4,battlecry:true,hpid:325,hsid:379,hhid:413,hhimg:"CS2_150"},
		{id:349,name:"Stranglethorn Tiger",typeid:2,qualityid:2,setid:2,cost:5,artistid:12,health:5,attack:5,raceid:1,stealth:true,hpid:338,hsid:245,hhid:68,hhimg:"EX1_028"},
		{id:350,name:"Venture Co. Mercenary",typeid:2,qualityid:2,setid:2,cost:5,artistid:101,health:6,attack:7,hpid:509,hsid:225,hhid:1122,hhimg:"CS2_227"},
		{id:351,name:"Archmage",typeid:2,qualityid:2,setid:1,cost:6,artistid:48,health:7,attack:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:3,spell_damage:true,hpid:545,hsid:146,hhid:525,hhimg:"CS2_155"},
		{id:352,name:"Argent Commander",typeid:2,qualityid:3,setid:2,cost:6,artistid:10,health:2,attack:4,charge:true,divine_shield:true,hpid:463,hsid:303,hhid:281,hhimg:"EX1_067"},
		{id:353,name:"Boulderfist Ogre",typeid:2,qualityid:1,setid:1,cost:6,artistid:128,health:7,attack:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:8,hpid:60,hsid:344,hhid:1686,hhimg:"CS2_200"},
		{id:354,name:"Cairne Bloodhoof",typeid:2,qualityid:5,setid:2,cost:6,artistid:62,health:5,attack:4,deathrattle:true,hpid:498,hsid:216,hhid:420,hhimg:"EX1_110"},
		{id:355,name:"Frost Elemental",typeid:2,qualityid:2,setid:2,cost:6,artistid:3,health:5,attack:5,battlecry:true,freeze:true,hpid:598,hsid:158,hhid:512,hhimg:"EX1_283"},
		{id:356,name:"Gelbin Mekkatorque",typeid:2,qualityid:5,setid:3,cost:6,artistid:143,health:6,attack:6,gsoulbound:true,battlecry:true,hpid:251,hsid:268,hhid:858,hhimg:"EX1_112"},
		{id:357,name:"Hogger",typeid:2,qualityid:5,setid:2,cost:6,artistid:144,health:4,attack:4,taunt:true,hpid:39,hsid:203,hhid:640,hhimg:"NEW1_040"},
		{id:358,name:"Illidan Stormrage",typeid:2,qualityid:5,setid:2,cost:6,artistid:12,health:5,attack:7,raceid:2,hpid:203,hsid:356,hhid:556,hhimg:"EX1_614"},
		{id:359,name:"Lord of the Arena",typeid:2,qualityid:2,setid:1,cost:6,artistid:77,health:5,attack:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:5,taunt:true,hpid:414,hsid:32,hhid:157,hhimg:"CS2_162"},
		{id:360,name:"Priestess of Elune",typeid:2,qualityid:2,setid:2,cost:6,artistid:3,health:4,attack:5,battlecry:true,hpid:138,hsid:345,hhid:424,hhimg:"EX1_583"},
		{id:361,name:"Reckless Rocketeer",typeid:2,qualityid:1,setid:1,cost:6,artistid:101,health:2,attack:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:7,charge:true,hpid:560,hsid:147,hhid:445,hhimg:"CS2_213"},
		{id:362,name:"Sunwalker",typeid:2,qualityid:3,setid:2,cost:6,artistid:145,health:5,attack:4,divine_shield:true,taunt:true,hpid:221,hsid:352,hhid:759,hhimg:"EX1_032"},
		{id:363,name:"Sylvanas Windrunner",typeid:2,qualityid:5,setid:2,cost:6,artistid:69,health:5,attack:5,deathrattle:true,hpid:33,hsid:90,hhid:1721,hhimg:"EX1_016"},
		{id:364,name:"The Beast",typeid:2,qualityid:5,setid:2,cost:6,artistid:69,health:7,attack:9,raceid:1,deathrattle:true,hpid:179,hsid:232,hhid:962,hhimg:"EX1_577"},
		{id:365,name:"The Black Knight",typeid:2,qualityid:5,setid:2,cost:6,artistid:12,health:5,attack:4,battlecry:true,taunt:true,hpid:396,hsid:192,hhid:1656,hhimg:"EX1_002"},
		{id:366,name:"Windfury Harpy",typeid:2,qualityid:2,setid:2,cost:6,artistid:146,health:5,attack:4,windfury:true,hpid:675,hsid:244,hhid:567,hhimg:"EX1_033"},
		{id:367,name:"Baron Geddon",typeid:2,qualityid:5,setid:2,cost:7,artistid:147,health:5,attack:7,hpid:539,hsid:131,hhid:336,hhimg:"EX1_249"},
		{id:368,name:"Core Hound",typeid:2,qualityid:2,setid:1,cost:7,artistid:77,health:5,attack:9,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:2,hpid:173,hsid:38,hhid:1687,hhimg:"CS2_201"},
		{id:369,name:"Ravenholdt Assassin",typeid:2,qualityid:3,setid:2,cost:7,artistid:58,health:5,attack:7,stealth:true,hpid:518,hsid:82,hhid:134,hhimg:"CS2_161"},
		{id:370,name:"Stormwind Champion",typeid:2,qualityid:2,setid:1,cost:7,artistid:1,health:6,attack:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:4,hpid:310,hsid:306,hhid:753,hhimg:"CS2_222"},
		{id:371,name:"War Golem",typeid:2,qualityid:2,setid:1,cost:7,artistid:106,health:7,attack:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:6,hpid:323,hsid:120,hhid:712,hhimg:"CS2_186"},
		{id:372,name:"Gruul",typeid:2,qualityid:5,setid:2,cost:8,artistid:142,health:7,attack:7,hpid:18,hsid:26,hhid:526,hhimg:"NEW1_038"},
		{id:373,name:"Ragnaros the Firelord",typeid:2,qualityid:5,setid:2,cost:8,artistid:148,health:8,attack:8,hpid:503,hsid:241,hhid:374,hhimg:"EX1_298"},
		{id:374,name:"Alexstrasza",typeid:2,qualityid:5,setid:2,cost:9,artistid:11,health:8,attack:8,raceid:3,battlecry:true,hpid:303,hsid:357,hhid:581,hhimg:"EX1_561"},
		{id:375,name:"Malygos",typeid:2,qualityid:5,setid:2,cost:9,artistid:57,health:12,attack:4,raceid:3,spell_damage:true,hpid:241,hsid:108,hhid:436,hhimg:"EX1_563"},
		{id:376,name:"Nozdormu",typeid:2,qualityid:5,setid:2,cost:9,artistid:10,health:8,attack:8,raceid:3,hpid:285,hsid:329,hhid:411,hhimg:"EX1_560"},
		{id:377,name:"Onyxia",typeid:2,qualityid:5,setid:2,cost:9,artistid:5,health:8,attack:8,raceid:3,battlecry:true,hpid:432,hsid:181,hhid:363,hhimg:"EX1_562"},
		{id:378,name:"Ysera",typeid:2,qualityid:5,setid:2,cost:9,artistid:18,health:12,attack:4,raceid:3,hpid:495,hsid:309,hhid:1186,hhimg:"EX1_572"},
		{id:379,name:"Deathwing",typeid:2,qualityid:5,setid:2,cost:10,artistid:34,health:12,attack:12,raceid:3,battlecry:true,hpid:474,hsid:378,hhid:834,hhimg:"NEW1_030"},
		{id:380,name:"Sea Giant",typeid:2,qualityid:4,setid:2,cost:10,artistid:149,health:8,attack:8,hpid:614,hsid:140,hhid:211,hhimg:"EX1_586"},
		{id:381,name:"Mountain Giant",typeid:2,qualityid:4,setid:2,cost:12,artistid:112,health:8,attack:8,hpid:264,hsid:128,hhid:993,hhimg:"EX1_105"},
		{id:382,name:"Molten Giant",typeid:2,qualityid:4,setid:2,cost:20,artistid:69,health:8,attack:8,hpid:94,hsid:301,hhid:1372,hhimg:"EX1_620"}
	]
};


var Background = (function (){

	const CURRENT_VERSION = "2.0.1.4944";
	
	const KEY_DECKS = "decks";
	const KEY_VERSION = "version";
	const KEY_SETTING_DEFAULT_DECK = "us_deck";
	const KEY_SETTING_DEFAULT_PAGE = "us_page";
	const KEY_SETTING_HEARTHSTATS_USERKEY = "us_hs_userkey";
	
	var _this 		= {},
		_decks		= [];

	_this.init = function (){ 
		var version = _this.retrieve(KEY_VERSION);
		if (version == undefined) {
			_this.install();
		} else if (version != CURRENT_VERSION) {
			_this.update();
		} else {
			_decks = _this.retrieve(KEY_DECKS);
		}

		// subscribe to events from proxy
		chrome.extension.onMessage.addListener(onProxyMessage);
		chrome.runtime.onSuspend.addListener(onSuspend);
	};
	
	_this.install = function() {
		// save the version number
		_this.store(KEY_VERSION, CURRENT_VERSION);
		
		// set the "default" page to the home screen
		_this.store(KEY_SETTING_DEFAULT_PAGE, 1);
		
		// init (or update) decks
		_this.initializeDecks();
	}
	
	_this.update = function() {
		// save the version number
		_this.store(KEY_VERSION, CURRENT_VERSION);
		
		// init (or update) decks
		_this.initializeDecks();
	}
	
	// background is getting suspended.
	function onSuspend() {
		// currently nothing to clean up
	}

	// message received from the proxy
	function onProxyMessage (request, sender, sendResponse) { 	

		switch (request.message) {
			case 'snapshot': 			
				// retrieve all current values
				var data = {
					artists: Deckie.artists,
					classes: Deckie.classes,
					cards: Deckie.cards,
					decks: _decks,
					settings: {
						default_deck: _this.retrieve(KEY_SETTING_DEFAULT_DECK),
						default_page: _this.retrieve(KEY_SETTING_DEFAULT_PAGE),
						hs_userkey: _this.retrieve(KEY_SETTING_HEARTHSTATS_USERKEY)
					}
				}
				
				sendResponse({snapshot: data});				 
				break;
			case 'create-deck':
				var id = _this.createDeck(request.deck);
				sendResponse({decks: _decks, id: id});
				
				break;
			case 'update-deck':			
				if (_this.updateLocalDeck(request.deck)) {
					sendResponse({decks: _decks, id: request.deck.id});
				} else {
					sendResponse({error: "Could not find the deck to update."});
				}
				
				break;
			case 'delete-deck':
				if (_this.deleteLocalDeck(request.id)) {
					sendResponse({decks: _decks, default_deck: _this.retrieve(KEY_SETTING_DEFAULT_DECK)});
				} else {
					sendResponse({error: "Could not find the deck to delete."});
				}			
				
				break;
			case 'get-hearthstats':
				var url = "http://www.hearthstats.net/api/v1/decks/show?userkey=" + request.key;				
				var xhr = new XMLHttpRequest();
				xhr.onload = function(e) {
					var response = JSON.parse(e.target.response);
					// store the userkey locally on success
					if (response.status == "success") {
						_this.store(KEY_SETTING_HEARTHSTATS_USERKEY, request.key);
					}
				
					chrome.runtime.sendMessage(sender.id, {message: "hearthstats-response", response: response}, null);
				}
				xhr.onerror = function(e) { 
					chrome.runtime.sendMessage(sender.id, {message: "hearthstats-response", response: { status: "error", message: "Could not connect to HearthStats." } }, null);
				}
				xhr.open("GET", url, true);
				xhr.send();

				break;
			case 'import-hearthstats-decks':
				var sync_count = 0;
				for (var i = 0; i < request.decks.length; ++i) {
					if (_this.updateHearthStatsDeck(request.decks[i])) {
						sync_count++;
						continue;
					}
				
					_this.createDeck(request.decks[i]);
				}
				
				sendResponse({decks: _decks, attempted: request.decks.length, updated: sync_count});
				break;
			case 'update-user-settings':		
				if (request.settings.default_deck !== undefined) {
					// if the option label is selected, the incoming value will be null
					if (!request.settings.default_deck) {
						request.settings.default_deck = null;
					}
				
					_this.store(KEY_SETTING_DEFAULT_DECK, request.settings.default_deck);
				}
				
				if (request.settings.default_page !== undefined) {
					_this.store(KEY_SETTING_DEFAULT_PAGE, request.settings.default_page);
				}
				
				if (request.settings.hs_userkey !== undefined) {
					_this.store(KEY_SETTING_HEARTHSTATS_USERKEY, request.settings.hs_userkey);
				}
				
				var updated = {
					default_deck: _this.retrieve(KEY_SETTING_DEFAULT_DECK),
					default_page: _this.retrieve(KEY_SETTING_DEFAULT_PAGE),
					hs_userkey: _this.retrieve(KEY_SETTING_HEARTHSTATS_USERKEY)
				};

				sendResponse(updated);
				break;
		}
	};

	_this.createDeck = function(deck) {
		var new_deck = {
			id: _this.generateUID(),
			hsuid: (deck.hsuid) ? deck.hsuid : undefined,
			name: deck.name,
			classid: deck.classid,
			cards: deck.cards,
			wins: (deck.wins) ? deck.wins : 0,
			losses: (deck.losses) ? deck.losses : 0,
			created: (deck.created) ? deck.created : Date.now(),
			lastsync: Date.now(),
		};

		_decks.push(new_deck);
		_this.store(KEY_DECKS, _decks);
		
		return new_deck.id;
	};
	
	_this.updateLocalDeck = function(deck) {
		for (var i = 0; i < _decks.length; ++i) {
			if (_decks[i].id == deck.id) {
				_decks[i].name = deck.name;
				_decks[i].cards = deck.cards;
				_decks[i].lastsync = Date.now();
				
				_this.store(KEY_DECKS, _decks);
				return true;
			}
		}
		
		return false;
	};
	
	_this.updateHearthStatsDeck = function(deck) {
		for (var i = 0; i < _decks.length; ++i) {
			if (_decks[i].hsuid && _decks[i].hsuid == deck.hsuid) {
				_decks[i].name = deck.name;
				_decks[i].classid = deck.classid;
				_decks[i].cards = deck.cards;
				_decks[i].wins = deck.wins;
				_decks[i].losses = deck.losses;
				_decks[i].lastsync = Date.now();
								
				_this.store(KEY_DECKS, _decks);			
				return true;
			}
		}
		
		return false;
	};
	
	_this.deleteLocalDeck = function(id) {
		for (var i = 0; i < _decks.length; ++i) {
			if (_decks[i].id == id) {
				// reset default deck
				if (id == _this.retrieve(KEY_SETTING_DEFAULT_DECK)) {
					_this.store(KEY_SETTING_DEFAULT_DECK, null);
				}
			
				_decks.splice(i, 1);
				_this.store(KEY_DECKS, _decks);
				
				return true;
			}
		}
		
		return false;
	};
	
	// store key/val in localstorage 
	// use with caution - will overwrite existing values 
	_this.store = function(key, value) {
		localStorage[key] = JSON.stringify(value);
	};
	
	// get key/val from localstorage 
	_this.retrieve = function(key) {
		return localStorage[key] && JSON.parse(localStorage[key]);
	};
	
	// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
	_this.generateUID = function() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    	var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
			return v.toString(16);
		});
	};
	
	_this.initializeDecks = function() {
		var decks = _this.retrieve(KEY_DECKS);
		if (decks == undefined) {
			decks = [];
		}

		// if required add support for id and lastsync values (added in v2)
		for (var i = 0; i < decks.length; ++i) {
			if (decks[i].id == undefined) {
				decks[i].id = _this.generateUID();
				decks[i].lastsync = Date.now();
			}
		}
		
		_this.store(KEY_DECKS, decks);
		_decks = decks;
	}

	return _this;
}());

window.addEventListener("load", function() { 
	Background.init(); 
}, false);