import { useState } from "react";
import { useForm } from "react-hook-form";
import FieldsetBasicInfo from "./FieldsetBasicInfo";
import FieldsetEduInfo from "./FieldsetEduInfo";
const EditSection = (props) => {
  const defaultQ = [
    {
      name: "St. Whatev's College, Somewhere",
      qualification: "B.A. (Awesome Hons.)",
      yearOfPassing: 2023,
    },
    {
      name: "St. Whatev's College, Somewhere",
      qualification: "B.A. (Awesome Hons.)",
      yearOfPassing: 2023,
    },
    {
      name: "St. Whatev's College, Somewhere",
      qualification: "B.A. (Awesome Hons.)",
      yearOfPassing: 2023,
    },
  ];
  const [qualifications, setQualifications] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    props.setData({ ...data, qualifications });
  };

  return (
    <section className={props.className}>
      <h2>Edit</h2>
      <form action="#" onSubmit={handleSubmit(submitData)}>
        <FieldsetBasicInfo
          className="basic"
          register={register}
          errors={errors}
        />
        <FieldsetEduInfo
          className="edu"
          qualifications={qualifications}
          setQualifications={setQualifications}
        />
        <button type="submit">Generate</button>
      </form>
    </section>
  );
};

export default EditSection;
