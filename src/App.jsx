import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const items = [{
  text: 'Home',
  link: 'home-page'
}, {
  text: 'Products',
  link: 'prod-page'
}, {
  text: 'Services',
  link: 'serv-page'
}, {
  text: 'Prices',
  link: 'price-page'
}, {
  text: 'Contacts',
  link: 'contact-page'
}];


function App() {
  return (
    <div className="App">
      <Header items={items}/>
      <Content />
      <Footer items={items}/>
    </div>
  );
}

export default App;
