import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TotalList from "./components/Home/TourList/TotalList";
import About from "./components/AboutUs/About";
import Category from "./components/Category/Category";
import Blog from "./components/Blog/Blog";
import NavBar from "./components/Home/NavBar";
import Footer from "./components/Home/Footer";



function App() {

  return (
    <Router>
    <div>
        <NavBar/>
      <Switch>
        <Route exact path={'/'}>
          <Home/>
        </Route>

        <Route path={'/total-list'}>
          <TotalList/>
        </Route>

        <Route path={'/category'}>
          <Category/>
        </Route>

        <Route path={'/blog'}>
          <Blog/>
        </Route>

        <Route path={'/about-us'}>
          <About/>
        </Route>

        
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
