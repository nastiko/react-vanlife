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
            <div className="p-5">
                <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 grid-rows-1 justify-center gap-[34px] mt-[57px]">
                    {vanElements}
                </div>
            </div>

        </>
    )
}