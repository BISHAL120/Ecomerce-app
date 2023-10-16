import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import myContext from "../context/data/myContext";
import { AiOutlineMinus } from "react-icons/ai";
import "./Product.css";

const Product = () => {
  const Tsharts = useContext(myContext);
  const { id } = useParams();
  const productId = parseInt(id);

  const product = Tsharts.find((tshart) => tshart.id === productId);
  const [mainimg, setMainimg] = useState(product.img.img1);
  const [discount, setDiscount] = useState(20);
  const [size, setSize] = useState(false);
  const [size2, setSize2] = useState(false);
  const [size3, setSize3] = useState(false);
  const [size4, setSize4] = useState(false);
  const [number, setNumber] = useState(0);

  const Discount = product.price * (discount / 100);
  let DiscountPrice = product.price - Discount;
  const sizeReset = () => {
    setSize(false);
    setSize2(false);
    setSize3(false);
    setSize4(false);
  };
  // const sizeReset2 = () => {
  //   if (size) {
  //     setSize(false);
  //   } else if (size2) {
  //     setSize2(false);
  //   } else if (size3) {
  //     setSize3(false);
  //   } else if (size4) {
  //     setSize4(false);
  //   }
  // };
  const minus = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div>
      <div className="container-xxl">
        <div className="row py-4">
          <div className="product">
            <div className="product-img-div">
              <div className="other-img">
                <div
                  onClick={() => setMainimg(product.img.img1)}
                  className="oth-img"
                >
                  <img src={product.img.img1} alt="images varient" />
                </div>
                <div
                  onClick={() => setMainimg(product.img.img2)}
                  className="oth-img"
                >
                  <img src={product.img.img2} alt="images varient" />
                </div>
                <div
                  onClick={() => setMainimg(product.img.img3)}
                  className="oth-img"
                >
                  <img src={product.img.img3} alt="images varient" />
                </div>
              </div>
              <div className="main-img">
                <img src={mainimg} alt="" />
              </div>
            </div>
            <div className="product-detail-div">
              <div className="heading">
                <h1>{product.tittle}</h1>
              </div>
              <div>
                <p>Ratting: {product.rating}/5</p>
              </div>
              <div className="price">
                <div className="curentPrice">
                  <p>${DiscountPrice.toFixed(2)}</p>
                </div>
                <div className="PreviousPrice">
                  <p>${product.price}</p>
                </div>
                <div className="discount">
                  <p>-{discount}%</p>
                </div>
              </div>
              <div className="description">
                <p>{product.discription}</p>
              </div>
              <div className="size">
                <p>Choose Size</p>
                <div className="choseSize">
                  <div
                    onClick={() => {
                      sizeReset();
                      setSize(!size);
                    }}
                    className={`${size ? "sizeActice" : ""}`}
                  >
                    <p>Small</p>
                  </div>
                  <div
                    onClick={() => {
                      sizeReset();
                      setSize2(!size2);
                    }}
                    className={`${size2 ? "sizeActice" : ""}`}
                  >
                    <p>Medium</p>
                  </div>
                  <div
                    onClick={() => {
                      sizeReset();
                      setSize3(!size3);
                    }}
                    className={`${size3 ? "sizeActice" : ""}`}
                  >
                    <p>Large</p>
                  </div>
                  <div
                    onClick={() => {
                      sizeReset();
                      setSize4(!size4);
                    }}
                    className={`${size4 ? "sizeActice" : ""}`}
                  >
                    <p>X-Large</p>
                  </div>
                </div>
              </div>
              <div className="Quantity-cart">
                <div className="quantity">
                  <div className=" d-flex gap-4 justify-content-between ">
                    <button onClick={() => minus()} className="minus">
                      <AiOutlineMinus />
                    </button>
                    <p className="number">{number}</p>
                    <button
                      onClick={() => setNumber(number + 1)}
                      className="plus"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="AddTocart">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
