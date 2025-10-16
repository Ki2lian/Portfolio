export const TailwindIndicator = () => {
    if (process.env.NODE_ENV === "production") return null;

    return (
        <div className="bottom-1 left-1 z-50 fixed flex justify-center items-center bg-gray-800 p-3 rounded-full size-6 font-mono text-white text-xs">
            <div className="sm:hidden block">xs</div>
            <div className="hidden md:hidden sm:block">sm</div>
            <div className="hidden lg:hidden md:block">md</div>
            <div className="hidden xl:hidden lg:block">lg</div>
            <div className="hidden 2xl:hidden xl:block">xl</div>
            <div className="hidden 2xl:block">2xl</div>
        </div>
    );
};
