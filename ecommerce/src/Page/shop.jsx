import React from "react";
import {Link} from 'react-router-dom';
function Shop () {
    return (
        <>
        
  <title>Ultras - Clothing Store eCommerce Store HTML Website Template</title>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="author" content="" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <link rel="stylesheet" type="text/css" href="css/normalize.css" />
  <link rel="stylesheet" type="text/css" href="icomoon/icomoon.css" />
  <link
    rel="stylesheet"
    type="text/css"
    media="all"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="stylesheet" type="text/css" href="css/vendor.css" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  {/* script
    ================================================== */}
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
          <a href="shop.html" title="Men Jackets">
            Men Jackets
          </a>
        </li>
        <li className="cat-list-item">
          <a href="shop.html" title="Fashion">
            Fashion
          </a>
        </li>
        <li className="cat-list-item">
          <a href="shop.html" title="Casual Wears">
            Casual Wears
          </a>
        </li>
        <li className="cat-list-item">
          <a href="shop.html" title="Women">
            Women
          </a>
        </li>
        <li className="cat-list-item">
          <a href="shop.html" title="Trending">
            Trending
          </a>
        </li>
        <li className="cat-list-item">
          <a href="shop.html" title="Hoodie">
            Hoodie
          </a>
        </li>
        <li className="cat-list-item">
          <a href="shop.html" title="Kids">
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
              <p>Free shipping on a purchase value of $200</p>
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
                        className="item-anchor d-flex align-item-center"
                        data-effect="Home"
                      >
                        Home
                        <i className="icon icon-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="index.html" className="item-anchor">
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
                        href="shop.html"
                        className="item-anchor active d-flex align-item-center"
                        data-effect="Shop"
                      >
                        Shop
                        <i className="icon icon-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="shop.html" className="item-anchor active">
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
                          <a href="cart.html" className="item-anchor">
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
                        href="/cart"
                        className="item-anchor"
                        data-effect="Contact"
                      >
                        Cart
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
  
  <section
    className="site-banner jarallax min-height300 padding-large"
    style={{
      background: "url(./assets/images/hero-image.jpg) no-repeat",
      backgroundPosition: "top"
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="page-title">Shop page</h1>
          <div className="breadcrumbs">
            <span className="item">
              <a href="index.html">Home /</a>
            </span>
            <span className="item">Shop</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="shopify-grid padding-large">
    <div className="container">
      <div className="row">
        <section id="selling-products" className="col-md-9 product-store">
          <div className="container">
            <ul className="tabs list-unstyled">
              <li data-tab-target="#all" className="active tab">
                All
              </li>
              <li data-tab-target="#shoes" className="tab">
                Shoes
              </li>
              <li data-tab-target="#tshirts" className="tab">
                Tshirts
              </li>
              <li data-tab-target="#pants" className="tab">
                Pants
              </li>
              <li data-tab-target="#hoodie" className="tab">
                Hoodie
              </li>
              <li data-tab-target="#outer" className="tab">
                Outer
              </li>
              <li data-tab-target="#jackets" className="tab">
                Jackets
              </li>
              <li data-tab-target="#accessories" className="tab">
                Accessories
              </li>
            </ul>
            <div className="tab-content">
              <div id="all" data-tab-content="" className="active">
                <div className="row d-flex flex-wrap">
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products1.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Half sleeve T-shirt</a>
                      </h3>
                      <div className="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products2.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Stylish Grey T-shirt</a>
                      </h3>
                      <div className="item-price text-primary">$35.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products3.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Silk White Shirt</a>
                      </h3>
                      <div className="item-price text-primary">$35.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products4.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Grunge Hoodie</a>
                      </h3>
                      <div className="item-price text-primary">$30.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products5.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">
                          Full sleeve Jeans jacket
                        </a>
                      </h3>
                      <div className="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products6.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Grey Check Coat</a>
                      </h3>
                      <div className="item-price text-primary">$30.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products7.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Long Sleeve T-shirt</a>
                      </h3>
                      <div className="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products8.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Half Sleeve T-shirt</a>
                      </h3>
                      <div className="item-price text-primary">$35.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products13.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Orange white Nike</a>
                      </h3>
                      <div className="item-price text-primary">$55.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products14.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Running Shoe</a>
                      </h3>
                      <div className="item-price text-primary">$65.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products15.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Tennis Shoe</a>
                      </h3>
                      <div className="item-price text-primary">$80.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products16.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Nike Brand Shoe</a>
                      </h3>
                      <div className="item-price text-primary">$65.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="shoes" data-tab-content="">
                <div className="row d-flex flex-wrap">
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products13.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Orange white Nike</a>
                      </h3>
                      <div className="item-price text-primary">$55.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products14.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Running Shoe</a>
                      </h3>
                      <div className="item-price text-primary">$65.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products15.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Tennis Shoe</a>
                      </h3>
                      <div className="item-price text-primary">$80.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products16.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Nike Brand Shoe</a>
                      </h3>
                      <div className="item-price text-primary">$65.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tshirts" data-tab-content="">
                <div className="row d-flex flex-wrap">
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products3.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Silk White Shirt</a>
                      </h3>
                      <div className="item-price text-primary">$35.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products8.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">White Half T-shirt</a>
                      </h3>
                      <div className="item-price text-primary">$30.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products5.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Ghee Half T-shirt</a>
                      </h3>
                      <div className="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products7.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Long Sleeve T-shirt</a>
                      </h3>
                      <div className="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="pants" data-tab-content="">
                <div className="row d-flex flex-wrap">
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products1.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Half sleeve T-shirt</a>
                      </h3>
                      <div className="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products4.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Grunge Hoodie</a>
                      </h3>
                      <div className="item-price text-primary">$30.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products7.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Long Sleeve T-shirt</a>
                      </h3>
                      <div className="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products2.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Stylish Grey Pant</a>
                      </h3>
                      <div className="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="hoodie" data-tab-content="">
                <div className="row d-flex flex-wrap">
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products17.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">White Hoodie</a>
                      </h3>
                      <div className="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products4.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Navy Blue Hoodie</a>
                      </h3>
                      <div className="item-price text-primary">$45.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products18.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Dark Green Hoodie</a>
                      </h3>
                      <div className="item-price text-primary">$35.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="outer" data-tab-content="">
                <div className="row d-flex flex-wrap">
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products3.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Silk White Shirt</a>
                      </h3>
                      <div className="item-price text-primary">$ 35.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products4.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Grunge Hoodie</a>
                      </h3>
                      <div className="item-price text-primary">$ 30.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products6.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Grey Check Coat</a>
                      </h3>
                      <div className="item-price text-primary">$ 30.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products7.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Long Sleeve T-shirt</a>
                      </h3>
                      <div className="item-price text-primary">$ 40.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="jackets" data-tab-content="">
                <div className="row d-flex flex-wrap">
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products5.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">
                          Full Sleeve Jeans Jacket
                        </a>
                      </h3>
                      <div className="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products2.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Stylish Grey Coat</a>
                      </h3>
                      <div className="item-price text-primary">$35.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products6.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Grey Check Coat</a>
                      </h3>
                      <div className="item-price text-primary">$35.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="accessories" data-tab-content="">
                <div className="row d-flex flex-wrap">
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products19.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Stylish Women Bag</a>
                      </h3>
                      <div className="item-price text-primary">$35.00</div>
                    </div>
                  </div>
                  <div className="product-item col-lg-4 col-md-6 col-sm-6">
                    <div className="image-holder">
                      <img
                        src="./assets/images/selling-products20.jpg"
                        alt="Books"
                        className="product-image"
                      />
                    </div>
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
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Stylish Gadgets</a>
                      </h3>
                      <div className="item-price text-primary">$30.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav
              className="navigation paging-navigation text-center padding-medium"
              role="navigation"
            >
              <div className="pagination loop-pagination d-flex justify-content-center">
                <a
                  href="#"
                  className="pagination-arrow d-flex align-items-center"
                >
                  <i className="icon icon-arrow-left" />
                </a>
                <span aria-current="page" className="page-numbers current">
                  1
                </span>
                <a className="page-numbers" href="#">
                  2
                </a>
                <a className="page-numbers" href="#">
                  3
                </a>
                <a
                  href="#"
                  className="pagination-arrow d-flex align-items-center"
                >
                  <i className="icon icon-arrow-right" />
                </a>
              </div>
            </nav>
          </div>
        </section>
        <aside className="col-md-3">
          <div className="sidebar">
            <div className="widgets widget-menu">
              <div className="widget-search-bar">
                <form role="search" method="get" className="d-flex">
                  <input
                    className="search-field"
                    placeholder="Search"
                    type="text"
                  />
                  <button className="btn btn-dark">
                    <i className="icon icon-search" />
                  </button>
                </form>
              </div>
            </div>
            <div className="widgets widget-product-tags">
              <h5 className="widget-title">Tags</h5>
              <ul className="product-tags sidebar-list list-unstyled">
                <li className="tags-item">
                  <a href="">White</a>
                </li>
                <li className="tags-item">
                  <a href="">Cheap</a>
                </li>
                <li className="tags-item">
                  <a href="">Branded</a>
                </li>
                <li className="tags-item">
                  <a href="">Modern</a>
                </li>
                <li className="tags-item">
                  <a href="">Simple</a>
                </li>
              </ul>
            </div>
            <div className="widgets widget-product-brands">
              <h5 className="widget-title">Brands</h5>
              <ul className="product-tags sidebar-list list-unstyled">
                <li className="tags-item">
                  <a href="">Nike</a>
                </li>
                <li className="tags-item">
                  <a href="">Adidas</a>
                </li>
                <li className="tags-item">
                  <a href="">Puma</a>
                </li>
                <li className="tags-item">
                  <a href="">Spike</a>
                </li>
              </ul>
            </div>
            <div className="widgets widget-price-filter">
              <h5 className="widget-title">Filter By Price</h5>
              <ul className="product-tags sidebar-list list-unstyled">
                <li className="tags-item">
                  <a href="">Less than $10</a>
                </li>
                <li className="tags-item">
                  <a href="">$10- $20</a>
                </li>
                <li className="tags-item">
                  <a href="">$20- $30</a>
                </li>
                <li className="tags-item">
                  <a href="">$30- $40</a>
                </li>
                <li className="tags-item">
                  <a href="">$40- $50</a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
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
                  <a href="/about">About us</a>
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
                  <a href="contact.html">Cart</a>
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
export default Shop;