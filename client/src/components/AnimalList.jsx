import React from 'react';
import AnimalListItem from './AnimalListItem.jsx';

const AnimalList = (props) => {
  return (
    <div>
      <p>list of animals:</p>
      {props.list.map(eachAnimal => {
        return <AnimalListItem animal={eachAnimal} key={eachAnimal.id}/>
      })}
    </div>
  )
}

export default AnimalList;