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
"[project]/community-resource-hub-yx/components/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Hero() {
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSearch = (e)=>{
        e.preventDefault();
        if (searchTerm.trim()) {
            window.location.href = `/resources?search=${encodeURIComponent(searchTerm)}`;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-slate-900 text-white py-16 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance",
                                children: "Find the Community Resources You Need"
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-200 mb-8 leading-relaxed",
                                children: "Access comprehensive information about local services, programs, and support. From food assistance to youth programs, job training to housing support—find what you need."
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSearch,
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-0 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search by service (e.g., 'food', 'housing', 'jobs')",
                                                    className: "w-full px-5 py-3 border-2 border-slate-700 bg-slate-800 text-white placeholder:text-gray-400 focus:outline-none focus:border-white",
                                                    value: searchTerm,
                                                    onChange: (e)=>setSearchTerm(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                className: "bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 border-2 border-slate-700 h-auto",
                                                children: "Search"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/resources",
                                        className: "text-gray-300 hover:text-white transition flex items-center gap-2",
                                        children: [
                                            "Browse all resources",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-4 pt-8 border-t border-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold text-white",
                                                children: "100+"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-300",
                                                children: "Resources"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold text-white",
                                                children: "8"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-300",
                                                children: "Categories"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold text-white",
                                                children: "24/7"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-300",
                                                children: "Available"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full border-4 border-slate-700 bg-slate-800 p-12 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-6xl mb-6",
                                    children: "IMAGE HERE"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold mb-2",
                                    children: "cool image here"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300",
                                    children: "i love the images here"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/community-resource-hub-yx/components/hero.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Hero, "+YdqPTpSlp4r5CWiFEQiF/UjThM=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/components/featured-services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
"use client";
;
;
;
const services = [
    {
        id: 1,
        name: "Food Assistance",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        description: "Emergency meals & groceries",
        category: "Food",
        count: "12 resources"
    },
    {
        id: 2,
        name: "Housing Support",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        description: "Affordable housing & rentals",
        category: "Housing",
        count: "8 resources"
    },
    {
        id: 3,
        name: "Financial Aid",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        description: "Emergency assistance & bills",
        category: "Financial Aid",
        count: "6 resources"
    },
    {
        id: 4,
        name: "Mental Health",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        description: "Counseling & support services",
        category: "Mental Health",
        count: "9 resources"
    },
    {
        id: 5,
        name: "Education",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        description: "Learning & skill development",
        category: "Education",
        count: "10 resources"
    },
    {
        id: 6,
        name: "Employment",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        description: "Jobs & training programs",
        category: "Employment",
        count: "7 resources"
    }
];
function FeaturedServices() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 px-4 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-slate-900 mb-2",
                            children: "Browse by Category"
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-700",
                            children: "Find resources in your area of need"
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",
                    children: services.map((service)=>{
                        const Icon = service.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/resources?category=${encodeURIComponent(service.category)}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full flex flex-col items-center gap-3 p-6 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition cursor-pointer group h-full bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center w-12 h-12 bg-slate-200 rounded-full group-hover:bg-slate-700 transition",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-6 h-6 text-slate-900 group-hover:text-white transition"
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
                                            lineNumber: 73,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
                                        lineNumber: 72,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-slate-900 group-hover:text-white transition",
                                                children: service.name
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
                                                lineNumber: 76,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-600 mt-1 group-hover:text-gray-200 transition",
                                                children: service.description
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
                                                lineNumber: 77,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-900 font-semibold mt-2 group-hover:text-white transition",
                                                children: service.count
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
                                                lineNumber: 80,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
                                        lineNumber: 75,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
                                lineNumber: 71,
                                columnNumber: 17
                            }, this)
                        }, service.id, false, {
                            fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
                            lineNumber: 70,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/community-resource-hub-yx/components/featured-services.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c = FeaturedServices;
var _c;
__turbopack_context__.k.register(_c, "FeaturedServices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/lib/sample-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Sample data for all homepage sections
__turbopack_context__.s([
    "benefitPrograms",
    ()=>benefitPrograms,
    "governmentUpdates",
    ()=>governmentUpdates,
    "latestNews",
    ()=>latestNews,
    "popularServices",
    ()=>popularServices,
    "upcomingEvents",
    ()=>upcomingEvents
]);
const latestNews = [
    {
        id: 1,
        title: "Mayor Releases 2025 Budget with Focus on Community Services",
        excerpt: "The new budget prioritizes funding for youth programs, mental health services, and affordable housing initiatives.",
        date: "November 22, 2025",
        category: "Government",
        image: "/city-government-meeting.jpg",
        link: "/news/mayor-budget-2025"
    },
    {
        id: 2,
        title: "Free Healthcare Services Now Available in Downtown Community Center",
        excerpt: "Residents can access free health screenings, vaccinations, and counseling services starting next week.",
        date: "November 20, 2025",
        category: "Health",
        image: "/healthcare-services.jpg",
        link: "/news/healthcare-services"
    },
    {
        id: 3,
        title: "Youth Employment Program Expands to Five New Neighborhoods",
        excerpt: "The city's job training initiative now serves over 2,000 young adults with job placement support.",
        date: "November 18, 2025",
        category: "Youth",
        image: "/youth-employment.jpg",
        link: "/news/youth-employment"
    }
];
const popularServices = [
    {
        id: 1,
        name: "Apply for Assistance",
        icon: "📋",
        description: "Food, housing, financial aid"
    },
    {
        id: 2,
        name: "Report a Problem",
        icon: "🚨",
        description: "Potholes, graffiti, waste"
    },
    {
        id: 3,
        name: "Pay Bills Online",
        icon: "💳",
        description: "Utilities, parking, fines"
    },
    {
        id: 4,
        name: "Schedule Appointments",
        icon: "📅",
        description: "Permits, licenses, services"
    },
    {
        id: 5,
        name: "Find Nearby Resources",
        icon: "📍",
        description: "Food, housing, jobs"
    },
    {
        id: 6,
        name: "Access Job Training",
        icon: "💼",
        description: "Skills, employment, mentoring"
    },
    {
        id: 7,
        name: "View Event Calendar",
        icon: "🎉",
        description: "Community, culture, sports"
    },
    {
        id: 8,
        name: "Get Legal Help",
        icon: "⚖️",
        description: "Free consultations available"
    }
];
const upcomingEvents = [
    {
        id: 1,
        title: "Community Job Fair 2025",
        date: "December 5, 2025",
        time: "9:00 AM - 3:00 PM",
        location: "Central Community Center",
        image: "/job-fair-event.jpg",
        description: "Meet with 50+ employers hiring now. Free admission, walk-ins welcome.",
        tags: [
            "Employment",
            "Youth",
            "Free"
        ]
    },
    {
        id: 2,
        title: "Free Winter Coat Distribution",
        date: "December 1-15, 2025",
        time: "10:00 AM - 6:00 PM",
        location: "Multiple locations citywide",
        image: "/winter-coat-giveaway.jpg",
        description: "Free warm coats for families in need. Sizes for all ages.",
        tags: [
            "Community",
            "Free",
            "Seasonal"
        ]
    },
    {
        id: 3,
        title: "Holiday Food Drive & Meals",
        date: "December 20-24, 2025",
        time: "Various times",
        location: "Community Centers & Food Banks",
        image: "/holiday-food-distribution.jpg",
        description: "Free holiday meals and food boxes for all families.",
        tags: [
            "Food",
            "Family",
            "Holiday"
        ]
    },
    {
        id: 4,
        title: "Mental Health Wellness Workshop",
        date: "December 3, 2025",
        time: "6:00 PM - 8:00 PM",
        location: "Downtown Health Center",
        image: "/mental-health-workshop.jpg",
        description: "Learn stress management and wellness techniques. Free, no registration required.",
        tags: [
            "Health",
            "Mental Health",
            "Free"
        ]
    }
];
const governmentUpdates = [
    {
        id: 1,
        title: "Winter Weather Preparedness",
        subtitle: "City services ready for snow and ice",
        description: "The city is fully prepared with salt, sand, and plow crews ready for winter conditions.",
        date: "Posted November 22, 2025",
        image: "/winter-weather-preparation.jpg",
        action: "Learn More"
    },
    {
        id: 2,
        title: "New Community Center Opens",
        subtitle: "State-of-the-art facility serving east side",
        description: "Brand new recreational and educational facility with pools, gyms, and classrooms.",
        date: "Posted November 20, 2025",
        image: "/new-community-center.jpg",
        action: "Visit Page"
    },
    {
        id: 3,
        title: "Updated Transit Routes",
        subtitle: "Efficient service to new neighborhoods",
        description: "Bus and transit routes expanded to better serve growing residential areas.",
        date: "Posted November 19, 2025",
        image: "/public-transit.jpg",
        action: "See Map"
    },
    {
        id: 4,
        title: "Education Funding Announcement",
        subtitle: "Increased investment in public schools",
        description: "Additional $50M allocated for school improvements and teacher recruitment.",
        date: "Posted November 18, 2025",
        image: "/education-funding.jpg",
        action: "Details"
    }
];
const benefitPrograms = [
    {
        id: 1,
        title: "Food Assistance",
        description: "Meals, groceries, and nutritional support for families and seniors.",
        eligibility: "Low-income families, seniors, individuals in crisis"
    },
    {
        id: 2,
        title: "Housing Support",
        description: "Emergency housing, rental assistance, and permanent housing programs.",
        eligibility: "Low-income, unhoused, families at risk"
    },
    {
        id: 3,
        title: "Healthcare Services",
        description: "Free and low-cost medical, dental, and mental health services.",
        eligibility: "Uninsured and underinsured residents"
    },
    {
        id: 4,
        title: "Youth Programs",
        description: "Job training, mentoring, education, and recreational activities.",
        eligibility: "Youth ages 13-24 in the city"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/components/popular-services-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PopularServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$lib$2f$sample$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/lib/sample-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function PopularServicesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-16 px-4 md:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-slate-900 mb-2",
                                    children: "Popular Services"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/popular-services-section.tsx",
                                    lineNumber: 14,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-700",
                                    children: "Quick access to most-used city services"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/popular-services-section.tsx",
                                    lineNumber: 15,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/components/popular-services-section.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/services",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "link",
                                className: "text-slate-900 p-0 font-semibold hover:underline",
                                children: "See All Services"
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/popular-services-section.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/popular-services-section.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/popular-services-section.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$lib$2f$sample$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popularServices"].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-white p-6 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all text-left group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl mb-3",
                                    children: service.icon
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/popular-services-section.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-sm text-slate-900 group-hover:text-white transition-colors",
                                    children: service.name
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/popular-services-section.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-600 mt-1 group-hover:text-gray-200 transition-colors",
                                    children: service.description
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/popular-services-section.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, service.id, true, {
                            fileName: "[project]/community-resource-hub-yx/components/popular-services-section.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/community-resource-hub-yx/components/popular-services-section.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/community-resource-hub-yx/components/popular-services-section.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/community-resource-hub-yx/components/popular-services-section.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = PopularServicesSection;
var _c;
__turbopack_context__.k.register(_c, "PopularServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/components/featured-carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const featuredResources = [
    {
        id: "1",
        name: "Downtown Community Center",
        category: "Youth Programs",
        description: "Offering comprehensive after-school programs, sports, arts, and mentoring for youth ages 6-18.",
        shortDescription: "Resource of the Month",
        address: "123 Main Street, Downtown",
        phone: "(206) 555-0100",
        website: "www.dtcc.org",
        image: "/placeholder.svg?key=carousel1",
        tags: [
            "Youth",
            "Sports",
            "Arts",
            "Free"
        ],
        ageGroups: [
            "Teens",
            "Families"
        ],
        hours: "Mon-Fri 3pm-8pm, Sat 10am-6pm",
        whyImportant: "This center serves over 500 youth annually, providing safe spaces for learning, recreation, and community building. They focus on underserved neighborhoods."
    },
    {
        id: "2",
        name: "City Food Bank",
        category: "Food",
        description: "Emergency food assistance and nutrition programs providing fresh groceries and meal support for residents in need.",
        shortDescription: "Featured Organization",
        address: "456 Oak Avenue",
        phone: "(206) 555-0101",
        website: "www.cityfoodbank.org",
        image: "/placeholder.svg?key=carousel2",
        tags: [
            "Food",
            "Free",
            "Emergency"
        ],
        ageGroups: [
            "Families",
            "Seniors"
        ],
        hours: "Mon-Sat 9am-5pm",
        whyImportant: "Distributed over 2 million meals last year and serves as a critical resource for food-insecure families in our community."
    },
    {
        id: "3",
        name: "Community Mental Health Services",
        category: "Mental Health",
        description: "Professional counseling, therapy, and crisis support services available for all ages with sliding scale fees.",
        shortDescription: "Upcoming Event Highlight",
        address: "789 Pine Street",
        phone: "(206) 555-0102",
        website: "www.cmhs.org",
        image: "/placeholder.svg?key=carousel3",
        tags: [
            "Mental Health",
            "Counseling",
            "Support"
        ],
        ageGroups: [
            "Teens",
            "Families",
            "Seniors"
        ],
        hours: "Mon-Fri 8am-6pm, Sat 10am-4pm",
        whyImportant: "Expanded their services this year to include peer support groups and crisis hotline available 24/7 for emergencies."
    }
];
function FeaturedCarousel() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoPlay, setAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedCarousel.useEffect": ()=>{
            if (!autoPlay) return;
            const interval = setInterval({
                "FeaturedCarousel.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "FeaturedCarousel.useEffect.interval": (prev)=>(prev + 1) % featuredResources.length
                    }["FeaturedCarousel.useEffect.interval"]);
                }
            }["FeaturedCarousel.useEffect.interval"], 8000);
            return ({
                "FeaturedCarousel.useEffect": ()=>clearInterval(interval)
            })["FeaturedCarousel.useEffect"];
        }
    }["FeaturedCarousel.useEffect"], [
        autoPlay
    ]);
    const next = ()=>{
        setCurrentIndex((prev)=>(prev + 1) % featuredResources.length);
        setAutoPlay(false);
    };
    const prev = ()=>{
        setCurrentIndex((prev)=>(prev - 1 + featuredResources.length) % featuredResources.length);
        setAutoPlay(false);
    };
    const current = featuredResources[currentIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 px-4 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-foreground mb-2",
                            children: "Featured Resources"
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Spotlight on organizations making a difference"
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: prev,
                            className: "absolute -left-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white p-3 hover:bg-slate-800 transition z-10 hidden md:flex items-center justify-center border-2 border-slate-900",
                            "aria-label": "Previous featured resource",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: next,
                            className: "absolute -right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white p-3 hover:bg-slate-800 transition z-10 hidden md:flex items-center justify-center border-2 border-slate-900",
                            "aria-label": "Next featured resource",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border-4 border-slate-900 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-0 min-h-96",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-200 relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: current.image || "/placeholder.svg",
                                                alt: current.name,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black bg-opacity-20 flex items-end p-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block bg-slate-900 text-white px-4 py-2 text-sm font-semibold mb-2",
                                                        children: current.shortDescription
                                                    }, void 0, false, {
                                                        fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-8 md:p-10 flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block bg-slate-100 text-slate-900 px-3 py-1 text-xs font-bold mb-3 uppercase tracking-wide border border-slate-300",
                                                                children: "Featured"
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-3xl font-bold text-foreground mb-2",
                                                                children: current.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-700 font-semibold text-lg",
                                                                children: current.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-6 leading-relaxed text-base",
                                                        children: current.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50 border-2 border-slate-700 p-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-foreground mb-2",
                                                                children: "Why it's important:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-700",
                                                                children: current.whyImportant
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2 mb-6",
                                                        children: current.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs bg-white text-slate-700 px-2 py-1 border border-slate-300 font-medium",
                                                                children: tag
                                                            }, tag, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 mb-6 pb-6 border-b-2 border-slate-300 pt-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-foreground",
                                                                children: "Hours:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            current.hours
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-foreground",
                                                                children: "Phone:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `tel:${current.phone}`,
                                                                className: "text-slate-700 hover:underline font-semibold",
                                                                children: current.phone
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/resources/${current.id}`,
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    className: "w-full bg-slate-900 hover:bg-slate-800 text-white",
                                                    children: [
                                                        "View Full Resource",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-4 h-4 ml-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-3 mt-8",
                            children: featuredResources.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setCurrentIndex(idx);
                                        setAutoPlay(false);
                                    },
                                    className: `transition-all duration-300 ${idx === currentIndex ? "w-8 h-3 bg-slate-900 border-2 border-slate-900" : "w-3 h-3 bg-gray-300 hover:bg-gray-400 border border-gray-400"}`,
                                    "aria-label": `Go to featured resource ${idx + 1}`
                                }, idx, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        !autoPlay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setAutoPlay(true),
                            className: "mt-4 text-center w-full text-sm text-gray-500 hover:text-gray-700 transition",
                            children: "Resume auto-play"
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/community-resource-hub-yx/components/featured-carousel.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(FeaturedCarousel, "2nTCUQKgPrrqvZVMOKx/x6rBSo4=");
_c = FeaturedCarousel;
var _c;
__turbopack_context__.k.register(_c, "FeaturedCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/components/highlighted-resources.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HighlightedResources
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const highlights = [
    {
        id: 1,
        title: "City Food Bank",
        category: "Food Assistance",
        shortDescription: "Emergency meals and groceries",
        description: "Access emergency food assistance and meal programs across the community with free groceries delivered weekly.",
        image: "/placeholder.svg?key=highlight1",
        location: "Multiple Locations",
        served: "2,000+ families/month",
        tags: [
            "Free",
            "Food",
            "Families"
        ]
    },
    {
        id: 2,
        title: "Youth Development Center",
        category: "Youth Programs",
        shortDescription: "Mentoring and career prep",
        description: "After-school programs, mentoring, career development workshops, and internship placements for teens.",
        image: "/placeholder.svg?key=highlight2",
        location: "3 Community Centers",
        served: "500+ youth annually",
        tags: [
            "Youth",
            "Education",
            "Free"
        ]
    },
    {
        id: 3,
        title: "Community Health Clinic",
        category: "Healthcare",
        shortDescription: "Affordable health services",
        description: "Affordable healthcare services for uninsured and underinsured residents including preventive care.",
        image: "/placeholder.svg?key=highlight3",
        location: "Downtown & North Branch",
        served: "5,000+ patients/year",
        tags: [
            "Healthcare",
            "Low-cost",
            "All Ages"
        ]
    }
];
function HighlightedResources() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 px-4 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-foreground mb-2",
                            children: "Spotlight on Resources"
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Popular services and organizations in our community"
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: highlights.map((resource)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "bg-white border-2 border-slate-300 overflow-hidden flex flex-col hover:border-slate-500 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-video bg-gray-200 overflow-hidden border-b-2 border-slate-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: resource.image || "/placeholder.svg",
                                        alt: resource.title,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 flex flex-col flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 mb-3 w-fit uppercase tracking-wide border border-slate-300",
                                            children: resource.category
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-foreground mb-1",
                                            children: resource.title
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-700 font-medium text-sm mb-3",
                                            children: resource.shortDescription
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 text-sm mb-4 flex-1 line-clamp-2",
                                            children: resource.description
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 mb-4 pb-4 border-b-2 border-slate-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-4 h-4 text-slate-700 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: resource.location
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "w-4 h-4 text-slate-700 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: resource.served
                                                        }, void 0, false, {
                                                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 mb-4",
                                            children: resource.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs bg-slate-100 text-slate-700 px-2 py-1 font-medium border border-slate-300",
                                                    children: tag
                                                }, tag, false, {
                                                    fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/resources/${resource.id}`,
                                            className: "w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                className: "w-full border-2 border-slate-300 text-slate-900 hover:bg-slate-50 bg-transparent",
                                                children: [
                                                    "Learn More",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-4 h-4 ml-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, resource.id, true, {
                            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/community-resource-hub-yx/components/highlighted-resources.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = HighlightedResources;
var _c;
__turbopack_context__.k.register(_c, "HighlightedResources");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/components/latest-news-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LatestNewsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$lib$2f$sample$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/lib/sample-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function LatestNewsSection() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const currentArticle = __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$lib$2f$sample$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latestNews"][currentIndex];
    const totalArticles = __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$lib$2f$sample$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latestNews"].length;
    const handleNext = ()=>setCurrentIndex((prev)=>(prev + 1) % totalArticles);
    const handlePrev = ()=>setCurrentIndex((prev)=>(prev - 1 + totalArticles) % totalArticles);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-12 px-4 md:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-slate-900 mb-2",
                                    children: "Latest News"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                    lineNumber: 22,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-700",
                                    children: "asdasdasdasdasdasdasdawsd."
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                    lineNumber: 23,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/news",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "link",
                                className: "text-slate-900 p-0 font-semibold hover:underline",
                                children: "See all News"
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-1/2 flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-square bg-gray-200 border-2 border-slate-300 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: currentArticle.image || "/placeholder.svg",
                                    alt: currentArticle.title,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-1/2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mb-3",
                                    children: [
                                        "Posted ",
                                        currentArticle.date
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-foreground mb-4 leading-tight",
                                    children: currentArticle.title
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm mb-6",
                                    children: currentArticle.excerpt
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: currentArticle.link,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "bg-slate-900 hover:bg-slate-800 text-white border-2 border-slate-900",
                                        children: "Read press release"
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mt-8 pt-6 border-t-2 border-slate-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: [
                                                currentIndex + 1,
                                                " of ",
                                                totalArticles
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handlePrev,
                                                    className: "w-10 h-10 bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center border-2 border-slate-900",
                                                    "aria-label": "Previous article",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleNext,
                                                    className: "w-10 h-10 bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center border-2 border-slate-900",
                                                    "aria-label": "Next article",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/community-resource-hub-yx/components/latest-news-section.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(LatestNewsSection, "tusBbsahUVevXfyh6oH5R6YDC9Q=");
_c = LatestNewsSection;
var _c;
__turbopack_context__.k.register(_c, "LatestNewsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/components/upcoming-events-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UpcomingEventsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$lib$2f$sample$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/lib/sample-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function UpcomingEventsSection() {
    _s();
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date(2025, 10, 22));
    const getDaysInMonth = (date)=>{
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    const getFirstDayOfMonth = (date)=>{
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };
    const days = Array.from({
        length: getDaysInMonth(selectedDate)
    }, (_, i)=>i + 1);
    const firstDay = getFirstDayOfMonth(selectedDate);
    const emptyDays = Array.from({
        length: firstDay
    }, (_, i)=>null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-12 px-4 md:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-slate-900 mb-2",
                                    children: "Latest Events"
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                    lineNumber: 29,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-700",
                                    children: "asdasdasdasdasdasdasdawsd."
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                    lineNumber: 30,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/news",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "link",
                                className: "text-slate-900 p-0 font-semibold hover:underline",
                                children: "See all Events"
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-1 border-2 border-slate-900 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-sm text-slate-900",
                                        children: selectedDate.toLocaleString("default", {
                                            month: "long",
                                            year: "numeric"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-7 gap-1 mb-4",
                                    children: [
                                        [
                                            "Sun",
                                            "Mon",
                                            "Tue",
                                            "Wed",
                                            "Thu",
                                            "Fri",
                                            "Sat"
                                        ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-xs font-bold text-slate-900 py-2",
                                                children: day
                                            }, day, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this)),
                                        emptyDays.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, `empty-${i}`, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)),
                                        days.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)),
                                                className: `text-center py-2 text-sm font-semibold cursor-pointer border transition ${day === selectedDate.getDate() ? "bg-slate-900 text-white border-2 border-slate-900" : "hover:border-2 hover:border-slate-900 text-slate-900 border border-gray-300"}`,
                                                children: day
                                            }, day, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$lib$2f$sample$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upcomingEvents"].map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-2 border-slate-900 p-4 hover:bg-slate-50 transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-slate-900 mb-2 text-sm",
                                                children: event.title
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-700 mb-3 line-clamp-2",
                                                children: event.description
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 text-xs text-slate-700 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                size: 14,
                                                                className: "flex-shrink-0 mt-0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: event.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                size: 14,
                                                                className: "flex-shrink-0 mt-0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: event.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                                lineNumber: 86,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                size: 14,
                                                                className: "flex-shrink-0 mt-0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: event.location
                                                            }, void 0, false, {
                                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1 mb-3",
                                                children: event.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tag-badge",
                                                        children: tag
                                                    }, tag, false, {
                                                        fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/events/${event.id}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "box-button-primary w-full",
                                                    children: "Learn More"
                                                }, void 0, false, {
                                                    fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, event.id, true, {
                                        fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/community-resource-hub-yx/components/upcoming-events-section.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(UpcomingEventsSection, "jVFCF5z9LvfzNkjQVP/WMjgxI4o=");
_c = UpcomingEventsSection;
var _c;
__turbopack_context__.k.register(_c, "UpcomingEventsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/components/benefit-programs-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BenefitProgramsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$lib$2f$sample$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/lib/sample-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function BenefitProgramsSection() {
    _s();
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleExpand = (id)=>{
        setExpandedId(expandedId === id ? null : id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-12 px-4 md:px-8 bg-white border-slate-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-slate-900 mb-2",
                            children: "Benefit Programs for You"
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-700",
                            children: "You may be eligible for help with food, money, housing, or work. Click any program below to learn more."
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$lib$2f$sample$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["benefitPrograms"].map((program)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-2 border-slate-900 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleExpand(program.id),
                                    className: "w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition font-semibold text-slate-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-left text-lg",
                                            children: program.title
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: `w-5 h-5 text-slate-900 transition-transform ${expandedId === program.id ? "transform rotate-180" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this),
                                expandedId === program.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t-2 border-slate-300 px-6 py-4 bg-slate-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-700 mb-4 leading-relaxed",
                                            children: program.description
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                                            lineNumber: 44,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 text-sm font-semibold border-2 border-slate-900",
                                            children: "Check Eligibility"
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                                            lineNumber: 45,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, program.id, true, {
                            fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 border-t-2 border-slate-300 pt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-700 mb-4",
                            children: "Not sure which programs you qualify for? Use our eligibility checker to find out."
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 font-semibold border-2 border-slate-900",
                            children: "Check Your Eligibility"
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/community-resource-hub-yx/components/benefit-programs-section.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(BenefitProgramsSection, "qpIQi94hcn+lxkJWgZG2jWze6qI=");
_c = BenefitProgramsSection;
var _c;
__turbopack_context__.k.register(_c, "BenefitProgramsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/components/cta-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTASection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
"use client";
;
;
;
;
const stats = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "w-8 h-8 text-slate-900"
        }, void 0, false, {
            fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
            lineNumber: 9,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "For Residents",
        label: "Browse Resources",
        description: "Easily find services and programs tailored to your needs.",
        link: "/resources",
        outline: false
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
            className: "w-8 h-8 text-slate-900"
        }, void 0, false, {
            fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
            lineNumber: 17,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "For Organizations",
        label: "Submit Resource",
        description: "Add your organization so residents can discover your services.",
        link: "/submit",
        outline: false
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "w-8 h-8 text-slate-900"
        }, void 0, false, {
            fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
            lineNumber: 25,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "About This Hub",
        label: "Learn More",
        description: "Understand how we connect the community with vital resources.",
        link: "#",
        outline: true
    }
];
function CTASection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 px-4 bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-slate-900 mb-2",
                            children: "How We Support the Community"
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-700",
                            children: "Helping residents and organizations access essential resources."
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: stats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative bg-white border-2 border-slate-300 p-6 hover:border-slate-500 transition flex flex-col justify-between h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-12 h-12 bg-slate-200 rounded-full",
                                            children: stat.icon
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-slate-900",
                                            children: stat.title
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 mb-6 leading-relaxed",
                                    children: stat.description
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: stat.link,
                                        children: stat.outline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-white w-full",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
                                            lineNumber: 65,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "bg-slate-900 hover:bg-slate-800 text-white font-bold border-2 border-slate-900 w-full",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
                                            lineNumber: 69,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/community-resource-hub-yx/components/cta-section.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = CTASection;
var _c;
__turbopack_context__.k.register(_c, "CTASection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/community-resource-hub-yx/components/statistics-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatisticsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$react$2d$feather$2f$dist$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/react-feather/dist/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/community-resource-hub-yx/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
const stats = [
    {
        number: "100+",
        label: "Resources Listed",
        description: "Comprehensive directory of vetted community services",
        icon: "📋"
    },
    {
        number: "8",
        label: "Service Categories",
        description: "From food to employment assistance",
        icon: "🏷️"
    },
    {
        number: "50+",
        label: "Community Partners",
        description: "Organizations dedicated to serving residents",
        icon: "🤝"
    },
    {
        number: "24/7",
        label: "Support Available",
        description: "Crisis services and emergency assistance anytime",
        icon: "⏰"
    }
];
function StatisticsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-4 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-slate-900 mb-2",
                            children: "Our Community Impact"
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-700",
                            children: "Making a difference through accessible resources"
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: stats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative bg-white border-2 border-slate-300 overflow-hidden p-8 hover:border-slate-500 transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl mb-4",
                                        children: stat.icon
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl font-bold text-foreground",
                                                children: stat.number
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-slate-700 mt-1 uppercase tracking-wide border-b-2 border-slate-300 pb-2",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 leading-relaxed",
                                        children: stat.description
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: "Ready to find the resources you need?"
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/resources",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 font-semibold transition border-2 border-slate-900",
                                children: [
                                    "Explore All Resources",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$community$2d$resource$2d$hub$2d$yx$2f$node_modules$2f$react$2d$feather$2f$dist$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/community-resource-hub-yx/components/statistics-section.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = StatisticsSection;
var _c;
__turbopack_context__.k.register(_c, "StatisticsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=community-resource-hub-yx_e3debe69._.js.map