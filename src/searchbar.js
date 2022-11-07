import React from 'react';

const Searchmovie = (props) => {
    return(
        <div className='sm'>
            <p>Search for movie</p>
            <input className='inputform'
            value={props.value}
            onChange={(event) => props.setSearchmovie(event.target.value)}
            placeholder='Search movie'>
            </input>
        </div>
    )
}

export default Searchmovie;