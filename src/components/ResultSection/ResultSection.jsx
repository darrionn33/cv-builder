import QualificationsTable from "./QualificationsTable";
import WorkXPTable from "./WorkXPTable";

const ResultSection = (props) => {
  return (
    <section className={props.className}>
      <h2>Result</h2>
      <div className="cv">
        <h1>{props.data.name ? props.data.name : ""}</h1>
        <p>{props.data.email ? props.data.email : ""}</p>
        <p>{props.data.number ? props.data.number : ""}</p>
        {props.data.qualifications && props.data.qualifications.length > 0 ? (
          <QualificationsTable qualifications={props.data.qualifications} />
        ) : (
          ""
        )}
        {props.data.workXP && props.data.workXP.length > 0 ? (
          <WorkXPTable workXP={props.data.workXP} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ResultSection;
