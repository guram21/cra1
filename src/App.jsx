import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Counter from './Counter'

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

const c1 = 0, c2 = 0
const tc = c1 + c2

function App () {

  const buttonClicked = name => console.log('CLICKED!' + name)

  const countChanges = value => {
    console.log('changed!' + value)
    setTotalCount(value)
  }

  const [totalCount, setTotalCount] = useState(tc)

  return (
    <div>
      <Header items={headerItems}/>
      <Content bc={buttonClicked}/>
      Total: {totalCount}
      <Counter startCount={c1} countChanges={countChanges}/>
      <Counter startCount={c2} countChanges={countChanges}/>
      <Footer menu1={headerItems} menu2={footerItems} text={text}/>
    </div>
  )
}

export default App
