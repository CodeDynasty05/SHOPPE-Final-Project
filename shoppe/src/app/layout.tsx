import Header from "@/components/_layout/Header";
import "./globals.css";
import Footer from "@/components/_layout/Footer";
import { NextUIProvider } from "@nextui-org/react";
import CategoryContextProvider from "@/context/categoryContext";
import FilterContextProvider from "@/context/FilterContext";
import { Providers } from "./StoreProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-[90vw] mx-auto">
        <Providers>
          <NextUIProvider>
            <FilterContextProvider>
              <CategoryContextProvider>
                <div className="flex flex-col min-h-screen">
                  <Header locale="en" />
                  <main className="flex-1 pt-28">{children}</main>
                  <Footer locale="en" />
                </div>
              </CategoryContextProvider>
            </FilterContextProvider>
          </NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}
