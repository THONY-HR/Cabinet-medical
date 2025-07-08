import React from "react";
import "./Button.css";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
};

export default function Button({ children, onClick, type = "button", className = "", disabled }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`custom-btn ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
