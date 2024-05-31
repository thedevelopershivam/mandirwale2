import React, { useMemo } from 'react'

function CustomSelectDropdown({ children, title = "dropdown", onChange, attr, required = true, value = "" }) {
  return (
    <label className="flex flex-col">
      <span className="capitalize"> {title} </span>
      <select
        className={`w-full capitalize h-10 border-[1px] border-gray-200 rounded focus:outline-none ${(!value || value === "select one") && 'border-red-400'}`}
        value={value}
        required={required}
        onChange={(e) => onChange(e)}
      >

        <option> Select One </option>
        {children}

      </select>
    </label>
  )
}

export default CustomSelectDropdown