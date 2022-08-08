import { motion } from 'framer-motion';

interface SearchDataList {
    data?: SearchData[]
}
interface SearchData {
    title?: string,
    link?: string 
}

export const sampleData: SearchData[] = [
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

export const SearchTag = ({title ='Tag', link="url"}: SearchData ) => {
    return (
        <>
            <button className="border border-white py-.5 px-5 m-1 rounded-full hover:ring-1 hover:ring-slate-200 hover:shadow-md hover:shadow-slate-700 transition ease-in-out duration-150 ">{title}</button>
        </>
    )
}
export const SearchTags = ({ data = [] }: SearchDataList) => {
    
    if (data?.length == 0) { 
            return null
    }
    return (
        <>
            <motion.div
                initial={{ opacity:.4, y: -40 }}
                animate={{ opacity:1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="artist-tags">
            
                {
                   data && data?.map((tag) => <SearchTag title={tag?.title} link={tag?.link} />)
                }
                <SearchTag />
            </motion.div>
        </>
    );
}