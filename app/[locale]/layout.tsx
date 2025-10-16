import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import Providers from "@/app/Providers";
import { Header } from "@/components/layout/Header";
import { TailwindIndicator } from "@/components/utils/TailwindIndicator";
import { routing } from "@/i18n/routing";

interface ILocaleLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

const LocaleLayout = async ({ children, params }: ILocaleLayoutProps) => {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html className={ `h-full antialiased` } lang={ locale } suppressHydrationWarning>
            <body className="overflow-x-hidden">
                <NextIntlClientProvider messages={ messages }>
                    <Providers>
                        <Header />
                        <div className="relative m-auto px-4 pt-20 max-w-4xl min-h-full">
                            {children}
                        </div>
                        <TailwindIndicator />
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default LocaleLayout;
