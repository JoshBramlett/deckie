/****************************************************
 *
 *           HEARTHSTONE MODEL DEFINITIONS
 *
 ****************************************************/

var HearthStoneCard = kendo.data.Model.define( {
    id: "id",
	fields: {
		// required to have value
		id: 			{ type: "number" },
		name: 			{ type: "string" },
		typeid:			{ type: "number" },
		qualityid: 		{ type: "number" },
		setid:	 		{ type: "number" },
		cost: 			{ type: "number" },
		artistid: 		{ type: "number" },

		// not required - card stats & info
		health: 		{ type: "number", defaultValue: null },
		attack: 		{ type: "number", defaultValue: null },
		durability: 	{ type: "number", defaultValue: null },
		raceid: 		{ type: "number", defaultValue: null },

		// not required - hero info
		classid: 		{ type: "number", defaultValue: null },

		// not required - player info
		soulbound: 		{ type: "boolean", defaultValue: false },
		gsoulbound: 	{ type: "boolean", defaultValue: false },
		unlocked:		{ type: "number", defaultValue: null },
		gunlocked:		{ type: "number", defaultValue: null },
		guclassid:		{ type: "number", defaultValue: null },

		// not required - card abilities
		battlecry: 		{ type: "boolean", defaultValue: false },
		charge: 		{ type: "boolean", defaultValue: false },
		choose_one: 	{ type: "boolean", defaultValue: false },
		combo: 			{ type: "boolean", defaultValue: false },
		counter: 		{ type: "boolean", defaultValue: false },
		deathrattle: 	{ type: "boolean", defaultValue: false },
		divine_shield: 	{ type: "boolean", defaultValue: false },
		enrage: 		{ type: "boolean", defaultValue: false },
		freeze:			{ type: "boolean", defaultValue: false },
		immune: 		{ type: "boolean", defaultValue: false },
		overload: 		{ type: "boolean", defaultValue: false },
		secret: 		{ type: "boolean", defaultValue: false },
		silence: 		{ type: "boolean", defaultValue: false },
		spell_damage: 	{ type: "boolean", defaultValue: false },
		stealth: 		{ type: "boolean", defaultValue: false },
		taunt: 			{ type: "boolean", defaultValue: false },
		windfury: 		{ type: "boolean", defaultValue: false },

		// required external properties
		hpid:			{ type: "number" },
		hsid: 			{ type: "number" },
		hhid: 			{ type: "number" },
		hhimg: 			{ type: "string" },

		// deck creation
		count:			{ type: "number" }
	}
});

var HearthStoneCardQuality = kendo.data.Model.define( {
	id: "id",
	fields: {
		id: 	{ type: "number" },
		name: 	{ type: "string" },
		craft: 	{ type: "number" },
		gcraft: { type: "number" },
		de: 	{ type: "number" },
		gde: 	{ type: "number" }
	}
});

var HearthStoneCardType = kendo.data.Model.define( {
	id: "id",
	fields: {
		id: 	{ type: "number" },
		name: 	{ type: "string" }
	}
});

var HearthStoneCardRace = kendo.data.Model.define( {
	id: "id",
	fields: {
		id: 	{ type: "number" },
		name: 	{ type: "string" }
	}
});

var HearthStoneCardSet = kendo.data.Model.define( {
	id: "id",
	fields: {
		id: 	{ type: "number" },
		name: 	{ type: "string" }
	}
});

var HearthStoneClass = kendo.data.Model.define( {
	id: "id",
	fields: {
		id: 	{ type: "number" },
		name: 	{ type: "string" }
	}
});

var HearthStoneArtist = kendo.data.Model.define( {
	id: "id",
	fields: {
		id: 	{ type: "number" },
		name: 	{ type: "string" },
		url: 	{ type: "string" }
	}
});

var DeckBuilder = kendo.data.Model.define( {
	id: "id",
	fields: {
		id:			{ type: "string" },
		name: 		{ type: "string" },
		classid: 	{ type: "number" },
		cards: {
			fields: {
				id: 	{ type: "number" },
				count: 	{ type: "number" }
			},
			nullable: false,
			defaultValue: {}
		},
		hsuid:		{ type: "number" },
		wins:		{ type: "number" },
		losses:		{ type: "number" },
		created:	{ type: "number" },
		hsuid:		{ type: "number" }
	}
});

/****************************************************
 *
 *                  JQUERY PLUGINS
 *
 ****************************************************/

