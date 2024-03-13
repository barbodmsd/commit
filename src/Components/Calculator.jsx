import React, { useState } from 'react'

export default function Calculator() {
    const [inp1,setInp1]=useState("");
    const [inp2,setInp2]=useState("");
    const [select,setSelect]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault()
        switch(select){
            case '+':setInp1(inp1+inp2
        }

    }
    return (
    <div>
        <form >
            <input type="text" value={inp1}  onChange={(e)=>setInp1(e.target.value)}/>
            <input type="text" value={inp2}  onChange={(e)=>setInp2(e.target.value)}/>
            <select value={select} onChange={(e)=>setSelect(e.target.value)} >
                <option value="">Choose One</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
