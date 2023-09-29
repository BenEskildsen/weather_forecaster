import weather from 'weather-js'

weather.find({ search: 'Essex New York', degreeType: 'F' }, function(err, result) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(result);
    console.log(result[0].forecast);
    const forecast = result[0].forecast[1]; // accessing the forecast for next day
    const tonightLow = result[0].forecast[0].low;
    const tomorrowLow = result[0].forecast[1].low;
    console.log(tonightLow, tomorrowLow)
    const temperature = forecast.low + '°F to ' + forecast.high + '°F';
    console.log('Forecasted temperature: ' + temperature);
  }
});
