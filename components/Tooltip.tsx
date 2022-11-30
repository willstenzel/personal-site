import { FC, ReactNode, useRef } from "react";

interface Props {
    children: ReactNode;
    tooltip?: string | ReactNode;
    offset?: number;
}

const ToolTip: FC<Props> = ({ children, tooltip, offset }): JSX.Element => {
    const tooltipRef = useRef<HTMLSpanElement>(null);
    const container = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={container}
            onMouseEnter={({ clientX }) => {
                if (!tooltipRef.current || !container.current) return;
                tooltipRef.current.style.left = offset + "px";
            }}
            className="group relative inline-block">
            {tooltip ? (
                <span
                    ref={tooltipRef}
                    className="invisible group-hover:visible opacity-0 group-hover:opacity-100 rounded-md border border-slate-100 dark:border-grey-300 transition p-1 absolute bottom-full mb-1 whitespace-nowrap width-full">
                    {tooltip}
                </span>
            ) : null}
            <div className="children">
                {children}
            </div>
        </div>
    );
};

export default ToolTip;
