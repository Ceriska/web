
function Education() {
  return (
    <section className="rounded-xl border border-purple-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-purple-800 dark:bg-gray-900">
      <h2 className="mb-5 border-b-2 border-purple-200 pb-3 text-2xl font-bold text-purple-950 dark:border-purple-700 dark:text-purple-200">
        Education
      </h2>

      <h3 className="mb-2 text-xl font-semibold text-purple-800 dark:text-purple-300">
        Bachelor's Degree in Cybersecurity
      </h3>

      <p className="mb-2 text-gray-700 dark:text-gray-300">
        <strong className="text-gray-900 dark:text-white">
          Lviv Polytechnic National University
        </strong>
        , Lviv, Ukraine
      </p>

      <p className="mb-2 text-gray-700 dark:text-gray-300">
        <strong className="text-purple-950 dark:text-purple-200">
          2025 – Present
        </strong>
      </p>

      <p className="mb-5 text-gray-700 dark:text-gray-300">
        <strong className="text-gray-900 dark:text-white">GPA:</strong> 4.8/5.0
      </p>

      <h4 className="mb-3 text-lg font-semibold text-purple-800 dark:text-purple-300">
        Relevant Coursework
      </h4>

      <ul className="list-disc space-y-2 pl-6 text-gray-700 marker:text-purple-600 dark:text-gray-300 dark:marker:text-purple-400">
        <li className="transition hover:text-purple-800 dark:hover:text-purple-300">Network Security</li>
        <li className="transition hover:text-purple-800 dark:hover:text-purple-300">Cryptography</li>
        <li className="transition hover:text-purple-800 dark:hover:text-purple-300">Secure Software Development</li>
        <li className="transition hover:text-purple-800 dark:hover:text-purple-300">Digital Forensics</li>
        <li className="transition hover:text-purple-800 dark:hover:text-purple-300">Operating Systems Security</li>
      </ul>
    </section>
  );
}

export default Education;
