import ProjectLinks from "./ProjectLinks";

export default function PastProjectCard({ title, description, image, url, links }) {
    return (
        <div onClick={(e) => {
                e.preventDefault();
                window.open(url, "_blank");
            }}
            className="flex flex-col w-full items-stretch p-4 overflow-hidden bg-white dark:bg-gray-900 border dark:border-white border-slate-200 rounded-lg mt-4 cursor-pointer transform hover:scale-[1.04] transition-all"
        >
            <div className="flex gap-6 flex-row items-center" style={{ height: "56px" }}>
                <div className="my-auto">
                    <img
                        className="object-cover square rounded-lg"
                        src={image}
                        width={50}
                        alt=""
                    />
                </div>
                <div className="justify-between sm:flex w-1/2">
                    <p className="text-l font-bold text-slate-900 dark:text-gray-200">
                        {title}
                    </p>
                </div>
            </div>
            <div className="mt-4 sm:pr-8 grow">
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


