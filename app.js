import React, { useState, useEffect } from "https://esm.sh/react@19";
import ReactDOM from "https://esm.sh/react-dom@19/client";

function OurHeader() {
  return React.createElement('h1', { className: 'special' }, 'App Header');
}

function Pet(props) {
  return React.createElement('li', null, `${props.name} is a ${props.species} and is ${props.age} years old.`);
}

function Footer() {
  return React.createElement('small', null, 'Copyright Footer Text');
}

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0);

  function increaseLikeHandler() {
    setLikeCount(function (prev) {
      return prev + 1;
    });
  }

  function decreaseLikeHandler() {
    setLikeCount(function (prev) {
      if (prev > 0) return prev - 1;
      return 0;
    });
  }

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('button', { onClick: increaseLikeHandler }, 'Increase likes'),
    React.createElement('span', { style: { margin: '0 10px' } }, ''),
    React.createElement('button', { onClick: decreaseLikeHandler }, 'Decrease likes'),
    React.createElement('h2', null, `This page has been liked ${likeCount} times.`)
  );
}

function TimeArea() {
  const [theTime, setTheTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const id = setInterval(() => {
      setTheTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return React.createElement('p', { 'aria-live': 'polite' }, `The current time is ${theTime}.`);
}

function AddPetForm(props) {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.setPets(function (prev) {
      return prev.concat({ name, species, age, id: Date.now() });
    });
    setName('');
    setSpecies('');
    setAge('');
  }

  return React.createElement(
    'form',
    { onSubmit: handleSubmit },
    React.createElement(
      'fieldset',
      null,
      React.createElement('legend', null, 'Add New Pet'),
      React.createElement('input', {
        name: 'pet-name',
        'aria-label': 'Pet name',
        value: name,
        onChange: e => setName(e.target.value),
        placeholder: 'Name'
      }),
      React.createElement('input', {
        name: 'pet-species',
        'aria-label': 'Pet species',
        value: species,
        onChange: e => setSpecies(e.target.value),
        placeholder: 'species'
      }),
      React.createElement('input', {
        name: 'pet-age',
        'aria-label': 'Pet age in years',
        value: age,
        onChange: e => setAge(e.target.value),
        placeholder: 'age in years'
      }),
      React.createElement('button', null, 'Add Pet')
    )
  );
}

function OurApp() {
  const [pets, setPets] = useState([
    
  ]);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(OurHeader, null),
    React.createElement(LikeArea, null),
    React.createElement(TimeArea, null),
    React.createElement(AddPetForm, { setPets: setPets }),
    React.createElement(
      'ul',
      null,
      pets.map(function (pet) {
        return React.createElement(Pet, { name: pet.name, species: pet.species, age: pet.age, key: pet.id });
      })
    ),
    React.createElement(Footer, null)
  );
}

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(React.createElement(OurApp));