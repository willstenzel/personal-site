
const ToolCard = ({ icon, text, backgroundColor, iconColor, active }) => {
    const classes = `
      ${active ? "active" : ""}
      bg-center bg-cover bg-${backgroundColor}-500 bg-${backgroundColor}-img bg-no-repeat
      card cursor-pointer flex-grow m-2 min-w-14 overflow-hidden relative rounded-3xl transition-base
    `;

    return (
        <div className={classes}>
            <div className="absolute bg-gradient-to-b bottom-0 from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-base translate-y-1/2 z-10"></div>
            <div className="absolute bottom-0 flex label left-0 mb-3 ml-2 transition-base z-20">
                <div className={`bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-${iconColor}-500 w-10`}>
                    <i className={`fas fa-${icon}`}></i>
                </div>
                <div className="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                    <div className="font-bold opacity-0 relative transform transition-base translate-x-8">{text[0]}</div>
                    <div className="delay-100 opacity-0 relative transform transition-base translate-x-8">{text[1]}</div>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;
