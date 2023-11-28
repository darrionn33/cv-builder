import { useRef, useState } from "react";

const FieldsetEduInfo = (props) => {
  const instituteName = useRef();
  const qualification = useRef();
  const yearOfPassing = useRef();
  const [newQDiv, setNewQDiv] = useState(false);

  const showNewQDiv = () => {
    setNewQDiv(true);
  };

  const addQualification = () => {
    setNewQDiv(false);
    const newQualification = {
      name: instituteName.current.value,
      qualification: qualification.current.value,
      yearOfPassing: yearOfPassing.current.value,
    };
    if (
      newQualification.name.match(/^\w/) &&
      newQualification.qualification.match(/^\w/)
    ) {
      props.setQualifications((prevQualifications) => [
        ...prevQualifications,
        newQualification,
      ]);
      instituteName.current.value = "";
      qualification.current.value = "";
      yearOfPassing.current.value = "";
    }
  };
  return (
    <fieldset className={props.className}>
      <h2>Educational Info</h2>

      {newQDiv ? (
        <>
          <label htmlFor="institute-name">Institute Name</label>
          <input type="text" id="institute-name" ref={instituteName} />
          <label htmlFor="qualification">Qualification</label>
          <input type="text" id="qualification" ref={qualification} />
          <label htmlFor="year-of-passing">Year Of Passing</label>
          <input
            type="number"
            id="year-of-passing"
            min="1950"
            max={new Date().getFullYear()}
            placeholder="YYYY"
            ref={yearOfPassing}
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
      {props.qualifications.map((qualification, index) => (
        <div key={index}>
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
