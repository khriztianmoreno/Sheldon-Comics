Sheldon.Collections.Comics = Backbone.Firebase.Collection.extend({
	model: Sheldon.Models.Comic,
	firebase: "http://sheldon-comics.firebaseio.com/comics"
});
