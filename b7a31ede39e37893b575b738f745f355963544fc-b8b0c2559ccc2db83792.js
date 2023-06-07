/*! For license information please see b7a31ede39e37893b575b738f745f355963544fc-b8b0c2559ccc2db83792.js.LICENSE.txt */
"use strict";
(self.webpackChunk_splidejs_splide_site = self.webpackChunk_splidejs_splide_site || []).push([[5187], {
    8595: function(t, n, e) {
        function i(t, n) {
            for (var e = 0; e < n.length; e++) {
                var i = n[e];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        e.d(n, {
            FN: function() {
                return _n
            },
            U3: function() {
                return Mn
            },
            MH: function() {
                return kn
            },
            Um: function() {
                return Ft
            },
            Yc: function() {
                return Wn
            },
            mU: function() {
                return Ht
            },
            tv: function() {
                return re
            },
            Iz: function() {
                return ue
            },
            Xo: function() {
                return Bt
            },
            ZP: function() {
                return re
            }
        });
        var r = "(prefers-reduced-motion: reduce)"
          , o = {
            CREATED: 1,
            MOUNTED: 2,
            IDLE: 3,
            MOVING: 4,
            SCROLLING: 5,
            DRAGGING: 6,
            DESTROYED: 7
        };
        function s(t) {
            t.length = 0
        }
        function u(t, n, e) {
            return Array.prototype.slice.call(t, n, e)
        }
        function a(t) {
            return t.bind.apply(t, [null].concat(u(arguments, 1)))
        }
        var c = setTimeout
          , l = function() {};
        function f(t) {
            return requestAnimationFrame(t)
        }
        function d(t, n) {
            return typeof n === t
        }
        function h(t) {
            return !y(t) && d("object", t)
        }
        var p = Array.isArray
          , v = a(d, "function")
          , g = a(d, "string")
          , m = a(d, "undefined");
        function y(t) {
            return null === t
        }
        function b(t) {
            try {
                return t instanceof (t.ownerDocument.defaultView || window).HTMLElement
            } catch (n) {
                return !1
            }
        }
        function w(t) {
            return p(t) ? t : [t]
        }
        function S(t, n) {
            w(t).forEach(n)
        }
        function C(t, n) {
            return t.indexOf(n) > -1
        }
        function x(t, n) {
            return t.push.apply(t, w(n)),
            t
        }
        function E(t, n, e) {
            t && S(n, (function(n) {
                n && t.classList[e ? "add" : "remove"](n)
            }
            ))
        }
        function k(t, n) {
            E(t, g(n) ? n.split(" ") : n, !0)
        }
        function _(t, n) {
            S(n, t.appendChild.bind(t))
        }
        function P(t, n) {
            S(t, (function(t) {
                var e = (n || t).parentNode;
                e && e.insertBefore(t, n)
            }
            ))
        }
        function L(t, n) {
            return b(t) && (t.msMatchesSelector || t.matches).call(t, n)
        }
        function A(t, n) {
            var e = t ? u(t.children) : [];
            return n ? e.filter((function(t) {
                return L(t, n)
            }
            )) : e
        }
        function O(t, n) {
            return n ? A(t, n)[0] : t.firstElementChild
        }
        var M = Object.keys;
        function D(t, n, e) {
            return t && (e ? M(t).reverse() : M(t)).forEach((function(e) {
                "__proto__" !== e && n(t[e], e)
            }
            )),
            t
        }
        function V(t) {
            return u(arguments, 1).forEach((function(n) {
                D(n, (function(e, i) {
                    t[i] = n[i]
                }
                ))
            }
            )),
            t
        }
        function z(t) {
            return u(arguments, 1).forEach((function(n) {
                D(n, (function(n, e) {
                    p(n) ? t[e] = n.slice() : h(n) ? t[e] = z({}, h(t[e]) ? t[e] : {}, n) : t[e] = n
                }
                ))
            }
            )),
            t
        }
        function T(t, n) {
            S(n || M(t), (function(n) {
                delete t[n]
            }
            ))
        }
        function I(t, n) {
            S(t, (function(t) {
                S(n, (function(n) {
                    t && t.removeAttribute(n)
                }
                ))
            }
            ))
        }
        function N(t, n, e) {
            h(n) ? D(n, (function(n, e) {
                N(t, e, n)
            }
            )) : S(t, (function(t) {
                y(e) || "" === e ? I(t, n) : t.setAttribute(n, String(e))
            }
            ))
        }
        function R(t, n, e) {
            var i = document.createElement(t);
            return n && (g(n) ? k(i, n) : N(i, n)),
            e && _(e, i),
            i
        }
        function j(t, n, e) {
            if (m(e))
                return getComputedStyle(t)[n];
            y(e) || (t.style[n] = "" + e)
        }
        function W(t, n) {
            j(t, "display", n)
        }
        function F(t) {
            t.setActive && t.setActive() || t.focus({
                preventScroll: !0
            })
        }
        function H(t, n) {
            return t.getAttribute(n)
        }
        function B(t, n) {
            return t && t.classList.contains(n)
        }
        function X(t) {
            return t.getBoundingClientRect()
        }
        function G(t) {
            S(t, (function(t) {
                t && t.parentNode && t.parentNode.removeChild(t)
            }
            ))
        }
        function U(t) {
            return O((new DOMParser).parseFromString(t, "text/html").body)
        }
        function Y(t, n) {
            t.preventDefault(),
            n && (t.stopPropagation(),
            t.stopImmediatePropagation())
        }
        function q(t, n) {
            return t && t.querySelector(n)
        }
        function $(t, n) {
            return n ? u(t.querySelectorAll(n)) : []
        }
        function K(t, n) {
            E(t, n, !1)
        }
        function J(t) {
            return t.timeStamp
        }
        function Q(t) {
            return g(t) ? t : t ? t + "px" : ""
        }
        var Z = "splide"
          , tt = "data-splide";
        function nt(t, n) {
            if (!t)
                throw new Error("[splide] " + (n || ""))
        }
        var et = Math.min
          , it = Math.max
          , rt = Math.floor
          , ot = Math.ceil
          , st = Math.abs;
        function ut(t, n, e) {
            return st(t - n) < e
        }
        function at(t, n, e, i) {
            var r = et(n, e)
              , o = it(n, e);
            return i ? r < t && t < o : r <= t && t <= o
        }
        function ct(t, n, e) {
            var i = et(n, e)
              , r = it(n, e);
            return et(it(i, t), r)
        }
        function lt(t) {
            return +(t > 0) - +(t < 0)
        }
        function ft(t) {
            return t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
        }
        function dt(t, n) {
            return S(n, (function(n) {
                t = t.replace("%s", "" + n)
            }
            )),
            t
        }
        function ht(t) {
            return t < 10 ? "0" + t : "" + t
        }
        var pt = {};
        function vt(t) {
            return "" + t + ht(pt[t] = (pt[t] || 0) + 1)
        }
        function gt() {
            var t = [];
            function n(t, n, e) {
                S(t, (function(t) {
                    t && S(n, (function(n) {
                        n.split(" ").forEach((function(n) {
                            var i = n.split(".");
                            e(t, i[0], i[1])
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            return {
                bind: function(e, i, r, o) {
                    n(e, i, (function(n, e, i) {
                        var s = "addEventListener"in n
                          , u = s ? n.removeEventListener.bind(n, e, r, o) : n.removeListener.bind(n, r);
                        s ? n.addEventListener(e, r, o) : n.addListener(r),
                        t.push([n, e, i, r, u])
                    }
                    ))
                },
                unbind: function(e, i, r) {
                    n(e, i, (function(n, e, i) {
                        t = t.filter((function(t) {
                            return !!(t[0] !== n || t[1] !== e || t[2] !== i || r && t[3] !== r) || (t[4](),
                            !1)
                        }
                        ))
                    }
                    ))
                },
                dispatch: function(t, n, e) {
                    var i;
                    return "function" == typeof CustomEvent ? i = new CustomEvent(n,{
                        bubbles: true,
                        detail: e
                    }) : (i = document.createEvent("CustomEvent")).initCustomEvent(n, true, !1, e),
                    t.dispatchEvent(i),
                    i
                },
                destroy: function() {
                    t.forEach((function(t) {
                        t[4]()
                    }
                    )),
                    s(t)
                }
            }
        }
        var mt = "mounted"
          , yt = "ready"
          , bt = "move"
          , wt = "moved"
          , St = "click"
          , Ct = "active"
          , xt = "inactive"
          , Et = "visible"
          , kt = "hidden"
          , _t = "refresh"
          , Pt = "updated"
          , Lt = "resize"
          , At = "resized"
          , Ot = "scroll"
          , Mt = "scrolled"
          , Dt = "destroy"
          , Vt = "arrows:mounted"
          , zt = "navigation:mounted"
          , Tt = "autoplay:play"
          , It = "autoplay:pause"
          , Nt = "lazyload:loaded"
          , Rt = "sk"
          , jt = "sh"
          , Wt = "ei";
        function Ft(t) {
            var n = t ? t.event.bus : document.createDocumentFragment()
              , e = gt();
            return t && t.event.on(Dt, e.destroy),
            V(e, {
                bus: n,
                on: function(t, i) {
                    e.bind(n, w(t).join(" "), (function(t) {
                        i.apply(i, p(t.detail) ? t.detail : [])
                    }
                    ))
                },
                off: a(e.unbind, n),
                emit: function(t) {
                    e.dispatch(n, t, u(arguments, 1))
                }
            })
        }
        function Ht(t, n, e, i) {
            var r, o, s = Date.now, u = 0, a = !0, c = 0;
            function l() {
                if (!a) {
                    if (u = t ? et((s() - r) / t, 1) : 1,
                    e && e(u),
                    u >= 1 && (n(),
                    r = s(),
                    i && ++c >= i))
                        return d();
                    o = f(l)
                }
            }
            function d() {
                a = !0
            }
            function h() {
                o && cancelAnimationFrame(o),
                u = 0,
                o = 0,
                a = !0
            }
            return {
                start: function(n) {
                    n || h(),
                    r = s() - (n ? u * t : 0),
                    a = !1,
                    o = f(l)
                },
                rewind: function() {
                    r = s(),
                    u = 0,
                    e && e(u)
                },
                pause: d,
                cancel: h,
                set: function(n) {
                    t = n
                },
                isPaused: function() {
                    return a
                }
            }
        }
        function Bt(t, n) {
            var e = Ht(n || 0, t, null, 1);
            return function() {
                e.isPaused() && e.start()
            }
        }
        var Xt = "ArrowLeft"
          , Gt = "ArrowRight"
          , Ut = "ArrowUp"
          , Yt = "ArrowDown"
          , qt = "ttb"
          , $t = {
            width: ["height"],
            left: ["top", "right"],
            right: ["bottom", "left"],
            x: ["y"],
            X: ["Y"],
            Y: ["X"],
            ArrowLeft: [Ut, Gt],
            ArrowRight: [Yt, Xt]
        };
        function Kt(t, n, e) {
            return {
                resolve: function(t, n, i) {
                    var r = "rtl" !== (i = i || e.direction) || n ? i === qt ? 0 : -1 : 1;
                    return $t[t] && $t[t][r] || t.replace(/width|left|right/i, (function(t, n) {
                        var e = $t[t.toLowerCase()][r] || t;
                        return n > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e
                    }
                    ))
                },
                orient: function(t) {
                    return t * ("rtl" === e.direction ? 1 : -1)
                }
            }
        }
        var Jt = "role"
          , Qt = "tabindex"
          , Zt = "aria-controls"
          , tn = "aria-current"
          , nn = "aria-selected"
          , en = "aria-label"
          , rn = "aria-labelledby"
          , on = "aria-hidden"
          , sn = "aria-orientation"
          , un = "aria-roledescription"
          , an = "aria-live"
          , cn = "aria-busy"
          , ln = "aria-atomic"
          , fn = [Jt, Qt, "disabled", Zt, tn, en, rn, on, sn, un]
          , dn = Z
          , hn = "splide__track"
          , pn = "splide__list"
          , vn = "splide__slide"
          , gn = vn + "--clone"
          , mn = "splide__arrows"
          , yn = "splide__arrow"
          , bn = yn + "--prev"
          , wn = yn + "--next"
          , Sn = "splide__pagination"
          , Cn = Sn + "__page"
          , xn = "splide__progress__bar"
          , En = "splide__toggle"
          , kn = "splide__sr"
          , _n = "is-initialized"
          , Pn = "is-active"
          , Ln = "is-prev"
          , An = "is-next"
          , On = "is-visible"
          , Mn = "is-loading"
          , Dn = "is-focus-in"
          , Vn = "is-overflow"
          , zn = [Pn, On, Ln, An, Mn, Dn, Vn]
          , Tn = {
            slide: vn,
            clone: gn,
            arrows: mn,
            arrow: yn,
            prev: bn,
            next: wn,
            pagination: Sn,
            page: Cn,
            spinner: "splide__spinner"
        };
        var In = "touchstart mousedown"
          , Nn = "touchmove mousemove"
          , Rn = "touchend touchcancel mouseup click";
        var jn = "slide"
          , Wn = "loop"
          , Fn = "fade";
        function Hn(t, n, e, i) {
            var r, o = Ft(t), s = o.on, u = o.emit, c = o.bind, l = t.Components, f = t.root, d = t.options, h = d.isNavigation, p = d.updateOnMove, v = d.i18n, g = d.pagination, m = d.slideFocus, y = l.Direction.resolve, b = H(i, "style"), w = H(i, en), S = e > -1, C = O(i, ".splide__slide__container");
            function x() {
                var r = t.splides.map((function(t) {
                    var e = t.splide.Components.Slides.getAt(n);
                    return e ? e.slide.id : ""
                }
                )).join(" ");
                N(i, en, dt(v.slideX, (S ? e : n) + 1)),
                N(i, Zt, r),
                N(i, Jt, m ? "button" : ""),
                m && I(i, un)
            }
            function k() {
                r || _()
            }
            function _() {
                if (!r) {
                    var e = t.index;
                    (o = P()) !== B(i, Pn) && (E(i, Pn, o),
                    N(i, tn, h && o || ""),
                    u(o ? Ct : xt, L)),
                    function() {
                        var n = function() {
                            if (t.is(Fn))
                                return P();
                            var n = X(l.Elements.track)
                              , e = X(i)
                              , r = y("left", !0)
                              , o = y("right", !0);
                            return rt(n[r]) <= ot(e[r]) && rt(e[o]) <= ot(n[o])
                        }()
                          , e = !n && (!P() || S);
                        t.state.is([4, 5]) || N(i, on, e || "");
                        N($(i, d.focusableNodes || ""), Qt, e ? -1 : ""),
                        m && N(i, Qt, e ? -1 : 0);
                        n !== B(i, On) && (E(i, On, n),
                        u(n ? Et : kt, L));
                        if (!n && document.activeElement === i) {
                            var r = l.Slides.getAt(t.index);
                            r && F(r.slide)
                        }
                    }(),
                    E(i, Ln, n === e - 1),
                    E(i, An, n === e + 1)
                }
                var o
            }
            function P() {
                var i = t.index;
                return i === n || d.cloneStatus && i === e
            }
            var L = {
                index: n,
                slideIndex: e,
                slide: i,
                container: C,
                isClone: S,
                mount: function() {
                    S || (i.id = f.id + "-slide" + ht(n + 1),
                    N(i, Jt, g ? "tabpanel" : "group"),
                    N(i, un, v.slide),
                    N(i, en, w || dt(v.slideLabel, [n + 1, t.length]))),
                    c(i, "click", a(u, St, L)),
                    c(i, "keydown", a(u, Rt, L)),
                    s([wt, jt, Mt], _),
                    s(zt, x),
                    p && s(bt, k)
                },
                destroy: function() {
                    r = !0,
                    o.destroy(),
                    K(i, zn),
                    I(i, fn),
                    N(i, "style", b),
                    N(i, en, w || "")
                },
                update: _,
                style: function(t, n, e) {
                    j(e && C || i, t, n)
                },
                isWithin: function(e, i) {
                    var r = st(e - n);
                    return S || !d.rewind && !t.is(Wn) || (r = et(r, t.length - r)),
                    r <= i
                }
            };
            return L
        }
        var Bn = "http://www.w3.org/2000/svg"
          , Xn = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
        var Gn = {
            passive: !1,
            capture: !0
        };
        var Un = {
            Spacebar: " ",
            Right: Gt,
            Left: Xt,
            Up: Ut,
            Down: Yt
        };
        function Yn(t) {
            return t = g(t) ? t : t.key,
            Un[t] || t
        }
        var qn = "keydown";
        var $n = "data-splide-lazy"
          , Kn = "data-splide-lazy-srcset"
          , Jn = "[data-splide-lazy], [data-splide-lazy-srcset]";
        var Qn = [" ", "Enter"];
        var Zn = Object.freeze({
            __proto__: null,
            Media: function(t, n, e) {
                var i = t.state
                  , o = e.breakpoints || {}
                  , s = e.reducedMotion || {}
                  , u = gt()
                  , a = [];
                function c(t) {
                    t && u.destroy()
                }
                function l(t, n) {
                    var e = matchMedia(n);
                    u.bind(e, "change", f),
                    a.push([t, e])
                }
                function f() {
                    var n = i.is(7)
                      , r = e.direction
                      , o = a.reduce((function(t, n) {
                        return z(t, n[1].matches ? n[0] : {})
                    }
                    ), {});
                    T(e),
                    d(o),
                    e.destroy ? t.destroy("completely" === e.destroy) : n ? (c(!0),
                    t.mount()) : r !== e.direction && t.refresh()
                }
                function d(n, r, o) {
                    z(e, n),
                    r && z(Object.getPrototypeOf(e), n),
                    !o && i.is(1) || t.emit(Pt, e)
                }
                return {
                    setup: function() {
                        var t = "min" === e.mediaQuery;
                        M(o).sort((function(n, e) {
                            return t ? +n - +e : +e - +n
                        }
                        )).forEach((function(n) {
                            l(o[n], "(" + (t ? "min" : "max") + "-width:" + n + "px)")
                        }
                        )),
                        l(s, r),
                        f()
                    },
                    destroy: c,
                    reduce: function(t) {
                        matchMedia(r).matches && (t ? z(e, s) : T(e, M(s)))
                    },
                    set: d
                }
            },
            Direction: Kt,
            Elements: function(t, n, e) {
                var i, r, o, u = Ft(t), a = u.on, c = u.bind, l = t.root, f = e.i18n, d = {}, h = [], p = [], g = [];
                function m() {
                    i = w("." + hn),
                    r = O(i, "." + pn),
                    nt(i && r, "A track/list element is missing."),
                    x(h, A(r, ".splide__slide:not(." + gn + ")")),
                    D({
                        arrows: mn,
                        pagination: Sn,
                        prev: bn,
                        next: wn,
                        bar: xn,
                        toggle: En
                    }, (function(t, n) {
                        d[n] = w("." + t)
                    }
                    )),
                    V(d, {
                        root: l,
                        track: i,
                        list: r,
                        slides: h
                    }),
                    function() {
                        var t = l.id || vt(Z)
                          , n = e.role;
                        l.id = t,
                        i.id = i.id || t + "-track",
                        r.id = r.id || t + "-list",
                        !H(l, Jt) && "SECTION" !== l.tagName && n && N(l, Jt, n);
                        N(l, un, f.carousel),
                        N(r, Jt, "presentation")
                    }(),
                    b()
                }
                function y(t) {
                    var n = fn.concat("style");
                    s(h),
                    K(l, p),
                    K(i, g),
                    I([i, r], n),
                    I(l, t ? n : ["style", un])
                }
                function b() {
                    K(l, p),
                    K(i, g),
                    p = S(dn),
                    g = S(hn),
                    k(l, p),
                    k(i, g),
                    N(l, en, e.label),
                    N(l, rn, e.labelledby)
                }
                function w(t) {
                    var n = q(l, t);
                    return n && function(t, n) {
                        if (v(t.closest))
                            return t.closest(n);
                        for (var e = t; e && 1 === e.nodeType && !L(e, n); )
                            e = e.parentElement;
                        return e
                    }(n, "." + dn) === l ? n : void 0
                }
                function S(t) {
                    return [t + "--" + e.type, t + "--" + e.direction, e.drag && t + "--draggable", e.isNavigation && t + "--nav", t === dn && Pn]
                }
                return V(d, {
                    setup: m,
                    mount: function() {
                        a(_t, y),
                        a(_t, m),
                        a(Pt, b),
                        c(document, "touchstart mousedown keydown", (function(t) {
                            o = "keydown" === t.type
                        }
                        ), {
                            capture: !0
                        }),
                        c(l, "focusin", (function() {
                            E(l, Dn, !!o)
                        }
                        ))
                    },
                    destroy: y
                })
            },
            Slides: function(t, n, e) {
                var i = Ft(t)
                  , r = i.on
                  , o = i.emit
                  , u = i.bind
                  , c = n.Elements
                  , l = c.slides
                  , f = c.list
                  , d = [];
                function h() {
                    l.forEach((function(t, n) {
                        m(t, n, -1)
                    }
                    ))
                }
                function p() {
                    x((function(t) {
                        t.destroy()
                    }
                    )),
                    s(d)
                }
                function m(n, e, i) {
                    var r = Hn(t, e, i, n);
                    r.mount(),
                    d.push(r),
                    d.sort((function(t, n) {
                        return t.index - n.index
                    }
                    ))
                }
                function y(t) {
                    return t ? E((function(t) {
                        return !t.isClone
                    }
                    )) : d
                }
                function x(t, n) {
                    y(n).forEach(t)
                }
                function E(t) {
                    return d.filter(v(t) ? t : function(n) {
                        return g(t) ? L(n.slide, t) : C(w(t), n.index)
                    }
                    )
                }
                return {
                    mount: function() {
                        h(),
                        r(_t, p),
                        r(_t, h)
                    },
                    destroy: p,
                    update: function() {
                        x((function(t) {
                            t.update()
                        }
                        ))
                    },
                    register: m,
                    get: y,
                    getIn: function(t) {
                        var i = n.Controller
                          , r = i.toIndex(t)
                          , o = i.hasFocus() ? 1 : e.perPage;
                        return E((function(t) {
                            return at(t.index, r, r + o - 1)
                        }
                        ))
                    },
                    getAt: function(t) {
                        return E(t)[0]
                    },
                    add: function(t, n) {
                        S(t, (function(t) {
                            if (g(t) && (t = U(t)),
                            b(t)) {
                                var i = l[n];
                                i ? P(t, i) : _(f, t),
                                k(t, e.classes.slide),
                                r = t,
                                s = a(o, Lt),
                                c = $(r, "img"),
                                (d = c.length) ? c.forEach((function(t) {
                                    u(t, "load error", (function() {
                                        --d || s()
                                    }
                                    ))
                                }
                                )) : s()
                            }
                            var r, s, c, d
                        }
                        )),
                        o(_t)
                    },
                    remove: function(t) {
                        G(E(t).map((function(t) {
                            return t.slide
                        }
                        ))),
                        o(_t)
                    },
                    forEach: x,
                    filter: E,
                    style: function(t, n, e) {
                        x((function(i) {
                            i.style(t, n, e)
                        }
                        ))
                    },
                    getLength: function(t) {
                        return t ? l.length : d.length
                    },
                    isEnough: function() {
                        return d.length > e.perPage
                    }
                }
            },
            Layout: function(t, n, e) {
                var i, r, o, s = Ft(t), u = s.on, c = s.bind, l = s.emit, f = n.Slides, d = n.Direction.resolve, p = n.Elements, v = p.root, g = p.track, m = p.list, y = f.getAt, b = f.style;
                function w() {
                    i = e.direction === qt,
                    j(v, "maxWidth", Q(e.width)),
                    j(g, d("paddingLeft"), C(!1)),
                    j(g, d("paddingRight"), C(!0)),
                    S(!0)
                }
                function S(t) {
                    var n = X(v);
                    (t || r.width !== n.width || r.height !== n.height) && (j(g, "height", function() {
                        var t = "";
                        i && (nt(t = x(), "height or heightRatio is missing."),
                        t = "calc(" + t + " - " + C(!1) + " - " + C(!0) + ")");
                        return t
                    }()),
                    b(d("marginRight"), Q(e.gap)),
                    b("width", e.autoWidth ? null : Q(e.fixedWidth) || (i ? "" : k())),
                    b("height", Q(e.fixedHeight) || (i ? e.autoHeight ? null : k() : x()), !0),
                    r = n,
                    l(At),
                    o !== (o = M()) && (E(v, Vn, o),
                    l("overflow", o)))
                }
                function C(t) {
                    var n = e.padding
                      , i = d(t ? "right" : "left");
                    return n && Q(n[i] || (h(n) ? 0 : n)) || "0px"
                }
                function x() {
                    return Q(e.height || X(m).width * e.heightRatio)
                }
                function k() {
                    var t = Q(e.gap);
                    return "calc((100%" + (t && " + " + t) + ")/" + (e.perPage || 1) + (t && " - " + t) + ")"
                }
                function _() {
                    return X(m)[d("width")]
                }
                function P(t, n) {
                    var e = y(t || 0);
                    return e ? X(e.slide)[d("width")] + (n ? 0 : O()) : 0
                }
                function L(t, n) {
                    var e = y(t);
                    if (e) {
                        var i = X(e.slide)[d("right")]
                          , r = X(m)[d("left")];
                        return st(i - r) + (n ? 0 : O())
                    }
                    return 0
                }
                function A(n) {
                    return L(t.length - 1) - L(0) + P(0, n)
                }
                function O() {
                    var t = y(0);
                    return t && parseFloat(j(t.slide, d("marginRight"))) || 0
                }
                function M() {
                    return t.is(Fn) || A(!0) > _()
                }
                return {
                    mount: function() {
                        w(),
                        c(window, "resize load", Bt(a(l, Lt))),
                        u([Pt, _t], w),
                        u(Lt, S)
                    },
                    resize: S,
                    listSize: _,
                    slideSize: P,
                    sliderSize: A,
                    totalSize: L,
                    getPadding: function(t) {
                        return parseFloat(j(g, d("padding" + (t ? "Right" : "Left")))) || 0
                    },
                    isOverflow: M
                }
            },
            Clones: function(t, n, e) {
                var i, r = Ft(t), o = r.on, u = n.Elements, a = n.Slides, c = n.Direction.resolve, l = [];
                function f() {
                    o(_t, d),
                    o([Pt, Lt], p),
                    (i = v()) && (!function(n) {
                        var i = a.get().slice()
                          , r = i.length;
                        if (r) {
                            for (; i.length < n; )
                                x(i, i);
                            x(i.slice(-n), i.slice(0, n)).forEach((function(o, s) {
                                var c = s < n
                                  , f = function(n, i) {
                                    var r = n.cloneNode(!0);
                                    return k(r, e.classes.clone),
                                    r.id = t.root.id + "-clone" + ht(i + 1),
                                    r
                                }(o.slide, s);
                                c ? P(f, i[0].slide) : _(u.list, f),
                                x(l, f),
                                a.register(f, s - n + (c ? 0 : r), o.index)
                            }
                            ))
                        }
                    }(i),
                    n.Layout.resize(!0))
                }
                function d() {
                    h(),
                    f()
                }
                function h() {
                    G(l),
                    s(l),
                    r.destroy()
                }
                function p() {
                    var t = v();
                    i !== t && (i < t || !t) && r.emit(_t)
                }
                function v() {
                    var i = e.clones;
                    if (t.is(Wn)) {
                        if (m(i)) {
                            var r = e[c("fixedWidth")] && n.Layout.slideSize(0);
                            i = r && ot(X(u.track)[c("width")] / r) || e[c("autoWidth")] && t.length || 2 * e.perPage
                        }
                    } else
                        i = 0;
                    return i
                }
                return {
                    mount: f,
                    destroy: h
                }
            },
            Move: function(t, n, e) {
                var i, r = Ft(t), o = r.on, s = r.emit, u = t.state.set, a = n.Layout, c = a.slideSize, l = a.getPadding, f = a.totalSize, d = a.listSize, h = a.sliderSize, p = n.Direction, v = p.resolve, g = p.orient, y = n.Elements, b = y.list, w = y.track;
                function S() {
                    n.Controller.isBusy() || (n.Scroll.cancel(),
                    C(t.index),
                    n.Slides.update())
                }
                function C(t) {
                    x(P(t, !0))
                }
                function x(e, i) {
                    if (!t.is(Fn)) {
                        var r = i ? e : function(e) {
                            if (t.is(Wn)) {
                                var i = _(e)
                                  , r = i > n.Controller.getEnd();
                                (i < 0 || r) && (e = E(e, r))
                            }
                            return e
                        }(e);
                        j(b, "transform", "translate" + v("X") + "(" + r + "px)"),
                        e !== r && s(jt)
                    }
                }
                function E(t, n) {
                    var e = t - A(n)
                      , i = h();
                    return t -= g(i * (ot(st(e) / i) || 1)) * (n ? 1 : -1)
                }
                function k() {
                    x(L(), !0),
                    i.cancel()
                }
                function _(t) {
                    for (var e = n.Slides.get(), i = 0, r = 1 / 0, o = 0; o < e.length; o++) {
                        var s = e[o].index
                          , u = st(P(s, !0) - t);
                        if (!(u <= r))
                            break;
                        r = u,
                        i = s
                    }
                    return i
                }
                function P(n, i) {
                    var r = g(f(n - 1) - function(t) {
                        var n = e.focus;
                        return "center" === n ? (d() - c(t, !0)) / 2 : +n * c(t) || 0
                    }(n));
                    return i ? function(n) {
                        e.trimSpace && t.is(jn) && (n = ct(n, 0, g(h(!0) - d())));
                        return n
                    }(r) : r
                }
                function L() {
                    var t = v("left");
                    return X(b)[t] - X(w)[t] + g(l(!1))
                }
                function A(t) {
                    return P(t ? n.Controller.getEnd() : 0, !!e.trimSpace)
                }
                return {
                    mount: function() {
                        i = n.Transition,
                        o([mt, At, Pt, _t], S)
                    },
                    move: function(t, n, e, r) {
                        var o, a;
                        t !== n && (o = t > e,
                        a = g(E(L(), o)),
                        o ? a >= 0 : a <= b[v("scrollWidth")] - X(w)[v("width")]) && (k(),
                        x(E(L(), t > e), !0)),
                        u(4),
                        s(bt, n, e, t),
                        i.start(n, (function() {
                            u(3),
                            s(wt, n, e, t),
                            r && r()
                        }
                        ))
                    },
                    jump: C,
                    translate: x,
                    shift: E,
                    cancel: k,
                    toIndex: _,
                    toPosition: P,
                    getPosition: L,
                    getLimit: A,
                    exceededLimit: function(t, n) {
                        n = m(n) ? L() : n;
                        var e = !0 !== t && g(n) < g(A(!1))
                          , i = !1 !== t && g(n) > g(A(!0));
                        return e || i
                    },
                    reposition: S
                }
            },
            Controller: function(t, n, e) {
                var i, r, o, s, u = Ft(t), c = u.on, l = u.emit, f = n.Move, d = f.getPosition, h = f.getLimit, p = f.toPosition, v = n.Slides, y = v.isEnough, b = v.getLength, w = e.omitEnd, S = t.is(Wn), C = t.is(jn), x = a(A, !1), E = a(A, !0), k = e.start || 0, _ = k;
                function P() {
                    r = b(!0),
                    o = e.perMove,
                    s = e.perPage,
                    i = D();
                    var t = ct(k, 0, w ? i : r - 1);
                    t !== k && (k = t,
                    f.reposition())
                }
                function L() {
                    i !== D() && l(Wt)
                }
                function A(t, n) {
                    var e = o || (I() ? 1 : s)
                      , r = O(k + e * (t ? -1 : 1), k, !(o || I()));
                    return -1 === r && C && !ut(d(), h(!t), 1) ? t ? 0 : i : n ? r : M(r)
                }
                function O(n, u, a) {
                    if (y() || I()) {
                        var c = function(n) {
                            if (C && "move" === e.trimSpace && n !== k)
                                for (var i = d(); i === p(n, !0) && at(n, 0, t.length - 1, !e.rewind); )
                                    n < k ? --n : ++n;
                            return n
                        }(n);
                        c !== n && (u = n,
                        n = c,
                        a = !1),
                        n < 0 || n > i ? n = o || !at(0, n, u, !0) && !at(i, u, n, !0) ? S ? a ? n < 0 ? -(r % s || s) : r : n : e.rewind ? n < 0 ? i : 0 : -1 : V(z(n)) : a && n !== u && (n = V(z(u) + (n < u ? -1 : 1)))
                    } else
                        n = -1;
                    return n
                }
                function M(t) {
                    return S ? (t + r) % r || 0 : t
                }
                function D() {
                    for (var t = r - (I() || S && o ? 1 : s); w && t-- > 0; )
                        if (p(r - 1, !0) !== p(t, !0)) {
                            t++;
                            break
                        }
                    return ct(t, 0, r - 1)
                }
                function V(t) {
                    return ct(I() ? t : s * t, 0, i)
                }
                function z(t) {
                    return I() ? et(t, i) : rt((t >= i ? r - 1 : t) / s)
                }
                function T(t) {
                    t !== k && (_ = k,
                    k = t)
                }
                function I() {
                    return !m(e.focus) || e.isNavigation
                }
                function N() {
                    return t.state.is([4, 5]) && !!e.waitForTransition
                }
                return {
                    mount: function() {
                        P(),
                        c([Pt, _t, Wt], P),
                        c(At, L)
                    },
                    go: function(t, n, e) {
                        if (!N()) {
                            var r = function(t) {
                                var n = k;
                                if (g(t)) {
                                    var e = t.match(/([+\-<>])(\d+)?/) || []
                                      , r = e[1]
                                      , o = e[2];
                                    "+" === r || "-" === r ? n = O(k + +("" + r + (+o || 1)), k) : ">" === r ? n = o ? V(+o) : x(!0) : "<" === r && (n = E(!0))
                                } else
                                    n = S ? t : ct(t, 0, i);
                                return n
                            }(t)
                              , o = M(r);
                            o > -1 && (n || o !== k) && (T(o),
                            f.move(r, o, _, e))
                        }
                    },
                    scroll: function(t, e, r, o) {
                        n.Scroll.scroll(t, e, r, (function() {
                            var t = M(f.toIndex(d()));
                            T(w ? et(t, i) : t),
                            o && o()
                        }
                        ))
                    },
                    getNext: x,
                    getPrev: E,
                    getAdjacent: A,
                    getEnd: D,
                    setIndex: T,
                    getIndex: function(t) {
                        return t ? _ : k
                    },
                    toIndex: V,
                    toPage: z,
                    toDest: function(t) {
                        var n = f.toIndex(t);
                        return C ? ct(n, 0, i) : n
                    },
                    hasFocus: I,
                    isBusy: N
                }
            },
            Arrows: function(t, n, e) {
                var i, r, o = Ft(t), s = o.on, u = o.bind, c = o.emit, l = e.classes, f = e.i18n, d = n.Elements, h = n.Controller, p = d.arrows, v = d.track, g = p, m = d.prev, y = d.next, b = {};
                function w() {
                    !function() {
                        var t = e.arrows;
                        !t || m && y || (g = p || R("div", l.arrows),
                        m = E(!0),
                        y = E(!1),
                        i = !0,
                        _(g, [m, y]),
                        !p && P(g, v));
                        m && y && (V(b, {
                            prev: m,
                            next: y
                        }),
                        W(g, t ? "" : "none"),
                        k(g, r = mn + "--" + e.direction),
                        t && (s([mt, wt, _t, Mt, Wt], L),
                        u(y, "click", a(x, ">")),
                        u(m, "click", a(x, "<")),
                        L(),
                        N([m, y], Zt, v.id),
                        c(Vt, m, y)))
                    }(),
                    s(Pt, S)
                }
                function S() {
                    C(),
                    w()
                }
                function C() {
                    o.destroy(),
                    K(g, r),
                    i ? (G(p ? [m, y] : g),
                    m = y = null) : I([m, y], fn)
                }
                function x(t) {
                    h.go(t, !0)
                }
                function E(t) {
                    return U('<button class="' + l.arrow + " " + (t ? l.prev : l.next) + '" type="button"><svg xmlns="' + Bn + '" viewBox="0 0 ' + "40 " + '40" width="' + '40" height="' + '40" focusable="false"><path d="' + (e.arrowPath || Xn) + '" />')
                }
                function L() {
                    if (m && y) {
                        var n = t.index
                          , e = h.getPrev()
                          , i = h.getNext()
                          , r = e > -1 && n < e ? f.last : f.prev
                          , o = i > -1 && n > i ? f.first : f.next;
                        m.disabled = e < 0,
                        y.disabled = i < 0,
                        N(m, en, r),
                        N(y, en, o),
                        c("arrows:updated", m, y, e, i)
                    }
                }
                return {
                    arrows: b,
                    mount: w,
                    destroy: C,
                    update: L
                }
            },
            Autoplay: function(t, n, e) {
                var i, r, o = Ft(t), s = o.on, u = o.bind, a = o.emit, c = Ht(e.interval, t.go.bind(t, ">"), (function(t) {
                    var n = f.bar;
                    n && j(n, "width", 100 * t + "%"),
                    a("autoplay:playing", t)
                }
                )), l = c.isPaused, f = n.Elements, d = n.Elements, h = d.root, p = d.toggle, v = e.autoplay, g = "pause" === v;
                function m() {
                    l() && n.Slides.isEnough() && (c.start(!e.resetProgress),
                    r = i = g = !1,
                    w(),
                    a(Tt))
                }
                function y(t) {
                    void 0 === t && (t = !0),
                    g = !!t,
                    w(),
                    l() || (c.pause(),
                    a(It))
                }
                function b() {
                    g || (i || r ? y(!1) : m())
                }
                function w() {
                    p && (E(p, Pn, !g),
                    N(p, en, e.i18n[g ? "play" : "pause"]))
                }
                function S(t) {
                    var i = n.Slides.getAt(t);
                    c.set(i && +H(i.slide, "data-splide-interval") || e.interval)
                }
                return {
                    mount: function() {
                        v && (!function() {
                            e.pauseOnHover && u(h, "mouseenter mouseleave", (function(t) {
                                i = "mouseenter" === t.type,
                                b()
                            }
                            ));
                            e.pauseOnFocus && u(h, "focusin focusout", (function(t) {
                                r = "focusin" === t.type,
                                b()
                            }
                            ));
                            p && u(p, "click", (function() {
                                g ? m() : y(!0)
                            }
                            ));
                            s([bt, Ot, _t], c.rewind),
                            s(bt, S)
                        }(),
                        p && N(p, Zt, f.track.id),
                        g || m(),
                        w())
                    },
                    destroy: c.cancel,
                    play: m,
                    pause: y,
                    isPaused: l
                }
            },
            Cover: function(t, n, e) {
                var i = Ft(t).on;
                function r(t) {
                    n.Slides.forEach((function(n) {
                        var e = O(n.container || n.slide, "img");
                        e && e.src && o(t, e, n)
                    }
                    ))
                }
                function o(t, n, e) {
                    e.style("background", t ? 'center/cover no-repeat url("' + n.src + '")' : "", !0),
                    W(n, t ? "none" : "")
                }
                return {
                    mount: function() {
                        e.cover && (i(Nt, a(o, !0)),
                        i([mt, Pt, _t], a(r, !0)))
                    },
                    destroy: a(r, !1)
                }
            },
            Scroll: function(t, n, e) {
                var i, r, o = Ft(t), s = o.on, u = o.emit, c = t.state.set, l = n.Move, f = l.getPosition, d = l.getLimit, h = l.exceededLimit, p = l.translate, v = t.is(jn), g = 1;
                function m(t, e, o, s, d) {
                    var p = f();
                    if (w(),
                    o && (!v || !h())) {
                        var m = n.Layout.sliderSize()
                          , S = lt(t) * m * rt(st(t) / m) || 0;
                        t = l.toPosition(n.Controller.toDest(t % m)) + S
                    }
                    var C = ut(p, t, 1);
                    g = 1,
                    e = C ? 0 : e || it(st(t - p) / 1.5, 800),
                    r = s,
                    i = Ht(e, y, a(b, p, t, d), 1),
                    c(5),
                    u(Ot),
                    i.start()
                }
                function y() {
                    c(3),
                    r && r(),
                    u(Mt)
                }
                function b(t, n, i, o) {
                    var s, u, a = f(), c = (t + (n - t) * (s = o,
                    (u = e.easingFunc) ? u(s) : 1 - Math.pow(1 - s, 4)) - a) * g;
                    p(a + c),
                    v && !i && h() && (g *= .6,
                    st(c) < 10 && m(d(h(!0)), 600, !1, r, !0))
                }
                function w() {
                    i && i.cancel()
                }
                function S() {
                    i && !i.isPaused() && (w(),
                    y())
                }
                return {
                    mount: function() {
                        s(bt, w),
                        s([Pt, _t], S)
                    },
                    destroy: w,
                    scroll: m,
                    cancel: S
                }
            },
            Drag: function(t, n, e) {
                var i, r, o, s, u, a, c, f, d = Ft(t), p = d.on, v = d.emit, g = d.bind, m = d.unbind, y = t.state, b = n.Move, w = n.Scroll, S = n.Controller, C = n.Elements.track, x = n.Media.reduce, E = n.Direction, k = E.resolve, _ = E.orient, P = b.getPosition, A = b.exceededLimit, O = !1;
                function M() {
                    var t = e.drag;
                    H(!t),
                    s = "free" === t
                }
                function D(t) {
                    if (a = !1,
                    !c) {
                        var n = F(t);
                        i = t.target,
                        r = e.noDrag,
                        L(i, ".splide__pagination__page, ." + yn) || r && L(i, r) || !n && t.button || (S.isBusy() ? Y(t, !0) : (f = n ? C : window,
                        u = y.is([4, 5]),
                        o = null,
                        g(f, Nn, V, Gn),
                        g(f, Rn, z, Gn),
                        b.cancel(),
                        w.cancel(),
                        I(t)))
                    }
                    var i, r
                }
                function V(n) {
                    if (y.is(6) || (y.set(6),
                    v("drag")),
                    n.cancelable)
                        if (u) {
                            b.translate(i + N(n) / (O && t.is(jn) ? 5 : 1));
                            var r = R(n) > 200
                              , o = O !== (O = A());
                            (r || o) && I(n),
                            a = !0,
                            v("dragging"),
                            Y(n)
                        } else
                            (function(t) {
                                return st(N(t)) > st(N(t, !0))
                            }
                            )(n) && (u = function(t) {
                                var n = e.dragMinThreshold
                                  , i = h(n)
                                  , r = i && n.mouse || 0
                                  , o = (i ? n.touch : +n) || 10;
                                return st(N(t)) > (F(t) ? o : r)
                            }(n),
                            Y(n))
                }
                function z(i) {
                    y.is(6) && (y.set(3),
                    v("dragged")),
                    u && (!function(i) {
                        var r = function(n) {
                            if (t.is(Wn) || !O) {
                                var e = R(n);
                                if (e && e < 200)
                                    return N(n) / e
                            }
                            return 0
                        }(i)
                          , o = function(t) {
                            return P() + lt(t) * et(st(t) * (e.flickPower || 600), s ? 1 / 0 : n.Layout.listSize() * (e.flickMaxPages || 1))
                        }(r)
                          , u = e.rewind && e.rewindByDrag;
                        x(!1),
                        s ? S.scroll(o, 0, e.snap) : t.is(Fn) ? S.go(_(lt(r)) < 0 ? u ? "<" : "-" : u ? ">" : "+") : t.is(jn) && O && u ? S.go(A(!0) ? ">" : "<") : S.go(S.toDest(o), !0);
                        x(!0)
                    }(i),
                    Y(i)),
                    m(f, Nn, V),
                    m(f, Rn, z),
                    u = !1
                }
                function T(t) {
                    !c && a && Y(t, !0)
                }
                function I(t) {
                    o = r,
                    r = t,
                    i = P()
                }
                function N(t, n) {
                    return W(t, n) - W(j(t), n)
                }
                function R(t) {
                    return J(t) - J(j(t))
                }
                function j(t) {
                    return r === t && o || r
                }
                function W(t, n) {
                    return (F(t) ? t.changedTouches[0] : t)["page" + k(n ? "Y" : "X")]
                }
                function F(t) {
                    return "undefined" != typeof TouchEvent && t instanceof TouchEvent
                }
                function H(t) {
                    c = t
                }
                return {
                    mount: function() {
                        g(C, Nn, l, Gn),
                        g(C, Rn, l, Gn),
                        g(C, In, D, Gn),
                        g(C, "click", T, {
                            capture: !0
                        }),
                        g(C, "dragstart", Y),
                        p([mt, Pt], M)
                    },
                    disable: H,
                    isDragging: function() {
                        return u
                    }
                }
            },
            Keyboard: function(t, n, e) {
                var i, r, o = Ft(t), s = o.on, u = o.bind, a = o.unbind, l = t.root, f = n.Direction.resolve;
                function d() {
                    var t = e.keyboard;
                    t && (i = "global" === t ? window : l,
                    u(i, qn, v))
                }
                function h() {
                    a(i, qn)
                }
                function p() {
                    var t = r;
                    r = !0,
                    c((function() {
                        r = t
                    }
                    ))
                }
                function v(n) {
                    if (!r) {
                        var e = Yn(n);
                        e === f(Xt) ? t.go("<") : e === f(Gt) && t.go(">")
                    }
                }
                return {
                    mount: function() {
                        d(),
                        s(Pt, h),
                        s(Pt, d),
                        s(bt, p)
                    },
                    destroy: h,
                    disable: function(t) {
                        r = t
                    }
                }
            },
            LazyLoad: function(t, n, e) {
                var i = Ft(t)
                  , r = i.on
                  , o = i.off
                  , u = i.bind
                  , c = i.emit
                  , l = "sequential" === e.lazyLoad
                  , f = [wt, Mt]
                  , d = [];
                function h() {
                    s(d),
                    n.Slides.forEach((function(t) {
                        $(t.slide, Jn).forEach((function(n) {
                            var i = H(n, $n)
                              , r = H(n, Kn);
                            if (i !== n.src || r !== n.srcset) {
                                var o = e.classes.spinner
                                  , s = n.parentElement
                                  , u = O(s, "." + o) || R("span", o, s);
                                d.push([n, t, u]),
                                n.src || W(n, "none")
                            }
                        }
                        ))
                    }
                    )),
                    l ? m() : (o(f),
                    r(f, p),
                    p())
                }
                function p() {
                    (d = d.filter((function(n) {
                        var i = e.perPage * ((e.preloadPages || 1) + 1) - 1;
                        return !n[1].isWithin(t.index, i) || v(n)
                    }
                    ))).length || o(f)
                }
                function v(t) {
                    var n = t[0];
                    k(t[1].slide, Mn),
                    u(n, "load error", a(g, t)),
                    N(n, "src", H(n, $n)),
                    N(n, "srcset", H(n, Kn)),
                    I(n, $n),
                    I(n, Kn)
                }
                function g(t, n) {
                    var e = t[0]
                      , i = t[1];
                    K(i.slide, Mn),
                    "error" !== n.type && (G(t[2]),
                    W(e, ""),
                    c(Nt, e, i),
                    c(Lt)),
                    l && m()
                }
                function m() {
                    d.length && v(d.shift())
                }
                return {
                    mount: function() {
                        e.lazyLoad && (h(),
                        r(_t, h))
                    },
                    destroy: a(s, d),
                    check: p
                }
            },
            Pagination: function(t, n, e) {
                var i, r, o = Ft(t), c = o.on, l = o.emit, f = o.bind, d = n.Slides, h = n.Elements, p = n.Controller, v = p.hasFocus, g = p.getIndex, m = p.go, y = n.Direction.resolve, b = h.pagination, w = [];
                function S() {
                    i && (G(b ? u(i.children) : i),
                    K(i, r),
                    s(w),
                    i = null),
                    o.destroy()
                }
                function C(t) {
                    m(">" + t, !0)
                }
                function x(t, n) {
                    var e = w.length
                      , i = Yn(n)
                      , r = E()
                      , o = -1;
                    i === y(Gt, !1, r) ? o = ++t % e : i === y(Xt, !1, r) ? o = (--t + e) % e : "Home" === i ? o = 0 : "End" === i && (o = e - 1);
                    var s = w[o];
                    s && (F(s.button),
                    m(">" + o),
                    Y(n, !0))
                }
                function E() {
                    return e.paginationDirection || e.direction
                }
                function _(t) {
                    return w[p.toPage(t)]
                }
                function P() {
                    var t = _(g(!0))
                      , n = _(g());
                    if (t) {
                        var e = t.button;
                        K(e, Pn),
                        I(e, nn),
                        N(e, Qt, -1)
                    }
                    if (n) {
                        var r = n.button;
                        k(r, Pn),
                        N(r, nn, !0),
                        N(r, Qt, "")
                    }
                    l("pagination:updated", {
                        list: i,
                        items: w
                    }, t, n)
                }
                return {
                    items: w,
                    mount: function n() {
                        S(),
                        c([Pt, _t, Wt], n);
                        var o = e.pagination;
                        b && W(b, o ? "" : "none"),
                        o && (c([bt, Ot, Mt], P),
                        function() {
                            var n = t.length
                              , o = e.classes
                              , s = e.i18n
                              , u = e.perPage
                              , c = v() ? p.getEnd() + 1 : ot(n / u);
                            k(i = b || R("ul", o.pagination, h.track.parentElement), r = Sn + "--" + E()),
                            N(i, Jt, "tablist"),
                            N(i, en, s.select),
                            N(i, sn, E() === qt ? "vertical" : "");
                            for (var l = 0; l < c; l++) {
                                var g = R("li", null, i)
                                  , m = R("button", {
                                    class: o.page,
                                    type: "button"
                                }, g)
                                  , y = d.getIn(l).map((function(t) {
                                    return t.slide.id
                                }
                                ))
                                  , S = !v() && u > 1 ? s.pageX : s.slideX;
                                f(m, "click", a(C, l)),
                                e.paginationKeyboard && f(m, "keydown", a(x, l)),
                                N(g, Jt, "presentation"),
                                N(m, Jt, "tab"),
                                N(m, Zt, y.join(" ")),
                                N(m, en, dt(S, l + 1)),
                                N(m, Qt, -1),
                                w.push({
                                    li: g,
                                    button: m,
                                    page: l
                                })
                            }
                        }(),
                        P(),
                        l("pagination:mounted", {
                            list: i,
                            items: w
                        }, _(t.index)))
                    },
                    destroy: S,
                    getAt: _,
                    update: P
                }
            },
            Sync: function(t, n, e) {
                var i = e.isNavigation
                  , r = e.slideFocus
                  , o = [];
                function u() {
                    var n, e;
                    t.splides.forEach((function(n) {
                        n.isParent || (l(t, n.splide),
                        l(n.splide, t))
                    }
                    )),
                    i && (n = Ft(t),
                    (e = n.on)(St, d),
                    e(Rt, h),
                    e([mt, Pt], f),
                    o.push(n),
                    n.emit(zt, t.splides))
                }
                function c() {
                    o.forEach((function(t) {
                        t.destroy()
                    }
                    )),
                    s(o)
                }
                function l(t, n) {
                    var e = Ft(t);
                    e.on(bt, (function(t, e, i) {
                        n.go(n.is(Wn) ? i : t)
                    }
                    )),
                    o.push(e)
                }
                function f() {
                    N(n.Elements.list, sn, e.direction === qt ? "vertical" : "")
                }
                function d(n) {
                    t.go(n.index)
                }
                function h(t, n) {
                    C(Qn, Yn(n)) && (d(t),
                    Y(n))
                }
                return {
                    setup: a(n.Media.set, {
                        slideFocus: m(r) ? i : r
                    }, !0),
                    mount: u,
                    destroy: c,
                    remount: function() {
                        c(),
                        u()
                    }
                }
            },
            Wheel: function(t, n, e) {
                var i = Ft(t).bind
                  , r = 0;
                function o(i) {
                    if (i.cancelable) {
                        var o = i.deltaY
                          , s = o < 0
                          , u = J(i)
                          , a = e.wheelMinThreshold || 0
                          , c = e.wheelSleep || 0;
                        st(o) > a && u - r > c && (t.go(s ? "<" : ">"),
                        r = u),
                        function(i) {
                            return !e.releaseWheel || t.state.is(4) || -1 !== n.Controller.getAdjacent(i)
                        }(s) && Y(i)
                    }
                }
                return {
                    mount: function() {
                        e.wheel && i(n.Elements.track, "wheel", o, Gn)
                    }
                }
            },
            Live: function(t, n, e) {
                var i = Ft(t).on
                  , r = n.Elements.track
                  , o = e.live && !e.isNavigation
                  , s = R("span", kn)
                  , u = Ht(90, a(c, !1));
                function c(t) {
                    N(r, cn, t),
                    t ? (_(r, s),
                    u.start()) : (G(s),
                    u.cancel())
                }
                function l(t) {
                    o && N(r, an, t ? "off" : "polite")
                }
                return {
                    mount: function() {
                        o && (l(!n.Autoplay.isPaused()),
                        N(r, ln, !0),
                        s.textContent = "…",
                        i(Tt, a(l, !0)),
                        i(It, a(l, !1)),
                        i([wt, Mt], a(c, !0)))
                    },
                    disable: l,
                    destroy: function() {
                        I(r, [an, ln, cn]),
                        G(s)
                    }
                }
            }
        })
          , te = {
            type: "slide",
            role: "region",
            speed: 400,
            perPage: 1,
            cloneStatus: !0,
            arrows: !0,
            pagination: !0,
            paginationKeyboard: !0,
            interval: 5e3,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            resetProgress: !0,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            drag: !0,
            direction: "ltr",
            trimSpace: !0,
            focusableNodes: "a, button, textarea, input, select, iframe",
            live: !0,
            classes: Tn,
            i18n: {
                prev: "Previous slide",
                next: "Next slide",
                first: "Go to first slide",
                last: "Go to last slide",
                slideX: "Go to slide %s",
                pageX: "Go to page %s",
                play: "Start autoplay",
                pause: "Pause autoplay",
                carousel: "carousel",
                slide: "slide",
                select: "Select a slide to show",
                slideLabel: "%s of %s"
            },
            reducedMotion: {
                speed: 0,
                rewindSpeed: 0,
                autoplay: "pause"
            }
        };
        function ne(t, n, e) {
            var i = n.Slides;
            function r() {
                i.forEach((function(t) {
                    t.style("transform", "translateX(-" + 100 * t.index + "%)")
                }
                ))
            }
            return {
                mount: function() {
                    Ft(t).on([mt, _t], r)
                },
                start: function(t, n) {
                    i.style("transition", "opacity " + e.speed + "ms " + e.easing),
                    c(n)
                },
                cancel: l
            }
        }
        function ee(t, n, e) {
            var i, r = n.Move, o = n.Controller, s = n.Scroll, u = n.Elements.list, c = a(j, u, "transition");
            function l() {
                c(""),
                s.cancel()
            }
            return {
                mount: function() {
                    Ft(t).bind(u, "transitionend", (function(t) {
                        t.target === u && i && (l(),
                        i())
                    }
                    ))
                },
                start: function(n, u) {
                    var a = r.toPosition(n, !0)
                      , l = r.getPosition()
                      , f = function(n) {
                        var i = e.rewindSpeed;
                        if (t.is(jn) && i) {
                            var r = o.getIndex(!0)
                              , s = o.getEnd();
                            if (0 === r && n >= s || r >= s && 0 === n)
                                return i
                        }
                        return e.speed
                    }(n);
                    st(a - l) >= 1 && f >= 1 ? e.useScroll ? s.scroll(a, f, !1, u) : (c("transform " + f + "ms " + e.easing),
                    r.translate(a, !0),
                    i = u) : (r.jump(n),
                    u())
                },
                cancel: l
            }
        }
        var ie = function() {
            function t(n, e) {
                var i;
                this.event = Ft(),
                this.Components = {},
                this.state = (i = 1,
                {
                    set: function(t) {
                        i = t
                    },
                    is: function(t) {
                        return C(w(t), i)
                    }
                }),
                this.splides = [],
                this._o = {},
                this._E = {};
                var r = g(n) ? q(document, n) : n;
                nt(r, r + " is invalid."),
                this.root = r,
                e = z({
                    label: H(r, en) || "",
                    labelledby: H(r, rn) || ""
                }, te, t.defaults, e || {});
                try {
                    z(e, JSON.parse(H(r, tt)))
                } catch (o) {
                    nt(!1, "Invalid JSON")
                }
                this._o = Object.create(z({}, e))
            }
            var n, e, r, o = t.prototype;
            return o.mount = function(t, n) {
                var e = this
                  , i = this.state
                  , r = this.Components;
                return nt(i.is([1, 7]), "Already mounted!"),
                i.set(1),
                this._C = r,
                this._T = n || this._T || (this.is(Fn) ? ne : ee),
                this._E = t || this._E,
                D(V({}, Zn, this._E, {
                    Transition: this._T
                }), (function(t, n) {
                    var i = t(e, r, e._o);
                    r[n] = i,
                    i.setup && i.setup()
                }
                )),
                D(r, (function(t) {
                    t.mount && t.mount()
                }
                )),
                this.emit(mt),
                k(this.root, _n),
                i.set(3),
                this.emit(yt),
                this
            }
            ,
            o.sync = function(t) {
                return this.splides.push({
                    splide: t
                }),
                t.splides.push({
                    splide: this,
                    isParent: !0
                }),
                this.state.is(3) && (this._C.Sync.remount(),
                t.Components.Sync.remount()),
                this
            }
            ,
            o.go = function(t) {
                return this._C.Controller.go(t),
                this
            }
            ,
            o.on = function(t, n) {
                return this.event.on(t, n),
                this
            }
            ,
            o.off = function(t) {
                return this.event.off(t),
                this
            }
            ,
            o.emit = function(t) {
                var n;
                return (n = this.event).emit.apply(n, [t].concat(u(arguments, 1))),
                this
            }
            ,
            o.add = function(t, n) {
                return this._C.Slides.add(t, n),
                this
            }
            ,
            o.remove = function(t) {
                return this._C.Slides.remove(t),
                this
            }
            ,
            o.is = function(t) {
                return this._o.type === t
            }
            ,
            o.refresh = function() {
                return this.emit(_t),
                this
            }
            ,
            o.destroy = function(t) {
                void 0 === t && (t = !0);
                var n = this.event
                  , e = this.state;
                return e.is(1) ? Ft(this).on(yt, this.destroy.bind(this, t)) : (D(this._C, (function(n) {
                    n.destroy && n.destroy(t)
                }
                ), !0),
                n.emit(Dt),
                n.destroy(),
                t && s(this.splides),
                e.set(7)),
                this
            }
            ,
            n = t,
            (e = [{
                key: "options",
                get: function() {
                    return this._o
                },
                set: function(t) {
                    this._C.Media.set(t, !0, !0)
                }
            }, {
                key: "length",
                get: function() {
                    return this._C.Slides.getLength(!0)
                }
            }, {
                key: "index",
                get: function() {
                    return this._C.Controller.getIndex()
                }
            }]) && i(n.prototype, e),
            r && i(n, r),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            t
        }()
          , re = ie;
        re.defaults = {},
        re.STATES = o;
        var oe = {
            listTag: "ul",
            slideTag: "li"
        }
          , se = function() {
            function t(t, n) {
                this.styles = {},
                this.id = t,
                this.options = n
            }
            var n = t.prototype;
            return n.rule = function(t, n, e, i) {
                i = i || "default";
                var r = this.styles[i] = this.styles[i] || {};
                (r[t] = r[t] || {})[n] = e
            }
            ,
            n.build = function() {
                var t = this
                  , n = "";
                return this.styles.default && (n += this.buildSelectors(this.styles.default)),
                Object.keys(this.styles).sort((function(n, e) {
                    return "min" === t.options.mediaQuery ? +n - +e : +e - +n
                }
                )).forEach((function(e) {
                    "default" !== e && (n += "@media screen and (max-width: " + e + "px) {",
                    n += t.buildSelectors(t.styles[e]),
                    n += "}")
                }
                )),
                n
            }
            ,
            n.buildSelectors = function(t) {
                var n = this
                  , e = "";
                return D(t, (function(t, i) {
                    i = ("#" + n.id + " " + i).trim(),
                    e += i + " {",
                    D(t, (function(t, n) {
                        (t || 0 === t) && (e += n + ": " + t + ";")
                    }
                    )),
                    e += "}"
                }
                )),
                e
            }
            ,
            t
        }()
          , ue = function() {
            function t(t, n, e, i) {
                this.slides = [],
                this.options = {},
                this.breakpoints = [],
                z(te, i || {}),
                z(z(this.options, te), n || {}),
                this.contents = t,
                this.config = V({}, oe, e || {}),
                this.id = this.config.id || vt("splide"),
                this.Style = new se(this.id,this.options),
                this.Direction = Kt(0, 0, this.options),
                nt(this.contents.length, "Provide at least 1 content."),
                this.init()
            }
            t.clean = function(t) {
                var n = Ft(t).on
                  , e = t.root
                  , i = $(e, "." + gn);
                n(mt, (function() {
                    G(O(e, "style"))
                }
                )),
                G(i)
            }
            ;
            var n = t.prototype;
            return n.init = function() {
                this.parseBreakpoints(),
                this.initSlides(),
                this.registerRootStyles(),
                this.registerTrackStyles(),
                this.registerSlideStyles(),
                this.registerListStyles()
            }
            ,
            n.initSlides = function() {
                var t = this;
                x(this.slides, this.contents.map((function(n, e) {
                    (n = g(n) ? {
                        html: n
                    } : n).styles = n.styles || {},
                    n.attrs = n.attrs || {},
                    t.cover(n);
                    var i = t.options.classes.slide + " " + (0 === e ? Pn : "");
                    return V(n.attrs, {
                        class: (i + " " + (n.attrs.class || "")).trim(),
                        style: t.buildStyles(n.styles)
                    }),
                    n
                }
                ))),
                this.isLoop() && this.generateClones(this.slides)
            }
            ,
            n.registerRootStyles = function() {
                var t = this;
                this.breakpoints.forEach((function(n) {
                    var e = n[0]
                      , i = n[1];
                    t.Style.rule(" ", "max-width", Q(i.width), e)
                }
                ))
            }
            ,
            n.registerTrackStyles = function() {
                var t = this
                  , n = this.Style
                  , e = "." + hn;
                this.breakpoints.forEach((function(i) {
                    var r = i[0]
                      , o = i[1];
                    n.rule(e, t.resolve("paddingLeft"), t.cssPadding(o, !1), r),
                    n.rule(e, t.resolve("paddingRight"), t.cssPadding(o, !0), r),
                    n.rule(e, "height", t.cssTrackHeight(o), r)
                }
                ))
            }
            ,
            n.registerListStyles = function() {
                var t = this
                  , n = this.Style
                  , e = "." + pn;
                this.breakpoints.forEach((function(i) {
                    var r = i[0]
                      , o = i[1];
                    n.rule(e, "transform", t.buildTranslate(o), r),
                    t.cssSlideHeight(o) || n.rule(e, "aspect-ratio", t.cssAspectRatio(o), r)
                }
                ))
            }
            ,
            n.registerSlideStyles = function() {
                var t = this
                  , n = this.Style
                  , e = "." + vn;
                this.breakpoints.forEach((function(i) {
                    var r = i[0]
                      , o = i[1];
                    n.rule(e, "width", t.cssSlideWidth(o), r),
                    n.rule(e, "height", t.cssSlideHeight(o) || "100%", r),
                    n.rule(e, t.resolve("marginRight"), Q(o.gap) || "0px", r),
                    n.rule(e + " > img", "display", o.cover ? "none" : "inline", r)
                }
                ))
            }
            ,
            n.buildTranslate = function(t) {
                var n = this.Direction
                  , e = n.resolve
                  , i = n.orient
                  , r = [];
                return r.push(this.cssOffsetClones(t)),
                r.push(this.cssOffsetGaps(t)),
                this.isCenter(t) && (r.push(this.buildCssValue(i(-50), "%")),
                r.push.apply(r, this.cssOffsetCenter(t))),
                r.filter(Boolean).map((function(t) {
                    return "translate" + e("X") + "(" + t + ")"
                }
                )).join(" ")
            }
            ,
            n.cssOffsetClones = function(t) {
                var n = this.Direction
                  , e = n.resolve
                  , i = n.orient
                  , r = this.getCloneCount();
                if (this.isFixedWidth(t)) {
                    var o = this.parseCssValue(t[e("fixedWidth")])
                      , s = o.value
                      , u = o.unit;
                    return this.buildCssValue(i(s) * r, u)
                }
                return i(100 * r / t.perPage) + "%"
            }
            ,
            n.cssOffsetCenter = function(t) {
                var n = this.Direction
                  , e = n.resolve
                  , i = n.orient;
                if (this.isFixedWidth(t)) {
                    var r = this.parseCssValue(t[e("fixedWidth")])
                      , o = r.value
                      , s = r.unit;
                    return [this.buildCssValue(i(o / 2), s)]
                }
                var u = []
                  , a = t.perPage
                  , c = t.gap;
                if (u.push(i(50 / a) + "%"),
                c) {
                    var l = this.parseCssValue(c)
                      , f = l.value
                      , d = l.unit
                      , h = (f / a - f) / 2;
                    u.push(this.buildCssValue(i(h), d))
                }
                return u
            }
            ,
            n.cssOffsetGaps = function(t) {
                var n = this.getCloneCount();
                if (n && t.gap) {
                    var e = this.Direction.orient
                      , i = this.parseCssValue(t.gap)
                      , r = i.value
                      , o = i.unit;
                    if (this.isFixedWidth(t))
                        return this.buildCssValue(e(r * n), o);
                    var s = n / t.perPage;
                    return this.buildCssValue(e(s * r), o)
                }
                return ""
            }
            ,
            n.resolve = function(t) {
                return ft(this.Direction.resolve(t))
            }
            ,
            n.cssPadding = function(t, n) {
                var e = t.padding
                  , i = this.Direction.resolve(n ? "right" : "left", !0);
                return e && Q(e[i] || (h(e) ? 0 : e)) || "0px"
            }
            ,
            n.cssTrackHeight = function(t) {
                var n = "";
                return this.isVertical() && (nt(n = this.cssHeight(t), '"height" is missing.'),
                n = "calc(" + n + " - " + this.cssPadding(t, !1) + " - " + this.cssPadding(t, !0) + ")"),
                n
            }
            ,
            n.cssHeight = function(t) {
                return Q(t.height)
            }
            ,
            n.cssSlideWidth = function(t) {
                return t.autoWidth ? "" : Q(t.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(t))
            }
            ,
            n.cssSlideHeight = function(t) {
                return Q(t.fixedHeight) || (this.isVertical() ? t.autoHeight ? "" : this.cssSlideSize(t) : this.cssHeight(t))
            }
            ,
            n.cssSlideSize = function(t) {
                var n = Q(t.gap);
                return "calc((100%" + (n && " + " + n) + ")/" + (t.perPage || 1) + (n && " - " + n) + ")"
            }
            ,
            n.cssAspectRatio = function(t) {
                var n = t.heightRatio;
                return n ? "" + 1 / n : ""
            }
            ,
            n.buildCssValue = function(t, n) {
                return "" + t + n
            }
            ,
            n.parseCssValue = function(t) {
                return g(t) ? {
                    value: parseFloat(t) || 0,
                    unit: t.replace(/\d*(\.\d*)?/, "") || "px"
                } : {
                    value: t,
                    unit: "px"
                }
            }
            ,
            n.parseBreakpoints = function() {
                var t = this
                  , n = this.options.breakpoints;
                this.breakpoints.push(["default", this.options]),
                n && D(n, (function(n, e) {
                    t.breakpoints.push([e, z(z({}, t.options), n)])
                }
                ))
            }
            ,
            n.isFixedWidth = function(t) {
                return !!t[this.Direction.resolve("fixedWidth")]
            }
            ,
            n.isLoop = function() {
                return this.options.type === Wn
            }
            ,
            n.isCenter = function(t) {
                if ("center" === t.focus) {
                    if (this.isLoop())
                        return !0;
                    if (this.options.type === jn)
                        return !this.options.trimSpace
                }
                return !1
            }
            ,
            n.isVertical = function() {
                return this.options.direction === qt
            }
            ,
            n.buildClasses = function() {
                var t = this.options;
                return [dn, dn + "--" + t.type, dn + "--" + t.direction, t.drag && dn + "--draggable", t.isNavigation && dn + "--nav", Pn, !this.config.hidden && "is-rendered"].filter(Boolean).join(" ")
            }
            ,
            n.buildAttrs = function(t) {
                var n = "";
                return D(t, (function(t, e) {
                    n += t ? " " + ft(e) + '="' + t + '"' : ""
                }
                )),
                n.trim()
            }
            ,
            n.buildStyles = function(t) {
                var n = "";
                return D(t, (function(t, e) {
                    n += " " + ft(e) + ":" + t + ";"
                }
                )),
                n.trim()
            }
            ,
            n.renderSlides = function() {
                var t = this
                  , n = this.config.slideTag;
                return this.slides.map((function(e) {
                    return "<" + n + " " + t.buildAttrs(e.attrs) + ">" + (e.html || "") + "</" + n + ">"
                }
                )).join("")
            }
            ,
            n.cover = function(t) {
                var n = t.styles
                  , e = t.html
                  , i = void 0 === e ? "" : e;
                if (this.options.cover && !this.options.lazyLoad) {
                    var r = i.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);
                    r && r[2] && (n.background = "center/cover no-repeat url('" + r[2] + "')")
                }
            }
            ,
            n.generateClones = function(t) {
                for (var n = this.options.classes, e = this.getCloneCount(), i = t.slice(); i.length < e; )
                    x(i, i);
                x(i.slice(-e).reverse(), i.slice(0, e)).forEach((function(i, r) {
                    var o = V({}, i.attrs, {
                        class: i.attrs.class + " " + n.clone
                    })
                      , s = V({}, i, {
                        attrs: o
                    });
                    r < e ? t.unshift(s) : t.push(s)
                }
                ))
            }
            ,
            n.getCloneCount = function() {
                if (this.isLoop()) {
                    var t = this.options;
                    return t.clones ? t.clones : it.apply(void 0, this.breakpoints.map((function(t) {
                        return t[1].perPage
                    }
                    ))) * ((t.flickMaxPages || 1) + 1)
                }
                return 0
            }
            ,
            n.renderArrows = function() {
                var t = "";
                return t += '<div class="' + this.options.classes.arrows + '">',
                t += this.renderArrow(!0),
                t += this.renderArrow(!1),
                t += "</div>"
            }
            ,
            n.renderArrow = function(t) {
                var n = this.options
                  , e = n.classes
                  , i = n.i18n
                  , r = {
                    class: e.arrow + " " + (t ? e.prev : e.next),
                    type: "button",
                    ariaLabel: t ? i.prev : i.next
                };
                return "<button " + this.buildAttrs(r) + '><svg xmlns="' + Bn + '" viewBox="0 0 ' + "40 " + '40" width="' + '40" height="' + '40"><path d="' + (this.options.arrowPath || Xn) + '" /></svg></button>'
            }
            ,
            n.html = function() {
                var t = this.config
                  , n = t.rootClass
                  , e = t.listTag
                  , i = t.arrows
                  , r = t.beforeTrack
                  , o = t.afterTrack
                  , s = t.slider
                  , u = t.beforeSlider
                  , a = t.afterSlider
                  , c = "";
                return c += '<div id="' + this.id + '" class="' + this.buildClasses() + " " + (n || "") + '">',
                c += "<style>" + this.Style.build() + "</style>",
                s && (c += u || "",
                c += '<div class="splide__slider">'),
                c += r || "",
                i && (c += this.renderArrows()),
                c += '<div class="splide__track">',
                c += "<" + e + ' class="splide__list">',
                c += this.renderSlides(),
                c += "</" + e + ">",
                c += "</div>",
                c += o || "",
                s && (c += "</div>",
                c += a || ""),
                c += "</div>",
                c
            }
            ,
            t
        }()
    },
    7650: function(t, n, e) {
        e.d(n, {
            df: function() {
                return h
            }
        });
        var i = e(7294);
        function r() {
            return r = Object.assign || function(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = arguments[n];
                    for (var i in e)
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                }
                return t
            }
            ,
            r.apply(this, arguments)
        }
        const o = new Map
          , s = new WeakMap;
        let u, a = 0;
        function c(t) {
            return Object.keys(t).sort().filter((n=>void 0 !== t[n])).map((n=>{
                return `${n}_ ${"root" === n ? (e = t.root,
                e ? (s.has(e) || (a += 1,
                s.set(e, a.toString())),
                s.get(e)) : "0") : t[n]}`;
                var e
            }
            )).toString()
        }
        function l(t, n, e={}, i=u) {
            if (void 0 === window.IntersectionObserver && void 0 !== i) {
                const r = t.getBoundingClientRect();
                return n(i, {
                    isIntersecting: i,
                    target: t,
                    intersectionRatio: "number" == typeof e.threshold ? e.threshold : 0,
                    time: 0,
                    boundingClientRect: r,
                    intersectionRect: r,
                    rootBounds: r
                }),
                ()=>{}
            }
            const {id: r, observer: s, elements: a} = function(t) {
                let n = c(t)
                  , e = o.get(n);
                if (!e) {
                    const i = new Map;
                    let r;
                    const s = new IntersectionObserver((n=>{
                        n.forEach((n=>{
                            var e;
                            const o = n.isIntersecting && r.some((t=>n.intersectionRatio >= t));
                            t.trackVisibility && void 0 === n.isVisible && (n.isVisible = o),
                            null == (e = i.get(n.target)) || e.forEach((t=>{
                                t(o, n)
                            }
                            ))
                        }
                        ))
                    }
                    ),t);
                    r = s.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]),
                    e = {
                        id: n,
                        observer: s,
                        elements: i
                    },
                    o.set(n, e)
                }
                return e
            }(e);
            let l = a.get(t) || [];
            return a.has(t) || a.set(t, l),
            l.push(n),
            s.observe(t),
            function() {
                l.splice(l.indexOf(n), 1),
                0 === l.length && (a.delete(t),
                s.unobserve(t)),
                0 === a.size && (s.disconnect(),
                o.delete(r))
            }
        }
        const f = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];
        function d(t) {
            return "function" != typeof t.children
        }
        class h extends i.Component {
            constructor(t) {
                super(t),
                this.node = null,
                this._unobserveCb = null,
                this.handleNode = t=>{
                    this.node && (this.unobserve(),
                    t || this.props.triggerOnce || this.props.skip || this.setState({
                        inView: !!this.props.initialInView,
                        entry: void 0
                    })),
                    this.node = t || null,
                    this.observeNode()
                }
                ,
                this.handleChange = (t,n)=>{
                    t && this.props.triggerOnce && this.unobserve(),
                    d(this.props) || this.setState({
                        inView: t,
                        entry: n
                    }),
                    this.props.onChange && this.props.onChange(t, n)
                }
                ,
                this.state = {
                    inView: !!t.initialInView,
                    entry: void 0
                }
            }
            componentDidUpdate(t) {
                t.rootMargin === this.props.rootMargin && t.root === this.props.root && t.threshold === this.props.threshold && t.skip === this.props.skip && t.trackVisibility === this.props.trackVisibility && t.delay === this.props.delay || (this.unobserve(),
                this.observeNode())
            }
            componentWillUnmount() {
                this.unobserve(),
                this.node = null
            }
            observeNode() {
                if (!this.node || this.props.skip)
                    return;
                const {threshold: t, root: n, rootMargin: e, trackVisibility: i, delay: r, fallbackInView: o} = this.props;
                this._unobserveCb = l(this.node, this.handleChange, {
                    threshold: t,
                    root: n,
                    rootMargin: e,
                    trackVisibility: i,
                    delay: r
                }, o)
            }
            unobserve() {
                this._unobserveCb && (this._unobserveCb(),
                this._unobserveCb = null)
            }
            render() {
                if (!d(this.props)) {
                    const {inView: t, entry: n} = this.state;
                    return this.props.children({
                        inView: t,
                        entry: n,
                        ref: this.handleNode
                    })
                }
                const t = this.props
                  , {children: n, as: e} = t
                  , o = function(t, n) {
                    if (null == t)
                        return {};
                    var e, i, r = {}, o = Object.keys(t);
                    for (i = 0; i < o.length; i++)
                        e = o[i],
                        n.indexOf(e) >= 0 || (r[e] = t[e]);
                    return r
                }(t, f);
                return i.createElement(e || "div", r({
                    ref: this.handleNode
                }, o), n)
            }
        }
    }
}]);
//# sourceMappingURL=b7a31ede39e37893b575b738f745f355963544fc-b8b0c2559ccc2db83792.js.map
