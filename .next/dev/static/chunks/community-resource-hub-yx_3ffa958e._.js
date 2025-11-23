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
"[project]/community-resource-hub-yx/app/submit/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubmitResourcePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const serviceTypes = [
    "Food Assistance",
    "Housing",
    "Healthcare",
    "Education",
    "Employment",
    "Mental Health",
    "Youth Programs",
    "Financial Aid",
    "Legal Services",
    "Other"
];
const ageGroupOptions = [
    "Families",
    "Teens",
    "Seniors",
    "Children",
    "Young Adults"
];
function SubmitResourcePage() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        orgName: "",
        serviceType: [],
        description: "",
        contactPerson: "",
        email: "",
        phone: "",
        website: "",
        address: "",
        hours: "",
        ageGroups: [],
        isFree: false,
        tags: "",
        eligibility: "",
        agree: false
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.orgName.trim()) newErrors.orgName = "Organization name is required";
        if (formData.serviceType.length === 0) newErrors.serviceType = "Select at least one service type";
        if (!formData.description.trim()) newErrors.description = "Service description is required";
        if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact person name is required";
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.hours.trim()) newErrors.hours = "Operating hours are required";
        if (!formData.agree) newErrors.agree = "You must agree to the terms";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? e.target.checked : value
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };
    const handleServiceTypeChange = (type)=>{
        setFormData((prev)=>({
                ...prev,
                serviceType: prev.serviceType.includes(type) ? prev.serviceType.filter((t)=>t !== type) : [
                    ...prev.serviceType,
                    type
                ]
            }));
        if (errors.serviceType) {
            setErrors({
                ...errors,
                serviceType: ""
            });
        }
    };
    const handleAgeGroupChange = (ageGroup)=>{
        setFormData((prev)=>({
                ...prev,
                ageGroups: prev.ageGroups.includes(ageGroup) ? prev.ageGroups.filter((ag)=>ag !== ageGroup) : [
                    ...prev.ageGroups,
                    ageGroup
                ]
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!validateForm()) return;
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setTimeout(()=>{
            setSubmitted(false);
            setFormData({
                orgName: "",
                serviceType: [],
                description: "",
                contactPerson: "",
                email: "",
                phone: "",
                website: "",
                address: "",
                hours: "",
                ageGroups: [],
                isFree: false,
                tags: "",
                eligibility: "",
                agree: false
            });
        }, 4000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-narrow py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-bold text-slate-900 mb-3",
                                    children: "Submit a Resource"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-slate-700",
                                    children: "Help us expand our community resource hub by submitting new organizations and services."
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 border-2 border-slate-900 bg-white p-6 flex items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-6 h-6 text-slate-900 flex-shrink-0 mt-0.5 font-bold"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-slate-900 mb-1 text-lg",
                                            children: "Thank you for your submission!"
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-700 text-sm",
                                            children: [
                                                "We've received your resource submission and will review it within 2-3 business days. A confirmation email has been sent to ",
                                                formData.email,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "border-2 border-slate-900 bg-white p-8 space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "form-section-title",
                                            children: "Organization Information"
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: [
                                                        "Organization Name ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-600",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "orgName",
                                                    value: formData.orgName,
                                                    onChange: handleChange,
                                                    className: `w-full box-input ${errors.orgName ? "border-red-600 bg-red-50" : ""}`,
                                                    placeholder: "Name of the organization"
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this),
                                                errors.orgName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "form-error",
                                                    children: errors.orgName
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: [
                                                        "Primary Service Type(s) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-600",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                                                    children: serviceTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 cursor-pointer p-3 border-2 border-slate-900 bg-white hover:bg-slate-50 transition",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: formData.serviceType.includes(type),
                                                                    onChange: ()=>handleServiceTypeChange(type),
                                                                    className: "rounded border-2 border-slate-900 cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-slate-900 font-medium",
                                                                    children: type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, type, true, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this),
                                                errors.serviceType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "form-error",
                                                    children: errors.serviceType
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: [
                                                        "Service Description ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-600",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 39
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "description",
                                                    value: formData.description,
                                                    onChange: handleChange,
                                                    rows: 4,
                                                    className: `w-full box-input ${errors.description ? "border-red-600 bg-red-50" : ""}`,
                                                    placeholder: "Describe the services provided, mission, and how people can access these services..."
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this),
                                                errors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "form-error",
                                                    children: errors.description
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 40
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-600 mt-1",
                                                    children: "Minimum 20 characters recommended"
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "form-section-title",
                                            children: "Contact Information"
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: [
                                                                "Contact Person ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-600",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 36
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "contactPerson",
                                                            value: formData.contactPerson,
                                                            onChange: handleChange,
                                                            className: `w-full box-input ${errors.contactPerson ? "border-red-600 bg-red-50" : ""}`,
                                                            placeholder: "Full name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 19
                                                        }, this),
                                                        errors.contactPerson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "form-error",
                                                            children: errors.contactPerson
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 44
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: [
                                                                "Email ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-600",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            name: "email",
                                                            value: formData.email,
                                                            onChange: handleChange,
                                                            className: `w-full box-input ${errors.email ? "border-red-600 bg-red-50" : ""}`,
                                                            placeholder: "email@example.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 19
                                                        }, this),
                                                        errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "form-error",
                                                            children: errors.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: [
                                                                "Phone ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-600",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "tel",
                                                            name: "phone",
                                                            value: formData.phone,
                                                            onChange: handleChange,
                                                            className: `w-full box-input ${errors.phone ? "border-red-600 bg-red-50" : ""}`,
                                                            placeholder: "(555) 123-4567"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 19
                                                        }, this),
                                                        errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "form-error",
                                                            children: errors.phone
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: "Website (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "url",
                                                            name: "website",
                                                            value: formData.website,
                                                            onChange: handleChange,
                                                            className: "w-full box-input",
                                                            placeholder: "www.example.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "form-section-title",
                                            children: "Service Details"
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: [
                                                        "Address ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-600",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "address",
                                                    value: formData.address,
                                                    onChange: handleChange,
                                                    className: `w-full box-input ${errors.address ? "border-red-600 bg-red-50" : ""}`,
                                                    placeholder: "Full address"
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 17
                                                }, this),
                                                errors.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "form-error",
                                                    children: errors.address
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: [
                                                        "Operating Hours ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-600",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "hours",
                                                    value: formData.hours,
                                                    onChange: handleChange,
                                                    className: `w-full box-input ${errors.hours ? "border-red-600 bg-red-50" : ""}`,
                                                    placeholder: "e.g., Mon-Fri 9am-5pm, Sat 10am-3pm"
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 17
                                                }, this),
                                                errors.hours && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "form-error",
                                                    children: errors.hours
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: "Age Groups Served (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                                                    children: ageGroupOptions.map((ageGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 cursor-pointer p-3 border-2 border-slate-900 bg-white hover:bg-slate-50 transition",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: formData.ageGroups.includes(ageGroup),
                                                                    onChange: ()=>handleAgeGroupChange(ageGroup),
                                                                    className: "rounded border-2 border-slate-900 cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-slate-900 font-medium",
                                                                    children: ageGroup
                                                                }, void 0, false, {
                                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                                    lineNumber: 340,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, ageGroup, true, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6 flex items-center gap-3 p-4 border-2 border-slate-900 bg-slate-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    name: "isFree",
                                                    checked: formData.isFree,
                                                    onChange: handleChange,
                                                    id: "isFree",
                                                    className: "w-5 h-5 border-2 border-slate-900 cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "isFree",
                                                    className: "cursor-pointer font-semibold text-slate-900",
                                                    children: "This service is free"
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 346,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-start gap-3 cursor-pointer p-4 border-2 border-slate-900 bg-slate-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    name: "agree",
                                                    checked: formData.agree,
                                                    onChange: handleChange,
                                                    className: "w-5 h-5 border-2 border-slate-900 cursor-pointer mt-1 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-slate-900",
                                                    children: [
                                                        "I confirm that the information provided is accurate and that the organization operates legally in our jurisdiction. ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-600",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this),
                                        errors.agree && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "form-error ml-8",
                                            children: errors.agree
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 376,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-4 border-t-2 border-slate-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            className: "flex-1 bg-slate-900 hover:bg-slate-800 text-white border-2 border-slate-900 font-semibold py-3",
                                            children: "Submit Resource"
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "reset",
                                            className: "flex-1 border-2 border-slate-900 bg-white text-slate-900 hover:bg-slate-50 font-semibold py-3",
                                            children: "Clear Form"
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                            lineNumber: 387,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/community-resource-hub-yx/app/submit/page.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s(SubmitResourcePage, "KHl043vnrjDsBIthn/SYruTblAs=");
_c = SubmitResourcePage;
var _c;
__turbopack_context__.k.register(_c, "SubmitResourcePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=community-resource-hub-yx_3ffa958e._.js.map