(function( $ ) {
	// horizontal slide toggle - has hard coded left offset of 40px
    $.fn.slideToggleH = function(callback) {
    	$(this).animate({
	    	marginLeft: parseInt($(this).css('marginLeft')) == 40 ? -$(this).outerWidth() + 40 : 40
		}, {
			complete: function() {
				// performs callback function when finished
			    if (typeof callback == 'function') {
					callback.call(this);
				}
			}
		});
    };

    // Shows the element and fades it out
    $.fn.showAndFade = function() {
    	var me = $(this);
    	me.show(function(e) {
	    	setTimeout(function() {
	    		me.fadeOut('fast');
	    	}, 3000);
    	});
    };

    // Events to monitor if 'input' event is not supported
    // The boolean value is whether we have to
    // re-check after the event with a setTimeout()
    var events = [
        "keyup", false,
        "blur", false,
        "focus", false,
        "drop", true,
        "change", false,
        "input", false,
        "textInput", false,
        "paste", true,
        "cut", true,
        "copy", true,
        "contextmenu", true
    ];

	// jquery extension for detecting user input
    $.fn.userChange = function(fn, data) {
        function checkNotify(e, delay) {
            // debugging code
            if ($("#logAll").prop("checked")) {
                log('checkNotify - ' + e.type);
            }

            var self = this;
            var this$ = $(this);

            if (this.value !== this$.data("priorValue")) {
                this$.data("priorValue", this.value);
                fn.call(this, e, data);
            } else if (delay) {
                // The actual data change happens after some events
                // so we queue a check for after.
                // We need a copy of e for setTimeout() because the real e
                // may be overwritten before the setTimeout() fires
                var eCopy = $.extend({}, e);
                setTimeout(function() {checkNotify.call(self, eCopy, false)}, 1);
            }
        }

        // hook up event handlers for each item in this jQuery object
        // and remember initial value
        this.each(function() {
            var this$ = $(this).data("priorValue", this.value);
            for (var i = 0; i < events.length; i+=2) {
                (function(i) {
                    this$.on(events[i], function(e) {
                        checkNotify.call(this, e, events[i+1]);
                    });
                })(i);
            }
        });
    };

}( jQuery ));

/****************************************************
 *
 *                 KENDO EXTENSIONS
 *
 ****************************************************/

// kendo only assigns the default values on new records, so we extend the
// dataSource to provide us with a way to get the default value if the
// property is not set.
$.extend(kendo.data.DataSource.prototype, {
	getValue: function(index, property) {
		var item = this.get(index);
		if (item === undefined) {
			return null;
		}

		if (item.hasOwnProperty(property)) {
			// return set property
			return item[property];
		} else {
			// attempt to return default property
			var field = this.options.schema.model.fields[property];
			if ((field !== undefined) && (field.defaultValue !== undefined)) {
				return this.options.schema.model.fields[property].defaultValue;
			}
		}

		// no match - return null
		return null;
	},
	addCard: function(dataItem, count_override) {
		// override is only set when contructing a deck from an exising source.
		// no need to do error checking
		if (count_override != undefined) {
			dataItem.count = count_override;
			this.add(dataItem);
			return;
		}

		// make sure we don't have a full deck
		var total = this.aggregates().count;
		if (total && total.sum >= 30) {
			return false;
		}

		var count = (dataItem.count == undefined) ? 1 : dataItem.count + 1;

		// check if it's a valid addition
		if ((dataItem.qualityid == 5) && (count > 1)) {
			return false;
		} else if (count > 2) {
			return false;
		}

		// only add if record is new - update the count otherwise
		if (count > 1) {
			dataItem.set("count", count);
		} else {
			this.add(dataItem);
			dataItem.set("count", count);
		}

		return count;
	},
	cleanDeck: function() {
		var data = this.data();
		for (var i = 0; i < data.length; i++) {
            data[i].count = undefined;
        }

        // remove any existing
        this.data([]);
	},
	serialize: function() {
		// format used to save to disk
		var deck = [];
		var data = this.data();
        for (var i = 0; i < data.length; i++) {
            deck.push({
	        	id: data[i].id,
	        	count: data[i].count
            });
        }

        return deck;
	}
});

/****************************************************
 *
 *                 RANDOM EXTENSIONS
 *
 ****************************************************/

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

