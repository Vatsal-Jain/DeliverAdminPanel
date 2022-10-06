
import './App.css';
import AddData from './components/AddData';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import OrderSection from './components/Orders/OrderSection';
import ShowDetails from './components/Orders/ShowDetails';
import MedicineData from './components/MedicineData/MedicineData';
import MedicineDetails from './components/MedicineData/MedicineDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddData/>} />
      <Route path='/addItem' element={<AddData/>} />
      <Route path='/orders' element={<OrderSection/>} />
      <Route path='/orderdetails/:orderid' element={<ShowDetails/>} />
      <Route path='/medicinedata' element={<MedicineData/>} />
      <Route path='/medicinedetails/:productID' element={<MedicineDetails/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App;
