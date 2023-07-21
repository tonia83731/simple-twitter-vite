

export function FormInput({label, inputId, type, defaultValue, inputValue, placeholder, onInputChange, children}){
  return (
    <div className="w-full h-20 flex flex-col">
      <label htmlFor={inputId} className="bg-input px-[16px] pt-0.5 text-sm">
        {label}
      </label>
      <input
        id={inputId}
        className="bg-input px-[16px] border-b-2 border-input-border"
        type={type || "text"}
        defaultValue={defaultValue}
        value={inputValue || ""}
        placeholder={placeholder || ""}
        // maxLength={maxLength}
        onChange={(event) => onInputChange?.(event.target.value)}
      />
      {children || ""}
    </div>
  );
}