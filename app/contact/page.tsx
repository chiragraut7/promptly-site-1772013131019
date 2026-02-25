import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600">Get in touch with us for any questions or concerns.</p>
      <Link href="/" className="text-indigo-600 hover:text-indigo-800">Back to dashboard</Link>
    </div>
  );
}