import React, {useState} from "react";
/* import Map from './Map' */
export const Notes = (props) => {
const [note, setNote] = useState('');
/* const [pin, setPin] = useState(''); */
const port = process.env.PORT || 5000;



const handleNotes = async(e) => {
    e.preventDefault();
    fetch(`http://localhost:${port}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({note})
    })

    .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });

    //reset the form
    setNote('');

};


    return (
        <div className="container" >
            <div className="login-page" onSubmit={handleNotes}>
                {/* <Map/> */}
                <div >
                    <label htmlFor="note"> Add Note: &nbsp; </label>
                    <input type="note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add Note" name="note" id="note" />
                </div>
                <button type="submit" > Save</button>
            </div>
            {/* <button onClick={() => props.onFormSwitch("signup")}> Haven't been registered? SIGN UP HERE</button> */}

        </div>
    )
}

export default Notes