
import { useEffect, useState } from "react";

function Footer() {
  const [systemInfo, setSystemInfo] = useState({
    userAgent: "",
    platform: "",
  });

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform || "Not available",
    };

    localStorage.setItem("systemInfo", JSON.stringify(info));

    const savedInfo = localStorage.getItem("systemInfo");

    if (savedInfo) {
      setSystemInfo(JSON.parse(savedInfo));
    }
  }, []);

  return (
    <footer className="mt-10 border-t-4 border-purple-300 bg-purple-950 px-6 py-6 text-center text-white">
      <p className="mb-3 text-sm text-purple-100">
        Erasmus+ Academic CV | Yaryna Holianytska | 2026
      </p>

      <a
        className="font-medium underline decoration-purple-300 underline-offset-4 transition hover:text-purple-300"
        href="https://github.com/Ceriska"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Profile
      </a>

      <div className="mx-auto mt-5 max-w-5xl rounded-lg border border-purple-800 bg-purple-900/60 p-4 text-left">
        <h3 className="mb-3 text-lg font-semibold text-purple-200">
          System Information
        </h3>

        <p className="mb-2 break-words text-sm text-purple-50">
          <strong>User Agent:</strong> {systemInfo.userAgent || "Loading..."}
        </p>

        <p className="break-words text-sm text-purple-50">
          <strong>Platform:</strong> {systemInfo.platform || "Loading..."}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
