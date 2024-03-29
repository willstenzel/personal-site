import React, { useState } from 'react';
import ToolCard from 'components/ToolCard';
import { Tool } from '../pages/index';

type toolsListProps = {
    tools: Tool[]
};

const ToolsList = ({ tools }: toolsListProps) => {
    const [activeCard, setActiveCard] = useState(null);

    const handleClickFunction = (index: number) => {
        return () => {
            // If the card is already active, close it
            if (activeCard === index) {
                setActiveCard(null);
            } else {  // Otherwise, open it
                setActiveCard(index);
            }
        }
    };

    return (
        <div className="flex flex-wrap mb-4 items-stretch overflow-hidden w-full h-56 md:h-60">
            {tools.map((tool, index) => (
                <ToolCard
                    key={index}
                    tool={tool}
                    active={activeCard === index}
                    minimized={activeCard !== null && activeCard !== index}
                    handleClick={handleClickFunction(index)}
                />
            ))}
        </div>
    );
};

export default ToolsList;
