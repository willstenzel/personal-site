
export default function VerticalSectionWrapper({ id, children }) {
    return (
        <div id={id} className="flex flex-col my-8">
            {children}
        </div>
    );
};
