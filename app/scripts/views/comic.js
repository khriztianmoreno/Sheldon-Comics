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

	navigate: function () {
	    //app.navigate("comic/" + this.model.get("idComic"), { trigger: true });
	}

});


Sheldon.Views.ComicDetail = Backbone.View.extend({
	el: $("#detail-comic"),

	tagName: 'section',

	events: {
	    'click': 'navigate'
	},

	template: Handlebars.compile($("#detail-comic-template").html()),

	initialize: function () {

		this.model;
		debugger
	    //this.listenTo(this.model, "change", this.render, this);
	},

	render: function () {
	    var comic = this.model.toJSON();
	    debugger
	    /*var html = this.template(comic);
	    this.$el.html(html);
	    return this;*/
	},

	navigate: function () {
	    //app.navigate("comic/" + this.model.get("idComic"), { trigger: true });
	}

});