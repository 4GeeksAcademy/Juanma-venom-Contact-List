import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContact = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();

    const isEdit = !!id;

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        if (isEdit) {
            const contact = store.contacts.find((c) => c.id === parseInt(id));
            if (contact) {
                setFormData(contact);
            }
        }
    }, [id, store.contacts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            actions.updateContact(id, formData);
        } else {
            actions.addContact(formData);
        }
        navigate("/");
    };

    return (
        <div className="container mt-4">
            <h2>{isEdit ? "Editar Contacto" : "Agregar Contacto"}</h2>
            <form onSubmit={handleSubmit}>
                <input name="full_name" value={formData.full_name} onChange={handleChange} className="form-control my-2" placeholder="Nombre Completo" required />
                <input name="email" value={formData.email} onChange={handleChange} className="form-control my-2" placeholder="Email" required />
                <input name="phone" value={formData.phone} onChange={handleChange} className="form-control my-2" placeholder="Teléfono" required />
                <input name="address" value={formData.address} onChange={handleChange} className="form-control my-2" placeholder="Dirección" required />
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    );
};

export default AddContact;
