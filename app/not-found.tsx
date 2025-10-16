import LocaleLayout from "@/app/layout";
import NotFoundPage from "@/app/not-found";

const NotFound = async () => {
    const params = Promise.resolve({ locale: "fr" });
    return (
        <LocaleLayout params={ params }>
            <NotFoundPage />
        </LocaleLayout>
    );
};


export default NotFound;
