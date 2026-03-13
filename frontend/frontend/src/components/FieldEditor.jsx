import React from "react";
function FieldEditor({ field, updateField }) {

  const updateValue = (key, value) => {
    updateField({
      ...field,
      [key]: value
    });
  };

  const updateOption = (index, value) => {
    const updatedOptions = [...field.options];
    updatedOptions[index] = value;

    updateField({
      ...field,
      options: updatedOptions
    });
  };

  const addOption = () => {
    updateField({
      ...field,
      options: [...field.options, "New Option"]
    });
  };

  const deleteOption = (index) => {
    const updatedOptions = [...field.options];
    updatedOptions.splice(index, 1);

    updateField({
      ...field,
      options: updatedOptions
    });
  };

  return (

    <div>

      <h3>Field Settings</h3>

      {/* LABEL */}

      <div style={{ marginBottom: "10px" }}>
        <label>Label</label>

        <input
          type="text"
          value={field.label}
          onChange={(e) => updateValue("label", e.target.value)}
          style={{ width: "100%", padding: "6px" }}
        />
      </div>


      {/* PLACEHOLDER */}

      {["text", "email", "textarea", "number"].includes(field.type) && (

        <div style={{ marginBottom: "10px" }}>

          <label>Placeholder</label>

          <input
            type="text"
            value={field.placeholder}
            onChange={(e) => updateValue("placeholder", e.target.value)}
            style={{ width: "100%", padding: "6px" }}
          />

        </div>

      )}


      {/* REQUIRED */}

      <div style={{ marginBottom: "15px" }}>

        <label>

          <input
            type="checkbox"
            checked={field.required}
            onChange={(e) => updateValue("required", e.target.checked)}
          />

          Required

        </label>

      </div>


      {/* OPTIONS */}

      {["dropdown", "radio", "checkbox"].includes(field.type) && (

        <div>

          <h4>Options</h4>

          {field.options.map((option, index) => (

            <div key={index} style={{ marginBottom: "8px" }}>

              <input
                type="text"
                value={option}
                onChange={(e) => updateOption(index, e.target.value)}
                style={{ width: "70%", padding: "6px", marginRight: "5px" }}
              />

              <button
                onClick={() => deleteOption(index)}
                style={{
                  background: "#f44336",
                  color: "white",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>

            </div>

          ))}

          <button
            onClick={addOption}
            style={{
              marginTop: "5px",
              padding: "6px 10px",
              background: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Add Option
          </button>

        </div>

      )}

    </div>

  );

}

export default FieldEditor;