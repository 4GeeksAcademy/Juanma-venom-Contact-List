import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../components/ContactCard.jsx";
import { Link } from "react-router-dom";

const Contact = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (actions.getContacts) {
      actions.getContacts();
    }
  }, [actions]);

  if (!store.contacts) return <div>Cargando contactos...</div>;

  return (
    <div>
      <h1>Contactos</h1>
      <Link to="/add-contact">Agregar Contacto</Link>
      <div>
        {store.contacts.length === 0 ? (
          <p>No hay contactos</p>
        ) : (
          store.contacts.map((contact) => <ContactCard key={contact.id} contact={contact} />)
        )}
      </div>
    </div>
  );
};

export default Contact;
