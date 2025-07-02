const API_BASE = "https://assets.breatheco.de/apis/fake";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: []
    },
    actions: {
      getContacts: async () => {
        try {
          const resp = await fetch(`${API_BASE}/contact/agenda/juanma`);
          if (!resp.ok) {
            console.log("Agenda 'juanma' no encontrada. Se creará automáticamente con un contacto de ejemplo...");
            const createResp = await fetch(`${API_BASE}/contact/`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                full_name: "Contacto Inicial",
                email: "inicio@correo.com",
                agenda_slug: "juanma",
                address: "Dirección genérica",
                phone: "1234567890"
              })
            });
            if (!createResp.ok) throw new Error("No se pudo crear el contacto inicial");
            return getActions().getContacts();
          }

          const data = await resp.json();
          setStore({ contacts: data });
        } catch (error) {
          console.error("Error al obtener contactos:", error);
        }
      },

      addContact: async (newContact) => {
        try {
          const resp = await fetch(`${API_BASE}/contact/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...newContact, agenda_slug: "juanma" })
          });

          if (!resp.ok) throw new Error("No se pudo agregar el contacto");

          await getActions().getContacts();
        } catch (error) {
          console.error("Error al agregar contacto:", error);
        }
      },

      updateContact: async (id, updatedContact) => {
        try {
          const resp = await fetch(`${API_BASE}/contact/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...updatedContact, agenda_slug: "juanma" })
          });

          if (!resp.ok) throw new Error("No se pudo actualizar el contacto");

          await getActions().getContacts();
        } catch (error) {
          console.error("Error al actualizar contacto:", error);
        }
      },

      deleteContact: async (id) => {
        try {
          const resp = await fetch(`${API_BASE}/contact/${id}`, {
            method: "DELETE"
          });

          if (!resp.ok) throw new Error("No se pudo eliminar el contacto");

          await getActions().getContacts();
        } catch (error) {
          console.error("Error al eliminar contacto:", error);
        }
      }
    }
  };
};

export default getState;
