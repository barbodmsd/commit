import { useState } from "react"

const useFormField=()=>{
    const [fields,setFields]=useState()
    const handleChange=(e)=>{
        const {target}=e
        setFields({
            ...fields,
            [target.name]:target.value
        })
    }
}
export default useFormField