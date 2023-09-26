import Image from 'next/image'
import './globals.css'
import Obituary from './components/obituary';
import Nav from './components/nav';
import Filters from './components/filters';
import ContentComponent from './components/content';


export default async function Home({searchParams}) {
  const place = searchParams.mesto?.toString().toLowerCase()
  const articles = await getArticles(place);

  return (
    <div className='container mx-auto mt-2'>
        {/* <Filters></Filters> */}
        {/* <ContentComponent></ContentComponent> */}
        <h1 className='text-center text-3xl text-xl:md font-bold mt-6 mb-4'>Prethodnih 7 dana</h1>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense'>
          {articles.map(article => (
            <Obituary personID={article.acf.person} key={article.id} article={article} content="short"></Obituary>
          ))}
        </div>
        <div className='text-center my-10'>
          {/* <button className="btn">Učitaj još</button> */}
        </div>
      </div>
  )
}

async function getArticles(place) {
  const res = await fetch(process.env.ADMIN_URL+'/wp-json/wp/v2/posts?&timestamp=${new Date().getTime()',{mode: 'no-cors'});
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  console.log(place);
  return res.json();
}
