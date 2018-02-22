function mapRange(a, b, c, d, e) { "use strict"; return d + (e - d) * (a - b) / (c - b) }

// function isSafari() { "use strict"; /^((?!chrome).)*safari/i.test(navigator.userAgent) && (console.log("safari"), $("html").addClass("safari")) }
var lastWidth = 0,
    lastHeight = 0,
    sourceColors = ["#4DBFD9", "#33B679", "#8CC474", "#DAE56B", "rgb(0, 153, 255)", "rgb(0, 163, 168)", "rgb(255, 221, 51)", "rgb(255, 134, 115)", "rgb(255, 64, 134)"];
$(document).ready(function() { "use strict"; var a = new Controller($(window).width(), $(window).height());
    a.init(), isSafari(), $(window).resize(function() {
        ($(window).width() !== lastWidth || $(window).height() !== lastHeight) && (lastWidth = $(window).width(), lastHeight = $(window).height(), a.resize(lastWidth, lastHeight)) }) }), d3.selection.prototype.moveToFront = function() { "use strict"; return this.each(function() { this.parentNode.appendChild(this) }) };
var Controller = function(a, b) { "use strict";

        function c() { e(), k(r, s) }

        function d(a, b) { $.getJSON(a, function() {}).done(function(a) { b(a) }).fail(function() { console.error("ERROR parsing data..") }) }

        function e() { h(), g() }

        function f(a) { 0 === a ? ($(".subContent__arrow--left a").attr("deactivated", "deactivated").attr("view", v[v.length - 1]), $(".subContent__arrow--right a").removeAttr("deactivated").attr("view", v[a + 1])) : a >= v.length - 1 ? ($(".subContent__arrow--left a").removeAttr("deactivated").attr("view", v[a - 1]), $(".subContent__arrow--right a").attr("deactivated", "deactivated").attr("view", v[0])) : ($(".subContent__arrow--left a").removeAttr("deactivated").attr("view", v[a - 1]), $(".subContent__arrow--right a").removeAttr("deactivated").attr("view", v[a + 1])) }

        function g() { $(".subContent__arrow > a").on("click", function() { var a = $(this).attr("view");
                t = a, i(); var b = v.indexOf(a);
                f(b) }), $(".menuContent .button").on("click", function() { $(".menuContent .button").removeClass("selected"), $(this).addClass("selected"); var a = $(this).attr("source"); "donutgrid" === t ? n.setSource(a) : "timeline" === t ? p.setSource(a) : "wordlist" === t && o.setSource(a) }), $(".menuContent-secondairy .button").on("click", function() { $(".menuContent-secondairy  .button").removeClass("selected"), $(this).addClass("selected"); var a = $(this).attr("source");
                o.setSource(a) }), $("#close_info").on("click", function() { $("#displayOntop").fadeOut(300, function() { $("#displayOntop").removeClass("displayOntop--startscreen") }), $("#menuContent, #donutYears, #menuContent-secondairy").css("opacity", 1) }) }

        function h() { d("http://seeingdata.cleverfranke.com/corpus/data/2000_articles_with_meta.json", l.setData), $(".main_logo").fadeIn(200, function() { $(this).find("img").animate({ width: "140px", height: "140px", opacity: 1 }, { duration: 1500, easing: "easeOutElastic" }), $("#introTitle").fadeIn(200, function() { $(".leftAni").css("width", "0"), $(".rightAni").css("width", "0"), $(".rightAni").css("marginLeft", "393px"), setTimeout(function() { $(".leftAni").css("width", "196px"), $(".rightAni").css("width", "196px"), $(".rightAni").css("marginLeft", "196px"), setTimeout(function() { $("#introTitle").fadeIn(500, function() { $(".title").hide(), $(".introText").fadeIn(500) }) }, 400) }, 1500) }) }), $("#enter").on("click", function() { l.setMode(!0), $(".introContent").addClass("active"), $("#introContext").fadeOut(500, function() { $("#introContext").css("text-align", "center"), $("#introContext").html('<div class="sentence">Four questions emerged:</div>' + x + '<span class="readmore" id="readmore_intro">More info ></span>'), $(".readmore").unbind().on("click", function() { $("#setInfo").html("                        <p>The UK national press can be divided into three main categories: tabloids, midmarkets, and broadsheets. This visualisation, which includes twelve national UK publications and their Sunday editions, uses the following groupings from the Audit Bureau of Circulations (ABC) </p>                         <ul>                             <li><strong>Tabloids:</strong> Daily Mirror, Daily Star, News of the World (until July 2011), The People, The Sun </li>                             <li><strong>Midmarkets:</strong> Daily Mail, The Express </li>                             <li><strong>Broadsheets:</strong> Daily Telegraph, Financial Times, The Guardian, The Independent, The Times </li>                         </ul>                         <p>Textual data for this visualisation was accessed via Nexis, a service that archives many periodicals and newspaper sources from around the world. The Migration Observatory used the following search string:  “refugee! OR asylum! OR deport! OR immigr! OR emigr! OR migrant! OR illegal alien! OR illegal entry OR leave to remain AND NOT deportivo AND NOT deportment”. The ‘!’ symbol indicates that all variations of a search term were included: for example, ‘refugee!’ would include both ‘refugee’ and ‘refugees’. All sections of each publication—such as news, film reviews, sports, letters to the editor, and arts—were included in the dataset because all of these portrayals potentially contribute to the information that readers get about migration issues. </p>                         <p>‘Deportivo’ is a football club, while ‘deportment’ refers to etiquette and manners: since they do not relate to migration, both were excluded from the search.</p>                     "), $("#displayOntop").fadeIn(300).addClass("displayOntop--startscreen") }), $("#introContext").fadeIn(500, function() { setTimeout(function() { $(".introOptions").fadeIn(500, function() { $(".introOptions").css("height", "185px"), $(".introOption").each(function(a) { $(this).delay(500 * a).fadeIn(500) }), setTimeout(function() { $("#readmore_intro").css("opacity", 1) }, 2e3), $(".introOption").on("click", function() { $("#displayOntop").fadeOut(300, function() { $("#displayOntop").removeClass("displayOntop--startscreen"), $(".copyright").css("opacity", 0) }); var a = $(this).attr("view");
                                    t = a, i(); var b = v.indexOf(a);
                                    f(b), $(".introContent").fadeOut(500, function() { $(".mainContent").fadeIn(500) }) }) }) }, 0) }) }) }) }

        function i() { var a;
            $("#visualContainer").empty(), $("#visualContainer").addClass("hidden"), $("#textContent").addClass("hidden"), $(".main_logo img").animate({ width: "80px", height: "80px" }, { duration: 1500, easing: "easeOutElastic" }), t !== u && (clearTimeout(q), q = setTimeout(function() { "force" === t ? ($("#textContent > div").html('                         <div class="center"><h4>How often did different people or organisations appear within news coverage? <span class="readmore" id="readmore">more info ></span></h4></div>                         '), $("#setInfo").html("                        <p><strong>How often did different people or organisations appear within news coverage? </strong></p>                         <p>This screen shows some of the main names and organisations appearing along with mentions of at least one of the four migrant groups. This list was generated using the Sketch Engine, a web-based linguistic tool, by looking for proper nouns that appeared at least 40 times within five words to the left and right of each mention of a migrant group. A minimum threshold of 40 was used to identify proper nouns that were more salient.</p>                         "), a = s - ($("#header").height() + w), $("#visualContainer").css("height", a), $("#visualContainer").css("overflow-y", "hidden"), m = forceDirected("#visualContainer", r, a, 200, "bounce"), d("data/debatenetwork.json", m.setData), j()) : "donutgrid" === t ? ($("#textContent > div").html('                         <div class="center"><h4>Which people/organisations tended to appear together within newspaper items? <span class="readmore" id="readmore">more info ></span></h4></div>                         '), $("#setInfo").html("                        <p><strong>Which people/organisations tended to appear together within newspaper items?</strong></p>                         <p>This screen shows how some of the main names and organisations appearing along with mentions of at least one migrant group were also mentioned in the same newspaper items as other major names and organisations. This list was generated using the Sketch Engine by looking for proper nouns that appeared at least 40 times within five words to the left and right of each mention of a migrant group. A minimum threshold of 40 was used to identify proper nouns that were more salient.</p>                     "), a = s - ($("#header").height() + w + 10), $("#visualContainer").css("overflow-y", "auto"), $("#visualContainer").css("height", a), n = donutGrid(this, "#visualContainer"), d("data/debatematrix.json", n.setData), j()) : "timeline" === t ? ($("#textContent > div").html('                         <div class="center"><h4>How did the amount of coverage mentioning each migrant group change over time? <span class="readmore" id="readmore">more info ></span></h4></div>                         '), $("#setInfo").html("                            <p><strong>How did the amount of coverage mentioning each migrant group change over time?</strong></p>                             <p>This screen shows how often the words ‘immigrants’, ‘migrants’, ‘asylum seekers’, and ‘refugees’ appeared in each publication type over time. This is measured by counting the absolute number of times each word appeared in each publication type. Major changes in migration policy, as well as UK elections, also appear along the timeline.</p>                         "), a = s - ($(".mainMenu").height() + $(".subContent").height()), $("#visualContainer").css("height", a), p = overTime(this, "#visualContainer", r, a - 10, 500), d("data/timeline.json", p.setData), j()) : "wordlist" === t && ($("#textContent > div").html('                         <div class="center"><h4>What words were typically used to describe each migrant group? <span class="readmore" id="readmore">more info ></span></h4></div>                         '), $("#setInfo").html("                        <p><strong>What words were typically used to describe each migrant group?</strong></p>                         <p>This screen shows the main words used to describe each migrant group over the entire period. When certain words are highlighted, this indicates that they were used as adjectives to describe the chosen migrant group. This list was automatically generated using the Sketch Engine, a web-based linguistic tool. For ‘asylum seekers’, the results shown include all adjectives that appeared a minimum of five times in the corpus. For the other three groups, the top 150 adjectives are shown, with each word appearing at least nine times.</p>                    "), $("#donutYears").fadeOut(300), a = s - ($("#header").height() + w), $("#visualContainer").css({ height: a, "padding-top": "24px", "overflow-y": "auto" }), o = wordList("#visualContainer"), d("data/tagged_adjectives_sketch_engine_log.json", o.setData), j()), $("#textContent").removeClass("hidden"), $("#visualContainer").removeClass("hidden") }, 500)), "donutgrid" === t || "wordlist" === t ? ($("#donutYears").fadeIn(300), $(".menuContent, .menuContent-secondairy").addClass("allowcolor")) : ($("#donutYears").fadeOut(300), $(".menuContent, .menuContent-secondairy").removeClass("allowcolor")), "force" === t ? ($("#menuContent").fadeOut(300), $("#menuContent-secondairy").fadeOut(300)) : "wordlist" === t ? $("#menuContent").fadeOut(300, function() { $("#menuContent-secondairy").fadeIn(300) }) : $("#menuContent-secondairy").fadeOut(300, function() { $("#menuContent").fadeIn(300) }), $(".button").removeClass("selected"), $("#menuContent #btnAll, #menuContent-secondairy #btnAll").addClass("selected"), u = t }

        function j() { $(".readmore").unbind().on("click", function() { $("#displayOntop").fadeIn(300), $("#menuContent, #donutYears, #menuContent-secondairy").css("opacity", 0) }) }

        function k(a, b) { r = a, s = b; var c = s - ($(".mainMenu").height() + $(".subContent").height());
            $("#visualContainer").css("height", c), "force" === t ? (c = s - ($("#header").height() + w), m.resize(a, c)) : "donutgrid" === t ? (c = s - ($("#header").height() + w + 10), $("#visualContainer").css("height", c)) : "timeline" === t ? (c = s - ($(".mainMenu").height() + $(".subContent").height()), p.resize(a, c - 10)) : "wordlist" === t && (c = s - ($("#header").height() + w), $("#visualContainer").css("height", c)) } var l, m, n, o, p, q, r = a,
            s = b,
            t = "",
            u = "",
            v = ["timeline", "wordlist", "force", "donutgrid"],
            w = 24,
            x = '<div class="introOptions"><div class="introOption" view="timeline"><span class="number">1</span><span class="text">How did the amount of coverage mentioning each migrant group change over time?</span><span class=arrow></span></div><div class="introOption" view="wordlist"><span class="number">2</span><span class="text">What words were typically used to describe each migrant group?</span><span class=arrow></span></div><div class="introOption" view="force"><span class="number">3</span><span class="text">How often did different people or organisations appear within news coverage?</span><span class=arrow></span></div><div class="introOption" view="donutgrid"><span class="number">4</span><span class="text">Which people tended to appear together within newspaper items?</span><span class=arrow></span></dv></div>'; return { init: function() { l = introductionLayer("#introContent", r, s), c() }, resize: function(a, b) { k(a, b), $("#titleLayer .title").css("margin-top", b / 2 - 250) } } },
    introductionLayer = function(a, b, c) { "use strict";

        function d(a) { p = a.articles, q = a.newspapers, r = p.length, e() }

        function e() { var a = o * n,
                b = a / r;
            k = Math.floor(Math.sqrt(b)), l = Math.floor(n / u), j(t) }

        function f() { $(a).mousemove(function(a) { $(".introText").not(function() { var b = [a.pageX, a.pageY],
                        c = Math.round(b[0] / k),
                        d = Math.floor(b[1] / k),
                        e = d * l + c;
                    s !== e && (s = e, g(b[0], b[1], e, 0, 100, 100), z = Math.floor(Math.random() * (r - 1)), h(b[0], b[1], p[z])) }) }) }

        function g(b, c, d, e, f, g) { $(a).append('<div class="articleHighlight" id="artID' + d + '"style="left:' + b + "px; top:" + c + 'px;"></div>'), $("#artID" + d).fadeIn(e, function() { setTimeout(function() { $("#artID" + d).fadeOut(f, function() { $("#artID" + d).remove() }) }, g) }) }

        function h(a, b, c) { var d, e, f, g = '<span class="title">' + c.title + '</span><span class="source">' + q[parseInt(c.newspaper)] + ', <span class="date">' + c.date + "</span></span>";
            $("#popArticle").html(g), d = n / 2 > a ? 10 : -y, f = $("#popArticle").height(), e = b > o - f ? -(50 + f) : -25, $("#popArticle").css({ left: a + "px", top: b + "px", marginLeft: d + "px", marginTop: e + "px" }), $("#articleHighlightStatic").css({ left: a + "px", top: b + "px" }), $(".introOptions, .main_logo, #introTitle, #introContext, .sentence").on("mouseenter", function() { $("#popArticle, #articleHighlightStatic").hide() }), $(".introOptions, .main_logo, #introTitle, #introContext, .sentence").on("mouseleave", function() { $("#popArticle, #articleHighlightStatic").show() }) }

        function i() { m = setInterval(function() { var a = Math.round(Math.random() * n),
                    b = Math.round(Math.random() * o),
                    c = Math.round(a / k),
                    d = Math.floor(b / k),
                    e = d * l + c; if (g(a, b, e, v.fadein, v.fadeout, v.delay), t || 0 !== x) t || x !== Math.round(w / 1.5) || $("#popArticle, #articleHighlightStatic").fadeOut(300);
                else { for ($("#popArticle, #articleHighlightStatic").fadeIn(300); z === A;) z = Math.floor(Math.random() * (r - 1));
                    A = z, h(a, b, p[z]), x = w } x-- }, 500) }

        function j(a) { a ? ($("#popArticle, #articleHighlightStatic").fadeIn(300), clearInterval(m), f()) : i() } var k, l, m, n = b,
            o = c,
            p = {},
            q = {},
            r = 0,
            s = -1,
            t = !1,
            u = 6,
            v = { fadein: 500, fadeout: 200, delay: 1500 },
            w = 10,
            x = 0,
            y = 240,
            z = 0,
            A = 0; return { setData: function(a) { d(a) }, setMode: function(a) { t = a, j(t) } } },
    forceDirected = function(a, b, c, d, e) { "use strict";

        function f() { E = !0 }

        function g() { V.on("tick", function() { p.attr("transform", function(a) { return N && (a.x + u(a.size) > B ? a.x = B - u(a.size) : a.x - u(a.size) / 2 < u(a.size) / 2 && (a.x = 0 + u(a.size)), a.y + u(a.size) > C ? a.y = C - u(a.size) : a.y - u(a.size) / 2 < u(a.size) / 2 && (a.y = 0 + u(a.size))), "translate(" + a.x + "," + a.y + ")" }), q.attr("x1", function(a) { return a.source.x }).attr("y1", function(a) { return a.source.y }).attr("x2", function(a) { return a.target.x }).attr("y2", function(a) { return a.target.y }) }) }

        function h(a) { y = a.nodes.length, w = a.range.min, x = a.range.max, u = d3.scale.linear().domain([w, x]).range([F, G]), v = d3.scale.linear().domain([w, x]).range([H, I]), r = a.nodes, V.nodes(r), p = U.selectAll(".node").data(r), p.enter().append("g").attr("transform", function() { return "translate(0,0)" }).attr("class", "node"), p.append("circle").attr("class", "outerCircle").style("fill", K).attr("r", function(a) { return u(a.size) }), p.append("text").attr("class", "name").attr("text-anchor", "middle").text(function(a) { return a.name }).style("font-size", function(a) { return v(a.size) + "px" }).attr("y", function(a) { return v(a.size) / 3 }); var b = [];
            a.links.forEach(function(a) { a.count > D && b.push(a) }), V.links(b), q = T.selectAll(".connection").data(b), q.enter().append("line").attr("class", "connection"), n(), m(), k(), i(), o(B, C), V.start() }

        function i() { z = d3.scale.linear().domain([0, 50]).range([.05, .35]), A = z(y), V.linkStrength(function() { return .1 }).linkDistance(function(a) { return u(a.source.size) + u(a.target.size) }).charge(function() { return 4 * -Math.min(B, C) }).gravity(A).friction(.8) }

        function j(a) { var b = !1; return void 0 !== s && s.length >= 0 && s.forEach(function(c) { return a.id === c.id && c.count > D ? b = !0 : void 0 }), b }

        function k() { p.call(V.drag), p.on("click", function(a) { t = d3.select(this), p.sort(function(b) { return b.id !== a.id ? -1 : 1 }), s = [], s = a.related_on_id, m(), n() }).on("mouseenter", function(a) { p.sort(function(b) { return b.id !== a.id ? -1 : 1 }), d3.select(this).select(".outerCircle").transition().duration(O).attr("r", function(a) { return u(a.size) + L }), d3.select(this).select(".outerCircle").transition().duration(O).style("fill", "black").style("opacity", 1).style("stroke-opacity", 1).attr("stroke", J), d3.select(this).transition().duration(O).select(".name").attr("y", function(a) { return (v(a.size) + M) / 3 }).style("font-size", function(a) { return v(a.size) + M + "px" }) }).on("mouseleave", function() { n() }), S.on("click", function() { l() }) }

        function l() { t = void 0, s = [], n(), m() }

        function m() { q.transition().duration(O).attr("opacity", function(a) { return void 0 === t ? .2 : a.source.id === t[0][0].__data__.id || a.target.id === t[0][0].__data__.id ? 1 : .15 }).style("stroke", function(a) { return void 0 === t ? K : a.source.id === t[0][0].__data__.id || a.target.id === t[0][0].__data__.id ? J : K }) }

        function n() { p.select(".outerCircle").transition().duration(O).ease(P).attr("r", function(a) { return void 0 !== t && t[0][0].__data__.id === a.id ? u(a.size) + L : u(a.size) }), p.select(".outerCircle").transition().duration(O).style("fill", function(a) { return void 0 !== t && t[0][0].__data__.id === a.id ? "black" : K }).style("opacity", function(a) { return void 0 !== t && t[0][0].__data__.id === a.id ? 1 : .3 }).style("stroke-opacity", function(a) { return void 0 !== t && t[0][0].__data__.id === a.id ? 1 : 0 }), p.select(".name").transition().duration(O).style("font-size", function(a) { return void 0 !== t && t[0][0].__data__.id === a.id ? v(a.size) + M + "px" : v(a.size) + "px" }).attr("y", function(a) { return void 0 !== t && t[0][0].__data__.id === a.id ? (v(a.size) + M) / 3 : v(a.size) / 3 }), p.transition().duration(O).style("opacity", function(a) { return void 0 === t ? 1 : j(a) || t[0][0].__data__.id === a.id ? 1 : .25 }) }

        function o(a, b) { B = a, C = b, V.size([B, C]), Q.attr("width", B).attr("height", C), R.attr("width", B).attr("height", C), T.attr("width", B).attr("height", C), U.attr("width", B).attr("height", C), E && V.start() } var p, q, r, s, t, u, v, w, x, y, z, A, B = b,
            C = c,
            D = 0,
            E = !1,
            F = 10,
            G = 60,
            H = 14,
            I = 42,
            J = "rgb(20, 182, 153)",
            K = "rgb(161, 173, 179)",
            L = 0,
            M = 20,
            N = !0,
            O = d,
            P = e,
            Q = d3.select(a).append("svg").attr("width", B).attr("height", C),
            R = Q.append("g").attr("class", "worldCanvas").attr("width", B).attr("height", C),
            S = R.append("rect").attr("id", "deselecter").attr("width", b).attr("height", c).style("fill", "white").style("opacity", 0),
            T = R.append("g").attr("class", "connectionLayer").attr("width", B).attr("height", C),
            U = R.append("g").attr("class", "nodeLayer").attr("width", B).attr("height", C),
            V = d3.layout.force().on("tick", g).on("end", f); return { setData: function(a) { h(a) }, resize: function(a, b) { o(a, b) } } },
    donutGrid = function(a, b) { "use strict";

        function c(a) { e = a.max, f = a.min, g = d3.scale.linear().domain([f, e]).range([j, i]), a.voices.forEach(function(a) { var c = "";
                Object.keys(a.occurrence_by_year).forEach(function(a) { var b = a;
                    c += '<div class="donut year' + b + '"></div>' }), h = '<div class="contentRow" id="row' + a.id + '"><div class="innerLine"></div><div class="centerRow"><div class="word">' + a.name + '</div><div class="donuts">' + c + "</div></div></div>", $(b).append(h), Object.keys(a.occurrence_by_year).forEach(function(b) { var c = b,
                        d = { pieces: a.occurrence_by_year[b], maxmapping: i, minmapping: j },
                        e = g(a.occurrence_overall),
                        f = "#row" + a.id + " .year" + c,
                        h = new DonutChart(d, f, 90, 90, e);
                    h.init(), k.push(h) }) }) }

        function d(a) { k.forEach(function(b) { b.update(a) }) } var e, f, g, h, i = 88,
            j = 30,
            k = []; return { setData: function(a) { c(a) }, setSource: function(a) { d(a) } } },
    DonutChart = function(a, b, c, d, e) { "use strict";

        function f() { o.selectAll(".arc").data(m(p)).enter().append("g").attr("class", "arc").append("path").attr("d", function(a) { return a.value > 0 ? l(a) : h(0, 0, 0) }).style("fill", function(a) { return sourceColors[a.data.index] }) }

        function g(a) { o.selectAll(".arc").select("path").attr("d", function(b) { if ("all" === a) return b.value > 0 ? l(b) : h(0, 0, 0); if ("all" !== a) { if (a === b.data.name) { var c = k(b.data.value); return b.value > 0 ? h(0, 0, c) : h(0, 0, 0) } return h(0, 0, 1) } }) }

        function h(a, b, c) { return "M " + a + "," + (b - c / 2) + "a " + (a + c / 2) + "," + (b + c / 2) + " 0 0, 1 " + a + "," + (b + c) + "L " + a + ", " + (b - c / 2) + "a " + (a + c / 2) + "," + (b + c / 2) + " 0 0, 0 " + a + "," + (b + c) + "Z" } var i = c,
            j = d;
        e /= 2; var k = d3.scale.linear().domain([0, a.pieces.total]).range([20, 2 * e]),
            l = d3.svg.arc().outerRadius(e).innerRadius(e - 10),
            m = d3.layout.pie().sort(function(a) { return d3.descending(a.name) }).value(function(a) { return a.value }),
            n = d3.select(b).append("svg").attr("width", i).attr("height", j),
            o = n.append("g").attr("class", "worldCanvas").attr("transform", "translate(" + i / 2 + "," + j / 2 + ")");
        o.append("circle").attr("class", "reference").attr("r", a.maxmapping / 2); var p = []; return Object.keys(a.pieces).forEach(function(b, c) { var d = b,
                e = a.pieces[b]; "total" !== b && "bbc" !== b && p.push({ name: d, value: e, index: c }) }), { init: function() { f() }, update: function(a) { g(a) } } },
    wordList = function(a) { "use strict";

        function b(a) { g = { min: a.ranges.all.min, max: a.ranges.all.max }, k = { min: a.ranges.asylumseekers.min, max: a.ranges.asylumseekers.max }, h = { min: a.ranges.immigrants.min, max: a.ranges.immigrants.max }, i = { min: a.ranges.migrants.min, max: a.ranges.migrants.max }, j = { min: a.ranges.refugees.min, max: a.ranges.refugees.max }; var b = l.selectAll(".word").data(a.adjectives);
            b.enter().append("div").attr("class", "word"), b.exit(), b.html(function(a) { return a.name }).style("opacity", 1), c("all") }

        function c(a) { var b = ""; "all" === a ? (b = "all", d = d3.scale.linear().domain([g.min, g.max]).range([e, f])) : "asylumseekers" === a ? (b = "asylumseekers", d = d3.scale.linear().domain([k.min, k.max]).range([e, f])) : "immigrants" === a ? (b = "immigrants", d = d3.scale.linear().domain([h.min, h.max]).range([e, f])) : "migrants" === a ? (b = "migrants", d = d3.scale.linear().domain([i.min, i.max]).range([e, f])) : "refugees" === a && (b = "refugees", d = d3.scale.linear().domain([j.min, j.max]).range([e, f])), l.selectAll(".word").style({ opacity: function(a) { return d(a.occurrence[b]) }, color: function() { var a = sourceColors[4]; return "immigrants" === b ? a = sourceColors[5] : "migrants" === b ? a = sourceColors[6] : "refugees" === b ? a = sourceColors[7] : "asylumseekers" === b && (a = sourceColors[8]), a } }) } var d, e = .25,
            f = 1,
            g = {},
            h = {},
            i = {},
            j = {},
            k = {},
            l = d3.select(a); return { setData: function(a) { b(a) }, setSource: function(a) { c(a) } } },
    overTime = function(a, b, c, d, e) { "use strict";

        function f(a) { r = a, y = a.length, x = (c - (K + L)) / y, w = fb.append("g"), u = w.selectAll(".month").data(a), u = u.enter().append("g").attr("class", "month").attr("transform", function() { return "translate(0," + Y.top + ")" }), u.append("circle").attr({ r: function(a) { var b = 2; return a.events.length > 0 && (b = 5), b }, "class": function(a) { var b = ""; return a.events.length > 0 && (b = "hasevent"), b } }), B = d3.scale.linear().domain([0, y - 1]).range([K, I - L]).clamp(!0), D = d3.scale.linear().domain([0, N]).range([K, I - L]).clamp(!0), C = d3.svg.brush().x(B).extent([0, 0]).on("brush", o).on("brushend", p), A = fb.append("g").attr("class", "timeslider").call(C), A.selectAll(".extent,.resize").remove(), A.append("g").attr("class", "x axis").attr("transform", "translate(0," + Y.top + ")").call(d3.svg.axis().scale(D).orient("bottom").ticks(N).tickSize(0).tickPadding(20)).selectAll("text").attr("class", "yearlabel").text(function() { return "" }), A.select(".background").attr("transform", "translate(0," + (Y.top - 15) + ")").attr("height", 30), z = A.append("g").attr("class", "timehandle").attr("transform", "translate(0," + Y.top + ")"), z.append("circle").attr("r", 14), z.append("line").attr("x1", -4).attr("y1", -5).attr("y2", 5).attr("x2", -4), z.append("line").attr("x1", 0).attr("y1", -5).attr("y2", 5).attr("x2", 0), z.append("line").attr("x1", 4).attr("y1", -5).attr("y2", 5).attr("x2", 4), A.select("timeslider").call(C), A.call(C.event).transition().duration(750).call(C.extent([0, 0])).call(C.event), g(), h(a) }

        function g() { x = (I - (K + L)) / (y - 1), w.selectAll(".month").transition().duration(U).attr("transform", function(a, b) { return "translate(" + (K + x * b) + "," + Y.top + ")" }), w.selectAll(".month").select("rect").transition().duration(U).attr("width", function() { return 2 }).attr("height", 3), B = d3.scale.linear().domain([0, y - 1]).range([K, I - L]).clamp(!0), D = d3.scale.linear().domain([0, N]).range([K, I - L]).clamp(!0), C.x(B).extent([0, 0]), A.call(C); var a = d3.scale.linear().domain([0, N]).range([2006, 2013]);
            A.select("g").transition().duration(U).attr("transform", "translate(0," + Y.top + ")").call(d3.svg.axis().scale(D).orient("bottom").ticks(N).tickSize(0).tickPadding(20)).selectAll("text").text(function(b) { return Math.ceil(a(b)) }), A.select(".background").transition().duration(U).attr("transform", "translate(0," + (Y.top - 15) + ")").attr("height", 30), A.select(".timehandle").transition().duration(U).attr("transform", function() { return "translate(" + B(s) + "," + Y.top + ")" }) }

        function h(a) { a.forEach(function(a) { Q.push(a.keywords.immigrants), a.keywords.immigrants.total > ib && (ib = a.keywords.immigrants.total), a.keywords.immigrants.bbc > jb && (jb = a.keywords.immigrants.bbc), a.keywords.immigrants.broadsheet > kb && (kb = a.keywords.immigrants.broadsheet), a.keywords.immigrants.midmarket > lb && (lb = a.keywords.immigrants.midmarket), a.keywords.immigrants.tabloid > mb && (mb = a.keywords.immigrants.tabloid), R.push(a.keywords.migrants), a.keywords.migrants.total > ib && (ib = a.keywords.migrants.total), a.keywords.migrants.bbc > jb && (jb = a.keywords.migrants.bbc), a.keywords.migrants.broadsheet > kb && (kb = a.keywords.migrants.broadsheet), a.keywords.migrants.midmarket > lb && (lb = a.keywords.migrants.midmarket), a.keywords.migrants.tabloid > mb && (mb = a.keywords.migrants.tabloid), S.push(a.keywords.refugees), a.keywords.refugees.total > ib && (ib = a.keywords.refugees.total), a.keywords.refugees.bbc > jb && (jb = a.keywords.refugees.bbc), a.keywords.refugees.broadsheet > kb && (kb = a.keywords.refugees.broadsheet), a.keywords.refugees.midmarket > lb && (lb = a.keywords.refugees.midmarket), a.keywords.refugees.tabloid > mb && (mb = a.keywords.refugees.tabloid), T.push(a.keywords["asylum seekers"]), a.keywords["asylum seekers"].total > ib && (ib = a.keywords["asylum seekers"].total), a.keywords["asylum seekers"].bbc > jb && (jb = a.keywords["asylum seekers"].bbc), a.keywords["asylum seekers"].broadsheet > kb && (kb = a.keywords["asylum seekers"].broadsheet), a.keywords["asylum seekers"].midmarket > lb && (lb = a.keywords["asylum seekers"].midmarket), a.keywords["asylum seekers"].tabloid > mb && (mb = a.keywords["asylum seekers"].tabloid) }), F = ib, nb.append("path").datum(Q).attr("class", "line"), nb.append("circle").datum(Q).attr("class", "tracker").attr("r", M), ob.append("path").datum(R).attr("class", "line"), ob.append("circle").datum(R).attr("class", "tracker").attr("r", M), pb.append("path").datum(S).attr("class", "line"), pb.append("circle").datum(S).attr("class", "tracker").attr("r", M), qb.append("path").datum(T).attr("class", "line"), qb.append("circle").datum(T).attr("class", "tracker").attr("r", M), i("empty"), j() }

        function i(a) { "empty" === a && (F = 0), E = d3.scale.linear().domain([0, F]).range([$.top, $.top - $.height]), nb.select("path").transition().duration(1.5 * U).ease(V, W, X).attr("d", rb), ob.select("path").transition().duration(1.5 * U).ease(V, W, X).attr("d", rb), pb.select("path").transition().duration(1.5 * U).ease(V, W, X).attr("d", rb), qb.select("path").transition().duration(1.5 * U).ease(V, W, X).attr("d", rb), "empty" === a && setTimeout(function() { k("all") }, U) }

        function j() { var a = gb.append("g").attr("class", "immigrants");
            a.append("text").attr("class", "word").text("immigrants"), a = gb.append("g").attr("class", "migrants"), a.append("text").attr("class", "word").text("migrants"), a = gb.append("g").attr("class", "refugees"), a.append("text").attr("class", "word").text("refugees"), a = gb.append("g").attr("class", "asylum_seekers"), a.append("text").attr("class", "word").text("asylum seekers"), l(!1), O = !0 }

        function k(a) { "all" === a ? (a = "total", F = ib) : "bbc" === a ? F = jb : "broadsheet" === a ? F = kb : "midmarket" === a ? F = lb : "tabloid" === a && (F = mb), P = a, g(), i(), m(!0), l(!0) }

        function l(a) { var b = 0;
            a && (b = U), v = d3.scale.linear().domain([0, F]).range([ab, bb]), H = d3.scale.linear().domain([0, 3]).range([sb + K, I - (L + sb)]); var c = gb.select(".immigrants").attr("transform", function() { return "translate(" + H(0) + "," + _.top + ")" });
            c.select(".word").transition().duration(b).style("font-size", function() { return G = d3.scale.linear().domain([t, t + 1]).range([v(Q[t][P]), v(Q[t + 1][P])]), G(s) + "px" }), c = gb.select(".migrants").attr("transform", function() { return "translate(" + H(1) + "," + _.top + ")" }), c.select(".word").transition().duration(b).style("font-size", function() { return G = d3.scale.linear().domain([t, t + 1]).range([v(R[t][P]), v(R[t + 1][P])]), G(s) + "px" }), c = gb.select(".refugees").attr("transform", function() { return "translate(" + H(2) + "," + _.top + ")" }), c.select(".word").transition().duration(b).style("font-size", function() { return G = d3.scale.linear().domain([t, t + 1]).range([v(S[t][P]), v(S[t + 1][P])]), G(s) + "px" }), c = gb.select(".asylum_seekers").attr("transform", function() { return "translate(" + H(3) + "," + _.top + ")" }), c.select(".word").transition().duration(b).style("font-size", function() { return G = d3.scale.linear().domain([t, t + 1]).range([v(T[t][P]), v(T[t + 1][P])]), G(s) + "px" }) }

        function m(a) { t = Math.floor(s); var b = 0;
            a && (b = U), t >= y - 1 && (t -= 1), nb.select(".tracker").transition().duration(b).attr("cx", B(s)).attr("cy", function(a) { return (G = d3.scale.linear().domain([t, t + 1]).range([E(a[t][P]), E(a[t + 1][P])]))(s) }), ob.select(".tracker").transition().duration(b).attr("cx", B(s)).attr("cy", function(a) { return (G = d3.scale.linear().domain([t, t + 1]).range([E(a[t][P]), E(a[t + 1][P])]))(s) }), pb.select(".tracker").transition().duration(b).attr("cx", B(s)).attr("cy", function(a) { return (G = d3.scale.linear().domain([t, t + 1]).range([E(a[t][P]), E(a[t + 1][P])]))(s) }), qb.select(".tracker").transition().duration(b).attr("cx", B(s)).attr("cy", function(a) { return (G = d3.scale.linear().domain([t, t + 1]).range([E(a[t][P]), E(a[t + 1][P])]))(s) }) }

        function n() { if (r[t].events.length > 0) { var a = "";
                r[t].events.forEach(function(b) { a += '<div class="date">' + b.date + '</div><div class="eventContent">' + b.description + "</div>" }); var b = 0;
                s > y / 2 && (b = -200), hb.html(a).style("left", B(s) + b + "px").style("top", Z.top + "px").style("opacity", 1) } else hb.style("opacity", 0) }

        function o() { s = C.extent()[0], d3.event.sourceEvent && (s = B.invert(d3.mouse(this)[0]), C.extent([s, s])), A.select(".timehandle").attr("transform", function() { return "translate(" + B(s) + "," + Y.top + ")" }), m(!1), l(!1), n() }

        function p() { C.extent([Math.round(C.extent()[0]), Math.round(C.extent()[0])]), s = C.extent()[0], A.select(".timehandle").transition().duration(U).attr("transform", function() { return "translate(" + B(s) + "," + Y.top + ")" }), m(!0), l(!0), n() }

        function q(a, b) { I = a, J = b, cb.attr("width", I).attr("height", J), db.attr("width", I).attr("height", J), eb.attr("width", I).attr("height", J), fb.attr("width", I).attr("height", J), gb.attr("width", I).attr("height", J), O && k(P) } var r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I = c,
            J = d,
            K = 50,
            L = 50,
            M = 4,
            N = 7,
            O = !1,
            P = "total",
            Q = [],
            R = [],
            S = [],
            T = [],
            U = e,
            V = "elastic",
            W = 1,
            X = .9,
            Y = { top: 480 },
            Z = { top: 400 },
            $ = { top: 445, height: 250 },
            _ = { top: 100 },
            ab = 10,
            bb = 72,
            cb = d3.select(b).append("svg").attr("width", I).attr("height", J),
            db = cb.append("g").attr("class", "worldCanvas").attr("width", I).attr("height", J),
            eb = cb.append("g").attr("class", "graphContainer").attr("width", I).attr("height", J),
            fb = cb.append("g").attr("class", "timelineContainer").attr("width", I).attr("height", J),
            gb = cb.append("g").attr("class", "wordContainer").attr("width", I).attr("height", J),
            hb = d3.select(b).append("div").attr("id", "eventLabel"),
            ib = 0,
            jb = 0,
            kb = 0,
            lb = 0,
            mb = 0,
            nb = eb.append("g").attr("class", "glineOne"),
            ob = eb.append("g").attr("class", "glineTwo"),
            pb = eb.append("g").attr("class", "glineThree"),
            qb = eb.append("g").attr("class", "glineFour"),
            rb = d3.svg.line().x(function(a, b) { return B(b) }).y(function(a) { return E(a[P]) }),
            sb = 150; return { setData: function(a) { f(a) }, setSource: function(a) { k(a) }, resize: function(a, b) { q(a, b) } } };