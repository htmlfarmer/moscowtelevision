var app = (function () {

	var start = function() {
		getHeadlines();
	}
	
	var getHeadlines = function () {
		
		var headlines = [
			'Moscow TV! Follow the PRIVATE show on LIVE!',
			'Please share, like & enjoy the OFFLINE show!',
			'Whats the latest News?'
		];
		
		$.ajax({
			type: "GET",
			url: "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=60cca6ac1f72453e88d877d6ed6963bf",
			dataType: "json"
		}).done(function( data ) {
			for(var i = 0; i < data.articles.length; i++) {
				headlines.push(data.articles[i].title);
				
				var concatHeadlines = headlines.join(" - ");
							
				$("marquee").text(concatHeadlines);
			}
		});
	}

	return {
		start: start
	}		
})();

app.start();