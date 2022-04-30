import React from "react";


const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return (
            <form key={contact.id}>
                <div className="content">
                     <div className="main">{contact.name}</div>
                     <div>{contact.surname}</div>
                     <div>{contact.phoneNumber}</div>                     
                </div>
                
            </form>
        );
    });
    return <div className="list">{renderContactList}</div>
        

};

export default ContactList;