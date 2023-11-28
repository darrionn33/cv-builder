import Header from "./components/Header";
import EditSection from "./components/EditSection/EditSection";
import ResultSection from "./components/ResultSection/ResultSection";
import { useState } from "react";
function App() {
  const [data, setData] = useState({});
  return (
    <>
      <Header />
      <EditSection className="edit" setData={setData} />
      <ResultSection className="result" data={data} />
    </>
  );
}

export default App;
