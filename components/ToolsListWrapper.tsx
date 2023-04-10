import ToolsList from './ToolsList';
import { Tool } from 'pages';
import MobileToolCard from './MobileToolCard';

type toolsListWrapperProps = {
    tools: Tool[]
};


const ToolsListWrapper = ({ tools }: toolsListWrapperProps) => {
    let toolsListGroups = [];

    for (let i = 0; i < tools.length; i += 4) {
        toolsListGroups.push(tools.slice(i, i + 4));
    }

    return (
        <>
            {/* Large screen */}
            <div className="flex-col gap-4 hidden md:block">
                {toolsListGroups.map((toolsListGroup, index) => (<ToolsList key={index} tools={toolsListGroup} />))}
            </div>
            {/* Medium screen */}
            <div className="flex-col hidden sm:block md:hidden">
                {toolsListGroups.map((toolsListGroup, index) => (
                    <>
                        <ToolsList tools={toolsListGroup.slice(0, 2)} />
                        <ToolsList tools={toolsListGroup.slice(2, 4)} />
                    </>
                ))}
            </div>
            {/* Small screen */}
            <div className="flex flex-col gap-4 sm:hidden">
                {tools.map((tool, index) => (
                    <MobileToolCard key={index} tool={tool} />
                ))}
            </div>
        </>
    )
};

export default ToolsListWrapper;
