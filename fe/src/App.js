import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//screen
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';

//components
import NavBar from './components/NavBar';
import BackDrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';
import { useParams } from 'react-router';

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);
  const {id} = useParams();
  // console.log(id)

  return (
    <Router>
      <NavBar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)}/>
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/product/:id" element={<ProductScreen />} />
            <Route exact path="/cart" element={<CartScreen />} />
          </Routes>
        </main>
    </Router>
  )
}

export default App
