import { useState } from "react";

function App() {
  const [formData, setFormData] = useState<{email:string,password:string,passwordConfirm:string,joinedNewsletter:boolean}>({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true,
  });

  let check =
    formData.password === formData.passwordConfirm &&
    formData.password.length !== 0;

  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
    }

    if (formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter!");
    }
  }
  return (
    

      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="mt-0 mb-4 text-[#639] font-bold text-xl">Form</h1>
          <input
            type="email"
            placeholder="Email address"
            className="form--input"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="form--input"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="form--input"
            name="passwordConfirm"
            onChange={handleChange}
            value={formData.passwordConfirm}
          />
          <p className={check ? "right" : "wrong"}>
            {check ? "Successfully match!" : "Passwords do not match"}
          </p>
          <div className="form--marketing">
            <input
              id="okayToEmail"
              type="checkbox"
              name="joinedNewsletter"
              onChange={handleChange}
              checked={formData.joinedNewsletter}
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
          </div>
          <button className="form--submit">Sign up</button>
        </form>
      </div>

  );
}

export default App;
