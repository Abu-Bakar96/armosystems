import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function PeopleItem(props) {
  const { setPeoples, lastName, firstName, job, email, id } = props;
  const handleRemove = async (id) => {
    if (window.confirm("Вы действительно хотите удалить человека?")) {
      await axios.delete(`https://retoolapi.dev/o12llQ/data/${id}`);
      setPeoples((prev) => prev.filter((person) => person.id !== id));
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          {lastName} {firstName}
        </h4>

        <h5 className="card-job"> Job: {job}</h5>
        <p className="card-email">Email: {email}</p>
        <div className="card-action">
          <Link to={`/posts/${id}/edit`}>
            <button className="btn btn-success">Изменить</button>
          </Link>
          <button className="btn btn-danger" onClick={() => handleRemove(id)}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export { PeopleItem };
