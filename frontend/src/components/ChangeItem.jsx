import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Preloader } from "./Preloader";

function ChangeItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [onePeople, setOnePeople] = React.useState([]);

  const [lastName, setLastName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [job, setJob] = React.useState("");
  
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const worker = {
        lastName,
        firstName,
        email,
        job
      }

      await axios.patch(
        `https://retoolapi.dev/o12llQ/data/${id}`,
        worker
      );

    } catch (err) {
      console.warn(err)
      alert('Ошибка при создании!')
    }
    navigate('/')

  }

  
  React.useEffect(() => {
    const getOnePeople = async () => {
        const res =
          await axios(`https://retoolapi.dev/o12llQ/data/${id}
        `);
        setOnePeople([res.data]);
        setLastName(res.data.lastName)
        setFirstName(res.data.firstName)
        setEmail(res.data.email)
        setJob(res.data.job)
      };
      getOnePeople();
  }, [id])

  if (!onePeople.length) {
    return <Preloader />;
  }
  return (
    <>
      <form>
        <div className="mb-3 mt-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={firstName}
            onChange={(e) => setFirstName(onePeople[0].firstName = e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Job
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>
        <button
          onClick={(e) => onSubmit(e)}
          type="submit"
          className="btn btn-info mb-3"
        >
          Изменить
        </button>
      </form>
    </>
  );
}

export { ChangeItem };
