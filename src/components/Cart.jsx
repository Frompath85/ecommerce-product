import React ,{useState} from 'react'
import './Styles/Cart.css'
import IconButton from '../assets/icon-cart-button.svg'
import { useCart } from './DataContext'

export default function Cart() {

    const { panier, updatePanier } = useCart()
    const [count, SetCount] = useState(0)
   
  return (
    <section className='Cart'>
      <div className='CartSum'>
        <span className='CartSigne' onClick={()=> 
            count-1 < 0 ? SetCount(0): SetCount(count - 1)}>-</span> 
        <span className='Sum'>{count}</span>
        <span className='CartSigne' onClick={()=>SetCount( count + 1 )}>+</span>
      </div>
      <button className='AddToCart' 
        onClick={()=>{ updatePanier(count+panier)} } 
      type='button'><img src={IconButton} alt="icone de panier" className='Panier'/> Add to cart</button>
    </section>
  )
}