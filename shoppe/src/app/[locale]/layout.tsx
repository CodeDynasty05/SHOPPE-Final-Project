import "../globals.css";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import { NextUIProvider } from "@nextui-org/react";
import CategoryContextProvider from "@/context/categoryContext";
import FilterContextProvider from "@/context/FilterContext";
import { Providers } from "../StoreProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="w-[90vw] mx-auto">
        <Providers>
          <NextUIProvider>
            <FilterContextProvider>
              <CategoryContextProvider>
                <NextIntlClientProvider messages={messages}>
                  <div className="flex flex-col min-h-screen">
                    <Header locale={locale} />
                    <main className="flex-1 pt-28">
                      <div className="flex flex-col">{children}</div>
                    </main>
                    <Footer locale={locale} />
                  </div>
                </NextIntlClientProvider>
              </CategoryContextProvider>
            </FilterContextProvider>
          </NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}
