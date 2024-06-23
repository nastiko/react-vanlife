import React from 'react';
import VanListItem from './VanListItem';
import {useSearchParams} from "react-router-dom";


export default function VansList() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [vans, setVansData] = React.useState([]);
    const typeFilter = searchParams.get('type');

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, []);

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

    return (
        <>
            <div className="2xl:h-[calc(100vh-184px)] max-w-full prose prose-h1:text-[32px] prose-h1:leading-10 prose-h1:font-bold p-5">
                <h1>Explore our van options</h1>
                <div className="flex items-center gap-x-4">
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