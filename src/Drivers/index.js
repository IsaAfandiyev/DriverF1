import axios from "axios";
import {useContext, useEffect, useState} from "react";
import "./index.css"
import Header from "../Header";
import { ToastContainer, toast } from 'react-toastify';
import {favoritesContext} from "../FavoritesContext";
import 'react-toastify/dist/ReactToastify.css';



function Drivers() {
    const [data,setData]= useState([]);
    const [page,setPage]= useState('https://swapi.dev/api/people?page');

    let {favorites,setFavorites} = useContext(favoritesContext)

    function addFavorites(item) {
           let filterFavorit = favorites.find((i) => i.name == item.name);
           if(!filterFavorit){
               setFavorites([...favorites,item]);
           }
           toster()
    }

    const toster = () => toast('Added to Favorites');
    useEffect((event)=>{
        axios.get(page)
            .then((res)=>{
                setData(res.data.results)
            })

    },[page])

    return <>
        <Header/>
        <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>HairColor</th>
                <th>Information</th>
                <th>Add to Favorite</th>
            </tr>
            </thead>
            <tbody>
            {
              data&&data.map((item,i)=>{
                    return(
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.height}</td>
                                <td>{item.mass}</td>
                                <td>{item.hair_color}</td>
                                <td style={{backgroundColor:item.url = '' ? "inherit" : 'red'}}>
                                    <a href={item.url}>Go to Wiki</a>
                                </td>
                                <td>
                                    <button onClick={()=>{
                                    addFavorites(item)

                                    }
                                    }>Add to favorite</button>
                                </td>
                            </tr>
                    )
                })
            }
            </tbody>
        </table>

        <button onClick={()=>{
            axios.get(page)
                .then((res)=>{
                    setPage(res.data.previous)
                })
        }}>Prev</button>

        <button onClick={()=>{
            axios.get(page)
                .then((res)=>{
                    setPage(res.data.next)
                })
        }}>Next</button>

    </>
}


export default Drivers;