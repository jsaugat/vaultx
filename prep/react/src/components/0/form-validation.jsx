import { useState } from "react";

const errorsInitialState = {
  email: "",
  password: "",
  confirmPassword: "",
};
export const FormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(errorsInitialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!email) newErrors.email = "Email is required";
    if (password.length < 8) {
      newErrors.password = "Password must be 8+ chars";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form valid", { email, password });
      // show success UI
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-section">
        <label>Your Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        {errors.email.length > 0 && (
          <span style={{ color: "red" }}>{errors.email}</span>
        )}
      </div>
      <div className="form-section">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        {errors.password.length > 0 && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
      </div>
      <div className="form-section">
        <label>Confirm password</label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />
        {errors.confirmPassword.length > 0 && (
          <span style={{ color: "red" }}>{errors.confirmPassword}</span>
        )}
      </div>

      <button
        type="submit"
        style={{
          marginTop: 10,
        }}
      >
        Submit
      </button>
    </form>
  );
};
