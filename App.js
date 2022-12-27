import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people,setPeople] = useState(data);
  
  return ( 
  <>
    <h1>Birthday Reminder</h1>
    <main>
      <section className='container'>
        <h3>{people.length} have Birthdays today!!</h3>
        <List people={people}/>
        <button onClick={()=>setPeople([])}>
          clear all
        </button>
      </section>
      
    </main>
  </>
  );
}
export default App;
