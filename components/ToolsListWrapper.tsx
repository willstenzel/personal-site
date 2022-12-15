import { useScreenWidth } from 'hooks/useScreenWidth';
import ToolsList from './ToolsList';
import { Tool } from 'pages';

type toolsListWrapperProps = {
    tools: Tool[]
};

// This component will render the tools list in two rows on mobile and one row on desktop
const ToolsListWrapper = ({ tools }: toolsListWrapperProps) => {
    const width = useScreenWidth();

    // If the width is -1, it means that the component is tyring to be rendered on the server
    if (width === -1) return null;

    const isMobile = width < 768;

    if (isMobile) {
        // map half of the tools to one tools card and the other half to another
        return (
            <div className="flex flex-col gap-4">
                <ToolsList tools={tools.slice(0, Math.ceil(tools.length / 2))} />
                <ToolsList tools={tools.slice(Math.ceil(tools.length / 2))} />
            </div>
        );
    } else {
        // render the tools list in one row
        return <ToolsList tools={tools} />;
    }
};

export default ToolsListWrapper;
