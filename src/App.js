import Home from "./components/Home/Home";
import { Route, Routes } from 'react-router-dom';
import TotalList from "./components/Home/TourList/TotalList";
import About from "./components/AboutUs/About";
import Category from "./components/Category/Category";
import Blog from "./components/Blog/Blog";
import NavBar from "./components/Home/NavBar";
import Footer from "./components/Home/Footer";
import Search from "./components/Home/Search";



function App() {

  return (

    <>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/total-list'} element={<TotalList />} />
        <Route path={'/category'} element={<Category />} />
        <Route path={'/blog'} element={<Blog />} />
        <Route path={'/about-us'} element={<About />} />
        <Route path = {'/search'} element = {<Search/>} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
