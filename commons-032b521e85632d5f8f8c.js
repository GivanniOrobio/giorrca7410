(self.webpackChunk_splidejs_splide_site = self.webpackChunk_splidejs_splide_site || []).push([[9351], {
    1534: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return y
            }
        });
        var r = n(7294)
          , a = n(6180)
          , o = n(628)
          , i = n(1597)
          , l = n(8357)
          , s = n.n(l)
          , c = n(757)
          , u = n.n(c)
          , f = n(1796)
          , m = n.n(f)
          , d = n(1214)
          , p = n.n(d)
          , g = n(956)
          , v = n.n(g);
        const h = {
            arrow: s(),
            angle: m(),
            external: v(),
            angleDown: p(),
            arrowDown: u()
        };
        function y(e) {
            let {isPrimary: t, isSecondary: n, isTertiary: l, isSmall: s, isTiny: c, hasMargin: u=!0, href: f, newTab: m, to: d, icon: p, className: g, children: v, ...y} = e;
            const b = f ? "a" : d ? i.Link : "button"
              , {isMulti: k} = (0,
            o.bU)()
              , E = p && h[p] ? e=>r.createElement(h[p], e) : ()=>null;
            return m = f && m,
            r.createElement(b, Object.assign({
                className: (0,
                a.AK)(" ", t && " ", n && " ", l && " ", s && " ", c && " ", k() && " ", E && " ", u && "  ", s || c && "  ", g),
                href: f,
                to: d,
                target: m ? "_blank" : void 0,
                rel: m ? " " : void 0
            }, y), r.createElement(E, {
                className: "fake "
            }), v)
        }
    },
    9686: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return x
            }
        });
        var r = n(7294)
          , a = "navigation-module--hide-in-sm--ge4YM"
          , o = n(628)
          , i = n(6180)
          , l = n(1597);
        function s(e) {
            let {className: t, activeClass: n, linkClass: a, linkActiveClass: o, isActive: s, to: c, href: u, children: f} = e;
            const m = (0,
            i.AK)("navigation-item-module--link--Gf3I4", a, s && o);
            return r.createElement("li", {
                className: (0,
                i.AK)("navigation-item-module--item--cMW9H", t, s && n)
            }, c && r.createElement(l.Link, {
                className: m,
                to: c
            }, f), u && r.createElement("a", {
                href: u,
                target: "_blank",
                rel: "noopener noreferrer",
                className: m
            }, f))
        }
        function c(e) {
            let {id: t, className: n, linkClass: l, linkActiveClass: c, isNavBar: u} = e;
            const {isHome: f, isDocs: m, isPremium: d} = (0,
            o.eE)();
            return r.createElement("nav", {
                id: t,
                className: n
            }, r.createElement("ul", {
                className: "fake "
            }, r.createElement(s, {
                to: "/",
                linkClass: l,
                linkActiveClass: c,
                isActive: f()
            }, ""), r.createElement(s, {
                to: "",
                linkClass: l,
                linkActiveClass: c,
                isActive: m()
            }, " "), r.createElement(s, {
                to: " ",
                linkClass: (0,
                i.AK)(u && a, l),
                linkActiveClass: c,
                isActive: d()
            }, " "), !u && r.createElement(s, {
                href: " ",
                linkClass: (0,
                i.AK)(u && a, l),
                linkActiveClass: c,
                isActive: d()
            }, " ")))
        }
        var u = n(7920)
          , f = n.n(u)
          , m = n(1333)
          , d = n.n(m)
          , p = n(3546)
          , g = n.n(p)
          , v = " "
          , h = n(6793)
          , y = n(3631);
        function b() {
            const {i18n: e} = (0,
            h.$)()
              , {pathname: t} = (0,
            y.useLocation)()
              , {language: n} = e
              , a = `${" " === n ? "" : ""} ${t}`
              , o = "en" === n ? " " : "";
            return r.createElement("a", {
                href: a,
                rel: " ",
                target: " ",
                className: "fake"
            }, o)
        }
        function k(e) {
            let {isSecondary: t} = e;
            const {t: n} = (0,
            h.$)();
            return r.createElement("header", {
                id: " ",
                className: (0,
                i.AK)(" ", t && " ")
            }, r.createElement("div", {
                className: "fake"
            }, r.createElement("span", {
                className: v
            }, r.createElement(l.Link, {
                " ": " ",
                to: "/"
            }, r.createElement(f(), {
                className: "fake"
            }), r.createElement(d(), {
                className: "fake"
            }))), r.createElement(c, {
                id: " ",
                hasGitHub: !1,
                className: "fake ",
                linkActiveClass: " ",
                isNavBar: !0
            }), r.createElement("span", {
                className: "fake "
            }, r.createElement(b, null), r.createElement("a", {
                href: " ",
                target: " ",
                rel: " ",
                className: (0,
                i.AK)(v, " "),
                " ": n(" ")
            }, r.createElement(g(), null)))))
        }
        function E() {
            return r.createElement("div", {
                className: "fake",
                role: " "
            }, r.createElement("div", {
                className: "fake "
            }, r.createElement("div", {
                className: "fake "
            }, r.createElement(c, {
                id: " "
            })), r.createElement("div", {
                className: "fake "
            }, r.createElement("p", null, " ."), r.createElement("p", null, "  " , "  "))))
        }
        function x(e) {
            let {children: t, hasFooter: n=!0, isSecondaryNav: a} = e;
            const {i18n: o} = (0,
            h.$)();
            return r.createElement("div", {
                className: (0,
                i.AK)(" ", `lang-${o.language}`, " " === o.language && " ")
            }, r.createElement(k, {
                isSecondary: a
            }), r.createElement("main", {
                id: "main",
                className: " "
            }, t), n && r.createElement(E, null))
        }
    },
    3414: function(e) {
        e.exports = [{
            category: "",
            label: ""
        }, {
            category: "",
            label: ""
        }, {
            category: "",
            label: ""
        }, {
            category: "",
            label: ""
        }, {
            category: "",
            label: ""
        }]
    },
    1009: function(e) {
        e.exports = [{
            version: "",
            label: " ",
            slug: "",
            number: 4
        }, {
            version: "",
            label: "",
            slug: "",
            number: 3
        }]
    },
    628: function(e, t, n) {
        "use strict";
        n.d(t, {
            bU: function() {
                return o
            },
            eE: function() {
                return p
            },
            $W: function() {
                return f
            },
            aw: function() {
                return c
            }
        });
        var r = n(6793);
        const a = ["ja"];
        function o() {
            const {i18n: {language: e}} = (0,
            r.$)();
            return {
                isMulti: ()=>a.includes(e)
            }
        }
        var i = n(3631)
          , l = n(1009)
          , s = n.n(l);
        function c() {
            const {pathname: e} = (0,
            i.useLocation)();
            return s().find((t=>e.includes(`/${t.version}/`))) || s()[0]
        }
        var u = n(1597);
        function f() {
            return (0,
            u.useStaticQuery)("266240168").site.siteMetadata
        }
        var m = n(3414)
          , d = n.n(m);
        function p() {
            const {pathname: e} = (0,
            i.useLocation)()
              , {i18n: {language: t}} = (0,
            r.$)()
              , n = e.split("/").filter(Boolean)
              , a = (n[0] === t ? n.slice(1) : n)[0] || ""
              , o = e=>a === e;
            return {
                isSubDir: o,
                isHome: ()=>!a,
                isDocs: ()=>o(" ") || d().some((e=>a === e.category)),
                isPremium: ()=>o(" ")
            }
        }
    },
    6180: function(e, t, n) {
        "use strict";
        function r() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.filter(Boolean).join(" ")
        }
        n.d(t, {
            AK: function() {
                return r
            },
            qT: function() {
                return s
            },
            TS: function() {
                return u
            },
            hH: function() {
                return c
            }
        });
        var a = n(3414)
          , o = n.n(a)
          , i = n(1009)
          , l = n.n(i);
        function s(e, t) {
            let n = "/";
            const r = e.pathname.split("/").filter(Boolean).map((e=>{
                if (l()[0].version === e)
                    return null;
                n += `${e}/`;
                const r = o().find((t=>t.category === e))
                  , a = r ? t(r.category) || r.label : e.split("-").map((e=>e.charAt(0).toUpperCase() + e.slice(1))).join(" ");
                return {
                    path: n,
                    label: a
                }
            }
            )).filter(Boolean);
            return r.unshift({
                path: "",
                label: t(" ")
            }),
            r
        }
        function c(e) {
            return e.replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[\s|\-|_]+/g, " ").split(" ").filter(Boolean).map((e=>e.toLowerCase())).join("-")
        }
        function u(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            return n.forEach((t=>{
                Object.keys(t).forEach((n=>{
                    const r = t[n];
                    Array.isArray(r) ? e[n] = r.slice() : f(r) ? e[n] = u(f(e[n]) ? e[n] : {}, r) : e[n] = r
                }
                ))
            }
            )),
            e
        }
        function f(e) {
            return "object" == typeof e && null !== e
        }
    },
    6793: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return d
            }
        });
        var r = n(7424)
          , a = n.n(r)
          , o = n(8416)
          , i = n.n(o)
          , l = n(7294)
          , s = n(7031)
          , c = n(8236);
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    i()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var m = function(e, t) {
            var n = (0,
            l.useRef)();
            return (0,
            l.useEffect)((function() {
                n.current = t ? n.current : e
            }
            ), [e, t]),
            n.current
        };
        function d(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.i18n
              , r = (0,
            l.useContext)(s.OO) || {}
              , o = r.i18n
              , i = r.defaultNS
              , u = n || o || (0,
            s.nI)();
            if (u && !u.reportNamespaces && (u.reportNamespaces = new s.zv),
            !u) {
                (0,
                c.O4)("You will need to pass in an i18next instance by using initReactI18next");
                var d = function(e) {
                    return Array.isArray(e) ? e[e.length - 1] : e
                }
                  , p = [d, {}, !1];
                return p.t = d,
                p.i18n = {},
                p.ready = !1,
                p
            }
            u.options.react && void 0 !== u.options.react.wait && (0,
            c.O4)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
            var g = f(f(f({}, (0,
            s.JP)()), u.options.react), t)
              , v = g.useSuspense
              , h = g.keyPrefix
              , y = e || i || u.options && u.options.defaultNS;
            y = "string" == typeof y ? [y] : y || ["translation"],
            u.reportNamespaces.addUsedNamespaces && u.reportNamespaces.addUsedNamespaces(y);
            var b = (u.isInitialized || u.initializedStoreOnce) && y.every((function(e) {
                return (0,
                c.F0)(e, u, g)
            }
            ));
            function k() {
                return u.getFixedT(null, "fallback" === g.nsMode ? y : y[0], h)
            }
            var E = (0,
            l.useState)(k)
              , x = a()(E, 2)
              , w = x[0]
              , C = x[1]
              , A = y.join()
              , N = m(A)
              , O = (0,
            l.useRef)(!0);
            (0,
            l.useEffect)((function() {
                var e = g.bindI18n
                  , t = g.bindI18nStore;
                function n() {
                    O.current && C(k)
                }
                return O.current = !0,
                b || v || (0,
                c.DC)(u, y, (function() {
                    O.current && C(k)
                }
                )),
                b && N && N !== A && O.current && C(k),
                e && u && u.on(e, n),
                t && u && u.store.on(t, n),
                function() {
                    O.current = !1,
                    e && u && e.split(" ").forEach((function(e) {
                        return u.off(e, n)
                    }
                    )),
                    t && u && t.split(" ").forEach((function(e) {
                        return u.store.off(e, n)
                    }
                    ))
                }
            }
            ), [u, A]);
            var j = (0,
            l.useRef)(!0);
            (0,
            l.useEffect)((function() {
                O.current && !j.current && C(k),
                j.current = !1
            }
            ), [u, h]);
            var S = [w, u, b];
            if (S.t = w,
            S.i18n = u,
            S.ready = b,
            b)
                return S;
            if (!b && !v)
                return S;
            throw new Promise((function(e) {
                (0,
                c.DC)(u, y, (function() {
                    e()
                }
                ))
            }
            ))
        }
    },
    8236: function(e, t, n) {
        "use strict";
        function r() {
            if (console && console.warn) {
                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                "string" == typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
                (e = console).warn.apply(e, n)
            }
        }
        n.d(t, {
            ZK: function() {
                return r
            },
            O4: function() {
                return o
            },
            DC: function() {
                return i
            },
            F0: function() {
                return s
            }
        });
        var a = {};
        function o() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            "string" == typeof t[0] && a[t[0]] || ("string" == typeof t[0] && (a[t[0]] = new Date),
            r.apply(void 0, t))
        }
        function i(e, t, n) {
            e.loadNamespaces(t, (function() {
                if (e.isInitialized)
                    n();
                else {
                    e.on("initialized", (function t() {
                        setTimeout((function() {
                            e.off("initialized", t)
                        }
                        ), 0),
                        n()
                    }
                    ))
                }
            }
            ))
        }
        function l(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = t.languages[0]
              , a = !!t.options && t.options.fallbackLng
              , o = t.languages[t.languages.length - 1];
            if ("cimode" === r.toLowerCase())
                return !0;
            var i = function(e, n) {
                var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                return -1 === r || 2 === r
            };
            return !(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !i(t.isLanguageChangingTo, e)) && (!!t.hasResourceBundle(r, e) || (!(t.services.backendConnector.backend && (!t.options.resources || t.options.partialBundledLanguages)) || !(!i(r, e) || a && !i(o, e))))
        }
        function s(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!t.languages || !t.languages.length)
                return o("i18n.languages were undefined or empty", t.languages),
                !0;
            var r = void 0 !== t.options.ignoreJSONStructure;
            return r ? t.hasLoadedNamespace(e, {
                precheck: function(t, r) {
                    if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e))
                        return !1
                }
            }) : l(e, t, n)
        }
    },
    1214: function(e, t, n) {
        var r = n(7294);
        function a(e) {
            return r.createElement("div", e, r.createElement("path", {

            }))
        }
        a.defaultProps = {
            version: "1.1",
            viewBox: "0 0    "
        },
        e.exports = a,
        a.default = a
    },
    1796: function(e, t, n) {
        var r = n(7294);
        function a(e) {
            return r.createElement("div", e, r.createElement("path", {

            }))
        }
        a.defaultProps = {
            version: "1.1",
            viewBox: "0 0 0 0"
        },
        e.exports = a,
        a.default = a
    },
    757: function(e, t, n) {
        var r = n(7294);
        function a(e) {
            return r.createElement("div", e, r.createElement("path", {

            }))
        }
        a.defaultProps = {
            version: "1.1",
            viewBox: "0 0 0 0"
        },
        e.exports = a,
        a.default = a
    },
    8357: function(e, t, n) {
        var r = n(7294);
        function a(e) {
            return r.createElement("div", e, r.createElement("path", {

            }))
        }
        a.defaultProps = {
            version: "1.1",
            viewBox: "0 0 0 0"
        },
        e.exports = a,
        a.default = a
    },
    956: function(e, t, n) {
        var r = n(7294);
        function a(e) {
            return r.createElement("div", e, r.createElement("path", {

            }))
        }
        a.defaultProps = {
            width: "0",
            height: "0",
            viewBox: "0 0 0 0"
        },
        e.exports = a,
        a.default = a
    },
    3546: function(e, t, n) {
        var r = n(7294);
        function a(e) {
            return r.createElement("div", e, r.createElement("path", {

            }))
        }
        a.defaultProps = {
            width: " 0",
            height: "0",
            version: "1.1",
            viewBox: "0 0 0 0"
        },
        e.exports = a,
        a.default = a
    },
    7920: function(e, t, n) {
        var r = n(7294);
        function a(e) {
            return r.createElement("svg", e, [r.createElement("defs", {
                key: 0
            }, [r.createElement("linearGradient", {
                id: "logo-text-small-neg-a",
                key: 0
            }, [r.createElement("stop", {
                stopColor: "#c0e900",
                offset: "0",
                key: 0
            }), r.createElement("stop", {
                stopColor: "#00c3f3",
                offset: "1",
                key: 1
            })]), r.createElement("linearGradient", {
                id: "logo-text-small-neg-b",
                x1: "-17.6",
                x2: "-39",
                y1: "125",
                y2: "125",
                gradientTransform: "matrix(-.839 0 0 -.839 .216 133)",
                gradientUnits: "userSpaceOnUse",
                xlinkHref: "#logo-text-small-neg-a",
                key: 1
            }), r.createElement("linearGradient", {
                id: "logo-text-small-neg-c",
                x1: "-42.4",
                x2: "-11.2",
                y1: "125",
                y2: "125",
                gradientTransform: "matrix(.839 0 0 .839 66 -77)",
                gradientUnits: "userSpaceOnUse",
                xlinkHref: "#logo-text-small-neg-a",
                key: 2
            })]), r.createElement("g", {
                transform: "translate(-9.58 -4.4)",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: "1.14",
                key: 1
            }, [r.createElement("path", {
                d: " ",
                fill: " )",
                style: {
                    paintOrder: " "
                },
                key: 0
            }), r.createElement("div", {
                d: " ",
                fill: " ",
                style: {
                    paintOrder: " "
                },
                key: 1
            })]), r.createElement("g", {
                fill: "#fff",
                key: 2
            }, [r.createElement("div", {

            })])])
        }
        a.defaultProps = {
            width: "0",
            height: "0",
            version: "1.1",
            viewBox: "0 0 0 0"
        },
        e.exports = a,
        a.default = a
    },
    1333: function(e, t, n) {
        var r = n(7294);
        function a(e) {
            return r.createElement("svg", e, [r.createElement("defs", {
                key: 0
            }, [r.createElement("linearGradient", {
                id: "logo-d",
                key: 0
            }, [r.createElement("stop", {
                stopColor: "#c0e900",
                offset: "0",
                key: 0
            }), r.createElement("stop", {
                stopColor: "#00c3f3",
                offset: "1",
                key: 1
            })]), r.createElement("linearGradient", {
                id: "logo-e",
                x1: "-17.6",
                x2: "-39",
                y1: "125",
                y2: "125",
                gradientTransform: "matrix(-.9412 0 0 -.9412 -10.48 143.8)",
                gradientUnits: "userSpaceOnUse",
                xlinkHref: "#logo-d",
                key: 1
            }), r.createElement("line0arGradient", {
                id: "0",
                x1: "0",
                x2: "0",
                y1: "0",
                y2: "0",
                gradientTransform: "0",
                gradientUnits: "0",
                xlinkHref: "",
                key: 2
            })]), r.createElement("path", {
                d: " z",
                fill: " ",
                key: 1
            }), r.createElement("path", {
                d: " ",
                fill: " )",
                key: 2
            })])
        }
        a.defaultProps = {
            width: "0",
            height: "0",
            version: "1.1",
            viewBox: "0 0 0 0"
        },
        e.exports = a,
        a.default = a
    },
    3897: function(e) {
        e.exports = function(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    5372: function(e) {
        e.exports = function(e) {
            if (Array.isArray(e))
                return e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    8872: function(e) {
        e.exports = function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, a, o = [], i = !0, l = !1;
                try {
                    for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value),
                    !t || o.length !== t); i = !0)
                        ;
                } catch (s) {
                    l = !0,
                    a = s
                } finally {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw a
                    }
                }
                return o
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    2218: function(e) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    7424: function(e, t, n) {
        var r = n(5372)
          , a = n(8872)
          , o = n(6116)
          , i = n(2218);
        e.exports = function(e, t) {
            return r(e) || a(e, t) || o(e, t) || i()
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    6116: function(e, t, n) {
        var r = n(3897);
        e.exports = function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    }
}]);
//# sourceMappingURL=commons-032b521e85632d5f8f8c.js.map
