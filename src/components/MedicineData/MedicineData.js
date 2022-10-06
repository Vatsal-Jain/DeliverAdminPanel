import React from 'react';
import {useState,useEffect} from 'react';
import {collection,doc, getDocs,setDoc} from 'firebase/firestore'
import {db} from '../../Firebase/firebaseConfig';
import { Link } from 'react-router-dom';
import './MedicineData.css';

import Navbar from '../Navbar/Navbar'
function MedicineData() {
    const [allcategory,setAllCategory] = useState('');
const [keyword,setKeyword] = useState('');
const [allorders,setAllOrders] = useState([]);

const [allmanufacturer,setAllManufacturer] = useState('');


const getallorder = async () => {
    setAllOrders([]);
    const querySnapshot = await getDocs(collection(db, "ProductData"));
    querySnapshot.forEach((doc) => {
    //  console.log(doc.id, " => ",doc.data());
      setAllOrders((prev) => [...prev,doc.data()])

    })


}
useEffect(() => {

getallorder();

},[])

console.log(allorders)

// const name = order.itemName.split(" ").join('').toLowerCase();
// const id = order.productID;

  return (
    <div className='container'>
        <Navbar />
        <h2 className='order-head1'>Medicine Section</h2>
     
      <div className='order-s1'>
        <input placeholder='search by product name / Manufacturer /Category/ Composition' type='text' className='search-bar'
        onChange={(e) => setKeyword(e.target.value)}
        />
        <div className='order-s1-in'>
<p>sort by Category</p>
<select 
onChange={(e) => setAllCategory(e.target.value)}
id='inputsort'
>
  <option value='' >All</option>
  <option value='medicine' >Medicine</option>
  <option value='skincare' >Skincare</option>
  <option value='ayurvedic' >Ayurvedic</option>
  <option value='petcare' >Pet Care</option>
  <option value='surgical' >Surgical</option>
  <option value='babycare' >Baby Care</option>
</select>
        </div>
        </div>
        {/* <div className='order-s1-in'>
<p>sort by Manufacturer</p>
<select 
onChange={(e) => setAllManufacturer(e.target.value)}
>
  <option value='' >All</option>
  <option value="Torrent Pharma">Torrent Pharma</option>
  <option value="Nulife Pharmacueticals">Nulife Pharmacueticals</option>
  <option value="Kivi Labs">Kivi Labs</option>
  <option value="Juggat Pharma">Juggat Pharma</option>
  <option value="Bsa Pharma">Bsa Pharma</option>
  <option value="Dr Trust">Dr Trust</option>
  <option value="Lyra Laboratories">Lyra Laboratories</option>
  <option value="PandG">P {'&'} G</option>
  <option value="Jagdale Industries">Jagdale Industries</option>
  <option value="Sundyota Numandis">Sundyota Numandis</option> 
  <option value="Mcw Healthcare">Mcw Healthcare</option> 
  <option value="Indechemie">Indechemie</option> 
  <option value="Frenz Biotech">Frenz Biotech</option> 
  <option value="Pharmed Ltd">Pharmed Ltd</option> 
  <option value="Aster Medipharm">Aster Medipharm</option> 
  <option value="Puremed Biotech">Puremed Biotech</option> 
  <option value="Generic">Generic Product</option> 
</select>
        </div> */}

   
       <div className='order_container'>
        <div className='order-row_card1'>
<p className='ordertxt'>Medicine Name</p>
<p className='ordertxt'>Brand Name</p>
<p className='ordertxt'>Category</p>
{/* <p className='ordertxt'>Composition</p> */}
<p className='ordertxt'>Price</p>
<p className='ordertxt'>Stock</p>

  {/* <button>show details</button> */}
        </div>


        <div className='order_container'>
          {/* data */}
          {allorders.filter((val) => {
           if(allcategory === ""){
            return val
           }
           else if(val.itemCategory.toLowerCase().includes(allcategory.toLowerCase())){
            return val;
           }
        //    if(allmanufacturer === ""){
        //       return val;
        //    }

        //    else if(val.itemBrandName.toLowerCase().includes(allmanufacturer.toLowerCase())){
        //     return val;
        //    }
      })
      .filter((val) => {
           if(keyword === ""){
            return val
           }
           else if(val.itemName.toLowerCase().includes(keyword.toLowerCase()) || val.itemCategory.toLowerCase().includes(keyword.toLowerCase())
           || val.itemBrandName.toLowerCase().includes(keyword.toLowerCase())  || val.itemComposition.toLowerCase().includes(keyword.toLowerCase()) 
           ){
            return val;
           }
      }).map((order) => {
            return (
            <div className='order-row_card'>
             <p className='ordertxt'>{order.itemName}</p>
             <p className='ordertxt'>{order.itemBrandName}</p>
             <p className='ordertxt'>{order.itemCategory}</p>
             {/* <p className='ordertxt'>{order.itemComposition}</p> */}
             <p className='ordertxt'>{order.itemPrice}</p>
             <p className='ordertxt'>{order.Stock && <p className='in'>{order.StockQuantity}</p>}{!order.Stock && <p className='out'>Out of Stock</p>} </p>
             
              {/* <Link to={`/medicinedetails/${order.productID}`}> <button>show details</button></Link>  */}
            
 
</div>
            )
      })}
    </div>
    </div>
    </div>
  )
}

export default MedicineData
