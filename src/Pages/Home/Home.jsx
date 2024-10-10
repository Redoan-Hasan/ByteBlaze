import Hero from "../../Components/Hero";
import Svg from '../../assets/wave.svg'


const Home = () => {
    return (
        <div>
            <div>
                <div className="relative z-20">
                    <Hero></Hero>
                    <img className="absolute bottom-0 w-full z-10  " src={Svg} alt="SVG Image" />
                </div>
            </div>
        </div>
    )
}
export default Home;