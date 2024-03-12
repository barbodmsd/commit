import React, { useState } from 'react'

export default function Result() {
    const [inp1,setInp1]=useState('')
    const [inp2,setInp2]=useState('')
    const [operator,setOperator]=useState('')

  return (
    <div>
        <form >
            <input type="text" value={inp1} onChange={(e)=>setInp1(e.target.value)} />
            <input type="text" value={inp2} onChange={(e)=>setInp2(e.target.value)} />
            <select onChange={(e)=>setOperator(e.target.value)}>
                <option >choose Operator </option>
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
