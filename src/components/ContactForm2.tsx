"use client";
import React, {useState, useRef, ChangeEvent} from "react";
import {motion, AnimatePresence, Variants} from "framer-motion";
import CallScheduler from "./CallScheduler";
import SectionHeading from "./SectionHeading";
import FloatingInput from "./FloatingInput";
import FloatingSelect from "./FloatingSelect";
import FileUpload from "./FileUpload";
import RadioGroup from "./RadioGroup";
import FeaturesSelector from "./FeaturesSelector";
import MultiSelect from "./MultiSelect";
import SampleSitesInput from "./SampleSitesInput";
import FloatingTextarea from "./FloatingTextarea";
import ReCAPTCHA from "react-google-recaptcha";
import FieldError from "./FieldError";
import PhoneInput, {COUNTRY_CODES} from "./PhoneInput";
import MultiSelectAutocomplete, {LanguageOptions} from "./MultiSelectAutocomplete";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormState {
    [key: string]: string | string[] | File | null | { date: string; time: string };
}

// ─── Data options ─────────────────────────────────────────────────────────────
const ProjectType = [
    "Website",
    "Mobile app Android",
    "Mobile app IOS",
    "Mobile app (Android and IOS)",
    "Website, Mobile app Android and IOS",
    "Website Management",
    "App management",
    "Website and Apps management",
    "Not Sure, Need advice"
];
const BusinessScope = ["Local area only", "Country Wide", "Internal MarketPlace"];
const BooleanOptions = ["Yes", "No"];
const ApplicationTypes = [
    "Simple Business Info (portfolio / small application up to 5–6 pages)",
    "Booking System",
    "E-commerce",
    "LMS",
    "Online Ordering / Payments",
    "Full Custom System (advanced)",
    "Other",
];
// NOTE: LanguageOptions is now imported from MultiSelectAutocomplete — no local copy needed.

// const MaintenanceSupportOptions = ["Yes (monthly support)", "No (one-time build only)"];
const MaintenanceSupportOptions = [
    "Monthly Maintenance & Support",
    "Yearly Maintenance & Support",
    "No Support (One-Time Development)"
];
const BudgetOptions = [
    "£239  – £499",
    "£500 – £999",
    "£1,000 – £2,500",
    "£2,500 – £5,000",
    "£5,000+",
    "Not sure yet",
];

// ─── Animation variants ───────────────────────────────────────────────────────
export const fadeUp: Variants = {
    hidden: {opacity: 0, y: 16},
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.42,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    }),
};

