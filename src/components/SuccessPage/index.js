import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../context/FormContext";
import "./index.css";

const SuccessPage = () => {
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="success-wrapper">
      <h2>Form Submission Successful!</h2>
      <p>Thank you, {formData.name}.</p>
      <p>We have received your message: {formData.message}</p>
      <p>A confirmation has been sent to your email: {formData.email}</p>
      <button className="back-button" onClick={handleBack}>
        Go Back
      </button>
    </div>
  );
};

export default SuccessPage;
