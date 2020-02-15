import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

const headerItems = [
  {
    text: 'Home',
    link: 'home-page',
  },
  {
    text: 'Products',
    link: 'products-page',
  },
  {
    text: 'Services',
    link: 'services-page',
  },
  {
    text: 'Prices',
    link: 'prices-page',
  }]

const footerItems = [
  {
    text: 'FAQ',
    link: 'faq-page',
  },
  {
    text: 'About',
    link: 'about-page',
  },
  {
    text: 'Reviews',
    link: 'reviews-page',
  },
  {
    text: 'Contacts',
    link: 'contacts-page',
  }]

const text = 'CRA | 2020'

function App () {
  return (
    <div>
      <Header items={headerItems}/>
      <Content/>
      <Footer menu1={headerItems} menu2={footerItems} text={text}/>
    </div>
  )
}

export default App
