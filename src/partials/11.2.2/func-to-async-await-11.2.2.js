// import axios from 'axios';

const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
const getContacts = async () => {
  const res = await fetch(`${BASE_URL}/contacts`);
  return res.json();
};
getContacts().then(console.log);

// GET -> /contacts/:id
const getContactById = async id => {
  const res = await fetch(`${BASE_URL}/contacts/${id}`);
  return res.json();
};
getContactById(7).then(console.log);
console.log(getContactById(7));
// POST -> /contacts

const createContact = contact => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  return fetch(`${BASE_URL}/contacts`, options).then(response =>
    response.json()
  );
};

// PUT -> /contacts/:id
const updateContact = newContact => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(newContact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  return fetch(`${BASE_URL}/contacts/${newContact.id}`, options).then(
    response => response.json()
  );
};

// DELETE -> /contacts/:id
const deleteContact = id => {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/contacts/${id}`, options).then(response =>
    response.json()
  );
};
