Sheldon.Router = Backbone.Router.extend({
	routes: {
		"": "index",
	    "comic/:id": "comic",
	    "profile": "profile"
	},
	

	initialize: function () {
	    this.comics = new Sheldon.Collections.Comics();
	    this.loans = new Sheldon.Collections.Loans();
	    this.users = new Sheldon.Collections.Users();
	    this.comicslist = new Sheldon.Views.Comics({ collection: this.comics });
	    //Detail Comic
	    this.comicDetail = new Sheldon.Views.ComicDetail({ collection: this.comics });
	    this.userLogin = new Sheldon.Views.UserCreateAccount({ collection: this.users });
	    this.userAuth = new Sheldon.Views.UserAuthentication({ collection: this.users });
	    this.userProfile = new Sheldon.Views.UserProfile();

	    Backbone.history.start();
	},

	index: function () {
	    this.comicslist.render();
	    this.userLogin.initialize();
	    this.userAuth.initialize();
	},

	comic: function (comicIndex) {
		var comic = { idComic: comicIndex };
		var model = this.comicslist.filter(comic);
		this.comicDetail.render(model.toJSON());
	},

	profile: function(){
		this.userProfile.initialize();
		this.userProfile.render();
	}
});