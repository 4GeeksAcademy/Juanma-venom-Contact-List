const getState = ({ getStore, getActions, setStore }) => ({
  store: {
    contacts: []
  },
  actions: {
    getContacts: () => {
      const store = getStore();
      if (store.contacts.length === 0) {
        setStore({
          contacts: [
            {
              id: 1,
              full_name: "Juan Pérez",
              email: "juan@mail.com",
              phone: "123456789",
              address: "Calle Falsa 123"
            }
          ]
        });
      }
    }
  }
});

export default getState;
