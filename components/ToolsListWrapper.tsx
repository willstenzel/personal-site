import ToolsList from './ToolsList';
import { Tool } from 'pages';

type toolsListWrapperProps = {
    tools: Tool[]
};

// This component will render the tools list in two rows on mobile and one row on desktop
const ToolsListWrapper = ({ tools }: toolsListWrapperProps) => (
    <>
        <div className="flex flex-col gap-4 md:hidden">
            <ToolsList tools={tools.slice(0, Math.ceil(tools.length / 2))} />
            <ToolsList tools={tools.slice(Math.ceil(tools.length / 2))} />
        </div>
        <div className="hidden md:block">
            <ToolsList tools={tools} />
        </div>
    </>
);

export default ToolsListWrapper;
