import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//import Home from './assets/components/Home';
import Footer from './assets/components/Footer';
//import Cart from './assets/components/Cart';
import Navbars from './assets/components/Navbars';
import Header from './assets/components/Header';
import Pizza from './assets/components/Pizza';
//import Login from './assets/components/Login';
//import Register from './assets/components/Register';


function App() {


  return (
    <>
      <div>
        <Navbars />
        <Header 
            title={'¡Pizzería Mamma Mia!'}
            subtitle={'¡Tenemos las mejores pizzas que podrás encontrar!'}
        />
        {/* <Home /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <Cart /> */}
        <Pizza />
        <Footer />
      </div>
    </>
  )
}

export default App
