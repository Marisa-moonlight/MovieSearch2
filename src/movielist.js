import React from 'react';

const Movielist = (props) => {
    return (
        <div className='movieList'>
            {props.movies.map((movie, index) => (
                <div>
                    <div className='border'>
                    <img src={movie.Poster} alt="movie poster" />
                    <div><h1>{movie.Title}</h1></div>
                    </div>
                </div>
            ))}




        </div>
    )
}

export default Movielist;