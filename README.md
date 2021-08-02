# HRnet-modal-plugin
OpenClassrooms: Convert a jQuery Library to React

# Plugin to add the most basic Modal component for HRnet project

A turnkey Modal React-component for OpenClassrooms HRnet project. It's main functionnality is to appear upon employee creation to notify the user.

## Features
- Dynamic diplay control
- Lock the webpage controls as long as the modal is shown
- Provides 2 actions: click outside & confirm

## Get started

### Download

[hrnet-modal](https://www.npmjs.com/package/hrnet-modal)

### Requirements

- React 17.0.2+

### Installation

- using npm
  `npm install hrnet-modal`

- using yarn
  `yarn add hrnet-modal`

### Usage

Import the plugin from node_modules in your React component.
The Modal requires 2 props to work: 
- `isOpen`(boolean): variable controlling the display of the modal
- `onConfirm`(function): action triggered when clicking on the 'check' icon (& triggered on clicking outside the modal if no action is provided for this action)
The Modal has 2 optionnal props: 
- `message`(string): personnalized message written on the modal
- `onClickOutside`(function): action triggered when clicking outside the modal

_ExampleComponent1.js_

```javascript
import React, { useState } from "react";
import Modal from "hrnet-modal";

const ExampleComponent1 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <div className="App">
      <div onClick={toggleModal}>
        Click here to open modal
      </div>

      <Modal isOpen={modalIsOpen} onConfirm={toggleModal}/>
    </div>
  );
}
export default ExampleComponent1;
```

_ExampleComponent2.js_

```javascript
import React, { useState } from "react";
import Modal from "hrnet-modal";

const ExampleComponent2 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  const handleClickOutsideModal = () => console.log("Oopsi, you clicked outside the modal !");

  return (
    <div className="App">
      <div onClick={toggleModal}>
        Click here to open modal
      </div>

      <Modal isOpen={modalIsOpen} onConfirm={toggleModal} message="Employee successfully created" onClickOutside={handleClickOutsideModal}/>
    </div>
  );
}
export default ExampleComponent2;
```