import React from "react";
import "./index.css"; // You can create a CSS file for styling
import Header from "../Header"

function Home() {
  return (
    <div className="homepage">
      <Header/>
      <section className="hero">
        <h1>Welcome to Nandhi Farms</h1>
        <p>Get fresh and pure milk delivered to your doorstep daily.</p>
        <button>Order Now</button><br/>
      </section>

      <section className="featured-products">
        <div className="product-card">
          <img className="product-logo" src="https://res.cloudinary.com/dxx7ni6cl/image/upload/v1692544532/4393855_1232_m2a6ku.jpg" alt="Product 1" />
          <h3>Organic Milk</h3>
          <p>Fresh and organic milk from local farms.</p>
        </div>

        <div className="product-card">
          <img className="product-logo" src="https://res.cloudinary.com/dxx7ni6cl/image/upload/v1692545982/healthy-food-ingredients-black-table_1_pwe5ye.jpg" alt="Product 2" />
          <h3>Nourishing Delights</h3>
          <p>Farm-fresh meats and eggs, sourced just for you</p>
        </div>

        <div className="product-card">
          <img className="product-logo"  src="https://res.cloudinary.com/dxx7ni6cl/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1692547993/different-types-of-dairy-products-royalty-free-image-1568741374_mqhhdb.jpg" alt="Product 3" />
          <h3>Dairy Delights</h3>
          <p>A variety of dairy products to complement your meals.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Milk Daily. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
