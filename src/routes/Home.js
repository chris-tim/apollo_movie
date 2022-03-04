import React from "react";
import {gql, useQuery} from "@apollo/client";

const GET_MOVIES = gql`
    query {
        movies{
            id
            medium_cover_image
        }
    }
`;


const Home = () => {
    const {loading, error, data} = useQuery(GET_MOVIES);
    if(loading){
        return "loading..."
    }
    if(data && data.movies){
        return data.movies.map(movie=><div key={movie.id}>{movie.id}</div>);
    }
   
}

export default Home