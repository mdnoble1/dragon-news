import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const News = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-3 border border-red-600">
                    <h2>ekhane detail dekhabo</h2>
                </div>
                <div className="border border-red-600">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;