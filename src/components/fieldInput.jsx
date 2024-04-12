import { UserContext } from "../context/userContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const FieldInput = () => {
  const { loginUser, form } = useContext(UserContext);
  console.log(form.email.length);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email.length < 8 || form.password.length < 8) {
      alert("minimum char harus lebih dari atau sama dengan 8 char");
    } else {
      alert("submit berhasil");
      navigate("/dashboard");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    loginUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <>
      <section className="text-login">
        <h1>SIGN IN</h1>
      </section>
      <section>
        <form className="field-input">
          <input
            onChange={handleChange}
            id="email"
            type="text"
            placeholder="Email"
          />
          <input
            onChange={handleChange}
            id="password"
            type="password"
            placeholder="Password"
          />
          <button
            className="button-submit"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
};

export default FieldInput;
