Sheldon.Views.UserCreateAccount = Backbone.View.extend({
	el: $('#mainMenu'),

	template: Handlebars.compile($("#list-profile").html()),

	events: {
		"click #btn-create-account" : "createAccount",
	},

	initialize: function() {
	    this.firstName = this.$("#firstName"); 
	    this.lastName = this.$("#lastName"); 
	    this.email = this.$("#email-user"); 
	    this.password = this.$("#password-user");

	    this.listenTo(this.collection, 'add', this.addOne);
	},

	addOne: function(user) {
	    /*var view = new TodoView({model: user});
	    this.list.append(view.render().el);*/
	},
	createAccount: function(evt)
	{
		if (evt) evt.preventDefault();
			var user =
			{
				idPerson: '_' + Math.random().toString(36).substr(2, 9),
				firstName: this.firstName.val(),
				lastName: this.lastName.val(),
				email: this.email.val(),
				password: this.password.val(),
				avatar: "images/user/user1.jpg",
				isAdmin: false
			};
		
		this.collection.create(user);

		this.render(user);

		
	},

	render: function (user) {
		//debugger
	    var html = this.template(user);
	    this.$el.html(html);
	    return this;
	}

});

Sheldon.Views.UserAuthenticed = Backbone.View.extend({
	el: $('#mainMenu'),

	template: Handlebars.compile($("#list-profile").html()),

	events: {
		"click #btn-login" : "createAccount",
	},

	initialize: function() {
	    this.firstName = this.$("#firstName"); 
	    this.lastName = this.$("#lastName"); 
	    this.email = this.$("#email-user"); 
	    this.password = this.$("#password-user");

	    this.listenTo(this.collection, 'add', this.addOne);
	},

	addOne: function(user) {
	    /*var view = new TodoView({model: user});
	    this.list.append(view.render().el);*/
	},
	createAccount: function(evt)
	{
		if (evt) evt.preventDefault();
			var user =
			{
				idPerson: '_' + Math.random().toString(36).substr(2, 9),
				firstName: this.firstName.val(),
				lastName: this.lastName.val(),
				email: this.email.val(),
				password: this.password.val(),
				avatar: "images/user/user1.jpg",
				isAdmin: false
			};
		
		this.collection.create(user);

		this.render(user);

		
	},

	render: function (user) {
		//debugger
	    var html = this.template(user);
	    this.$el.html(html);
	    return this;
	}

});