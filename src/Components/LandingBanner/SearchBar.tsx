import { motion } from 'framer-motion';

export const SearchBar = () => {
    return (
        <>
            <motion.div
                initial={{ opacity:.4, y: -40 }}
                animate={{ opacity:1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4">
                <input type="text" className="border-none w-[85%] md:w-[100%] h-10 py-2 px-5 ring-1 transition-shadow duration-200 linear ring-red-900 text-black focus:outline-none hover:shadow-md hover:shadow-red-600 rounded-full" placeholder="Search for Genre, Tag or Category" />
            </motion.div>
        </>
    )
}