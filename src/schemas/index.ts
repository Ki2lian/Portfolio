import { z } from "zod";

const localizedStringSchema = z.record(z.string(), z.string());

export const projectSchema = z.object({
    description: localizedStringSchema,
    image: z.string().optional(),
    livePreviewLink: z.string().optional(),
    sourceCodeLink: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    title: localizedStringSchema,
});

export interface IProjectItemProps extends React.HTMLProps<HTMLDivElement> {
    project: TProjectWithImageValid;
}

export type TProject = z.infer<typeof projectSchema>;

export type TProjectWithImageValid = TProject & { isImageValid: boolean };
