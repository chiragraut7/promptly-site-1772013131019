import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin Panel</title>
      </head>
      <body className="bg-gray-100">
        <Navbar />
        <div className="max-w-7xl mx-auto py-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}