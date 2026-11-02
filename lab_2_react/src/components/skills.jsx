
function Skills() {
  return (
    <section
      id="skills"
      className="rounded-xl border border-purple-100 border-l-4 border-l-purple-700 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-purple-800 dark:border-l-purple-400 dark:bg-gray-900"
    >
      <h2 className="mb-5 border-b-2 border-purple-200 pb-3 text-2xl font-bold text-purple-950 dark:border-purple-700 dark:text-purple-200">
        Skills
      </h2>

      <h3 className="mb-3 text-xl font-semibold text-purple-800 dark:text-purple-300">
        Technical Skills
      </h3>

      <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Programming
      </h4>
      <ul className="mb-5 list-disc space-y-2 pl-6 text-gray-700 marker:text-purple-600 dark:text-gray-300 dark:marker:text-purple-400">
        <li>Python</li>
        <li>C#</li>
        <li>Java</li>
        <li>Basic C++</li>
      </ul>

      <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Operating Systems
      </h4>
      <ul className="mb-5 list-disc space-y-2 pl-6 text-gray-700 marker:text-purple-600 dark:text-gray-300 dark:marker:text-purple-400">
        <li>Linux</li>
        <li>Windows</li>
      </ul>

      <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Cybersecurity
      </h4>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700 marker:text-purple-600 dark:text-gray-300 dark:marker:text-purple-400">
        <li>Network security fundamentals</li>
        <li>Vulnerability assessment</li>
        <li>Basic penetration testing</li>
        <li>Security monitoring</li>
        <li>Cryptography fundamentals</li>
        <li>Digital forensics fundamentals</li>
      </ul>

      <h3 className="mb-3 text-xl font-semibold text-purple-800 dark:text-purple-300">
        Language Skills
      </h3>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700 marker:text-purple-600 dark:text-gray-300 dark:marker:text-purple-400">
        <li>Ukrainian - Native</li>
        <li>English - C1 (Advanced)</li>
      </ul>

      <h3 className="mb-3 text-xl font-semibold text-purple-800 dark:text-purple-300">
        Soft Skills
      </h3>
      <ul className="list-disc space-y-2 pl-6 text-gray-700 marker:text-purple-600 dark:text-gray-300 dark:marker:text-purple-400">
        <li>Academic writing and referencing</li>
        <li>Analytical and critical thinking</li>
        <li>Effective communication</li>
        <li>Teamwork and collaboration</li>
        <li>Cross-cultural communication</li>
        <li>Adaptability and problem-solving</li>
      </ul>
    </section>
  );
}

export default Skills;
