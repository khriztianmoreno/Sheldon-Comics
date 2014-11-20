Sheldon.Collections.Loans = Backbone.Firebase.Collection.extend({
	model: Sheldon.Models.Loan,
	firebase: "http://sheldon-comics.firebaseio.com/loans"
});