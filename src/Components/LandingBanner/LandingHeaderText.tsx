import { motion } from 'framer-motion'
export const LandingHeaderText = () => {
    return (
        <>
            <motion.div
                initial={{x:-30}}
                animate={{ x: 0 }}
                key={'header'}
                transition= {{ duration: 0.5 }}
                className="intro-header text-6xl font-semibold">
                Discover Our Culture
            </motion.div>
            <motion.div
                initial={{x: -20}}
                animate={{ x: 0 }}
                transition= {{ duration: 0.6 }}
                key={'sub-header'}
                className="intro-description p-5">
                Explore 15+ million radio shows, DJ mixes and podcasts made by passionate creators
            </motion.div>
        </>
    )
}
  