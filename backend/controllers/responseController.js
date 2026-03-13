const Response = require("../models/response")

// submit response
exports.submitResponse = async (req,res)=>{

try{

const { formId, answers } = req.body

const response = new Response({
formId,
answers
})

await response.save()

res.json(response)

}catch(err){

console.error(err)
res.status(500).json({error:"Server error"})

}

}

// get responses for a form
exports.getResponses = async (req,res)=>{

try{

const responses = await Response.find({
formId: req.params.formId
})

res.json(responses)

}catch(err){

console.error(err)
res.status(500).json({error:"Server error"})

}

}