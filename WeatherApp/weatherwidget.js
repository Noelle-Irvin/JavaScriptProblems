$(document).ready(()=>{
	// console.log("test")
	$('#weather-form').submit((event)=>{
// by default the browser will try to submit this form.
//We dont want tht
//it's JS job to handle the submission
		event.preventDefault();
		// console.log("form submitted");
//get the city the user searched for from the input box
		const userCity = $('#city').val();
		// console.log(userCity);
		const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=${apiKey}`;
		// console.log(weatherUrl);
		//getJSON:
		//1. Where(url)
		//2. Callback to run when done
		$.getJSON(weatherUrl, (weatherData)=>{

			const currTemp = weatherData.main.temp;
			const icon = weatherData.weather[0].icon;
			const high = weatherData.main.temp_max;
			const weatherHTML= `
				<div>
					<img src="http://openweathermap.org/img/w/${icon}.png" />
					<div class="col-sm-3">The temp in ${weatherData.name} is ${currTemp}</div>
					<div class="col-sm-3">The high is forecasted at ${high}</div>
					
				</div>
				`		
			$('#weather-info').html(weatherHTML);
			console.log(weatherData);
		})
		console.log("test")
	})
	console.log("Try")
})