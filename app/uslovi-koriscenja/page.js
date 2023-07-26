import Error from "../error";

export default async function Page() {
    let post = await getPost('uslovi-koriscenja');
    post = post[0]
    return (
        <div className="mt-4 mb-4">
            <div className='container mx-auto md:w-1/2 w-4/5' dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
        </div>
    )
}
async function getPost(slug) {
    if (!slug) {
        return;
    }
    const res = await fetch(process.env.ADMIN_URL+'/wp-json/wp/v2/pages?slug='+slug,{mode: 'no-cors'});
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    
    return res.json();
}

