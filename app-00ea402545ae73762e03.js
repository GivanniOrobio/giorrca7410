(self.webpackChunk_splidejs_splide_site = self.webpackChunk_splidejs_splide_site || []).push([[2143], {
    702: function(e, t) {
        "use strict";
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
          , o = function(e) {
            var t = e.location
              , n = t.search
              , o = t.hash
              , r = t.href
              , i = t.origin
              , a = t.protocol
              , c = t.host
              , l = t.hostname
              , u = t.port
              , p = e.location.pathname;
            !p && r && s && (p = new URL(r).pathname);
            return {
                pathname: encodeURI(decodeURI(p)),
                search: n,
                hash: o,
                href: r,
                origin: i,
                protocol: a,
                host: c,
                hostname: l,
                port: u,
                state: e.history.state,
                key: e.history.state && e.history.state.key || "initial"
            }
        }
          , r = function(e, t) {
            var r = []
              , i = o(e)
              , s = !1
              , a = function() {};
            return {
                get location() {
                    return i
                },
                get transitioning() {
                    return s
                },
                _onTransitionComplete: function() {
                    s = !1,
                    a()
                },
                listen: function(t) {
                    r.push(t);
                    var n = function() {
                        i = o(e),
                        t({
                            location: i,
                            action: "POP"
                        })
                    };
                    return e.addEventListener("popstate", n),
                    function() {
                        e.removeEventListener("popstate", n),
                        r = r.filter((function(e) {
                            return e !== t
                        }
                        ))
                    }
                },
                navigate: function(t) {
                    var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , l = c.state
                      , u = c.replace
                      , p = void 0 !== u && u;
                    if ("number" == typeof t)
                        e.history.go(t);
                    else {
                        l = n({}, l, {
                            key: Date.now() + ""
                        });
                        try {
                            s || p ? e.history.replaceState(l, null, t) : e.history.pushState(l, null, t)
                        } catch (h) {
                            e.location[p ? "replace" : "assign"](t)
                        }
                    }
                    i = o(e),
                    s = !0;
                    var d = new Promise((function(e) {
                        return a = e
                    }
                    ));
                    return r.forEach((function(e) {
                        return e({
                            location: i,
                            action: "PUSH"
                        })
                    }
                    )),
                    d
                }
            }
        }
          , i = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/"
              , t = e.indexOf("?")
              , n = {
                pathname: t > -1 ? e.substr(0, t) : e,
                search: t > -1 ? e.substr(t) : ""
            }
              , o = 0
              , r = [n]
              , i = [null];
            return {
                get location() {
                    return r[o]
                },
                addEventListener: function(e, t) {},
                removeEventListener: function(e, t) {},
                history: {
                    get entries() {
                        return r
                    },
                    get index() {
                        return o
                    },
                    get state() {
                        return i[o]
                    },
                    pushState: function(e, t, n) {
                        var s = n.split("?")
                          , a = s[0]
                          , c = s[1]
                          , l = void 0 === c ? "" : c;
                        o++,
                        r.push({
                            pathname: a,
                            search: l.length ? "?" + l : l
                        }),
                        i.push(e)
                    },
                    replaceState: function(e, t, n) {
                        var s = n.split("?")
                          , a = s[0]
                          , c = s[1]
                          , l = void 0 === c ? "" : c;
                        r[o] = {
                            pathname: a,
                            search: l
                        },
                        i[o] = e
                    },
                    go: function(e) {
                        var t = o + e;
                        t < 0 || t > i.length - 1 || (o = t)
                    }
                }
            }
        }
          , s = !("undefined" == typeof window || !window.document || !window.document.createElement)
          , a = r(s ? window : i())
          , c = a.navigate;
        t.V5 = a
    },
    1122: function(e, t, n) {
        "use strict";
        t.ei = void 0;
        var o, r = n(1143), i = (o = r) && o.__esModule ? o : {
            default: o
        };
        var s = function(e, t) {
            return e.substr(0, t.length) === t
        }
          , a = function(e, t) {
            for (var n = void 0, o = void 0, r = t.split("?")[0], s = h(r), a = "" === s[0], l = d(e), p = 0, f = l.length; p < f; p++) {
                var g = !1
                  , v = l[p].route;
                if (v.default)
                    o = {
                        route: v,
                        params: {},
                        uri: t
                    };
                else {
                    for (var y = h(v.path), b = {}, w = Math.max(s.length, y.length), x = 0; x < w; x++) {
                        var k = y[x]
                          , P = s[x];
                        if (u(k)) {
                            b[k.slice(1) || "*"] = s.slice(x).map(decodeURIComponent).join("/");
                            break
                        }
                        if (void 0 === P) {
                            g = !0;
                            break
                        }
                        var S = c.exec(k);
                        if (S && !a) {
                            -1 === m.indexOf(S[1]) || (0,
                            i.default)(!1);
                            var O = decodeURIComponent(P);
                            b[S[1]] = O
                        } else if (k !== P) {
                            g = !0;
                            break
                        }
                    }
                    if (!g) {
                        n = {
                            route: v,
                            params: b,
                            uri: "/" + s.slice(0, x).join("/")
                        };
                        break
                    }
                }
            }
            return n || o || null
        }
          , c = /^:(.+)/
          , l = function(e) {
            return c.test(e)
        }
          , u = function(e) {
            return e && "*" === e[0]
        }
          , p = function(e, t) {
            return {
                route: e,
                score: e.default ? 0 : h(e.path).reduce((function(e, t) {
                    return e += 4,
                    !function(e) {
                        return "" === e
                    }(t) ? l(t) ? e += 2 : u(t) ? e -= 5 : e += 3 : e += 1,
                    e
                }
                ), 0),
                index: t
            }
        }
          , d = function(e) {
            return e.map(p).sort((function(e, t) {
                return e.score < t.score ? 1 : e.score > t.score ? -1 : e.index - t.index
            }
            ))
        }
          , h = function(e) {
            return e.replace(/(^\/+|\/+$)/g, "").split("/")
        }
          , f = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                n[o - 1] = arguments[o];
            return e + ((n = n.filter((function(e) {
                return e && e.length > 0
            }
            ))) && n.length > 0 ? "?" + n.join("&") : "")
        }
          , m = ["uri", "path"];
        t.ei = a
    },
    3150: function(e) {
        "use strict";
        var t = /[|\\{}()[\]^$+*?.]/g;
        e.exports = function(e) {
            if ("string" != typeof e)
                throw new TypeError("Expected a string");
            return e.replace(t, "\\$&")
        }
    },
    4506: function(e, t) {
        "use strict";
        t.H = void 0;
        t.H = (e,t="legacy")=>{
            const n = e.endsWith(".html")
              , o = e.endsWith(".xml")
              , r = e.endsWith(".pdf");
            return "/" === e ? e : ((n || o || r) && (t = "never"),
            "always" === t ? e.endsWith("/") ? e : `${e}/` : "never" === t && e.endsWith("/") ? e.slice(0, -1) : e)
        }
    },
    9679: function(e, t, n) {
        "use strict";
        t.p2 = t.$C = void 0;
        var o = n(1432);
        t.$C = o.ScrollHandler;
        var r = n(4855);
        t.p2 = r.useScrollRestoration
    },
    1432: function(e, t, n) {
        "use strict";
        var o = n(4836);
        t.__esModule = !0,
        t.ScrollHandler = t.ScrollContext = void 0;
        var r = o(n(6115))
          , i = o(n(7867))
          , s = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = l(t);
            if (n && n.has(e))
                return n.get(e);
            var o = {}
              , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                    var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                    s && (s.get || s.set) ? Object.defineProperty(o, i, s) : o[i] = e[i]
                }
            o.default = e,
            n && n.set(e, o);
            return o
        }(n(7294))
          , a = o(n(5697))
          , c = n(1142);
        function l(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (l = function(e) {
                return e ? n : t
            }
            )(e)
        }
        var u = s.createContext(new c.SessionStorage);
        t.ScrollContext = u,
        u.displayName = "GatsbyScrollContext";
        var p = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (t = e.call.apply(e, [this].concat(o)) || this)._stateStorage = new c.SessionStorage,
                t._isTicking = !1,
                t._latestKnownScrollY = 0,
                t.scrollListener = function() {
                    t._latestKnownScrollY = window.scrollY,
                    t._isTicking || (t._isTicking = !0,
                    requestAnimationFrame(t._saveScroll.bind((0,
                    r.default)(t))))
                }
                ,
                t.windowScroll = function(e, n) {
                    t.shouldUpdateScroll(n, t.props) && window.scrollTo(0, e)
                }
                ,
                t.scrollToHash = function(e, n) {
                    var o = document.getElementById(e.substring(1));
                    o && t.shouldUpdateScroll(n, t.props) && o.scrollIntoView()
                }
                ,
                t.shouldUpdateScroll = function(e, n) {
                    var o = t.props.shouldUpdateScroll;
                    return !o || o.call((0,
                    r.default)(t), e, n)
                }
                ,
                t
            }
            (0,
            i.default)(t, e);
            var n = t.prototype;
            return n._saveScroll = function() {
                var e = this.props.location.key || null;
                e && this._stateStorage.save(this.props.location, e, this._latestKnownScrollY),
                this._isTicking = !1
            }
            ,
            n.componentDidMount = function() {
                var e;
                window.addEventListener("scroll", this.scrollListener);
                var t = this.props.location
                  , n = t.key
                  , o = t.hash;
                n && (e = this._stateStorage.read(this.props.location, n)),
                e ? this.windowScroll(e, void 0) : o && this.scrollToHash(decodeURI(o), void 0)
            }
            ,
            n.componentWillUnmount = function() {
                window.removeEventListener("scroll", this.scrollListener)
            }
            ,
            n.componentDidUpdate = function(e) {
                var t, n = this.props.location, o = n.hash, r = n.key;
                r && (t = this._stateStorage.read(this.props.location, r)),
                o ? this.scrollToHash(decodeURI(o), e) : this.windowScroll(t, e)
            }
            ,
            n.render = function() {
                return s.createElement(u.Provider, {
                    value: this._stateStorage
                }, this.props.children)
            }
            ,
            t
        }(s.Component);
        t.ScrollHandler = p,
        p.propTypes = {
            shouldUpdateScroll: a.default.func,
            children: a.default.element.isRequired,
            location: a.default.object.isRequired
        }
    },
    1142: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t.SessionStorage = void 0;
        var n = "___GATSBY_REACT_ROUTER_SCROLL"
          , o = function() {
            function e() {}
            var t = e.prototype;
            return t.read = function(e, t) {
                var o = this.getStateKey(e, t);
                try {
                    var r = window.sessionStorage.getItem(o);
                    return r ? JSON.parse(r) : 0
                } catch (i) {
                    return window && window[n] && window[n][o] ? window[n][o] : 0
                }
            }
            ,
            t.save = function(e, t, o) {
                var r = this.getStateKey(e, t)
                  , i = JSON.stringify(o);
                try {
                    window.sessionStorage.setItem(r, i)
                } catch (s) {
                    window && window[n] || (window[n] = {}),
                    window[n][r] = JSON.parse(i)
                }
            }
            ,
            t.getStateKey = function(e, t) {
                var n = "@@scroll|" + e.pathname;
                return null == t ? n : n + "|" + t
            }
            ,
            e
        }();
        t.SessionStorage = o
    },
    4855: function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.useScrollRestoration = function(e) {
            var t = (0,
            i.useLocation)()
              , n = (0,
            r.useContext)(o.ScrollContext)
              , s = (0,
            r.useRef)(null);
            return (0,
            r.useLayoutEffect)((function() {
                if (s.current) {
                    var o = n.read(t, e);
                    s.current.scrollTo(0, o || 0)
                }
            }
            ), [t.key]),
            {
                ref: s,
                onScroll: function() {
                    s.current && n.save(t, e, s.current.scrollTop)
                }
            }
        }
        ;
        var o = n(1432)
          , r = n(7294)
          , i = n(3631)
    },
    4094: function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.onInitialClientRender = void 0;
        n(3521),
        n(2731);
        t.onInitialClientRender = ()=>{}
    },
    7730: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t.getForwards = function(e) {
            return null == e ? void 0 : e.flatMap((e=>(null == e ? void 0 : e.forward) || []))
        }
    },
    2731: function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.injectPartytownSnippet = function(e) {
            if (!e.length)
                return;
            const t = document.querySelector("script[data-partytown]")
              , n = document.querySelector('iframe[src*="~partytown/partytown-sandbox-sw"]');
            t && t.remove();
            n && n.remove();
            const i = (0,
            r.getForwards)(e)
              , s = document.createElement("script");
            s.dataset.partytown = "",
            s.innerHTML = (0,
            o.partytownSnippet)({
                forward: i
            }),
            document.head.appendChild(s)
        }
        ;
        var o = n(2911)
          , r = n(7730)
    },
    5418: function(e, t, n) {
        t.components = {
            "component---src-pages-404-js": ()=>Promise.all([n.e(532), n.e(9351), n.e(8883)]).then(n.bind(n, 3176)),
            "component---src-pages-documents-js": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(9280)]).then(n.bind(n, 5635)),
            "component---src-pages-index-js": ()=>Promise.all([n.e(532), n.e(3737), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(2082), n.e(9678)]).then(n.bind(n, 4318)),
            "component---src-pages-premium-js": ()=>Promise.all([n.e(532), n.e(3737), n.e(9351), n.e(6287), n.e(5187), n.e(2082), n.e(4417)]).then(n.bind(n, 2313)),
            "component---src-pages-release-notes-js": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(2028)]).then(n.bind(n, 870)),
            "component---src-pages-v-3-archives-js": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(7772)]).then(n.bind(n, 3849)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-arrows-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(3077)]).then(n.bind(n, 7622)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-autoplay-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(8324)]).then(n.bind(n, 9706)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-controller-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(1934)]).then(n.bind(n, 8301)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-direction-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(5626)]).then(n.bind(n, 3775)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-drag-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(3187)]).then(n.bind(n, 940)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-elements-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(3523)]).then(n.bind(n, 3960)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-layout-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(8709)]).then(n.bind(n, 737)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-move-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(9475)]).then(n.bind(n, 4354)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-pagination-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(4122)]).then(n.bind(n, 4875)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-scroll-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(1226)]).then(n.bind(n, 9044)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-slide-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(8048)]).then(n.bind(n, 5170)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-slides-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(3244)]).then(n.bind(n, 631)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-extensions-auto-scroll-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(3712)]).then(n.bind(n, 5065)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-extensions-grid-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(224)]).then(n.bind(n, 6947)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-extensions-intersection-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(7621)]).then(n.bind(n, 3249)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-extensions-url-hash-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(7730)]).then(n.bind(n, 7623)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-extensions-video-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(4593)]).then(n.bind(n, 8544)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-accessibility-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(5152)]).then(n.bind(n, 9751)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-apis-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(5103)]).then(n.bind(n, 5141)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-arrows-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(6972)]).then(n.bind(n, 8714)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-auto-width-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(3912)]).then(n.bind(n, 3182)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-autoplay-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(8645)]).then(n.bind(n, 606)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-events-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(4044)]).then(n.bind(n, 9638)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-extension-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(2368)]).then(n.bind(n, 6478)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-getting-started-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(4366)]).then(n.bind(n, 454)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-i-18-n-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(8265)]).then(n.bind(n, 3747)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-options-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(674)]).then(n.bind(n, 5559)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-pagination-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(9429)]).then(n.bind(n, 1588)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-structure-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(2558)]).then(n.bind(n, 5456)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-themes-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(8673)]).then(n.bind(n, 4014)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-transition-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(6529)]).then(n.bind(n, 9806)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-version-3-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(1618)]).then(n.bind(n, 2987)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-integration-react-splide-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(9696)]).then(n.bind(n, 6757)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-integration-svelte-splide-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(621)]).then(n.bind(n, 450)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-integration-vue-splide-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(9650)]).then(n.bind(n, 4055)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-tutorials-autoplay-toggle-button-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(79)]).then(n.bind(n, 5563)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-tutorials-gallery-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(8154)]).then(n.bind(n, 1561)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-tutorials-image-slider-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(7563)]).then(n.bind(n, 2642)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-tutorials-slider-progress-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(9486)]).then(n.bind(n, 8219)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-tutorials-thumbnail-slider-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(5616)]).then(n.bind(n, 3695)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-arrows-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(676)]).then(n.bind(n, 4233)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-autoplay-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(7847)]).then(n.bind(n, 3261)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-controller-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(3100)]).then(n.bind(n, 3246)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-direction-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(1430)]).then(n.bind(n, 9632)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-drag-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(614)]).then(n.bind(n, 8255)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-elements-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(6104)]).then(n.bind(n, 1513)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-layout-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(5813)]).then(n.bind(n, 8125)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-move-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(3508)]).then(n.bind(n, 8256)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-pagination-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(8032)]).then(n.bind(n, 7655)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-scroll-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(5197)]).then(n.bind(n, 2900)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-slide-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(8951)]).then(n.bind(n, 8024)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-slides-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(8555)]).then(n.bind(n, 5043)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-extensions-auto-scroll-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(5113)]).then(n.bind(n, 1651)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-extensions-grid-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(6075)]).then(n.bind(n, 5470)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-extensions-intersection-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(9839)]).then(n.bind(n, 1801)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-extensions-url-hash-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(7123)]).then(n.bind(n, 5186)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-extensions-video-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(2144)]).then(n.bind(n, 1161)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-accessibility-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(4542)]).then(n.bind(n, 2975)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-apis-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(8562)]).then(n.bind(n, 2282)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-arrows-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(6512)]).then(n.bind(n, 7652)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-auto-width-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(7486)]).then(n.bind(n, 6236)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-autoplay-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(2492)]).then(n.bind(n, 661)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-events-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(6115)]).then(n.bind(n, 1572)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-extension-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(3352)]).then(n.bind(n, 9651)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-getting-started-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(1490)]).then(n.bind(n, 2641)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-i-18-n-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(6930)]).then(n.bind(n, 1482)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-options-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(3177)]).then(n.bind(n, 4936)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-overflow-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(2991)]).then(n.bind(n, 8958)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-pagination-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(3374)]).then(n.bind(n, 8944)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-structure-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(2239)]).then(n.bind(n, 1453)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-themes-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(4268)]).then(n.bind(n, 2418)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-transition-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(2300)]).then(n.bind(n, 1695)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-version-4-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(1680)]).then(n.bind(n, 5299)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-integration-react-splide-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(7135)]).then(n.bind(n, 89)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-integration-svelte-splide-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(6822)]).then(n.bind(n, 8524)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-integration-vue-splide-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(1779)]).then(n.bind(n, 9505)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-tutorials-carousel-progress-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(9158)]).then(n.bind(n, 1885)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-tutorials-gallery-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(5099)]).then(n.bind(n, 7592)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-tutorials-image-carousel-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(1005)]).then(n.bind(n, 3949)),
            "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-tutorials-thumbnail-carousel-index-mdx": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(5187), n.e(5217), n.e(3533), n.e(9467)]).then(n.bind(n, 8376)),
            "component---src-templates-document-list-js": ()=>Promise.all([n.e(532), n.e(9351), n.e(6287), n.e(2920)]).then(n.bind(n, 1204))
        }
    },
    4741: function(e, t, n) {
        e.exports = [{
            plugin: n(6910),
            options: {
                plugins: [],
                languageName: !0,
                copy: {
                    html: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n <path d="m10.3 1.26c-1.11 0-2.09 0.593-2.64 1.47h-1.41c-1.77 0-3.23 1.46-3.23 3.23v13.5c0 1.77 1.46 3.23 3.23 3.23h11.5c1.77 0 3.23-1.46 3.23-3.23v-13.5c0-1.77-1.46-3.23-3.23-3.23h-1.41c-0.552-0.882-1.53-1.47-2.64-1.47zm0 2.24h3.44c0.501 0 0.869 0.37 0.869 0.871s-0.368 0.869-0.869 0.869h-3.44c-0.501 0-0.869-0.368-0.869-0.869s0.368-0.871 0.869-0.871zm-4.05 1.38h0.98c0.249 1.46 1.54 2.6 3.07 2.6h3.44c1.53 0 2.82-1.13 3.07-2.6h0.982c0.616 0 1.08 0.462 1.08 1.08v13.5c0 0.616-0.462 1.08-1.08 1.08h-11.5c-0.616 0-1.08-0.462-1.08-1.08v-13.5c0-0.616 0.462-1.08 1.08-1.08zm2.59 5.61a1 1 0 0 0-1 1 1 1 0 0 0 1 1h6.35a1 1 0 0 0 1-1 1 1 0 0 0-1-1zm0 4.04a1 1 0 0 0-1 1 1 1 0 0 0 1 1h6.35a1 1 0 0 0 1-1 1 1 0 0 0-1-1z" />\n</svg>\n',
                    activeHtml: '<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">\n <path fill="currentColor" d="m33.4 5.54-17.6 17.6-9.09-9.09-5.66 5.66 14.8 14.8 5.66-5.66-0.0156-0.0156 17.6-17.6-5.66-5.66z"/>\n</svg>\n'
                }
            }
        }, {
            plugin: n(2154),
            options: {
                plugins: [],
                maxWidth: 1e3,
                linkImagesToOriginal: !1
            }
        }, {
            plugin: n(9650),
            options: {
                plugins: [],
                icon: '<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="m12.4 0.842-4.44 38.3h6l4.44-38.3z"/><path d="m26 0.842-4.44 38.3h6l4.44-38.3z"/><path d="m4.23 23.8-0.695 6h30.7l0.695-6z"/><path d="m5.8 10.2-0.695 6h30.7l0.695-6z"/></svg>',
                offsetY: "50"
            }
        }, {
            plugin: n(436),
            options: {
                plugins: []
            }
        }, {
            plugin: n(9608),
            options: {
                plugins: [],
                name: "Splide",
                short_name: "Splide",
                description: " ",
                start_url: "/",
                background_color: "#0c120f",
                theme_color: "#b4e900",
                display: "standalone",
                legacy: !1,
                icon: "src/assets/images/site/favicon-192x192.png",
                icons: [{
                    src: "src/assets/images/site/android-chrome-192x192.png",
                    sizes: "192x192",
                    type: "image/png"
                }, {
                    src: "src/assets/images/site/android-chrome-512x512.png",
                    sizes: "512x512",
                    type: "image/png"
                }],
                theme_color_in_head: !0,
                cache_busting_mode: "query",
                crossOrigin: "anonymous",
                include_favicon: !0,
                cacheDigest: "1246b8c7f3ab2be5f7778ca9233466a6"
            }
        }, {
            plugin: n(538),
            options: {
                plugins: [],
                trackingId: "UA-146338426-1",
                head: !1,
                anonymize: !1,
                respectDNT: !1,
                exclude: [],
                pageTransitionDelay: 0,
                enableWebVitalsTracking: !1
            }
        }, {
            plugin: n(5663),
            options: {
                plugins: []
            }
        }, {
            plugin: n(4094),
            options: {
                plugins: []
            }
        }]
    },
    3092: function(e, t, n) {
        const o = n(4741)
          , {getResourceURLsForPathname: r, loadPage: i, loadPageSync: s} = n(1975).jN;
        t.h = function(e, t, n, a) {
            void 0 === t && (t = {});
            let c = o.map((n=>{
                if (!n.plugin[e])
                    return;
                t.getResourceURLsForPathname = r,
                t.loadPage = i,
                t.loadPageSync = s;
                const o = n.plugin[e](t, n.options);
                return o && a && (t = a({
                    args: t,
                    result: o,
                    plugin: n
                })),
                o
            }
            ));
            return c = c.filter((e=>void 0 !== e)),
            c.length > 0 ? c : n ? [n] : []
        }
        ,
        t.I = (e,t,n)=>o.reduce(((n,o)=>o.plugin[e] ? n.then((()=>o.plugin[e](t, o.options))) : n), Promise.resolve())
    },
    8299: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var o = function(e) {
            return e = e || Object.create(null),
            {
                on: function(t, n) {
                    (e[t] || (e[t] = [])).push(n)
                },
                off: function(t, n) {
                    e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1)
                },
                emit: function(t, n) {
                    (e[t] || []).slice().map((function(e) {
                        e(n)
                    }
                    )),
                    (e["*"] || []).slice().map((function(e) {
                        e(t, n)
                    }
                    ))
                }
            }
        }()
    },
    7802: function(e, t, n) {
        "use strict";
        n.d(t, {
            UD: function() {
                return d
            },
            Cj: function() {
                return f
            },
            GA: function() {
                return h
            },
            DS: function() {
                return p
            }
        });
        var o = n(1122)
          , r = n(1505)
          , i = e=>{
            if (void 0 === e)
                return e;
            let[t,n=""] = e.split("?");
            return n && (n = "?" + n),
            "/" === t ? "/" + n : "/" === t.charAt(t.length - 1) ? t.slice(0, -1) + n : t + n
        }
          , s = n(6073);
        const a = new Map;
        let c = [];
        const l = e=>{
            let t = e;
            if (-1 !== e.indexOf("?")) {
                const [n,o] = e.split("?");
                t = `${n}?${encodeURIComponent(o)}`
            }
            const n = decodeURIComponent(t);
            return (0,
            r.Z)(n, decodeURIComponent("")).split("#")[0]
        }
        ;
        function u(e) {
            return e.startsWith("/") || e.startsWith("https://") || e.startsWith("http://") ? e : new URL(e,window.location.href + (window.location.href.endsWith("/") ? "" : "/")).pathname
        }
        const p = e=>{
            c = e
        }
          , d = e=>{
            const t = m(e)
              , n = c.map((e=>{
                let {path: t, matchPath: n} = e;
                return {
                    path: n,
                    originalPath: t
                }
            }
            ))
              , r = (0,
            o.ei)(n, t);
            return r ? i(r.route.originalPath) : null
        }
          , h = e=>{
            const t = m(e)
              , n = c.map((e=>{
                let {path: t, matchPath: n} = e;
                return {
                    path: n,
                    originalPath: t
                }
            }
            ))
              , r = (0,
            o.ei)(n, t);
            return r ? r.params : {}
        }
          , f = e=>{
            const t = l(u(e));
            if (a.has(t))
                return a.get(t);
            const n = (0,
            s.J)(e);
            if (n)
                return f(n.toPath);
            let o = d(t);
            return o || (o = m(e)),
            a.set(t, o),
            o
        }
          , m = e=>{
            let t = l(u(e));
            return "/index.html" === t && (t = "/"),
            t = i(t),
            t
        }
    },
    1597: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            PageRenderer: function() {
                return s.a
            },
            useScrollRestoration: function() {
                return a.p2
            },
            Link: function() {
                return c.ZP
            },
            withPrefix: function() {
                return c.dq
            },
            withAssetPrefix: function() {
                return c.mc
            },
            navigate: function() {
                return c.c4
            },
            parsePath: function() {
                return c.cP
            },
            graphql: function() {
                return m
            },
            StaticQueryContext: function() {
                return p
            },
            StaticQuery: function() {
                return h
            },
            useStaticQuery: function() {
                return f
            },
            prefetchPathname: function() {
                return u
            },
            Script: function() {
                return l.Script
            },
            ScriptStrategy: function() {
                return l.ScriptStrategy
            },
            collectedScriptsByPage: function() {
                return l.collectedScriptsByPage
            },
            scriptCache: function() {
                return l.scriptCache
            },
            scriptCallbackCache: function() {
                return l.scriptCallbackCache
            }
        });
        var o = n(7294)
          , r = n(1975)
          , i = n(2743)
          , s = n.n(i)
          , a = n(9679)
          , c = n(1562)
          , l = n(3521);
        const u = r.ZP.enqueue
          , p = o.createContext({});
        function d(e) {
            let {staticQueryData: t, data: n, query: r, render: i} = e;
            const s = n ? n.data : t[r] && t[r].data;
            return o.createElement(o.Fragment, null, s && i(s), !s && o.createElement("div", null, "Loading (StaticQuery)"))
        }
        const h = e=>{
            const {data: t, query: n, render: r, children: i} = e;
            return o.createElement(p.Consumer, null, (e=>o.createElement(d, {
                data: t,
                query: n,
                render: r || i,
                staticQueryData: e
            })))
        }
          , f = e=>{
            var t;
            o.useContext;
            const n = o.useContext(p);
            if (isNaN(Number(e)))
                throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql\`${e}\`);\n`);
            if (null !== (t = n[e]) && void 0 !== t && t.data)
                return n[e].data;
            throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")
        }
        ;
        function m() {
            throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")
        }
    },
    1975: function(e, t, n) {
        "use strict";
        n.d(t, {
            uQ: function() {
                return u
            },
            kL: function() {
                return y
            },
            ZP: function() {
                return x
            },
            hs: function() {
                return k
            },
            jN: function() {
                return w
            },
            N1: function() {
                return b
            }
        });
        var o = n(4578)
          , r = n(3433);
        const i = function(e) {
            if ("undefined" == typeof document)
                return !1;
            const t = document.createElement("link");
            try {
                if (t.relList && "function" == typeof t.relList.supports)
                    return t.relList.supports(e)
            } catch (n) {
                return !1
            }
            return !1
        }("prefetch") ? function(e, t) {
            return new Promise(((n,o)=>{
                if ("undefined" == typeof document)
                    return void o();
                const r = document.createElement("link");
                r.setAttribute("rel", "prefetch"),
                r.setAttribute("href", e),
                Object.keys(t).forEach((e=>{
                    r.setAttribute(e, t[e])
                }
                )),
                r.onload = n,
                r.onerror = o;
                (document.getElementsByTagName("head")[0] || document.getElementsByName("script")[0].parentNode).appendChild(r)
            }
            ))
        }
        : function(e) {
            return new Promise(((t,n)=>{
                const o = new XMLHttpRequest;
                o.open("GET", e, !0),
                o.onload = ()=>{
                    200 === o.status ? t() : n()
                }
                ,
                o.send(null)
            }
            ))
        }
          , s = {};
        var a = function(e, t) {
            return new Promise((n=>{
                s[e] ? n() : i(e, t).then((()=>{
                    n(),
                    s[e] = !0
                }
                )).catch((()=>{}
                ))
            }
            ))
        }
          , c = n(8299)
          , l = n(7802);
        const u = {
            Error: "error",
            Success: "success"
        }
          , p = e=>{
            const [t,n] = e.split("?");
            var o;
            return `/page-data/${"/" === t ? "index" : (o = "/" === (o = t)[0] ? o.slice(1) : o).endsWith("/") ? o.slice(0, -1) : o}/page-data.json${n ? `?${n}` : ""}`
        }
        ;
        function d(e, t) {
            return void 0 === t && (t = "GET"),
            new Promise((n=>{
                const o = new XMLHttpRequest;
                o.open(t, e, !0),
                o.onreadystatechange = ()=>{
                    4 == o.readyState && n(o)
                }
                ,
                o.send(null)
            }
            ))
        }
        const h = /bot|crawler|spider|crawling/i
          , f = function(e, t, n) {
            void 0 === t && (t = null);
            const o = {
                componentChunkName: e.componentChunkName,
                path: e.path,
                webpackCompilationHash: e.webpackCompilationHash,
                matchPath: e.matchPath,
                staticQueryHashes: e.staticQueryHashes,
                getServerDataError: e.getServerDataError
            };
            return {
                component: t,
                head: n,
                json: e.result,
                page: o
            }
        };
        let m = function() {
            function e(e, t) {
                this.inFlightNetworkRequests = new Map,
                this.pageDb = new Map,
                this.inFlightDb = new Map,
                this.staticQueryDb = {},
                this.pageDataDb = new Map,
                this.isPrefetchQueueRunning = !1,
                this.prefetchQueued = [],
                this.prefetchTriggered = new Set,
                this.prefetchCompleted = new Set,
                this.loadComponent = e,
                (0,
                l.DS)(t)
            }
            var t = e.prototype;
            return t.memoizedGet = function(e) {
                let t = this.inFlightNetworkRequests.get(e);
                return t || (t = d(e, "GET"),
                this.inFlightNetworkRequests.set(e, t)),
                t.then((t=>(this.inFlightNetworkRequests.delete(e),
                t))).catch((t=>{
                    throw this.inFlightNetworkRequests.delete(e),
                    t
                }
                ))
            }
            ,
            t.setApiRunner = function(e) {
                this.apiRunner = e,
                this.prefetchDisabled = e("disableCorePrefetching").some((e=>e))
            }
            ,
            t.fetchPageDataJson = function(e) {
                const {pagePath: t, retries: n=0} = e
                  , o = p(t);
                return this.memoizedGet(o).then((o=>{
                    const {status: r, responseText: i} = o;
                    if (200 === r)
                        try {
                            const n = JSON.parse(i);
                            if (void 0 === n.path)
                                throw new Error("not a valid pageData response");
                            const o = t.split("?")[1];
                            return o && !n.path.includes(o) && (n.path += `?${o}`),
                            Object.assign(e, {
                                status: u.Success,
                                payload: n
                            })
                        } catch (s) {}
                    return 404 === r || 200 === r ? "/404.html" === t || "/500.html" === t ? Object.assign(e, {
                        status: u.Error
                    }) : this.fetchPageDataJson(Object.assign(e, {
                        pagePath: "/404.html",
                        notFound: !0
                    })) : 500 === r ? this.fetchPageDataJson(Object.assign(e, {
                        pagePath: "/500.html",
                        internalServerError: !0
                    })) : n < 3 ? this.fetchPageDataJson(Object.assign(e, {
                        retries: n + 1
                    })) : Object.assign(e, {
                        status: u.Error
                    })
                }
                ))
            }
            ,
            t.loadPageDataJson = function(e) {
                const t = (0,
                l.Cj)(e);
                if (this.pageDataDb.has(t)) {
                    const e = this.pageDataDb.get(t);
                    return Promise.resolve(e)
                }
                return this.fetchPageDataJson({
                    pagePath: t
                }).then((e=>(this.pageDataDb.set(t, e),
                e)))
            }
            ,
            t.findMatchPath = function(e) {
                return (0,
                l.UD)(e)
            }
            ,
            t.loadPage = function(e) {
                const t = (0,
                l.Cj)(e);
                if (this.pageDb.has(t)) {
                    const e = this.pageDb.get(t);
                    return e.error ? {
                        error: e.error,
                        status: e.status
                    } : Promise.resolve(e.payload)
                }
                if (this.inFlightDb.has(t))
                    return this.inFlightDb.get(t);
                const n = Promise.all([this.loadAppData(), this.loadPageDataJson(t)]).then((e=>{
                    const n = e[1];
                    if (n.status === u.Error)
                        return {
                            status: u.Error
                        };
                    let o = n.payload;
                    const {componentChunkName: r, staticQueryHashes: i=[]} = o
                      , s = {}
                      , a = Promise.all([this.loadComponent(r), this.loadComponent(r, "head")]).then((t=>{
                        let r, [i,a] = t;
                        return s.createdAt = new Date,
                        !i || i instanceof Error ? (s.status = u.Error,
                        s.error = i) : (s.status = u.Success,
                        !0 === n.notFound && (s.notFound = !0),
                        o = Object.assign(o, {
                            webpackCompilationHash: e[0] ? e[0].webpackCompilationHash : ""
                        }),
                        r = f(o, i, a)),
                        r
                    }
                    ))
                      , l = Promise.all(i.map((e=>{
                        if (this.staticQueryDb[e]) {
                            const t = this.staticQueryDb[e];
                            return {
                                staticQueryHash: e,
                                jsonPayload: t
                            }
                        }
                        return this.memoizedGet(`/page-data/sq/d/${e}.json`).then((t=>{
                            const n = JSON.parse(t.responseText);
                            return {
                                staticQueryHash: e,
                                jsonPayload: n
                            }
                        }
                        )).catch((()=>{
                            throw new Error(`We couldn't load "/page-data/sq/d/${e}.json"`)
                        }
                        ))
                    }
                    ))).then((e=>{
                        const t = {};
                        return e.forEach((e=>{
                            let {staticQueryHash: n, jsonPayload: o} = e;
                            t[n] = o,
                            this.staticQueryDb[n] = o
                        }
                        )),
                        t
                    }
                    ));
                    return Promise.all([a, l]).then((e=>{
                        let n, [o,r] = e;
                        return o && (n = {
                            ...o,
                            staticQueryResults: r
                        },
                        s.payload = n,
                        c.Z.emit("onPostLoadPageResources", {
                            page: n,
                            pageResources: n
                        })),
                        this.pageDb.set(t, s),
                        s.error ? {
                            error: s.error,
                            status: s.status
                        } : n
                    }
                    )).catch((e=>({
                        error: e,
                        status: u.Error
                    })))
                }
                ));
                return n.then((()=>{
                    this.inFlightDb.delete(t)
                }
                )).catch((e=>{
                    throw this.inFlightDb.delete(t),
                    e
                }
                )),
                this.inFlightDb.set(t, n),
                n
            }
            ,
            t.loadPageSync = function(e, t) {
                void 0 === t && (t = {});
                const n = (0,
                l.Cj)(e);
                if (this.pageDb.has(n)) {
                    var o;
                    const e = this.pageDb.get(n);
                    if (e.payload)
                        return e.payload;
                    if (null !== (o = t) && void 0 !== o && o.withErrorDetails)
                        return {
                            error: e.error,
                            status: e.status
                        }
                }
            }
            ,
            t.shouldPrefetch = function(e) {
                return !!(()=>{
                    if ("connection"in navigator && void 0 !== navigator.connection) {
                        if ((navigator.connection.effectiveType || "").includes("2g"))
                            return !1;
                        if (navigator.connection.saveData)
                            return !1
                    }
                    return !0
                }
                )() && ((!navigator.userAgent || !h.test(navigator.userAgent)) && !this.pageDb.has(e))
            }
            ,
            t.prefetch = function(e) {
                if (!this.shouldPrefetch(e))
                    return {
                        then: e=>e(!1),
                        abort: ()=>{}
                    };
                if (this.prefetchTriggered.has(e))
                    return {
                        then: e=>e(!0),
                        abort: ()=>{}
                    };
                const t = {
                    resolve: null,
                    reject: null,
                    promise: null
                };
                t.promise = new Promise(((e,n)=>{
                    t.resolve = e,
                    t.reject = n
                }
                )),
                this.prefetchQueued.push([e, t]);
                const n = new AbortController;
                return n.signal.addEventListener("abort", (()=>{
                    const t = this.prefetchQueued.findIndex((t=>{
                        let[n] = t;
                        return n === e
                    }
                    ));
                    -1 !== t && this.prefetchQueued.splice(t, 1)
                }
                )),
                this.isPrefetchQueueRunning || (this.isPrefetchQueueRunning = !0,
                setTimeout((()=>{
                    this._processNextPrefetchBatch()
                }
                ), 3e3)),
                {
                    then: (e,n)=>t.promise.then(e, n),
                    abort: n.abort.bind(n)
                }
            }
            ,
            t._processNextPrefetchBatch = function() {
                (window.requestIdleCallback || (e=>setTimeout(e, 0)))((()=>{
                    const e = this.prefetchQueued.splice(0, 4)
                      , t = Promise.all(e.map((e=>{
                        let[t,n] = e;
                        return this.prefetchTriggered.has(t) || (this.apiRunner("onPrefetchPathname", {
                            pathname: t
                        }),
                        this.prefetchTriggered.add(t)),
                        this.prefetchDisabled ? n.resolve(!1) : this.doPrefetch((0,
                        l.Cj)(t)).then((()=>{
                            this.prefetchCompleted.has(t) || (this.apiRunner("onPostPrefetchPathname", {
                                pathname: t
                            }),
                            this.prefetchCompleted.add(t)),
                            n.resolve(!0)
                        }
                        ))
                    }
                    )));
                    this.prefetchQueued.length ? t.then((()=>{
                        setTimeout((()=>{
                            this._processNextPrefetchBatch()
                        }
                        ), 3e3)
                    }
                    )) : this.isPrefetchQueueRunning = !1
                }
                ))
            }
            ,
            t.doPrefetch = function(e) {
                const t = p(e);
                return a(t, {
                    crossOrigin: "anonymous",
                    as: "fetch"
                }).then((()=>this.loadPageDataJson(e)))
            }
            ,
            t.hovering = function(e) {
                this.loadPage(e)
            }
            ,
            t.getResourceURLsForPathname = function(e) {
                const t = (0,
                l.Cj)(e)
                  , n = this.pageDataDb.get(t);
                if (n) {
                    const e = f(n.payload);
                    return [].concat((0,
                    r.Z)(g(e.page.componentChunkName)), [p(t)])
                }
                return null
            }
            ,
            t.isPageNotFound = function(e) {
                const t = (0,
                l.Cj)(e)
                  , n = this.pageDb.get(t);
                return !n || n.notFound
            }
            ,
            t.loadAppData = function(e) {
                return void 0 === e && (e = 0),
                this.memoizedGet("/page-data/app-data.json").then((t=>{
                    const {status: n, responseText: o} = t;
                    let r;
                    if (200 !== n && e < 3)
                        return this.loadAppData(e + 1);
                    if (200 === n)
                        try {
                            const e = JSON.parse(o);
                            if (void 0 === e.webpackCompilationHash)
                                throw new Error("not a valid app-data response");
                            r = e
                        } catch (i) {}
                    return r
                }
                ))
            }
            ,
            e
        }();
        const g = e=>(window.___chunkMapping[e] || []).map((e=>"" + e));
        let v, y = function(e) {
            function t(t, o, r) {
                var i;
                return i = e.call(this, (function(e, o) {
                    if (void 0 === o && (o = "components"),
                    n.g.hasPartialHydration || (o = "components"),
                    !t[o][e])
                        throw new Error(`We couldn't find the correct component chunk with the name "${e}"`);
                    return t[o][e]().catch((e=>e))
                }
                ), o) || this,
                r && i.pageDataDb.set((0,
                l.Cj)(r.path), {
                    pagePath: r.path,
                    payload: r,
                    status: "success"
                }),
                i
            }
            (0,
            o.Z)(t, e);
            var r = t.prototype;
            return r.doPrefetch = function(t) {
                return e.prototype.doPrefetch.call(this, t).then((e=>{
                    if (e.status !== u.Success)
                        return Promise.resolve();
                    const t = e.payload
                      , n = t.componentChunkName
                      , o = g(n);
                    return Promise.all(o.map(a)).then((()=>t))
                }
                ))
            }
            ,
            r.loadPageDataJson = function(t) {
                return e.prototype.loadPageDataJson.call(this, t).then((e=>e.notFound ? d(t, "HEAD").then((t=>200 === t.status ? {
                    status: u.Error
                } : e)) : e))
            }
            ,
            t
        }(m);
        const b = e=>{
            v = e
        }
          , w = {
            enqueue: e=>v.prefetch(e),
            getResourceURLsForPathname: e=>v.getResourceURLsForPathname(e),
            loadPage: e=>v.loadPage(e),
            loadPageSync: function(e, t) {
                return void 0 === t && (t = {}),
                v.loadPageSync(e, t)
            },
            prefetch: e=>v.prefetch(e),
            isPageNotFound: e=>v.isPageNotFound(e),
            hovering: e=>v.hovering(e),
            loadAppData: ()=>v.loadAppData()
        };
        var x = w;
        function k() {
            return v ? v.staticQueryDb : {}
        }
    },
    4779: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return y
            }
        });
        var o = n(7294)
          , r = n(5697)
          , i = n.n(r)
          , s = n(3092)
          , a = n(7802)
          , c = n(1597)
          , l = n(3631)
          , u = n(4941);
        function p(e) {
            let {children: t, callback: n} = e;
            return (0,
            o.useEffect)((()=>{
                n()
            }
            )),
            t
        }
        const d = ["link", "meta", "style", "title", "base", "noscript", "script"];
        function h(e, t) {
            if (e instanceof HTMLElement && t instanceof HTMLElement) {
                const n = t.getAttribute("nonce");
                if (n && !e.getAttribute("nonce")) {
                    const o = t.cloneNode(!0);
                    return o.setAttribute("nonce", ""),
                    o.nonce = n,
                    n === e.nonce && e.isEqualNode(o)
                }
            }
            return e.isEqualNode(t)
        }
        const f = document.createElement("div")
          , m = ()=>{
            var e;
            const t = []
              , n = new Map;
            for (const l of f.childNodes) {
                var o, r;
                const e = l.nodeName.toLowerCase()
                  , s = null === (o = l.attributes) || void 0 === o || null === (r = o.id) || void 0 === r ? void 0 : r.value;
                if (d.includes(e)) {
                    let e = l.cloneNode(!0);
                    if (e.setAttribute("data-gatsby-head", !0),
                    "script" === e.nodeName.toLowerCase()) {
                        const t = document.createElement("script");
                        for (const n of e.attributes)
                            t.setAttribute(n.name, n.value);
                        t.innerHTML = e.innerHTML,
                        e = t
                    }
                    if (s)
                        if (n.has(s)) {
                            var i;
                            const o = n.get(s);
                            null === (i = t[o].parentNode) || void 0 === i || i.removeChild(t[o]),
                            t[o] = e
                        } else
                            t.push(e),
                            n.set(s, t.length - 1);
                    else
                        t.push(e)
                } else
                    ;
            }
            const s = document.querySelectorAll("[data-gatsby-head]");
            var a;
            if (0 === s.length)
                return void (a = document.head).append.apply(a, t);
            const c = [];
            !function(e) {
                let {oldNodes: t, newNodes: n, onStale: o, onNew: r} = e;
                for (const i of t) {
                    const e = n.findIndex((e=>h(e, i)));
                    -1 === e ? o(i) : n.splice(e, 1)
                }
                for (const i of n)
                    r(i)
            }({
                oldNodes: s,
                newNodes: t,
                onStale: e=>e.parentNode.removeChild(e),
                onNew: e=>c.push(e)
            }),
            (e = document.head).append.apply(e, c)
        }
        ;
        function g(e) {
            let {pageComponent: t, staticQueryResults: n, pageComponentProps: r} = e;
            (0,
            o.useEffect)((()=>{
                if (null != t && t.Head) {
                    !function(e) {
                        if ("function" != typeof e)
                            throw new Error(`Expected "Head" export to be a function got "${typeof e}".`)
                    }(t.Head);
                    const {render: i} = (0,
                    u.U)()
                      , s = t.Head;
                    i(o.createElement(p, {
                        callback: m
                    }, o.createElement(c.StaticQueryContext.Provider, {
                        value: n
                    }, o.createElement(l.LocationProvider, null, o.createElement(s, {
                        location: {
                            pathname: (e = r).location.pathname
                        },
                        params: e.params,
                        data: e.data || {},
                        pageContext: e.pageContext
                    })))), f)
                }
                var e;
                return ()=>{
                    (()=>{
                        const e = document.querySelectorAll("[data-gatsby-head]");
                        for (const t of e)
                            t.parentNode.removeChild(t)
                    }
                    )()
                }
            }
            ))
        }
        function v(e) {
            const t = {
                ...e,
                params: {
                    ...(0,
                    a.GA)(e.location.pathname),
                    ...e.pageResources.json.pageContext.__params
                }
            }
              , n = (0,
            o.createElement)((r = e.pageResources.component) && r.default || r, {
                ...t,
                key: e.path || e.pageResources.page.path
            });
            var r;
            g({
                pageComponent: e.pageResources.head,
                staticQueryResults: e.pageResources.staticQueryResults,
                pageComponentProps: t
            });
            return (0,
            s.h)("wrapPageElement", {
                element: n,
                props: t
            }, n, (e=>{
                let {result: n} = e;
                return {
                    element: n,
                    props: t
                }
            }
            )).pop()
        }
        v.propTypes = {
            location: i().object.isRequired,
            pageResources: i().object.isRequired,
            data: i().object,
            pageContext: i().object.isRequired
        };
        var y = v
    },
    5824: function(e, t, n) {
        "use strict";
        var o = n(4578)
          , r = n(3092)
          , i = n(7294)
          , s = n(3631)
          , a = n(9679)
          , c = n(1597)
          , l = n(1975)
          , u = n(6073)
          , p = n(8299);
        const d = {
            id: "gatsby-announcer",
            style: {
                position: "absolute",
                top: 0,
                width: 1,
                height: 1,
                padding: 0,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                border: 0
            },
            "aria-live": "assertive",
            "aria-atomic": "true"
        };
        var h = n(702)
          , f = n(1562);
        function m(e) {
            const t = (0,
            u.J)(e)
              , {hash: n, search: o} = window.location;
            return null != t && (window.___replace(t.toPath + o + n),
            !0)
        }
        let g = "";
        window.addEventListener("unhandledrejection", (e=>{
            /loading chunk \d* failed./i.test(e.reason) && g && (window.location.pathname = g)
        }
        ));
        const v = (e,t)=>{
            m(e.pathname) || (g = e.pathname,
            (0,
            r.h)("onPreRouteUpdate", {
                location: e,
                prevLocation: t
            }))
        }
          , y = (e,t)=>{
            m(e.pathname) || (0,
            r.h)("onRouteUpdate", {
                location: e,
                prevLocation: t
            })
        }
          , b = function(e, t) {
            if (void 0 === t && (t = {}),
            "number" == typeof e)
                return void h.V5.navigate(e);
            const {pathname: n, search: o, hash: i} = (0,
            f.cP)(e)
              , a = (0,
            u.J)(n);
            if (a && (e = a.toPath + o + i),
            window.___swUpdated)
                return void (window.location = n + o + i);
            const c = setTimeout((()=>{
                p.Z.emit("onDelayedLoadPageResources", {
                    pathname: n
                }),
                (0,
                r.h)("onRouteUpdateDelayed", {
                    location: window.location
                })
            }
            ), 1e3);
            l.ZP.loadPage(n + o).then((r=>{
                if (!r || r.status === l.uQ.Error)
                    return window.history.replaceState({}, "", location.href),
                    window.location = n,
                    void clearTimeout(c);
                r && r.page.webpackCompilationHash !== window.___webpackCompilationHash && ("serviceWorker"in navigator && null !== navigator.serviceWorker.controller && "activated" === navigator.serviceWorker.controller.state && navigator.serviceWorker.controller.postMessage({
                    gatsbyApi: "clearPathResources"
                }),
                window.location = n + o + i),
                (0,
                s.navigate)(e, t),
                clearTimeout(c)
            }
            ))
        };
        function w(e, t) {
            let {location: n} = t;
            const {pathname: o, hash: i} = n
              , s = (0,
            r.h)("shouldUpdateScroll", {
                prevRouterProps: e,
                pathname: o,
                routerProps: {
                    location: n
                },
                getSavedScrollPosition: e=>[0, this._stateStorage.read(e, e.key)]
            });
            if (s.length > 0)
                return s[s.length - 1];
            if (e) {
                const {location: {pathname: t}} = e;
                if (t === o)
                    return i ? decodeURI(i.slice(1)) : [0, 0]
            }
            return !0
        }
        let x = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).announcementRef = i.createRef(),
                n
            }
            (0,
            o.Z)(t, e);
            var n = t.prototype;
            return n.componentDidUpdate = function(e, t) {
                requestAnimationFrame((()=>{
                    let e = `new page at ${this.props.location.pathname}`;
                    document.title && (e = document.title);
                    const t = document.querySelectorAll("#gatsby-focus-wrapper h1");
                    t && t.length && (e = t[0].textContent);
                    const n = `Navigated to ${e}`;
                    if (this.announcementRef.current) {
                        this.announcementRef.current.innerText !== n && (this.announcementRef.current.innerText = n)
                    }
                }
                ))
            }
            ,
            n.render = function() {
                return i.createElement("div", Object.assign({}, d, {
                    ref: this.announcementRef
                }))
            }
            ,
            t
        }(i.Component);
        const k = (e,t)=>{
            var n, o;
            return e.href !== t.href || (null == e || null === (n = e.state) || void 0 === n ? void 0 : n.key) !== (null == t || null === (o = t.state) || void 0 === o ? void 0 : o.key)
        }
        ;
        let P = function(e) {
            function t(t) {
                var n;
                return n = e.call(this, t) || this,
                v(t.location, null),
                n
            }
            (0,
            o.Z)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                y(this.props.location, null)
            }
            ,
            n.shouldComponentUpdate = function(e) {
                return !!k(e.location, this.props.location) && (v(this.props.location, e.location),
                !0)
            }
            ,
            n.componentDidUpdate = function(e) {
                k(e.location, this.props.location) && y(this.props.location, e.location)
            }
            ,
            n.render = function() {
                return i.createElement(i.Fragment, null, this.props.children, i.createElement(x, {
                    location: location
                }))
            }
            ,
            t
        }(i.Component);
        var S = n(4779)
          , O = n(5418);
        function j(e, t) {
            for (var n in e)
                if (!(n in t))
                    return !0;
            for (var o in t)
                if (e[o] !== t[o])
                    return !0;
            return !1
        }
        var C = function(e) {
            function t(t) {
                var n;
                n = e.call(this) || this;
                const {location: o, pageResources: r} = t;
                return n.state = {
                    location: {
                        ...o
                    },
                    pageResources: r || l.ZP.loadPageSync(o.pathname + o.search, {
                        withErrorDetails: !0
                    })
                },
                n
            }
            (0,
            o.Z)(t, e),
            t.getDerivedStateFromProps = function(e, t) {
                let {location: n} = e;
                if (t.location.href !== n.href) {
                    return {
                        pageResources: l.ZP.loadPageSync(n.pathname + n.search, {
                            withErrorDetails: !0
                        }),
                        location: {
                            ...n
                        }
                    }
                }
                return {
                    location: {
                        ...n
                    }
                }
            }
            ;
            var n = t.prototype;
            return n.loadResources = function(e) {
                l.ZP.loadPage(e).then((t=>{
                    t && t.status !== l.uQ.Error ? this.setState({
                        location: {
                            ...window.location
                        },
                        pageResources: t
                    }) : (window.history.replaceState({}, "", location.href),
                    window.location = e)
                }
                ))
            }
            ,
            n.shouldComponentUpdate = function(e, t) {
                return t.pageResources ? this.state.pageResources !== t.pageResources || (this.state.pageResources.component !== t.pageResources.component || (this.state.pageResources.json !== t.pageResources.json || (!(this.state.location.key === t.location.key || !t.pageResources.page || !t.pageResources.page.matchPath && !t.pageResources.page.path) || function(e, t, n) {
                    return j(e.props, t) || j(e.state, n)
                }(this, e, t)))) : (this.loadResources(e.location.pathname + e.location.search),
                !1)
            }
            ,
            n.render = function() {
                return this.props.children(this.state)
            }
            ,
            t
        }(i.Component)
          , R = n(1505)
          , E = n(4941);
        const L = new l.kL(O,[],window.pageData);
        (0,
        l.N1)(L),
        L.setApiRunner(r.h);
        const {render: D, hydrate: N} = (0,
        E.U)();
        window.asyncRequires = O,
        window.___emitter = p.Z,
        window.___loader = l.jN,
        h.V5.listen((e=>{
            e.location.action = e.action
        }
        )),
        window.___push = e=>b(e, {
            replace: !1
        }),
        window.___replace = e=>b(e, {
            replace: !0
        }),
        window.___navigate = (e,t)=>b(e, t);
        const T = "gatsby-reload-compilation-hash-match";
        (0,
        r.I)("onClientEntry").then((()=>{
            (0,
            r.h)("registerServiceWorker").filter(Boolean).length > 0 && n(9939);
            const e = e=>i.createElement(s.BaseContext.Provider, {
                value: {
                    baseuri: "/",
                    basepath: "/"
                }
            }, i.createElement(S.Z, e))
              , t = i.createContext({});
            let u = function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                return (0,
                o.Z)(n, e),
                n.prototype.render = function() {
                    const {children: e} = this.props;
                    return i.createElement(s.Location, null, (n=>{
                        let {location: o} = n;
                        return i.createElement(C, {
                            location: o
                        }, (n=>{
                            let {pageResources: o, location: r} = n;
                            const s = (0,
                            l.hs)();
                            return i.createElement(c.StaticQueryContext.Provider, {
                                value: s
                            }, i.createElement(t.Provider, {
                                value: {
                                    pageResources: o,
                                    location: r
                                }
                            }, e))
                        }
                        ))
                    }
                    ))
                }
                ,
                n
            }(i.Component)
              , p = function(n) {
                function r() {
                    return n.apply(this, arguments) || this
                }
                return (0,
                o.Z)(r, n),
                r.prototype.render = function() {
                    return i.createElement(t.Consumer, null, (t=>{
                        let {pageResources: n, location: o} = t;
                        return i.createElement(P, {
                            location: o
                        }, i.createElement(a.$C, {
                            location: o,
                            shouldUpdateScroll: w
                        }, i.createElement(s.Router, {
                            basepath: "",
                            location: o,
                            id: "gatsby-focus-wrapper"
                        }, i.createElement(e, Object.assign({
                            path: "/404.html" === n.page.path || "/500.html" === n.page.path ? (0,
                            R.Z)(o.pathname, "") : encodeURI((n.page.matchPath || n.page.path).split("?")[0])
                        }, this.props, {
                            location: o,
                            pageResources: n
                        }, n.json)))))
                    }
                    ))
                }
                ,
                r
            }(i.Component);
            const {pagePath: d, location: h} = window;
            d && "" + d !== h.pathname + (d.includes("?") ? h.search : "") && !(L.findMatchPath((0,
            R.Z)(h.pathname, "")) || d.match(/^\/(404|500)(\/?|.html)$/) || d.match(/^\/offline-plugin-app-shell-fallback\/?$/)) && (0,
            s.navigate)("" + d + (d.includes("?") ? "" : h.search) + h.hash, {
                replace: !0
            });
            const f = ()=>{
                try {
                    return sessionStorage
                } catch {
                    return null
                }
            }
            ;
            l.jN.loadPage(h.pathname + h.search).then((e=>{
                var t;
                const n = f();
                if (null != e && null !== (t = e.page) && void 0 !== t && t.webpackCompilationHash && e.page.webpackCompilationHash !== window.___webpackCompilationHash && ("serviceWorker"in navigator && null !== navigator.serviceWorker.controller && "activated" === navigator.serviceWorker.controller.state && navigator.serviceWorker.controller.postMessage({
                    gatsbyApi: "clearPathResources"
                }),
                n)) {
                    if (!("1" === n.getItem(T)))
                        return n.setItem(T, "1"),
                        void window.location.reload(!0)
                }
                if (n && n.removeItem(T),
                !e || e.status === l.uQ.Error) {
                    const t = `page resources for ${h.pathname} not found. Not rendering React`;
                    if (e && e.error)
                        throw console.error(t),
                        e.error;
                    throw new Error(t)
                }
                const o = (0,
                r.h)("wrapRootElement", {
                    element: i.createElement(p, null)
                }, i.createElement(p, null), (e=>{
                    let {result: t} = e;
                    return {
                        element: t
                    }
                }
                )).pop()
                  , s = function() {
                    const e = i.useRef(!1);
                    return i.useEffect((()=>{
                        e.current || (e.current = !0,
                        performance.mark && performance.mark("onInitialClientRender"),
                        (0,
                        r.h)("onInitialClientRender"))
                    }
                    ), []),
                    i.createElement(u, null, o)
                }
                  , a = document.getElementById("gatsby-focus-wrapper");
                let c = D;
                a && a.children.length && (c = N);
                const d = (0,
                r.h)("replaceHydrateFunction", void 0, c)[0];
                function m() {
                    const e = "undefined" != typeof window ? document.getElementById("___gatsby") : null;
                    d(i.createElement(s, null), e)
                }
                const g = document;
                if ("complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll)
                    setTimeout((function() {
                        m()
                    }
                    ), 0);
                else {
                    const e = function() {
                        g.removeEventListener("DOMContentLoaded", e, !1),
                        window.removeEventListener("load", e, !1),
                        m()
                    };
                    g.addEventListener("DOMContentLoaded", e, !1),
                    window.addEventListener("load", e, !1)
                }
            }
            ))
        }
        ))
    },
    224: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(7294)
          , r = n(1975)
          , i = n(4779);
        t.default = e=>{
            let {location: t} = e;
            const n = r.ZP.loadPageSync(t.pathname);
            return n ? o.createElement(i.Z, {
                location: t,
                pageResources: n,
                ...n.json
            }) : null
        }
    },
    2743: function(e, t, n) {
        var o;
        e.exports = (o = n(224)) && o.default || o
    },
    4941: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return r
            }
        });
        const o = new WeakMap;
        function r() {
            let e, t;
            {
                const r = n(745);
                e = (e,t)=>{
                    let n = o.get(t);
                    n || o.set(t, n = r.createRoot(t)),
                    n.render(e)
                }
                ,
                t = (e,t)=>r.hydrateRoot(t, e)
            }
            return {
                render: e,
                hydrate: t
            }
        }
    },
    9712: function(e, t) {
        t.O = e=>e
    },
    6073: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return i
            }
        });
        const o = new Map
          , r = new Map;
        function i(e) {
            let t = o.get(e);
            return t || (t = r.get(e.toLowerCase())),
            t
        }
        [].forEach((e=>{
            e.ignoreCase ? r.set(e.fromPath, e) : o.set(e.fromPath, e)
        }
        ))
    },
    9939: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(3092);
        "https:" !== window.location.protocol && "localhost" !== window.location.hostname ? console.error("Service workers can only be used over HTTPS, or on localhost for development") : "serviceWorker"in navigator && navigator.serviceWorker.register("/sw.js").then((function(e) {
            e.addEventListener("updatefound", (()=>{
                (0,
                o.h)("onServiceWorkerUpdateFound", {
                    serviceWorker: e
                });
                const t = e.installing;
                console.log("installingWorker", t),
                t.addEventListener("statechange", (()=>{
                    switch (t.state) {
                    case "installed":
                        navigator.serviceWorker.controller ? (window.___swUpdated = !0,
                        (0,
                        o.h)("onServiceWorkerUpdateReady", {
                            serviceWorker: e
                        }),
                        window.___failedResources && (console.log("resources failed, SW updated - reloading"),
                        window.location.reload())) : (console.log("Content is now available offline!"),
                        (0,
                        o.h)("onServiceWorkerInstalled", {
                            serviceWorker: e
                        }));
                        break;
                    case "redundant":
                        console.error("The installing service worker became redundant."),
                        (0,
                        o.h)("onServiceWorkerRedundant", {
                            serviceWorker: e
                        });
                        break;
                    case "activated":
                        (0,
                        o.h)("onServiceWorkerActive", {
                            serviceWorker: e
                        })
                    }
                }
                ))
            }
            ))
        }
        )).catch((function(e) {
            console.error("Error during service worker registration:", e)
        }
        ))
    },
    1505: function(e, t, n) {
        "use strict";
        function o(e, t) {
            return void 0 === t && (t = ""),
            t ? e === t ? "/" : e.startsWith(`${t}/`) ? e.slice(t.length) : e : e
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    5663: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            wrapPageElement: function() {
                return He
            }
        });
        var o = {};
        n.r(o),
        n.d(o, {
            about: function() {
                return je
            },
            common: function() {
                return Ce
            },
            examples: function() {
                return Re
            },
            learnMore: function() {
                return Ee
            },
            plyr: function() {
                return Le
            },
            premium: function() {
                return De
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            about: function() {
                return Ne
            },
            common: function() {
                return Te
            },
            examples: function() {
                return _e
            },
            learnMore: function() {
                return Ie
            },
            plyr: function() {
                return Ae
            },
            premium: function() {
                return Me
            }
        });
        var i = {};
        n.r(i),
        n.d(i, {
            en: function() {
                return o
            },
            ja: function() {
                return r
            }
        });
        var s = n(7294)
          , a = n(7031);
        function c(e) {
            var t = e.i18n
              , n = e.defaultNS
              , o = e.children
              , r = (0,
            s.useMemo)((function() {
                return {
                    i18n: t,
                    defaultNS: n
                }
            }
            ), [t, n]);
            return (0,
            s.createElement)(a.OO.Provider, {
                value: r
            }, o)
        }
        function l(e) {
            return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            l(e)
        }
        function u(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function d(e, t, n) {
            return t && p(e.prototype, t),
            n && p(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        var h = n(7326)
          , f = n(9611);
        function m(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && (0,
            f.Z)(e, t)
        }
        function g(e, t) {
            if (t && ("object" === l(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return (0,
            h.Z)(e)
        }
        function v(e) {
            return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            v(e)
        }
        function y(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var b = n(9199)
          , w = n(181);
        function x(e) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || (0,
            b.Z)(e) || (0,
            w.Z)(e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function k(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function P(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? k(Object(n), !0).forEach((function(t) {
                    y(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var S = {
            type: "logger",
            log: function(e) {
                this.output("log", e)
            },
            warn: function(e) {
                this.output("warn", e)
            },
            error: function(e) {
                this.output("error", e)
            },
            output: function(e, t) {
                console && console[e] && console[e].apply(console, t)
            }
        }
          , O = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                u(this, e),
                this.init(t, n)
            }
            return d(e, [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = t.prefix || "i18next:",
                    this.logger = e || S,
                    this.options = t,
                    this.debug = t.debug
                }
            }, {
                key: "setDebug",
                value: function(e) {
                    this.debug = e
                }
            }, {
                key: "log",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "log", "", !0)
                }
            }, {
                key: "warn",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "", !0)
                }
            }, {
                key: "error",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "error", "")
                }
            }, {
                key: "deprecate",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                }
            }, {
                key: "forward",
                value: function(e, t, n, o) {
                    return o && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
                    this.logger[t](e))
                }
            }, {
                key: "create",
                value: function(t) {
                    return new e(this.logger,P(P({}, {
                        prefix: "".concat(this.prefix, ":").concat(t, ":")
                    }), this.options))
                }
            }, {
                key: "clone",
                value: function(t) {
                    return (t = t || this.options).prefix = t.prefix || this.prefix,
                    new e(this.logger,t)
                }
            }]),
            e
        }()
          , j = new O
          , C = function() {
            function e() {
                u(this, e),
                this.observers = {}
            }
            return d(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this;
                    return e.split(" ").forEach((function(e) {
                        n.observers[e] = n.observers[e] || [],
                        n.observers[e].push(t)
                    }
                    )),
                    this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) {
                        return e !== t
                    }
                    )) : delete this.observers[e])
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                        n[o - 1] = arguments[o];
                    if (this.observers[e]) {
                        var r = [].concat(this.observers[e]);
                        r.forEach((function(e) {
                            e.apply(void 0, n)
                        }
                        ))
                    }
                    if (this.observers["*"]) {
                        var i = [].concat(this.observers["*"]);
                        i.forEach((function(t) {
                            t.apply(t, [e].concat(n))
                        }
                        ))
                    }
                }
            }]),
            e
        }();
        function R() {
            var e, t, n = new Promise((function(n, o) {
                e = n,
                t = o
            }
            ));
            return n.resolve = e,
            n.reject = t,
            n
        }
        function E(e) {
            return null == e ? "" : "" + e
        }
        function L(e, t, n) {
            e.forEach((function(e) {
                t[e] && (n[e] = t[e])
            }
            ))
        }
        function D(e, t, n) {
            function o(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
            }
            function r() {
                return !e || "string" == typeof e
            }
            for (var i = "string" != typeof t ? [].concat(t) : t.split("."); i.length > 1; ) {
                if (r())
                    return {};
                var s = o(i.shift());
                !e[s] && n && (e[s] = new n),
                e = Object.prototype.hasOwnProperty.call(e, s) ? e[s] : {}
            }
            return r() ? {} : {
                obj: e,
                k: o(i.shift())
            }
        }
        function N(e, t, n) {
            var o = D(e, t, Object);
            o.obj[o.k] = n
        }
        function T(e, t) {
            var n = D(e, t)
              , o = n.obj
              , r = n.k;
            if (o)
                return o[r]
        }
        function _(e, t, n) {
            var o = T(e, n);
            return void 0 !== o ? o : T(t, n)
        }
        function I(e, t, n) {
            for (var o in t)
                "__proto__" !== o && "constructor" !== o && (o in e ? "string" == typeof e[o] || e[o]instanceof String || "string" == typeof t[o] || t[o]instanceof String ? n && (e[o] = t[o]) : I(e[o], t[o], n) : e[o] = t[o]);
            return e
        }
        function A(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
        var M = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        function F(e) {
            return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                return M[e]
            }
            )) : e
        }
        var U = "undefined" != typeof window && window.navigator && void 0 === window.navigator.userAgentData && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1
          , H = [" ", ",", "?", "!", ";"];
        function W(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function q(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? W(Object(n), !0).forEach((function(t) {
                    y(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function V(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, o = v(e);
                if (t) {
                    var r = v(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return g(this, n)
            }
        }
        function B(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
            if (e) {
                if (e[t])
                    return e[t];
                for (var o = t.split(n), r = e, i = 0; i < o.length; ++i) {
                    if (!r)
                        return;
                    if ("string" == typeof r[o[i]] && i + 1 < o.length)
                        return;
                    if (void 0 === r[o[i]]) {
                        for (var s = 2, a = o.slice(i, i + s).join(n), c = r[a]; void 0 === c && o.length > i + s; )
                            s++,
                            c = r[a = o.slice(i, i + s).join(n)];
                        if (void 0 === c)
                            return;
                        if (null === c)
                            return null;
                        if (t.endsWith(a)) {
                            if ("string" == typeof c)
                                return c;
                            if (a && "string" == typeof c[a])
                                return c[a]
                        }
                        var l = o.slice(i + s).join(n);
                        return l ? B(c, l, n) : void 0
                    }
                    r = r[o[i]]
                }
                return r
            }
        }
        var z = function(e) {
            m(n, e);
            var t = V(n);
            function n(e) {
                var o, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                return u(this, n),
                o = t.call(this),
                U && C.call((0,
                h.Z)(o)),
                o.data = e || {},
                o.options = r,
                void 0 === o.options.keySeparator && (o.options.keySeparator = "."),
                void 0 === o.options.ignoreJSONStructure && (o.options.ignoreJSONStructure = !0),
                o
            }
            return d(n, [{
                key: "addNamespaces",
                value: function(e) {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }
            }, {
                key: "removeNamespaces",
                value: function(e) {
                    var t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                      , r = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator
                      , i = void 0 !== o.ignoreJSONStructure ? o.ignoreJSONStructure : this.options.ignoreJSONStructure
                      , s = [e, t];
                    n && "string" != typeof n && (s = s.concat(n)),
                    n && "string" == typeof n && (s = s.concat(r ? n.split(r) : n)),
                    e.indexOf(".") > -1 && (s = e.split("."));
                    var a = T(this.data, s);
                    return a || !i || "string" != typeof n ? a : B(this.data && this.data[e] && this.data[e][t], n, r)
                }
            }, {
                key: "addResource",
                value: function(e, t, n, o) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        silent: !1
                    }
                      , i = this.options.keySeparator;
                    void 0 === i && (i = ".");
                    var s = [e, t];
                    n && (s = s.concat(i ? n.split(i) : n)),
                    e.indexOf(".") > -1 && (o = t,
                    t = (s = e.split("."))[1]),
                    this.addNamespaces(t),
                    N(this.data, s, o),
                    r.silent || this.emit("added", e, t, n, o)
                }
            }, {
                key: "addResources",
                value: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (var r in n)
                        "string" != typeof n[r] && "[object Array]" !== Object.prototype.toString.apply(n[r]) || this.addResource(e, t, r, n[r], {
                            silent: !0
                        });
                    o.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "addResourceBundle",
                value: function(e, t, n, o, r) {
                    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                        silent: !1
                    }
                      , s = [e, t];
                    e.indexOf(".") > -1 && (o = n,
                    n = t,
                    t = (s = e.split("."))[1]),
                    this.addNamespaces(t);
                    var a = T(this.data, s) || {};
                    o ? I(a, n, r) : a = q(q({}, a), n),
                    N(this.data, s, a),
                    i.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "removeResourceBundle",
                value: function(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit("removed", e, t)
                }
            }, {
                key: "hasResourceBundle",
                value: function(e, t) {
                    return void 0 !== this.getResource(e, t)
                }
            }, {
                key: "getResourceBundle",
                value: function(e, t) {
                    return t || (t = this.options.defaultNS),
                    "v1" === this.options.compatibilityAPI ? q(q({}, {}), this.getResource(e, t)) : this.getResource(e, t)
                }
            }, {
                key: "getDataByLanguage",
                value: function(e) {
                    return this.data[e]
                }
            }, {
                key: "hasLanguageSomeTranslations",
                value: function(e) {
                    var t = this.getDataByLanguage(e);
                    return !!(t && Object.keys(t) || []).find((function(e) {
                        return t[e] && Object.keys(t[e]).length > 0
                    }
                    ))
                }
            }, {
                key: "toJSON",
                value: function() {
                    return this.data
                }
            }]),
            n
        }(C)
          , Z = {
            processors: {},
            addPostProcessor: function(e) {
                this.processors[e.name] = e
            },
            handle: function(e, t, n, o, r) {
                var i = this;
                return e.forEach((function(e) {
                    i.processors[e] && (t = i.processors[e].process(t, n, o, r))
                }
                )),
                t
            }
        };
        function J(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function $(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? J(Object(n), !0).forEach((function(t) {
                    y(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function K(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, o = v(e);
                if (t) {
                    var r = v(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return g(this, n)
            }
        }
        var G = {}
          , Q = function(e) {
            m(n, e);
            var t = K(n);
            function n(e) {
                var o, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return u(this, n),
                o = t.call(this),
                U && C.call((0,
                h.Z)(o)),
                L(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, (0,
                h.Z)(o)),
                o.options = r,
                void 0 === o.options.keySeparator && (o.options.keySeparator = "."),
                o.logger = j.create("translator"),
                o
            }
            return d(n, [{
                key: "changeLanguage",
                value: function(e) {
                    e && (this.language = e)
                }
            }, {
                key: "exists",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    };
                    if (null == e)
                        return !1;
                    var n = this.resolve(e, t);
                    return n && void 0 !== n.res
                }
            }, {
                key: "extractFromKey",
                value: function(e, t) {
                    var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var o = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                      , r = t.ns || this.options.defaultNS || []
                      , i = n && e.indexOf(n) > -1
                      , s = !(this.options.userDefinedKeySeparator || t.keySeparator || this.options.userDefinedNsSeparator || t.nsSeparator || function(e, t, n) {
                        t = t || "",
                        n = n || "";
                        var o = H.filter((function(e) {
                            return t.indexOf(e) < 0 && n.indexOf(e) < 0
                        }
                        ));
                        if (0 === o.length)
                            return !0;
                        var r = new RegExp("(".concat(o.map((function(e) {
                            return "?" === e ? "\\?" : e
                        }
                        )).join("|"), ")"))
                          , i = !r.test(e);
                        if (!i) {
                            var s = e.indexOf(n);
                            s > 0 && !r.test(e.substring(0, s)) && (i = !0)
                        }
                        return i
                    }(e, n, o));
                    if (i && !s) {
                        var a = e.match(this.interpolator.nestingRegexp);
                        if (a && a.length > 0)
                            return {
                                key: e,
                                namespaces: r
                            };
                        var c = e.split(n);
                        (n !== o || n === o && this.options.ns.indexOf(c[0]) > -1) && (r = c.shift()),
                        e = c.join(o)
                    }
                    return "string" == typeof r && (r = [r]),
                    {
                        key: e,
                        namespaces: r
                    }
                }
            }, {
                key: "translate",
                value: function(e, t, o) {
                    var r = this;
                    if ("object" !== l(t) && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)),
                    t || (t = {}),
                    null == e)
                        return "";
                    Array.isArray(e) || (e = [String(e)]);
                    var i = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails
                      , s = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                      , a = this.extractFromKey(e[e.length - 1], t)
                      , c = a.key
                      , u = a.namespaces
                      , p = u[u.length - 1]
                      , d = t.lng || this.language
                      , h = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (d && "cimode" === d.toLowerCase()) {
                        if (h) {
                            var f = t.nsSeparator || this.options.nsSeparator;
                            return i ? (m.res = "".concat(p).concat(f).concat(c),
                            m) : "".concat(p).concat(f).concat(c)
                        }
                        return i ? (m.res = c,
                        m) : c
                    }
                    var m = this.resolve(e, t)
                      , g = m && m.res
                      , v = m && m.usedKey || c
                      , y = m && m.exactUsedKey || c
                      , b = Object.prototype.toString.apply(g)
                      , w = ["[object Number]", "[object Function]", "[object RegExp]"]
                      , x = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays
                      , k = !this.i18nFormat || this.i18nFormat.handleAsObject
                      , P = "string" != typeof g && "boolean" != typeof g && "number" != typeof g;
                    if (k && g && P && w.indexOf(b) < 0 && ("string" != typeof x || "[object Array]" !== b)) {
                        if (!t.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            var S = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, g, $($({}, t), {}, {
                                ns: u
                            })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
                            return i ? (m.res = S,
                            m) : S
                        }
                        if (s) {
                            var O = "[object Array]" === b
                              , j = O ? [] : {}
                              , C = O ? y : v;
                            for (var R in g)
                                if (Object.prototype.hasOwnProperty.call(g, R)) {
                                    var E = "".concat(C).concat(s).concat(R);
                                    j[R] = this.translate(E, $($({}, t), {
                                        joinArrays: !1,
                                        ns: u
                                    })),
                                    j[R] === E && (j[R] = g[R])
                                }
                            g = j
                        }
                    } else if (k && "string" == typeof x && "[object Array]" === b)
                        (g = g.join(x)) && (g = this.extendTranslation(g, e, t, o));
                    else {
                        var L = !1
                          , D = !1
                          , N = void 0 !== t.count && "string" != typeof t.count
                          , T = n.hasDefaultValue(t)
                          , _ = N ? this.pluralResolver.getSuffix(d, t.count, t) : ""
                          , I = t["defaultValue".concat(_)] || t.defaultValue;
                        !this.isValidLookup(g) && T && (L = !0,
                        g = I),
                        this.isValidLookup(g) || (D = !0,
                        g = c);
                        var A = t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey
                          , M = A && D ? void 0 : g
                          , F = T && I !== g && this.options.updateMissing;
                        if (D || L || F) {
                            if (this.logger.log(F ? "updateKey" : "missingKey", d, p, c, F ? I : g),
                            s) {
                                var U = this.resolve(c, $($({}, t), {}, {
                                    keySeparator: !1
                                }));
                                U && U.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            var H = []
                              , W = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && W && W[0])
                                for (var q = 0; q < W.length; q++)
                                    H.push(W[q]);
                            else
                                "all" === this.options.saveMissingTo ? H = this.languageUtils.toResolveHierarchy(t.lng || this.language) : H.push(t.lng || this.language);
                            var V = function(e, n, o) {
                                var i = T && o !== g ? o : M;
                                r.options.missingKeyHandler ? r.options.missingKeyHandler(e, p, n, i, F, t) : r.backendConnector && r.backendConnector.saveMissing && r.backendConnector.saveMissing(e, p, n, i, F, t),
                                r.emit("missingKey", e, p, n, g)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && N ? H.forEach((function(e) {
                                r.pluralResolver.getSuffixes(e, t).forEach((function(n) {
                                    V([e], c + n, t["defaultValue".concat(n)] || I)
                                }
                                ))
                            }
                            )) : V(H, c, I))
                        }
                        g = this.extendTranslation(g, e, t, m, o),
                        D && g === c && this.options.appendNamespaceToMissingKey && (g = "".concat(p, ":").concat(c)),
                        (D || L) && this.options.parseMissingKeyHandler && (g = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(p, ":").concat(c) : c, L ? g : void 0) : this.options.parseMissingKeyHandler(g))
                    }
                    return i ? (m.res = g,
                    m) : g
                }
            }, {
                key: "extendTranslation",
                value: function(e, t, n, o, r) {
                    var i = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                        e = this.i18nFormat.parse(e, $($({}, this.options.interpolation.defaultVariables), n), o.usedLng, o.usedNS, o.usedKey, {
                            resolved: o
                        });
                    else if (!n.skipInterpolation) {
                        n.interpolation && this.interpolator.init($($({}, n), {
                            interpolation: $($({}, this.options.interpolation), n.interpolation)
                        }));
                        var s, a = "string" == typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                        if (a) {
                            var c = e.match(this.interpolator.nestingRegexp);
                            s = c && c.length
                        }
                        var l = n.replace && "string" != typeof n.replace ? n.replace : n;
                        if (this.options.interpolation.defaultVariables && (l = $($({}, this.options.interpolation.defaultVariables), l)),
                        e = this.interpolator.interpolate(e, l, n.lng || this.language, n),
                        a) {
                            var u = e.match(this.interpolator.nestingRegexp);
                            s < (u && u.length) && (n.nest = !1)
                        }
                        !1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                            for (var e = arguments.length, o = new Array(e), s = 0; s < e; s++)
                                o[s] = arguments[s];
                            return r && r[0] === o[0] && !n.context ? (i.logger.warn("It seems you are nesting recursively key: ".concat(o[0], " in key: ").concat(t[0])),
                            null) : i.translate.apply(i, o.concat([t]))
                        }
                        ), n)),
                        n.interpolation && this.interpolator.reset()
                    }
                    var p = n.postProcess || this.options.postProcess
                      , d = "string" == typeof p ? [p] : p;
                    return null != e && d && d.length && !1 !== n.applyPostProcessor && (e = Z.handle(d, e, t, this.options && this.options.postProcessPassResolved ? $({
                        i18nResolved: o
                    }, n) : n, this)),
                    e
                }
            }, {
                key: "resolve",
                value: function(e) {
                    var t, n, o, r, i, s = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" == typeof e && (e = [e]),
                    e.forEach((function(e) {
                        if (!s.isValidLookup(t)) {
                            var c = s.extractFromKey(e, a)
                              , l = c.key;
                            n = l;
                            var u = c.namespaces;
                            s.options.fallbackNS && (u = u.concat(s.options.fallbackNS));
                            var p = void 0 !== a.count && "string" != typeof a.count
                              , d = p && !a.ordinal && 0 === a.count && s.pluralResolver.shouldUseIntlApi()
                              , h = void 0 !== a.context && ("string" == typeof a.context || "number" == typeof a.context) && "" !== a.context
                              , f = a.lngs ? a.lngs : s.languageUtils.toResolveHierarchy(a.lng || s.language, a.fallbackLng);
                            u.forEach((function(e) {
                                s.isValidLookup(t) || (i = e,
                                !G["".concat(f[0], "-").concat(e)] && s.utils && s.utils.hasLoadedNamespace && !s.utils.hasLoadedNamespace(i) && (G["".concat(f[0], "-").concat(e)] = !0,
                                s.logger.warn('key "'.concat(n, '" for languages "').concat(f.join(", "), '" won\'t get resolved as namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                                f.forEach((function(n) {
                                    if (!s.isValidLookup(t)) {
                                        r = n;
                                        var i, c = [l];
                                        if (s.i18nFormat && s.i18nFormat.addLookupKeys)
                                            s.i18nFormat.addLookupKeys(c, l, n, e, a);
                                        else {
                                            var u;
                                            p && (u = s.pluralResolver.getSuffix(n, a.count, a));
                                            var f = "".concat(s.options.pluralSeparator, "zero");
                                            if (p && (c.push(l + u),
                                            d && c.push(l + f)),
                                            h) {
                                                var m = "".concat(l).concat(s.options.contextSeparator).concat(a.context);
                                                c.push(m),
                                                p && (c.push(m + u),
                                                d && c.push(m + f))
                                            }
                                        }
                                        for (; i = c.pop(); )
                                            s.isValidLookup(t) || (o = i,
                                            t = s.getResource(n, e, i, a))
                                    }
                                }
                                )))
                            }
                            ))
                        }
                    }
                    )),
                    {
                        res: t,
                        usedKey: n,
                        exactUsedKey: o,
                        usedLng: r,
                        usedNS: i
                    }
                }
            }, {
                key: "isValidLookup",
                value: function(e) {
                    return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, o) : this.resourceStore.getResource(e, t, n, o)
                }
            }], [{
                key: "hasDefaultValue",
                value: function(e) {
                    var t = "defaultValue";
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n])
                            return !0;
                    return !1
                }
            }]),
            n
        }(C);
        function Y(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        var X = function() {
            function e(t) {
                u(this, e),
                this.options = t,
                this.supportedLngs = this.options.supportedLngs || !1,
                this.logger = j.create("languageUtils")
            }
            return d(e, [{
                key: "getScriptPartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0)
                        return null;
                    var t = e.split("-");
                    return 2 === t.length ? null : (t.pop(),
                    "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                }
            }, {
                key: "getLanguagePartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0)
                        return e;
                    var t = e.split("-");
                    return this.formatLanguageCode(t[0])
                }
            }, {
                key: "formatLanguageCode",
                value: function(e) {
                    if ("string" == typeof e && e.indexOf("-") > -1) {
                        var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
                          , n = e.split("-");
                        return this.options.lowerCaseLng ? n = n.map((function(e) {
                            return e.toLowerCase()
                        }
                        )) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                        n[1] = n[1].toUpperCase(),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Y(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                        2 === n[1].length && (n[1] = n[1].toUpperCase()),
                        "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Y(n[1].toLowerCase())),
                        t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Y(n[2].toLowerCase()))),
                        n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
            }, {
                key: "isSupportedCode",
                value: function(e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                }
            }, {
                key: "getBestMatchFromCodes",
                value: function(e) {
                    var t, n = this;
                    return e ? (e.forEach((function(e) {
                        if (!t) {
                            var o = n.formatLanguageCode(e);
                            n.options.supportedLngs && !n.isSupportedCode(o) || (t = o)
                        }
                    }
                    )),
                    !t && this.options.supportedLngs && e.forEach((function(e) {
                        if (!t) {
                            var o = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(o))
                                return t = o;
                            t = n.options.supportedLngs.find((function(e) {
                                if (0 === e.indexOf(o))
                                    return e
                            }
                            ))
                        }
                    }
                    )),
                    t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                    t) : null
                }
            }, {
                key: "getFallbackCodes",
                value: function(e, t) {
                    if (!e)
                        return [];
                    if ("function" == typeof e && (e = e(t)),
                    "string" == typeof e && (e = [e]),
                    "[object Array]" === Object.prototype.toString.apply(e))
                        return e;
                    if (!t)
                        return e.default || [];
                    var n = e[t];
                    return n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                }
            }, {
                key: "toResolveHierarchy",
                value: function(e, t) {
                    var n = this
                      , o = this.getFallbackCodes(t || this.options.fallbackLng || [], e)
                      , r = []
                      , i = function(e) {
                        e && (n.isSupportedCode(e) ? r.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                    };
                    return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)),
                    "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)),
                    "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" == typeof e && i(this.formatLanguageCode(e)),
                    o.forEach((function(e) {
                        r.indexOf(e) < 0 && i(n.formatLanguageCode(e))
                    }
                    )),
                    r
                }
            }]),
            e
        }()
          , ee = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
            nr: [1, 2],
            fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
            nr: [1, 2],
            fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
            nr: [1],
            fc: 3
        }, {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4
        }, {
            lngs: ["ar"],
            nr: [0, 1, 2, 3, 11, 100],
            fc: 5
        }, {
            lngs: ["cs", "sk"],
            nr: [1, 2, 5],
            fc: 6
        }, {
            lngs: ["csb", "pl"],
            nr: [1, 2, 5],
            fc: 7
        }, {
            lngs: ["cy"],
            nr: [1, 2, 3, 8],
            fc: 8
        }, {
            lngs: ["fr"],
            nr: [1, 2],
            fc: 9
        }, {
            lngs: ["ga"],
            nr: [1, 2, 3, 7, 11],
            fc: 10
        }, {
            lngs: ["gd"],
            nr: [1, 2, 3, 20],
            fc: 11
        }, {
            lngs: ["is"],
            nr: [1, 2],
            fc: 12
        }, {
            lngs: ["jv"],
            nr: [0, 1],
            fc: 13
        }, {
            lngs: ["kw"],
            nr: [1, 2, 3, 4],
            fc: 14
        }, {
            lngs: ["lt"],
            nr: [1, 2, 10],
            fc: 15
        }, {
            lngs: ["lv"],
            nr: [1, 2, 0],
            fc: 16
        }, {
            lngs: ["mk"],
            nr: [1, 2],
            fc: 17
        }, {
            lngs: ["mnk"],
            nr: [0, 1, 2],
            fc: 18
        }, {
            lngs: ["mt"],
            nr: [1, 2, 11, 20],
            fc: 19
        }, {
            lngs: ["or"],
            nr: [2, 1],
            fc: 2
        }, {
            lngs: ["ro"],
            nr: [1, 2, 20],
            fc: 20
        }, {
            lngs: ["sl"],
            nr: [5, 1, 2, 3],
            fc: 21
        }, {
            lngs: ["he", "iw"],
            nr: [1, 2, 20, 21],
            fc: 22
        }]
          , te = {
            1: function(e) {
                return Number(e > 1)
            },
            2: function(e) {
                return Number(1 != e)
            },
            3: function(e) {
                return 0
            },
            4: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            5: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
            },
            6: function(e) {
                return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
            },
            7: function(e) {
                return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            8: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
            },
            9: function(e) {
                return Number(e >= 2)
            },
            10: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
            },
            11: function(e) {
                return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
            },
            12: function(e) {
                return Number(e % 10 != 1 || e % 100 == 11)
            },
            13: function(e) {
                return Number(0 !== e)
            },
            14: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
            },
            15: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            16: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
            },
            17: function(e) {
                return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
            },
            18: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2)
            },
            19: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
            },
            20: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
            },
            21: function(e) {
                return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
            },
            22: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
            }
        }
          , ne = ["v1", "v2", "v3"]
          , oe = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        };
        function re() {
            var e = {};
            return ee.forEach((function(t) {
                t.lngs.forEach((function(n) {
                    e[n] = {
                        numbers: t.nr,
                        plurals: te[t.fc]
                    }
                }
                ))
            }
            )),
            e
        }
        var ie = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                u(this, e),
                this.languageUtils = t,
                this.options = n,
                this.logger = j.create("pluralResolver"),
                this.options.compatibilityJSON && "v4" !== this.options.compatibilityJSON || "undefined" != typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3",
                this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
                this.rules = re()
            }
            return d(e, [{
                key: "addRule",
                value: function(e, t) {
                    this.rules[e] = t
                }
            }, {
                key: "getRule",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.shouldUseIntlApi())
                        try {
                            return new Intl.PluralRules(e,{
                                type: t.ordinal ? "ordinal" : "cardinal"
                            })
                        } catch (n) {
                            return
                        }
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
            }, {
                key: "needsPlural",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = this.getRule(e, t);
                    return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                }
            }, {
                key: "getPluralFormsOfKey",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.getSuffixes(e, n).map((function(e) {
                        return "".concat(t).concat(e)
                    }
                    ))
                }
            }, {
                key: "getSuffixes",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , o = this.getRule(e, n);
                    return o ? this.shouldUseIntlApi() ? o.resolvedOptions().pluralCategories.sort((function(e, t) {
                        return oe[e] - oe[t]
                    }
                    )).map((function(e) {
                        return "".concat(t.options.prepend).concat(e)
                    }
                    )) : o.numbers.map((function(o) {
                        return t.getSuffix(e, o, n)
                    }
                    )) : []
                }
            }, {
                key: "getSuffix",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , o = this.getRule(e, n);
                    return o ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(o.select(t)) : this.getSuffixRetroCompatible(o, t) : (this.logger.warn("no plural rule found for: ".concat(e)),
                    "")
                }
            }, {
                key: "getSuffixRetroCompatible",
                value: function(e, t) {
                    var n = this
                      , o = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t))
                      , r = e.numbers[o];
                    this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = ""));
                    var i = function() {
                        return n.options.prepend && r.toString() ? n.options.prepend + r.toString() : r.toString()
                    };
                    return "v1" === this.options.compatibilityJSON ? 1 === r ? "" : "number" == typeof r ? "_plural_".concat(r.toString()) : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? i() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
                }
            }, {
                key: "shouldUseIntlApi",
                value: function() {
                    return !ne.includes(this.options.compatibilityJSON)
                }
            }]),
            e
        }();
        function se(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function ae(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? se(Object(n), !0).forEach((function(t) {
                    y(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var ce = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, e),
                this.logger = j.create("interpolator"),
                this.options = t,
                this.format = t.interpolation && t.interpolation.format || function(e) {
                    return e
                }
                ,
                this.init(t)
            }
            return d(e, [{
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    var t = e.interpolation;
                    this.escape = void 0 !== t.escape ? t.escape : F,
                    this.escapeValue = void 0 === t.escapeValue || t.escapeValue,
                    this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape,
                    this.prefix = t.prefix ? A(t.prefix) : t.prefixEscaped || "{{",
                    this.suffix = t.suffix ? A(t.suffix) : t.suffixEscaped || "}}",
                    this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",",
                    this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-",
                    this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "",
                    this.nestingPrefix = t.nestingPrefix ? A(t.nestingPrefix) : t.nestingPrefixEscaped || A("$t("),
                    this.nestingSuffix = t.nestingSuffix ? A(t.nestingSuffix) : t.nestingSuffixEscaped || A(")"),
                    this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",",
                    this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3,
                    this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat,
                    this.resetRegExp()
                }
            }, {
                key: "reset",
                value: function() {
                    this.options && this.init(this.options)
                }
            }, {
                key: "resetRegExp",
                value: function() {
                    var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                    this.regexp = new RegExp(e,"g");
                    var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                    this.regexpUnescape = new RegExp(t,"g");
                    var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                    this.nestingRegexp = new RegExp(n,"g")
                }
            }, {
                key: "interpolate",
                value: function(e, t, n, o) {
                    var r, i, s, a = this, c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
                    function l(e) {
                        return e.replace(/\$/g, "$$$$")
                    }
                    var u = function(e) {
                        if (e.indexOf(a.formatSeparator) < 0) {
                            var r = _(t, c, e);
                            return a.alwaysFormat ? a.format(r, void 0, n, ae(ae(ae({}, o), t), {}, {
                                interpolationkey: e
                            })) : r
                        }
                        var i = e.split(a.formatSeparator)
                          , s = i.shift().trim()
                          , l = i.join(a.formatSeparator).trim();
                        return a.format(_(t, c, s), l, n, ae(ae(ae({}, o), t), {}, {
                            interpolationkey: s
                        }))
                    };
                    this.resetRegExp();
                    var p = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler
                      , d = o && o.interpolation && void 0 !== o.interpolation.skipOnVariables ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: function(e) {
                            return l(e)
                        }
                    }, {
                        regex: this.regexp,
                        safeValue: function(e) {
                            return a.escapeValue ? l(a.escape(e)) : l(e)
                        }
                    }].forEach((function(t) {
                        for (s = 0; r = t.regex.exec(e); ) {
                            var n = r[1].trim();
                            if (void 0 === (i = u(n)))
                                if ("function" == typeof p) {
                                    var c = p(e, r, o);
                                    i = "string" == typeof c ? c : ""
                                } else if (o && o.hasOwnProperty(n))
                                    i = "";
                                else {
                                    if (d) {
                                        i = r[0];
                                        continue
                                    }
                                    a.logger.warn("missed to pass in variable ".concat(n, " for interpolating ").concat(e)),
                                    i = ""
                                }
                            else
                                "string" == typeof i || a.useRawValueToEscape || (i = E(i));
                            var l = t.safeValue(i);
                            if (e = e.replace(r[0], l),
                            d ? (t.regex.lastIndex += i.length,
                            t.regex.lastIndex -= r[0].length) : t.regex.lastIndex = 0,
                            ++s >= a.maxReplaces)
                                break
                        }
                    }
                    )),
                    e
                }
            }, {
                key: "nest",
                value: function(e, t) {
                    var n, o, r = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = ae({}, i);
                    function a(e, t) {
                        var n = this.nestingOptionsSeparator;
                        if (e.indexOf(n) < 0)
                            return e;
                        var o = e.split(new RegExp("".concat(n, "[ ]*{")))
                          , r = "{".concat(o[1]);
                        e = o[0];
                        var i = (r = this.interpolate(r, s)).match(/'/g)
                          , a = r.match(/"/g);
                        (i && i.length % 2 == 0 && !a || a.length % 2 != 0) && (r = r.replace(/'/g, '"'));
                        try {
                            s = JSON.parse(r),
                            t && (s = ae(ae({}, t), s))
                        } catch (c) {
                            return this.logger.warn("failed parsing options string in nesting for key ".concat(e), c),
                            "".concat(e).concat(n).concat(r)
                        }
                        return delete s.defaultValue,
                        e
                    }
                    for (s.applyPostProcessor = !1,
                    delete s.defaultValue; n = this.nestingRegexp.exec(e); ) {
                        var c = []
                          , l = !1;
                        if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                            var u = n[1].split(this.formatSeparator).map((function(e) {
                                return e.trim()
                            }
                            ));
                            n[1] = u.shift(),
                            c = u,
                            l = !0
                        }
                        if ((o = t(a.call(this, n[1].trim(), s), s)) && n[0] === e && "string" != typeof o)
                            return o;
                        "string" != typeof o && (o = E(o)),
                        o || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)),
                        o = ""),
                        l && (o = c.reduce((function(e, t) {
                            return r.format(e, t, i.lng, ae(ae({}, i), {}, {
                                interpolationkey: n[1].trim()
                            }))
                        }
                        ), o.trim())),
                        e = e.replace(n[0], o),
                        this.regexp.lastIndex = 0
                    }
                    return e
                }
            }]),
            e
        }();
        function le(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function ue(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? le(Object(n), !0).forEach((function(t) {
                    y(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var pe = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, e),
                this.logger = j.create("formatter"),
                this.options = t,
                this.formats = {
                    number: function(e, t, n) {
                        return new Intl.NumberFormat(t,n).format(e)
                    },
                    currency: function(e, t, n) {
                        return new Intl.NumberFormat(t,ue(ue({}, n), {}, {
                            style: "currency"
                        })).format(e)
                    },
                    datetime: function(e, t, n) {
                        return new Intl.DateTimeFormat(t,ue({}, n)).format(e)
                    },
                    relativetime: function(e, t, n) {
                        return new Intl.RelativeTimeFormat(t,ue({}, n)).format(e, n.range || "day")
                    },
                    list: function(e, t, n) {
                        return new Intl.ListFormat(t,ue({}, n)).format(e)
                    }
                },
                this.init(t)
            }
            return d(e, [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    }
                      , n = t.interpolation;
                    this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
                }
            }, {
                key: "add",
                value: function(e, t) {
                    this.formats[e.toLowerCase().trim()] = t
                }
            }, {
                key: "format",
                value: function(e, t, n, o) {
                    var r = this;
                    return t.split(this.formatSeparator).reduce((function(e, t) {
                        var i = function(e) {
                            var t = e.toLowerCase().trim()
                              , n = {};
                            if (e.indexOf("(") > -1) {
                                var o = e.split("(");
                                t = o[0].toLowerCase().trim();
                                var r = o[1].substring(0, o[1].length - 1);
                                "currency" === t && r.indexOf(":") < 0 ? n.currency || (n.currency = r.trim()) : "relativetime" === t && r.indexOf(":") < 0 ? n.range || (n.range = r.trim()) : r.split(";").forEach((function(e) {
                                    if (e) {
                                        var t = x(e.split(":"))
                                          , o = t[0]
                                          , r = t.slice(1).join(":").trim().replace(/^'+|'+$/g, "");
                                        n[o.trim()] || (n[o.trim()] = r),
                                        "false" === r && (n[o.trim()] = !1),
                                        "true" === r && (n[o.trim()] = !0),
                                        isNaN(r) || (n[o.trim()] = parseInt(r, 10))
                                    }
                                }
                                ))
                            }
                            return {
                                formatName: t,
                                formatOptions: n
                            }
                        }(t)
                          , s = i.formatName
                          , a = i.formatOptions;
                        if (r.formats[s]) {
                            var c = e;
                            try {
                                var l = o && o.formatParams && o.formatParams[o.interpolationkey] || {}
                                  , u = l.locale || l.lng || o.locale || o.lng || n;
                                c = r.formats[s](e, u, ue(ue(ue({}, a), o), l))
                            } catch (p) {
                                r.logger.warn(p)
                            }
                            return c
                        }
                        return r.logger.warn("there was no format function for ".concat(s)),
                        e
                    }
                    ), e)
                }
            }]),
            e
        }();
        function de(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function he(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? de(Object(n), !0).forEach((function(t) {
                    y(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function fe(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, o = v(e);
                if (t) {
                    var r = v(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return g(this, n)
            }
        }
        var me = function(e) {
            m(n, e);
            var t = fe(n);
            function n(e, o, r) {
                var i, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return u(this, n),
                i = t.call(this),
                U && C.call((0,
                h.Z)(i)),
                i.backend = e,
                i.store = o,
                i.services = r,
                i.languageUtils = r.languageUtils,
                i.options = s,
                i.logger = j.create("backendConnector"),
                i.waitingReads = [],
                i.maxParallelReads = s.maxParallelReads || 10,
                i.readingCalls = 0,
                i.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5,
                i.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350,
                i.state = {},
                i.queue = [],
                i.backend && i.backend.init && i.backend.init(r, s.backend, s),
                i
            }
            return d(n, [{
                key: "queueLoad",
                value: function(e, t, n, o) {
                    var r = this
                      , i = {}
                      , s = {}
                      , a = {}
                      , c = {};
                    return e.forEach((function(e) {
                        var o = !0;
                        t.forEach((function(t) {
                            var a = "".concat(e, "|").concat(t);
                            !n.reload && r.store.hasResourceBundle(e, t) ? r.state[a] = 2 : r.state[a] < 0 || (1 === r.state[a] ? void 0 === s[a] && (s[a] = !0) : (r.state[a] = 1,
                            o = !1,
                            void 0 === s[a] && (s[a] = !0),
                            void 0 === i[a] && (i[a] = !0),
                            void 0 === c[t] && (c[t] = !0)))
                        }
                        )),
                        o || (a[e] = !0)
                    }
                    )),
                    (Object.keys(i).length || Object.keys(s).length) && this.queue.push({
                        pending: s,
                        pendingCount: Object.keys(s).length,
                        loaded: {},
                        errors: [],
                        callback: o
                    }),
                    {
                        toLoad: Object.keys(i),
                        pending: Object.keys(s),
                        toLoadLanguages: Object.keys(a),
                        toLoadNamespaces: Object.keys(c)
                    }
                }
            }, {
                key: "loaded",
                value: function(e, t, n) {
                    var o = e.split("|")
                      , r = o[0]
                      , i = o[1];
                    t && this.emit("failedLoading", r, i, t),
                    n && this.store.addResourceBundle(r, i, n),
                    this.state[e] = t ? -1 : 2;
                    var s = {};
                    this.queue.forEach((function(n) {
                        var o, a, c, l, u, p;
                        o = n.loaded,
                        a = i,
                        l = D(o, [r], Object),
                        u = l.obj,
                        p = l.k,
                        u[p] = u[p] || [],
                        c && (u[p] = u[p].concat(a)),
                        c || u[p].push(a),
                        function(e, t) {
                            void 0 !== e.pending[t] && (delete e.pending[t],
                            e.pendingCount--)
                        }(n, e),
                        t && n.errors.push(t),
                        0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach((function(e) {
                            s[e] || (s[e] = {});
                            var t = n.loaded[e];
                            t.length && t.forEach((function(t) {
                                void 0 === s[e][t] && (s[e][t] = !0)
                            }
                            ))
                        }
                        )),
                        n.done = !0,
                        n.errors.length ? n.callback(n.errors) : n.callback())
                    }
                    )),
                    this.emit("loaded", s),
                    this.queue = this.queue.filter((function(e) {
                        return !e.done
                    }
                    ))
                }
            }, {
                key: "read",
                value: function(e, t, n) {
                    var o = this
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout
                      , s = arguments.length > 5 ? arguments[5] : void 0;
                    return e.length ? this.readingCalls >= this.maxParallelReads ? void this.waitingReads.push({
                        lng: e,
                        ns: t,
                        fcName: n,
                        tried: r,
                        wait: i,
                        callback: s
                    }) : (this.readingCalls++,
                    this.backend[n](e, t, (function(a, c) {
                        if (o.readingCalls--,
                        o.waitingReads.length > 0) {
                            var l = o.waitingReads.shift();
                            o.read(l.lng, l.ns, l.fcName, l.tried, l.wait, l.callback)
                        }
                        a && c && r < o.maxRetries ? setTimeout((function() {
                            o.read.call(o, e, t, n, r + 1, 2 * i, s)
                        }
                        ), i) : s(a, c)
                    }
                    ))) : s(null, {})
                }
            }, {
                key: "prepareLoading",
                value: function(e, t) {
                    var n = this
                      , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , r = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend)
                        return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                        r && r();
                    "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)),
                    "string" == typeof t && (t = [t]);
                    var i = this.queueLoad(e, t, o, r);
                    if (!i.toLoad.length)
                        return i.pending.length || r(),
                        null;
                    i.toLoad.forEach((function(e) {
                        n.loadOne(e)
                    }
                    ))
                }
            }, {
                key: "load",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {}, n)
                }
            }, {
                key: "reload",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, n)
                }
            }, {
                key: "loadOne",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , o = e.split("|")
                      , r = o[0]
                      , i = o[1];
                    this.read(r, i, "read", void 0, void 0, (function(o, s) {
                        o && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(r, " failed"), o),
                        !o && s && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(r), s),
                        t.loaded(e, o, s)
                    }
                    ))
                }
            }, {
                key: "saveMissing",
                value: function(e, t, n, o, r) {
                    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                    this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, o, null, he(he({}, i), {}, {
                        isUpdate: r
                    })),
                    e && e[0] && this.store.addResource(e[0], t, n, o))
                }
            }]),
            n
        }(C);
        function ge() {
            return {
                debug: !1,
                initImmediate: !0,
                ns: ["translation"],
                defaultNS: ["translation"],
                fallbackLng: ["dev"],
                fallbackNS: !1,
                supportedLngs: !1,
                nonExplicitSupportedLngs: !1,
                load: "all",
                preload: !1,
                simplifyPluralSuffix: !0,
                keySeparator: ".",
                nsSeparator: ":",
                pluralSeparator: "_",
                contextSeparator: "_",
                partialBundledLanguages: !1,
                saveMissing: !1,
                updateMissing: !1,
                saveMissingTo: "fallback",
                saveMissingPlurals: !0,
                missingKeyHandler: !1,
                missingInterpolationHandler: !1,
                postProcess: !1,
                postProcessPassResolved: !1,
                returnNull: !0,
                returnEmptyString: !0,
                returnObjects: !1,
                joinArrays: !1,
                returnedObjectHandler: !1,
                parseMissingKeyHandler: !1,
                appendNamespaceToMissingKey: !1,
                appendNamespaceToCIMode: !1,
                overloadTranslationOptionHandler: function(e) {
                    var t = {};
                    if ("object" === l(e[1]) && (t = e[1]),
                    "string" == typeof e[1] && (t.defaultValue = e[1]),
                    "string" == typeof e[2] && (t.tDescription = e[2]),
                    "object" === l(e[2]) || "object" === l(e[3])) {
                        var n = e[3] || e[2];
                        Object.keys(n).forEach((function(e) {
                            t[e] = n[e]
                        }
                        ))
                    }
                    return t
                },
                interpolation: {
                    escapeValue: !0,
                    format: function(e, t, n, o) {
                        return e
                    },
                    prefix: "{{",
                    suffix: "}}",
                    formatSeparator: ",",
                    unescapePrefix: "-",
                    nestingPrefix: "$t(",
                    nestingSuffix: ")",
                    nestingOptionsSeparator: ",",
                    maxReplaces: 1e3,
                    skipOnVariables: !0
                }
            }
        }
        function ve(e) {
            return "string" == typeof e.ns && (e.ns = [e.ns]),
            "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
            "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
            e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
            e
        }
        function ye(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function be(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ye(Object(n), !0).forEach((function(t) {
                    y(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function we(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, o = v(e);
                if (t) {
                    var r = v(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return g(this, n)
            }
        }
        function xe() {}
        function ke(e) {
            Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((function(t) {
                "function" == typeof e[t] && (e[t] = e[t].bind(e))
            }
            ))
        }
        var Pe = function(e) {
            m(n, e);
            var t = we(n);
            function n() {
                var e, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
                if (u(this, n),
                e = t.call(this),
                U && C.call((0,
                h.Z)(e)),
                e.options = ve(o),
                e.services = {},
                e.logger = j,
                e.modules = {
                    external: []
                },
                ke((0,
                h.Z)(e)),
                r && !e.isInitialized && !o.isClone) {
                    if (!e.options.initImmediate)
                        return e.init(o, r),
                        g(e, (0,
                        h.Z)(e));
                    setTimeout((function() {
                        e.init(o, r)
                    }
                    ), 0)
                }
                return e
            }
            return d(n, [{
                key: "init",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = arguments.length > 1 ? arguments[1] : void 0;
                    "function" == typeof t && (n = t,
                    t = {}),
                    !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" == typeof t.ns ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
                    var o = ge();
                    function r(e) {
                        return e ? "function" == typeof e ? new e : e : null
                    }
                    if (this.options = be(be(be({}, o), this.options), ve(t)),
                    "v1" !== this.options.compatibilityAPI && (this.options.interpolation = be(be({}, o.interpolation), this.options.interpolation)),
                    void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator),
                    void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator),
                    !this.options.isClone) {
                        var i;
                        this.modules.logger ? j.init(r(this.modules.logger), this.options) : j.init(null, this.options),
                        this.modules.formatter ? i = this.modules.formatter : "undefined" != typeof Intl && (i = pe);
                        var s = new X(this.options);
                        this.store = new z(this.options.resources,this.options);
                        var a = this.services;
                        a.logger = j,
                        a.resourceStore = this.store,
                        a.languageUtils = s,
                        a.pluralResolver = new ie(s,{
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }),
                        !i || this.options.interpolation.format && this.options.interpolation.format !== o.interpolation.format || (a.formatter = r(i),
                        a.formatter.init(a, this.options),
                        this.options.interpolation.format = a.formatter.format.bind(a.formatter)),
                        a.interpolator = new ce(this.options),
                        a.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        },
                        a.backendConnector = new me(r(this.modules.backend),a.resourceStore,a,this.options),
                        a.backendConnector.on("*", (function(t) {
                            for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                                o[r - 1] = arguments[r];
                            e.emit.apply(e, [t].concat(o))
                        }
                        )),
                        this.modules.languageDetector && (a.languageDetector = r(this.modules.languageDetector),
                        a.languageDetector.init(a, this.options.detection, this.options)),
                        this.modules.i18nFormat && (a.i18nFormat = r(this.modules.i18nFormat),
                        a.i18nFormat.init && a.i18nFormat.init(this)),
                        this.translator = new Q(this.services,this.options),
                        this.translator.on("*", (function(t) {
                            for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                                o[r - 1] = arguments[r];
                            e.emit.apply(e, [t].concat(o))
                        }
                        )),
                        this.modules.external.forEach((function(t) {
                            t.init && t.init(e)
                        }
                        ))
                    }
                    if (this.format = this.options.interpolation.format,
                    n || (n = xe),
                    this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                        var c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        c.length > 0 && "dev" !== c[0] && (this.options.lng = c[0])
                    }
                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                    var l = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                    l.forEach((function(t) {
                        e[t] = function() {
                            var n;
                            return (n = e.store)[t].apply(n, arguments)
                        }
                    }
                    ));
                    var u = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                    u.forEach((function(t) {
                        e[t] = function() {
                            var n;
                            return (n = e.store)[t].apply(n, arguments),
                            e
                        }
                    }
                    ));
                    var p = R()
                      , d = function() {
                        var t = function(t, o) {
                            e.isInitialized && !e.initializedStoreOnce && e.logger.warn("init: i18next is already initialized. You should call init just once!"),
                            e.isInitialized = !0,
                            e.options.isClone || e.logger.log("initialized", e.options),
                            e.emit("initialized", e.options),
                            p.resolve(o),
                            n(t, o)
                        };
                        if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized)
                            return t(null, e.t.bind(e));
                        e.changeLanguage(e.options.lng, t)
                    };
                    return this.options.resources || !this.options.initImmediate ? d() : setTimeout(d, 0),
                    p
                }
            }, {
                key: "loadResources",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xe
                      , o = n
                      , r = "string" == typeof e ? e : this.language;
                    if ("function" == typeof e && (o = e),
                    !this.options.resources || this.options.partialBundledLanguages) {
                        if (r && "cimode" === r.toLowerCase())
                            return o();
                        var i = []
                          , s = function(e) {
                            e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
                                i.indexOf(e) < 0 && i.push(e)
                            }
                            ))
                        };
                        if (r)
                            s(r);
                        else {
                            var a = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                            a.forEach((function(e) {
                                return s(e)
                            }
                            ))
                        }
                        this.options.preload && this.options.preload.forEach((function(e) {
                            return s(e)
                        }
                        )),
                        this.services.backendConnector.load(i, this.options.ns, (function(e) {
                            e || t.resolvedLanguage || !t.language || t.setResolvedLanguage(t.language),
                            o(e)
                        }
                        ))
                    } else
                        o(null)
                }
            }, {
                key: "reloadResources",
                value: function(e, t, n) {
                    var o = R();
                    return e || (e = this.languages),
                    t || (t = this.options.ns),
                    n || (n = xe),
                    this.services.backendConnector.reload(e, t, (function(e) {
                        o.resolve(),
                        n(e)
                    }
                    )),
                    o
                }
            }, {
                key: "use",
                value: function(e) {
                    if (!e)
                        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!e.type)
                        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === e.type && (this.modules.backend = e),
                    ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e),
                    "languageDetector" === e.type && (this.modules.languageDetector = e),
                    "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                    "postProcessor" === e.type && Z.addPostProcessor(e),
                    "formatter" === e.type && (this.modules.formatter = e),
                    "3rdParty" === e.type && this.modules.external.push(e),
                    this
                }
            }, {
                key: "setResolvedLanguage",
                value: function(e) {
                    if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                        for (var t = 0; t < this.languages.length; t++) {
                            var n = this.languages[t];
                            if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
                                this.resolvedLanguage = n;
                                break
                            }
                        }
                }
            }, {
                key: "changeLanguage",
                value: function(e, t) {
                    var n = this;
                    this.isLanguageChangingTo = e;
                    var o = R();
                    this.emit("languageChanging", e);
                    var r = function(e) {
                        n.language = e,
                        n.languages = n.services.languageUtils.toResolveHierarchy(e),
                        n.resolvedLanguage = void 0,
                        n.setResolvedLanguage(e)
                    }
                      , i = function(i) {
                        e || i || !n.services.languageDetector || (i = []);
                        var s = "string" == typeof i ? i : n.services.languageUtils.getBestMatchFromCodes(i);
                        s && (n.language || r(s),
                        n.translator.language || n.translator.changeLanguage(s),
                        n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(s)),
                        n.loadResources(s, (function(e) {
                            !function(e, i) {
                                i ? (r(i),
                                n.translator.changeLanguage(i),
                                n.isLanguageChangingTo = void 0,
                                n.emit("languageChanged", i),
                                n.logger.log("languageChanged", i)) : n.isLanguageChangingTo = void 0,
                                o.resolve((function() {
                                    return n.t.apply(n, arguments)
                                }
                                )),
                                t && t(e, (function() {
                                    return n.t.apply(n, arguments)
                                }
                                ))
                            }(e, s)
                        }
                        ))
                    };
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(i) : i(e) : i(this.services.languageDetector.detect()),
                    o
                }
            }, {
                key: "getFixedT",
                value: function(e, t, n) {
                    var o = this
                      , r = function e(t, r) {
                        var i;
                        if ("object" !== l(r)) {
                            for (var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++)
                                a[c - 2] = arguments[c];
                            i = o.options.overloadTranslationOptionHandler([t, r].concat(a))
                        } else
                            i = be({}, r);
                        i.lng = i.lng || e.lng,
                        i.lngs = i.lngs || e.lngs,
                        i.ns = i.ns || e.ns,
                        i.keyPrefix = i.keyPrefix || n || e.keyPrefix;
                        var u = o.options.keySeparator || "."
                          , p = i.keyPrefix ? "".concat(i.keyPrefix).concat(u).concat(t) : t;
                        return o.t(p, i)
                    };
                    return "string" == typeof e ? r.lng = e : r.lngs = e,
                    r.ns = t,
                    r.keyPrefix = n,
                    r
                }
            }, {
                key: "t",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).translate.apply(e, arguments)
                }
            }, {
                key: "exists",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).exists.apply(e, arguments)
                }
            }, {
                key: "setDefaultNamespace",
                value: function(e) {
                    this.options.defaultNS = e
                }
            }, {
                key: "hasLoadedNamespace",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized)
                        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
                        !1;
                    if (!this.languages || !this.languages.length)
                        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
                        !1;
                    var o = this.resolvedLanguage || this.languages[0]
                      , r = !!this.options && this.options.fallbackLng
                      , i = this.languages[this.languages.length - 1];
                    if ("cimode" === o.toLowerCase())
                        return !0;
                    var s = function(e, n) {
                        var o = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                        return -1 === o || 2 === o
                    };
                    if (n.precheck) {
                        var a = n.precheck(this, s);
                        if (void 0 !== a)
                            return a
                    }
                    return !!this.hasResourceBundle(o, e) || (!(this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages)) || !(!s(o, e) || r && !s(i, e)))
                }
            }, {
                key: "loadNamespaces",
                value: function(e, t) {
                    var n = this
                      , o = R();
                    return this.options.ns ? ("string" == typeof e && (e = [e]),
                    e.forEach((function(e) {
                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                    }
                    )),
                    this.loadResources((function(e) {
                        o.resolve(),
                        t && t(e)
                    }
                    )),
                    o) : (t && t(),
                    Promise.resolve())
                }
            }, {
                key: "loadLanguages",
                value: function(e, t) {
                    var n = R();
                    "string" == typeof e && (e = [e]);
                    var o = this.options.preload || []
                      , r = e.filter((function(e) {
                        return o.indexOf(e) < 0
                    }
                    ));
                    return r.length ? (this.options.preload = o.concat(r),
                    this.loadResources((function(e) {
                        n.resolve(),
                        t && t(e)
                    }
                    )),
                    n) : (t && t(),
                    Promise.resolve())
                }
            }, {
                key: "dir",
                value: function(e) {
                    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
                    !e)
                        return "rtl";
                    return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
                }
            }, {
                key: "cloneInstance",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xe
                      , r = be(be(be({}, this.options), t), {
                        isClone: !0
                    })
                      , i = new n(r);
                    void 0 === t.debug && void 0 === t.prefix || (i.logger = i.logger.clone(t));
                    var s = ["store", "services", "language"];
                    return s.forEach((function(t) {
                        i[t] = e[t]
                    }
                    )),
                    i.services = be({}, this.services),
                    i.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                    },
                    i.translator = new Q(i.services,i.options),
                    i.translator.on("*", (function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                            n[o - 1] = arguments[o];
                        i.emit.apply(i, [e].concat(n))
                    }
                    )),
                    i.init(r, o),
                    i.translator.options = i.options,
                    i.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                    },
                    i
                }
            }, {
                key: "toJSON",
                value: function() {
                    return {
                        options: this.options,
                        store: this.store,
                        language: this.language,
                        languages: this.languages,
                        resolvedLanguage: this.resolvedLanguage
                    }
                }
            }]),
            n
        }(C);
        y(Pe, "createInstance", (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0;
            return new Pe(e,t)
        }
        ));
        var Se = Pe.createInstance();
        Se.createInstance = Pe.createInstance;
        Se.createInstance,
        Se.init,
        Se.loadResources,
        Se.reloadResources,
        Se.use,
        Se.changeLanguage,
        Se.getFixedT,
        Se.t,
        Se.exists,
        Se.setDefaultNamespace,
        Se.hasLoadedNamespace,
        Se.loadNamespaces,
        Se.loadLanguages;
        var Oe = Se
          , je = JSON.parse('{"features":[" "],"desc":[" "]}')
          , Ce = JSON.parse('{"homeTitle":" ","description":" ","news":"< ","goToGitHub":" ","intro":["   "]}')
          , Re = JSON.parse('{"examples":" ","default":" ","sidePadding":"   ","multipleSlides":"   ","oneSlidePerMove":" ","omitEnd":" ","omitEndDesc":" ","focusCenter":" ","dragFree":" ","dragFreeSnap":"Drag Free Snap","customPagination":"Custom Pagination","sliderProgress":"Carousel Progress","verticalSlider":"Vertical Slider","verticalSliderDesc":"The vertical slider requires the <1>height</1> or <3>heightRatio</3> option to determine the slider height.","mouseWheel":"Mouse Wheel","mouseWheelDesc":"You\'ll need to set <1>waitForTransition</1> to <3>true</3> or provide the <5>wheelSleep</5> duration.","autoWidth":"Auto Width/Height","autoWidthDesc":"Each slide width is determined by its element width itself.","autoplay":"Autoplay","autoplayDesc":"You can add the progress bar and play/pause buttons by providing the extra HTML. Also, you can enable autoplay only when the slider is in the viewport by using the Intersection extension.","fadeTransition":"Fade Transition","fadeTransitionDesc":"The fade transition does not support multiple slides.","rightToLeft":"Right to Left","nestedSlider":"Nested Slider","breakpoints":"Breakpoints","breakpointsDesc":"You can update some options by the media query. Change the window size to see how it works.","addRemove":"Add/Remove","addRemoveDesc":"You can dynamically add/remove slides via API.","coverImage":"Cover Image","coverImageDesc":"Splide can set the image source inside each slide to the wrapper element as a background image. No need to crop images by an image editor.","lazyLoad":"Lazy Load","lazyLoadDesc":"Lazy Load defers loading images to reduce initial loading time and memory/bandwidth consumption. Check your browser development tool to see how it works.","thumbnails":"Thumbnails","thumbnailsDesc":"Splide sliders can be synchronized with one another. By utilizing this, you can make a gallery with thumbnails navigation.","autoScroll":"Auto Scroll","autoScrollDesc":"The AutoScroll extension continuously scrolls the slider (<1>AutoScroll extension</1> is required). This is compatible with the Intersection extension.","video":"Video","videoDesc":"The Video extension assigns HTML, YouTube and Vimeo videos to slides (<1>Video extension</1> is required). This is compatible with the Intersection extension.","grid":"Grid","gridDesc":"The Grid extension creates rows and cols in a slider (<1>Grid extension</1> is required).","urlHashNavigation":"URL Hash Navigation","urlHashNavigationDesc":"The URL Hash extension enables to sync the slider with the URL hash, and update the hash when the active slide changes (<1>URL Hash extension</1> is required)."}')
          , Ee = JSON.parse('{"options":{"heading":"Options","desc":"Splide takes a lot of options that make it very flexible. Easy to get the slider you want in a minute.","link":"View Options"},"tutorials":{"heading":"Tutorials","desc":"Tutorial documents help you to create a complex slider, such as a slider with thumbnail control.","link":"View Tutorials"},"apis":{"heading":"APIs","desc":"Splide provides some APIs and events that enable you to control the slider by script.","link":"View APIs"},"extension":{"heading":"Extension","desc":"Want to add more features to the slider? Let’s start creating your extension.","link":"View Extension"}}')
          , Le = {
            i18n: {}
        }
          , De = JSON.parse('{"mainDescription1":" ","mainDescription2":" ","carouselDesc1":" ","carouselDesc2":" ","carouselDesc3":" ","caveatsDesc1":" ","caveatsDesc2":" ","caveatsDesc3":"Also, three.js is kind of a large library (500kB+). It would worsen the Lighthouse score on your site.","termsContents1":"This package is provided based on the <1>MIT License</1>, but do not use it for distribution purpose. You may deploy \\"dist\\" files, including files built with them, to your server or repository for integrating Splide Shader Carousel into your project. You may freely use them for public, private, or commercial use, once you become a sponsor with the specified monthly tier below. However, you may not make other files public, such as source code, examples, documents etc., since it would counteract the sponsorware strategy.","termsContents2":"If you quit a sponsor, GitHub will remove you as a collaborator, but you may keep using those files as long as you like.","caveats1":"It only works in the fade type","caveats2":"It does not support IE","caveats3":"It is not compatible with some Splide options","sponsorDesc1":"Please read caveats and terms above. Thank you!","caveats":"Caveats","terms":"Terms","sponsor":"Be A Sponsor","sponsorButton":"Go to Sponsor Page"}')
          , Ne = JSON.parse('{"features":["開発にTypeScriptを採用","他のライブラリに非依存","29kB（gzipで12kB）と軽量","柔軟性と拡張性","400を超えるテストケースによるライブラリの保護","複数スライドに対応","CSSでのスライドまたはフェード遷移","Breakpointによるレスポンシブ対応","%やremなどの相対単位に対応","異なるサイズの画像を自動でクロップ可能","プログレスバーや再生・停止ボタンを持った自動再生に対応","右から左、上から下への方向に対応","マウスまたはスワイプによるドラッグ操作に対応","位置を固定しないフリードラッグモード","マウスホイールによるスライドの遷移","ネストしたスライダーに対応","遅延読み込み（Lazy Load）に対応","サムネイルスライダー","それぞれサイズが異なるスライドに対応","優れたアクセシビリティ","ライブリージョンを標準搭載","Internet Explorer 10での動作"],"desc":["Splideは柔軟性に富み、軽量かつアクセシビリティに優れたスライダーライブラリです。オプションを変更するだけで、複数枚表示、サムネイル表示、縦方向に移動するスライダーなど、ありとあらゆるスライダーを簡単に作成することができます。また、APIを使用したり、あるいはExtensionを作成したりすることで、独自の機能を持ったオリジナルのスライダーを構築することも可能です！"]}')
          , Te = JSON.parse('{"homeTitle":"Splide - アクセシビリティに配慮した軽量・高機能スライダー","description":"アクセシビリティに配慮した軽量・高機能スライダー。ほかのライブラリに依存せず、Lighthouseのエラーもありません。","news":"<0>Splide v4</0>をリリースしました！","goToGitHub":"GitHubページを開く","intro":["アクセシビリティに配慮した\\n軽量・高機能スライダー。","ほかのライブラリに依存せず、\\nLighthouseのエラーもありません。"],"download":"ダウンロード","getStarted":"はじめる","params":"引数","return":"返値","guides":"ユーザガイド","tutorials":"チュートリアル","extensions":"エクステンション","integration":"インテグレーション","components":"コンポーネント","code":"コード","preview":"プレビュー","home":"ホーム","version":"バージョン","versions":"バージョン","outdated":"v3用のドキュメントを参照しています","archives":"アーカイブ","filter":"絞り込む","clear":"クリア","search":"検索","searchDocuments":"ドキュメントを検索する","noResult":"一致するページは見つかりませんでした 😑","loadMore":"さらに読み込む","releaseNotes":"更新履歴","releaseNotesDesc":"Splideの更新履歴です。このページはGitHubから直接取得しているため、翻訳されません。"}')
          , _e = JSON.parse('{"examples":"サンプル","default":"デフォルト","sidePadding":"左右に余白","multipleSlides":"複数スライド","oneSlidePerMove":"1スライドずつ移動","omitEnd":"ページングなし","omitEndDesc":"v4.1.0以上から対応しています。","focusCenter":"中央揃え","dragFree":"フリードラッグ","dragFreeSnap":"フリードラッグ（スナップ）","customPagination":"カスタムページネーション","sliderProgress":"スライダーのプログレスバー","verticalSlider":"縦方向スライダー","verticalSliderDesc":"縦方向のスライダーを使用するには<1>height</1>または<3>heightRatio</3>オプションのいずれかを与える必要があります。","mouseWheel":"マウスホイール操作","mouseWheelDesc":"<1>waitForTransition</1>オプションを<3>true</3>にするか、<5>wheelSleep</5>を与える必要があることに注意してください。","autoWidth":"スライド幅・高さの自動認識","autoWidthDesc":"スライドエレメントそのものの幅、または高さがそのまま使用されます。","autoplay":"自動再生","autoplayDesc":"追加のHTMLを記述することで、プログレスバーによる進捗や、再生・停止ボタンを表示することができます。また、Intersectionエクステンションを利用すると、スライダーが画面内にあるときのみ自動再生を有効にすることもできます。","fadeTransition":"フェード効果","fadeTransitionDesc":"フェードモードは複数枚のスライドに対応していません。","rightToLeft":"右から左（RTL）","nestedSlider":"ネスト","breakpoints":"ブレークポイント","breakpointsDesc":"ブレークポイントを使うと、スライダーをウィンドウの幅に応じて更新することができます。","addRemove":"動的な追加・削除","addRemoveDesc":"APIを利用すると、スライドを動的に追加・削除することができます。","coverImage":"カバーによる自動クロップ","coverImageDesc":"カバーオプションを有効にすると、スライド内の画像は親要素の背景画像に設定されます。これにより画像編集ソフトなどを使わなくても、それぞれの素材を同じ大きさで表示することができるようになります。","lazyLoad":"遅延読み込み","lazyLoadDesc":"遅延読み込み（Lazy Load）を有効にすると、画像の読み込みを遅らせることで、読み込み時のロード時間を短縮することが可能です。ブラウザの開発ツール内にあるネットワークモニターで動作を確認してみてください。","thumbnails":"サムネイル","thumbnailsDesc":"Splideで作成されたスライダーは、お互いに動作を同期させることができます。この機能を利用すれば、サムネイルスライダーを簡単に作ることができます。","autoScroll":"自動スクロール","autoScrollDesc":"AutoScrollエクステンションを利用すると、スライダーを自動でスクロールすることができます(<1>AutoScroll Extension</1>が必要です)。この拡張機能は、Intersectionエクステンションに対応しています。","video":"動画","videoDesc":"Videoエクステンションを利用すると、各スライドにHTML、YouTube、あるいはVimeoの動画を割り当てることができます(<1>Video Extension</1>が必要です)。この拡張機能は、Intersectionエクステンションに対応しています。","grid":"グリッド","gridDesc":"Gridエクステンションを利用すると、各スライド内にグリッドを作成できるようになります(<1>Grid Extension</1>が必要です)。","urlHashNavigation":"ハッシュナビゲーション","urlHashNavigationDesc":"URL HashエクステンションはURLハッシュとスライダーと関連付け、スライダーが移動した際ハッシュも同時に更新するための拡張機能です(<1>URL Hash Extension</1>が必要です)。スライダーを移動し、ブラウザのURLを確認してみてください。"}')
          , Ie = JSON.parse('{"options":{"heading":"オプション","desc":"Splideにはたくさんのオプションが用意されています。オプションを調整するだけで、様々なスライダーを簡単に作成できます。","link":"オプションを確認する"},"tutorials":{"heading":"チュートリアル","desc":"チュートリアルでは、たとえばギャラリー、サムネイルなど、少し複雑なスライダーを作成する方法について解説しています。","link":"チュートリアルを読む"},"apis":{"heading":"API","desc":"Splideはスクリプトからスライダーを制御したり、新たに機能を追加したりするためのAPIやイベントを提供しています。","link":"APIを確認する"},"extension":{"heading":"エクステンション（拡張機能）","desc":"もし独自の機能をスライダーに追加したい場合は、エクステンションを作成して汎用的に実装することができます。","link":"エクステンションについて知る"}}')
          , Ae = JSON.parse('{"i18n":{"restart":"Restart","rewind":"Rewind {seektime} secs","play":"再生","pause":"一時停止","fastForward":"Forward {seektime} secs","seek":"シーク","played":"Played","buffered":"Buffered","currentTime":"時間","duration":"時間","volume":"音量","mute":"音声オフ","unmute":"音声オン","enableCaptions":"Enable captions","disableCaptions":"Disable captions","enterFullscreen":"Enter fullscreen","exitFullscreen":"Exit fullscreen","frameTitle":"Player for {title}","captions":"Captions","settings":"Settings","speed":"Speed","normal":"Normal","quality":"Quality","loop":"Loop","start":"Start","end":"End","all":"All","reset":"Reset","disabled":"Disabled","advertisement":"Ad"}}')
          , Me = JSON.parse('{"mainDescription1":"WebGLのシェーダを利用した、<1>目をみはるようなトランジション。</1>","mainDescription2":"スポンサー限定のレポジトリで公開中！","carouselDesc1":"Splide Shader Carouselは<1>three.js</1>ライブラリを使用してWebGLを操作しています。WebGLの採用によって、CSSでは再現できない、多彩で魅力的なトランジションエフェクトを実現することができます。","carouselDesc2":"次の図のように、Splide Shader Carouselはcanvasを通常のフェードスライダーの背面に配置し、各スライド内にある画像をメッシュのテクスチャに変換したうえで、お互いを同期させています。","carouselDesc3":"現段階では、テクスチャとして画像のみをサポートしていますが、将来的には動画もサポートする予定です。","caveatsDesc1":"SplideShaderCarouselクラスはSplideクラスを継承していますが、","caveatsDesc2":"サポートしていないオプションは次の通りです： type (fadeのみ)、perPage、perMove、clones、cloneStatus、focus、gap、padding、easingFunc、lazyLoad、cover。","caveatsDesc3":"また、three.js自体かなりサイズが大きいため（500kB+）、サイトのLighthouseスコアが下がるかもしれません。","termsContents1":"このパッケージは、<1>MITライセンス</1>を基本として公開されますが、再配布目的での使用はできません。\\"dist\\"ディレクトリ内にあるファイル、またはそれらからビルドされたファイルは、Splide Shader Carouselを使用者のプロジェクトに実装する目的で、サーバやレポジトリ上で公開することができます。これらのファイルは、以下のティアに定めるスポンサーになった時点から、個人、商用にかかわらず自由に使用できます。ただし、そのほかのファイル（たとえばソースコードや例、あるいはドキュメントなど）を公開することはできません。これは、スポンサー限定のレポジトリという特性上の規約です。","termsContents2":"なお、スポンサーをキャンセルすると、GitHubが自動的に解除手続きを行いますが、その時点でのパッケージはそのまま使用し続けて問題ありません。","caveats1":"フェードタイプのみサポートしています","caveats2":"IEをサポートしていません","caveats3":"Splideのオプションすべてをサポートしているわけではありません","sponsorDesc1":"上記の注意点と規約に必ず目を通してください。","caveats":"注意点","terms":"利用規約","sponsor":"スポンサーになる","sponsorButton":"スポンサーページへ"}');
        const Fe = Oe.createInstance();
        Fe.use(a.Db).init({
            ns: ["common", "about"],
            defaultNS: "common",
            resources: i,
            fallbackLng: "en",
            debug: !1,
            interpolation: {
                escapeValue: !1
            },
            keySeparator: !1,
            nsSeparator: !1,
            react: {
                useSuspense: !1
            }
        });
        var Ue = Fe;
        function He(e) {
            let {element: t, props: n} = e;
            return n.pageContext.language !== Ue.language && Ue.changeLanguage(n.pageContext.language),
            s.createElement(c, {
                i18n: Ue
            }, t)
        }
    },
    436: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            onClientEntry: function() {
                return c
            }
        });
        var o = n(1597)
          , r = n(3150)
          , i = n.n(r);
        const s = e=>"/" === e[0] ? e : `/${e}`
          , a = (e,t)=>n=>{
            if (window.___failedResources)
                return !0;
            if ((e=>0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)(n))
                return !0;
            if ((e=>e.defaultPrevented)(n))
                return !0;
            const r = (e=>{
                for (; e.parentNode; e = e.parentNode)
                    if ("a" === e.nodeName.toLowerCase())
                        return e;
                return null
            }
            )(n.target);
            if (null == r)
                return !0;
            if (!0 === (a = r).hasAttribute("download") || !1 === (e=>!1 === e.hasAttribute("target") || null == e.target || ["_self", ""].includes(e.target) || "_parent" === e.target && (!e.ownerDocument.defaultView.parent || e.ownerDocument.defaultView.parent === e.ownerDocument.defaultView) || "_top" === e.target && (!e.ownerDocument.defaultView.top || e.ownerDocument.defaultView.top === e.ownerDocument.defaultView))(a))
                return !0;
            var a;
            const c = document.createElement("a");
            "" !== r.href && (c.href = r.href),
            "SVGAnimatedString"in window && r.href instanceof SVGAnimatedString && (c.href = r.href.animVal);
            const l = document.createElement("a");
            if (l.href = window.location.href,
            !1 === ((e,t)=>e.protocol === t.protocol && e.host === t.host)(l, c))
                return !0;
            const u = new RegExp(`^${i()((0,
            o.withPrefix)("/"))}`);
            if (((e,t)=>!1 === t.test(s(e.pathname)) || -1 !== e.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i))(c, u))
                return !0;
            if (((e,t)=>"" !== t.hash && ("" === t.pathname || t.pathname === e.pathname))(l, c))
                return !0;
            if (t.excludePattern) {
                if (new RegExp(t.excludePattern).test(c.pathname))
                    return !0
            }
            n.preventDefault();
            const p = s(c.pathname).replace(u, "/");
            return e(`${p}${c.search}${c.hash}`),
            !1
        }
        ;
        const c = function(e, t) {
            void 0 === t && (t = {}),
            function(e, t, n) {
                const o = a(n, t);
                e.addEventListener("click", o)
            }(window, t, (e=>{
                (0,
                o.navigate)(e)
            }
            ))
        }
    },
    538: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            onRouteUpdate: function() {
                return s
            },
            onInitialClientRender: function() {
                return a
            }
        });
        const o = new Set;
        function r(e, t) {
            let n = null;
            return function() {
                n && clearTimeout(n);
                for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)
                    r[i] = arguments[i];
                n = setTimeout.apply(void 0, [e, t].concat(r))
            }
        }
        function i() {
            function e(e) {
                o.has(e.name) || (o.add(e.name),
                function(e) {
                    let {name: t, value: n, id: o} = e;
                    window.ga("send", "event", {
                        eventCategory: "Web Vitals",
                        eventAction: t,
                        eventLabel: o,
                        eventValue: Math.round("CLS" === t ? 1e3 * n : n),
                        nonInteraction: !0,
                        transport: "beacon"
                    })
                }(e))
            }
            return n.e(2954).then(n.bind(n, 2954)).then((t=>{
                let {getLCP: n, getFID: o, getCLS: i} = t;
                const s = r(e, 3e3)
                  , a = e
                  , c = r(e, 3e3);
                i(s, !0),
                o(a, !0),
                n(c, !0)
            }
            ))
        }
        const s = function(e, t) {
            let {location: n} = e;
            void 0 === t && (t = {});
            const o = window.ga;
            if ("function" != typeof o)
                return null;
            if (n && void 0 !== window.excludeGAPaths && window.excludeGAPaths.some((e=>e.test(n.pathname))))
                return null;
            const r = Math.max(32, t.pageTransitionDelay || 0);
            return setTimeout((()=>{
                const e = n ? n.pathname + n.search + n.hash : void 0;
                o("set", "page", e),
                o("send", "pageview")
            }
            ), r),
            null
        };
        function a(e, t) {
            "function" == typeof ga && t.enableWebVitalsTracking && i()
        }
    },
    9608: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            onRouteUpdate: function() {
                return o
            }
        });
        n(1597),
        n(292);
        const o = function(e, t) {
            let {location: n} = e
        }
    },
    292: function(e, t, n) {
        "use strict";
        t.Z = void 0;
        var o = n(1597);
        t.Z = function(e, t, n) {
            void 0 === n && (n = !1);
            const r = "manifest.webmanifest";
            if (!Array.isArray(t))
                return r;
            const i = t.find((t=>{
                let r = t.start_url;
                return n && (r = (0,
                o.withPrefix)(r)),
                e.startsWith(r)
            }
            ));
            return i ? `manifest_${i.lang}.webmanifest` : r
        }
    },
    9650: function(e, t) {
        "use strict";
        var n = 0
          , o = function(e) {
            var t = window.decodeURI(e.replace("#", ""));
            if ("" !== t) {
                var o = document.getElementById(t);
                if (o) {
                    var r = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                      , i = document.documentElement.clientTop || document.body.clientTop || 0
                      , s = window.getComputedStyle(o)
                      , a = s.getPropertyValue("scroll-margin-top") || s.getPropertyValue("scroll-snap-margin-top") || "0px";
                    return o.getBoundingClientRect().top + r - parseInt(a, 10) - i - n
                }
            }
            return null
        };
        t.onInitialClientRender = function(e, t) {
            t.offsetY && (n = t.offsetY),
            requestAnimationFrame((function() {
                var e = o(window.location.hash);
                null !== e && window.scrollTo(0, e)
            }
            ))
        }
        ,
        t.shouldUpdateScroll = function(e) {
            var t = e.routerProps.location
              , n = o(t.hash);
            return null === n || [0, n]
        }
    },
    855: function(e, t) {
        "use strict";
        t.DEFAULT_OPTIONS = {
            maxWidth: 650,
            wrapperStyle: "",
            backgroundColor: "white",
            linkImagesToOriginal: !0,
            showCaptions: !1,
            markdownCaptions: !1,
            withWebp: !1,
            withAvif: !1,
            tracedSVG: !1,
            loading: "lazy",
            decoding: "async",
            disableBgImageOnAlpha: !1,
            disableBgImage: !1
        },
        t.EMPTY_ALT = "GATSBY_EMPTY_ALT",
        t.imageClass = "gatsby-resp-image-image",
        t.imageWrapperClass = "gatsby-resp-image-wrapper",
        t.imageBackgroundClass = "gatsby-resp-image-background-image"
    },
    2154: function(e, t, n) {
        "use strict";
        var o = n(855)
          , r = o.DEFAULT_OPTIONS
          , i = o.imageClass
          , s = o.imageBackgroundClass
          , a = o.imageWrapperClass;
        t.onRouteUpdate = function(e, t) {
            for (var n = Object.assign({}, r, t), o = document.querySelectorAll("." + a), c = function(e) {
                var t = o[e]
                  , r = t.querySelector("." + s)
                  , a = t.querySelector("." + i)
                  , c = function() {
                    r.style.transition = "opacity 0.5s 0.5s",
                    a.style.transition = "opacity 0.5s",
                    l()
                }
                  , l = function e() {
                    r.style.opacity = 0,
                    a.style.opacity = 1,
                    a.style.color = "inherit",
                    a.style.boxShadow = "inset 0px 0px 0px 400px " + n.backgroundColor,
                    a.removeEventListener("load", c),
                    a.removeEventListener("error", e)
                };
                a.style.opacity = 0,
                a.addEventListener("load", c),
                a.addEventListener("error", l),
                a.complete && l()
            }, l = 0; l < o.length; l++)
                c(l)
        }
    },
    6910: function(e, t) {
        function n(e, t) {
            const n = e.querySelector(".ryuseilight-raw") || e.querySelector(".rl__body");
            n && t.addEventListener("click", (()=>{
                !function(e, t, n) {
                    const r = ()=>{
                        n && function(e, t) {
                            e.classList.add("is-active");
                            const n = "_rlTimer";
                            e[n] && clearTimeout(e[n]);
                            e[n] = setTimeout((()=>{
                                e.classList.remove("is-active")
                            }
                            ), t)
                        }(t, n)
                    }
                    ;
                    navigator.clipboard ? navigator.clipboard.writeText(e).then(r).catch((()=>o(e, r))) : o(e, r)
                }(n.innerText, t, 1e3)
            }
            ))
        }
        function o(e, t) {
            const n = document.createElement("textarea");
            let o;
            n.textContent = e,
            n.style.position = "absolute",
            n.style.left = "-99999px",
            document.body.appendChild(n),
            n.focus(),
            n.select();
            try {
                document.execCommand("copy")
            } catch (r) {
                alert("Failed to copy."),
                o = !0
            }
            document.body.removeChild(n),
            o || t()
        }
        t.onRouteUpdate = ()=>{
            setTimeout((()=>{
                const e = document.getElementsByClassName("ryuseilight-wrapper");
                for (let t = 0; t < e.length; t++) {
                    const o = e[t]
                      , r = o.querySelector(".rl__copy");
                    r && (r.setAttribute("aria-hidden", "true"),
                    r.tabIndex = "-1",
                    n(o, r))
                }
            }
            ), 1e3)
        }
    },
    3631: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            BaseContext: function() {
                return M
            },
            Link: function() {
                return J
            },
            Location: function() {
                return _
            },
            LocationProvider: function() {
                return I
            },
            Match: function() {
                return X
            },
            Redirect: function() {
                return Y
            },
            Router: function() {
                return F
            },
            ServerLocation: function() {
                return A
            },
            createHistory: function() {
                return k
            },
            createMemorySource: function() {
                return P
            },
            globalHistory: function() {
                return O
            },
            isRedirect: function() {
                return K
            },
            matchPath: function() {
                return l
            },
            navigate: function() {
                return j
            },
            redirectTo: function() {
                return G
            },
            resolve: function() {
                return u
            },
            useLocation: function() {
                return ee
            },
            useMatch: function() {
                return oe
            },
            useNavigate: function() {
                return te
            },
            useParams: function() {
                return ne
            }
        });
        var o = n(7294)
          , r = n(1143)
          , i = n.n(r)
          , s = n(9712)
          , a = function(e, t) {
            return e.substr(0, t.length) === t
        }
          , c = function(e, t) {
            for (var n = void 0, o = void 0, r = t.split("?")[0], s = v(r), a = "" === s[0], c = g(e), l = 0, u = c.length; l < u; l++) {
                var p = !1
                  , h = c[l].route;
                if (h.default)
                    o = {
                        route: h,
                        params: {},
                        uri: t
                    };
                else {
                    for (var m = v(h.path), y = {}, w = Math.max(s.length, m.length), x = 0; x < w; x++) {
                        var k = m[x]
                          , P = s[x];
                        if (f(k)) {
                            y[k.slice(1) || "*"] = s.slice(x).map(decodeURIComponent).join("/");
                            break
                        }
                        if (void 0 === P) {
                            p = !0;
                            break
                        }
                        var S = d.exec(k);
                        if (S && !a) {
                            -1 === b.indexOf(S[1]) || i()(!1);
                            var O = decodeURIComponent(P);
                            y[S[1]] = O
                        } else if (k !== P) {
                            p = !0;
                            break
                        }
                    }
                    if (!p) {
                        n = {
                            route: h,
                            params: y,
                            uri: "/" + s.slice(0, x).join("/")
                        };
                        break
                    }
                }
            }
            return n || o || null
        }
          , l = function(e, t) {
            return c([{
                path: e
            }], t)
        }
          , u = function(e, t) {
            if (a(e, "/"))
                return e;
            var n = e.split("?")
              , o = n[0]
              , r = n[1]
              , i = t.split("?")[0]
              , s = v(o)
              , c = v(i);
            if ("" === s[0])
                return y(i, r);
            if (!a(s[0], ".")) {
                var l = c.concat(s).join("/");
                return y(("/" === i ? "" : "/") + l, r)
            }
            for (var u = c.concat(s), p = [], d = 0, h = u.length; d < h; d++) {
                var f = u[d];
                ".." === f ? p.pop() : "." !== f && p.push(f)
            }
            return y("/" + p.join("/"), r)
        }
          , p = function(e, t) {
            var n = e.split("?")
              , o = n[0]
              , r = n[1]
              , i = void 0 === r ? "" : r
              , s = "/" + v(o).map((function(e) {
                var n = d.exec(e);
                return n ? t[n[1]] : e
            }
            )).join("/")
              , a = t.location
              , c = (a = void 0 === a ? {} : a).search
              , l = (void 0 === c ? "" : c).split("?")[1] || "";
            return s = y(s, i, l)
        }
          , d = /^:(.+)/
          , h = function(e) {
            return d.test(e)
        }
          , f = function(e) {
            return e && "*" === e[0]
        }
          , m = function(e, t) {
            return {
                route: e,
                score: e.default ? 0 : v(e.path).reduce((function(e, t) {
                    return e += 4,
                    !function(e) {
                        return "" === e
                    }(t) ? h(t) ? e += 2 : f(t) ? e -= 5 : e += 3 : e += 1,
                    e
                }
                ), 0),
                index: t
            }
        }
          , g = function(e) {
            return e.map(m).sort((function(e, t) {
                return e.score < t.score ? 1 : e.score > t.score ? -1 : e.index - t.index
            }
            ))
        }
          , v = function(e) {
            return e.replace(/(^\/+|\/+$)/g, "").split("/")
        }
          , y = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                n[o - 1] = arguments[o];
            return e + ((n = n.filter((function(e) {
                return e && e.length > 0
            }
            ))) && n.length > 0 ? "?" + n.join("&") : "")
        }
          , b = ["uri", "path"]
          , w = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
          , x = function(e) {
            var t = e.location
              , n = t.search
              , o = t.hash
              , r = t.href
              , i = t.origin
              , s = t.protocol
              , a = t.host
              , c = t.hostname
              , l = t.port
              , u = e.location.pathname;
            !u && r && S && (u = new URL(r).pathname);
            return {
                pathname: encodeURI(decodeURI(u)),
                search: n,
                hash: o,
                href: r,
                origin: i,
                protocol: s,
                host: a,
                hostname: c,
                port: l,
                state: e.history.state,
                key: e.history.state && e.history.state.key || "initial"
            }
        }
          , k = function(e, t) {
            var n = []
              , o = x(e)
              , r = !1
              , i = function() {};
            return {
                get location() {
                    return o
                },
                get transitioning() {
                    return r
                },
                _onTransitionComplete: function() {
                    r = !1,
                    i()
                },
                listen: function(t) {
                    n.push(t);
                    var r = function() {
                        o = x(e),
                        t({
                            location: o,
                            action: "POP"
                        })
                    };
                    return e.addEventListener("popstate", r),
                    function() {
                        e.removeEventListener("popstate", r),
                        n = n.filter((function(e) {
                            return e !== t
                        }
                        ))
                    }
                },
                navigate: function(t) {
                    var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = s.state
                      , c = s.replace
                      , l = void 0 !== c && c;
                    if ("number" == typeof t)
                        e.history.go(t);
                    else {
                        a = w({}, a, {
                            key: Date.now() + ""
                        });
                        try {
                            r || l ? e.history.replaceState(a, null, t) : e.history.pushState(a, null, t)
                        } catch (p) {
                            e.location[l ? "replace" : "assign"](t)
                        }
                    }
                    o = x(e),
                    r = !0;
                    var u = new Promise((function(e) {
                        return i = e
                    }
                    ));
                    return n.forEach((function(e) {
                        return e({
                            location: o,
                            action: "PUSH"
                        })
                    }
                    )),
                    u
                }
            }
        }
          , P = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/"
              , t = e.indexOf("?")
              , n = {
                pathname: t > -1 ? e.substr(0, t) : e,
                search: t > -1 ? e.substr(t) : ""
            }
              , o = 0
              , r = [n]
              , i = [null];
            return {
                get location() {
                    return r[o]
                },
                addEventListener: function(e, t) {},
                removeEventListener: function(e, t) {},
                history: {
                    get entries() {
                        return r
                    },
                    get index() {
                        return o
                    },
                    get state() {
                        return i[o]
                    },
                    pushState: function(e, t, n) {
                        var s = n.split("?")
                          , a = s[0]
                          , c = s[1]
                          , l = void 0 === c ? "" : c;
                        o++,
                        r.push({
                            pathname: a,
                            search: l.length ? "?" + l : l
                        }),
                        i.push(e)
                    },
                    replaceState: function(e, t, n) {
                        var s = n.split("?")
                          , a = s[0]
                          , c = s[1]
                          , l = void 0 === c ? "" : c;
                        r[o] = {
                            pathname: a,
                            search: l
                        },
                        i[o] = e
                    },
                    go: function(e) {
                        var t = o + e;
                        t < 0 || t > i.length - 1 || (o = t)
                    }
                }
            }
        }
          , S = !("undefined" == typeof window || !window.document || !window.document.createElement)
          , O = k(S ? window : P())
          , j = O.navigate
          , C = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        ;
        function R(e, t) {
            var n = {};
            for (var o in e)
                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function E(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function L(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function D(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var N = function(e, t) {
            var n = (0,
            o.createContext)(t);
            return n.displayName = e,
            n
        }
          , T = N("Location")
          , _ = function(e) {
            var t = e.children;
            return o.createElement(T.Consumer, null, (function(e) {
                return e ? t(e) : o.createElement(I, null, t)
            }
            ))
        }
          , I = function(e) {
            function t() {
                var n, o;
                E(this, t);
                for (var r = arguments.length, i = Array(r), s = 0; s < r; s++)
                    i[s] = arguments[s];
                return n = o = L(this, e.call.apply(e, [this].concat(i))),
                o.state = {
                    context: o.getContext(),
                    refs: {
                        unlisten: null
                    }
                },
                L(o, n)
            }
            return D(t, e),
            t.prototype.getContext = function() {
                var e = this.props.history;
                return {
                    navigate: e.navigate,
                    location: e.location
                }
            }
            ,
            t.prototype.componentDidCatch = function(e, t) {
                if (!K(e))
                    throw e;
                (0,
                this.props.history.navigate)(e.uri, {
                    replace: !0
                })
            }
            ,
            t.prototype.componentDidUpdate = function(e, t) {
                t.context.location !== this.state.context.location && this.props.history._onTransitionComplete()
            }
            ,
            t.prototype.componentDidMount = function() {
                var e = this
                  , t = this.state.refs
                  , n = this.props.history;
                n._onTransitionComplete(),
                t.unlisten = n.listen((function() {
                    Promise.resolve().then((function() {
                        requestAnimationFrame((function() {
                            e.unmounted || e.setState((function() {
                                return {
                                    context: e.getContext()
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                var e = this.state.refs;
                this.unmounted = !0,
                e.unlisten()
            }
            ,
            t.prototype.render = function() {
                var e = this.state.context
                  , t = this.props.children;
                return o.createElement(T.Provider, {
                    value: e
                }, "function" == typeof t ? t(e) : t || null)
            }
            ,
            t
        }(o.Component);
        I.defaultProps = {
            history: O
        };
        var A = function(e) {
            var t = e.url
              , n = e.children
              , r = t.indexOf("?")
              , i = void 0
              , s = "";
            return r > -1 ? (i = t.substring(0, r),
            s = t.substring(r)) : i = t,
            o.createElement(T.Provider, {
                value: {
                    location: {
                        pathname: i,
                        search: s,
                        hash: ""
                    },
                    navigate: function() {
                        throw new Error("You can't call navigate on the server.")
                    }
                }
            }, n)
        }
          , M = N("Base", {
            baseuri: "/",
            basepath: "/",
            navigate: O.navigate
        })
          , F = function(e) {
            return o.createElement(M.Consumer, null, (function(t) {
                return o.createElement(_, null, (function(n) {
                    return o.createElement(U, C({}, t, n, e))
                }
                ))
            }
            ))
        }
          , U = function(e) {
            function t() {
                return E(this, t),
                L(this, e.apply(this, arguments))
            }
            return D(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.location
                  , n = e.navigate
                  , r = e.basepath
                  , i = e.primary
                  , s = e.children
                  , a = (e.baseuri,
                e.component)
                  , l = void 0 === a ? "div" : a
                  , p = R(e, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"])
                  , d = o.Children.toArray(s).reduce((function(e, t) {
                    var n = ie(r)(t);
                    return e.concat(n)
                }
                ), [])
                  , h = t.pathname
                  , f = c(d, h);
                if (f) {
                    var m = f.params
                      , g = f.uri
                      , v = f.route
                      , y = f.route.value;
                    r = v.default ? r : v.path.replace(/\*$/, "");
                    var b = C({}, m, {
                        uri: g,
                        location: t,
                        navigate: function(e, t) {
                            return n(u(e, g), t)
                        }
                    })
                      , w = o.cloneElement(y, b, y.props.children ? o.createElement(F, {
                        location: t,
                        primary: i
                    }, y.props.children) : void 0)
                      , x = i ? W : l
                      , k = i ? C({
                        uri: g,
                        location: t,
                        component: l
                    }, p) : p;
                    return o.createElement(M.Provider, {
                        value: {
                            baseuri: g,
                            basepath: r,
                            navigate: b.navigate
                        }
                    }, o.createElement(x, k, w))
                }
                return null
            }
            ,
            t
        }(o.PureComponent);
        U.defaultProps = {
            primary: !0
        };
        var H = N("Focus")
          , W = function(e) {
            var t = e.uri
              , n = e.location
              , r = e.component
              , i = R(e, ["uri", "location", "component"]);
            return o.createElement(H.Consumer, null, (function(e) {
                return o.createElement(B, C({}, i, {
                    component: r,
                    requestFocus: e,
                    uri: t,
                    location: n
                }))
            }
            ))
        }
          , q = !0
          , V = 0
          , B = function(e) {
            function t() {
                var n, o;
                E(this, t);
                for (var r = arguments.length, i = Array(r), s = 0; s < r; s++)
                    i[s] = arguments[s];
                return n = o = L(this, e.call.apply(e, [this].concat(i))),
                o.state = {},
                o.requestFocus = function(e) {
                    !o.state.shouldFocus && e && e.focus()
                }
                ,
                L(o, n)
            }
            return D(t, e),
            t.getDerivedStateFromProps = function(e, t) {
                if (null == t.uri)
                    return C({
                        shouldFocus: !0
                    }, e);
                var n = e.uri !== t.uri
                  , o = t.location.pathname !== e.location.pathname && e.location.pathname === e.uri;
                return C({
                    shouldFocus: n || o
                }, e)
            }
            ,
            t.prototype.componentDidMount = function() {
                V++,
                this.focus()
            }
            ,
            t.prototype.componentWillUnmount = function() {
                0 === --V && (q = !0)
            }
            ,
            t.prototype.componentDidUpdate = function(e, t) {
                e.location !== this.props.location && this.state.shouldFocus && this.focus()
            }
            ,
            t.prototype.focus = function() {
                var e = this.props.requestFocus;
                e ? e(this.node) : q ? q = !1 : this.node && (this.node.contains(document.activeElement) || this.node.focus())
            }
            ,
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = (t.children,
                t.style)
                  , r = (t.requestFocus,
                t.component)
                  , i = void 0 === r ? "div" : r
                  , s = (t.uri,
                t.location,
                R(t, ["children", "style", "requestFocus", "component", "uri", "location"]));
                return o.createElement(i, C({
                    style: C({
                        outline: "none"
                    }, n),
                    tabIndex: "-1",
                    ref: function(t) {
                        return e.node = t
                    }
                }, s), o.createElement(H.Provider, {
                    value: this.requestFocus
                }, this.props.children))
            }
            ,
            t
        }(o.Component);
        (0,
        s.O)(B);
        var z = function() {}
          , Z = o.forwardRef;
        void 0 === Z && (Z = function(e) {
            return e
        }
        );
        var J = Z((function(e, t) {
            var n = e.innerRef
              , r = R(e, ["innerRef"]);
            return o.createElement(M.Consumer, null, (function(e) {
                e.basepath;
                var i = e.baseuri;
                return o.createElement(_, null, (function(e) {
                    var s = e.location
                      , c = e.navigate
                      , l = r.to
                      , p = r.state
                      , d = r.replace
                      , h = r.getProps
                      , f = void 0 === h ? z : h
                      , m = R(r, ["to", "state", "replace", "getProps"])
                      , g = u(l, i)
                      , v = encodeURI(g)
                      , y = s.pathname === v
                      , b = a(s.pathname, v);
                    return o.createElement("a", C({
                        ref: t || n,
                        "aria-current": y ? "page" : void 0
                    }, m, f({
                        isCurrent: y,
                        isPartiallyCurrent: b,
                        href: g,
                        location: s
                    }), {
                        href: g,
                        onClick: function(e) {
                            if (m.onClick && m.onClick(e),
                            se(e)) {
                                e.preventDefault();
                                var t = d;
                                if ("boolean" != typeof d && y) {
                                    var n = C({}, s.state)
                                      , o = (n.key,
                                    R(n, ["key"]));
                                    r = C({}, p),
                                    i = o,
                                    t = (a = Object.keys(r)).length === Object.keys(i).length && a.every((function(e) {
                                        return i.hasOwnProperty(e) && r[e] === i[e]
                                    }
                                    ))
                                }
                                c(g, {
                                    state: p,
                                    replace: t
                                })
                            }
                            var r, i, a
                        }
                    }))
                }
                ))
            }
            ))
        }
        ));
        function $(e) {
            this.uri = e
        }
        J.displayName = "Link";
        var K = function(e) {
            return e instanceof $
        }
          , G = function(e) {
            throw new $(e)
        }
          , Q = function(e) {
            function t() {
                return E(this, t),
                L(this, e.apply(this, arguments))
            }
            return D(t, e),
            t.prototype.componentDidMount = function() {
                var e = this.props
                  , t = e.navigate
                  , n = e.to
                  , o = (e.from,
                e.replace)
                  , r = void 0 === o || o
                  , i = e.state
                  , s = (e.noThrow,
                e.baseuri)
                  , a = R(e, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);
                Promise.resolve().then((function() {
                    var e = u(n, s);
                    t(p(e, a), {
                        replace: r,
                        state: i
                    })
                }
                ))
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = (e.navigate,
                e.to)
                  , n = (e.from,
                e.replace,
                e.state,
                e.noThrow)
                  , o = e.baseuri
                  , r = R(e, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"])
                  , i = u(t, o);
                return n || G(p(i, r)),
                null
            }
            ,
            t
        }(o.Component)
          , Y = function(e) {
            return o.createElement(M.Consumer, null, (function(t) {
                var n = t.baseuri;
                return o.createElement(_, null, (function(t) {
                    return o.createElement(Q, C({}, t, {
                        baseuri: n
                    }, e))
                }
                ))
            }
            ))
        }
          , X = function(e) {
            var t = e.path
              , n = e.children;
            return o.createElement(M.Consumer, null, (function(e) {
                var r = e.baseuri;
                return o.createElement(_, null, (function(e) {
                    var o = e.navigate
                      , i = e.location
                      , s = u(t, r)
                      , a = l(s, i.pathname);
                    return n({
                        navigate: o,
                        location: i,
                        match: a ? C({}, a.params, {
                            uri: a.uri,
                            path: t
                        }) : null
                    })
                }
                ))
            }
            ))
        }
          , ee = function() {
            var e = (0,
            o.useContext)(T);
            if (!e)
                throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
            return e.location
        }
          , te = function() {
            var e = (0,
            o.useContext)(M);
            if (!e)
                throw new Error("useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
            return e.navigate
        }
          , ne = function() {
            var e = (0,
            o.useContext)(M);
            if (!e)
                throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
            var t = ee()
              , n = l(e.basepath, t.pathname);
            return n ? n.params : null
        }
          , oe = function(e) {
            if (!e)
                throw new Error("useMatch(path: string) requires an argument of a string to match against");
            var t = (0,
            o.useContext)(M);
            if (!t)
                throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
            var n = ee()
              , r = u(e, t.baseuri)
              , i = l(r, n.pathname);
            return i ? C({}, i.params, {
                uri: i.uri,
                path: e
            }) : null
        }
          , re = function(e) {
            return e.replace(/(^\/+|\/+$)/g, "")
        }
          , ie = function e(t) {
            return function(n) {
                if (!n)
                    return null;
                if (n.type === o.Fragment && n.props.children)
                    return o.Children.map(n.props.children, e(t));
                var r, s, a;
                if (n.props.path || n.props.default || n.type === Y || i()(!1),
                n.type !== Y || n.props.from && n.props.to || i()(!1),
                n.type === Y && (r = n.props.from,
                s = n.props.to,
                a = function(e) {
                    return h(e)
                }
                ,
                v(r).filter(a).sort().join("/") !== v(s).filter(a).sort().join("/")) && i()(!1),
                n.props.default)
                    return {
                        value: n,
                        default: !0
                    };
                var c = n.type === Y ? n.props.from : n.props.path
                  , l = "/" === c ? t : re(t) + "/" + re(c);
                return {
                    value: n,
                    default: n.props.default,
                    path: n.props.children ? re(l) + "/*" : l
                }
            }
        }
          , se = function(e) {
            return !e.defaultPrevented && 0 === e.button && !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        }
    },
    1143: function(e) {
        "use strict";
        e.exports = function(e, t, n, o, r, i, s, a) {
            if (!e) {
                var c;
                if (void 0 === t)
                    c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var l = [n, o, r, i, s, a]
                      , u = 0;
                    (c = new Error(t.replace(/%s/g, (function() {
                        return l[u++]
                    }
                    )))).name = "Invariant Violation"
                }
                throw c.framesToPop = 1,
                c
            }
        }
    },
    7031: function(e, t, n) {
        "use strict";
        n.d(t, {
            OO: function() {
                return v
            },
            zv: function() {
                return b
            },
            JP: function() {
                return y
            },
            nI: function() {
                return w
            },
            Db: function() {
                return x
            }
        });
        var o = n(6690)
          , r = n.n(o)
          , i = n(9728)
          , s = n.n(i)
          , a = n(8416)
          , c = n.n(a)
          , l = n(7294)
          , u = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
          , p = {
            "&amp;": "&",
            "&#38;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&apos;": "'",
            "&#39;": "'",
            "&quot;": '"',
            "&#34;": '"',
            "&nbsp;": " ",
            "&#160;": " ",
            "&copy;": "©",
            "&#169;": "©",
            "&reg;": "®",
            "&#174;": "®",
            "&hellip;": "…",
            "&#8230;": "…",
            "&#x2F;": "/",
            "&#47;": "/"
        }
          , d = function(e) {
            return p[e]
        };
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    c()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var m, g = {
            bindI18n: "languageChanged",
            bindI18nStore: "",
            transEmptyNodeValue: "",
            transSupportBasicHtmlNodes: !0,
            transWrapTextNodes: "",
            transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
            useSuspense: !0,
            unescape: function(e) {
                return e.replace(u, d)
            }
        }, v = (0,
        l.createContext)();
        function y() {
            return g
        }
        var b = function() {
            function e() {
                r()(this, e),
                this.usedNamespaces = {}
            }
            return s()(e, [{
                key: "addUsedNamespaces",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        t.usedNamespaces[e] || (t.usedNamespaces[e] = !0)
                    }
                    ))
                }
            }, {
                key: "getUsedNamespaces",
                value: function() {
                    return Object.keys(this.usedNamespaces)
                }
            }]),
            e
        }();
        function w() {
            return m
        }
        var x = {
            type: "3rdParty",
            init: function(e) {
                !function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    g = f(f({}, g), e)
                }(e.options.react),
                function(e) {
                    m = e
                }(e)
            }
        }
    },
    6115: function(e) {
        e.exports = function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    6690: function(e) {
        e.exports = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    9728: function(e) {
        function t(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        e.exports = function(e, n, o) {
            return n && t(e.prototype, n),
            o && t(e, o),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    8416: function(e) {
        e.exports = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    7867: function(e, t, n) {
        var o = n(6015);
        e.exports = function(e, t) {
            e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            o(e, t)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    4836: function(e) {
        e.exports = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    6015: function(e) {
        function t(n, o) {
            return e.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports,
            t(n, o)
        }
        e.exports = t,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    2911: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.SCRIPT_TYPE = "text/partytown",
        t.partytownSnippet = e=>((e,t)=>{
            const {forward: n=[], ...o} = e || {}
              , r = JSON.stringify(o, ((e,t)=>("function" == typeof t && (t = String(t)).startsWith(e + "(") && (t = "function " + t),
            t)));
            return ["!(function(w,p,f,c){", Object.keys(o).length > 0 ? `c=w[p]=Object.assign(w[p]||{},${r});` : "c=w[p]=w[p]||{};", "c[f]=(c[f]||[])", n.length > 0 ? `.concat(${JSON.stringify(n)})` : "", "})(window,'partytown','forward');", t].join("")
        }
        )(e, '/* Partytown 0.5.4 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll(\'script[type="text/partytown"]\'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener("pt0",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.5.4":"sandbox-sw.html?"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement("script")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(".").map((function(e,n,i){p=p[i[n]]=n+1<i.length?"push"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);')
    },
    907: function(e, t, n) {
        "use strict";
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    7326: function(e, t, n) {
        "use strict";
        function o(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    4578: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var o = n(9611);
        function r(e, t) {
            e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            (0,
            o.Z)(e, t)
        }
    },
    9199: function(e, t, n) {
        "use strict";
        function o(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    9611: function(e, t, n) {
        "use strict";
        function o(e, t) {
            return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            o(e, t)
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    3433: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var o = n(907);
        var r = n(9199)
          , i = n(181);
        function s(e) {
            return function(e) {
                if (Array.isArray(e))
                    return (0,
                    o.Z)(e)
            }(e) || (0,
            r.Z)(e) || (0,
            i.Z)(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    },
    181: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var o = n(907);
        function r(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return (0,
                    o.Z)(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0,
                o.Z)(e, t) : void 0
            }
        }
    },
    1562: function(e, t, n) {
        "use strict";
        n.d(t, {
            ZP: function() {
                return y
            },
            c4: function() {
                return b
            },
            cP: function() {
                return a
            },
            mc: function() {
                return f
            },
            dq: function() {
                return u
            }
        });
        var o = n(5697)
          , r = n(7294)
          , i = n(3631);
        n(4506);
        function s() {
            return s = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ,
            s.apply(this, arguments)
        }
        function a(e) {
            let t = e || "/"
              , n = ""
              , o = "";
            const r = t.indexOf("#");
            -1 !== r && (o = t.slice(r),
            t = t.slice(0, r));
            const i = t.indexOf("?");
            return -1 !== i && (n = t.slice(i),
            t = t.slice(0, i)),
            {
                pathname: t,
                search: "?" === n ? "" : n,
                hash: "#" === o ? "" : o
            }
        }
        const c = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , l = e=>{
            if ("string" == typeof e)
                return !(e=>c.test(e))(e)
        }
        ;
        function u(e, t="") {
            var n;
            if (!l(e))
                return e;
            if (e.startsWith("./") || e.startsWith("../"))
                return e;
            const o = null != (n = null != t ? t : "") ? n : "/";
            return `${null != o && o.endsWith("/") ? o.slice(0, -1) : o}${e.startsWith("/") ? e : `/${e}`}`
        }
        const p = e=>null == e ? void 0 : e.startsWith("/")
          , d = (e,t)=>{
            if ("number" == typeof e)
                return e;
            if (!l(e))
                return e;
            const {pathname: n, search: o, hash: r} = a(e);
            let s = e;
            return p(s) ? u(s) : function(e, t) {
                if (p(e))
                    return e;
                const n = (0,
                i.resolve)(e, t);
                return n
            }(s, t)
        }
          , h = ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace", "_location"];
        function f(e) {
            return u(e, "")
        }
        const m = {
            activeClassName: o.string,
            activeStyle: o.object,
            partiallyActive: o.bool
        };
        function g(e) {
            return r.createElement(i.Location, null, (({location: t})=>r.createElement(v, s({}, e, {
                _location: t
            }))))
        }
        class v extends r.Component {
            constructor(e) {
                super(e),
                this.defaultGetProps = ({isPartiallyCurrent: e, isCurrent: t})=>(this.props.partiallyActive ? e : t) ? {
                    className: [this.props.className, this.props.activeClassName].filter(Boolean).join(" "),
                    style: s({}, this.props.style, this.props.activeStyle)
                } : null;
                let t = !1;
                "undefined" != typeof window && window.IntersectionObserver && (t = !0),
                this.state = {
                    IOSupported: t
                },
                this.abortPrefetch = null,
                this.handleRef = this.handleRef.bind(this)
            }
            _prefetch() {
                let e = window.location.pathname + window.location.search;
                this.props._location && this.props._location.pathname && (e = this.props._location.pathname + this.props._location.search);
                const t = a(d(this.props.to, e))
                  , n = t.pathname + t.search;
                if (e !== n)
                    return ___loader.enqueue(n)
            }
            componentWillUnmount() {
                if (!this.io)
                    return;
                const {instance: e, el: t} = this.io;
                this.abortPrefetch && this.abortPrefetch.abort(),
                e.unobserve(t),
                e.disconnect()
            }
            handleRef(e) {
                this.props.innerRef && Object.prototype.hasOwnProperty.call(this.props.innerRef, "current") ? this.props.innerRef.current = e : this.props.innerRef && this.props.innerRef(e),
                this.state.IOSupported && e && (this.io = ((e,t)=>{
                    const n = new window.IntersectionObserver((n=>{
                        n.forEach((n=>{
                            e === n.target && t(n.isIntersecting || n.intersectionRatio > 0)
                        }
                        ))
                    }
                    ));
                    return n.observe(e),
                    {
                        instance: n,
                        el: e
                    }
                }
                )(e, (e=>{
                    e ? this.abortPrefetch = this._prefetch() : this.abortPrefetch && this.abortPrefetch.abort()
                }
                )))
            }
            render() {
                const e = this.props
                  , {to: t, getProps: n=this.defaultGetProps, onClick: o, onMouseEnter: c, state: u, replace: p, _location: f} = e
                  , m = function(e, t) {
                    if (null == e)
                        return {};
                    var n, o, r = {}, i = Object.keys(e);
                    for (o = 0; o < i.length; o++)
                        t.indexOf(n = i[o]) >= 0 || (r[n] = e[n]);
                    return r
                }(e, h)
                  , g = d(t, f.pathname);
                return l(g) ? r.createElement(i.Link, s({
                    to: g,
                    state: u,
                    getProps: n,
                    innerRef: this.handleRef,
                    onMouseEnter: e=>{
                        c && c(e);
                        const t = a(g);
                        ___loader.hovering(t.pathname + t.search)
                    }
                    ,
                    onClick: e=>{
                        if (o && o(e),
                        !(0 !== e.button || this.props.target || e.defaultPrevented || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
                            e.preventDefault();
                            let t = p;
                            const n = encodeURI(g) === f.pathname;
                            "boolean" != typeof p && n && (t = !0),
                            window.___navigate(g, {
                                state: u,
                                replace: t
                            })
                        }
                        return !0
                    }
                }, m)) : r.createElement("a", s({
                    href: g
                }, m))
            }
        }
        v.propTypes = s({}, m, {
            onClick: o.func,
            to: o.string.isRequired,
            replace: o.bool,
            state: o.object
        });
        var y = r.forwardRef(((e,t)=>r.createElement(g, s({
            innerRef: t
        }, e))));
        const b = (e,t)=>{
            window.___navigate(d(e, window.location.pathname), t)
        }
    },
    3521: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Script: function() {
                return f
            },
            ScriptStrategy: function() {
                return l
            },
            collectedScriptsByPage: function() {
                return a
            },
            scriptCache: function() {
                return d
            },
            scriptCallbackCache: function() {
                return h
            }
        });
        var o = n(7294)
          , r = n(3631);
        function i() {
            return i = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ,
            i.apply(this, arguments)
        }
        const s = new Map
          , a = {
            get: e=>s.get(e) || [],
            set(e, t) {
                const n = s.get(e) || [];
                n.push(t),
                s.set(e, n)
            },
            delete(e) {
                s.delete(e)
            }
        }
          , c = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            const t = Date.now();
            return setTimeout((function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }
            ), 1)
        }
        ;
        var l, u;
        (u = l || (l = {})).postHydrate = "post-hydrate",
        u.idle = "idle",
        u.offMainThread = "off-main-thread";
        const p = new Set(["src", "strategy", "dangerouslySetInnerHTML", "children", "onLoad", "onError"])
          , d = new Set
          , h = new Map;
        function f(e) {
            return o.createElement(r.Location, null, (()=>o.createElement(m, e)))
        }
        function m(e) {
            const {src: t, strategy: n=l.postHydrate} = e || {}
              , {pathname: s} = (0,
            r.useLocation)();
            if ((0,
            o.useEffect)((()=>{
                let t;
                switch (n) {
                case l.postHydrate:
                    t = g(e);
                    break;
                case l.idle:
                    c((()=>{
                        t = g(e)
                    }
                    ));
                    break;
                case l.offMainThread:
                    {
                        const t = y(e);
                        a.set(s, t)
                    }
                }
                return ()=>{
                    const {script: e, loadCallback: n, errorCallback: o} = t || {};
                    n && (null == e || e.removeEventListener("load", n)),
                    o && (null == e || e.removeEventListener("error", o)),
                    null == e || e.remove()
                }
            }
            ), []),
            n === l.offMainThread) {
                const r = v(e)
                  , c = y(e);
                return "undefined" == typeof window && a.set(s, c),
                o.createElement("script", r ? i({
                    type: "text/partytown",
                    "data-strategy": n,
                    crossOrigin: "anonymous"
                }, c, {
                    dangerouslySetInnerHTML: {
                        __html: v(e)
                    }
                }) : i({
                    type: "text/partytown",
                    src: b(t),
                    "data-strategy": n,
                    crossOrigin: "anonymous"
                }, c))
            }
            return null
        }
        function g(e) {
            const {id: t, src: n, strategy: o=l.postHydrate, onLoad: r, onError: s} = e || {}
              , a = t || n
              , c = ["load", "error"]
              , u = {
                load: r,
                error: s
            };
            if (a) {
                for (const e of c)
                    if (null != u && u[e]) {
                        var p;
                        const t = h.get(a) || {}
                          , {callbacks: n=[]} = (null == t ? void 0 : t[e]) || {};
                        var f, m;
                        n.push(null == u ? void 0 : u[e]),
                        null != t && null != (p = t[e]) && p.event ? null == u || null == (f = u[e]) || f.call(u, null == t || null == (m = t[e]) ? void 0 : m.event) : h.set(a, i({}, t, {
                            [e]: {
                                callbacks: n
                            }
                        }))
                    }
                if (d.has(a))
                    return null
            }
            const g = v(e)
              , b = y(e)
              , x = document.createElement("script");
            t && (x.id = t),
            x.dataset.strategy = o;
            for (const [i,l] of Object.entries(b))
                x.setAttribute(i, l);
            g && (x.textContent = g),
            n && (x.src = n);
            const k = {};
            if (a) {
                for (const e of c) {
                    const t = t=>w(t, a, e);
                    x.addEventListener(e, t),
                    k[`${e}Callback`] = t
                }
                d.add(a)
            }
            return document.body.appendChild(x),
            {
                script: x,
                loadCallback: k.loadCallback,
                errorCallback: k.errorCallback
            }
        }
        function v(e) {
            const {dangerouslySetInnerHTML: t, children: n=""} = e || {}
              , {__html: o=""} = t || {};
            return o || n
        }
        function y(e) {
            const t = {};
            for (const [n,o] of Object.entries(e))
                p.has(n) || (t[n] = o);
            return t
        }
        function b(e) {
            if (e)
                return `/__third-party-proxy?url=${encodeURIComponent(e)}`
        }
        function w(e, t, n) {
            const o = h.get(t) || {};
            for (const i of (null == o || null == (r = o[n]) ? void 0 : r.callbacks) || []) {
                var r;
                i(e)
            }
            h.set(t, {
                [n]: {
                    event: e
                }
            })
        }
    }
}, function(e) {
    e.O(0, [9774], (function() {
        return t = 5824,
        e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);
//# sourceMappingURL=app-00ea402545ae73762e03.js.map
