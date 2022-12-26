const FreeTemplateCard = ({ title, description, url, date }) => (
    <a href={url} target="_blank" rel="noreferrer" className="hover-arrow mb-3 relative flex flex-col sm:flex-row justify-between items-start sm:items-center border-2 border-gray-200 dark:border-gray-600 hover:sm:border-violet-600 hover:dark:sm:border-purple-400 duration-150 rounded-lg p-4">
        <div className="sm:ml-2">
            <p className="text-black dark:text-white text-xl" style={{ fontWeight: "600" }}>{title}</p>
            <p className="text-gray-700 dark:text-white text-md mt-2 sm:mt-0">{description}</p>
        </div>
        <p className="text-black dark:text-white text-lg whitespace-nowrap sm:text-lg sm:pl-5 sm:pr-4 mt-2 sm:mt-0">{date}</p>
    </a>
);

export default FreeTemplateCard;
