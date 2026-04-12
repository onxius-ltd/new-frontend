"use client";
import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ─────────────────────────────────────────────────────────────────────
export interface LanguageOption {
    label: string;
    value: string;
    flag?: string;
}

interface MultiSelectAutocompleteProps {
    name: string;
    label: string;
    options?: LanguageOption[];           // optional — defaults to built-in list below
    value: string[];
    onChange: (name: string, value: string[]) => void;
    index?: number;
    tooltip?: string;
    placeholder?: string;
    error?: string;
}

// ─── Built-in language list ────────────────────────────────────────────────────
// Matches every entry from the original ContactForm2 string[] plus emoji flags.
// Import this anywhere you need the options: no need to pass it as a prop.
export const LanguageOptions: LanguageOption[] = [
    { label: "Afrikaans",             value: "af",    flag: "🇿🇦" },
    { label: "Albanian",              value: "sq",    flag: "🇦🇱" },
    { label: "Amharic",               value: "am",    flag: "🇪🇹" },
    { label: "Arabic",                value: "ar",    flag: "🇸🇦" },
    { label: "Armenian",              value: "hy",    flag: "🇦🇲" },
    { label: "Azerbaijani",           value: "az",    flag: "🇦🇿" },
    { label: "Basque",                value: "eu",    flag: "🏴" },
    { label: "Belarusian",            value: "be",    flag: "🇧🇾" },
    { label: "Bengali",               value: "bn",    flag: "🇧🇩" },
    { label: "Bosnian",               value: "bs",    flag: "🇧🇦" },
    { label: "Bulgarian",             value: "bg",    flag: "🇧🇬" },
    { label: "Burmese",               value: "my",    flag: "🇲🇲" },
    { label: "Catalan",               value: "ca",    flag: "🏴" },
    { label: "Cebuano",               value: "ceb",   flag: "🇵🇭" },
    { label: "Chinese (Simplified)",  value: "zh-cn", flag: "🇨🇳" },
    { label: "Chinese (Traditional)", value: "zh-tw", flag: "🇹🇼" },
    { label: "Corsican",              value: "co",    flag: "🇫🇷" },
    { label: "Croatian",              value: "hr",    flag: "🇭🇷" },
    { label: "Czech",                 value: "cs",    flag: "🇨🇿" },
    { label: "Danish",                value: "da",    flag: "🇩🇰" },
    { label: "Dutch",                 value: "nl",    flag: "🇳🇱" },
    { label: "English",               value: "en",    flag: "🇬🇧" },
    { label: "Esperanto",             value: "eo",    flag: "🌍" },
    { label: "Estonian",              value: "et",    flag: "🇪🇪" },
    { label: "Finnish",               value: "fi",    flag: "🇫🇮" },
    { label: "French",                value: "fr",    flag: "🇫🇷" },
    { label: "Frisian",               value: "fy",    flag: "🇳🇱" },
    { label: "Galician",              value: "gl",    flag: "🇪🇸" },
    { label: "Georgian",              value: "ka",    flag: "🇬🇪" },
    { label: "German",                value: "de",    flag: "🇩🇪" },
    { label: "Greek",                 value: "el",    flag: "🇬🇷" },
    { label: "Gujarati",              value: "gu",    flag: "🇮🇳" },
    { label: "Haitian Creole",        value: "ht",    flag: "🇭🇹" },
    { label: "Hausa",                 value: "ha",    flag: "🇳🇬" },
    { label: "Hawaiian",              value: "haw",   flag: "🇺🇸" },
    { label: "Hebrew",                value: "he",    flag: "🇮🇱" },
    { label: "Hindi",                 value: "hi",    flag: "🇮🇳" },
    { label: "Hmong",                 value: "hmn",   flag: "🌏" },
    { label: "Hungarian",             value: "hu",    flag: "🇭🇺" },
    { label: "Icelandic",             value: "is",    flag: "🇮🇸" },
    { label: "Igbo",                  value: "ig",    flag: "🇳🇬" },
    { label: "Indonesian",            value: "id",    flag: "🇮🇩" },
    { label: "Irish",                 value: "ga",    flag: "🇮🇪" },
    { label: "Italian",               value: "it",    flag: "🇮🇹" },
    { label: "Japanese",              value: "ja",    flag: "🇯🇵" },
    { label: "Javanese",              value: "jv",    flag: "🇮🇩" },
    { label: "Kannada",               value: "kn",    flag: "🇮🇳" },
    { label: "Kazakh",                value: "kk",    flag: "🇰🇿" },
    { label: "Khmer",                 value: "km",    flag: "🇰🇭" },
    { label: "Kinyarwanda",           value: "rw",    flag: "🇷🇼" },
    { label: "Korean",                value: "ko",    flag: "🇰🇷" },
    { label: "Kurdish",               value: "ku",    flag: "🌍" },
    { label: "Kyrgyz",                value: "ky",    flag: "🇰🇬" },
    { label: "Lao",                   value: "lo",    flag: "🇱🇦" },
    { label: "Latin",                 value: "la",    flag: "🏛️" },
    { label: "Latvian",               value: "lv",    flag: "🇱🇻" },
    { label: "Lithuanian",            value: "lt",    flag: "🇱🇹" },
    { label: "Luxembourgish",         value: "lb",    flag: "🇱🇺" },
    { label: "Macedonian",            value: "mk",    flag: "🇲🇰" },
    { label: "Malagasy",              value: "mg",    flag: "🇲🇬" },
    { label: "Malay",                 value: "ms",    flag: "🇲🇾" },
    { label: "Malayalam",             value: "ml",    flag: "🇮🇳" },
    { label: "Maltese",               value: "mt",    flag: "🇲🇹" },
    { label: "Maori",                 value: "mi",    flag: "🇳🇿" },
    { label: "Marathi",               value: "mr",    flag: "🇮🇳" },
    { label: "Mongolian",             value: "mn",    flag: "🇲🇳" },
    { label: "Nepali",                value: "ne",    flag: "🇳🇵" },
    { label: "Norwegian",             value: "no",    flag: "🇳🇴" },
    { label: "Odia",                  value: "or",    flag: "🇮🇳" },
    { label: "Pashto",                value: "ps",    flag: "🇦🇫" },
    { label: "Persian",               value: "fa",    flag: "🇮🇷" },
    { label: "Polish",                value: "pl",    flag: "🇵🇱" },
    { label: "Portuguese",            value: "pt",    flag: "🇵🇹" },
    { label: "Punjabi",               value: "pa",    flag: "🇮🇳" },
    { label: "Romanian",              value: "ro",    flag: "🇷🇴" },
    { label: "Russian",               value: "ru",    flag: "🇷🇺" },
    { label: "Samoan",                value: "sm",    flag: "🇼🇸" },
    { label: "Scots Gaelic",          value: "gd",    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
    { label: "Serbian",               value: "sr",    flag: "🇷🇸" },
    { label: "Sesotho",               value: "st",    flag: "🇱🇸" },
    { label: "Shona",                 value: "sn",    flag: "🇿🇼" },
    { label: "Sindhi",                value: "sd",    flag: "🇵🇰" },
    { label: "Sinhala",               value: "si",    flag: "🇱🇰" },
    { label: "Slovak",                value: "sk",    flag: "🇸🇰" },
    { label: "Slovenian",             value: "sl",    flag: "🇸🇮" },
    { label: "Somali",                value: "so",    flag: "🇸🇴" },
    { label: "Spanish",               value: "es",    flag: "🇪🇸" },
    { label: "Sundanese",             value: "su",    flag: "🇮🇩" },
    { label: "Swahili",               value: "sw",    flag: "🇰🇪" },
    { label: "Swedish",               value: "sv",    flag: "🇸🇪" },
    { label: "Tagalog",               value: "tl",    flag: "🇵🇭" },
    { label: "Tajik",                 value: "tg",    flag: "🇹🇯" },
    { label: "Tamil",                 value: "ta",    flag: "🇮🇳" },
    { label: "Tatar",                 value: "tt",    flag: "🇷🇺" },
    { label: "Telugu",                value: "te",    flag: "🇮🇳" },
    { label: "Thai",                  value: "th",    flag: "🇹🇭" },
    { label: "Turkish",               value: "tr",    flag: "🇹🇷" },
    { label: "Turkmen",               value: "tk",    flag: "🇹🇲" },
    { label: "Ukrainian",             value: "uk",    flag: "🇺🇦" },
    { label: "Urdu",                  value: "ur",    flag: "🇵🇰" },
    { label: "Uyghur",                value: "ug",    flag: "🇨🇳" },
    { label: "Uzbek",                 value: "uz",    flag: "🇺🇿" },
    { label: "Vietnamese",            value: "vi",    flag: "🇻🇳" },
    { label: "Welsh",                 value: "cy",    flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" },
    { label: "Xhosa",                 value: "xh",    flag: "🇿🇦" },
    { label: "Yiddish",               value: "yi",    flag: "🌍" },
    { label: "Yoruba",                value: "yo",    flag: "🇳🇬" },
    { label: "Zulu",                  value: "zu",    flag: "🇿🇦" },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
const ChevronDown = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 640 640" fill="currentColor">
        <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
    </svg>
);

const SearchIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const XIcon = ({ size = 10 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const CheckIcon = () => (
    <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2,6 5,9 10,3" />
    </svg>
);

// ─── Highlight helper ─────────────────────────────────────────────────────────
// Uses explicitly keyed fragments — prevents the "keyless child" React warning.
function highlightMatch(text: string, query: string): React.ReactNode {
    const matchIdx = text.toLowerCase().indexOf(query.toLowerCase());
    if (matchIdx === -1) return text;

    const before = text.slice(0, matchIdx);
    const match  = text.slice(matchIdx, matchIdx + query.length);
    const after  = text.slice(matchIdx + query.length);

    return (
        <React.Fragment>
            {before && <React.Fragment key="b">{before}</React.Fragment>}
            <mark
                key="m"
                style={{ background: "rgba(241,128,39,0.2)", color: "#F18027", borderRadius: 2, padding: "0 1px" }}
            >
                {match}
            </mark>
            {after && <React.Fragment key="a">{after}</React.Fragment>}
        </React.Fragment>
    );
}

// ─── Component ────────────────────────────────────────────────────────────────
const MultiSelectAutocomplete = ({
                                     name,
                                     label,
                                     options = LanguageOptions,   // ← no need to pass options at the call site
                                     value,
                                     onChange,
                                     index = 0,
                                     tooltip,
                                     placeholder = "Search languages…",
                                     error,
                                 }: MultiSelectAutocompleteProps) => {
    const [open, setOpen]               = useState(false);
    const [query, setQuery]             = useState("");
    const [highlighted, setHighlighted] = useState(0);
    const containerRef                  = useRef<HTMLDivElement>(null);
    const dropdownInputRef              = useRef<HTMLInputElement>(null);
    const listRef                       = useRef<HTMLUListElement>(null);

    // ── Filtered list ─────────────────────────────────────────────────────────
    const filtered = useMemo<LanguageOption[]>(() => {
        if (!query.trim()) return options;
        const q = query.toLowerCase();
        return options.filter(
            (o) => o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q)
        );
    }, [query, options]);

    // Reset keyboard highlight when filtered list changes
    useEffect(() => { setHighlighted(0); }, [filtered]);

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
                setQuery("");
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    // Auto-focus the dropdown search input when panel opens
    useEffect(() => {
        if (open) {
            const t = setTimeout(() => dropdownInputRef.current?.focus(), 60);
            return () => clearTimeout(t);
        }
    }, [open]);

    // Scroll highlighted item into view
    useEffect(() => {
        const item = listRef.current?.children[highlighted] as HTMLElement | undefined;
        item?.scrollIntoView({ block: "nearest" });
    }, [highlighted]);

    // ── Toggle / clear helpers ────────────────────────────────────────────────
    const toggle = useCallback((val: string) => {
        const next = value.includes(val)
            ? value.filter((v) => v !== val)
            : [...value, val];
        onChange(name, next);
    }, [value, name, onChange]);

    const removeAll = useCallback(() => onChange(name, []), [name, onChange]);

    // ── Keyboard navigation ───────────────────────────────────────────────────
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!open) {
            if (e.key === "Enter" || e.key === " ") setOpen(true);
            return;
        }
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
                break;
            case "ArrowUp":
                e.preventDefault();
                setHighlighted((h) => Math.max(h - 1, 0));
                break;
            case "Enter":
                e.preventDefault();
                if (filtered[highlighted]) toggle(filtered[highlighted].value);
                break;
            case "Escape":
                setOpen(false);
                setQuery("");
                break;
            case "Backspace":
                if (!query && value.length) onChange(name, value.slice(0, -1));
                break;
        }
    };

    const selectedOptions = options.filter((o) => value.includes(o.value));

    // ── Render ────────────────────────────────────────────────────────────────
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-2 flex flex-col"
            ref={containerRef}
        >
            {/* Label row */}
            <div className="flex items-center gap-1 mb-1">
                <label
                    className="text-[11px] uppercase tracking-[0.18em] font-semibold"
                    style={{ color: "var(--dark-grey-clr, #444)" }}
                >
                    {label}
                </label>

                {tooltip && (
                    <div className="relative group inline-flex">
                        <span
                            className="w-3.5 h-3.5 rounded-full inline-flex items-center justify-center text-[9px] font-bold cursor-help select-none"
                            style={{ background: "rgba(241,128,39,0.15)", color: "#F18027" }}
                        >
                            ?
                        </span>
                        <div
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-[11px] leading-snug w-56 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50 shadow-lg"
                            style={{ background: "#1a1a2e", color: "#fff" }}
                        >
                            {tooltip}
                            <div
                                className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
                                style={{
                                    borderLeft: "5px solid transparent",
                                    borderRight: "5px solid transparent",
                                    borderTop: "5px solid #1a1a2e",
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Sub-label */}
            <p className="text-[11px] mb-2.5" style={{ color: "var(--dark-grey-clr, #444)", opacity: 0.55 }}>
                {value.length > 0
                    ? `${value.length} language${value.length !== 1 ? "s" : ""} selected`
                    : "Type to search and select languages"}
            </p>

            {/* Trigger / pill box */}
            <div
                role="combobox"
                aria-expanded={open}
                aria-haspopup="listbox"
                aria-label={label}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onClick={() => setOpen(true)}
                className="relative w-full min-h-[46px] px-3 py-2 rounded-xl cursor-text transition-all flex flex-wrap gap-1.5 items-center"
                style={{
                    background: "#f9f9f9",
                    border: `1.5px solid ${open ? "#F18027" : error ? "#ef4444" : "var(--light-gray-clr, #e5e7eb)"}`,
                    boxShadow: open
                        ? "0 0 0 3px rgba(241,128,39,0.12)"
                        : error
                            ? "0 0 0 3px rgba(239,68,68,0.1)"
                            : "none",
                    outline: "none",
                }}
            >
                {/* Selected pills — prefixed key prevents empty-key collision */}
                <AnimatePresence mode="popLayout">
                    {selectedOptions.map((opt) => (
                        <motion.span
                            key={`pill-${opt.value}`}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.75 }}
                            transition={{ duration: 0.15 }}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium flex-shrink-0"
                            style={{
                                background: "rgba(241,128,39,0.09)",
                                color: "#F18027",
                                border: "1px solid rgba(241,128,39,0.28)",
                            }}
                        >
                            {opt.flag && (
                                <span className="text-[13px] leading-none">{opt.flag}</span>
                            )}
                            {opt.label}
                            <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); toggle(opt.value); }}
                                className="ml-0.5 hover:opacity-60 transition-opacity flex-shrink-0"
                                aria-label={`Remove ${opt.label}`}
                            >
                                <XIcon size={9} />
                            </button>
                        </motion.span>
                    ))}
                </AnimatePresence>

                {/* Placeholder (search lives in the dropdown, not here) */}
                {selectedOptions.length === 0 && (
                    <span className="text-[13px] select-none" style={{ color: "#aaa" }}>
                        {placeholder}
                    </span>
                )}

                {/* Right-side controls */}
                <div className="flex items-center gap-1.5 ml-auto pl-1 flex-shrink-0">
                    {value.length > 0 && (
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); removeAll(); }}
                            className="p-0.5 rounded hover:opacity-60 transition-opacity"
                            style={{ color: "#aaa" }}
                            aria-label="Clear all"
                        >
                            <XIcon size={11} />
                        </button>
                    )}
                    <span
                        className="transition-transform duration-200 flex-shrink-0"
                        style={{ color: "#aaa", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                        <ChevronDown size={15} />
                    </span>
                </div>
            </div>

            {/* Dropdown panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="dropdown"
                        initial={{ opacity: 0, y: -4, scaleY: 0.97 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -4, scaleY: 0.97 }}
                        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-1.5 rounded-xl shadow-xl z-50 relative overflow-hidden"
                        style={{
                            background: "#fff",
                            border: "1.5px solid var(--light-gray-clr, #e5e7eb)",
                            transformOrigin: "top",
                        }}
                    >
                        {/* Search bar */}
                        <div
                            className="flex items-center gap-2 px-3 py-2.5"
                            style={{ borderBottom: "1px solid var(--light-gray-clr, #e5e7eb)" }}
                        >
                            <span style={{ color: "#bbb" }}><SearchIcon /></span>
                            <input
                                ref={dropdownInputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Search languages…"
                                className="flex-1 text-[12px] bg-transparent outline-none border-none"
                                style={{ color: "var(--dark-grey-clr, #444)" }}
                            />
                            {query && (
                                <button
                                    type="button"
                                    onClick={() => setQuery("")}
                                    className="hover:opacity-60"
                                    style={{ color: "#bbb" }}
                                    aria-label="Clear search"
                                >
                                    <XIcon size={10} />
                                </button>
                            )}
                        </div>

                        {/* Options list — prefixed key prevents empty-key collision */}
                        <ul
                            ref={listRef}
                            role="listbox"
                            aria-multiselectable="true"
                            aria-label={`${label} options`}
                            className="max-h-60 overflow-y-auto py-1.5"
                        >
                            {filtered.length === 0 ? (
                                <li
                                    key="no-results"
                                    className="px-4 py-3 text-[12px] text-center"
                                    style={{ color: "#aaa" }}
                                >
                                    No languages found for &ldquo;{query}&rdquo;
                                </li>
                            ) : (
                                filtered.map((opt, i) => {
                                    const isSelected  = value.includes(opt.value);
                                    const isHighlight = i === highlighted;
                                    return (
                                        <li
                                            key={`opt-${opt.value}`}
                                            role="option"
                                            aria-selected={isSelected}
                                            onMouseEnter={() => setHighlighted(i)}
                                            onClick={() => toggle(opt.value)}
                                            className="flex items-center gap-2.5 px-3 py-2 cursor-pointer transition-colors text-[12px]"
                                            style={{
                                                background: isHighlight ? "rgba(241,128,39,0.06)" : "transparent",
                                                color: isSelected ? "#F18027" : "var(--dark-grey-clr, #444)",
                                                fontWeight: isSelected ? 600 : 400,
                                            }}
                                        >
                                            {opt.flag && (
                                                <span className="text-base leading-none w-5 text-center flex-shrink-0">
                                                    {opt.flag}
                                                </span>
                                            )}
                                            <span className="flex-1">
                                                {query ? highlightMatch(opt.label, query) : opt.label}
                                            </span>
                                            <span
                                                className="w-4 h-4 rounded-md flex items-center justify-center flex-shrink-0 transition-all"
                                                style={{
                                                    background: isSelected ? "#F18027" : "transparent",
                                                    border: `1.5px solid ${isSelected ? "#F18027" : "#ddd"}`,
                                                }}
                                            >
                                                {isSelected && <CheckIcon />}
                                            </span>
                                        </li>
                                    );
                                })
                            )}
                        </ul>

                        {/* Footer */}
                        <div
                            className="px-3 py-2 flex items-center justify-between"
                            style={{
                                borderTop: "1px solid var(--light-gray-clr, #e5e7eb)",
                                background: "#f9f9f9",
                            }}
                        >
                            <span className="text-[11px]" style={{ color: "#aaa" }}>
                                {value.length} of {options.length} selected
                            </span>
                            <button
                                type="button"
                                onClick={() => { setOpen(false); setQuery(""); }}
                                className="text-[11px] font-bold hover:underline"
                                style={{ color: "#F18027" }}
                            >
                                Done ✓
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Error message */}
            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-[11px]"
                    style={{ color: "#ef4444" }}
                >
                    {error}
                </motion.p>
            )}
        </motion.div>
    );
};

export default MultiSelectAutocomplete;
