"use client";
import React, { useState, useRef, ChangeEvent } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
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
import PhoneInput, { COUNTRY_CODES } from "./PhoneInput";
import MultiSelectAutocomplete, { LanguageOptions } from "./MultiSelectAutocomplete";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormState {
    name: string;
    email: string;
    countryCode: string;
    phone: string;
    "business-name": string;
    project: string;
    "service-type": string;
    "existing-app-web-link-update": string;
    "business-location": string;
    "business-scope": string;
    "domain-and-hosting": string;
    "want-hosting-from-us": string;
    "existing-domain-link": string;
    "application-type": string[];
    "other-application-type": string;
    "language-options": string[];
    "website-content": string;
    "media-content": string;
    "project-brief": string;
    "admin-panel": string;
    "on-going-maintenance": string;
    "admin-panel-brief": string;
    budget: string;
    message: string;
    "business-logo": File | null;
    "sample-sites": string[];
    "website-features": string[];
    "call-schedule": { date: string; time: string };
}

// ─── Initial state ────────────────────────────────────────────────────────────
const INITIAL_FORM: FormState = {
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    "business-name": "",
    project: "",
    "service-type": "",
    "existing-app-web-link-update": "",
    "business-location": "",
    "business-scope": "",
    "domain-and-hosting": "",
    "want-hosting-from-us": "",
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
    "call-schedule": { date: "", time: "" },
};

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
    "Not Sure, Need advice",
];

const BusinessScope     = ["Local area only", "Country Wide", "Internal MarketPlace"];
const BooleanOptions    = ["Yes", "No"];

const ApplicationTypes = [
    "Simple Business Info (portfolio / small application up to 5–6 pages)",
    "Booking System",
    "E-commerce",
    "LMS",
    "Online Ordering / Payments",
    "Full Custom System (advanced)",
    "Other",
];

const MaintenanceSupportOptions = [
    "Monthly Maintenance & Support",
    "Yearly Maintenance & Support",
    "No Support (One-Time Development)",
];

const BudgetOptions = [
    "£239  – £499",
    "£500 – £999",
    "£1,000 – £2,500",
    "£2,500 – £5,000",
    "£5,000+",
    "Not sure yet",
];

const ALLOWED_LOGO_TYPES = ["image/png", "image/jpg", "image/jpeg", "image/svg+xml"];
const ALLOWED_LOGO_EXTS  = [".png", ".jpg", ".jpeg", ".svg"];

// ─── Animation variants ───────────────────────────────────────────────────────
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.05, duration: 0.42, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

// ─── Focus-on-error ───────────────────────────────────────────────────────────
/**
 * Hard-coded visual top-to-bottom order of every field key.
 * We find the first key that has an error, look up its [data-field] wrapper,
 * scroll it into view, then focus the first focusable child.
 */
const FIELD_ORDER = [
    "call-schedule-date",
    "call-schedule-time",
    "name",
    "email",
    "phone",
    "business-name",
    "project",
    "business-logo",
    "service-type",
    "existing-app-web-link-update",
    "business-location",
    "business-scope",
    "domain-and-hosting",
    "want-hosting-from-us",
    "existing-domain-link",
    "application-type",
    "other-application-type",
    "website-features",
    "language-options",
    "website-content",
    "media-content",
    "project-brief",
    "admin-panel",
    "on-going-maintenance",
    "admin-panel-brief",
    "budget",
    "captcha",
] as const;

function focusFirstError(errorKeys: Set<string>): void {
    const firstKey = FIELD_ORDER.find((k) => errorKeys.has(k));
    if (!firstKey) return;

    // Give React one tick to finish flushing state before we touch the DOM
    setTimeout(() => {
        const wrapper = document.querySelector<HTMLElement>(`[data-field="${firstKey}"]`);
        if (!wrapper) return;

        // 1. Scroll wrapper into centre of viewport
        wrapper.scrollIntoView({ behavior: "smooth", block: "center" });

        // 2. After scroll settles, focus the first keyboard-reachable element inside
        setTimeout(() => {
            const focusable = wrapper.querySelector<HTMLElement>(
                'input, select, textarea, button, [tabindex]:not([tabindex="-1"])'
            );
            focusable?.focus({ preventScroll: true }); // scroll already done above
        }, 320);
    }, 50);
}

