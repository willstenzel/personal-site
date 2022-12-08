import ProjectLinks from "./ProjectLinks";

export default function CurrentProjectCard({ title, description, image, url, links }) {
    return (
        <div onClick={(e) => {
            if (url) {
                window.open(url, "_blank");
            }
        }}
            className={`relative block p-8 overflow-hidden bg-white dark:bg-gray-900 border dark:border-white border-slate-100 rounded-lg mt-4 ${url && "cursor-pointer"} transform hover:scale-[1.04] transition-all`}
        >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-indigo-100 to-violet-600 dark:to-purple-400"></span>
            <div className="relative flex mb-5 gap-6 flex-col sm:flex-row sm:items-center">
                <div className="my-auto">
                    <img
                        className="object-cover square rounded-lg shadow-sm"
                        src={image}
                        height={600}
                        width={600}
                        alt=""
                    />
                </div>
                <div className="w-full">
                    <div className="flex flex-row justify-start items-center">
                        <div>
                            <h5 className="text-xl font-bold text-slate-900 dark:text-gray-200">
                                {title}
                            </h5>
                        </div>
                        <div className="text-black dark:text-gray-200 ml-4 mt-1">
                            <ProjectLinks links={links} />
                        </div>
                    </div>

                    <div className="mt-2 sm:4">
                        <p className="text-sm text-slate-500 dark:text-gray-200">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


