import { useRef, useState } from "react";

const FieldsetWorkInfo = (props) => {
  const companyName = useRef();
  const designation = useRef();
  const dateOfJoining = useRef();
  const dateOfExit = useRef();
  const [newXPDiv, setNewXPDiv] = useState(false);

  const showNewXPDiv = () => {
    setNewXPDiv(true);
  };

  const addXP = () => {
    setNewXPDiv(false);
    const newExperience = {
      name: companyName.current.value,
      designation: designation.current.value,
      dateOfJoining: dateOfJoining.current.value,
      dateOfExit: dateOfExit.current.value,
    };
    if (
      newExperience.name.match(/^\w/) &&
      newExperience.designation.match(/^\w/)
    ) {
      props.setWorkXP((prevExperience) => [...prevExperience, newExperience]);
      companyName.current.value = "";
      designation.current.value = "";
      dateOfJoining.current.value = "";
      dateOfExit.current.value = "";
    }
  };
  return (
    <fieldset className={props.className}>
      <h2>Work Experience</h2>

      {newXPDiv ? (
        <>
          <label htmlFor="company-name">Company Name</label>
          <input type="text" id="company-name" ref={companyName} />
          <label htmlFor="designation">Designation</label>
          <input type="text" id="designation" ref={designation} />
          <label htmlFor="date-of-joining">Date Of Joining</label>
          <input
            type="date"
            id="date-of-joining"
            min="1950"
            max={new Date().getFullYear()}
            placeholder="YYYY"
            ref={dateOfJoining}
          />
          <label htmlFor="date-of-exit">Date Of Exit</label>
          <input
            type="date"
            id="date-of-exit"
            min="1950"
            max={new Date().getFullYear()}
            placeholder="YYYY"
            ref={dateOfExit}
          />
          <button type="button" onClick={addXP}>
            + Add Experience
          </button>
        </>
      ) : (
        <button type="button" onClick={showNewXPDiv}>
          New Experience
        </button>
      )}
      {props.workXP.map((experience, index) => (
        <div key={index}>
          {" "}
          <p>{experience.name}</p>
          <p>{experience.designation}</p>
          <p>
            {experience.dateOfJoining.split("-")[0] +
              " - " +
              experience.dateOfExit.split("-")[0]}
          </p>
        </div>
      ))}
    </fieldset>
  );
};

export default FieldsetWorkInfo;
