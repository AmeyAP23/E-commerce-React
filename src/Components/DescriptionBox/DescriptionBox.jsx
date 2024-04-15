import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descritption-navigator">
            <div className="description-nav-box">
                Description
            </div>
            <div className="description-nav-box fade">
                Reviews (122)
            </div>

        </div>
        <div className="descriptionbox-description">
            <p>
            An ecommerce website is a website that allows you to buy and sell tangible goods, digital products, or services online. Trade, be it barter exchange or the buying and selling of goods and services, has been prevalent for centuries. No one can be self-sufficient
            </p>
            <p>
            Small eCommerce website: A small eCommerce website (10 to 100 products) with a more advanced design and additional features, such as product reviews and ratings, social media integration, and payment gateway integration, can cost between ₹25,000 to ₹75,000
            </p>
        </div>

    </div>
  )
}

export default DescriptionBox