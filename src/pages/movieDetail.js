import React from 'react'

const MovieDetail = (match) => {
  return (
    <>
      ini film dengan id {match.params.id}
    </>
  )
}

export default MovieDetail