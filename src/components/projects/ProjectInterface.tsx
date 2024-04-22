import { z } from 'zod';

export const ProjectSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    livePreviewLink: z.string().optional(),
    sourceCodeLink: z.string().optional(),
    image: z.string().optional(),
});

export type TProject = z.infer<typeof ProjectSchema>;

export interface IProjectItemProps extends React.HTMLProps<HTMLDivElement> {
    project: TProject;
}
