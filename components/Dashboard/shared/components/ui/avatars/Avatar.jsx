import clsx from "clsx";
import img from '../../../../../../assets/img/f1.png'
import Image from 'next/image'
const Avatar = ({ className, size, src, title, hover }) => {
    return (
        <div className={clsx("cursor-pointer mask mask-squircle", className)}>
            <Image
                className={clsx("w-full h-full", hover && "hover:scale-110")}
                src={src || img}
                alt={title || "user" + " avatar"}
                width={20}
                height={20}
           />
        </div>
    );
};

export default Avatar;
