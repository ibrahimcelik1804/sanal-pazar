import axios from "axios";
import { ActionTypes } from "../actionTypes";

// asenkron thunk aksiyonu
// sepet verilerini çekip aşama aşama reducer a bildirir
export const getBasket = () => (dispatch) => {
  // reducer a verilerin yüklendiğini haber verir
  dispatch({ type: ActionTypes.SET_BASKET_LOADING });
  //verileri çekme işlemi paptık
  axios
    .get("http://localhost:3050/basket")
    // istek başarılı ise verileri reducer a aktar
    .then((res) =>
      dispatch({ type: ActionTypes.SET_BASKET, payload: res.data })
    )
    // istek başarısız olursa hatayı reducer a aktar
    .catch((err) =>
      dispatch({ type: ActionTypes.SET_BASKET_ERROR, payload: err })
    );
};

// sepete yeni eleman eklemeye yarayan yeni fonsiyon hem
// hem api'i günceller hemde store'u

export const addToBasket = (product) => (dispatch) => {
  // 1) yeni bir obje eklediğimde miktarı bir olarak ekle
  //console.log(product)
  const newProduct = { ...product, amount: 1 };
  //2) gereksiz verileri sileceğiz
  delete newProduct.specs;
  delete newProduct.color;
  delete newProduct.title;
  // api'e ürün ekle
  axios
    .post("http://localhost:3050/basket", newProduct)
    //4 store 'a yeni ürün ekle
    .then(() => {
      dispatch({ type: ActionTypes.ADD_TO_BASKET, payload: newProduct });
    });
};

// sepette olan elamanın miktarını bir artır
export const updateItem = (product) => (dispatch) => {
  axios
    .patch(`http://localhost:3050/basket/${product.id}`, {
      amount: product.amount + 1,
    })
    .then(() => {
      dispatch({
        type: ActionTypes.UPDATE_ITEM,
        payload: product.id,
      });
    });
};

export const deleteItem = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:3050/basket/${id}`)
    // api isteği başarılı olursa store dan kaldır.
    .then(() => {
      dispatch({
        type: ActionTypes.REMOVE_ITEM,
        payload: id,
      });
    });
};
