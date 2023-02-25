import React from "react";
import { AddPeople } from "./AddPeople";

function Category({
  setPeoples,
  peoples,
  currentPage,
  setCurrentPeople
}) {
  const [selectedJob, setSelectedJob] = React.useState("All");
  const handleSelectChange = (event) => {
    setSelectedJob(event.target.value);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      if (selectedJob !== "All") {
        const response = await fetch(
          `https://retoolapi.dev/o12llQ/data?job=${selectedJob}`
        );
        const jsonData = await response.json();
        setPeoples(jsonData);
        setCurrentPeople(jsonData.length);
      } else if (selectedJob === "All") {
        const response = await fetch(
          `https://retoolapi.dev/o12llQ/data?_page=${currentPage}&_limit=10`
        );
        const jsonData = await response.json();
        setPeoples(jsonData);
        setCurrentPeople(+response.headers.get("X-Total-Count"));
      }
    };

    fetchData();
  }, [selectedJob, setPeoples, currentPage, setCurrentPeople]);

  return (
    <div>
      <select
        className="form-select mb-3"
        aria-label="Default select example"
        onChange={handleSelectChange}
        value={selectedJob}
      >
        <option defaultValue="All">All</option>
        <option value="Data Analyst">Data Analyst</option>
        <option value="CTO">CTO</option>
        <option value="Product Manager">Project Manager</option>
        <option value="CFO">CFO</option>
        <option value="CMO">CMO</option>
      </select>

      <AddPeople setPeoples={setPeoples} peoples={peoples} />
    </div>
  );
}

export { Category };
