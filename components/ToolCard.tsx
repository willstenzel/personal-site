import Image from "next/image";

const ToolCard = ({ icon, text, backgroundColor, iconColor, active, setActiveCard, minimized }) => {
    const handleClick = () => {
        if (active) {
            setActiveCard(null);
        } else {
            setActiveCard(icon);
        }
    };

    const classes = `${active ? "active" : ""} ${minimized ? "minimized" : ""}
    group border-2 border-gray-200 dark:border-gray-600 rounded-lg
    tool-card cursor-pointer flex-grow mr-4 overflow-hidden relative rounded-2xl transition-base
  `;

    return (
        <div className={classes} onClick={handleClick}>
            <div className="absolute flex flex-col w-full h-full label p-4 transition-base z-20">
                <div className="icon justify-start items-center">
                    <img src="/notion-logo.png" alt="Notion" className="transition-base" />
                </div>
                <div className="tool-heading">
                    <div className="tool-title font-bold text-black ml-2">{text[0]}</div>
                    <div className="tool-tags flex flex-row gap-1 flex-wrap justify-start">
                        <div className="rounded-full px-2 py-1 bg-gray-200 text-gray-800 text-xs font-semibold">
                            Tag 1
                        </div>
                        <div className="rounded-full px-2 py-1 bg-gray-200 text-gray-800 text-xs font-semibold">
                            Tag 2
                        </div>
                        <div className="rounded-full px-2 py-1 bg-gray-200 text-gray-800 text-xs font-semibold">
                            Tag 3
                        </div>
                        <div className="rounded-full px-2 py-1 bg-gray-200 text-gray-800 text-xs font-semibold">
                            Tag 4
                        </div>
                    </div>
                </div>
                <div className="content -mt-6 flex flex-col justify-center leading-tight text-black whitespace-pre">
                    <div className="opacity-0 relative transform transition-base translate-x-8">{text[1]}</div>
                </div>

                <div className="expand-icon absolute bottom-4 right-4 transform group-hover:scale-[1.15] transition-all">
                    <Image
                        alt="expand"
                        height={32}
                        width={32}
                        src="/expand.png"
                    />
                </div>
                <div className="collapse-icon opacity-0 absolute bottom-4 right-4 transform group-hover:scale-[1.15] transition-all">
                    <Image
                        alt="collapse"
                        height={32}
                        width={32}
                        src="/collapse.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default ToolCard;
