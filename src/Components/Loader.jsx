import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="min-h-[calc(100vh-116px)] flex justify-center items-center">
            <ScaleLoader
            color="#d216ca"
            height={30}
            radius={2}
            width={5}
            />
        </div>
    );
};

export default Loader;