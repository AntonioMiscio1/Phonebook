import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateContact from './components/CreateContact';
import ContactList from './components/ContactList';



function App() {
  const [contacts, setContacts] = useState([]);
 
  useEffect(()=> {
    fetch("http://localhost:8080/contacts")
    .then(response => response.json())
    .then(response => setContacts(response));
  }, []);
  

 

  
  
  
  
  
  const mommyCreateContact = contact => {
    console.log(contact);
    fetch("http://localhost:8080/contacts/add", {
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(contact)
    })
    .then(response => response.json())
     .then(response => setContacts([
      ...contacts, response
    ]));

} 






  return (
    <>
    <div className="container">
     <h2> PhoneBook </h2>
     <CreateContact createContact={mommyCreateContact} />
     <ContactList contacts= {contacts} />

    </div>
    </>
  );
}

export default App;