Sheldon.Router = Backbone.Router.extend({
	routes: {
		"": "index",
	    "comic/:id": "comic"
	},
	

	initialize: function () {
	    this.comics = new Sheldon.Collections.Comics();
	    this.loans = new Sheldon.Collections.Loans();
	    this.users = new Sheldon.Collections.Users();
	    this.comicslist = new Sheldon.Views.Comics({ collection: this.comics });
	    //this.comicDetail = new Sheldon.Views.ComicDetail({ collection: this.comics });
	    this.userLogin = new Sheldon.Views.UserCreateAccount({ collection: this.users });
	    this.userAuth = new Sheldon.Views.UserAuthentication({ collection: this.users });

	    Backbone.history.start();
	},

	index: function () {
	    this.comicslist.render();
	    this.userLogin.initialize();
	    this.userAuth.initialize();
	},

	comic: function (name) {
		
	}
});