import { useEffect } from "react";

export default function Live() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://k9zrwj.csb.app/some";
    }, 3000);
  }, []);

  return (
    <div className="live-container">
      <div>
        <h2>We are Live Now!</h2>
        <p>
          Our new feature is now <strong> Live and ready</strong> for you to
          explore. Go ahead and give it a try
        </p>
      </div>
      <button
        onClick={() => (window.location.href = "https://k9zrwj.csb.app/some")}
      >
        Get Started
      </button>
    </div>
  );
}
