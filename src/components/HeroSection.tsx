import avatarImage from '@/assets/images/avatar.svg';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const { t } = useTranslation();

    return (
        <section className={ className } { ...props }>
            <h1 className="sr-only">{ t('hero.srOnly') }</h1>
            <div className="flex flex-col justify-center">
                <div className="flex w-fit gap-8">
                    <img src={ avatarImage } alt="Avatar" width={ 64 } height={ 64 } />
                    <div className="flex flex-col justify-center">
                        <h1 className="name-gradient text-3xl font-bold">Killian</h1>
                        <h3>{ t('hero.job') }</h3>
                    </div>
                </div>
                <div className="flex flex-col pt-8">
                    <p className="text-justify text-muted md:text-lg">{ t('hero.description') }</p>
                </div>
            </div>
        </section>
    );
};
