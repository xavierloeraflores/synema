import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center ">
      <Link href="/">
        <span className="font-bold">🍿 Synema</span>
      </Link>
      <span className="text-center">Discover More.</span>
      <span className="text-center">Created by Xavier Loera Flores</span>
      <span className="text-center">
        Built with Next.js, React, TypeScript, and Tailwind{" "}
      </span>
    </footer>
  );
};

export default Footer;
