import React from 'react';

const AnimalListItem = (props) => {
  return (
    <div>
      id: {props.animal.id},
      name: {props.animal.name}
    </div>
  )
}

export default AnimalListItem;