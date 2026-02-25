import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <p className="text-gray-600">Welcome to the admin panel.</p>
          <Link href="/about" className="text-indigo-600 hover:text-indigo-800">Learn more</Link>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4">Settings</h2>
          <p className="text-gray-600">Manage your account settings.</p>
          <Link href="/contact" className="text-indigo-600 hover:text-indigo-800">Contact us</Link>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4">Reports</h2>
          <p className="text-gray-600">View your reports and analytics.</p>
          <Link href="/services" className="text-indigo-600 hover:text-indigo-800">View services</Link>
        </div>
      </div>
    </div>
  );
}