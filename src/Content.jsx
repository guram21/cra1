import React from 'react'

function Content (props) {

  let name = 'Initial '

  const clickButtonHandler = value => {
    props.bc(name + value)
    console.log('Clicked! ' + name)
  }

  const inputHandler = event => {
    name = event.target.value
    console.log(event.target.value)
  }

  return (
    <main>
      <div className="container">
        <h1>Create React App</h1>
        {name}
        <input type="text" onChange={inputHandler}/>
        <button onClick={() => clickButtonHandler(1)}>Add one</button>
        <button onClick={() => clickButtonHandler(2)}>Add two</button>
        <p>
          React is a user interface framework developed by Facebook.<br/>
          It has a quickly growing developer adoption rate and<br/>
          was ranked as the most loved language or technology in the<br/>
          <a
            href="https://insights.stackoverflow.com/survey/2019#most-loved-dreaded-and-wanted">
            2019 Stackoverflow developer survey
          </a>.<br/>
        </p>
      </div>
    </main>
  )
}

export default Content
