import ProjectLinks from "./ProjectLinks";

export default function PastProjectCard({ title, description, image, imageLight, imageDark, url, links }) {
    const renderImage = () => {
        if (image) {
            return (
                <img
                    className="object-cover square rounded-lg"
                    src={image}
                    width={50}
                    alt=""
                />
            );
        }
        return (
            <>
                <img
                    className="block dark:hidden object-cover square rounded-lg"
                    src={imageLight}
                    width={50}
                    alt=""
                />
                <img
                    className="hidden dark:block object-cover square rounded-lg"
                    src={imageDark}
                    width={50}
                    alt=""
                />
            </>
        );
    };

    return (
        <div onClick={(e) => {
                if (url) {
                    e.preventDefault();
                    window.open(url, "_blank");
                }
            }}
            className={`flex flex-col w-full items-stretch p-4 overflow-hidden bg-white dark:bg-gray-900 border dark:border-white border-slate-200 rounded-lg ${url ? "cursor-pointer transform hover:scale-[1.04]" : ""} transition-all`}
        >
            <div className="flex gap-6 flex-row items-center" style={{ height: "56px" }}>
                <div className="my-auto">
                    {renderImage()}
                </div>
                <div className="justify-between sm:flex w-1/2">
                    <p className="text-l font-bold text-slate-900 dark:text-gray-200">
                        {title}
                    </p>
                </div>
            </div>
            <div className="mt-4 sm:pr-2 grow">
                <p className="text-sm text-slate-500 dark:text-gray-200">
                    {description}
                </p>
            </div>
            <div className="text-black dark:text-gray-200 mt-4">
                <ProjectLinks links={links} />
            </div>
        </div>
    );
}


