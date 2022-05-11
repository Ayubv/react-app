import './App.css';
import Header from './components/Header';
import './components/Header.css'
import Shop from './components/Shop/Shop';
import { BrowserRouter ,Routes, Route} from "react-router-dom";
//import Order from './components/Order/Order';
import Inventor from './components/Inventor/Inventor';
import Notfound from './components/Nofound/Notfound';
import ProductDetai from './components/ProductDetails/ProductDetai';
import Review from './components/Review/Review';

function App() {
return (
<BrowserRouter>
<div>
<Header></Header>
<Routes>
<Route  path="/shop"  element={<Shop />} />
<Route  path="/inventor"  element={<Inventor />} />
<Route exact path="/"  element={<Shop />} />
<Route  path="product/:productKey"  element={<ProductDetai />} />
<Route  path="/review"  element={<Review />} />
<Route  path="*" element={<Notfound />} />
</Routes>
</div>
</BrowserRouter>

);
}

export default App;
