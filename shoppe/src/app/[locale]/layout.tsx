import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex flex-col">{children}</div>
    </NextIntlClientProvider>
  );
}
