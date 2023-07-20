'use client'
import Image from "next/image"
import React from "react";

export default function Candle({article}) {
    const [likes, setLikes] = React.useState(article.acf.candle)
    return (
        <button onClick={updateCandle}>
            <div className="flex items-center">
                <Image
                    className="rounded-xl border-solid border border-black"
                    src="/animated-candle.gif" 
                    width={`${article.acf.display_mode == 'quarter' ? '25' : '45'}`}
                    height={`${article.acf.display_mode == 'quarter' ? '25' : '45'}`}
                    alt="Sveca">
                </Image>
                <span className="ml-1">{likes}</span>
            </div>
            <p>upali sveću</p>
        </button>
    )
    function updateCandle() {
        console.log(likes);
        setLikes(likes+1)
    
        // apiFetch( {
        //     path: 'http://127.0.0.1:8092/wp-json/wp/v2/post/'+article.id,
        //     method: 'POST',
        //     data: {
        //       "acf": {
        //         "candle": article.acf.candle+1,
        //       }
        //     },
        //   } ).then( ( res ) => {
        //     console.log( res );
        //   } );
    }
}

