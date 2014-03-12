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
	{id:39,name:"Gabe from Penny Arcade",url:"http://www.pennyarcade.com/"},
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
		{id:1,name:"Innervate",typeid:1,qualityid:1,setid:1,cost:0,artistid:1,classid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hhid:254,hhimg:"EX1_169"},
		{id:2,name:"Moonfire",typeid:1,qualityid:2,setid:1,cost:0,artistid:4,classid:1,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:40,hhid:467,hhimg:"CS2_008"},
		{id:3,name:"Claw",typeid:1,qualityid:1,setid:1,cost:1,artistid:5,classid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:32,hhid:1050,hhimg:"CS2_005"},
		{id:4,name:"Naturalize",typeid:1,qualityid:2,setid:2,cost:1,artistid:6,classid:1,hhid:233,hhimg:"EX1_161"},
		{id:5,name:"Savagery",typeid:1,qualityid:3,setid:2,cost:1,artistid:7,classid:1,hhid:481,hhimg:"EX1_578"},
		{id:6,name:"Mark of the Wild",typeid:1,qualityid:1,setid:1,cost:2,artistid:8,classid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:28,taunt:true,hhid:213,hhimg:"CS2_009"},
		{id:7,name:"Power of the Wild",typeid:1,qualityid:2,setid:2,cost:2,artistid:9,classid:1,choose_one:true,hhid:503,hhimg:"EX1_160"},
		{id:8,name:"Wild Growth",typeid:1,qualityid:1,setid:1,cost:2,artistid:10,classid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:23,hhid:1124,hhimg:"CS2_013"},
		{id:9,name:"Wrath",typeid:1,qualityid:2,setid:2,cost:2,artistid:11,classid:1,choose_one:true,hhid:836,hhimg:"EX1_154"},
		{id:10,name:"Healing Touch",typeid:1,qualityid:1,setid:1,cost:3,artistid:14,classid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hhid:773,hhimg:"CS2_007"},
		{id:11,name:"Mark of Nature",typeid:1,qualityid:2,setid:2,cost:3,artistid:15,classid:1,choose_one:true,taunt:true,hhid:151,hhimg:"EX1_155"},
		{id:12,name:"Savage Roar",typeid:1,qualityid:2,setid:1,cost:3,artistid:16,classid:1,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:43,hhid:742,hhimg:"CS2_011"},
		{id:13,name:"Bite",typeid:1,qualityid:3,setid:2,cost:4,artistid:17,classid:1,hhid:577,hhimg:"EX1_570"},
		{id:14,name:"Keeper of the Grove",typeid:2,qualityid:3,setid:2,cost:4,artistid:18,health:4,attack:2,classid:1,choose_one:true,silence:true,hhid:601,hhimg:"EX1_166"},
		{id:15,name:"Soul of the Forest",typeid:1,qualityid:2,setid:2,cost:4,artistid:19,classid:1,deathrattle:true,hhid:381,hhimg:"EX1_158"},
		{id:16,name:"Swipe",typeid:1,qualityid:2,setid:1,cost:4,artistid:20,classid:1,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:47,hhid:64,hhimg:"CS2_012"},
		{id:17,name:"Druid of the Claw",typeid:2,qualityid:2,setid:2,cost:5,artistid:21,classid:1,health:4,attack:4,charge:true,choose_one:true,taunt:true,hhid:692,hhimg:"EX1_165"},
		{id:18,name:"Nourish",typeid:1,qualityid:3,setid:2,cost:5,artistid:22,classid:1,choose_one:true,hhid:95,hhimg:"EX1_164"},
		{id:19,name:"Starfall",typeid:1,qualityid:3,setid:2,cost:5,artistid:4,classid:1,choose_one:true,hhid:86,hhimg:"NEW1_007"},
		{id:20,name:"Force of Nature",typeid:1,qualityid:4,setid:2,cost:6,artistid:23,classid:1,charge:true,hhid:493,hhimg:"EX1_571"},
		{id:21,name:"Starfire",typeid:1,qualityid:2,setid:1,cost:6,artistid:12,classid:1,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:45,hhid:823,hhimg:"EX1_173"},
		{id:22,name:"Ancient of Lore",typeid:2,qualityid:4,setid:2,cost:7,artistid:24,classid:1,health:5,attack:5,choose_one:true,hhid:920,hhimg:"NEW1_008"},
		{id:23,name:"Ancient of War",typeid:2,qualityid:4,setid:2,cost:7,artistid:20,classid:1,health:5,attack:5,choose_one:true,taunt:true,hhid:1035,hhimg:"EX1_178"},
		{id:24,name:"Ironbark Protector",typeid:2,qualityid:2,setid:1,cost:8,artistid:25,health:8,attack:8,classid:1,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:49,taunt:true,hhid:205,hhimg:"CS2_232"},
		{id:25,name:"Cenarius",typeid:2,qualityid:5,setid:2,cost:9,artistid:12,health:8,attack:5,classid:1,choose_one:true,taunt:true,hhid:36,hhimg:"EX1_573"},
		/* hunter */
		{id:26,name:"Hunter's Mark",typeid:1,qualityid:2,setid:1,cost:0,artistid:26,classid:2,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:40,hhid:141,hhimg:"CS2_084"},
		{id:27,name:"Arcane Shot",typeid:1,qualityid:1,setid:1,cost:1,artistid:13,classid:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:32,hhid:877,hhimg:"DS1_185"},
		{id:28,name:"Bestial Wrath",typeid:1,qualityid:4,setid:2,cost:1,artistid:12,classid:2,immune:true,hhid:903,hhimg:"EX1_549"},
		{id:29,name:"Flare",typeid:1,qualityid:3,setid:2,cost:1,artistid:27,classid:2,secret:true,stealth:true,hhid:896,hhimg:"EX1_544"},
		{id:30,name:"Timber Wolf",typeid:2,qualityid:1,setid:1,cost:1,artistid:28,health:1,attack:1,raceid:1,classid:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:23,hhid:606,hhimg:"DS1_175"},
		{id:31,name:"Tracking",typeid:1,qualityid:1,setid:1,cost:1,artistid:29,classid:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hhid:1047,hhimg:"DS1_184"},
		{id:32,name:"Explosive Trap",typeid:1,qualityid:2,setid:2,cost:2,artistid:30,classid:2,secret:true,hhid:585,hhimg:"EX1_610"},
		{id:33,name:"Freezing Trap",typeid:1,qualityid:2,setid:2,cost:2,artistid:31,classid:2,secret:true,hhid:519,hhimg:"EX1_611"},
		{id:34,name:"Misdirection",typeid:1,qualityid:3,setid:2,cost:2,artistid:32,classid:2,secret:true,hhid:1091,hhimg:"EX1_533"},
		{id:35,name:"Scavenging Hyena",typeid:2,qualityid:2,setid:2,cost:2,artistid:33,health:2,attack:2,raceid:1,classid:2,hhid:1281,hhimg:"EX1_531"},
		{id:36,name:"Snake Trap",typeid:1,qualityid:4,setid:2,cost:2,artistid:34,classid:2,secret:true,hhid:455,hhimg:"EX1_554"},
		{id:37,name:"Snipe",typeid:1,qualityid:2,setid:2,cost:2,artistid:35,classid:2,secret:true,hhid:814,hhimg:"EX1_609"},
		{id:38,name:"Starving Buzzard",typeid:2,qualityid:2,setid:1,cost:2,artistid:34,health:1,attack:2,raceid:1,classid:2,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:47,hhid:1241,hhimg:"CS2_237"},
		{id:39,name:"Unleash the Hounds",typeid:1,qualityid:2,setid:2,cost:2,artistid:36,classid:2,charge:true,hhid:1243,hhimg:"EX1_538"},
		{id:40,name:"Animal Companion",typeid:1,qualityid:2,setid:1,cost:3,artistid:37,classid:2,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:45,hhid:437,hhimg:"NEW1_031"},
		{id:41,name:"Deadly Shot",typeid:1,qualityid:2,setid:2,cost:3,artistid:38,classid:2,hhid:1093,hhimg:"EX1_617"},
		{id:42,name:"Eaglehorn Bow",typeid:3,qualityid:3,setid:2,cost:3,artistid:14,durability:2,attack:3,classid:2,hhid:1662,hhimg:"EX1_536"},
		{id:43,name:"Kill Command",typeid:1,qualityid:2,setid:1,cost:3,artistid:39,classid:2,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:49,hhid:296,hhimg:"EX1_539"},
		{id:44,name:"Houndmaster",typeid:2,qualityid:1,setid:1,cost:4,artistid:40,health:3,attack:4,classid:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:28,battlecry:true,taunt:true,hhid:1003,hhimg:"DS1_070"},
		{id:45,name:"Multi-Shot",typeid:1,qualityid:1,setid:1,cost:4,artistid:41,classid:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hhid:292,hhimg:"DS1_183"},
		{id:46,name:"Explosive Shot",typeid:1,qualityid:3,setid:2,cost:5,artistid:17,classid:2,hhid:394,hhimg:"EX1_537"},
		{id:47,name:"Tundra Rhino",typeid:2,qualityid:2,setid:1,cost:5,artistid:42,health:5,attack:2,raceid:1,classid:2,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:43,charge:true,hhid:699,hhimg:"DS1_178"},
		{id:48,name:"Savannah Highmane",typeid:2,qualityid:3,setid:2,cost:6,artistid:43,health:5,attack:6,raceid:1,classid:2,deathrattle:true,hhid:1261,hhimg:"EX1_534"},
		{id:49,name:"Gladiator's Longbow",typeid:3,qualityid:4,setid:2,cost:7,artistid:44,durability:2,attack:5,classid:2,immune:true,hhid:311,hhimg:"DS1_188"},
		{id:50,name:"King Krush",typeid:2,qualityid:5,setid:2,cost:9,artistid:12,health:8,attack:8,raceid:1,classid:2,charge:true,hhid:1114,hhimg:"EX1_543"},
		/* mage */
		{id:51,name:"Arcane Missles",typeid:1,qualityid:1,setid:1,cost:1,artistid:45,classid:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:32,hhid:564,hhimg:"EX1_277"},
		{id:52,name:"Ice Lance",typeid:1,qualityid:2,setid:2,cost:1,artistid:12,classid:3,freeze:true,hhid:172,hhimg:"CS2_031"},
		{id:53,name:"Mana Wyrm",typeid:2,qualityid:2,setid:2,cost:1,artistid:46,attack:1,health:3,classid:3,hhid:405,hhimg:"NEW1_012"},
		{id:54,name:"Mirror Image",typeid:1,qualityid:2,setid:1,cost:1,artistid:33,classid:3,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:36,taunt:true,hhid:1084,hhimg:"CS2_027"},
		{id:55,name:"Arcane Explosion",typeid:1,qualityid:1,setid:1,cost:2,artistid:47,classid:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:28,hhid:447,hhimg:"CS2_025"},
		{id:56,name:"Frostbolt",typeid:1,qualityid:2,setid:1,cost:2,artistid:48,classid:3,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:40,freeze:true,hhid:662,hhimg:"CS2_024"},
		{id:57,name:"Sorcerer's Apprentice",typeid:2,qualityid:2,setid:2,cost:2,artistid:12,attack:3,health:2,classid:3,hhid:614,hhimg:"EX1_608"},
		{id:58,name:"Arcane Intellect",typeid:1,qualityid:1,setid:1,cost:3,artistid:49,classid:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hhid:555,hhimg:"CS2_023"},
		{id:59,name:"Counterspell",typeid:1,qualityid:3,setid:2,cost:3,artistid:50,classid:3,counter:true,secret:true,hhid:113,hhimg:"EX1_287"},
		{id:60,name:"Frost Nova",typeid:1,qualityid:2,setid:1,cost:3,artistid:51,classid:3,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:23,freeze:true,hhid:587,hhimg:"CS2_026"},
		{id:61,name:"Ice Barrier",typeid:1,qualityid:2,setid:2,cost:3,artistid:52,classid:3,secret:true,hhid:621,hhimg:"EX1_289"},
		{id:62,name:"Ice Block",typeid:1,qualityid:4,setid:2,cost:3,artistid:53,classid:3,secret:true,immune:true,hhid:192,hhimg:"EX1_295"},
		{id:63,name:"Kirin Tor Mage",typeid:2,qualityid:3,setid:2,cost:3,artistid:54,attack:4,health:3,classid:3,battlecry:true,secret:true,hhid:748,hhimg:"EX1_612"},
		{id:64,name:"Mirror Entity",typeid:1,qualityid:2,setid:2,cost:3,artistid:55,classid:3,secret:true,hhid:195,hhimg:"EX1_294"},
		{id:65,name:"Spellbender",typeid:1,qualityid:4,setid:2,cost:3,artistid:56,classid:3,secret:true,hhid:366,hhimg:"tt_010"},
		{id:66,name:"Vaporize",typeid:1,qualityid:3,setid:2,cost:3,artistid:11,classid:3,secret:true,hhid:286,hhimg:"EX1_594"},
		{id:67,name:"Cone of Cold",typeid:1,qualityid:2,setid:2,cost:4,artistid:54,classid:3,freeze:true,hhid:430,hhimg:"EX1_275"},
		{id:68,name:"Ethereal Arcanist",typeid:2,qualityid:3,setid:2,cost:4,artistid:57,attack:3,health:3,classid:3,secret:true,hhid:1737,hhimg:"EX1_274"},
		{id:69,name:"Fireball",typeid:1,qualityid:1,setid:1,cost:4,artistid:58,classid:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:44,hhid:315,hhimg:"CS2_029"},
		{id:70,name:"Polymorph",typeid:1,qualityid:1,setid:1,cost:4,artistid:59,classid:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:47,hhid:77,hhimg:"CS2_022"},
		{id:71,name:"Water Elemental",typeid:2,qualityid:2,setid:1,cost:4,artistid:60,attack:3,health:6,classid:3,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:49,freeze:true,hhid:395,hhimg:"CS2_033"},
		{id:72,name:"Blizzard",typeid:1,qualityid:3,setid:2,cost:6,artistid:61,classid:3,freeze:true,hhid:457,hhimg:"CS2_028"},
		{id:73,name:"Archmage Antonidas",typeid:2,qualityid:5,setid:2,cost:7,artistid:62,attack:5,health:7,classid:3,hhid:1080,hhimg:"EX1_559"},
		{id:74,name:"Flamestrike",typeid:1,qualityid:2,setid:1,cost:7,artistid:63,classid:3,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:51,hhid:1004,hhimg:"CS2_032"},
		{id:75,name:"Pyroblast",typeid:1,qualityid:4,setid:2,cost:10,artistid:13,classid:3,hhid:1087,hhimg:"EX1_279"},
		/* paladin */
		{id:76,name:"Blessing of Might",typeid:1,qualityid:1,setid:1,cost:1,artistid:64,classid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hhid:70,hhimg:"CS2_087"},
		{id:77,name:"Blessing of Wisdom",typeid:1,qualityid:2,setid:2,cost:1,artistid:68,classid:4,hhid:1373,hhimg:"EX1_363"},
		{id:78,name:"Eye for an Eye",typeid:1,qualityid:2,setid:2,cost:1,artistid:10,classid:4,secret:true,hhid:462,hhimg:"EX1_132"},
		{id:79,name:"Hand of Protection",typeid:1,qualityid:1,setid:1,cost:1,artistid:15,classid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:23,divine_shield:true,hhid:727,hhimg:"EX1_371"},
		{id:80,name:"Humility",typeid:1,qualityid:2,setid:1,cost:1,artistid:32,classid:4,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:28,hhid:854,hhimg:"EX1_360"},
		{id:81,name:"Light's Justice",typeid:3,qualityid:1,setid:1,cost:1,artistid:69,attack:1,durability:4,classid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hhid:383,hhimg:"CS2_091"},
		{id:82,name:"Noble Sacrifice",typeid:1,qualityid:2,setid:2,cost:1,artistid:70,classid:4,secret:true,hhid:584,hhimg:"EX1_130"},
		{id:83,name:"Redemption",typeid:1,qualityid:2,setid:2,cost:1,artistid:71,classid:4,secret:true,hhid:140,hhimg:"EX1_136"},
		{id:84,name:"Repentance",typeid:1,qualityid:2,setid:2,cost:1,artistid:56,classid:4,secret:true,hhid:232,hhimg:"EX1_379"},
		{id:85,name:"Argent Protector",typeid:2,qualityid:2,setid:2,cost:2,artistid:1,attack:2,health:2,classid:4,battlecry:true,divine_shield:true,hhid:1022,hhimg:"EX1_362"},
		{id:86,name:"Equality",typeid:1,qualityid:3,setid:2,cost:2,artistid:72,classid:4,hhid:756,hhimg:"EX1_619"},
		{id:87,name:"Holy Light",typeid:1,qualityid:1,setid:1,cost:2,artistid:70,classid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hhid:291,hhimg:"CS2_089"},
		{id:88,name:"Aldor Peacekeeper",typeid:2,qualityid:3,setid:2,cost:3,artistid:5,attack:3,health:3,classid:4,battlecry:true,hhid:1167,hhimg:"EX1_382"},
		{id:89,name:"Divine Favor",typeid:1,qualityid:3,setid:2,cost:3,artistid:73,classid:4,hhid:679,hhimg:"EX1_349"},
		{id:90,name:"Sword of Justice",typeid:3,qualityid:4,setid:2,cost:3,artistid:74,attack:1,durability:5,classid:4,hhid:643,hhimg:"EX1_366"},
		{id:91,name:"Blessing of Kings",typeid:1,qualityid:2,setid:1,cost:4,artistid:73,classid:4,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:49,hhid:943,hhimg:"CS2_092"},
		{id:92,name:"Consecration",typeid:1,qualityid:2,setid:1,cost:4,artistid:59,classid:4,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:43,hhid:476,hhimg:"CS2_093"},
		{id:93,name:"Hammer of Wrath",typeid:1,qualityid:1,setid:1,cost:4,artistid:74,classid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:32,hhid:250,hhimg:"CS2_094"},
		{id:94,name:"Truesilver Champion",typeid:3,qualityid:2,setid:1,cost:4,artistid:75,attack:4,durability:2,classid:4,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:40,hhid:847,hhimg:"CS2_097"},
		{id:95,name:"Blessed Champion",typeid:1,qualityid:3,setid:2,cost:5,artistid:27,classid:4,hhid:1522,hhimg:"EX1_355"},
		{id:96,name:"Holy Wrath",typeid:1,qualityid:3,setid:2,cost:5,artistid:76,classid:4,hhid:435,hhimg:"EX1_365"},
		{id:97,name:"Avenging Wrath",typeid:1,qualityid:4,setid:2,cost:6,artistid:52,classid:4,hhid:1174,hhimg:"EX1_384"},
		{id:98,name:"Guardian of Kings",typeid:2,qualityid:2,setid:1,cost:7,artistid:77,attack:5,health:6,classid:4,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:47,battlecry:true,hhid:1068,hhimg:"CS2_088"},
		{id:99,name:"Lay on Hands",typeid:1,qualityid:4,setid:2,cost:8,artistid:11,classid:4,hhid:594,hhimg:"EX1_354"},
		{id:100,name:"Tirion Fordring",typeid:2,qualityid:5,setid:2,cost:8,artistid:78,attack:6,health:6,classid:4,divine_shield:true,deathrattle:true,taunt:true,hhid:890,hhimg:"EX1_383"},
		/* priest */
		{id:101,name:"Circle of Healing",typeid:1,qualityid:2,setid:2,cost:0,artistid:65,classid:5,hhid:1362,hhimg:"EX1_621"},
		{id:102,name:"Silence",typeid:1,qualityid:2,setid:2,cost:0,artistid:70,classid:5,silence:true,hhid:1189,hhimg:"EX1_332"},
		{id:103,name:"Holy Smite",typeid:1,qualityid:1,setid:1,cost:1,artistid:48,classid:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:23,hhid:279,hhimg:"CS1_130"},
		{id:104,name:"Inner Fire",typeid:1,qualityid:2,setid:2,cost:1,artistid:38,classid:5,hhid:376,hhimg:"CS1_129"},
		{id:105,name:"Mind Vision",typeid:1,qualityid:2,setid:1,cost:1,artistid:57,classid:5,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:32,hhid:1099,hhimg:"CS2_003"},
		{id:106,name:"Northshire Cleric",typeid:2,qualityid:1,setid:1,cost:1,artistid:22,attack:1,health:3,classid:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:40,hhid:1650,hhimg:"CS2_235"},
		{id:107,name:"Power Word: Shield",typeid:1,qualityid:1,setid:1,cost:1,artistid:79,classid:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:47,hhid:613,hhimg:"CS2_004"},
		{id:108,name:"Divine Spirit",typeid:1,qualityid:2,setid:1,cost:2,artistid:80,classid:5,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:28,hhid:1361,hhimg:"CS2_236"},
		{id:109,name:"Lightwell",typeid:2,qualityid:3,setid:2,cost:2,artistid:81,attack:0,health:5,classid:5,hhid:797,hhimg:"EX1_341"},
		{id:110,name:"Mind Blast",typeid:1,qualityid:1,setid:1,cost:2,artistid:25,classid:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hhid:545,hhimg:"DS1_233"},
		{id:111,name:"Shadow Word: Pain",typeid:1,qualityid:1,setid:1,cost:2,artistid:11,classid:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hhid:1367,hhimg:"CS2_234"},
		{id:112,name:"Shadow Word: Death",typeid:1,qualityid:2,setid:1,cost:3,artistid:11,classid:5,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:43,hhid:1363,hhimg:"EX1_622"},
		{id:113,name:"Shadowform",typeid:1,qualityid:4,setid:2,cost:3,artistid:12,classid:5,hhid:1368,hhimg:"EX1_625"},
		{id:114,name:"Thoughtsteal",typeid:1,qualityid:2,setid:2,cost:3,artistid:52,classid:5,hhid:30,hhimg:"EX1_339"},
		{id:115,name:"Auchenai Soulpriest",typeid:2,qualityid:3,setid:2,cost:4,artistid:1,attack:3,health:5,classid:5,hhid:237,hhimg:"EX1_591"},
		{id:116,name:"Lightspawn",typeid:2,qualityid:2,setid:2,cost:4,artistid:65,attack:0,health:5,classid:5,hhid:886,hhimg:"EX1_335"},
		{id:117,name:"Mass Dispel",typeid:1,qualityid:3,setid:2,cost:4,artistid:20,classid:5,silence:true,hhid:1366,hhimg:"EX1_626"},
		{id:118,name:"Mindgames",typeid:1,qualityid:4,setid:2,cost:4,artistid:70,classid:5,hhid:145,hhimg:"EX1_345"},
		{id:119,name:"Shadow Madness",typeid:1,qualityid:3,setid:2,cost:4,artistid:82,classid:5,hhid:220,hhimg:"EX1_334"},
		{id:120,name:"Holy Nova",typeid:1,qualityid:2,setid:1,cost:5,artistid:13,classid:5,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:45,hhid:841,hhimg:"CS1_112"},
		{id:121,name:"Cabal Shadow Priest",typeid:2,qualityid:4,setid:2,cost:6,artistid:68,attack:4,health:5,classid:5,battlecry:true,hhid:272,hhimg:"EX1_091"},
		{id:122,name:"Holy Fire",typeid:1,qualityid:3,setid:2,cost:6,artistid:83,classid:5,hhid:1365,hhimg:"EX1_624"},
		{id:123,name:"Temple Enforcer",typeid:2,qualityid:2,setid:2,cost:6,artistid:32,attack:6,health:6,classid:5,battlecry:true,hhid:1364,hhimg:"EX1_623"},
		{id:124,name:"Prophet Velen",typeid:2,qualityid:5,setid:2,cost:7,artistid:37,attack:7,health:7,classid:5,hhid:9,hhimg:"EX1_350"},
		{id:125,name:"Mind Control",typeid:1,qualityid:2,setid:1,cost:10,artistid:20,classid:5,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:49,hhid:8,hhimg:"CS1_113"},
		/* rogue */
		{id:126,name:"Backstab",typeid:1,qualityid:1,setid:1,cost:1,artistid:66,classid:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hhid:180,hhimg:"CS2_072"},
		{id:127,name:"Preparation",typeid:1,qualityid:4,setid:2,cost:0,artistid:15,classid:6,hhid:1158,hhimg:"EX1_145"},
		{id:128,name:"Shadowstep",typeid:1,qualityid:2,setid:2,cost:0,artistid:84,classid:6,hhid:365,hhimg:"EX1_144"},
		{id:129,name:"Cold Blood",typeid:1,qualityid:2,setid:2,cost:1,artistid:12,classid:6,combo:true,hhid:268,hhimg:"CS2_073"},
		{id:130,name:"Conceal",typeid:1,qualityid:2,setid:2,cost:1,artistid:85,classid:6,stealth:true,hhid:990,hhimg:"EX1_128"},
		{id:131,name:"Deadly Poison",typeid:1,qualityid:1,setid:1,cost:1,artistid:23,classid:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:43,hhid:459,hhimg:"CS2_074"},
		{id:132,name:"Sinister Strike",typeid:1,qualityid:1,setid:1,cost:1,artistid:86,classid:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hhid:710,hhimg:"CS2_075"},
		{id:133,name:"Betrayal",typeid:1,qualityid:2,setid:2,cost:2,artistid:73,classid:6,hhid:282,hhimg:"EX1_126"},
		{id:134,name:"Blade Flurry",typeid:1,qualityid:3,setid:2,cost:2,artistid:87,classid:6,hhid:1064,hhimg:"CS2_233"},
		{id:135,name:"Defias Ringleader",typeid:2,qualityid:2,setid:2,cost:2,artistid:74,attack:2,health:2,classid:6,combo:true,hhid:201,hhimg:"EX1_131"},
		{id:136,name:"Eviscerate",typeid:1,qualityid:2,setid:2,cost:2,artistid:88,classid:6,combo:true,hhid:904,hhimg:"EX1_124"},
		{id:137,name:"Patient Assassin",typeid:2,qualityid:4,setid:2,cost:2,artistid:89,attack:1,health:1,classid:6,stealth:true,hhid:1133,hhimg:"EX1_522"},
		{id:138,name:"Sap",typeid:1,qualityid:1,setid:1,cost:2,artistid:90,classid:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:40,hhid:461,hhimg:"EX1_581"},
		{id:139,name:"Shiv",typeid:1,qualityid:2,setid:1,cost:2,artistid:52,classid:6,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:45,hhid:573,hhimg:"EX1_278"},
		{id:140,name:"Edwin VanCleef",typeid:2,qualityid:5,setid:2,cost:3,artistid:91,attack:2,health:2,classid:6,combo:true,hhid:306,hhimg:"EX1_613"},
		{id:141,name:"Fan of Knives",typeid:1,qualityid:2,setid:1,cost:3,artistid:92,classid:6,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:29,hhid:667,hhimg:"EX1_129"},
		{id:142,name:"Headcrack",typeid:1,qualityid:3,setid:2,cost:3,artistid:93,classid:6,combo:true,hhid:708,hhimg:"EX1_137"},
		{id:143,name:"Perdition's Blade",typeid:3,qualityid:3,setid:2,cost:3,artistid:32,attack:2,durability:2,classid:6,battlecry:true,combo:true,hhid:391,hhimg:"EX1_133"},
		{id:144,name:"SI:7 Agent",typeid:2,qualityid:3,setid:2,cost:3,artistid:94,attack:3,health:3,classid:6,combo:true,hhid:1117,hhimg:"EX1_134"},
		{id:145,name:"Master of Disguise",typeid:2,qualityid:3,setid:2,cost:4,artistid:95,attack:4,health:4,classid:6,battlecry:true,stealth:true,hhid:887,hhimg:"NEW1_014"},
		{id:146,name:"Assassin's Blade",typeid:3,qualityid:2,setid:1,cost:5,artistid:96,attack:3,durability:4,classid:6,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:32,hhid:421,hhimg:"CS2_080"},
		{id:147,name:"Assassinate",typeid:1,qualityid:1,setid:1,cost:5,artistid:69,classid:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:47,hhid:345,hhimg:"CS2_076"},
		{id:148,name:"Kidnapper",typeid:2,qualityid:4,setid:2,cost:6,artistid:25,attack:5,health:3,classid:6,combo:true,hhid:287,hhimg:"NEW1_005"},
		{id:149,name:"Vanish",typeid:1,qualityid:2,setid:1,cost:6,artistid:20,classid:6,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:23,hhid:196,hhimg:"NEW1_004"},
		{id:150,name:"Sprint",typeid:1,qualityid:2,setid:1,cost:7,artistid:97,classid:6,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:49,hhid:630,hhimg:"CS2_077"},
		/* shaman */
		{id:151,name:"Ancestral Healing",typeid:1,qualityid:1,setid:1,cost:0,artistid:3,classid:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,taunt:true,hhid:149,hhimg:"CS2_041"},
		{id:152,name:"Totemic Might",typeid:1,qualityid:2,setid:1,cost:0,artistid:2,classid:7,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:28,hhid:830,hhimg:"EX1_244"},
		{id:153,name:"Dust Devil",typeid:2,qualityid:2,setid:2,cost:1,artistid:11,attack:3,health:1,classid:7,windfury:true,overload:true,hhid:618,hhimg:"EX1_243"},
		{id:154,name:"Earth Shock",typeid:1,qualityid:2,setid:2,cost:1,artistid:98,classid:7,silence:true,hhid:767,hhimg:"EX1_245"},
		{id:155,name:"Forked Lightning",typeid:1,qualityid:2,setid:2,cost:1,artistid:58,classid:7,overload:true,hhid:299,hhimg:"EX1_251"},
		{id:156,name:"Frost Shock",typeid:1,qualityid:1,setid:1,cost:1,artistid:12,classid:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:32,freeze:true,hhid:971,hhimg:"CS2_037"},
		{id:157,name:"Lightning Bolt",typeid:1,qualityid:2,setid:2,cost:1,artistid:65,classid:7,overload:true,hhid:505,hhimg:"EX1_238"},
		{id:158,name:"Rockbiter Weapon",typeid:1,qualityid:1,setid:1,cost:1,artistid:12,classid:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hhid:239,hhimg:"CS2_045"},
		{id:159,name:"Ancestral Spirit",typeid:1,qualityid:3,setid:2,cost:2,artistid:70,classid:7,hhid:404,hhimg:"CS2_038"},
		{id:160,name:"Flametongue Totem",typeid:2,qualityid:2,setid:1,cost:2,artistid:99,attack:0,health:3,raceid:6,classid:7,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:43,hhid:1008,hhimg:"EX1_565"},
		{id:161,name:"Stormforged Axe",typeid:3,qualityid:2,setid:2,cost:2,artistid:100,attack:2,durability:3,classid:7,overload:true,hhid:960,hhimg:"EX1_247"},
		{id:162,name:"Windfury",typeid:1,qualityid:1,setid:1,cost:2,artistid:76,classid:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:23,windfury:true,hhid:51,hhimg:"CS2_039"},
		{id:163,name:"Far Sight",typeid:1,qualityid:4,setid:2,cost:3,artistid:42,classid:7,hhid:818,hhimg:"CS2_053"},
		{id:164,name:"Feral Spirit",typeid:1,qualityid:3,setid:2,cost:3,artistid:15,classid:7,overload:true,taunt:true,hhid:238,hhimg:"EX1_248"},
		{id:165,name:"Hex",typeid:1,qualityid:1,setid:1,cost:3,artistid:85,classid:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:47,taunt:true,hhid:766,hhimg:"EX1_246"},
		{id:166,name:"Lava Burst",typeid:1,qualityid:3,setid:2,cost:3,artistid:3,classid:7,overload:true,hhid:864,hhimg:"EX1_241"},
		{id:167,name:"Lightning Storm",typeid:1,qualityid:3,setid:2,cost:3,artistid:94,classid:7,overload:true,hhid:629,hhimg:"EX1_259"},
		{id:168,name:"Mana Tide Totem",typeid:2,qualityid:3,setid:2,cost:3,artistid:90,attack:0,health:3,raceid:6,classid:7,hhid:513,hhimg:"EX1_575"},
		{id:169,name:"Unbound Elemental",typeid:2,qualityid:2,setid:2,cost:3,artistid:31,attack:2,health:4,classid:7,overload:true,hhid:774,hhimg:"EX1_258"},
		{id:170,name:"Windspeaker",typeid:2,qualityid:2,setid:1,cost:4,artistid:59,attack:3,health:3,classid:7,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:45,battlecry:true,windfury:true,hhid:178,hhimg:"EX1_587"},
		{id:171,name:"Bloodlust",typeid:1,qualityid:2,setid:1,cost:5,artistid:13,classid:7,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:40,hhid:1171,hhimg:"CS2_046"},
		{id:172,name:"Doomhammer",typeid:3,qualityid:4,setid:2,cost:5,artistid:101,attack:2,durability:8,classid:7,overload:true,windfury:true,hhid:352,hhimg:"EX1_567"},
		{id:173,name:"Earth Elemental",typeid:2,qualityid:4,setid:2,cost:5,artistid:3,attack:7,health:8,classid:7,overload:true,taunt:true,hhid:1141,hhimg:"EX1_250"},
		{id:174,name:"Fire Elemental",typeid:2,qualityid:2,setid:1,cost:6,artistid:58,attack:6,health:5,classid:7,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:49,battlecry:true,hhid:189,hhimg:"CS2_042"},
		{id:175,name:"Al'Akir the Windlord",typeid:2,qualityid:5,setid:2,cost:8,artistid:11,attack:3,health:5,classid:7,charge:true,divine_shield:true,taunt:true,windfury:true,hhid:32,hhimg:"NEW1_010"},
		/* warlock */
		{id:176,name:"Sacrificial Pact",typeid:1,qualityid:2,setid:1,cost:0,artistid:33,classid:8,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:15,hhid:163,hhimg:"NEW1_003"},
		{id:177,name:"Soulfire",typeid:1,qualityid:2,setid:1,cost:0,artistid:11,classid:8,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:28,hhid:974,hhimg:"EX1_308"},
		{id:178,name:"Blood Imp",typeid:2,qualityid:2,setid:2,cost:1,artistid:34,attack:0,health:1,raceid:2,classid:8,stealth:true,hhid:469,hhimg:"CS2_059"},
		{id:179,name:"Corruption",typeid:1,qualityid:2,setid:1,cost:1,artistid:62,classid:8,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:32,hhid:982,hhimg:"CS2_063"},
		{id:180,name:"Flame Imp",typeid:2,qualityid:2,setid:2,cost:1,artistid:12,attack:3,health:2,raceid:2,classid:8,battlecry:true,hhid:1090,hhimg:"EX1_319"},
		{id:181,name:"Mortal Coil",typeid:1,qualityid:2,setid:1,cost:1,artistid:31,classid:8,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:43,hhid:1092,hhimg:"EX1_302"},
		{id:182,name:"Power Overwhelming",typeid:1,qualityid:2,setid:2,cost:1,artistid:17,classid:8,hhid:846,hhimg:"EX1_316"},
		{id:183,name:"Voidwalker",typeid:2,qualityid:1,setid:1,cost:1,artistid:102,attack:1,health:3,raceid:2,classid:8,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,hhid:48,hhimg:"CS2_065"},
		{id:184,name:"Demonfire",typeid:1,qualityid:2,setid:2,cost:2,artistid:103,classid:8,hhid:1142,hhimg:"EX1_596"},
		{id:185,name:"Succubus",typeid:2,qualityid:1,setid:1,cost:2,artistid:104,attack:4,health:3,raceid:2,classid:8,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:40,battlecry:true,hhid:592,hhimg:"EX1_306"},
		{id:186,name:"Drain Life",typeid:1,qualityid:1,setid:1,cost:3,artistid:105,classid:8,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:45,hhid:919,hhimg:"CS2_061"},
		{id:187,name:"Felguard",typeid:2,qualityid:3,setid:2,cost:3,artistid:101,attack:3,health:5,raceid:2,classid:8,battlecry:true,taunt:true,hhid:517,hhimg:"EX1_301"},
		{id:188,name:"Sense Demons",typeid:1,qualityid:2,setid:2,cost:3,artistid:55,classid:8,hhid:860,hhimg:"EX1_317"},
		{id:189,name:"Shadow Bolt",typeid:1,qualityid:1,setid:1,cost:3,artistid:25,classid:8,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:47,hhid:914,hhimg:"CS2_057"},
		{id:190,name:"Void Terror",typeid:2,qualityid:3,setid:2,cost:3,artistid:12,attack:3,health:3,raceid:2,classid:8,battlecry:true,hhid:1221,hhimg:"EX1_304"},
		{id:191,name:"Hellfire",typeid:1,qualityid:1,setid:1,cost:4,artistid:68,classid:8,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:49,hhid:950,hhimg:"CS2_062"},
		{id:192,name:"Pit Lord",typeid:2,qualityid:4,setid:2,cost:4,artistid:69,attack:5,health:6,raceid:2,classid:8,battlecry:true,hhid:783,hhimg:"EX1_313"},
		{id:193,name:"Shadowflame",typeid:1,qualityid:3,setid:2,cost:4,artistid:106,classid:8,hhid:147,hhimg:"EX1_303"},
		{id:194,name:"Summoning Portal",typeid:2,qualityid:2,setid:2,cost:4,artistid:27,attack:0,health:4,classid:8,hhid:969,hhimg:"EX1_315"},
		{id:195,name:"Bane of Doom",typeid:1,qualityid:4,setid:2,cost:5,artistid:11,classid:8,hhid:23,hhimg:"EX1_320"},
		{id:196,name:"Doomguard",typeid:2,qualityid:3,setid:2,cost:5,artistid:73,attack:5,health:7,raceid:2,classid:8,battlecry:true,charge:true,hhid:631,hhimg:"EX1_310"},
		{id:197,name:"Dread Infernal",typeid:2,qualityid:2,setid:1,cost:6,artistid:70,attack:6,health:6,raceid:2,classid:8,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:23,battlecry:true,hhid:1019,hhimg:"CS2_064"},
		{id:198,name:"Siphon Soul",typeid:1,qualityid:3,setid:2,cost:6,artistid:27,classid:8,hhid:1100,hhimg:"EX1_309"},
		{id:199,name:"Twisting Nether",typeid:1,qualityid:4,setid:2,cost:8,artistid:25,classid:8,hhid:859,hhimg:"EX1_312"},
		{id:200,name:"Lord Jaraxxus",typeid:2,qualityid:5,setid:2,cost:9,artistid:12,attack:3,health:15,raceid:2,classid:8,battlecry:true,hhid:777,hhimg:"EX1_323"},
		/* warrior */
		{id:201,name:"Inner Rage",typeid:1,qualityid:2,setid:2,cost:0,artistid:67,classid:9,hhid:22,hhimg:"EX1_607"},
		{id:202,name:"Execute",typeid:1,qualityid:1,setid:1,cost:1,artistid:5,classid:9,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:47,hhid:785,hhimg:"CS2_108"},
		{id:203,name:"Shield Slam",typeid:1,qualityid:4,setid:2,cost:1,artistid:11,classid:9,hhid:546,hhimg:"EX1_410"},
		{id:204,name:"Upgrade!",typeid:1,qualityid:3,setid:2,cost:1,artistid:107,classid:9,hhid:511,hhimg:"EX1_409"},
		{id:205,name:"Whirlwind",typeid:1,qualityid:2,setid:1,cost:1,artistid:108,classid:9,soulbound:true,gsoulbound:true,unlocked:6,gunlocked:32,hhid:636,hhimg:"EX1_400"},
		{id:206,name:"Armorsmith",typeid:2,qualityid:3,setid:2,cost:2,artistid:109,attack:1,health:4,classid:9,hhid:596,hhimg:"EX1_402"},
		{id:207,name:"Battle Rage",typeid:1,qualityid:2,setid:2,cost:2,artistid:12,classid:9,hhid:400,hhimg:"EX1_392"},
		{id:208,name:"Cleave",typeid:1,qualityid:2,setid:1,cost:2,artistid:110,classid:9,soulbound:true,gsoulbound:true,unlocked:2,gunlocked:40,hhid:940,hhimg:"CS2_114"},
		{id:209,name:"Commanding Shout",typeid:1,qualityid:3,setid:2,cost:2,artistid:62,classid:9,hhid:1026,hhimg:"NEW1_036"},
		{id:210,name:"Cruel Taskmaster",typeid:2,qualityid:2,setid:2,cost:2,artistid:110,attack:2,health:2,classid:9,battlecry:true,hhid:285,hhimg:"EX1_603"},
		{id:211,name:"Fiery War Axe",typeid:3,qualityid:1,setid:1,cost:2,artistid:73,attack:3,durability:2,classid:9,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:49,hhid:401,hhimg:"CS2_106"},
		{id:212,name:"Heroic Strike",typeid:1,qualityid:1,setid:1,cost:2,artistid:108,classid:9,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:15,hhid:1007,hhimg:"CS2_105"},
		{id:213,name:"Rampage",typeid:1,qualityid:2,setid:2,cost:2,artistid:108,classid:9,hhid:1108,hhimg:"CS2_104"},
		{id:214,name:"Slam",typeid:1,qualityid:2,setid:2,cost:2,artistid:77,classid:9,hhid:1074,hhimg:"EX1_391"},
		{id:215,name:"Charge",typeid:1,qualityid:1,setid:1,cost:3,artistid:12,classid:9,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:23,charge:true,hhid:344,hhimg:"CS2_103"},
		{id:216,name:"Frothing Berserker",typeid:2,qualityid:3,setid:2,cost:3,artistid:111,attack:2,health:4,classid:9,hhid:654,hhimg:"EX1_604"},
		{id:217,name:"Shield Block",typeid:1,qualityid:2,setid:1,cost:3,artistid:57,classid:9,soulbound:true,gsoulbound:true,unlocked:8,gunlocked:28,hhid:1023,hhimg:"EX1_606"},
		{id:218,name:"Warsong Commander",typeid:2,qualityid:1,setid:1,cost:3,artistid:37,attack:2,health:3,classid:9,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:36,charge:true,hhid:1009,hhimg:"EX1_084"},
		{id:219,name:"Arathi Weaponsmith",typeid:2,qualityid:2,setid:2,cost:4,artistid:112,attack:3,health:3,classid:9,battlecry:true,hhid:538,hhimg:"EX1_398"},
		{id:220,name:"Kor'kron Elite",typeid:2,qualityid:2,setid:1,cost:4,artistid:12,attack:4,health:3,classid:9,soulbound:true,gsoulbound:true,unlocked:4,gunlocked:44,charge:true,hhid:28,hhimg:"NEW1_011"},
		{id:221,name:"Mortal Strike",typeid:1,qualityid:3,setid:2,cost:4,artistid:70,classid:9,hhid:804,hhimg:"EX1_408"},
		{id:222,name:"Arcanite Reaper",typeid:3,qualityid:2,setid:1,cost:5,artistid:113,attack:5,durability:2,classid:9,soulbound:true,gsoulbound:true,unlocked:10,gunlocked:51,hhid:304,hhimg:"CS2_112"},
		{id:223,name:"Brawl",typeid:1,qualityid:4,setid:2,cost:5,artistid:62,classid:9,hhid:75,hhimg:"EX1_407"},
		{id:224,name:"Gorehowl",typeid:3,qualityid:4,setid:2,cost:7,artistid:70,attack:7,durability:1,classid:9,hhid:810,hhimg:"EX1_411"},
		{id:225,name:"Grommash Hellscream",typeid:2,qualityid:5,setid:2,cost:8,artistid:69,attack:4,health:9,classid:9,charge:true,enrage:true,hhid:338,hhimg:"EX1_414"},
		/* neutral */
		{id:226,name:"Wisp",typeid:2,qualityid:2,setid:2,cost:0,artistid:28,attack:1,health:1,hhid:179,hhimg:"CS2_231"},
		{id:227,name:"Abusive Sergeant",typeid:2,qualityid:2,setid:2,cost:1,artistid:13,attack:2,health:1,battlecry:true,hhid:242,hhimg:"CS2_188"},
		{id:228,name:"Angry Chicken",typeid:2,qualityid:3,setid:2,cost:1,artistid:114,attack:1,health:1,raceid:1,enrage:true,hhid:1688,hhimg:"EX1_009"},
		{id:229,name:"Argent Squire",typeid:2,qualityid:2,setid:2,cost:1,artistid:70,attack:1,health:1,divine_shield:true,hhid:757,hhimg:"EX1_008"},
		{id:230,name:"Bloodsail Corsair",typeid:2,qualityid:3,setid:2,cost:1,artistid:115,attack:1,health:2,raceid:5,battlecry:true,hhid:997,hhimg:"NEW1_025"},
		{id:231,name:"Elven Archer",typeid:2,qualityid:2,setid:1,cost:1,artistid:38,attack:1,health:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:1,battlecry:true,hhid:309,hhimg:"CS2_189"},
		{id:232,name:"Goldshire Footman",typeid:2,qualityid:2,setid:1,cost:1,artistid:116,attack:1,health:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:4,taunt:true,hhid:922,hhimg:"CS1_042"},
		{id:233,name:"Grimscale Oracle",typeid:2,qualityid:2,setid:1,cost:1,artistid:117,attack:1,health:1,raceid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:8,hhid:510,hhimg:"EX1_508"},
		{id:234,name:"Hungry Crab",typeid:2,qualityid:4,setid:2,cost:1,artistid:118,attack:1,health:2,raceid:1,battlecry:true,hhid:443,hhimg:"NEW1_017"},
		{id:235,name:"Leper Gnome",typeid:2,qualityid:2,setid:2,cost:1,artistid:69,attack:2,health:1,deathrattle:true,hhid:658,hhimg:"EX1_029"},
		{id:236,name:"Lightwarden",typeid:2,qualityid:3,setid:2,cost:1,artistid:119,attack:1,health:2,hhid:1655,hhimg:"EX1_001"},
		{id:237,name:"Murloc Raider",typeid:2,qualityid:1,setid:1,cost:1,artistid:3,attack:2,health:1,raceid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:5,hhid:191,hhimg:"CS2_168"},
		{id:238,name:"Murloc Tidecaller",typeid:2,qualityid:3,setid:2,cost:1,artistid:118,attack:1,health:2,raceid:4,hhid:475,hhimg:"EX1_509"},
		{id:239,name:"Secretkeeper",typeid:2,qualityid:3,setid:2,cost:1,artistid:56,attack:1,health:2,secret:true,hhid:158,hhimg:"EX1_080"},
		{id:240,name:"Shieldbearer",typeid:2,qualityid:2,setid:2,cost:1,artistid:120,attack:0,health:4,taunt:true,hhid:866,hhimg:"EX1_405"},
		{id:241,name:"Southsea Deckhand",typeid:2,qualityid:2,setid:2,cost:1,artistid:40,raceid:5,attack:2,health:1,charge:true,hhid:724,hhimg:"CS2_146"},
		{id:242,name:"Stonetusk Boar",typeid:2,qualityid:1,setid:1,cost:1,artistid:47,attack:1,health:1,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:2,charge:true,hhid:648,hhimg:"CS2_171"},
		{id:243,name:"Voodoo Doctor",typeid:2,qualityid:1,setid:1,cost:1,artistid:83,attack:2,health:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:6,battlecry:true,hhid:132,hhimg:"EX1_011"},
		{id:244,name:"Worgen Infiltrator",typeid:2,qualityid:2,setid:2,cost:1,artistid:11,attack:2,health:1,stealth:true,hhid:994,hhimg:"EX1_010"},
		{id:245,name:"Young Dragonhawk",typeid:2,qualityid:2,setid:2,cost:1,artistid:109,attack:1,health:1,raceid:1,windfury:true,hhid:641,hhimg:"CS2_169"},
		{id:246,name:"Young Priestess",typeid:2,qualityid:3,setid:2,cost:1,artistid:59,attack:2,health:1,hhid:1634,hhimg:"EX1_004"},
		{id:247,name:"Acidic Swamp Ooze",typeid:2,qualityid:2,setid:1,cost:2,artistid:121,attack:3,health:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:6,battlecry:true,hhid:906,hhimg:"EX1_066"},
		{id:248,name:"Amani Berserker",typeid:2,qualityid:2,setid:2,cost:2,artistid:68,attack:2,health:3,enrage:true,hhid:790,hhimg:"EX1_393"},
		{id:249,name:"Ancient Watcher",typeid:2,qualityid:3,setid:2,cost:2,artistid:4,attack:4,health:5,hhid:605,hhimg:"EX1_045"},
		{id:250,name:"Bloodfen Raptor",typeid:2,qualityid:1,setid:1,cost:2,artistid:40,attack:3,health:2,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:2,hhid:216,hhimg:"CS2_172"},
		{id:251,name:"Bloodmage Thalnos",typeid:2,qualityid:5,setid:2,cost:2,artistid:12,attack:1,health:1,battlecry:true,spell_damage:true,hhid:749,hhimg:"EX1_012"},
		{id:252,name:"Bloodsail Raider",typeid:2,qualityid:2,setid:2,cost:2,artistid:33,attack:2,health:3,raceid:5,battlecry:true,hhid:999,hhimg:"NEW1_018"},
		{id:253,name:"Bluegill Warrior",typeid:2,qualityid:2,setid:1,cost:2,artistid:122,attack:2,health:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:4,charge:true,hhid:739,hhimg:"CS2_173"},
		{id:254,name:"Captain's Parrot",typeid:2,qualityid:4,setid:4,cost:2,artistid:32,attack:1,health:1,raceid:1,soulbound:true,gsoulbound:true,battlecry:true,hhid:530,hhimg:"NEW1_016"},
		{id:255,name:"Crazed Alchemist",typeid:2,qualityid:3,setid:2,cost:2,artistid:97,attack:2,health:2,battlecry:true,hhid:801,hhimg:"EX1_059"},
		{id:256,name:"Dire Wolf Alpha",typeid:2,qualityid:2,setid:2,cost:2,artistid:123,attack:2,health:2,raceid:1,hhid:985,hhimg:"EX1_162"},
		{id:257,name:"Doomsayer",typeid:2,qualityid:4,setid:2,cost:2,artistid:12,attack:0,health:7,hhid:138,hhimg:"NEW1_021"},
		{id:258,name:"Faerie Dragon",typeid:2,qualityid:2,setid:2,cost:2,artistid:112,attack:3,health:2,raceid:3,hhid:609,hhimg:"NEW1_023"},
		{id:259,name:"Frostwolf Grunt",typeid:2,qualityid:2,setid:1,cost:2,artistid:124,attack:2,health:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:7,taunt:true,hhid:41,hhimg:"CS2_121"},
		{id:260,name:"Ironbeak Owl",typeid:2,qualityid:2,setid:2,cost:2,artistid:23,attack:2,health:1,raceid:1,silence:true,hhid:290,hhimg:"CS2_203"},
		{id:261,name:"Knife Juggler",typeid:2,qualityid:3,setid:2,cost:2,artistid:107,attack:3,health:2,hhid:1073,hhimg:"NEW1_019"},
		{id:262,name:"Kobold Geomancer",typeid:2,qualityid:2,setid:1,cost:2,artistid:18,attack:2,health:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:8,spell_damage:true,hhid:672,hhimg:"CS2_142"},
		{id:263,name:"Loot Hoarder",typeid:2,qualityid:2,setid:2,cost:2,artistid:33,attack:2,health:1,deathrattle:true,hhid:251,hhimg:"EX1_096"},
		{id:264,name:"Lorewalker Cho",typeid:2,qualityid:5,setid:2,cost:2,artistid:125,attack:0,health:4,hhid:1135,hhimg:"EX1_100"},
		{id:265,name:"Mad Bomber",typeid:2,qualityid:2,setid:2,cost:2,artistid:114,attack:3,health:2,battlecry:true,hhid:762,hhimg:"EX1_082"},
		{id:266,name:"Mana Addict",typeid:2,qualityid:3,setid:2,cost:2,artistid:87,attack:1,health:3,hhid:12,hhimg:"EX1_055"},
		{id:267,name:"Mana Wraith",typeid:2,qualityid:3,setid:2,cost:2,artistid:13,attack:2,health:2,hhid:715,hhimg:"EX1_616"},
		{id:268,name:"Master Swordsmith",typeid:2,qualityid:3,setid:2,cost:2,artistid:77,attack:1,health:3,hhid:351,hhimg:"NEW1_037"},
		{id:269,name:"Millhouse Manastorm",typeid:2,qualityid:5,setid:2,cost:2,artistid:33,attack:4,health:4,battlecry:true,hhid:855,hhimg:"NEW1_029"},
		{id:270,name:"Murloc Tidehunter",typeid:2,qualityid:2,setid:1,cost:2,artistid:3,attack:2,health:1,raceid:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:6,battlecry:true,hhid:976,hhimg:"EX1_506"},
		{id:271,name:"Nat Pagle",typeid:2,qualityid:5,setid:2,cost:2,artistid:38,attack:0,health:4,hhid:1147,hhimg:"EX1_557"},
		{id:272,name:"Novice Engineer",typeid:2,qualityid:1,setid:1,cost:2,artistid:83,attack:1,health:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:1,battlecry:true,hhid:284,hhimg:"EX1_015"},
		{id:273,name:"Pint-Sized Summoner",typeid:2,qualityid:3,setid:2,cost:2,artistid:126,attack:2,health:2,hhid:37,hhimg:"EX1_076"},
		{id:274,name:"River Crocolisk",typeid:2,qualityid:1,setid:1,cost:2,artistid:32,attack:2,health:3,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:1,hhid:1369,hhimg:"CS2_120"},
		{id:275,name:"Sunfury Protector",typeid:2,qualityid:3,setid:2,cost:2,artistid:10,attack:2,health:3,battlecry:true,taunt:true,hhid:891,hhimg:"EX1_058"},
		{id:276,name:"Wild Pyromancer",typeid:2,qualityid:3,setid:2,cost:2,artistid:12,attack:3,health:2,hhid:1014,hhimg:"NEW1_020"},
		{id:277,name:"Youthful Brewmaster",typeid:2,qualityid:2,setid:2,cost:2,artistid:37,attack:3,health:2,battlecry:true,hhid:415,hhimg:"EX1_049"},
		{id:278,name:"Acolyte of Pain",typeid:2,qualityid:2,setid:2,cost:3,artistid:106,attack:1,health:3,hhid:1659,hhimg:"EX1_007"},
		{id:279,name:"Alarm-o-Bot",typeid:2,qualityid:3,setid:2,cost:3,artistid:20,attack:0,health:3,hhid:1658,hhimg:"EX1_006"},
		{id:280,name:"Arcane Golem",typeid:2,qualityid:3,setid:2,cost:3,artistid:36,attack:4,health:2,battlecry:true,charge:true,hhid:466,hhimg:"EX1_089"},
		{id:281,name:"Big Game Hunter",typeid:2,qualityid:4,setid:2,cost:3,artistid:61,attack:4,health:2,battlecry:true,hhid:1657,hhimg:"EX1_005"},
		{id:282,name:"Blood Knight",typeid:2,qualityid:4,setid:2,cost:3,artistid:2,attack:3,health:3,battlecry:true,divine_shield:true,hhid:755,hhimg:"EX1_590"},
		{id:283,name:"Coldlight Oracle",typeid:2,qualityid:3,setid:2,cost:3,artistid:38,attack:2,health:2,raceid:4,battlecry:true,hhid:1016,hhimg:"EX1_050"},
		{id:284,name:"Coldlight Seer",typeid:2,qualityid:3,setid:2,cost:3,artistid:127,attack:2,health:3,raceid:4,battlecry:true,hhid:453,hhimg:"EX1_103"},
		{id:285,name:"Dalaran Mage",typeid:2,qualityid:2,setid:1,cost:3,artistid:33,attack:1,health:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:3,spell_damage:true,hhid:175,hhimg:"EX1_582"},
		{id:286,name:"Demolisher",typeid:2,qualityid:3,setid:2,cost:3,artistid:11,attack:1,health:4,hhid:979,hhimg:"EX1_102"},
		{id:287,name:"Earthen Ring Farseer",typeid:2,qualityid:2,setid:2,cost:3,artistid:12,attack:3,health:3,battlecry:true,hhid:1651,hhimg:"CS2_117"},
		{id:288,name:"Emperor Cobra",typeid:2,qualityid:3,setid:2,cost:3,artistid:42,attack:2,health:3,raceid:1,hhid:1098,hhimg:"EX1_170"},
		{id:289,name:"Flesheating Ghoul",typeid:2,qualityid:2,setid:2,cost:3,artistid:12,attack:2,health:3,hhid:397,hhimg:"tt_004"},
		{id:290,name:"Harvest Golem",typeid:2,qualityid:2,setid:2,cost:3,artistid:128,attack:2,health:3,deathrattle:true,hhid:778,hhimg:"EX1_556"},
		{id:291,name:"Imp Master",typeid:2,qualityid:3,setid:2,cost:3,artistid:82,attack:1,health:5,hhid:926,hhimg:"EX1_597"},
		{id:292,name:"Injured Blademaster",typeid:2,qualityid:3,setid:2,cost:3,artistid:112,attack:4,health:7,battlecry:true,hhid:1109,hhimg:"CS2_181"},
		{id:293,name:"Ironforge Rifleman",typeid:2,qualityid:2,setid:1,cost:3,artistid:129,attack:2,health:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:3,battlecry:true,hhid:339,hhimg:"CS2_141"},
		{id:294,name:"Ironfur Grizzly",typeid:2,qualityid:2,setid:1,cost:3,artistid:42,attack:3,health:3,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:2,taunt:true,hhid:1182,hhimg:"CS2_125"},
		{id:295,name:"Jungle Panther",typeid:2,qualityid:2,setid:2,cost:3,artistid:118,attack:4,health:2,raceid:1,stealth:true,hhid:921,hhimg:"EX1_017"},
		{id:296,name:"King Mukla",typeid:2,qualityid:5,setid:2,cost:3,artistid:130,attack:5,health:5,raceid:1,battlecry:true,hhid:1693,hhimg:"EX1_014"},
		{id:297,name:"Magma Rager",typeid:2,qualityid:1,setid:1,cost:3,artistid:31,attack:5,health:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:7,hhid:1653,hhimg:"CS2_118"},
		{id:298,name:"Mind Control Tech",typeid:2,qualityid:3,setid:2,cost:3,artistid:6,attack:3,health:3,battlecry:true,hhid:734,hhimg:"EX1_085"},
		{id:299,name:"Murloc Warleader",typeid:2,qualityid:4,setid:2,cost:3,artistid:131,attack:3,health:3,raceid:4,hhid:1063,hhimg:"EX1_507"},
		{id:300,name:"Questing Adventurer",typeid:2,qualityid:3,setid:2,cost:3,artistid:132,attack:2,health:2,hhid:791,hhimg:"EX1_044"},
		{id:301,name:"Raging Worgen",typeid:2,qualityid:2,setid:2,cost:3,artistid:5,attack:3,health:3,enrage:true,windfury:true,hhid:1155,hhimg:"EX1_412"},
		{id:302,name:"Raid Leader",typeid:2,qualityid:1,setid:1,cost:3,artistid:133,attack:2,health:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:9,hhid:1401,hhimg:"CS2_122"},
		{id:303,name:"Razorfen Hunter",typeid:2,qualityid:2,setid:1,cost:3,artistid:15,attack:2,health:3,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:2,battlecry:true,hhid:257,hhimg:"CS2_196"},
		{id:304,name:"Scarlet Crusader",typeid:2,qualityid:2,setid:2,cost:3,artistid:56,attack:3,health:1,divine_shield:true,hhid:642,hhimg:"EX1_020"},
		{id:305,name:"Shattered Sun Cleric",typeid:2,qualityid:2,setid:1,cost:3,artistid:1,attack:3,health:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:5,battlecry:true,hhid:608,hhimg:"EX1_019"},
		{id:306,name:"Silverback Patriarch",typeid:2,qualityid:2,setid:1,cost:3,artistid:71,attack:1,health:4,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:9,taunt:true,hhid:67,hhimg:"CS2_127"},
		{id:307,name:"Southsea Captain",typeid:2,qualityid:4,setid:2,cost:3,artistid:134,attack:3,health:3,raceid:5,hhid:680,hhimg:"NEW1_027"},
		{id:308,name:"Tauren Warrior",typeid:2,qualityid:2,setid:2,cost:3,artistid:135,attack:2,health:3,enrage:true,taunt:true,hhid:45,hhimg:"EX1_390"},
		{id:309,name:"Thrallmar Farseer",typeid:2,qualityid:2,setid:2,cost:3,artistid:76,attack:2,health:3,windfury:true,hhid:765,hhimg:"EX1_021"},
		{id:310,name:"Tinkmaster Overspark",typeid:2,qualityid:5,setid:2,cost:3,artistid:17,attack:2,health:2,battlecry:true,hhid:570,hhimg:"EX1_083"},
		{id:311,name:"Wolfrider",typeid:2,qualityid:1,setid:1,cost:3,artistid:5,attack:3,health:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:9,charge:true,hhid:289,hhimg:"CS2_124"},
		{id:312,name:"Ancient Brewmaster",typeid:2,qualityid:2,setid:2,cost:4,artistid:34,attack:5,health:4,battlecry:true,hhid:186,hhimg:"EX1_057"},
		{id:313,name:"Ancient Mage",typeid:2,qualityid:3,setid:2,cost:4,artistid:47,attack:2,health:5,spell_damage:true,hhid:915,hhimg:"EX1_584"},
		{id:314,name:"Chillwind Yeti",typeid:2,qualityid:2,setid:1,cost:4,artistid:29,attack:4,health:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:9,hhid:90,hhimg:"CS2_182"},
		{id:315,name:"Cult Master",typeid:2,qualityid:2,setid:2,cost:4,artistid:11,attack:4,health:2,hhid:811,hhimg:"EX1_595"},
		{id:316,name:"Dark Iron Dwarf",typeid:2,qualityid:2,setid:2,cost:4,artistid:136,attack:4,health:4,battlecry:true,hhid:348,hhimg:"EX1_046"},
		{id:317,name:"Defender of Argus",typeid:2,qualityid:3,setid:2,cost:4,artistid:12,attack:2,health:3,battlecry:true,taunt:true,hhid:763,hhimg:"EX1_093"},
		{id:318,name:"Dragonling Mechanic",typeid:2,qualityid:2,setid:1,cost:4,artistid:45,attack:2,health:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:3,battlecry:true,hhid:523,hhimg:"EX1_025"},
		{id:319,name:"Dread Corsair",typeid:2,qualityid:2,setid:2,cost:4,artistid:2,attack:3,health:3,raceid:5,taunt:true,hhid:878,hhimg:"NEW1_022"},
		{id:320,name:"Gnomish Inventor",typeid:2,qualityid:2,setid:1,cost:4,artistid:137,attack:2,health:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:5,battlecry:true,hhid:308,hhimg:"CS2_147"},
		{id:321,name:"Leeroy Jenkins",typeid:2,qualityid:5,setid:2,cost:4,artistid:39,attack:6,health:2,battlecry:true,charge:true,hhid:559,hhimg:"EX1_116"},
		{id:322,name:"Mogu'shan Warden",typeid:2,qualityid:2,setid:2,cost:4,artistid:138,attack:1,health:7,taunt:true,hhid:700,hhimg:"EX1_396"},
		{id:323,name:"Oasis Snapjaw",typeid:2,qualityid:1,setid:1,cost:4,artistid:32,attack:2,health:7,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:1,hhid:1370,hhimg:"CS2_119"},
		{id:324,name:"Ogre Magi",typeid:2,qualityid:2,setid:1,cost:4,artistid:10,attack:4,health:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:8,spell_damage:true,hhid:995,hhimg:"CS2_197"},
		{id:325,name:"Old Murk-Eye",typeid:2,qualityid:5,setid:4,cost:4,artistid:3,attack:2,health:4,raceid:4,charge:true,hhid:736,hhimg:"EX1_062"},
		{id:326,name:"Sen'jin Shieldmasta",typeid:2,qualityid:1,setid:1,cost:4,artistid:128,attack:3,health:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:6,taunt:true,hhid:635,hhimg:"CS2_179"},
		{id:327,name:"Silvermoon Guardian",typeid:2,qualityid:2,setid:2,cost:4,artistid:110,attack:3,health:3,divine_shield:true,hhid:34,hhimg:"EX1_023"},
		{id:328,name:"Spellbreaker",typeid:2,qualityid:2,setid:2,cost:4,artistid:107,attack:4,health:3,battlecry:true,silence:true,hhid:754,hhimg:"EX1_048"},
		{id:329,name:"Stormwind Knight",typeid:2,qualityid:2,setid:1,cost:4,artistid:null,attack:2,health:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:4,charge:true,hhid:622,hhimg:"CS2_131"},
		{id:330,name:"Twilight Drake",typeid:2,qualityid:3,setid:2,cost:4,artistid:118,attack:4,health:1,raceid:3,battlecry:true,hhid:1037,hhimg:"EX1_043"},
		{id:331,name:"Violet Teacher",typeid:2,qualityid:3,setid:2,cost:4,artistid:10,attack:3,health:5,hhid:1029,hhimg:"NEW1_026"},
		{id:332,name:"Abomination",typeid:2,qualityid:3,setid:2,cost:5,artistid:12,attack:4,health:4,taunt:true,deathrattle:true,hhid:440,hhimg:"EX1_097"},
		{id:333,name:"Azure Drake",typeid:2,qualityid:3,setid:2,cost:5,artistid:41,attack:4,health:4,raceid:3,battlecry:true,spell_damage:true,hhid:825,hhimg:"EX1_284"},
		{id:334,name:"Booty Bay Bodyguard",typeid:2,qualityid:2,setid:1,cost:5,artistid:107,attack:5,health:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:7,taunt:true,hhid:1140,hhimg:"CS2_187"},
		{id:335,name:"Captain Greenskin",typeid:2,qualityid:5,setid:2,cost:5,artistid:3,attack:5,health:4,raceid:5,battlecry:true,hhid:456,hhimg:"NEW1_024"},
		{id:336,name:"Darkscale Healer",typeid:2,qualityid:2,setid:1,cost:5,artistid:91,attack:4,health:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:55,guclassid:5,battlecry:true,hhid:582,hhimg:"DS1_055"},
		{id:337,name:"Elite Tauren Chieftain",typeid:2,qualityid:5,setid:3,cost:5,artistid:112,attack:5,health:5,gsoulbound:true,battlecry:true,hhid:1754,hhimg:"PRO_001"},
		{id:338,name:"Faceless Manipulator",typeid:2,qualityid:4,setid:2,cost:5,artistid:11,attack:3,health:3,hhid:531,hhimg:"EX1_564"},
		{id:339,name:"Fen Creeper",typeid:2,qualityid:2,setid:2,cost:5,artistid:140,attack:3,health:6,taunt:true,hhid:602,hhimg:"CS1_069"},
		{id:340,name:"Frostwolf Warlord",typeid:2,qualityid:2,setid:1,cost:5,artistid:10,attack:4,health:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:7,battlecry:true,hhid:496,hhimg:"CS2_226"},
		{id:341,name:"Gadgetzan Auctioneer",typeid:2,qualityid:3,setid:2,cost:5,artistid:104,attack:4,health:4,hhid:932,hhimg:"EX1_095"},
		{id:342,name:"Gurubashi Berserker",typeid:2,qualityid:2,setid:1,cost:5,artistid:12,attack:2,health:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:8,hhid:768,hhimg:"EX1_399"},
		{id:343,name:"Harrison Jones",typeid:2,qualityid:5,setid:2,cost:5,artistid:104,attack:5,health:4,battlecry:true,hhid:912,hhimg:"EX1_558"},
		{id:344,name:"Nightblade",typeid:2,qualityid:1,setid:1,cost:5,artistid:11,attack:4,health:4,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:53,guclassid:1,battlecry:true,hhid:670,hhimg:"EX1_593"},
		{id:345,name:"Silver Hand Knight",typeid:2,qualityid:2,setid:2,cost:5,artistid:141,attack:4,health:4,battlecry:true,hhid:69,hhimg:"CS2_151"},
		{id:346,name:"Spiteful Smith",typeid:2,qualityid:2,setid:2,cost:5,artistid:76,attack:4,health:6,enrage:true,hhid:61,hhimg:"CS2_221"},
		{id:347,name:"Stampeding Kodo",typeid:2,qualityid:3,setid:2,cost:5,artistid:32,attack:3,health:5,raceid:1,battlecry:true,hhid:1371,hhimg:"NEW1_041"},
		{id:348,name:"Stormpike Commando",typeid:2,qualityid:2,setid:1,cost:5,artistid:142,attack:4,health:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:4,battlecry:true,hhid:413,hhimg:"CS2_150"},
		{id:349,name:"Stranglethorn Tiger",typeid:2,qualityid:2,setid:2,cost:5,artistid:12,attack:5,health:5,raceid:1,stealth:true,hhid:68,hhimg:"EX1_028"},
		{id:350,name:"Venture Co. Mercenary",typeid:2,qualityid:2,setid:2,cost:5,artistid:101,attack:7,health:6,hhid:1122,hhimg:"CS2_227"},
		{id:351,name:"Archmage",typeid:2,qualityid:2,setid:1,cost:6,artistid:48,attack:4,health:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:57,guclassid:3,spell_damage:true,hhid:525,hhimg:"CS2_155"},
		{id:352,name:"Argent Commander",typeid:2,qualityid:3,setid:2,cost:6,artistid:10,attack:4,health:2,charge:true,divine_shield:true,hhid:281,hhimg:"EX1_067"},
		{id:353,name:"Boulderfist Ogre",typeid:2,qualityid:1,setid:1,cost:6,artistid:128,attack:6,health:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:8,hhid:1686,hhimg:"CS2_200"},
		{id:354,name:"Cairne Bloodhoof",typeid:2,qualityid:5,setid:2,cost:6,artistid:62,attack:4,health:5,deathrattle:true,hhid:420,hhimg:"EX1_110"},
		{id:355,name:"Frost Elemental",typeid:2,qualityid:2,setid:2,cost:6,artistid:3,attack:5,health:5,battlecry:true,freeze:true,hhid:512,hhimg:"EX1_283"},
		{id:356,name:"Gelbin Mekkatorque",typeid:2,qualityid:5,setid:3,cost:6,artistid:143,attack:6,health:6,gsoulbound:true,battlecry:true,hhid:858,hhimg:"EX1_112"},
		{id:357,name:"Hogger",typeid:2,qualityid:5,setid:2,cost:6,artistid:144,attack:4,health:4,taunt:true,hhid:640,hhimg:"NEW1_040"},
		{id:358,name:"Illidan Stormrage",typeid:2,qualityid:5,setid:2,cost:6,artistid:12,attack:7,health:5,raceid:2,hhid:556,hhimg:"EX1_614"},
		{id:359,name:"Lord of the Arena",typeid:2,qualityid:2,setid:1,cost:6,artistid:77,attack:6,health:5,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:5,taunt:true,hhid:157,hhimg:"CS2_162"},
		{id:360,name:"Priestess of Elune",typeid:2,qualityid:2,setid:2,cost:6,artistid:3,attack:5,health:4,battlecry:true,hhid:424,hhimg:"EX1_583"},
		{id:361,name:"Reckless Rocketeer",typeid:2,qualityid:1,setid:1,cost:6,artistid:101,attack:5,health:2,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:7,charge:true,hhid:445,hhimg:"CS2_213"},
		{id:362,name:"Sunwalker",typeid:2,qualityid:3,setid:2,cost:6,artistid:145,attack:4,health:5,divine_shield:true,taunt:true,hhid:759,hhimg:"EX1_032"},
		{id:363,name:"Sylvanas Windrunner",typeid:2,qualityid:5,setid:2,cost:6,artistid:69,attack:5,health:5,deathrattle:true,hhid:1721,hhimg:"EX1_016"},
		{id:364,name:"The Beast",typeid:2,qualityid:5,setid:2,cost:6,artistid:69,attack:9,health:7,raceid:1,deathrattle:true,hhid:962,hhimg:"EX1_577"},
		{id:365,name:"The Black Knight",typeid:2,qualityid:5,setid:2,cost:6,artistid:12,attack:4,health:5,battlecry:true,taunt:true,hhid:1656,hhimg:"EX1_002"},
		{id:366,name:"Windfury Harpy",typeid:2,qualityid:2,setid:2,cost:6,artistid:146,attack:4,health:5,windfury:true,hhid:567,hhimg:"EX1_033"},
		{id:367,name:"Baron Geddon",typeid:2,qualityid:5,setid:2,cost:7,artistid:147,attack:7,health:5,hhid:336,hhimg:"EX1_249"},
		{id:368,name:"Core Hound",typeid:2,qualityid:2,setid:1,cost:7,artistid:77,attack:9,health:5,raceid:1,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:2,hhid:1687,hhimg:"CS2_201"},
		{id:369,name:"Ravenholdt Assassin",typeid:2,qualityid:3,setid:2,cost:7,artistid:58,attack:7,health:5,stealth:true,hhid:134,hhimg:"CS2_161"},
		{id:370,name:"Stormwind Champion",typeid:2,qualityid:2,setid:1,cost:7,artistid:1,attack:6,health:6,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:59,guclassid:4,hhid:753,hhimg:"CS2_222"},
		{id:371,name:"War Golem",typeid:2,qualityid:2,setid:1,cost:7,artistid:106,attack:7,health:7,soulbound:true,gsoulbound:true,unlocked:1,gunlocked:51,guclassid:6,hhid:712,hhimg:"CS2_186"},
		{id:372,name:"Gruul",typeid:2,qualityid:5,setid:2,cost:8,artistid:142,attack:7,health:7,hhid:526,hhimg:"NEW1_038"},
		{id:373,name:"Ragnaros the Firelord",typeid:2,qualityid:5,setid:2,cost:8,artistid:148,attack:8,health:8,hhid:374,hhimg:"EX1_298"},
		{id:374,name:"Alexstrasza",typeid:2,qualityid:5,setid:2,cost:9,artistid:11,attack:8,health:8,raceid:3,battlecry:true,hhid:581,hhimg:"EX1_561"},
		{id:375,name:"Malygos",typeid:2,qualityid:5,setid:2,cost:9,artistid:57,attack:4,health:12,raceid:3,spell_damage:true,hhid:436,hhimg:"EX1_563"},
		{id:376,name:"Nozdormu",typeid:2,qualityid:5,setid:2,cost:9,artistid:10,attack:8,health:8,raceid:3,hhid:411,hhimg:"EX1_560"},
		{id:377,name:"Onyxia",typeid:2,qualityid:5,setid:2,cost:9,artistid:5,attack:8,health:8,raceid:3,battlecry:true,hhid:363,hhimg:"EX1_562"},
		{id:378,name:"Ysera",typeid:2,qualityid:5,setid:2,cost:9,artistid:18,attack:4,health:12,raceid:3,hhid:1186,hhimg:"EX1_572"},
		{id:379,name:"Deathwing",typeid:2,qualityid:5,setid:2,cost:10,artistid:34,attack:12,health:12,raceid:3,battlecry:true,hhid:834,hhimg:"NEW1_030"},
		{id:380,name:"Sea Giant",typeid:2,qualityid:4,setid:2,cost:10,artistid:149,attack:8,health:8,hhid:211,hhimg:"EX1_586"},
		{id:381,name:"Mountain Giant",typeid:2,qualityid:4,setid:2,cost:12,artistid:112,attack:8,health:8,hhid:993,hhimg:"EX1_105"},
		{id:382,name:"Molten Giant",typeid:2,qualityid:4,setid:2,cost:20,artistid:69,attack:8,health:8,hhid:1372,hhimg:"EX1_620"}
	]
};


