import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../Context/global';


function Sidebar() {
    const {popularAnime} = useGlobalContext()

    const sorted = popularAnime?.sort((a,b) => {
        return b.score - a.score
    })

    return (
        <SidebarStyled>
            <h3>Top 5 Popular</h3>
            <div className="anime">
                {sorted?.slice(0,5).map((anime) => {
                    return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                        <h5>
                            {anime.title}
                        </h5>
                    </Link>
                })}
            </div>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    margin-top: 2rem;
    background-color: #fff;
    border-top: 5px solid #e5e7eb;
    padding-right: 7rem;
    padding-left: 2rem;
    padding-top: 2rem;
    .anime{
        display: flex;
        flex-direction: column;
        width: 190px;
        img{
            width: 160%;
            border-radius: 5px;
            border: 5px solid #e5e7eb;
        }
        a{
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: .4rem;
            color: #27AE60;
            h4{
                font-size: 1.1rem;
            }
            h5{
                width:150%;
            }
        }
    }
`;

export default Sidebar