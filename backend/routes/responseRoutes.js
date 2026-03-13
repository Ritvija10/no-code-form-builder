const express = require("express")
const router = express.Router()

const { submitResponse, getResponses } = require("../controllers/responseController")

// submit form response
router.post("/", submitResponse)

// get responses for a specific form
router.get("/:formId", getResponses)

module.exports = router;