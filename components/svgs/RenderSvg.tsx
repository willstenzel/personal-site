import ExternalLink from "./ExternalLink";
import Twitter from "./Twitter";
import Github from "./Github";
import News from "./News";

const defaultAnimation = "transform hover:scale-[1.08] transition-all";

const RenderSvg = ({ icon }) => {
    switch (icon) {
        case "ExternalLink":
            return <ExternalLink className={defaultAnimation} />;
        case "Github":
            return <Github className={defaultAnimation} />;
        case "Twitter":
            return <Twitter className={defaultAnimation} />;
        case "News":
            return <News className={defaultAnimation} />;
        default:
            return null;
    }
};

export default RenderSvg;
