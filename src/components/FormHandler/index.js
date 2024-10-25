import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FormContext } from "../../context/FormContext";
import "./index.css";

const FormHandler = () => {
  const { setFormData } = useContext(FormContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  const onHandleForm = (event) => {
    event.preventDefault();
    setFormData({ name, email, message });
    navigate("/success");
  };

  return (
    <div className="wrapper">
      <form onSubmit={onHandleForm}>
        <h1>Form Handler</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Name"
            onChange={handleNameChange}
            value={name}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
            required
          />
          <IoMdMail className="icon" />
        </div>
        <div className="text-box">
          <textarea
            rows={5}
            cols={40}
            placeholder="Message"
            onChange={handleMessageChange}
            value={message}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default FormHandler;
