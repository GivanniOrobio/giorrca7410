(self.webpackChunk_splidejs_splide_site = self.webpackChunk_splidejs_splide_site || []).push([[9678], {
    4318: function(e, t, l) {
        "use strict";
        l.r(t),
        l.d(t, {
            Head: function() {
                return W
            },
            default: function() {
                return G
            }
        });
        var n = l(7294)
          , a = l(9686)
          , r = l(3571)
          , s = l(8288)
          , i = l.n(s)
          , o = l(6793)
          , c = l(6180);
        function d() {
            const {t: e} = (0,
            o.$)("about")
              , t = e("features", {
                returnObjects: !0
            })
              , l = e("desc", {
                returnObjects: !0
            });
            return n.createElement(r.Z, {
                heading: "   ",
                isNarrow: !0,
                className: (0,
                c.AK)(" ")
            }, l.map(((e,t)=>n.createElement("p", {
                key: t
            }, e))), n.createElement("ul", {
                className: "fake"
            }, t.map(((e,t)=>n.createElement("li", {
                className: "fake",
                key: t
            }, n.createElement("div", {
                className: "fake"
            }, n.createElement(i(), null)), n.createElement("div", {
                className: "fake"
            }, e))))))
        }
        var m = l(382)
          , u = l(9116)
          , h = l(1597);
        const p = [  {
            id: " ",
            i18n: " ",
            usePlaceholder: !0,
            urlHash: !0,
            asterisk: !0,
            desc: ()=>n.createElement("p", null, n.createElement(u.c, {
                i18nKey: " ",
                ns: " "
            }, n.createElement(h.Link, {
                to: " "
            }, " "),))
        }];
        const E = ["usePlaceholder", "pagination", "sliderProgress", "autoScroll", "triggerOnce", "video", "grid", "urlHash", "hasAddRemove"];
        function f() {
            const {t: e} = (0,
            o.$)(" ");
            return n.createElement(r.Z, {
                hasSidebar: !0,
                hasContentStyles: !0,
                isHome: !0
            }, n.createElement("h2", null, e(" ")), p.map((t=>{
                const {id: l, sourceId: a, i18n: r, asterisk: s} = t
                  , i = (0,
                c.hH)(l)
                  , d = `${i}-heading`;
                return n.createElement("section", {
                    key: l,
                    className: "fake"
                }, n.createElement("h3", {
                    id: d
                }, e(r || l), s ? " " : ""), function(e) {
                    const {t: t} = (0,
                    o.$)(" ");
                    if (e) {
                        if ("string" == typeof e)
                            return n.createElement("p", null, t(e));
                        if ("function" == typeof e)
                            return e()
                    }
                    return null
                }(t.desc), n.createElement(m.e, Object.assign({
                    id: i,
                    sourceId: a || i,
                    labelledby: d
                }, E.reduce(((e,l)=>(e[l] = t[l],
                e)), {}))))
            }
            )))
        }
        var g = l(5980)
          , v = l.n(g)
          , k = l(5279)
          , y = l.n(k)
          , q = l(8927)
          , x = l(182)
          , b = l(1534)
          , z = l(6595)
          , P = l.n(z);
        function N() {
            return n.createElement("aside", {
                className: "fake"
            }, n.createElement(P(), null), n.createElement("div", null, n.createElement(u.c, {
                i18nKey: " "
            }, n.createElement(h.Link, {
                to: " "
            }, " "), "  ")))
        }
        var S = l(7650);
        function w() {
            const e = (0,
            n.useRef)(null)
              , {t: t, i18n: l} = (0,
            o.$)("common");
            let a;
            (0,
            n.useEffect)((()=>{
                (0,
                x.Kt)(e.current.node, ".splide__slide").forEach(((e,t)=>{
                    setTimeout((()=>{
                        (0,
                        x.cn)(e, "is-triggered")
                    }
                    ), 50 * t)
                }
                ))
            }
            ));
            return n.createElement("header", {
                className: (0,
                c.AK)("header-module--header--iT-ym")
            }, n.createElement("div", {
                className: "header-module--header-content--W4XVT"
            }, n.createElement("div", {
                className: "header-module--header-content-overlay--GhbA0"
            }, n.createElement("div", null, n.createElement("h1", {
                className: "fake"
            }, n.createElement("span", {
                className: "visually-hidden"
            }, "Splide"), n.createElement(v(), null)), n.createElement("div", {
                className: (0,
                c.AK)("header-module--header-intro---eEkB", "en" !== l.language && "header-module--header-intro--multi--ojTxZ")
            }, t("intro", {
                returnObjects: !0
            }).map(((e,t)=>n.createElement("p", {
                key: t
            }, e.split("\n").map((e=>n.createElement("span", {
                key: e
            }, e))))))))), n.createElement(S.df, {
                as: "div",
                className: "header-module--header-content-slider--GHEXx",
                role: "presentation",
                ref: e,
                onChange: e=>{
                    if (a) {
                        const {Autoplay: t} = a.Components;
                        e ? t.play() : t.pause()
                    }
                }
            }, n.createElement(q.i, {
                id: "home-background-slider",
                sourceId: "home-background",
                theme: "home",
                delay: 2e3,
                onMount: e=>{
                    a = e
                }
                ,
                options: {
                    role: "group"
                }
            }))), n.createElement("div", {
                className: "fake"
            }, n.createElement(b.z, {
                isPrimary: !0,
                newTab: !0,
                href: " "
            }, t(" ")), n.createElement(b.z, {
                isPrimary: !0,
                to: " /"
            }, t(" "))), n.createElement(N, null), n.createElement("div", {
                className: "fake",
                "aria-hidden": "true",
                role: "presentation"
            }, n.createElement(y(), null)))
        }
        var L = l(8357)
          , T = l.n(L);
        function j() {
            const {t: e} = (0,
            o.$)(" ")
              , t = [{
                ...e("options", {
                    returnObjects: !0
                }),
                to: " "
            }, {
                ...e(" ", {
                    returnObjects: !0
                }),
                to: " "
            }, {
                ...e(" ", {
                    returnObjects: !0
                }),
                to: " "
            }, {
                ...e(" ", {
                    returnObjects: !0
                }),
                to: " "
            }];
            return n.createElement(r.Z, {
                heading: "   "
            }, n.createElement("div", {
                className: "fake"
            }, t.map(((e,t)=>n.createElement("section", {
                className: "fake",
                key: t
            }, n.createElement("div", {
                className: "fake"
            }, n.createElement("h3", null, e.heading), n.createElement("p", null, e.desc), n.createElement(h.Link, {
                to: e.to,
                className: "fake"
            }, n.createElement(T(), null), n.createElement("span", null, e.link))))))))
        }
        var D = l(6985)
          , O = l(5554)
          , H = l.n(O);
        function K() {
            const {t: e} = (0,
            o.$)("premium");
            return n.createElement(r.Z, {
                className: "premium-module--section--z7LOi",
                isWide: !0
            }, n.createElement("div", {
                className: "premium-module--wrapper--In9RN"
            }, n.createElement("div", {
                className: "premium-module--carousel--qZIEH"
            }, n.createElement(D.E, null)), n.createElement("div", {
                className: "fake"
            }, n.createElement("header", {
                className: "fake"
            }, n.createElement("p", null, " ")), n.createElement("div", {
                className: "fake"
            }, n.createElement("p", null, n.createElement(u.c, {
                ns: " ",
                i18nKey: " "
            },  n.createElement("span", null, " "))), n.createElement("p", null, e("mainDescription2"))), n.createElement("div", {
                className: "fake"
            }, n.createElement(h.Link, {
                to: " "
            },  n.createElement(H(), null))))))
        }
        var A = l(1632)
          , R = l(3657);
        function G() {
            return n.createElement(a.Z, null, n.createElement(w, null), n.createElement(K, null), n.createElement(f, null), n.createElement(d, null), n.createElement(j, null))
        }
        function W() {
            return n.createElement(n.Fragment, null, n.createElement(A.H, null), n.createElement("link", {
                rel: "preload",
                href: "/images/slides/full/01.webp",
                as: "image"
            }), n.createElement("link", {
                rel: "preload",
                href: R.Z,
                as: "font",
                type: "font/woff2",
                crossOrigin: "anonymous"
            }))
        }
    },
    6595: function(e, t, l) {
        var n = l(7294);
        function a(e) {
            return n.createElement("svg", e, [n.createElement("path", {
                d: "",
                fill: "#fff",
                key: 0
            }), n.createElement("g", {
                fill: "#17211d",
                key: 1
            }, [n.createElement("path", {
                d: " ",
                key: 0
            })  ])])
        }
        a.defaultProps = {
            width: "400",
            height: "400",
            version: "1.1",
            viewBox: "0 0 106 106"
        },
        e.exports = a,
        a.default = a
    },
    5279: function(e, t, l) {
        var n = l(7294);
        function a(e) {
            return n.createElement("svg", e, [n.createElement("div", {
                key: 0
            } )])
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
    5980: function(e, t, l) {
        var n = l(7294);
        function a(e) {
            return n.createElement("svg", e, [n.createElement("defs", {
                key: 0
            }, [n.createElement("linearGradient", {
                id: "logo-text-d",
                key: 0
            }, [n.createElement("stop", {
                stopColor: "#c0e900",
                offset: "0",
                key: 0
            }), n.createElement("stop", {
                stopColor: "#00c3f3",
                offset: "1",
                key: 1
            })]), n.createElement("linearGradient", {
                id: "logo-text-e",
                x1: "-17.6",
                x2: "-39",
                y1: "125",
                y2: "125",
                gradientTransform: "rotate(180 -5.58 76.6)",
                gradientUnits: "userSpaceOnUse",
                xlinkHref: "#logo-text-d",
                key: 1
            }) ]) , n.createElement("path", {
                d:  " ",
                fill: "#0c120f",
                key: 8
            })])
        }
        a.defaultProps = {
            width: "609",
            height: "212",
            version: "1.1",
            viewBox: "0 0 161 56.1"
        },
        e.exports = a,
        a.default = a
    }
}]);
//# sourceMappingURL=component---src-pages-index-js-9d939b1fec8da3574695.js.map
