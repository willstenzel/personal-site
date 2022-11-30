import RenderSvg from "./svgs/RenderSvg";

const ProjectLinks = ({ links }) => {
    return (
        <div className="flex flex-row gap-2">
            {links && links.map(({ icon, url }) => (
                <a href={url} onClick={e => {
                    window.open(url, "_blank");
                    e.stopPropagation();
                    e.preventDefault();
                }}
                key={url}
                className="transition duration-150 border-b-2 border-transparent hover:border-gray-300"
                >
                    <RenderSvg icon={icon} />
                </a>
            ))}
        </div>
    );
};

export default ProjectLinks;
