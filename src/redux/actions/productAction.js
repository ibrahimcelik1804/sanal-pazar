import axios from "axios";
import { ActionTypes } from "../actionTypes";

//sekron aksiyon tek görevibasit bir obje oluşturmak
export const setLoading = () => ({
  type: ActionTypes.SET_LOADING,
});
export const setError = (payload) => ({
  type: ActionTypes.SET_ERROR,
  payload,
});
export const setProducts = (payload) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload,
});

// asenkron aksiyon api isteği atıp elde ettiği cevaba
// göre reducer'ı bilgilendiren kapsamlı aksiyon
// klasik redux aksiyonlarımız  asenkron olamaz
//(gerçekleşmesi zaman alan ör:axios)redux buna izin vermiyor
// bu sorunu redux thunk middleware'i kullanarak çözebilir

/*
 * Redux Thunk
 * Asenkron Akisyon - Thunk Aksiyonu
 
 * Redux Thunk, redux kütüphaneisi genişleten bir
 * middleware(arayazılım). Redux kendisi senkron işlemeleri 
 * desteklerken, asenkron eylemleri doğrudan desteklemez.
 * İşte redux thunk bu durumda devreye girer
  
 * Redux thunk, redux eylermlerinin(askyionlarının) asenkron
 * olmasını sağlar. Bu özellikle api isteği gibi asenkron 
 * işlemleri aksiyon içerisinde gerçekleştirebiliyoruz.
 
 * Thunk, bir fonksiyonun içerisnde farklı bir fonksiyonun 
 * çağrıldığı anlamına gelir  
*/

export const getProducts = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get("http://localhost:3050/products")
    .then((res) => dispatch(setProducts(res.data)))
    .catch((err) => dispatch(setError(err)));
};

// //örnek thunk aksiyon
// function orFonksiyon() {
//   return async function (dispatch) {
//     // asenron işlemler yapılır
//     const data = await axios.get("...");

//     // store bildirme dispatch
//     dispatch({ type: "SET_VERİ" });
//   };
// }

// // ok fonksiyonu yazımı
// const orFonksiyon = () => async (dispatch) => {
//   const data = await axios.get("...");

//   dispatch({ type: "SET_VERİ" });
// };
