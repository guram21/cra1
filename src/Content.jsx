import React from 'react';

function Content() {

  const clickButtonHandler = (value) => {
    console.log('Clicked! ' + value)
  }

  const inputHandler = (event) => {
    console.log(event.target.value)
  }

  return (
    <main>
      <div className="container">
        <h1>First app</h1>
        <h1>First app</h1>
        <input type="text" onChange={inputHandler}/>

        <button onClick={() => clickButtonHandler(1)}>Add one</button>
        <button onClick={() => clickButtonHandler(2)}>Add two</button>

      </div>
    </main>
  );
}

export default Content;
