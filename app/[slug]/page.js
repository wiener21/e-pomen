import Obituary from "../components/obituary";
import Error from "../error";

export default async function Page({params}) {
    let post = await getPost(params.slug);
    post = post[0];

    return (
        <div className='container mx-auto md:w-2/3 w-100 mt-2 mb-2'>
            <Obituary article={post} content="full"></Obituary>
        </div>
    )
}
async function getPost(slug) {
    if (!slug) {
        return;
    }
    const res = await fetch('https://admin.e-pomen.rs/wp-json/wp/v2/posts?slug='+slug,{mode: 'no-cors'});
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    
    return res.json();
}
