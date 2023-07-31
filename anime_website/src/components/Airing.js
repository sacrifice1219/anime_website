import React from "react";
import { useGlobalContext } from "../Context/global";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Sidebar from "./SideBar";

const Airing = ({rendered}) => {
    const {airingAnime, isSearch, searchResults} = useGlobalContext();

    const conditionalRender = () => {
        if(!isSearch && rendered === 'airing'){
            return airingAnime?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }else{
            return searchResults?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }
    }

    return ( 
        <PopularStyled>
            <div className="airing_anime">
        {conditionalRender()}
            </div>
            <Sidebar/>
        </PopularStyled>
     );
}

const PopularStyled = styled.div`
    display:flex;
    .airing_anime{
      margin-top:2rem;
      padding-top:2rem;
      padding-bottom:2rem;
      padding-left:5rem;   
      padding-right: 0;
      width: 100%;
      display:grid;
      grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));
      grid-gap:2rem;
      background-color:#fff;
      border-top: 5px solid #e5e7eb;
    }
    a{
        height:500px;
        border-radius: 7px;
        border:5px solid #e5e7eb
    }
    a img{
        width:100%;
        height:100%;
        object-fit:cover;
        border-raidus:5px;
    }
`;
 
export default Airing;