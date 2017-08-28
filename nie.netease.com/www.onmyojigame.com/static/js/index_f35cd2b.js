! function(e, t)
{
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], function(o)
	{
		return t(o, e, e.document)
	}) : "object" == typeof module && module.exports ? module.exports = function(o, n)
	{
		return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(o)), t(n, e, e.document), n
	} : t(jQuery, e, e.document)
}("undefined" != typeof window ? window : this, function(e, t, o, n)
{
	"use strict";

	function i(o, n, i, r)
	{
		if (v === o && (i = !1), x === !0) return !0;
		if (d[o])
		{
			if (E = !1, i && k.before(o, p), y = 1, L = f[o], I === !1 && v > o && r === !1 && g[o] && (y = parseInt(p[o].outerHeight() / S.height()), L = parseInt(f[o]) + (p[o].outerHeight() - S.height())),
				k.sectionName && (I !== !0 || 0 !== o))
				if (history.pushState) try
				{
					history.replaceState(null, null, d[o])
				}
				catch (s)
				{
					t.console && console.warn("Scrollify warning: This must be hosted to manipulate the hash value.")
				}
				else t.location.hash = d[o];
			if (n) e(k.target).stop().scrollTop(L), i && k.after(o, p);
			else
			{
				if (H = !0, e().velocity ? e(k.target).stop().velocity("scroll",
					{
						duration: k.scrollSpeed,
						easing: k.easing,
						offset: L,
						mobileHA: !1
					}) : e(k.target).stop().animate(
					{
						scrollTop: L
					}, k.scrollSpeed, k.easing), t.location.hash.length && k.sectionName && t.console) try
				{
					e(t.location.hash).length && console.warn("Scrollify warning: There are IDs that match the hash value - this will cause the page to anchor.")
				}
				catch (s)
				{
					console.warn("Scrollify warning:", t.location.hash, "is not a valid jQuery expression.")
				}
				e(k.target).promise().done(function()
				{
					v = o, H = !1, I = !1, i && k.after(o, p)
				})
			}
		}
	}

	function r(e)
	{
		function t(t)
		{
			for (var o = 0, n = e.slice(Math.max(e.length - t, 1)), i = 0; i < n.length; i++) o += n[i];
			return Math.ceil(o / t)
		}
		var o = t(10),
			n = t(70);
		return o >= n ? !0 : !1
	}

	function s(e, t)
	{
		for (var o = d.length; o >= 0; o--) "string" == typeof e ? d[o] === e && (m = o, i(o, t, !0, !0)) : o === e && (m = o, i(o, t, !0, !0))
	}
	var c, a, l, u, h, f = [],
		d = [],
		p = [],
		g = [],
		m = 0,
		v = 0,
		y = 1,
		w = !1,
		S = e(t),
		b = S.scrollTop(),
		E = !1,
		H = !1,
		M = !1,
		x = !1,
		T = [],
		D = (new Date).getTime(),
		I = !0,
		N = !1,
		L = 0,
		j = "onwheel" in o ? "wheel" : o.onmousewheel !== n ? "mousewheel" : "DOMMouseScroll",
		k = {
			section: ".section",
			sectionName: "section-name",
			interstitialSection: "",
			easing: "easeOutExpo",
			scrollSpeed: 1100,
			offset: 0,
			scrollbars: !0,
			target: "html,body",
			standardScrollElements: !1,
			setHeights: !0,
			overflowScroll: !0,
			before: function() {},
			after: function() {},
			afterResize: function() {},
			afterRender: function() {}
		};
	e.scrollify = function(n)
	{
		function s(t)
		{
			e().velocity ? e(k.target).stop().velocity("scroll",
			{
				duration: k.scrollSpeed,
				easing: k.easing,
				offset: t,
				mobileHA: !1
			}) : e(k.target).stop().animate(
			{
				scrollTop: t
			}, k.scrollSpeed, k.easing)
		}

		function v()
		{
			var t = k.section;
			g = [], k.interstitialSection.length && (t += "," + k.interstitialSection), k.scrollbars === !1 && (k.overflowScroll = !1), e(t).each(function(t)
			{
				var o = e(this);
				k.setHeights ? o.is(k.interstitialSection) ? g[t] = !1 : o.css("height", "auto").outerHeight() < S.height() || "hidden" === o.css("overflow") ? (o.css(
				{
					height: S.height()
				}), g[t] = !1) : (o.css(
				{
					height: o.height()
				}), g[t] = k.overflowScroll ? !0 : !1) : g[t] = o.outerHeight() < S.height() || k.overflowScroll === !1 ? !1 : !0
			})
		}

		function I(o, n)
		{
			var r = k.section;
			k.interstitialSection.length && (r += "," + k.interstitialSection), f = [], d = [], p = [], e(r).each(function(o)
			{
				var n = e(this);
				f[o] = o > 0 ? parseInt(n.offset().top) + k.offset : parseInt(n.offset().top), k.sectionName && n.data(k.sectionName) ? d[o] = "#" + n.data(k.sectionName).toString().replace(/ /g, "-") : n.is(
					k.interstitialSection) === !1 ? d[o] = "#" + (o + 1) : (d[o] = "#", o === e(r).length - 1 && o > 1 && (f[o] = f[o - 1] + parseInt(n.height()))), p[o] = n;
				try
				{
					e(d[o]).length && t.console && console.warn("Scrollify warning: Section names can't match IDs - this will cause the browser to anchor.")
				}
				catch (i)
				{}
				t.location.hash === d[o] && (m = o, w = !0)
			}), !0 === o && i(m, !1, !1, !1), !0 === n && k.afterRender()
		}

		function L()
		{
			return g[m] ? (b = S.scrollTop(), b > parseInt(f[m]) ? !1 : !0) : !0
		}

		function z()
		{
			return g[m] ? (b = S.scrollTop(), b < parseInt(f[m]) + (p[m].outerHeight() - S.height()) - 28 ? !1 : !0) : !0
		}
		N = !0, e.easing.easeOutExpo = function(e, t, o, n, i)
		{
			return t == i ? o + n : n * (-Math.pow(2, -10 * t / i) + 1) + o
		}, l = {
			handleMousedown: function()
			{
				return x === !0 ? !0 : (E = !1, void(M = !1))
			},
			handleMouseup: function()
			{
				return x === !0 ? !0 : (E = !0, void(M && l.calculateNearest(!1, !0)))
			},
			handleScroll: function()
			{
				return x === !0 ? !0 : (c && clearTimeout(c), void(c = setTimeout(function()
				{
					return M = !0, E === !1 ? !1 : (E = !1, void l.calculateNearest(!1, !0))
				}, 200)))
			},
			calculateNearest: function(e, t)
			{
				b = S.scrollTop();
				for (var o, n = 1, r = f.length, s = 0, c = Math.abs(f[0] - b); r > n; n++) o = Math.abs(f[n] - b), c > o && (c = o, s = n);
				(z() || L()) && (m = s, i(s, e, t, !1))
			},
			wheelHandler: function(o)
			{
				if (x === !0) return !0;
				if (k.standardScrollElements && (e(o.target).is(k.standardScrollElements) || e(o.target).closest(k.standardScrollElements).length)) return !0;
				g[m] || o.preventDefault();
				var n = (new Date).getTime();
				o = o || t.event;
				var s = o.originalEvent.wheelDelta || -o.originalEvent.deltaY || -o.originalEvent.detail,
					c = Math.max(-1, Math.min(1, s));
				if (T.length > 149 && T.shift(), T.push(Math.abs(s)), n - D > 200 && (T = []), D = n, H) return !1;
				if (0 > c)
				{
					if (m < f.length - 1 && z())
					{
						if (!r(T)) return !1;
						o.preventDefault(), m++, H = !0, i(m, !1, !0, !1)
					}
				}
				else if (c > 0 && m > 0 && L())
				{
					if (!r(T)) return !1;
					o.preventDefault(), m--, H = !0, i(m, !1, !0, !1)
				}
			},
			keyHandler: function(e)
			{
				return x === !0 ? !0 : H === !0 ? !1 : void(38 == e.keyCode ? m > 0 && L() && (e.preventDefault(), m--, i(m, !1, !0, !1)) : 40 == e.keyCode && m < f.length - 1 && z() && (e.preventDefault(),
					m++, i(m, !1, !0, !1)))
			},
			init: function()
			{
				k.scrollbars ? (S.on("mousedown", l.handleMousedown), S.on("mouseup", l.handleMouseup), S.on("scroll", l.handleScroll)) : e("body").css(
				{
					overflow: "hidden"
				}), S.on(j, l.wheelHandler), S.on("keydown", l.keyHandler)
			}
		}, u = {
			touches:
			{
				touchstart:
				{
					y: -1,
					x: -1
				},
				touchmove:
				{
					y: -1,
					x: -1
				},
				touchend: !1,
				direction: "undetermined"
			},
			options:
			{
				distance: 30,
				timeGap: 800,
				timeStamp: (new Date).getTime()
			},
			touchHandler: function(t)
			{
				if (x === !0) return !0;
				if (k.standardScrollElements && (e(t.target).is(k.standardScrollElements) || e(t.target).closest(k.standardScrollElements).length)) return !0;
				var o;
				if ("undefined" != typeof t && "undefined" != typeof t.touches) switch (o = t.touches[0], t.type)
				{
					case "touchstart":
						u.touches.touchstart.y = o.pageY, u.touches.touchmove.y = -1, u.touches.touchstart.x = o.pageX, u.touches.touchmove.x = -1, u.options.timeStamp = (new Date).getTime(), u.touches.touchend = !
							1;
					case "touchmove":
						u.touches.touchmove.y = o.pageY, u.touches.touchmove.x = o.pageX, u.touches.touchstart.y !== u.touches.touchmove.y && Math.abs(u.touches.touchstart.y - u.touches.touchmove.y) > Math.abs(u.touches
							.touchstart.x - u.touches.touchmove.x) && (t.preventDefault(), u.touches.direction = "y", u.options.timeStamp + u.options.timeGap < (new Date).getTime() && 0 == u.touches.touchend && (u.touches
							.touchend = !0, u.touches.touchstart.y > -1 && Math.abs(u.touches.touchmove.y - u.touches.touchstart.y) > u.options.distance && (u.touches.touchstart.y < u.touches.touchmove.y ? u.up() :
								u.down())));
						break;
					case "touchend":
						u.touches[t.type] === !1 && (u.touches[t.type] = !0, u.touches.touchstart.y > -1 && u.touches.touchmove.y > -1 && "y" === u.touches.direction && (Math.abs(u.touches.touchmove.y - u.touches
								.touchstart.y) > u.options.distance && (u.touches.touchstart.y < u.touches.touchmove.y ? u.up() : u.down()), u.touches.touchstart.y = -1, u.touches.touchstart.x = -1, u.touches.direction =
							"undetermined"))
				}
			},
			down: function()
			{
				m <= f.length - 1 && (z() && m < f.length - 1 ? (m++, i(m, !1, !0, !1)) : Math.floor(p[m].height() / S.height()) > y ? (s(parseInt(f[m]) + S.height() * y), y += 1) : s(parseInt(f[m]) + (p[m].height() -
					S.height())))
			},
			up: function()
			{
				m >= 0 && (L() && m > 0 ? (m--, i(m, !1, !0, !1)) : y > 2 ? (y -= 1, s(parseInt(f[m]) + S.height() * y)) : (y = 1, s(parseInt(f[m]))))
			},
			init: function()
			{
				o.addEventListener && (o.addEventListener("touchstart", u.touchHandler, !1), o.addEventListener("touchmove", u.touchHandler, !1), o.addEventListener("touchend", u.touchHandler, !1))
			}
		}, h = {
			refresh: function(e, t)
			{
				clearTimeout(a), a = setTimeout(function()
				{
					v(), I(t, !1), e && k.afterResize()
				}, 400)
			},
			handleUpdate: function()
			{
				h.refresh(!1, !0)
			},
			handleResize: function()
			{
				h.refresh(!0, !1)
			},
			handleOrientation: function()
			{
				h.refresh(!0, !0)
			}
		}, k = e.extend(k, n), v(), I(!1, !0), !0 === w ? i(m, !1, !0, !0) : setTimeout(function()
		{
			l.calculateNearest(!0, !1)
		}, 200), f.length && (l.init(), u.init(), S.on("resize", h.handleResize), o.addEventListener && t.addEventListener("orientationchange", h.handleOrientation, !1))
	}, e.scrollify.move = function(t)
	{
		return t === n ? !1 : (t.originalEvent && (t = e(this).attr("href")), void s(t, !1))
	}, e.scrollify.instantMove = function(e)
	{
		return e === n ? !1 : void s(e, !0)
	}, e.scrollify.next = function()
	{
		m < d.length && (m += 1, i(m, !1, !0, !0))
	}, e.scrollify.previous = function()
	{
		m > 0 && (m -= 1, i(m, !1, !0, !0))
	}, e.scrollify.instantNext = function()
	{
		m < d.length && (m += 1, i(m, !0, !0, !0))
	}, e.scrollify.instantPrevious = function()
	{
		m > 0 && (m -= 1, i(m, !0, !0, !0))
	}, e.scrollify.destroy = function()
	{
		return N ? (k.setHeights && e(k.section).each(function()
		{
			e(this).css("height", "auto")
		}), S.off("resize", h.handleResize), k.scrollbars && (S.off("mousedown", l.handleMousedown), S.off("mouseup", l.handleMouseup), S.off("scroll", l.handleScroll)), S.off(j, l.wheelHandler), S.off(
			"keydown", l.keyHandler), o.addEventListener && (o.removeEventListener("touchstart", u.touchHandler, !1), o.removeEventListener("touchmove", u.touchHandler, !1), o.removeEventListener(
			"touchend", u.touchHandler, !1)), f = [], d = [], p = [], void(g = [])) : !1
	}, e.scrollify.update = function()
	{
		return N ? void h.handleUpdate() : !1
	}, e.scrollify.current = function()
	{
		return p[m]
	}, e.scrollify.disable = function()
	{
		x = !0
	}, e.scrollify.enable = function()
	{
		x = !1, N && l.calculateNearest(!1, !1)
	}, e.scrollify.isDisabled = function()
	{
		return x
	}, e.scrollify.setOptions = function(o)
	{
		return N ? void("object" == typeof o ? (k = e.extend(k, o), h.handleUpdate()) : t.console && console.warn("Scrollify warning: setOptions expects an object.")) : !1
	}
});;
! function(e)
{
	e.fn.slide = function(t)
	{
		return e.fn.slide.defaults = {
			type: "slide",
			effect: "fade",
			autoPlay: !1,
			delayTime: 500,
			interTime: 2500,
			triggerTime: 150,
			defaultIndex: 0,
			titCell: ".hd li",
			mainCell: ".bd",
			targetCell: null,
			trigger: "mouseover",
			scroll: 1,
			vis: 1,
			titOnClassName: "on",
			autoPage: !1,
			prevCell: ".prev",
			nextCell: ".next",
			pageStateCell: ".pageState",
			opp: !1,
			pnLoop: !0,
			easing: "swing",
			startFun: null,
			endFun: null,
			switchLoad: null,
			playStateCell: ".playState",
			mouseOverStop: !0,
			defaultPlay: !0,
			returnDefault: !1
		}, this.each(function()
		{
			var n = e.extend(
				{}, e.fn.slide.defaults, t),
				a = e(this),
				i = n.effect,
				s = e(n.prevCell, a),
				o = e(n.nextCell, a),
				r = e(n.pageStateCell, a),
				u = e(n.playStateCell, a),
				l = e(n.titCell, a),
				c = l.size(),
				f = e(n.mainCell, a),
				p = f.children().size(),
				d = n.switchLoad,
				h = e(n.targetCell, a),
				v = parseInt(n.defaultIndex),
				m = parseInt(n.delayTime),
				g = parseInt(n.interTime);
			parseInt(n.triggerTime);
			var w, I = parseInt(n.scroll),
				M = parseInt(n.vis),
				C = "false" == n.autoPlay || 0 == n.autoPlay ? !1 : !0,
				y = "false" == n.opp || 0 == n.opp ? !1 : !0,
				x = "false" == n.autoPage || 0 == n.autoPage ? !1 : !0,
				O = "false" == n.pnLoop || 0 == n.pnLoop ? !1 : !0,
				b = "false" == n.mouseOverStop || 0 == n.mouseOverStop ? !1 : !0,
				q = "false" == n.defaultPlay || 0 == n.defaultPlay ? !1 : !0,
				k = "false" == n.returnDefault || 0 == n.returnDefault ? !1 : !0,
				P = 0,
				S = 0,
				T = 0,
				Q = 0,
				L = n.easing,
				B = null,
				D = null,
				F = null,
				E = n.titOnClassName,
				j = l.index(a.find("." + E)),
				W = v = -1 == j ? v : j,
				z = v,
				A = v,
				N = p >= M ? 0 != p % I ? p % I : I : 0,
				U = "leftMarquee" == i || "topMarquee" == i ? !0 : !1,
				H = function()
				{
					e.isFunction(n.startFun) && n.startFun(v, c, a, e(n.titCell, a), f, h, s, o)
				},
				$ = function()
				{
					e.isFunction(n.endFun) && n.endFun(v, c, a, e(n.titCell, a), f, h, s, o)
				},
				G = function()
				{
					l.removeClass(E), q && l.eq(z).addClass(E)
				};
			if ("menu" == n.type) q && l.removeClass(E).eq(v).addClass(E), l.hover(function()
			{
				w = e(this).find(n.targetCell);
				var t = l.index(e(this));
				D = setTimeout(function()
				{
					switch (v = t, l.removeClass(E).eq(v).addClass(E), H(), i)
					{
						case "fade":
							w.stop(!0, !0).animate(
							{
								opacity: "show"
							}, m, L, $);
							break;
						case "slideDown":
							w.stop(!0, !0).animate(
							{
								height: "show"
							}, m, L, $)
					}
				}, n.triggerTime)
			}, function()
			{
				switch (clearTimeout(D), i)
				{
					case "fade":
						w.animate(
						{
							opacity: "hide"
						}, m, L);
						break;
					case "slideDown":
						w.animate(
						{
							height: "hide"
						}, m, L)
				}
			}), k && a.hover(function()
			{
				clearTimeout(F)
			}, function()
			{
				F = setTimeout(G, m)
			});
			else
			{
				if (0 == c && (c = p), U && (c = 2), x)
				{
					if (p >= M ? "leftLoop" == i || "topLoop" == i ? c = 0 != p % I ? (p / I ^ 0) + 1 : p / I : (x = p - M, c = 1 + parseInt(0 != x % I ? x / I + 1 : x / I), 0 >= c && (c = 1)) : c = 1, l.html(""),
						x = "", 1 == n.autoPage || "true" == n.autoPage)
						for (j = 0; c > j; j++) x += "<li>" + (j + 1) + "</li>";
					else
						for (j = 0; c > j; j++) x += n.autoPage.replace("$", j + 1);
					l.html(x), l = l.children()
				}
				if (p >= M)
				{
					f.children().each(function()
					{
						e(this).width() > T && (T = e(this).width(), S = e(this).outerWidth(!0)), e(this).height() > Q && (Q = e(this).height(), P = e(this).outerHeight(!0))
					});
					var J = f.children(),
						x = function()
						{
							for (var e = 0; M > e; e++) J.eq(e).clone().addClass("clone").appendTo(f);
							for (e = 0; N > e; e++) J.eq(p - e - 1).clone().addClass("clone").prependTo(f)
						};
					switch (i)
					{
						case "fold":
							f.css(
							{
								position: "relative",
								width: S,
								height: P
							}).children().css(
							{
								position: "absolute",
								width: T,
								left: 0,
								top: 0,
								display: "none"
							});
							break;
						case "top":
							f.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + M * P + 'px"></div>').css(
							{
								top: -(v * I) * P,
								position: "relative",
								padding: "0",
								margin: "0"
							}).children().css(
							{
								height: Q
							});
							break;
						case "left":
							f.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + M * S + 'px"></div>').css(
							{
								width: p * S,
								left: -(v * I) * S,
								position: "relative",
								overflow: "hidden",
								padding: "0",
								margin: "0"
							}).children().css(
							{
								"float": "left",
								width: T
							});
							break;
						case "leftLoop":
						case "leftMarquee":
							x(), f.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + M * S + 'px"></div>').css(
							{
								width: (p + M + N) * S,
								position: "relative",
								overflow: "hidden",
								padding: "0",
								margin: "0",
								left: -(N + v * I) * S
							}).children().css(
							{
								"float": "left",
								width: T
							});
							break;
						case "topLoop":
						case "topMarquee":
							x(), f.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + M * P + 'px"></div>').css(
							{
								height: (p + M + N) * P,
								position: "relative",
								padding: "0",
								margin: "0",
								top: -(N + v * I) * P
							}).children().css(
							{
								height: Q
							})
					}
				}
				var K = function(e)
					{
						var t = e * I;
						return e == c ? t = p : -1 == e && 0 != p % I && (t = -p % I), t
					},
					R = function(t)
					{
						var n = function(n)
						{
							for (var a = n; M + n > a; a++) t.eq(a).find("img[" + d + "]").each(function()
							{
								var t = e(this);
								if (t.attr("src", t.attr(d)).removeAttr(d), f.find(".clone")[0])
									for (var n = f.children(), a = 0; a < n.size(); a++) n.eq(a).find("img[" + d + "]").each(function()
									{
										e(this).attr(d) == t.attr("src") && e(this).attr("src", e(this).attr(d)).removeAttr(d)
									})
							})
						};
						switch (i)
						{
							case "fade":
							case "fold":
							case "top":
							case "left":
							case "slideDown":
								n(v * I);
								break;
							case "leftLoop":
							case "topLoop":
								n(N + K(A));
								break;
							case "leftMarquee":
							case "topMarquee":
								var a = "leftMarquee" == i ? f.css("left").replace("px", "") : f.css("top").replace("px", ""),
									s = "leftMarquee" == i ? S : P,
									o = N;
								0 != a % s && (a = Math.abs(a / s ^ 0), o = 1 == v ? N + a : N + a - 1), n(o)
						}
					},
					V = function(e)
					{
						if (!q || W != v || e || U)
						{
							if (U ? v >= 1 ? v = 1 : 0 >= v && (v = 0) : (A = v, v >= c ? v = 0 : 0 > v && (v = c - 1)), H(), null != d && R(f.children()), h[0] && (w = h.eq(v), null != d && R(h), "slideDown" == i ? (
									h.not(w).stop(!0, !0).slideUp(m), w.slideDown(m, L, function()
									{
										f[0] || $()
									})) : (h.not(w).stop(!0, !0).hide(), w.animate(
								{
									opacity: "show"
								}, m, function()
								{
									f[0] || $()
								}))), p >= M) switch (i)
							{
								case "fade":
									f.children().stop(!0, !0).eq(v).animate(
									{
										opacity: "show"
									}, m, L, function()
									{
										$()
									}).siblings().hide();
									break;
								case "fold":
									f.children().stop(!0, !0).eq(v).animate(
									{
										opacity: "show"
									}, m, L, function()
									{
										$()
									}).siblings().animate(
									{
										opacity: "hide"
									}, m, L);
									break;
								case "top":
									f.stop(!0, !1).animate(
									{
										top: -v * I * P
									}, m, L, function()
									{
										$()
									});
									break;
								case "left":
									f.stop(!0, !1).animate(
									{
										left: -v * I * S
									}, m, L, function()
									{
										$()
									});
									break;
								case "leftLoop":
									var t = A;
									f.stop(!0, !0).animate(
									{
										left: -(K(A) + N) * S
									}, m, L, function()
									{
										-1 >= t ? f.css("left", -(N + (c - 1) * I) * S) : t >= c && f.css("left", -N * S), $()
									});
									break;
								case "topLoop":
									t = A, f.stop(!0, !0).animate(
									{
										top: -(K(A) + N) * P
									}, m, L, function()
									{
										-1 >= t ? f.css("top", -(N + (c - 1) * I) * P) : t >= c && f.css("top", -N * P), $()
									});
									break;
								case "leftMarquee":
									e = f.css("left").replace("px", ""), 0 == v ? f.animate(
									{
										left: ++e
									}, 0, function()
									{
										0 <= f.css("left").replace("px", "") && f.css("left", -p * S)
									}) : f.animate(
									{
										left: --e
									}, 0, function()
									{
										f.css("left").replace("px", "") <= -(p + N) * S && f.css("left", -N * S)
									});
									break;
								case "topMarquee":
									e = f.css("top").replace("px", ""), 0 == v ? f.animate(
									{
										top: ++e
									}, 0, function()
									{
										0 <= f.css("top").replace("px", "") && f.css("top", -p * P)
									}) : f.animate(
									{
										top: --e
									}, 0, function()
									{
										f.css("top").replace("px", "") <= -(p + N) * P && f.css("top", -N * P)
									})
							}
							l.removeClass(E).eq(v).addClass(E), W = v, O || (o.removeClass("nextStop"), s.removeClass("prevStop"), 0 == v && s.addClass("prevStop"), v == c - 1 && o.addClass("nextStop")), r.html(
								"<span>" + (v + 1) + "</span>/" + c)
						}
					};
				q && V(!0), k && a.hover(function()
				{
					clearTimeout(F)
				}, function()
				{
					F = setTimeout(function()
					{
						v = z, q ? V() : "slideDown" == i ? w.slideUp(m, G) : w.animate(
						{
							opacity: "hide"
						}, m, G), W = v
					}, 300)
				});
				var X = function(e)
					{
						B = setInterval(function()
						{
							y ? v-- : v++, V()
						}, e ? e : g)
					},
					Y = function(e)
					{
						B = setInterval(V, e ? e : g)
					},
					Z = function()
					{
						b || (clearInterval(B), X())
					},
					k = function()
					{
						(O || v != c - 1) && (v++, V(), U || Z())
					},
					x = function()
					{
						(O || 0 != v) && (v--, V(), U || Z())
					},
					_ = function()
					{
						clearInterval(B), U ? Y() : X(), u.removeClass("pauseState")
					},
					et = function()
					{
						clearInterval(B), u.addClass("pauseState")
					};
				if (C ? U ? (y ? v-- : v++, Y(), b && f.hover(et, _)) : (X(), b && a.hover(et, _)) : (U && (y ? v-- : v++), u.addClass("pauseState")), u.click(function()
					{
						u.hasClass("pauseState") ? _() : et()
					}), "mouseover" == n.trigger ? l.hover(function()
					{
						var e = l.index(this);
						D = setTimeout(function()
						{
							v = e, V(), Z()
						}, n.triggerTime)
					}, function()
					{
						clearTimeout(D)
					}) : l.click(function()
					{
						v = l.index(this), V(), Z()
					}), U)
				{
					if (o.mousedown(k), s.mousedown(x), O)
					{
						var tt, C = function()
							{
								tt = setTimeout(function()
								{
									clearInterval(B), Y(g / 10 ^ 0)
								}, 150)
							},
							j = function()
							{
								clearTimeout(tt), clearInterval(B), Y()
							};
						o.mousedown(C), o.mouseup(j), s.mousedown(C), s.mouseup(j)
					}
					"mouseover" == n.trigger && (o.hover(k, function() {}), s.hover(x, function() {}))
				}
				else o.click(k), s.click(x)
			}
		})
	}
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing,
	function(e)
	{
		e.extend(e.easing,
		{
			def: "easeOutQuad",
			swing: function(t, n, a, i, s)
			{
				return e.easing[e.easing.def](t, n, a, i, s)
			},
			easeInQuad: function(e, t, n, a, i)
			{
				return a * (t /= i) * t + n
			},
			easeOutQuad: function(e, t, n, a, i)
			{
				return -a * (t /= i) * (t - 2) + n
			},
			easeInOutQuad: function(e, t, n, a, i)
			{
				return 1 > (t /= i / 2) ? a / 2 * t * t + n : -a / 2 * (--t * (t - 2) - 1) + n
			},
			easeInCubic: function(e, t, n, a, i)
			{
				return a * (t /= i) * t * t + n
			},
			easeOutCubic: function(e, t, n, a, i)
			{
				return a * ((t = t / i - 1) * t * t + 1) + n
			},
			easeInOutCubic: function(e, t, n, a, i)
			{
				return 1 > (t /= i / 2) ? a / 2 * t * t * t + n : a / 2 * ((t -= 2) * t * t + 2) + n
			},
			easeInQuart: function(e, t, n, a, i)
			{
				return a * (t /= i) * t * t * t + n
			},
			easeOutQuart: function(e, t, n, a, i)
			{
				return -a * ((t = t / i - 1) * t * t * t - 1) + n
			},
			easeInOutQuart: function(e, t, n, a, i)
			{
				return 1 > (t /= i / 2) ? a / 2 * t * t * t * t + n : -a / 2 * ((t -= 2) * t * t * t - 2) + n
			},
			easeInQuint: function(e, t, n, a, i)
			{
				return a * (t /= i) * t * t * t * t + n
			},
			easeOutQuint: function(e, t, n, a, i)
			{
				return a * ((t = t / i - 1) * t * t * t * t + 1) + n
			},
			easeInOutQuint: function(e, t, n, a, i)
			{
				return 1 > (t /= i / 2) ? a / 2 * t * t * t * t * t + n : a / 2 * ((t -= 2) * t * t * t * t + 2) + n
			},
			easeInSine: function(e, t, n, a, i)
			{
				return -a * Math.cos(t / i * (Math.PI / 2)) + a + n
			},
			easeOutSine: function(e, t, n, a, i)
			{
				return a * Math.sin(t / i * (Math.PI / 2)) + n
			},
			easeInOutSine: function(e, t, n, a, i)
			{
				return -a / 2 * (Math.cos(Math.PI * t / i) - 1) + n
			},
			easeInExpo: function(e, t, n, a, i)
			{
				return 0 == t ? n : a * Math.pow(2, 10 * (t / i - 1)) + n
			},
			easeOutExpo: function(e, t, n, a, i)
			{
				return t == i ? n + a : a * (-Math.pow(2, -10 * t / i) + 1) + n
			},
			easeInOutExpo: function(e, t, n, a, i)
			{
				return 0 == t ? n : t == i ? n + a : 1 > (t /= i / 2) ? a / 2 * Math.pow(2, 10 * (t - 1)) + n : a / 2 * (-Math.pow(2, -10 * --t) + 2) + n
			},
			easeInCirc: function(e, t, n, a, i)
			{
				return -a * (Math.sqrt(1 - (t /= i) * t) - 1) + n
			},
			easeOutCirc: function(e, t, n, a, i)
			{
				return a * Math.sqrt(1 - (t = t / i - 1) * t) + n
			},
			easeInOutCirc: function(e, t, n, a, i)
			{
				return 1 > (t /= i / 2) ? -a / 2 * (Math.sqrt(1 - t * t) - 1) + n : a / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
			},
			easeInElastic: function(e, t, n, a, i)
			{
				e = 1.70158;
				var s = 0,
					o = a;
				return 0 == t ? n : 1 == (t /= i) ? n + a : (s || (s = .3 * i), o < Math.abs(a) ? (o = a, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(a / o), -(o * Math.pow(2, 10 * --t) * Math.sin(2 * (t *
					i - e) * Math.PI / s)) + n)
			},
			easeOutElastic: function(e, t, n, a, i)
			{
				e = 1.70158;
				var s = 0,
					o = a;
				return 0 == t ? n : 1 == (t /= i) ? n + a : (s || (s = .3 * i), o < Math.abs(a) ? (o = a, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(a / o), o * Math.pow(2, -10 * t) * Math.sin(2 * (t * i -
					e) * Math.PI / s) + a + n)
			},
			easeInOutElastic: function(e, t, n, a, i)
			{
				e = 1.70158;
				var s = 0,
					o = a;
				return 0 == t ? n : 2 == (t /= i / 2) ? n + a : (s || (s = .3 * i * 1.5), o < Math.abs(a) ? (o = a, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(a / o), 1 > t ? -.5 * o * Math.pow(2, 10 * --
					t) * Math.sin(2 * (t * i - e) * Math.PI / s) + n : o * Math.pow(2, -10 * --t) * Math.sin(2 * (t * i - e) * Math.PI / s) * .5 + a + n)
			},
			easeInBack: function(e, t, n, a, i, s)
			{
				return void 0 == s && (s = 1.70158), a * (t /= i) * t * ((s + 1) * t - s) + n
			},
			easeOutBack: function(e, t, n, a, i, s)
			{
				return void 0 == s && (s = 1.70158), a * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
			},
			easeInOutBack: function(e, t, n, a, i, s)
			{
				return void 0 == s && (s = 1.70158), 1 > (t /= i / 2) ? a / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : a / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
			},
			easeInBounce: function(t, n, a, i, s)
			{
				return i - e.easing.easeOutBounce(t, s - n, 0, i, s) + a
			},
			easeOutBounce: function(e, t, n, a, i)
			{
				return (t /= i) < 1 / 2.75 ? 7.5625 * a * t * t + n : 2 / 2.75 > t ? a * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? a * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : a * (
					7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
			},
			easeInOutBounce: function(t, n, a, i, s)
			{
				return s / 2 > n ? .5 * e.easing.easeInBounce(t, 2 * n, 0, i, s) + a : .5 * e.easing.easeOutBounce(t, 2 * n - s, 0, i, s) + .5 * i + a
			}
		})
	}(jQuery);;
nie.define("Common", function()
{
	function n()
	{
		$(".JpopClose").click(function()
		{
			var n = $(this);
			$("#video-box").html(""), n.hasClass("xieyi") ? ($("#pop-xieyi").hide(), $("#pop-yuyue").show(), n.removeClass("xieyi")) : n.hasClass("pop_line") ? ($("#pop-bbs").hide(), $(
				"#pop-yuyue-success").show(), n.removeClass("pop_line")) : (t(), $("#videoShow").html("")), d.hasClass("video_play") && !u && (g.play && g.play(), $("#btn-music").removeClass("pause").data(
				"status", 1))
		}), $(".Jbtn_line").click(function()
		{
			$(this).hasClass("pop_line") ? ($("#pop-bbs").show(), $("#pop-yuyue-success").hide()) : i("pop-bbs")
		}), $(".btn-menu").click(function()
		{
			i("pop-menu")
		}), o(), a(), $("#btn-music").click(function()
		{
			var n = $(this);
			0 == n.data("status") ? (u = !1, g.play && g.play(), n.removeClass("pause").data("status", 1)) : (u = !0, g.pause && g.pause(), n.addClass("pause").data("status", 0))
		})
	}

	function o()
	{
		$(".btn-video").click(function()
		{
			var n = $(this).data("url");
			n && e(n)
		})
	}

	function e(n)
	{
		var o;
		d.addClass("video_play").show().animate(
			{
				opacity: "0.95"
			}), r && r.pause(), $(".Jaudio").data("status", 1).removeClass("on"), g.pause(), $("#btn-music").addClass("pause").data("status", 0), o += "<video src='" + n +
			'\' controls="controls" autoplay class="videoBox"></video>', $("#video-box").html(o), $("#video-box").show()
	}

	function i(n)
	{
		d.show(), setTimeout(function()
		{
			d.addClass("show"), $("#" + n).show()
		}, 50)
	}

	function t()
	{
		d.removeClass("show"), setTimeout(function()
		{
			d.hide(), $(".pop-box").hide()
		}, 50)
	}

	function s()
	{
		$("#btn-music");
		$(".Jaudio").click(function()
		{
			var n = $(this),
				o = "/pc/gw/20161215115523" + n.data("url");
			0 == n.data("status") ? (r && r.pause(), $(".Jaudio").data("status", 1).removeClass("on"), n.data("status", 1).removeClass("on"), c()) : (o && "" != o && (-1 != p && n.data("url") == p ? r &&
				r.play() : (r && r.pause(), r = l.create(
				{
					audio: [o],
					autoPlay: !0,
					loop: !1,
					end: function()
					{
						$(".Jaudio").data("status", 1).removeClass("on"), p = -1, c()
					}
				}), p = n.data("url")), g.volume = .2), $(".Jaudio").data("status", 1).removeClass("on"), n.data("status", 0).addClass("on"))
		})
	}

	function a()
	{
		var n = {
			title: $("#share_title").html(),
			link: "www.onmyojigame.com/zh",
			desc: $("#share_desc").html(),
			pic: window.location.origin + $("#share_pic").attr("data-src")
		};
		$(".Jfacebook").on("click", function()
		{
			window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(n.link) + "&picture=" + encodeURIComponent(n.pic) + "&description=" + encodeURIComponent(n.desc) + "&title=" +
				encodeURIComponent(n.title) + "&display=popup&ref=plugin&src=share_button", "facebook", "height=500, width=750, top=" + ($(window).height() / 2 - 250) + ", left=" + (document.body.offsetWidth /
					2 - 375) + ", toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
		})
	}

	function c()
	{
		var n = setInterval(function()
		{
			var o = g.volume + .1;
			o >= 1 ? (g.volume = 1, clearInterval(n)) : g.volume = o
		}, 100)
	}
	var r, d = $("#mask"),
		l = window.audio,
		p = -1,
		u = !1,
		g = $("#bg_music")[0],
		w = function()
		{
			n()
		};
	return {
		init: w,
		popShow: i,
		popHide: t,
		audioHandle: s
	}
}), nie.define(function()
{
	function n()
	{
		var n = ["./static/images/404_b269fed.jpg", "./static/images/aler2_dba7a19.png", "./static/images/bg_loading_0411650.jpg",
			"./static/images/kv_e785bac.png", "./static/images/loading_logo_e23f58c.png", "./static/images/logo_ded7429.png",
			"./static/images/music_ani_9132348.png", "./static/images/p1_bg_dbfd5dd.jpg", "./static/images/p1_bg_4844d06.png",
			"./static/images/p2_bg_d582625.jpg", "./static/images/p2_up_bg_f1ed1b3.jpg", "./static/images/p3_mask_l_bf011df.png",
			"./static/images/p3_mask_r_2b27e08.png", "./static/images/p4_bg_9f89c32.jpg", "./static/images/qrcode_autumn_039409d.jpg",
			"./static/images/qrcode_spring_e624ed0.jpg", "./static/images/qrcode_summer_068072e.jpg", "./static/images/role_bjn_bc384f4.png",
			"./static/images/role_qm_0b5892e.png", "./static/images/role_sl_48880d6.png", "./static/images/role_xb_683327b.png",
			"./static/images/role_yfy_0d9a739.png", "./static/images/share_959ce4f.jpg", "./static/images/slogan_3e1ac4a.png",
			"./static/images/slogan_big_1a12ca6.png", "./static/images/umbrella_15c9bb3.png", "./static/images/video_b7455c4.jpg",
			"./static/images/yys_6c4e7e8.png", "./static/images/zhujue_map_70d75a3.png"];
		Loader.show(
		{
			iFileData: n,
			bgColor: "#000",
			mainWrap: "#Jmain",
			defaultAnimation: !1,
			customAnimation: function(n)
			{
				$("#loading_logo").css("height", 64 * n + "px"), $("#loading_txt").html(parseInt(100 * n, 10) + "%")
			},
			completeCallback: function()
			{
				$("#loading").addClass("hideit"), setTimeout(function()
				{
					$("#loading").remove()
				}, 500), o()
			}
		})
	}

	function o()
	{
		$.browser.msie && $.browser.version <= 8 && $("body").addClass("fix_ie78"), a.init(), e(), s(), i(), a.audioHandle(), setTimeout(function()
		{
			$("#bg_music")[0].play && $("#bg_music")[0].play()
		}, 500)
	}

	function e()
	{
		$.scrollify(
		{
			section: ".part",
			offset: 0,
			scrollSpeed: 1100,
			before: function(n)
			{
				4 == n ? $(".bottom-share").addClass("fix_copyright") : $(".bottom-share").removeClass("fix_copyright")
			},
			after: function(n)
			{
				$(".part-0" + (n + 1)).addClass("ani_0" + n), $("nav .current").removeClass("current"), $("nav a").eq(n).addClass("current")
			},
			afterRender: function()
			{
				$(".part-01").addClass("ani_01"), t()
			},
			afterResize: function() {}
		}), $(".Jbtn_scroll").click(function()
		{
			$(".JpopClose").click(), $.scrollify.move($(this).data("index"))
		})
	}

	function i()
	{
		{
			var n = $(".zhujue-box .paopao");
			$(".role")
		}
		$(".btn-control").click(function()
		{
			var n = $(this).parent();
			n.hasClass("show") ? n.removeClass("show") : n.addClass("show")
		}), $(window).width() < 1400 && $(".bottom-share").removeClass("show"), $(".Jrole").hover(function()
		{
			var o = $(this).data("index");
			$(".zhujue-box .current").removeClass("current"), $(".role[data-index=" + o + "]").addClass("current"), n.eq(o).addClass("current")
		}, function()
		{
			$(".zhujue-box .current").removeClass("current")
		}), $(".Jrole").click(function()
		{
			var o = $(this).data("index");
			n.eq(o).find(".Jaudio").click()
		}), $(".zhujue-box .paopao").hover(function() {}, function()
		{
			$(this).removeClass("current")
		}), $(window).on("resize", function()
		{
			t()
		}).trigger("resize")
	}

	function t()
	{
		var n, o = $(window).width(),
			e = $(window).height();
		880 >= e ? ($("#Jmain").addClass("wrap-800"), $("nav").css("display", "none"), $(".btn-video").css("bottom", 250), $(".news").css("bottom", 60)) : ($("#Jmain").removeClass("wrap-800"), $("nav").removeAttr(
			"style"), $(".btn-video").removeAttr("style"), $(".news").removeAttr("style")), o > 1540 ? ($(".btn-logo").css(
		{
			width: "100px",
			height: "100px"
		}), $(".yys-tit").css("width", "112px")) : o >= 1280 && 1540 >= o ? (n = (o - 1280) / o * 40 + 60, $(".btn-logo").css(
		{
			width: n + "px",
			height: n + "px"
		}), $(".yys-tit").css("width", (o - 1280) / o * 46 + 66 + "px"), n = (o - 1280) / o * 68 + 170) : 1280 > o && ($(".btn-logo").css(
		{
			width: "60px",
			height: "60px"
		}), $(".yys-tit").css("width", "66px"))
	}

	function s()
	{
		var n = (window.swfobject, function(n)
		{
			$(n).flash(
			{
				swf: "./static/images/" + $(n).data("url"),
				width: 1920,
				height: 1080,
				allowScriptAccess: "always",
				wmode: "transparent"
			})
		});
		n("#flash-1"), n("#flash-2")
	}
	var a = window.Common,
		c = function()
		{
			n()
		};
	c()
}), nie.define(function()
{
	{
		var n = {
				popDialog: window.PopDialog,
				download: window.NieDownload
			},
			o = {
				params: function(n)
				{
					for (var o, e = location.search, i = e.substring(e.indexOf("?") + 1, e.length).split("&"), t = {}, s = 0; o = i[s]; s++) t[o.substring(0, o.indexOf("=")).toLowerCase()] = o.substring(o.indexOf(
						"=") + 1, o.length);
					var a = t[n.toLowerCase()];
					return "undefined" == typeof a ? "" : a
				}
			},
			e = {
				news: function()
				{
					var n = $(".news .news-btn a"),
						o = function(o)
						{
							n.removeClass("on").eq(o).addClass("on")
						},
						e = new Swiper(".news .swiper-container",
						{
							simulateTouch: !1,
							onFirstInit: function(n)
							{
								o(n.activeIndex)
							},
							onSlideChangeStart: function(n)
							{
								o(n.activeIndex)
							}
						});
					n.hover(function()
					{
						e.swipeTo(n.index(this))
					})
				},
				download: function()
				{
					$(".btn-android").on("click", function()
					{
						return !1
					})
				},
				shishen: function()
				{
					var n = new Swiper(".shishen .swiper-container",
					{
						simulateTouch: !1,
						slidesPerView: "auto",
						autoplay: 1e3,
						speed: 500,
						onSlideChangeStart: function() {}
					});
					$(window).on("resize", function()
					{
						var o = $(this).width();
						o > 1557 && (o = 1557), 1280 > o && (o = 1280), $(".shishen .swiper-container").css(
						{
							width: o
						}), n.resizeFix()
					}).trigger("resize"), $(".shishen .swiper-slide").on(
					{
						mouseenter: function()
						{
							n.stopAutoplay()
						},
						mouseleave: function()
						{
							n.startAutoplay()
						}
					}), $(".shishen .shishen-left").on("click", function()
					{
						n.swipePrev()
					}), $(".shishen .shishen-right").on("click", function()
					{
						n.swipeNext()
					})
				},
				tongren: function()
				{
					var n = o.params("show"),
						e = $(".tongren .tongren-btn a"),
						i = $(".pop-menu .Jbtn_scroll[data-index=3]"),
						t = function(n)
						{
							e.removeClass("on").eq(n).addClass("on")
						},
						s = new Swiper(".tongren .swiper-container",
						{
							mode: "vertical",
							simulateTouch: !1,
							onSlideChangeStart: function(n)
							{
								t(n.activeIndex)
							}
						});
					n = parseInt(n), 0 != n && 1 != n && (n = 0), t(n), s.swipeTo(n), e.on("click", function()
					{
						s.swipeTo(e.index(this))
					}), i.on("click", function()
					{
						s.swipeTo(i.index(this))
					});
					var a = $(".tongren .tab-btn a"),
						c = $(".tongren .tab-wrap"),
						r = function(n)
						{
							a.removeClass("on").eq(n).addClass("on"), c.removeClass("on").eq(n).addClass("on")
						};
					r(0), a.on("click", function()
					{
						r(a.index(this))
					})
				},
				hotActivity: function()
				{
					$("#hotactivity_slide").slide(
					{
						titCell: ".hd a",
						mainCell: ".bd",
						effect: "left",
						autoPlay: !1,
						delayTime: 500,
						interTime: 3e3,
						startFun: function()
						{
							$("#hotactivity_slide .bd i").removeClass("show")
						},
						endFun: function(n)
						{
							$("#hotactivity_slide .bd a").eq(n).find("i").addClass("show")
						}
					}), $("#hotactivity_slide .bd a").hover(function()
					{
						$(this).find("i").removeClass("show")
					}, function()
					{
						$(this).find("i").addClass("show")
					})
				}
			};
		! function()
		{
			window.alert = n.popDialog.Confirm, e.news(), e.download(), e.shishen(), e.tongren(), e.hotActivity()
		}()
	}
});