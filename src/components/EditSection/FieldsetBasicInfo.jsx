const FieldsetBasicInfo = (props) => {
  return (
    <fieldset className={props.className}>
      <h2>Basic Info</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        {...props.register("name")}
        placeholder={props.data.name}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        {...props.register("email")}
        placeholder={props.data.email}
      />
      <label htmlFor="number">Number</label>
      <input
        type="number"
        id="number"
        {...props.register("number", {
          pattern: /\d{10}/,
        })}
        placeholder={props.data.number}
      />
      {props.errors.number ? "Please enter a 10 digit number!" : ""}
    </fieldset>
  );
};

export default FieldsetBasicInfo;
