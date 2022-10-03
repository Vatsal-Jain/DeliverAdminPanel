
// import React from 'react'
// import {useState} from 'react'
// import FlatList from 'flatlist-react';

// function Variant(props) {
//     const [enteredGoalText,setEnteredGoalText] = useState('');

//  const people = [
      
//       ]

//     // function goalInputHandler(e)) {
    
//     // setEnteredGoalText(e.target.value)
//     // console.log(enteredGoalText)
//     //   }

//     //   function addGoalHandler() {
//     //     setEnteredGoalText((currentCourseGoals) => [
//     //         ...currentCourseGoals,
//     //         {text: enteredGoalText, id: Math.random().toString()},
//     //       ]);
//     //   }
//   return (
//     <>
//     <label>Add Your Varinat</label>
//     <input
//     placeholder='enter variant'
//     value="new"

//     />
//     <button onClick={people.push(value)} >Add item</button>
//     {/* <input 
//    // style={styles.textinput}
//     onChange={goalInputHandler() }

    
//     value={enteredGoalText}
//     placeholder='Variant name'
//     //placeholderTextColor={'grey'}
    
//     /> */}
//     {/* <div className='button-conatiner'>
//         <div className='button'>
//     <button
//     color='red'
    
//     onPress={addGoalHandler}>Add</button>
//     </div>
//     <div className='cnacel-button'>
//     <button 
//     color='#f31282'
//  onClick={props.onCancel}>
//         Cancel</button>
//     </div>
//     </div> */}
//     <FlatList
//     list={people}
//     renderItem={(data) =>{
        
        
//         return(
            
//             <h1>{data.firstName}</h1>
//             // <Pressable
//             // style={({pressed}) => pressed && styles.pressedItem  }
//             // android_ripple={{color:'#4B0150'}}  
//             // onPress={props.onDeleteItem.bind(this, props.id)}>
         
//             // <Feather name="delete" size={24} color="#f31282" />
          
//             // </Pressable>
        
//             // </View>
//         )
//     }}
//     />    
//     </>
    
//   )
// }

// export default Variant

// // const styles = StyleSheet.create({
// //     textinput:{
// //         width:'100%',
// //         borderWidth:1,
// //         borderColor:'#e4d0ff',
// //        backgroundColor:'#e4d0ff',
// //        color:'#120438',
// //        borderRadius:6,
// //         padding:14
        
// //       },
// //       buttonContainer:{
// //         flexDirection:'row',
// //         marginTop:16
        
// //       },
// //       button:{
// //         width:'30%',
// //         marginHorizontal:8
// //       }
// // })