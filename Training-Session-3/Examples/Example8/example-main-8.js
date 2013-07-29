(function() {
	/*
		The goal of this file is to provide the basic understanding 
		1. Templates.		
		
		How to run this example.
		1. Open Example-1.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	var MasterModel = Backbone.Model.extend({		
		url: function() {
			return "http://maps.googleapis.com/maps/api/directions/json?origin=Pune&destination=Mumbai&sensor=false";
		}
	});

	/*
		Creating a new View called MasterView by extending Backbone.View class.
		Syntax: Backbone.View.extend(properties, [classProperties])
	*/	
	var MasterView = Backbone.View.extend({		
		
		initialize: function() {
			this.model = new MasterModel();
			this.render();
		},

		el: "#directionApi",

		template: _.template($("#routesTable").html()),

		/*
			This is the view's render function; Used to render data.
		*/
		render: function() {
			var self = this;

			this.model.fetch({
				success: function() {
					console.log("Google service api is working well.");
					console.log(self.model.toJSON());
					self.$el.html(self.template(self.model.toJSON()));
				},
				error: function() {
					console.log("Some error got triggered while accessing Google service api.");
				}
			})
			
		}

	});

	/*
		Creating an object from MasterView which calls initialize function.
	*/
	var masterView = new MasterView();

	console.log(masterView.el);

})();