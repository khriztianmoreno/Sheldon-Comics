var Comic = Backbone.Model.extend({});

//Objeto inicial, ya que aun no utilizamos un data.JSON
var comic = new Comic({
	idComic: "1",
	isbn: "977000548400600004",
	title: "Spirderman",
	synopsis: "loremp impsun",
	genres: ["Science Fiction ","Superheroes"],
	author: "Stan Lee",
	published: "Marvel Comics",
	isLoan: false
});