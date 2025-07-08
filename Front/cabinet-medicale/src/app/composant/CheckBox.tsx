import React from "react";

type CheckBoxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
};

const CheckBox: React.FC<CheckBoxProps> = ({ label, checked, onChange, className }) => {
  return (
    <label className={`flex items-center gap-2 ${className || ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="accent-blue-600"
      />
      <span>{label}</span>
    </label>
  );
};

export default CheckBox;
