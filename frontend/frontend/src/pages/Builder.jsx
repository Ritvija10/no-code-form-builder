import React, { useState,useEffect } from "react";
import FieldEditor from "../components/FieldEditor";
import FieldRenderer from "../components/FieldRenderer";
import ThemeEditor from "../components/ThemeEditor";
import { useParams } from "react-router-dom";
import API from "../services/api";
import "./Builder.css";
function Builder() {
     const { id } = useParams();
  const [fields, setFields] = useState([]);
  const [selectedFieldIndex, setSelectedFieldIndex] = useState(null);

  const [theme, setTheme] = useState({
    background: "#ffffff",
    buttonColor: "#000000",
    textColor: "#000000"
  });
  useEffect(() => {

    if (id) {

      const loadForm = async () => {

        try {

          const res = await API.get(`/forms/${id}`);

          setFields(res.data.fields || []);
          setTheme(res.data.theme || theme);

        } catch (error) {

          console.error(error);

        }

      };

      loadForm();

    }

  }, [id]);

  const addField = (type) => {

    const newField = {
      type: type,
      label: "New Field",
      placeholder: "",
      required: false,
      options: []
    };

    setFields([...fields, newField]);
  };

  const deleteField = (index) => {

    const updatedFields = [...fields];
    updatedFields.splice(index, 1);

    setFields(updatedFields);

    if (selectedFieldIndex === index) {
      setSelectedFieldIndex(null);
    }
  };

  const updateField = (index, updatedField) => {

    const updatedFields = [...fields];
    updatedFields[index] = updatedField;

    setFields(updatedFields);
  };

  const saveForm = async () => {
console.log("Save button clicked"); 
    try {

      const res = await API.post("/forms", {
        title: "My Form",
        fields,
        theme
      });

      alert("Form saved successfully");

      console.log("Form link:", `/form/${res.data._id}`);

    } catch (error) {

      console.error(error);

    }

  };


  return (

    <div className="builder-container">

      {/* LEFT PANEL */}

      <div className="builder-left">

        <h3>Add Fields</h3>

        <button onClick={() => addField("text")}>
          Text Field
        </button>

        <button onClick={() => addField("email")}>
          Email Field
        </button>

        <button onClick={() => addField("textarea")}>
          Textarea
        </button>
        <button onClick={() => addField("dropdown")}>Dropdown</button>

<button onClick={() => addField("radio")}>Radio Buttons</button>

<button onClick={() => addField("checkbox")}>Checkbox Group</button>

<button onClick={() => addField("number")}>Number Field</button>

<button onClick={() => addField("date")}>Date Picker</button>

        <ThemeEditor theme={theme} setTheme={setTheme} />

      </div>

      {/* PREVIEW PANEL */}

      <div
        className="builder-preview"
        style={{
          background: theme.background,
          color: theme.textColor
        }}
      >

        <h2>Form Preview</h2>

        {fields.length === 0 && (
          <p>No fields added yet</p>
        )}

        {fields.map((field, index) => (

          <div key={index} className="field-box">

            <FieldRenderer field={field} />

            <div className="field-actions">

              <button
                className="edit-btn"
                onClick={() => setSelectedFieldIndex(index)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteField(index)}
              >
                Delete
              </button>

            </div>

          </div>

        ))}

        {fields.length > 0 && (

          <button
            className="submit-btn"
            style={{ background: theme.buttonColor }}
          >
            Submit
          </button>

        )}
        <br />

        <button
          onClick={saveForm}
          style={{ marginTop: "20px", padding: "10px" }}
        >
          Save Form
        </button>
      </div>

      {/* FIELD EDITOR */}

      <div className="builder-editor">

        {selectedFieldIndex !== null ? (

          <FieldEditor
            field={fields[selectedFieldIndex]}
            updateField={(updatedField) =>
              updateField(selectedFieldIndex, updatedField)
            }
          />

        ) : (

          <p>Select a field to edit</p>

        )}

      </div>

    </div>

  );

}

export default Builder;