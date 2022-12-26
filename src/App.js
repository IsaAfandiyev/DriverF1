import Drivers from "./Drivers";
import {Route,Routes} from "react-router-dom";
import FavoritesPage from "./FavoritesPage";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Drivers/>}/>
            <Route path='Favorites' element={<FavoritesPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
