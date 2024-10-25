import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormHandler from "./components/FormHandler";
import SuccessPage from "./components/SuccessPage";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormHandler />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;
