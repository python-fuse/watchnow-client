import React from "react";

interface FormInputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  type: string;
  onChange: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  onChange,
  placeholder,
  type,
  value,
  id,
}) => {
  return (
    <div className="flex flex-col  gap-y-4 relative">
      <input
        type={type}
        id={id}
        className="form-input h-[43px]  bg-transparent rounded-md p-2 border-2 outline-none hover:border-violet-500 focus:border-violet-500 duration-300 placeholder:text-gray-400 placeholder:duration-300 text-sm"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={id} className="label  duration-300">
        {label}
      </label>
    </div>
  );
};
export default FormInput;
