import { useState } from "react";
import tick from "../resources/light-tick.png";
import loader from "../resources/loader.png";

export default function Mail() {
  const [email, setEmail] = useState("");
  const [isvalid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loader while validating
    setIsLoading(true);

    // Simulate validation delay (replace with your actual validation logic)
    setTimeout(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(email);

      // Update state based on validation result
      setIsValid(isValid);
      setIsSubmitted(isValid);
      setIsLoading(false);
      setEmail("");
    }, 2000);
  };

  return (
    <div className="email-container">
      <p className="email-heading">
        Be the first to know! Share your email and We'll notify you when it's
        live
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter your email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={!email}>
          {isLoading ? (
            // "..."
            <img src={loader} alt="loader" className="spinner" />
          ) : isSubmitted ? (
            document
              .getElementsByTagName("body")[0]
              .hasAttribute("data-theme") ? (
              "submitted"
            ) : (
              <img src={tick} alt="tick" />
            )
          ) : (
            "Notify Me"
          )}
        </button>
      </form>
      {!isvalid && <p style={{ color: "red" }}>Invalid email</p>}
    </div>
  );
}
