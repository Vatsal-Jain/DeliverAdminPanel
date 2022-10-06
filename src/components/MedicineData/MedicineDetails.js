import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import {db} from '../../Firebase/firebaseConfig'
import './MedicineDetails.css'
import { Link } from 'react-router-dom'


const MedicineDetails = () => {

    const { productID } = useParams()
    const [orderdata, setOrderData] = useState({})
    console.log(productID)

    

    const getorderdata = async () => {
        const docRef = doc(db, "ProductData", productID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setOrderData(docSnap.data())
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    useEffect(() => {
        getorderdata()
    }, [])
    return (
        <div className="order-section">
            <Navbar />
            <Link to='/medicinedata'><button className='goback-btn'>Go back</button></Link>

            <h1 className='order-head1'>Order Details</h1>
            <div className='outer'>
       
            
            <div className='orderdetails-form'>
                <div className="orderdetails_row">
                    <p>Item Name</p>
                    <p>{orderdata.itemName}</p>
                </div>
                <div className="orderdetails_row">
                    <p>BrandName</p>
                    <p>{orderdata.itemBrandName}</p>
                </div>

                <div className="orderdetails_row">
                    <p>Category</p>
                    <p>{orderdata.itemCategory}</p>
                </div>

                <div className="orderdetails_row">
                    <p>Composition</p>
                    <p>{orderdata.itemComposition}</p>
                </div>


                <div className="orderdetails_row">
                    <p>Description</p>
                    <p>{orderdata.itemDescription}</p>
                </div>

                <div className="orderdetails_col">
                <p>Image</p>
                <details>
                <summary>open</summary> 
                <img
    src={orderdata.itemImageUrl}
    style={{width:'200px',height:'200px',resize:'both'}}
    /> 
                </details>
                </div>

            
            </div>


       
       

            </div>
        </div>
    )
}

export default MedicineDetails