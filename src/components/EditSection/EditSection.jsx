import { useState } from "react";
import { useForm } from "react-hook-form";
import FieldsetBasicInfo from "./FieldsetBasicInfo";
import FieldsetEduInfo from "./FieldsetEduInfo";
import FieldsetWorkInfo from "./FieldsetWorkInfo";
const EditSection = (props) => {

  const [qualifications, setQualifications] = useState(
    props.data.qualifications
    );
    const [workXP, setWorkXP] = useState(props.data.workXP);
  const clear = () => {
    setQualifications([]);
    setWorkXP([]);
    props.setData({
      name: "",
      email: "",
      number: "",
      qualifications: [],
      workXP: [],
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    props.setData({ ...data, qualifications, workXP });
  };

  return (
    <section className={props.className}>
      <h2>Edit</h2>
      <form action="#" onSubmit={handleSubmit(submitData)}>
        <FieldsetBasicInfo
          className="basic"
          register={register}
          errors={errors}
          data={props.data}
        />
        <FieldsetEduInfo
          className="edu"
          qualifications={qualifications}
          setQualifications={setQualifications}
        />
        <FieldsetWorkInfo
          className="work"
          workXP={workXP}
          setWorkXP={setWorkXP}
        />
        <button id="clear" type="button" onClick={clear}>
          Clear
        </button>
        <button type="submit">Generate</button>
      </form>
    </section>
  );
};

export default EditSection;
