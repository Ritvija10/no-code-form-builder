import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import API from "../services/api"
import FieldRenderer from "../components/FieldRenderer"
import "./FillForm.css";
function FillForm(){

const {id} = useParams()
const navigate = useNavigate()

const [form,setForm] = useState(null)
const [forms,setForms] = useState([])
const [answers,setAnswers] = useState({})

useEffect(()=>{

if(id){

API.get(`/forms/${id}`)
.then(res=>setForm(res.data))
.catch(err=>console.error(err))

}else{

API.get("/forms")
.then(res=>setForms(res.data))
.catch(err=>console.error(err))

}

},[id])

const handleChange = (label,value)=>{

setAnswers({
...answers,
[label]:value
})

}

const handleSubmit = async ()=>{

await API.post("/responses",{
formId:id,
answers
})

alert("Response submitted")

}

// ---------- SHOW FORMS LIST ----------

if(!id){

return(

<div style={{padding:"30px"}}>

<h2>Available Forms</h2>

{forms.length === 0 && <p>No forms available</p>}

{forms.map(f => (

<div key={f._id} style={{marginBottom:"10px"}}>

<button onClick={()=>navigate(`/form/${f._id}`)}>
{f.title}
</button>

</div>

))}

</div>

)

}

// ---------- SHOW FORM ----------

if(!form) return <p>Loading...</p>

return(

<div style={{
backgroundColor:form.theme?.backgroundColor,
fontFamily:form.theme?.fontFamily,
padding:"30px"
}}>

<h1>{form.title}</h1>

{form.fields.map((f,i)=>(
<FieldRenderer
key={i}
field={f}
onChange={(value)=>handleChange(f.label,value)}
/>
))}

<button
style={{backgroundColor:form.theme?.buttonColor}}
onClick={handleSubmit}
>
Submit
</button>

</div>

)

}

export default FillForm;