import { Crown } from "lucide-react";
import IncomeTrendChart from "./IncomeTrendChart";
import Invoices from "./Invoices";
import { useState } from "react";

export default function MainContent() {
    const filters = ["1 Month", "3 Month", "1 Year", "Custom"];
    const [selected, setSelected] = useState("1 Month"); // default selection

    return (
        <div className="bg-stone-50 rounded-2xl w-full px-10 py-5 flex flex-col gap-5">
            <div className="border-2 border-gray-200 rounded-lg p-5 mb-5 flex flex-col md:flex-row justify-between items-center">
                <h1 className="font-semibold text-gray-500">Time Period</h1>
                <div className="flex flex-row items-center">
                    {filters.map((filter, index) => {
                        const isSelected = selected === filter;
                        return (
                            <span
                                key={index}
                                onClick={() => setSelected(filter)}
                                className={`inline-flex items-center gap-1 cursor-pointer mr-5 px-3 py-1 rounded-full text-xs md:text-sm transition
                  ${isSelected
                                        ? "bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] text-white"
                                        : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                {filter}
                                {filter === "1 Year" && (
                                    <Crown
                                        size={16}
                                        className={isSelected ? "text-white" : "text-[#ff24e2]"}
                                    />
                                )}
                            </span>
                        );
                    })}
                </div>
            </div>

            <div>
                <h1 className="text-gray-500 font-bold text-lg">Income Trend</h1>
                <p className="text-gray-400">Your monthly income and growth for the last 6 months.</p>
                <IncomeTrendChart />
            </div>

            <div>
                <h1 className="text-gray-500 font-bold text-lg mb-5">Your Invoices</h1>
                <Invoices />
            </div>
        </div>
    );
}
