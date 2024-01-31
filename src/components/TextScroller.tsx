import Marquee from "react-fast-marquee";

type TextScrollerProps = {
    text: string;
};

const TextScroller = ({ text }: TextScrollerProps) => {
    return (
        <Marquee autoFill={true} speed={200}>
            <div className="text-red-400 m-10 text-8xl font-bold ">
                {text}
            </div>
        </Marquee>
    );
};

export default TextScroller;
