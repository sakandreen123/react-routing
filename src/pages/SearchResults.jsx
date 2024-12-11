import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchResults = () => {
  const [query] = useSearchParams();

  console.log(query.get('q'));
  console.log(query.get('c'));

  return (
    <div>SearchResults</div>
  )
}

export default SearchResults