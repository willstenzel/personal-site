import { Tool } from "../pages/index"

type MobileToolCardProps = {
    tool: Tool,
};

const renderToolIcon = (tool: Tool) => {
    if (tool.image) {
        return (
            <img src={`/tools/${tool.image}`} alt={tool.image} className="!max-h-full transition-base" />
        );
    } else {
        return (
            // Hide or show the light or dark image depending on the theme
            <>
                <img src={`/tools/${tool.imageLight}`} alt={tool.image} className="block dark:hidden !max-h-full transition-base" />
                <img src={`/tools/${tool.imageDark}`} alt={tool.image} className="hidden dark:block !max-h-full transition-base" />
            </>
        );
    }
};

const MobileToolCard = ({ tool }: MobileToolCardProps) => {

    const classes = `
    group border-2 border-gray-200 dark:border-gray-600 rounded-lg
    tool-card cursor-pointer flex-grow overflow-hidden relative rounded-2xl transition-base
  `;

    return (
        <div className={classes}>
            <div className="flex flex-row align-start w-full label p-4 transition-base z-20">
                <div className="h-[72px] w-[72px]">
                    {renderToolIcon(tool)}
                </div>
                <div className="tool-heading m-2 ml-4">
                    <div className="tool-title font-bold text-black dark:text-white ml-2">{tool.name}</div>
                    <div className="tool-tags mt-1 flex flex-row gap-1 flex-wrap justify-start">
                        {tool.tags.map((tag, index) => (
                            <div key={index} className="tag text-xs font-semibold text-gray-500 bg-gray-200 dark:bg-transparent dark:bg-gray-700 dark:text-white rounded-full px-2 py-1">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileToolCard;
