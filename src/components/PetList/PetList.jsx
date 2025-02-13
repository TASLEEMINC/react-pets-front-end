// src/components/PetList/PetList.jsx
import React from 'react';

const PetList = (props) => {
    return (
        <div className="sidebar-container">
          <h1>Pet List</h1>
          <div className="list-container">
            {!props.pets.length ? (
              <h2>No Pets Yet!</h2>
            ) : (
              <ul>
                {props.pets.map((pet) => 
                  <li 
                    key={pet._id}
                    onClick={() => props.handleSelect(pet)}
                  >
                    {pet.name}
                  </li>
                )}
              </ul>
            )}
          </div>
          <button onClick={props.handleFormView}>
            {props.isFormOpen ? 'Close Form' : 'New Pet'}
          </button>
        </div>
      );
  };
  
  export default PetList;
  