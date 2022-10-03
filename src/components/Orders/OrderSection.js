import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './OrderSection.css'
import {useState} from 'react'
import {collection,doc, getDocs,setDoc} from 'firebase/firestore'
import {db} from '../../Firebase/firebaseConfig'
import { Link } from 'react-router-dom'

function OrderSection() {

const [allorders,setAllOrders] = useState([]);
const [allordersStatus,setAllOrdersStatus] = useState('');
const [keyword,setKeyword] = useState('');

const getallorder = async () => {
          setAllOrders([]);
          const querySnapshot = await getDocs(collection(db, "UserOrders"));
          querySnapshot.forEach((doc) => {
          //  console.log(doc.id, " => ",doc.data());
            setAllOrders((prev) => [...prev,doc.data()])

          })
 

}
useEffect(() => {

getallorder();

},[])

console.log(allorders)

const changeOrderStatus = (id,orderdata,status) => {
const docRef = doc(db,"UserOrders",id);
const data= {
  ...orderdata,
  orderstatus: status
}
setDoc(docRef,data).then(() => {
  alert("Document successfully written!");
})
  .catch((error) => {
      alert("Error writing document: ", error);
  })

getallorder()
}

const changeDeliveryboyName = (id,orderdata,boyname) => {
  const docRef = doc(db,"UserOrders",id);
  const data= {
    ...orderdata,
    deliveryboy_name: boyname
  }
  setDoc(docRef,data).then(() => {
    alert("Document successfully written!");
  })
    .catch((error) => {
        alert("Error writing document: ", error);
    })
  
  getallorder()
  }


  const changeDeliveryboyPhone = (id,orderdata,boyphone) => {
    const docRef = doc(db,"UserOrders",id);
    const data= {
      ...orderdata,
      deliveryboy_phone: boyphone
    }
    setDoc(docRef,data).then(() => {
      alert("Document successfully written!");
    })
      .catch((error) => {
          alert("Error writing document: ", error);
      })
    
    getallorder()
    }

  return (
    <div className='order-section'>
      
      <Navbar/>
      <h2 className='order-head1'>Order Section</h2>
       <div className='order-s1'>
        <input placeholder='search here' type='text' className='search-bar'
        onChange={(e) => setKeyword(e.target.value)}
        />
        <div className='order-s1-in'>
<p>sort by order status</p>
<select 
onChange={(e) => setAllOrdersStatus(e.target.value)}
>
  <option value='' >All</option>
  <option value='pending' >Pending</option>
  <option value='ontheway' >On the Way</option>
  <option value='delivered' >Delivered</option>
  <option value='cancelled' >Cancelled</option>
</select>
        </div>

       </div>
       <div className='order_container'>
        <div className='order-row_card1'>
<p className='ordertxt'>OrderId</p>
<p className='ordertxt'>Paid</p>
<p className='ordertxt'>Delivery Status</p>
<p className='ordertxt'>Delivery Boy Name</p>
<p className='ordertxt'>Delivery Boy Phone</p>


<p className='ordertxt'>Cost</p>
<button>show details</button>
        </div>

        <div className='order_container'>
          {/* data */}
          {allorders.filter((val) => {
           if(allordersStatus === ""){
            return val
           }
           else if(val.orderstatus.toLowerCase().includes(allordersStatus.toLowerCase())){
            return val;
           }
      })
      .filter((val) => {
           if(keyword === ""){
            return val
           }
           else if(val.orderid.toLowerCase().includes(keyword.toLowerCase()) || val.orderstatus.toLowerCase().includes(keyword.toLowerCase())
           || val.deliveryboy_name.toLowerCase().includes(keyword.toLowerCase())
           ){
            return val;
           }
      }).map((order) => {
            return (
            <div className='order-row_card'>
             <p className='ordertxt'>{order.orderid}</p>
             <p className='ordertxt'>{order.orderpayment}</p>
<div className='order-card-in'>
             {order.orderstatus === 'pending' && 
             <select onChange={(e) => changeOrderStatus(order.orderid,order,e.target.value) }>
               <option value='pending' >Pending</option>
  <option value='ontheway' >On the Way</option>
  <option value='delivered' >Delivered</option>
  <option value='cancelled' >Cancelled</option>
             </select>
             }
             {order.orderstatus === 'ontheway' && 
             <select onChange={(e) => changeOrderStatus(order.orderid,order,e.target.value) }>
              <option value='pending' >Pending</option>
              <option value='ontheway' >On the Way</option>
              <option value='delivered' >Delivered</option>
              <option value='cancelled' >Cancelled</option>
              </select>
             }
             {order.orderstatus === 'delivered' && 
              <p className='ordertxt'>{order.orderstatus}</p>
             }
             {order.orderstatus === 'cancelled' && <p className='ordertxt'>{order.orderstatus}</p> }
 </div>
   
 {order.deliveryboy_name ? <p className='ordertxt'>{order.deliveryboy_name}</p> :
 <input type='text' placeholder='enter delivery boy name' className='orderinput'
 onBlur={(e) => changeDeliveryboyName(order.orderid,order,e.target.value)}
 />
 
 }
 
 {order.deliveryboy_phone ? <p className='ordertxt'>{order.deliveryboy_phone}</p> :
 <input type='text' placeholder='enter delivery boy phone' className='orderinput'
 onBlur={(e) => changeDeliveryboyPhone(order.orderid,order,e.target.value)}
 /> 
 
 }

 <p className='ordertxt'>{order.paymenttotal}</p>
<Link to={`/orderdetails/${order.orderid}`}> <button>show details</button></Link>
           
            </div>
            )
          })}
        </div>



       </div>
    </div>
  )
}


export default OrderSection