// ─── Success Screen ───────────────────────────────────────────────────────────
const SuccessScreen = ({onReset}: { onReset: () => void }) => (
    <motion.div
        key="success"
        initial={{opacity: 0, scale: 0.94}}
        animate={{opacity: 1, scale: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
        className="flex flex-col items-center justify-center text-center py-16 px-8"
    >
        <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{delay: 0.2, type: "spring", stiffness: 180, damping: 14}}
            className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6"
            style={{
                background: "rgba(241,128,39,0.1)",
                border: `2.5px solid rgba(241,128,39,0.3)`,
            }}
        >
            <span style={{color: "var(--sky-clr)"}}>✓</span>
        </motion.div>
        <motion.div initial={{opacity: 0, y: 14}} animate={{opacity: 1, y: 0}} transition={{delay: 0.4}}>
            <h2 className="text-3xl font-light mb-2" style={{color: "var(--metalic-gray-clr)"}}>
                Thank You!
            </h2>
            <p className="text-sm font-semibold mb-6 tracking-wide" style={{color: "var(--sky-clr)"}}>
                Enquiry received successfully
            </p>
            <div
                className="rounded-2xl px-8 py-6 max-w-lg mx-auto mb-5 text-left"
                style={{background: "rgba(241,128,39,0.05)", border: `1px solid rgba(241,128,39,0.2)`}}
            >
                <p className="text-sm font-semibold mb-3" style={{color: "var(--metalic-gray-clr)"}}>
                    We have received your details.
                </p>
                <p className="text-sm leading-relaxed" style={{color: "var(--dark-grey-clr)"}}>
                    We will review your business needs and our team member will contact you to provide a
                    full, tailored quotation plan within{" "}
                    <strong style={{color: "var(--sky-clr)"}}>1–2 working days</strong>.
                </p>
            </div>
            <div
                className="rounded-xl px-6 py-3.5 max-w-md mx-auto mb-8 flex items-start gap-2.5"
                style={{background: "#f0fdf4", border: "1px solid #bbf7d0"}}
            >
                <span className="text-green-600 text-base mt-0.5">📧</span>
                <p className="text-[12px] text-green-700 text-left leading-relaxed">
                    A confirmation email has been sent to your inbox. Please check your spam folder if
                    you don&apos;t see it within a few minutes.
                </p>
            </div>
            <button
                onClick={onReset}
                className="text-xs tracking-widest uppercase px-6 py-2.5 rounded-xl transition-all"
                style={{border: `1.5px solid var(--light-gray-clr)`, color: "var(--dark-grey-clr)"}}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--sky-clr)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--sky-clr)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--light-gray-clr)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--dark-grey-clr)";
                }}
            >
                Submit another enquiry
            </button>
        </motion.div>
    </motion.div>
);

// ─── Allowed logo file types ──────────────────────────────────────────────────
const ALLOWED_LOGO_TYPES = ["image/png", "image/jpg", "image/jpeg", "image/svg+xml"];
const ALLOWED_LOGO_EXTS = [".png", ".jpg", ".jpeg", ".svg"];

