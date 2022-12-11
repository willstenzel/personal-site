import React, { useState, useEffect, useRef } from 'react';
import ToolCard from 'components/ToolCard';

const Tools = () => {
    const [activeCard, setActiveCard] = useState(null);

    return (
        <div className="flex h-60 items-stretch overflow-hidden w-full">
            <ToolCard
                icon="walking"
                text={["Lights", "Chase your dreams"]}
                backgroundColor="red"
                iconColor="red"
                active={activeCard === "walking"}
                minimized={activeCard !== null && activeCard !== "walking"}
                setActiveCard={setActiveCard}
            />

            <ToolCard
                icon="apple-alt"
                text={["Construction", "Build the extraordinary"]}
                backgroundColor="yellow"
                iconColor="yellow"
                active={activeCard === "apple-alt"}
                minimized={activeCard !== null && activeCard !== "apple-alt"}
                setActiveCard={setActiveCard}
            />

            <ToolCard
                icon="tree"
                text={["Landscape", "Explore the surroundings"]}
                backgroundColor="green"
                iconColor="green"
                active={activeCard === "tree"}
                minimized={activeCard !== null && activeCard !== "tree"}
                setActiveCard={setActiveCard}
            />

            <ToolCard
                icon="tint"
                text={["Pools", "Soak in tranquility"]}
                backgroundColor="blue"
                iconColor="blue"
                active={activeCard === "tint"}
                minimized={activeCard !== null && activeCard !== "tint"}
                setActiveCard={setActiveCard}
            />
        </div>
    );
};

export default Tools;
