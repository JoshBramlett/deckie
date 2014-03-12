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

/****************************************************
 *
 *             DECKIE DATASOURCE OBJECTS
 *
 ****************************************************/

/* static data source for hearthstone classes */
/* (e.g. Priest, Paladin, etc.) */
var dsClasses = new kendo.data.DataSource({
    schema: {
		model: HearthStoneClass
	}
});

/* static data source for hearthstone artists */
var dsArtists = new kendo.data.DataSource({
    schema: {
		model: HearthStoneArtist
	}
});

/* static data source for hearthstone card qualities */
/* (e.g. Epic, Legendary, etc.) */
var dsCardQualities = new kendo.data.DataSource({
    schema: {
		model: HearthStoneCardQuality
	}
});

/* static data source for hearthstone card types */
/* (e.g. Spell, Minion, etc.) */
var dsCardTypes = new kendo.data.DataSource({
    schema: {
		model: HearthStoneCardType
	}
});

/* static data source for hearthstone card races */
/* (e.g. Beast, Murloc, etc.) */
var dsCardRaces = new kendo.data.DataSource({
    schema: {
		model: HearthStoneCardRace
	}
});

/* static data source for hearthstone card sets */
/* (e.g. Basic, Expert, etc.) */
var dsCardSets = new kendo.data.DataSource({
    schema: {
		model: HearthStoneCardSet
	}
});

/* data source for the quick card search */
var dsCardSearch = new kendo.data.DataSource({
    schema: {
		model: HearthStoneCard
	}
});

/* data source for the filterable "select from" cards */
var dsCardFilterable = new kendo.data.DataSource({
    schema: {
		model: HearthStoneCard
	},
	sort: [{ field: "cost", dir: "asc" },{ field: "name", dir: "asc" }]
});

/* data source for the user selected deck */
var dsCardSelected = new kendo.data.DataSource({
    schema: {
		model: HearthStoneCard
	},
	sort: [{ field: "cost", dir: "asc" },{ field: "name", dir: "asc" }],
	aggregate: { field: "count", aggregate: "sum" }
});

/* user decks stored on the client */
var dsDecks = new kendo.data.DataSource({
    schema: {
		model: {
			id: "name",
			fields: {
				name: {
					type: "string"
				},
				classid: {
					type: "number"	
				},
				cards: {
					fields: {
						id: {
							type: "number"
						},
						count: {
							type: "number"
						}
					},
					nullable: false,
					defaultValue: {}
				}
			}
		}
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
	addCard: function(dataItem) {
		// make sure we don't have a full deck already
		if (this.aggregates().count && this.aggregates().count.sum >= 30) {
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
			this.get(dataItem.id).set("count", count);
		} else {	
			this.add(dataItem);
			this.get(dataItem.id).set("count", count);
		}
		
		return count;
	},
	cleanDeck: function() {
		// sets underlying data (shared across other data sources)
		var data = this.data();
        for (var i = 0; i < data.length; i++) {
            this.get(data[i].id).set("count", undefined);
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