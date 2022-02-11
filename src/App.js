import React from 'react';
import Contact from './components/Contact';

import './style.css';

const contactInfo = [
  {
    name: 'Emmanuel',
    email: 'emmanuel@email.com',
    phone: '552312354',
    isDeletable: true,
  },
  {
    name: 'Johana',
    email: 'johana@email.com',
    phone: '92034902',
    isDeletable: false,
  },
  {
    name: 'Lucas',
    email: 'lucas@email.com',
    phone: '234983499',
    isDeletable: true,
  },
  {
    name: 'Marie',
    email: 'marie@email.com',
    phone: '238942384',
    isDeletable: false,
  },
  {
    name: 'Pedro',
    email: 'pedro@email.com',
    phone: '934584875',
    isDeletable: true,
  },
];

export default function App() {
  return (
    <div>
      <h1>My contacts list 📱</h1>

      <div id="container">
        {/* 2. map contactInfo array here and display <Contact /> for each entry in the array*/}
        {contactInfo.map((contact, index) => (
          <Contact
            key={index}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            isDeletable={contact.isDeletable}
          />
        ))}
      </div>
    </div>
  );
}
