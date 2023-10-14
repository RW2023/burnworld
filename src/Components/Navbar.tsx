import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-gray-800 sticky top-0 z-50">
      <div className="flex items-center flex-shrink-0 text-headline mr-6">
        <Link href="/" passHref>
          <span className="font-bold text-xl tracking-tight cursor-pointer text-white hover:text-gray-300">
            Home
          </span>
        </Link>
      </div>
      <div className="block lg:flex lg:items-center">
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
