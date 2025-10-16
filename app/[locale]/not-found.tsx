import { getTranslations } from "next-intl/server";

import { Text404 } from "@/app/(not-found)/Text404";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ROUTES } from "@/routes";

const NotFound = async () => {
    const t = await getTranslations("error.404");

    return (
        <div className="flex flex-col justify-between items-center h-[calc(100vh-84px)]">
            <div></div>
            <Text404 />
            <Button asChild className="text-lg md:text-xl lg:text-2xl" size="xl" variant="ghost">
                <Link href={ ROUTES.HOME }>{ t("button") }</Link>
            </Button>
        </div>
    );
};

export default NotFound;
