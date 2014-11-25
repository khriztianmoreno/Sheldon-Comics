Sheldon.Views.Comic = Backbone.View.extend({

	tagName: 'li',
	className: 'col-md-3 isotope-item populars',
	events: {
	    'click': 'navigate'
	},

	template: Handlebars.compile($("#list-comics").html()),

	initialize: function () {
	    this.listenTo(this.model, "change", this.render, this);
	},

	render: function () {
	    var comic = this.model.toJSON()
	    var html = this.template(comic);
	    this.$el.html(html);
	    return this;
	},

	viewOne: function(){
		console.log("asaa");
	},

	navigate: function () {
	    //app.navigate("comic/" + this.model.get("idComic"), { trigger: true });
	}

});


Sheldon.Views.ComicDetail = Backbone.View.extend({
	el: $("#detail-comic"),

	tagName: 'section',

	events: {
	    'click #close-detail-comic': 'navigate'
	},

	template: Handlebars.compile($("#detail-comic-template").html()),

	navigate: function () {
		$("#detail-comic").fadeOut("fast");
		$("#store").show();
		Backbone.history.navigate("", true);
	},

	render: function (comic) {
	    $("#detail-comic").show();
	    $("#store").hide();
	    var html = this.template(comic);
	    this.$el.html(html);
	    return this;
	}

});