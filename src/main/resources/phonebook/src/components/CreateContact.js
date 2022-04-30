import React, {useState} from "react";

function CreateContact(props) {
    const [contact, setContact] = useState({
        name:"",
        surname:"",
        phoneNumber:""
    });

    function handleCreateContact(e) {
        e.preventDefault();
        props.createContact(contact);
    }

   const gestisciStato = e => {
       const {name, value} = e.target;
   
     setContact({
         ...contact, [name]:value
        }); 
   }

   


    return(
        <form onSubmit={handleCreateContact}>
            <input name="name" defaultValue={contact.name} className="form-control btn-lg" placeholder="Name" onChange={ gestisciStato} />
            <br></br>

            <input name="surname" defaultValue={contact.surname} className="form-control btn-lg" placeholder="Surname" onChange={ gestisciStato} />
            <br></br>
            
            <input name="phoneNumber" defaultValue={contact.phoneNumber} className="form-control btn-lg" placeholder="PhoneNumber" onChange={gestisciStato} />
            <br></br>

            <button type="submit" className="btn btn-success">Submit</button>
            
            

        </form>
    )
    


    

}



export default CreateContact;