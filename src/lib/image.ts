import { existsSync } from "fs";
import path from "path";

export const isLocalImageValid = (imagePath: string) => {
    const fullPath = path.join(process.cwd(), "public", imagePath);

    return existsSync(fullPath);
};
