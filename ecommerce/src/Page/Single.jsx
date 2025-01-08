import React from "react";

function Single () {
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
  <div className="preloader-wrapper">
    <div className="preloader"></div>
  </div>
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
                Let's talk! <strong>+57 444 11 00 35</strong>
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
                  <a href="cart.html">
                    <i className="icon icon-shopping-cart" />
                  </a>
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
                  <img src="images/main-logo.png" alt="logo" />
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
                        className="item-anchor d-flex align-item-center"
                        data-effect="Shop"
                      >
                        Shop
                        <i className="icon icon-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="shop.html" className="item-anchor">
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
                          <a
                            href="single-post.html"
                            className="item-anchor active"
                          >
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
  <section className="site-banner padding-small bg-light-grey">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumbs">
            <span className="item">
              <a href="index.html">Home /</a>
            </span>
            <span className="item">
              <a href="blog.html">Blog /</a>
            </span>
            <span className="item">Single post</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="main-content d-flex flex-wrap padding-large">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="post-meta">
            <span className="post-date">Feb 22, 2023</span> /{" "}
            <a href="blog.html" className="blog-categories">
              Fashion
            </a>
          </div>
          <h1 className="page-title">
            Top 10 Casual Look Ideas To Dress Up Your Kids
          </h1>
          <div className="feature-image">
            <img
              src="images/single-image2.jpg"
              alt="post image"
              className="jarallax-img"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="post-content">
            <p>
              <strong>
                There are shortcuts to happiness, and dressing is one of them.
              </strong>
            </p>
            <p>
              Fashion is like dreaming with your feet! Lorem ipsum dolor sit
              amet consectetur adipisicing elit sed do eisusmod tempor incidunt
              ut elit et.
            </p>
            <blockquote>
              Sit suscipit tortor turpis sed fringilla lectus facilisis amet.
              Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id
              aliquam neque, ut vivamus sit imperdiet enim, lacus, vel.
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam, <a href="single-product.html">Casual Product</a>{" "}
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              <strong>Are you amazed ?</strong>
            </p>
            <ul style={{ listStyleType: "disc" }} className="inner-list">
              <li>
                Blandit mauris libero condimentum commodo sociis convallis sit.
              </li>
              <li>Magna diam amet justo sed vel dolor et volutpat integer.</li>
              <li>Laculis sit sapien hac odio elementum egestas neque.</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam,
              <span className="highlight">quis nostrud exercitation</span>{" "}
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="post-tags">
              <div className="block-tag">
                <ul className="list-unstyled d-flex">
                  <li>
                    <a href="#" className="btn btn-dark btn-small btn-rounded">
                      Fashion
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-dark btn-small btn-rounded">
                      Hoodie
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-dark btn-small btn-rounded">
                      Casual
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="social-links d-flex margin-small">
              <div className="element-title">Share:</div>
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
                    <i className="icon icon-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon icon-youtube-play" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="single-post-navigation">
            <hr />
            <div className="row post-navigation d-flex flex-wrap align-items-center justify-content-between">
              <a
                itemProp="url"
                className="col-md-6 post-prev d-flex"
                href="#"
                title="Previous Post"
              >
                <span>Previous</span>
                <h3 className="page-nav-title">
                  Latest trends of wearing street wears supremely
                </h3>
              </a>
              <a
                itemProp="url"
                className="col-md-6 post-next d-flex"
                href="#"
                title="Next Post"
              >
                <span>Next</span>
                <h3 className="page-nav-title">
                  Types of comfortable clothes ideas for women
                </h3>
              </a>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="post-comment padding-large bg-light-grey">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="comments-wrap">
            <h3>Comments</h3>
            <div className="comment-list">
              <article className="d-flex">
                <img
                  src="images/review-image1.jpg"
                  alt="default"
                  className="commentor-image"
                />
                <div className="author-post">
                  <div className="comment-meta">
                    <h4 className="meta-name">Rachel Ross</h4>
                    <span className="meta-date">Aug 20,2022</span>
                    <small className="comments-reply">
                      <a href="#">
                        <i className="icon icon-reply" />
                        Reply{" "}
                      </a>
                    </small>
                  </div>
                  <p>
                    Tristique tempis condimentum diam done ullancomroer sit
                    element henddg sit he consequert.Tristique tempis
                    condimentum diam done ullancomroer sit element henddg sit he
                    consequert.
                  </p>
                </div>
              </article>
              <div className="child-comments">
                <article className="d-flex">
                  <img
                    src="images/review-image2.jpg"
                    alt="sara"
                    className="commentor-image"
                  />
                  <div className="author-post">
                    <div className="comment-meta">
                      <h4 className="meta-name">Jane Park</h4>
                      <span className="meta-date">Sep 3,2022</span>
                      <small className="comments-reply">
                        <a href="#">
                          <i className="icon icon-reply" />
                          Reply{" "}
                        </a>
                      </small>
                    </div>
                    <p>
                      Lorem diam done ullancomroer sit element henddg sit he
                      consequert.Tristique tempis condimentum diam done
                      ullancomroer sit element henddg sit he consequert.
                    </p>
                  </div>
                </article>
              </div>
              <article className="d-flex">
                <img
                  src="images/review-image1.jpg"
                  alt="default"
                  className="commentor-image"
                />
                <div className="author-post">
                  <div className="comment-meta">
                    <h4 className="meta-name">Rachel Ross</h4>
                    <span className="meta-date">Aug 20,2022</span>
                    <small className="comments-reply">
                      <a href="#">
                        <i className="icon icon-reply" />
                        Reply{" "}
                      </a>
                    </small>
                  </div>
                  <p>
                    Tristique tempis condimentum diam done ullancomroer sit
                    element henddg sit he consequert.Tristique tempis
                    condimentum diam done ullancomroer sit element henddg sit he
                    consequert.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="comment-respond">
            <h3>Leave a Comment</h3>
            <form method="post" className="form-group">
              <input
                className="u-full-width"
                type="text"
                name="author"
                id="author"
                placeholder="Your full name"
              />
              <input
                className="u-full-width"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail Address"
              />
              <textarea
                className="u-full-width"
                id="comment"
                name="comment"
                placeholder="Write your comment here"
                rows={20}
                defaultValue={""}
              />
              <label className="example-send-yourself-copy">
                <input type="checkbox" />
                <span className="label-body">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </span>
              </label>
              <button
                type="submit"
                name="submit"
                className="btn btn-dark btn-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="latest-blog" className="padding-large">
    <div className="container">
      <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
        <h2 className="section-title">Related Posts</h2>
        <div className="btn-wrap align-right">
          <a href="#" className="d-flex align-items-center">
            Read All Articles <i className="icon icon icon-arrow-io" />
          </a>
        </div>
      </div>
      <div className="row d-flex flex-wrap">
        <article className="col-md-4 post-item">
          <div className="image-holder zoom-effect">
            <a href="#">
              <img
                src="images/post-img1.jpg"
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
                <a href="#">top 10 casual look ideas to dress up your kids</a>
              </h3>
              <a href="blog.html" className="blog-categories">
                Fashion
              </a>
            </div>
          </div>
        </article>
        <article className="col-md-4 post-item">
          <div className="image-holder zoom-effect">
            <a href="#">
              <img
                src="images/post-img2.jpg"
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
                <a href="#">Latest trends of wearing street wears supremely</a>
              </h3>
              <a href="blog.html" className="blog-categories">
                Trending
              </a>
            </div>
          </div>
        </article>
        <article className="col-md-4 post-item">
          <div className="image-holder zoom-effect">
            <a href="#">
              <img
                src="images/post-img3.jpg"
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
                <a href="#">types of comfortable clothes ideas for women</a>
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
        <img src="images/brand1.png" alt="phone" className="brand-image" />
        <img src="images/brand2.png" alt="phone" className="brand-image" />
        <img src="images/brand3.png" alt="phone" className="brand-image" />
        <img src="images/brand4.png" alt="phone" className="brand-image" />
        <img src="images/brand5.png" alt="phone" className="brand-image" />
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
              src="images/insta-image1.jpg"
              alt="instagram"
              className="insta-image"
            />
            <i className="icon icon-instagram" />
          </figure>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <figure className="zoom-effect">
            <img
              src="images/insta-image2.jpg"
              alt="instagram"
              className="insta-image"
            />
            <i className="icon icon-instagram" />
          </figure>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <figure className="zoom-effect">
            <img
              src="images/insta-image3.jpg"
              alt="instagram"
              className="insta-image"
            />
            <i className="icon icon-instagram" />
          </figure>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <figure className="zoom-effect">
            <img
              src="images/insta-image4.jpg"
              alt="instagram"
              className="insta-image"
            />
            <i className="icon icon-instagram" />
          </figure>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <figure className="zoom-effect">
            <img
              src="images/insta-image5.jpg"
              alt="instagram"
              className="insta-image"
            />
            <i className="icon icon-instagram" />
          </figure>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <figure className="zoom-effect">
            <img
              src="images/insta-image6.jpg"
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
            <img src="images/visa-icon.jpg" alt="visa" />
            <img src="images/mastercard.png" alt="mastercard" />
            <img src="images/american-express.jpg" alt="american-express" />
          </div>
        </div>
      </div>
    </div>
  </div>
</>
)
}
export default Single;