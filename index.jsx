const title = 'la maison jungle';
const cartProducts = [
  {name: 'Monstera', price: 8},
  {name: 'Lierre', price: 10},
  {name: 'Bouquet de fleurs', price: 15}
]

function Banner () {
  return <div>
    <h1>{title.toUpperCase()}</h1>
    <Cart />
  </div>
}

function Cart () {
  const total = cartProducts[0].price + cartProducts[1].price + cartProducts[2].price;

  return <div>
    <h2>Cart</h2>
    <ul>
      {cartProducts.map(product => {
        return <li>{product.name} = {product.price} €</li>
      })}
    </ul>
    <p>TOTAL = {total} €</p>
  </div>
}

ReactDOM.render(
  <Banner />,
  document.getElementById('root')
)
