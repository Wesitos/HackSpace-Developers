var $itemsElement;
var tags = ["Backend", "Frontend", "Arduino", "Jhonny Five", "BackboneJS", "React", "AngularJS", "Linux", "Emacs", "Clojure", "NodeJS", "Python", "Django", "Ruby", "Ruby On Rails", "X-Monad", "MongoDB", "Redis", "Bootstrap", "Lisp", "Heroku", "Digital Ocean", "AWS", "Firebase", "Julia", "Tornado"];
var items = [
	{
		"title": "Alvaro Concha",
		"tags": ["Frontend", "AngularJS", "Bootstrap"],
		"author": "@Alvarorcu",
		"description": "Soy un apasionado por la creación. Me interesa, además, llevar nuevas tecnologías y oportunidades referentes a ellas a otros jóvenes, así como fomentar espacios en los que podamos expresarnos correctamente, crear y compartir.",
		"home_url": "http://hackspace.la/",
		"github_url": "http://hackspace.la/"
	},
	{
		"title": "Hans Evangelista",
		"tags": ["Backend", "Frontend", "BackboneJS", "AngularJS", "NodeJS", "Jhonny Five", "Django", "MongoDB", "Heroku"],
		"author": "@Hanshavin_code",
		"description": "Desarrollador por pasion, enamorado de aprender y crear tecnologia. Dedico mi vida a trabajar en mis proyectos, en los de amigos y de empresas que admiro. Musico, poeta, cantante, hipster ...",
		"home_url": "http://hackspace.la/",
		"github_url": "http://hackspace.la/"
	},
	{
		"title": "Diego Berrocal",
		"tags": ["Backend", "Linux", "Emacs", "Python", "Django", "X-Monad", "MongoDB", "Digital Ocean", "AWS"],
		"author": "@CestDiego",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		"home_url": "http://hackspace.la/",
		"github_url": "http://hackspace.la/"
	},
	{
		"title": "Giorgio Leveroni",
		"tags": ["Backend", "Frontend", "React", "AngularJS", "Emacs", "Clojure", "Lisp", "NodeJS", "Python", "Django", "Ruby", "Ruby On Rails", "MongoDB", "Redis", "Heroku", "Digital Ocean", "AWS", "Firebase", "Tornado"],
		"author": "@Ppold",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		"home_url": "http://hackspace.la/",
		"github_url": "http://hackspace.la/"
	},
	{
		"title": "Eduardo Yayico",
		"tags": ["Arduino"],
		"author": "@",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		"home_url": "http://hackspace.la/",
		"github_url": "http://hackspace.la/"
	},
	{
		"title": "Luis Cairampoma",
		"tags": ["Backend", "Frontend", "Emacs", "Clojure", "Heroku", "Digital Ocean", "AWS", "Firebase"],
		"author": "@HintHack",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		"home_url": "http://hackspace.la/",
		"github_url": "http://hackspace.la/"
	},
	{
		"title": "Fredy Morales",
		"tags": ["Backend", "Frontend", "Emacs", "Clojure", "Firebase", "Julia"],
		"author": "@",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		"home_url": "http://hackspace.la/",
		"github_url": "http://hackspace.la/"
	},
	{
		"title": "Pedro Palacios",
		"tags": ["Backend", "Frontend", "Emacs", "Clojure", "Python", "Tornado"],
		"author": "@",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		"home_url": "http://hackspace.la/",
		"github_url": "http://hackspace.la/"
	},
	{
		"title": "Nataly Yuricasa",
		"tags": ["Arduino"],
		"author": "@",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		"home_url": "http://hackspace.la/",
		"github_url": "http://hackspace.la/"
	},
	{
		"title": "Martin Jose Maria",
		"tags": ["Arduino", "Linux"],
		"author": "@",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		"home_url": "http://hackspace.la/",
		"github_url": "http://hackspace.la/"
	},
	{
		"title": "Cristian Huertos",
		"tags": ["Linux", "X-Monad"],
		"author": "@Mizhac",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		"home_url": "http://hackspace.la/",
		"github_url": "http://hackspace.la/"
	}

];


$(document).ready(function() {
	addAllTags();
	addAllItems();
	setupIsotope();
	setupFilter();
	setupSearch();
});

