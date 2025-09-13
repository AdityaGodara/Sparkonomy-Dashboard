import { useState } from "react";
import { invoice_data } from "../data/invoice_data.js";
import { AnimatePresence,motion } from "framer-motion";
import {slideAnimation} from "../config/motion.js";
import { Pen, BellRing } from "lucide-react";

export default function Invoices() {
    const [showAll, setShowAll] = useState(false);

    const colorMap = {
        update: "bg-[#8134AF] text-stone-50",
        unpaid: "bg-gray-300 text-gray-600",
        paid: "bg-green-100 text-green-600",
        partial: "bg-yellow-100 text-yellow-600",
        overdue: "bg-red-100 text-red-600",
        disputed: "bg-red-100 text-red-600",
        awaited: "bg-yellow-100 text-yellow-600",
        draft: "bg-gray-100 text-gray-600",
    };

    const displayedInvoices = showAll ? invoice_data : invoice_data.slice(0, 3);

    return (
        <AnimatePresence>
            <div>
                {displayedInvoices.map((invoice, index) => (
                    <motion.div
                        variants={slideAnimation('left')}
                        initial="initial"
                        exit="exit"
                        whileInView="animate"
                        viewport={{once: true, amount: 0.5}}
                        key={index}
                        className="flex justify-between items-center px-5 py-3 rounded-2xl mb-5 border-2 border-gray-200"
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="text-md font-bold text-gray-700">{invoice.title}</h1>
                            <p className="text-gray-500">
                                ₹{invoice.amount}, Due: {invoice.due}
                            </p>
                        </div>

                        <div className="flex gap-5 items-center">
                            <button
                                className={`text-sm px-5 py-3 rounded-full hover:shadow-lg transition cursor-pointer ${colorMap[invoice.map] || ""}`}
                            >
                                {invoice.status}
                            </button>
                            {invoice.status === "Draft" && <Pen size={20} color="#454545" className="cursor-pointer" />}
                            {invoice.status === "Overdue" && <BellRing size={20} color="#454545" className="cursor-pointer" />}
                            {invoice.status === "Awaited" && <BellRing size={20} color="#454545" className="cursor-pointer" />}
                        </div>
                    </motion.div>
                ))}

                {invoice_data.length > 5 && (
                    <div className="text-center">
                        <button
                            className="text-sm px-5 py-3 rounded-full bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
            </div>
        </AnimatePresence>
    );
}
