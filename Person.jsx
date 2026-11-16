import React, { useState } from "react"
import { DisplayName } from "./DisplayName"
import { NameContext, PersonContext } from "./NameContext"
export function Person(){   
    const [name, setName]=useState("")
    const [lastname, setLastname]=useState("")
    const [namelist, setNamelist]=useState([])

    function handlesubmit(event){
        event.preventDefault();
        setNamelist([...namelist,{name:name,lastname:lastname}])
    }
    const namedetail = {name:"Aron", lastname:"Tom"}
    return(
        <PersonContext.Provider value={namelist}>      
            <NameContext.Provider value={namedetail}>
                <form onSubmit={handlesubmit}>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
                    <input type="text" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} />
                    <button type="submit">Send</button>
    F
                </form>
                <DisplayName  />
            </NameContext.Provider>
        </PersonContext.Provider>
    )
}
