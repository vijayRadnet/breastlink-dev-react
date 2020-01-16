const dotenv = require('dotenv');
dotenv.config();
console.log(`Your key is ${process.env.OPEN_WEATHER_API_KEY}`);