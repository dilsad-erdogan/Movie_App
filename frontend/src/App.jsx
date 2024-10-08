import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FavPage from "./pages/FavPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/fav' element={<FavPage />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
