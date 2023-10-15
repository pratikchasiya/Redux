import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormComp from "./components/FormComp";
import TableComp from "./components/TableComp";
import { useDispatch } from "react-redux";
import { getUserData } from "./components/redux/actions/userAction";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  /* AHIYA USEEEFECT USE KARVANU BECAUSE APP JS PEHLA CALL THAY AND A BDHI JAGYA A USE THSE AND JYA USE KARVU HOI TYA USE SELECTOR AND USE DISPATCH THI USE KARI SAKAY */
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <div className="App">
      <FormComp />
      <TableComp />
    </div>
  );
}

export default App;
