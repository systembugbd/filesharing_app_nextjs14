import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white sticky top-0  border-b">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 lg:px-8">
        <Link href="/">
          <Image
            alt="logo"
            src="/logo.svg"
            width={150}
            height={100}
            className="fill-primary"
          />
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center md:gap-2 lg:gap-6 gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/upload"
                >
                  Upload
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/about-us"
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/contact-us"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md text-xs bg-primary px-2 lg:px-5 md:px-5 py-2.5 font-medium text-white transition hover:bg-pdark"
                href="/upload"
              >
                Get Started
              </a>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
