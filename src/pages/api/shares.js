const https = require('https');

module.exports = (req, res) => {
  const API_KEY = process.env.SHAREDCOUNT_API_KEY

  // const { query: { url } } = req

  https.get(`https://api.sharedcount.com/v1.0/?apikey=${API_KEY}&url=${url}`, (res) => {
    let data = '';

    // A chunk of data has been recieved.
    res.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    res.on('end', () => {
      console.log(JSON.parse(data));
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
  // res.status(200).json({ shares })
}
