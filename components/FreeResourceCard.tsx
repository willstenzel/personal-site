const FreeResourceCard = ({ title, url, date }) => (
    <a href={url} target="_blank" rel="noreferrer" className="contact-card mb-3 relative flex flex-col sm:flex-row justify-between items-start sm:items-center border-2 border-gray-200 dark:border-gray-600 hover:border-violet-600 hover:dark:border-purple-400 duration-150 rounded-lg p-4">
        <p className="text-black dark:text-white text-xl sm:text-xl sm:ml-2" style={{ fontWeight: "600" }}>{title}</p>
        <p className="text-black dark:text-white text-lg sm:text-lg mr-4 mt-2 sm:mt-0">{date}</p>
    </a>
);

export default FreeResourceCard;
