!function() {
    "use strict";
    var e, t, n, s, o, d, i, c = {}, r = {};
    function p(e) {
        var t = r[e];
        if (void 0 !== t)
            return t.exports;
        var n = r[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return c[e].call(n.exports, n, n.exports, p),
        n.loaded = !0,
        n.exports
    }
    p.m = c,
    e = [],
    p.O = function(t, n, s, o) {
        if (!n) {
            var d = 1 / 0;
            for (m = 0; m < e.length; m++) {
                n = e[m][0],
                s = e[m][1],
                o = e[m][2];
                for (var i = !0, c = 0; c < n.length; c++)
                    (!1 & o || d >= o) && Object.keys(p.O).every((function(e) {
                        return p.O[e](n[c])
                    }
                    )) ? n.splice(c--, 1) : (i = !1,
                    o < d && (d = o));
                if (i) {
                    e.splice(m--, 1);
                    var r = s();
                    void 0 !== r && (t = r)
                }
            }
            return t
        }
        o = o || 0;
        for (var m = e.length; m > 0 && e[m - 1][2] > o; m--)
            e[m] = e[m - 1];
        e[m] = [n, s, o]
    }
    ,
    p.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return p.d(t, {
            a: t
        }),
        t
    }
    ,
    n = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    p.t = function(e, s) {
        if (1 & s && (e = this(e)),
        8 & s)
            return e;
        if ("object" == typeof e && e) {
            if (4 & s && e.__esModule)
                return e;
            if (16 & s && "function" == typeof e.then)
                return e
        }
        var o = Object.create(null);
        p.r(o);
        var d = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var i = 2 & s && e; "object" == typeof i && !~t.indexOf(i); i = n(i))
            Object.getOwnPropertyNames(i).forEach((function(t) {
                d[t] = function() {
                    return e[t]
                }
            }
            ));
        return d.default = function() {
            return e
        }
        ,
        p.d(o, d),
        o
    }
    ,
    p.d = function(e, t) {
        for (var n in t)
            p.o(t, n) && !p.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    p.f = {},
    p.e = function(e) {
        return Promise.all(Object.keys(p.f).reduce((function(t, n) {
            return p.f[n](e, t),
            t
        }
        ), []))
    }
    ,
    p.u = function(e) {
        return ({
            79: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-tutorials-autoplay-toggle-button-index-mdx",
            224: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-extensions-grid-index-mdx",
            532: "styles",
            614: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-drag-index-mdx",
            621: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-integration-svelte-splide-index-mdx",
            674: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-options-index-mdx",
            676: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-arrows-index-mdx",
            1005: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-tutorials-image-carousel-index-mdx",
            1226: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-scroll-index-mdx",
            1430: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-direction-index-mdx",
            1490: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-getting-started-index-mdx",
            1618: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-version-3-index-mdx",
            1680: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-version-4-index-mdx",
            1779: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-integration-vue-splide-index-mdx",
            1934: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-controller-index-mdx",
            2028: "component---src-pages-release-notes-js",
            2082: "06a4f4679b0957990978b379c7190c52967c141d",
            2144: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-extensions-video-index-mdx",
            2239: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-structure-index-mdx",
            2300: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-transition-index-mdx",
            2368: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-extension-index-mdx",
            2492: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-autoplay-index-mdx",
            2558: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-structure-index-mdx",
            2920: "component---src-templates-document-list-js",
            2991: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-overflow-index-mdx",
            3077: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-arrows-index-mdx",
            3100: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-controller-index-mdx",
            3177: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-options-index-mdx",
            3187: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-drag-index-mdx",
            3244: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-slides-index-mdx",
            3352: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-extension-index-mdx",
            3374: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-pagination-index-mdx",
            3508: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-move-index-mdx",
            3523: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-elements-index-mdx",
            3533: "9e2a5e17a28cf5c6902f04e063aef014f5c3a128",
            3712: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-extensions-auto-scroll-index-mdx",
            3737: "fb7d5399",
            3912: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-auto-width-index-mdx",
            4044: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-events-index-mdx",
            4122: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-pagination-index-mdx",
            4268: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-themes-index-mdx",
            4366: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-getting-started-index-mdx",
            4417: "component---src-pages-premium-js",
            4542: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-accessibility-index-mdx",
            4593: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-extensions-video-index-mdx",
            5099: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-tutorials-gallery-index-mdx",
            5103: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-apis-index-mdx",
            5113: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-extensions-auto-scroll-index-mdx",
            5152: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-accessibility-index-mdx",
            5187: "b7a31ede39e37893b575b738f745f355963544fc",
            5197: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-scroll-index-mdx",
            5217: "00adb4f861efb9054ba10b95b8c6d819bff4ac43",
            5616: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-tutorials-thumbnail-slider-index-mdx",
            5626: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-direction-index-mdx",
            5813: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-layout-index-mdx",
            6075: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-extensions-grid-index-mdx",
            6104: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-elements-index-mdx",
            6115: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-events-index-mdx",
            6287: "efbe938c72216bb13e41c0f20ed1a5428cfc935d",
            6512: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-arrows-index-mdx",
            6529: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-transition-index-mdx",
            6822: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-integration-svelte-splide-index-mdx",
            6930: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-i-18-n-index-mdx",
            6972: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-arrows-index-mdx",
            7123: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-extensions-url-hash-index-mdx",
            7135: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-integration-react-splide-index-mdx",
            7486: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-auto-width-index-mdx",
            7563: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-tutorials-image-slider-index-mdx",
            7621: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-extensions-intersection-index-mdx",
            7730: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-extensions-url-hash-index-mdx",
            7772: "component---src-pages-v-3-archives-js",
            7847: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-autoplay-index-mdx",
            8032: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-pagination-index-mdx",
            8048: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-slide-index-mdx",
            8154: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-tutorials-gallery-index-mdx",
            8265: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-i-18-n-index-mdx",
            8324: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-autoplay-index-mdx",
            8555: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-slides-index-mdx",
            8562: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-guides-apis-index-mdx",
            8645: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-autoplay-index-mdx",
            8673: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-themes-index-mdx",
            8709: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-layout-index-mdx",
            8883: "component---src-pages-404-js",
            8951: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-components-slide-index-mdx",
            9158: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-tutorials-carousel-progress-index-mdx",
            9280: "component---src-pages-documents-js",
            9351: "commons",
            9429: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-guides-pagination-index-mdx",
            9467: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-tutorials-thumbnail-carousel-index-mdx",
            9475: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-components-move-index-mdx",
            9486: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-tutorials-slider-progress-index-mdx",
            9650: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-integration-vue-splide-index-mdx",
            9678: "component---src-pages-index-js",
            9696: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-3-integration-react-splide-index-mdx",
            9839: "component---src-templates-document-js-content-file-path-home-runner-work-splide-site-splide-site-docs-v-4-extensions-intersection-index-mdx"
        }[e] || e) + "-" + {
            79: "64616bbdccabdf3dbcc1",
            224: "4f0712dacc5d964a3360",
            311: "4f4073b9e2d9cbf04373",
            532: "6ea6887ee27d11e091c6",
            614: "439f287b69364e8bb38b",
            621: "6007c0f331f49e728145",
            674: "5e05e123f850675de491",
            676: "4eb57b8281b402f29bfa",
            1005: "13eaf879dff310f1807b",
            1031: "a8d3fab0975d09c40dc2",
            1050: "387762a2d4773046bb02",
            1226: "52abf1b9fadf310179a6",
            1430: "d591c0d1ffe53f4aca88",
            1443: "1a8e026bcb0d8dbd4000",
            1466: "a62137db7ad3689f390a",
            1490: "945cabf33fa0801ceb3d",
            1618: "9c23da8b0e5dc719ccd8",
            1680: "4e5900dfc9ea4db2ef71",
            1779: "8d78f7058a16b9a9353f",
            1934: "3c429cf2472c66e6c642",
            2028: "6fb7c4fdace1762da0ac",
            2082: "9cfd30b667bd56038caf",
            2144: "38274a77be04271df808",
            2239: "08c8b25d6ce921cef149",
            2300: "821ea23a95d36a4fc264",
            2368: "efcfa941dbdb8273cf11",
            2492: "afc949c015ab0d95be1a",
            2558: "eaa1ae6d1630dc23abdc",
            2920: "09ef72d5cb8a55c2d4fe",
            2932: "e7190e1374f88013aa00",
            2954: "cc1f4893a3df97d0b761",
            2991: "7bda808d3f8bc53c0ef4",
            3077: "8ac27fee3db8256a2e64",
            3100: "269e74a856adbe07359a",
            3177: "559808007c511fb092f1",
            3187: "9741315454564234bf60",
            3231: "b441061d6301fd144050",
            3244: "ece7034119978e521efb",
            3352: "66f2083609f406ffb168",
            3374: "4cf6f37f39054e6464dd",
            3508: "8779b3a97b57610e71c8",
            3523: "d4ea4cd9f46626dfde53",
            3533: "4bc3e24a5056dec96919",
            3712: "94e3c2385c2eec45bfa0",
            3737: "35116b9042877d82c774",
            3912: "a4f7c9666e9bb94573a8",
            4044: "05ffdedb3a9d1690e95a",
            4122: "79919b52b889a8361689",
            4268: "530b2dded939bd1c8ac5",
            4366: "f78137cbc1b9341f20d5",
            4417: "b0c85038a45345942273",
            4542: "9774dc2ac01bac0f7d1c",
            4593: "d1fd68e9d91539202f00",
            4843: "54bf9b34f7649da58ad9",
            4847: "0491da373434570ba642",
            5099: "32a5972678ad7fccc232",
            5103: "d06be7f453da5437294a",
            5113: "7aee332a347e68cd5d42",
            5152: "8f8f9ae25e2a00d4b8b5",
            5187: "b8b0c2559ccc2db83792",
            5197: "a535868a7fdcb0424454",
            5217: "bfcda053e76032c3d933",
            5616: "4ae2ffe5685a5c185166",
            5626: "3189ee944c811f6f24cf",
            5813: "5fbb4df77c1d9011e529",
            5867: "c863448bb9ff40110041",
            6075: "78f0aeae924d8ee6c816",
            6104: "e97e54bff359cec5f948",
            6115: "38d3e60d0df5d79f70ed",
            6287: "acd7695bce1f2d48da39",
            6512: "8686c1dce00cc7a61389",
            6529: "f673e4090e00c2d58277",
            6642: "340de58a641002fbbed7",
            6822: "ff94db574b254fd25588",
            6930: "f18a2312d30fa917aff1",
            6958: "b41e6381e46cf56bf292",
            6972: "3e538b1550a8ecc47bd1",
            7123: "51b36800b27fcc21c815",
            7135: "1aad494bf3d87369ae40",
            7486: "f622850db5a574d70c1c",
            7563: "2bcddc67af62e7f12c97",
            7621: "46337f38f026c2199a64",
            7730: "5834478f6eea2b2e1420",
            7772: "5f95619ecce1e068af0c",
            7847: "311b416df9729503d680",
            8032: "dc344b13ce9a4cf7188a",
            8048: "e76e4d684585bf32f691",
            8154: "e22705e43fa4664026b1",
            8223: "467bce0732d54b3e2892",
            8240: "2624d0490b9cebc27db0",
            8265: "c355481bed7e52836628",
            8324: "0c350009b3505890ef09",
            8406: "daf1948d13720132667a",
            8480: "f9d41619381328b39860",
            8555: "d96572ebbcfcd0aaab7f",
            8562: "f2e4e105a5b50d942584",
            8645: "16863b5821984eacc503",
            8673: "67f8832935fd3147b4bd",
            8709: "ce34cd8b70f52694ad49",
            8883: "1e76486a6f8da1b21cf6",
            8951: "b1717fbf2e8b7c04bb17",
            9158: "c56f137326a9a2cca693",
            9280: "e2dd45579fb8a8d56f41",
            9351: "032b521e85632d5f8f8c",
            9429: "8ef229589f85890396bd",
            9467: "12bf02e0fdaa18475288",
            9475: "f08dc85bf8fed58b8e4e",
            9486: "1e82f09bda430b15e1ec",
            9650: "88e83ccbe5c60a779988",
            9678: "9d939b1fec8da3574695",
            9696: "40dbff51db84f16c898f",
            9839: "ce999a9ba3862856c1d7"
        }[e] + ".js"
    }
    ,
    p.miniCssF = function(e) {
        return "styles.d6284e31bbbd5b94e151.css"
    }
    ,
    p.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    p.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    s = {},
    o = "@splidejs/splide-site:",
    p.l = function(e, t, n, d) {
        if (s[e])
            s[e].push(t);
        else {
            var i, c;
            if (void 0 !== n)
                for (var r = document.getElementsByTagName("script"), m = 0; m < r.length; m++) {
                    var l = r[m];
                    if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == o + n) {
                        i = l;
                        break
                    }
                }
            i || (c = !0,
            (i = document.createElement("script")).charset = "utf-8",
            i.timeout = 120,
            p.nc && i.setAttribute("nonce", p.nc),
            i.setAttribute("data-webpack", o + n),
            i.src = e),
            s[e] = [t];
            var a = function(t, n) {
                i.onerror = i.onload = null,
                clearTimeout(f);
                var o = s[e];
                if (delete s[e],
                i.parentNode && i.parentNode.removeChild(i),
                o && o.forEach((function(e) {
                    return e(n)
                }
                )),
                t)
                    return t(n)
            }
              , f = setTimeout(a.bind(null, void 0, {
                type: "timeout",
                target: i
            }), 12e4);
            i.onerror = a.bind(null, i.onerror),
            i.onload = a.bind(null, i.onload),
            c && document.head.appendChild(i)
        }
    }
    ,
    p.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    p.nmd = function(e) {
        return e.paths = [],
        e.children || (e.children = []),
        e
    }
    ,
    p.p = "/",
    d = function(e) {
        return new Promise((function(t, n) {
            var s = p.miniCssF(e)
              , o = p.p + s;
            if (function(e, t) {
                for (var n = document.getElementsByTagName("link"), s = 0; s < n.length; s++) {
                    var o = (i = n[s]).getAttribute("data-href") || i.getAttribute("href");
                    if ("stylesheet" === i.rel && (o === e || o === t))
                        return i
                }
                var d = document.getElementsByTagName("style");
                for (s = 0; s < d.length; s++) {
                    var i;
                    if ((o = (i = d[s]).getAttribute("data-href")) === e || o === t)
                        return i
                }
            }(s, o))
                return t();
            !function(e, t, n, s) {
                var o = document.createElement("link");
                o.rel = "stylesheet",
                o.type = "text/css",
                o.onerror = o.onload = function(d) {
                    if (o.onerror = o.onload = null,
                    "load" === d.type)
                        n();
                    else {
                        var i = d && ("load" === d.type ? "missing" : d.type)
                          , c = d && d.target && d.target.href || t
                          , r = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                        r.code = "CSS_CHUNK_LOAD_FAILED",
                        r.type = i,
                        r.request = c,
                        o.parentNode.removeChild(o),
                        s(r)
                    }
                }
                ,
                o.href = t,
                document.head.appendChild(o)
            }(e, o, t, n)
        }
        ))
    }
    ,
    i = {
        6658: 0
    },
    p.f.miniCss = function(e, t) {
        i[e] ? t.push(i[e]) : 0 !== i[e] && {
            532: 1
        }[e] && t.push(i[e] = d(e).then((function() {
            i[e] = 0
        }
        ), (function(t) {
            throw delete i[e],
            t
        }
        )))
    }
    ,
    function() {
        var e = {
            6658: 0
        };
        p.f.j = function(t, n) {
            var s = p.o(e, t) ? e[t] : void 0;
            if (0 !== s)
                if (s)
                    n.push(s[2]);
                else if (/^(532|6658)$/.test(t))
                    e[t] = 0;
                else {
                    var o = new Promise((function(n, o) {
                        s = e[t] = [n, o]
                    }
                    ));
                    n.push(s[2] = o);
                    var d = p.p + p.u(t)
                      , i = new Error;
                    p.l(d, (function(n) {
                        if (p.o(e, t) && (0 !== (s = e[t]) && (e[t] = void 0),
                        s)) {
                            var o = n && ("load" === n.type ? "missing" : n.type)
                              , d = n && n.target && n.target.src;
                            i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + d + ")",
                            i.name = "ChunkLoadError",
                            i.type = o,
                            i.request = d,
                            s[1](i)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        p.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, n) {
            var s, o, d = n[0], i = n[1], c = n[2], r = 0;
            if (d.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (s in i)
                    p.o(i, s) && (p.m[s] = i[s]);
                if (c)
                    var m = c(p)
            }
            for (t && t(n); r < d.length; r++)
                o = d[r],
                p.o(e, o) && e[o] && e[o][0](),
                e[d[r]] = 0;
            return p.O(m)
        }
          , n = self.webpackChunk_splidejs_splide_site = self.webpackChunk_splidejs_splide_site || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }()
}();
//# sourceMappingURL=webpack-runtime-654f5c8e2fdb99bf659e.js.map
