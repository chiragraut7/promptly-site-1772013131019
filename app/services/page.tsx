import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="text-gray-600">We offer a wide range of services to meet your needs.</p>
      <Link href="/" className="text-indigo-600 hover:text-indigo-800">Back to dashboard</Link>
    </div>
  );
}