import React from "react";

const Film = ({ name, url }) => {

    return (
        <>
            <a style={{textDecoration: 'none'}} href={url}>{name}</a>
        </>
    )
}

export default Film;