import Header from "@/components/_layout/Header";
import "./globals.css";
import Footer from "@/components/_layout/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-5">
        <div className="flex flex-col min-h-screen">
          <Header locale="en" />
          <main className="flex-1 pt-28">{children}</main>
          <Footer locale="en" />
        </div>
      </body>
    </html>
  );
}
