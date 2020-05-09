import Head from 'next/head'
import { motion } from 'framer-motion'
import Article from '../components/molecules/Article'
import Header from '../components/molecules/Header/index';
import Footer from '../components/molecules/Footer';

const articles = [
  {
    title: `Pentagon officially releases UFO videos.`,
    url: 'https://edition.cnn.com/2020/04/27/politics/pentagon-ufo-videos/index.html',

    author: 'Michael Conte',
    source: 'CNN',
    sourceUrl: 'https://cnn.com',

    post: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perferendis quasi exercitationem qui aut, nemo numquam repudiandae reiciendis accusantium magni, doloribus non maiores. Hic, et repellendus cumque dicta ea itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic obcaecati maiores odit reprehenderit repudiandae, aliquid quis ea facilis doloremque, nisi placeat voluptatum dolores sint sunt, explicabo cum ratione! Incidunt tempora earum eum temporibus saepe aliquam molestias, laborum asperiores sed?`
  },
  {
    title: `Suspect in New Zealand mosque shootings unexpectedly pleads guilty to 51 murder charges.`,
    url: 'https://www.washingtonpost.com/world/asia_pacific/suspect-in-new-zealand-mosque-shootings-unexpectedly-pleads-guilty-to-51-murder-charges/2020/03/26/08b0b6fc-6f01-11ea-a156-0048b62cdb51_story.html',

    author: 'Emanuel Stoakes',
    source: 'The Washington Post',
    sourceUrl: 'https://www.washingtonpost.com/',

    post: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perferendis quasi exercitationem qui aut, nemo numquam repudiandae reiciendis accusantium magni, doloribus non maiores. Hic, et repellendus cumque dicta ea itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic obcaecati maiores odit reprehenderit repudiandae, aliquid quis ea facilis doloremque, nisi placeat voluptatum dolores sint sunt, explicabo cum ratione! Incidunt tempora earum eum temporibus saepe aliquam molestias, laborum asperiores sed?`
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
