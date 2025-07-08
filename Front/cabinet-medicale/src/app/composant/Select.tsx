import "./Select.css";

interface SelectProps {
    data: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export default function Select({ data, value, onChange, placeholder = "", className = "" }: SelectProps) {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
            className={`custom-select ${className}`}
        >
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {data.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}



// import "./Select.css";

// interface SelectProps {
//     options: { value: string; label: string }[];
//     value: string | string[];
//     onChange: (value: string | string[]) => void;
//     placeholder?: string;
//     className?: string;
//     multiple?: boolean;
// }

// export default function Select({ options, value, onChange, placeholder = "", className = "", multiple = false }: SelectProps) {
//     return (
//         <select
//             multiple={multiple}
//             value={value}
//             onChange={e => {
//                 if (multiple) {
//                     const selected = Array.from(e.target.selectedOptions, option => option.value);
//                     onChange(selected);
//                 } else {
//                     onChange(e.target.value);
//                 }
//             }}
//             className={`custom-select ${className}`}
//             style={multiple ? { minHeight: 80, height: 120 } : {}}
//         >
//             {placeholder && !multiple && <option value="" disabled>{placeholder}</option>}
//             {options.map(option => (
//                 <option key={option.value} value={option.value}>{option.label}</option>
//             ))}
//         </select>
//     );
// }
