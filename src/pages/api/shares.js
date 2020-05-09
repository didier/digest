module.exports = (req, res) => {
  const { query: { url } } = req
  if (url !== '') {

    let shares;
    fetch(`https://api.sharedcount.com/v1.0/?apikey=${API_KEY}&url=${url}`)
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result);

          // setIsLoaded(true);
          let shares = result
          // setItems(result);
          // setShares(items.Facebook + items.Pinterest)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // setIsLoaded(true);
          // setError(error);
          throw new Error(error)
        }
      )


  }
  res.send(`Query: ${url}`)
}
