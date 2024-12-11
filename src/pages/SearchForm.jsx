import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const [text, setText] = useState('');

    const navigate = useNavigate();



    const startSearch = () => {

        navigate(`/search?q=${text}&c=pak`);

    }

    return (
        <div>
            <input type='text' name='search' onChange={(e) => { setText(e.target.value) }} />
            <button onClick={startSearch}>Search</button>
        </div>
    )
}

export default SearchForm