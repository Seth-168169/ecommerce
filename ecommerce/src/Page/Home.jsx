import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() { // Removed 'addToCart' parameter from here
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // To show loading indicator
  const [error, setError] = useState(null);      // For error handling
  const [selectedCategory, setSelectedCategory] = useState('all');  // To track selected category
  const [cart, setCart] = useState([]);          // Cart state to store items

  useEffect(() => {
    // Function to fetch data
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        
        // Log the fetched data to the console
        console.log('Fetched Products:', data);

        // Set the products data to state
        setProducts(data);
        setFilteredProducts(data); // Initially show all products
        setLoading(false);   // Hide loading after data is fetched
      } catch (err) {
        setError(err.message);  // Set error state if any error occurs
        setLoading(false);      // Hide loading even on error
      }
    };

    fetchProducts();  // Call the function to fetch data
  }, []);  // Empty dependency array ensures the effect runs only once

  // Filter products based on selected category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProducts(products); // Show all products if 'all' is selected
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered); // Filter products by selected category
    }
  };

  // Function to add item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add the selected product to the cart
    alert(`${product.title} has been added to the cart!`);
  };


    return (
        <>
   
 
  <div className="search-popup">
    <div className="search-popup-container">
      <form role="search" method="get" className="search-form" action="">
        <input
          type="search"
          id="search-form"
          className="search-field"
          placeholder="Type and press enter"
          defaultValue=""
          name="s"
        />
        <button type="submit" className="search-submit">
          <a href="#">
            <i className="icon icon-search" />
          </a>
        </button>
      </form>
      <h5 className="cat-list-title">Browse Categories</h5>
      <ul className="cat-list">
        <li className="cat-list-item">
          <a href="/shop" title="Men Jackets">
            Men Jackets
          </a>
        </li>
        <li className="cat-list-item">
          <a href="/shop" title="Fashion">
            Fashion
          </a>
        </li>
        <li className="cat-list-item">
          <a href="/shop" title="Casual Wears">
            Casual Wears
          </a>
        </li>
        <li className="cat-list-item">
          <a href="/shop" title="Women">
            Women
          </a>
        </li>
        <li className="cat-list-item">
          <a href="/shop" title="Trending">
            Trending
          </a>
        </li>
        <li className="cat-list-item">
          <a href="/shop" title="Hoodie">
            Hoodie
          </a>
        </li>
        <li className="cat-list-item">
          <a href="/shop" title="Kids">
            Kids
          </a>
        </li>
      </ul>
    </div>
  </div>
  <header id="header">
    <div id="header-wrap">
      <nav className="secondary-nav border-bottom">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4 header-contact">
              <p>
                Call <strong>0972862924</strong>
              </p>
            </div>
            <div className="col-md-4 shipping-purchase text-center">
              <p>Free shipping on a purchase value of $1500</p>
            </div>
            <div className="col-md-4 col-sm-12 user-items">
              <ul className="d-flex justify-content-end list-unstyled">
                <li>
                  <a href="login.html">
                    <i className="icon icon-user" />
                  </a>
                </li>
                <li>
                  <Link href="/cart">
                    <i className="icon icon-shopping-cart" />
                  </Link>
                </li>
                <li>
                  <a href="wishlist.html">
                    <i className="icon icon-heart" />
                  </a>
                </li>
                <li className="user-items search-item pe-3">
                  <a href="#" className="search-button">
                    <i className="icon icon-search" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className="primary-nav padding-small">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-2 col-md-2">
              <div className="main-logo">
                <a href="index.html">
                  <img src="./assets/images/main-logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-10 col-md-10">
              <div className="navbar">
                <div
                  id="main-nav"
                  className="stellarnav d-flex justify-content-end right"
                >
                  <ul className="menu-list">
                    <li className="menu-item has-sub">
                      <a
                        href="index.html"
                        className="item-anchor active d-flex align-item-center"
                        data-effect="Home"
                      >
                        Home
                        <i className="icon icon-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="index.html" className="item-anchor active">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="home2.html" className="item-anchor">
                            Home v2<span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="about.html"
                        className="item-anchor"
                        data-effect="About"    
                      >
                        About
                      </a>
                    </li>
                    <li className="menu-item has-sub">
                      <a
                        href="/shop"
                        className="item-anchor d-flex align-item-center"
                        data-effect="Shop"
                      >
                        Shop
                        <i className="icon icon-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="/shop" className="item-anchor">
                            Shop
                          </a>
                        </li>
                        <li>
                          <a href="shop-slider.html" className="item-anchor">
                            Shop slider
                            <span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid.html" className="item-anchor">
                            Shop grid
                            <span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-list.html" className="item-anchor">
                            Shop list
                            <span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html" className="item-anchor">
                            Single product
                            <span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                        <li>
                          <a href="/cart" className="item-anchor">
                            Cart<span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                        <li>
                          <a href="wishlist.html" className="item-anchor">
                            Wishlist<span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                        <li>
                          <a href="checkout.html" className="item-anchor">
                            Checkout<span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item has-sub">
                      <a
                        href="#"
                        className="item-anchor d-flex align-item-center"
                        data-effect="Pages"
                      >
                        Pages
                        <i className="icon icon-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="coming-soon.html" className="item-anchor">
                            Coming soon
                            <span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                        <li>
                          <a href="login.html" className="item-anchor">
                            Login<span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                        <li>
                          <a href="faqs.html" className="item-anchor">
                            FAQs<span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                        <li>
                          <a href="styles.html" className="item-anchor">
                            Styles
                          </a>
                        </li>
                        <li>
                          <a href="thank-you.html" className="item-anchor">
                            Thankyou
                          </a>
                        </li>
                        <li>
                          <a href="error.html" className="item-anchor">
                            Error page
                            <span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item has-sub">
                      <a
                        href="blog.html"
                        className="item-anchor d-flex align-item-center"
                        data-effect="Blog"
                      >
                        Blog
                        <i className="icon icon-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="blog.html" className="item-anchor">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="blog-sidebar.html" className="item-anchor">
                            Blog with sidebar
                            <span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry.html" className="item-anchor">
                            Blog masonry
                            <span className="text-primary"> (PRO)</span>
                          </a>
                        </li>
                        <li>
                          <a href="single-post.html" className="item-anchor">
                            Single post
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="contact.html"
                        className="item-anchor"
                        data-effect="Contact"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <section id="billboard" className="overflow-hidden">
    <button className="button-prev">
      <i className="icon icon-chevron-left" />
    </button>
    <button className="button-next">
      <i className="icon icon-chevron-right" />
    </button>
    <div className="swiper main-swiper">
      <div className="swiper-wrapper">
        <div
          className="swiper-slide"
          style={{
            backgroundImage: 'url("./assets/images/banner1.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="banner-title">Summer Collection.</h2>
                  <p>
                  Wellcome to Shoppings.
                  </p>
                  <div className="btn-wrap">
                    <a
                      href="/shop"
                      className="btn btn-light btn-medium d-flex align-items-center"
                      tabIndex={0}
                    >
                      Shop it now <i className="icon icon-arrow-io" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: 'url("./assets/images/banner2.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="banner-title">Casual Collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu feugiat amet, libero ipsum enim pharetra hac.
                  </p>
                  <div className="btn-wrap">
                    <a
                      href="/shop"
                      className="btn btn-light btn-light-arrow btn-medium d-flex align-items-center"
                      tabIndex={0}
                    >
                      Shop it now <i className="icon icon-arrow-io" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
      <h1>Products</h1>
      <p>Cart: {cart.length} items</p>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {/* Category filter buttons */}
        <button onClick={() => handleCategoryChange('all')}>All</button>
        <button onClick={() => handleCategoryChange("men's clothing")}>Men's Clothing</button>
        <button onClick={() => handleCategoryChange("women's clothing")}>Women's Clothing</button>
        <button onClick={() => handleCategoryChange('jewelery')}>Jewelery</button>
        <button onClick={() => handleCategoryChange('electronics')}>Electronics</button>
      </div>
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)', // 5 items per row
          gap: '10px', // Spacing between items
          marginTop: '20px',
        }}
      >
        {/* Product list */}
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            style={{
              border: '1px solid black',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: 'center',
            }}
          >
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <img 
              src={product.image} 
              alt={product.title} 
              style={{ width: '100px', height: '100px', objectFit: 'contain' }} 
            />
            <button onClick={() => addToCart(product)} style={{ marginTop: '10px' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  <section id="testimonials" className="padding-large no-padding-bottom">
    <div className="container">
      <div className="reviews-content">
        <div className="row d-flex flex-wrap">
          <div className="col-md-2">
            <div className="review-icon">
              <i className="icon icon-right-quote" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="swiper testimonial-swiper overflow-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-detail">
                    <p>
                      “Dignissim massa diam elementum habitant fames. Id nullam
                      pellentesque nisi, eget cursus dictumst pharetra, sit.
                      Pulvinar laoreet id porttitor egestas dui urna. Porttitor
                      nibh magna dolor ultrices iaculis sit iaculis.”
                    </p>
                    <div className="author-detail">
                      <div className="name">By Maggie Rio</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-detail">
                    <p>
                      “Dignissim massa diam elementum habitant fames. Id nullam
                      pellentesque nisi, eget cursus dictumst pharetra, sit.
                      Pulvinar laoreet id porttitor egestas dui urna. Porttitor
                      nibh magna dolor ultrices iaculis sit iaculis.”
                    </p>
                    <div className="author-detail">
                      <div className="name">By John Smith</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-arrows">
              <button className="prev-button">
                <i className="icon icon-arrow-left" />
              </button>
              <button className="next-button">
                <i className="icon icon-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="flash-sales" className="product-store padding-large">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Flash sales</h2>
      </div>
      <div className="swiper product-swiper flash-sales overflow-hidden">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="product-item">
              <img
                src="./assets/images/selling-products9.jpg"
                alt="Books"
                className="product-image"
              />
              <div className="cart-concern">
                <div className="cart-button d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn-wrap cart-link d-flex align-items-center"
                  >
                    add to cart <i className="icon icon-arrow-io" />
                  </button>
                  <button
                    type="button"
                    className="view-btn tooltip
                  d-flex"
                  >
                    <i className="icon icon-screen-full" />
                    <span className="tooltip-text">Quick view</span>
                  </button>
                  <button type="button" className="wishlist-btn">
                    <i className="icon icon-heart" />
                  </button>
                </div>
              </div>
              <div className="discount">10% Off</div>
              <div className="product-detail">
                <h3 className="product-title">
                  <a href="single-product.html">Full sleeve cover shirt</a>
                </h3>
                <div className="item-price text-primary">
                  <del className="prev-price">$50.00</del>$40.00
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item">
              <img
                src="./assets/images/selling-products10.jpg"
                alt="Books"
                className="product-image"
              />
              <div className="cart-concern">
                <div className="cart-button d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn-wrap cart-link d-flex align-items-center"
                  >
                    add to cart <i className="icon icon-arrow-io" />
                  </button>
                  <button
                    type="button"
                    className="view-btn tooltip
                  d-flex"
                  >
                    <i className="icon icon-screen-full" />
                    <span className="tooltip-text">Quick view</span>
                  </button>
                  <button type="button" className="wishlist-btn">
                    <i className="icon icon-heart" />
                  </button>
                </div>
              </div>
              <div className="discount">10% Off</div>
              <div className="product-detail">
                <h3 className="product-title">
                  <a href="single-product.html">Long Sleeve T-shirt</a>
                </h3>
                <div className="item-price text-primary">
                  <del className="prev-price">$50.00</del>$40.00
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item">
              <img
                src="./assets/images/selling-products11.jpg"
                alt="Books"
                className="product-image"
              />
              <div className="cart-concern">
                <div className="cart-button d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn-wrap cart-link d-flex align-items-center"
                  >
                    add to cart <i className="icon icon-arrow-io" />
                  </button>
                  <button
                    type="button"
                    className="view-btn tooltip
                  d-flex"
                  >
                    <i className="icon icon-screen-full" />
                    <span className="tooltip-text">Quick view</span>
                  </button>
                  <button type="button" className="wishlist-btn">
                    <i className="icon icon-heart" />
                  </button>
                </div>
              </div>
              <div className="discount">10% Off</div>
              <div className="product-detail">
                <h3 className="product-title">
                  <a href="single-product.html">Grey Check Coat</a>
                </h3>
                <div className="item-price text-primary">
                  <del className="prev-price">$55.00</del>$45.00
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item">
              <img
                src="./assets/images/selling-products12.jpg"
                alt="Books"
                className="product-image"
              />
              <div className="cart-concern">
                <div className="cart-button d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn-wrap cart-link d-flex align-items-center"
                  >
                    add to cart <i className="icon icon-arrow-io" />
                  </button>
                  <button
                    type="button"
                    className="view-btn tooltip
                  d-flex"
                  >
                    <i className="icon icon-screen-full" />
                    <span className="tooltip-text">Quick view</span>
                  </button>
                  <button type="button" className="wishlist-btn">
                    <i className="icon icon-heart" />
                  </button>
                </div>
              </div>
              <div className="discount">10% Off</div>
              <div className="product-detail">
                <h3 className="product-title">
                  <a href="single-product.html">Silk White Shirt</a>
                </h3>
                <div className="item-price text-primary">
                  <del className="prev-price">$45.00</del>$35.00
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item">
              <img
                src="./assets/images/selling-products8.jpg"
                alt="Books"
                className="product-image"
              />
              <div className="cart-concern">
                <div className="cart-button d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn-wrap cart-link d-flex align-items-center"
                  >
                    add to cart <i className="icon icon-arrow-io" />
                  </button>
                  <button
                    type="button"
                    className="view-btn tooltip
                  d-flex"
                  >
                    <i className="icon icon-screen-full" />
                    <span className="tooltip-text">Quick view</span>
                  </button>
                  <button type="button" className="wishlist-btn">
                    <i className="icon icon-heart" />
                  </button>
                </div>
              </div>
              <div className="discount">10% Off</div>
              <div className="product-detail">
                <h3 className="product-title">
                  <a href="single-product.html">Blue Jeans pant</a>
                </h3>
                <div className="item-price text-primary">
                  <del className="prev-price">$45.00</del>$35.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>
  <section className="shoppify-section-banner">
    <div className="container">
      <div className="product-collection">
        <div className="left-content collection-item">
          <div className="products-thumb">
            <img
              src="./assets/images/model.jpg"
              alt="collection item"
              className="large-image image-rounded"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
            <div className="categories">Denim collection</div>
            <h3 className="item-title">The casual selection.</h3>
            <p>
              Vel non viverra ligula odio ornare turpis mauris. Odio aliquam,
              tincidunt ut vitae elit risus. Tempor egestas condimentum et ac
              rutrum dui, odio.
            </p>
            <div className="btn-wrap">
              <a href="/shop" className="d-flex align-items-center">
                shop collection <i className="icon icon-arrow-io" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="quotation" className="align-center padding-large">
    <div className="inner-content">
      <h2 className="section-title divider">Quote of the day</h2>
      <blockquote>
        <q>
          It's true, I don't like the whole cutoff-shorts-and-T-shirt look, but
          I think you can look fantastic in casual clothes.
        </q>
        <div className="author-name">- Dr. Seuss</div>
      </blockquote>
    </div>
  </section>
  <hr />
  <section id="latest-blog" className="padding-large">
    <div className="container">
      <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
        <h2 className="section-title">our Journal</h2>
        <div className="btn-wrap align-right">
          <a href="blog.html" className="d-flex align-items-center">
            Read All Articles <i className="icon icon icon-arrow-io" />
          </a>
        </div>
      </div>
      <div className="row d-flex flex-wrap">
        <article className="col-md-4 post-item">
          <div className="image-holder zoom-effect">
            <a href="single-post.html">
              <img
                src="./assets/images/post-img1.jpg"
                alt="post"
                className="post-image"
              />
            </a>
          </div>
          <div className="post-content d-flex">
            <div className="meta-date">
              <div className="meta-day text-primary">22</div>
              <div className="meta-month">Aug-2021</div>
            </div>
            <div className="post-header">
              <h3 className="post-title">
                <a href="single-post.html">
                  top 10 casual look ideas to dress up your kids
                </a>
              </h3>
              <a href="blog.html" className="blog-categories">
                Fashion
              </a>
            </div>
          </div>
        </article>
        <article className="col-md-4 post-item">
          <div className="image-holder zoom-effect">
            <a href="single-post.html">
              <img
                src="./assets/images/post-img2.jpg"
                alt="post"
                className="post-image"
              />
            </a>
          </div>
          <div className="post-content d-flex">
            <div className="meta-date">
              <div className="meta-day text-primary">25</div>
              <div className="meta-month">Aug-2021</div>
            </div>
            <div className="post-header">
              <h3 className="post-title">
                <a href="single-post.html">
                  Latest trends of wearing street wears supremely
                </a>
              </h3>
              <a href="blog.html" className="blog-categories">
                Trending
              </a>
            </div>
          </div>
        </article>
        <article className="col-md-4 post-item">
          <div className="image-holder zoom-effect">
            <a href="single-post.html">
              <img
                src="./assets/images/post-img3.jpg"
                alt="post"
                className="post-image"
              />
            </a>
          </div>
          <div className="post-content d-flex">
            <div className="meta-date">
              <div className="meta-day text-primary">28</div>
              <div className="meta-month">Aug-2021</div>
            </div>
            <div className="post-header">
              <h3 className="post-title">
                <a href="single-post.html">
                  types of comfortable clothes ideas for women
                </a>
              </h3>
              <a href="blog.html" className="blog-categories">
                Inspiration
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
  <section id="brand-collection" className="padding-medium bg-light-grey">
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between">
        <img src="./assets/images/brand1.png" alt="phone" className="brand-image" />
        <img src="./assets/images/brand2.png" alt="phone" className="brand-image" />
        <img src="./assets/images/brand3.png" alt="phone" className="brand-image" />
        <img src="./assets/images/brand4.png" alt="phone" className="brand-image" />
        <img src="./assets/images/brand5.png" alt="phone" className="brand-image" />
      </div>
    </div>
  </section>
  <section id="instagram" className="padding-large">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Follow our instagram</h2>
      </div>
      <p>
        Our official Instagram account <a href="#">@ultras</a> or{" "}
        <a href="#">#ultras_clothing</a>
      </p>
      <div className="row d-flex flex-wrap justify-content-between">
        <div className="col-lg-2 col-md-4 col-sm-6">
          <figure className="zoom-effect">
            <img
              src="./assets/images/insta-image1.jpg"
              alt="instagram"
              className="insta-image"
            />
            <i className="icon icon-instagram" />
          </figure>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <figure className="zoom-effect">
            <img
              src="./assets/images/insta-image2.jpg"
              alt="instagram"
              className="insta-image"
            />
            <i className="icon icon-instagram" />
          </figure>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <figure className="zoom-effect">
            <img
              src="./assets/images/insta-image3.jpg"
              alt="instagram"
              className="insta-image"
            />
            <i className="icon icon-instagram" />
          </figure>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <figure className="zoom-effect">
            <img
              src="./assets/images/insta-image4.jpg"
              alt="instagram"
              className="insta-image"
            />
            <i className="icon icon-instagram" />
          </figure>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <figure className="zoom-effect">
            <img
              src="./assets/images/insta-image5.jpg"
              alt="instagram"
              className="insta-image"
            />
            <i className="icon icon-instagram" />
          </figure>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <figure className="zoom-effect">
            <img
              src="./assets/images/insta-image6.jpg"
              alt="instagram"
              className="insta-image"
            />
            <i className="icon icon-instagram" />
          </figure>
        </div>
      </div>
    </div>
  </section>
  <section id="shipping-information">
    <hr />
    <div className="container">
      <div className="row d-flex flex-wrap align-items-center justify-content-between">
        <div className="col-md-3 col-sm-6">
          <div className="icon-box">
            <i className="icon icon-truck" />
            <h4 className="block-title">
              <strong>Free shipping</strong> Over $200
            </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="icon-box">
            <i className="icon icon-return" />
            <h4 className="block-title">
              <strong>Money back</strong> Return within 7 days
            </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="icon-box">
            <i className="icon icon-tags1" />
            <h4 className="block-title">
              <strong>Buy 4 get 5th</strong> 50% off
            </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="icon-box">
            <i className="icon icon-help_outline" />
            <h4 className="block-title">
              <strong>Any questions?</strong> experts are ready
            </h4>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </section>
  <footer id="footer">
    <div className="container">
      <div className="footer-menu-list">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Ultras</h5>
              <ul className="menu-list list-unstyled">
                <li className="menu-item">
                  <a href="about.html">About us</a>
                </li>
                <li className="menu-item">
                  <a href="#">Conditions </a>
                </li>
                <li className="menu-item">
                  <a href="blog.html">Our Journals</a>
                </li>
                <li className="menu-item">
                  <a href="#">Careers</a>
                </li>
                <li className="menu-item">
                  <a href="#">Affiliate Programme</a>
                </li>
                <li className="menu-item">
                  <a href="#">Ultras Press</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Customer Service</h5>
              <ul className="menu-list list-unstyled">
                <li className="menu-item">
                  <a href="faqs.html">FAQ</a>
                </li>
                <li className="menu-item">
                  <a href="contact.html">Contact</a>
                </li>
                <li className="menu-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="menu-item">
                  <a href="#">Returns &amp; Refunds</a>
                </li>
                <li className="menu-item">
                  <a href="#">Cookie Guidelines</a>
                </li>
                <li className="menu-item">
                  <a href="#">Delivery Information</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Contact Us</h5>
              <p>
                Do you have any questions or suggestions?{" "}
                <a href="#" className="email">
                  ourservices@ultras.com
                </a>
              </p>
              <p>
                Do you need assistance? Give us a call. <br />
                <strong>+57 444 11 00 35</strong>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Forever 2018</h5>
              <p>
                Cras mattis sit ornare in metus eu amet adipiscing enim.
                Ullamcorper in orci, ultrices integer eget arcu. Consectetur leo
                dignissim lacus, lacus sagittis dictumst.
              </p>
              <div className="social-links">
                <ul className="d-flex list-unstyled">
                  <li>
                    <a href="#">
                      <i className="icon icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-youtube-play" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-behance-square" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </footer>
  <div id="footer-bottom">
    <div className="container">
      <div className="d-flex align-items-center flex-wrap justify-content-between">
        <div className="copyright">
          <p>
            Freebies by{" "}
            <a href="https://templatesjungle.com/">Templates Jungle</a>{" "}
            Distributed by <a href="https://themewagon.com">ThemeWagon</a>
          </p>
        </div>
        <div className="payment-method">
          <p>Payment options :</p>
          <div className="card-wrap">
            <img src="./assets/images/visa-icon.jpg" alt="visa" />
            <img src="./assets/images/mastercard.png" alt="mastercard" />
            <img src="./assets/images/american-express.jpg" alt="american-express" />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    )
}

export default Home;