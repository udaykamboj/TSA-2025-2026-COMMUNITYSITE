(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/community-resource-hub-yx/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Header() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navLinks = [
        {
            label: "Services",
            href: "/services",
            submenu: [
                {
                    column: "Popular Services",
                    items: [
                        {
                            label: "All Services",
                            href: "/services"
                        },
                        {
                            label: "Food & Nutrition",
                            href: "/services?category=food"
                        },
                        {
                            label: "Housing Assistance",
                            href: "/services?category=housing"
                        },
                        {
                            label: "Healthcare Programs",
                            href: "/services?category=healthcare"
                        }
                    ]
                },
                {
                    column: "Employment & Training",
                    items: [
                        {
                            label: "Job Training",
                            href: "/services?category=jobs"
                        },
                        {
                            label: "Career Counseling",
                            href: "/services?category=careers"
                        },
                        {
                            label: "Apprenticeships",
                            href: "/services?category=apprentice"
                        }
                    ]
                },
                {
                    column: "Youth & Family",
                    items: [
                        {
                            label: "Youth Programs",
                            href: "/services?category=youth"
                        },
                        {
                            label: "Childcare Support",
                            href: "/services?category=childcare"
                        },
                        {
                            label: "Family Services",
                            href: "/services?category=family"
                        },
                        {
                            label: "Senior Services",
                            href: "/services?category=senior"
                        }
                    ]
                }
            ]
        },
        {
            label: "Benefits",
            href: "/benefits",
            submenu: [
                {
                    column: "Financial Assistance",
                    items: [
                        {
                            label: "Browse All Benefits",
                            href: "/benefits"
                        },
                        {
                            label: "Income Support",
                            href: "/benefits?type=income"
                        },
                        {
                            label: "Tax Credits",
                            href: "/benefits?type=tax"
                        },
                        {
                            label: "Utility Assistance",
                            href: "/benefits?type=utility"
                        }
                    ]
                },
                {
                    column: "Health & Insurance",
                    items: [
                        {
                            label: "Healthcare Programs",
                            href: "/benefits?type=healthcare"
                        },
                        {
                            label: "Medicaid",
                            href: "/benefits?type=medicaid"
                        },
                        {
                            label: "Mental Health",
                            href: "/benefits?type=mental"
                        }
                    ]
                },
                {
                    column: "Education",
                    items: [
                        {
                            label: "Educational Support",
                            href: "/benefits?type=education"
                        },
                        {
                            label: "Scholarships",
                            href: "/benefits?type=scholarships"
                        },
                        {
                            label: "Student Loans",
                            href: "/benefits?type=loans"
                        }
                    ]
                }
            ]
        },
        {
            label: "Resources",
            href: "/resources",
            submenu: [
                {
                    column: "Browse Resources",
                    items: [
                        {
                            label: "All Resources",
                            href: "/resources"
                        },
                        {
                            label: "Featured",
                            href: "/resources?featured=true"
                        },
                        {
                            label: "Emergency Services",
                            href: "/resources?category=emergency"
                        },
                        {
                            label: "Legal Resources",
                            href: "/resources?category=legal"
                        }
                    ]
                },
                {
                    column: "Specialized Resources",
                    items: [
                        {
                            label: "Immigrant Services",
                            href: "/resources?category=immigrant"
                        },
                        {
                            label: "Disability Services",
                            href: "/resources?category=disability"
                        },
                        {
                            label: "Veterans Services",
                            href: "/resources?category=veterans"
                        }
                    ]
                }
            ]
        },
        /*
    {
      label: "Events",
      href: "/events",
    },
    */ {
            label: "Submit Resource FORM",
            href: "/submit"
        },
        {
            label: "Resource PAGE",
            href: "/resources"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setOpenDropdown(null);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Header.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full bg-white border-b-4 border-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 text-white text-sm py-3 px-4 border-b-2 border-slate-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "An official community resource portal.",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "underline hover:text-gray-300",
                            children: "Learn how to identify official government sites."
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-8 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "text-xl font-bold text-slate-900 border-b-4 border-slate-900 pb-1 whitespace-nowrap",
                                            children: "Community Hub"
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "hidden lg:flex items-center gap-0",
                                            ref: dropdownRef,
                                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: [
                                                        link.submenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setOpenDropdown(openDropdown === link.label ? null : link.label),
                                                            className: "text-slate-900 font-semibold px-4 py-3 hover:bg-slate-900 hover:text-white transition flex items-center gap-2 whitespace-nowrap",
                                                            children: [
                                                                link.label,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: link.href,
                                                            className: "text-slate-900 font-semibold px-4 py-3 hover:bg-slate-900 hover:text-white transition flex items-center gap-2 whitespace-nowrap",
                                                            children: link.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 23
                                                        }, this),
                                                        link.submenu && openDropdown === link.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-full left-0 mt-0 bg-white border-2 border-slate-900 shadow-lg z-50 w-full lg:w-[900px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-3 gap-8",
                                                                    children: link.submenu.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "font-bold text-slate-900 text-sm mb-4",
                                                                                    children: column.column
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                                                    lineNumber: 176,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "space-y-2",
                                                                                    children: column.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                href: item.href,
                                                                                                className: "text-slate-900 text-sm hover:text-slate-600 transition",
                                                                                                onClick: ()=>setOpenDropdown(null),
                                                                                                children: item.label
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                                                                lineNumber: 180,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        }, item.label, false, {
                                                                                            fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                                                            lineNumber: 179,
                                                                                            columnNumber: 37
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                                                    lineNumber: 177,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, column.column, true, {
                                                                            fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                                            lineNumber: 175,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, link.label, true, {
                                                    fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:flex items-center gap-4 ml-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search...",
                                                className: "px-4 py-2 border-2 border-slate-900 bg-white text-sm font-normal"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute right-3 top-2.5 w-4 h-4 text-slate-900"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "lg:hidden p-2 bg-white hover:bg-slate-900 hover:text-white transition",
                                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                        lineNumber: 218,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                        lineNumber: 218,
                                        columnNumber: 57
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "lg:hidden mt-4 flex flex-col gap-2 pb-4 border-t-2 border-slate-900 pt-4",
                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: link.submenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setOpenDropdown(openDropdown === link.label ? null : link.label),
                                                className: "w-full text-left text-slate-900 font-semibold px-4 py-3 bg-white hover:bg-slate-900 hover:text-white transition flex items-center justify-between",
                                                children: [
                                                    link.label,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition ${openDropdown === link.label ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                lineNumber: 229,
                                                columnNumber: 23
                                            }, this),
                                            openDropdown === link.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-50 border-2 border-slate-900 border-t-0",
                                                children: link.submenu.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-6 py-4 border-b border-slate-200 last:border-b-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold text-slate-900 text-sm mb-2",
                                                                children: column.column
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 31
                                                            }, this),
                                                            column.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: item.href,
                                                                    className: "block px-0 py-2 text-slate-900 text-sm hover:text-slate-600",
                                                                    onClick: ()=>{
                                                                        setIsMenuOpen(false);
                                                                        setOpenDropdown(null);
                                                                    },
                                                                    children: item.label
                                                                }, item.label, false, {
                                                                    fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 33
                                                                }, this))
                                                        ]
                                                    }, column.column, true, {
                                                        fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 29
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                                lineNumber: 239,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: "text-slate-900 font-semibold px-4 py-3 bg-white hover:bg-slate-900 hover:text-white transition block",
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                        lineNumber: 262,
                                        columnNumber: 21
                                    }, this)
                                }, link.label, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                                    lineNumber: 226,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/community-resource-hub-yx/components/header.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/community-resource-hub-yx/components/header.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(Header, "pG+6I4c0dpx9ejDE65eCdskZKeM=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-slate-900 text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-12 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-4 border-b-2 border-white pb-2",
                                    children: "About This Hub"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300",
                                    children: "Connecting residents with essential community resources and services."
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-4 border-b-2 border-white pb-2",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/resources",
                                                className: "text-gray-300 hover:text-white transition",
                                                children: "Browse Resources"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                                lineNumber: 20,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                            lineNumber: 19,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/submit",
                                                className: "text-gray-300 hover:text-white transition",
                                                children: "Submit a Resource"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                                lineNumber: 25,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "text-gray-300 hover:text-white transition",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "text-gray-300 hover:text-white transition",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-4 border-b-2 border-white pb-2",
                                    children: "Get In Touch"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 mb-4",
                                    children: "Email: info@communityresourcehub.org"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                            className: "w-5 h-5 cursor-pointer hover:text-gray-300 transition"
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                            className: "w-5 h-5 cursor-pointer hover:text-gray-300 transition"
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "w-5 h-5 cursor-pointer hover:text-gray-300 transition"
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-slate-700 pt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 text-center",
                        children: "© 2025 Community Resource Hub. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/community-resource-hub-yx/components/footer.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/components/search-autocomplete.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchAutocomplete
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SearchAutocomplete({ items, value, onChange, placeholder = "Search..." }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filtered, setFiltered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchAutocomplete.useEffect": ()=>{
            if (value) {
                const matches = items.filter({
                    "SearchAutocomplete.useEffect.matches": (item)=>item.toLowerCase().includes(value.toLowerCase())
                }["SearchAutocomplete.useEffect.matches"]);
                setFiltered(matches);
                setOpen(true);
            } else {
                setFiltered([]);
                setOpen(false);
            }
        }
    }["SearchAutocomplete.useEffect"], [
        value,
        items
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchAutocomplete.useEffect": ()=>{
            function handleClickOutside(event) {
                if (containerRef.current && !containerRef.current.contains(event.target)) {
                    setOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "SearchAutocomplete.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["SearchAutocomplete.useEffect"];
        }
    }["SearchAutocomplete.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        placeholder: placeholder,
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        onFocus: ()=>value && setOpen(true),
                        className: "w-full px-4 py-3 border-2 border-slate-900 bg-white text-slate-900 focus:ring-2 focus:ring-slate-900 focus:outline-none transition text-sm font-normal"
                    }, void 0, false, {
                        fileName: "[project]/community-resource-hub-yx/components/search-autocomplete.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "absolute right-3 top-3.5 w-5 h-5 text-slate-900"
                    }, void 0, false, {
                        fileName: "[project]/community-resource-hub-yx/components/search-autocomplete.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/community-resource-hub-yx/components/search-autocomplete.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            open && filtered.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-900 shadow-lg z-50 max-h-60 overflow-y-auto",
                children: filtered.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onChange(item);
                            setOpen(false);
                        },
                        className: "w-full text-left px-4 py-3 hover:bg-slate-100 border-b-2 border-slate-200 last:border-b-0 transition text-sm text-slate-900 font-semibold",
                        children: item
                    }, item, false, {
                        fileName: "[project]/community-resource-hub-yx/components/search-autocomplete.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/community-resource-hub-yx/components/search-autocomplete.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/community-resource-hub-yx/components/search-autocomplete.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(SearchAutocomplete, "scZfQer6qZiX+/sEAjvfLJvS3GQ=");
_c = SearchAutocomplete;
var _c;
__turbopack_context__.k.register(_c, "SearchAutocomplete");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/components/resource-filters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResourceFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function ResourceFilters({ categories, ageGroups, serviceTypes, selectedCategory, selectedAgeGroups, selectedServiceTypes, selectedOperatingHours, onCategoryChange, onAgeGroupToggle, onServiceTypeToggle, onOperatingHoursChange, onReset }) {
    const hasActiveFilters = selectedCategory !== "all" || selectedAgeGroups.length > 0 || selectedServiceTypes.length > 0 || selectedOperatingHours !== "all";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border-2 border-slate-900 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg text-slate-900",
                        children: "Filters"
                    }, void 0, false, {
                        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onReset,
                        className: "text-slate-900 hover:bg-slate-100 px-3 py-1 border-2 border-slate-900 font-semibold transition",
                        children: "Reset All"
                    }, void 0, false, {
                        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                children: "Category"
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedCategory,
                                onChange: (e)=>onCategoryChange(e.target.value),
                                className: "form-select",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "All Categories"
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: cat,
                                            children: cat
                                        }, cat, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                children: "Age Group"
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: ageGroups.map((ageGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: selectedAgeGroups.includes(ageGroup),
                                                onChange: ()=>onAgeGroupToggle(ageGroup),
                                                className: "form-checkbox"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-slate-900",
                                                children: ageGroup
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, ageGroup, true, {
                                        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                children: "Service Type"
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: serviceTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: selectedServiceTypes.includes(type),
                                                onChange: ()=>onServiceTypeToggle(type),
                                                className: "form-checkbox"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-slate-900",
                                                children: type
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, type, true, {
                                        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                children: "Operating Hours"
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedOperatingHours,
                                onChange: (e)=>onOperatingHoursChange(e.target.value),
                                className: "form-select",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "Any Time"
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "open-now",
                                        children: "Open Now"
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "weekends",
                                        children: "Weekend Availability"
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "evenings",
                                        children: "Evening Hours"
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/community-resource-hub-yx/components/resource-filters.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = ResourceFilters;
var _c;
__turbopack_context__.k.register(_c, "ResourceFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3 rounded-none',
            sm: 'h-8 px-3 gap-1.5 has-[>svg]:px-2.5 rounded-none',
            lg: 'h-10 px-6 has-[>svg]:px-4 rounded-none',
            icon: 'size-9 rounded-none',
            'icon-sm': 'size-8 rounded-none',
            'icon-lg': 'size-10 rounded-none'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/community-resource-hub-yx/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/app/resources/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResourcesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$search$2d$autocomplete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/search-autocomplete.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$resource$2d$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/resource-filters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const allResources = [
    {
        id: "1",
        name: "Downtown Community Center",
        category: "Youth Programs",
        description: "Offering after-school programs, sports, arts, and mentoring for youth ages 6-18.",
        address: "123 Main Street, Downtown",
        phone: "(206) 555-0100",
        email: "info@dtcc.org",
        website: "www.dtcc.org",
        tags: [
            "Youth",
            "Sports",
            "Arts",
            "Free"
        ],
        hours: "Mon-Fri 3pm-8pm, Sat 10am-6pm",
        distance: 0.5,
        isFree: true,
        ageGroups: [
            "Teens",
            "Families"
        ]
    },
    {
        id: "2",
        name: "City Food Bank",
        category: "Food",
        description: "Emergency food assistance and nutrition programs for residents in need.",
        address: "456 Oak Avenue",
        phone: "(206) 555-0101",
        email: "help@cityfoodbank.org",
        website: "www.cityfoodbank.org",
        tags: [
            "Food",
            "Free",
            "Emergency"
        ],
        hours: "Mon-Sat 9am-5pm",
        distance: 1.2,
        isFree: true,
        ageGroups: [
            "Families",
            "Seniors"
        ]
    },
    {
        id: "3",
        name: "Community Mental Health Services",
        category: "Mental Health",
        description: "Counseling, therapy, and crisis support services for all ages.",
        address: "789 Pine Street",
        phone: "(206) 555-0102",
        email: "support@cmhs.org",
        website: "www.cmhs.org",
        tags: [
            "Mental Health",
            "Counseling",
            "Support"
        ],
        hours: "Mon-Fri 8am-6pm, Sat 10am-4pm",
        distance: 0.8,
        isFree: false,
        ageGroups: [
            "Teens",
            "Families",
            "Seniors"
        ]
    },
    {
        id: "4",
        name: "Senior Housing Initiative",
        category: "Housing",
        description: "Affordable housing options and support services specifically for seniors.",
        address: "321 Elm Street",
        phone: "(206) 555-0103",
        email: "info@seniorhousing.org",
        website: "www.seniorhousing.org",
        tags: [
            "Housing",
            "Seniors",
            "Affordable"
        ],
        hours: "Mon-Fri 9am-5pm",
        distance: 2.1,
        isFree: false,
        ageGroups: [
            "Seniors"
        ]
    },
    {
        id: "5",
        name: "Youth Scholarship Fund",
        category: "Education",
        description: "Educational scholarships and mentoring programs for youth from underserved communities.",
        address: "555 Birch Road",
        phone: "(206) 555-0104",
        email: "scholarships@ysf.org",
        website: "www.ysf.org",
        tags: [
            "Education",
            "Youth",
            "Scholarships",
            "Free"
        ],
        hours: "Mon-Fri 10am-6pm",
        distance: 1.5,
        isFree: true,
        ageGroups: [
            "Teens"
        ]
    },
    {
        id: "6",
        name: "Emergency Assistance Hotline",
        category: "Financial Aid",
        description: "Financial assistance, rent support, and utility bill help for qualified residents.",
        address: "Online & Phone",
        phone: "(206) 555-0105",
        email: "aid@emergencyassist.org",
        website: "www.emergencyassist.org",
        tags: [
            "Financial Aid",
            "Emergency",
            "Utilities",
            "Free"
        ],
        hours: "24/7",
        distance: 0,
        isFree: true,
        ageGroups: [
            "Families",
            "Seniors"
        ]
    },
    {
        id: "7",
        name: "Healthcare for All Clinic",
        category: "Healthcare",
        description: "Free and low-cost medical services including preventive care and vaccinations.",
        address: "234 Wellness Lane",
        phone: "(206) 555-0106",
        email: "care@healthcareforall.org",
        website: "www.healthcareforall.org",
        tags: [
            "Healthcare",
            "Low-cost",
            "Vaccines"
        ],
        hours: "Mon-Fri 8am-5pm, Sat 10am-2pm",
        distance: 0.9,
        isFree: false,
        ageGroups: [
            "Families",
            "Seniors",
            "Teens"
        ]
    },
    {
        id: "8",
        name: "Job Training Academy",
        category: "Employment",
        description: "Professional skills training and job placement assistance for all ages.",
        address: "888 Career Boulevard",
        phone: "(206) 555-0107",
        email: "enroll@jobtraining.org",
        website: "www.jobtraining.org",
        tags: [
            "Employment",
            "Training",
            "Free"
        ],
        hours: "Mon-Fri 9am-6pm, Sat 10am-3pm",
        distance: 1.8,
        isFree: true,
        ageGroups: [
            "Teens",
            "Families"
        ]
    }
];
function ResourcesPage() {
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedAgeGroups, setSelectedAgeGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedServiceTypes, setSelectedServiceTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedOperatingHours, setSelectedOperatingHours] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("distance");
    const [savedResources, setSavedResources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const categories = [
        "all",
        ...new Set(allResources.map((r)=>r.category))
    ];
    const ageGroups = [
        "Families",
        "Teens",
        "Seniors"
    ];
    const serviceTypes = [
        "Free",
        "Low-cost",
        "Membership-based"
    ];
    const searchSuggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ResourcesPage.useMemo[searchSuggestions]": ()=>[
                ...new Set(allResources.map({
                    "ResourcesPage.useMemo[searchSuggestions]": (r)=>r.name
                }["ResourcesPage.useMemo[searchSuggestions]"])),
                "Food",
                "Housing",
                "Mental Health",
                "Education",
                "Employment",
                "Youth Programs"
            ]
    }["ResourcesPage.useMemo[searchSuggestions]"], []);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ResourcesPage.useMemo[filtered]": ()=>{
            return allResources.filter({
                "ResourcesPage.useMemo[filtered]": (r)=>{
                    const matchesSearch = searchTerm === "" || r.name.toLowerCase().includes(searchTerm.toLowerCase()) || r.description.toLowerCase().includes(searchTerm.toLowerCase()) || r.tags.some({
                        "ResourcesPage.useMemo[filtered]": (tag)=>tag.toLowerCase().includes(searchTerm.toLowerCase())
                    }["ResourcesPage.useMemo[filtered]"]);
                    const matchesCategory = selectedCategory === "all" || r.category === selectedCategory;
                    const matchesAgeGroups = selectedAgeGroups.length === 0 || selectedAgeGroups.some({
                        "ResourcesPage.useMemo[filtered]": (ag)=>r.ageGroups.includes(ag)
                    }["ResourcesPage.useMemo[filtered]"]);
                    const matchesServiceTypes = selectedServiceTypes.length === 0 || selectedServiceTypes.some({
                        "ResourcesPage.useMemo[filtered]": (st)=>{
                            if (st === "Free") return r.isFree;
                            if (st === "Low-cost") return !r.isFree && r.tags.includes("Low-cost");
                            return r.tags.includes(st);
                        }
                    }["ResourcesPage.useMemo[filtered]"]);
                    return matchesSearch && matchesCategory && matchesAgeGroups && matchesServiceTypes;
                }
            }["ResourcesPage.useMemo[filtered]"]).sort({
                "ResourcesPage.useMemo[filtered]": (a, b)=>{
                    if (sortBy === "distance") {
                        return (a.distance || 0) - (b.distance || 0);
                    }
                    return a.name.localeCompare(b.name);
                }
            }["ResourcesPage.useMemo[filtered]"]);
        }
    }["ResourcesPage.useMemo[filtered]"], [
        searchTerm,
        selectedCategory,
        selectedAgeGroups,
        selectedServiceTypes,
        sortBy
    ]);
    const toggleSaveResource = (id)=>{
        setSavedResources((prev)=>prev.includes(id) ? prev.filter((rid)=>rid !== id) : [
                ...prev,
                id
            ]);
    };
    const handleReset = ()=>{
        setSearchTerm("");
        setSelectedCategory("all");
        setSelectedAgeGroups([]);
        setSelectedServiceTypes([]);
        setSelectedOperatingHours("all");
        setSortBy("distance");
    };
    const getMapLink = (address)=>{
        return `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-page py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-bold text-slate-900 mb-2",
                                    children: "Find Resources"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-slate-700",
                                    children: "Search and filter community resources available to you"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$search$2d$autocomplete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                items: searchSuggestions,
                                value: searchTerm,
                                onChange: setSearchTerm,
                                placeholder: "Search by organization name, type of service (e.g., 'food', 'counseling'), or tag..."
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-4 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "lg:col-span-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$resource$2d$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        categories: categories,
                                        ageGroups: ageGroups,
                                        serviceTypes: serviceTypes,
                                        selectedCategory: selectedCategory,
                                        selectedAgeGroups: selectedAgeGroups,
                                        selectedServiceTypes: selectedServiceTypes,
                                        selectedOperatingHours: selectedOperatingHours,
                                        onCategoryChange: setSelectedCategory,
                                        onAgeGroupToggle: (ag)=>setSelectedAgeGroups((prev)=>prev.includes(ag) ? prev.filter((x)=>x !== ag) : [
                                                    ...prev,
                                                    ag
                                                ]),
                                        onServiceTypeToggle: (st)=>setSelectedServiceTypes((prev)=>prev.includes(st) ? prev.filter((x)=>x !== st) : [
                                                    ...prev,
                                                    st
                                                ]),
                                        onOperatingHoursChange: setSelectedOperatingHours,
                                        onReset: handleReset
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                    className: "lg:col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold text-slate-900",
                                                    children: [
                                                        "Showing ",
                                                        filtered.length,
                                                        " resource",
                                                        filtered.length !== 1 ? "s" : ""
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: sortBy,
                                                    onChange: (e)=>setSortBy(e.target.value),
                                                    className: "px-4 py-2 border-2 border-slate-900 text-sm font-semibold focus:outline-none focus:bg-slate-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "distance",
                                                            children: "Closest First"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "name",
                                                            children: "Name (A-Z)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: filtered.length > 0 ? filtered.map((resource)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-2 border-slate-900 bg-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-start mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-xl font-bold text-slate-900 mb-1",
                                                                                children: resource.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                lineNumber: 293,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-semibold text-slate-700",
                                                                                children: resource.category
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                lineNumber: 294,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                        lineNumber: 292,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-2 ml-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>toggleSaveResource(resource.id),
                                                                                className: `p-2 border-2 transition ${savedResources.includes(resource.id) ? "border-slate-900 bg-slate-900 text-white" : "border-slate-900 bg-white text-slate-900 hover:bg-slate-50"}`,
                                                                                title: "Save resource",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                                    className: "w-5 h-5",
                                                                                    fill: savedResources.includes(resource.id) ? "currentColor" : "none"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                    lineNumber: 306,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                lineNumber: 297,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    const text = `Check out ${resource.name}: ${resource.description}. Phone: ${resource.phone}`;
                                                                                    navigator.share?.({
                                                                                        title: resource.name,
                                                                                        text,
                                                                                        url: window.location.href
                                                                                    }) || navigator.clipboard.writeText(text);
                                                                                },
                                                                                className: "p-2 border-2 border-slate-900 bg-white text-slate-900 hover:bg-slate-50 transition",
                                                                                title: "Share resource",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                                                    className: "w-5 h-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                    lineNumber: 323,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                lineNumber: 311,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                        lineNumber: 296,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-700 mb-4 leading-relaxed",
                                                                children: resource.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2 mb-6",
                                                                children: resource.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "tag-badge",
                                                                        children: tag
                                                                    }, tag, false, {
                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                        lineNumber: 334,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t-2 border-slate-300",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                className: "w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5 font-bold"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                lineNumber: 343,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm font-semibold text-slate-900",
                                                                                        children: "Address"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                        lineNumber: 345,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                        href: getMapLink(resource.address),
                                                                                        target: "_blank",
                                                                                        rel: "noopener noreferrer",
                                                                                        className: "text-sm text-slate-900 hover:underline font-semibold flex items-center gap-1",
                                                                                        children: [
                                                                                            resource.address,
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                                className: "w-3 h-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                                lineNumber: 353,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                        lineNumber: 346,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    resource.distance !== undefined && resource.distance > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-slate-600 mt-1",
                                                                                        children: [
                                                                                            resource.distance,
                                                                                            " miles away"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                        lineNumber: 356,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                lineNumber: 344,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                        lineNumber: 342,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                                className: "w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5 font-bold"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                lineNumber: 362,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm font-semibold text-slate-900",
                                                                                        children: "Phone"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                        lineNumber: 364,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                        href: `tel:${resource.phone}`,
                                                                                        className: "text-sm text-slate-900 hover:underline font-semibold",
                                                                                        children: resource.phone
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                        lineNumber: 365,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                lineNumber: 363,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                        lineNumber: 361,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                                className: "w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5 font-bold"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                lineNumber: 375,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm font-semibold text-slate-900",
                                                                                        children: "Email"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                        lineNumber: 377,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                        href: `mailto:${resource.email}`,
                                                                                        className: "text-sm text-slate-900 hover:underline font-semibold break-all",
                                                                                        children: resource.email
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                        lineNumber: 378,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                lineNumber: 376,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                        lineNumber: 374,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-semibold text-slate-900 mb-1",
                                                                                children: "Operating Hours"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                lineNumber: 388,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-slate-700",
                                                                                children: resource.hours
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                                lineNumber: 389,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                        lineNumber: 387,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-6 flex gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        className: "flex-1 bg-slate-900 hover:bg-slate-800 text-white border-2 border-slate-900 font-semibold py-3",
                                                                        onClick: ()=>{
                                                                            window.location.href = `/resources/${resource.id}`;
                                                                        },
                                                                        children: "View Full Details"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                        lineNumber: 395,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        className: "flex-1 border-2 border-slate-900 bg-white text-slate-900 hover:bg-slate-50 font-semibold py-3",
                                                                        onClick: ()=>window.open(resource.website),
                                                                        children: "Visit Website"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                        lineNumber: 403,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 23
                                                    }, this)
                                                }, resource.id, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 21
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-2 border-slate-900 bg-white p-12 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-700 text-lg mb-2",
                                                        children: "No resources found matching your criteria."
                                                    }, void 0, false, {
                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-600 text-sm",
                                                        children: "Try adjusting your filters or search terms."
                                                    }, void 0, false, {
                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: handleReset,
                                                        className: "mt-4 bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-50 font-semibold",
                                                        children: "Reset Filters"
                                                    }, void 0, false, {
                                                        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                                lineNumber: 414,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/community-resource-hub-yx/app/resources/page.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
_s(ResourcesPage, "3gkcKNkeQX9V/as//AVO/GaZNfE=");
_c = ResourcesPage;
var _c;
__turbopack_context__.k.register(_c, "ResourcesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=community-resource-hub-yx_057ede4a._.js.map