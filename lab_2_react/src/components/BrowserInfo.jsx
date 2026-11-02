
import { useEffect, useState } from "react";

function getBrowserInfo() {
  return {
    "User Agent": navigator.userAgent,
    Platform: navigator.platform || "Not available",
    "Browser Vendor": navigator.vendor || "Not available",
    Language: navigator.language,
    "All Languages": navigator.languages?.join(", ") || "Not available",
    "Cookies Enabled": navigator.cookieEnabled,
    "Internet Connection": navigator.onLine ? "Online" : "Offline",
    "CPU Cores": navigator.hardwareConcurrency || "Not available",
    "Device Memory (GB)": navigator.deviceMemory || "Not available",
    "Screen Resolution": `${screen.width} × ${screen.height}`,
    "Available Screen Size": `${screen.availWidth} × ${screen.availHeight}`,
    "Color Depth": `${screen.colorDepth} bit`,
    "Window Size": `${window.innerWidth} × ${window.innerHeight}`,
    Timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    "Touch Points": navigator.maxTouchPoints,
    "Collected At": new Date().toLocaleString(),
  };
}

function BrowserInfo() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    try {
      const currentInfo = getBrowserInfo();

      localStorage.setItem("browserInfo", JSON.stringify(currentInfo));

      const savedInfo = localStorage.getItem("browserInfo");
      setInfo(savedInfo ? JSON.parse(savedInfo) : currentInfo);
    } catch {
      setInfo({ Error: "Unable to access localStorage." });
    }
  }, []);

  return (
    <div className="mt-5 rounded-lg border border-purple-800 bg-purple-900/60 p-4 text-left">
      <h3 className="mb-3 text-lg font-semibold text-purple-200">
        Browser and System Information
      </h3>

      <dl className="space-y-2 text-sm text-purple-50">
        {Object.entries(info).map(([key, value]) => (
          <div key={key} className="break-words">
            <dt className="font-semibold text-white">{key}:</dt>
            <dd>{String(value)}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default BrowserInfo;
