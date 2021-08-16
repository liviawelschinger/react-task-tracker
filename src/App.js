import './App.css';
import React from 'react'
import Header from './components/Header'
import Task from './components/Tasks'


const App = () => {
  return (
      <div className='container'>
        <Header title='Task Tracker'/>
        <Task/>
      </div>
    )
}

export default App
