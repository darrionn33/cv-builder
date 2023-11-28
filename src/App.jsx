import Header from "./components/Header";
import EditSection from "./components/EditSection/EditSection";
import ResultSection from "./components/ResultSection/ResultSection";
import { useState } from "react";
function App() {
  // dummy data to be removed
  const [data, setData] = useState({
    name: "John Smith",
    email: "shadowgarden@gmail.com",
    number: "3363363361",
    qualifications: [
      {
        name: "St. Anthonys College",
        qualification: "BA",
        yearOfPassing: "2023",
      },
      {
        name: "Don Bosco Technical School",
        qualification: "Stenography",
        yearOfPassing: "2023",
      },
    ],
    workXP: [
      {
        name: "ITI",
        designation: "Substitute Teacher",
        dateOfJoining: "2023-01-19",
        dateOfExiting: "2023-06-15",
      },
      {
        name: "Congress",
        designation: "Video Editor",
        dateOfJoining: "2023-01-19",
        dateOfExiting: "2023-06-15",
      },
    ],
  });
  return (
    <>
      <Header />
      <EditSection className="edit" data={data} setData={setData} />
      <ResultSection className="result" data={data} />
    </>
  );
}

export default App;
