import React from 'react'

const Pagination = ({peoplePerPage, totalPeoples, paginate, currentPage}) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPeoples / peoplePerPage); i++) {
    pageNumbers.push(i)
  }
 

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item `}>
            <button style={{cursor: "pointer"}}className={`page-link ${currentPage === number ? "active" : ""}`}onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination