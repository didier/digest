import { post, cite, favicon, shares } from './Article.module.scss'
import { useEffect, useState } from 'react'

const Article = ({ article, excerpt }) => {
  const {
    title,
    url,
    author,
    source,
    sourceUrl,
    post
  } = article

  const rawUrl =
    sourceUrl
      .replace('https://', '')
      .replace('http://', '')

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`/api/shares?url=${url}`)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])



  return (
    <article className={post}>

      <h2><a href={url}>{title}</a></h2>
      {/* <p className="excerpt">
        {excerpt ? `${post.slice(0, 140)}...` : post}
      </p> */}
      <cite className={cite}>
        <img className={favicon} src={`https://api.faviconkit.com/${rawUrl}/144`} alt={`${rawUrl} logo.`} />{` — ${author}, `}<a href={sourceUrl}>{source}</a>
      </cite>
      {` `}
      <h6 className={shares} title="The amount of times this article has been mentioned on social media">
        {isLoaded === true ?
          (
            new Intl.NumberFormat().format(items['Facebook']['share_count'])
          ) : 'Loading'} shares{isLoaded === true ? null : '...'}
      </h6>
    </article>
  )
}

export default Article
