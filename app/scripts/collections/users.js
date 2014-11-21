Sheldon.Collections.Users = Backbone.Firebase.Collection.extend({
	model: Sheldon.Models.User,
	firebase: "http://sheldon-comics.firebaseio.com/users" // sth that you need to 
});
