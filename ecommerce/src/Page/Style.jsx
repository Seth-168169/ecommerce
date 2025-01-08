import React from "react";

function Home () {
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
                          <a href="styles.html" className="item-anchor active">
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
  <div className="site-banner">
    <div className="banner-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="breadcrumb-area padding-large">
              <h1 className="page-title">HTML Elements</h1>
              <div className="breadcum-items">
                <span className="item">
                  <a href="index.html">Home /</a>
                </span>
                <span className="item">Styles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="padding-large no-padding-top">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2>Sample Heading 2</h2>
          <p>
            <strong>This is Heading 2.</strong> Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="col-md-4">
          <h3>Sample Heading 3</h3>
          <p>
            <strong>This is Heading 3.</strong> Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="col-md-4">
          <h4>Sample Heading 4</h4>
          <p>
            <strong>This is Heading 4.</strong> Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <hr />
          <h2 className="section-title">Images and Lightboxes</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="post-image zoom-effect">
            <a href="#">
              <img src="images/post-img1.jpg" />
            </a>
          </div>
          <div className="caption text-center">Sample Image</div>
        </div>
        <div className="col-md-4">
          <figure>
            <a
              href="images/post-img2.jpg"
              rel="gallery"
              title="Clothing is your personality"
              className="gallery cboxElement"
            >
              <img src="images/post-img2.jpg" alt="Light Box" />
            </a>
            <figcaption>Opens of Lighbox Gallery</figcaption>
          </figure>
        </div>
        <div className="col-md-4">
          <div className="jarallax min-height300">
            <img src="images/post-img3.jpg" alt="" className="jarallax-img" />
          </div>
          <div className="caption">Jarallax Image</div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="section-title">Toggles and Accordions</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {" "}
                  Accordion Item #1{" "}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  {" "}
                  Accordion Item #2{" "}
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  {" "}
                  Accordion Item #3{" "}
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="padding-large">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="section-title">Tabs and Toggles</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <blockquote>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante.
            </p>
          </blockquote>
          <p>
            {" "}
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
            vitae est. Mauris placerat eleifend leo. Quisque sit amet est et
            sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
            commodo vitae, ornare sit amet, wisi. Ut felis. Praesent dapibus,
            neque id cursus faucibus, tortor neque egestas augue, eu vulputate
            magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt
            quis, accumsan porttitor, facilisis luctus, metus
          </p>
          <figure className="align-right">
            <img src="images/insta-image1.jpg" alt="post" />
          </figure>
          <p>
            <span className="dropcap">P</span>ellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
            amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
            ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit
            amet est et sapien ullamcorper pharetra. Vestibulum erat wisi,
            condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
            fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
            sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
            facilisis. Ut felis.{" "}
            <span className="highlight">Praesent dapibus, neque id cursus</span>{" "}
            faucibus, tortor neque egestas augue, eu vulputate magna eros eu
            erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
            porttitor, facilisis luctus, metus
          </p>
          <h3>Paragraph</h3>
          <p>
            Pellentesque{" "}
            <strong>habitant morbi tristique senectus et netus et</strong>{" "}
            malesuada fames ac turpis egestas. sit amet est et sapien
            ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo
            vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
            condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
            dui. Donec non enim in turpis pulvinar facilisis.{" "}
          </p>
          <p>
            Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque
            egestas augue, eu vulputate magna eros eu erat.Vestibulum erat wisi,
            condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
            fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
            sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
            facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus,
            tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam
            erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
            facilisis luctus, metus
          </p>
          <blockquote className="pullquote-right">
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
            amet, ante.
          </blockquote>{" "}
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
          vitae est. Mauris placerat eleifend leo. <a href="#">Quisque</a> sit
          amet est et sapien ullamcorper pharetra. Vestibulum erat wisi,
          condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
          fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
          sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
          facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus,
          tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam
          erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
          facilisis luctus, metus <p />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>Unordered List</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetuer.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Vestibulum auctor dapibus neque.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Vestibulum auctor dapibus neque.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Ordered List</h3>
          <ol>
            <li>Lorem ipsum dolor sit amet consectetuer.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Vestibulum auctor dapibus neque.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Vestibulum auctor dapibus neque.</li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <hr />
          <h3>Table</h3>
          <table className="u-full-width">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dave Gamache</td>
                <td>26</td>
                <td>Male</td>
                <td>San Francisco</td>
              </tr>
              <tr>
                <td>Dwayne Johnson</td>
                <td>42</td>
                <td>Male</td>
                <td>Hayward</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <pre>
            <code>
              .some-class {"{"} background-color: red;{"}"}
            </code>
          </pre>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2 className="section-title">Tabs and Toggles</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="bootstrap-tabs">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Home
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Profile
                </button>
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Contact
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </div>
              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="accordion" id="accordionExample2">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-collapse1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse1"
                >
                  {" "}
                  Accordion Item #1{" "}
                </button>
              </h2>
              <div
                id="accordion-collapse1"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  {" "}
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{" "}
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-collapse2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse2"
                >
                  {" "}
                  Accordion Item #2{" "}
                </button>
              </h2>
              <div
                id="accordion-collapse2"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  {" "}
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{" "}
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-collapse3"
                  aria-expanded="false"
                  aria-controls="accordion-collapse3"
                >
                  {" "}
                  Accordion Item #3{" "}
                </button>
              </h2>
              <div
                id="accordion-collapse3"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  {" "}
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 padding-medium">
          <div className="button-area">
            <h3>Button Sizes</h3>
            <button type="button" className="btn btn-small">
              small
            </button>
            <button type="button" className="btn btn-medium">
              medium
            </button>
            <button type="button" className="btn btn-large">
              large
            </button>
            <hr />
            <h3>Button Styles</h3>
            <button type="button" className="btn btn-outline-dark">
              Outline Dark
            </button>
            <button type="button" className="btn btn-outline-light">
              Outline Light
            </button>
            <button type="button" className="btn btn-outline-accent">
              Outline Accent
            </button>
            <button type="button" className="btn btn-outline-primary btn-pill">
              Outline Primary
            </button>
            <button type="button" className="btn btn-rounded">
              Rounded
            </button>
            <button type="button" className="btn btn-pill">
              Pill
            </button>
            <hr />
            <h3>Button Colors</h3>
            <button type="button" className="btn btn-accent">
              Accent
            </button>
            <button type="button" className="btn btn-grey">
              Grey
            </button>
            <button type="button" className="btn btn-dark">
              Dark
            </button>
            <button type="button" className="btn btn-primary">
              Primary
            </button>
            <h3>Extra Large Button</h3>
            <button className="btn btn-outline-dark btn-pill btn-xlarge btn-full">
              Extra Large Full Width Button
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2>Forms</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h1>Heading</h1>
          <h2>Heading</h2>
          <h3>Heading</h3>
          <h4>Heading</h4>
          <h5>Heading</h5>
          <h6>Heading</h6>
          <p>The base type is 15px over 1.6 line height (24px)</p>
          <strong>Bolded</strong>
          <em>Italicized</em>
          <a>Colored</a>
          <u>Underlined</u>
        </div>
        <div className="col-md-6">
          <form>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="exampleEmailInput">Your email</label>
                <input
                  className="u-full-width"
                  type="email"
                  placeholder="test@mailbox.com"
                  id="exampleEmailInput"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="exampleRecipientInput">
                  Reason for contacting
                </label>
                <select className="u-full-width" id="exampleRecipientInput">
                  <option value="Option 1">Questions</option>
                  <option value="Option 2">Admiration</option>
                  <option value="Option 3">Can I get your number?</option>
                </select>
              </div>
            </div>
            <label htmlFor="exampleMessage">Message</label>
            <textarea
              className="u-full-width"
              placeholder="Hi Dave …"
              id="exampleMessage"
              defaultValue={""}
            />
            <label className="example-send-yourself-copy">
              <input type="checkbox" />
              <span className="label-body">Send a copy to yourself</span>
            </label>
            <input
              className="btn btn-medium btn-dark btn-pill"
              type="submit"
              defaultValue="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
  <hr />
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
export default Style;