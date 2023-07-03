import React, { useState } from "react"
import "./Checkbox.css"

type CheckboxProps = {
  label: string
  onChange: (checked: boolean) => void
}

const CheckBox: React.FC<CheckboxProps> = ({ label, onChange }) => {
  const [checked, setChecked] = useState(false)

  const handleToggle = () => {
    const newChecked = !checked
    setChecked(newChecked)
    onChange(newChecked)
  }

  return (
    <label className="checkbox flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
        className="appearance-none"
      />
      <span
        className={`checkbox-custom bg-neon-yellow ${
          checked ? "checkbox-custom--checked" : ""
        }`}
      />
      <span className="uppercase font-normal text-sm tracking-[3.2px] text-left">
        {label}
      </span>
    </label>
  )
}

export default CheckBox
