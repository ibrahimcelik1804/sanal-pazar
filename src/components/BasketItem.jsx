import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../redux/actions/basketActions";

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="rounded-2 bg-white d-flex justify-content-between align-items-center p-4 text-black mb-5 ">
      <div className="d-flex align-items-center gap-3">
        <img width={60} hight={60} src={item.image} />
        <h4>
          <span>{item.make}</span>
          <span>{item.model}</span>
        </h4>
        <h4 className="text-success">{item.price} ₺ </h4>
      </div>
      <div className="d-flex align-items-center gap-2  ">
        <p className="m-0">Miktar: {item.amount}</p>
        <button
          onClick={() => dispatch(updateItem(item))}
          className="btn btn-sm btn-primary "
        >
          +
        </button>
        <button onClick={()=> dispatch(deleteItem(item.id)) } className="btn btn-sm btn-danger ">X</button>
      </div>
    </div>
  );
};

export default BasketItem;
