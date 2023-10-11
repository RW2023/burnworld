import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 sticky top-0 z-50">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" passHref>
          <span className="font-semibold text-xl tracking-tight cursor-pointer">
            Home
          </span>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/news" passHref>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 cursor-pointer">
              News
            </span>
          </Link>
          <Link href="#" passHref>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 cursor-pointer">
              About
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