// ─── Success Screen ───────────────────────────────────────────────────────────
const SuccessScreen = ({ onReset }: { onReset: () => void }) => (
    <motion.div
        key="success"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center text-center py-16 px-8"
    >
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 180, damping: 14 }}
            className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6"
            style={{ background: "rgba(241,128,39,0.1)", border: "2.5px solid rgba(241,128,39,0.3)" }}
        >
            <span style={{ color: "var(--sky-clr)" }}>✓</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-3xl font-light mb-2" style={{ color: "var(--metalic-gray-clr)" }}>
                Thank You!
            </h2>
            <p className="text-sm font-semibold mb-6 tracking-wide" style={{ color: "var(--sky-clr)" }}>
                Enquiry received successfully
            </p>
            <div
                className="rounded-2xl px-8 py-6 max-w-lg mx-auto mb-5 text-left"
                style={{ background: "rgba(241,128,39,0.05)", border: "1px solid rgba(241,128,39,0.2)" }}
            >
                <p className="text-sm font-semibold mb-3" style={{ color: "var(--metalic-gray-clr)" }}>
                    We have received your details.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--dark-grey-clr)" }}>
                    We will review your business needs and our team member will contact you to provide a
                    full, tailored quotation plan within{" "}
                    <strong style={{ color: "var(--sky-clr)" }}>1–2 working days</strong>.
                </p>
            </div>
            <div
                className="rounded-xl px-6 py-3.5 max-w-md mx-auto mb-8 flex items-start gap-2.5"
                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
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
                style={{ border: "1.5px solid var(--light-gray-clr)", color: "var(--dark-grey-clr)" }}
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

