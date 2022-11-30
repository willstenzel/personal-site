export default function HorizontalSectionWrapper({ id, children }) {
    return (
        <div id={id} className="flex gap-6 flex-col md:flex-row my-8">
            {children}
        </div>
    );
};
