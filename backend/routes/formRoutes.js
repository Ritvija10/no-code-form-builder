const express = require("express")

const router = express.Router()

const {

createForm,
getForms,
getFormById,
updateForm,
deleteForm

} = require("../controllers/formController")

router.post("/",createForm)

router.get("/",getForms)

router.get("/:id",getFormById)

router.put("/:id",updateForm)

router.delete("/:id",deleteForm)

module.exports = router