const Form = require("../models/form")

exports.createForm = async (req, res) => {
    try {
        console.log(req.body);
        console.log(typeof req.body.fields);
        const form = new Form(req.body)
        await form.save()

        res.json(Form)
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);

    }

}

exports.getForms = async (req, res) => {

    const forms = await Form.find()
    res.json(forms)

}

exports.getFormById = async (req, res) => {

    const form = await Form.findById(req.params.id)
    res.json(form)

}

exports.updateForm = async (req, res) => {

    const form = await Form.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.json(form)

}

exports.deleteForm = async (req, res) => {

    await Form.findByIdAndDelete(req.params.id)

    res.json({ message: "Deleted" })

}