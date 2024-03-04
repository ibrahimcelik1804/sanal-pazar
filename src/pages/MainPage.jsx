import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  setError,
  setLoading,
  setProducts,
} from "../redux/actions/productAction";
import Loading from "../components/Loading";
import Card from "../components/Card";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.product);

  // console.log(state);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {state.isLoading && <Loading />}
      {state.isError && (
        <p className="text-center my-5 fw-bold">
          Üzgünüz verileri alırken bir hata oluştu: <br />
          {state.isError}
        </p>
      )}
     <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
     {state.products.map((product,i) => (
      <Card product={product} key={i}/>
      ))}
     </div>
    </div>
  );
};

export default MainPage;
