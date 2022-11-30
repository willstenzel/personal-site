
type PhotoCardProps = {
    url: string;
    date: string;
};

const PhotoCard = ({ url, date }: PhotoCardProps) => (
    <div className="relative">
        <img className="rounded" src={url} />
        <style jsx>{`
        .overlay {
          background: linear-gradient(0deg, black, transparent);
        }
      `}</style>
        <div className="overlay absolute bottom-0 w-full h-16 px-4 pt-8">
            <div className="text-white text-md">{date.split(",")[0]}</div>
        </div>
    </div>
);

export default PhotoCard;
