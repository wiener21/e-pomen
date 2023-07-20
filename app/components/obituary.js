import Image from "next/image";
import Link from "next/link";
import Candle from "./candle";

export default async function Obituary({article, content}) {
    const modes = {
        'quarter': 'col-span-1 md:col-span-1 lg:col-span-1',
        'half': 'col-span-2 md:col-span-2 lg:col-span-2',
        'full': 'col-span-2 md:col-span-2 lg:col-span-4'
    }
    const person = await getPerson(article.acf.person);
    const category = await getCategory(article._links["wp:term"][0].href);
    const attachment = await getAttachment(person._links["wp:featuredmedia"][0].href);
    const cemetery = await getCemetery(person.acf.cemetery[0]);
    console.log(person.acf.place_of_death)
    return (
        <div key={article.id} className={'p-1 md:p-3 ' + modes[article.acf.display_mode]}>
            <div className="card w-full bg-base-100 shadow-xl border-double border-4 border-black">
                <div className={`flex justify-between  ${article.acf.display_mode == 'quarter' ? 'px-2 py-2 text-sm items-center' : 'px-8 items-end py-4'}`}>
                    <h2 className={`card-title mt-0 ${article.acf.display_mode == 'quarter' ? 'text-sm' : ''}`}>{person.acf.place_of_death ? person.acf.place_of_death : '' }</h2>
                    <p className=''>{new Date(article.date).toLocaleDateString('sr-Latn-RS', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}</p>
                </div>
                <div className={`pb-4 text-center ${article.acf.display_mode == 'quarter' ? 'px-2' : 'px-8'}`}>
                    <button className={`btn ${article.acf.display_mode == 'quarter' ? 'btn-xs' : 'btn-sm'}`}>{category[0].name}</button>
                </div>
            <figure>
                <Image 
                    className="rounded-xl border-solid border border-black"
                    src={attachment.source_url.replace('localhost', '127.0.0.1')} 
                    width={`${article.acf.display_mode == 'quarter' ? '60' : '120'}`}
                    height={`${article.acf.display_mode == 'quarter' ? '60' : '120'}`}
                    alt={attachment.alt_text}>
                </Image>
            </figure>
            

            <div className={`card-body ${article.acf.display_mode == 'quarter' ? 'text-sm px-2 pt-2 pb-2' : 'pt-4'}`}>
                <h2 className={`card-title self-center font-bold ${article.acf.display_mode == 'quarter' ? 'text-sm' : ''}`}>{person.acf.first_name} {person.acf.last_name}</h2>
                <p className='self-center'>{person.acf.date_of_birth.substring(0,4)}-{person.acf.date_of_death.substring(0,4)}</p>
                <div className='mt-2 p-0' dangerouslySetInnerHTML={{__html: content == 'short' ? article.content.rendered.substring(0,70)+'...' : article.content.rendered}}></div>
                {cemetery.title.rendered ? 
                    <span className='mt-2'>{article.acf.display_mode == 'quarter' ? '' : ''}
                        <Link className="link" target="_blank" href={cemetery.acf.address}>
                            <span className={`inline-flex`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            <span className='font-bold ml-1'>{cemetery.title.rendered}</span>
                        </Link>
                    </span> 
                        : ''
                }
                {
                    person.acf.funeral_datetime ? 
                    <p className='flex items-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
 
                        <span className="font-bold ml-1"> 
                            { new Date(person.acf.funeral_datetime).toLocaleDateString('sr-Latn-RS', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                            })}h</span> </p> : ''}
                {content == 'short' ? 
                    <div className="card-actions mt-5 flex justify-between items-center">
                        <div className="flex justify-center items-stretch">
                            <div>
                                <Image
                                    className="rounded-xl border-solid border border-black"
                                    src="/animated-candle.gif" 
                                    width={`${article.acf.display_mode == 'quarter' ? '30' : '45'}`}
                                    height={`${article.acf.display_mode == 'quarter' ? '30' : '45'}`}
                                    alt="Sveca">
                                </Image>
                            </div>
                            <div className="self-center"><span className="ml-1"> {article.acf.candle}</span></div>
                         </div>
                        <Link href={article.slug}> <button className={`btn ${article.acf.display_mode == 'quarter' ? 'btn-xs' : ''}`}>Pročitaj više </button></Link>
                    </div>
                : 
                <div className="self-center flex items-center flex-col">
                    <Candle article={article}></Candle>
                </div> 
                }
                
            </div>
            </div>
        </div>
    )

    async function getPerson(id) {
        if (!id) {
            return;
        }
        const res = await fetch('http://127.0.0.1:8092/wp-json/wp/v2/person/'+id,{mode: 'no-cors'});
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        // Recommendation: handle errors
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
        }
        
        return res.json();
    }

    async function getCategory(url) {
        if (!url) {
            return;
        }
        const href = url.replace('localhost', '127.0.0.1');

        const res = await fetch(href,{mode: 'no-cors'});
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        // Recommendation: handle errors
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
        }
        
        return res.json();
    }

    async function getAttachment(url) {
        if (!url) {
            return;
        }
        const href = url.replace('localhost', '127.0.0.1');

        const res = await fetch(href,{mode: 'no-cors'});
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        // Recommendation: handle errors
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
        }
        
        return res.json();
    }

    async function getCemetery(id) {
        if (!id) {
            return;
        }
        const res = await fetch('http://127.0.0.1:8092/wp-json/wp/v2/cemetery/'+id,{mode: 'no-cors'});
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        // Recommendation: handle errors
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
        }
        
        return res.json();
    }
}