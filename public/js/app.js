(function(){
	let project = "Mean quote machine!"
	let url="http://" + window.location.hostname

	var app = new Vue({
		el: '#app',
		data: {
			projectTitle: project
		}
	});

	var buttonController = new Vue({
		el: '#request',
		data: function() {
			return {
				quote: "",
				author: ""
			}
		},
		methods: {
			callback: function(data, context) {
				context.quote = data.text
				context.author = data.author
			},
			getQuote: function() {
				this.retrieveQuote(this.callback, "/get_random_quote")
			},
			getExistingQuote: function() {
				this.retrieveQuote(this.callback, "/get_existing_quote")
			},
			retrieveQuote: function(cb, endpoint) {
				const context = this

				// GET request
				this.$http.get(url+endpoint, function (data) {
					cb(data.quote, context)
				}).error(function (data, status, request) {
					console.log("Error fetching quote")
				})
			}
		}
	});

 })()
