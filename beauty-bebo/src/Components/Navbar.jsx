import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        {/* Navbar TopBar */}
        <div id="container">
          <img
            src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"
            alt="Invalid"
          />
          <div id="nksearchdiv">
            <div>
              <input
                id="nksearch"
                type="search"
                placeholder="Enter Your Search"
              />
            </div>
            <div id="icondiv">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div id="nklastdiv">
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-user"></i>
            <li className="nav-item">
              <div>"My Account"</div>
              <div className="sub-items-mycart">
                <div className="sub-list">
                  <ul>
                    <li>Login</li>
                    <li>Registration</li>
                  </ul>
                </div>
              </div>
            </li>
          </div>
        </div>

        {/* Navbar BottomBar */}
        <div id="navThird">
          <ul className="sub-items" id="navThirdList">
            {/* <!-- Items --> */}
            <li className="nav-item">
              MAKEUP
              <span className="liIcon">
                <i className="fa-solid fa-angle-down"></i>
              </span>
              {/* <!-- Sub-Items --> */}
              <div className="sub-items cat1">
                <div className="sub-list">
                  <ul>
                    <li>
                      <strong>FACE</strong>
                    </li>
                    <li>BB Cream</li>
                    <li>Blush</li>
                    <li>Bronzer</li>
                    <li>CC Cream</li>
                    <li>Contour</li>
                    <li>Concealer</li>
                    <li>Compact & Powder</li>
                    <li>Foundation</li>
                    <li>Highlighters</li>
                    <li>Makeup Kits</li>
                    <li>Makeup Remover</li>
                    <li>Setting Spray </li>
                  </ul>

                  <ul>
                    <li>
                      <strong>EYE</strong>
                    </li>
                    <li>Contact Lenses</li>
                    <li>Eye Kit</li>
                    <li>Eyeliner</li>
                    <li>Eye Shadow</li>
                    <li>Eye Primer</li>
                    <li>Eye-Palettes</li>
                    <li>Eye Makeup Remover</li>
                    <li>Eye Brow Enhancers</li>
                    <li>False Eyelashes</li>
                    <li>Kajal</li>
                    <li>Mascara</li>
                    <li>Under Eye Concealer</li>
                  </ul>
                  <ul>
                    <li>
                      <strong>LIPS</strong>
                    </li>
                    <li>Lipstick</li>
                    <li>Liquid Lipstick</li>
                    <li>Lip Liner</li>
                    <li>Lip Gloss</li>
                    <li>Lip Balm</li>
                    <li>Lip Crayon</li>
                    <li>Lip Stain</li>
                    <li>Lip Plumper</li>
                  </ul>
                  <ul>
                    <li>
                      <strong>NAILS</strong>
                    </li>
                    <li>Manicure & Pedicure Kits</li>
                    <li>Nail Polish</li>
                    <li>Nail Care</li>
                    <li>Nail Polish Sets</li>
                    <li>Nail Art Kits</li>
                    <li>Eye-Palettes</li>
                    <li>Nail Polish Remover</li>
                  </ul>
                  <ul>
                    <li>
                      <strong>TOOLS BRUSHES</strong>
                    </li>
                    <li>Blush Brush</li>
                    <li>Eyelash Curlers</li>
                    <li>Eye Brush</li>
                    <li>Face Brush</li>
                    <li>Lip Brush</li>
                    <li>Makeup Pouches</li>
                    <li>Mirrors</li>
                    <li>Sponges & Applicators</li>
                    <li>Sharpeners</li>
                    <li>Tweezers </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              SKIN
              {/* <!-- sub-items --> */}
              <span className="liIcon">
                <i className="fa-solid fa-angle-down"></i>
              </span>
              <div className="sub-items">
                <div className="sub-list">
                  <ul>
                    <li>
                      <strong>EYE CARE</strong>
                    </li>
                    <li>Dark Circles</li>
                    <li>Eye Contour Care</li>
                    <li>Eye Cream</li>
                    <li>Eye Masks</li>
                    <li>Eye Serums</li>
                    <li>Puffiness</li>
                    <li>Under Eye Creams</li>
                    <li>Under Eye Wrinkles</li>
                  </ul>

                  <ul>
                    <li>
                      <strong>FACE CARE</strong>
                    </li>
                    <li>Anti- Ageing Creams</li>
                    <li>Bleach Creams</li>
                    <li>Brightening Cream</li>
                    <li>Face Wash</li>
                    <li>Facial Wipes</li>
                    <li>Face Oil</li>
                    <li>Face Cleansers</li>
                    <li>Facial Kits</li>
                    <li>Face Tools</li>
                    <li>Moisturizer</li>
                    <li>Mask & Peels</li>
                    <li>Serum</li>
                    <li>Toner & Astringents</li>
                  </ul>

                  <ul>
                    <li>
                      <strong>BODY CARE</strong>
                    </li>
                    <li>All Cream</li>
                    <li>Body Moisturizers</li>
                    <li>Brightening Cream</li>
                    <li>Body Toners</li>
                    <li>Body Sun Care</li>
                    <li>Brightening Lotion</li>
                    <li>Dark Circles & Wrinkles</li>
                    <li>Day Cream</li>
                    <li>Foot Cream</li>
                    <li>Hair Remover Cream</li>
                    <li>Hand Creams</li>
                    <li>Hands & Feet</li>
                    <li>Kits & Combos</li>
                    <li>Night Cream</li>
                    <li>Neck Creams</li>
                  </ul>
                </div>
                <div className="sub-img">
                  <img
                    src="https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className="nav-item">
              HAIR
              {/* <!-- sub-items --> */}
              <span className="liIcon">
                <i className="fa-solid fa-angle-down"></i>
              </span>
              <div className="sub-items">
                <div className="sub-list">
                  <ul>
                    <li>
                      <strong> HAIR CARE</strong>
                    </li>
                    <li>Color Protection</li>
                    <li>Foundation</li>
                    <li>Dandruff</li>
                    <li>Dry Shampoo</li>
                    <li>Gels & Waxes</li>
                    <li>Hair Spray</li>
                    <li>Hair Color/ Dye</li>
                    <li>Hair Creams & Masks </li>
                    <li>Hair Styling</li>
                    <li>Hairfall & Thinning </li>
                    <li>Straighteners</li>
                  </ul>
                  <ul>
                    <li>
                      <strong>HAIR LOSS</strong>
                    </li>
                    <li>Conditioner</li>
                    <li>Hair Oil</li>
                    <li>Hair Serum</li>
                    <li>Hair Growth Solutions</li>
                    <li>Shampoo</li>
                  </ul>
                </div>
                <div className="sub-img">
                  <img
                    src="https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>

            <li className="nav-item">
              PERSONAL CARE
              <span className="liIcon">
                <i className="fa-solid fa-angle-down"></i>
              </span>
              <div className="sub-items">
                <div className="sub-list">
                  <ul>
                    <li>
                      <strong>BATH & BODY</strong>
                    </li>
                    <li>Body Cleansers</li>
                    <li>Body Massage Oil</li>
                    <li>Body Wash</li>
                    <li>Creams</li>
                    <li>Essential Oils</li>
                    <li>Foot Cream</li>
                    <li>Scrubs & Exfoliants</li>
                    <li>Ubtan & Face Packs</li>
                  </ul>

                  <ul>
                    <li>
                      <strong>BATHING ACCESSORIES</strong>
                    </li>
                    <li>Bath Brushes</li>
                    <li>Loofahs</li>
                    <li>Shower Caps</li>
                    <li>Sponges</li>
                    <li>Facial Peelsty</li>
                  </ul>

                  <ul>
                    <li>BATH & SHOWER</li>
                    <li>Body Soaps</li>
                    <li>Shower Gel</li>
                  </ul>
                </div>
                <div className="sub-img">
                  <img
                    src="https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className="nav-item">
              MOM & BABY CARE
              <span className="liIcon">
                <i className="fa-solid fa-angle-down"></i>
              </span>
              {/* <!-- sub-items --> */}
              <div className="sub-items">
                <div className="sub-list">
                  <ul>
                    <li>BABY CARE</li>
                    <li>Diapers</li>
                    <li>Lotions & Creams</li>
                    <li>Oils</li>
                    <li>Powder</li>
                    <li>Shampoo</li>
                    <li>Soaps</li>
                    <li>Sterilizer & Cleaners</li>
                    <li>Rash Cream</li>
                    <li>Wipes</li>
                  </ul>

                  <ul>
                    <li>
                      <strong>MOM CARE</strong>
                    </li>
                    <li>Lotions & Creams</li>
                    <li>Personal Care</li>
                  </ul>
                </div>
                <div className="sub-img">
                  <img
                    src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className="nav-item">
              FRAGRANCE
              {/* <!-- sub-items --> */}
              <div className="sub-items-fragrance">
                <div className="sub-list">
                  <ul>
                    <li>Perfumes</li>
                    <li>>Deodorants roll ons</li>
                    <li>>Body Mist/Spray</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul className="sub-items" id="navThirdList">
            <li
              className="nav-item"
              style={{ color: "white", cursor: "pointer" }}
            >
              <i className="fa-solid fa-bag-shopping"></i>
              MY CART
              {/* <!-- sub-items --> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
