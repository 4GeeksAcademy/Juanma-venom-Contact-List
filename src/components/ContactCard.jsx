import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5>{contact.full_name}</h5>
          <p>Email: {contact.email}</p>
          <p>Teléfono: {contact.phone}</p>
          <p>Dirección: {contact.address}</p>
        </div>
        <div>
          <Link to={`/edit/${contact.id}`} className="btn btn-warning me-2">
            Editar
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => setConfirmDelete(true)}
          >
            Eliminar
          </button>
        </div>
      </div>

      {confirmDelete && (
        <div className="card-footer">
          <p>¿Estás seguro que quieres eliminar este contacto?</p>
          <button
            className="btn btn-sm btn-danger me-2"
            onClick={() => {
              if (actions.deleteContact) {
                actions.deleteContact(contact.id);
              }
              setConfirmDelete(false);
            }}
          >
            Sí
          </button>
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => setConfirmDelete(false)}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
