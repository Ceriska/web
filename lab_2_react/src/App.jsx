
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function getAutomaticTheme() {
  const hour = new Date().getHours();

  return hour >= 7 && hour < 21 ? "light" : "dark";
}

function App() {
  const [theme, setTheme] = useState(getAutomaticTheme);

  useEffect(() => {
    function updateThemeByTime() {
      setTheme(getAutomaticTheme());
    }

    const interval = setInterval(updateThemeByTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "dark bg-gray-950 text-gray-100"
          : "bg-purple-50 text-gray-800"
      }`}
    >
      <div className="flex justify-end gap-2 px-4 pt-4">
        <button
          type="button"
          onClick={() =>
            setTheme((currentTheme) =>
              currentTheme === "dark" ? "light" : "dark"
            )
          }
          className="rounded-lg border border-purple-300 bg-white px-4 py-2 font-semibold text-purple-950 shadow-sm transition hover:bg-purple-100 dark:border-purple-700 dark:bg-gray-900 dark:text-purple-200 dark:hover:bg-gray-800"
        >
          {isDark ? "Денна тема" : "Нічна тема"}
        </button>
      </div>

      <Header />

      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 py-8 sm:px-6 md:grid-cols-2">
        <Education />
        <Experience />
        <Skills />
        <Reviews />
      </main>

      <Footer />

      <ContactForm />
    </div>
  );
}

export default App;