var Background = (function (){

	const KEY_DECKS = "decks";

	var _this 		= {},
		_decks		= [];

	_this.init = function (){ 

		// get the saved decks or initialize if none exist
		var decks = _this.retrieve(KEY_DECKS);
		if (decks === undefined) {
			_this.store(KEY_DECKS, []);
		} else {
			_decks = decks;
		}

		// subscribe to events from proxy
		chrome.extension.onMessage.addListener(onProxyMessage);	
	};

	function onProxyMessage (request, sender, sendResponse) { 	

		switch (request.message) {
			case 'snapshot': 
			
				// retrieve all current values
				var data = {
					artists: Deckie.artists,
					classes: Deckie.classes,
					cards: Deckie.cards,
					decks: _decks
				}
				
				sendResponse({snapshot: data});
				 
				break;
			case 'create-deck':

				if (_this.createDeck(request.deck)) {
					sendResponse({decks: _decks, created: request.deck.name});
				} else {
					sendResponse({error: "A deck with this name already exists."});
				}			
				
				break;
			case 'update-deck':
			
				if (_this.updateDeck(request.deck)) {
					sendResponse({decks: _decks, created: request.deck.name});
				} else {
					sendResponse({error: "Something bad happened.  Please contact support."});
				}
				
				break;
			case 'delete-deck':

				if (_this.deleteDeck(request.name)) {
					sendResponse({decks: _decks});
				} else {
					sendResponse({error: "Something bad happened.  Please contact support."});
				}			
				
				break;
		}
	};

	// retrieve a deck from the list
	_this.getDeck = function(name) {
		for (var i = 0; i < _decks.length; ++i) {
			if (_decks[i].name == name) {
				return _decks[i];
			}
		}
		
		return undefined;
	};
	
	// creates and stores a new deck - will fail if a deck of the same name exists
	_this.createDeck = function(deck) {
		if (_this.getDeck(deck.name) !== undefined) {
			return false;
		}

		_decks.push(deck);
		_this.store(KEY_DECKS, _decks);
		
		return true;
	};
	
	_this.updateDeck = function(deck) {
		for (var i = 0; i < _decks.length; ++i) {
			if (_decks[i].name == deck.old) {
				delete deck.old;
				_decks[i] = deck;
				_this.store(KEY_DECKS, _decks);
				
				return true;
			}
		}
		
		return false;
	};
	
	_this.deleteDeck = function(name) {
		for (var i = 0; i < _decks.length; ++i) {
			if (_decks[i].name == name) {
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

	return _this;
}());

window.addEventListener("load", function() { 
	Background.init(); 
}, false);