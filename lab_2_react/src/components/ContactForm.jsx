
import { useEffect, useState } from "react";

function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="feedback-title"
        className="my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2
            id="feedback-title"
            className="text-2xl font-bold text-purple-950 dark:text-purple-200"
          >
            Feedback Form
          </h2>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close feedback form"
            className="rounded-lg px-3 py-1 text-2xl text-gray-500 hover:bg-purple-100 hover:text-purple-900 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            ×
          </button>
        </div>

        <p className="mb-5 text-gray-600 dark:text-gray-300">
          Thank you for visiting my academic CV. Feel free to leave a message.
        </p>

        <form
          action="https://formspree.io/f/xyeeerww"
          method="POST"
          onSubmit={(event) => {
            if (event.currentTarget.action.includes("YOUR_FORM_ID")) {
              event.preventDefault();
              alert("Спочатку вставте власний endpoint Formspree.");
            }
          }}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="feedback-name"
              className="mb-1 block font-medium text-gray-800 dark:text-gray-200"
            >
              Ім’я
            </label>
            <input
              id="feedback-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full rounded-lg border border-purple-200 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="feedback-email"
              className="mb-1 block font-medium text-gray-800 dark:text-gray-200"
            >
              Email
            </label>
            <input
              id="feedback-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-purple-200 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="feedback-phone"
              className="mb-1 block font-medium text-gray-800 dark:text-gray-200"
            >
              Номер телефону
            </label>
            <input
              id="feedback-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="w-full rounded-lg border border-purple-200 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="feedback-message"
              className="mb-1 block font-medium text-gray-800 dark:text-gray-200"
            >
              Повідомлення
            </label>
            <textarea
              id="feedback-message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-purple-200 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div className="flex flex-wrap justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-purple-300 px-4 py-2 font-medium text-purple-900 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-200 dark:hover:bg-gray-800"
            >
              Закрити
            </button>

            <button
              type="submit"
              className="rounded-lg bg-purple-800 px-5 py-2 font-semibold text-white transition hover:bg-purple-700"
            >
              Надіслати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackModal;
