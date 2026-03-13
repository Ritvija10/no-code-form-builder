import React from "react";

function FieldRenderer({ field }) {
return (

    <div className="preview-field">

      <label>{field.label}</label>

      {/* TEXT */}
      {field.type === "text" && (
        <input type="text" placeholder={field.placeholder} />
      )}

      {/* EMAIL */}
      {field.type === "email" && (
        <input type="email" placeholder={field.placeholder} />
      )}

      {/* TEXTAREA */}
      {field.type === "textarea" && (
        <textarea placeholder={field.placeholder}></textarea>
      )}

      {/* NUMBER */}
      {field.type === "number" && (
        <input type="number" placeholder={field.placeholder} />
      )}

      {/* DATE */}
      {field.type === "date" && (
        <input type="date" />
      )}

      {/* DROPDOWN */}
      {field.type === "dropdown" && (
        <select>
          {field.options.map((opt, i) => (
            <option key={i}>{opt}</option>
          ))}
        </select>
      )}

      {/* RADIO */}
      {field.type === "radio" && (
        field.options.map((opt, i) => (
          <div key={i}>
            <input type="radio" name={field.label} />
            <label>{opt}</label>
          </div>
        ))
      )}

      {/* CHECKBOX */}
      {field.type === "checkbox" && (
        field.options.map((opt, i) => (
          <div key={i}>
            <input type="checkbox" />
            <label>{opt}</label>
          </div>
        ))
      )}

    </div>

  );
}

export default FieldRenderer;