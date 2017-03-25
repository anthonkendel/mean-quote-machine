(function(){
	let project = "Mean quote machine!"
	let url='http://127.0.0.1:3000/get_random_quote'

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
				quote: "Placeholder quote",
				author: "Placeholder author"
			}
		},
		methods: {
			callback: function(data, context) {
				context.quote = data.text
				context.author = data.author
			},
			getQuote: function() {
				this.retrieveQuote(this.callback)
			},
			retrieveQuote: function(cb) {
				const context = this

				// GET request
				this.$http.get(url, function (data) {
					cb(data.quote, context)
				}).error(function (data, status, request) {
					console.log("Error fetching quote")
				})

			}
		}
	});

 })()
