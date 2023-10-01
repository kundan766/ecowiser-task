import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Note =(props)=>{

  const deleteNote =()=>{
   props.deleteItem(props.id);
  }

   return(
    <div className="note-container">
      <div className="note">
        <h1>{props.title}</h1> 
        
        <p>{props.content}</p>
        <button onClick={deleteNote}>
        <DeleteIcon className="delete-icon"/>
        </button>
      </div>
      </div>
   )
}
export default Note;


// import React, { useState } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";

// const Note = (props) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedContent, setUpdatedContent] = useState(props.content);

//   const deleteNote = () => {
//     props.deleteItem(props.id);
//   };

//   const toggleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleUpdate = () => {
//     // Call a function to update the note content in your app state or database
//     // Pass the updatedContent to that function
//     // For example: props.updateItem(props.id, updatedContent);
//     // After updating, you can exit the edit mode
//     toggleEdit();
//   };

//   return (
//     <div className="note-container">
//       <div className="note">
//         <h1>{props.title}</h1>
//         {isEditing ? (
//           <textarea
//             value={updatedContent}
//             onChange={(e) => setUpdatedContent(e.target.value)}
//           />
//         ) : (
//           <p>{props.content}</p>
//         )}
//         <div>
//           {isEditing ? (
//             <button onClick={handleUpdate}>Update</button>
//           ) : (
//             <button onClick={toggleEdit}>Edit</button>
//           )}
//           <button onClick={deleteNote}>
//             <DeleteIcon className="delete-icon" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Note;


// import React, { useState } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";

// const Note = (props) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedContent, setUpdatedContent] = useState(props.content);

//   const deleteNote = () => {
//     props.deleteItem(props.id);
//   };

//   const toggleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleUpdate = () => {
//     // Call a function in the parent component to update the note content
//     // Pass the updatedContent and note id to that function
//     props.updateItem(props.id, updatedContent);
//     // Exit the edit mode
//     toggleEdit();
//   };

//   return (
//     <div className="note-container">
//       <div className="note">
//         <h1>{props.title}</h1>
//         {isEditing ? (
//           <textarea
//             value={updatedContent}
//             onChange={(e) => setUpdatedContent(e.target.value)}
//           />
//         ) : (
//           <p>{props.content}</p>
//         )}
//         <div>
//           {isEditing ? (
//             <button onClick={handleUpdate}>Update</button>
//           ) : (
//             <button onClick={toggleEdit}>Edit</button>
//           )}
//           <button onClick={deleteNote}>
//             <DeleteIcon className="delete-icon" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Note;
