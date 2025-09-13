import { AnimatePresence, motion } from "framer-motion"
import { CirclePlus } from "lucide-react"
import {slideAnimation, bounceIn} from "../config/motion.ts";

export default function LeftPanel() {
    return (
        <AnimatePresence>
                <motion.div {...bounceIn} className='p-5 bg-stone-50 w-[100%] md:w-[30%] h-fit rounded-2xl flex flex-col gap-6'>

                    <motion.div  className='bg-gray-200 hover:bg-gray-300 transition px-3 py-10 rounded-lg w-full cursor-pointer flex flex-col gap-6 items-center cursor-pointer'>
                        <CirclePlus className="w-10 h-10 text-pink-500" />
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h1 className='invoice-text text-xl'>Create Invoice</h1>
                            <span className="text-gray-500 text-md">Start by creating and sending new invoice</span>
                        </div>
                    </motion.div>

                    <span className="items-center text-sm text-center text-[#8134AF] cursor-pointer hover:underline">Or upload an existing invoice and set payment reminder.</span>

                    <div>

                        <div className="flex flex-col gap-2 mb-4 p-5 border-2 border-gray-200 rounded-lg hover:shadow-lg transition cursor-pointer">
                            <h1 className="text-md text-gray-500">Total Earnings</h1>
                            <span className="text-2xl font-bold text-[#8134AF]">$1,25,000</span>
                        </div>

                        <div className="flex gap-2 justify-between">
                            <div className="flex flex-col gap-2 border-2 border-gray-200 rounded-lg p-5 mt-2 w-full hover:shadow-lg transition cursor-pointer">
                                <h1 className="text-md text-gray-500">Payment Awaited</h1>
                                <span className="text-2xl font-bold text-[#8134AF]">$25,000</span>
                            </div>
                            <div className="flex flex-col gap-2 border-2 border-gray-200 rounded-lg p-5 mt-2 w-full hover:shadow-lg transition cursor-pointer">
                                <h1 className="text-md text-gray-500">Payment Overdue</h1>
                                <span className="text-2xl font-bold text-[#8134AF]">$25,000</span>
                            </div>
                        </div>

                    </div>

                </motion.div>
        </AnimatePresence>
    )
}
