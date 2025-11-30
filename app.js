import React, { useState } from "https://esm.sh/react@19";
import ReactDOM from "https://esm.sh/react-dom@19/client";

function OurHeader() {
  return React.createElement('h1', { className: 'special' }, 'Our Amazing App Header');
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
    React.createElement('button', { onClick: decreaseLikeHandler }, 'Decrease likes'),
    React.createElement('h2', null, `This page has been liked ${likeCount} times.`)
  );
}

function TimeArea() {
  const [theTime, setTheTime] = useState(new Date().toLocaleString());

  setTimeout(function () {
    setTheTime(new Date().toLocaleString());
  }, 1000);

  return React.createElement('p', null, `The current time is ${theTime}.`);
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
      React.createElement('input', { value: name, onChange: e => setName(e.target.value), placeholder: 'Name' }),
      React.createElement('input', { value: species, onChange: e => setSpecies(e.target.value), placeholder: 'species' }),
      React.createElement('input', { value: age, onChange: e => setAge(e.target.value), placeholder: 'age in years' }),
      React.createElement('button', null, 'Add Pet')
    )
  );
}

function OurApp() {
  const [pets, setPets] = useState([
    { name: 'Meowsalot', species: 'cat', age: '5', id: 123456789 },
    { name: 'Barksalot', species: 'dog', age: '3', id: 987654321 },
    { name: 'Fluffy', species: 'rabbit', age: '2', id: 123123123 },
    { name: 'Purrsloud', species: 'cat', age: '1', id: 456456456 },
    { name: 'Paws', species: 'dog', age: '6', id: 789789789 }
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