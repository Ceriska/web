
function Experience() {
  return (
    <section className="rounded-xl border border-purple-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-purple-800 dark:bg-gray-900">
      <h2 className="mb-5 border-b-2 border-purple-200 pb-3 text-2xl font-bold text-purple-950 dark:border-purple-700 dark:text-purple-200">
        Work Experience and Internships
      </h2>

      <h3 className="mb-2 text-xl font-semibold text-purple-800 dark:text-purple-300">
        Cybersecurity Intern
      </h3>

      <p className="mb-2 text-gray-700 dark:text-gray-300">
        <strong className="text-gray-900 dark:text-white">
          IT Security Solutions LLC
        </strong>
        , Lviv, Ukraine
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        <strong className="text-purple-950 dark:text-purple-200">
          June 2025 – August 2025
        </strong>
      </p>

      <ul className="mb-8 list-disc space-y-2 pl-6 text-gray-700 marker:text-purple-600 dark:text-gray-300 dark:marker:text-purple-400">
        <li>Assisted in the development of internal security protocols.</li>
        <li>Conducted vulnerability assessments and basic penetration testing.</li>
        <li>Carried out data analysis using security monitoring tools.</li>
        <li>Participated in collaborative projects with senior security analysts.</li>
        <li>
          Documented identified security issues and contributed to technical
          reports.
        </li>
      </ul>

      <h2 className="mb-5 border-b-2 border-purple-200 pb-3 text-2xl font-bold text-purple-950 dark:border-purple-700 dark:text-purple-200">
        Extracurricular Activities
      </h2>

      <h3 className="mb-2 text-xl font-semibold text-purple-800 dark:text-purple-300">
        Member of Cybersecurity Student Club
      </h3>

      <p className="mb-2 text-gray-700 dark:text-gray-300">
        <strong className="text-gray-900 dark:text-white">
          Lviv Polytechnic National University
        </strong>
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        <strong className="text-purple-950 dark:text-purple-200">
          2025 – Present
        </strong>
      </p>

      <ul className="list-disc space-y-2 pl-6 text-gray-700 marker:text-purple-600 dark:text-gray-300 dark:marker:text-purple-400">
        <li>Organized workshops on basic cybersecurity awareness.</li>
        <li>Collaborated with peers on academic and technical projects.</li>
        <li>Participated in discussions about current cybersecurity challenges.</li>
      </ul>
    </section>
  );
}

export default Experience;