// ─── Main Form ────────────────────────────────────────────────────────────────
const ContactForm2: React.FC = () => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        "business-name": "",
        project: "",
        "service-type": "",
        "existing-app-web-link-update": "",
        "business-location": "",
        "business-scope": "",
        "domain-and-hosting": "",
        "existing-domain-link": "",
        "application-type": [],
        "other-application-type": "",
        "language-options": [],
        "website-content": "",
        "media-content": "",
        "project-brief": "",
        "admin-panel": "",
        "on-going-maintenance": "",
        "admin-panel-brief": "",
        budget: "",
        message: "",
        "business-logo": null,
        "sample-sites": [],
        "website-features": [],
        "call-schedule": {date: "", time: ""},
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [countryCode, setCountryCode] = useState("");

    const get = (k: string) => form[k] as string;
    const getArr = (k: string) => form[k] as string[];
    const getSchedule = () => form["call-schedule"] as { date: string; time: string };

    const clearError = (key: string) => {
        setErrors((prev) => {
            const e = {...prev};
            delete e[key];
            return e;
        });
    };

    const set = (
        name: string,
        value: string | string[] | File | null | { date: string; time: string }
    ) => {
        setForm((prev) => ({...prev, [name]: value}));
        clearError(name);
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => set(e.target.name, e.target.value);

    const handleScheduleChange = (v: { date: string; time: string }) => {
        setForm((prev) => ({...prev, "call-schedule": v}));
        if (v.date) clearError("call-schedule-date");
        if (v.time) clearError("call-schedule-time");
    };

    // ── Validation ────────────────────────────────────────────────────────────
    const validate = (): boolean => {
        const next: Record<string, string> = {};
        const schedule = getSchedule();

        const requiredStr: { key: string; label: string }[] = [
            {key: "name", label: "Your name"},
            {key: "email", label: "Your email"},
            {key: "phone", label: "Phone number"},
            {key: "business-name", label: "Business name"},
            {key: "project", label: "Project type"},
            {key: "service-type", label: "New build or update answer"},
            {key: "business-location", label: "Business location"},
            {key: "business-scope", label: "Business scope"},
            {key: "domain-and-hosting", label: "Domain & hosting answer"},
            {key: "website-content", label: "Website content answer"},
            {key: "media-content", label: "Professional photos answer"},
            {key: "project-brief", label: "Project brief"},
            {key: "admin-panel", label: "Admin panel answer"},
            {key: "on-going-maintenance", label: "Ongoing maintenance answer"},
            {key: "admin-panel-brief", label: "Admin panel brief"},
            {key: "budget", label: "Budget range"},
        ];
        requiredStr.forEach(({key, label}) => {
            if (!(form[key] as string).trim()) next[key] = `${label} is required.`;
        });

        const requiredArr: { key: string; label: string }[] = [
            {key: "application-type", label: "Please select at least one application type"},
            {key: "website-features", label: "Please select at least one website feature"},
            {key: "language-options", label: "Please select at least one language option"},
        ];
        requiredArr.forEach(({key, label}) => {
            if ((form[key] as string[]).length === 0) next[key] = `${label}.`;
        });

        // Email format
        const email = (form.email as string).trim();
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            next.email = "Please enter a valid email address.";
        }

        // Phone validation
        const phone = (form.phone as string).trim().replace(/\s|-|\(|\)/g, "");
        if (!countryCode) {
            next.phone = "Please select a country code.";
        } else if (!phone) {
            next.phone = "Phone number is required.";
        } else if (!/^\d+$/.test(phone)) {
            next.phone = "Phone number must contain digits only.";
        } else {
            const country = COUNTRY_CODES.find((c) => c.code === countryCode);
            if (country && (phone.length < country.minLen || phone.length > country.maxLen)) {
                next.phone = `Phone number for ${countryCode} must be ${
                    country.minLen === country.maxLen
                        ? `${country.minLen} digits`
                        : `${country.minLen}–${country.maxLen} digits`
                }.`;
            }
        }

        // Business logo type check
        const logo = form["business-logo"] as File | null;
        if (logo) {
            const ext = logo.name.slice(logo.name.lastIndexOf(".")).toLowerCase();
            if (!ALLOWED_LOGO_TYPES.includes(logo.type) && !ALLOWED_LOGO_EXTS.includes(ext)) {
                next["business-logo"] = "Logo must be a PNG, JPG, JPEG, or SVG file.";
            }
        }

        // Conditional: updating existing → URL required
        if (get("service-type") === "Yes, update existing") {
            if (!(form["existing-app-web-link-update"] as string).trim()) {
                next["existing-app-web-link-update"] = "Please provide the URL of your existing site.";
            }
        }

        // Conditional: "Other" app type → description required
        if ((form["application-type"] as string[]).includes("Other")) {
            if (!(form["other-application-type"] as string).trim()) {
                next["other-application-type"] = "Please describe your application type.";
            }
        }

        // Conditional: has domain → URL required
        if (get("domain-and-hosting") === "Yes") {
            if (!(form["existing-domain-link"] as string).trim()) {
                next["existing-domain-link"] = "Please provide your domain URL.";
            }
        }

        // Call schedule
        if (!schedule.date) next["call-schedule-date"] = "Please select a preferred date.";
        if (!schedule.time) next["call-schedule-time"] = "Please select a preferred time slot.";

        // reCAPTCHA
        if (!captchaToken) next["captcha"] = "Please complete the reCAPTCHA verification.";

        setErrors(next);

        if (Object.keys(next).length > 0) {
            setTimeout(() => {
                const firstErrEl = document.querySelector("[data-error='true']") as HTMLElement | null;
                firstErrEl?.scrollIntoView({behavior: "smooth", block: "center"});
            }, 50);
        }

        return Object.keys(next).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        try {
            const res = await fetch("/api/customer-enquiry-mail-send", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({...form, captchaToken}),
            });
            if (!res.ok) throw new Error("Failed");
            setSubmitted(true);
            setCaptchaToken(null);
            recaptchaRef.current?.reset();
        } catch {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const isUpdating = get("service-type") === "Yes, update existing";
    const hasOwnDomain = get("domain-and-hosting") === "Yes";
    const isOtherApp = (form["application-type"] as string[]).includes("Other");

    let fi = 0;
    const idx = () => fi++;

    return (
        <div className="min-h-screen">
            {/* Ambient blobs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-60 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
                     style={{background: "rgba(241,128,39,0.06)"}}/>
                <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full blur-[120px]"
                     style={{background: "rgba(238,95,17,0.04)"}}/>
            </div>

            <div className="relative mx-auto">
                <AnimatePresence mode="wait">
                    {submitted ? (
                        <SuccessScreen key="success" onReset={() => {
                            setSubmitted(false);
                            fi = 0;
                        }}/>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{opacity: 0, y: 16}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.4}}
                        >
                            {/* Best Time to Call */}
                            <div className="mb-6">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                                    <CallScheduler
                                        value={getSchedule()}
                                        onChange={handleScheduleChange}
                                        index={idx()}
                                        dateError={errors["call-schedule-date"]}
                                        timeError={errors["call-schedule-time"]}
                                    />
                                </div>
                            </div>

                            {/* Main card */}
                            <div className="rounded-lg p-4 lg:p-5 bg-white shadow-sm mb-1">
                                <form onSubmit={handleSubmit} noValidate>
                                    <div
                                        className="flex flex-column gap-4 md:grid md:grid-cols-2 gap-x-3 lg:gap-x-4 gap-y-4 lg:gap-y-5">

                                        {/* ── Personal Info ─────────────────────────────── */}
                                        <SectionHeading label="Personal Info" index={idx()}/>

                                        <div className="flex flex-col" data-error={!!errors.name}>
                                            <FloatingInput name="name" label="Your Name" value={get("name")}
                                                           onChange={handleChange} required index={idx()}/>
                                            <FieldError msg={errors.name}/>
                                        </div>
                                        <div className="flex flex-col" data-error={!!errors.email}>
                                            <FloatingInput name="email" label="Your Email" type="email"
                                                           value={get("email")} onChange={handleChange} required
                                                           index={idx()}/>
                                            <FieldError msg={errors.email}/>
                                        </div>
                                        <div className="flex flex-col" data-error={!!errors.phone}>
                                            <PhoneInput name="phone" label="Your Phone" value={get("phone")}
                                                        onChange={handleChange} onCountryChange={setCountryCode}
                                                        countryCode={countryCode} required index={idx()}/>
                                            <FieldError msg={errors.phone}/>
                                        </div>
                                        <div className="flex flex-col" data-error={!!errors["business-name"]}>
                                            <FloatingInput name="business-name" label="Business Name"
                                                           value={get("business-name")} onChange={handleChange}
                                                           required index={idx()}/>
                                            <FieldError msg={errors["business-name"]}/>
                                        </div>

                                        {/* ── Project Type ──────────────────────────────── */}
                                        <SectionHeading label="Project Type" index={idx()}/>

                                        <div className="col-span-2 flex flex-col" data-error={!!errors.project}>
                                            <FloatingSelect name="project" label="What do you need from Onxius?"
                                                            options={ProjectType} value={get("project")}
                                                            onChange={handleChange} required index={idx()} fullWidth/>
                                            <FieldError msg={errors.project}/>
                                        </div>

                                        <div className="col-span-2 flex flex-col"
                                             data-error={!!errors["business-logo"]}>
                                            <FileUpload
                                                name="business-logo"
                                                label="Business Logo (optional PNG, JPG, JPEG, SVG only)"
                                                onChange={(n, f) => {
                                                    set(n, f);
                                                    if (f) {
                                                        const ext = f.name.slice(f.name.lastIndexOf(".")).toLowerCase();
                                                        if (!ALLOWED_LOGO_TYPES.includes(f.type) && !ALLOWED_LOGO_EXTS.includes(ext)) {
                                                            setErrors((prev) => ({
                                                                ...prev,
                                                                "business-logo": "Logo must be a PNG, JPG, JPEG, or SVG file.",
                                                            }));
                                                        } else {
                                                            clearError("business-logo");
                                                        }
                                                    } else {
                                                        clearError("business-logo");
                                                    }
                                                }}
                                                index={idx()}
                                            />
                                            <FieldError msg={errors["business-logo"]}/>
                                        </div>

                                        <div className="col-span-2 flex flex-col"
                                             data-error={!!errors["service-type"]}>
                                            <RadioGroup
                                                name="service-type"
                                                label="New build or update an existing site / app?"
                                                options={["Yes, update existing", "No, build new"]}
                                                value={get("service-type")}
                                                onChange={set}
                                                index={idx()}
                                                fullWidth
                                                // tooltip="Select 'Yes, update existing' if you already have a live website or app you'd like improved."
                                                tooltip="Choose “Update existing” if your current site/app needs improvements or new features, or “Build new” if you’re starting from scratch."
                                            />
                                            <FieldError msg={errors["service-type"]}/>
                                        </div>

                                        <AnimatePresence>
                                            {isUpdating && (
                                                <motion.div
                                                    key="existing-link"
                                                    initial={{opacity: 0, height: 0}}
                                                    animate={{opacity: 1, height: "auto"}}
                                                    exit={{opacity: 0, height: 0}}
                                                    className="col-span-2 overflow-hidden"
                                                >
                                                    <div className="flex flex-col"
                                                         data-error={!!errors["existing-app-web-link-update"]}>
                                                        <FloatingInput
                                                            name="existing-app-web-link-update"
                                                            label="URL of existing website or app"
                                                            value={get("existing-app-web-link-update")}
                                                            onChange={handleChange}
                                                            index={idx()}
                                                            tooltip="Paste the full URL e.g. https://yoursite.com"
                                                            fullWidth
                                                        />
                                                        <FieldError msg={errors["existing-app-web-link-update"]}/>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* ── Business Details ──────────────────────────── */}
                                        <SectionHeading label="Business Details" index={idx()}/>

                                        <div className="flex flex-col" data-error={!!errors["business-location"]}>
                                            <FloatingInput name="business-location"
                                                           label="Business Location (City, Country)"
                                                           value={get("business-location")} onChange={handleChange}
                                                           required index={idx()}/>
                                            <FieldError msg={errors["business-location"]}/>
                                        </div>
                                        <div className="flex flex-col" data-error={!!errors["business-scope"]}>
                                            <FloatingSelect name="business-scope" label="Business Scope"
                                                            options={BusinessScope} value={get("business-scope")}
                                                            onChange={handleChange} required index={idx()}
                                                            tooltip="Select your audience scope (Local, Countrywide, or International) to guide design, SEO, and hosting decisions. Example: A local barber chooses “Local,” a UK  shop “Countrywide,” and a global business “International."
                                            />
                                            <FieldError msg={errors["business-scope"]}/>
                                        </div>

                                        {/* ── Technical Requirements ────────────────────── */}
                                        <SectionHeading label="Technical Requirements" index={idx()}/>

                                        <div className="flex flex-col" data-error={!!errors["domain-and-hosting"]}>
                                            <RadioGroup
                                                name="domain-and-hosting"
                                                label="Do you already have a domain & hosting?"
                                                options={BooleanOptions}
                                                value={get("domain-and-hosting")}
                                                onChange={set}
                                                index={idx()}
                                                tooltip="Domain = your website address (e.g. yourbusiness.com). Hosting = where your site is stored online. If you’re unsure, we’ll handle everything for you."
                                            />
                                            <FieldError msg={errors["domain-and-hosting"]}/>
                                        </div>

                                        <AnimatePresence>
                                            {!hasOwnDomain && (
                                                <motion.div
                                                    key="want-hosting"
                                                    initial={{opacity: 0, height: 0}}
                                                    animate={{opacity: 1, height: "auto"}}
                                                    exit={{opacity: 0, height: 0}}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="flex flex-col"
                                                         data-error={!!errors["want-hosting-from-us"]}>
                                                        <RadioGroup
                                                            name="want-hosting-from-us"
                                                            label="Would you like us to purchase hosting for you? (Additional charges apply)"
                                                            value={get("want-hosting-from-us")}
                                                            options={BooleanOptions}
                                                            onChange={set}
                                                            index={idx()}
                                                            fullWidth
                                                            tooltip="Select this option if you would like us to handle hosting setup for you. Please note that hosting and domain services are charged separately."
                                                        />
                                                        <FieldError msg={errors["want-hosting-from-us"]}/>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <AnimatePresence>
                                            {hasOwnDomain && (
                                                <motion.div
                                                    key="domain-link"
                                                    initial={{opacity: 0, height: 0}}
                                                    animate={{opacity: 1, height: "auto"}}
                                                    exit={{opacity: 0, height: 0}}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="flex flex-col"
                                                         data-error={!!errors["existing-domain-link"]}>
                                                        <FloatingInput
                                                            name="existing-domain-link"
                                                            label="Your domain URL"
                                                            value={get("existing-domain-link")}
                                                            onChange={handleChange}
                                                            index={idx()}
                                                            fullWidth
                                                        />
                                                        <FieldError msg={errors["existing-domain-link"]}/>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <div className="col-span-2 flex flex-col"
                                             data-error={!!errors["application-type"]}>
                                            <MultiSelect
                                                value={getArr("application-type")}
                                                onChange={(n, v) => set(n, v)}
                                                name="application-type"
                                                label="What type of app or website do you want?"
                                                options={ApplicationTypes}
                                                required
                                                index={idx()}
                                                tooltip="Choose the closest match, we'll discuss the details during the call."
                                            />
                                            <FieldError msg={errors["application-type"]}/>
                                        </div>

                                        <AnimatePresence>
                                            {isOtherApp && (
                                                <motion.div
                                                    key="other-app"
                                                    initial={{opacity: 0, height: 0}}
                                                    animate={{opacity: 1, height: "auto"}}
                                                    exit={{opacity: 0, height: 0}}
                                                    className="col-span-2 overflow-hidden"
                                                >
                                                    <div className="flex flex-col"
                                                         data-error={!!errors["other-application-type"]}>
                                                        <FloatingInput
                                                            name="other-application-type"
                                                            label="Describe your application type"
                                                            value={get("other-application-type")}
                                                            onChange={handleChange}
                                                            index={idx()}
                                                            fullWidth
                                                        />
                                                        <FieldError msg={errors["other-application-type"]}/>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* ── Features & Functionality ──────────────────── */}
                                        <SectionHeading label="Features & Functionality" index={idx()}/>

                                        <div className="flex flex-col col-span-2"
                                             data-error={!!errors["website-features"]}>
                                            <FeaturesSelector
                                                value={getArr("website-features")}
                                                onChange={(v) => set("website-features", v)}
                                                index={idx()}
                                            />
                                            <FieldError msg={errors["website-features"]}/>
                                        </div>

                                        {/*
                                          ── Language Options ─────────────────────────────
                                          FIX 1: options prop is now passed correctly using
                                                  the imported LanguageOptions (Option[] type).
                                          FIX 2: FieldError is rendered as a sibling below
                                                  the component (error prop handles inline msg
                                                  inside the component too, belt-and-braces).
                                        */}
                                        <div className="col-span-2 flex flex-col"
                                             data-error={!!errors["language-options"]}>
                                            <MultiSelectAutocomplete
                                                name="language-options"
                                                label="Language Options"
                                                options={LanguageOptions}
                                                value={getArr("language-options")}
                                                onChange={(n, v) => set(n, v)}
                                                index={idx()}
                                                tooltip="Choose the languages your website should support. If your customers speak different languages, a multilingual site can help you reach more people and improve conversions.Example A business in Hounslow serving English and Urdu speakers may choose both languages."
                                                error={errors["language-options"]}
                                            />
                                            <FieldError msg={errors["language-options"]}/>
                                        </div>

                                        {/* ── Design Inspiration ────────────────────────── */}
                                        <SectionHeading label="Design Inspiration" index={idx()}/>
                                        <SampleSitesInput
                                            value={getArr("sample-sites")}
                                            onChange={(v) => set("sample-sites", v)}
                                            index={idx()}
                                        />

                                        {/* ── Content & Media ───────────────────────────── */}
                                        <SectionHeading label="Content & Media" index={idx()}/>

                                        <div className="flex flex-col" data-error={!!errors["website-content"]}>
                                            <RadioGroup name="website-content"
                                                        label="Do you need us to write the website content?"
                                                        options={BooleanOptions}
                                                        value={get("website-content")}
                                                        onChange={set} index={idx()}
                                                        tooltip="Do you need us to write your website content? This includes all text on your site such as your homepage, about section, and service descriptions. If you don’t have content ready, we can write it for you (extra cost may apply). Example If you are starting a new business and do not have any written content, choose Yes and we will handle it for you."/>
                                            <FieldError msg={errors["website-content"]}/>
                                        </div>
                                        <div className="flex flex-col" data-error={!!errors["media-content"]}>
                                            <RadioGroup name="media-content"
                                                        label="Do you need professional photos / graphics?"
                                                        options={BooleanOptions}
                                                        value={get("media-content")}
                                                        onChange={set} index={idx()}
                                                        tooltip="Do you need professional photos or graphics? Good quality images help your website look more professional and build trust. If you don’t have your own images, we can provide or create them for you. Example An online store without good product photos may find it hard to get sales. Choose Yes and we will handle it for you."/>
                                            <FieldError msg={errors["media-content"]}/>
                                        </div>
                                        <div className="col-span-2 flex flex-col"
                                             data-error={!!errors["project-brief"]}>
                                            <FloatingTextarea name="project-brief"
                                                              label="Project Brief, describe your project in detail"
                                                              value={get("project-brief")}
                                                              onChange={handleChange}
                                                              required index={idx()}
                                                              tooltip="Describe your project in detail so we can give you an accurate quote. Include your business type, goals, target audience, and any key features you need. Example I run a cleaning business in West London and need a website for online bookings, pricing, and reviews with a modern mobile friendly design."/>
                                            <FieldError msg={errors["project-brief"]}/>
                                        </div>

                                        {/* ── Admin & Support ───────────────────────────── */}
                                        <SectionHeading label="Admin & Support" index={idx()}/>

                                        <div className="flex flex-col" data-error={!!errors["admin-panel"]}>
                                            <RadioGroup name="admin-panel"
                                                        label="Do you need an admin panel to manage your site?"
                                                        options={BooleanOptions} value={get("admin-panel")}
                                                        onChange={set} index={idx()}
                                                        tooltip="Do you need an admin panel to manage your website? It lets you update content, add products, change prices, and manage orders without needing a developer. Example If you want to manage your own online shop without calling us each time, an admin panel is very useful."/>
                                            <FieldError msg={errors["admin-panel"]}/>
                                        </div>
                                        <div className="flex flex-col"
                                             data-error={!!errors["on-going-maintenance"]}>
                                            <RadioGroup name="on-going-maintenance"
                                                        label="Do you need ongoing maintenance & support?"
                                                        options={MaintenanceSupportOptions}
                                                        value={get("on-going-maintenance")} onChange={set}
                                                        index={idx()}
                                                        fullWidth
                                                        tooltip="Do you need ongoing maintenance and support? Websites need regular updates, security checks, and fixes to keep everything running smoothly. Our monthly support plan keeps your site secure and supported whenever you need help. Example If your booking system stops working, you can contact us anytime and we’ll fix it quickly instead of waiting for a one off developer."/>
                                            <FieldError msg={errors["on-going-maintenance"]}/>
                                        </div>
                                        <div className="col-span-2 flex flex-col"
                                             data-error={!!errors["admin-panel-brief"]}>
                                            <FloatingTextarea name="admin-panel-brief"
                                                              label="Admin Panel Brief (what features do you need?)"
                                                              value={get("admin-panel-brief")}
                                                              onChange={handleChange}
                                                              required index={idx()}
                                                              tooltip="Tell us what you want to manage in your admin panel. This helps us build the right tools into your dashboard from the start. Example I want to add or remove products, manage orders, update prices, and view customer enquiries."/>
                                            <FieldError msg={errors["admin-panel-brief"]}/>
                                        </div>

                                        {/* ── Budget & Final Notes ──────────────────────── */}
                                        <SectionHeading label="Budget & Final Notes" index={idx()}/>

                                        <div className="col-span-2 flex flex-col" data-error={!!errors.budget}>
                                            <FloatingSelect name="budget" label="Budget Range"
                                                            options={BudgetOptions}
                                                            value={get("budget")} onChange={handleChange}
                                                            required index={idx()} fullWidth/>
                                            <FieldError msg={errors.budget}/>
                                        </div>
                                        <FloatingTextarea name="message"
                                                          label="Anything else you'd like us to know?"
                                                          value={get("message")} onChange={handleChange}
                                                          index={idx()}/>

                                        {/* ── reCAPTCHA ─────────────────────────────────── */}
                                        <div className="col-span-2 flex flex-col gap-1"
                                             data-error={!!errors.captcha}>
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                                onChange={(token: string | null) => {
                                                    setCaptchaToken(token);
                                                    clearError("captcha");
                                                }}
                                                onExpired={() => setCaptchaToken(null)}
                                            />
                                            <FieldError msg={errors.captcha}/>
                                        </div>

                                        {/* ── Submit ────────────────────────────────────── */}
                                        <motion.div variants={fadeUp} custom={idx()} initial="hidden"
                                                    animate="visible" className="col-span-2 mt-4">
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full py-4 rounded-lg text-white font-semibold text-sm tracking-wide transition-all disabled:opacity-60 disabled:cursor-not-allowed bg-[var(--sky-clr)] shadow-sm drop-shadow-sm"
                                                onMouseEnter={(e) => {
                                                    if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "var(--dark-blue-clr)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    (e.currentTarget as HTMLButtonElement).style.background = "var(--sky-clr)";
                                                }}
                                            >
                                                <AnimatePresence mode="wait">
                                                    {loading ? (
                                                        <motion.span key="loading" initial={{opacity: 0}}
                                                                     animate={{opacity: 1}} exit={{opacity: 0}}
                                                                     className="flex items-center justify-center gap-2">
                                                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"
                                                                 fill="none">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10"
                                                                        stroke="currentColor" strokeWidth="4"/>
                                                                <path className="opacity-75" fill="currentColor"
                                                                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                                                            </svg>
                                                            Sending your enquiry…
                                                        </motion.span>
                                                    ) : (
                                                        <motion.span key="idle" initial={{opacity: 0}}
                                                                     animate={{opacity: 1}} exit={{opacity: 0}}>
                                                            Get My Free Quotation →
                                                        </motion.span>
                                                    )}
                                                </AnimatePresence>
                                            </button>
                                            <p className="text-center text-sm mt-3"
                                               style={{color: "var(--dark-grey-clr)"}}>
                                                We respond within 1–2 working days · No commitment required · 100% free
                                            </p>
                                        </motion.div>

                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ContactForm2;