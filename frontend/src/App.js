import data from './data';
function App() {
  return (
    <div>
      <header className="App-header">
        <a href="/">BookWiser</a>
      </header>
      <main>
        <h1> Featured Products</h1>
        <div className="products">
          {data.products.map(
            (
              product //here product is the function
            ) => (
              <div className="product" key={product.slug}>
                <img src={product.image} alt={product.name} />
                <div class="product-info">
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
