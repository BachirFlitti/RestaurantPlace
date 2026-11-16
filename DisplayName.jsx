import { useContext   } from "react"
import { NameContext, PersonContext} from "./NameContext"
export function DisplayName(){
    const dataset = useContext(NameContext)
    const presondata = useContext(PersonContext)
    return(
        <div>
            <p>First name :{dataset.name}</p>
            <p>Last name:{dataset.lastname}</p>
            <h2>profile info</h2>
            <p>{presondata.map((ele)=>{
                return <ul>
                    <li>{ele.name} , {ele.lastname}</li>
                </ul>
            })}</p>
        </div>
    )
}
 