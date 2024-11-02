import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <Banner />
            {/* Headings */}
            <Heading title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'} />
            {/* Tab Section */}
            {/* Dynamic Nested Components Section */}
        </div>
    );
};

export default Home;