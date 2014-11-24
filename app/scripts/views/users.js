Sheldon.Views.UserCreateAccount = Backbone.View.extend({
	el: $('#mainMenu'),

	template: Handlebars.compile($("#list-profile").html()),

	events: {
		"click #btn-create-account" : "createAccount"
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

Sheldon.Views.UserAuthentication = Backbone.View.extend({
	el: $('#mainMenu'),

	template: Handlebars.compile($("#list-profile").html()),

	events: {
		"click #btn-login" : "login",
		"click #log-out" : "logOut"
	},

	initialize: function() {
		//Check for sessionStorage support
        if (localStorage && sessionStorage) { 
        	this.supportStorage = true; 
        	this.getAuth();
        };

	    this.email = this.$("#email-login"); 
	    this.password = this.$("#password-login");
	},

	get: function (key) {
        if (this.supportStorage) {
            var data = sessionStorage.getItem(key);
            if (data && data[0] === '{') {
                return JSON.parse(data);
            } else {
                return data;
            }
        }
    },


    set: function (key, value) {
        if (this.supportStorage) {
            sessionStorage.setItem(key, value);
        }
        return this;
    },

    unset: function (key) {
        if (this.supportStorage) {
            sessionStorage.removeItem(key);
        }
        return this;
    },

    clear: function () {
        if (this.supportStorage) {
            sessionStorage.clear();
        }
    },

    getAuth: function(){
    	var auth = this.get("user-auth");
    	if (auth === null) {
    		return;
    	} else {
    		this.render(auth);
    	};
    },

	login: function(evt)
	{
		if (evt) evt.preventDefault();
		
		var user = { email: this.email.val(), password: this.password.val() };
		
		var userAuth = this.collection.findWhere(user);

		if (userAuth === undefined) { 
			return; 
		}else{
			//console.log(userAuth.toJSON());
			this.listenTo(this.collection, "change", this.login, this);
			this.set("user-auth",JSON.stringify(userAuth));
			this.render(userAuth.toJSON());
		};
	},

	logOut: function(){
		this.unset("user-auth");
		$("#slide-show-main").show(); 		
		$("#headerContainer").css("height","695px").css("background","#151515 url('../images/background_top.png') center top no-repeat"); 
	},

	render: function (user) {
		$("#slide-show-main").hide(); 
		$("#headerContainer").css("height","220px").css("background","#151515"); 

	    var html = this.template(user);
	    this.$el.html(html);
	    return this;
	}

});