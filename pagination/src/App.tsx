import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState<number>(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const selectPageHandler=(id:number)=>{
    if(id>=1 && id<=products.length/10 && id !==page) 
setPage(id)
  }
  return (
    <>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((product: any) => {
            return (
              <span className="products__single" key={product.id}>
                <img src={product.thumbnail} alt="dfdf" />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span onClick={()=>selectPageHandler(page-1)}>⬅️</span>
          {[...Array(products.length / 10)].map((_, index) => {
            return <span onClick={()=>selectPageHandler(index+1)} key={index}>{index + 1}</span>;
          })}
          <span onClick={()=>selectPageHandler(page+1)}>▶️</span>
        </div>
      )}
    </>
  );
}

export default App;
