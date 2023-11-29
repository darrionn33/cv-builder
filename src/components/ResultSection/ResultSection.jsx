import html2canvas from "html2canvas";
import QualificationsTable from "./QualificationsTable";
import WorkXPTable from "./WorkXPTable";
import { useEffect } from "react";

const ResultSection = (props) => {
  const findScale = (canvas, container) => {
    let scaleString = "1";

    for (let i = 1000; i > 0; i--) {
      let currentScale = "0." + i.toString().padEnd(3, "0");
      canvas.style.transform = `scale(${currentScale})`;
      document.body.appendChild(canvas);

      let canvasWidth = canvas.getBoundingClientRect().width;
      let containerWidth = container.offsetWidth;

      if (canvasWidth < containerWidth && canvasWidth > containerWidth - 10) {
        scaleString = currentScale;
        break;
      }
    }

    return scaleString;
  };

  const savePDF = () => {
    const container = document.querySelector(
      "section.result > .preview-container"
    );

    html2canvas(document.querySelector("div.cv"), {
      scale: 3,
    }).then((canvas) => {
      canvas.style.transform = "scale(" + findScale(canvas, container) + ")";
      container.appendChild(canvas);
      canvas.style.transformOrigin = "top left";
      container.style.maxHeight =
        canvas.getBoundingClientRect().width / 0.7 + "px";
      container.style.maxWidth = canvas.getBoundingClientRect().width + "px";
      container.appendChild(canvas);
    });
  };
  useEffect(() => {
    savePDF();
  }, [props.data]);
  return (
    <section className={props.className}>
      <h2>Result</h2>
      <div className="preview-container"></div>
      <div className="cv">
        <header>
          <p>
            {props.data.name.split(" ").length === 1
              ? props.data.name.split(" ")
              : props.data.name.split(" ")[0].split("")[0] +
                props.data.name.split(" ")[1].split("")[0]}
          </p>
          <div>
            <h1>{props.data.name ? props.data.name : ""}</h1>
            <p>{props.data.email ? props.data.email : ""}</p>
            <p>{props.data.number ? props.data.number : ""}</p>
          </div>
        </header>
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
