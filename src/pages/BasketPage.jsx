import React, { useEffect } from "react";
import { getBasket } from "../redux/actions/basketActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const state = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBasket());
  }, []);

  const totalPrice = state.basket.reduce(
    (total, i) => total + i.amount * i.price,
    0
  );

  return (
    <div className="row px-4 py-5">
      {state.isLoading && <Loading />}
      {state.isError && (
        <p className="text-center my-5 fw-bold">
          Üzgünüz bir hata oluştu :{state.isError}
        </p>
      )}
      <div className="col-md-8">
        {state.basket.map((item) => (
          <BasketItem item={item} key={item.id} />
        ))}
      </div>
      <div className="col md-4">
        <div className="bg-white p-5 text-black rounded">
          <h5 className="text-center">Toplam Tutar: <span className="text-success">{totalPrice} ₺</span> </h5>
          <button className="w-100 bg-dark my-2 text-white">
            Alışverişi Tamamla{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
