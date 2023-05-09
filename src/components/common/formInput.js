const FormInput = ({ label, type, value, onChange }) => {
  return (
    <div className="flex flex-col my-2">
      <label htmlFor="username" className="pr-2 ">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name={label}
        id={label}
        className="pl-2 rounded w-full border"
      ></input>
    </div>
  );
};

export default FormInput;
