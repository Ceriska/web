
function Header() {
  return (
    <header className="bg-purple-950 px-6 py-10 text-white shadow-lg sm:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold tracking-wide sm:text-4xl">
          Erasmus+ Academic CV
        </h1>

        <h2 className="mb-4 text-xl font-semibold text-purple-200">
          Personal Information
        </h2>

        <div className="space-y-2 text-purple-50">
          <p><strong>Full Name:</strong> Yaryna Holianytska</p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              className="underline decoration-purple-300 underline-offset-4 transition hover:text-purple-300"
              href="mailto:yaryna.holianytska@lpnu.ua"
            >
              yaryna.holianytska@lpnu.ua
            </a>
          </p>
          <p><strong>Phone:</strong> +380 97 334 82 32</p>
          <p><strong>Nationality:</strong> Ukrainian</p>
          <p><strong>Date of Birth:</strong> 10 August 2008</p>
        </div>

        <h2 className="mb-3 mt-8 text-xl font-semibold text-purple-200">
          Professional Summary
        </h2>

        <p className="max-w-3xl rounded-lg border border-purple-800 bg-purple-900/60 p-4 leading-relaxed text-white">
          Motivated Cybersecurity student at Lviv Polytechnic National
          University with a strong academic focus on network security,
          cryptography, and ethical hacking. Seeking to participate in the
          Erasmus+ program to broaden intercultural competencies and deepen
          expertise in international cybersecurity practices.
        </p>
      </div>
    </header>
  );
}

export default Header;
