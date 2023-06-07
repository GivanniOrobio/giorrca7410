(self.webpackChunk_splidejs_splide_site = self.webpackChunk_splidejs_splide_site || []).push([[5217], {
    382: function(e, t, n) {
        "use strict";
        n.d(t, {
            e: function() {
                return Ve
            }
        });
        var i = n(4578)
          , r = n(7294)
          , s = null
          , o = null
          , a = null
          , l = null
          , c = null
          , d = null
          , u = null
          , p = null
          , h = null
          , m = null
          , f = n(1597)
          , v = n(6180)
          , g = n(8595)
          , b = n(182)
          , y = n(7650)
          , S = n(8927)
          , x = n(7052)
          , w = "\n"
          , _ = "keyword"
          , E = "comment"
          , C = "tag"
          , T = "selector"
          , A = "attr"
          , k = "prop"
          , N = "value"
          , L = "prolog"
          , z = "string"
          , R = "number"
          , P = "boolean"
          , $ = "function"
          , I = "class"
          , O = "operator"
          , K = "bracket"
          , F = "delimiter"
          , W = "space"
          , j = "text";
        function M(e) {
            return null !== e && "object" == typeof e
        }
        function H(e) {
            return Array.isArray(e)
        }
        function D(e) {
            return "string" == typeof e
        }
        function q(e) {
            return void 0 === e
        }
        function B(e) {
            return e instanceof HTMLElement
        }
        function U(e) {
            return H(e) ? e : [e]
        }
        function Z(e, t) {
            U(t).forEach((function(t) {
                t && e.classList.add(t)
            }
            ))
        }
        function X(e, t) {
            t = U(t);
            for (var n = 0; n < t.length; n++)
                e.appendChild(t[n])
        }
        function J(e, t) {
            if (e)
                for (var n = Object.keys(e), i = 0; i < n.length; i++)
                    t(e[n[i]], n[i])
        }
        function G(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                n[i - 1] = arguments[i];
            return n.forEach((function(t) {
                M(t) && J(t, (function(n, i) {
                    q(t[i]) || (e[i] = t[i])
                }
                ))
            }
            )),
            e
        }
        function V(e, t) {
            if (D(t))
                return e.getAttribute(t) || "";
            M(t) && J(t, (function(t, n) {
                e.setAttribute(n, String(t))
            }
            ))
        }
        function Q(e, t) {
            return void 0 === t && (t = document),
            t.querySelector(e)
        }
        function Y(e, t) {
            J(t, (function(t, n) {
                e.style[n] = String(t)
            }
            ))
        }
        function ee(e, t) {
            return "<" + (t || "div") + ' class="' + e.join(" ") + '">'
        }
        function te(e, t) {
            if (q(t))
                return e.textContent;
            e.textContent = t
        }
        function ne(e, t) {
            if (void 0 === t && (t = ""),
            !e)
                throw new Error(t)
        }
        var ie = "ryuseilight";
        function re(e, t, n) {
            var i = function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n][0] === t)
                        return n;
                return -1
            }(e, t);
            i > -1 ? e.splice.apply(e, [i, 0].concat(n)) : e.push.apply(e, n)
        }
        function se(e, t) {
            return e.charAt(0) === t
        }
        var oe = !q(/x/.sticky)
          , ae = function() {
            function e(e) {
                this.language = e,
                this.init(e)
            }
            var t = e.prototype;
            return t.init = function(e) {
                var t = this;
                J(e.grammar, (function(n, i) {
                    e.grammar[i] = t.merge(e, n)
                }
                )),
                J(e.use, this.init.bind(this))
            }
            ,
            t.merge = function(e, t) {
                for (var n = [], i = 0; i < t.length; i++) {
                    var r = t[i]
                      , s = t[i]
                      , o = s[0]
                      , a = s[1];
                    se(o, "#") && !a ? n.push.apply(n, this.merge(e, e.grammar[o.slice(1)])) : function() {
                        var t = a.toString().match(/[gimsy]*$/)[0].replace(/[gy]/g, "")
                          , i = a.source + (oe ? "" : "|()");
                        J(e.source, (function(e, t) {
                            i = i.replace(new RegExp("%" + t,"g"), e.source)
                        }
                        )),
                        r[1] = new RegExp(i,(oe ? "y" : "g") + t),
                        n.push(r)
                    }()
                }
                return n
            }
            ,
            t.parse = function(e, t, n, i) {
                var r = 0
                  , s = 0;
                this.depth++;
                e: for (; r < e.length && !this.aborted; ) {
                    for (var o = 0; o < n.length; o++) {
                        var a = n[o]
                          , l = a[1]
                          , c = a[2];
                        l.lastIndex = r;
                        var d = l.exec(e);
                        if (d && d[0]) {
                            if (s < r && this.push([j, e.slice(s, r)], t, i),
                            "@back" === c) {
                                s = r;
                                break e
                            }
                            if (s = r += this.handle(d, t, a, i) || 1,
                            "@break" === c)
                                break e;
                            continue e
                        }
                    }
                    r++
                }
                return s < r && this.push([j, e.slice(s)], t, i),
                this.depth--,
                r
            }
            ,
            t.push = function(e, t, n) {
                for (var i = this.depth, r = e[0], s = e[1], o = this.index, a = 0, l = 0; a > -1 && !this.aborted; ) {
                    a = s.indexOf(w, l);
                    var c = this.lines[this.index]
                      , d = l === a && !c.length
                      , u = d ? w : s.slice(l, a < 0 ? void 0 : a)
                      , p = {
                        depth: i,
                        language: t.id,
                        state: n
                    };
                    u && (r !== j && (p.head = a > -1 && !l,
                    p.tail = a < 0 && !!l,
                    p.split = a > -1 || !!l,
                    p.distance = this.index - o),
                    c.push([r === j && d ? "lb" : r, u, p])),
                    a > -1 && (this.index++,
                    this.aborted = this.limit && this.index >= this.limit,
                    this.aborted || (l = a + 1,
                    this.lines[this.index] = []))
                }
            }
            ,
            t.handle = function(e, t, n, i) {
                var r = n[0];
                if (!r)
                    return 0;
                var s = e[0];
                if ("@debug" === n[3] && console.log(s, n),
                se(r, "@")) {
                    ne(t.use);
                    var o = t.use[r.slice(1)];
                    return ne(o),
                    this.parse(s, o, o.grammar.main, r)
                }
                if (se(r, "#")) {
                    var a = t.grammar[r.slice(1)];
                    return ne(a),
                    "@rest" === n[2] && (s = e.input.slice(e.index)),
                    this.parse(s, t, a, r)
                }
                return this.push([r, s], t, i),
                s.length
            }
            ,
            t.tokenize = function(e, t) {
                return this.lines = [[]],
                this.index = 0,
                this.depth = -1,
                this.limit = t || 0,
                this.aborted = !1,
                this.parse(e, this.language, this.language.grammar.main, "#main"),
                this.lines
            }
            ,
            e
        }()
          , le = ie
          , ce = "rl__body"
          , de = "rl__code"
          , ue = "rl__token"
          , pe = "is-active"
          , he = function() {
            function e() {
                this.handlers = {}
            }
            var t = e.prototype;
            return t.on = function(e, t, n) {
                void 0 === n && (n = 10);
                var i = this.handlers[e] = this.handlers[e] || [];
                i.push({
                    callback: t,
                    priority: n
                }),
                i.sort((function(e, t) {
                    return e.priority - t.priority
                }
                ))
            }
            ,
            t.emit = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                    n[i - 1] = arguments[i];
                (this.handlers[e] || []).forEach((function(e) {
                    e.callback.apply(e, n)
                }
                ))
            }
            ,
            t.destroy = function() {
                this.handlers = {}
            }
            ,
            e
        }()
          , me = {}
          , fe = function() {
            function e(e, t, n, i) {
                void 0 === i && (i = {}),
                this.lines = [],
                this.event = new he,
                this.lines = e,
                this.info = t,
                this.root = n,
                this.options = i,
                this.init()
            }
            e.compose = function(e) {
                J(e, (function(e, t) {
                    me[t] = e
                }
                ))
            }
            ;
            var t = e.prototype;
            return t.init = function() {
                var e = this
                  , t = this.lines;
                if (t.length) {
                    var n = t[t.length - 1];
                    n.length && (1 !== n.length || n[0][1].trim()) || t.pop()
                }
                J(me, (function(t) {
                    t(e)
                }
                )),
                this.event.emit("mounted")
            }
            ,
            t.renderLines = function(e) {
                for (var t = this.event, n = this.options.span ? "span" : "code", i = 0; i < this.lines.length; i++) {
                    var r = this.lines[i]
                      , s = ["rl__line"];
                    t.emit("line:open", e, s, i),
                    e(ee(s));
                    for (var o = function(i) {
                        var s = r[i]
                          , o = s[0].split(".")
                          , a = "rl__" + o[0]
                          , l = o.slice(1).map((function(e) {
                            return a + "--" + e
                        }
                        ))
                          , c = [ue, a].concat(l);
                        t.emit("token", s, c),
                        e("" + ee(c, n) + (s[1].replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</") + n + ">")
                    }, a = 0; a < r.length; a++)
                        o(a);
                    e("</div>"),
                    t.emit("line:closed", e, i)
                }
            }
            ,
            t.html = function(e) {
                var t = this.event
                  , n = "</div>"
                  , i = ""
                  , r = function(e) {
                    i += e
                };
                e && (i += ee([le + " " + le + "--" + this.info.id], "pre"));
                var s = ["rl__container"];
                t.emit("open", r, s),
                i += ee(s);
                var o = [ce + (this.options.wrap ? " rl__body--wrap" : "")];
                return t.emit("body:open", r, o),
                i += ee(o),
                t.emit("code:open", r),
                i += ee([de]),
                this.renderLines(r),
                i += n,
                t.emit("body:close", r),
                i += n,
                t.emit("close", r),
                i += n,
                t.emit("closed", r),
                e && (i += "</pre>"),
                i
            }
            ,
            t.destroy = function() {
                this.event.emit("destroy"),
                this.event.destroy()
            }
            ,
            e
        }()
          , ve = /[+-]?(\d+\.?\d*|\d*\.?\d+)([eE][+-]?\d+)?/
          , ge = /\b(?:true|false)\b/
          , be = /[[\]{}()]/
          , ye = /[ \t]+/
          , Se = /'(?:\\'|.)*?'/
          , xe = /"(?:\\"|.)*?"/
          , we = /\/\*[\s\S]*?(\*\/|$)/
          , _e = /\/\/.*/
          , Ee = /\b(?:break|catch|class|continue|do|else|extends|finally|for|function|if|implements|in|instanceof|interface|new|null|return|throw|try|while)\b/;
        function Ce() {
            return {
                id: "css",
                name: "CSS",
                grammar: {
                    main: [["#common"], ["#findSingleAtrule"], ["#findBlock"]],
                    findBlock: [["#block", /(?:(?![\t\n\r ;\{\}])[\s\S])(?:(?![;\{\}])[\s\S])*\{[\s\S]*?\}/, "@rest"]],
                    findSingleAtrule: [["#atrule", /@(?:(?![;\{])[\s\S])+?;/]],
                    findAtrule: [["#atrule", /@(?:(?![;\{])[\s\S])*?(?=[;\{])/]],
                    findSelector: [["#selector", /(?:(?![\t\n\r ;\{\}])[\s\S])[\s\S]*?(?=\{)/]],
                    common: [[z, /(["'])[\s\S]*?(?:(?!\\)[\s\S])\1/], [E, we], [W, ye]],
                    block: [["#inner", /{/, "@rest"], [K, /}/, "@break"], ["#findAtrule"], ["#findSelector"], [W, ye]],
                    inner: [[K, /{/], ["#common"], ["#findBlock"], ["#props"], ["#findAtrule"], ["", /}/, "@back"]],
                    atrule: [["#common"], ["#url", /\burl\(/, "@rest"], [W, ye], ["atrule", /[^\s();]+/], [F, /[:;,]/], ["#paren", /\(/, "@rest"]],
                    paren: [[K, /^\(/], ["#common"], ["#paren", /\(/, "@rest"], [K, /\)/, "@break"], ["#props"]],
                    selector: [["#common"], [O, /[>+~]/], [K, /[[\]()]/], [F, /=/], [T, /::?\S+/], [T, /[\W\d]\S+/], [C, /\b[a-z]+|\*/i], [T, /\S+/]],
                    url: [["#common"], [$, /^url/], [K, /\(/], [z, /[^)]+/], [K, /\)/, "@break"]],
                    props: [[k, /[a-z0-9-_\xA0-\uFFFF]+(?=:)/i], ["#url", /\burl\(/, "@rest"], [$, /\b[\w-]+(?=\()\b/], [_, /!important|\b(?:initial|inherit|unset)/], [k, /[a-z0-9-]+(?=:)/], [R, /#([0-9a-f]{6}|[0-9a-f]{3})/i], [R, /\bU\+[0-9a-f?-]+/i], [R, /[+-]?(\d+\.?\d*|\d*\.?\d+)/], [F, /[:;,]/], ["#paren", /\(/, "@rest"], [K, /[[\])]/], [W, ye]]
                }
            }
        }
        function Te() {
            return {
                id: "javascript",
                name: "JavaScript",
                alias: ["js"],
                source: {
                    func: /[_$a-z\xA0-\uFFFF][_$a-z0-9\xA0-\uFFFF]*/
                },
                grammar: {
                    main: [[z, Se], [z, xe], ["#backtick", /`/, "@rest"], [E, we], [E, _e], ["regexp", /\/(\[.*?]|\\\/|.)+?\/[gimsuy]*/], [_, Ee], [_, /\b(?:as|async|await|case|catch|const|debugger|default|delete|enum|export|from|import|let|package|private|protected|public|super|switch|static|this|typeof|undefined|var|void|with|yield)\b/], [_, /\b((get|set)(?=\s+%func))/i], [I, /\b[A-Z][\w$]*\b/], [$, /%func(?=\s*\()/i], [P, ge], ["decorator", /@[^\s(@]+/], ["identifier", /\b[a-z_$][\w$]*\b/], [R, ve], [O, /=>/], [O, /\+[+=]?|-[-=]?|\*\*?=?|[/%^]=?|&&?=?|\|\|?=?|\?\??=?|<<?=?|>>>=?|>>?=?|[!=]=?=?|[~:^]/], [K, be], [F, /[;.,]+/], [W, ye]],
                    backtick: [[z, /^`/], [z, /(\$[^{]|\\[$`]|[^`$])+/], ["#expression", /\${/, "@rest"], [z, /`/, "@break"]],
                    expression: [[F, /^\${/], [F, /}/, "@break"], ["#main"]]
                }
            }
        }
        function Ae(e) {
            void 0 === e && (e = {});
            var t = (e.script || Te)()
              , n = (e.style || Ce)()
              , i = ["cdata", /<!\[CDATA\[[\s\S]*\]\]>/i];
            return t.grammar.main.unshift(i),
            n.grammar.main.unshift(i),
            {
                id: "html",
                alias: ["markup"],
                name: "HTML",
                use: {
                    script: t,
                    style: n
                },
                grammar: {
                    main: [[E, /<!\x2D\x2D[\s\S]*?\x2D\x2D>/], [L, /<!DOCTYPE[\s\S]*?>/i], i, ["#script", /<script[\s\S]*?>[\s\S]*?<\/script>/], ["#style", /<style[\s\S]*?>[\s\S]*?<\/style>/], ["#tag", /<[\s\S]*?>/], ["entity", /&[\da-z]+;|&#\d+;/i], [W, ye]],
                    script: [["#tag", /^<script[\s\S]*?>/], i, ["@script", /[\s\S]+(?=<\/script>)/], ["#tag", /<\/script>/]],
                    style: [["#tag", /^<style[\s\S]*?>/], ["@style", /[\s\S]+(?=<\/style>)/], ["#tag", /<\/style>/]],
                    tag: [["#closeTag", /<\/.+>/], ["#tagContent"]],
                    closeTag: [["tag.close", /[^\s/<>"'=]+/], ["#tagContent"]],
                    tagContent: [["#attr", /[\t\n\r ]+[\s\S]+(?=[\t\n\r \/>])/], [C, /[^\s/<>"'=]+/], [K, /[<>]/], [F, /[/]/]],
                    attr: [[W, ye], [N, /(['"])(\\\1|.)*?\1/], [F, /[/=]/], [A, /[^\s/>"'=]+/]]
                }
            }
        }
        function ke(e) {
            void 0 === e && (e = {});
            var t = G((e.base || Te)(), {
                id: "jsx",
                name: "JSX",
                alias: ["react"]
            })
              , n = t.grammar;
            return re(n.main, I, [["#findPairedTag"], ["#findSelfClosedTag"]]),
            G(n, {
                findPairedTag: [["#pairedTag", /(?:<[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?([0-9A-Z_a-z]+)[\s\S]*?>[\s\S]*?<\/\1>)|<[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?>[\s\S]*?<\/>/, "@rest"]],
                findSelfClosedTag: [["#selfClosedTag", /<(?:\{[\s\S]*?\}|(["'])[\s\S]*?\1|(?:(?!>)[\s\S]))+?\/>/]],
                findBracket: [["#code", /{/, "@rest"]],
                pairedTag: [["#openTag", /^</, "@rest"], ["#findBracket"], ["#findPairedTag"], ["#findSelfClosedTag"], ["#tagName", /<\/([\w][^\s]*?)?>/, "@break"], [W, ye]],
                code: [[K, /^{/], [K, /}/, "@break"], ["#findBracket"], ["#main"]],
                selfClosedTag: [["#openTag", /^</, "@rest"]],
                openTag: [["#tagName", /<\s*[^\s/>"'=]*/], ["#findBracket"], [A, /[^\s/>"'=]+/], [N, /(['"])(\\\1|.)*?\1/], [W, ye], [F, /[/=]/], [K, />/, "@break"]],
                tagName: [[K, /[<>]/], [W, ye], [F, /\//], [I, /[A-Z][\w$-]*/], [C, /[^\s/>"'=]+/]]
            }),
            t
        }
        function Ne(e) {
            void 0 === e && (e = {});
            var t = G(Ae(e), {
                id: "vue",
                name: "Vue",
                alias: []
            });
            return t.grammar.main.push(["@script", /{{[\s\S]*?}}/]),
            t
        }
        var Le = {}
          , ze = function() {
            function e(e) {
                this.renderers = [],
                this.options = G({}, e)
            }
            e.register = function(e) {
                U(e).forEach((function(e) {
                    var t = e.id;
                    t && !Le[t] && (e.alias || []).concat(t).forEach((function(t) {
                        Le[t] = new ae(e)
                    }
                    ))
                }
                ))
            }
            ,
            e.tokenize = function(t, n, i) {
                return e.getLexer(n).tokenize(t, i)
            }
            ,
            e.has = function(e) {
                return !!Le[e]
            }
            ,
            e.getLexer = function(t) {
                return Le.none || e.register({
                    id: "none",
                    name: "",
                    grammar: {
                        main: []
                    }
                }),
                Le[t] || Le.none
            }
            ;
            var t = e.prototype;
            return t.getRenderer = function(t, n, i) {
                var r = (i = G({}, this.options, i)).language
                  , s = e.getLexer(r).language
                  , o = s.name
                  , a = s.id;
                return new fe(e.tokenize(t, r),{
                    name: o,
                    id: a
                },n,i)
            }
            ,
            t.apply = function(e, t) {
                for (var n = D(e) ? document.querySelectorAll(e) : [e], i = 0; i < n.length; i++) {
                    var r = n[i];
                    if (B(r)) {
                        var s = G({}, t, {
                            language: V(r, "data-rl-language") || void 0
                        })
                          , o = this.getRenderer(te(r), r, s)
                          , a = r instanceof HTMLPreElement;
                        a && Z(r, [le, le + "--" + o.info.id]),
                        r.innerHTML = o.html(!a),
                        o.event.emit("applied", r),
                        this.renderers.push(o)
                    }
                }
            }
            ,
            t.html = function(e, t) {
                return ne(D(e), "Invalid code."),
                this.getRenderer(e, null, t).html(!0)
            }
            ,
            t.destroy = function() {
                this.renderers.forEach((function(e) {
                    e.destroy()
                }
                ))
            }
            ,
            e
        }();
        ze.compose = fe.compose;
        var Re = "data-rl-active-lines";
        function Pe(e, t, n) {
            var i = "rl__figcaption";
            e('<figcaption class="' + i + " " + i + (n ? "--bottom" : "--top") + '">'),
            e("<span>" + t + "</span>"),
            e("</figcaption>")
        }
        var $e = {
            html: "Copy",
            activeHtml: "Done",
            duration: 1e3,
            ariaLabel: "Copy code to clipboard",
            position: "topRight"
        };
        function Ie(e, t) {
            var n, i = function(e, t, n) {
                var i = document.createElement(e);
                return t && Z(i, t),
                n && X(n, i),
                i
            }("textarea");
            i.textContent = e,
            Y(i, {
                position: "absolute",
                left: "-99999px"
            }),
            X(document.body, i),
            i.focus(),
            i.select();
            try {
                document.execCommand("copy")
            } catch (r) {
                alert("Failed to copy."),
                n = !0
            }
            document.body.removeChild(i),
            n || t()
        }
        var Oe = {
            addedSymbol: "+",
            deletedSymbol: "-"
        };
        function Ke(e, t, n, i) {
            e.indexOf(n) > -1 ? i.push("is-added") : t.indexOf(n) > -1 && i.push("is-deleted")
        }
        var Fe = "rl__gutter__row";
        var We = Object.freeze({
            __proto__: null,
            ActiveLines: function(e) {
                var t = e.event
                  , n = e.root
                  , i = e.options
                  , r = n && function(e) {
                    var t = V(e, Re);
                    if (t)
                        try {
                            return JSON.parse(t)
                        } catch (i) {
                            n = i.message,
                            console.error("[ryuseilight] " + n)
                        }
                    var n
                }(n) || i.activeLines;
                if (H(r)) {
                    var s = function(e) {
                        var t = [];
                        return e.forEach((function(e) {
                            H(e) || (e = [e, e]);
                            for (var n = (+e[0] || 1) - 1, i = (+e[1] || 1) - 1, r = n; r <= i; r++)
                                t[r] = pe
                        }
                        )),
                        t
                    }(r);
                    t.on("gutter:row:open", (function(e, t, n) {
                        s[n] && t.push(s[n])
                    }
                    )),
                    t.on("line:open", (function(e, t, n) {
                        s[n] && t.push(s[n])
                    }
                    ))
                }
            },
            Caption: function(e) {
                var t = e.event
                  , n = e.root
                  , i = e.options
                  , r = n && V(n, "data-rl-caption");
                if (r || i.caption) {
                    var s = i.caption
                      , o = G({}, M(s) ? s : null)
                      , a = o.position
                      , l = o.html
                      , c = r || l || (D(s) ? s : "");
                    if (c) {
                        var d = "bottom" === a;
                        t.on("open", (function(e) {
                            e('<figure class="rl__figure">'),
                            d || Pe(e, c)
                        }
                        )),
                        t.on("closed", (function(e) {
                            d && Pe(e, c, !0),
                            e("</figure>")
                        }
                        ))
                    }
                }
            },
            Copy: function(e) {
                var t = e.lines
                  , n = e.event
                  , i = e.options;
                if (i.copy) {
                    var r = G({}, $e, M(i.copy) ? i.copy : {})
                      , s = "rl__button__label";
                    i.tools = r.position,
                    n.on("tools:" + r.position, (function(e) {
                        e('<button type="button" class="rl__button rl__copy" aria-label="' + r.ariaLabel + '">'),
                        e('<span class="' + s + " " + s + '--inactive">' + r.html + "</span>"),
                        e('<span class="' + s + " " + s + '--active">' + r.activeHtml + "</span>"),
                        e("</button>")
                    }
                    )),
                    n.on("applied", (function(e) {
                        var i = Q(".rl__copy", e)
                          , s = t.map((function(e) {
                            return e.map((function(e) {
                                return e[1]
                            }
                            )).join("")
                        }
                        )).join(w);
                        if (i) {
                            var o = function() {
                                !function(e, t, n) {
                                    var i = function() {
                                        n && function(e, t) {
                                            Z(e, pe);
                                            var n = "_rlTimer";
                                            e[n] && clearTimeout(e[n]);
                                            e[n] = setTimeout((function() {
                                                e.classList.remove(pe)
                                            }
                                            ), t)
                                        }(t, n)
                                    };
                                    navigator.clipboard ? navigator.clipboard.writeText(e).then(i).catch((function() {
                                        return Ie(e, i)
                                    }
                                    )) : Ie(e, i)
                                }(s, i, r.duration)
                            };
                            i.addEventListener("click", o),
                            n.on("destroy", (function() {
                                i.removeEventListener("click", o)
                            }
                            ))
                        }
                    }
                    ))
                }
            },
            Diff: function(e) {
                var t = e.event
                  , n = e.lines
                  , i = e.options;
                if (i.diff) {
                    i.gutter = !0;
                    var r = G({}, Oe, M(i.diff) ? i.diff : null)
                      , s = []
                      , o = [];
                    n.forEach((function(e, t) {
                        if (e.length) {
                            var n, i = e[0][1];
                            se(i, r.addedSymbol) ? (s.push(t),
                            n = !0) : se(i, r.deletedSymbol) && (o.push(t),
                            n = !0),
                            n && function(e, t) {
                                var n = t[0]
                                  , i = n[0]
                                  , r = n[1];
                                if (e)
                                    1 === r.length ? t.shift() : t[0] = [i, r.slice(1)];
                                else {
                                    var s = [W, " "];
                                    1 === r.length ? t[0] = s : (t[0] = [i, r.slice(1)],
                                    t.unshift(s))
                                }
                            }(r.removeSymbols, e)
                        }
                    }
                    )),
                    (s.length || o.length) && (t.on("line:open", (function(e, t, n) {
                        Ke(s, o, n, t)
                    }
                    )),
                    t.on("gutter:row:open", (function(e, t, n) {
                        Ke(s, o, n, t)
                    }
                    )),
                    t.on("gutter:row:opened", (function(e, t) {
                        var n = w;
                        s.indexOf(t) > -1 ? n = r.addedSymbol : o.indexOf(t) > -1 && (n = r.deletedSymbol),
                        e('<span class="rl__diff">' + n + "</span>")
                    }
                    ), 20),
                    t.on("lineNumber:open", (function(e, t, n, i) {
                        i.skip = o.indexOf(n) > -1
                    }
                    )))
                }
            },
            Gutter: function(e) {
                var t = e.lines
                  , n = e.event
                  , i = e.root
                  , r = e.options;
                n.on("mounted", (function() {
                    var e, s, o;
                    r.gutter && (n.on("open", (function(e, t) {
                        t.push("has-gutter")
                    }
                    )),
                    n.on("code:open", (function(e) {
                        e('<div class="rl__gutter" aria-hidden="true">');
                        for (var i = 0; i < t.length; i++) {
                            var r = [Fe];
                            n.emit("gutter:row:open", e, r, i),
                            e('<div class="' + r.join(" ") + '">'),
                            n.emit("gutter:row:opened", e, i),
                            e("</div>")
                        }
                        e("</div>")
                    }
                    )),
                    i && "undefined" != typeof window && (window.addEventListener("resize", (e = a,
                    s = 100,
                    function() {
                        o || (o = setTimeout((function() {
                            e(),
                            o = null
                        }
                        ), s))
                    }
                    )),
                    a(),
                    n.on("destroy", (function() {
                        window.removeEventListener("resize", a)
                    }
                    ))));
                    function a() {
                        var e = i.getElementsByClassName(Fe)
                          , t = Q("." + de, i);
                        if (e.length && t)
                            for (var n = 0; n < t.children.length; n++) {
                                var r = e[n]
                                  , s = t.children[n];
                                B(r) && r.clientHeight !== s.clientHeight && Y(r, {
                                    height: s.clientHeight + "px"
                                })
                            }
                    }
                }
                ))
            },
            LanguageName: function(e) {
                var t = e.event
                  , n = e.info
                  , i = e.options
                  , r = n.name;
                if (i.languageName && r) {
                    var s = "topLeft" === i.languageName ? "topLeft" : "topRight";
                    i.overlay = i.overlay || {},
                    i.overlay[s] = !0,
                    t.on("overlay:" + s, (function(e) {
                        e('<span class="rl__name">' + n.name + "</span>")
                    }
                    ))
                }
            },
            LineNumbers: function(e) {
                var t = e.root
                  , n = e.event
                  , i = e.options
                  , r = t ? V(t, "data-rl-line-numbers") : ""
                  , s = "" === r ? +i.lineNumbers : +r;
                if (s || 0 === s) {
                    i.gutter = !0;
                    var o = Math.floor(s) - 1;
                    n.on("gutter:row:opened", (function(e, t) {
                        var i = ["rl__line-number"]
                          , r = {
                            skip: !1,
                            content: t + 1 + o
                        };
                        n.emit("lineNumber:open", e, i, t, r),
                        r.skip && (r.content = w,
                        o--),
                        e('<span class="' + i.join(" ") + '">' + r.content + "</span>")
                    }
                    ))
                }
            },
            Overlay: function(e) {
                var t = e.event
                  , n = e.options;
                t.on("mounted", (function() {
                    var e = n.overlay
                      , i = void 0 === e ? {} : e
                      , r = n.tools
                      , s = i.topRight
                      , o = i.topLeft;
                    [s = s || "topRight" === r, o = o || "topLeft" === r].forEach((function(e, n) {
                        e && (r && function(e, t) {
                            var n = t ? "Left" : "Right";
                            e.on("overlay:top" + n, (function(t) {
                                t('<span class="rl__tools">'),
                                e.emit("tools:top" + n, t),
                                t("</span>")
                            }
                            ))
                        }(t, 1 === n),
                        function(e, t) {
                            var n = "rl__overlay";
                            e.on("close", (function(i) {
                                i('<div class="' + n + " " + n + "--top-" + (t ? "left" : "right") + '">'),
                                e.emit("overlay:top" + (t ? "Left" : "Right"), i),
                                i("</div>")
                            }
                            ))
                        }(t, 1 === n))
                    }
                    )),
                    (s || o) && t.on("open", (function(e, t) {
                        t.push("has-top-overlay")
                    }
                    ))
                }
                ))
            }
        });
        function je(e) {
            let {code: t, language: n, lineNumbers: i, activeLines: s, languageName: o, caption: a, copy: l, diff: c, style: d={}, className: u="", bodyClass: p="", theme: h, id: m} = e;
            ze.has("html") || (ze.register([Ae(), Ce(), Te(), ke(), Ne()]),
            ze.compose(We));
            const f = new ze({
                language: n,
                lineNumbers: i,
                activeLines: s,
                languageName: o,
                caption: a,
                copy: l,
                diff: c,
                bodyClass: p
            });
            return r.createElement("div", {
                id: m,
                style: d,
                dangerouslySetInnerHTML: {
                    __html: f.html(t, {
                        language: n
                    })
                },
                className: (0,
                v.AK)("ryuseilight-wrapper", "code-module--code--KDpXj", u, h)
            })
        }
        var Me = n(6667)
          , He = n(7326);
        let De = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).startX = 0,
                n.startWidth = 0,
                n.state = {
                    width: void 0
                },
                n.resizableRef = (0,
                r.createRef)(),
                n.onPointerDown = n.onPointerDown.bind((0,
                He.Z)(n)),
                n.onPointerMove = n.onPointerMove.bind((0,
                He.Z)(n)),
                n.onPointerUp = n.onPointerUp.bind((0,
                He.Z)(n)),
                n.onWindowResize = n.onWindowResize.bind((0,
                He.Z)(n)),
                "undefined" != typeof window && window.addEventListener("resize", n.onWindowResize),
                n
            }
            (0,
            i.Z)(t, e);
            var n = t.prototype;
            return n.componentWillUnmount = function() {
                "undefined" != typeof window && window.removeEventListener("resize", this.onWindowResize)
            }
            ,
            n.onPointerDown = function(e) {
                if (e.cancelable) {
                    const {current: t} = this.resizableRef;
                    t && "undefined" != typeof document && (document.addEventListener("pointermove", this.onPointerMove),
                    document.addEventListener("pointerup", this.onPointerUp),
                    this.startX = e.pageX,
                    this.startWidth = t.clientWidth),
                    e.preventDefault()
                }
            }
            ,
            n.onPointerMove = function(e) {
                if (e.cancelable) {
                    const {current: t} = this.resizableRef;
                    if (t) {
                        const {onResize: t} = this.props
                          , n = this.startX - e.pageX;
                        this.setState({
                            width: this.startWidth - n
                        }),
                        t && t()
                    }
                    e.preventDefault()
                }
            }
            ,
            n.onPointerUp = function(e) {
                "undefined" != typeof document && (document.removeEventListener("pointermove", this.onPointerMove),
                document.removeEventListener("pointerup", this.onPointerUp)),
                e.preventDefault()
            }
            ,
            n.onWindowResize = function() {
                const {onResize: e} = this.props;
                this.setState({
                    width: void 0
                }),
                e && e()
            }
            ,
            n.render = function() {
                const {className: e, children: t, min: n="0", max: i="100%", ...s} = this.props
                  , {width: o} = this.state;
                return r.createElement("div", Object.assign({
                    className: (0,
                    v.AK)(e, "resizable-module--wrapper--73xfq")
                }, s), r.createElement("div", {
                    className: "resizable-module--resizable--kBo9w",
                    ref: this.resizableRef,
                    style: {
                        width: void 0 === o ? "" : `${o}px`,
                        minWidth: n,
                        maxWidth: i
                    }
                }, t, r.createElement("div", {
                    className: "resizable-module--resizer--kiKZI",
                    onPointerDown: this.onPointerDown,
                    onTouchStart: e=>e.cancelable && e.preventDefault()
                }, r.createElement("div", {
                    className: "resizable-module--bar--Ry-o3"
                }))))
            }
            ,
            t
        }(r.Component);
        var qe = "";
        function Be(e) {
            let {children: t} = e;
            return r.createElement(" ", {
                className: "fake"
            }, r.createElement(" ", {
                className: "fake"
            }, r.createElement("  ", {
                className: "  "
            }, r.createElement(" ", {
                className: qe
            }), r.createElement(" ", {
                className: qe
            }), r.createElement(" ", {
                className: qe
            })), r.createElement(" ", {
                className: "fake"
            }, "https://splidejs.com")), r.createElement(" ", {
                className: "fake"
            }, t))
        }
        function Ue(e) {
            let {children: t, ...n} = e;
            return r.createElement(De, n, r.createElement(Be, null, t))
        }
        var Ze = n(3790)
          , Xe = n.n(Ze)
          , Je = n(749)
          , Ge = n.n(Je);
        let Ve = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).state = {
                    tab: "preview",
                    visible: !1,
                    removable: !1
                },
                n.ref = r.createRef(),
                n.navRef = r.createRef(),
                n.options = (0,
                b.TS)({}, x.O),
                n.navOptions = (0,
                b.TS)({}, x.O),
                n
            }
            (0,
            i.Z)(t, e);
            var w = t.prototype;
            return w.componentDidMount = function() {
                const {useInView: e=!0} = this.props;
                if (!e) {
                    if (!this.ref.current)
                        return;
                    this.mount()
                }
            }
            ,
            w.mount = function() {
                if (this.props.usePlaceholder && !this.state.visible)
                    return void this.setState({
                        visible: !0
                    }, (()=>{
                        this.mount()
                    }
                    ));
                if (!this.ref.current)
                    return;
                const {delay: e=0, theme: t, label: i, labelledby: r, options: s={}} = this.props
                  , {firstElementChild: o} = this.ref.current;
                i && o.setAttribute("aria-label", i),
                r && o.setAttribute("aria-labelledby", r),
                (0,
                b.TS)(this.options, s),
                this.splide = new g.tv(o,this.options),
                this.createPagination(this.splide),
                this.timer = setTimeout((()=>{
                    this.mountThumbnailSlider(),
                    this.mountNestedSlider(o),
                    this.navSplide && this.splide.sync(this.navSplide),
                    g.Iz.clean(this.splide),
                    ["default", "skyblue", "sea-green"].indexOf(t) > -1 ? Promise.all([n.e(532), n.e(8240)]).then(n.bind(n, 8240)).then((()=>{
                        this.splide.mount()
                    }
                    )) : this.getExtensions().then((e=>{
                        this.bindOverflow(),
                        this.splide.mount(e),
                        this.splide.on("refresh", (()=>{
                            this.setState({
                                removable: this.splide.length > 1
                            })
                        }
                        ))
                    }
                    ))
                }
                ), e)
            }
            ,
            w.componentWillUnmount = function() {
                this.timer && clearTimeout(this.timer),
                this.splide && this.splide.destroy(),
                this.navSplide && this.navSplide.destroy(),
                this.nestedSplide && this.nestedSplide.destroy()
            }
            ,
            w.mountThumbnailSlider = function() {
                if (this.navRef.current) {
                    const {navLabel: e} = this.props
                      , t = this.navRef.current.firstElementChild;
                    e && t.setAttribute("aria-label", e),
                    this.navSplide = new g.tv(t,this.navOptions),
                    g.Iz.clean(this.navSplide),
                    this.navSplide.mount()
                }
            }
            ,
            w.mountNestedSlider = function(e) {
                if ("nested-slider" === this.props.id) {
                    const t = e.querySelector("#nested-slider-inner .splide");
                    t && (this.nestedSplide = new g.tv(t,{
                        height: "7rem",
                        perPage: 2,
                        gap: "1rem",
                        drag: !1,
                        arrowPath: "m13.5 7.01 13 13m-13 13 13-13",
                        breakpoints: {
                            640: {
                                height: "4rem",
                                gap: ".7rem",
                                pagination: !1
                            }
                        }
                    }),
                    this.nestedSplide.mount())
                }
            }
            ,
            w.onClickCode = function(e) {
                if (e.currentTarget instanceof HTMLElement) {
                    const t = e.currentTarget.querySelector(".rl__copy");
                    t && (t.tabIndex = -1,
                    t.contains(e.target) && this.copy(e.currentTarget, t))
                }
            }
            ,
            w.copy = function(e, t) {
                const n = e.querySelector(".ryuseilight-raw") || e.querySelector(".rl__body");
                n && navigator.clipboard && (navigator.clipboard.writeText(n.innerText.replace(/\n\n\n/g, "\n\n") || n.textContent).catch((()=>alert("Failed to copy. Use ctrl+C instead."))),
                t.classList.add("is-active"),
                setTimeout((()=>{
                    t.classList.remove("is-active")
                }
                ), 1e3))
            }
            ,
            w.bindOverflow = function() {
                this.props.watchOverflow && this.splide && this.splide.on("overflow", (e=>{
                    this.splide.Components.Controller.setIndex(0),
                    this.splide.options = {
                        arrows: e,
                        pagination: e,
                        drag: e,
                        clones: e ? void 0 : 0
                    },
                    this.props.toggleInactiveClass && this.splide.root.classList.toggle("is-inactive", !e)
                }
                ))
            }
            ,
            w.getExtensions = function() {
                return this.props.video ? Promise.all([n.e(532), n.e(6958)]).then(n.bind(n, 6958)).then((()=>n.e(4847).then(n.bind(n, 4847)))).then((e=>{
                    let {Video: t} = e;
                    return {
                        Video: t
                    }
                }
                )) : this.props.urlHash ? n.e(8406).then(n.bind(n, 8406)).then((e=>{
                    let {URLHash: t} = e;
                    return {
                        URLHash: t
                    }
                }
                )) : this.props.grid ? n.e(1466).then(n.bind(n, 1466)).then((e=>{
                    let {Grid: t} = e;
                    return {
                        Grid: t
                    }
                }
                )) : this.props.autoScroll ? n.e(1031).then(n.bind(n, 1031)).then((e=>{
                    let {AutoScroll: t} = e;
                    return {
                        AutoScroll: t
                    }
                }
                )) : this.props.sliderProgress ? n.e(311).then(n.bind(n, 311)).then((e=>{
                    let {SliderProgress: t} = e;
                    return {
                        SliderProgress: t
                    }
                }
                )) : Promise.resolve({})
            }
            ,
            w.createPagination = function(e) {
                this.props.pagination && e.on("pagination:mounted", (e=>{
                    let {list: t, items: n} = e;
                    t.classList.add("splide__pagination--custom"),
                    n.forEach((e=>{
                        e.button.textContent = String(e.page + 1)
                    }
                    ))
                }
                ))
            }
            ,
            w.renderSlider = function(e, t) {
                const {tab: n} = this.state
                  , {id: i, theme: s="site", isTheme: o, hasCode: d=!0} = this.props;
                return r.createElement("div", {
                    id: `${i}-slider`,
                    className: (0,
                    v.AK)(a, " " === n && l, o && " ", o && " " === s && " ",   c),
                    role: d ? "tabpanel" : null,
                    "aria-hidden": d ? "preview" !== n : null,
                    "aria-label": d ? " " : null
                }, r.createElement("div", {
                    id: `${i}-wrapper`,
                    className: (0,
                    v.AK)("splide-wrapper", s)
                }, r.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: e.html
                    },
                    ref: this.ref
                }), this.props.hasAddRemove && this.renderAddRemove()), t && r.createElement("div", {
                    id: `${i}-nav`,
                    className: (0,
                    v.AK)("splide-wrapper", s),
                    dangerouslySetInnerHTML: {
                        __html: t.html
                    },
                    ref: this.navRef
                }))
            }
            ,
            w.renderCode = function(e) {
                const {tab: t} = this.state
                  , {id: n} = this.props;
                return r.createElement("div", {
                    id: `${n}-code`,
                    className: (0,
                    v.AK)(d, "code" === t && u),
                    role: "tabpanel",
                    "aria-hidden": "code" !== t,
                    "aria-label": "Example code",
                    onClick: this.onClickCode.bind(this)
                }, r.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: e
                    },
                    className: (0,
                    v.AK)("ryuseilight-wrapper")
                }))
            }
            ,
            w.renderTab = function() {
                const {tab: e} = this.state
                  , {id: t} = this.props;
                return r.createElement("div", {
                    role: "tablist",
                    "aria-label": "Switch preview and code",
                    className: "example-module--example-tab-wrapper--yPHXt"
                }, r.createElement("button", {
                    role: "tab",
                    "aria-selected": "code" === e,
                    "aria-controls": `${t}-code`,
                    onClick: ()=>this.setState({
                        tab: "code"
                    }),
                    className: (0,
                    v.AK)(p, "code" === e && h)
                }, "Code"), r.createElement("button", {
                    role: "tab",
                    "aria-controls": `${t}-slider`,
                    "aria-selected": "preview" === e,
                    onClick: ()=>this.setState({
                        tab: "preview"
                    }),
                    className: (0,
                    v.AK)(p, "preview" === e && h)
                }, "Preview"))
            }
            ,
            w.onChange = function(e) {
                if (this.splide) {
                    const {options: t} = this.splide;
                    if (t.autoplay) {
                        const {Autoplay: t} = this.splide.Components;
                        t && (e ? t.play() : t.pause())
                    }
                    if (this.props.autoScroll) {
                        const {AutoScroll: t} = this.splide.Components;
                        t && (e ? t.play() : t.pause())
                    }
                } else
                    e && this.mount()
            }
            ,
            w.renderExample = function(e) {
                const {allSplide: {edges: t}} = e
                  , {id: n, sourceId: i, hasCode: a=!0, useInView: l=!0, triggerOnce: c=!0, rootMargin: d="200px", usePlaceholder: u} = this.props
                  , p = this.findNode(t, i);
                if (!p)
                    return null;
                try {
                    this.options = (0,
                    b.TS)(this.options, p.options ? JSON.parse(p.options) : {})
                } catch (g) {}
                let h;
                if (p.navId) {
                    let e;
                    if (h = this.findNode(t, p.navId),
                    h) {
                        try {
                            e = JSON.parse(h.options)
                        } catch (g) {
                            try {
                                e = JSON.parse(h.options.slice(1) + "}")
                            } catch (g) {
                                console.warn(`Failed to parse ${h.sourceId} options.`, h.options)
                            }
                        }
                        this.navOptions = (0,
                        b.TS)(this.navOptions, e || {})
                    }
                }
                const m = !u || this.state.visible
                  , f = this.props.resizable ? De : this.props.resizableBrowser ? Ue : "div";
                return r.createElement(r.Fragment, null, l && r.createElement(y.df, {
                    id: `${n}-example`,
                    className: (0,
                    v.AK)(s, !m && this.getPlaceholderClass()),
                    as: "div",
                    rootMargin: d,
                    triggerOnce: c,
                    onChange: e=>this.onChange(e)
                }, m && r.createElement(f, {
                    min: this.props.resizable || this.props.resizableBrowser ? "40%" : void 0,
                    onResize: ()=>this.splide && this.splide.emit("resize")
                }, r.createElement("div", {
                    className: (0,
                    v.AK)(o, a && "example-module--example-content-has-tab--idWc-")
                }, this.renderSlider(p, h), a && "code" === this.state.tab && this.renderCode(p.code))), m && a && this.renderTab()), !l && r.createElement("div", {
                    id: `${n}-example`,
                    className: s
                }, r.createElement("div", {
                    className: (0,
                    v.AK)(o)
                }, this.renderSlider(p, h), a && "code" === this.state.tab && this.renderCode(p.code)), a && this.renderTab()))
            }
            ,
            w.getPlaceholderClass = function() {
                const {id: e} = this.props;
                return "nested-slider" === e || "grid" === e ? "example-module--example-large-placeholder--KBJS-" : "fade-transition" === e || "video" === e ? "example-module--example-fade-placeholder--3RRd6" : "thumbnails" === e ? "example-module--example-thumbnails-placeholder--0Y8++" : "example-module--example-placeholder--DJTWa"
            }
            ,
            w.findNode = function(e, t) {
                const n = e.find((e=>e.node.sourceId === t));
                return n ? n.node : null
            }
            ,
            w.onAdd = function() {
                if (this.splide) {
                    const e = String(this.splide.length + 1).padStart(2, "0");
                    this.splide.add(`<li class="splide__slide"><span class="splide__number">${e}</span></li>`)
                }
            }
            ,
            w.onRemove = function() {
                this.splide && this.splide.length > 1 && this.splide.remove(this.splide.length - 1)
            }
            ,
            w.renderAddRemove = function() {
                return r.createElement("div", {
                    className: "example-module--controls--ZHqSL"
                }, r.createElement("button", {
                    className: (0,
                    v.AK)("button", m, "example-module--button-add--tKHPi"),
                    type: "button",
                    onClick: this.onAdd.bind(this),
                    "aria-label": "Add a slide"
                }, r.createElement(Xe(), null)), r.createElement("button", {
                    className: (0,
                    v.AK)("button", m, "example-module--button-remove--slxj3"),
                    type: "button",
                    onClick: this.onRemove.bind(this),
                    "aria-label": "Remove a slide",
                    disabled: !this.state.removable
                }, r.createElement(Ge(), null)))
            }
            ,
            w.renderSource = function() {
                return r.createElement(f.StaticQuery, {
                    query: "2498938197",
                    render: e=>this.renderExample(e)
                })
            }
            ,
            w.renderThumbnails = function() {
                return r.createElement("ul", {
                    className: (0,
                    v.AK)("example-module--example-gallery-thumbnails--KA9XA", "js-thumbnails")
                }, Array.from({
                    length: 4
                }).map(((e,t)=>r.createElement("li", {
                    className: "example-module--example-gallery-thumbnail--wOnXp",
                    key: t
                }, r.createElement("img", {
                    src: `/images/slides/square-thumbnails/0 ${t + 1}.jpg`,
                    alt: `Gallery Thumbnail Sample ${t + 1}`
                })))))
            }
            ,
            w.render = function() {
                if (this.props.sourceId)
                    return this.renderSource();
                const {id: e, code: t, gallery: n} = this.props
                  , {tab: i} = this.state;
                return r.createElement("div", {
                    id: `${e}-example`,
                    className: (0,
                    v.AK)(s, this.props.className)
                }, r.createElement("div", {
                    className: (0,
                    v.AK)(o)
                }, r.createElement("div", {
                    id: `${e}-slider`,
                    className: (0,
                    v.AK)(a, "preview" === i && l, this.props.pagination && c),
                    role: t ? "tabpanel" : null,
                    "aria-hidden": t ? "preview" !== i : null,
                    "aria-label": t ? "Slider preview" : null
                }, r.createElement(S.i, this.props), n && this.renderThumbnails()), t && "code" === this.state.tab && r.createElement("div", {
                    id: `${e}-code`,
                    className: (0,
                    v.AK)(d, "code" === i && u),
                    role: "tabpanel",
                    "aria-hidden": "code" !== i,
                    "aria-label": "Example Code",
                    onClick: this.onClickCode.bind(this)
                }, r.createElement(je, {
                    language: "js",
                    languageName: !0,
                    code: t,
                    copy: {
                        html: Me.g,
                        activeHtml: Me.A
                    }
                }))), t && this.renderTab())
            }
            ,
            t
        }(r.Component)
    },
    8927: function(e, t, n) {
        "use strict";
        n.d(t, {
            i: function() {
                return u
            }
        });
        var i = n(4578)
          , r = n(7294)
          , s = n(8595)
          , o = n(6180)
          , a = n(7052)
          , l = n(7650);
        const c = ["Lorem ipsum dolor sit amet, in duo falli epicurei. Te has saperet veritus efficiendi.", "Suas integre probatus vel ex, veniam qualisque tincidunt ius id.", "Alii blandit accusamus usu cu, omnis neglegentur nec ex.", "Mei facilisi erroribus ocurreret ei. Te soluta assueverit pri, has no tempor ceteros reprehendunt.", "Primis delenit theophrastus at sea, sed scripta vocibus adipiscing ea. Timeam denique lucilius vix te.", "Nibh veri dolor in eam. At homero volumus eos, ea vix quas omnes temporibus.", "Feugiat quaerendum ad eam, at hinc graeci rationibus pri. Ei viris labitur consectetuer mei.", "Suas inani rationibus duo ne, sit no epicurei dissentiet reprehendunt. Ea sed primis recteque consulatu.", "Duis constituto eam ex, sit rebum nonumes eu. Ut sea summo consul necessitatibus."];
        var d = n(1597);
        let u = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).ref = r.createRef(),
                n
            }
            (0,
            i.Z)(t, e);
            var u = t.prototype;
            return u.mount = function() {
                const {delay: e=100, onMount: t, theme: n} = this.props;
                this.ref.current && (this.timer = setTimeout((()=>{
                    this.splide = new s.tv(this.ref.current.node.firstElementChild,this.options),
                    s.Iz.clean(this.splide),
                    this.props.pagination && this.createPagination(this.splide),
                    this.getExtensions().then((e=>{
                        if (this.splide.mount(e),
                        t && t(this.splide),
                        "home" === n) {
                            const {prev: e, next: t} = this.splide.Components.Elements;
                            e && (e.tabIndex = -1),
                            t && (t.tabIndex = -1)
                        }
                    }
                    ))
                }
                ), e))
            }
            ,
            u.getExtensions = function() {
                return this.props.liveRegion ? n.e(1050).then(n.bind(n, 1050)).then((e=>{
                    let {LiveRegion: t} = e;
                    return {
                        LiveRegion: t
                    }
                }
                )) : this.props.customTransition ? n.e(2932).then(n.bind(n, 2932)).then((e=>{
                    let {CustomTransition: t} = e;
                    return {
                        CustomTransition: t
                    }
                }
                )) : this.props.slideNumber ? n.e(6642).then(n.bind(n, 6642)).then((e=>{
                    let {SlideNumber: t} = e;
                    return {
                        SlideNumber: t
                    }
                }
                )) : this.props.autoplayToggle ? n.e(8480).then(n.bind(n, 8480)).then((e=>{
                    let {AutoplayToggle: t} = e;
                    return {
                        AutoplayToggle: t
                    }
                }
                )) : this.props.gallery ? n.e(3231).then(n.bind(n, 3231)).then((e=>{
                    let {Gallery: t} = e;
                    return {
                        Gallery: t
                    }
                }
                )) : Promise.resolve({})
            }
            ,
            u.componentWillUnmount = function() {
                this.timer && clearTimeout(this.timer),
                this.splide && this.splide.destroy()
            }
            ,
            u.createRenderer = function() {
                const {length: e=9, options: t={}, id: n, config: i={}, dir: r="general", cover: o=!0} = this.props;
                let l;
                this.props.images ? (l = this.generateImageSlides(e, r),
                t.classes = {
                    slide: "splide__slide splide__slide--image" + (o ? "" : " splide__slide--no-cover")
                }) : this.props.container ? (l = this.generateContainerSlides(e),
                t.classes = {
                    slide: "splide__slide splide__slide--has-container"
                }) : l = this.generateSlides(e),
                this.renderer = new s.Iz(l,t,{
                    id: n,
                    arrows: !0,
                    ...i
                },a.O)
            }
            ,
            u.generateSlides = function(e) {
                const {hasNumber: t=!0, hasInner: n} = this.props;
                return Array.from({
                    length: e
                }).map(((e,i)=>{
                    let r = "";
                    const s = String(i + 1).padStart(2, "0");
                    return n && (r += '<div role="presentation" class="splide__slide__inner">',
                    r += "</div>"),
                    t && (r += `<span class="splide__number">${s}</span>`),
                    r
                }
                ))
            }
            ,
            u.createPagination = function(e) {
                this.props.pagination && e.on("pagination:mounted", (e=>{
                    let {list: t, items: n} = e;
                    t.classList.add("splide__pagination--custom"),
                    n.forEach((e=>{
                        e.button.textContent = String(e.page + 1)
                    }
                    ))
                }
                ))
            }
            ,
            u.generateContainerSlides = function(e) {
                const t = this.props.contents || this.props.useSampleTexts && c;
                return Array.from({
                    length: e
                }).map(((e,n)=>{
                    let i = "";
                    return i += '<div class="splide__slide__container">',
                    i += `<span class="splide__number">${String(n % 9 + 1).padStart(2, "0")}</span>`,
                    i += "</div>",
                    t && t[n] && (i += `<div class="splide__slide__content">${t[n]}</div>`),
                    i
                }
                ))
            }
            ,
            u.generateImageSlides = function(e, t) {
                const n = this.props.contents || this.props.useSampleTexts && c;
                return Array.from({
                    length: e
                }).map(((e,i)=>{
                    const r = String(i % 9 + 1).padStart(2, "0");
                    let s = "";
                    return n ? (s += '<div class="splide__slide__container">',
                    s += `<img src="/images/slides/${t}/${r}.jpg" alt="Sample Slide ${r}">`,
                    s += "</div>") : s += `<img src="/images/slides/${t}/${r}.jpg" alt="Sample Slide ${r}">`,
                    n && n[i] && (s += `<div class="splide__slide__content">${n[i]}</div>`),
                    s
                }
                ))
            }
            ,
            u.renderSource = function() {
                return r.createElement(d.StaticQuery, {
                    query: "2498938197",
                    render: e=>this.renderSourceSlider(e)
                })
            }
            ,
            u.renderSourceSlider = function(e) {
                const {allSplide: {edges: t}} = e
                  , n = t.find((e=>e.node.sourceId === this.props.sourceId));
                if (!n)
                    return null;
                const {node: i} = n;
                return this.options = (0,
                o.TS)(this.props.options || {}, i.options ? JSON.parse(i.options) : {}),
                this.renderWrapper(i.html)
            }
            ,
            u.renderWrapper = function(e) {
                const {id: t, theme: n="site"} = this.props;
                return r.createElement(l.df, {
                    as: "div",
                    id: `${t}-wrapper`,
                    className: (0,
                    o.AK)("splide-wrapper", n),
                    ref: this.ref,
                    triggerOnce: !0,
                    dangerouslySetInnerHTML: {
                        __html: e
                    },
                    onChange: e=>e && this.mount()
                })
            }
            ,
            u.render = function() {
                const {sourceId: e} = this.props;
                return e ? this.renderSource() : (this.options = this.props.options,
                this.createRenderer(),
                this.renderWrapper(this.renderer.html()))
            }
            ,
            t
        }(r.Component)
    },
    7052: function(e) {
        e.exports.O = {
            height: "10rem",
            gap: "2rem",
            arrowPath: "m13.5 7.01 13 13m-13 13 13-13",
            rewindSpeed: 700,
            waitForTransition: !1,
            breakpoints: {
                640: {
                    height: "8rem",
                    gap: "0.7rem",
                    pagination: !1
                }
            }
        }
    },
    6667: function(e) {
        e.exports.g = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n <path d="m10.3 1.26c-1.11 0-2.09 0.593-2.64 1.47h-1.41c-1.77 0-3.23 1.46-3.23 3.23v13.5c0 1.77 1.46 3.23 3.23 3.23h11.5c1.77 0 3.23-1.46 3.23-3.23v-13.5c0-1.77-1.46-3.23-3.23-3.23h-1.41c-0.552-0.882-1.53-1.47-2.64-1.47zm0 2.24h3.44c0.501 0 0.869 0.37 0.869 0.871s-0.368 0.869-0.869 0.869h-3.44c-0.501 0-0.869-0.368-0.869-0.869s0.368-0.871 0.869-0.871zm-4.05 1.38h0.98c0.249 1.46 1.54 2.6 3.07 2.6h3.44c1.53 0 2.82-1.13 3.07-2.6h0.982c0.616 0 1.08 0.462 1.08 1.08v13.5c0 0.616-0.462 1.08-1.08 1.08h-11.5c-0.616 0-1.08-0.462-1.08-1.08v-13.5c0-0.616 0.462-1.08 1.08-1.08zm2.59 5.61a1 1 0 0 0-1 1 1 1 0 0 0 1 1h6.35a1 1 0 0 0 1-1 1 1 0 0 0-1-1zm0 4.04a1 1 0 0 0-1 1 1 1 0 0 0 1 1h6.35a1 1 0 0 0 1-1 1 1 0 0 0-1-1z" />\n</svg>\n',
        e.exports.A = '<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">\n <path fill="currentColor" d="m33.4 5.54-17.6 17.6-9.09-9.09-5.66 5.66 14.8 14.8 5.66-5.66-0.0156-0.0156 17.6-17.6-5.66-5.66z"/>\n</svg>\n'
    },
    749: function(e, t, n) {
        var i = n(7294);
        function r(e) {
            return i.createElement("svg", e, i.createElement("path", {
                d: "m1 12h22",
                strokeWidth: "4"
            }))
        }
        r.defaultProps = {
            viewBox: "0 0 24 24"
        },
        e.exports = r,
        r.default = r
    },
    3790: function(e, t, n) {
        var i = n(7294);
        function r(e) {
            return i.createElement("svg", e, [i.createElement("path", {
                d: "m1 12h22",
                strokeWidth: "4",
                key: 0
            }), i.createElement("path", {
                d: "m12 23v-22",
                strokeWidth: "4",
                key: 1
            })])
        }
        r.defaultProps = {
            viewBox: "0 0 24 24"
        },
        e.exports = r,
        r.default = r
    }
}]);
//# sourceMappingURL=00adb4f861efb9054ba10b95b8c6d819bff4ac43-bfcda053e76032c3d933.js.map
