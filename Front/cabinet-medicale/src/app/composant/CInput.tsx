
import React from "react";
import "./Input.css";

type InputProps = {
    value: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    className?: string;
};

export default function CInput({ value, onChange, type = "text", placeholder = "", className = "" }: InputProps) {
    return (
        <input
            type={type}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            className={`custom-input ${className}`}
        />
    );
}