// ─── Main Form ────────────────────────────────────────────────────────────────
const ContactForm2: React.FC = () => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const [form, setForm]               = useState<FormState>(INITIAL_FORM);
    const [loading, setLoading]         = useState(false);
    const [submitted, setSubmitted]     = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [errors, setErrors]           = useState<Record<string, string>>({});

    // ── Typed accessors ───────────────────────────────────────────────────────
    const get    = (k: keyof FormState): string           => form[k] as string;
    const getArr = (k: keyof FormState): string[]         => form[k] as string[];
    const getSch = (): { date: string; time: string }     => form["call-schedule"] as { date: string; time: string };

    // ── Error helpers ─────────────────────────────────────────────────────────
    const clearError = (key: string) =>
        setErrors((prev) => { const n = { ...prev }; delete n[key]; return n; });

    // ── Generic field setter ──────────────────────────────────────────────────
    const set = (
        name: string,
        value: string | string[] | File | null | { date: string; time: string }
    ) => {
        setForm((prev) => ({ ...prev, [name]: value }));
        clearError(name);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        set(e.target.name, e.target.value);

    // ── Country-code setter ───────────────────────────────────────────────────
    const handleCountryCodeChange = (code: string) => {
        setForm((prev) => ({ ...prev, countryCode: code }));
        clearError("countryCode");
        clearError("phone");
    };

    // ── Call-schedule setter ──────────────────────────────────────────────────
    const handleScheduleChange = (v: { date: string; time: string }) => {
        setForm((prev) => ({ ...prev, "call-schedule": v }));
        if (v.date) clearError("call-schedule-date");
        if (v.time) clearError("call-schedule-time");
    };

    // ── Validation ────────────────────────────────────────────────────────────
    const validate = (): boolean => {
        const next: Record<string, string> = {};
        const schedule = getSch();

        // Required string fields
        const requiredStr: { key: keyof FormState; label: string }[] = [
            { key: "name",                  label: "Your name"                  },
            { key: "email",                 label: "Your email"                 },
            { key: "business-name",         label: "Business name"              },
            { key: "project",               label: "Project type"               },
            { key: "service-type",          label: "New build or update"        },
            { key: "business-location",     label: "Business location"          },
            { key: "business-scope",        label: "Business scope"             },
            { key: "domain-and-hosting",    label: "Domain & hosting answer"    },
            { key: "website-content",       label: "Website content answer"     },
            { key: "media-content",         label: "Professional photos answer" },
            { key: "project-brief",         label: "Project brief"              },
            { key: "admin-panel",           label: "Admin panel answer"         },
            { key: "on-going-maintenance",  label: "Ongoing maintenance answer" },
            { key: "admin-panel-brief",     label: "Admin panel brief"          },
            { key: "budget",                label: "Budget range"               },
        ];
        requiredStr.forEach(({ key, label }) => {
            if (!(form[key] as string).trim()) next[key] = `${label} is required.`;
        });

        // Required array fields
        const requiredArr: { key: keyof FormState; label: string }[] = [
            { key: "application-type", label: "Please select at least one application type" },
            { key: "website-features", label: "Please select at least one website feature"  },
            { key: "language-options", label: "Please select at least one language option"  },
        ];
        requiredArr.forEach(({ key, label }) => {
            if ((form[key] as string[]).length === 0) next[key] = `${label}.`;
        });

        // Email format
        const email = form.email.trim();
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            next.email = "Please enter a valid email address.";

        // Phone
        const selectedCC = form.countryCode;
        const rawPhone   = form.phone.trim().replace(/[\s\-()]/g, "");

        if (!selectedCC) {
            next.countryCode = "Please select a country code.";
            next.phone       = "Please select a country code first.";
        } else if (!rawPhone) {
            next.phone = "Phone number is required.";
        } else if (!/^\d+$/.test(rawPhone)) {
            next.phone = "Phone number must contain digits only.";
        } else {
            const cc = COUNTRY_CODES.find((c) => c.code === selectedCC);
            if (cc && (rawPhone.length < cc.minLen || rawPhone.length > cc.maxLen)) {
                next.phone =
                    `Phone number for ${selectedCC} must be ` +
                    (cc.minLen === cc.maxLen
                        ? `${cc.minLen} digits`
                        : `${cc.minLen}–${cc.maxLen} digits`) + ".";
            }
        }

        // Logo — optional, validate type only if provided
        const logo = form["business-logo"] as File | null;
        if (logo) {
            const ext = logo.name.slice(logo.name.lastIndexOf(".")).toLowerCase();
            if (!ALLOWED_LOGO_TYPES.includes(logo.type) && !ALLOWED_LOGO_EXTS.includes(ext))
                next["business-logo"] = "Logo must be a PNG, JPG, JPEG, or SVG file.";
        }

        // Conditional validations
        if (form["service-type"] === "Yes, update existing" && !form["existing-app-web-link-update"].trim())
            next["existing-app-web-link-update"] = "Please provide the URL of your existing site.";

        if ((form["application-type"] as string[]).includes("Other") && !form["other-application-type"].trim())
            next["other-application-type"] = "Please describe your application type.";

        if (form["domain-and-hosting"] === "Yes" && !form["existing-domain-link"].trim())
            next["existing-domain-link"] = "Please provide your domain URL.";

        // Schedule
        if (!schedule.date) next["call-schedule-date"] = "Please select a preferred date.";
        if (!schedule.time) next["call-schedule-time"] = "Please select a preferred time slot.";

        // reCAPTCHA
        if (!captchaToken) next.captcha = "Please complete the reCAPTCHA verification.";

        setErrors(next);

        const errorKeys = new Set(Object.keys(next));
        if (errorKeys.size > 0) focusFirstError(errorKeys);

        return errorKeys.size === 0;
    };

    // ── Submit ────────────────────────────────────────────────────────────────
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        try {
            const logo = form["business-logo"] as File | null;
            const payload = {
                ...form,
                phoneCountryCode: form.countryCode,
                phoneNumber:      form.phone,
                phoneFullNumber:  `${form.countryCode}${form.phone.trim().replace(/[\s\-()]/g, "")}`,
                "business-logo":  logo ? logo.name : null,
                captchaToken,
            };

            const res = await fetch("/api/customer-enquiry-mail-send", {
                method:  "POST",
                headers: { "Content-Type": "application/json" },
                body:    JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Server responded with an error.");

            setSubmitted(true);
            setCaptchaToken(null);
            recaptchaRef.current?.reset();
        } catch {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // ── Reset ─────────────────────────────────────────────────────────────────
    const handleReset = () => {
        setSubmitted(false);
        setForm(INITIAL_FORM);
        setErrors({});
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
    };

    // ── Derived booleans ──────────────────────────────────────────────────────
    const isUpdating   = form["service-type"]       === "Yes, update existing";
    const hasOwnDomain = form["domain-and-hosting"] === "Yes";
    const hasNoDomain  = form["domain-and-hosting"] === "No";
    const isOtherApp   = (form["application-type"] as string[]).includes("Other");

    // Animation stagger counter — intentionally reset each render
    let fi = 0;
    const idx = () => fi++;

    // ── Render ────────────────────────────────────────────────────────────────
    return (
        <div className="min-h-screen">
            {/* Ambient blobs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-60 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
                     style={{ background: "rgba(241,128,39,0.06)" }} />
                <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full blur-[120px]"
                     style={{ background: "rgba(238,95,17,0.04)" }} />
            </div>

            <div className="relative mx-auto">
                <AnimatePresence mode="wait">
                    {submitted ? (
                        <SuccessScreen key="success" onReset={handleReset} />
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* ══════════════════════════════════════════════════
                                BEST TIME TO CALL
                                data-field on the wrapper so focusFirstError()
                                can find and scroll to schedule errors.
                            ══════════════════════════════════════════════════ */}
                            <div className="mb-6">
                                <div
                                    className="grid grid-cols-2 gap-x-4 gap-y-5"
                                    data-field="call-schedule-date"
                                >
                                    <CallScheduler
                                        value={getSch()}
                                        onChange={handleScheduleChange}
                                        index={idx()}
                                        dateError={errors["call-schedule-date"]}
                                        timeError={errors["call-schedule-time"]}
                                    />
                                </div>
                            </div>

                            {/* ══════════════════════════════════════════════════
                                MAIN CARD
                            ══════════════════════════════════════════════════ */}
                            <div className="rounded-lg p-4 lg:p-5 bg-white shadow-sm mb-1">
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="flex flex-column gap-4 md:grid md:grid-cols-2 gap-x-3 lg:gap-x-4 gap-y-4 lg:gap-y-5">

                                        {/* ── Personal Info ─────────────────── */}
                                        <SectionHeading label="Personal Info" index={idx()} />

                                        {/* Name */}
                                        <div className="flex flex-col" data-field="name">
                                            <FloatingInput
                                                name="name" label="Your Name"
                                                value={get("name")} onChange={handleChange}
                                                required index={idx()}
                                            />
                                            <FieldError msg={errors.name} />
                                        </div>

                                        {/* Email */}
                                        <div className="flex flex-col" data-field="email">
                                            <FloatingInput
                                                name="email" label="Your Email" type="email"
                                                value={get("email")} onChange={handleChange}
                                                required index={idx()}
                                            />
                                            <FieldError msg={errors.email} />
                                        </div>

                                        {/* Phone — col-span-2 so country selector has room */}
                                        <div className="flex flex-col col-span-2" data-field="phone">
                                            <PhoneInput
                                                name="phone" label="Your Phone"
                                                value={get("phone")} onChange={handleChange}
                                                countryCode={form.countryCode}
                                                onCountryCodeChange={handleCountryCodeChange}
                                                required index={idx()}
                                            />
                                            <FieldError msg={errors.phone || errors.countryCode} />
                                        </div>

                                        {/* Business name */}
                                        <div className="flex flex-col" data-field="business-name">
                                            <FloatingInput
                                                name="business-name" label="Business Name"
                                                value={get("business-name")} onChange={handleChange}
                                                required index={idx()}
                                            />
                                            <FieldError msg={errors["business-name"]} />
                                        </div>

                                        {/* ── Project Type ──────────────────── */}
                                        <SectionHeading label="Project Type" index={idx()} />

                                        {/* Project select */}
                                        <div className="col-span-2 flex flex-col" data-field="project">
                                            <FloatingSelect
                                                name="project" label="What do you need from Onxius?"
                                                options={ProjectType} value={get("project")}
                                                onChange={handleChange} required index={idx()} fullWidth
                                            />
                                            <FieldError msg={errors.project} />
                                        </div>

                                        {/* Logo upload */}
                                        <div className="col-span-2 flex flex-col" data-field="business-logo">
                                            <FileUpload
                                                name="business-logo"
                                                label="Business Logo (optional — PNG, JPG, JPEG, SVG only)"
                                                onChange={(n, f) => {
                                                    set(n, f);
                                                    if (f) {
                                                        const ext = f.name.slice(f.name.lastIndexOf(".")).toLowerCase();
                                                        if (!ALLOWED_LOGO_TYPES.includes(f.type) && !ALLOWED_LOGO_EXTS.includes(ext))
                                                            setErrors((prev) => ({ ...prev, "business-logo": "Logo must be a PNG, JPG, JPEG, or SVG file." }));
                                                        else clearError("business-logo");
                                                    } else {
                                                        clearError("business-logo");
                                                    }
                                                }}
                                                index={idx()}
                                            />
                                            <FieldError msg={errors["business-logo"]} />
                                        </div>

                                        {/* Service type */}
                                        <div className="col-span-2 flex flex-col" data-field="service-type">
                                            <RadioGroup
                                                name="service-type"
                                                label="New build or update an existing site / app?"
                                                options={["Yes, update existing", "No, build new"]}
                                                value={get("service-type")} onChange={set}
                                                index={idx()} fullWidth
                                                tooltip={`Choose "Update existing" if your current site/app needs improvements or new features, or "Build new" if you're starting from scratch.`}
                                            />
                                            <FieldError msg={errors["service-type"]} />
                                        </div>

                                        {/* Conditional: existing site URL */}
                                        <AnimatePresence>
                                            {isUpdating && (
                                                <motion.div
                                                    key="existing-link"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="col-span-2 overflow-hidden"
                                                >
                                                    <div className="flex flex-col" data-field="existing-app-web-link-update">
                                                        <FloatingInput
                                                            name="existing-app-web-link-update"
                                                            label="URL of existing website or app"
                                                            value={get("existing-app-web-link-update")}
                                                            onChange={handleChange} index={idx()}
                                                            tooltip="Paste the full URL e.g. https://yoursite.com"
                                                            fullWidth
                                                        />
                                                        <FieldError msg={errors["existing-app-web-link-update"]} />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* ── Business Details ──────────────── */}
                                        <SectionHeading label="Business Details" index={idx()} />

                                        {/* Business location */}
                                        <div className="flex flex-col" data-field="business-location">
                                            <FloatingInput
                                                name="business-location" label="Business Location (City, Country)"
                                                value={get("business-location")} onChange={handleChange}
                                                required index={idx()}
                                            />
                                            <FieldError msg={errors["business-location"]} />
                                        </div>

                                        {/* Business scope */}
                                        <div className="flex flex-col" data-field="business-scope">
                                            <FloatingSelect
                                                name="business-scope" label="Business Scope"
                                                options={BusinessScope} value={get("business-scope")}
                                                onChange={handleChange} required index={idx()}
                                                tooltip={`Select your audience scope (Local, Countrywide, or International) to guide design, SEO, and hosting decisions. Example: A local barber chooses "Local," a UK shop "Countrywide," and a global business "International."`}
                                            />
                                            <FieldError msg={errors["business-scope"]} />
                                        </div>

                                        {/* ── Technical Requirements ─────────── */}
                                        <SectionHeading label="Technical Requirements" index={idx()} />

                                        {/* Domain & hosting */}
                                        <div className="flex flex-col" data-field="domain-and-hosting">
                                            <RadioGroup
                                                name="domain-and-hosting"
                                                label="Do you already have a domain & hosting?"
                                                options={BooleanOptions} value={get("domain-and-hosting")}
                                                onChange={set} index={idx()}
                                                tooltip={`Domain = your website address (e.g. yourbusiness.com). Hosting = where your site is stored online. If you're unsure, we'll handle everything for you.`}
                                            />
                                            <FieldError msg={errors["domain-and-hosting"]} />
                                        </div>

                                        {/* Conditional: purchase hosting */}
                                        <AnimatePresence>
                                            {hasNoDomain && (
                                                <motion.div
                                                    key="want-hosting"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="flex flex-col" data-field="want-hosting-from-us">
                                                        <RadioGroup
                                                            name="want-hosting-from-us"
                                                            label="Would you like us to purchase hosting for you? (Additional charges apply)"
                                                            value={get("want-hosting-from-us")}
                                                            options={BooleanOptions} onChange={set}
                                                            index={idx()} fullWidth
                                                            tooltip="Select this option if you would like us to handle hosting setup for you. Please note that hosting and domain services are charged separately."
                                                        />
                                                        <FieldError msg={errors["want-hosting-from-us"]} />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Conditional: existing domain URL */}
                                        <AnimatePresence>
                                            {hasOwnDomain && (
                                                <motion.div
                                                    key="domain-link"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="flex flex-col" data-field="existing-domain-link">
                                                        <FloatingInput
                                                            name="existing-domain-link"
                                                            label="Your domain URL"
                                                            value={get("existing-domain-link")}
                                                            onChange={handleChange}
                                                            index={idx()} fullWidth
                                                        />
                                                        <FieldError msg={errors["existing-domain-link"]} />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Application type */}
                                        <div className="col-span-2 flex flex-col" data-field="application-type">
                                            <MultiSelect
                                                value={getArr("application-type")}
                                                onChange={(n, v) => set(n, v)}
                                                name="application-type"
                                                label="What type of app or website do you want?"
                                                options={ApplicationTypes} required index={idx()}
                                                tooltip="Choose the closest match, we'll discuss the details during the call."
                                            />
                                            <FieldError msg={errors["application-type"]} />
                                        </div>

                                        {/* Conditional: other app description */}
                                        <AnimatePresence>
                                            {isOtherApp && (
                                                <motion.div
                                                    key="other-app"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="col-span-2 overflow-hidden"
                                                >
                                                    <div className="flex flex-col" data-field="other-application-type">
                                                        <FloatingInput
                                                            name="other-application-type"
                                                            label="Describe your application type"
                                                            value={get("other-application-type")}
                                                            onChange={handleChange}
                                                            index={idx()} fullWidth
                                                        />
                                                        <FieldError msg={errors["other-application-type"]} />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* ── Features & Functionality ──────── */}
                                        <SectionHeading label="Features & Functionality" index={idx()} />

                                        {/* Website features */}
                                        <div className="flex flex-col col-span-2" data-field="website-features">
                                            <FeaturesSelector
                                                value={getArr("website-features")}
                                                onChange={(v) => set("website-features", v)}
                                                index={idx()}
                                            />
                                            <FieldError msg={errors["website-features"]} />
                                        </div>

                                        {/* Language options */}
                                        <div className="col-span-2 flex flex-col" data-field="language-options">
                                            <MultiSelectAutocomplete
                                                name="language-options" label="Language Options"
                                                options={LanguageOptions}
                                                value={getArr("language-options")}
                                                onChange={(n, v) => set(n, v)}
                                                index={idx()}
                                                tooltip="Choose the languages your website should support. If your customers speak different languages, a multilingual site can help you reach more people and improve conversions. Example: A business in Hounslow serving English and Urdu speakers may choose both languages."
                                                error={errors["language-options"]}
                                            />
                                            <FieldError msg={errors["language-options"]} />
                                        </div>

                                        {/* ── Design Inspiration ────────────── */}
                                        <SectionHeading label="Design Inspiration" index={idx()} />

                                        <SampleSitesInput
                                            value={getArr("sample-sites")}
                                            onChange={(v) => set("sample-sites", v)}
                                            index={idx()}
                                        />

                                        {/* ── Content & Media ───────────────── */}
                                        <SectionHeading label="Content & Media" index={idx()} />

                                        {/* Website content */}
                                        <div className="flex flex-col" data-field="website-content">
                                            <RadioGroup
                                                name="website-content"
                                                label="Do you need us to write the website content?"
                                                options={BooleanOptions} value={get("website-content")}
                                                onChange={set} index={idx()}
                                                tooltip="Do you need us to write your website content? This includes all text on your site such as your homepage, about section, and service descriptions. If you don't have content ready, we can write it for you (extra cost may apply)."
                                            />
                                            <FieldError msg={errors["website-content"]} />
                                        </div>

                                        {/* Media content */}
                                        <div className="flex flex-col" data-field="media-content">
                                            <RadioGroup
                                                name="media-content"
                                                label="Do you need professional photos / graphics?"
                                                options={BooleanOptions} value={get("media-content")}
                                                onChange={set} index={idx()}
                                                tooltip="Do you need professional photos or graphics? Good quality images help your website look more professional and build trust. If you don't have your own images, we can provide or create them for you."
                                            />
                                            <FieldError msg={errors["media-content"]} />
                                        </div>

                                        {/* Project brief */}
                                        <div className="col-span-2 flex flex-col" data-field="project-brief">
                                            <FloatingTextarea
                                                name="project-brief"
                                                label="Project Brief — describe your project in detail"
                                                value={get("project-brief")} onChange={handleChange}
                                                required index={idx()}
                                                tooltip="Describe your project in detail so we can give you an accurate quote. Include your business type, goals, target audience, and any key features you need."
                                            />
                                            <FieldError msg={errors["project-brief"]} />
                                        </div>

                                        {/* ── Admin & Support ───────────────── */}
                                        <SectionHeading label="Admin & Support" index={idx()} />

                                        {/* Admin panel */}
                                        <div className="flex flex-col" data-field="admin-panel">
                                            <RadioGroup
                                                name="admin-panel"
                                                label="Do you need an admin panel to manage your site?"
                                                options={BooleanOptions} value={get("admin-panel")}
                                                onChange={set} index={idx()}
                                                tooltip="An admin panel lets you update content, add products, change prices, and manage orders without needing a developer."
                                            />
                                            <FieldError msg={errors["admin-panel"]} />
                                        </div>

                                        {/* Ongoing maintenance */}
                                        <div className="flex flex-col" data-field="on-going-maintenance">
                                            <RadioGroup
                                                name="on-going-maintenance"
                                                label="Do you need ongoing maintenance & support?"
                                                options={MaintenanceSupportOptions}
                                                value={get("on-going-maintenance")}
                                                onChange={set} index={idx()} fullWidth
                                                tooltip="Websites need regular updates, security checks, and fixes to keep everything running smoothly. Our support plan keeps your site secure whenever you need help."
                                            />
                                            <FieldError msg={errors["on-going-maintenance"]} />
                                        </div>

                                        {/* Admin panel brief */}
                                        <div className="col-span-2 flex flex-col" data-field="admin-panel-brief">
                                            <FloatingTextarea
                                                name="admin-panel-brief"
                                                label="Admin Panel Brief (what features do you need?)"
                                                value={get("admin-panel-brief")} onChange={handleChange}
                                                required index={idx()}
                                                tooltip="Tell us what you want to manage in your admin panel. Example: I want to add or remove products, manage orders, update prices, and view customer enquiries."
                                            />
                                            <FieldError msg={errors["admin-panel-brief"]} />
                                        </div>

                                        {/* ── Budget & Final Notes ──────────── */}
                                        <SectionHeading label="Budget & Final Notes" index={idx()} />

                                        {/* Budget */}
                                        <div className="col-span-2 flex flex-col" data-field="budget">
                                            <FloatingSelect
                                                name="budget" label="Budget Range"
                                                options={BudgetOptions} value={get("budget")}
                                                onChange={handleChange} required index={idx()} fullWidth
                                            />
                                            <FieldError msg={errors.budget} />
                                        </div>

                                        {/* Optional message — no validation */}
                                        <FloatingTextarea
                                            name="message"
                                            label="Anything else you'd like us to know?"
                                            value={get("message")} onChange={handleChange}
                                            index={idx()}
                                        />

                                        {/* ── reCAPTCHA ─────────────────────── */}
                                        <div className="col-span-2 flex flex-col gap-1" data-field="captcha">
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                                onChange={(token: string | null) => {
                                                    setCaptchaToken(token);
                                                    clearError("captcha");
                                                }}
                                                onExpired={() => {
                                                    setCaptchaToken(null);
                                                    setErrors((prev) => ({
                                                        ...prev,
                                                        captcha: "reCAPTCHA expired. Please verify again.",
                                                    }));
                                                }}
                                            />
                                            <FieldError msg={errors.captcha} />
                                        </div>

                                        {/* ── Submit button ─────────────────── */}
                                        <motion.div
                                            variants={fadeUp} custom={idx()}
                                            initial="hidden" animate="visible"
                                            className="col-span-2 mt-4"
                                        >
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full py-4 rounded-lg text-white font-semibold text-sm tracking-wide transition-all disabled:opacity-60 disabled:cursor-not-allowed bg-[var(--sky-clr)] shadow-sm drop-shadow-sm"
                                                onMouseEnter={(e) => {
                                                    if (!loading)
                                                        (e.currentTarget as HTMLButtonElement).style.background = "var(--dark-blue-clr)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    (e.currentTarget as HTMLButtonElement).style.background = "var(--sky-clr)";
                                                }}
                                            >
                                                <AnimatePresence mode="wait">
                                                    {loading ? (
                                                        <motion.span
                                                            key="loading"
                                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                            className="flex items-center justify-center gap-2"
                                                        >
                                                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                                            </svg>
                                                            Sending your enquiry…
                                                        </motion.span>
                                                    ) : (
                                                        <motion.span
                                                            key="idle"
                                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                        >
                                                            Get My Free Quotation →
                                                        </motion.span>
                                                    )}
                                                </AnimatePresence>
                                            </button>
                                            <p className="text-center text-sm mt-3" style={{ color: "var(--dark-grey-clr)" }}>
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
