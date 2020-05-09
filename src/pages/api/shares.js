const https = require('https');

module.exports = (NOW_REQ, NOW_RES) => {
  const API_KEY = process.env.SHAREDCOUNT_API_KEY
  const { query: { url } } = NOW_REQ

  https.get(`https://api.sharedcount.com/v1.0/?apikey=${API_KEY}&url=${url}`, (res) => {
    let data = '';

    // A chunk of data has been recieved.
    res.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    res.on('end', () => {
      NOW_RES.status(200).json(data)
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}

