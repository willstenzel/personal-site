import Image from "next/image";
import { Tool } from "../pages/index"

type ToolCardProps = {
    tool: Tool,
    active: boolean,
    minimized: boolean,
    handleClick: () => void,
};

const renderToolIcon = (tool: Tool) => {
    if (tool.image) {
        return (
            <img src={`/tools/${tool.image}`} alt={tool.image} className="transition-base object-contain object-left" />
        );
    } else {
        return (
            // Hide or show the light or dark image depending on the theme
            <>
                <img src={`/tools/${tool.imageLight}`} alt={tool.image} className="block dark:hidden transition-base object-contain object-left" />
                <img src={`/tools/${tool.imageDark}`} alt={tool.image} className="hidden dark:block transition-base object-contain object-left" />
            </>
        );
    }
};

const ToolCard = ({ tool, active, minimized, handleClick }: ToolCardProps) => {

    const classes = `${active ? "active" : ""} ${minimized ? "minimized" : ""}
    group border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-lg
    tool-card cursor-pointer flex-grow mr-4 overflow-hidden relative rounded-2xl transition-base
  `;

  console.log("minimized", minimized);
  console.log("active", active);

    return (
        <div className={classes} onClick={handleClick}>
            <div className="absolute flex flex-col w-full h-full label p-4 transition-base z-20">
                {renderToolIcon(tool)}
                <div className={`tool-heading ${!active ? "mt-4" : "-ml-2"}`}>
                    <div className="tool-title font-bold text-black dark:text-white ml-2">{tool.name}</div>
                    <div className="tool-tags mt-1 flex flex-row gap-1 flex-wrap justify-start">
                        {tool.tags.map((tag, index) => (
                            <div key={index} className="tag text-xs font-semibold text-gray-500 bg-gray-200 dark:bg-transparent dark:bg-gray-700 dark:text-white rounded-full ml-[2px] px-2 py-1">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="content -mt-6 flex flex-col justify-center leading-tight">
                    <div className=" text-black dark:text-white opacity-0 relative transform transition-base translate-x-8 pr-4">{tool.description}</div>
                </div>

                {/* TODO: Consider moving these to bottom-2 and right-2 */}
                <div className="expand-icon absolute bottom-2 right-3 transform group-hover:scale-[1.15] transition-all">
                    <Image
                        alt="expand"
                        height={24}
                        width={24}
                        src="/expand.png"
                        className="block dark:hidden"
                    />
                    <Image
                        alt="expand"
                        height={24}
                        width={24}
                        src="/dark-mode-expand.png"
                        className="hidden dark:block"
                    />
                </div>
                <div className="collapse-icon opacity-0 absolute bottom-2 right-4 transform group-hover:scale-[1.15] transition-all">
                    <Image
                        alt="collapse"
                        height={24}
                        width={24}
                        src="/collapse.png"
                        className="block dark:hidden"
                    />
                    <Image
                        alt="collapse"
                        height={24}
                        width={24}
                        src="/dark-mode-collapse.png"
                        className="hidden dark:block"
                    />
                </div>
            </div>
        </div>
    );
};

export default ToolCard;
