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

  return (
    <div className='container'>
        <Navbar />
        <h2 className='order-head1'>Medicine Section</h2>
      <div className='order-s1'>
        <input placeholder='search here' type='text' className='search-bar'
        onChange={(e) => setKeyword(e.target.value)}
        />
        <div className='order-s1-in'>
<p>sort by Category</p>
<select 
onChange={(e) => setAllCategory(e.target.value)}
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
       <div className='order_container'>
        <div className='order-row_card1'>
<p className='ordertxt'>Medicine Name</p>
<p className='ordertxt'>Brand Name</p>
<p className='ordertxt'>Category</p>
<p className='ordertxt'>Composition</p>
<p className='ordertxt'>Price</p>

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
      })
      .filter((val) => {
           if(keyword === ""){
            return val
           }
           else if(val.itemName.toLowerCase().includes(keyword.toLowerCase()) || val.itemCategory.toLowerCase().includes(keyword.toLowerCase())
           || val.itemBrandName.toLowerCase().includes(keyword.toLowerCase())
           ){
            return val;
           }
      }).map((order) => {
            return (
            <div className='order-row_card'>
             <p className='ordertxt'>{order.itemName}</p>
             <p className='ordertxt'>{order.itemBrandName}</p>
             <p className='ordertxt'>{order.itemCategory}</p>
             <p className='ordertxt'>{order.itemComposition}</p>
             <p className='ordertxt'>{order.itemPrice}</p>
 
</div>
            )
      })}
    </div>
    </div>
    </div>
  )
}

export default MedicineData
