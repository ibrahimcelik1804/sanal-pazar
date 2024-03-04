import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItem } from "../redux/actions/basketActions";

const Card = ({ product }) => {
  const state = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  //egerki ekrana bastığımız eleman spette var ise miktarı artır butonu koy yoksa
  // sepete koy butonu  bunun için spette olup olmadığını kontrol et

  const found = state.basket.find((item) => item.id === product.id);
  // ürün sepette varsa miktarını bir artır yoksa sepete ekle
  const handleClick = () => {
    if (found) {
      dispatch(updateItem(found));
    } else {
      dispatch(addToBasket(product));
    }
  };

  return (
    <div className="card pt-4" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-center">
        <img src={product.image} width={200} height={200} className="rounded" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>
          <span className="fw-bold me-2">{product.make}</span>
          <span>{product.model}</span>
        </p>
        <p className="d-flex flex-column">
          {product.specs.map((spec, i) => (
            <span key={i}>{spec}</span>
          ))}
        </p>
        <button onClick={handleClick} className="w-100 bg-black text-white">
          {found ? `Miktarı Artır(${found.amount})` : "Sepete Ekle"}
        </button>
      </div>
    </div>
  );
};

export default Card;
