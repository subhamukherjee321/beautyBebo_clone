import React from 'react';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <>
        <Navbar />
      <div id="container">
        <div>
          <img
            src="https://www.beautybebo.com/pub/media/blue_heaven.jpg"
            height="240"
            width="1225"
            alt="banner"
          />
        </div>
        <div>
          <h2 id="arrivalHeading">NEW ARRIVALS!</h2>
          <div id="newArrivals">
            <div id="innerBox">
              {newArrivals.map((item) => {
                return (
                  <div key={item.id}>
                    <Link to="/product">
                      <div
                        id="productImg}
                        onClick={() => handleClick(item)}
                      >
                        <img src={item.imgURL} alt="product-image" />
                      </div>
                    </Link>
                    <div>
                      <p>{item.name}</p>
                      <div>
                        <img
                          src="https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png"
                          width="70"
                          height="20"
                          alt=""
                        />
                      </div>
                      <strike id="strikePrice}>{item.strikePrice}</strike>
                      <span id="price}>{item.price}</span>
                      <span id="discount}>
                        {Math.ceil(
                          ((item.strikePrice - item.price) / item.strikePrice) *
                          100
                        )}
                        % off
                      </span>
                    </div>
                    <div id="cartBtn}>
                      <button onClick={() => { handleaddtocart(item) }} >
                        <i className="fa-solid fa-basket-shopping"></i> Add To
                        Cart
                      </button>
                      <span id="wishlist}>
                        <i className="fa-solid fa-heart"></i>
                      </span>
                    </div>
                    <span id="quickView}>
                      <i className="fa-solid fa-eye"></i>
                    </span>
                  </div>
                );
              })}
              {newArrivals.map((item) => {
                return (
                  <div key={item.id}>
                    <Link to="/product">
                      <div
                        id="productImg}
                        onClick={() => handleClick(item)}
                      >
                        <img src={item.imgURL} alt="product-image" />
                      </div>
                    </Link>
                    <div>
                      <p>{item.name}</p>
                      <div>
                        <img
                          src="https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png"
                          width="70"
                          height="20"
                          alt=""
                        />
                      </div>
                      <strike id="strikePrice}>{item.strikePrice}</strike>
                      <span id="price}>{item.price}</span>
                      <span id="discount}>
                        {Math.ceil(
                          ((item.strikePrice - item.price) / item.strikePrice) *
                          100
                        )}
                        % off
                      </span>
                    </div>
                    <div id="cartBtn}>
                      <button onClick={() => { handleaddtocart(item) }}>
                        <i className="fa-solid fa-basket-shopping"></i> Add To
                        Cart
                      </button>
                      <span id="wishlist}>
                        <i className="fa-solid fa-heart"></i>
                      </span>
                    </div>
                    <span id="quickView}>
                      <i className="fa-solid fa-eye"></i>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id="banner}>
          <div>
            <img
              src="https://www.beautybebo.com/pub/media/mega-menu/beeone.jpg"
              alt="banner"
            />
          </div>
          <div>
            <img
              src="https://www.beautybebo.com/pub/media/mega-menu/lotus.jpg"
              alt="banner"
            />
          </div>
        </div>
        <div>
          <ul id="cats}>
            <li
              className={`${catId == "" ? styles.active : ""}`}
              onClick={() => handlecat("", "makeup")}
            >
              <img
                src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png"
                alt=""
              />
              <p style={{ color: catId == "" ? "white" : "" }}>Makeup</p>
            </li>
            {cats.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => handlecat(item.id, item.name)}
                  className={`${catId == item.id ? styles.active : ""}`}
                >
                  <img src={item.imgURL} alt="category" />
                  <p style={{ color: catId == item.id ? "white" : "gray" }}>
                    {item.name}
                  </p>
                </li>
              );
            })}
          </ul>
          <div id="catProductsSection}>
            {catProducts.map((item) => {
              return (
                <div key={item.id}>
                  <Link to="/product">
                    <div id="productImg} onClick={() => handleClick(item)}>
                      <img src={item.imgURL} alt="product-image" />
                    </div>
                  </Link>
                  <div>
                    <p>{item.name}</p>
                    <div>
                      <img
                        src="https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png"
                        width="70"
                        height="20"
                        alt=""
                      />
                    </div>
                    <strike id="strikePrice}>{item.strikePrice}</strike>
                    <span id="price}>{item.price}</span>
                    <span id="discount}>
                      {Math.ceil(
                        ((item.strikePrice - item.price) / item.strikePrice) * 100
                      )}
                      % off
                    </span>
                  </div>
                  <div id="cartBtn}>
                    <button onClick={() => { handleaddtocart(item) }}>
                      <i className="fa-solid fa-basket-shopping"></i> Add To Cart
                    </button>
                    <span id="wishlist}>
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <img
            src="https://www.beautybebo.com/pub/media/mega-menu/homepage.jpg"
            height="240"
            width="1225"
            alt="banner"
          />
        </div>
        <div id="sections}>
          <div>
            <h2>best seller</h2>
            <div>
              {bestSeller.map((item) => {
                return (
                  <div key={item.id} id="innerSection}>
                    <Link to="/product">
                      <div id="innerImg} onClick={() => handleClick(item)}>
                        <img src={item.imgURL} alt="product-image" />
                      </div>
                    </Link>
                    <div>
                      <p>{item.name}</p>
                      <div>
                        <img
                          src="https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png"
                          width="70"
                          height="20"
                          alt=""
                        />
                      </div>
                      <strike id="strikePrice}>{item.strikePrice}</strike>
                      <span id="price}>{item.price}</span>
                      <span id="discount}>
                        {Math.ceil(
                          ((item.strikePrice - item.price) / item.strikePrice) *
                          100
                        )}
                        % off
                      </span>
                      <div id="cartBtn}>
                        <button onClick={() => { handleaddtocart(item) }}>
                          <i className="fa-solid fa-basket-shopping"></i> Add To
                          Cart
                        </button>
                        <span id="wishlist}>
                          <i className="fa-solid fa-heart"></i>
                        </span>
                      </div>
                    </div>
                    <span id="quickViewInnerSection}>
                      <i className="fa-solid fa-eye"></i>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2>Latest Products</h2>
            <div>
              {latestProducts.map((item) => {
                return (
                  <div key={item.id} id="innerSection}>
                    <Link to="/product">
                      <div id="innerImg} onClick={() => handleClick(item)}>
                        <img src={item.imgURL} alt="product-image" />
                      </div>
                    </Link>
                    <div>
                      <p>{item.name}</p>
                      <div>
                        <img
                          src="https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png"
                          width="70"
                          height="20"
                          alt=""
                        />
                      </div>
                      <strike id="strikePrice}>{item.strikePrice}</strike>
                      <span id="price}>{item.price}</span>
                      <span id="discount}>
                        {Math.ceil(
                          ((item.strikePrice - item.price) / item.strikePrice) *
                          100
                        )}
                        % off
                      </span>
                      <div id="cartBtn}>
                        <button onClick={() => { handleaddtocart(item) }}>
                          <i className="fa-solid fa-basket-shopping"></i> Add To
                          Cart
                        </button>
                        <span id="wishlist}>
                          <i className="fa-solid fa-heart"></i>
                        </span>
                      </div>
                    </div>
                    <span id="quickViewInnerSection}>
                      <i className="fa-solid fa-eye"></i>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2>Most Viewed</h2>
            <div>
              {mostViewed.map((item) => {
                return (
                  <div key={item.id} id="innerSection}>
                    <Link to="/product">
                      <div id="innerImg} onClick={() => handleClick(item)}>
                        <img src={item.imgURL} alt="product-image" />
                      </div>
                    </Link>
                    <div>
                      <p>{item.name}</p>
                      <div>
                        <img
                          src="https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png"
                          width="70"
                          height="20"
                          alt=""
                        />
                      </div>
                      <strike id="strikePrice}>{item.strikePrice}</strike>
                      <span id="price}>{item.price}</span>
                      <span id="discount}>
                        {Math.ceil(
                          ((item.strikePrice - item.price) / item.strikePrice) *
                          100
                        )}
                        % off
                      </span>
                      <div id="cartBtn}>
                        <button onClick={() => { handleaddtocart(item) }}>
                          <i className="fa-solid fa-basket-shopping"></i> Add To
                          Cart
                        </button>
                        <span id="wishlist}>
                          <i className="fa-solid fa-heart"></i>
                        </span>
                      </div>
                    </div>
                    <span id="quickViewInnerSection}>
                      <i className="fa-solid fa-eye"></i>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <img
            src="https://www.beautybebo.com/pub/media/mega-menu/offer.gif"
            height="240"
            width="1225"
            alt="banner"
          />
        </div>
        <div id="about}>
          <h1>Welcome to Beauty Products Online Shopping India- Beauty Bebo</h1>
          <p>
            If you are looking for a flawless radiant face outlook for a special
            occasion, then we have the perfect tips for you. As you must already
            know, the conspicuous flawless outlook you want for your wedding, a
            date, a dinner party or for a modelling competition is only achieved
            through makeup.
          </p>
          <p>
            Don’t get me wrong, you are naturally beautiful, that’s obvious. But
            everyone else is, so how will you will you ensure that you are
            different? Read on for hot irresistible tips before you{" "}
            <span style={{ color: "#666666", fontWeight: "bold" }}>
              buy beauty products online!
            </span>
          </p>
          <p style={{ color: "#666666", fontWeight: "bold" }}>
            Clean Your Face First!
          </p>
          <p>
            Before embarking on any makeup, always ensure that your face is clean.
            Need some assistance in absolute cleaning? Visit our range of face
            wash beauty products online for your best pick. We have made it our
            duty to carefully select the best products for you, so that you don’t
            experience breaks and allergies after use. So now you can be confident
            that your buy cosmetic online shopping will be worth your time and
            effort. <br />
            Wondering then how you will make a choice among the spectrum
            available? Most of our products are purely natural in ingredient, so
            you can as well check for your favorite ingredient combination. If not
            sure, we are still here for you. We can help narrow down your options,
            together with you.
          </p>
          <p style={{ color: "#666666", fontWeight: "bold" }}>
            Apply a Moisturizer
          </p>
          <span style={{ color: "rgb(212, 14, 133)" }}>Read More</span>
        </div>
      </div>
      <Footer />
    </>
    );
}

export default Home;
