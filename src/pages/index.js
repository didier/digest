import Head from 'next/head'
import { motion } from 'framer-motion'
import Article from '../components/molecules/Article'
import Header from '../components/molecules/Header/index';
import Footer from '../components/molecules/Footer';

const articles = [
  {
    title: `Earth had its second-warmest March ever recorded.`,
    url: 'https://www.nbcnews.com/science/environment/earth-had-its-second-warmest-march-ever-recorded-n1185566l',

    author: 'Denise Chow',
    source: 'NBC News',
    sourceUrl: 'https://www.nbcnews.com/',
  },
  {
    title: `Pentagon officially releases UFO videos.`,
    url: 'https://edition.cnn.com/2020/04/27/politics/pentagon-ufo-videos/index.html',

    author: 'Michael Conte',
    source: 'CNN',
    sourceUrl: 'https://cnn.com',
  },
  {
    title: `Suspect in New Zealand mosque shootings unexpectedly pleads guilty to 51 murder charges.`,
    url: 'https://www.washingtonpost.com/world/asia_pacific/suspect-in-new-zealand-mosque-shootings-unexpectedly-pleads-guilty-to-51-murder-charges/2020/03/26/08b0b6fc-6f01-11ea-a156-0048b62cdb51_story.html',

    author: 'Emanuel Stoakes',
    source: 'The Washington Post',
    sourceUrl: 'https://www.washingtonpost.com/',
  },
]

const Home = props => (
  <motion.div exit={{ opacity: 0 }}>
    <Header />
    <main>
      <ul>
        {articles.map((article, idx) => (
          <li key={idx}>
            <Article article={article} excerpt></Article>
          </li>
        ))}
      </ul>
    </main>
    <Footer />
  </motion.div>
)

export default Home
