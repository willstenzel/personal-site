
const ConactCard = ({ title, url, description }) => (
    <a href={url} target="_blank" rel="noreferrer" className="contact-card hover-arrow relative border-2 border-gray-200 dark:border-gray-800 hover:sm:border-violet-600 hover:dark:sm:border-purple-400 duration-150 rounded-lg p-4">
        <p className="text-black dark:text-white text-xl sm:text-2xl font-bold mb-2">{title}</p>
        <p className="text-black dark:text-white">
            {description}
        </p>
    </a>
);

export default ConactCard;
