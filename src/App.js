import Home from "./components/Home/Home";
import { Route, Routes } from 'react-router-dom';
import TotalList from "./components/Home/TourList/TotalList";
import About from "./components/AboutUs/About";
import Category from "./components/Category/Category";
import Blog from "./components/Blog/Blog";
import NavBar from "./components/Home/NavBar";
import Footer from "./components/Home/Footer";
import Search from "./components/Home/Search";
import AdminLogin from "./components/Admin/AdminLogin";
import DashBoard from "./components/Admin/Dashboard";
import Flights from "./components/Admin/Flights";



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

        <Route path="/admin">
          <Route path="admin-login" element = {<AdminLogin/>} />
          <Route path = "dashboard" element = {<DashBoard/>} />
          <Route path="flights" element = {<Flights/>} />
        </Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
