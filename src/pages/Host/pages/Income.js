import income from '../../../assets/images/income.png'

export default function Income() {
    const transactionsData = [
        { amount: 720, date: "Jan 3, 2024", id: "1" },
        { amount: 560, date: "Dec 12, 2023", id: "2" },
        { amount: 980, date: "Dec 3, 2022", id: "3" },
    ]

    return (
        <>
            <div className="flex flex-col py-[37px] px-[26px]
                            max-w-full prose prose-h1:text-[36px] prose-h1:text-[#161616] prose-h1:mb-5
                            prose-h2:text-[38px] prose-h2:text-[#161616] prose-h2:font-bold prose-h2:my-10
                            prose-h3:text-[30px] prose-h3:font-bold prose-h3:mb-5
                            prose-h6:text-[32px] prose-h6:font-bold prose-h6:m-0
                            prose-p:text-[#4d4d4d] prose-p:my-0 prose-a:no-underline">
                <h1>Income</h1>
                <p>Last <span className="underline font-bold">30 days</span></p>
                <h2>£2,260</h2>
                <img className="max-w-[500px]" src={income} alt="Income graph"/>
                <div className="flex justify-between">
                    <h3>Your transactions (3)</h3>
                    <p>Last <span className="underline font-bold">30 days</span></p>
                </div>
                <div>
                    {transactionsData.map((item) => (
                        <div key={item.id} className="flex items-center justify-between bg-[#ffffff] rounded-[6px] px-[35px] py-[29px] mb-[31px]">
                            <h6>£{item.amount}</h6>
                            <p>{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}