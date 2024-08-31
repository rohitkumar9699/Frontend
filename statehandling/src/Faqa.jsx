import React, { useState } from 'react'
import { qaData } from './Data'

const Faqa = () => {
    const [id, setId] = useState(-1);
    
    let data = qaData.map((itemdata, i) => {
        return (
            <Itemdetails 
                key={i}
                itemdata={itemdata}
                id={id}
                setId={setId}
                i={i}
            />
        )
    })

    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <div className='faq'>
                {data}
            </div>
        </div>
    )
}

export default Faqa

function Itemdetails({ itemdata, id, setId, i }) {
    return (
        <div className='faqitems'>
            <h3 onClick={() => setId(id === i ? -1 : i)}>{itemdata.question}</h3>
            <p className={`para ${id === i ? 'pupdate' : ''}`}>{itemdata.answer}</p>
        </div>
    )
}
