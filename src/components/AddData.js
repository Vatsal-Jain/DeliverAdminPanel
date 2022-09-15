import React, { useState } from 'react'
import './AddData.css'

import { db,storage } from '../Firebase/firebaseConfig';
import { addDoc,collection } from 'firebase/firestore';
import {ref,uploadBytes, getDownloadURL} from 'firebase/storage'

const AddData = () => {

    const [itemName ,setItemName] = useState('');
    const [itemDescription ,setItemDescription] = useState('');
    const [itemComposition ,setItemComposition] = useState('');
    const [itemPrice ,setItemPrice] = useState('');
    const [itemBrandName ,setItemBrandName] = useState('');
    const [itemImage ,setItemImage] = useState(null);
    const [itemCategory ,setItemCategory] = useState('');
    const [itemPrescription ,setItemPrescription] = useState('');
    const[itemImageUrl,setItemImageUrl] = useState('');

   const handleSubmit =(e) => {
    e.preventDefault()
 
    if(itemImage == null){
        alert("Please upload image")
        return
    }
    else{
        const imageRef = ref(storage,`ProductImages/${itemImage.name}`)
        uploadBytes(imageRef,itemImage)
        .then(() => {
            alert("Image Uploaded successfully")
            getDownloadURL(imageRef)
            .then((url) => {
                //console.log(url)
                setItemImageUrl(url)
   
                const itemData = {
        itemName,
        itemBrandName,
        itemCategory,
        itemComposition,
        itemDescription,
        itemPrescription,
        itemPrice,
        itemImageUrl: url
    }
   console.log(itemData)
  try{
    const docRef = addDoc(collection(db,"ProductData"),itemData);
    alert("Data added succesffuly", docRef.id);
  }
  catch(error){
    alert("error adding ", error);
  }


            })
        })
        .catch((error) => {
alert(error.message);
        })
    }

    
   }

    console.log(itemName,itemBrandName,itemCategory,itemComposition,itemDescription,itemPrescription,itemPrice)
    return (
    <div className='form-outer'>
       <h1>Add Data</h1>
       <form className='form-inner'>
        <label>Item Name</label>
        <input type='text' name='item_name' className='inputtag'
        onChange={(e) => {setItemName(e.target.value)}}
        />
        <br />
        
<select name="Brand" id="brand"
     onChange={(e) => {setItemBrandName(e.target.value)}}
>
<option value="selectbrand">Select Brand</option>
  <option value="Torrent Pharma">Torrent Pharma</option>
  <option value="Nulife Pharmacueticals">Nulife Pharmacueticals</option>
  <option value="Kivi Labs">Kivi Labs</option>
  <option value="Juggat Pharma">Juggat Pharma</option>
</select>
        
        
        <br />
        <label form="category">Choose Product Category</label>

<select name="Categories" id="categories"
     onChange={(e) => {setItemCategory(e.target.value)}}
>
<option value="select">Select</option>
  <option value="medicine">Medicine</option>
  <option value="skincare">Skin Care</option>
  <option value="babycare">Baby Care</option>
  <option value="ayurvedic">Ayurvedic</option>
</select>
<br />
        <label>Item Description</label>
        <input 
             onChange={(e) => {setItemDescription(e.target.value)}}
        className='inputtag'
        type='text' name='item_description' />
        <br />
        <label>Item Composition</label>
        <input 
                     onChange={(e) => {setItemComposition(e.target.value)}}
    
        type='text' name='item_composition'
        className='inputtag'
        />
        <br />
        <label>Prescription required</label>
        <input type='checkbox'
                     onChange={(e) => {setItemPrescription(e.target.checked)}}
        className='prescription'
        name='item_prescription' />
        <br />

        <label>Image</label>
        <input type='file' name='item_image'
        className='inputtag'
        onChange={(e) => {setItemImage(e.target.files[0])}}
        />
        <br />

        <label>Price</label>
        <input type='text' name='item_price'
        className='inputtag'
        onChange={(e) => {setItemPrice(e.target.value)}}
        />
        <br />

      
        <button onClick={handleSubmit}>Add Item</button>
       </form>
    </div>
  )
}

export default AddData