addAllTags = function(){
	tags.sort();
	for (var i = 0; i < tags.length; i++) {
		$(".filters").append('<button class="btn btn-filter" type="button" data-filter="'+tags[i].replace(/\s/g, "-")+'">'+tags[i]+'</button>');
	};
}

addAllItems = function(){
	// Sort the array.
	items.sort(function(a,b) { 
		if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
		if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
		return 0;
	});

	for (var i = 0; i < items.length; i++) {

		// Prepare button urls.
		buttonsString = "";
		if (items[i].home_url) buttonsString+= '<a href="'+items[i].home_url+'" class="btn btn-primary"><i class="fa fa-home"></i> Homepage</a>';
		if (items[i].github_url) buttonsString+= '<a href="'+items[i].github_url+'" class="btn btn-primary"><i class="fa fa-github-alt"></i> Github</a>';
		if (items[i].google_url) buttonsString+= '<a href="'+items[i].google_url+'" class="btn btn-primary"><i class="fa fa-google"></i> Google Code</a>';
		if (items[i].bitbucket_url) buttonsString+= '<a href="'+items[i].bitbucket_url+'" class="btn btn-primary"><i class="fa fa-bitbucket"></i> Bitbucket</a>';

		// Prepare author html.
		userString = "";
		if (items[i].author) userString = '<div class="author meta"><i class="fa fa-user"></i> <span class="author">'+items[i].author+'</span></div>';

		// Prepare tags.
		tagsString = "";
		tagsData = "";
		if (items[i].tags && items[i].tags.length>0) {
			for (var j = 0; j < items[i].tags.length; j++) {
				tagsString += items[i].tags[j];
				tagsData += items[i].tags[j].replace(/\s/g, "-");
				if (j < items[i].tags.length-1) {
					tagsString += ", ";
					tagsData += " ";
				}
			}
		}

		// Append the html.
		$("#items").append(
			'<section class="item mix" data-group="'+tagsData+'">'+
				'<a href="'+(items[i].home_url?items[i].home_url:(items[i].github_url?items[i].github_url:items[i].google_url))+'" class="item-title"><h3>'+items[i].title+'</h3></a>'+
				userString+
				'<div class="tags-container meta"><i class="fa fa-tag"></i> <span class="tags">'+tagsString+'</span></div>'+
				'<div class="description">'+items[i].description+'</div>'+
				'<div class="buttons-container">'+buttonsString+'</div>'+
			'</section>'
		);
	};
}


setupIsotope = function(){
	$itemsElement = $('#items');
	$itemsElement.isotope({
		itemSelector: ".item",
		layoutMode: "masonry"
	});
}


setupFilter = function(){
	$('.btn-filter').on('click', function(){

		// Remove anything that is on the search box.
		$(".search-input").val("");

		// Check if this button is active or not.
		isActive = $(this).hasClass("active");
		if (!isActive) group = $(this).data('filter');
		else group = '*';

		// Untoggle other buttons.
		if (!isActive) {
			$('.filters .active').removeClass('active');
		}

		// Activate this button.
		$(this).button('toggle');

		// Filter items based on this button.
		if (group != "*") {
			$itemsElement.isotope({
				filter: function(){
					groups = $(this).data("group");
					return groups.indexOf(group) !== -1;
				}
			});
		}
		else {
			$itemsElement.isotope({
				filter: group
			});
		}
	})
}


setupSearch = function(){
	$('.search-input').on('keyup change', function() {

		// Get typed string.
		var val = this.value.toLowerCase();

		// Untoggle any button that is active.
		$('.btn-filter').each(function(){
			if ($(this).hasClass("active"))
				$(this).button('toggle');
		});

		// Filter items based on search string.
		$itemsElement.isotope({filter: function(){
			var text1 = $.trim($(this).find('.item-title').text()).toLowerCase();
			var text2 = $.trim($(this).find('.tags').text()).toLowerCase();
			var text3 = $.trim($(this).find('.description').text()).toLowerCase();
			var text4 = $.trim($(this).find('.author').text()).toLowerCase();
			return text1.indexOf(val) !== -1 || text2.indexOf(val) !== -1 || text3.indexOf(val) !== -1 || text4.indexOf(val) !== -1;
		}});
	});
}