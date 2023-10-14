import { useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import NewsDetailCard from "./NewsDetailCard";
import { useEffect, useState } from "react";

const News = () => {

    const [ detail , setDetail ] = useState();

    const { id } = useParams();

    // console.log(id)
    
    const data = useLoaderData();

    // console.log(data)

    useEffect( () => {

        const findDetail = data?.find( detail => detail._id == id)

        setDetail(findDetail);
    } , [ id , data ])


    return (
        <div className="container mx-auto">
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                    <h2 className="font-semibold text-xl text-[#403F3F] mt-2 mb-5">Dragon News</h2>
                    {
                        <NewsDetailCard data={detail}></NewsDetailCard>
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;