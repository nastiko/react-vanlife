import React from 'react';
import VanListItem from './VanListItem';
import { useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api"


export function loader() {
    return getVans();
}

export default function VansList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = React.useState(null)
    const vans = useLoaderData();

    const typeFilter = searchParams.get('type');

    // get filtered items collection
    const displayCharacters = typeFilter ? vans.filter(item => item.type.toLowerCase() === typeFilter) : vans;

    const vanElements = displayCharacters.map(item => {
        return <VanListItem key={item.id} {...item} />
    })

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }

            return prevParams;
        })
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <>
            <div className="max-w-full prose prose-h1:text-[32px] prose-h1:leading-10 prose-h1:font-bold p-5">
                <h1>Explore our van options</h1>
                <div className="flex flex-wrap items-center gap-4">
                    <button onClick={() => handleFilterChange('type', 'simple')} className={`nested-navBtn hover:bg-[#E17654] ${typeFilter === 'simple' ? 'simple' : ''}`}>Simple</button>
                    <button onClick={() => handleFilterChange('type', 'luxury')} className={`nested-navBtn hover:bg-[#161616] ${typeFilter === 'luxury' ? 'luxury' : ''}`}>Luxury</button>
                    <button onClick={() => handleFilterChange('type', 'rugged')} className={`nested-navBtn hover:bg-[#115E59] ${typeFilter === 'rugged' ? 'rugged' : ''}`}>Rugged</button>
                    {
                        typeFilter ? (
                            <button onClick={() => handleFilterChange('type', null)} className="text-[#4D4D4D] font-normal hover:underline hover:decoration-2">Clear filter</button>
                        ) : null
                    }
                </div>
                <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 grid-rows-1 justify-center gap-[34px] my-[57px]">
                    {vanElements}
                </div>
            </div>
        </>
    )
}