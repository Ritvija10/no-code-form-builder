import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import API from "../services/api"
import "./Responses.css"

function Responses(){

const {id} = useParams()
const [responses,setResponses] = useState([])

useEffect(()=>{

API.get(`/responses/${id}`)
.then(res=>setResponses(res.data))
.catch(err=>console.error(err))

},[id])

if(responses.length === 0){
return <p>No responses yet</p>
}

const fields = Object.keys(responses[0].answers)
const downloadCSV = () => {

if(responses.length === 0) return;

const fields = Object.keys(responses[0].answers)

let csv = fields.join(",") + "\n"

responses.forEach(r => {

const row = fields.map(field => r.answers[field]).join(",")

csv += row + "\n"

})

const blob = new Blob([csv], { type: "text/csv" })

const url = window.URL.createObjectURL(blob)

const a = document.createElement("a")

a.href = url
a.download = "responses.csv"

a.click()

}
return(

<div className="responses-page">

<h2 className="responses-title">Responses</h2>

<table className="responses-table">

<thead>

<tr>
{fields.map(field=>(
<th key={field}>{field}</th>
))}
</tr>

</thead>

<tbody>

{responses.map((r,i)=>(
<tr key={i}>
{fields.map(field=>(
<td key={field}>{r.answers[field]}</td>
))}
</tr>
))}

</tbody>

</table>

</div>

)

}

export default Responses