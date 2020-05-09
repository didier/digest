import { post, favicon } from './Article.module.scss'

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

  return (
    <article className={post}>
      <h2><a href={url}>{title}</a></h2>
      <p className="excerpt">
        {excerpt ? `${post.slice(0, 140)}...` : post}
      </p>
      <cite>
        <img className={favicon} src={`https://api.faviconkit.com/${rawUrl}/144`} alt={`${rawUrl} logo.`} />{` — ${author}, `}<a href={sourceUrl}>{source}</a></cite>
    </article>
  )
}

export default Article
