import HomeSlider from "./components/HomeSlider";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import PaymentIcon from "@mui/icons-material/Payment";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import HomeProduct from "./components/HomeProduct";
import { useGetProductsQuery } from "./homeApiSlice";
const Home = () => {
  const { data: pagingProduct } = useGetProductsQuery();

  return (
    <>
      <section className="hero-area">
        <div className="container mx-auto sm:px-24">
          <div className="flex flex-wrap ">
            <div className="lg:w-2/3 pr-4 pl-4 w-full custom-padding-right">
              <HomeSlider />
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 w-full">
              <div className="flex flex-wrap ">
                <div className="lg:w-full md:w-1/2 pr-4 pl-4 w-full md-custom-padding">
                  <div
                    className="hero-small-banner"
                    style={{
                      backgroundImage:
                        'url("src/assets/images/hero/slider-bnr.jpg")',
                    }}
                  >
                    <div className="content">
                      <h2>
                        <span>New line required</span>
                        iPhone 12 Pro Max
                      </h2>
                      <h3>$259.99</h3>
                    </div>
                  </div>
                  {/* End Small Banner */}
                </div>
                <div className="lg:w-full pr-4 pl-4 md:w-1/2 w-full">
                  {/* Start Small Banner */}
                  <div className="hero-small-banner style2">
                    <div className="content">
                      <h2>Weekly Sale!</h2>
                      <p>
                        Saving up to 50% off all online store items this week.
                      </p>
                      <div className="button">
                        <a
                          className="inline-block align-middle text-center select-none border text-white font-normal whitespace-no-wrap rounded mt-1 py-1 px-3 leading-normal no-underline"
                          href="product-grids.html"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Start Small Banner */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Area */}
      {/* Start Trending Product Area */}
      <section className="trending-product section" style={{ marginTop: 12 }}>
        <div className="container mx-auto sm:px-24">
          <div className="flex flex-wrap ">
            <div className="w-full">
              <div className="section-title">
                <h2>Trending Product</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap ">
            {pagingProduct?.items?.map((product, i) => (
              <HomeProduct key={i} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="banner section">
        <div className="container mx-auto sm:px-24">
          <div className="flex flex-wrap ">
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 w-full">
              <div
                className="single-banner"
                style={{
                  backgroundImage:
                    'url("src/assets/images/banner/banner-1-bg.jpg")',
                }}
              >
                <div className="content">
                  <h2>Smart Watch 2.0</h2>
                  <p>
                    Space Gray Aluminum Case with <br />
                    Black/Volt Real Sport Band{" "}
                  </p>
                  <div className="button">
                    <a className="inline-block align-middle text-black text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 w-full">
              <div
                className="single-banner custom-responsive-margin"
                style={{
                  backgroundImage:
                    'url("src/assets/images/banner/banner-2-bg.jpg")',
                }}
              >
                <div className="content">
                  <h2>Smart Headphone</h2>
                  <p>
                    Lorem ipsum dolor sit amet, <br />
                    eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="button">
                    <a
                      href="product-grids.html"
                      className="inline-block align-middle text-black text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Area */}
      {/* Start Shipping Info */}
      <section className="shipping-info">
        <div className="container mx-auto sm:px-24">
          <ul>
            <li>
              <div className="media-icon">
                <LocalShippingIcon color="primary" fontSize="large" />
              </div>
              <div className="flex-1">
                <h5>Free Shipping</h5>
                <span>On order over $99</span>
              </div>
            </li>
            {/* Money Return */}
            <li>
              <div className="media-icon">
                <HelpCenterIcon color="primary" fontSize="large" />
              </div>
              <div className="flex-1">
                <h5>24/7 Support.</h5>
                <span>Live Chat Or Call.</span>
              </div>
            </li>
            {/* Support 24/7 */}
            <li>
              <div className="media-icon">
                <PaymentIcon color="primary" fontSize="large" />
              </div>
              <div className="flex-1">
                <h5>Online Payment.</h5>
                <span>Secure Payment Services.</span>
              </div>
            </li>
            {/* Safe Payment */}
            <li>
              <div className="media-icon">
                <ReplayCircleFilledIcon color="primary" fontSize="large" />
              </div>
              <div className="flex-1">
                <h5>Easy Return.</h5>
                <span>Hassle Free Shopping.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <a href="#" className="scroll-top">
        <ArrowSmallUpIcon />
      </a>
    </>
  );
};

export default Home;
