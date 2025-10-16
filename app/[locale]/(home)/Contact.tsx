import { getTranslations } from "next-intl/server";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

import DiscordCopyButton from "@/app/(home)/(contact)/DiscordCopyButton";
import { Link } from "@/i18n/routing";
import { EXTERNAL_LINKS } from "@/routes";


export const ContactSection = async () => {
    const t = await getTranslations("home.contact");

    return (
        <section className="mx-auto max-w-3xl" id="contact">
            <h2 className="text-2xl">{ t("title") }</h2>
            <div className="flex items-center gap-6 pt-8">
                <Link href={ EXTERNAL_LINKS.GITHUB } rel="noopener noreferrer" target="_blank">
                    <FaGithub className="hover:scale-110 transition-transform duration-300 ease-in-out" size={ 36 } />
                </Link>
                <Link href={ EXTERNAL_LINKS.X } rel="noopener noreferrer" target="_blank">
                    <FaXTwitter className="hover:scale-110 transition-transform duration-300 ease-in-out" size={ 36 } />
                </Link>
                <DiscordCopyButton />
                <Link className="underline" href={ EXTERNAL_LINKS.MAIL_ME } rel="noopener noreferrer">
                    killian@ki2lian.fr
                </Link>
            </div>
        </section>
    );
};
