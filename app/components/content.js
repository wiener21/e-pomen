"use client";
import {useState} from 'react';
import { useSearchParams } from 'next/navigation'


export default function ContentComponent() {
    const [count, setCount] = useState(0);
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    

    return (
        <>
            <h1>Client Content Component</h1>
            <h3>Search: {search}</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}