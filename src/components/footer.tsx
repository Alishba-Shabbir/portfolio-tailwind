
export default function Footer() {
  return (
    <footer className="p-4 bg-[#262525] text-white text-center md:p-6">
      <p>&copy; 2024 Alishba Shabbir. All rights reserved.</p>

      <p className="mt-2">Connect with me on:</p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/Alishba-Shabbir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/Alishba-Shabbir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
        >
          LinkedIn
        </a>
      </div>

      <p className="mt-4">
        Email:{" "}
        <a
          href="mailto:alishbashabbir312@gmail.com"
          className="text-white hover:underline"
        >
          alishbashabbir312@gmail.com
        </a>
      </p>

      <p className="mt-4 text-sm md:text-base lg:text-lg">
        Built with Next.js | Designed by Alishba Shabbir.
      </p>
    </footer>
  );
}
