import { useState } from "react";
import { useForm } from "react-hook-form";

const FieldsetEduInfo = (props) => {
  const { watch, register, resetField } = useForm();
  const [newQDiv, setNewQDiv] = useState(false);

  const showNewQDiv = () => {
    setNewQDiv(true);
  };

  const addQualification = () => {
    setNewQDiv(false);
    const newQualification = {
      name: watch("institute-name"),
      qualification: watch("qualification"),
      yearOfPassing: watch("year-of-passing"),
    };
    if (
      newQualification.name.match(/^\w/) &&
      newQualification.qualification.match(/^\w/)
    ) {
      props.setQualifications((prevQualifications) => [
        ...prevQualifications,
        newQualification,
      ]);
      resetField("institute-name");
      resetField("qualification");
      resetField("year-of-passing");
    }
  };
  return (
    <fieldset className={props.className}>
      <h2>Educational Info</h2>

      {newQDiv ? (
        <>
          <label htmlFor="institute-name">Institute Name</label>
          <input
            type="text"
            id="institute-name"
            {...register("institute-name")}
          />
          <label htmlFor="qualification">Qualification</label>
          <input
            type="text"
            id="qualification"
            {...register("qualification")}
          />
          <label htmlFor="year-of-passing">Year Of Passing</label>
          <input
            type="number"
            id="year-of-passing"
            min="1900"
            max={new Date().getFullYear()}
            placeholder="YYYY"
            {...register("year-of-passing")}
          />
          <button type="button" onClick={addQualification}>
            + Add Qualification
          </button>
        </>
      ) : (
        <button type="button" onClick={showNewQDiv}>
          New Qualification
        </button>
      )}
      {props.qualifications.map((qualification) => (
        <div key={qualification.name}>
          {" "}
          <p>{qualification.name}</p>
          <p>{qualification.qualification}</p>
          <p>{qualification.yearOfPassing}</p>
        </div>
      ))}
    </fieldset>
  );
};

export default FieldsetEduInfo;
