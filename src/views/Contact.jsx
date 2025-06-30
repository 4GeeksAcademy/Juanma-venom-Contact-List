import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard";
import { Link } from "react-router-dom";

const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, []);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Lista de Contactos</h2>
                <Link to="/add" className="btn btn-success">Agregar Contacto</Link>
            </div>
            {store.contacts.length === 0 ? (
                <p>No hay contactos disponibles.</p>
            ) : (
                store.contacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                ))
            )}
        </div>
    );
};

export default Contact;
