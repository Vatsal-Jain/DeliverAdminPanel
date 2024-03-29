import React, { useState ,useEffect} from 'react'
import './AddData.css'

import { db,storage } from '../Firebase/firebaseConfig';
import { addDoc,collection ,getDocs} from 'firebase/firestore';
import {ref,uploadBytes, getDownloadURL} from 'firebase/storage'

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const AddData = () => {
const [allbrands, setAllBrands] = useState([]);
    const [itemName ,setItemName] = useState('');
    const [itemDescription ,setItemDescription] = useState('');
    const [itemComposition ,setItemComposition] = useState('');
    const [itemPrice ,setItemPrice] = useState('');
    const [itemBrandName ,setItemBrandName] = useState('');
    const [itemImage ,setItemImage] = useState(null);
    const [itemMrp ,setItemMrp] = useState('');
    // const [itemImage2 ,setItemImage2] = useState(null);
    // const [itemImage3 ,setItemImage3] = useState(null);
    const [itemCategory ,setItemCategory] = useState('');
    const [itemPrescription ,setItemPrescription] = useState('');
    const [bestSelling ,setBestSelling] = useState('');
    const [mustHave ,setMustHave] = useState('');
    const[itemImageUrl,setItemImageUrl] = useState('');

   const handleSubmit =(e) => {
    console.log(itemImage)
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
        itemMrp,
        bestSelling,
        mustHave,
        itemImageUrl: url,
        itemImageUrl2: url,
        itemImageUrl3: url,
        productID: '' 
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

    // setBestSelling(null)
    // setItemBrandName(null)
    // setItemImage(null)
    // setItemComposition(null)
    // setItemDescription(null)
    // setItemImageUrl(null)
    // setItemName(null)
    // setItemPrescription(null)
    // setItemPrescription(null)
    // setItemPrice(null)
    
   }




   const getallbrands = async () => {
    setAllBrands([]);
    const querySnapshot = await getDocs(collection(db, "Brands"));
    querySnapshot.forEach((doc) => {
    //  console.log(doc.id, " => ",doc.data());
      setAllBrands((prev) => [...prev,doc.data()])

    })


}
useEffect(() => {

getallbrands();

},[])

  

   // console.log(itemName,itemBrandName,itemCategory,itemComposition,itemDescription,itemPrescription,itemPrice,itemImage)
    return (
      <div>
<Navbar/>
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
  {/* <option className='option1' value="Torrent Pharma">Torrent Pharma</option>
  <option id='option1' value="Nulife Pharmacueticals">Nulife Pharmacueticals</option>
  <option id='option1' value="Kivi Labs">Kivi Labs</option>
  <option id='option1' value="Juggat Pharma">Juggat Pharma</option>
  <option id='option1' value="Bsa Pharma">Bsa Pharma</option>
  <option id='option1' value="Dr Trust">Dr Trust</option>
  <option id='option1' value="Lyra Laboratories">Lyra Laboratories</option>
  <option id='option1' value="PandG">P {'&'} G</option>
  <option id='option1' value="Jagdale Industries">Jagdale Industries</option>
  <option id='option1' value="Sundyota Numandis">Sundyota Numandis</option> 
  <option id='option1' value="Mcw Healthcare">Mcw Healthcare</option> 
  <option id='option1' value="Indechemie">Indechemie</option> 
  <option id='option1' value="Frenz Biotech">Frenz Biotech</option> 
  <option id='option1' value="Pharmed Ltd">Pharmed Ltd</option> 
  <option id='option1' value="Aster Medipharm">Aster Medipharm</option> 
  <option id='option1' value="Puremed Biotech">Puremed Biotech</option> 
  <option id='option1' value="Generic">Generic Product</option>  */}
   {allbrands.map((brand) => {
        return(
        <option value={brand.BrandName}>{brand.BrandName}</option>
        ) 
      })}
 
 
  
</select>
        
        
        <br />
        <label form="category">Choose Product Category</label>

<select name="Categories"  id="brand"
     onChange={(e) => {setItemCategory(e.target.value)}}
>
<option value="select">Select</option>
  <option value="medicine">Medicine</option>
  <option value="skincare">Skin Care</option>
  <option value="babycare">Baby Care</option>
  <option value="ayurvedic">Ayurvedic</option>
  <option value="surgical">Surgical</option>
</select>
<br />


<label form="bestselling">Best Selling</label>

<select name="selectbestselling" id="brand"
     onChange={(e) => {setBestSelling(e.target.value)}}
>
<option value="select2">Select</option>
  <option value="yes">Yes</option>
  <option value="no">No</option>
  
</select>
<br />

<label form="musthave">Must Have</label>

<select name="selectmusthave" id="brand"
     onChange={(e) => {setMustHave(e.target.value)}}
>
<option value="select3">Select</option>
  <option value="yes">Yes</option>
  <option value="no">No</option>
  
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

        <label>MainImage</label>
        <input type='file' name='item_image'
        className='inputtag'
        onChange={(e) => {setItemImage(e.target.files[0])}}
        />
        <br />

{/*         
        <label>Image 2</label>
        <input type='file' name='item_image'
        className='inputtag'
        onChange={(e) => {setItemImage2(e.target.files[0])}}
        />
        <br />

        <label>Image 3</label>
        <input type='file' name='item_image'
        className='inputtag'
        onChange={(e) => {setItemImage3(e.target.files[0])}}
        />
        <br /> */}

        <label>Price</label>
        <input type='number' name='item_price'
        className='inputtag'
        placeholder='0'
        onChange={(e) => {setItemPrice(e.target.value)}}
        />
        <br />

        <label>M.R.P</label>
        
        <input type='number' name='item_price'
        className='inputtag'
        placeholder='0'
        onChange={(e) => {setItemMrp(e.target.value)}}
        />
        <br />
      
        <button onClick={handleSubmit}>Add Item</button>
       </form>
    </div>
    <Footer />
      </div>
   
  )
}

export default AddData
