import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import DiscordCopyButton from '@/components/DiscordCopyButton';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { TwitterIcon } from '@/components/icons/TwitterIcon';

export const ContactSection: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const { t } = useTranslation();

    return (
        <section className={ className } { ...props }>
            <h2 className="text-2xl">{ t('contact.title') }</h2>
            <div className="flex items-center gap-6 pt-8">
                <Link to="https://github.com/ki2lian" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="transition-transform hover:scale-110" size={ 36 } />
                </Link>
                <Link to="https://twitter.com/ki2lianm" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon className="transition-transform hover:scale-110" size={ 36 } />
                </Link>
                <DiscordCopyButton />
                <Link to="mailto:killian@ki2lian.fr" rel="noopener noreferrer" className="underline">
                    killian@ki2lian.fr
                </Link>
            </div>
        </section>
    );
};
