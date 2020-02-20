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

function App () {

  const buttonClicked = name => console.log('CLICKED!' + name)

  const countChanges = value => {
    console.log('changed!' + value)
    setTotalCount(value)
  }

  const [totalCount, setTotalCount] = useState(c1 + c2)

  const plus = () => setTotalCount(c => c + 1)

  const minus = () => setTotalCount(c => c -1)


  return (
    <div>
      <Header items={headerItems}/>
      <Content bc={buttonClicked}/>
      Total: {totalCount}
      <Counter count={c1} plus={plus} minus={minus}/>
      <Counter count={c2} plus={plus} minus={minus}/>
      <Footer menu1={headerItems} menu2={footerItems} text={text}/>
    </div>
  )
}

export default App
