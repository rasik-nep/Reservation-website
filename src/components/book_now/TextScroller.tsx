import Marquee from "react-fast-marquee";

type TextScrollerProps = {
    text: string;
};

const TextScroller = ({ text }: TextScrollerProps) => {
    return (
        <Marquee autoFill={true} speed={200}>
            <div className="text-red-400 m-5 text-8xl font-bold font-cursive">
                {text}
            </div>
        </Marquee>
    );
};

export default TextScroller;
