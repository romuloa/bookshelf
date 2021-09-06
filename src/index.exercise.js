import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import {Logo} from './components/logo';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';


const LoginForm = ({onSubmit, buttonText}) => {

  function handleSubmit(e) {
    
    e.preventDefault();
    const {username, password} = e.target.elements;

    onSubmit({
      username: username.value,
      password: password.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />

      <label htmlFor="password">Password</label>
      <input id="password" type="text"/>
      <button type="submit">{buttonText}</button>
    </form>
    
  )
}


function App() {

  const [openModal, setOpenModal] = useState('none');
  const close = () => setOpenModal('none');

  function login(formData) {
    console.log('login', formData);
  }

  function register(formData) {
    console.log('register', formData);
  }

  return (
    <>
      <Logo/>
      <h1>BookShelf</h1>
      <button onClick={() => setOpenModal('login')}>Login</button> 
      <button onClick={() => setOpenModal('register')}>Register</button>

      <Dialog isOpen={openModal === 'login'}>
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText="Login"/>
        <button onClick={close}>Close</button>
      </Dialog>

      <Dialog isOpen={openModal === 'register'}>
        <h3>Register</h3>
        <LoginForm onSubmit={register} buttonText="Login"/>
        <button onClick={close}>Close</button>
      </Dialog>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
