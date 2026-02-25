import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">Admin Panel</Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/about" className="text-gray-600 hover:text-indigo-600">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-600 hover:text-indigo-600">Services</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}