import React from 'react';
import Van from '../components/Van';

export default function Vans() {

    const [vans, setVansData] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/vans")
            .then( res => res.json())
            .then( data => setVansData(data.vans))
    }, []);

    const vanElements = vans.map(item => {
        return <Van key={item.id} {...item} />
    })

    return (
        <>
            <div className="max-w-full prose prose-h1:text-[32px] prose-h1:leading-10 prose-h1:font-bold p-5">
                <h1>Explore our van options</h1>
                <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 grid-rows-1 justify-center gap-[34px] mt-[57px]">
                    {vanElements}
                </div>
            </div>
        </>
    )
}