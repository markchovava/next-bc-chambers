import { MontserratRegular } from "@/_assets/fonts/montserrat/_MontserratFont";
import "./globals.css";
import Footer from "@/_components/footers/Footer";
/* ToastContainer */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased`}>
      <body className={`${MontserratRegular.className} 
        min-h-full flex flex-col text-gray-800`}>


        {children}

        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
