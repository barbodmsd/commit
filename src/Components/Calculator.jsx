import React, { useState } from 'react'

export default function Calculator() {
    const [inp1,setInp1]=useState("");
    const [inp2,setInp2]=useState("");
    const [select,setSelect]=useState("");
    const [result,setResult]=useState('')
    const [showResult,setShowResult]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setShowResult(!showResult)
        switch(select){
            case '+':setResult(inp1+inp2);break;
            case '-':setResult(inp1-inp2);break;
            case '/':setResult(inp1/inp2);break;
            case '*':setResult(inp1*inp2);break;
        }

    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Number:' value={inp1}  onChange={(e)=>setInp1(e.target.value)}/>
            <input type="text" placeholder='Number:' value={inp2}  onChange={(e)=>setInp2(e.target.value)}/>
            <select value={select} onChange={(e)=>setSelect(e.target.value)} >
                <option value="">Choose One</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
            </select>
            <button type="submit">Submit</button>
            {showResult&&result}
        </form>
    </div>
  )
}
