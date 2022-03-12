
import {Routes, Route} from 'react-router-dom'




import Product from './components/product/Product';

function App() {
 


  return (
    <Routes>
      <Route path='/products/:productID' element={<Product/>} />
    </Routes>
  );
}

export default App;
