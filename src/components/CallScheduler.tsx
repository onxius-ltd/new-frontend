"use client";
import React from "react";
import {motion} from "framer-motion";
import {fadeUp} from "./ContactForm2";
import FieldError from "./FieldError";

const CallTimeSlots = [
    "11:00 AM – 12:00 PM",
    "12:00 PM – 1:00 PM",
    "01:00 PM – 02:00 PM",
    "02:00 PM – 03:00 PM",
    "03:00 PM – 04:00 PM"
];

interface CallSchedulerProps {
    value: { date: string; time: string };
    onChange: (v: { date: string; time: string }) => void;
    index: number;
    dateError?: string;
    timeError?: string;
}

const CallScheduler = ({value, onChange, index, dateError, timeError}: CallSchedulerProps) => {
    const today = new Date().toISOString().split("T")[0];

    // Derive border colour purely from the error prop — no local state involved
    const dateBorder = dateError
        ? "var(--dark-blue-clr)"
        : value.date
            ? "var(--sky-clr)"
            : "var(--light-gray-clr)";

    const timeBorder = timeError
        ? "var(--dark-blue-clr)"
        : value.time
            ? "var(--sky-clr)"
            : "var(--light-gray-clr)";

    return (
        <motion.div
            variants={fadeUp}
            custom={index}
            initial="hidden"
            animate="visible"
            className="col-span-2"
        >
            <div
                className="rounded-lg p-4 lg:p-5 bg-[var(--sky-clr)]/10 shadow-sm"
                style={{border: `1.5px solid var(--sky-clr)`}}
            >
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start gap-3 mb-4">
                    <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 bg-[var(--sky-clr)]/20">
                        📞
                    </div>
                    <div>
                        <p className="text-lg font-semibold m-0" style={{color: "var(--metalic-gray-clr)"}}>
                            Best Time to Call
                        </p>
                        <p className="text-base leading-relaxed m-0" style={{color: "var(--dark-grey-clr)"}}>
                            Our team will call you at your preferred time to discuss your project and provide a tailored
                            quotation.
                        </p>
                    </div>
                </div>

                {/* Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    {/* ── Preferred Date ── */}
                    <div>
                        <label
                            className="block text-sm capitalize tracking-widest font-bold mb-1 md:mb-1.5"
                            style={{color: "var(--sky-clr)"}}
                        >
                            Preferred Date
                        </label>
                        <input
                            type="date"
                            min={today}
                            value={value.date}
                            onChange={(e) => onChange({...value, date: e.target.value})}
                            className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all"
                            style={{
                                background: "#fff",
                                border: `1.5px solid ${dateBorder}`,
                                color: "var(--metalic-gray-clr)",
                            }}
                        />
                        <FieldError msg={dateError}/>
                    </div>

                    {/* ── Preferred Time Slot ── */}
                    <div>
                        <label
                            className="block text-sm capitalize tracking-widest font-bold mb-1 md:mb-1.5"
                            style={{color: "var(--sky-clr)"}}
                        >
                            Preferred Time Slot
                        </label>
                        <select
                            value={value.time}
                            onChange={(e) => onChange({...value, time: e.target.value})}
                            className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all appearance-none cursor-pointer"
                            style={{
                                background: "#fff",
                                border: `1.5px solid ${timeBorder}`,
                                color: value.time ? "var(--metalic-gray-clr)" : "var(--dark-grey-clr)",
                            }}
                        >
                            <option value="">Select a time…</option>
                            {CallTimeSlots.map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                        <FieldError msg={timeError}/>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default CallScheduler;