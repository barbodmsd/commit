import { useState } from "react"

const useLoginForm=()=>{
    const [fields,setFields]=useState()
    const handleChange=(e)=>{
        setFields({
            ...fields,
            [e.target.name]:e.target.value
        })
    }
    return [fields,handleChange]
}
export default useLoginForm