import React from "react";
import Film from "./Film";


const FilmList = ({films}) => {

    const filmList = films.map((film) => {
        return (<li><Film name={film.name} url={film.url} key={film.id}/></li>)
    })

    return (
        <>
            {filmList}
        </>
    );
}

export default FilmList;