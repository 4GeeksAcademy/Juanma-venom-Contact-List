const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            getContacts: async () => {
                try {
                    const resp = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/my_super_agenda");
                    const data = await resp.json();
                    setStore({ contacts: data });
                } catch (err) {
                    console.error("Error loading contacts", err);
                }
            },
            addContact: async (contact) => {
                try {
                    contact.agenda_slug = "my_super_agenda";
                    await fetch("https://playground.4geeks.com/apis/fake/contact/", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(contact)
                    });
                    getActions().getContacts();
                } catch (err) {
                    console.error("Error adding contact", err);
                }
            },
            updateContact: async (contactId, contact) => {
                try {
                    contact.agenda_slug = "my_super_agenda";
                    await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(contact)
                    });
                    getActions().getContacts();
                } catch (err) {
                    console.error("Error updating contact", err);
                }
            },
            deleteContact: async (contactId) => {
                try {
                    await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
                        method: "DELETE"
                    });
                    getActions().getContacts();
                } catch (err) {
                    console.error("Error deleting contact", err);
                }
            }
        }
    };
};

export default getState;
