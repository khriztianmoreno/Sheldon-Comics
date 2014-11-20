Sheldon.Router = Backbone.Router.extend({
	routes: {
		"": "index",
	    "comic/:id": "comic"
	},
	

	initialize: function () {
	    this.comics = new Sheldon.Collections.Comics();
	    this.loans = new Sheldon.Collections.Loans();
	    this.comicslist = new Sheldon.Views.Comics({ collection: this.comics });

	    Backbone.history.start();
	},

	index: function () {
	    this.comicslist.render();
	},

	comic: function (name) {
	    
	}
});