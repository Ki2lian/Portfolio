import { useTranslation } from 'react-i18next';
import { ReactSkill } from './ReactSkill';
import { TailwindSkill } from './TailwindSkill';
import { TypescriptSkill } from './TypescriptSkill';
import { BackendSkill } from './BackendSkill';
import { ORMSkill } from './ORMSkill';

export const SkillsSection: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const { t } = useTranslation();

    return (
        <section className={ className } { ...props }>
            <h2 className="relative m-auto max-w-3xl text-2xl">{ t('skills.title') }</h2>
            <div className="grid grid-cols-1 gap-x-4 gap-y-5 pt-8 md:grid-cols-3">
                <ReactSkill className="md:col-span-1" />
                <TailwindSkill className="md:col-span-1" />
                <TypescriptSkill className="md:col-span-1" />
                <BackendSkill className="md:col-span-2" />
                <ORMSkill className="md:col-span-1" />
            </div>
        </section>
    );
};
