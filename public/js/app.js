(function(){
	let project = "Mean quote machine!"

	var app = new Vue({
		el: '#app',
		data: {
			msg: project
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
			changeQuote: function (){
				httpGetAsync(this.callback)
			},
			callback: function (newquote){
				this.quote = (newquote)
			},
			getQuote: function() {
				var self = this;
				let url='http://localhost:3000/get_random_quote'
				// GET request
				this.$http.get(url, function (data) {
					// set data on vm
					console.log(data.quote.text)
					console.log(data.quote.author)
					self.quote = data.text
					self.author = data.author
				}).error(function (data, status, request) {
					console.log("error")
				})

			}
		}
	});


 })()
