import React from 'react'
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Detail</h1>
      <p>Detail ID: {id}</p>
    </div>
  );
};