String.prototype.sluggify = function() {
  	this = this.replace(/^\s+|\s+$/g, ''); // trim
  	this = this.toLowerCase();

  	// remove accents, swap ñ for n, etc
  	var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  	var to   = "aaaaeeeeiiiioooouuuunc------";
  	for (var i=0, l=from.length ; i<l ; i++) {
    	this = this.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	this = this.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    	.replace(/\s+/g, '-') // collapse whitespace and replace by -
		.replace(/-+/g, '-'); // collapse dashes

	return this;
};

/****************************************************
 *
 *                DECK SEARCH FILTERS
 *
 ****************************************************/

function DeckFilter(classid) {
	// required
	this.classid = classid;

	// optional
	this.name = "";
	this.typeid = null;
	this.qualityid = null;
	this.setid = null;
	this.raceid = null;
	this.mechanic = null;

	this.cost = null;
	this.attack = null;
	this.health = null;

	this.cost_op = "gt";
	this.attack_op = "gt";
	this.health_op = "gt";

	this.classVisible = true;
	this.neutralVisible = true;

	// class + neutral base filter
	this.base = {
		logic: "or",
		filters: [
			{ field: "classid", operator: "eq", value: this.classid },
			{ field: "classid", operator: "eq", value: null }
		]
	};
}

DeckFilter.prototype.getClassId = function() {
	return this.classid;
}

// Add filter by name
DeckFilter.prototype.showNeutral = function(value) {
	this.neutralVisible = value;
	return this.getFilter();
}

// Add filter by name
DeckFilter.prototype.filterName = function(value) {
	this.name = value;
	return this.getFilter();
}

// Add filter by type
DeckFilter.prototype.filterType = function(value) {
	this.typeid = value;
	return this.getFilter();
}

// Add filter by quality
DeckFilter.prototype.filterQuality = function(value) {
	this.qualityid = value;
	return this.getFilter();
}

// Add filter by set
DeckFilter.prototype.filterSet = function(value) {
	this.setid = value;
	return this.getFilter();
}

// Add filter by race
DeckFilter.prototype.filterRace = function(value) {
	this.raceid = value;
	return this.getFilter();
}

// Add filter by mechanic
DeckFilter.prototype.filterMechanic = function(value) {
	this.mechanic = value;
	return this.getFilter();
}

// Add filter by cost
DeckFilter.prototype.filterCost = function(value, operator) {
	this.cost = value;
	this.cost_op = operator;
	return this.getFilter();
}

// Add filter by attack
DeckFilter.prototype.filterAttack = function(value, operator) {
	this.attack = value;
	this.attack_op = operator;
	return this.getFilter();
}

// Add filter by health/durability
DeckFilter.prototype.filterHealth = function(value, operator) {
	this.health = value;
	this.health_op = operator;
	return this.getFilter();
}

// Build and return filter object
DeckFilter.prototype.getFilter = function() {
	var filter = [];

	// show class and/or neutral cards
	if (this.classVisible && this.neutralVisible) {
		filter.push(this.base);
	} else if (this.classVisible) {
		filter.push({ field: "classid", operator: "eq", value: this.classid });
	} else if (this.classVisible) {
		filter.push({ field: "classid", operator: "eq", value: null });
	} else {
		return filter;
	}

	// name filter
	filter.push({field:"name",operator:"contains",value:this.name});

	// quality filter
	if (this.typeid) {
		filter.push({ field: "typeid", operator: "eq", value: this.typeid });
	}

	// quality filter
	if (this.qualityid) {
		filter.push({ field: "qualityid", operator: "eq", value: this.qualityid });
	}

	// set filter
	if (this.setid) {
		filter.push({ field: "setid", operator: "eq", value: this.setid });
	}

	// race filter
	if (this.raceid) {
		filter.push({ field: "raceid", operator: "eq", value: this.raceid });
	}

	// mechanic filter
	if (this.mechanic) {
		filter.push({ field: this.mechanic, operator: "eq", value: true });
	}

	// cost filter
	if (this.cost !== null) {
		filter.push({ field: "cost", operator: this.cost_op, value: this.cost });
	}

	if (this.attack !== null) {
		filter.push({ field: "attack", operator: this.attack_op, value: this.attack });
	}

	// health filter - searches both health and weapon durability
	if (this.health !== null) {
		filter.push({
			logic: "or",
			filters: [
				{ field: "health", operator: this.health_op, value: this.health },
				{ field: "durability", operator: this.health_op, value: this.health }
			]
		});
	}

	return filter;
}

/****************************************************
 *
 *                	   THE APP
 *
 ****************************************************/

function App() {
	/* variable card ds used for deck building, etc. */
	this._ds_cards = new kendo.data.DataSource({
	    schema: { model: HearthStoneCard },
		sort: [{ field: "cost", dir: "asc" },{ field: "name", dir: "asc" }],
		aggregate: { field: "count", aggregate: "sum" }
	});

	/* immutable card list */
	this._ds_cards_immutable = new kendo.data.DataSource({
	    schema: { model: HearthStoneCard },
		sort: [{ field: "cost", dir: "asc" },{ field: "name", dir: "asc" }]
	});

	/* static data source for hearthstone classes */
	/* (e.g. Priest, Paladin, etc.) */
	this._ds_classes = new kendo.data.DataSource({
	    schema: { model: HearthStoneClass }
	});

	/* static data source for hearthstone artists */
	this._ds_artists = new kendo.data.DataSource({
	    schema: { model: HearthStoneArtist }
	});

	/* static data source for hearthstone card qualities */
	/* (e.g. Epic, Legendary, etc.) */
	this._ds_card_qualities = new kendo.data.DataSource({
	    schema: { model: HearthStoneCardQuality }
	});

	/* static data source for hearthstone card types */
	/* (e.g. Spell, Minion, etc.) */
	this._ds_card_types = new kendo.data.DataSource({
	    schema: { model: HearthStoneCardType }
	});

	/* static data source for hearthstone card races */
	/* (e.g. Beast, Murloc, etc.) */
	this._ds_card_races = new kendo.data.DataSource({
	    schema: { model: HearthStoneCardRace }
	});

	/* static data source for hearthstone card sets */
	/* (e.g. Basic, Expert, etc.) */
	this._ds_card_sets = new kendo.data.DataSource({
	    schema: { model: HearthStoneCardSet }
	});

	/* user created decks */
	this._ds_decks = new kendo.data.DataSource({
	    schema: { model: DeckBuilder }
	});
}

App.prototype.init = function(origin, source, snapshot) {
	this._origin = origin;
	this._source = source;

	this._us_default_deck = snapshot.settings.default_deck;
	this._us_default_page = snapshot.settings.default_page;
	this._us_hs_userkey = snapshot.settings.hs_userkey;

	this._ds_cards_immutable.data(snapshot.cards.list);
	this._ds_classes.data(snapshot.classes);
	this._ds_artists.data(snapshot.artists);
	this._ds_card_qualities.data(snapshot.cards.qualities);
	this._ds_card_types.data(snapshot.cards.types);
	this._ds_card_races.data(snapshot.cards.races);
	this._ds_card_sets.data(snapshot.cards.sets);
	this._ds_decks.data(snapshot.decks);
}

App.prototype.getDefaultDeck = function() {
	return this._us_default_deck;
}

App.prototype.setDefaultDeck = function(deckid) {
	this._us_default_deck = deckid;
}

App.prototype.getDefaultPage = function() {
	return this._us_default_page;
}

App.prototype.setDefaultPage = function(pageid) {
	this._us_default_page = pageid;
}

App.prototype.getHearthStatsUserKey = function() {
	return this._us_hs_userkey;
}

App.prototype.setHearthStatsUserKey = function(userkey) {
	this._us_hs_userkey = userkey;
}

App.prototype.getCardDataSource = function() {
	return this._ds_cards;
}

App.prototype.getCardImmutableDataSource = function() {
	return this._ds_cards_immutable;
}

App.prototype.getDeckDataSource = function() {
	return this._ds_decks;
}

App.prototype.getClassDataSource = function() {
	return this._ds_classes;
}

App.prototype.getArtistDataSource = function() {
	return this._ds_artists;
}

App.prototype.getCardQualityDataSource = function() {
	return this._ds_card_qualities;
}

App.prototype.getCardTypeDataSource = function() {
	return this._ds_card_types;
}

App.prototype.getCardRaceDataSource = function() {
	return this._ds_card_races;
}

App.prototype.getCardSetDataSource = function() {
	return this._ds_card_sets;
}

App.prototype.getImmutableFilter = function() {
	return this._card_filter;
}

App.prototype.setImmutableFilter = function(filter) {
	this._card_filter = filter;
	this._ds_cards_immutable.filter(this._card_filter.getFilter());
}

App.prototype.refreshImmutableFilter = function() {
	this._ds_cards_immutable.filter(this._card_filter.getFilter());
}

// reset the card datasources to their original state
App.prototype.cardsPristine = function() {
	this._ds_cards.cleanDeck();
	if (this._ds_cards_immutable.filter() != undefined) {
    	this._ds_cards_immutable.filter({});
	}
	this._card_filter = undefined;
}

App.prototype.selectCardsFromDeck = function(deck) {
	this.cardsPristine();
	for (var i = 0; i < deck.cards.length; ++i) {
		var card = this._ds_cards_immutable.get(deck.cards[i].id);
		this._ds_cards.addCard(card, deck.cards[i].count);
	}
}

// for sending messages to the proxy
App.prototype.toProxy = function(message, data) {
	var data = data || {};
	this._source.postMessage({
		message: message,
		data: data
	}, this._origin);
}

// hides current panel and displays new panel
App.prototype.showPanel = function(dom, width, callback) {
	var me = this;
	if (!this._active_panel) {
		// no panel selected
		$(dom).slideToggleH();
		this._active_panel = dom;

		if (callback) {
			callback(true);
		}
	} else if (dom.get(0) != this._active_panel.get(0)) {
		// hide current panel before opening new
		$(this._active_panel).slideToggleH(function() {
			me.toProxy("iframe-width", width);
			$(dom).slideToggleH(function() {
				me._active_panel = dom;

				if (callback) {
					callback(true);
				}
			});

		});
	} else {
		// same panel was selected - do nothing
		if (callback) {
			callback(true);
		}
	}
}

App.prototype.decodeHearthPwn = function(url) {
	var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
	if (!regexp.test(url)) {
		return false;
	}

	var endURI = url.lastIndexOf("/");
	var hash = url.indexOf("#");
	if (endURI < 0 || hash < 0) {
		return false;
	}

	var classList = ["druid","hunter","mage","paladin","priest","rogue","shaman","warlock","warrior"];
	var className = url.substring(endURI+1, hash);
	var classid = classList.indexOf(className) + 1;
	if (classid < 0) {
		return false;
	}

	if (url.endsWith(";")) {
		url = url.substring(0, url.length-1);
	}

	var encoded = url.substring(hash+1);
	var cards = encoded.split(";");
	if (cards.length < 1) {
		return false;
	}

	this._ds_cards.cleanDeck();
	for (var i = 0; i < cards.length; ++i) {
		var card = cards[i].split(":");
		if (card.length != 2) {
			this._ds_cards.cleanDeck();
			return false;
		}

		var cardid = parseInt(card[0],10);
		var cardcnt = parseInt(card[1],10);
		if (cardid == NaN || cardcnt == NaN || cardcnt < 1 || cardcnt > 2) {
			this._ds_cards.cleanDeck();
			return false;
		}

		var cardObj = this._ds_cards_immutable.data().filter(function (f) {
			return f.hpid == cardid;
		});

		if (cardObj.length != 1) {
			this._ds_cards.cleanDeck();
			return false;
		}

		this._ds_cards.addCard(cardObj[0], cardcnt);
	}

	return classid;
}

App.prototype.decodeHearthStats = function(response) {

	var to_import = [];

	var decks = response;
	for (var i = 0; i < decks.length; ++i) {
		this._ds_cards.cleanDeck();
		if (decks[i].cardstring == null || decks[i].cardstring == 0){
			continue;
		}
		var cards = decks[i].cardstring.split(",");
		if (cards.length >= 1) {
			for (var j = 0; j < cards.length; ++j) {
				var card = cards[j].split("_");
				var cardid = parseInt(card[0],10);
				var cardcnt = parseInt(card[1],10);

				var cardObj = this._ds_cards_immutable.data().filter(function (f) {
					return f.hsid == cardid;
				});

				this._ds_cards.addCard(cardObj[0], cardcnt);
			}
		}

		var import_entry = {
			hsuid: decks[i].unique_deck_id,
			name: decks[i].name,
			classid: decks[i].klass_id,
			cards: _app.getCardDataSource().serialize(),
			wins: decks[i].user_num_wins,
			losses: decks[i].user_num_losses,
			created: decks[i].created_at,
			lastsync: Date.now(),
		};

		to_import.push(import_entry);
	}

	return to_import;
}
