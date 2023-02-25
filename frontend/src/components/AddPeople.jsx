import React from 'react';
import axios from 'axios'


function AddPeople({setPeoples, peoples}) {
  const [lastName, setLastName] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [job, setJob] = React.useState('');


  const [showModal, setShowModal] = React.useState(false);
  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const worker = {
        lastName,
        firstName,
        email,
        job
      }

      const response = await axios.post(
        'https://retoolapi.dev/o12llQ/data',
        worker
      );
      

      setPeoples([...peoples, response.data]);
      setLastName('');
      setFirstName('');
      setEmail('');
      setJob('');
      handleCloseModal();

    } catch (err) {
      console.warn(err)
      alert('Ошибка при создании!')
    }
  }

  return (
    <>
      <button onClick={handleButtonClick} type="button" className="btn btn-primary mb-3">
        Добавить работника
      </button>
      {showModal && (
        <form>
          <div className="mb-3 mt-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              First name
            </label>
            <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Last name
            </label>
            <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Job
            </label>
            <input onChange={(e) => setJob(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" />
          </div>
          <button onClick={(e) => onSubmit(e)} type="submit" className="btn btn-info mb-3">
            Добавить
          </button>
        </form>
      )}
    </>
  );
}

export { AddPeople };
