/*! For license information please see efbe938c72216bb13e41c0f20ed1a5428cfc935d-acd7695bce1f2d48da39.js.LICENSE.txt */
(self.webpackChunk_splidejs_splide_site = self.webpackChunk_splidejs_splide_site || []).push([[6287], {
    182: function(e, t, n) {
        "use strict";
        function i(e, t, n) {
            return Array.prototype.slice.call(e, t, n)
        }
        function r(e) {
            return e.bind(null, ...i(arguments, 1))
        }
        n.d(t, {
            cn: function() {
                return null
            },
            M6: function() {
                return null
            },
            TS: function() {
                return g
            },
            Kt: function() {
                return y
            },
            IV: function() {
                return null
            },
            P$: function() {
                return null
            }
        });
        setTimeout;
        function a(e, t) {
            return typeof t === e
        }
        function s(e) {
            return !c(e) && a("object", e)
        }
        const o = Array.isArray
          , l = (r(a, "function"),
        r(a, "string"));
        r(a, "undefined");
        function c(e) {
            return null === e
        }
        function u(e) {
            return o(e) ? e : [e]
        }
        function h(e, t) {
            u(e).forEach(t)
        }
        function m(e, t, n) {
            e && h(t, (t=>{
                t && e.classList[n ? "add" : "remove"](t)
            }
            ))
        }
        function f(e, t) {
            m(e, l(t) ? t.split(" ") : t, !0)
        }
        const d = Object.keys;
        function p(e, t, n) {
            return e && (n ? d(e).reverse() : d(e)).forEach((n=>{
                "__proto__" !== n && t(e[n], n)
            }
            )),
            e
        }
        function g(e) {
            return i(arguments, 1).forEach((t=>{
                p(t, ((t,n)=>{
                    o(t) ? e[n] = t.slice() : s(t) ? e[n] = g({}, s(e[n]) ? e[n] : {}, t) : e[n] = t
                }
                ))
            }
            )),
            e
        }
        function v(e, t, n) {
            s(t) ? p(t, ((t,n)=>{
                v(e, n, t)
            }
            )) : h(e, (e=>{
                c(n) || "" === n ? function(e, t) {
                    h(e, (e=>{
                        h(t, (t=>{
                            e && e.removeAttribute(t)
                        }
                        ))
                    }
                    ))
                }(e, t) : e.setAttribute(t, String(n))
            }
            ))
        }
        function y(e, t) {
            return t ? i(e.querySelectorAll(t)) : []
        }
        function b(e, t) {
            m(e, t, !1)
        }
        const {min: E, max: w, floor: x, ceil: k, abs: N} = Math
    },
    4184: function(e, t) {
        var n;
        !function() {
            "use strict";
            var i = {}.hasOwnProperty;
            function r() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var a = typeof n;
                        if ("string" === a || "number" === a)
                            e.push(n);
                        else if (Array.isArray(n)) {
                            if (n.length) {
                                var s = r.apply(null, n);
                                s && e.push(s)
                            }
                        } else if ("object" === a)
                            if (n.toString === Object.prototype.toString)
                                for (var o in n)
                                    i.call(n, o) && n[o] && e.push(o);
                            else
                                e.push(n.toString())
                    }
                }
                return e.join(" ")
            }
            e.exports ? (r.default = r,
            e.exports = r) : void 0 === (n = function() {
                return r
            }
            .apply(t, [])) || (e.exports = n)
        }()
    },
    6304: function(module, __unused_webpack_exports, __webpack_require__) {
        module = __webpack_require__.nmd(module),
        function _f(self) {
            "use strict";
            try {
                module && (self = module)
            } catch (e) {}
            var t;
            function u(e) {
                return void 0 === e || e
            }
            function aa(e) {
                const t = Array(e);
                for (let n = 0; n < e; n++)
                    t[n] = v();
                return t
            }
            function v() {
                return Object.create(null)
            }
            function ba(e, t) {
                return t.length - e.length
            }
            function x(e) {
                return "string" == typeof e
            }
            function C(e) {
                return "object" == typeof e
            }
            function D(e) {
                return "function" == typeof e
            }
            function ca(e, t) {
                var n = da;
                if (e && (t && (e = E(e, t)),
                this.H && (e = E(e, this.H)),
                this.J && 1 < e.length && (e = E(e, this.J)),
                n || "" === n)) {
                    if (e = e.split(n),
                    this.filter) {
                        t = this.filter,
                        n = e.length;
                        const i = [];
                        for (let r = 0, a = 0; r < n; r++) {
                            const n = e[r];
                            n && !t[n] && (i[a++] = n)
                        }
                        e = i
                    }
                    return e
                }
                return e
            }
            self._factory = _f;
            const da = /[\p{Z}\p{S}\p{P}\p{C}]+/u
              , ea = /[\u0300-\u036f]/g;
            function fa(e, t) {
                const n = Object.keys(e)
                  , i = n.length
                  , r = [];
                let a = ""
                  , s = 0;
                for (let o, l, c = 0; c < i; c++)
                    o = n[c],
                    (l = e[o]) ? (r[s++] = F(t ? "(?!\\b)" + o + "(\\b|_)" : o),
                    r[s++] = l) : a += (a ? "|" : "") + o;
                return a && (r[s++] = F(t ? "(?!\\b)(" + a + ")(\\b|_)" : "(" + a + ")"),
                r[s] = ""),
                r
            }
            function E(e, t) {
                for (let n = 0, i = t.length; n < i && (e = e.replace(t[n], t[n + 1])); n += 2)
                    ;
                return e
            }
            function F(e) {
                return new RegExp(e,"g")
            }
            function ha(e) {
                let t = ""
                  , n = "";
                for (let i, r = 0, a = e.length; r < a; r++)
                    (i = e[r]) !== n && (t += n = i);
                return t
            }
            var ja = {
                encode: ia,
                F: !1,
                G: ""
            };
            function ia(e) {
                return ca.call(this, ("" + e).toLowerCase(), !1)
            }
            const ka = {}
              , G = {};
            function la(e) {
                I(e, "add"),
                I(e, "append"),
                I(e, "search"),
                I(e, "update"),
                I(e, "remove")
            }
            function I(e, t) {
                e[t + "Async"] = function() {
                    const e = this
                      , n = arguments;
                    var i = n[n.length - 1];
                    let r;
                    return D(i) && (r = i,
                    delete n[n.length - 1]),
                    i = new Promise((function(i) {
                        setTimeout((function() {
                            e.async = !0;
                            const r = e[t].apply(e, n);
                            e.async = !1,
                            i(r)
                        }
                        ))
                    }
                    )),
                    r ? (i.then(r),
                    this) : i
                }
            }
            function ma(e, t, n, i) {
                const r = e.length;
                let a, s, o = [], l = 0;
                i && (i = []);
                for (let c = r - 1; 0 <= c; c--) {
                    const u = e[c]
                      , h = u.length
                      , m = v();
                    let f = !a;
                    for (let e = 0; e < h; e++) {
                        const h = u[e]
                          , d = h.length;
                        if (d)
                            for (let e, u, p = 0; p < d; p++)
                                if (u = h[p],
                                a) {
                                    if (a[u]) {
                                        if (!c)
                                            if (n)
                                                n--;
                                            else if (o[l++] = u,
                                            l === t)
                                                return o;
                                        (c || i) && (m[u] = 1),
                                        f = !0
                                    }
                                    if (i && (s[u] = (e = s[u]) ? ++e : e = 1,
                                    e < r)) {
                                        const t = i[e - 2] || (i[e - 2] = []);
                                        t[t.length] = u
                                    }
                                } else
                                    m[u] = 1
                    }
                    if (i)
                        a || (s = m);
                    else if (!f)
                        return [];
                    a = m
                }
                if (i)
                    for (let c, u, h = i.length - 1; 0 <= h; h--) {
                        c = i[h],
                        u = c.length;
                        for (let e, i = 0; i < u; i++)
                            if (e = c[i],
                            !a[e]) {
                                if (n)
                                    n--;
                                else if (o[l++] = e,
                                l === t)
                                    return o;
                                a[e] = 1
                            }
                    }
                return o
            }
            function na(e, t) {
                const n = v()
                  , i = v()
                  , r = [];
                for (let a = 0; a < e.length; a++)
                    n[e[a]] = 1;
                for (let a, s = 0; s < t.length; s++) {
                    a = t[s];
                    for (let e, t = 0; t < a.length; t++)
                        e = a[t],
                        n[e] && !i[e] && (i[e] = 1,
                        r[r.length] = e)
                }
                return r
            }
            function J(e) {
                this.l = !0 !== e && e,
                this.cache = v(),
                this.h = []
            }
            function oa(e, t, n) {
                C(e) && (e = e.query);
                let i = this.cache.get(e);
                return i || (i = this.search(e, t, n),
                this.cache.set(e, i)),
                i
            }
            J.prototype.set = function(e, t) {
                if (!this.cache[e]) {
                    var n = this.h.length;
                    for (n === this.l ? delete this.cache[this.h[n - 1]] : n++,
                    --n; 0 < n; n--)
                        this.h[n] = this.h[n - 1];
                    this.h[0] = e
                }
                this.cache[e] = t
            }
            ,
            J.prototype.get = function(e) {
                const t = this.cache[e];
                if (this.l && t && (e = this.h.indexOf(e))) {
                    const t = this.h[e - 1];
                    this.h[e - 1] = this.h[e],
                    this.h[e] = t
                }
                return t
            }
            ;
            const qa = {
                memory: {
                    charset: "latin:extra",
                    D: 3,
                    B: 4,
                    m: !1
                },
                performance: {
                    D: 3,
                    B: 3,
                    s: !1,
                    context: {
                        depth: 2,
                        D: 1
                    }
                },
                match: {
                    charset: "latin:extra",
                    G: "reverse"
                },
                score: {
                    charset: "latin:advanced",
                    D: 20,
                    B: 3,
                    context: {
                        depth: 3,
                        D: 9
                    }
                },
                default: {}
            };
            function ra(e, t, n, i, r, a) {
                setTimeout((function() {
                    const s = e(n, JSON.stringify(a));
                    s && s.then ? s.then((function() {
                        t.export(e, t, n, i, r + 1)
                    }
                    )) : t.export(e, t, n, i, r + 1)
                }
                ))
            }
            function K(e, t) {
                if (!(this instanceof K))
                    return new K(e);
                var n;
                if (e) {
                    x(e) ? e = qa[e] : (n = e.preset) && (e = Object.assign({}, n[n], e)),
                    n = e.charset;
                    var i = e.lang;
                    x(n) && (-1 === n.indexOf(":") && (n += ":default"),
                    n = G[n]),
                    x(i) && (i = ka[i])
                } else
                    e = {};
                let r, a, s = e.context || {};
                if (this.encode = e.encode || n && n.encode || ia,
                this.register = t || v(),
                this.D = r = e.resolution || 9,
                this.G = t = n && n.G || e.tokenize || "strict",
                this.depth = "strict" === t && s.depth,
                this.l = u(s.bidirectional),
                this.s = a = u(e.optimize),
                this.m = u(e.fastupdate),
                this.B = e.minlength || 1,
                this.C = e.boost,
                this.map = a ? aa(r) : v(),
                this.A = r = s.resolution || 1,
                this.h = a ? aa(r) : v(),
                this.F = n && n.F || e.rtl,
                this.H = (t = e.matcher || i && i.H) && fa(t, !1),
                this.J = (t = e.stemmer || i && i.J) && fa(t, !0),
                n = t = e.filter || i && i.filter) {
                    n = t,
                    i = v();
                    for (let e = 0, t = n.length; e < t; e++)
                        i[n[e]] = 1;
                    n = i
                }
                this.filter = n,
                this.cache = (t = e.cache) && new J(t)
            }
            function L(e, t, n, i, r) {
                return n && 1 < e ? t + (i || 0) <= e ? n + (r || 0) : (e - 1) / (t + (i || 0)) * (n + (r || 0)) + 1 | 0 : 0
            }
            function M(e, t, n, i, r, a, s) {
                let o = s ? e.h : e.map;
                (!t[n] || s && !t[n][s]) && (e.s && (o = o[i]),
                s ? ((t = t[n] || (t[n] = v()))[s] = 1,
                o = o[s] || (o[s] = v())) : t[n] = 1,
                o = o[n] || (o[n] = []),
                e.s || (o = o[i] || (o[i] = [])),
                a && -1 !== o.indexOf(r) || (o[o.length] = r,
                e.m && ((e = e.register[r] || (e.register[r] = []))[e.length] = o)))
            }
            function sa(e, t, n, i, r, a, s, o) {
                let l = []
                  , c = o ? e.h : e.map;
                if (e.s || (c = ua(c, s, o, e.l)),
                c) {
                    let n = 0;
                    const u = Math.min(c.length, o ? e.A : e.D);
                    for (let t, h, m = 0, f = 0; m < u && !((t = c[m]) && (e.s && (t = ua(t, s, o, e.l)),
                    r && t && a && (h = t.length,
                    h <= r ? (r -= h,
                    t = null) : (t = t.slice(r),
                    r = 0)),
                    t && (l[n++] = t,
                    a && (f += t.length,
                    f >= i)))); m++)
                        ;
                    if (n)
                        return a ? ta(l, i, 0) : void (t[t.length] = l)
                }
                return !n && l
            }
            function ta(e, t, n) {
                return e = 1 === e.length ? e[0] : [].concat.apply([], e),
                n || e.length > t ? e.slice(n, n + t) : e
            }
            function ua(e, t, n, i) {
                return n ? e = (e = e[(i = i && t > n) ? t : n]) && e[i ? n : t] : e = e[t],
                e
            }
            function N(e, t, n, i, r) {
                let a = 0;
                if (e.constructor === Array)
                    if (r)
                        -1 !== (t = e.indexOf(t)) ? 1 < e.length && (e.splice(t, 1),
                        a++) : a++;
                    else {
                        r = Math.min(e.length, n);
                        for (let s, o = 0; o < r; o++)
                            (s = e[o]) && (a = N(s, t, n, i, r),
                            i || a || delete e[o])
                    }
                else
                    for (let s in e)
                        (a = N(e[s], t, n, i, r)) || delete e[s];
                return a
            }
            function va(e) {
                e = e.data;
                var t = self._index;
                const n = e.args;
                var i = e.task;
                if ("init" === i)
                    i = e.options || {},
                    e = e.factory,
                    t = i.encode,
                    i.cache = !1,
                    t && 0 === t.indexOf("function") && (i.encode = Function("return " + t)()),
                    e ? (Function("return " + e)()(self),
                    self._index = new self.FlexSearch.Index(i),
                    delete self.FlexSearch) : self._index = new K(i);
                else
                    e = e.id,
                    t = t[i].apply(t, n),
                    postMessage("search" === i ? {
                        id: e,
                        msg: t
                    } : {
                        id: e
                    })
            }
            t = K.prototype,
            t.append = function(e, t) {
                return this.add(e, t, !0)
            }
            ,
            t.add = function(e, t, n, i) {
                if (t && (e || 0 === e)) {
                    if (!i && !n && this.register[e])
                        return this.update(e, t);
                    if (i = (t = this.encode(t)).length) {
                        const c = v()
                          , u = v()
                          , h = this.depth
                          , m = this.D;
                        for (let f = 0; f < i; f++) {
                            let d = t[this.F ? i - 1 - f : f];
                            var r = d.length;
                            if (d && r >= this.B && (h || !u[d])) {
                                var a = L(m, i, f)
                                  , s = "";
                                switch (this.G) {
                                case "full":
                                    if (3 < r) {
                                        for (a = 0; a < r; a++)
                                            for (var o = r; o > a; o--)
                                                if (o - a >= this.B) {
                                                    var l = L(m, i, f, r, a);
                                                    M(this, u, s = d.substring(a, o), l, e, n)
                                                }
                                        break
                                    }
                                case "reverse":
                                    if (2 < r) {
                                        for (o = r - 1; 0 < o; o--)
                                            (s = d[o] + s).length >= this.B && M(this, u, s, L(m, i, f, r, o), e, n);
                                        s = ""
                                    }
                                case "forward":
                                    if (1 < r) {
                                        for (o = 0; o < r; o++)
                                            (s += d[o]).length >= this.B && M(this, u, s, a, e, n);
                                        break
                                    }
                                default:
                                    if (this.C && (a = Math.min(a / this.C(t, d, f) | 0, m - 1)),
                                    M(this, u, d, a, e, n),
                                    h && 1 < i && f < i - 1)
                                        for (r = v(),
                                        s = this.A,
                                        a = d,
                                        o = Math.min(h + 1, i - f),
                                        r[a] = 1,
                                        l = 1; l < o; l++)
                                            if ((d = t[this.F ? i - 1 - f - l : f + l]) && d.length >= this.B && !r[d]) {
                                                r[d] = 1;
                                                const t = this.l && d > a;
                                                M(this, c, t ? a : d, L(s + (i / 2 > s ? 0 : 1), i, f, o - 1, l - 1), e, n, t ? d : a)
                                            }
                                }
                            }
                        }
                        this.m || (this.register[e] = 1)
                    }
                }
                return this
            }
            ,
            t.search = function(e, t, n) {
                n || (!t && C(e) ? e = (n = e).query : C(t) && (n = t));
                let i, r, a, s, o, l = [], c = 0;
                if (n) {
                    t = n.limit,
                    c = n.offset || 0;
                    var u = n.context;
                    r = n.suggest
                }
                if (e && (i = (e = this.encode(e)).length,
                1 < i)) {
                    n = v();
                    var h = [];
                    for (let t, a = 0, s = 0; a < i; a++)
                        if ((t = e[a]) && t.length >= this.B && !n[t]) {
                            if (!(this.s || r || this.map[t]))
                                return l;
                            h[s++] = t,
                            n[t] = 1
                        }
                    i = (e = h).length
                }
                if (!i)
                    return l;
                for (t || (t = 100),
                n = 0,
                (u = this.depth && 1 < i && !1 !== u) ? (a = e[0],
                n = 1) : 1 < i && e.sort(ba); n < i; n++) {
                    if (o = e[n],
                    u ? (s = sa(this, l, r, t, c, 2 === i, o, a),
                    r && !1 === s && l.length || (a = o)) : s = sa(this, l, r, t, c, 1 === i, o),
                    s)
                        return s;
                    if (r && n === i - 1) {
                        if (!(h = l.length)) {
                            if (u) {
                                u = 0,
                                n = -1;
                                continue
                            }
                            return l
                        }
                        if (1 === h)
                            return ta(l[0], t, c)
                    }
                }
                return ma(l, t, c, r)
            }
            ,
            t.contain = function(e) {
                return !!this.register[e]
            }
            ,
            t.update = function(e, t) {
                return this.remove(e).add(e, t)
            }
            ,
            t.remove = function(e, t) {
                const n = this.register[e];
                if (n) {
                    if (this.m)
                        for (let t, i = 0; i < n.length; i++)
                            t = n[i],
                            t.splice(t.indexOf(e), 1);
                    else
                        N(this.map, e, this.D, this.s),
                        this.depth && N(this.h, e, this.A, this.s);
                    if (t || delete this.register[e],
                    this.cache) {
                        t = this.cache;
                        for (let n, i, r = 0; r < t.h.length; r++)
                            i = t.h[r],
                            n = t.cache[i],
                            -1 !== n.indexOf(e) && (t.h.splice(r--, 1),
                            delete t.cache[i])
                    }
                }
                return this
            }
            ,
            t.searchCache = oa,
            t.export = function(e, t, n, i, r) {
                let a, s;
                switch (r || (r = 0)) {
                case 0:
                    if (a = "reg",
                    this.m) {
                        s = v();
                        for (let e in this.register)
                            s[e] = 1
                    } else
                        s = this.register;
                    break;
                case 1:
                    a = "cfg",
                    s = {
                        doc: 0,
                        opt: this.s ? 1 : 0
                    };
                    break;
                case 2:
                    a = "map",
                    s = this.map;
                    break;
                case 3:
                    a = "ctx",
                    s = this.h;
                    break;
                default:
                    return
                }
                return ra(e, t || this, n ? n + "." + a : a, i, r, s),
                !0
            }
            ,
            t.import = function(e, t) {
                if (t)
                    switch (x(t) && (t = JSON.parse(t)),
                    e) {
                    case "cfg":
                        this.s = !!t.opt;
                        break;
                    case "reg":
                        this.m = !1,
                        this.register = t;
                        break;
                    case "map":
                        this.map = t;
                        break;
                    case "ctx":
                        this.h = t
                    }
            }
            ,
            la(K.prototype);
            let wa = 0;
            function O(e) {
                if (!(this instanceof O))
                    return new O(e);
                var t;
                e ? D(t = e.encode) && (e.encode = t.toString()) : e = {},
                (t = (self || window)._factory) && (t = t.toString());
                const n = self.exports
                  , i = this;
                this.o = xa(t, n, e.worker),
                this.h = v(),
                this.o && (n ? this.o.on("message", (function(e) {
                    i.h[e.id](e.msg),
                    delete i.h[e.id]
                }
                )) : this.o.onmessage = function(e) {
                    e = e.data,
                    i.h[e.id](e.msg),
                    delete i.h[e.id]
                }
                ,
                this.o.postMessage({
                    task: "init",
                    factory: t,
                    options: e
                }))
            }
            function P(e) {
                O.prototype[e] = O.prototype[e + "Async"] = function() {
                    const t = this
                      , n = [].slice.call(arguments);
                    var i = n[n.length - 1];
                    let r;
                    return D(i) && (r = i,
                    n.splice(n.length - 1, 1)),
                    i = new Promise((function(i) {
                        setTimeout((function() {
                            t.h[++wa] = i,
                            t.o.postMessage({
                                task: e,
                                id: wa,
                                args: n
                            })
                        }
                        ))
                    }
                    )),
                    r ? (i.then(r),
                    this) : i
                }
            }
            function xa(a, b, c) {
                let d;
                try {
                    d = b ? eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")') : a ? new Worker(URL.createObjectURL(new Blob(["onmessage=" + va.toString()],{
                        type: "text/javascript"
                    }))) : new Worker(x(c) ? c : "worker/worker.js",{
                        type: "module"
                    })
                } catch (e) {}
                return d
            }
            function Q(e) {
                if (!(this instanceof Q))
                    return new Q(e);
                var t, n = e.document || e.doc || e;
                this.K = [],
                this.h = [],
                this.A = [],
                this.register = v(),
                this.key = (t = n.key || n.id) && S(t, this.A) || "id",
                this.m = u(e.fastupdate),
                this.C = (t = n.store) && !0 !== t && [],
                this.store = t && v(),
                this.I = (t = n.tag) && S(t, this.A),
                this.l = t && v(),
                this.cache = (t = e.cache) && new J(t),
                e.cache = !1,
                this.o = e.worker,
                this.async = !1,
                t = v();
                let i = n.index || n.field || n;
                x(i) && (i = [i]);
                for (let r, a, s = 0; s < i.length; s++)
                    r = i[s],
                    x(r) || (a = r,
                    r = r.field),
                    a = C(a) ? Object.assign({}, e, a) : e,
                    this.o && (t[r] = new O(a),
                    t[r].o || (this.o = !1)),
                    this.o || (t[r] = new K(a,this.register)),
                    this.K[s] = S(r, this.A),
                    this.h[s] = r;
                if (this.C)
                    for (x(e = n.store) && (e = [e]),
                    n = 0; n < e.length; n++)
                        this.C[n] = S(e[n], this.A);
                this.index = t
            }
            function S(e, t) {
                const n = e.split(":");
                let i = 0;
                for (let r = 0; r < n.length; r++)
                    0 <= (e = n[r]).indexOf("[]") && (e = e.substring(0, e.length - 2)) && (t[i] = !0),
                    e && (n[i++] = e);
                return i < n.length && (n.length = i),
                1 < i ? n : n[0]
            }
            function T(e, t) {
                if (x(t))
                    e = e[t];
                else
                    for (let n = 0; e && n < t.length; n++)
                        e = e[t[n]];
                return e
            }
            function U(e, t, n, i, r) {
                if (e = e[r],
                i === n.length - 1)
                    t[r] = e;
                else if (e)
                    if (e.constructor === Array)
                        for (t = t[r] = Array(e.length),
                        r = 0; r < e.length; r++)
                            U(e, t, n, i, r);
                    else
                        t = t[r] || (t[r] = v()),
                        r = n[++i],
                        U(e, t, n, i, r)
            }
            function V(e, t, n, i, r, a, s, o) {
                if (e = e[s])
                    if (i === t.length - 1) {
                        if (e.constructor === Array) {
                            if (n[i]) {
                                for (t = 0; t < e.length; t++)
                                    r.add(a, e[t], !0, !0);
                                return
                            }
                            e = e.join(" ")
                        }
                        r.add(a, e, o, !0)
                    } else if (e.constructor === Array)
                        for (s = 0; s < e.length; s++)
                            V(e, t, n, i, r, a, s, o);
                    else
                        s = t[++i],
                        V(e, t, n, i, r, a, s, o)
            }
            function ya(e, t, n, i) {
                let r = this.l[e]
                  , a = r && r.length - n;
                if (a && 0 < a)
                    return (a > t || n) && (r = r.slice(n, n + t)),
                    i && (r = za.call(this, r)),
                    {
                        tag: e,
                        result: r
                    }
            }
            function za(e) {
                const t = Array(e.length);
                for (let n, i = 0; i < e.length; i++)
                    n = e[i],
                    t[i] = {
                        id: n,
                        doc: this.store[n]
                    };
                return t
            }
            P("add"),
            P("append"),
            P("search"),
            P("update"),
            P("remove"),
            t = Q.prototype,
            t.add = function(e, t, n) {
                if (C(e) && (e = T(t = e, this.key)),
                t && (e || 0 === e)) {
                    if (!n && this.register[e])
                        return this.update(e, t);
                    for (let i, r, a = 0; a < this.h.length; a++)
                        r = this.h[a],
                        i = this.K[a],
                        x(i) && (i = [i]),
                        V(t, i, this.A, 0, this.index[r], e, i[0], n);
                    if (this.I) {
                        let i = T(t, this.I)
                          , r = v();
                        x(i) && (i = [i]);
                        for (let t, a, s = 0; s < i.length; s++)
                            if (t = i[s],
                            !r[t] && (r[t] = 1,
                            a = this.l[t] || (this.l[t] = []),
                            !n || -1 === a.indexOf(e)) && (a[a.length] = e,
                            this.m)) {
                                const t = this.register[e] || (this.register[e] = []);
                                t[t.length] = a
                            }
                    }
                    if (this.store && (!n || !this.store[e])) {
                        let n;
                        if (this.C) {
                            n = v();
                            for (let e, i = 0; i < this.C.length; i++)
                                e = this.C[i],
                                x(e) ? n[e] = t[e] : U(t, n, e, 0, e[0])
                        }
                        this.store[e] = n || t
                    }
                }
                return this
            }
            ,
            t.append = function(e, t) {
                return this.add(e, t, !0)
            }
            ,
            t.update = function(e, t) {
                return this.remove(e).add(e, t)
            }
            ,
            t.remove = function(e) {
                if (C(e) && (e = T(e, this.key)),
                this.register[e]) {
                    for (var t = 0; t < this.h.length && (this.index[this.h[t]].remove(e, !this.o),
                    !this.m); t++)
                        ;
                    if (this.I && !this.m)
                        for (let n in this.l) {
                            const i = (t = this.l[n]).indexOf(e);
                            -1 !== i && (1 < t.length ? t.splice(i, 1) : delete this.l[n])
                        }
                    this.store && delete this.store[e],
                    delete this.register[e]
                }
                return this
            }
            ,
            t.search = function(e, t, n, i) {
                n || (!t && C(e) ? e = (n = e).query : C(t) && (n = t,
                t = 0));
                let r, a, s, o, l, c, u = [], h = [], m = 0;
                if (n)
                    if (n.constructor === Array)
                        s = n,
                        n = null;
                    else {
                        if (s = (r = n.pluck) || n.index || n.field,
                        o = n.tag,
                        a = this.store && n.enrich,
                        l = "and" === n.bool,
                        t = n.limit || 100,
                        c = n.offset || 0,
                        o && (x(o) && (o = [o]),
                        !e)) {
                            for (let e, n = 0; n < o.length; n++)
                                (e = ya.call(this, o[n], t, c, a)) && (u[u.length] = e,
                                m++);
                            return m ? u : []
                        }
                        x(s) && (s = [s])
                    }
                s || (s = this.h),
                l = l && (1 < s.length || o && 1 < o.length);
                const f = !i && (this.o || this.async) && [];
                for (let d, p, g, v = 0; v < s.length; v++) {
                    let r;
                    if (p = s[v],
                    x(p) || (r = p,
                    p = p.field),
                    f)
                        f[v] = this.index[p].searchAsync(e, t, r || n);
                    else {
                        if (d = i ? i[v] : this.index[p].search(e, t, r || n),
                        g = d && d.length,
                        o && g) {
                            const e = [];
                            let n = 0;
                            l && (e[0] = [d]);
                            for (let t, i, r = 0; r < o.length; r++)
                                t = o[r],
                                (g = (i = this.l[t]) && i.length) && (n++,
                                e[e.length] = l ? [i] : i);
                            n && (d = l ? ma(e, t || 100, c || 0) : na(d, e),
                            g = d.length)
                        }
                        if (g)
                            h[m] = p,
                            u[m++] = d;
                        else if (l)
                            return []
                    }
                }
                if (f) {
                    const i = this;
                    return new Promise((function(r) {
                        Promise.all(f).then((function(a) {
                            r(i.search(e, t, n, a))
                        }
                        ))
                    }
                    ))
                }
                if (!m)
                    return [];
                if (r && (!a || !this.store))
                    return u[0];
                for (let d, p = 0; p < h.length; p++) {
                    if (d = u[p],
                    d.length && a && (d = za.call(this, d)),
                    r)
                        return d;
                    u[p] = {
                        field: h[p],
                        result: d
                    }
                }
                return u
            }
            ,
            t.contain = function(e) {
                return !!this.register[e]
            }
            ,
            t.get = function(e) {
                return this.store[e]
            }
            ,
            t.set = function(e, t) {
                return this.store[e] = t,
                this
            }
            ,
            t.searchCache = oa,
            t.export = function(e, t, n, i, r) {
                if (r || (r = 0),
                i || (i = 0),
                i < this.h.length) {
                    const n = this.h[i]
                      , a = this.index[n];
                    t = this,
                    setTimeout((function() {
                        a.export(e, t, r ? n.replace(":", "-") : "", i, r++) || (i++,
                        r = 1,
                        t.export(e, t, n, i, r))
                    }
                    ))
                } else {
                    let t;
                    switch (r) {
                    case 1:
                        n = "tag",
                        t = this.l;
                        break;
                    case 2:
                        n = "store",
                        t = this.store;
                        break;
                    default:
                        return
                    }
                    ra(e, this, n, i, r, t)
                }
            }
            ,
            t.import = function(e, t) {
                if (t)
                    switch (x(t) && (t = JSON.parse(t)),
                    e) {
                    case "tag":
                        this.l = t;
                        break;
                    case "reg":
                        this.m = !1,
                        this.register = t;
                        for (let e, i = 0; i < this.h.length; i++)
                            e = this.index[this.h[i]],
                            e.register = t,
                            e.m = !1;
                        break;
                    case "store":
                        this.store = t;
                        break;
                    default:
                        const n = (e = e.split("."))[0];
                        e = e[1],
                        n && e && this.index[n].import(e, t)
                    }
            }
            ,
            la(Q.prototype);
            var Ba = {
                encode: Aa,
                F: !1,
                G: ""
            };
            const Ca = [F("[àáâãäå]"), "a", F("[èéêë]"), "e", F("[ìíîï]"), "i", F("[òóôõöő]"), "o", F("[ùúûüű]"), "u", F("[ýŷÿ]"), "y", F("ñ"), "n", F("[çc]"), "k", F("ß"), "s", F(" & "), " and "];
            function Aa(e) {
                var t = e;
                return t.normalize && (t = t.normalize("NFD").replace(ea, "")),
                ca.call(this, t.toLowerCase(), !e.normalize && Ca)
            }
            var Ea = {
                encode: Da,
                F: !1,
                G: "strict"
            };
            const Fa = /[^a-z0-9]+/
              , Ga = {
                b: "p",
                v: "f",
                w: "f",
                z: "s",
                x: "s",
                "ß": "s",
                d: "t",
                n: "m",
                c: "k",
                g: "k",
                j: "k",
                q: "k",
                i: "e",
                y: "e",
                u: "o"
            };
            function Da(e) {
                const t = [];
                if (e = Aa.call(this, e).join(" ")) {
                    const n = e.split(Fa)
                      , i = n.length;
                    for (let r, a = 0, s = 0; a < i; a++)
                        if ((e = n[a]) && (!this.filter || !this.filter[e])) {
                            r = e[0];
                            let n = Ga[r] || r
                              , i = n;
                            for (let t = 1; t < e.length; t++) {
                                r = e[t];
                                const a = Ga[r] || r;
                                a && a !== i && (n += a,
                                i = a)
                            }
                            t[s++] = n
                        }
                }
                return t
            }
            var Ia = {
                encode: Ha,
                F: !1,
                G: ""
            };
            const Ja = [F("ae"), "a", F("oe"), "o", F("sh"), "s", F("th"), "t", F("ph"), "f", F("pf"), "f", F("(?![aeo])h(?![aeo])"), "", F("(?!^[aeo])h(?!^[aeo])"), ""];
            function Ha(e, t) {
                return e && (2 < (e = Da.call(this, e).join(" ")).length && (e = E(e, Ja)),
                t || (1 < e.length && (e = ha(e)),
                e && (e = e.split(" ")))),
                e
            }
            var La = {
                encode: Ka,
                F: !1,
                G: ""
            };
            const Ma = F("(?!\\b)[aeo]");
            function Ka(e) {
                return e && (1 < (e = Ha.call(this, e, !0)).length && (e = e.replace(Ma, "")),
                1 < e.length && (e = ha(e)),
                e && (e = e.split(" "))),
                e
            }
            G["latin:default"] = ja,
            G["latin:simple"] = Ba,
            G["latin:balance"] = Ea,
            G["latin:advanced"] = Ia,
            G["latin:extra"] = La;
            const W = self;
            let Y;
            const Z = {
                Index: K,
                Document: Q,
                Worker: O,
                registerCharset: function(e, t) {
                    G[e] = t
                },
                registerLanguage: function(e, t) {
                    ka[e] = t
                }
            };
            (Y = W.define) && Y.amd ? Y([], (function() {
                return Z
            }
            )) : W.exports ? W.exports = Z : W.FlexSearch = Z
        }(this)
    },
    7470: function(e, t, n) {
        "use strict";
        n.d(t, {
            I: function() {
                return u
            }
        });
        var i = n(3433)
          , r = n(7294)
          , a = n(9230)
          , s = n.n(a)
          , o = n(3578)
          , l = n.n(o)
          , c = n(6180);
        function u(e) {
            let {value: t, onChange: n=(()=>{}
            ), onFocus: a=(()=>{}
            ), throttleDuration: o=30, className: u, placeholder: h, label: m, buttonLabel: f, type: d} = e;
            const {0: p, 1: g} = (0,
            r.useState)(t || "")
              , {0: v, 1: y} = (0,
            r.useState)(!1)
              , b = function(e, t) {
                let n, r;
                function a() {
                    for (var a = arguments.length, s = new Array(a), o = 0; o < a; o++)
                        s[o] = arguments[o];
                    r = s,
                    n || (n = setTimeout((()=>{
                        e.apply(void 0, (0,
                        i.Z)(r)),
                        n = null
                    }
                    ), t))
                }
                return a
            }(n, o)
              , E = (0,
            r.useRef)()
              , w = (0,
            r.useRef)()
              , x = (0,
            r.useCallback)((e=>{
                v || (g(e.target.value),
                b(e.target.value))
            }
            ), [v])
              , k = (0,
            r.useCallback)((e=>{
                y(!1),
                x(e)
            }
            ), [])
              , N = (0,
            r.useCallback)((e=>{
                var t;
                "Escape" === e.key && (g(""),
                n(""),
                null === (t = E.current) || void 0 === t || t.blur(),
                e.preventDefault())
            }
            ), [])
              , C = (0,
            r.useCallback)((e=>{
                var t;
                p && (g(""),
                n(""),
                null === (t = E.current) || void 0 === t || t.focus());
                e.stopPropagation()
            }
            ), [p])
              , A = (0,
            r.useCallback)((e=>{
                const t = E.current
                  , n = w.current;
                !t || document.activeElement === t || n && n.contains(e.target) || t.focus()
            }
            ), [p, w]);
            return r.createElement("div", {
                className: (0,
                c.AK)(null, u),
                onClick: A
            }, " " === d && r.createElement(l(), {
                className: ""
            }), r.createElement("div", {
                placeholder: h,
                className: "fake",
                value: p,
                onInput: x,
                onFocus: a,
                onKeyDown: N,
                onCompositionStart: ()=>y(!0),
                onCompositionEnd: k,
                " ": m,
                ref: E
            }), r.createElement("div", {
                className: "  ",
                " ": f,
                onClick: C,
                disabled: !p,
                ref: w
            }, r.createElement(s(), null)))
        }
    },
    3571: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return U
            }
        });
        var i = n(7294)
          , r = n(6180)
          , a = n(1597)
          , s = n(7470)
          , o = " "
          , l = n(6793)
          , c = n(6304)
          , u = n(182)
          , h = n(3631);
        function m(e) {
            let {className: t, onChange: n, perPage: r=10} = e;
            const {pathname: m} = (0,
            h.useLocation)();
            if (m.includes("/v3/"))
                return null;
            const d = (0,
            a.useStaticQuery)("2815821798")
              , {t: p} = (0,
            l.$)()
              , {options: g, indexURL: v, storeURL: y} = d.searchPages
              , b = (0,
            i.useRef)(new c.Index(g))
              , {current: E} = b
              , {0: w, 1: x} = (0,
            i.useState)("")
              , {0: k, 1: N} = (0,
            i.useState)(0)
              , {0: C, 1: A} = (0,
            i.useState)()
              , {0: S, 1: O} = (0,
            i.useState)(!1)
              , F = (0,
            i.useCallback)((e=>{
                x(e),
                N(0),
                n && n(L, e)
            }
            ), [n])
              , T = (0,
            i.useCallback)((()=>{
                C || S || (O(!0),
                Promise.all([fetch(v), fetch(y)]).then((e=>Promise.all(e.map((e=>e.json()))))).then((e=>{
                    let[t,n] = e;
                    (0,
                    u.M6)(t, ((e,t)=>{
                        b.current.import(t.toString().split(".").pop(), e)
                    }
                    )),
                    A(n),
                    O(!1)
                }
                )))
            }
            ), [C, S]);
            let L = [];
            return E && C && w && (L = E.search(w).map((e=>C[e]))),
            i.createElement("div", {
                className: t
            }, i.createElement(s.I, {
                className: "fake",
                type: " ",
                onChange: F,
                onFocus: T,
                placeholder: p(" "),
                label: p(" "),
                buttonLabel: p(" ")
            }), L.length ? i.createElement(" ", {
                className: o
            }, i.createElement(" ", {
                className: "   "
            }, L.slice(0, r * (k + 1)).map(((e,t)=>i.createElement(f, {
                key: t,
                result: e,
                query: w
            })))), L.length > r * (k + 1) && i.createElement(" ", {
                className: ""
            }, i.createElement(" ", {
                className: "fake"
            }), i.createElement(" ", {
                className: "fake",
                onClick: ()=>N(k + 1)
            }, p(" v")))) : !!w && i.createElement(" ", {
                className: o
            }, p("   ")))
        }
        function f(e) {
            let {result: t, query: n} = e;
            const r = d(t.headings, n, " ")
              , s = d(t.texts, n, "", 30, 1);
            return i.createElement(" ", {
                key: t.id,
                className: "fake"
            }, i.createElement(" ", {
                className: "fake"
            }, i.createElement(a.Link, {
                to: t.slug,
                className: "fake"
            }, i.createElement(" ", {
                className: "fake"
            }, t.title), i.createElement(" ", {
                className: "fake"
            }, " — ", t.category))), !!s.length && i.createElement(" ", {
                className: "fake"
            }, s.map(((e,t)=>{
                let[,n] = e;
                return i.createElement(" ", {
                    key: t,
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                })
            }
            ))), !!r.length && i.createElement("ul", {
                className: "fake"
            }, r.map(((e,n)=>{
                let[r,s] = e;
                const o = r.replace(/\s/g, "").toLowerCase();
                return i.createElement(" ", {
                    key: n
                }, i.createElement(a.Link, {
                    to: `${t.slug}#${o}`,
                    className: "fake"
                }, i.createElement(" ", {
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                })))
            }
            ))), !r.length && !s.length && i.createElement(" ", {
                className: ""
            }, t.excerpt))
        }
        function d(e, t, n, i, r) {
            void 0 === n && (n = ""),
            void 0 === i && (i = 20),
            void 0 === r && (r = 3);
            const a = [];
            t = t.toLowerCase();
            for (let s = 0; s < e.length && a.length < r; s++) {
                const r = e[s].replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                if (r.length <= 1)
                    continue;
                const o = r.toLowerCase()
                  , l = t.split(" ").filter(Boolean)
                  , c = l.find((e=>o.includes(e)));
                if (!c)
                    continue;
                const u = l.filter((e=>e !== c))
                  , h = o.indexOf(c);
                if (h > -1) {
                    const e = h + c.length
                      , t = g(r, h, i)
                      , s = v(r, e, i)
                      , o = n + (t ? "…" : "") + p(r.slice(t, h), u) + `<em>${r.slice(h, e)}</em>` + p(r.slice(e, s), u) + (s !== r.length ? "…" : "");
                    a.push([r, o])
                }
            }
            return a
        }
        function p(e, t) {
            if (t.length) {
                const n = t[0]
                  , i = t.slice(1)
                  , r = e.toLowerCase().indexOf(n.toLowerCase());
                if (r > -1)
                    return p(e.slice(0, r), i) + `<em>${e.slice(r, r + n.length)}</em>` + p(e.slice(r + n.length), i)
            }
            return e
        }
        function g(e, t, n, i) {
            if (void 0 === n && (n = 20),
            void 0 === i && (i = 20),
            (t -= n) > 0 && i > 0)
                for (; t-- && i--; )
                    if ([" ", "。", "、"].includes(e.charAt(t)))
                        return t;
            return 0
        }
        function v(e, t, n, i) {
            void 0 === n && (n = 20),
            void 0 === i && (i = 20);
            const {length: r} = e;
            if ((t += n) < r && i > 0) {
                for (; t++ && i-- && ![" ", "。", "、"].includes(e.charAt(t)); )
                    ;
                return t
            }
            return r
        }
        var y = n(3414)
          , b = n.n(y)
          , E = n(1796)
          , w = n.n(E);
        function x(e) {
            let {id: t, title: n, slug: s, isActive: o} = e;
            return i.createElement(" ", {
                key: t,
                className: (0,
                r.AK)(" ")
            }, i.createElement(a.Link, {
                className: (0,
                r.AK)(" ", o && " "),
                to: s
            }, n))
        }
        var k = n(4184)
          , N = function(e, t) {
            var n = {};
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                    t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
            }
            return n
        };
        function C(e) {
            return "string" == typeof e && "%" === e[e.length - 1] && function(e) {
                const t = parseFloat(e);
                return !isNaN(t) && isFinite(t)
            }(e.substring(0, e.length - 1))
        }
        function A(e, t) {
            0 === t && (null == e ? void 0 : e.style) && (e.style.display = "none")
        }
        const S = {
            animating: "rah-animating",
            animatingUp: "rah-animating--up",
            animatingDown: "rah-animating--down",
            animatingToHeightZero: "rah-animating--to-height-zero",
            animatingToHeightAuto: "rah-animating--to-height-auto",
            animatingToHeightSpecific: "rah-animating--to-height-specific",
            static: "rah-static",
            staticHeightZero: "rah-static--height-zero",
            staticHeightAuto: "rah-static--height-auto",
            staticHeightSpecific: "rah-static--height-specific"
        };
        function O(e, t) {
            return k({
                [e.static]: !0,
                [e.staticHeightZero]: 0 === t,
                [e.staticHeightSpecific]: t > 0,
                [e.staticHeightAuto]: "auto" === t
            })
        }
        var F = e=>{
            var {animateOpacity: t=!1, animationStateClasses: n={}, applyInlineTransitions: r=!0, children: a, className: s="", contentClassName: o, delay: l=0, duration: c=500, easing: u="ease", height: h, onHeightAnimationEnd: m, onHeightAnimationStart: f, style: d} = e
              , p = N(e, ["animateOpacity", "animationStateClasses", "applyInlineTransitions", "children", "className", "contentClassName", "delay", "duration", "easing", "height", "onHeightAnimationEnd", "onHeightAnimationStart", "style"]);
            const g = (0,
            i.useRef)(h)
              , v = (0,
            i.useRef)(null)
              , y = (0,
            i.useRef)()
              , b = (0,
            i.useRef)()
              , E = (0,
            i.useRef)(Object.assign(Object.assign({}, S), n))
              , w = "undefined" != typeof window
              , x = (0,
            i.useRef)(!(!w || !window.matchMedia) && window.matchMedia("(prefers-reduced-motion)").matches)
              , F = x.current ? 0 : l
              , T = x.current ? 0 : c;
            let L = h
              , H = "visible";
            "number" == typeof L ? (L = h < 0 ? 0 : h,
            H = "hidden") : C(L) && (L = "0%" === h ? 0 : h,
            H = "hidden");
            const [_,K] = (0,
            i.useState)(L)
              , [$,j] = (0,
            i.useState)(H)
              , [I,D] = (0,
            i.useState)(!1)
              , [M,W] = (0,
            i.useState)(O(E.current, h));
            (0,
            i.useEffect)((()=>{
                A(v.current, _)
            }
            ), []),
            (0,
            i.useEffect)((()=>{
                if (h !== g.current && v.current) {
                    !function(e, t) {
                        0 === t && (null == e ? void 0 : e.style) && (e.style.display = "")
                    }(v.current, g.current),
                    v.current.style.overflow = "hidden";
                    const e = v.current.offsetHeight;
                    v.current.style.overflow = "";
                    const t = T + F;
                    let n, i, r, a = "hidden";
                    const s = "auto" === g.current;
                    "number" == typeof h ? (n = h < 0 ? 0 : h,
                    i = n) : C(h) ? (n = "0%" === h ? 0 : h,
                    i = n) : (n = e,
                    i = "auto",
                    a = void 0),
                    s && (i = n,
                    n = e);
                    const o = k({
                        [E.current.animating]: !0,
                        [E.current.animatingUp]: "auto" === g.current || h < g.current,
                        [E.current.animatingDown]: "auto" === h || h > g.current,
                        [E.current.animatingToHeightZero]: 0 === i,
                        [E.current.animatingToHeightAuto]: "auto" === i,
                        [E.current.animatingToHeightSpecific]: i > 0
                    })
                      , l = O(E.current, i);
                    K(n),
                    j("hidden"),
                    D(!s),
                    W(o),
                    clearTimeout(b.current),
                    clearTimeout(y.current),
                    s ? (r = !0,
                    b.current = setTimeout((()=>{
                        K(i),
                        j(a),
                        D(r),
                        null == f || f(i)
                    }
                    ), 50),
                    y.current = setTimeout((()=>{
                        D(!1),
                        W(l),
                        A(v.current, i),
                        null == m || m(i)
                    }
                    ), t)) : (null == f || f(n),
                    b.current = setTimeout((()=>{
                        K(i),
                        j(a),
                        D(!1),
                        W(l),
                        "auto" !== h && A(v.current, n),
                        null == m || m(n)
                    }
                    ), t))
                }
                return g.current = h,
                ()=>{
                    clearTimeout(b.current),
                    clearTimeout(y.current)
                }
            }
            ), [h]);
            const z = Object.assign(Object.assign({}, d), {
                height: _,
                overflow: $ || (null == d ? void 0 : d.overflow)
            });
            I && r && (z.transition = `height ${T}ms ${u} ${F}ms`,
            (null == d ? void 0 : d.transition) && (z.transition = `${d.transition}, ${z.transition}`),
            z.WebkitTransition = z.transition);
            const B = {};
            t && (B.transition = `opacity ${T}ms ${u} ${F}ms`,
            B.WebkitTransition = B.transition,
            0 === _ && (B.opacity = 0));
            const P = void 0 !== p["aria-hidden"] ? p["aria-hidden"] : 0 === h;
            return i.createElement("div", Object.assign({}, p, {
                "aria-hidden": P,
                className: `${M} ${s}`,
                style: z
            }), i.createElement("div", {
                className: o,
                style: B,
                ref: v
            }, a))
        }
        ;
        function T(e) {
            let {id: t, items: n, height: r, duration: a=250} = e;
            const {pathname: s} = (0,
            h.useLocation)();
            return i.createElement(F, {
                id: t,
                duration: a,
                height: r
            }, i.createElement("ul", null, n.map((e=>{
                let {id: t, slug: n, title: r, isActive: a} = e;
                return i.createElement(x, {
                    key: t,
                    id: t,
                    title: r,
                    slug: n,
                    isActive: a || s === n
                })
            }
            ))))
        }
        function L(e) {
            let {id: t, heading: n, items: a} = e;
            const {i18n: {language: s}} = (0,
            l.$)("common")
              , {0: o, 1: c} = (0,
            i.useState)("auto")
              , u = `sidebar-panel-${t}`
              , h = !!o;
            return a.length ? i.createElement("section", {
                className: "sidebar-section-module--section--V94lC"
            }, i.createElement("h3", {
                className: (0,
                r.AK)("sidebar-section-module--heading--7dQoA", "en" !== s && "sidebar-section-module--heading-multi--KMJBY")
            }, i.createElement("button", {
                "aria-expanded": h,
                "aria-controls": u,
                "aria-label": `${h ? "Collapse" : "Open"} ${t} panel`,
                onClick: ()=>c("auto" === o ? 0 : "auto"),
                className: (0,
                r.AK)("sidebar-section-module--button--H-Sgx", h && "sidebar-section-module--button-is-active--zp6Sd")
            }, i.createElement(w(), null), i.createElement("span", null, n))), i.createElement(T, {
                id: u,
                items: a,
                height: o,
                duration: 250
            })) : null
        }
        var H = n(628);
        function _(e) {
            let {data: t} = e;
            const {i18n: {language: n}, t: r} = (0,
            l.$)("common")
              , {version: a} = (0,
            H.aw)();
            return b().map((e=>{
                let {category: s} = e;
                const o = t.allMdx.edges.filter((e=>{
                    const {fields: t} = e.node;
                    return t.category === s && t.language === n && t.version === a
                }
                ));
                return o.length ? i.createElement(L, {
                    key: s,
                    id: s,
                    heading: r(s),
                    items: o.map((e=>{
                        let {node: t} = e;
                        return {
                            id: t.id,
                            slug: t.fields.slug,
                            title: t.frontmatter.localizedTitle || t.frontmatter.title
                        }
                    }
                    ))
                }) : null
            }
            ))
        }
        var K = n(1009)
          , $ = n.n(K)
          , j = n(7326)
          , I = n(4578)
          , D = n(1534);
        let M = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).state = {
                    isOpen: !1
                },
                n.id = n.getId(),
                n.onClickWindow = n.onClickWindow.bind((0,
                j.Z)(n)),
                n.wrapperRef = i.createRef(),
                n
            }
            (0,
            I.Z)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                window.addEventListener("click", this.onClickWindow)
            }
            ,
            n.componentWillUnmount = function() {
                window.removeEventListener("click", this.onClickWindow)
            }
            ,
            n.getId = function() {
                return this.props.id || `popup-${("" + ++t.index).padStart(2, "0")}`
            }
            ,
            n.onClick = function() {
                this.setState({
                    isOpen: !this.state.isOpen
                })
            }
            ,
            n.onClickWindow = function(e) {
                const {target: t} = e
                  , {current: n} = this.wrapperRef;
                n && this.state.isOpen && (t === n || n.contains(t) || this.setState({
                    isOpen: !1
                }))
            }
            ,
            n.render = function() {
                const {label: e, buttonClass: t, panelClass: n, contentClass: a, children: s, className: o, duration: l=150} = this.props
                  , {isOpen: c} = this.state;
                return i.createElement("div", {
                    className: (0,
                    r.AK)(" ", o),
                    ref: this.wrapperRef
                }, i.createElement(D.z, {
                    isTertiary: !0,
                    isTiny: !0,
                    hasMargin: !1,
                    "aria-expanded": c,
                    "aria-haspopup": "true",
                    "aria-controls": this.id,
                    icon: "angleDown",
                    className: (0,
                    r.AK)(t),
                    onClick: this.onClick.bind(this)
                }, e), i.createElement(F, {
                    id: this.id,
                    duration: l,
                    height: c ? "auto" : 0,
                    className: (0,
                    r.AK)("popup-module--panel--aYhtE", n),
                    easing: "ease-out"
                }, i.createElement("div", {
                    className: (0,
                    r.AK)(" ", a)
                }, s)))
            }
            ,
            t
        }(i.Component);
        M.index = 0;
        var W = " "
          , z = n(8288)
          , B = n.n(z);
        function P(e) {
            let {to: t, children: n, isActive: s} = e;
            return i.createElement("li", null, s && i.createElement("div", {
                className: (0,
                r.AK)(W, " ")
            }, i.createElement(B(), {
                className: "fake"
            }), " ", n), s || i.createElement(a.Link, {
                className: (0,
                r.AK)(W, " "),
                to: t
            }, n))
        }
        function G(e) {
            let {items: t=[], as: n="div", ...r} = e;
            const a = n;
            return i.createElement(M, r, i.createElement(a, {
                className: "fake"
            }, i.createElement("ul", null, t.map((e=>i.createElement(P, {
                key: e.to,
                to: e.to,
                isActive: e.isActive
            }, e.label))))))
        }
        function R(e) {
            let {className: t} = e;
            const {t: n} = (0,
            l.$)()
              , {version: r, number: a} = (0,
            H.aw)()
              , {isMulti: s} = (0,
            H.bU)()
              , o = s() ? `（${n(" ")}）` : ` (${n(" ")})`;
            return i.createElement(G, {
                className: t,
                label: `${n(" ")} ${a}`,
                panelClass: " ",
                items: $().map(((e,t)=>({
                    label: `${n(" ")} ${e.number}${t ? o : ""}`,
                    to: e.slug,
                    isActive: r === e.version
                })))
            })
        }
        function q(e) {
            let {className: t} = e;
            const {0: n, 1: s} = (0,
            i.useState)(!1)
              , {t: o} = (0,
            l.$)("common")
              , {isMulti: c} = (0,
            H.bU)();
            return i.createElement("aside", {
                className: (0,
                r.AK)(" ", c() && "", t)
            }, i.createElement(m, {
                className: "fake",
                onChange: (e,t)=>s(!!t)
            }), i.createElement("div", {
                className: (0,
                r.AK)(n && " ")
            }, i.createElement("div", {
                className: "fake"
            }, i.createElement(R, {
                className: "fake"
            }), i.createElement(D.z, {
                isTertiary: !0,
                isTiny: !0,
                hasMargin: !1,
                className: "fake",
                icon: " ",
                to: ""
            }, o(" "))), i.createElement(a.StaticQuery, {
                query: Q,
                render: J
            })))
        }
        function J(e) {
            return i.createElement(_, {
                data: e
            })
        }
        const Q = "894316385";
        function Z(e) {
            let {className: t, isNarrow: n, isWide: a, isHome: s, children: o, hasSidebar: l, bodyClassName: c, hasDecoration: u} = e;
            return i.createElement("div", {
                className: (0,
                r.AK)(t, " ", a && " ", n && " ", !a && !n && "", l && " ")
            }, !l && o, l && i.createElement(i.Fragment, null, i.createElement("div", {
                className: (0,
                r.AK)(" ", c)
            }, o), i.createElement(q, {
                className: (0,
                r.AK)("", s && " ")
            }), u && i.createElement("div", {
                role: " ",
                " ": " "
            }, i.createElement("div", {
                className: (0,
                r.AK)(" ", " ")
            }))))
        }
        function U(e) {
            let {as: t="section", id: n, className: a, contentClassName: s, contentBodyClassName: o, heading: l, children: c, isNarrow: u, isWide: h, isHome: m, hasSidebar: f, hasContentStyles: d, hasDecoration: p} = e;
            return i.createElement(t, {
                id: n,
                className: (0,
                r.AK)(" ", a)
            }, i.createElement(Z, {
                isNarrow: u,
                isWide: h,
                isHome: m,
                hasSidebar: f,
                className: (0,
                r.AK)(d && "", s),
                bodyClassName: o,
                hasDecoration: p
            }, l && i.createElement("h2", {
                className: (0,
                r.AK)(" ")
            }, l), c))
        }
    },
    1632: function(e, t, n) {
        "use strict";
        n.d(t, {
            H: function() {
                return l
            }
        });
        var i = n(7294)
          , r = n(6793)
          , a = n(628)
          , s = n(3631)
          , o = n(6180);
        function l(e) {
            let {title: t, description: n, image: l, isArticle: c, children: u} = e;
            const {t: h} = (0,
            r.$)("common")
              , m = (0,
            a.$W)()
              , {isHome: f} = (0,
            a.eE)()
              , d = (0,
            s.useLocation)()
              , p = {
                title: f() ? m.homeTitle : m.titleTemplate.replace("%s", t || m.title),
                description: n || m.description,
                image: `${m.url}${l || m.image}`,
                url: `${m.url}${d.pathname}`
            };
            return i.createElement(i.Fragment, null, i.createElement("", null, p.title), i.createElement("", {
                name: "",
                content: p.description
            }), i.createElement("", {
                name: "",
                content: p.image
            }), i.createElement("", {
                property: "",
                content: p.title
            }), i.createElement("", {
                property: "",
                content: p.description
            }), i.createElement("", {
                property: "",
                content: f() ? "" : ""
            }), i.createElement("", {
                property: "",
                content: p.url
            }), i.createElement("", {
                property: "",
                content: p.image
            }), i.createElement(" ", {
                property: " ",
                content: m.imageWidth
            }), i.createElement(" ", {
                property: "",
                content: m.imageHeight
            }), i.createElement(" ", {
                name: " ",
                content: " "
            }), i.createElement(" ", {
                name: " ",
                content: m.shortName
            }), i.createElement(" ", {
                name: " ",
                content: m.shortName
            }), i.createElement(" ", {
                name: " ",
                content: m.msTileImage
            }), i.createElement(" ", {
                rel: " ",
                sizes: m.appleTouchIconSizes,
                href: m.appleTouchIcon
            }), i.createElement(" ", {
                rel: "   ",
                href: p.url
            }), i.createElement("", {
                type: ""
            }, JSON.stringify(function(e, t, n, i) {
                const {isHome: r} = (0,
                a.eE)()
                  , s = {
                    "@context": "http://schema.org",
                    "@type": r() ? "WebSite" : "WebPage",
                    url: r() ? e.url : t.url,
                    name: t.title,
                    description: t.description
                };
                if (!r()) {
                    const t = (0,
                    o.qT)(n, i);
                    s.breadcrumb = {
                        "@type": "BreadcrumbList",
                        itemListElement: t.map(((t,n)=>({
                            "@type": "ListItem",
                            position: n + 1,
                            item: {
                                "@id": `${e.url}${t.path}`,
                                name: t.label
                            }
                        })))
                    }
                }
                return s
            }(m, p, d, h))), u)
        }
    },
    8288: function(e, t, n) {
        var i = n(7294);
        function r(e) {
            return i.createElement("div", e, i.createElement("p", {

            }))
        }
        r.defaultProps = {

        },
        e.exports = r,
        r.default = r
    },
    9230: function(e, t, n) {
        var i = n(7294);
        function r(e) {
            return i.createElement("div", e, i.createElement("path", {

            }))
        }
        r.defaultProps = {

        },
        e.exports = r,
        r.default = r
    },
    3578: function(e, t, n) {
        var i = n(7294);
        function r(e) {
            return i.createElement("svg", e, i.createElement("path", {
                d: ""
            }))
        }
        r.defaultProps = {
            version: "",
            viewBox: " "
        },
        e.exports = r,
        r.default = r
    }
}]);
//# sourceMappingURL=efbe938c72216bb13e41c0f20ed1a5428cfc935d-acd7695bce1f2d48da39.js.map
