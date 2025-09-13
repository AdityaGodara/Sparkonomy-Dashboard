import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, UserRound } from "lucide-react"
import {slideAnimation} from "../config/motion.js";

export default function Navbar() {
    return (
        <AnimatePresence>
            <motion.div className="text-stone-50 flex justify-around items-center p-4">
                <motion.div {...slideAnimation("left")} className="flex gap-2 items-center cursor-pointer hover:scale-[1.2] transition">
                    <ChevronLeft />
                    <span>Back</span>
                </motion.div>
                <motion.h1 {...slideAnimation("up")} className="text-[20px] font-bold">Dashboard</motion.h1>
                <motion.div {...slideAnimation("right")} className="p-2 bg-stone-50 rounded-full cursor-pointer">
                    <UserRound color="black" />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
