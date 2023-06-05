import React from "react";

function Home () {
    const image = "https://thumbs.dreamstime.com/b/colourful-various-herbs-spices-cooking-dark-background-herbs-spices-cooking-dark-background-113655482.jpg?w=768"
    return (
        <div>
            <h2>Welcome to Recipe App!</h2>
            <img src={image} alt="spoons with ingredients"/>
        </div>
    )
}

export default Home;