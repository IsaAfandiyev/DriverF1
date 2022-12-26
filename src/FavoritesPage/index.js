import Header from "../Header";
import {favoritesContext} from "../FavoritesContext";
import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function FavoritesPage() {
    let {favorites,setFavorites} = useContext(favoritesContext);
    const deleteItem  = (item) => {
        setFavorites(favorites.filter((i)=>i.name !== item.name))
        toster();
    };
    const toster = () => toast('deleted item');

    return(
        <>
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
                    <th>Delete Favorite</th>
                    <th>Clear All</th>

                </tr>
                </thead>
                <tbody>
                {
                    favorites && favorites.map((item,i)=>{
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
                                        deleteItem(item)
                                    }
                                    }>Delete favorite</button>
                                </td>
                                <td>
                                    <button onClick={()=>{
                                        setFavorites([])
                                    }}>Delete All</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}

export default FavoritesPage;