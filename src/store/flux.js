const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: []
    },
    actions: {
      getContacts: () => {
        const store = getStore();
        // Simula carga inicial
        if (!store.contacts.length) {
          setStore({ contacts: [] });
        }
      },

      addContact: (contact) => {
        const store = getStore();
        const newContact = { ...contact, id: Date.now() };
        setStore({ contacts: [...store.contacts, newContact] });
      },

      updateContact: (id, updatedContact) => {
        const store = getStore();
        const updatedContacts = store.contacts.map((contact) =>
          contact.id === parseInt(id)
            ? { ...updatedContact, id: parseInt(id) }
            : contact
        );
        setStore({ contacts: updatedContacts });
      },

      deleteContact: (id) => {
        const store = getStore();
        const filteredContacts = store.contacts.filter(
          (contact) => contact.id !== parseInt(id)
        );
        setStore({ contacts: filteredContacts });
      }
    }
  };
};

export default getState;
