import React, { useState, useMemo } from 'react';
import './Lab3.css';

import AddressForm from './components/AddressForm';
import AddressTable from './components/AddressTable';
import SearchBar from './components/SearchBar';
import { useContacts } from './hooks/useContacts';

import { useThemeStore } from "../../store/useThemeStore";

const Lab3 = () => {
  const {
    contacts,
    editingContact,
    handleSaveContact,
    handleEditContact,
    handleDeleteContact
  } = useContacts();

  const mode = useThemeStore((state) => state.mode);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase()) ||
             contact.phone.includes(searchTerm);
    });
  }, [contacts, searchTerm]);

  return (
    <div className={`lab3-wrapper ${mode}`}>

      <div className="address-book-container">
        <h1>Address Book</h1>

        <AddressForm
          key={editingContact ? editingContact.id : 'new'}
          onSave={handleSaveContact}
          initialData={editingContact}
        />

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
        />

        <AddressTable
          contacts={filteredContacts}
          onEdit={handleEditContact}
          onDelete={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default Lab3;