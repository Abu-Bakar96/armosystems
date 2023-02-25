import React from "react";
import axios from "axios";
import { Category } from "./Category";

import { PeopleItem } from "./PeopleItem";
import { Preloader } from "./Preloader";
import Pagination from "./Pagination";

function PeopleList() {
  const [isLoading, setLoading] = React.useState(false);

  const [peoples, setPeoples] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [peoplePerPage] = React.useState(10);
  const [currentPeople, setCurrentPeople] = React.useState(0);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  React.useEffect(() => {
    const getPeoples = async () => {
      const res =
        await axios(`https://retoolapi.dev/o12llQ/data?_page=${currentPage}&_limit=10
      `);
      setPeoples(res.data);
      setCurrentPeople(+res.headers.get("X-Total-Count"));
      setLoading(true);
    };
    getPeoples();
  }, [currentPage]);

  if (!isLoading) {
    return <Preloader />;
  }
  return (
    <>
      {!peoples.length === true ? (
        <>
        <Category
            setPeoples={setPeoples}
            peoples={peoples}
            currentPage={currentPage}
            setCurrentPeople={setCurrentPeople}
            setLoading={setLoading}
          />
          <div>Нет людей с такой работой</div>
        </>
      ) : (
        <>
          <Category
            setPeoples={setPeoples}
            peoples={peoples}
            currentPage={currentPage}
            setCurrentPeople={setCurrentPeople}
            setLoading={setLoading}
          />
          <div className="people">
            {peoples.map((people) => (
              <PeopleItem key={people.id} {...people} setPeoples={setPeoples} />
            ))}
          </div>
          <Pagination
            peoplePerPage={peoplePerPage}
            totalPeoples={currentPeople}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
}

export { PeopleList };
