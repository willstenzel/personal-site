import Image from 'next/image'

export default function ProfilePhoto() {
    return (
        <div>
            <Image
                alt="Will Stenzel"
                height={100}
                width={100}
                src="/avatar.png"
                sizes="30vw"
                priority
                className="filter"
            />
        </div>
    );
}
