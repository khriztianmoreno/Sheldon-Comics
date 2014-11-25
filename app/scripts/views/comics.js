Sheldon.Views.Comics = Backbone.View.extend({

	el: $("#comics-list"),

	initialize: function () {
		$("#profile").hide();
		$("#detail-comic").hide();
	    this.listenTo(this.collection, "add", this.addOne, this);
	},

	render: function () {
	    //this.collection.forEach(this.addOne, this);
	},

	filter: function(filter){
		return this.collection.findWhere(filter);
	},

	addOne: function (comic) {
	    var comicView = new Sheldon.Views.Comic({ model: comic });
	    this.$el.append(comicView.render().el);
	}
});
