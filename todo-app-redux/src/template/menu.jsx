import React from "react";

export default (props) => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
    <div className='navbar-header'>
      <a href="/" className='navbar-brand'>
        <i className='fa fa-calendar-check-o'></i> TodoApp
      </a>
    </div>
 
    <ul className='nav'>
      <li className='nav-item'>
        <a className='nav-link navbar-brand' href="#/todos">Tarefas</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link navbar-brand' href="#/about">Sobre</a>
      </li>
    </ul>
  </nav>
  );
};
