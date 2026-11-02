
import { useEffect, useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchReviews() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/7/comments",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data = await response.json();
        setReviews(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Не вдалося завантажити відгуки.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchReviews();

    return () => controller.abort();
  }, []);

  return (
    <section className="rounded-xl border border-purple-100 bg-white p-6 shadow-md transition duration-300 hover:shadow-xl dark:border-purple-800 dark:bg-gray-900">
      <h2 className="mb-5 border-b-2 border-purple-200 pb-3 text-2xl font-bold text-purple-950 dark:border-purple-700 dark:text-purple-200">
        Employer Reviews
      </h2>

      {loading && (
        <p className="text-gray-600 dark:text-gray-300">
          Loading reviews...
        </p>
      )}

      {error && (
        <p className="text-red-600 dark:text-red-400">{error}</p>
      )}

      <div className="space-y-4">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="rounded-lg border border-purple-200 bg-purple-50 p-4 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <h3 className="mb-2 text-lg font-semibold text-purple-900 dark:text-purple-200">
              {review.name}
            </h3>

            <p className="mb-3 break-words text-sm text-gray-500 dark:text-gray-400">
              {review.email}
            </p>

            <p className="break-words leading-relaxed text-gray-800 dark:text-gray-200">
              {review.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
