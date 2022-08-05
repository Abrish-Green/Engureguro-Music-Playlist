import { motion } from 'framer-motion';
const data: Array<Object> = [
    {
        title: "button",
        link: ""
    },
    {
        title: "button",
        link: ""
    },
    {
        title: "button",
        link: ""
    },
    {
        title: "button",
        link: ""
    },{
        title: "button",
        link: ""
    },
    {
        title: "button",
        link: ""
    },
    {
        title: "button",
        link: ""
    },
    {
        title: "button",
        link: ""
    }
]

interface SearchDataList {
    data?: SearchData[]
}
interface SearchData {
    title: string,
    link: string 
}
export const SearchTags = ( {data}: SearchDataList) => {
    return (
        <>
            <motion.div
                initial={{ opacity:.4, y: -40 }}
                animate={{ opacity:1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="artist-tags">
                                <button className="border border-white py-.5 px-5 m-1 rounded-full">button 1</button>
                                <button className="border border-white py-.5 px-5 m-1 rounded-full">button 1</button>
                                <button className="border border-white py-.5 px-5 m-1 rounded-full">button 1</button>
                                <button className="border border-white py-.5 px-5 m-1 rounded-full">button 1</button>
                                <button className="border border-white py-.5 px-5 m-1 rounded-full">button 1</button>
                                <button className="border border-white py-.5 px-5 m-1 rounded-full">button 1</button>
                                
            </motion.div>
        </>
    );
}