import React , {useState} from "react";
const items=["isPlaying","isReading","isSleeping"]
let x=true
 function Practice2() {
     const [checkedItems, setCheckedItems] = useState(new Set());

     const handleCheckboxChange = (item) => {
         const updatedCheckedItems = new Set(checkedItems);
         if (updatedCheckedItems.has(item)) {
             updatedCheckedItems.delete(item);
         } else {
             updatedCheckedItems.add(item);
         }
         setCheckedItems(updatedCheckedItems);
     };

     const handleDelete = (item) => {
         const updatedItems = items.filter((i) => i !== item);
         setItems(updatedItems);

         const updatedCheckedItems = new Set(checkedItems);
         updatedCheckedItems.delete(item);
         setCheckedItems(updatedCheckedItems);
         x=false
     };

     return (
         <div>
             <h1>List of Items</h1>
             <ul>
                 {items.map((item) => (

                     (x&& <li key={item}>
                         <input
                             type="checkbox"
                             checked={checkedItems.has(item)}
                             onChange={() => handleCheckboxChange(item)}
                         />
                         {item}
                         {checkedItems.has(item) && (
                             <button onClick={() => handleDelete(item)}>Delete</button>
                         )}
                     </li>
                     ) ))}
             </ul>
         </div>
     );
 };
 export default Practice2
