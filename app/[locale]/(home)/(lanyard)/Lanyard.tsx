import { Status } from "@/app/(home)/(lanyard)/Status";
import { EXTERNAL_LINKS } from "@/routes";
import { isLanyardApiResponse } from "@/types/api/lanyard";

export const Lanyard = async () => {
    const res = await fetch(`${ EXTERNAL_LINKS.API.LANYARD }/users/253176119921082369`, {
        next: { revalidate: 60 },
    });
    const data = await res.json();

    if (!isLanyardApiResponse(data)) {
        return null;
    }

    return (
        <div className="right-0 -bottom-1 absolute flex justify-center items-center bg-background rounded-full size-5">
            <Status initialData={ data } />
        </div>
    );
};
