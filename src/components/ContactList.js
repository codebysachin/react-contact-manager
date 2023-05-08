import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    // handler for deleting contacts, simply pass id to getContactId function from props defined in App.js
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    // iterate over contacts array and create ContactCard for each contact
    // pass contact and deleteContactHandler function from props to ContactCard
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        );
    });

    // return contact list
    return (
        <div classame="ui celled list">
            {renderContactList}
        </div>
    );
};

export default ContactList;