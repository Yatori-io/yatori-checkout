import Ft, { useRef as Yt, useEffect as Nt } from "react";
import { css as qt, LitElement as Vt, html as T } from "lit";
const Ut = (x) => (a, l) => {
  l !== void 0 ? l.addInitializer((() => {
    customElements.define(x, a);
  })) : customElements.define(x, a);
};
const bt = globalThis, Ht = bt.ShadowRoot && (bt.ShadyCSS === void 0 || bt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, It = /* @__PURE__ */ Symbol(), Et = /* @__PURE__ */ new WeakMap();
let Lt = class {
  constructor(a, l, p) {
    if (this._$cssResult$ = !0, p !== It) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = a, this.t = l;
  }
  get styleSheet() {
    let a = this.o;
    const l = this.t;
    if (Ht && a === void 0) {
      const p = l !== void 0 && l.length === 1;
      p && (a = Et.get(l)), a === void 0 && ((this.o = a = new CSSStyleSheet()).replaceSync(this.cssText), p && Et.set(l, a));
    }
    return a;
  }
  toString() {
    return this.cssText;
  }
};
const kt = (x) => new Lt(typeof x == "string" ? x : x + "", void 0, It), Tt = (x, a) => {
  if (Ht) x.adoptedStyleSheets = a.map(((l) => l instanceof CSSStyleSheet ? l : l.styleSheet));
  else for (const l of a) {
    const p = document.createElement("style"), m = bt.litNonce;
    m !== void 0 && p.setAttribute("nonce", m), p.textContent = l.cssText, x.appendChild(p);
  }
}, Rt = Ht ? (x) => x : (x) => x instanceof CSSStyleSheet ? ((a) => {
  let l = "";
  for (const p of a.cssRules) l += p.cssText;
  return kt(l);
})(x) : x;
const { is: Wt, defineProperty: Zt, getOwnPropertyDescriptor: Kt, getOwnPropertyNames: Jt, getOwnPropertySymbols: _t, getPrototypeOf: $t } = Object, Ot = globalThis, Xt = Ot.trustedTypes, te = Xt ? Xt.emptyScript : "", ee = Ot.reactiveElementPolyfillSupport, pt = (x, a) => x, Mt = { toAttribute(x, a) {
  switch (a) {
    case Boolean:
      x = x ? te : null;
      break;
    case Object:
    case Array:
      x = x == null ? x : JSON.stringify(x);
  }
  return x;
}, fromAttribute(x, a) {
  let l = x;
  switch (a) {
    case Boolean:
      l = x !== null;
      break;
    case Number:
      l = x === null ? null : Number(x);
      break;
    case Object:
    case Array:
      try {
        l = JSON.parse(x);
      } catch {
        l = null;
      }
  }
  return l;
} }, Qt = (x, a) => !Wt(x, a), Gt = { attribute: !0, type: String, converter: Mt, reflect: !1, hasChanged: Qt };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), Ot.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class wt extends HTMLElement {
  static addInitializer(a) {
    this._$Ei(), (this.l ??= []).push(a);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(a, l = Gt) {
    if (l.state && (l.attribute = !1), this._$Ei(), this.elementProperties.set(a, l), !l.noAccessor) {
      const p = /* @__PURE__ */ Symbol(), m = this.getPropertyDescriptor(a, p, l);
      m !== void 0 && Zt(this.prototype, a, m);
    }
  }
  static getPropertyDescriptor(a, l, p) {
    const { get: m, set: y } = Kt(this.prototype, a) ?? { get() {
      return this[l];
    }, set(D) {
      this[l] = D;
    } };
    return { get() {
      return m?.call(this);
    }, set(D) {
      const X = m?.call(this);
      y.call(this, D), this.requestUpdate(a, X, p);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(a) {
    return this.elementProperties.get(a) ?? Gt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(pt("elementProperties"))) return;
    const a = $t(this);
    a.finalize(), a.l !== void 0 && (this.l = [...a.l]), this.elementProperties = new Map(a.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(pt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(pt("properties"))) {
      const l = this.properties, p = [...Jt(l), ..._t(l)];
      for (const m of p) this.createProperty(m, l[m]);
    }
    const a = this[Symbol.metadata];
    if (a !== null) {
      const l = litPropertyMetadata.get(a);
      if (l !== void 0) for (const [p, m] of l) this.elementProperties.set(p, m);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [l, p] of this.elementProperties) {
      const m = this._$Eu(l, p);
      m !== void 0 && this._$Eh.set(m, l);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(a) {
    const l = [];
    if (Array.isArray(a)) {
      const p = new Set(a.flat(1 / 0).reverse());
      for (const m of p) l.unshift(Rt(m));
    } else a !== void 0 && l.push(Rt(a));
    return l;
  }
  static _$Eu(a, l) {
    const p = l.attribute;
    return p === !1 ? void 0 : typeof p == "string" ? p : typeof a == "string" ? a.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((a) => this.enableUpdating = a)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((a) => a(this)));
  }
  addController(a) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(a), this.renderRoot !== void 0 && this.isConnected && a.hostConnected?.();
  }
  removeController(a) {
    this._$EO?.delete(a);
  }
  _$E_() {
    const a = /* @__PURE__ */ new Map(), l = this.constructor.elementProperties;
    for (const p of l.keys()) this.hasOwnProperty(p) && (a.set(p, this[p]), delete this[p]);
    a.size > 0 && (this._$Ep = a);
  }
  createRenderRoot() {
    const a = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Tt(a, this.constructor.elementStyles), a;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((a) => a.hostConnected?.()));
  }
  enableUpdating(a) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((a) => a.hostDisconnected?.()));
  }
  attributeChangedCallback(a, l, p) {
    this._$AK(a, p);
  }
  _$EC(a, l) {
    const p = this.constructor.elementProperties.get(a), m = this.constructor._$Eu(a, p);
    if (m !== void 0 && p.reflect === !0) {
      const y = (p.converter?.toAttribute !== void 0 ? p.converter : Mt).toAttribute(l, p.type);
      this._$Em = a, y == null ? this.removeAttribute(m) : this.setAttribute(m, y), this._$Em = null;
    }
  }
  _$AK(a, l) {
    const p = this.constructor, m = p._$Eh.get(a);
    if (m !== void 0 && this._$Em !== m) {
      const y = p.getPropertyOptions(m), D = typeof y.converter == "function" ? { fromAttribute: y.converter } : y.converter?.fromAttribute !== void 0 ? y.converter : Mt;
      this._$Em = m, this[m] = D.fromAttribute(l, y.type), this._$Em = null;
    }
  }
  requestUpdate(a, l, p) {
    if (a !== void 0) {
      if (p ??= this.constructor.getPropertyOptions(a), !(p.hasChanged ?? Qt)(this[a], l)) return;
      this.P(a, l, p);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(a, l, p) {
    this._$AL.has(a) || this._$AL.set(a, l), p.reflect === !0 && this._$Em !== a && (this._$Ej ??= /* @__PURE__ */ new Set()).add(a);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (l) {
      Promise.reject(l);
    }
    const a = this.scheduleUpdate();
    return a != null && await a, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [m, y] of this._$Ep) this[m] = y;
        this._$Ep = void 0;
      }
      const p = this.constructor.elementProperties;
      if (p.size > 0) for (const [m, y] of p) y.wrapped !== !0 || this._$AL.has(m) || this[m] === void 0 || this.P(m, this[m], y);
    }
    let a = !1;
    const l = this._$AL;
    try {
      a = this.shouldUpdate(l), a ? (this.willUpdate(l), this._$EO?.forEach(((p) => p.hostUpdate?.())), this.update(l)) : this._$EU();
    } catch (p) {
      throw a = !1, this._$EU(), p;
    }
    a && this._$AE(l);
  }
  willUpdate(a) {
  }
  _$AE(a) {
    this._$EO?.forEach(((l) => l.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(a)), this.updated(a);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(a) {
    return !0;
  }
  update(a) {
    this._$Ej &&= this._$Ej.forEach(((l) => this._$EC(l, this[l]))), this._$EU();
  }
  updated(a) {
  }
  firstUpdated(a) {
  }
}
wt.elementStyles = [], wt.shadowRootOptions = { mode: "open" }, wt[pt("elementProperties")] = /* @__PURE__ */ new Map(), wt[pt("finalized")] = /* @__PURE__ */ new Map(), ee?.({ ReactiveElement: wt }), (Ot.reactiveElementVersions ??= []).push("2.0.4");
const ie = { attribute: !0, type: String, converter: Mt, reflect: !1, hasChanged: Qt }, oe = (x = ie, a, l) => {
  const { kind: p, metadata: m } = l;
  let y = globalThis.litPropertyMetadata.get(m);
  if (y === void 0 && globalThis.litPropertyMetadata.set(m, y = /* @__PURE__ */ new Map()), y.set(l.name, x), p === "accessor") {
    const { name: D } = l;
    return { set(X) {
      const q = a.get.call(this);
      a.set.call(this, X), this.requestUpdate(D, q, x);
    }, init(X) {
      return X !== void 0 && this.P(D, void 0, x), X;
    } };
  }
  if (p === "setter") {
    const { name: D } = l;
    return function(X) {
      const q = this[D];
      a.call(this, X), this.requestUpdate(D, q, x);
    };
  }
  throw Error("Unsupported decorator location: " + p);
};
function At(x) {
  return (a, l) => typeof l == "object" ? oe(x, a, l) : ((p, m, y) => {
    const D = m.hasOwnProperty(y);
    return m.constructor.createProperty(y, D ? { ...p, wrapped: !0 } : p), D ? Object.getOwnPropertyDescriptor(m, y) : void 0;
  })(x, a, l);
}
function dt(x) {
  return At({ ...x, state: !0, attribute: !1 });
}
function re(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
var Dt = { exports: {} }, ne = Dt.exports, St;
function se() {
  return St || (St = 1, (function(x, a) {
    (function(l, p) {
      x.exports = p();
    })(ne, (() => (() => {
      var l = { 873: (D, X) => {
        var q, ht, ut = (function() {
          var it = function(v, g) {
            var c = v, e = st[g], t = null, o = 0, r = null, i = [], d = {}, A = function(n, h) {
              t = (function(s) {
                for (var u = new Array(s), f = 0; f < s; f += 1) {
                  u[f] = new Array(s);
                  for (var b = 0; b < s; b += 1) u[f][b] = null;
                }
                return u;
              })(o = 4 * c + 17), w(0, 0), w(o - 7, 0), w(0, o - 7), P(), j(), z(n, h), c >= 7 && C(n), r == null && (r = R(c, e, i)), M(r, h);
            }, w = function(n, h) {
              for (var s = -1; s <= 7; s += 1) if (!(n + s <= -1 || o <= n + s)) for (var u = -1; u <= 7; u += 1) h + u <= -1 || o <= h + u || (t[n + s][h + u] = 0 <= s && s <= 6 && (u == 0 || u == 6) || 0 <= u && u <= 6 && (s == 0 || s == 6) || 2 <= s && s <= 4 && 2 <= u && u <= 4);
            }, j = function() {
              for (var n = 8; n < o - 8; n += 1) t[n][6] == null && (t[n][6] = n % 2 == 0);
              for (var h = 8; h < o - 8; h += 1) t[6][h] == null && (t[6][h] = h % 2 == 0);
            }, P = function() {
              for (var n = Z.getPatternPosition(c), h = 0; h < n.length; h += 1) for (var s = 0; s < n.length; s += 1) {
                var u = n[h], f = n[s];
                if (t[u][f] == null) for (var b = -2; b <= 2; b += 1) for (var H = -2; H <= 2; H += 1) t[u + b][f + H] = b == -2 || b == 2 || H == -2 || H == 2 || b == 0 && H == 0;
              }
            }, C = function(n) {
              for (var h = Z.getBCHTypeNumber(c), s = 0; s < 18; s += 1) {
                var u = !n && (h >> s & 1) == 1;
                t[Math.floor(s / 3)][s % 3 + o - 8 - 3] = u;
              }
              for (s = 0; s < 18; s += 1) u = !n && (h >> s & 1) == 1, t[s % 3 + o - 8 - 3][Math.floor(s / 3)] = u;
            }, z = function(n, h) {
              for (var s = e << 3 | h, u = Z.getBCHTypeInfo(s), f = 0; f < 15; f += 1) {
                var b = !n && (u >> f & 1) == 1;
                f < 6 ? t[f][8] = b : f < 8 ? t[f + 1][8] = b : t[o - 15 + f][8] = b;
              }
              for (f = 0; f < 15; f += 1) b = !n && (u >> f & 1) == 1, f < 8 ? t[8][o - f - 1] = b : f < 9 ? t[8][15 - f - 1 + 1] = b : t[8][15 - f - 1] = b;
              t[o - 8][8] = !n;
            }, M = function(n, h) {
              for (var s = -1, u = o - 1, f = 7, b = 0, H = Z.getMaskFunction(h), E = o - 1; E > 0; E -= 2) for (E == 6 && (E -= 1); ; ) {
                for (var G = 0; G < 2; G += 1) if (t[u][E - G] == null) {
                  var S = !1;
                  b < n.length && (S = (n[b] >>> f & 1) == 1), H(u, E - G) && (S = !S), t[u][E - G] = S, (f -= 1) == -1 && (b += 1, f = 7);
                }
                if ((u += s) < 0 || o <= u) {
                  u -= s, s = -s;
                  break;
                }
              }
            }, R = function(n, h, s) {
              for (var u = mt.getRSBlocks(n, h), f = lt(), b = 0; b < s.length; b += 1) {
                var H = s[b];
                f.put(H.getMode(), 4), f.put(H.getLength(), Z.getLengthInBits(H.getMode(), n)), H.write(f);
              }
              var E = 0;
              for (b = 0; b < u.length; b += 1) E += u[b].dataCount;
              if (f.getLengthInBits() > 8 * E) throw "code length overflow. (" + f.getLengthInBits() + ">" + 8 * E + ")";
              for (f.getLengthInBits() + 4 <= 8 * E && f.put(0, 4); f.getLengthInBits() % 8 != 0; ) f.putBit(!1);
              for (; !(f.getLengthInBits() >= 8 * E || (f.put(236, 8), f.getLengthInBits() >= 8 * E)); ) f.put(17, 8);
              return (function(G, S) {
                for (var Y = 0, W = 0, L = 0, N = new Array(S.length), I = new Array(S.length), O = 0; O < S.length; O += 1) {
                  var U = S[O].dataCount, k = S[O].totalCount - U;
                  W = Math.max(W, U), L = Math.max(L, k), N[O] = new Array(U);
                  for (var Q = 0; Q < N[O].length; Q += 1) N[O][Q] = 255 & G.getBuffer()[Q + Y];
                  Y += U;
                  var tt = Z.getErrorCorrectPolynomial(k), _ = at(N[O], tt.getLength() - 1).mod(tt);
                  for (I[O] = new Array(tt.getLength() - 1), Q = 0; Q < I[O].length; Q += 1) {
                    var J = Q + _.getLength() - I[O].length;
                    I[O][Q] = J >= 0 ? _.getAt(J) : 0;
                  }
                }
                var Ct = 0;
                for (Q = 0; Q < S.length; Q += 1) Ct += S[Q].totalCount;
                var vt = new Array(Ct), nt = 0;
                for (Q = 0; Q < W; Q += 1) for (O = 0; O < S.length; O += 1) Q < N[O].length && (vt[nt] = N[O][Q], nt += 1);
                for (Q = 0; Q < L; Q += 1) for (O = 0; O < S.length; O += 1) Q < I[O].length && (vt[nt] = I[O][Q], nt += 1);
                return vt;
              })(f, u);
            };
            d.addData = function(n, h) {
              var s = null;
              switch (h = h || "Byte") {
                case "Numeric":
                  s = Pt(n);
                  break;
                case "Alphanumeric":
                  s = zt(n);
                  break;
                case "Byte":
                  s = gt(n);
                  break;
                case "Kanji":
                  s = xt(n);
                  break;
                default:
                  throw "mode:" + h;
              }
              i.push(s), r = null;
            }, d.isDark = function(n, h) {
              if (n < 0 || o <= n || h < 0 || o <= h) throw n + "," + h;
              return t[n][h];
            }, d.getModuleCount = function() {
              return o;
            }, d.make = function() {
              if (c < 1) {
                for (var n = 1; n < 40; n++) {
                  for (var h = mt.getRSBlocks(n, e), s = lt(), u = 0; u < i.length; u++) {
                    var f = i[u];
                    s.put(f.getMode(), 4), s.put(f.getLength(), Z.getLengthInBits(f.getMode(), n)), f.write(s);
                  }
                  var b = 0;
                  for (u = 0; u < h.length; u++) b += h[u].dataCount;
                  if (s.getLengthInBits() <= 8 * b) break;
                }
                c = n;
              }
              A(!1, (function() {
                for (var H = 0, E = 0, G = 0; G < 8; G += 1) {
                  A(!0, G);
                  var S = Z.getLostPoint(d);
                  (G == 0 || H > S) && (H = S, E = G);
                }
                return E;
              })());
            }, d.createTableTag = function(n, h) {
              n = n || 2;
              var s = "";
              s += '<table style="', s += " border-width: 0px; border-style: none;", s += " border-collapse: collapse;", s += " padding: 0px; margin: " + (h = h === void 0 ? 4 * n : h) + "px;", s += '">', s += "<tbody>";
              for (var u = 0; u < d.getModuleCount(); u += 1) {
                s += "<tr>";
                for (var f = 0; f < d.getModuleCount(); f += 1) s += '<td style="', s += " border-width: 0px; border-style: none;", s += " border-collapse: collapse;", s += " padding: 0px; margin: 0px;", s += " width: " + n + "px;", s += " height: " + n + "px;", s += " background-color: ", s += d.isDark(u, f) ? "#000000" : "#ffffff", s += ";", s += '"/>';
                s += "</tr>";
              }
              return (s += "</tbody>") + "</table>";
            }, d.createSvgTag = function(n, h, s, u) {
              var f = {};
              typeof arguments[0] == "object" && (n = (f = arguments[0]).cellSize, h = f.margin, s = f.alt, u = f.title), n = n || 2, h = h === void 0 ? 4 * n : h, (s = typeof s == "string" ? { text: s } : s || {}).text = s.text || null, s.id = s.text ? s.id || "qrcode-description" : null, (u = typeof u == "string" ? { text: u } : u || {}).text = u.text || null, u.id = u.text ? u.id || "qrcode-title" : null;
              var b, H, E, G, S = d.getModuleCount() * n + 2 * h, Y = "";
              for (G = "l" + n + ",0 0," + n + " -" + n + ",0 0,-" + n + "z ", Y += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', Y += f.scalable ? "" : ' width="' + S + 'px" height="' + S + 'px"', Y += ' viewBox="0 0 ' + S + " " + S + '" ', Y += ' preserveAspectRatio="xMinYMin meet"', Y += u.text || s.text ? ' role="img" aria-labelledby="' + B([u.id, s.id].join(" ").trim()) + '"' : "", Y += ">", Y += u.text ? '<title id="' + B(u.id) + '">' + B(u.text) + "</title>" : "", Y += s.text ? '<description id="' + B(s.id) + '">' + B(s.text) + "</description>" : "", Y += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', Y += '<path d="', H = 0; H < d.getModuleCount(); H += 1) for (E = H * n + h, b = 0; b < d.getModuleCount(); b += 1) d.isDark(H, b) && (Y += "M" + (b * n + h) + "," + E + G);
              return (Y += '" stroke="transparent" fill="black"/>') + "</svg>";
            }, d.createDataURL = function(n, h) {
              n = n || 2, h = h === void 0 ? 4 * n : h;
              var s = d.getModuleCount() * n + 2 * h, u = h, f = s - h;
              return ft(s, s, (function(b, H) {
                if (u <= b && b < f && u <= H && H < f) {
                  var E = Math.floor((b - u) / n), G = Math.floor((H - u) / n);
                  return d.isDark(G, E) ? 0 : 1;
                }
                return 1;
              }));
            }, d.createImgTag = function(n, h, s) {
              n = n || 2, h = h === void 0 ? 4 * n : h;
              var u = d.getModuleCount() * n + 2 * h, f = "";
              return f += "<img", f += ' src="', f += d.createDataURL(n, h), f += '"', f += ' width="', f += u, f += '"', f += ' height="', f += u, f += '"', s && (f += ' alt="', f += B(s), f += '"'), f + "/>";
            };
            var B = function(n) {
              for (var h = "", s = 0; s < n.length; s += 1) {
                var u = n.charAt(s);
                switch (u) {
                  case "<":
                    h += "&lt;";
                    break;
                  case ">":
                    h += "&gt;";
                    break;
                  case "&":
                    h += "&amp;";
                    break;
                  case '"':
                    h += "&quot;";
                    break;
                  default:
                    h += u;
                }
              }
              return h;
            };
            return d.createASCII = function(n, h) {
              if ((n = n || 1) < 2) return (function(N) {
                N = N === void 0 ? 2 : N;
                var I, O, U, k, Q, tt = 1 * d.getModuleCount() + 2 * N, _ = N, J = tt - N, Ct = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " }, vt = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " }, nt = "";
                for (I = 0; I < tt; I += 2) {
                  for (U = Math.floor((I - _) / 1), k = Math.floor((I + 1 - _) / 1), O = 0; O < tt; O += 1) Q = "█", _ <= O && O < J && _ <= I && I < J && d.isDark(U, Math.floor((O - _) / 1)) && (Q = " "), _ <= O && O < J && _ <= I + 1 && I + 1 < J && d.isDark(k, Math.floor((O - _) / 1)) ? Q += " " : Q += "█", nt += N < 1 && I + 1 >= J ? vt[Q] : Ct[Q];
                  nt += `
`;
                }
                return tt % 2 && N > 0 ? nt.substring(0, nt.length - tt - 1) + Array(tt + 1).join("▀") : nt.substring(0, nt.length - 1);
              })(h);
              n -= 1, h = h === void 0 ? 2 * n : h;
              var s, u, f, b, H = d.getModuleCount() * n + 2 * h, E = h, G = H - h, S = Array(n + 1).join("██"), Y = Array(n + 1).join("  "), W = "", L = "";
              for (s = 0; s < H; s += 1) {
                for (f = Math.floor((s - E) / n), L = "", u = 0; u < H; u += 1) b = 1, E <= u && u < G && E <= s && s < G && d.isDark(f, Math.floor((u - E) / n)) && (b = 0), L += b ? S : Y;
                for (f = 0; f < n; f += 1) W += L + `
`;
              }
              return W.substring(0, W.length - 1);
            }, d.renderTo2dContext = function(n, h) {
              h = h || 2;
              for (var s = d.getModuleCount(), u = 0; u < s; u++) for (var f = 0; f < s; f++) n.fillStyle = d.isDark(u, f) ? "black" : "white", n.fillRect(u * h, f * h, h, h);
            }, d;
          };
          it.stringToBytes = (it.stringToBytesFuncs = { default: function(v) {
            for (var g = [], c = 0; c < v.length; c += 1) {
              var e = v.charCodeAt(c);
              g.push(255 & e);
            }
            return g;
          } }).default, it.createStringToBytes = function(v, g) {
            var c = (function() {
              for (var t = yt(v), o = function() {
                var j = t.read();
                if (j == -1) throw "eof";
                return j;
              }, r = 0, i = {}; ; ) {
                var d = t.read();
                if (d == -1) break;
                var A = o(), w = o() << 8 | o();
                i[String.fromCharCode(d << 8 | A)] = w, r += 1;
              }
              if (r != g) throw r + " != " + g;
              return i;
            })(), e = 63;
            return function(t) {
              for (var o = [], r = 0; r < t.length; r += 1) {
                var i = t.charCodeAt(r);
                if (i < 128) o.push(i);
                else {
                  var d = c[t.charAt(r)];
                  typeof d == "number" ? (255 & d) == d ? o.push(d) : (o.push(d >>> 8), o.push(255 & d)) : o.push(e);
                }
              }
              return o;
            };
          };
          var ct, ot, et, F, rt, st = { L: 1, M: 0, Q: 3, H: 2 }, Z = (ct = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], ot = 1335, et = 7973, rt = function(v) {
            for (var g = 0; v != 0; ) g += 1, v >>>= 1;
            return g;
          }, (F = {}).getBCHTypeInfo = function(v) {
            for (var g = v << 10; rt(g) - rt(ot) >= 0; ) g ^= ot << rt(g) - rt(ot);
            return 21522 ^ (v << 10 | g);
          }, F.getBCHTypeNumber = function(v) {
            for (var g = v << 12; rt(g) - rt(et) >= 0; ) g ^= et << rt(g) - rt(et);
            return v << 12 | g;
          }, F.getPatternPosition = function(v) {
            return ct[v - 1];
          }, F.getMaskFunction = function(v) {
            switch (v) {
              case 0:
                return function(g, c) {
                  return (g + c) % 2 == 0;
                };
              case 1:
                return function(g, c) {
                  return g % 2 == 0;
                };
              case 2:
                return function(g, c) {
                  return c % 3 == 0;
                };
              case 3:
                return function(g, c) {
                  return (g + c) % 3 == 0;
                };
              case 4:
                return function(g, c) {
                  return (Math.floor(g / 2) + Math.floor(c / 3)) % 2 == 0;
                };
              case 5:
                return function(g, c) {
                  return g * c % 2 + g * c % 3 == 0;
                };
              case 6:
                return function(g, c) {
                  return (g * c % 2 + g * c % 3) % 2 == 0;
                };
              case 7:
                return function(g, c) {
                  return (g * c % 3 + (g + c) % 2) % 2 == 0;
                };
              default:
                throw "bad maskPattern:" + v;
            }
          }, F.getErrorCorrectPolynomial = function(v) {
            for (var g = at([1], 0), c = 0; c < v; c += 1) g = g.multiply(at([1, K.gexp(c)], 0));
            return g;
          }, F.getLengthInBits = function(v, g) {
            if (1 <= g && g < 10) switch (v) {
              case 1:
                return 10;
              case 2:
                return 9;
              case 4:
              case 8:
                return 8;
              default:
                throw "mode:" + v;
            }
            else if (g < 27) switch (v) {
              case 1:
                return 12;
              case 2:
                return 11;
              case 4:
                return 16;
              case 8:
                return 10;
              default:
                throw "mode:" + v;
            }
            else {
              if (!(g < 41)) throw "type:" + g;
              switch (v) {
                case 1:
                  return 14;
                case 2:
                  return 13;
                case 4:
                  return 16;
                case 8:
                  return 12;
                default:
                  throw "mode:" + v;
              }
            }
          }, F.getLostPoint = function(v) {
            for (var g = v.getModuleCount(), c = 0, e = 0; e < g; e += 1) for (var t = 0; t < g; t += 1) {
              for (var o = 0, r = v.isDark(e, t), i = -1; i <= 1; i += 1) if (!(e + i < 0 || g <= e + i)) for (var d = -1; d <= 1; d += 1) t + d < 0 || g <= t + d || i == 0 && d == 0 || r == v.isDark(e + i, t + d) && (o += 1);
              o > 5 && (c += 3 + o - 5);
            }
            for (e = 0; e < g - 1; e += 1) for (t = 0; t < g - 1; t += 1) {
              var A = 0;
              v.isDark(e, t) && (A += 1), v.isDark(e + 1, t) && (A += 1), v.isDark(e, t + 1) && (A += 1), v.isDark(e + 1, t + 1) && (A += 1), A != 0 && A != 4 || (c += 3);
            }
            for (e = 0; e < g; e += 1) for (t = 0; t < g - 6; t += 1) v.isDark(e, t) && !v.isDark(e, t + 1) && v.isDark(e, t + 2) && v.isDark(e, t + 3) && v.isDark(e, t + 4) && !v.isDark(e, t + 5) && v.isDark(e, t + 6) && (c += 40);
            for (t = 0; t < g; t += 1) for (e = 0; e < g - 6; e += 1) v.isDark(e, t) && !v.isDark(e + 1, t) && v.isDark(e + 2, t) && v.isDark(e + 3, t) && v.isDark(e + 4, t) && !v.isDark(e + 5, t) && v.isDark(e + 6, t) && (c += 40);
            var w = 0;
            for (t = 0; t < g; t += 1) for (e = 0; e < g; e += 1) v.isDark(e, t) && (w += 1);
            return c + Math.abs(100 * w / g / g - 50) / 5 * 10;
          }, F), K = (function() {
            for (var v = new Array(256), g = new Array(256), c = 0; c < 8; c += 1) v[c] = 1 << c;
            for (c = 8; c < 256; c += 1) v[c] = v[c - 4] ^ v[c - 5] ^ v[c - 6] ^ v[c - 8];
            for (c = 0; c < 255; c += 1) g[v[c]] = c;
            return { glog: function(e) {
              if (e < 1) throw "glog(" + e + ")";
              return g[e];
            }, gexp: function(e) {
              for (; e < 0; ) e += 255;
              for (; e >= 256; ) e -= 255;
              return v[e];
            } };
          })();
          function at(v, g) {
            if (v.length === void 0) throw v.length + "/" + g;
            var c = (function() {
              for (var t = 0; t < v.length && v[t] == 0; ) t += 1;
              for (var o = new Array(v.length - t + g), r = 0; r < v.length - t; r += 1) o[r] = v[r + t];
              return o;
            })(), e = { getAt: function(t) {
              return c[t];
            }, getLength: function() {
              return c.length;
            }, multiply: function(t) {
              for (var o = new Array(e.getLength() + t.getLength() - 1), r = 0; r < e.getLength(); r += 1) for (var i = 0; i < t.getLength(); i += 1) o[r + i] ^= K.gexp(K.glog(e.getAt(r)) + K.glog(t.getAt(i)));
              return at(o, 0);
            }, mod: function(t) {
              if (e.getLength() - t.getLength() < 0) return e;
              for (var o = K.glog(e.getAt(0)) - K.glog(t.getAt(0)), r = new Array(e.getLength()), i = 0; i < e.getLength(); i += 1) r[i] = e.getAt(i);
              for (i = 0; i < t.getLength(); i += 1) r[i] ^= K.gexp(K.glog(t.getAt(i)) + o);
              return at(r, 0).mod(t);
            } };
            return e;
          }
          var mt = /* @__PURE__ */ (function() {
            var v = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], g = function(e, t) {
              var o = {};
              return o.totalCount = e, o.dataCount = t, o;
            }, c = { getRSBlocks: function(e, t) {
              var o = (function(C, z) {
                switch (z) {
                  case st.L:
                    return v[4 * (C - 1) + 0];
                  case st.M:
                    return v[4 * (C - 1) + 1];
                  case st.Q:
                    return v[4 * (C - 1) + 2];
                  case st.H:
                    return v[4 * (C - 1) + 3];
                  default:
                    return;
                }
              })(e, t);
              if (o === void 0) throw "bad rs block @ typeNumber:" + e + "/errorCorrectionLevel:" + t;
              for (var r = o.length / 3, i = [], d = 0; d < r; d += 1) for (var A = o[3 * d + 0], w = o[3 * d + 1], j = o[3 * d + 2], P = 0; P < A; P += 1) i.push(g(w, j));
              return i;
            } };
            return c;
          })(), lt = function() {
            var v = [], g = 0, c = { getBuffer: function() {
              return v;
            }, getAt: function(e) {
              var t = Math.floor(e / 8);
              return (v[t] >>> 7 - e % 8 & 1) == 1;
            }, put: function(e, t) {
              for (var o = 0; o < t; o += 1) c.putBit((e >>> t - o - 1 & 1) == 1);
            }, getLengthInBits: function() {
              return g;
            }, putBit: function(e) {
              var t = Math.floor(g / 8);
              v.length <= t && v.push(0), e && (v[t] |= 128 >>> g % 8), g += 1;
            } };
            return c;
          }, Pt = function(v) {
            var g = v, c = { getMode: function() {
              return 1;
            }, getLength: function(o) {
              return g.length;
            }, write: function(o) {
              for (var r = g, i = 0; i + 2 < r.length; ) o.put(e(r.substring(i, i + 3)), 10), i += 3;
              i < r.length && (r.length - i == 1 ? o.put(e(r.substring(i, i + 1)), 4) : r.length - i == 2 && o.put(e(r.substring(i, i + 2)), 7));
            } }, e = function(o) {
              for (var r = 0, i = 0; i < o.length; i += 1) r = 10 * r + t(o.charAt(i));
              return r;
            }, t = function(o) {
              if ("0" <= o && o <= "9") return o.charCodeAt(0) - 48;
              throw "illegal char :" + o;
            };
            return c;
          }, zt = function(v) {
            var g = v, c = { getMode: function() {
              return 2;
            }, getLength: function(t) {
              return g.length;
            }, write: function(t) {
              for (var o = g, r = 0; r + 1 < o.length; ) t.put(45 * e(o.charAt(r)) + e(o.charAt(r + 1)), 11), r += 2;
              r < o.length && t.put(e(o.charAt(r)), 6);
            } }, e = function(t) {
              if ("0" <= t && t <= "9") return t.charCodeAt(0) - 48;
              if ("A" <= t && t <= "Z") return t.charCodeAt(0) - 65 + 10;
              switch (t) {
                case " ":
                  return 36;
                case "$":
                  return 37;
                case "%":
                  return 38;
                case "*":
                  return 39;
                case "+":
                  return 40;
                case "-":
                  return 41;
                case ".":
                  return 42;
                case "/":
                  return 43;
                case ":":
                  return 44;
                default:
                  throw "illegal char :" + t;
              }
            };
            return c;
          }, gt = function(v) {
            var g = it.stringToBytes(v);
            return { getMode: function() {
              return 4;
            }, getLength: function(c) {
              return g.length;
            }, write: function(c) {
              for (var e = 0; e < g.length; e += 1) c.put(g[e], 8);
            } };
          }, xt = function(v) {
            var g = it.stringToBytesFuncs.SJIS;
            if (!g) throw "sjis not supported.";
            (function() {
              var t = g("友");
              if (t.length != 2 || (t[0] << 8 | t[1]) != 38726) throw "sjis not supported.";
            })();
            var c = g(v), e = { getMode: function() {
              return 8;
            }, getLength: function(t) {
              return ~~(c.length / 2);
            }, write: function(t) {
              for (var o = c, r = 0; r + 1 < o.length; ) {
                var i = (255 & o[r]) << 8 | 255 & o[r + 1];
                if (33088 <= i && i <= 40956) i -= 33088;
                else {
                  if (!(57408 <= i && i <= 60351)) throw "illegal char at " + (r + 1) + "/" + i;
                  i -= 49472;
                }
                i = 192 * (i >>> 8 & 255) + (255 & i), t.put(i, 13), r += 2;
              }
              if (r < o.length) throw "illegal char at " + (r + 1);
            } };
            return e;
          }, jt = function() {
            var v = [], g = { writeByte: function(c) {
              v.push(255 & c);
            }, writeShort: function(c) {
              g.writeByte(c), g.writeByte(c >>> 8);
            }, writeBytes: function(c, e, t) {
              e = e || 0, t = t || c.length;
              for (var o = 0; o < t; o += 1) g.writeByte(c[o + e]);
            }, writeString: function(c) {
              for (var e = 0; e < c.length; e += 1) g.writeByte(c.charCodeAt(e));
            }, toByteArray: function() {
              return v;
            }, toString: function() {
              var c = "";
              c += "[";
              for (var e = 0; e < v.length; e += 1) e > 0 && (c += ","), c += v[e];
              return c + "]";
            } };
            return g;
          }, yt = function(v) {
            var g = v, c = 0, e = 0, t = 0, o = { read: function() {
              for (; t < 8; ) {
                if (c >= g.length) {
                  if (t == 0) return -1;
                  throw "unexpected end of file./" + t;
                }
                var i = g.charAt(c);
                if (c += 1, i == "=") return t = 0, -1;
                i.match(/^\s$/) || (e = e << 6 | r(i.charCodeAt(0)), t += 6);
              }
              var d = e >>> t - 8 & 255;
              return t -= 8, d;
            } }, r = function(i) {
              if (65 <= i && i <= 90) return i - 65;
              if (97 <= i && i <= 122) return i - 97 + 26;
              if (48 <= i && i <= 57) return i - 48 + 52;
              if (i == 43) return 62;
              if (i == 47) return 63;
              throw "c:" + i;
            };
            return o;
          }, ft = function(v, g, c) {
            for (var e = (function(w, j) {
              var P = w, C = j, z = new Array(w * j), M = { setPixel: function(n, h, s) {
                z[h * P + n] = s;
              }, write: function(n) {
                n.writeString("GIF87a"), n.writeShort(P), n.writeShort(C), n.writeByte(128), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(255), n.writeByte(255), n.writeByte(255), n.writeString(","), n.writeShort(0), n.writeShort(0), n.writeShort(P), n.writeShort(C), n.writeByte(0);
                var h = R(2);
                n.writeByte(2);
                for (var s = 0; h.length - s > 255; ) n.writeByte(255), n.writeBytes(h, s, 255), s += 255;
                n.writeByte(h.length - s), n.writeBytes(h, s, h.length - s), n.writeByte(0), n.writeString(";");
              } }, R = function(n) {
                for (var h = 1 << n, s = 1 + (1 << n), u = n + 1, f = B(), b = 0; b < h; b += 1) f.add(String.fromCharCode(b));
                f.add(String.fromCharCode(h)), f.add(String.fromCharCode(s));
                var H, E, G, S = jt(), Y = (H = S, E = 0, G = 0, { write: function(I, O) {
                  if (I >>> O) throw "length over";
                  for (; E + O >= 8; ) H.writeByte(255 & (I << E | G)), O -= 8 - E, I >>>= 8 - E, G = 0, E = 0;
                  G |= I << E, E += O;
                }, flush: function() {
                  E > 0 && H.writeByte(G);
                } });
                Y.write(h, u);
                var W = 0, L = String.fromCharCode(z[W]);
                for (W += 1; W < z.length; ) {
                  var N = String.fromCharCode(z[W]);
                  W += 1, f.contains(L + N) ? L += N : (Y.write(f.indexOf(L), u), f.size() < 4095 && (f.size() == 1 << u && (u += 1), f.add(L + N)), L = N);
                }
                return Y.write(f.indexOf(L), u), Y.write(s, u), Y.flush(), S.toByteArray();
              }, B = function() {
                var n = {}, h = 0, s = { add: function(u) {
                  if (s.contains(u)) throw "dup key:" + u;
                  n[u] = h, h += 1;
                }, size: function() {
                  return h;
                }, indexOf: function(u) {
                  return n[u];
                }, contains: function(u) {
                  return n[u] !== void 0;
                } };
                return s;
              };
              return M;
            })(v, g), t = 0; t < g; t += 1) for (var o = 0; o < v; o += 1) e.setPixel(o, t, c(o, t));
            var r = jt();
            e.write(r);
            for (var i = (function() {
              var w = 0, j = 0, P = 0, C = "", z = {}, M = function(B) {
                C += String.fromCharCode(R(63 & B));
              }, R = function(B) {
                if (!(B < 0)) {
                  if (B < 26) return 65 + B;
                  if (B < 52) return B - 26 + 97;
                  if (B < 62) return B - 52 + 48;
                  if (B == 62) return 43;
                  if (B == 63) return 47;
                }
                throw "n:" + B;
              };
              return z.writeByte = function(B) {
                for (w = w << 8 | 255 & B, j += 8, P += 1; j >= 6; ) M(w >>> j - 6), j -= 6;
              }, z.flush = function() {
                if (j > 0 && (M(w << 6 - j), w = 0, j = 0), P % 3 != 0) for (var B = 3 - P % 3, n = 0; n < B; n += 1) C += "=";
              }, z.toString = function() {
                return C;
              }, z;
            })(), d = r.toByteArray(), A = 0; A < d.length; A += 1) i.writeByte(d[A]);
            return i.flush(), "data:image/gif;base64," + i;
          };
          return it;
        })();
        ut.stringToBytesFuncs["UTF-8"] = function(it) {
          return (function(ct) {
            for (var ot = [], et = 0; et < ct.length; et++) {
              var F = ct.charCodeAt(et);
              F < 128 ? ot.push(F) : F < 2048 ? ot.push(192 | F >> 6, 128 | 63 & F) : F < 55296 || F >= 57344 ? ot.push(224 | F >> 12, 128 | F >> 6 & 63, 128 | 63 & F) : (et++, F = 65536 + ((1023 & F) << 10 | 1023 & ct.charCodeAt(et)), ot.push(240 | F >> 18, 128 | F >> 12 & 63, 128 | F >> 6 & 63, 128 | 63 & F));
            }
            return ot;
          })(it);
        }, (ht = typeof (q = function() {
          return ut;
        }) == "function" ? q.apply(X, []) : q) === void 0 || (D.exports = ht);
      } }, p = {};
      function m(D) {
        var X = p[D];
        if (X !== void 0) return X.exports;
        var q = p[D] = { exports: {} };
        return l[D](q, q.exports, m), q.exports;
      }
      m.n = (D) => {
        var X = D && D.__esModule ? () => D.default : () => D;
        return m.d(X, { a: X }), X;
      }, m.d = (D, X) => {
        for (var q in X) m.o(X, q) && !m.o(D, q) && Object.defineProperty(D, q, { enumerable: !0, get: X[q] });
      }, m.o = (D, X) => Object.prototype.hasOwnProperty.call(D, X);
      var y = {};
      return (() => {
        m.d(y, { default: () => g });
        const D = (c) => !!c && typeof c == "object" && !Array.isArray(c);
        function X(c, ...e) {
          if (!e.length) return c;
          const t = e.shift();
          return t !== void 0 && D(c) && D(t) ? (c = Object.assign({}, c), Object.keys(t).forEach(((o) => {
            const r = c[o], i = t[o];
            Array.isArray(r) && Array.isArray(i) ? c[o] = i : D(r) && D(i) ? c[o] = X(Object.assign({}, r), i) : c[o] = i;
          })), X(c, ...e)) : c;
        }
        function q(c, e) {
          const t = document.createElement("a");
          t.download = e, t.href = c, document.body.appendChild(t), t.click(), document.body.removeChild(t);
        }
        const ht = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
        class ut {
          constructor({ svg: e, type: t, window: o }) {
            this._svg = e, this._type = t, this._window = o;
          }
          draw(e, t, o, r) {
            let i;
            switch (this._type) {
              case "dots":
                i = this._drawDot;
                break;
              case "classy":
                i = this._drawClassy;
                break;
              case "classy-rounded":
                i = this._drawClassyRounded;
                break;
              case "rounded":
                i = this._drawRounded;
                break;
              case "extra-rounded":
                i = this._drawExtraRounded;
                break;
              default:
                i = this._drawSquare;
            }
            i.call(this, { x: e, y: t, size: o, getNeighbor: r });
          }
          _rotateFigure({ x: e, y: t, size: o, rotation: r = 0, draw: i }) {
            var d;
            const A = e + o / 2, w = t + o / 2;
            i(), (d = this._element) === null || d === void 0 || d.setAttribute("transform", `rotate(${180 * r / Math.PI},${A},${w})`);
          }
          _basicDot(e) {
            const { size: t, x: o, y: r } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "circle"), this._element.setAttribute("cx", String(o + t / 2)), this._element.setAttribute("cy", String(r + t / 2)), this._element.setAttribute("r", String(t / 2));
            } }));
          }
          _basicSquare(e) {
            const { size: t, x: o, y: r } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect"), this._element.setAttribute("x", String(o)), this._element.setAttribute("y", String(r)), this._element.setAttribute("width", String(t)), this._element.setAttribute("height", String(t));
            } }));
          }
          _basicSideRounded(e) {
            const { size: t, x: o, y: r } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${o} ${r}v ${t}h ` + t / 2 + `a ${t / 2} ${t / 2}, 0, 0, 0, 0 ${-t}`);
            } }));
          }
          _basicCornerRounded(e) {
            const { size: t, x: o, y: r } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${o} ${r}v ${t}h ${t}v ` + -t / 2 + `a ${t / 2} ${t / 2}, 0, 0, 0, ${-t / 2} ${-t / 2}`);
            } }));
          }
          _basicCornerExtraRounded(e) {
            const { size: t, x: o, y: r } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${o} ${r}v ${t}h ${t}a ${t} ${t}, 0, 0, 0, ${-t} ${-t}`);
            } }));
          }
          _basicCornersRounded(e) {
            const { size: t, x: o, y: r } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${o} ${r}v ` + t / 2 + `a ${t / 2} ${t / 2}, 0, 0, 0, ${t / 2} ${t / 2}h ` + t / 2 + "v " + -t / 2 + `a ${t / 2} ${t / 2}, 0, 0, 0, ${-t / 2} ${-t / 2}`);
            } }));
          }
          _drawDot({ x: e, y: t, size: o }) {
            this._basicDot({ x: e, y: t, size: o, rotation: 0 });
          }
          _drawSquare({ x: e, y: t, size: o }) {
            this._basicSquare({ x: e, y: t, size: o, rotation: 0 });
          }
          _drawRounded({ x: e, y: t, size: o, getNeighbor: r }) {
            const i = r ? +r(-1, 0) : 0, d = r ? +r(1, 0) : 0, A = r ? +r(0, -1) : 0, w = r ? +r(0, 1) : 0, j = i + d + A + w;
            if (j !== 0) if (j > 2 || i && d || A && w) this._basicSquare({ x: e, y: t, size: o, rotation: 0 });
            else {
              if (j === 2) {
                let P = 0;
                return i && A ? P = Math.PI / 2 : A && d ? P = Math.PI : d && w && (P = -Math.PI / 2), void this._basicCornerRounded({ x: e, y: t, size: o, rotation: P });
              }
              if (j === 1) {
                let P = 0;
                return A ? P = Math.PI / 2 : d ? P = Math.PI : w && (P = -Math.PI / 2), void this._basicSideRounded({ x: e, y: t, size: o, rotation: P });
              }
            }
            else this._basicDot({ x: e, y: t, size: o, rotation: 0 });
          }
          _drawExtraRounded({ x: e, y: t, size: o, getNeighbor: r }) {
            const i = r ? +r(-1, 0) : 0, d = r ? +r(1, 0) : 0, A = r ? +r(0, -1) : 0, w = r ? +r(0, 1) : 0, j = i + d + A + w;
            if (j !== 0) if (j > 2 || i && d || A && w) this._basicSquare({ x: e, y: t, size: o, rotation: 0 });
            else {
              if (j === 2) {
                let P = 0;
                return i && A ? P = Math.PI / 2 : A && d ? P = Math.PI : d && w && (P = -Math.PI / 2), void this._basicCornerExtraRounded({ x: e, y: t, size: o, rotation: P });
              }
              if (j === 1) {
                let P = 0;
                return A ? P = Math.PI / 2 : d ? P = Math.PI : w && (P = -Math.PI / 2), void this._basicSideRounded({ x: e, y: t, size: o, rotation: P });
              }
            }
            else this._basicDot({ x: e, y: t, size: o, rotation: 0 });
          }
          _drawClassy({ x: e, y: t, size: o, getNeighbor: r }) {
            const i = r ? +r(-1, 0) : 0, d = r ? +r(1, 0) : 0, A = r ? +r(0, -1) : 0, w = r ? +r(0, 1) : 0;
            i + d + A + w !== 0 ? i || A ? d || w ? this._basicSquare({ x: e, y: t, size: o, rotation: 0 }) : this._basicCornerRounded({ x: e, y: t, size: o, rotation: Math.PI / 2 }) : this._basicCornerRounded({ x: e, y: t, size: o, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: e, y: t, size: o, rotation: Math.PI / 2 });
          }
          _drawClassyRounded({ x: e, y: t, size: o, getNeighbor: r }) {
            const i = r ? +r(-1, 0) : 0, d = r ? +r(1, 0) : 0, A = r ? +r(0, -1) : 0, w = r ? +r(0, 1) : 0;
            i + d + A + w !== 0 ? i || A ? d || w ? this._basicSquare({ x: e, y: t, size: o, rotation: 0 }) : this._basicCornerExtraRounded({ x: e, y: t, size: o, rotation: Math.PI / 2 }) : this._basicCornerExtraRounded({ x: e, y: t, size: o, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: e, y: t, size: o, rotation: Math.PI / 2 });
          }
        }
        const it = { dot: "dot", square: "square", extraRounded: "extra-rounded" }, ct = Object.values(it);
        class ot {
          constructor({ svg: e, type: t, window: o }) {
            this._svg = e, this._type = t, this._window = o;
          }
          draw(e, t, o, r) {
            let i;
            switch (this._type) {
              case it.square:
                i = this._drawSquare;
                break;
              case it.extraRounded:
                i = this._drawExtraRounded;
                break;
              default:
                i = this._drawDot;
            }
            i.call(this, { x: e, y: t, size: o, rotation: r });
          }
          _rotateFigure({ x: e, y: t, size: o, rotation: r = 0, draw: i }) {
            var d;
            const A = e + o / 2, w = t + o / 2;
            i(), (d = this._element) === null || d === void 0 || d.setAttribute("transform", `rotate(${180 * r / Math.PI},${A},${w})`);
          }
          _basicDot(e) {
            const { size: t, x: o, y: r } = e, i = t / 7;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${o + t / 2} ${r}a ${t / 2} ${t / 2} 0 1 0 0.1 0zm 0 ${i}a ${t / 2 - i} ${t / 2 - i} 0 1 1 -0.1 0Z`);
            } }));
          }
          _basicSquare(e) {
            const { size: t, x: o, y: r } = e, i = t / 7;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${o} ${r}v ${t}h ${t}v ` + -t + `zM ${o + i} ${r + i}h ` + (t - 2 * i) + "v " + (t - 2 * i) + "h " + (2 * i - t) + "z");
            } }));
          }
          _basicExtraRounded(e) {
            const { size: t, x: o, y: r } = e, i = t / 7;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${o} ${r + 2.5 * i}v ` + 2 * i + `a ${2.5 * i} ${2.5 * i}, 0, 0, 0, ${2.5 * i} ${2.5 * i}h ` + 2 * i + `a ${2.5 * i} ${2.5 * i}, 0, 0, 0, ${2.5 * i} ${2.5 * -i}v ` + -2 * i + `a ${2.5 * i} ${2.5 * i}, 0, 0, 0, ${2.5 * -i} ${2.5 * -i}h ` + -2 * i + `a ${2.5 * i} ${2.5 * i}, 0, 0, 0, ${2.5 * -i} ${2.5 * i}M ${o + 2.5 * i} ${r + i}h ` + 2 * i + `a ${1.5 * i} ${1.5 * i}, 0, 0, 1, ${1.5 * i} ${1.5 * i}v ` + 2 * i + `a ${1.5 * i} ${1.5 * i}, 0, 0, 1, ${1.5 * -i} ${1.5 * i}h ` + -2 * i + `a ${1.5 * i} ${1.5 * i}, 0, 0, 1, ${1.5 * -i} ${1.5 * -i}v ` + -2 * i + `a ${1.5 * i} ${1.5 * i}, 0, 0, 1, ${1.5 * i} ${1.5 * -i}`);
            } }));
          }
          _drawDot({ x: e, y: t, size: o, rotation: r }) {
            this._basicDot({ x: e, y: t, size: o, rotation: r });
          }
          _drawSquare({ x: e, y: t, size: o, rotation: r }) {
            this._basicSquare({ x: e, y: t, size: o, rotation: r });
          }
          _drawExtraRounded({ x: e, y: t, size: o, rotation: r }) {
            this._basicExtraRounded({ x: e, y: t, size: o, rotation: r });
          }
        }
        const et = { dot: "dot", square: "square" }, F = Object.values(et);
        class rt {
          constructor({ svg: e, type: t, window: o }) {
            this._svg = e, this._type = t, this._window = o;
          }
          draw(e, t, o, r) {
            let i;
            i = this._type === et.square ? this._drawSquare : this._drawDot, i.call(this, { x: e, y: t, size: o, rotation: r });
          }
          _rotateFigure({ x: e, y: t, size: o, rotation: r = 0, draw: i }) {
            var d;
            const A = e + o / 2, w = t + o / 2;
            i(), (d = this._element) === null || d === void 0 || d.setAttribute("transform", `rotate(${180 * r / Math.PI},${A},${w})`);
          }
          _basicDot(e) {
            const { size: t, x: o, y: r } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "circle"), this._element.setAttribute("cx", String(o + t / 2)), this._element.setAttribute("cy", String(r + t / 2)), this._element.setAttribute("r", String(t / 2));
            } }));
          }
          _basicSquare(e) {
            const { size: t, x: o, y: r } = e;
            this._rotateFigure(Object.assign(Object.assign({}, e), { draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect"), this._element.setAttribute("x", String(o)), this._element.setAttribute("y", String(r)), this._element.setAttribute("width", String(t)), this._element.setAttribute("height", String(t));
            } }));
          }
          _drawDot({ x: e, y: t, size: o, rotation: r }) {
            this._basicDot({ x: e, y: t, size: o, rotation: r });
          }
          _drawSquare({ x: e, y: t, size: o, rotation: r }) {
            this._basicSquare({ x: e, y: t, size: o, rotation: r });
          }
        }
        const st = "circle", Z = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]], K = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        class at {
          constructor(e, t) {
            this._roundSize = (o) => this._options.dotsOptions.roundSize ? Math.floor(o) : o, this._window = t, this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(e.width)), this._element.setAttribute("height", String(e.height)), this._element.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), e.dotsOptions.roundSize || this._element.setAttribute("shape-rendering", "crispEdges"), this._element.setAttribute("viewBox", `0 0 ${e.width} ${e.height}`), this._defs = this._window.document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._element.appendChild(this._defs), this._imageUri = e.image, this._instanceId = at.instanceCount++, this._options = e;
          }
          get width() {
            return this._options.width;
          }
          get height() {
            return this._options.height;
          }
          getElement() {
            return this._element;
          }
          async drawQR(e) {
            const t = e.getModuleCount(), o = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, r = this._options.shape === st ? o / Math.sqrt(2) : o, i = this._roundSize(r / t);
            let d = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 };
            if (this._qr = e, this._options.image) {
              if (await this.loadImage(), !this._image) return;
              const { imageOptions: A, qrOptions: w } = this._options, j = A.imageSize * ht[w.errorCorrectionLevel], P = Math.floor(j * t * t);
              d = (function({ originalHeight: C, originalWidth: z, maxHiddenDots: M, maxHiddenAxisDots: R, dotSize: B }) {
                const n = { x: 0, y: 0 }, h = { x: 0, y: 0 };
                if (C <= 0 || z <= 0 || M <= 0 || B <= 0) return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
                const s = C / z;
                return n.x = Math.floor(Math.sqrt(M / s)), n.x <= 0 && (n.x = 1), R && R < n.x && (n.x = R), n.x % 2 == 0 && n.x--, h.x = n.x * B, n.y = 1 + 2 * Math.ceil((n.x * s - 1) / 2), h.y = Math.round(h.x * s), (n.y * n.x > M || R && R < n.y) && (R && R < n.y ? (n.y = R, n.y % 2 == 0 && n.x--) : n.y -= 2, h.y = n.y * B, n.x = 1 + 2 * Math.ceil((n.y / s - 1) / 2), h.x = Math.round(h.y / s)), { height: h.y, width: h.x, hideYDots: n.y, hideXDots: n.x };
              })({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: P, maxHiddenAxisDots: t - 14, dotSize: i });
            }
            this.drawBackground(), this.drawDots(((A, w) => {
              var j, P, C, z, M, R;
              return !(this._options.imageOptions.hideBackgroundDots && A >= (t - d.hideYDots) / 2 && A < (t + d.hideYDots) / 2 && w >= (t - d.hideXDots) / 2 && w < (t + d.hideXDots) / 2 || !((j = Z[A]) === null || j === void 0) && j[w] || !((P = Z[A - t + 7]) === null || P === void 0) && P[w] || !((C = Z[A]) === null || C === void 0) && C[w - t + 7] || !((z = K[A]) === null || z === void 0) && z[w] || !((M = K[A - t + 7]) === null || M === void 0) && M[w] || !((R = K[A]) === null || R === void 0) && R[w - t + 7]);
            })), this.drawCorners(), this._options.image && await this.drawImage({ width: d.width, height: d.height, count: t, dotSize: i });
          }
          drawBackground() {
            var e, t, o;
            const r = this._element, i = this._options;
            if (r) {
              const d = (e = i.backgroundOptions) === null || e === void 0 ? void 0 : e.gradient, A = (t = i.backgroundOptions) === null || t === void 0 ? void 0 : t.color;
              let w = i.height, j = i.width;
              if (d || A) {
                const P = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this._backgroundClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", `clip-path-background-color-${this._instanceId}`), this._defs.appendChild(this._backgroundClipPath), !((o = i.backgroundOptions) === null || o === void 0) && o.round && (w = j = Math.min(i.width, i.height), P.setAttribute("rx", String(w / 2 * i.backgroundOptions.round))), P.setAttribute("x", String(this._roundSize((i.width - j) / 2))), P.setAttribute("y", String(this._roundSize((i.height - w) / 2))), P.setAttribute("width", String(j)), P.setAttribute("height", String(w)), this._backgroundClipPath.appendChild(P), this._createColor({ options: d, color: A, additionalRotation: 0, x: 0, y: 0, height: i.height, width: i.width, name: `background-color-${this._instanceId}` });
              }
            }
          }
          drawDots(e) {
            var t, o;
            if (!this._qr) throw "QR code is not defined";
            const r = this._options, i = this._qr.getModuleCount();
            if (i > r.width || i > r.height) throw "The canvas is too small.";
            const d = Math.min(r.width, r.height) - 2 * r.margin, A = r.shape === st ? d / Math.sqrt(2) : d, w = this._roundSize(A / i), j = this._roundSize((r.width - i * w) / 2), P = this._roundSize((r.height - i * w) / 2), C = new ut({ svg: this._element, type: r.dotsOptions.type, window: this._window });
            this._dotsClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", `clip-path-dot-color-${this._instanceId}`), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: (t = r.dotsOptions) === null || t === void 0 ? void 0 : t.gradient, color: r.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: r.height, width: r.width, name: `dot-color-${this._instanceId}` });
            for (let z = 0; z < i; z++) for (let M = 0; M < i; M++) e && !e(z, M) || !((o = this._qr) === null || o === void 0) && o.isDark(z, M) && (C.draw(j + M * w, P + z * w, w, ((R, B) => !(M + R < 0 || z + B < 0 || M + R >= i || z + B >= i) && !(e && !e(z + B, M + R)) && !!this._qr && this._qr.isDark(z + B, M + R))), C._element && this._dotsClipPath && this._dotsClipPath.appendChild(C._element));
            if (r.shape === st) {
              const z = this._roundSize((d / w - i) / 2), M = i + 2 * z, R = j - z * w, B = P - z * w, n = [], h = this._roundSize(M / 2);
              for (let s = 0; s < M; s++) {
                n[s] = [];
                for (let u = 0; u < M; u++) s >= z - 1 && s <= M - z && u >= z - 1 && u <= M - z || Math.sqrt((s - h) * (s - h) + (u - h) * (u - h)) > h ? n[s][u] = 0 : n[s][u] = this._qr.isDark(u - 2 * z < 0 ? u : u >= i ? u - 2 * z : u - z, s - 2 * z < 0 ? s : s >= i ? s - 2 * z : s - z) ? 1 : 0;
              }
              for (let s = 0; s < M; s++) for (let u = 0; u < M; u++) n[s][u] && (C.draw(R + u * w, B + s * w, w, ((f, b) => {
                var H;
                return !!(!((H = n[s + b]) === null || H === void 0) && H[u + f]);
              })), C._element && this._dotsClipPath && this._dotsClipPath.appendChild(C._element));
            }
          }
          drawCorners() {
            if (!this._qr) throw "QR code is not defined";
            const e = this._element, t = this._options;
            if (!e) throw "Element code is not defined";
            const o = this._qr.getModuleCount(), r = Math.min(t.width, t.height) - 2 * t.margin, i = t.shape === st ? r / Math.sqrt(2) : r, d = this._roundSize(i / o), A = 7 * d, w = 3 * d, j = this._roundSize((t.width - o * d) / 2), P = this._roundSize((t.height - o * d) / 2);
            [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach((([C, z, M]) => {
              var R, B, n, h, s, u, f, b, H, E, G, S, Y, W;
              const L = j + C * d * (o - 7), N = P + z * d * (o - 7);
              let I = this._dotsClipPath, O = this._dotsClipPath;
              if ((!((R = t.cornersSquareOptions) === null || R === void 0) && R.gradient || !((B = t.cornersSquareOptions) === null || B === void 0) && B.color) && (I = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), I.setAttribute("id", `clip-path-corners-square-color-${C}-${z}-${this._instanceId}`), this._defs.appendChild(I), this._cornersSquareClipPath = this._cornersDotClipPath = O = I, this._createColor({ options: (n = t.cornersSquareOptions) === null || n === void 0 ? void 0 : n.gradient, color: (h = t.cornersSquareOptions) === null || h === void 0 ? void 0 : h.color, additionalRotation: M, x: L, y: N, height: A, width: A, name: `corners-square-color-${C}-${z}-${this._instanceId}` })), ((s = t.cornersSquareOptions) === null || s === void 0 ? void 0 : s.type) && ct.includes(t.cornersSquareOptions.type)) {
                const U = new ot({ svg: this._element, type: t.cornersSquareOptions.type, window: this._window });
                U.draw(L, N, A, M), U._element && I && I.appendChild(U._element);
              } else {
                const U = new ut({ svg: this._element, type: ((u = t.cornersSquareOptions) === null || u === void 0 ? void 0 : u.type) || t.dotsOptions.type, window: this._window });
                for (let k = 0; k < Z.length; k++) for (let Q = 0; Q < Z[k].length; Q++) !((f = Z[k]) === null || f === void 0) && f[Q] && (U.draw(L + Q * d, N + k * d, d, ((tt, _) => {
                  var J;
                  return !!(!((J = Z[k + _]) === null || J === void 0) && J[Q + tt]);
                })), U._element && I && I.appendChild(U._element));
              }
              if ((!((b = t.cornersDotOptions) === null || b === void 0) && b.gradient || !((H = t.cornersDotOptions) === null || H === void 0) && H.color) && (O = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), O.setAttribute("id", `clip-path-corners-dot-color-${C}-${z}-${this._instanceId}`), this._defs.appendChild(O), this._cornersDotClipPath = O, this._createColor({ options: (E = t.cornersDotOptions) === null || E === void 0 ? void 0 : E.gradient, color: (G = t.cornersDotOptions) === null || G === void 0 ? void 0 : G.color, additionalRotation: M, x: L + 2 * d, y: N + 2 * d, height: w, width: w, name: `corners-dot-color-${C}-${z}-${this._instanceId}` })), ((S = t.cornersDotOptions) === null || S === void 0 ? void 0 : S.type) && F.includes(t.cornersDotOptions.type)) {
                const U = new rt({ svg: this._element, type: t.cornersDotOptions.type, window: this._window });
                U.draw(L + 2 * d, N + 2 * d, w, M), U._element && O && O.appendChild(U._element);
              } else {
                const U = new ut({ svg: this._element, type: ((Y = t.cornersDotOptions) === null || Y === void 0 ? void 0 : Y.type) || t.dotsOptions.type, window: this._window });
                for (let k = 0; k < K.length; k++) for (let Q = 0; Q < K[k].length; Q++) !((W = K[k]) === null || W === void 0) && W[Q] && (U.draw(L + Q * d, N + k * d, d, ((tt, _) => {
                  var J;
                  return !!(!((J = K[k + _]) === null || J === void 0) && J[Q + tt]);
                })), U._element && O && O.appendChild(U._element));
              }
            }));
          }
          loadImage() {
            return new Promise(((e, t) => {
              var o;
              const r = this._options;
              if (!r.image) return t("Image is not defined");
              if (!((o = r.nodeCanvas) === null || o === void 0) && o.loadImage) r.nodeCanvas.loadImage(r.image).then(((i) => {
                var d, A;
                if (this._image = i, this._options.imageOptions.saveAsBlob) {
                  const w = (d = r.nodeCanvas) === null || d === void 0 ? void 0 : d.createCanvas(this._image.width, this._image.height);
                  (A = w?.getContext("2d")) === null || A === void 0 || A.drawImage(i, 0, 0), this._imageUri = w?.toDataURL();
                }
                e();
              })).catch(t);
              else {
                const i = new this._window.Image();
                typeof r.imageOptions.crossOrigin == "string" && (i.crossOrigin = r.imageOptions.crossOrigin), this._image = i, i.onload = async () => {
                  this._options.imageOptions.saveAsBlob && (this._imageUri = await (async function(d, A) {
                    return new Promise(((w) => {
                      const j = new A.XMLHttpRequest();
                      j.onload = function() {
                        const P = new A.FileReader();
                        P.onloadend = function() {
                          w(P.result);
                        }, P.readAsDataURL(j.response);
                      }, j.open("GET", d), j.responseType = "blob", j.send();
                    }));
                  })(r.image || "", this._window)), e();
                }, i.src = r.image;
              }
            }));
          }
          async drawImage({ width: e, height: t, count: o, dotSize: r }) {
            const i = this._options, d = this._roundSize((i.width - o * r) / 2), A = this._roundSize((i.height - o * r) / 2), w = d + this._roundSize(i.imageOptions.margin + (o * r - e) / 2), j = A + this._roundSize(i.imageOptions.margin + (o * r - t) / 2), P = e - 2 * i.imageOptions.margin, C = t - 2 * i.imageOptions.margin, z = this._window.document.createElementNS("http://www.w3.org/2000/svg", "image");
            z.setAttribute("href", this._imageUri || ""), z.setAttribute("xlink:href", this._imageUri || ""), z.setAttribute("x", String(w)), z.setAttribute("y", String(j)), z.setAttribute("width", `${P}px`), z.setAttribute("height", `${C}px`), this._element.appendChild(z);
          }
          _createColor({ options: e, color: t, additionalRotation: o, x: r, y: i, height: d, width: A, name: w }) {
            const j = A > d ? A : d, P = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
            if (P.setAttribute("x", String(r)), P.setAttribute("y", String(i)), P.setAttribute("height", String(d)), P.setAttribute("width", String(A)), P.setAttribute("clip-path", `url('#clip-path-${w}')`), e) {
              let C;
              if (e.type === "radial") C = this._window.document.createElementNS("http://www.w3.org/2000/svg", "radialGradient"), C.setAttribute("id", w), C.setAttribute("gradientUnits", "userSpaceOnUse"), C.setAttribute("fx", String(r + A / 2)), C.setAttribute("fy", String(i + d / 2)), C.setAttribute("cx", String(r + A / 2)), C.setAttribute("cy", String(i + d / 2)), C.setAttribute("r", String(j / 2));
              else {
                const z = ((e.rotation || 0) + o) % (2 * Math.PI), M = (z + 2 * Math.PI) % (2 * Math.PI);
                let R = r + A / 2, B = i + d / 2, n = r + A / 2, h = i + d / 2;
                M >= 0 && M <= 0.25 * Math.PI || M > 1.75 * Math.PI && M <= 2 * Math.PI ? (R -= A / 2, B -= d / 2 * Math.tan(z), n += A / 2, h += d / 2 * Math.tan(z)) : M > 0.25 * Math.PI && M <= 0.75 * Math.PI ? (B -= d / 2, R -= A / 2 / Math.tan(z), h += d / 2, n += A / 2 / Math.tan(z)) : M > 0.75 * Math.PI && M <= 1.25 * Math.PI ? (R += A / 2, B += d / 2 * Math.tan(z), n -= A / 2, h -= d / 2 * Math.tan(z)) : M > 1.25 * Math.PI && M <= 1.75 * Math.PI && (B += d / 2, R += A / 2 / Math.tan(z), h -= d / 2, n -= A / 2 / Math.tan(z)), C = this._window.document.createElementNS("http://www.w3.org/2000/svg", "linearGradient"), C.setAttribute("id", w), C.setAttribute("gradientUnits", "userSpaceOnUse"), C.setAttribute("x1", String(Math.round(R))), C.setAttribute("y1", String(Math.round(B))), C.setAttribute("x2", String(Math.round(n))), C.setAttribute("y2", String(Math.round(h)));
              }
              e.colorStops.forEach((({ offset: z, color: M }) => {
                const R = this._window.document.createElementNS("http://www.w3.org/2000/svg", "stop");
                R.setAttribute("offset", 100 * z + "%"), R.setAttribute("stop-color", M), C.appendChild(R);
              })), P.setAttribute("fill", `url('#${w}')`), this._defs.appendChild(C);
            } else t && P.setAttribute("fill", t);
            this._element.appendChild(P);
          }
        }
        at.instanceCount = 0;
        const mt = at, lt = "canvas", Pt = {};
        for (let c = 0; c <= 40; c++) Pt[c] = c;
        const zt = { type: lt, shape: "square", width: 300, height: 300, data: "", margin: 0, qrOptions: { typeNumber: Pt[0], mode: void 0, errorCorrectionLevel: "Q" }, imageOptions: { saveAsBlob: !0, hideBackgroundDots: !0, imageSize: 0.4, crossOrigin: void 0, margin: 0 }, dotsOptions: { type: "square", color: "#000", roundSize: !0 }, backgroundOptions: { round: 0, color: "#fff" } };
        function gt(c) {
          const e = Object.assign({}, c);
          if (!e.colorStops || !e.colorStops.length) throw "Field 'colorStops' is required in gradient";
          return e.rotation ? e.rotation = Number(e.rotation) : e.rotation = 0, e.colorStops = e.colorStops.map(((t) => Object.assign(Object.assign({}, t), { offset: Number(t.offset) }))), e;
        }
        function xt(c) {
          const e = Object.assign({}, c);
          return e.width = Number(e.width), e.height = Number(e.height), e.margin = Number(e.margin), e.imageOptions = Object.assign(Object.assign({}, e.imageOptions), { hideBackgroundDots: !!e.imageOptions.hideBackgroundDots, imageSize: Number(e.imageOptions.imageSize), margin: Number(e.imageOptions.margin) }), e.margin > Math.min(e.width, e.height) && (e.margin = Math.min(e.width, e.height)), e.dotsOptions = Object.assign({}, e.dotsOptions), e.dotsOptions.gradient && (e.dotsOptions.gradient = gt(e.dotsOptions.gradient)), e.cornersSquareOptions && (e.cornersSquareOptions = Object.assign({}, e.cornersSquareOptions), e.cornersSquareOptions.gradient && (e.cornersSquareOptions.gradient = gt(e.cornersSquareOptions.gradient))), e.cornersDotOptions && (e.cornersDotOptions = Object.assign({}, e.cornersDotOptions), e.cornersDotOptions.gradient && (e.cornersDotOptions.gradient = gt(e.cornersDotOptions.gradient))), e.backgroundOptions && (e.backgroundOptions = Object.assign({}, e.backgroundOptions), e.backgroundOptions.gradient && (e.backgroundOptions.gradient = gt(e.backgroundOptions.gradient))), e;
        }
        var jt = m(873), yt = m.n(jt);
        function ft(c) {
          if (!c) throw new Error("Extension must be defined");
          c[0] === "." && (c = c.substring(1));
          const e = { bmp: "image/bmp", gif: "image/gif", ico: "image/vnd.microsoft.icon", jpeg: "image/jpeg", jpg: "image/jpeg", png: "image/png", svg: "image/svg+xml", tif: "image/tiff", tiff: "image/tiff", webp: "image/webp", pdf: "application/pdf" }[c.toLowerCase()];
          if (!e) throw new Error(`Extension "${c}" is not supported`);
          return e;
        }
        class v {
          constructor(e) {
            e?.jsdom ? this._window = new e.jsdom("", { resources: "usable" }).window : this._window = window, this._options = e ? xt(X(zt, e)) : zt, this.update();
          }
          static _clearContainer(e) {
            e && (e.innerHTML = "");
          }
          _setupSvg() {
            if (!this._qr) return;
            const e = new mt(this._options, this._window);
            this._svg = e.getElement(), this._svgDrawingPromise = e.drawQR(this._qr).then((() => {
              var t;
              this._svg && ((t = this._extension) === null || t === void 0 || t.call(this, e.getElement(), this._options));
            }));
          }
          _setupCanvas() {
            var e, t;
            this._qr && (!((e = this._options.nodeCanvas) === null || e === void 0) && e.createCanvas ? (this._nodeCanvas = this._options.nodeCanvas.createCanvas(this._options.width, this._options.height), this._nodeCanvas.width = this._options.width, this._nodeCanvas.height = this._options.height) : (this._domCanvas = document.createElement("canvas"), this._domCanvas.width = this._options.width, this._domCanvas.height = this._options.height), this._setupSvg(), this._canvasDrawingPromise = (t = this._svgDrawingPromise) === null || t === void 0 ? void 0 : t.then((() => {
              var o;
              if (!this._svg) return;
              const r = this._svg, i = new this._window.XMLSerializer().serializeToString(r), d = btoa(i), A = `data:${ft("svg")};base64,${d}`;
              if (!((o = this._options.nodeCanvas) === null || o === void 0) && o.loadImage) return this._options.nodeCanvas.loadImage(A).then(((w) => {
                var j, P;
                w.width = this._options.width, w.height = this._options.height, (P = (j = this._nodeCanvas) === null || j === void 0 ? void 0 : j.getContext("2d")) === null || P === void 0 || P.drawImage(w, 0, 0);
              }));
              {
                const w = new this._window.Image();
                return new Promise(((j) => {
                  w.onload = () => {
                    var P, C;
                    (C = (P = this._domCanvas) === null || P === void 0 ? void 0 : P.getContext("2d")) === null || C === void 0 || C.drawImage(w, 0, 0), j();
                  }, w.src = A;
                }));
              }
            })));
          }
          async _getElement(e = "png") {
            if (!this._qr) throw "QR code is empty";
            return e.toLowerCase() === "svg" ? (this._svg && this._svgDrawingPromise || this._setupSvg(), await this._svgDrawingPromise, this._svg) : ((this._domCanvas || this._nodeCanvas) && this._canvasDrawingPromise || this._setupCanvas(), await this._canvasDrawingPromise, this._domCanvas || this._nodeCanvas);
          }
          update(e) {
            v._clearContainer(this._container), this._options = e ? xt(X(this._options, e)) : this._options, this._options.data && (this._qr = yt()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || (function(t) {
              switch (!0) {
                case /^[0-9]*$/.test(t):
                  return "Numeric";
                case /^[0-9A-Z $%*+\-./:]*$/.test(t):
                  return "Alphanumeric";
                default:
                  return "Byte";
              }
            })(this._options.data)), this._qr.make(), this._options.type === lt ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
          }
          append(e) {
            if (e) {
              if (typeof e.appendChild != "function") throw "Container should be a single DOM node";
              this._options.type === lt ? this._domCanvas && e.appendChild(this._domCanvas) : this._svg && e.appendChild(this._svg), this._container = e;
            }
          }
          applyExtension(e) {
            if (!e) throw "Extension function should be defined.";
            this._extension = e, this.update();
          }
          deleteExtension() {
            this._extension = void 0, this.update();
          }
          async getRawData(e = "png") {
            if (!this._qr) throw "QR code is empty";
            const t = await this._getElement(e), o = ft(e);
            if (!t) return null;
            if (e.toLowerCase() === "svg") {
              const r = `<?xml version="1.0" standalone="no"?>\r
${new this._window.XMLSerializer().serializeToString(t)}`;
              return typeof Blob > "u" || this._options.jsdom ? Buffer.from(r) : new Blob([r], { type: o });
            }
            return new Promise(((r) => {
              const i = t;
              if ("toBuffer" in i) if (o === "image/png") r(i.toBuffer(o));
              else if (o === "image/jpeg") r(i.toBuffer(o));
              else {
                if (o !== "application/pdf") throw Error("Unsupported extension");
                r(i.toBuffer(o));
              }
              else "toBlob" in i && i.toBlob(r, o, 1);
            }));
          }
          async download(e) {
            if (!this._qr) throw "QR code is empty";
            if (typeof Blob > "u") throw "Cannot download in Node.js, call getRawData instead.";
            let t = "png", o = "qr";
            typeof e == "string" ? (t = e, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : typeof e == "object" && e !== null && (e.name && (o = e.name), e.extension && (t = e.extension));
            const r = await this._getElement(t);
            if (r) if (t.toLowerCase() === "svg") {
              let i = new XMLSerializer().serializeToString(r);
              i = `<?xml version="1.0" standalone="no"?>\r
` + i, q(`data:${ft(t)};charset=utf-8,${encodeURIComponent(i)}`, `${o}.svg`);
            } else q(r.toDataURL(ft(t)), `${o}.${t}`);
          }
        }
        const g = v;
      })(), y.default;
    })()));
  })(Dt)), Dt.exports;
}
var ae = se();
const de = /* @__PURE__ */ re(ae), Bt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAQAElEQVR4Aez9B4Adx3Emjn/VPfPC5oQFwKicJVPBcpBkyVYOlmVJ53jy2XI+Od/Z8smW0zme7f85nG35/HM4Z8tRtiiSEjMpkmCOEDMJgsjA5t0XZqb7/1XPm923i7eLQCxJADOcb7q7urq6u7qnqrvnLWhQXqUGSg2UGig1UGqg1MBpr4HSoZ/2Q1h2oNRAqYFSA6UGSg0Am+vQSw2XGig1UGqg1ECpgVIDT4sGSof+tKi5rKTUQKmBUgOlBkoNbK4GTmeHvrmaKaWXGig1UGqg1ECpgdNIA6VDP40Gq2xqqYFSA6UGSg2UGlhPA6VDX08zJb3UQKmBUgOlBkoNnEYaKB36aTRYZVNLDZQaKDVQaqDUwHoaKB36eprZXHopvdRAqYFSA6UGSg2cUg2UDv2UqrMUVmqg1ECpgVIDpQaeGQ2UDv2Z0fvm1lpKLzVQaqDUQKmBs04DpUM/64a87HCpgVIDpQZKDZyJGigd+pk4qpvbp1J6qYFSA6UGSg08CzVQOvRn4aCUTSo1UGqg1ECpgVIDJ6qB0qGfqMZK/s3VQCm91ECpgVIDpQZOSgOlQz8ptZWFSg2UGig1UGqg1MCzSwOlQ392jUfZms3VQCm91ECpgVIDZ6wGSod+xg5t2bFSA6UGSg2UGjibNFA69LNptMu+bq4GSumlBkoNlBp4BjVQOvRnUPll1aUGSg2UGig1UGrgVGmgdOinSpOlnFIDm6uBUnqpgVIDpQY21EDp0DdUT5lZaqDUQKmBUgOlBk4PDZQO/fQYp7KVpQY2VwOl9FIDpQZOew2UDv20H8KyA6UGSg2UGig1UGoAKB16OQtKDZQa2GwNlPJLDZQaeBo0UDr0p0HJZRWlBkoNlBooNVBqYLM1UDr0zdZwKb/UQKmBzdVAKb3UQKmBoIHSoQc1lI9SA6UGSg2UGig1cHproHTop/f4la0vNVBqYHM1UEovNXDaaKB06KfNUJUNLTVQaqDUQKmBUgPra6B06OvrpswpNVBqoNTA5mqglF5q4BRqoHTop1CZpahSA6UGSg2UGig18ExpoHToz5Tmy3pLDZQaKDWwuRoopZ9lGigd+lk24GV3Sw2UGig1UGrgzNRA6dDPzHEte1VqoNRAqYHN1UAp/VmngdKhP+uGpGxQqYFSA6UGSg2UGjhxDZQO/cR1VpYoNVBqoNRAqYHN1UAp/SQ0UDr0k1BaWaTUQKmBUgOlBkoNPNs0UDr0Z9uIlO0pNVBqoNRAqYHN1cAZKr106GfowJbdKjVQaqDUQKmBs0sDpUM/u8a77G2pgVIDpQZKDWyuBp4x6aVDf8ZUX1ZcaqDUQKmBUgOlBk6dBkqHfup0WUoqNVBqoNRAqYFSA5urgQ2klw59A+WUWaUGnk0amJ/3Ww7P+ZdMT/vnLHi/7Yj3Q9776NnUxrItpQZKDTxzGigd+jOn+7LmUgPHpQE6bdm927/+M5/d9Wd//Mc3/8uf/NWdn/nUH932mc/96xP/+K+X7P+/l187/Uu33+d/4JEn/Vv3z/jnzc76sf3e97NcTJTv+HFpuWQqNXD6a+AUvOynvxLKHpQaeDZr4NFH8cJ/+fcHf+uOuw6+t9Xc8tKpmYFXHTxce/1998+849bb9n3Xldc+8slP//PNf/jHf3r9xb/z+9df93t/cssVn/6ze//5L/7h4V//58/t/sHLrzv0vtsfab9uzxF/Pnf3I7u9r9PRx8/mPpdtKzVQauDENVA69BPXWVmi1MDTogE6XfPobv+qz33+vl89cMC9vq/+PFlsDMGYcxDF52FhYQALrWE0k3Fk2Cow51UzbD9nbmH4oid223fsvL/xwzfdfOQ3LvvC43/+d3952z///u/vuPh//f4N//6nv7Hjn/9/f/TAX/1/f7vrVz9z6eEfuvya2W/fcVv6vvsf9m947El/ke7y5+b8OOvXXX6VoSUE5VVqoNTAs1oDz3qH/qzWXtm4UgObqIEjC3jxxRff/MeNtv2gc5XqYsPBRP1otSxazRj1/u2I41FABpBmNSRpHVk6AIdheDcqzo/Hxm7th0xOAOdcYKLzX2nthW9qtbe/++DB+Jsfezj5Hzfc8MTvX3X1g3/12Uvu/Mzf/sOtl//VX9187V/+xR3X/M0/3v8ff/33j37qM5fu/+XPX3f4R3bcsfDBex/wr+ex/ot2H/bn7vW+D+VVaqDUwLNKA6VDf1YNR9mYUgO5Bg56P3Dx5+79iaV29Lqt286X8S1jyNwS2skiGejYTQSkAisGRjzEmwAjEdMxxMTwPobT38xJHSCSNEaTSHwNGRcBbd8PL5NIubtvZ5OGqC2lk4NT88Pn7dobf9XOh7Nvu+WO2R+98up9v/yvn330T/72X+7517/4m3s//2f/b+cX/vHP9/zb3/3b4V/Zc8i/GOVVaqDUwLNCA+ZZ0YpnrBFlxaUGnn0a4PF25Y7r577jSw8c/Nax8fOjkdF+DI0Noj4QwdD9CmFgkWWejecrrM5cBCLCdHEbpi1Ah+4RYQUx4zkcqnDSh8wPEEWo8SGkbhCJGzZLzYG4mQz1tbPR0SQdO6fZHr1wZr7vpU88mb39vgcOf+JfP3Pn/9q/308WtZZhqYFSA8+cBswzV3VZc6mBUgO9NHDPI3jPtVff9cnIjPVVK0OIuBkfGrIYGq7TSWfcpbeQpm1w+82bTt3QcXfguWN3oGM3HkIymViFI/Kbm3nu5LGMIl+EZZBfXFDkET4rlQoU1lqISIA1XCBQZKvp8fhjM++86ouP/tmRln8Z2cu71ECpgWdQA6VD30Tll6JLDZyoBvbt81su+9ytP5omA9u2bnmezM+1MT0FGAtMjI+gf6AC59pIkwaETtt7CVUYHrWL5HEldDtlTa8HEYGI9MxWGUE+TwC8Ey4iHOsGrI3p5GuwUR/bc271nnv3v/faK/b/3Iz3/KDfU1RJLDVQauBp0EDp0J8GJZdVlBo4Hg0c8n7wimt3ffzggfQrxkbO4zfwOtotT4c+j7QFDA8bTG4dpROlU/ctHrm3yePheBDvxMCLhRMgg1+uzjOdw8ELt9XLOceKsCBZkiQJTlwo23DRADp3l7GO1HNRIVhqViCyBbfdvudr7r8Db+UiIGKx8i41UGrgGdBA6dCfAaWfmipLKWeaBu6/uf2+W29/7PvHxi6o6+6XHhiVuA/tdobGUgpuyDE6YrFlYgDVCtBqL9KpJ4QPjl31Ify2LiIhTeeKY13Ko+jFJ1wkWBvB8rjdMjQ8ahd16lCzYSCmhjSLkfo6YMa3XXHVzt+460v4esqTXvJKWqmBUgObqwGzueLPTulq0B7c5Z937Q2tD1x5/ey37biz+c57H/Wv373fv/LQIf/iqSl/wcKC30q+QaJGRERpBM/O6aLOV770iH/l5Zff9+Ojw88fEOnnkTZfzSiDiMCaatipz8466N57fKKGkdEqqlWPNE25U87o1DOVE/hF6NCNhJ26465cgeVLd+mu6xt6nsH514kYCBcFuhNXaDzLHBIuKtI0Y12OdTnWBRhjEddqaGcRMjck0zP2eV+4/Es/+8Q+vAblVWqg1MDTrgHztNd4FlT48MP4mpuu3///PvMft/7FpZ+//0//7d/u/Nu/+esb/umP/u/1//S7n/riP33qz275x//3t/f+9V/+zSP/379+du8f/Pul+3/j81dPf+K6m9vfd/t9/t0PPem/cvdB/4IDB4LTr9DYytOttrK+p08DB1t43iX/8cDvuGT0ov7+regbGIZEAv0TtTRtI4oqdKAWc3PzaLVSDA0B4xNDGB7poyPl0btLeSyuTpbung5cRCAix+4AeTm3evKJSJAhIgiOnWFkK4jjGEYihG/qmaczdzCVKpLUMm8c01PmVZde9uiv7p32F/YUXBJLDZQa2DQNlA79FKt2ZsY/75LPP/A/H35k6Y1x9JxhY59bayXnjTUa289fam570dz8xCv2H+p7/SOPubfddd/iN117/ZGPXn311E9cdtn+X/63f3voj//+7+67+E//733X/NEf3XPr737qjlt+63cfueJ3P/XYP/753+z/nX/819mf/beL5z/2uSvb33H9zf6D93zJv2X3Pv/6J6f9RYfm/IumG/7CBe+3zno/RkM9QOhiwJziLpbiTqEG9Idkn/u3h3/xwJHs6yrV8TjmWbrzHo32Iqo1yx15Bo5jqFEdanNpgY69jYHBCFu3jmNosI/7aY+szY/sHccuIlwERNxBG4hYljVEfosIRAie34swJEDHrrlaTy8YY1jGctGAAMBQdkSagPv1gMw5pJmFl6Ho8ccW337t5bt/aWHBb1W5JUoNlBp4ejRgnp5qzo5aaAzN7bc3v/PQocbr0qxPjRt3UCPI/BicTDCc0L/t5a5mCEvpIBZb/UxPMD2BVjYW/gnPxdaYLDWHKwuLw8MLS2PnP/6kf+PDj7Q+dMddMz/8xZv3/fzV1+z67Us+d9+n/umf7/mLv/6He/7+N3/3yn/8nd/9wj/+3h9d/y+f+rOb//X/+7O7/+nv//6BT//Vvz3xd5/+7J4/uerGxq/ffq//iYee8O/fc8C/YXraP4ftrD6zI1LWrhrgOJg7blz6psceXXhvFA1gZHyQcwbIXIIoirjrdci8p0PPyO6gjld/pLa4uIR2O0VfP7Bt+wTDCpxvQ3fz4jIkSSvkqyP2+os46JW/6qxTEyvoOPMVwonFrDXBsWeSwcGzcA2ZG5BduxofuuKaAz/K+moklnepgVIDT4MGzNNQx1lTxWO78cb7H979Q9vPv7BO84uUu5YkVUNX4allP5zUkEoVmanBR/1EHY6GO7NCuiChphLumFrOIoDfJhENwplBJL7fJK4/SjBUTTFab2VDgwtLg1thLrygnTz3BTOzW1/+5O7hVz/wQPzGO25zb93xxeb7rrt26Tv++dOP/uSf/emdv/1//+iuf/uDP9hx+a/9+qU3/N0/PPJLR454HtyywvJ+xjRwz/149ZVXPPhxl46PDA6P8pt3BmMdbMXQKUaAj+nMhfSE6Rbb6eG54242UjQaDe6TgcktwNbJUfT3cV65NtSZe51zTmcgX29PKGcRqhTv+dR8F5yxiKwbknHDW7ywjQ6QhPO7Hdpn7ACmZqP+W2/f98NXXD//X+nU+1BepQZKDWy6BvRt3/RKzoYK5uf95JVX3PsjQ8Pjo+dfMIot20aR+iWkdNNeHAyPLWEjeIZqlGEsbFSlAQRpHjw3zWFoIK0FTBzgmJH6iEY9JpS/Bmfq8OiDl3602gR3+u32INrpMLJ0jAZ2CzI/CY+tkOh8xJXnYG5hUJYao7WoesH2u+458D0XX7bvY3v3+jPS0J4O840LqvOuufqen5mfi54zNHwO+gcH0EznuXBr0Ll6Qse/Bp03IoIso7P0GXfuSovQbKZYXGwD9KWTk8D2bWOIuQZIE9KogEgMXAbKsRDEEBEI5xLUuQOcI1wcBMfOxHHcIrLMJbIS93ToruEacQAAEABJREFU2gauS2EMkDouS20VJhrmKcFA/403PvzjN92RvY1OnbnLIspIqYFSA5uggfIlO0VKvfO+xXc+uuvQOxPuruOYu6btVQyOeFrOeRrPeYZNRCZDbFMYodGjtc2c/pgpZT53N4x7GmyodRQaW5PD0S2zAGAsc4QGE3TWBM1zknnSOYTMk8hArAEs84xDKg4tymuzfwl3dY5Gdik1pFUxteDH7tz56CfveaT1PTS0dANkKu+nTQPUubnkC0987+NPLL7nnO0v4mjT+XL8630VZNxlN/k9PLIVwFvODYFIDpaDwMAIJxjzmo025ucS1JncOhljbHQIEU97srQdfo3uU8/pYAKMiSCSy8Hy5Zdjx444sqyGsLhV6dz9ayginJ8JEl18sI0SDUqzOXDe1dfc9+tf2oWL2H6hkPIuNVBqYJM0YDZJ7lklVv8Xl1dcfffH+/rP7z9wYB5zi8DQMLB9+yiiKOVOqYG0vQRDJx5HFpER0LdDDa7QGAKG/1kaXAuNQ3c9HaQpy6sdZY6IQB27MRF3QBZRVIFzJhh9rzy5hYXQoTvDcpKh7RPu/FIMjW2BqQ5hei5FfXA7UozWLr1kx/dff1vjK0tDS+Ue9/3UGKnr6Kovtj+8874DP1SvbatGlQqiqqCVtnjC0kLE1aDlCY2ns8wyD++EFRromAOGR+oejs5cbEya5U59AUuLHpZv8uT4KEZHh8klSNpt7uodMjr1XIZwfgll8eZiD2AFjJ7ILSIrMjoFDR062EbPeWhMhCi2ABejCReTCedw6uuYnTUvuvKKh3/zyYN4ZadYGZQaKDWwCRqgGdgEqWeRSB6dDn3x1l0/vbDQ/7IsGRZjxvDkE9yRUwejYzVsmRhFrVKlYaWD5bfNmAawaqqI+C09Rg3W12BcXwglqyKAR+yGx6SK2NYQGQsrBuqvxTtwhQCfpUjp7I2LWZ7leDIQ8unEjZ4C2ASwbZiI/Ny1Tc8voJkY1PomuYsawlJrQFIZf9k1V97ym3v24IV0NILy2nQNPPAYnn/jDXf9j2q8ZWxk6Fy0eURerQHUP9otB2M4nsYgyxLSEqY17slAOueMV+dJRyncAWsZy0GfnT2CxkKGgX5gkvNtaGgIUcTPNElKOVmA8gKcQ3TKR3UyLCqPoh4XwWeO89IAnH+5U2c88nAmAb0/+2fZlnH7xOMzX3fdtbt/5uBBP4DyKjVQamBTNMC3b1PknjVC738ye8/ddx94e//gOXSl/TwyjTA7t4R9+5YwUAfOO28Qw0N1WO5aPI9Vub0KBtDA0t4JjbZnmgbQqWH0TFN1NLDBcAfjrTSBY74aZRGBtXlZEQkGX0QoywJq6FkWCgCGdN25AY4pQb3ehyQV7uqAWm2Mu7g6Dh6R1/3bZff80cEZvIpM5b2JGpib8xNfuOreT8wv2ZdH1SFUqjHq/RUsLC5xfIHBvmG0WymWlpqwkYHl+AXHzF227tZhIlgbcawNxHkkScYxrnA8tcwSxFDGIDA6NoC+uuVcbCPj8bvOHR4Ohbmlu3twwehFwMIo5sr63aZQdONoTqvzkQvQLHFhkZllGZkcLPtQqfYjzSJEdhxf2nngPTtu2fPL8/N+CxnKu9RAqYFTrAF9U0+xyLNH3N4pf8Hln7/v45Xq+ROeu+2oGqHJo04Ri7nZJg7sb2N4FNh+bj/GxuuAtHismqjfha2A0C/kzUAPu2oelRtkEO+DCVWDbjygQLjIz6NMx4WBF0CEjp7LCBfgAJbyLgJoQK2vcNdfgXBRYJgTkTdj2zRe4bFo2k4AO8Cj9/OjRx73X3vJFbt/mAuGClnLexM0QN1WL71x1/c/sWvpWwYGL4xjLq4yDkbK782xsahwQiTNBJZH131xHZ6nOcym0ybNWniOn57IOJdBvb/ujFmKzrIKGw2hRWc6PbsETgFMTlps2VLlAo6787QBgTpaIOUJTWTrcFJBm/MC+skGHl6AMMk40bw4OPgORDOW4cmoIAFCXhGBMdpKAxFBRHmGcz8SLjwgbGaKlAsKr+loBK320MDtdx/5gVvuTL6V+rAor1IDpQZOqQbMKZV2FglbWvLn3XTTvt9O3cArvP5YnIaMvjcYOAeLVtMFp95qAVsmgbGJfprJNvTPe6ylsaPj1v8tZRQZiMm4e1IzmkFECA+9aPQ0INRZKxjtutX40mMjAHoZPhQRhLsw4U49B6A1KkCDvSzXx3ToA3AyJnfdtftDl18//xPM4x4P5XUKNUCdmqvunH8Xv5t/P+xQXKkMoD5YQ6vVCLUIhzuHoT+2yOMh6xgPCScuxtRgopjyWtzd06mz1OBQDVvGhxBXwF06F5H8ROO9R4u7emtjxBWe1jAO1kj25VtEIGyAiIY5ikyR1WmIzskCBZcB6PjzlEEcx6yf7Uws4uo4lhrV6o233v/xK25c0h9k1lBepQZKDZwyDfDtO2WyzipBDzycveeee558v6ASCR20GjdPJw0I/4tpaA3mF9vYv69FZw1s224xuW0YUUwu14TQ2abcVcVxFWKrcCyV0RCKCIyJmAa/dTvoRkqB5cswZkJ5lcHESd10MiznoE1fmG/Au7GRa6558OP3PoSvYUZ5n0IN8Lv5C2++7vGfm5uunD86Ms4JkiCjM9XdrY6DgweHPkDj3Sjo64WAy1vK+aSb90ajxSP4BJU4wtatIxgZHWJ+ijRrwvuEx/At7pwd9HcZzICIaMA8tsF7cGJx/nF+BafONJd8uYPvinN3Dvi8bOHUQ8jiHXmAIYuwLsaMgX4y8Dx9MFLFof2L59x112P/85Z70q9AeZUaKDVwyjTAt+6UyTprBO054s+/+ZZdH2236hXo7ogGSzsfvlXSvhoTw0idBi3G1JE57N+fQn/49JznDqN/MApGVY2kfnM0xpKXuzLJQfMXjKvK02NNFAZbCacY6kz0GDeO+lnnMBbm4+FLLrnlR3ft9887xVWdteJ4knPu1dfu/OXDB7NXjY89F319g9BxXVxcQKUaUe9033Sk+dzJ4zouBY6lON0BO58Gx2ltBY7n+PPzi9ytO/BUn059GLpb15Mhr38jzs81ejLQbrcRR1XOvYiO2bIaQ/DWlYM685DkZFZHLSlAaLuhaYBlBKBTh87PQHMggbdhHuWpHKgj56lTWKAK571BXBnip4AJHD7Umrju+rv/+6N7/YUor1IDpQZOiQbMKZFyFgmZ8n74xuv3f+LJPY1Xx5VtAI+tRQRCp+5haOIUNJJQY1mHNRVMTU1jdhYYGATO2T6GvnrEcg5RRIPO7beIZZxrA4mQeR+ghlNEOpp1nXBN4J/q8BlWY1GtDGBhgXWYUXniyfabrrr+0U/umvH8+o/yeooa+MK1s9/+0P0L763Xt0X12lD4JbvYGNZaOuHsmNI958P6cJxvGRcFPsgxnD+ec6LdytBoNLDE03f988lt20eDU0+zJWQ8HfL8bp8kCUToeENJQBhXgFdRH+jYOVGV0gEgIgGMIb+0bs6dPEF2Q0TkiQkLy+/qzjmYyEKimCcFBs7XkaYDMnXEvfX6a3f+6u7D/tyieBmWGig1cPIaMCdf9Owsuft+vOe+nQe/Q8xYxdpBGkiBpz0TERhjghHTo0+XSdgticTIUo+DBw9ikQZ2+zmWx+/j8J7fNZFAjR1gYGiM8/LCPA+9JBhUja2FodEk1pJ7pEWkB7VDovG3XHAsLSao9w1B/6wtrp9T27Hj8W+97+5D307DHnU4y+AENUDd2bvuS77ulpsf/Vitfk59oH+cYw0kmUOWeVg6dP01uIhAZAVFNSI5jXLCfFgv1J22iHDuWTpJxzkHWMNPOA6Ym1sgDRgdQ/jcU6l5ykpgLMLVbiVMS5hLAiWakPYsm9eXAboDDwDbieXLcyHKtUYn7TuhBjovCc4tECrHcdmhi1eIQbNN4aihUhlDlg7UH3pk+luvuXrnL895P6Gl10eZU2qg1MCxNMA371gsZX6hgf37/eRNO/Z9NE3H+kw0yK+LNIJi+eVcgrEGDE2XCeYv846h544spSGM0Vho4ciBOZAZ2yYjTIwPwpoMqR6XspQX1mL46EDT3WDuqlsHTrGKuE5ChHLXyfOefWC71Z7bSh2LrRhOJqvXXPfgx26/P30rDfLxVrNODWcn+eEn8JKrrn34t7J06Nyh4W2wujvlWKtjU0funDpBoQPFKgA6Viv0Ir1+qE7ac/5xvlGmSATLEwBPh6u78MX5FhedwMhohMmto6jWDetLoMS03UbGBQZ0/AnRScDQdyaeiCWvDwBcJwRUdihDh43uK6SFFEU+bZzuzhl1fFuyjO+CYfviOmd8H9ppP9s9Jnfeuf+DN10/9V/KuUbVlXepgaegAb5qT6H0WVSUxqb/rp1LP/bE44tfHVXGaZ7o+LyHpfEEDA2jD7ujXCUe6kO5YWdoIOBG11UxPbWAgwc8vyECF1xYQ19/zFNNB8qmgcsgIih26eCldAZrbpOn1ehqLBhRjWwMEVmHwSGqVtBK2phvNiH8nm7jEUzPVF58yWV3/faBI/hytmO9wuvIPLvJhw75wRtv3vujT+xqvLp/cKuF8NYpwO/X+s/9ViqVoCB1jOrwClDPdHBuFQLjBg/9hq6OMk1TGHXmhidCdNIqUxcPjeYilhYa/KwCOvRB9NdrSLOE8zVZrofTGCI6rwjOJ+91uA0EBghg0Lm1zTlNFwZCagFGe9xxxXJuJ2gnTcBm0HQ7ydBspahUh9mWYVQq5wzdcMODP3PLvdl/og6qPcRsOqmsoNTAmaABfWPPhH5seh/ufRRfe+vtj31fVNnSl7kajZRBFKtR89zXCIxUIDTc4BUcOXff+m+z29jSeGUwUT/EDODA/hnMTAPh2+Y5Q6hxxxQZLgbSBJ4GX2Wq0RMRSlp9iwhEcmgOjd9yWiSni+Sh5h8T4iDG0bCzbrY9rqixz9B2FtZukQMH5GUXX/zwr87OovyR3DGVmTNwTKr3PT79A7fe8vCHxyaei2qtH5wgdFxN7tIZNRGy1MHQ+RaLNxGBiAQBLI9uOO5wC3TTi3hKRy4iUFlKyzIPYYUiluPqgqylpQVMTy8hjoELnzOBsRF1pG2WEbR1l85PQmmivEAUVQEfgdOR+TqnDYSyAIOVi3E6fgEFrqKDC9Qc6FwZFw/66SiKPfSHeZlvQ8XZOIJjPcYOo9Xu40nW0OjnL7v9lx7Zha9GeZUaKDVwUhrgm3lS5c6qQtPTfuS6ax/8riwbHLe2nwbI0dgZNJN2MJj5rkUYpy30ns4+I+gkuY9XYxzxuNVnFRryiLCYmkqwsAhMbgWP3kdg6VjhEhpTNZseWiZX8Orh8WHnlOeo5RRhnWBd3rPu3lBu38nX+NFIASGgV16fh0Xm+9iOEbnr3oNfdc11hz9CGRXlKLGxBr60Cy+/7PO3/8iWrc8fjXi0zNHh2DjOB8IzFcaw0HN2lDARgYj0pB9FpNSjaZ05GMZcwjz1rLPJ05elxcakS88AABAASURBVBT8dI9t28cwPj5MZ85dM2VknHtZlnFu+nDKFNkq56LOV09h2lZtTwF0rk6ajh2FU9d5THks1OHpBEI5PLKHQjLk882DzYL++0Z9/Vuw2KggSYZedMll9/7K4/v9c3FGXWVnSg08PRrQt/Xpqek0rYWOrO+GW4/8wO7dS18LM8xvzG3U+iyNtIehnRIaNNG+6fdLpoPRouFyAWrAASNqHA3UqRuJMTM9j8OHF1CNgXPPEQwNVWENnSoNq+Mu3cDToEbBGKtoSmB9EqJapyIkjuPB9q/LJTS0jicJUCPL9uaMnBLcOYGfCZzvZ0vG6zfftvv7d9yRfZCy4pynfPbSgP7TrhdffO+PZ60t51Zrg/x8QaeFNnWYQHR+OB1Djq4XLsPoQKlzR0G94IWLtS704lFxHBNKOPoWL5AwNy0XZkC7nWJhYeVHclsnR/jpx3BeZUjTBBnnnsoKO3yxUKfOwwEKNsT6txfKQMHDVurikI5d+C5IKMY8tgWkBbDPOt+Ei13xHqwqnGANDGxn+yrYv89/+RcuffR/Hi5/+R60Vz5KDZyIBvi2nQj72cVLAyf3PYb33HL7Ez9Vq587mrrcn3HDTSPYptGr5Aqh4dSI9w65EdOUguplnnMIRlWPRSNbC3F16vv2OgwNANu31TEy0scdUhMubcFaHmZaE5y6iEVxeRrAApRIMgXzeaK3iEBEloupvTU0tKLtZ3vVEYChg0Vc3YKDU37b5Vfs/OR9j+IilFdPDXBcapdfv/eHD+xtfWBi4gXiUeE4c3wkgR418wF4SwdKJ687deqbZfBULxFZI4J1FhQdQ8d81iscy6SdYWF+iTthYHCI8277JCp6wg6eJnHswUtPh3S37jkphM4a6qwph1ld90odQrkiAhEP4eIwhCHOtAiWr0KGOnb2HQrGvU8BrlBbbYeBgUl4jESPPDL74auu3fffyv+Ry7L2NoyUmaUGCg2YIlKGR2tgroUXXHvtrh+FbBlNs1rYSfQP1bDIb5KGxkpYhLYLQuMkNEVCw6SGKqdFpEfwNIrOe4Dfqj0z9FftNq7Cuwq/p09hZhbYMgGcd84IqlVKcW2KyKBG1bKsiEDo1BWgcWUOHA0hmVg7ICIbAse4PCTn4C7dIIV2wdCY57spYGEpQVSdwL4D2Ys+/4X7f37/jH9eXqB8FhqgY6588ebkO2+48aEfGR2/sL+dWWRpBGMqAHesqlfRf2Ofpx6gjkFdq4qXdY/1L8qGYj0Ox+HL54NHMWYiAglzhq+3nrYQMdtibYRmo425Gc4x4SefbRHGtwxx3lmkWRNJ2kSatqFzT+sUIRPWXMtzj/VB0ckPdKbDAoZOWsneQAL4LoQQTOdAuBw8WqhUDU8QWC8XHllWR199e/Xu+/Z99423H/6fi4v+nMBaPkoNlBo4pgbMMTnOUgYaNHPjDXPf8uQTi18OM8wjyQgRHXG73aRGHPSXyvovvTHRuVMaq2LnomolaEg9La6IwHCj7Xwb+mtfEYNKNAhHw7/3ySMMwW/pwLbJMRqzKtMJsjZ3dgCsiWEkgogwtfYu6ltL3zjNvgUn4cVwcUBgRbbAsR80zBSh+d5WANsHUxmPHn5k5t1XXfX4x/U3Bcwu744GHnwMF13/xft+Io4mRiAVieMK0sxzHEHfbeEdoYs6l8HAw9P5eepcnbq6tOXxIM/aODrXWrqmKaiTWwQeUNnLcgRgPWCtwp10rHPJGLTajbA45fBjcrIfw6McXy44dW47n0Iv3al7ytF4DspGB6wDXKhoXXmePpm3TMtIcARvOmmtHxryfQAde0gzC5xrUWzRSJYwNNqP+cUFGFtFO+PpRjY8dOede35wxx3z+udsEtjLxzOggbLK00kD9DqnU3OfnrbSkMlju/G2O25/5PujeLTapA83NkZcq6DJRJUG28CCXp42zUM8DRiNnOeXUZaFp6X23JF5Gi+NGxpRcGfm+T1Vt8AZbV2SxYhsHa3GEg4dmFdROOecGrbQqUeRAShPjaqWVYgIRATLF/M1ntdHJ+F7Q6SrjBbogpYNBjYYWgvxoOlPAzQOth/WYClJ0MoEMENmx44nPnTvAy39R2eqXaLO2iiPhbddcfX9Pzs3J88bGNwK4TzJOB/0LxXSNIPnjhNZDRLGvsW5wXFydOs6RwKY7oxdLyXqGBVYm1/Q/Ro5K/OQsjMOGyIe/wv0l+wiEsQ0GwuYn2+jVgfGx4cwMjoIG3nyOe7QuaDMkhAXEejJk4jHCrAcD4sTAS/XBYS5JGyXcA4JFzTCObac9sxHfqlMfTeyrIVaLULCb/ntRGUNoN2qV3fc9OgP3nZn9mH2tZxvucrKZ6mBdTVAz7Fu3lmbsbCALbfeuveHF5dq5xozgGqFxiVL+e2xjf7+QTS5e9Y/91Fn58TAUVM0OHyu3JpWFBTHnY+IoFqt0qgLGktNpHT6cXUABw5NY27O0ajSuI5a1GsWcSQA6zTioRBhOggzLO9DnflRqwvUjR4iQgMs67CYNXQPdBYLjECdUq3aB/CbsJhBHssOjV926e0/c9e92du9120Xs87Sm/2v3XDLgR/dv7/5Hki/rdWHEEUV6L+VniRtWGs5VpbakTBeno6eZUgTwgcAhf7zcS2cczedAnivzlc+EuE5/LnMXF4Rd95DkWUZhAtKXRzqD+P0R2/K026lWFpY1CmGoSHwhGiYp0MVODrUNGtzl5wi82wnWC8XBB7aD22rgjWHOeIgjK6+O/lK5NzVYAWapyUUOTVNHSKpoNFcojNvoVqv6LIY3lRZ/wA/b1XOu/aL9/1m+edsub7OtGfZn1OrAX3DTq3E01wajZ3cdu/8N9xy5943RdVtSLmTTtOURsfQz/mwy4nCMTSNtVGDB4SjaRo+pwYwwENoUBXqjJ0aVcQ0fhUkbU8NGcTVmAbLYalRZfkR7D98BHsPptiyFXjuc0dRqaSU0UTWWkJM+xcby/IWRiLyg8YvodHz8MFJZEBwGe6osMjXcC2P0BsYljMspXFWCMe6VIphM4WoRzW0F9v8RFBn2y2NbT9mm/3bPnf1rp9/7CBewaJn7X3zXXjzdTc8+q0ZRu3A8CT0f02aJC1UeIwcWZ0bKfQfUwGPs0GnCjouLwYGoqpeBkjxnvxdcBwEheatBy0jIpRmOCcKUA5pngOoMFwY6q7Xk2Z5siTCeas/7vQxnbfHkQOHIJw+4yMGk1uGMTxcQ8o51Wg1kTqPJruQkD9zNWR8FzwXoYKILRbAsyBS9oONVYfvK6TFnA8WYP0wzLcpQISdPHM8SyrA9gjbEklfKFPh56woMpzXDZjYqFTOxRqSbECOTMcXXHrZzh8v/813KrC8Sw1soAGzQd5ZmfXwXlx0+927f7zWt3U4SSvwaqiCJlx45g9Dx+YIerywU1GqqlKhcULpBBcITOiteQWYZh6fsHSYGb+lt+joZ+bmMTMP6C+Qz90+xl16CquG0WUAjasVgaGttNz5CZF51o+ndqnTFjr2XlLoIiCsN+IiQjKDyFa50BhChj7Zs6950eVXHvwY+6cWHGfbtWePf/EVV975S5Xa5PlRPAx6IS6uPHQnTJ0wnuVAQn1lXLxJgPd0uN4j1zvIo2npqE/nh0aPNyzKe8rpje5Zq5Kh9SuRhyuGztlAMDM9zXYDE1tqPIGqoRI5jnPEBQrbnno4jr0nv9cFCZ25VxneU5yCgd48Wgd5EEKjFEIrokOHhgqSeIsIRHIov2iZDt0J+8Q5ziqYZaH/cmHm+uTwVPaOKy979H/Nz/tJspZ3qYHj0MDZx1K8eWdfz3v0eHbWj910w66f2r+v8ZLI9sOYKHCpcaGdgSIQlg3UipHK6b2fuYHvMn7LbCwvbTgex7s0xux0ioMHFmArwPZzKhgZrcNYh4TfsD0NaMydnwkj5mCM+lEaPFGstGxZ9AlFVCihHV0ux7axnyIeuoDQUwp1Vg4eYio8Vs6ie3c+9k2XXjv9Ubatb7nYWRCZ9X7s3y976OcOH2q/rl4fNnGsY0FHxDGiLlY510Ida+lFusjf7LCoT8OVunTMYywuJFhaSlDhvJuY7MfIaD8iOnWXNpHpr94TOmU6a0EMEZahAJ0Hq6YLad231qMoaCICEYILVCHABa3OLXD+C48IRISsKpugYD1dAOefzjljYyw1pPr4riPfdN2Nh39gr/dn1XyjYsq71MBxaYBvz3HxnRVMOx9ov/2hB6beUYknJUvozMUCRmiI2H3uItRABXDPJT6DgjnHfYeyNPrdBfR7pWEd1tSQti1mZxrQfxo2ioFzzh1HvU/bkSBzLRiOlqWD5QqAJ5oGlv91yzrxuAHYr6PKiQdocMHL8dxX63Xsr2fb9YdVuqGv1wbgksrQtVff+/N33oN3kPWsuS+/+LFvf/Ch/e8dGTvfRPxmLiJQ3ShUCSI6Z3IoTaH0XtC8AsfKL/hWwpV6V2h+uS3dtF6yHQTqq/XkZX5+ngvKNgboKrdtG0ZfzaIaUZb+ozNZBv0WD/IL55yH4bKOc0cIrL5EZDVhTUokzxdhyDkm+jlCHbry0ZHbrvmoDl8XDtq+2A5BZDi69daHfvCh6+e+l33jG6KFSpQaeGY08Gys9eg38tnYyk1uE42DPL7Hv+bGmx7/pHMTY0bG6UBrNGL0d3RizF9uAc1QJ+4Y0tx0HJ3y9AKZjrpX8zkaKiFiHmnXebxpuUufxfS0x+iY7tTH0DdgaUBTfs9vB1nGRBAaViMRgJUhLOSSeGJ3MKIrcrSw40N/dJdm/FbPnZKhV4/5nVPryzIBJFYdSaPRv/1zX7j7x3cf9C9g/czAGXuxf5Xb7/Xv33Hzrk8MjZw3bGwdGdc+pEMXPhqKCEQEJ3Np+QLHW15EWJ9dF55OciM4fu6x/OzDdRtmZma4E3YY6AcmJ4cwPFSHodP1nAP6Z5SO3j9lfzPOF28sYCNQPJtqWL8EMLEcajwsDClDQzEsTKKI8Km3h3BuKUKKwrSthvJButKstWinAjEDaDT5TT0d2nbjjod+4Y678N3UVVV5SpQaKDWQa8Dkwdn9bDRw7i23Hv7FQ0fcS6Nogsa5D45HjL214rDeN+de/DQ6vcjLNEujKNzp6A7I8BtlRCexuNDG1JFZHmsDW7cJttC4VmtAlrbg+ZEx4q4w1nIeEBGsvY5V51r+lTSnA43qStrB2tXyjbEQ2LDwcI5ntDKKffuaX/W5zz3224eXsA1n8LV7H77iskvu/K1K5ZytsAPw1rK33K16zxAQkQDVvzp4hcYVWOfSvALdLL1o3flFvOA7Vljwrw09xztpO8RRFSpj6vBBtNvA1vEYWyaGMDAQI7I+zL120kKapmER4/T9kLz/uUzOnTzS8ykiy3StR8GXjCdNfJ8c9UcIA4Uydnw/wDraiYcxfYz3wWMI80vVkatveOCn7vwS3kY5K4JRXqUGzhQNnFw/Nn4LT07maVfqtp0L77///oPvqFW3miThSR7QHIq3AAAQAElEQVRNhDouWudg5DwNDQ1HiBc7B0BVV2DjLq+UXctnIPwu6Z0Nsmk2Ad2d+BiLjQz7DzZowIDxLTVMTA4iih3U8Vs61IiGTkSCQJE8DIkTfmhZQuvtLivstKYtoDt1RYvHr6kDxFZo1NkK248GPxNE8Zb49juefM+NNzS+hX01OAMv9qt22ed3/eD0TN8L630XiKO+bMxxo+rQmQvCMdG4p5NUaLyApnuhW1WsozsZ4krbCIHpOB7dMrrZvREkdKbaNj2B0U8qC7Pz/PwDjA5H2LplBIOD+k6kdOZNIuUc5Ez1BinnrdO+U4bKzPuvMYK7cnIxAogIEGayXwmdy+c8dUViuD0/ZSkATrJAAXmEzjwKv3q3lQE0E4NKbQIHDjSfe+11939y1y48B+VVaqDUQNDAGWl8Q8+O87F/xj93x82PfrTZqlUyX6cpsTRUQMTNZ5K2aFDUCPUQRoMGzyNvDXtk9yKpUV1Lz3icqMbUciesf1qWJEkwYKBTnzoyh9nZDPU6MLFlANWagcva0J2fyol4DK7hpoFOXf8MC9RKFPF41fuOPmjMuWvSo9corgcjW62dE11zzX3ff+2O7F3sJxWzaa162gWzP32XXD73vY89Pv+uuDoBY2uo1vu4k20HfTD/qDaJSHBkmtcLRxU4SUIv2d20XmI1P6eb0EbDedRu89MKHXR/fRCNxQamphZQqwLjYxZDA1XEcUaXnHLutQnHeWjgyQ/dqYd3wASREhY1jAYawx631l8AuiAgvHc8+dJ3jWA8L2YgXLwaG0Pfi6VmA30Dw1hczAB+Uz8ylb32hh27fnXvXn8hyqvUQKkBvknHp4Qzkst7P3LNdUc+OTff92WtpA4T0YIZHm27FJnLaMQiQA0Tj7mFOwnxTHoPzzgtChPcvtLkQHmOE56yugGW985w15NRbgZrLSmWBtNSfoy9ew6BnwQwOsLv6dvGg3N3WYN5jhBUKhWICPQSEcpgI5kQyePsI1NY5kHXJaLlcv4u8qqoOnIRCTszbZsxEQ062M6YfIauXuBo1FPfh1Z74MUXX7rjU48/iTcw84y5730Yb7xpx65fEIyO1tThtVqwpsoxYxc7465jyinDcQM0XmC9ubGcTxHdt47XiQAwLH588Jy3BRynjy4MdfSd7oxF55wgTQRx1A/hPN23bwFC0dvPqWF8YoAOXU+MUujCs9VqA5kw3gHb4RXek6ZSAWt0jiCkiz5xskCYLWIgBDh3FCICiCNSgLOKD96GZUlnTCwQx4JW0oLoL0alzjnZFz308PQHr75u188fPOgHyFbepQbOag2Ys7n3N9+dfcNDD858sNUYiCrVYZoRQebbiHi0De6YdVdgjYFIblRUV0UsGG/aH98xYEWoPMcPlWY67HmocgIhOIoIWWpxYP9M53t6jNGxAViTQdhaeEcb6CEiyJ2tge62FCKCZVnAqjiTa24PCsJ6lxpwaH3dDNo+GvAsY1toYEWqSNIqjezQeZ/+17s+eajpX9TNfrrGDx3y51xz1QM/2mrVR6t94zCxQaVq0Gq2IVCHlY/bs71/3XOhu60eupBUJyyMEWFxCc47cCwdlpYy9cEYGx/EOOH4fuipjeGUSdoZ55UQCNBFgueiQcRCROlk6q7sqDh1p6dcnEd5lmPgUPx4DmGOkaRzT7iQ4LxHiFM2Ira3zkXGaOWBBw9/8233TP23I94PKXeJUgNnqwb4Rj0Luv4MNOHJOT++Y8cj3zs/Vxk2Zgw2qqPNI/bMNZFJG2rR1DFq04R2aVlRNDJqtBCM0DJV2QLUcHYjENd9ULAaKM2nXNBI0R7Ch52KI1XgswpmphqYnmqjygOE888bwOgId+U0rMykIc3Ih2BAwcvRqh5//axjuS4WLvqUNwJsCOVrGzXqmFRofAVJloZFhDfCTxWGOqzLo4/PvemqKw5+P9tRUamnK/Z733/tjTM/+dDDC1/XPzApElm00nl4cH5wB2s8u0cVrtc/9n+9rBW6N8BTgNaxEbQizdfwaGjjOaY+67TBwjuDLLNIuPvm0PJ4e5EnRG0MDAq2bR/HYH+NpxBtTr2MYQJkLE9daB1h7mklnAsaaFpDhXBOKQABAhAuJ4ZvAHXAlIhARBjr3Do3mRsWm8I2Mu4N61MWloNU0GhHMNF43407vvQDD9/VfmunZBmUGjgrNZC/SWdZ16d51H7TNYd+cf++1mtq1UkYU0E7oYHitttUDHRHGnbnNqLhogHxnjQPo4aXTk9gw1P/TlYNGZ7SlTtMgFZKjx8p2XsJ9YFxw51vZPtx5PA8eKyI4WHgnPNGUK0JjM0Cny48FOClRlTBKEREg2PA9cg3pCkYrLqVV0FiMLbgMWiMLHX8xtmCrVThXA21vnMqN3zxge/84q3uu6gfLkPIf5rdbLf90o0L//nW23d9dHDo/Gpc70fm6cDoVHRuqGYjY0OvvC/GMCTDoxctZKx5KN9GWMN+wkmVXRTSuKJIg/NL4yIWItJBzNDCi4HzEt6LhYVFNJsew4MG27aOY6CvAu/42cclHHd+eyef8J0QlvGMeycAZYd5GN4ZJk/wFhHo+6W7dQ1D8c6cC3F9UHZUHcJC06BWP2fyymvu/I17HvbfzD7WNbtEqYGzTQPmLOjwUV18/Et4y877Dn53bCfr7dTyaBHIsgSG2ohjGjQepfIkmUZLVpWloWCaTHyCR4AK2h1N9YSIQMtsCBopL+oQVC5BIwUaQ0+oQdV4zNODlAb10L4jWFgARkaArVsHUa+yHHcuKl9EYK0NEBEawzyNHpfyryY7JgsYxovb0LBz8yZMhzYypENDB7rwqcbcsbFomqbQ7/nOxNzVOTqD0bFLP3/bj+98CBfhNLzufxQvu/66B38oSYeGav1jMt9YgDfaxxpHxkL/JttSz3r0rN3r1unauKbXg5Z9StD5cgyog1WwA1BoXBHqpfMVH2LhwaEESXDg3DUWGcNW4jE3uwD9c7axEYutk6PhB3MuawaH3k453o7FtR0a+FxgschEh84s3jq/TGdxzCRSzjFHsD5qFjyCF10cwLNmB/EEW2OYMrrgDbIM9OLage3zgK1iaiYxaTL0gssuu+23ntyPt6C8Sg2chRrI34yzqOMHF/y2G2545Hsbjf6awwhSGituxBFXLE1IxrQDaFgimxtuEYGIJ0DQ6DBb7ZVXQ+RTbHSpEd8oH3TmATRYCFBuAYLhipgwXGhkwWjGUY1tE+zdMx8M65ZJi8HhGPpPw+pOSB2qiKD4EZvSFBQSFhUaKrrblMfZoeW6lUOh00Kh8S6IDwl15HlZoN1oo0anrsa7naTI6A1SH5NvGAcPZc+/4qr7P7Frv38e+dkxkk+De88h/+LLL3/g5+cXKy/qGxpDW8+erYEXy2/nGSI6EFGd8RNNd3fYx1W67s472Xghc73wWHK13Ho83gnbK3AODBUeXl0kJ7iWC+ARvDER55zDzMwSnAcmxiv8nt6PKMpYLuP8TIkMOt9YlNXp3DHMr4R3RkTWDenZAV0cQy9LPsuIlneMO4ALVrYMgACwfEaE5jPJMdD/8Uzc18d292FhIZKlxfq5l1z64H/fd8S/jO23ylWi1MDZooHizTgr+ssXvHLn7XPft3fvwlv0H5BptWNE3JFbvvbGeBonT6dJi0WHZLk7AU0HeNGUQ33ZirEikcYENER+jQHUnBMB2wQEx54BKpM7FChovMDdiAjblLUhdCbW1LAw28aRQzzmFGDL1gGMjAxBTxXUoYcfqHWMp8pVUOipvdkeEE7bTMlJkkBEEHHBkYTPFg59A4NYXErQ37ctun/nwa//4jV7fnZ2FjxXwLP+mpnxozdfP/XzDz04/Y0Dg1srMHRUJkG1UuM3Y8v5YYHMoBpFcDyC9zpmEPbraOTz5Wg6uvh1jDYT4LVWPknLt3EWimUejqsP8HSSBuC8c5yH4CKz2UgwP9NGRPLkxFD4gabOPfDSeZBlLMNFQu7Y+R6RvnKzEBQFpROXDF5YjnmeAOsB9SNCvbEdwoWzqI5DGyJOvQoRwTBf+D3dVgRJmvIb/xic60O7VZeDB1pvvubyXb87PY1zUV6lBs4iDXTeqrOjxw/vwmtvvPGBH3YYrgN9gBio324nLe4wElgTQw1UJIbGAaSlwcnT5KhJQXGJ0NgYgYgtSMvhsmH0NFLEckaviBop0rUMA940gjRijCzfNhJYK2GXqDspSITpmXnMzDYxMm4wOVnFQL+FZTmVo20yJmIZ0qy2zwAowGjoiWOkAKPh1nSIrHloWZL0fJPwysbQsKmkIq7WsdRswxiDcDrA9jYbLVSqA2i2LGq1c+T22x9/3x13T7+X7avgWXyxfeae+7L33XLLY28fH3uuSdMotNZS/81mkw7dYHCgD61WK9D1pCJEnsEH2xzm6EbhRs0zHDedMyICESGrDqyCUd4ilosYx/GNCMPPKYvsP6D/R8DJiRHU68K5l/IkKSEytkUIIKVzz/S7FXjp3GSw+taJtJqidUHnaue9WJ27NuUDwUDQai6hzYVlrW8AkH60krp94KFDb7nhpv3/lXqpo7xKDZwlGjBnST8xNeWHP/v5uz7Wak9M2GibLLUTiPXIfAahUTMmphMXcMNNw5TA8Tidtoy7B8DTaGRioIARpg0pFSImIgjz1gNAmeuCuY7lacA8nT9bQ2PIRQTarEORIVO7x4Z4ADSX8FyBtBOD2VmPqcPA+BZgYovlbjiCOlnhDskEeVqvgWeahUKodbCp7K8DcwKUpqD4zq0VOqizCnQ9Y1UZHQhlFwBPEjwsLE85UpewvOPuycFai4w7LS90fq6fvRnbcsmVO3/h1vvwfsqskPFZeT+6G6+97roHPo5ofBy2D1GlzpGrwqeCmPNDd6atdgqr/RUu2Cx36eyJ4yKpF3TnuZautNXg/OJQcY2EEwV0Lh6jrPIUKOQ7eLY4R+od5xVnls4/ghnoBrsJawzyEyDPLMHU7DymOf+GRsEFZR/qfdQJTzLAd6nVSrgAAHShkFG2F9amQoxnrViGTic9fdIqhQ0Tr4rUdmSMkI/zzPPd8IhYxgCUA9YOaTOef+oS8rDx6KvWAM6yxDWRCbnMAPf149HNd+7/6KXXzP4Q51ydDOVdauCM1wDflDO+j3ROvnbtrQd/YmY2/oZmu0aHHUMsu04rwpdd8+HVwqiBWFaHY8zB0eI4Ghy1NwpNhzLk984gxMlzvCGFdt20PprqrlcNl0LpNGC6y/GsX5NaP0TYJoNGM8M0jz9T+tGtW6vhm2aWNeBIsHSoAgs9bTA0xtCrI1PbqUmaPQbaRwbL99r0ckZXhHpDDqov0GmGQxgeoa3MZ58c+dp0hq2kQp0PPe+SS2/55V0H8MbA9yx77Dniz/+P/9j5S82k/jITD7FrFpA46NpTLd16UyfFDSgXLYLQXTwz10qbjl3/ifAeJY1jqTQR0QBZ6tDgKczcnMcYv6frv/lerQlPtPTkmO96fQAAEABJREFUwoV3gl9fIDZmnGWoJK2fAdN07N5TTs4Hla0gRW8R8mtEaURgRYcW5rCWVSgTIIwK+RAuyuScy7gISKXO8RnccscdT/zMzffgfay/IyQwlo9SA2ekBmh5z8h+LXdKX+R7HsIH77h9/8eajeqACI0wV/PB0dHCMD8YmeUCXRGRFRtQ8BWhcw6KLvbjihbli3C5kBqlAsvEleHxbCurXG5ru5WGXx4f3N/mDgrYtr1G48qNiGlBf7EvYhB+y8UjcP3hHMCdP3dQ4M5Z4TQffrkmbU+R6I4XtJ4hDaznjok1LRtWYR8UYJ5Cj+GjuIqZmbbMTCUvvOSz931i/34/2VPeM0Rkf+1NO/Z/5xO7j7zJI5ZafQA2rqPdzneCebMcdc+lC3VIfsYLxyTMPn54qlwB5GU0/nSgqO/oEBte2ldlEBHoOyMiYd43lpqYn18EfTtGxmuce4P8zOIhJp9nKedn2hR4V4HLKvCcd0FWZ154XSXBQ+fIhgBYlnwM81sYKBh03zwtgu8c/oQ6WEYs5ubc8FVX3Pkzj+zFV3nvexTsFlLGSw2c3hpY8Rindz/Wbf3UFF56w3WP/1SrUecX52F+541pRjLyu2CYGAk3X/Y1hiOQISLLyClPw5NOEQpWJTRKhSHN2yjBsBrDo0jyzByex+H9QP8A8LznjaGP39OztIHICHR3rxt0PdqEqIEjoBeHPdg2hpo8aXDryoUCAgoh3TKZbw1SnoNG8TDgh8zDDx18447bDv439mW8KPFMhmxHfOOd7W++7dYHf2Jk5Jx+Y/sR2Qoc9XP0go39Cc6CYWi0hOfJPFhvz/l2MrI2s4y2c0W+4dyLCB1jjiu34UeOLIKvCLZM1qH/iqGxKXWXsG/Co3cPl8bQo3Oow4WWU2nFPNT4CkRkJdEVE+lN72IBuGAQKeTr+CgsIjOENB141aX/sfMPDhzAy1eVKROlBs4wDRRvwBnWrbw7NEb2tjvdRx99tPGSyG6Dc/R6PEYlnZ/7HA2N7rg8NJ2XoF3wK8amm675IgIR0ehJQ0SCDJE8BAQ4CsgvOmzPo32hU1cgGEQdMgMhzZoqGxxjemoOi3PA8Aiw/dwx1Po8MtdAhbtzFSQiEMlBP8WDfE8IFzai2cvQ/nruQMHcZeJRETWUK8ileBiqzbC9ObSQ0wf0B2QOMaJoCAtLMYzdWrnllsd/8MYd0P8z2+oGhBJP7+OxJ/HSL3z+zv/u3fAwMMD21UA/Bf0RXFypsDEOy4sh8SguEQk6zXXmwxzaKF6UO9FQJK9HRE60aOBf26ZAXPXQPnVjVWboo1J0HuoCx3MCCeeeAjA8Zk+wsJAgigH9PwL2DVhAUhiuJIXvmssiuMzC8/MUOD9EBCKsjwtOigJ0FgpIAy/SmVZaAbJ36Ay6bhF9B6QzNMIcwyIGIhpnkm0DFxFi+pC0a3LkMF712cse/tmFBb9Nc0uUGjgTNWDOxE4VfXp0N15z6527Plqpbatmvp871ny3YA2tD3da1urLT4PNAmr4GIRb4wUCYc1DRILhEKE78xsb8zVFj0oW9awOaZs6coMRVafOb+K5kdQ6FZ4LFBUXcQficOjgAlpLwPnnWmzdNkojugTnWxCnRtLA0Ajn5TWd9xk4FcOvshTaFkV3HDy6rkDo0JPUIo5HsdSMZbFRGbzqmru/59FH8UIt8Uxh717fd8VVj3zP9Ix/Za26hW6mBpgK2mnGkDoGw9A47VMBEuiYyMAI9RfijB7jLsb3GGybnl2043hDbVDB66iOAFWFZnD+CDEzM8fj9zb6+oDx8RHU+yJ4n/CTRZPvXAZHfkeH7tWDB31Rb8gvEckj6zxFBCJHI2cXBgoGy4tQQ34L4Xd0LxEgVbRbHEsZMPv2Lr3/4i889slD3g+ivEoNnIEaMGdgn0KX9s75iZtvO/Ij0zNm1NKRZHSKxli+6DWiQjMksJFH96WGqzutcXWoCs3rhuadDLplaBxsyWoUUoURgYihQXTBMHr2ATSIGqphJUNOp6Gcn2viyOEEZKdDr2Fsog5IE86nCLtmE8HQqWs+RPutQ18APS5a4WUj2SO7Qwqy2SZwgYTAv1JORFCt1NFKEsTVPjjhUbb00WHWcXAKL7nyusd/5skj/ryOqBMLniK3/tXDvTuP/Nj9Dxz8yPDoBVGGOmy1n45IguQoMlwotblfdKRRX1wYqdoCyOGdhYJRQPt/nNCxUyyXCQLWf3jvUaDgKtIaFrRTF7Kv7HUhj9UzqjqhU2SWox60/Tr/tP4sFR6tZ3To8+GHmoMDMbZMjKDK6Ze5JaSZOvUEzlGPdOqOR+OOuvKgPAVFc/qyjrW3I0HBINwsQV4RgYjAIAc6l3DxpQhJ7sw9Hbru0LWNUaWGJInh/Eh955emvuOWq4/on7Nx+RG4y0epgTNGA+aM6cmajuzdg3fccdcT763XxzE33wR4xEefBjWkaeqhBsbRKhkaBxGBiAQJagA2QmDio+BhdMO74CvCDZl7ZBoeXToa0TRNO87bBy4RgbU2ALSIWSY8el/A4UPA4AB36hduQT+/pzuXQC9ywlABkhcPTkLp2i4Ne2GjvJzfMMj1xgiCU1fHTogo3WBxcQlxVEWbTj3zHmJiiP7vOWWgdve9e7/9zh2HP8p6LJ7ma99BvOOq6x/+eLW2bcSjD1GlH0uNFlrtNtvo+MkiQRzHK61in9jOoDd1aJ46VwCqgxW2442prOPlLfi0jELTGh4vlP9k4eiIi7Ii0nlPhCQ6ZC4wVQd9fQPg9OTcm+EcBUZGY6IOPX53WITjSZHKUV7vuGv2FeqRCyLqUOcuha17i0ioU0TW5eFLjeW5B72Ul+1jGV1M2pgnBhLDuSpZhwfuvGP3j998b/udylmi1MCZpIGTs0bPYg3QyMmuQ/61l1569yeiaMtIow3YKILjEaA6xWCfuEMwwVFy1+A9jUsOEVk2HiKr40WXKX+Zf2284BHJy2odBa0I1ytT5CM4iNXDonLiuELnHbFu5RS203BnlO9gPA1jHNVoTAUHD87QiQIjI4D+37FqNUBMyryMZQWVuIpIaFThKIMOtvDwWH0V7RTmK1bnrqQEMQQqT2mUx52S9w5qwLlegv7AzBuBM6yf7UjFgesptPlt1ciYvfLq+z560y34sPc+VgmbDdYjuw/6F/7H5x76CYetg3F1C9sa0YEDJrJwkiDzKZ25pZPi5DlGgyiPevXH4OqdrWWDnjgpi1Bp3dCSRVrjBUQEIlIkjwpFZDm/KK/hWkZHQgHPMgXAMVOINdDQC32hAga+APmNsUjaSqnCcwc+N7dEfQLj4zVMTNRQrWbU4wKSpBXyHXk8nboRdeoUSFlQ4WIAQkRCu0UExrAuz3lDoHNxOkKhc177Qw5KcMxVMIDoowOPas2i1WrA0qlnnGIOg5ibq2y5+poHfv3OB73+OVsxeTtlyqDUwOmrAb5Fp2/je7V8Ghi69LKHf2xm1r4s9XXxNAyQjKx84cVDCCZ4a9cFnrHiVgNRxI837C5TxDUsICKscwUqt8grjLiGBU1D5VmL9egpu+UI71kHHWurmXKn1ECzCUxsqWJ0rB+WjjRzLViwvzwiVd5IDXbQS17TevI1d/08Q+dHmawbqklJye5Yi4PxjDKmT9CJg3ku1OfIqmaYTtTXaPy3XHDlVff8+s5deEXg3eTHvnmMX/KFh39tdk6+vFqZpNJqbHmEVFcfcODajy1IuQBKSHfQvgc47afvSrMb7AqZwx14fFd+Jx4yezxEWHUPrGVVud00TXejO687XvB00zSudA2PBeXrRk9+z/FPOdA8RhehX+TOu91KsLCwRN1lGN8ygIGhiE5V4HwbbZ5+6P87QZGlgKFT5xMi0iVego4BzhHqsCtjnagOgoLvM9uzwsR26ZxzKbzOdc7RNHOIbB+/9W81MzPRi66/5qFffOxJvGylTBkrNXB6a4Bvwendge7W0wDJ/XfgPY891nxX5ofEmDqceCKl0fABUKdCeC3Ib20abATKDAZGw158IrKKrHwFnHrarlyldyVXRfXX5QrAsT5dgOTZWkaRp1Y/RQyMiYJTTVmXGq6MDnvqyCJmpzLUuOfdfs4QjaqF5Q45y+ikuEOypgobGQhSgPopQE2huEQEIoVxVaoaTYXGuyFssekmhHIiWp5kOnMTDDPLMg7CGfYRhuVqbPuQ7D+QXnjZJfd8Yt+0fw5LbOq958nZV99y651vXWp422gCjrtFbywyuqDUpzBWoHPEZYxDkKvHMEayN1h76dh0Y21+zzSJRRkJyywLqOwueF1A9MDx8K3lWZsuZPei44Qv1YmBywznLeDo4JcWGtB/jrVWFYxPDGJouArhuLeTBlLvqGtBws9IXgyE/QfnQg6W9x70vcgvwyCHeISxwKqLRM6iQOKiApQl1KFQBujMKY3zCzC2CsMduhOgnfIdQIwsGcK+/emXXf/FB3/n8T3+1RwP5gZJ5aPUwGmrAX1bTtvGr2344/tx4ZVXf+m/ZW5kQjDMl7fzjqo1CMzqVNSJEctGZLUK+GIHzl6P7jwRgYj0YltFU6deoMgQkVBW5OhQebSeoozG10J5REQDiLGwNobyK18UVXkUD8xML+LIEWBwCJjcOo6BwRo8v6cLPCpRhM5ftLEdahSDqKMeInkdR2V0ETx16+mg1Vh2kUPU0NjmxtXBsF5DYx4yaHQBbYmFkz7YeFweeujIey+94qEfO+I9W4xNu0a3De8bHKhNzcwe4dHrDE8y6NXpQcLxLhz1mLKlWajfWt110tmyrQhtDuT8IR49PAzWXjoma9HNU+R10zQuIhDJoekTQSFTw43K9cr3HMhe9PXkiORtDPOPZY2J4KnPRTr1ubl5DA7WMTI6iL5+6pJO1nEO6sLVUcX6P3MBDEUb9lX1nIcSaILuq7tN3fEVHgOEMdJ3nOBYap7l4tXp4sF7WGvCyUu7nSKOhlCtbrUPPHjkLTfe/NjH5+YwqvwlSg2czhrgW3A6N3+l7TPej952674fP3QofWWrVQWkDqerdhoX8PLcF8DTimjIl91DHcpqo0G2cKvBUITEOo8iX0QgIutw0cZ4v5xXlFHCStwxqWDQuUUkyBSRDuXooCjPjTl3IDSWxiLNPIzQWdOpNxspDh6YQ2MBmBgTbNs6hrjC3Q9acK5Nw0bHbioUnE8BEYGIQJ2U5CT0vhzJXeDOC9QnicgNKgurYSVdhH1niCIfnTwNQwGAp6BopRY2nqjddvOu7735mqnvYd84gB2GUxw8fxQPvPc9b/61xfknZxqNA5ibneb33QzGmACwvdpsptg4C+EpjnAXD1A36Fzk8R10KBCRgCJdhOwLHRz1znmgcaVr2Aua1w0RCUkRCbJF8jAQOw+V04kWwapQ8wusylhOGMYKMKo3x68os34o7JciY9s8jCqNfRTuko3EXFQKddvgMbtDX1+VO/UR9A9EXCy1oDv1JMs49gYpFwEZ35yWtBkAABAASURBVFNdSIhQ3+wjeIloX7VdTPS49ZOOCe+28ijIxDEBa2CMN2kcO2MsstRzjNuwkcDEBmJZD2z4c7Z633a5b+f+d11388x37PW+D+VVauA01oA5jdu+qul33Tj97rvuevK/9PdNVix3fY6GQn+QBUT8nkvjQGOjL/tqAyWrZKxNKO9aWnda8wt007vjInkdInlY8PcK15YTWV2myNeyGtewxe+SNKc0qBEdNQKM0MEHg+VwYH8j0MbGgYmJAcQVhzRdIjJYW4GIBKi8Aiq3iG8UqlNzuuuiIfUQum1Lc2pZRAjPeMowpVN0gBpfGm4QaojFM4slODhcYhmIDEmWjfZddfV933ffI3id5m4GRCT5uq8c/OuvedPLL2s1DmJufjp8803aGSwEbAmfFmBMd5Ce7fZscx6yG97RkaVEFgDtA7mP91bdKgp+ja9FkXc8IftzPGyBp6gnJHo+TE/q+kTHueWoB8+5JNAFXNgNOwsjVa6fK5iZXgJ9N4/dY4yODSDiojLLWqSlhCMyOC5EVb/gQgIwlKP6P7rWo9tvAI5NQBiHLC+kcnzMvBhZKmybDYs1PRkAL0Pxls49SR3bPwgj48O33/nIx++/ufUDrKOfLOVdauC01IA5LVu9ptF8CeVLO/d+4OCB1vBSk8YlriCjFeEN7wxBR+M9PF0HeVk677YTx/iJ3Vp+I6wnTcv0ylO6QvM0VKyNiwiNnKDIK/I1FBF+j6RRVCMG9ptdSvU8k5kiBvMzDUwdBMiGbdsHMDJegY1SWDr9jDtjgWFeLh8neFE89P9JHSAqg5YytAN04uDFxkgGTeQ73Qr9d4WGNoJeXjwk8vAs630d3g1haa7ywksvvvsXnnzSv4j9FeU71RCR5oc+9NL/9cIXTNzh0sTPzixgYXYOGQ08QvtN3kY6C6POybMZgU4y54wnEBwI+6eNYzrMLZ1fayCGfewBsEyAlu+A/Q0xDQsooYgXodKOBfYxjGsvvqPlsL9rGI/m6TAsB3nftR7ndYHjYIxA3zt16oIa4KtoLnkszOupEPj5p47hkRpqfRaql1arxZ1zxsVlSsfqiWXh8Pq+EiuUXjG221eYwfkU5lkbuU6FQQXCPMdmWt2RG78sU9vobRtxLcL8fMr2bEO7Xdu646Z7f3rno/gG1i0or1IDp6EG+Eachq3u0eSJyfEvxRXJ5hcOI80W+X0spnFJ6EC0i4qikMDRQGfIX3Bu5IuMnqGIrGsYtQBffig0rtD4etD8AiK5XJE8LOgaOlqhAppeD459qFQqUF7dTVob06hapsFdD9gu9jUTHD48C9pOjIwAI0P9qNOgxnSkadJg32IIIjJLpxpawOCsOkk6/CLWHVpYCJUnUpRbyaV6wUy2js4cxaVyi7hW55lwXIy0YHgMutjKUKmMQcykefSRha/93GX3/cLiIibJtCn3ORO4+4MfeO1PVeO5R7hT9wvzs0i5S3cZ9Uedgc7JWOrPaB8ymI5OhE4e7HvRqLVjXdB7hSICkdVYy9ctT8dV0xvxrM0TyeWvpfdKr8h2IVt3sEpTBAIfGlcwevQtDhHHLstSzjkX+qZMnhPAZQZpAtIMlhabaDTa4FTF2MhQ+K4eWccj7wUeuWcsC4acE57vJOcUnM6NPC2MKrDm0sW4AhyZNVmdpAmh1THkgiNJaAuMoV3gwpH1JAlPCfg9v1LvQ7MliONRWVw0Wy6/8o6P3/8EXsM+5wKClPJRauD00MAZMWmFZ31vfdO2Pz/v/OrVlcqCm1vcQwPBj8dctauR0qEQ7kjBYzivxoYO06uVYO/54nJPJUdB+RRaVsE6aJxkGUYECg8DhVO5CqbU0RYgCQWUpvWuBtbkAzAChVhDN+IDVIamlV5ARJCmKQyNHm0VnEsJLRrD2CqcOh8ToZWkOLBnkbt1YHI8xsT4CKxdgI3aNLqefeqH2IoWhBpodcYZZRkTwfI/4w2MNgvaUwUTangzFqHz03xhHrSlbAzZQYHMjMAHobcDpA0XwHYKuQmhw0xoWKO4imbbInPjHLut9qHHmu/9wvX79N97Z8Nwyi8RSV/zKrn8/d/w0p+rVQ8cbC3x6H2uhYSnFnFlAEvNRTjTBKQBL0vUJR0CO2Z5kmBcH3UWY/kiHR146qUbeliiUJqGCo0XYDsoS9aFzs+1WK63R2Q93vXq0fejAETHqIMu2Vp2ObmGRxcd1lrqCMg85xLnLDsDp2+UBReVpInlCUgDC3MJ+uvAOI/e67WUO2MfFt1t6izzjuPuA7/hZDagTijPsOICjPL2rMtTviO4GDA6pxwrMixRJSy0vWISKIx4WDHQf9wI/KaeJg6GtsCaKqyJIRZoc+WRuCoqla04uB+vuOG6h/9wzx68CuVVauA004A5zdq7bnNHRvDE29520a+000O7jWmg3ZxBJRaALzQtALyzEBB0UhJp6OFpdHCMa62BXJsWEYjk6CWq4C/y1qYLuoYiokGAyEo8EPgoynaHIrKq/jxPQFsIT0MJGMTqLJttHDrY5BEnMDFax8hoP6zNYIxAjbKWAy8Ng0E1hvSUFL2LaSJUp4I0NewMvOPDUZes0MNRpwTjGWNeVyHMDreOQzcCkXbYe7Yjb4OeeNu4D5X6GOYXKkM33fTQ/7h554IegdoO+ykP3vz6ic9+xeuf8xfi57OFuSnuJttotj0GhoegixpvUnjjqSdDPWszBKojhYiFCPWxAYoGK393XNOKgrZeKHJ88tcrX9C1rl6AjiOhR+AieV3F+GtYlF8/9J0syUNd2ISYC0919iJCPVmeErWwtAQ6dcHk5AjqNUD0LyS4eMz4fUznoZ40pZwIjsUj6hfLFwlsZ5EU0fEQJknnvNM0oGkFeOX0fLHiOWboAaU7cKrzRMtwcVtFHE2Y3buWXnvdjU/+3KFFv52CyrvUwGmjAXPatPQYDRUR99qXR9e8/jUv/vOkOd12js6rtYTCoKhvceGFNyAvpTHFHTwjG969jGA3rbuwyhVdNBBYc2mZnKQGp9spaDrPKZ4qp4gX4Up5NUxqiI5Gwdsdqiw1lEnmMDO/gCn9+3Qa0u3btqCvrwYjLTpuWlluHS3b7bnwUURiYFSQqFN3rJQpGmtPqurSq3EN8Mp10mC1iE0MS8cp/K6ZugVkvg1IBdNTmLz8snt/7KEncCE26dqyRebf8+6X/sELXzh+S5JM+/Cr92YC/bMrnTteF0Xc2QkiOgQP53XH3gytUV2A+giJ43h4Ll5OFMcSe6rkqZz16toob70y3XR11prWY++FhQU4Bx67VzE6OspdsYGgzYVmi7v1DN4ZOlZhnPqWWF019GhdAbAg55zOaeFcVYCXCB/QeXgMHMUDpFkTxgIiwgVHBhsNIHN99v779737pusPf3J62o+gvEoNnCYaMKdJO4+rmSLi3vPOF/3tc84bvqndOOKzZJ6OwkF3Gl4MMhrU8OcyGY/jPOlQS0AjcVzST4yJbYGiu5QaRsVaWnda48qj0HiBQtZaujprRTddeRXabw3brRRRFMHwqPHggSnMzqpBBbZunUS15mnmmtCdjLUxRB0XjapQX4a7dzA37OKgU6UDOvZA17yigScReq4MLNvk0gzOZ4grQOaW0GgtIq4OoH/wXNm9u/Xqq699+GObaViffw6e/Ib3v/pXJibNY8YvYWbqCFJ+0/eOToWOw7Fv3DTySNjxTCeF14Ugd+25Xpi5wS0iEJENODbO8t5zbNbHxqWPndstv5hHGhYoJChfEe8ORST0T6R3qHLYhVDEcuGmTn1mZhEJ12zj4/0YHq6jynH3/Oyin4+yzHMuWM4DCaHXeRfmm4pw+gAzIIyZTp2MntzNxYHVzwVsoL4r1kTI+MmlVh3n0mG4dtedj3/Hrfcc/Fb2PTq5CspSpQaeXg2ohX56a9zk2s7bgoff8+7X/2J/rXnIpbNotxtIdBsoFsKXF9bTQGbwfGWPpykiApH1cTwyevMIycK2+J5gZqCLSKhf0woR0WAFNEqFY6HhWaEzRjsFRxtoaKgEdNZi+L3QYd+BOczOABMT6tSHefTpeOTYgEvbMDSeFhY8Z6aElduxWgdDrREaD6DwFZbjjmk7FVpARJAb8gT6f78zNO6G1WfeotmssG0X1HfeO/Wxa2489JOb9b+9FBH/mlfgsne/65V/ENnZRqMxi6xt0GoY6j6GGnsqBnoq4UWYZgNBx85FCKgRUC/Hguj860LBr3p4KsBxXiICETmKW0RW0de25agCHULBBwgQgJ6X8sVxR4fkUF3q/2te/3nYyABbtwxgdLgPlYia1G/ZSUanCs59G5y6F0O9a0HJQ0b19o5pgpwI8794D04kBBDZCltvoacIca0Kri0xv5Qhqowh80P9d9y1+6d33D37AfZDB50l1r3LjFIDz7gGzDPeglPcAKFxfv2rcN1b3vSy382Sg3NLjYNIePSuOwXQsVl16kZyG6AeLxjjk28EX3QaH7+uALYHa9GLuZCjoeZr2A2lFVB53fHutJbRvi6DO55qtY6EhrLdcqjX+9BYamH//sUgYuu2GsYm+hHToCbcNml5Qz0BhouBol+dUI1lKLXy0Lo3wgpnHlP5eazzzByXD4KK5e4ofEdNYdiYDIJ2JkiyfiTpYOWLN9z/fbvuzr6Z5U2n5CkN2IfkjV87+Bevvujc/2dlpjF15ACWFppwmYXnqQXzEYCYPoTKEi7E6NRPthFBlsjJFj9l5UQk71ePUCuhvjUI0HiBQODDccV4LOg7pzytVgJ1xMKFTbPZxuxsG311YGSkD8ND/bBWOE9bHPcU+omozbmR8rTIcZGZj0HuU7UNnJ06Q9mC9W+R9fsmkue12ymiqMK57gJsJYbjIiJzHGczhEazet411+78rQeeyD7Iejnw69dX5pQaeKY1sCnG8ZnulIgkb/y6rX/6kpeMXufSaRqHOWQ80ss8X1o2Tg2K0DB7fi9mcsObLzE2QlG4myfQaISgCIljP9hmFCi4Nd0ttzvezaN8ctQRcD60XgDn6Xw0QhOo/RaJsMTvxAcOOEQWmBgfwvjYYHDq3qUQD7bFwkgFAAUEOABEx6mruIAgW+X3Bgsd8xYRxHEVWSpIebYtRs11hkq9imarTf3Xpd0cnPjc5279b4/vwab9+nhYZOrr33/Bb73wRfV7rF3E0uIclubpYFrsG428cNHhOW8cTw90LADHtjHPnxi6FSIiEFkf3bxPJa7t7Qnucj0BnatrIFxqKX29/JBX9J0ylG9tHSojSRI456CX7oQ1VL65uTkszmeoxhZjYyMYpFPn0CPLUiJDm4tQ3TGrU/d07PD0p2yjiOrLU29eRfWEiAS6iJBvHbB/ngteDiPEGrTTJmC46O2vIvEOXPfSbgybRmPgwisvv+8Xd+/Hq4PQZ+JR1llq4Dg0YI6D57RkmezHwbe/8zW/buzMPZB5r3+bnqVtGgp2Rw0DDB2XgVnfJpARxzTYgWnNQ41VARFH8gn3AAAQAElEQVRZk3t8SZG8XCGnCNeWLugars0D+2hoIRuNJh13jEqlhkajBWtiVCt17Nt3IPzqeKA/wsSWUe6WYvY3pfHNnbq13KWormhEoVYvIGU1jtDb6OO40auNlagKl3qOi2PddJdM644uSVqsLUOFx6Be2C4Zwt596Qv+/TP3/MaReb9p/4es8yfx2Dd+8KJf2LIlvcO5qWyBTr3V9PD8ng7qwtNxFc5JRI7Zd+1zgYJZ00X8WKGIQGR9qKwTwdr6tC+K9WSs5V+bFlm/bSKCMJbtjH0wqFar8FwFugwwEjHuMXNkCmB6aBAYGqxDf0chJiMpQZrp++rpVC0y/ZNTLqbAcoDw5osrCoe1lwjz1xLXSdfr/eGdiKIINhI02gtIvc49j6jaxzbUAD+GgwflRZdf+div7D3sX7qOqJJcauAZ18CJWeRnvLnH3wDh0fsrni/Xf/3Xv+5/ixyan599EpHhS4oKXEJjwt2gtRbkW0a3dO9pxDvopmt8dRlVoUJzjoYaL3UC3fJWxekgQj5DeMpZAwHbSBQ8Km8VnKMDdsE4qlzQDeZAuDwNqH7DTFmonaQQE9FICY8SUxhbwf59h9BuAaOjBhNbhml0WUwScB0A3b0Y8gMm1MEVECAZj6BpRCnXhjwc15W37WhWnrLDsh2ab1iphhmJJo7o5BPulJrsUYYktVxwbI8efWz+rRdfvOuj5LNHS3vqFBFxr3w+Lv2GD7z6Z1utRw40Fw9jZmqGn20iwoa5wmZC+07VH7NCygtlNOxmZvvDmBW0In28YVFOdaayCxR0DVWWht1QWjd6levm75Vf0DQs5mV3GY1316HOUmk6rvk7Zzm2HoKYITBF/eo/fDQ2pgvLIfALEedYOxy/69+NZ3xXw6ePrEIxEbRecFZ4nzDNuch4ns5C2vs8FPEhrXkFNG8ZXDY4fmaKeULg9GRKBBGdui4nhGHehyrn/gC822IfeWjh7bfeeORnZ2f9GAWfSXfZlzNEA/QgZ0hP1unGRa8fu/xlLxm90dpZPz+zD7EAFWtgaJXVwBTF9OUt4t2hCAt0CCLSMSY5QUTyyCY817ZH5Oi6RI6m9W6KCe0WEYaGLJKDO85mI6NTPxwM63nnV4NTtzx29GrsuAhweiSp3CyrRlGP9tVQavv0F8mgY2f2MW8RYd2ymk/LekNjKVB5wvq0Xo1z7QWIgxraqBLDRDUuQsBj2D774AOH/tMXrj/yfvJF2IRL2MHnvc5e9Y53v+yfGq09icuWMDczj8ga9sFSVxnbxbZRN2xDaPt64bGap7tjxXrl19ILed10pRVpjRdgP4roumFR7nhDFdTNq+le9RQ05VWeHDr+ClCPQlgYqSGlX56bWwoLy+GhKoYHa1wwOViOruc8BDg/eOSepuDCzsFx3nhDGidJUQ94FfEiJOkYNxcDXKAa1iHLnEWM9TAqbEQ7sRAZRK06iXt27nvPjlumPsJ+1ZeLlJFSA88SDZhnSTs2rRnn1PHku9/9ql8YH04fMm4Os1OHoQt3Yz08aElYM19OPte/1UAoujnWpgFVZTe6uRn3zOsGSce617ZL6+zGRuWLXcgKD+vvtFFEDVQO72LMzTYwM9Pm7gTYsqUPA4NVOqkU1goMYa1FTNB+ku6hl2hfXB7X9PGiaH/ObyivaFcGSBvQH5rpDstTNk8tjDFot5tQx+4giOJBHJ5Kz7v2uod+6b4HsWnfNM8Xabztzc/93de9bvvlS4tPpK3mAuZmUmR0KsZEbFObx8P0OGzxRreOoWItj9IUQNH/4wu9OrMeWCtHxEKItfSj02tbtjqtbVQUVI2vhnAMu8H3yvcAx1LL5XKEQQ7vDAQRP/00sbjYQLUGjI0PYLC/ggpX347e3vFDukscdU8nm3Xq6tKbsJ/dAPM0reHG0GZwQHkiBd3l65zmItfo5xXKYC775iHWhFOtDFUsLJmRW+/c9XPX7Jj7LvZHjwyUrcRGGijznjYNmKetpmeoIuFu6wVbcfO73vG6Xzb+0JM+m6bxmIH+iRREuDb3x2wZX9yjeJSmOCrjKRBOhTyVoTiuZngLI1XuPPtw+NA09u9P6cyBbdvHUKkCov/YC1c/hk5VITSc4YiVDoVqhULr2ghY5xIRlqdxLvK5G9eVloEn3UMXD4oKd0hJqx0cukTCBUYFUTxsDh3OXn7J5+/+/r17/QQ26bpwW+3RD3zwNT95wXPiO9rtw9D/T0Cz1WD72ErqwDvQ4LMPvRxYh1Y0TXXUKy6S60Gkd1iUOdFQ61OcaLn1+FWWYm2+0pyjoyU0ruhOr+Knw9T8ZdDJZ9SjRDEElu/lEhaXEtRrgvGxIfTXYljOvyxpcgGlizoHEYHjvM24mNQQay6RXI9KFhENjgEf8nWuKbewjYBZnn+A1ukhkUWbC4uBgQmeFEVjN9zw0H+/6358LfsiQUD5KDXwLNCAeRa0YdObICLu7W8c+vSrLzr3L70/QCM8xd3AHCx3ncdbOV9clvNH4XjLH8WnhkOxJkPrWUPaMEl7h27QPqIbjkuWAO9pCFfDk5GfEGFNDUlbMHVklkYLGJ8EJiYHacqWuCtqwPP7IthWQQRLGJajSwM37wiV48Qv7aeeIgiP92H1pMQtCzEeNKlC2PCDuUqlBktnrsZ1qdXkHj6CmDF57ImlD19y+SOfnPF+FJt0vewC7Hz/N77mN4ZGF6aSbD8WF6agf/ZXifvoZBwdjN0QqmPtjULjCo0rNJ7rwWO98GS61S3rZMqfaBkRoQ6kU8wwrjop0h1yEXAeeTryAM9+ky1LPayN4BwwNz2H5lKGgb4YY6MjGOBOHdxBt5NFZK7N2eyhf9KWZKzDxHCeAjqyRXrHO9nrBFpGsZItnH/CdmpoDWedbyOueBjGGzwpsJVRLC7WnnPV1V/6Xw89hjdR36sFrIgqY5uvgbKGLg1winalzuCoiLQ+/P6X/cGWiezahaUn0mZrAWpAno1dpoFYNvDavu60xpV2PFDeteguR7sFSMxvmII4rkH/Vn3v3lkeLwL69+lDw7pNpxHNEurKwHA3b00dAsv2ZfCdTxY4zqu7LaGIWkxpATTYIrSJNM6iwMqVtjPUKnXWn+8CDXdKGR0CMACXDQ7fc++T33/lZ/b+GGX3r5Q6dTER8V/7uoGL3/r2F/1qJgdmGq0pzM3NBZ1FhlXS8B+rNrbtKJaCpuFGOKrgBoRCTjdLQTvZsFuWxgs5GlcYejnqCL2gecpTYG1ZpSuP/s9RHF/GyFa4SEoxO0P98iR8cMBgZLgf/X0VWK7yMtdifpuLzgyZ4xzkfASEczHMZHRfverqzs/jBsLjdQXA+U0xwmUsXXieHZ4eIkCrvQRbscwVZFmMSm1S9h9ovfK6L37pU0/sxVcH1vJRauAZ1oB5hut/WqufmMC+d3/Dl/3IwFDrHjEZv4e1sLxT0N1CF0SEL7I8hfapahVPQQSLqmFisOpWmmIVcU2iO19EIDSIitVsBvqPamRO99sRjaTB9PQ0Dh2ah7HAuedNYmi4TmcfhV+8g0bUSAwRS2fOb940bwjAupe2o8BRTJIiM01k/Hbu6cjB3T88d990ksGwuoxLB4s0ddBdnBp/a7Vuw7ZaJGkFWVavXnPd7d/1pYfwFtYjR9VxCggi0vy6d078yWtfN/kPNpr37fYC5ufaMNSFZ1tZL9ZDUf3a/IJ+ouFaOd3pE5Wl/Kr3EwFgWMywv9KBZ7r33d02jfficpxJMMLxBOVRulSQthwW5xYZAkMDMUaG+9DPUMRx0dnimHuknLNt7pb1/e0l97hoHDv4KiuOc3bOR4MUEuAg7JpwXloh1SWc6RmiSoyM5VIXo17fIo88fPDFt932+M8dOOC35kLK5xmlgdOsM/p2nmZNPvnm0jD7N71m9K53vfW1n1qaeWzRtacQFMBvcrlUB0+joXAMFSwDhUHMFzwC1OmwlGdM+cDXPAcJm3SrMexGUY3SNK7t07AXeuUpLYfnzpcGTIQ7TvbIxzDc9czOLGB2tonhEWB0bBC1uhpwOl/u1PM6DYSu1pgIgCGK2zGyFiTxNp4P3uI8DbeH0FmrLOMdFBoHd94aFiATKpUILX63VkdubBy+s+pfJ6hzTzNB4qoQO3rep//pml988iBeybLCak75PS4y963f9uo/7K8v3Wow55pLs1icb8NzPmSwDLVKB2F/chgIF0Cg8dccnSs+RAyUJkwolKQQEYgcDfYn6KsIlVdRpLtDpStEVuRoeiOIrPCKHB1fK787XcQdP8k4x3fH52OrcUWRX4RHt8MgS1JU4wr7bumsqUkbMS5hnGcXZhFFoDOvYWCwD5afXTy0ngwqP/zLc/pnqNxlO+rZc/7kdTgGBRjVm/kooOkO6K/h6bA7yRBwhEKoDxHhAiLD4OAg25ewXU1UqnWkGeBRRb1/m7l355633HbP1C+V/3c21ViJZ1ID3XP3mWzH01r3179j4h9e89K+P4mzXa3GLI0GnTVPDukcGsj4X1SlE0kbgKVRkAxCQyBckRtfgUK4Q3XB4Xs4nwbo92AFaHBWo+iaqroXivz1QxGBiPRk8HSojlYpc4BCjZpC6GSMRBCR1VDPyrajg+BoNE45oEP3SRXNRWB+poHZ6QyTW2qYmBig4aJ8v8RdcRN6ia3B05iCdXvWrX331J3h7sagTWkp4VhNRp0BQj6jgLBlHkZ8CEUXU9xtqRNER3ceQIF21oaNDXMypGmKCj8NxDaCdy1UqxawfUhlWA4eMRddfMn9v3pwFs9j8U25z+vHfT/4A2//bp/uvcdmR/z8zAHMLTZha1W06NDUsVUrgOFiRb9GGF+Bc4IwPtRNxrnkOR5gzw3nlPGgXohAQ89LRCCygoJJpEOjHOkArIuVwXMiKDQuRR1FCAe2aEPo2PRCUa47D5SHMH8cwhzwGYSViuTtK9qrofeePNIFD8s5mrYzimGcpy/qqL0RwBq06OwPHpmjAwVGR/vR11dBNRZ47pbT5nzoZ7MlPIav0elWIaYKVo4svJMJ45Sr7QOgel8GDKgO6Nx33JUHkOa4OCsAbyiKdXFyR1xVtBptxJzz+vlH22tFWI9FMxmAt+dVbr5t10fuvL3xI+xjzOrKu9TA8WjglPOYUy7xNBAoIrPf/K1f9Tujg62H9Ffvi4uzMNRErVZjaDC/uIBqvU4joQYB4EvagcYJV3TShZee8hCMGg2b8uJZcmlbjgVH4+fpbLTJxkTsPz0SHXtjKcX01DzTwOBQzB1SjChOYDu/fPepmsSIxag4Pos7N+qa56izDMIM0WR3yLjeSvfqhGg8NY2O8c3j+dOFtrk8seqZ0xws2llEpz9i79259y3X3/DEh7zXVcIq5lOS4Dhnr3q+3POhb/ya32s1n5yDzHHHtoSZ2RSGE6jWVw3f1yuVCvvuQX4I2wc+wU8J4OV9rhdGOzedS3B0vpNeCTzpK6kTj2n540W39O4y3fQirvlFPMx7TXDuLraHuwAAEABJREFUF3HNL6BZG8Gw24puHs854ZHPK65NMDPThOFUm5wc5SIuhvgEER27LqA8505GuMwgzTz1LmEsdDwQLheeax9eJ6YSucgC2AiNUw460LFT0jI69JBfEEnzpk6nXkFUGa/vuPn+7772psY3su9RwVKGpQaeTg3kb83TWeOzpK7t2/HE297xFX8o0YG5zB3yrcYSTW8VzWYbA339PF6jkRbLVTgbHIyVrvgJvvx8YWk41HgcbQjIvZynfJp+OqAGSHGidQkNm4jAs4+OzlOMhZgKkjYwS0M6O+vBdQ536UPoG7CAtJC5JhztpNDwAsUUMp1+C0CaDxazyCNpza26UawhLyc1T7FMWCciHCPdEHuGaTvq23HTYx+78ea2/qMz8TpFnjL5a9848pk3vOllf9NY3NtG1uRpxiysAItLC9TRIHRBGFcFmTSpS84RT/vuqwBPeSBULHWofVNnlIcs3NGZ6q0ASCvQi5bnre2O6lyxlt5J0wmtckoF2fvO+K0OO9lHBXm72bdOTpFeG3ayTzjwnD/q2PX3E0tLTe7CwR06MDY2xm/XdXhknIdUP09w1LGnXJgmnAhOmyQxwJ1/iAcdMuk9FwIeYElw4SgaZSrcEiYz0AnDb0068YJWhGvzLD8D6OIhy2I0FqPxu+569Fd37sTbqAdBeZUaeJo1sOrNf5rrfkarE54LvvnNw3/7+tef+7et1uMp3FIwzEP1QbgEEDoIdVqgQdB333Nn6sNq3sGIQI9MoRtBNZA4fS8RAe/QgSzLaNQFlg7dSB88v03u33cEjQYwPCyY3DKESs0D3CGpA/O0g7q7ErEQoRxYAOrYJYSiaeqHxg35xbI0lLqLB41qTlt5Kl+BFerqWJG/EgrrjpClhicJ26SxWD3/81+4/WcefgIvWl3y1KWGhuTIB9733F984YtHr1iY3+Ni38LC3AxtvoWjI0JkeeJOZ+Pb7GUWKtb5oi+bkALOI0c9UH10L0oNLD0fRT97ZpJY5GvI5Cm/Va5iPcHeCTbMpyPV/PXAGbdSnnMFnD+AAAEGznnuuC3m55awsACMjAjGx0choguPjJ+AGsGxq1PX9zXL2B5+wvHOQoEgD+Dg5FD9Y/1LRNbP7OSIrOaxJgr/yt3IyDlmejp7/lVfvPsX9+zBCzvsZVBq4GnTwMbW5GlrxjNTkYjMvv0dz/vV5z6numNpdg9ifdlpf7O2pyuiQaCjAnes3tBI0ACD39tAYwyaYWGeZQkEg6FqXA9F3xwjvUDyJtyFAYVnuxTr1KEGlTaZuR6hjCa4oxSpwtp+tJopDh2a5nEmsHX7AJ36CKoVgRHyOwcRS10JYQgLjSnQqVP9m0J1Bl5aB4Nw6y5L0wUCcc2jyCvC1dmG31HBOrkj4/fPpYZDJd4iBw+lr7riint++vCSP5flBJtwbdsmBz/8za/75JbR1h2Nhd1oLjSpK48WN+BRpYrMOLS58GH91Cu1zDi9E9VgCJ1bDCRf4HAennALc7kcA/ZO9atwnJcKjR8ToO4I6DitgXAkCxT5wXGHuaHt7wCdq7s8ScttozNnsnOzjNbXSa0EDrq4KcqE+pRPZXJkRdsiwh16G/PzS0hTYGjIYmx4CNWapTNvIvVNhil0QZqlgiy1ABfbxsQI7WY7dBGp0HmbQ2AoFyd5iQhEBC5DGFbD92VhMSNtGEcOZa+++ouP/MGeg/7VJym+LFZq4KQ0oG/ZSRU88ULPzhLnjsvu93/9V3yqWl1cSNtT3KVPo69a44o7RSWKQqO9AF6E0JAWBXRkanBoNICNVeiDMaHhXScMFZzCh4ickDRHp6xtFBHo0SF4kUQjxf56QbVa57f0GTr1KVjayQnu0geH6tCFjf44STx1wbIiQmNmCDJBL8OHggFvrcPzmBTUnSKPM2PNHfi6dLUm+6ikp5Mx3CElbUejHqPNnXqlOhrfd/+Bb7niysc+MQeMHlXoFBFe+Xzc8W3f9qZfrFVmptuNGczNLNCBGCTcHabcKVr9H8wghSdE9NjHsWadUxFpgH7mIOGE7kI/GxUqeDTciO9k8lSmIpTVdyBETt1DZeuYApw7YWFp+fkn49yMoA57aqoBbtoxsWUAQ8P9iLm4BPWbZUnId8zMMtDRRjBSYcOE0Ft1r9B4b4gUvL3ze1EN557nYtJWYqR8cUSqsPFI/PgT82+74cbdP33kiB/qVa6klRrYDA3wrdkMsaeXzIteXPns1731lb/Wbu2ZM1ztN3nGHPFF1dW3p8PwdGyOOwUHqksyQHfq4MuvebQRmq+A5mPtxTI96TmfltsIucxCxsahSOFMc9mrnmp8FauITLBvnn1wEIB9hhFkJDh2Xo0rWMaQPj01h4MHFkEfhS1bxjHYH8NGDp6Hy/AZRCQAEOT9AUOP4lLnVaSC3CKjEypN0UkuB0pTLB+ZhpMSh5CGXqyXBlUdaLVaRSNdonkXGv1Re8P1j33krlubP8DykXKeaoiIe+OX45J3veOVP1WJm4cMMhyZnqf+YjRaDjauQwydEZ25aKs8W5BFVFeFER1LBrzZvlW6IincSg8RPjSuYPQ4b5Vvglwtdyx0C+3m7aZ3xwseEekm94jn7eiRkZOK8cxT8MI2K3RedgAY/ifwdJjNZhNLSym02qGhAQyPDASn7piXdf69gpRrpyT10DnhWVLVHsSLxlyIrn2IyFrSsdN8NwCBtRGcS1GrVZGx7RmqEDOOe+499O4dd87/1mMH/TaUV6mBp0ED+rY9DdVsfhVPpQbh0ftbvmrL/3nJi8f/ZXH+ySxtzUG4zHc0EOAL69Qo8LucYzyD5x7TAdwJgHTByqVGrkhRJhRF+pkItT3HQr4rN6A9hDrivJ3sH3spNIDtdhsD/SPIuPM9sH8GaQqMTwhGx/pQ72PvPQnUidaTl9Unja/3lKfxLqjxptzcGWu+I4+Gvoupd3S1/BUe1bEa80qlgqVmA/qnhvrjKKBfknRk8NLL7vje+x7Fq1leVkqduhjrT9/xwXP+8RUvm7x6YXEvsqSBmZlZ1GuDPIKnZ9GqQr8B/Y7Op1LYbyDMpaCnvP9sI+m5PjQeGPnojjO56t4obxXjMRIqpxeOUSxkUwchLB5r0wX9hEJ1loS2KY6rnHcuHLtbHhPpv0swP99CXw0YHKyjWq1wBmacw46gXjNPfuT/tgLf0VznNHVcIORt0Pmdx/T5VNqbceGg5fWEYKm1BCesl6czzWbMdm0fvO22x//LnifT/8p+sLVaW4lSA5unAc7yzRN+OkkeH5e59737y/5oy0T2YGNxr28sTKFOJ6H/Y5BaTIMhlsd4gGFYq/LbcqsFs0Z7+mKTg902PQ2z5ivIEG6+5CHc6KE8BTbi07ycTxjNG9ZdF4n5TSOJLngaOeWzPIEQLlJUhjpyWBpIOESVGAv6t9ZmIOws9+yaDT8avODCOoZHq9wd0QHRNTl6+ogKqXKXrIsEB+6q9JOFpS64688rP/qpdSuOzkFYEOmvigNE+4VVetVvokJTrkf/GgdPToQnKI60dqbj1Y8jh+ML/vVf7vzNXfvwEmzSNcYF4Yc+/ILfeMGLqjc1W4eStLkU/nwt5smGiHAx5GFNHcKTBG2nWFCzgLUxRCSgu2k6Bt3ozlsbF45bGE/0vkQsJCCvRyQPC24OPzaC6nJDcCWoC6ru9mocHH+FxjdC0Q7oHCFEBCKyTNa+6VG74dyK4xiOC+20ndBhp9Rxk06zgqHBfvT394e50eJ7qfwqQNuV0bl7z5TqwBpG8tuQphCRnHCcz7V90bmZ6pGABUwk0NMtLxGbXUcrqSDLhis3Xf/QR+7emW7av2R4nE0v2c4CDazM8LOgs8fq4otehLve+Y7X/lGS7mvGcYKZqcN06lVkmQN4pGaMoSEBWq0MJrLQlxmgZaBgEeHz6FtkhV4Yg4JLZCWvoB1PqHKOh+/EeHQqKFgq7CgzqINEuCIIjxHhq1haTHDoYIIkBS44bzR8x6xUDIwFd0cOSZJARBCML409T+8pgfoLMouQJGjfFRrvjbX9XJsGZXqfcAQUbBDFeDFMG8aEywx1mMNm797GG77whft+guUrzNiU+4LtuP0/feuX/0itNn1Pu3kA7cYcGotLqJgaoqgWdouJ41yh09J2i0hwQIC29eSbxD4FOUW4VlJBXxuu5VsvLSIQWcF6fCdLV6erbSvC7rjSVK7SQuhynXFahd26Om9Qp33cqg8PD6JSjYMulFedeoOfznQHrdAyXlcuQd+5zkVEWU8IIl1lOP9Ewc8qIn5ZT+DLIMJ5KHToroJ2Urvgxh0P/tquvSh/JHdC2i6ZT1QD+cw+0VJnKL+ItF758vqfveGrn/dXPHpvwzWgu7+Ux86ZayKKDQQVuEwQ0aFnWfsENGHI2wskn8S9bOQ8d8jE0SLyutgnbATdpSjy8o6BwkOdDriP9GoEvYX36hzraNNvHjw8w91RCwMDwNatY+irV5ifIHMJnONCAAh1OlpRbacio5tVePCSjlHkSYHmKUiljLwvmvZ0x3kb0KF32kU5pJBdJRH8Po3Am+Z8/DTiVS4NrJbP2N4s64tuvXX3N1161eGP7fe+n4VP+S206Bc9D7d+5D+/6dez9PFZyeawODuHhbkm4PSbagRjbdBLytMMT90yI28H2wvCq8MiNF6goK0X5gL4ZHkts8znfdAHczp3Ph/Q5dA6GScUsJ/H4C/qWY+tyNeQPCJhRBkL7dWx17hCRJAvmhHyRJgmlMfxqDtpplicX9BhxmBfhJHBAYRfvmctLrypdwpJOR8zThPnPN9bOllErM9A1azzEdB5dWLgUHMcfQB4KgSeCiHoVWXzXRHAi2ftHlFcQ6Mh5tAh92VXX/XIbxw86F/AjPIuNbApGui8VZsi+7QUum2bLL7nPS/5P+eeU7s7Sw/7dnsG1iQwXIlnGUNjYHlUGkUG6nQ86et1VA1PkafxbhR0DU8WKq8oq3FFkT7xUI0aS63qD/tIyydCI0XHrmElrtNYZjzKnsXBgxm/p4Pf0wdRrVgWTqH/TKaIkCeFnmjQjAZjzMzVtzqgLkqvtitN0cUWokrLoSZZkZDuCN4+Aihbj7Y9v+973RFzMVKrbhv8j8/c8Ind982+m1ybcouIv+ir6pe86x2v+D+zRx5eMH4JzSV+14fJdUHdOupRK+fpLMBTH37HCPrR/ij9RHGscprfC73qKfjW5hX0Ilyd/1RMiIFwblFvOApcZQqxti7hJwZT7ICpyyV+DpqfnQf9NkZGKxgeHuB7mXJX3ATZeOTtkNH5u8wAXJgCAnA8tC+OC04m1r21TetmhgwHoVgRoVRDRJDl/tCh87OVzr8oHuBCd0B2711603U37/2Z8pfvQXnlYxM0YDZB5mkv8rytuO8D3/DlvxBX5vY2GgdpCNqIY0sn1abxpQPxCg9D566dpR1n4FZBDQYJvFXFG4Esp/DWehUrIou6VyjdMWEih4OA21mmw+hNCrYAABAASURBVO1Zjs4x407PWEsSDSMXNJbxOKpjqemxZ+/h8H/E2jJZwdZtW3jkqQbNUy8q0UF5QYdKu8vy+e2ZUACUH5DTu5+r27+So3RFTnF50NlhKT0g7NAFYdvG3ZPXf1eepylLS168H5747L/f/LF90/452KRrUmThQ+9+8W995Zdf+C8z04+5NJlHozmPdtaA/liP6yPEEXfsdAIuzZ56Kzr6pVqxCiqZdXiGvWHgg/6LcegdehXa4dP4aqhkVtDJRwg13QuF/NV5IgIRCxENFZ7x1QDHOIyt9yxsIHTq4PwU7raFof47682lJjjMGBmuYnCgBuHiqdmkzvkJKE0dUp6qOXXo5BcxAOuECNa7RNbPWylDOaqfgAjapgBl4NwDd+6etgLBTvRx3Meq99677yNfvHn/J494P6RsJUoNnEoNcEaeSnFnhiwRca+9CJe/5U2v+L0knV6YnTsIx90e6TDWw/FFbactOndPm3A8L/5Getl4CLz3GxVeN0/L5fChnb3izIBQvHjH0FGWZ+gZ6m354HEoPZAuXAyTmWvxWD2FMRH5akjagn375lCJgMnJKo/g+2nUMor1QS8eLoSilVDa2lv1WdDWixf52v7uuKa7AVCPaqw7TEWe1q0nK7ZSZbvqOHAg+ap//edbf33e+y0d1lMejI7KzLd862t//YILBq6bn9+bHTy0G01+trFcDGll1BB3lBn1mLdZad0o2q5hN/1E4+uV79Z1IbObd21c04qCtwg9HZnSTwUcd8vd6Ja5Up/nGHqQlaGEUMQwdDzWbmBpIUEUA1smRzE8Mkh6Cv2WnqZZ+A1Dqjt1Lvig80QEOq/R4xKRo6giApGjAS56A3T+LZdy4AsCcP7zEdoQV/vQagmiaMTe+6U93333jrnvYh/55ihHiVIDp0YDtCinRtCZJkVEWm98y/inX/XKC+9NuMtqLbb4ylqA32zFtmlQPJ0bOhdf4E5sbcCXNvAqnTIhlAI1hCyieQiXDsP6UMMJLdcDmqcIYk7qwYZoOS5SwF1NiLJ9wUjRWBkTwXEx47jTlShD5tvIWERQgzV9mJ6expEjDViapi1bRtDX16cigrHMuFBQo6n9VqL3XoNV0DzFKuKqhJZR5MSw4+kYypyiT+qOCw/Pdnu2NSxQ1HDDwPFYO65omEC0L9lg9e579n/oikuf+KCW3CxcuB0PfOQjX/M/t26zTy7ylGdhYQFtOpaM7QN1nbQzRPp/B+tqgOpH0UUKc0dpx4uVstQJ+7+SBkQkAKfoEpGnLCkfM+nqZ8b40dCKRJRvBWD/vLOIxCJNUywszqHZTFCtAiMjAxgc6g8zhRt0tDlpW0mGhAn9ru7gVeRxQUTW4TMQ7vrFx8zPeYSnXGwh03xJ9OkcokoFraQJfUk8Yr4bg6M33PjQ/7jl3vYHOa5amJzlXWrgqWvAPHURZ66EbSPY/a53Pvd/jw62n0ibR3zWXkTWbtHgeJg4gugZX+j+ajXyJQ3U7ofQ+EAv8eAGAU484ZRyXOgls7vgevlK3whBBtsSwqMehsbHhB2GyoiiCJa7TN31ZBnbnwlAY3bo4DQNKbBlAvye3oe4ksHGjj32hBAxRI9JGVMDDg0FnavQnYHIMhFQJQUOmkfvQ6z7oe3x+mO4biIcwEWJ0kM+y1l+259dmGV7DI+8PSqVIUTxWHT5VXd+z633Lr2RfF2V4pRdIuJe/TJc+9VveN5fDA60mvOzezE7zU8UdDxxVIMXWdN6gXiCLZBOPxgNfJ68OZRCsI/KIxpdoxr2J8zPIiRLz1tEVuu7JxcCj0jOKyJ4ui/dtWtfRCS0xZh8nojk6dAeG4V5qk59aWmJczFFZA2GhgYQW8CKhzguErigUp4spfbCEbyBo0P2q+ajo8gCjC7fhrECjC7fStOE10cXlG5Cu4o+OO85njHmlzzbNz551VV3/8quPXhHV6EyWmrgKWlAZ91TEnAmFxaR7GXPxT+/+92v+GTFTB1pzh+CTwysq0NX+WG3RQXoZzJ9aUFD7I2Ho8FVIwQaCkOIF2YJuGGlEc+YnyDTXT6/s3HPC+VVUFTPm+0IxqxXpohnnoJ1dBh6y9KhzuHZHoUaGAe217N5pOkPtrywnUGUGrUUAofIWPbCwqcG4K7d0oBqvVpdbEewOO+xf98M2gn4LT3G2HgVxjVZJuUCKGU8hvUVxMJdfVylY83QShMYLoi0rdoWkLsIVW5OZ8OYEDFgN3MwTYVB26U0GIGnvh016xUcjBA3KUWSwh1Stc7jTsc062s7z/orELP9NZ/+9A1/+MhuvFxFbgZEJHnv+8/5P696+eDf1aMjadKYQmuhjYR6ymwF9CnUrmd32E+eMBguYoTtE/ZBdKdnwfwIGZSXJyXstfYVzKMrguGEMiKgdlZB9bIC5qpcAqyjAKuAp25yPWfQmgrkY+sCzZOxGwVPEYoI+YBcTqcvpIgIjDFYuXJ5QB5qHYpC9gqfgQg7zh6BMCaCML0if3VbvYAnRo5zgBHytVstLMzPA2z3lokaxsb6Ua14OM7HJG2GnXySOO7UqVdfhZgY4Pz2MJThAK2aEKMtchARRphQ/RFe+QgY0o1nv9MAYb8CyCPUs46lgoWZz1JcWQi/BzgXIY4HsdSMpNXqf8F/XHLrzxw65LcrX4lSA09VA5ypT1XEmV1eRLLXfM3Iv7z0hWN/a/yMazXm6Lha0N0q8wC+vIUG8qhj0tEQ+AAmILQSgRfdl2dRH152NVaaU4QaL3B0uSInD3uVyXNWP5WvwEoOjRgI2iYvfLClBY+nG4E4sioYMA/LYIweQ0SQ0cn31cf4DbPF7+mz0GtyyyiPO+uwnF0RnajS1Fm7zMDRi1kTw9DYtzM6WdaPAOVaizzt6bjyWP4UkTzCZ+4QPGOOuszAJ+NgnLGiHPlFWIZGWMcodZZONTbtVv1ln79kx69MT/tN+5HcIHDkP3/bG3/+wucM/nVsF5LG0jSmp6ZhbcyFhaeW8zkQGr3m4Xg8rw5c26yj4IX6YzfQ0Zdob71fU2p10jN/XTihno6uv5t/tbSjUwWv5mi8CDWu0LRC4wqNKzSu0PharEdfy5enVTPgzLQQ6gd0qI4LlXa7jWbDYXR4CAP9db6v1JpwfjBP/62EJKHuOf1SfprhYROYS4fOCcvYypxiYvkWxgQiOZjIb31HFByLnADyWKy9tE8KxzZ6qbKuCse+jvmF6ms+e/kD/3v/jH/u2jJlutTAiWogn8EnWuos458UWfj6973ijycm8UjmD/tG4xBNqsAlcpQm9KX1JOtOPUBoMPWFJ0QEEpy7vvDCHZZg7RXKdxnhtfknmi7krVcu5KthJ0Bj2A1Pmmdn1gLsvQ+GCTRK3DGxOykN5JHDc5ibdRgcEGzbthX1egXgKYTX7+/ioU5cZYlYWB7dq+HF8uWWY90RbV+RpgkuohCREC/yi5CunE4ql6U0hTKK5PwaV2Sp5y5N7AP3733HpZ+/57vJFyn9VENEvP4PgL7pw2/69f6B5j0uO+TbrSkkzRZPLLhDFLZLd3qcHxnUOTPNUxDPRQfbBAFPMqQFUI/Qi0fEYD44VhwapbC/nGNey4YkRCgjjy7nqaxeyNkM+eSkAc6HAj406mh53fkFT07LW7D22autvWginHydwiICEeGiEWjpTn1hAfo9fWBgAP39/SFPnbl+MnI8sUmSFsKnI50ubLfw3QRDbZ/Wha5LJJfdRQpRkd70kMnHWjkkhVuE5RCznXF19+75D197zeM//Zj3tZBZPkoNnKQGzEmWO+uKXXABHnzPe7/8vxt7+Am4WWStJl//jvq48/MK77lOzw2rvsgKkAJRmodQa1pCuCuwfJlFjZFXCjNO0Z3XeXLCtOxG6CVV2Hw1nnFUhzU1HNg/xSNPYGQEmNgyhij28HRKoMOKIjJTiKcBFRHqj3mkY9XFTE136J7MnnrtduaarRARDeiIfAh7PbSsLhw0VBQ8IgJ1mjDDtdtvf/S/3rBj6iPM5wqk4Di14atejEfe+Y6LfqlSm30gTY74eX5P1z+1Ah20N3RKVI3XHSSr9apUIY1zQ/vtfQIJesjYV0sYLqSYQ704gu1mKZBOfTIdEp2H9nMjdNhOSVDUcyLCtO2KEylzNG++gAD1BUjQQ5o4tFspFhczxDzuHhoaQq1WA6DzS/WUheP34Nx5coSuRQno1MkY7pU+eaYVDPQOdWnk2ND+KdZyikSIzBCsGbUPPrDvm+/9wu5fnvF+0/7vgGvrL9NnngZoRs68Tm1Gj/hip294XfWzX/1Vz/9blx3wWXueO2wE46H1MV8DpiUYWy9gPCNNDYiCUdAgaAaNjjgD4fc0KwKR3tAS60ENhGKjfM0T6S1bJKcrz0YIDqPDUNSnoULJIp7fJ1MYU0EcDfLo3WP/gQaaTWBsrIJRfsOsVIU8CRyPkCMx0D4bqkJEVAT0WFnVogiEHg+yQwGoLhU5k1cHxjagA0OZijwX0Bo07Sm8gIiFCNsEi9T1odnuG/vClbf9CL+nvwibdIlI+v63T3zmrW97+W8m7X0LFZNgaX5BTwl49G7hdAFjE3jSvXi2j/NDotAa7YM6dJLDnENwJibkFY+gh06iO856KUvWRZCl8rog1EuBXvndtEI+1rmKfA2VRUNFEUfHkRZjU6SLsKCvFyqf5jlOCQ01DQhA6EJudnYW7XbCnbrF8PAg+vpr4b3M9FfnLuMpWwZOS+7qqU8urkLf2CZRiJDXB0DHRwFWhM6lOgvpLlonq1fQPS5Q+VzUQ+rI0j6+G6PD99y39wd33jG/qX990atdJe3M0QBn8ZnTmc3uiYi4933gBX/5wheO37y0cCBL2nPQv3EOLypf7rCz4ouqL6vC0ajQXNAg8OkVNA40AKI/fHLaWtEHKDeEax9r6VpPgbW8J5pW2YpjlVvLo/UXZTSuqFRqSBPueBKPStzPHXqbO/Ul8DM5JidHMTTcB6GjStSI0ihaayB0GrkBxoaXSK6jbiatM0cGiEdxiRzNKyIQkcCiBl6Rl+UOl4uqlMfXzbSCI1PuZf/x2R0/uXevnwjMT/nRW8A733b+Ja973YWXNpc4f1oLaCy1+D3fQX9g6QzniB6tKziPhHPKcNEHhkGaaF8dPHWosXy+hZyej6KfG4U9C54IsdM2EQl6FpHl0lrvcoIRkZU8JnveWkbRM7MXkfV7R7kactEGhlDdcdFmjOX76bC01ECaOQwOVujUh0Ey2pyLOhf000uWCvlAeL6rBoUMUE5eJXXuNS9HTlv9FJGj+q8cIqLBMrr75iB05JbjWYPIIARjfddft/OHbruv8Sby2eVCZaTUwHFqgLP3ODlLtqCB8Qoeev/7X/tjW8b8Lpcegf56Vg0DX8DcENCgCFfeDhH5DQ1ExwjQCAN8hdUSM0dvdewahrIa6UDTBTqkDQPl3ZChR6aWUQgNXzcQjJhOi9XwpBdwNJwFaCcBytAfFqV8GKk42WHPAAAQAElEQVTA01EuLDQwPZ2hVuVOfXSITr0fNqLD0u0Q9DIwQh1RX5oqQNE0cEUqD0Ukj/BJ0xryPfWpcTgqVME87Y+CUYQS3UZYeYhwMsDQOY4GH5kYpD6mwe+r3H//wW+6+oZHfmz/Jv1779quiT7s/9A3XPSz4xP+1rR9hIufeTr1pONMdIFCHbFv2g/P7+hg2wx3joZ60l+1Q1Z4VF4BkdDjkAxl2XdNFPH1QyBn1fI5NF0AQZM5/ei4lvVQh9qN4BDZ3m7a2rjyKE3DXtA8Ra+8bpq2U0Tbh3B5jqcH3zumdC6JNWinCRoNdepAXy3G8OAA6tUKXJbrPU0d9N8FUMfuwvG7hcrIPGcYRascnW8KikW3LkUEIqLkDhxDBYPOLcL8XEiHkgdBjhGI4XtgBtFo1ojBV37x+gf+6JE9eHPOVT5LDRy/Bszxs5acqgER/VM2uenNX/PSPwemWuIWgfCNk4Y2vMfCtOVLTqNCR6cGxpGUH12TR5066IRUmEJfdIbh5aZ10pDJcHfHA+EkHiqjG8cSwf6x7WzwMRhXZAJJkiKyFVgbo91OWd7CSA2HD82g1QT6+2MevQ+iWjeAtGkQVQ8CyzI4zkvb1c2q9Wt6bVjQCrouthRFugiVj64TqcsgUYTM1djuodqNN+z8yMM7lt5MPjZWuU4t2A///PPkwf/yLW/4ZK06/3izcRjtZAnaRtBxO9CZcE6wfurJs02cS6SxHPTfNhfD9poMIhwjYR5DEcY7zdRyGtVQISKUsT6UV6G8Jw4teTQKOWtzlF7QuuMF7eTDTv+oJ5Xrg/6E76GB15ePgtvtdtip66nRKBeYg4P6L8m5oPcsy8KCKuPqVMtCFyNECFk+l+mhIUWd0C3CdrCESB4yuiJHPOtvA9ZA/w+OQB+qlS12bj5+2Re+cMevHZj2X6b8JUoNHK8GNsVoHW/lpzPfV7xp4C9f+bKJS9qtI9nS/GE6sAyREagBERoBIzGylDaFcR8MjA9uXI1CAe2/GvIi3R1qngjleZbroKCJCERWQ/MUIit0Ta9Fdx1r4928Irmcblp3XETz6VC4uxDCIeNShc7Gss9kTHn8rn/StnfPLHUCbJ3sw/jYMIxJIUgR2wgu9RBROcIS+a1tCjHSPSMieZ7SFSSFW8RCRCjP5CEEtI9Ye4ms6LDIUznes62ax3aLNWjq/xLXDNC51s+7+HPX/NKXHk9eTz5TlDnV4UUX4bpv/IbX/okxh5tLC/uQtFI0ljx1UuXiogLDxVHYEXLBAY4/2F7PCeVcm04gJUkIEH4VRKgHwtBzKY7VbpGcXyQPj8V/rHzqbBWLpgtohsY1VGhcJK9XpHeofBtBZRT5RVxEAql4t6yJoe/l4kIDS40mKlWEfxpWv6lHlrzUcZa2kXFhqkfwzrE4HbpIBNWhIJ9rIsJZ5jqAKh8rdXpIjwlY5JOb+VreQGBQXLYiSLImxFpEUQ3NNt+LbEiWGoOvvviSnT87P+8nC94yLDVwLA2szKxjcZb5qzQw1idPvONtL/7pkeHs+kql7RoLR/iitmGDRg3a7YzGgEdp3HV5vsD064C4gGCogWAMJPAzseZWQ1CgO0tp3enNjmt9ivXq8WGxos7Fk4X94xPsr+dxsXcRv617HDo0jzQFJiZG0D9Qg9MTDRFYGjERG/SgdSi0LMJVKEZCCpQZIjS0IQwP8rD+EOVDy/cCs1bd6sxzguM4cYfEhIkraNCpV6vDZnY2e/W///NVv7vnEF7FrE25RaT5uouGf+eNb3jOXyM72JybOgBJLKz+5ZKv8tQjA30yEL6nZ9RRxrgD14wAHNN8kgQIui/tf3f6ROIrZU+k1Arvscqzz1CslAD7sXpBojK60c3bO+5JVjA46jasz8I5F6By9ZfvS0sZ6YKRkSHoL+D15KPg0V160vacrw66CND5fZTYZUIx35cJJxzRNoGfUfTkRX8YKRIjcRUszlfiQ4fNh6+4Ye/PTnk/fMKCywJnpQbMWdnrU9Tp5z1PHnjnO17/y8imnhQzh8XFQ7A0wEnSouG18MHZrKg48zReXXUHJ9+VXi+qL30B5SnixxMq/1qoUS2wNq87rfK1jQq6FO5lPTTeDc8+5vA8gSCX7iQ942KYjpBlgrnZJczPt1GrAdsmt6K/j049a9OoehhjILC07AxFIJIDvEL9QRYTvEWET95dTl15vGNxAmxLgUBnWXJ3bhpotg1QRpKYZxhUopjOM+HuCCzquFNPADNgHnpk6jXXXvWlH96/3/eTbVPuc86Rpfd/4Pm/+fIXD+1Im9M+abcxfXgRMRc5KZ2QGLZVEni0IDzVAGNgzHT05dnfop8aonNp/GTQKX5CQXc9vQqKCERy9MrvLt8r3qvMUbTOQlkXzOrac+j84whTlw7CIgYiwgVmgiXu1F2acR4aDAzWUanou5rSiafcLTPkjj3lvE2dB2/OGJbvmnMUxtsRxd0dL2jHCDl2yqELCQ3DXzcYzj3rENkaMj+A5lI/Hnpo7j/ffuPMd1I3RvlKlBrYSAPlJNlIO8eR95Y34qaLXnPuxa3GfheZRX4Lm0W9Znl0ypez89ICNAhYrWrXOZ4T0TysuvjycjHgV6FgWJtX0I83FDm6vrVlizrW0jVd5BWh0pZxlNEDvDMw3HVMHZkFd77cpVewfftWGBqufKfuoU49QCKI6G4/h9AYA9Tbsh4Z71TmuarQNoT8guZXdNYhQXl0R66h0jT0XJqAZlrjcRzzNNshcwni2KLJY1cb1TEwcE50w477P3TXzn3fTr6qlt0MPH+LPPjt3/pVP791Mnq0sXDAe7Zjlgug/v4629JGOM2hw/Lsm3T0oHox1JPqrLtNyqPoRVN6L3TzPl3xU1YP9aJOfCN52mdwXhoTwfIzhsaTJEGz2ea7Cugv3/sHqohiw8UnnTmPkqhqzhtAfyjnecLGQQhViAhEcihBRBg44sRuEcnlwDC0Yf6LeNbJxRsXnRJZ2LgPYofYhr7R229//Odu3Tn/9eyLObGaSu6zTQPlBHmKIy4iC+9613P+93MuHLhqfvYJF0kTWboI/Z5uIWuk02hA3YnuIfIsvqR55BhP5SvQzVrQ1gu7eTVe8Gm8FzRf6fSXUGi6gNILqG9ROBrVHIb8Op0K5JzUDw1WBS0ec04fnke7BYyORhgbH4SxKXSHwgNQeEMnTjASaFqnls2lAFqXAjSCBU1587ShMRSSDYSqVWh5hXgaXOeZr8ig2idjSIM7saydIDYWyDLWm6FWrWNpMUXqqjyO7xu6+tq7fuq2uxY39RfHL3kObvjGD3zlL8bxkT3OH2ZT5jAzNYU4qnAGxQFgvz0VIC5i24VdcDDaUcbW3trvAmvzjk57kp4KWPwp3GI8NoKO17rwnjVzfNENksJt+MznhYhARKg35SfZG6StlKdGCxCy9fXHdOz9sJFAnb068uJbehECZGTR/Haw1L0iTx//U0RWMetfL1iJKJ3tyxxS30bqWsi8g2Pj2knMaTo4evONj/6Pux9OLlpVuEyUGlijge5ZuiarTB6vBs6flIc+9MGv/jkbLe6emdmLxtIsjYMH30eKoIppQKBgqrjVFqnRLdInEmq5AscqV/Bp2M2racVa2rHSWkaxwqfGtJMKfTTBeIpICDVHDaQ1VSRt4MB+LngyYHJyCAODVagxV3nq2DVU/kJXIjYkAcokNCEiDAzRfRuIKF1pasR9vgJgclkmVtrpuQtSMBu6hnBZSucZ8ciVDYMhZ4xW28DGQ3LoUPP5l19z+0/u3u3PVf7NgIgkX/dG+zdf+3Uv+MO5hYfT1E9jYXGGjp198jEXITHEqHO3dEqk6UorLFK0vezrU2iU6qcXCpG98o6Htl75gn5qQkcxBRgN9+qHCPWlY+oc9emD/kToPL3nDr3Fd3UR+v16YLAG/SdiRSTQ1bEDEsro3FQU8xKdS0RldxLHEYgcza9yVZ/CuW55giBCHuGY6qcWLpYhMTLXJ3Nzla+44fqHf//xvf6l5CfTcVRYspx1GjBnXY83qcMveT7ueN973/yHjdZUM7IOSwuzNCMrlXm+gp4ePgegac3ly0kjo4Ymh9JEBCI5NL0R1pZfL60yijyNr6AwiMcX6hFwQMcpqmNUIDhzCR3j5oJ9yuCRMPQ0ihkMHZLLDGZnF4gMPN3GxPgI+vg9XY+9RSybZCAi0KNkkdzoaptRXIXSQtrwqQC4yVuOMxJkaKjQ8quRhTaFPLpubsog3Klrmy13Sq22Q1yp8wi2jlbiUa2P4NFH93/1VV+86+f27fNbtNxmQETce77+gr/88q/c9unFxu5Grb+K6elFtPRXz2kM+Jj9ikNfVd+ebaeGSJMNcbJtVZ0dV9ngdDh31oQcdVCxR0Hpq0DHqnWtBxzPpXVTH71Yqdcw3hzi5WzPeeRdrrelpTk68AbnnIRdujp1YyIkSQbdnacpw4za5gKqcL7aVhVWhBo/GWjbDN8SUL7nyYugAmt1nD1g2zA2gYm1LVzIZaNYmKt/xbVXPvp7Tx7EK0+mvrLMma8Bc+Z38enpIV/OxgfePfl7r3v1cz+9uPBk6rMFZMkSJPyYqdMGdXrhm5yBeL60+jJ3stYLKBdrsZrXdJJF2EmuCbqNj8YVa1hWJYv8IiwyRZvNhIYKRsOtfMsIxpVGnjm0nYjjCtLMIUlJk5i7zwYWGikGh2voH6igXhVExgVnpcZUAepK5QGGUvQ2QQ+AoLiE9ahultNiO1HTCTcIxIfMVquFSqUG/YdHKpUKoiji99UGj9vbiOIKjzst2z/ct2PHfd958+0P6r/3fhzCg+gTfkz0yZ5v+aYv/4lzzoluOrz/EVhkSNtt8LMuHBXp2XdHKjiHtN8KkLYC8JJVEDGQVRBoOT0ZUZB5U28dwwK9Kiry1MGGOB1tdwjOg1CuZ2iYRYQ8hkz1ulWe9tkadZacNdytp56aZDqjI21yLqZUcq1uMDzSh1qdDpSLUf3b9Szl8iMVeP2rDW/gdRyIjHDF3BQPvtA4kUvbo/zWRpzFQPdiQeOZ/qM3LqGvd/DsX+oraCxZu+9A46233rbnE5v5jx9pu0qcnhpY/y04PfvzjLaaL2nzQx94xW9vG0vvrco8ksYRvqkNGOvRosGI+X3WuxguRceBtdhexxdalpHRNhwLDiv8RiyMiUgxEMYBQ5kbgdldt6dh6gVDI6KwdCAadkM6eavqCrsk7mRo3PSbegahMdJ2GvaNdLBjRpDyW/Xs3CKmZ5uMA1u3DqKvP4ORlCBPFgGEkSrTFYhIaC3FAjT2wrqFbRY40hWBTKPnA0gMt1BUgPMQwpCqYBBu5z0U3AKhlThElZhhE56GPIoBMRkytjVNDHxWQ9KuVa6/Yef33Xzn3LvpIIqVA0719bytcuAjH37z71X8kT1Z84BfmDvEdrTQztpw1J+TCmBrcJkg4wLJUxcKR1U49jMPgSL06ogUHT7vwT5m1FUOKmfdIlSgnQAAEABJREFULrCfQf8iEsKejBwPrAPP8erO0/RaCOdXgBj0CkN7KWe90IV+m5X+ZuxfgOO4Oeiv2YV9Bi9HZkc9QN8TIkkB8f1oNSLoPw/rufju7/cYGgaqFRbyKRfljt/bDVpNoN00yLIYws9H4MLUUxabDRRzkRUZpsR7CNvc/c5Y9lMhkuvScRQUHEII22IM4DnnQFl6QmU5zoIYnv2LKhxzzY+Mzk555PHp99x+zdTHZ70fY3XlXWpgWQOcJsvxMnIKNPDc83Dv17/vK/54ceGJJYM5GoAG4DP09fWFH+E4evOY582eId/tY9aoRnUjqAB96btDjR8PVO7x8K3lMT6n5GHXFBJaH0WezacaQDpGGj6vnbXktRFNVoSlZobpqQbiimB0ZAAD/VUYGjljAWtpyLywPOFZhjkIIOkkb+3r0QA8LXKoinLzfHoDtpBJ3myRRFx4GNT7Jmj08cLPXnzNbxycwSuYuWn3a19pL/uW//S1v7kw+9iCdzOYnjnIU4QKksxxkeTpvBzUMdm40qMNboUWdNdJduKhj04QQjqeTu4zGAjrVjDASYTar26omOMG6+POVzjG+vfpc3NzaCcNjnUF+vsOw09n9MxBV46fizx38xl362kC6IIKnNOqR3SuIi4izMrRyTpm4MPLpGNXgPM+nMRYzsbOeEE4/hHmFt3go4/P/PjtNy78p2MKLhnOKg1w1pxV/d30zoqIe8NX9v2/r3rTC3+u2d53yLgWmotNuLZDpcrdp+GuXBIYOq2ExsE9RUfluOtQQ6I4VueOh+dYMtbmWxqZjaC7FM3XiSbOQ+P6f1zLWhnmZhd5jOgxODCALVu28KgzgkcbYhLojkXrUmPLrYtGA7zPGHoEmqc+mdro9obGkFAe7X8BsN3glctzwWhTKJx4HnT7kM55BXFURbPlsLjkzOx066V//7fX/OahOf9iFt+UW0Qab3j/yJ++/isu/Lu5+ScSJjF9eJq+RRcXTVjuHh01JdQm4AC2OAf1QnoeJ52LK8+8Zaxy4DoihCcoYb0710Guj/V4nhq9aPPJhseuXfuwlqugOd+GtcJsg8WFNudjyvGuQb+l9/VXSOeClO9wOALniY3jHE65rXZ876DvblgNGs4XAUKcRXiHzxnUPwcN3XFmkVf7qjGF40PBoMftdfEVYGC4a49sH/cHFRw+uDBw972Pf3znA+kH2Jdjvwg9ZJekM08DG7/NZ15/n5Ye/f/Zew8wS5KrTPQ/kXlNubbjkddIM8ibkbcjP5KQB0kLQsA+vGdxC8IJBCxOywJr3+N9y1t2YVnYBUmAvDQap/FOM6Px02PaVpe/LjMj3v9H3qy6dct0tamZ7p7Kzj8j4kTEiYgTEeeEqao2auD3XPLM//z0p+/4QnvhACx0eGTbwWijSUPl0cu74NUc4GqsjxFrv+SF9cDJHBXEoLs2t0c/xjkqIl4JgIbDUxnKppglMMJ7h4N7ZygbYNeuGnafsQNpjcqNC560ZlC7lc+YNtZcCjJ69En4MSrR4SE8EKaCXczL8pmBsjKiNFCSWUljmRikyV/EdKp/p1dwl24YGdnJE5eGu/2OB1/7hS/e+1HmVyXE4oTjLLP59334BX98wQU7b5ibeSj0uvNYmJuJu8dOt420UecVQW+pXMlmEGwPaMwRDb7at5QU6MutLxM8hg9lGOW8lru5VQvszx7npCFN65RKDZ1WgO7U0zTFzp070GgaXFKw/3vIeW1W8D4s0MDKnms8A7Sl3ElDgMN6T9XGFWlMBl59JFSxA36WZ5wDxpMEx6uoem2COmUECwv2lCuuuPPfPPzw5p4YVTXack9+Caw/Ak/++p+0NTzzTJt7+zte8F9GRlsPJjbna7wfm+eRnnNUAHDo9nLUqJQ3swFmVNxDBaypVIbSbTRY8VtyjQp6CeJjpno4SBEKgMHMwXHH0VrIcPDAAvICOOucEezcNQ4pUBki8TQzAALiQxuNIJqMEXfo8gdwGCscU2zkw7poZcGkrGnkrrJAg0gVD/lpznm8yZAHMv20e531shG0uo79dmbjistu/oGvfX3unUybYJOe88/BN7/9g6/+5TPOKG5tdw76rNfCwuwcEo4h3e8HnjwEGQPWe6kKrLCMuGiERFUiwJRWsoqQTIWlnKezj/202LxFP+Xj2Hued+WgQU6TEQRfg3bq+mHJRjOJPyQ3MspEXBz1Mi7MswxF4RGCwXPM+uB4/aF4jkHK1UeA8VoUespcxQZ+KtAb3zJ99K7zcew8MyOfBMEnnCcOITRgbpyFTNjBQ+EZX750z8/unQub9hsY61RvK+okk4BG1UlWpdOnOs+/IL38rW9+/q+0WnsO99qH0G3PwagA0qQJV6uhy8s4qgZOUE3+jWJ5uvWkFYKUyOopFCesHrtxqnisB+89BHE0KxWfjHpUhoWhVh/D9FQLhw/nqNeBM8/aCf1OsH4ojRoLoNJFfDhUKbvoja6DRX6RUn4iXV7Hj0AOnl4qWX3BeDMpxxIlzaKjj9pRufILZowncp4mtHnv32zuwPy8hw9ju7/w2Ss/dtvd8xcqz2bAzIqLvhVf+tCH3vQxZ5P7Wq2DmJw8iCSp0WQHlEfFrB/bpbaVdVC7hTIEyU9A6BN831UaGQfKiONEbV0N/cSnrZOmjgY646KtAEcjtAvWr6zpL8l1Oq04FsfGmtypJ5ynOXq9Xkxb5AGeY8Lzbt1zHAf6yz4o5SqBSZ5yV4PihBVxsa/6VAssswTHAuuWcBHBPuNdvrMme3QUluy0+x+cfe9Vlx34/f3z4ex+zi3ncSoBjb7HadM3v9lm1nvHW3b89bOevfNTeXaAU56re97FBk5IHenlNOjHW4vgDMtgRmWPtUH9zxM8VJBSOR4cqf5mVEK0IZ4ADavj7lKuwoG7HGiXjQTT0zM0VgWaTeCMM3didKSOxOXQABXYSBaVQumVH5ZA2Uu6Rb/CMlsCEy971d4oJzPEqkTOZBdKhRkTByrLfnhRJpSvFiQZj1uNhrTDU+56Yxvv1B32Hmy/4LP/fPXHDhwI58T8m/AxM//mVzW++Ja3Pvc/Wzg4X6MB0n9LaxaQ+6JfotEluMtEBCXGtpC4aBACd5ghlC0XfTmYF6uD4iAPyUk5Vksj+nFABux4cBRFBzZGGMxSheXq1AOUm+PRds4jo/n5FnL2e72RYmJbE82RlLLIIy2nQc+zAE1hz5ntKfdgBuNYNjMsPZJ5CZVRwThIBWgcBmNyRwCiaYRa8PR7gKPV6wSBPjODcdwLYB0Dj/vzUEe9uXv0llsf/u7rrj788enpsJNJt97HqQTKUfQ4bfyj0Wwz63z7ey/60/Gxzm1FNsm70BZC4aEjvTq3pCGUBmUtl/lxJJzIdpxoXrqDVtukLOWWbUngaNiFdrvLu+kx9LjQ2b9vElkP2LGjjrHxBhLab5h+t0iKjTWj0pRBDzx6hIwAlR2p/df6rhtw+wY6Zl+iqw5lItGIYFTUJSV+I29pXI92ewGN0QZcItUaYHAsNYVLR5EkE+k9dx963z9+9vqf38z/EYv1XXj/W5/yb5/z3HP/oj1/MMt59H7owH7WJAA0QJLJIkgFjQpY0xgHPVEAkMwCDYV+EDD0xx0e54/GZZrWoZ26p+EUnDqbC80uT2Rk1MEe1w/I6U/EpjVwrBQookEHd+mBu2aQZvxwLEV5li77LYaWPv1+WCL0fWV6qO/Un32qnDT+LElB/gWDyi+wKPafjv49x243NxIm7Lbb9n7wljvb+lsJHK1MvvU+7iRQjaTHXcMfzQY/+Tzc8q53veI3G/W5h9sLVMSWUbdqYnIiHqEi2h1WCJzEwmCW4fBg3Gp+pR+Edq7DoPrQfm4FBtMFRyNIrCxD7VqC6q40SZJACi7njifSqIiK3COt19DWttdq6GXAIw9PxV3Puedu566oAVBWoEKlB4YakpTGNU1ReE8qa0qZgI94V2AQMIu7djOjtwT6T2DZnsqzoBvoBiunwaBc2EFMHSCFql9lynwGL0PPpCqbazLWIUERdtavvubej1z1hT3vZn5WmNk24d21y2Y+9C9e9Ke7dobret1JpC7wCqeNOuWRZZKDw+joCBdEAaAxclanEQCMxt0sgVkgDM65ZcARHrYppjCz6A5+qji5FdS3lX8j7iC/Yb/ZyjKH0xxXOEgW3HV7lROQJEbZUHwhIHDRmLgm79O76HYzjjvE8aiFJqyAZO6Zz3OR2eOYzni3HjiexCBwTHkCiYsyN+NY1FwZCJupTJbFdDGb6hL7ymByXYCxz/Rrri6h37GPkSHIJeJYZH31625ZEVBv7ETWG9t+zdV3/9ptd+P9lH2KredxJwH3uGvxY9BgM8suftXI/3nlK57y57V0xs/PPQxDTpsRAE9ssE6cpBjGBrOumWyYn8JrJR6Mk19YK+3q9JVU8XA0MomrUyYNdNr6/fQeeOKJs885CyOjNUjRJklCN0HORYBOmhVW3siRyjC65IAIB4CIdLoMcWPKr/wO7A/6EV3xCFTMURnDQI2JxYcGPHBZw44CqMQD+ywwHPME+gK3axhnrh27L/3aTb/59Zsmv51xImIznmecizu/73tf9ys7dxQPzM3uC62FWew/sBfj42OQIZ2ZbmN8bBxZlqPRaNClEWA9Waf+uGE41t8zTD/jjlTPSlbiMZy2ihumH024lH1gfUoM5lWZx4tBfqv64xgpY0KQXIRAgsZCijRpoLXQwfz8PBwN6MTEKE+UGowHtLvv8U49UI6BYyinYc8zH+MkG09DG2itY3x0yZOxZVhlMKA31sFx7CmebkXj+APETyhIJTgONRZhyu+5oMyhH671XFjkvslF8diur3zltl+57yG8iBm23seZBPqj53HW6seguZzgvbe+5Sl/++SnpLcW+f5Q9OZA67RqTTThqwj5hyHlPYjheIWr/Cy38kZ3OByJR/ER70EUVFQejmqnD+ok6jYswdM/AJblhZguyIeyThyKVEo93ktOTc/FndH4eIIzztiFRjPlbptpuctRWpXPjPFVOIK7mkgY+rB6zDtEZH1jHmMlBqLElxsjCCU51pTGplhEQYNYUKkKWosVRQPdbMRm5vDET336sl9+4FC2aX9n28yKl78QX3zDxef/u4ajhSlacFT6hw9PolZLiRqNuCctRa9X0BjV2YzlbSThmF/Jp8ISE/HfOEIAZVkh0E9wsMgggoZN7tEAWL/s5eVV5a7isl9BWQoheNbLCHK3hNPUo93q0M15j17H9h1jHJMJZc2Fp4y49/AIyLjY1IJTZQKO+Y10wujnUCJb0igA6CFBzgpwHjBv/FIejhwE7cgFMDwILYa1kOgVOZK0yTo1MDVlz7ryyj2/tpn/98CKam8RTgoJaNycFBV5PFTirJ247Z3vvOgXtk207/S9KSB0YJrlbDyVNQR64xtKrRD9632UbhBVWtHkr1z5K6icChWtcit65Vb0QVc8K4g+6Ff4aDA1rjIAABAASURBVKBylL4oqNhpfZOkTmOUY3amhbnZAmeeOYFt27gL1jFj6NFoJVFOUmLOpcy6NIRlEEjgawSYLqGMFe+i3+AYLuMgP4YfxsOYRm4Zp/tmUIkuuVLIlTJ2yApQkY7ReO6wAwfa53/un6/7XsqjWeY+8V/KK7zpzWf89ctfcf5nOq29eeHnsdCahv5ASnMk5fXFAhKeZnQ6Hcqq3EmWcllqU1mr4XBJHf6yPAjD9I2GKYtoxCp3eT5bFqzSDLrLEqwSGEy7mn+VLMtIy/MUsa6DCWSgtUsHx8v83AKP37vxamPbtjG4tBwLRVFEY69FtvgVvF/3HBdmHH/MF/xKWUumZsy/uIigXwVzDqgs0JgrGP3y9NPJW4JLCCt9KrMs2+CSMTRHznT375l581evuu/X57Z+nQ2Pp2flSHs8tf5Rbisncf6iZ6Wfff1rn/VniZvKsu5BKuIONCGPVBXmxTC0Ole+wfzD/nKiy1iWUHphmFcVVtwgRB8Mr+cfLBs0gsvRz7momEoFxs0ZkLgoA+XXT/8b78pbrS4OT86SDu7St2PHjnHugXoRulMspPB4TB+kMK0cxlVdK1clOucW5aZwBZUlqPxy51PFlK526UICizt2+YehclySIAew0DHU0t3pLTc9+J1fumz/e8lbqw3GnPhX/4nLB9/99F965oXbvnTw4F1ZrZFjanofDfsUGo2UMipQq9XikTAonxNfA7BfwglhSzmdED7Hx6Rqi0PggFCdtICTq/mTJDU4a/A6KMf8XCfKVb+bvn3HKJIUKHzORWgv0pU+4326J59E45N38WUfOFbRwcwiuJJnWK/npwLgGHLRqCcUMplrnIsqV5CfCHHMO6i8ZrOJNHXo5l0k7PfZ+QwjzbNq99x7+KNfueqh72E7yIyMt97TXgIaP6d9I0+mBhqX5W941RM+9Zxnn/25udk9eZ6Vvxqjial6Mj5OeLmDYfkF0SsMhuVfC5zQEBQ/6Mo/CMWvBpU3SFdYGKQdq187GeWl3ZUTf2JYas0XPDbuBkwe6oH6Cmefswtj4zxCthwJ7zJrtQYMVHgx18AnKj2FTZ8IQwI9ZglivaPCFAUMB2IpbSkP6lJvlJno1RQhrZ8vyGU5SpsjQx4KmGug3XbktXP75z9/9a/dcmfxZsaLATbjOfts3P/tH3zFz55z3tilk1MPhXZnmrvzGTj9/XEeHzteT7D8oaIdG0GA1WL9y12gwkPJhoIr+ZQJ1qKXseXXzGBmZWDoq/xmq8eZ2Zr5htgcZzAAWmQuygP9h3QujcwsGuoiZ31Q55F2Dt2n+5Bhx85R6FTEzOIOPdfxe//YXXfpGichspGM3WJ7zKwsw7jI1sKXbkngt6qHXCidA6KfLg05U/Ct/A7GMa1ynUuRpnX0ujnSGo/e84RzaXzsm7fv/4WvXnX4+yjrBjNuvae5BNxp3r6Tsnk7duCBt73tWT//hCeO3JL1Fqgksqg0OOloRKQBymqbaUKX/uo7nCbaFiarXEiRD4QrulxPBVW58gsVv9Xcqky5ZmQqzwDMaPRIDosuqJ6opCINCNFlKVSYYRhOdKahxpNR1y45IuSUAWA01sHXMD01h5kZT8UJGvWdaI7XEJKAhLumoAJQDuFgLpaHNR4lFapoM1aOgervbOunhVU+SfGt5AFdlHumjWDbyKTcxYFtBXp5G2mdcuBOzNw4FWrDzc7YBf/4qS//3D2P4AmR2SZ8jAvD5z3dbnnPe9/0+6NjyUywDvTT+HPz05CByvMemASrP5JZhdVTVFTJofIPu+vFDadlfVkfynEgoqQ50lcCUFqDsV/Xh9KsDaz7cK5xXC4lMXr7EJ1wDpyb7Hf2b+JGgJBy4dZBp8vTI+thfHyUR/BNuJpDxoGc0ahrcS6UPzBncTyTcXzV5kpuOgVAHEUeMNYF1cNCNa5lyENCIhFdxzFOgHVUmGMxoXzyXhHrmLiUi8scY2NjmJ5r85RmO3XLxO4bb3j4l665ofNyMtp6T3MJaOSc5k08+ZrHSR3OfxJuf+ubXvRbvtj/SCgOA6HNic+JzYkcCFgCuUbXzGBmsSGazkzMtAFSGmYW48xKV4mkMCqYlXQzU1TMpzjlFeQXFCm3QhWWW8HMlpVl/Z0vhh7xgNoQ6RpiQgws/1BhmhmVkRQSd7n0m3hSkantnsZUd5gHD05SMYFH76PYwft0IEfCnboUoodRJaaEg8qkjqPLlzzAOIByFDGGER9TUvrMDCDdjC7Dg2+gfi0Nty3KLJBP2bYypXFn3mykPIpdgCNPY1/pZKHwTTz88Nwrv/KFa353YSGcW6Ze/3usse94DS593Wsu/JjvTe1bWJhEqzWL3GfQPUFOA+NDQGAbA+9xI9SuSNN9cXFUxZrZYvpBOSwST4DHzGC2cZyAIvssLLrGPoye+PH8OpgZ+zeJAMc1xcq79IyybtGgN3hyNII6xwH46D7dc5wUlHO35yF/YBgywMyr/DLekp9gTMds8VU4ejiaS7f8qhbRJz7Ro09JVZ6RkREUPBnQz03If2hqEs3mKILVeR0wik6n/qQbb7n3j79xV1e/WllX7i2cnhJwp2ezTv5WGbdPz3/V+Bde8Yrz/inP7g1FPoVQdGG8d/Oo8T4s8ODUFhWC+UA9wElMbeL6E97MwASE6BWUDkxboowPTBOoTox6PolIuAN2VDJGgyeASn8Q0ZhxV1rkrEcfLBpCFSdlgviEqPTMDNbnF9NQAUmZrY5AQ0Nwp44kAC5hqwwsCiy2BAIkj1Y7x8H9c/H303fv2kGjPgazBTTqOfPV4JyUl6O8CuguMQDw3iPhMbj5FE5tNaNMPFg9sFp9OICxanfCiNSY1qXkbeTpIgLjgznSEsLIA2BHESybpwlWeNQdy847COihPImoIwtjjetvfuj9n710j36VzZhrU14za7/9Q+f8+atf8vS/smzBFzTmBycnkTSpzB2raTUEtl87y8TqEFSRwKuC4DJ4Ss0zRQX16VqQTOEDBKMjeA6IEJi7D5DXYFjxQkVT/CACmQzCs0ZHA7VlPVA+EIbTiGbs19i/sY8Dynp4MAhYEuE5WAIJBRdvOe/K5TfO0TyvozVfYH6hhUYN2LV9G8ZGGtAPd3Y6GbraNXuj65EX5TwWzxAC0xQwT07OQT/j4ZDAzCJ0SjQInRzBGSISVonysjhnPOSaGbToTeoJUi4qekUPzdERWJrQmDN9Ivs96iYni+ddccWdf3DvXrwUW89pKwFO+dO2bSd9w3abzb7lrRf8yROeULux09rvu9059Dpt0BZhhBfHUYFyJwoqOXAiOxjMrN8uatToq9wY2JSPmQ2UexRFcJFgUlZCn4dZyctsuQumjYAexw+NJJVpIYNZa3I31MPBAx3UU+Ccs8+E/nIXrIAMOBNTZp6KkmaKBiZJEiRJLYYBh8iX/M2oEclT6c1MTh9M0/eVThXup2Hekq6v52cJxvKEwFODwHtVnjXQRAZ4T4PqRxuXfe2G77/8+rlXU5Gz5sy6Ce8TadQ/8J5v/U8XXHDmFfMz+4ucC8MDBw7QQCUEm29qT6ngWQ+YBViitnn6LWK4Wmar04fTAYaNPCq3wmD6ijbsDqYZ9A+nO/FhXy40aXhDf6wMll/6KU8evQcew7fmWyiyPI7DOgdnrZYgSZxmLK9jPMdBQM7tekGjnmeBvA2JS0FbzoU1lj/slyWCj97FKsS4kobIPWf8YFj+QTCVObBqQEoDbxM2PRueftmlt//0I7PhDGbeek9DCbjTsE2nVJOedrbd9O5ve+MnRhv5/pT3oEXWRs0Z70MzJCkVAHd9sG5sE9UwAnfvCNp1FfRrUseoo/5IEW4kk9lKha28FaRnBHDHIVcY9Cu8Lvr8zfrlLDOeoAIMrKZD1iswMzPH+0tgYtzhzDPPRq1Wo3IMNCk9JFReiavB82i5QAKLSjVD4IIomKdrCDLuQl9LWvDk3X9VrtAPylEb5QrkgH42BWO9FF8acPYFd3CBptz3QQo8lfjkZOtbv/Slq//kznuxqXeY556Lu97zvhd9bMf24n4r5tFtt9BrdyiPso2BtS7Y3iL0AO7wzCiPqkFstyEB6AbJx+iXuwqCOcpBakNglhAoC7mrA+ydYTDLQB7lL4GBJzDRahhIEr2rpTkaWmRyHB/9edhOO4uNHxtt8vi9Eeetz7uI8J59EKJRL3fqDpakAMenxk5ZtC+d1b7GnhOG4ox9NURicIgP+7deb6LbyZEmI2i3gu19eOqSm67e/4l9c+EsZth6TzMJuNOsPadkc172PHz2TW966V90e4faRqPufQcu5GyLJjNNgwvwNEpmCQx1Kg8qBMYCHiAdG3yk6DaYdDGZmcHMFsPrecRfGEyj8JEwmD76F5WVQ0IjnXGbIePtuLM5cOAwFhaA7dtGsHP7DtSSAuDRcZqmkPJCSHk072lWAxy3QTLmMKaJjBOAvM0SmES7WrsYH5PClQ6sdElXO7BI75NleFga2A+hb9SVTiiYd3z8zOTB+yef9+nPXPqxvVPhKWWuE/81s+KFF+LSd7/7Vf8JfqrVmed9+uwMT3y6kCEHd+Q6vs1jPUO/AhbloboKfSKNbYhQWPS1wfwAlO7RwGr1ON5yV+M5SFufv4PjNUa3m9FYdqExOD7B+/Q6Fz260uB4yPVDcgWgxV3BnbqnP/hSbuuVY2Yw06Kr6qv1a8ISliegMRfBWQ2eV2sFTxOSZIxzZNfILd+4/3uvu/rgj7P8EaXZwukjgUprnT4tOgVbYmbzr33DxCcvvHDnp6cO3039O0djlMPJYC9CU1YUwgxYNDDrN5iTdlkChYVlxA0EzFjmQDrxKCGi4iooXKKMD9E4SIlFhH542O0bxTInYGaLEB/nUhiS+HvAk4fmQT2J3bu3cbfeQJ0nGUZN6ajEHBVY4C5deWTAvGN5MmIoH7MU2t0kMC6a0H8kU6EfpKP8dFa8HuK3NG20YFiClG8JVoV9lHBxkcD7cbv37unXXPqF+36UfEdXMD1BBDMLb3nNxF+8+bUX/t++O9VD0UO33UaWZci56PFJDtVLP6dA8bN+ruwbBlivVf1rVU18BJaJ44Nj/hKAAUNg1VgvVlViHYor02JDz3AdlzKtLBOrlrN6uiSpIxQOnU4PbcqaEsX4WJNXQg2YKzhOc179FBwDbAPHZUHkPM2ibQdcgvJxpaOvsaGExq4gkvoGUQ8oJAykV5BgFo5revrp1DfBHFrdHpqNMd7lG2q17ehmDY6H0drtt+79/q99feEHybuhXFs4PSSwcmScHu065Vpx9rjtf9e3PfuPzjnH7pmf34O8N4fEALME4AobfQMeZPhQPmXco9OFnPhlof2vmcHMYmg4TsTVaKIPQ+kGMRyvXU2dd+japWsnpN8/b7U6ODzZRYOqaBeN+vgYPf3dkAx/UuMpBuUmhUb1CM9qCvKLvxkJ9JjJHZSf/ARlLXkDVM+0KHyZmq/ochYBGOqAAAAQAElEQVQJDHCxwO+KNwQfab0M0M4IGB/92uU3/8jXLp/67hACKxyjT/hnnOPokg885eMvedGT/6o1+3C3057hkesCDUuXxtxDtaI9QS5Pv31rVYL1XCvqUaOb2bplmVkch2Zru2sxMLO1otalSy4VfF4g4WIz0ILOz8/TsHcwMtqIf92wXq+Dkzca9KKQUff0BxQ54o7dMR/A8aZUoRqdiO3B0KPylpOUT6iog/6KBujUIGOHOy48erlxcTSCJKVhzxtnX3/DPb9+zfUH30PeVDJLebZ8p64E3Klb9dOv5t/6FFz//ve//E/SZLLlixkUWQfma0CoUxlzMtJ4BAtUytQI4BykoZceWA8A80VdYQD9R4uK99r5EB8qheiCZSgP1npkFAfA5mAQ4hNBCyy3YuMLioHtSNIGCu5y5uY74IkyRhpN7Ng2Ee8upZ/NDElSo+KyaLQ8w7AExpEuAGQCPpQdKEOjQhVAhQw+3oBFMFy9g3URzbOdHn1eJBT0e7O43JKfJMR4HvuntRHMLfS4S2uO/tM/X/Yjd96bPU/xm4UnbLPJ977r2b97zrl2bZEdDp3uHLq9NmRUwPp4pACvJsC2l1hZE7VMWBmznCKxHQ0kk0FIrqthsBQzg5kNkhb9g7zW8q9VP6U3s8jbbHV3saC+R3XtexcdXe04GHweaNB7XEBlSF2Np0ej0A/KgVc+edHhuM04BjwXVwIXi4X6wdgXRJ9bVdd+kI7vg86K15Hi4BY7qgyTuPimtRp35BmSuuaNwdVGkfs6kmQCc/Nu+7U37PnXdzyQv5TtWqoEtp5TVQIaAadq3U+7eptZ73nnN/7iRS9+4t/3unuzPJ8FabABBax7WtBUlI0/vbqPSoWGOCzBG9T+Xi+nAqqhUR9BnlENRwVmmJycpoJE/EMa2ycmUKsbxZIzfwEdaQbeG4KLB2+iM2rgdTTmoFFzjF8kL2pTyXUQStHnMZie5KrOKid4pmG8FjSiM5r18+jmGeo89sypwNsd96zP/NMVP3/wYJhQ/GbhOc/BN7/ru17/SWcHp4viMHq9FusCGNttllBGbB/ba2YwMww/ZrYqfTid2nk0GMw/nG+1uEGamQ0Gj9pflTeY8Xj9CY/RvJfRBdKkDl8Y5ue6NKI5xsfH0WjWoL/e531G+Qs5Chr+gulyHtUHzW1Vgn0hZ+NwXI5Z35g7gCF+ll7TJPHodFtojNRRFBksSaCrgSQZQScDGo0dmJ6151195d1/9tB+PGcp85bvVJWARsKpWvfTst67d9ssj95/a9cuf1WRTWJhZhKNWgO9bgHnUiqFnEdmRoUcoOO0QSGYWVTCZitdpTsahValXc0Vr9VQpS3jjI5AZ4OvmS3WfymLi+0U7zyX4nRwRjkUoJHKceDAISRJijPP2o4dO8aR1gP0+7nOpUiSFIYGUaPsHIxKTgCfIMPLnb7SmSWwiKXytesyWwqbGXOB8vdU2tELM4OBeQnAsU8SxtOlYS+4Y88D+6wWUPguyD4uw3pFkuzZM33J3336mp9imzbNqJuZf+VF+Me3vf15n+z1Hp7ptuZ44lOg025HI6CxI3myqhCYHgL4sF5sS7mw8lydCIO0QT8oxwpGOQhV+Eiu0g5itfSe/TwILZqOBqvlHaSBz7L2MKy3onka60EM02GUEzw8DXKgcfZctOWZ4y49UNY9bJ8Yx+gIx1+SI+cuPcu7NK6B/gSBp2+B8gvGscmxCrkcRyAv1UEwMzkRKtuYPsIb8wPsnhhXfsgnQFUCWKdAiG1RZChCDt3Ju1oK/UU7SxpcaKas93Y7dDg8/0tfveM3HpkKT2bGrfcUloA7het+2lb9ybvttu/49ov/sNN+cKHRzDA3Own9XrpxsksRm2mSe3ifYzMeKY7N4HusPENfwS3VS8OW4LF5t+PRWuB2gyLZtn0MY9wRpUlAI6WhlRWF0YDJyILKj9oOfKgUwThHo+9BPiSVr/xEvzwoTmnpmhmTGMxKMMCXafktX/qVVmD6EETlAoTHrXB0E4+CxkF36vMLYezeB6Z+5DNffuRipdosmFn7vd/x1D99wXPO+ifzc1wcTiHv9pBwp7awMMcd5GiUSWWwKvky34oqibYaViQ8wYTVyhykneDiNsyurAPHVLwGY/9C4yLlt06ZOp4kBXS7BcD4RqOORjOlv6AxJw16UnR6BdNxXPBuW4uMEMcdx2oI5LEEpa76ZtCt/GCpWPVRvQiNQYEGHhFlYs8FWFrbjtlZ56am3NtvuH7yp8mzUcZufU9FCVALnYrVPv3r/LLnJl953esv/A/t1p45Z3PIeHSmueg5+eEDtAvN8hYFEYjy5WSMiqAMLf8qrqIM+ita5a4XV6UZdB2LXw8JjVuEGZJVgOqRIRSq8ArXkbKE0Fd+RZ5gemqBR4kB27Y3sHPXNtTrTGcBKXc8KXfzoOEHqFDplvmMonQRoDIMrCMiEB8zi64+3AghMCxXEC2CdS1l5Rh0MB6hSg4MLL6Kz/MeAjIwAUElrXKsiUMHe2ddfeXtH7vx1hndXzps0rPDbOqnfuzVv3zGLv+FvHOw6M7NYWbyMLbzNGNm4XB/vDje/Rt4EhxdT7lJTgJUX8IHYzvcIsD2RzCuSqP0QhXemLt+w80MZiXWT7k81qzMY7a+uzwX+vJYopotz78UU/o8JaZ+jiHKxCwhk5SGO/BULedOPUOtlsT79AZ3x1qE53keDblOSOilPzA9s/kEOn2AZEp5R579j4PBONfMLFLMSjcG9BlKb8EzvWfMcgQuMCowkrv0gObYbhn1xu237//ey65o6yffRxS3hVNPAu7Uq/Ljo8ZmNvP2Dz3r1572pNGv9jp7eVw6S4MYUCmEJKGC5ZHuatKQgqmwWvyJpFXlHKu7kbpQFiuSiRao+JxrYqHVw/T0TDwK375jDPpdYGcFtOhxURHyW1DR0qgboXzSfxVAPmUBjk4fjDQzmFlJo7KmJ4bNRGOINBkwgaH4lkadPBgH8lWcfhhNu+B45OlS1OqjMDfiJg93LvrsZy/7jYMLOCtm3qTPjqbd++M/fPGv1pKp++tJj0fBM5ia3Md6OLYnEBah4qt+HPSLVoXlDqKKG6RV/vXiqjRHcsVjPSi/WVl/syVX9M2AWVlGxVv9qisJHr5AfW1cDDmX0Do7ztWAhYUF3qcXqNea2LZtGxqNBsMZ8l4HCQz6mRDlLXfo4qo+MXkiHMeLmcFsJcwspln+cf1g36UBxyD6sXIC65plBZqj2wEb47iob7v+pvt/8cZbsKknR9h6Nk0C/V7fNP5bjI9DAueZtb79O17+B/X69F15fiDkxTSadQet8MH9ZZpy17kB/lKIw8k2ShvOtzKsITSI5SlUToQHuGlA9Iew6DoavghmG+RCdQhBRlB/VEduBJVYIMgOxt2QlJK5GvRT74cPL8CRyRm7dmDbeANpEiIP8yyP9+WGOmA8UaTC1S7FXIHFR7wYMCuVpFnpkrT4mnER5Qy+H6W2GOsfd07wqBSnUTsbE1nh4KzGhqco1HjmLdj2rPAIlrIfU9vz4Oyr//dfX/7jMzNhFzbxufDJuO57P/rWP5ibve9QvZ6h3ZlCzjtdFWlmlJuDHrVJboUqLHcQbAFbHGIy0aNn4LMabSB6wKty10YIxrFSAlgtHcUbynoMMN2wN7CfEBwqd9A/SBN9BWCUgYM3B9VAMqna7ShTIzHvBbTmOzTiHiMj4xyXE9BiPMu6yHl64zk2fcH8Oj1iXdSUWG5sK5vBeGP9FtsejA0m+vGehQigy9QrXpEHsZRAsgTSeg0zMzNIa9yUJ6PoZPWzr7rmrn9z2z3hTWxLspR+y3cqSMCdCpV8PNfxwqfg8rdd8pLfm5vfszA18xDyokuFkPCILsDMwEm3iGOVU8XjWPNvZj7VbZD/YJgmFEXuecQ+SiWX4vDkFObm2hgbS3HmWTsxNpIi4ZbZjAow1ADfgNGoG2owM1hiZB2I8jVLosdMdAej0rQ+DXqiYjWYmUIRS/XxMOSkCXSYF4ELCMJxERHigqLkH3fsBRBYF+cmxm++6YGf+PyX7/rX0yHsVM7NgJn13vyaxp+/4Q3P/S8zsw90fcgwdXgGvV4P3vtYJNNEd/iz1EbWOYRVx9twmoqH6McD1WkQFd9htypjmH6iw8PlOC7YHMeI6hhCQVkWlA9Ne5STIU3rPHr3mJ/rxN34yMgYj9/HkdYMvazD9B4FF3h55qEj+IL3HiGU48s4hlSe+keo/IMuoL6rgP7jltw4ZvvBRaeKB5IkQVbkCM4ALjJDaLjDU71nX3n5nZ+47xGcj63nlJLAUs+eUtV+/FSWiiJ/+ZvP+B/Pf+GT/lfhDxf6LzIdTYEmfeCqflASmujCMG0wPOhXWmGQ9mj7Vf5ySCEKgYqxNLbL4sG4CoFpXIJeXiBxdaZPcPjgFNo8gp/gDn3H9jE0GwnqtRpS14ChAdCwF8HBm48odSeVGcpHJYpGuZeEoW9JX0oPJlb9YDlTFizDR1BDMpygyB3DrBt3X1LKcMzrAHMsiXmzvI403TF26Vev/8EbLj/0UfJiLDblMRr17/rI0/7zE55U/0KrPRt6NCI6Eu52u5RdAOMjWAfKBlHKFW21CindIF1hYTWa6KthMO1q/uE8w2mq+Io+HK7oG3GVdzidaINYFs9xFNiHgTt0b6DMOKYkNRp2GXflMzjQrEM79QUa9YxH3KOjoxgfa3DMhmhMe6RlWc5dfFEadRr4cpeO2C/oP+In73LXoxx7dOGhYbUMAGmOjEoY62wB3NAzzLqBT6NRYzkFfeCdf8EF8jZ75JG5F11/7b7f3rcvPI3lWYzc+pz0ElCvnvSVfLxX8Byzhe/5yPP/084d3T2d7l70etO8f0vguPMD1QXi4/gdBIPxFS16+h/O5ugTvUIkbMrHzGC2NlYWqjqJWrpSbFQoqFxQIQ2Gde2gP7lplmCkOYH5+Tbvh+epxIDtE9vQbNapoBIkqYfxiL2gwpVhLbhjDgSokFUaYCgfVyq/MkC/wcgbIF00lm9m8ESsh4moOCEGRCAMMT4EON4DeA9oJ8YIKlN9wd0ZoN9FznzNOr1k4vNfuPL79+zDhWXs5nx3jtj9P/ADb/7EaGP6vtA7gF6nhaJXsC6sIIuUOCJYbwZhFiIcjBIwWJQF+k+Zpx84JqeS0UZd9d0gqkKVv/LLrcJy14PSHgsqnjptgQ8DLDyHlFCStOvWLl1GXQvNTrvHBVzCU6QxjssUeZ6h8BndHNqdF0WAj0fwDggpTFLnWAMfM4MGjxldAGali1Uf5hed41UOyKdEGdKXXSsnlg0ucFkg6iOj1C8OI2PnpHfceeDdN9429dsHDuCE/4xHLHjrc8Il0O/1E853i+EJlsC37MINH/zARZ9o1B/Zm/f2o9fNEIp6nNS9XhcmE89dqPMpQh6ikq7xbtlxQpfQdA6c1h4WiCKBFUzrjYZnbSjXICwqdA2bCh7AugbcngAAEABJREFUIBgceCvFt+gyKYtHBWONVoBlRJpcpi/rTwrbIr1jrLOj1THG6S5SP2gkRZj1gGZ9J2Znuti7bw7NEcNZ55xB5QRYQiNfm6enCz0uNFFkdRpbypCyM/EWT8Ix7KhMEx7Np1ZHQr/j0aoRHkb9bYB22rUUZgapcx+4G+cCIfgEIC9Fp/QKRd5FQnEl5uBzcvCA8Z69YE6r1bHAeteaO3FwsvvMv/7rSz8+2QpPxCY+z30yrv7xf/n6n635u++23gKmJ2cRci51Qo6coA+1Bk8VAndtFLKxf031odzppY+NoUenHNVOlMRlb9Xfy4irBMwsytCsdIeTxCINqNzgjOJdAqC6lAjsu+GwaOvBsy+EKo38FURbLLiqQN+14GCsbMKv0aBXQL8+ga7gWSe+JBs8AjqdDtGF4yJvx44dHKMaQ5479QzdLKNR5xjh3CzyBBrPGnMggwTilsdxA44dY984lg9oDjOW40/15XqAS1YuCgyUUwJv5Me6gBjsE7MAgWx4esV0bHRsWiDTtMn6jKFWPzO56eZH3n3Xg53vY946Y7bek1wC7iSv31b1+hIws+5rL9r1397yxuf/4dz8gwvet9BtLyBJamg2R8AJh4wKIXA613jELCjczw5wAgMe4MRGMLoCnaN8Vc4gjjL7iuSDvBb9rGb0040ZYn3pG3AVT8riqwUCdRJA4xu4qOm0PQ4fzjA25qC/9z4yQdXrcjQbhlotQaDhdY5GS1qMXChffjUdHIKUGkOQrKLb/7B8s4QBpunHKbsZ80UFX2NcSjCemlLGDvFe3ZOnmDo4Oqq7APaHfjfdXApu3JAkE+mDD06/8x/+9mYpUDIlq0142dbiFS/d8env/I43/lmvuz8fHXWYnjnEY+Eud411MB6tbguWqB2BdTeCFR+oi9o9EFwWX7ZtMHZj/mPNN8j9RPAY5LeW3wYjuOgZDJZ+yo7jIuEdNe0vdKogusaWjLr++qGjUd+2TffpDtrpq+5K2+0UXLBzMcUxFqKgl4aC8lQwq2rhYEwbQZpcLHtcP1S5/SCdBIE56aGrr2fIc5HgOYd8aMClE82rvv6NH7vhjoX3s34a4Ep2kuPxW72VPfz4lcVJ33KjUX/Fq575ly98/lM/uzC/xzvXRmehA2dNJCknZpLBOU/lkLEt6lohB0zKwSM+XMmDEzb6N/DhJI7KetAdzDZIX83POg8mX+ZfL25ZwnUC5gMSqrOqbPEUep0upg/PcDcEbJtoYveOM2gwmZILm5S7PMQ7b09FCwSj8oUDzFA94lf5V3MtMD1hVuYx8lC6wI+n4aezTG5VuECAUIY9FWbBI9cegwmKPEXWrTWuufaO/+uyyw5uqgI1s+zii5/yl6945fl/OTd/b7so5tBemEe31QbjiMA6eQqnbKdC+s0AmMYWx5TkFccR45lSr2QmyH80UB7haPKsl1a8hPXSHG+c5LERHpKljLUMekLjrjz6mQUZ9TznArM5ipGRES4yaxyLHr2sg7zoRb9OnYrC0w8UHGt+mbwDx5dnP1lEXLBzbC+6KmgZPEMCncWXYS5GjPksjl8jTytjSZcMs55H8M1zv/yFG/7grgfwljJy63uySmBpNp6sNdyq1zIJPOVM7H/3O1748fPOSW/ptB8OwWvyBxR0XZLD+gZdK/tKgYA7wRLqboLKoWS6UbVUpq6+gduMChXtsXJVj6rsIP1kCRKeWgQa1W4nw759h6JC3LFjDNt5p670ARlqiUGKLOalPMxk7BOAfuUF8yPKDTAz6DGrXKajQTOm1XWAWUV3ShYhHiorBvip/HIH4fMMCbPVXAJfJEjScSrQsfM+88+X/u7dd2cvZtZNe8fHceg973/mx5785MZXE5sPWTaL1sJsPEVIqeA95enpxgUPmyiDHrg49FL2ClMGnu7xVFCyOJ786+U9EbzNLPa/2Soul5Lrla84GfKqHs45CBpjGU/T9LMf+i2DkeYYtFN3XGjqCsn7nFkDZPA5PLjQ40jkdQ7iYtwYB4inToBK99jmcWTE5SW5lV6OZ3lKnjnU37V0DHnWtMSdcd5nP3fDr95/f/hWpXk842RuuzuZK7dVt5USMFqh51xgN13y1ud/AsXeAwhc0ffavAPNEPTrJ6FAWkvgEtCQeUjhlnCgfu4zLJVCP7CpjpTDWgWsF7dWnmF6YKvMAc4M1HKxzYaEYcKlaMUfkmvDOeCMM87gbn0s+l1SIKFhApgPCUIEj8sdw+QV6JZyA+SakQ7Q2DkYCQJDpOglrR9v5kRYxGAbB/0FS1S41+twd5ZAuzjHhchCi4oUo256Bk/7+09f8dMHDoRzFpmdYI9xLD3jCfbQd334NX941hm4I+SzPgk5dLpRFMbSHHTaUIRAtV9QDp4gWW9QO7mjoywKtoVOjKtc0YQqvJYrVsOQXCoMxw2HVUaFtcpYjz7MbzgcKAZhmL4sHGWxjMKAj1BeSxwoa1TG3WkwMrbbzdDiCZvaql366GgTjuMu4+W5DL1+lS0uqvRDcjwCD7wm8mCfsE4cleBARHThOfQpBc790sgv+at4Jlz31XjW4hTkrzxx0cZ+7+WB+caR9bbz9Gb8xV+9/J4/OTATnkHi1nsSSsCdhHXaqtIGJPCi59Q//4pXPv3TnfZev7BwkLu8QGXgSsPghrpVCkdY5KtJKiwSjtojJSRsNKPSDuJo8g2nFZ9hmsKiS2l6Dyo4gyFFmjR5lz6Nqakumk1g165dGB1pMC6Hp/GKypWyCdT6gQrMLIGUr/iB9OjGj1ukK96YDtLWi2lcTKWPWeV3MKUTsZ8uKI/CfTje4/d6OWhbEWg2jX3nldZtw733Tb79C1++/eOzs2F3P/mmOBc9F199wxuf+8u1dPZQr3MIczOHuTj0MMoP/KrKESFQrho3DsOPZFfRhv0Kr4Uqj9wqjfwVKtpabpVObpVG/hOFiudqrmePHakcjZU4xpgwzz00PhV2lkZZZlmBdrsb6fp1ttGxJk/bMtLacYfONTrjHAKNedC4QCl7cwFxzEQjHqD6sYhjemPeAd5iIv6Bi4uCJwPmRlmXERTFtmR6Krzui5+/+xcPh7Bd6bZwoiVwfPzK0XF8PLZyPwYS2LnTpt9+yTP/7ZOe3LjNh0luzjuc6ilR48I9gY7uEh4rI3DXiYQ1NALwvDv2rgcmwvE8UlQbyS9lIQynFU0Yph9teLAe8ptR+YUATwskk+S4S9ex5dTkNBbmCoyNpDTq22nca9DPG0i5Bh5ncE8DpQ9wsCSFMR9ZDFXHUZJJ3KVrNyOA6aPhDw4Wjbcr85gBApY/ZqQrTyQb6q6BouvhkkBF3kFzxMESh243QVo/c/zyq7750auu3a+/r12PWTbhY2bZO9+w49Mve/lTPpPYbCiyWfTaPWS9AC10uNZB3LEZaMISBHP9WgQMjiP1p4CjfJRHOMpsayYXL2HNBMsiPENHRjDPdi8HwDDHmsZOBZU7DBaAOBaMAgSgeDpw0aiDfd1Fp9OBucD79EYEhySNaIGMd+i9zPPYO6DIjdcyzM/q8oUnOzODDLsARCpZr+cyOr7qQ80VwBYHumHpYd8yoF+5CxzbAFfDGMHcgksnDxffceWX7v+pB0MYYZKt9ySSgHr1JKrOVlWORgJPPBu3v+FN3/p727d1DszP7UfeaSPljk+TMB7hcrcX+cUJqa7WhNVEFTjpqaQgxESrf8yU5+jjhnNIiQ2iih+kreZXOtHlrgazpfo5tjdJEio4tZVgu4vco15vRuM0Pc37YZJ37RzH+MQo6rUUylPxVTlmxvzWJ9ElD8CRJr4J6a4POnyVR6AXYFpDlcZQPgPpGV/Sqq+Djrbrql/WRZIWaPUW0NWvuTVGsdACvB+vf+nS67/n2lum3shyxKzKfEJdo1F///uf8x/POstdMdLoFnOzh9DrtmMZLJeugwwIKAu1k4QT8pa8TwirFUw2k3dVWCmTKrTS1TzUrpzyRZqW441rAPYr5x+Tq46Kz3inLqSpg/7me5PHSXmeQzQdvdPLsRIIcEFgEcy+4lU5g1iRYJjABgQadKGKKhcHxjFvsZ6BfR64W/ch4WJjJyYnu+N33zX1M3uunfxx1n+0yrflPvYSOJKCeOxruFWDNSXAiVu84GW1v3/Vq5/69w5zIaMxKHoZuu0M9bTBFX7OiR9ANQCvScuJGZnRiHvjnsIVcdKSz5ouJ2zMstaHHHRQvAzepPxLVPGiaSdcQWGBtWBe1TBEg0H9El0pEKEKr5VO9ZJCDMZFCkdz4T3bGtgex7Yb256il+U0lnV0eGf58MOTYBKcd845kNJU25O4CCgVWORXAEUAjAuEYEYe5MWKaLcaggFw5J/AuZTeBLFNpFeyMjPGG9NR+fLLKH7LV2lKMD70+bK8QCl4n0F3+5YyxOsAJCly38DhyeL8//2/v/yHjzyCTb27PGcbrv3IR9/y086mbq0lLXTmpzEzfRjNWgPGhUrG4+GEshLg2TYJiW1A/ynbRcH1wyfCqXiu5UIV2QCG75aXwoHj5PhRtVUnGUJVLw4hRnmOOU9jXHBc0c8RRfHFWhvlCkq3x2uXhYWFOGcbjQbGxsZQr9e4M2d6DlgfAnLu1jMuUHPK3TMPFk+EOI7iIJNbyj9wPAlxwc75Dj5mBjOjr3odDDWiDjNHovL6RXnEeUVDHpCxrjk5Fuiyno3Gbs6l8W1Xfv2+n7/ultn3sG8GmZLP1vtYSUC9+FiVvVXuCZDAbrPZi1/1LZ98xtO3f7bbPpAVNOqOk9+qyc4j9hAKlAh0AZMS4SQPyBlWnOirA0d4zAxmy3GELBuKppLYULrBRMojiCbVBBgADnFeO3gfqFADjzczzM91qWADzjrrrKg0tSOpdk/aFXkqUIWNMjTKyqKyM6z3mCmeZcXy+i5EI6LRE40cop8uX9WVsfTxJZ1rBnp87BMZBM9+BBcNaTpuc7N45t//41c/dmB+U39Izr/gmbj+Oz/8xl8vegfutzATwEVGq9WC5xZx+/btlFuOdmcBzqUwyYftNitbYWYwM7YB0TUr/TiOx8wWeZmt9B+JtWQsHCndscablXU61vyD+QIHgO7ZNQZ1ciSj7hJA4W63G10OTbqBhp5d4zWmBEQZgY+xT+jAbKP1YgEoeSgfT/3lgKvUEjTlnot/6NcVXU4yF7BcBAS/HaHYtevWm/b++u13di+hjMWozLv1fcwksNSTj0UVtso8IRI47wy7493vftEvTIy3by2KKR7TzUPX57pHD8EDnJCB62spAx9q3B9o7nkajgyctcSxv2a2auYQAvmXZnXVBENEs5V8xGMo2cqgdiYEW0nVA3gLfYDtBLyqQK0YPNvMI0Pdp8/MzKLT6WH79jp27NiGRi2BcdGTcjeiAjyZBSpXo+KC1VCCiox1ZBSEQM0XnJWKkwrRw6Aws0HA0MMqYhFMH6O5qGIN6fUEpyLrF6KSZlAK1HoIrFeWB+TFSHLLLefcFm0AABAASURBVI+884ZrHnoHYzftNbPija8Z/ezFF1/4/wR/sOeLGUwfOkADDt6rt3jaof/8psGFUReNlLLp14T5MIg++aR0NK4qHKmC6sv1sFb+Ks+K+KB+JgYiKrmJpJ26xqZo+iG5RoMy5jjpZR3O64yL0gIF79KL3HGRxTGpoRPHkztK+ceMKjLCNE9AGstykVJ+NP4Cd+iwLmTUjQkD54QPTfhiwh7Z233GNdc/8Bt79uECbD2PuQQG++4xr8xWBY5dAs+5ALe+85KLPpln++bz/BAn2wL0P40lnIAVVymxaFWiAgCNRZzFVfQxu1I+QsUgllMFNuAO5t1A8hVJpDxXEEkQXXUxttcsgdFAO+4sO+0cc7M0Th3gjN0jmOB9OuKCx3PHXqfxclSeBbz0G/NBShicKnTN6KJ6mED0KiiLHf1Mw7RYFkfaYDimA7uDPKhEQWNunso7/mQ56VKiLkPBHXIgX+fGUUt3b7/00pt/4dbbs7eyXUmfxQl32B/tD7736X/6whed+x8W5h5qNRoZ5nn03ut2MNKoo9NqY9vYKGWUrdKio6sOy8J6ODpuG0s9WN6RcgymXc1/pPxHihdPcKxYHFeOxjqg1825A/dQ3OjoCBqNFI4LyJyr0axXcN4aB0idc1xDIKXfYOwJ01ilq/EinjiqJ8Bk0BfzDI5XxrF8/dAelIb1BU+9Qmggre/Gvr0LL/j61ff99t6p8JTF7Fuex0QC6rXHpOBHodDHVRGc/P4lL9n29y+46Ny/mVu4r1f4KSQupwxKxcB4CLBAGhBoODwSKgf6Q6C7OmLiDXxoYDaQamWSWKeV5A1TCthiWto9BOdLWKDqIYxDPEnhqYSKAJirxbYvzHcxOTkLY/Yzz9iGHdsnKIgCzjnouD33gffXAcrjzTEPIZfpwZ05+o+ZkUcS0Sctc8wUb8toCgSwXvLEWsrDMI06BK1ESNLuCIxXfbIeWJ+aHZ7snv9/PvXln3vkMM5jkk179VsU7/nQC/7d+eeP39DtPII8n0WgQalRflz7IC8yjhkZlwCjrNaCC8B60LhZD0dq4Hq8Fcee4Si3NeuANR51gbBW3TxHhLBG9kWyeAiLhMrD8QjCaXyQZvJzTASGc64kO70u2lxApfUEI2NN1Js1joQCPfZBQYbepzT+CXxh7AcjB40fufRWL3maGcemVZQ1XA92IgYfyS6CRBeYf5CXFqAEqwGXjHKOTKQPPDjzbVddef+/npoKO5hl632MJMBR8BiVvFXsCZfA7t02+23vuvD3n/TU0RtmZ/eg05tBURQAjYRRrYEqQUZCSirSQh2gEuFnzVdpN4KKgdJW/kfTlc4ZVkoq34wKj5qHOpLKLwDcWTgewRdUhAvzbUzPLGBkFLxPPwOjo00qRxn1hEa9Tj/zknGgvgPlZGZiSYhAdR7Ij6HqNZP5cDCr0inG8WORZla6JMR3MHdgOWAZEVSeVdhxgZH5AuZStDsZGiM77aGHDr/in/7pxh88eDBwFRJZbcrngrPxwIc+/Po/bNTnHwY6YX5uBgtzbcppnO486jW1rZSD+n0YG6nUcJ7h8EZ4rJem4rdemhMVV5U16B6Jt9IupXEwniKB/Z/nBdrtBS6cekjSgOZIipTy1s93aJee5+D1B6A794KrTo2XCA3NahwtMYaZDYQqrxILgyNR4SqeLuuCyM+gepFCXkpf0BuoYzy8cQKFCXffvVPvu+WOwx9gm2qM3HofAwm4x6DM06PIk7QVTznPbn/Xu171b0fGsoVeZ4YTHjRkKSdhwvnISRnvZqkNAudcxPpDgJOThi1sGI+2WKRaPPQtS5Y6EgrSaMf5Zfv5Fc1ocENM6mBUUmrb/Oxs/CG55ohFo95oNGJbtSt2jjt7Zgw0tkpLAQJUjAyiAuLj4nfwE8tm2kHaSr/yVShjYzkwrk0SoCjjdATrGFSdeplHY2TH6Nev/uaPXnH9/f/q8OGwvcx54r9m5l/6HHzqPe97zW/Vap0p/VW71kKGhdkuxsdGkBcdyqpYs+CyLWtGxwileSxBQWNVgB2/CgJ3poJGleARmCpQDgHls5SvXDxzJAahTDPc1iKedDCOAyYQgIPFcRriYlxGXWnq9RQjIw0kScKrjgLdTo6C05gbdroBWriLNwYe9t9ACCjDVf1QPsb+Y5vUlhKupA98LW4GHNtYxgWwYKc7dR4bGfUKj95DGANs+xnXX3/fr990S+e7WJcRbD2PugTKHnrUi90qcDMl8KynJv/88lc8/b9lxYGO9/OciJy0VBSBVogTjWFOagtxgpdhKpSwOhbrGVfqi6FFz2D+ReJj6KkGtAtUjURVPylCV0upfqm2ojgSmKvTKDkcPDQF7Xh2n9HE2HiDx/NdyiYgSYyyklwM4CkHKMMKpfJVQx3TGj2O0EuXcsZiWtEEIw/GLdLlB6IOV3SEj18MpFH9k9TQ7bZRq9e5+Gih1fK869+54wufv+bHHtm38G6msX7GE+6YWf6Wt57xN8+94OzPpDabdRYmuUDsodfrsd2UoSVrlmkxTu0UlIztMxoD0FWQ7SR/BGdYy43J1vmw7f0+Uj8dPVh4yT3061i5rJsiAvuyLKMcC2CHKVy6piTLMJheEWW4zKt8wygoCh84UJnYc3QqXrJwrqxPt5txbOZQWL9mWavVaLwzGvUugi94DVMwzJzeMay+SAGOVaPsBbItXxltIYbE2/EagnlimJWIrujRs/gpeZDel4vqtxipfuPYTBtN9LIEWY9ud+S8K678xifuuy9/9WK6Lc+jJgH21KNW1lZBG5fAcaXU/ee3vfFpv/H0J49cHfL96LQOwPMIr2Z1WFJHj0v7Wt0jK+ajojCuwBdhy5VURYdLACoJGOOFvsU0M5JK4AjPMmXQT2tW5jVb3e0nW9MxeJj0oQeMSk1wVD6OCtnBkDjAKQGVWeBOqaDSVFuMxtzzysG5beh2apg8PEd5AGedsx27zxhnHipM7p4SyiZFDZ68PY/pE9cgV8d7Q5B3g8rTRTjHEomEsQnbEl36wcfMYCaUacH6CUHGggZCdfKsH71MTXasp/mC7SkA9pV4iX+WFWg0J5iGirOXotcb3f2X//3zP7N3Ly4kcdPebWaTH/rQsz7+jKe7vwvhwazT2R+P/71vIl5lGIvmaYbaQXFB6LKuwSgnn1JWDnnIua/rLsEDuTfGGWiOeC0fVnUVty5Yht8AAsfvqghGQ2hqANQnQNlHcQyxnxI2pvJXLlhvI+RWiH1JXjG/eAzBr1pHwNKExbIO5smqRCFpiD/LTjje2q0CczwVCT7BxPgoxsfrANpotac4BnrIuEYqYTT+DrAaR3mCjGMHfELwqMDYaMgdeQUfQ0zr4INFsDKIYL7yZUdBAIz1AeUI46JBgINZYJkdJGkTRVFjeKe12yPnfu3Kb/7ynn3hOdh6HlUJuEe1tK3CHjUJnHmm7X3H21/yp2kyM+nDVMh6s5yLximZoFaro9tr0ziknMw0Gug/VCoh9K1jn6Rw4GQv3UDFYESQyonuEl1xK9Fns+go/WKAHoXXA5Mc8TUzKhJjuhLG+jIw8EohCSXJw6iiSvS6gfIYQafdw9TUHLQr375jDI1GjXQXw2YGM6b3oPLiBynSpIayGCNTgsofVHAM9F+LrlHiGKKbadrZkOJE/xH/vnfR8YuyRuRFhcrrEv2U8Xwrec5/+6sv/9GBmXD+YvJN8DzxLLv7ox96/S9PTHS/1ssOUl7T0B9CaYyMwtjGLO+C6xnKpwfvPSxxyHKP8qncMlS2wWKglCH6slzpmhnM1kZksoGPxtjayVxfvhZdRBkrdUkfDIuaIIl14lfBVeD6tMrtB1c4S/HRfsf4AVlxTAVNR5ZHkdJ457F+GpuNJkt3BfSHlPIioMgNnlc0+tmQPOM8JMM0rSPQVdsrxCL6HzPr+xDbY7YUBh+z5WGS2EGsM+sFgQQfcgRW0rHzLWkgrY2yLydw4EDnNVd//e4/OzwXtow65fRoveydR6uorXIebQm89AUj//T61z/7k0W+r21uhjvRGWiXl/DOy2egmqiVVaIh53aQfikTQVpELqE4mj9EMEn/dVrd9yd1n3RMjpTBkbAWY+Uzs7Wi16Urb5kgpwHKo7LUr7J12h5jo9uwa/dO1BsOSeoRoOPlQIPlmDbAKDkpMBkuDD3BUbGSFlgv6lL61n7NDGYllGqpTpS2lViie3pZl1BElx++CfvUknvv2//Gz3/ulp9i/k29t3zGM+ye7/2+9/2mc/P7k3QmdDoHMXN4hgrdIU0dXBLQ1Y/jUwYNHsP6kFPvZ4TqDICLEHhWUS6lCi4LjePKAnCswHE+6qNhFKxbheG44fBxFr9KdqlkoYwKNJZmhqIo0O3/cZl6vYnyd9QbkZ7nObQbz3mqozGptFoAIBj7hgMJgvgpTGHLewSYVXnWSRgcOScwU1oPH3o8dSk4Zxpc2DXdAw9MvfLyy+77WbZhbB0uW1EnUALuBPLaYnWSScDM5l//3m/55POfd/Zf5tm+TEfvKZWt8bgt4VGefjq2rHJpLIDAyQnCCLngw7hFo85gfDVshBhY98PJvCJetAorIlchDKcdDMu/SpZlJKUZRBUZgketntKY9+CMixsewR+enIN+0GjXru1Umk0qp0BFlVExFjRaKRLHnXlfUXrujJgRlHNEyXdJLmZJSRr4Kq2CcgX5BxGowAfDg/4qTq4AKVQ3imZzV+2qq77xvi9f+tDFpK8sdJDJcfpffRGueMclL/vdufkHZlwyi4XWNGREBLUnsbL9nsbFjIXFO/OcHr6hPFmIhp1BcFyZGczWhpJtJigv9m1YxHBZg/HDcWY2TDrh4aAVBLlqWETDnWVR3jXepcuoO+6MZcCzPp1J+Toaeh/HMcD+0Dhhv5gZ4/SWc7r8vXKFjw9mBvHyXKC1uegouNivN3bA2a70G7fve++VV899iHKsHV8pW7k3IgH29kaSbaU5VSVwnlnrfR948R/v2Na7udfZHxxX0er0JKlDysKMk3EAtFW0E76EqdWBHw95DXQZtEWIE6OXvytCnMwQVkSQIPp6YJLFt0q3SOh7Knrl9snRES16Bj7LaTl0D5gkNNS8723NF5id6SB4YMfO7WiOJHBJDhkf6k6mTahQQzzedI4GClwGUTiSGyMZAh0SUD7BGQLlW4bKr5nFNGZWEtb4mjG+L+yqzvo5ALAfBPYSAhK0O47Ke+SsL37lxt+6897sRWuwOyFkM+td8oGz//xVr3jqX89M38ND3jayThu9Toty8VwEjbNqxjotUG6A6hvrrgWTpTDUiAQJ25Ww9keqlPKuhyPlXy9efIfjV6MNp9mcsCNbx/ttRPDLMEB5Q49coUfD3Wq3kXMx2WiOYmRkBEmSQMZeP6jIdRRlzjHHRXuec6LGH5CTzIVkkR9ofNk7DDONChiAyhkIru/l4YtptcExWaulcJwkRe54FTDKU4NxNJtPmLjOl0uNAAAQAElEQVTu+vt+6ZbbirdTtmrk+vy2Yo9LAlsCPi7xnRqZzz8Ht7/z2y76/WZjYXr68B4q/xbqVAKV0qhawQlXegOHhVCG+NWk93T5clfFL1+m4RfL0omwNsR/GGunLmOq9GVo6VvRK3cphmqKCmY1+mCayt/LOmg0aww6yiVQOTawMN/jffo8xscb2LZtHOMTI0hTg+cRMqi4yjY7pmW+xfYbAEcFaQMuvfEVPYm+4c9K5emokCXv4ZSI9NBvWxUbzMFzIQJsT6anwgv/4VNf+5n7NvmPe+w2m/3Id130by545vbLpqfvL+bmDiClIs+7Gdc9hhp3j2lK421VOxyrW8qFnmVv1Z613GWJT1CgKms1dsP9oXCF4fTiM0w7sWEXx1Pwkh3odxwDFk+UMhp28NEuvdFoMM54nZaVx/IZl3rBoHyeS67AHTNo2MHxCY1XzWFCiy2yiHmrNsoVTRj0K7waZMAlB/0VO8UnNOqeY7LgaVeea9MwYe3uyNMuu/LW377rfryEaU3ptrA5EnCbw3aL68kkAU5M/8aXb/8/r3z5M/59KA61erz7zLN23Alo0ofAyU8ACa0GAWP1BYB5+5CfBg+GxZ/iNoPZ+sAJeqgISk78DvoZjK9oqyFGrvJRWpELtttT0WWFh6ciSlxKhZljfq4D/XTx+Pg4dnKnPjqWAkaD5SgDLoYMKRVmAjhiQAYBfOKuvHTNjB7A8+tZDp34mlmUXTBOQSMPKdoYow9pcogiBAiqr0BS/y05JokBqoMbizuie++dueSyz972S3vnwpn9hJvinL0dD3zPRy/5uSc+uXlzL99PWfS4S89oVLhlY1vqdcpLJVOxI1QLH9bZenCUo6JY8dI5Cb5mFvvjRFfFrORrtrrrKKsSiPNxvfLNLEaHYHFH3uZO3cxQr9cjFNmloe9mPRTanXOMZnTzoj+/adQ9WbAXlBSgUccajxkTrhE3SE4cuJgzLip9RIzjeDbOI0tHMNcqkCTbOZdqF1z2tZv/eP9+PDum2fpsigTcpnDdYnrSScDMuu969zP+7/O+pXZj4Q9hYW4/FWuAjsuiUedMjy6VReBxXelXMwYndiBB6oColEHlMmazXxk0YbAchSsM0of9q6URTT9gpP8Mo/TXoZ8rkMIMVLTT0/NUlDXu0Hm0OVqHc54ISGuaNg5Zj3JgOoDh6BqLrfxy+2FSoTTLXAVMn0VI5nEHFSnMH93laSJp4JP5LBr8IgfrNk6lun37jTfd+xPXXnXHj7BN9YGkJ9TL8eSf83S75j3ve/W/G23Ot2amH0GRd9lKQ6/dRdbNaSATlmlYbBPHiotHvTnp5eu4s18PLId8bE2UXDb+pUyWJa74LyMOBBQ/EIxe8agQCZv4UTmRPceX/I6LtyRJ2M9Ap9OJht1RhtqlpzwV8d6TVqDQArUAXeP1kFDu7sEeKhG5Hvcnz3OOOxchWXGGIA95RMErlXqziU7GEtPtyaHDxcu++JXbP7bZi83jbtQpzKDSGqdwE7aqvlEJnLMDe977gVf8Xq128L48nwrd7gw429Go1agEPJVmytV2HZ761qzGXVfCnWWIkDKJUCgUMZ+O7DSJhbXqoLj1sFa+jdBVn0He6+Wp0i1PYzxm90hcjeTAnXknKiK4BEVu8ej90MFZjDQbOOPMXRjhLj1N2XYqLM+dTz0diYqV6oovZcXFkA9AME4rKmDqVlRhlS/FG8wYn6BcNCgx00rJskxL6NfunrUpFXPOPjGGDJ6OUCDQJAbmZ17GOKb3pCT1hAuMgunHMDNjjcsuu+17brl39k2UEXMy4Sa9r3hl8+/f8pYX/EYtnT2YdabQac9x/AQ0G2MoeiHK1sz69Q2sH+ECnAXWyBPH9yYwVCDbuMtdyzV2xnAc5RPrJherPKvRzQxmJaqy13KHyxsOr1LkMlI1TlQPQeOiKGSwC2h8zczPxb8roV36CO/TnXPR0LdaLY7nDEbpFNyhZzyG9zx+d5zXzqXQOJT0xROrPKILZrYYq7AggplBZZkZVB+wnMAxr3j9TEpwGcCTmIzKpGBXZ1mNi+Oz8Mjezju//pWH/u30dHg6tp4TLgFqkBPOc4vhSSoBM/OvemH695e87SV/6IuDrdRanIxtKrQC4yOj0BGedolpwp1q7qHfYwUnKWCID3dYpcsZGj1g3hDRDz5qjhTHRgpTuvWA2LZ++7DULoSEjUvRWujx+D1Dwl2R/qvVOg0nINmkMHNsOyCZCYCDWQKj61wKZ0pThhW3BMCoABUOKlIyFuAgmmCMN/KSH2s8MvDBAM8FRuF70B+nARV6o7kd09N40j9+5vJf2TvdedIa2U8IeYfZ1Kte8KQ/fv4Ln/CfnZvtzs8cAFgfTwOi8RPUQI0bIi5FGBYtLgbhowE+nopwTKOCDIxQhY/WreqxXr4qzYlyS1kErOWW5fTHhcaIAHZ6BEXNAdDr5TTePaje+mty2q2DY0m/oprnBRM5GGqc6z4u3AMtuXFsBeYVf5Ut96jBPi3zuFgGYt1KCixnsIckCdDJQRFSll2HJTvG7n9g+sNXXTv5q1MhbP1HLn1xnSiHPXGiWG3xOVUk8IY3nPmPL37hky6fn3sgpEkX7RZX+d0FGnXuOKmMzYwTscbdawEpBn6guS9QF1ANc/6aqMshxTCM5SlWhswMZmtjZY6SYlbmKUPH89UUEMgjKqhAj17SaNR7vQKHD8+iyHLs2rETExMTrG/oAzAaXm8OQjDuvF3S9wPg7pnf8g0GwMGYhhGkOQqRoE8yo7P4mlmUN+iWxDJd6S+/3pg9BHgfSgLvppNazuPNLnLuyLwfc3d+89BLPvvZG376YAgTZaLN+T7jGdZ937ue81/PPTe5Mknmwsz0Pp4WlMfBATlgBYzXFeATKNPAKx3WXiEaMsb5AO2eV8PwjnY4TCYrXjOj6EqsiBwiJDD24HIMlzEYVvrBME74o74exlIh6vdqDnrWXQMl4715u9fluAMajTq0Uzcu7Hqk92jsdfzOE3hwCLNfPGVuZOiI43uHx+0iN84j46mREIoeWBU4q3PR4aD79G7WtNtu3/uO267qvIc8jr8iiwVvebaE+TgcA9ubuP9tl3zrb5x9bv3uVms/J1yHk20WzSYnelEgcDJyoq0jGabrxypdhT5pmVPFreUuS7xKwMxgtoRVkpw40uAOo8/VURHNz7UwM73AeiTYvn07xsbGAO1AqLiQOBgc0DfYiDwctAsKpJnMhSUwIqYRTX4ARrcE88PIg24/P8STCNLg0MM4OcNgvAVAO/Qk9YylUacST9NtaNTPTq6/9p7vvPwLt7+XEZv6Pu0JuOe7Pvy632o25+7x4TDltR+ed+oINNisoBGqQFAV1a4QsNaYOBa6956Lm5VQmethuKzhtMPxCg+mUXgzUZZV9f2wC5gZx41x911Aht3MUK/XUONJkuqlX2WTUc9zzmuOPVD2uk7yXPQZxx+O8IjHmkniWF0zlqcv7GzOkZz37EplSY3j1FCrbeeic2T3dTfd9Wv3PIDXKW4LJ0YC7sSw2eJyKknAqF0vfDquevs7XvxHwR+e9n4K9WYR/zY0uNMDAhVEBv36UWxXnLhGsoYL3UjUR2G5q2NdZbB6liNSWXcM4ogZjpCAtpCtVSK1q4LCXh8udhwSKqL5uS6mDs/z+LAW79PHJxoA7whVl2AOHgYvZlSYiPJypDigHy51qTHMl4GYnkEbNPjMAT5ry63PjzwDeQied5QJFxV53oP89ZEESWLIqLCLoo4s37b70i/f/PHrbjr8GvJNyH5TXsrBP+9Z+NL73vuaj+fF/gPcqaPdnkSed2jTPct0bN1g8RYNOiOO660M+VpM2OZYzlrucL6KX+Wula+iD+c/2rBxzAxirfyeY0VYinf0lnDaAjMk463/xId9EY16vZFyTPj4q2wy6uC4NI43z4Fa6GKbYwgcSziGp2p/YH6hYhFrxDbpL0kay6unnCcsL8vbaDQTZNwwLLS4a0/H0M0bT/7ypbf8wa3f7L20yr/lHp8EJP/j47CV+5SUACe9v+g5jb995auf/cWpqUfgi1lO/nkag4JTNEe9lnI1na/RNg0bYY3oPpll9H0n3hHvjeBIJRvPTyMsgS3CEHmziTKSDf0Z08Jh8tBcvFPftq2B3Wdsp4IylLrU0WhYBKKSBOm8Q3cp+TiCvKlISY1+VA/TmspUHJWf4gErF06LYZRhOnpVL7klPAJ3XvXUoeaSuEPzvgC3RlyQccdWqNztNjdXf/I//uNVv7lnP56MTXxYt/CKi7b9w9ve/uL/Njv/ALrZYWTdFo066xmtkYFp+jVwdBNCLp1jfMVPOMbs7LOwDOKzaKxCUHARg/TKvxj5qHmWy8vzZAKcsTr50E5YRj3Luhx/Lh696/46UPbavRc8dw8cc8pScGrLX1Vb7an8kmeFila5olf+0lV9BIa4G+eXr4PxagVEkXsuLurULTnyoou0loDVQRFqHAtjduhg+3nXX3fH7+zbF57KjFvvcUrAHWf+reynsAQmJuzgm97yLb/5tPPPvnKhdTj3oQ1w11n4HicekOe9OPk0AUsYtBqXmvMABE1wgcFjeqVIjgZVIVWeKryWq7qtB7BFyqs2BSpGVIbURMmjsi/ygCShUuKud3p6Hu0WMDZaw/ZtY/EUI0kSKieLEC+Qj5SoyhWXYCVV4dLnmDYpvfyqLXQWX6WroLwCWC/D8jwxH++n9VPGScKdUEh5ddJjiwpY4mPd8rwOZzvx0EMLr/jiF274yWP+/9OxsWfXLpt5z7uf9vvPuPCMT4Uwn7c7C+h1C0QDokHE+vKACIYaRZ8ekanauB5WY2BmMCuxWvwgzdhBFcCdpFCFh132Gg0VlgHH+ZiV9TRLYBFVuHQX2bP/F/1wS1761f+SkXbqMvD6dTYZcI1L/ZCcjLrWed1uhm4vZxON+R0K7tKVj4ENvWbKVyZVvsCB6WFQt5ZU9GXjuKZMiToXnIaE+dKaccHZRuBV1ei4flbHod0BRkbPSPftX3j9Vdfu+c29e8Om/u0EPA6ewZHxOGjuVhOHJfDUs3DLt7/vhT+XJvN3thamEHwHAV20uwtw8fetfcziPCcpYVQsQiQOfMwMZjZAOTHeUnFQ6/bZVeHK7ZPpVEN5LZdJ1n2H8ymxg5Rit9uFIUGjPsYdOo/ep2aiUtRfkavVHbjpQMKmMzWAlDIsd+zaCYEKl0S+DqDsyjD9ojAcYtPK9EvxBjMHQwIs5qd3lbfRGIF+OyHPCqRpDalLIMUeeHed5zmNep18GqSN179x6wPfd9X1d/0gZTeyCqsTRjpr3PZ96IOv/zdpOnlX3ptCkXFMFWRPze9je7hjN4qDQAw7Rur1rKuXZxWIXkHRzMMdYKBRYXsgiCrIX8HMYLY2lL6CmVXeNV0zW8avKueYXavksOSuWTjHy3Bc2ddkwoiEC0s6cVHX6/XkRaPRQL2RAtw9axz3oKKoXwAAEABJREFUehllZQiUuxZZPo6xapxRpqRjQ4/SDiQkf8AvEuQTdG230G5Dv1ZX472+6qBFRxEC0lqTdU2R1s9wd91z4D03fePAL+wLYWyRyZbnqCUw1CtHnX8rwykuATPzFz0bV15y8Uv/HxSt7tz8NNJGAqsVyAMVMQrqggCjMqmhjtRqXHlz2HACW6opu1wA5LdM4S2PXSXkqIz6oG7GMGAJhEBFsxp4iohheDLZKKIOoqExeiKMbTVjPWhkjcaZRqNeH2VsgP43K7Cu8wtdzMx2Uas3cfZZ+uGzHAnloWNv49F8EupIkwa0S5fCFcCHNjbKruZqSPgvUKmZ2TJ5GekAy2YbGE1fEmFmGHzMjPkS9Hh6kHKhUcC44ypiksB7Ssd2uMQjy1sIIQMtOjpdjH/hi9f92NdvmnlNTLiJn4suwFU/9P1v+52am3zE+RnfmplG1slh5pCz7u2c1zt1Q/CshAfHF10JSFtJusbxZup7kj1l610BAaYMoFMDfA1G6RjTCWwkVkOIsmRZq7kGkBzhweP3gbDooq0HsPwKqoNQhYddxQ2DFQaHHwLbVWDlv9h2xrHBiED1OHoIdnkC47hKQcECHD9pyrEXgPn5ebjUUG/WMDLWREqDmtGKL7Q66GUB5pp0QTiWX2faBpxLeDKX8wqugMaQwZO7h8rWeBUAx/SOTiIfy2Y89IgueVJirLPalIec5dZYRkG+CedFk7zBfEwTAvLQ5PwdYynbx2697eGf+OblU78+G8JucdvC0UvAHX2WrRynmwSMRv0dl5zxPy54xll/54uZ3vzCYRoHTsQ0pXowgBrHCM4/RA1sniIQ6BznKwVR4dhYaQgLyl26QZpYQaqN6Cy6ZWj5t8xT0QKValkfg/hYP6/84ONMRh7odjzm5joYadSxY/s4RkakDIGUMtMORD+ElCS1yCMaLVCOhPzi7+hPnCNHvQb2AT0KE4FgSG+Z3ujt0wbiSGR/kL5Io0EKIZKrj9GwB/aXfmXJhxqV6ci3fPpTl/7mIwfDRayHGFdJT6jL9hRPvmjH37ztTc//+dmZe/fVky6yXht518NAGXJh1NNPwbNU4yiTwSAJxuYAHqwb68r2WAIjwEi1w7M9iI+D2ZGrLz4x+RE+G013BDYros0s1tPMVsSJwGklR6Muukf7MTPyl4yMWR3AsRDIVO0RFhbmGQ80OE6TxHFeF5Qt4H2Ix++GGgLl73mdVB3BO5cyj8a/xpInX4EOxxG/Qy/jVqOLRqjPygxGnqwfjEGBDt/AsNdGIR2HS7bXbrr5gR/+xnWzP8y6KzFTbL1HI4EtoR2NtE7jtGNjtvd9H3rBJ0YanfuKziySwEnPu8/YZCrTgp48eKraDJ73YAwyARUuDQgnH5XE6v6Ybr0PFYuxrEE4TnJHJSNo6q8FForBfIN+aJcHKpu+uyYPpSF0RM0GxZoOt8fz7Fw0M4OZxTQ6OpybXUBOwUxs24ntOyaQ8p4Q+ktyaeDOw5NrghB/5zoFqGhBOcogFZKZsZWuT48cbZG3mUXK4EflL2JAYTsmciwJEQwMvEqfpnX0eh7j49tpUMErg8xNT3cu+l9/d9XvTk3hiQPJT7j3qWadi/7F0/7mVa996mXd3sOsxzTyXsGdumGsOUGjwlpbgMaTBw1N3wCYle0PcWGWAKGE0bAbHMxobDgGAwE+7GWsi/XSsCiWDIp0VQT22Xo42nLV94Ng1aB+knssMLMoj8G84leh0//zsAmP4xuNBrTg1FWMxm+Px/KeDZCcNcaLPCBQEEmSwnGxKR4VX+vP0SrsuAwQqvDRumbGLGJasP4FeDvE8VBHq+3GbrnpgR++7Zud17N8x0Rb71FIYEtgRyGs0z3ps56EO95+yUv/X2czraIzB+NZtqNhBZUopx4CZ7Wn0qWGjaLghIvu8XzMbEV28a2wIpKE9eIYvfgqnQJyBfmXg9psgKA0w5Ci8/0fHlKcWcLmO+4eQSUUMD3VIgeL/yvbyGgN5jwSrobq9RTa8Wjn43kMr3xmBjNjer40VmYJzGwRQOkH5W2UuzEei4+mqrBIWN0T+2cpqtfNMT62DQvzXdTq3AVxJ5TYqLvtGw+8+suX3/f9bFNtKfWJ9z3HrPcdH37+n+w+I78MYTKbOrwPRqPR4rUFQsoxZVg0cLQugVWgaCgCg5lFAyODI2sbvAPrS9NfMFhBOZhpg6/yD2O9rMNph8ODeau4QdqR/MpzpDRHE1/xkyuYGTo06jLgus/W/85mZlxc9Tg+PRd5BV0acgrdc3HtKWMEB+P4g8ZhHIMOyx/NG8++KMDOxPE8XDdAV1k5y/VFDePj52J2FudceeUdv/3wQTzveHg/HvMO99TjUQZbbe5LwMyKN1+y889fetETPz11aE9h+o8/uGqn1kXgfax3PXmZ2gjAqADwKD9SUrFIKh0I5sGKrASqh/EosbQLL8NVCmDQKFRxpcJSeZQLBKX3XvGO4QRGpTe30MPMXA88icf2XRNojjg47tKThMYoBO46HAKVVZBydMyXMEzxFczNdQKMClN8wKcqo3JJApwBRmDoUduF2DbwHhMwlufYFAdAfSO/maHbzaLSdtZArTaBBa5BGs0zGpd+9bof/MoVe97NNqbYxOfJu+yyj/7LN/5Ic2T69rGxAtNTBwAqb+NRa+xDtpH2hIbaEIcb28E6xRo5fdVOwohgDoF9HlzOrDm8FUeFwAXXIMT+uGAeFPaaCGzVIJTW2DEVcJyP5CSITeXKX8G5hAvPgka9yzHg2f816CffkySBfhK+w116lnvkOnL34OKKgFHGBCR9BzOr2MHgl2ExYg3PcJ3MDGa2mNpxTmhO1WsNgJOo1fbs1wk3M+9edtlXvvnxrZ98x1E97qhSbyU+7SUwDhx6xyUX/Nr5T99+9ez0QyiyNgqfAzzeDBbgORcDJ7qjcgVdHOdjZis4SAlUWBE5RDBbmX8oyRGCtIBrpDCzqHykdMwMgVanhPJo6jgY7yBnZ+bQbufQH5vZvmOcStMAyqrKB8pJ+eQaDZIAPqKZGX2AcXEAPsZ4OjAaeizK2GDkYaQJWPa4ZSEF4sLFAusbWJca69aOu/S2/he0HlCrT6DV8lTwzd1f/fJ1v3vj7YcvVr7NxIsvxDc+8O2v+eOZuXtmk7SFhZlptkjrCMcxxfZZDWDbgwdoX7gQomIPIbZBCxV6o1/jokBgHh8BMAM251FZG8FapVd514o/Er3Kv1F3kJ+ZZGpRjhqHMpr6bYgsy6JB15+HFd+cZ91ZliPPKE8uPD3FWXC6l6dKDlgcg/QPFnAC/GbGcoE0aUL1AI17xhVdwcVeo3Em7ntw7k03fOPAb83Nha1fZ9ugvN0G020le5xIwMzCU8+zO779vRf9x4nx9nyve5iTboGKoQBk0GTRqYrRR2D4mEEtXe0ktUCokED/jF+LO09uaOg6GMuq0jiUNaAD1llOH9RIUclXbp/cd0IQPTBUIrAODPAtw/QM8ROFYNvVfsFoWMVGys+5hDudAjPTc+i0C4yPj2Lbdt6np076iZWkwaKsdPQefA1BPxDGsEpjo1hTR51pYNMQzFjQ0mtmMCsBZ4h5GG0sX6A3vsYIo08unYHXo9trQ/+f+3xrAS5R+Q7ajfmQIqlPuH0Hek//0uev/dk9BxfOG8h4wr1m5l928cTfvPSlZ/1NUTyY9XrTmJ2a5diiceYdeTAad1cHKE/PlsZeUsdDPi9RwZDAYtspC4vDEZIbUKZZzdXiRlgtTrTQ5zPsqg6iSe7rIRhTrgNVfDiN5669AtZ4FsflGvFL5KrtSxT5AgVTwSg38JExL+/NfbxL1049UJ4Zj4p6MuxcSRVklzNML4rYL5Q1HNh/5FC+kqdblHlJO9pvyc9goUbuKbIig+emoT5Sg+cYyPImavVzRm6/Y/J7rrlp7nsoj+Roy3g8pnePx0ZvtfnIErjghfjMS1583p8V+b55/RU5TeJQari4U0Lg0BGOwIoTMaZf1fVUFuRZxa3HSmnWiy8VxHopluKGeQ2HlVL8BO1sKojuuIswqiDwKaj1iqKgskuwsNDG9PQskiTF9u3b0Rypw3i8m6TGlKAMDKVRTxhII23p4yIPiG+UqTFKcExLiE6YVX5G8zUTrz5tMZ/CjNRrgQuxPBp19V/CawC1pcgDms1RzC9kqDd24657J1976Rdv/8RcCJu6EzrTbO4j3/2KX9m1q/XpxGZ91p1GlvfAmx22M4XRqBtPPJyjn8bcKAKjDI3tiE1Xm4gAR5MPpmcCbOxZrY/Xynk0adfiUdHNbM16rlXOWvSK56BrZoPBFX4z4xjgoiOEWA+N1w7v1FWG7tOThAbUA1mvYLoQx2ngnPSamwS48ANYRhxfA2NLPaB+CTiOx6GWNngd0IPmC5AjK3qoNepoZwEeYzxFGqvfcsv9P3Xj7a0fOhACDxCx9awjgcEeWifZVtTjTQLbzCa//b3n/+4TnxS+nGV7Ode6CAWHC5fw3gNGDevjHTppWP2R0lg9ZomqNFIgcj0ZDwNU3oKZwWwllK/CEtcj+4bzVOEQPJWaEOgGRAPeL1dcy7oavS7GFTyfTNOUiqmOhfmM98Mt+lOcsXMbmnVwB9JDo2bkZciopIz3xmYJdz8eZEsl6mnoERF5cydOxtAjWcgdRAB5USaBQB/yB3NUsUQITC63YJmMSQKVYhdJGuADjad5uJpDj4ozTWpM04D3E82bbn7kg1/93J73hkBtTg6b9T7lTNv7Iz/03k9OjC3sTdw0OvNTgMaUjnx7Hp5CMdarCDnJHHMhY7t6rGdBlwiBfiMSxh+5lmYGsxJrpWabyU98S1TpzFROSRtOU4WVdtCvcAWzpfwVbdA1s8Fg9ItX9GzwszK9Y84lVOMXNMjBWxxnOl7PuSMHgNFGEynHjnburVaLiz/KmOPKcxjEXTt36wX9gXUN5KzXbGW9Rd8IVN8KSl+w7+s1Hbn34NnnISni2AycIzpJSpIJdLr18y677JZPTD3Q+VAIbIgybmFVCajnV43YIm5JYOdOm/7297/8k2fu6t3dbR8KRXceqUtooOrwvkCSaPh4rPZw4q1GPmqa+KyHo2Z4gjOYlcrN8/4xp8FuLfSwwJ2vcw67du1Arc54GlEZ/YQ7zyzTjt6hXm+iCB6WuGhwVC1DAlCZhmCQAjZzMSx/BOMQYaQbDRxoAOkVLeo5pldekSI8v4RRFVsBROR0cxqwIubtdHPWZQdaC42Rr3711h+94ppp/ScuZIRNe573TFz33ve89I8M+w83Gz3MTe9HLQUcZcZhxbHlo9/xdCP+VgXlBx7HOsoLbKcRcpkDpbtpVT0qxsPjVJmHacNhpVkPZgaztbFeXsVV5clvZnLY94GLvAI99r1ZYP/XIyR77d57vYJpmJa78xAoYp8geIY1zhbB8cehtWy4Re7H8FH/Rr6DecmctPiHk2rb0MtHtn/5Kzf+/IN781cNptryLyDKfwoAABAASURBVJfApk7c5UVthU5FCbz42c0rXn/xs/8Mxd520Z1E3unyiLTgPWwPWOUvxamNUiJyNwLpiVXByeyJghplPbgAXVMOwNE/iOF4Y/wSzBxsVQB9/Yf1HmMFtJN2NDJGxdeVQZ9ZQMEd57aJCWwbH0NCRrRVUWkG6qmCR95wKYztA7/WLx/9x4zKkjv1QLdPWnTMbNEPlH7JD4uPowYWne4ijYXCQ8fujCSVQkNgOMDSBC5potcbQWu++eyvfeXWP3pwL17ERJv2mlnrnW/b8R/f9MZn/o+i93BRT1qYnnyEVcuh3WKeF0hqOjnw4BEHwDtn2h26iEEXjC5BeSM+jt9jg/geDyDhE6b+H4LiVqMP0ljxZS9lsyx85ABlhEEsz8FDL/azkehgltBFXDDpiF278sAE9VoC3aerbBl5GfWc4xdw8JS19xorRj6AIYHSBVM4YN1nI5FaZKr+lB0Cj7S4iFC5oJHXb9V49n2wGrqdOuZm6k+77LI7f2vfvvC0jbB+PKZxj8dGb7V54xIws+773nruf3z+c8/7H3n3YV5xzSDw0tN7GnRONk28QW5HY8wH863lF7/1ECf/WplJZ/2jAlrLLfNrGgjMMPSula+iK7mnUkQwpImOsA2tVpfoIOex5o4dOzAy2kBC9kkKpFSeRRFoQHMkSQMITiz6sH7Ysc4JnEvpOiIhqjgldfqsROTlEFiXSmZlogGFT0W5vM8cZmfmMTKyE7CJ5OFH5l/0D5/6+q9MtsITsIkP5df6tnc/84+f++xdX8h6j2QWZlH05njk28a2iR2YmZmDq9UHahBACaBquQVXhukOJHrUvWwHhBNVsPrtRPEa5DPIV36NWY1P/X66/DVeG9Xr9dgWGfVutwcZ9TiWKPWCY8qgcUi5WwKQVoLeY341LnOO1wJG/ggJnE/7c4D9bYj16XYLNBo7kdZ3J/sOZK+54ur7f+vgQjgXW88KCbgVlC3ClgSGJECF1XnPtz3/T574LcnNRX6Ak6yNhLvzXGd0Q2lPdJBlszxbBUmkSTlFpUOFsNwNVBSCdhJrA8sMwirTwQKobbD0eHoFOnwd8xt3aKqHcw6pqyEUQIdGfX6mDSnKHTu20ainCJ532UlAkiRUlgFFrvJKVO3EwCOaZ5js+V16RUdUqNR9JAfzUBqBwfKlPJSmrL7KKMn6qq5yBSn1tFGPP4xUcGESQsNuufneiy//2j0fZTpqV6XaHJy5Dfd84N0v/LGnP6XxT2ky5WfnHkGjnkRjPja+HQWvMQKMhav+cumFZ3cEtt4rEGFMd6yIDI7jYzJyQwDHxIYB9mHQOC3B4LJXxnY9sI+wOsoxD0oqxLGwVM5gAb1eB/o/1HV6M9Kso9loQLv2dqeHTq/HMWrgsGAWuuYQxK+CkXxcbwC0Qxegx7GSNUozVQDguC6KHHXWKctTLoLr8Jiwu+4//K4brp/6Sba7jq1nmQQowWXhrcCWBFaVwDOfilve865XfdKlhydnZu6D1YCi8MvScoItC29+4PiHr+ocaAmjG0qlunG/0dxQyVEMUrqB6kbG1qiSqIfQ6eRo07CPjTaxbdsoXOJhzqNeT5G4Bu8wGbZyYWJmKB+jQiVYF/E0xUPtdDBjGhmLMmH8mguRbsa4SNHH8UNERU6XIfR5RC95kD29Ds7SWJ9etoDGaErDHlCrb5/42qW3/Ozl10x9kLLYNKVpZv788+3u7/rIxb8a/ORtRT4bJif3s6pGxU6lzh0bkEqqrGv5WgBc9AY4NSIeBwewnseEyOoEf9guVNhIvQaL30j6wTSDeVfzqx6iV3nkF0TX2EHwXFz2oF9p04JUu/SUu/WiKNBp92hEM540+WjUA+eJxqTEHjS2OI7E63jg2LuCeFjkx96NrnEMOMrRIbDPiyKg4HgoigbSZMfYtdfd8xNXXt/9AbarqbxbKCXgSmfruyWB9SVABeBf9fLm3770pef9J6sdbmtl7/VT73Hyce5p1q3PYtVYzlUsBycwVXbUF5rTK8B4E1ZlN0DU0GY6MgoRgYphJRYz9NuxGB72yJIIQ3Txdjwad6qnFjg0MImlMDSoKAPm5haoFHsYHWtg+45RGksaogSoJw2mqaPIqai4BRIf9B8zg1mJPimGKz9YVzOLQepY6AfHtEsXPBx8jHH8Ckont4RjXkd5gOmkoI0Lhrm5OaQjBVqdg3C1gHbHY3Y62fH5z13/8zffnm3qfToriWc/E7f9iw9f8ttFMTfj0oILoQ6vLNoIvCMPkiVXj6qnmcFMCHBGwJQdZctwbG5gvuMBa1CVbyFgGFXcWi4NEgZBdvGtaDFwpA93skdKIn5lmrImVVhG3HuPjEfsgsK6T6/VGjTiHu1uh9cgObLcI1c6ju+Mxr7KX/I89u/qfBwcj96dr6HRGMH8fAtjE+PQIiOpjXCBUYMvJkauv+Gun/vGHTPvIA879hqskfMUJat3T9Gqb1X70ZaAmXXe+f7n/fnTnrLj5k5rH1z8yWNHhaRhJLBGUi59OHiIGkFDgsUQFwAmeGZY/+VkJf8wgIJ+QbSCJayf/0ixK/mXu2PqZpYTjpQ9Kj3KBTpGlxttZTQ05EOD1OUufZZ31MZFyM6dO9GsU1HmORIXeBzvopIseGTsufsI3I3CEhjTSrGKJ9RCGq+yIg5mFJwCi/JUoIKrPItubAH5VYQwJHIdtY6Nc/GR9yLvwBWCuRE0R87AwQPZc774xWs+9uCDYVeVfzNcM8ve9oZtf/XOt7/sT1uzj3SyzhSKPKPSLkAxsUgfF330xNeCI51gaGWLSXwU38HxM1hsRR+kHclf5ZF7pLTL4imPMnx00ojlmMGHgB7l3el145jXLr3RqMXxoDt27d7jDpmLT18wfZFy3CZAqBEpMViuBphQ1kh9hcV5P5iujPeME6oQNN4ZMDN+GSoA/VW7VmueY3IU+muHcE2MjJ6Bdqf+pGuuueu3H3wwezHbUmaIuR6/n5USfvzKYqvlG5DAE7fj/g+87xV/PJIc2NtMpkPezVDDCMCJnmo0+YxTNEPqAhAK7lg84QijEjYAhkADo12l5/EzJyLTKW1gjGKZnpPa0YitCzC9yuDiIfIacgss/+dZ9CAK5hfAfItA9Th6BGNNhrDIx6MqNw85Cu5c+FI5sjlMEw07t+3m6lQ8AbNTXYCKcPfOMzDO3XoIC0jSHJY0WNMRZDT+OY/qA426Z920axIc/S541sfDKBMfZeeYx+ApaeMpiRUJAvMzUXzNDIGyEdTmgjwKKm1BCSRz8wUMPcC1kRdtOO6G4MfYZaPsu3GeKiQwN+YeeGDujVfecP9PHj4ctivvZsHYuHe+41v+3289f/xreXtvyBam0FtYYM1ZR15VBKLb6yEEQ73GXVqXUsoN8IAFSBIR5AM9aqPkJ1dQ21eHkYVbFQXLOhJU1mpQPbQoWy1ukKa6VRikH8kv/oLvj4fSpTisgofGp2aBxgEStjHGlfQ4LoKhm2VwaYokraOXFTylWYBHgYb+D3X9MCfz6afhWwsdZD3KynO8FlyUFqPsm1GOoTT2CbioYBcyHBA4tgLvnIz9YiqIMO64TWki1LoYicBei2DdwDEL86RlkKsrAc+5xRbBOQft0OuNJuMSjlljWeOYmhk//7KrHvzDRw7hhTh1nk2rqds0zluMT0sJUIkUz3sG/ucH3vvq3zx86LbDtbTNI7EZpIma65Ekhlqthk5rgXezdRjJmth0Bl6/6Cc/VFgk0hMCFQNB7+ovJ/7qEcupFe9hVwpCWJ56OHTk6VHxBRVTBU9FWdYfVEKBO03wvrzg7oKKiunGx8cxPlqHDxmMRtybUYmlAHfp0GMJIAAwMyIhDHrMLPqNfCymUR0r2lI6bPAJXHSpriC/clFgMHMwU50cj1rT5uVX3PzDN35z/+s2yPKYk52zw+79nu995W823KFDdTfHK4s5tOa54MgCFbhH2kiR1hNMzxyGfviwUaNy75dWtqEf6Dtm1vdtnqNy18PmldznTAOJQfTJG3WSWoMGvDSWaoeMZvy1Ne7Y6/UadJ8uXlmWo9fLOJ7BsZHSaDt0ex5FHLOVnMtxY2agGiAC9CRI6DCN6slxxgCwbP4yDtUj3eBRjsuCRIXBcBgAyTDWu87yx93hGffar156x8cnQ9immMcz3OO58VttPzYJmFlx0Zt2/n8vfP55f3V45raiMTKDYPMIPqMCqEfjlVLZmqORktGJO1XAOG+NE9nM6CfiRMej+pix3KPAkSpHVkwSoN2QwEB8pcoi+ouSbtbD/EILee4xOjqKkbEJOO46tAsp1V2pxBAVnqalAZSdp4w86CfdGAYfM4PZcpAcX64l2BfRy4/40Bl4vQXWNQB0wSdwZx64ewrKyCsUcz3AukQPxhOUerOBIndnfOWLV/3K/Q+FV1Dpq7rYrOdZT8VVP/xD7/wZw4E9C3MHUGQpWu0ESY2nQDWHudYMRsebGGnUeO/bllRiVVR9ShCsXwxv9KP062EtPlWe1Xf9gYYm8FjaR3e9NGvxPxJd5cc0nE8YRCQOfjwDJUojyb4npXo1Br33UW6VXwZdv7Zm5tDgjjhNa2xLwd17GzqCL9MD3ocInWLE8SODrY4g88A5r1Lp5Svf8nIRHOnLX7VJWE4tQ6IPQzEpNw8zMwvYv69z8dVf3fdb8yGcI/rjFVGqj9fGb7X72CVwltn8e99/0SfPPS/c2sse8r0ed01UuFkvp3JIeO81xsmfIVDlLpZCxePgobV1+cNZDs4MZktYTEuPJjCdY3rNLObzfWUlXqshJjqOj3iul11K0miIeQqJjn4VqNOhEgRPL5oYG50AbTqMR42VshW/CG+Uo9qgKSrIbzCzNYrr06OiZProrpG0IkflmwAhJd8QAf0KUQX2lXZssIbNzvkX/8+/+9y/nVrAs6vsm+GaWfb6Vzb/57vf+ZL/mmIqK3otGK8V5rhTr9VHUONRsLmCY6tN2bGdA5WIcguBcguRSl7RPd7PIN/Kf7w8jyX/cNlVeKPuamVqfgiSVZIkUaYK695cxrter6PRaCDlsbzGgv7HNhl8ihlKH+IYchxDCeVejlkDwyAphHJM0a9FR8DSjluk0qj3x20klB+1p/St/K4W1xwZp57ZNnr7rXt/4PqvT37vylyPH0op+cdPe7daegIlcP4Tcd+73/vSny6Kh+8s8hnO4Bzddg+jnGA97kT1U7HBccJaCbMQJ7hcB+O0T/glFI9je1ab4BUnM5bbD6yVLjB+XZCFdNZa8FQlZVxAYPs8Fy26s1S7BUscQBkoTcHFRavd4U69DViC7Tt38HoiQZIESCaBBtR7LohozJmJ8kz6SBkjOAQP0gxgWeBjZsxr9B3dKzYqhqUjqXjQkKuegW3wVL4FC2u126jVm9ydOXvowbkX/93fXftLc3PhrKMr7ehSm1nvkjef8e8uft23/pup6fsP1xvGkw1gfq4bDXqWdeD6MoMD5U6yhzq8AAAQAElEQVTQeKxWSmznahFHQWN91kytxdggQNkdFdbkvDxicPwO+penGgwdqeWKBxeXnuMngcZCzv4O9DhLoTJk0PM85/jUAn0kGvUe79w1JnrsA8lFC9WgH+o0B3JCYIcE+sGBJB6aDwJLYuU4W9hPojOwoVdlrAWVlfGUIElGEPwox8h446YbH/rR629qfZhlNDZUwGmWiNNhs1u0xf90lQAnmn/9RRNfvviNF/1lkhRhdnaWk7+GXlGgywlf526KE4umAZAboWnPSRj6E35YNuS5SBr0LxJX8YjvKuRIEo9BROLAR3nXw0DSNb3Kv1ak4gSzBM6lyLICCzx6z3gn2aR8RsdG0GjWkdYU7yIbpS/lI0MtGt0g18HIR4nUJrkYoJs5kpbSVnEk8iWd39XekpdH6aqvyp1WgYD6SBM9/SnWlCcuWSO5/rp73/PZL9/906zj6Gq8ThRt2zY79I63PvUPnvecMz9/8MAdaKYW79OzTkaj3oClCTJaE9bjRBW5Lh8zW5TPegnNynRmpbte2uOJU7s3gtXKWMpXsE0JYXF+ageu3bmZxWwK6z9skasderPZhHblGY26duky+F7GnCco0ajTHzQeBWgsIvIG5zxWPCrDYrzZSndF8iGC2iCS5x1+u8sFsWsiTbfxemjsvMuvuuOT33wgf1z+zfdS6pLMFrYkcIwSeNvFT/3bsebIHk9jVavV0G63kNYMnkej2u2VbI3O0nBzAXA06iRGZSK3gpktTvSKdiLcSgmIl/yC/McDM9bVsTF9JmqSpyHsB3mHCiIgMB24Ww9UdD3KqdPNeGxcYHx8FGM0mo1GDUlicC5l2xMoXQB3SgSsBkYAlkCPmclhOrmUqRSoANenocxvjh6C9JgBSl/64i6SqYCcBML6baCCRKhRBbMOVNBS5roqyIsURfzp5vH6ZZfd+tEbby8upvwGGJLNCX6f/nSb+eh3Pu8/7N6xcG9nfp8fraesbh1Zz6HV7aE2UmcLjHUVQHc5itBv02r1Mo9SBlj3MTOY2WIaM1sWDgZojA/DcxkrDNOHw1hRa9ZriKbrmLXTVVUbzlfRl1z2F+daQYLS0uFb0iQnx3axzx1lyTZ5jhkh6xXodfP4g521tIFFo57naLW7yLjYKwJQcKx4jsGCAvEadxqr5MUioGBV/7L9om4MS/VbSi+aQoHlBm9Iaw10Mo6HOnfpYcSy3shZV1125888+GD4FqV7PMGd6o3dqv9jLwFOLD/SHO9t37YzHuGlqeMxraHTnYcezjuqKA41TnhqP5EWUU3ORcIJ9oj/ILQDEUSrXPnXwrFWp+JX5qeGpMeQwDkaJTj0ejl36gtUkHU0uFOvcSGk3Y9ZmRaQa/wmANNDsmPIqCgjSDMzmAmDaRzTW4mYh+HKJRVQHFDyo2vsHYE9xBDffnreqweWwYMEBC4qkqQOZyNwybhlnfTcv/yL//Ure/bhWcywqe9zL8Tl3/eR1/9c6vc/lC3si/85UJ4ZGqMT6NCoUJ/TSLENm1oLwKwvN5SPGcNaFJTBxe/yfkfMZ2ZruniMH9VX80DV0PgTBmlmxoVcweNsLvqYSOM05X260ug43nvQ2Bv7gNCvTnLcGMeLcZwCjjnWehXnYGarosqlcoQqXLmiCca6FBqh9QTz3EgkySiyYtTm5mtvuuKae/9gJoRdVZ7Hg+seD43cauPmSYCTqvn3n3no/8qz2vm12giSWop6w6HbayHlMSmne79wB8/Ji2WTPCybzP2E0SFfKonl8Wa2LL3ZUliZzJbCZiYSnHOr5lGkWZlG/rVQ1UOuFJ8gfwUzgyGBGd0I0A9AuxOiSud9iIsd6j/GpcjpWeAOp9XqQH84Y6f+6AyPNL0BLq0hTeqL6QMc25HCWUrV5VAEngFwFUUHwRwCyzEzmBkYUOF9MCzF6pJID8EoU4HRMJgZ4JifrpmJGGlmFl3n6jBwAcJdu89VpxHyqRMN0hsv/ru/+fTPsH1jMeMmfcwsf+3Lk79/4+ue9Bche7gT8haNukc3D5QD2wLWPwS2CzAr+5p1YphSY9sw/MgIC8P0NcIVL7nDSVi3YRJEG0SVQPmHUcY5OmtDBjMs9hvbO+Rn5v47zKNPHnDKeiWso1D1sUOSJKRZOd486E/gXNp3Od54haYjdh21uwRo8mQkrblo5Gfn5qC/+x64Q1cecC4UuXERQEbBwYN8AzhO2UdGD5Y/wzKpwlUqzV+hrLtV5EXX+wIcCdA9faI6eWN7xpFlY41HHml/x1f/6d6f3BfCpo5RnESPO4nqchJWZatK60mAk6/2qc8d/u6H9sx+JC8aFmRwQkFFy0nmAhIZ9EHlyQm+Fj/yWjVK9PWwaqZHkbhe3RRXKSK5oHLDwCOa/uxqr9dDvV7DxMR2jDRHozHSUTcoLynREkVUoJEnlaZZQqXrIjcZdsCYTwrPwbEfEldDktRg5mBVetLFE3AxbVF4Kj5PvgUVcAH9YJ5+QE/KWkpUZSVJgzuwFNPT8ziw/zAefPBB3HPPXbjhumvDzPThDqiriU19Kafi3d92wX9+xUuf8N9RHKK4ZlnvLkwLDjPW22L5qq9gZpEmf4x4DD+qg7BaFdaiD6Y1K9titro7mPbo/e6IWVRHjQVBO3KNRWXSLr1WT+Tl+Mmhaxkdz3vepwOkc6deuivLMLOY7/g/AfqBRMBzPFPnhCAfobnQpKHf5vbvz3/0us/d/7NsR+P4yzv5OayU9slf560aniQSuPUOvOTa6x78jZkZOztJxjiBUt4cBroFa6hJFugGcHrxvhw0IwzGr4NW1EJQDk5ExVTg5Ku8x+xulIczw3qwAAjgDluuMOhXuIQx3SD6+bD8MRnYPgCHbqtLtGlQPZrcoet31GWIqZ6AxKFOWkJjb45T1SWwmNfAjRoXToBZAsfdVKALxgdz4OaVStYjzzwNX0F/gcIbq50ATAOmdTTuiWugUR+Ds3pMNzMzg337H8Z999+J226/GTfffDOuveYGXH/9TXjowUfw4J77MXnwYfKdC9u21z/3Ez/23b9kZi08Cs/u3fbghz/03F+bmJi+CmE/FuYOo8t79NjPzsBGQCcXnnUJZvxSzXtPRR9KaJwJHGvKUwFacB4rWErZ9w7GxdcgOMBZAVukV2G5y9KRx3qvGXmsBxpPG8Ri2gTGfgYcloPB+IpOT192ZgYzouIlP1HAgCRFYLpekfOqqMexWkAGXb/SJno3z7hL76CbZRxjhsAyi8BxyF076C9hLAwwK11s8Kn6qXLNLPIwK10XcuoWD+P4DoFlc3WrtAXjPRo4PO1273mo88uXXXPw50jnEdMGCz5Fk/V79RSt/Sle7VO5+g9Nhid89os3/kK71zzbpTuoKmvQr7QUnq3iZIZW6AVgAXxINII+vZx7claAEy4q38GIiraWO5x2MPxo+APbVyLEug/Xc7gOw/GOhrpNo67/gCLjvXqa1qF7yoTHoEK326XhKsGtaVSmoJJ0NMjKq3jtmsTXqMCdS5EQzpUKXUf3omdZgbm5eRw8MImHHnoE9957P+666x5cd+2NuOGGW3DLzbfhjjvuwP3334v9NOpzczPoddpIzKHOK4CFuSmYteGShVCvd+/+lV/+6d/Ztctmhtu3mWEa9Yc+8pE3/pGzvfu67f0ha8+h22vD03CbGesnhc4O6VdCMul7HxVH5VWoChwOiy6a3EcDZqVczFZ3VZf1oDoqXjKWW+3SFZZRTxKL8tfYzHoF/ZwHvEsPETQvvK6B9AEZmRm/J/ZVnYRFrtQzwVgHFuV5XZSmO3h60KzddefhH77p9vl3MS1jFlOfdh5K/LRr01aDNlkCCwvh3E9/6v7ffOCh7K3eb+f0aaCb9XivmUWjRjvOVXMNhjrDoFGnkuVKOkRwstECei4BBE4wpgkROIZH+QezKSwM0tbzO1btSDAf2B4sQ0Vbj7fiVJc1wZVNwt2P/npcZ6FNA9rhbjpflIWZQffrjUYDpfJMxJJK0zOdhxSodkmOiwLxWFhYwOHDh7Fv34G4o96z50HcdNOtuPmm23DbN+7A3XffC9H27zuIycPTmJ6ZQ8628YUHT02QcMEQyB/0sffSFD7PadANo2OeC40FjI237/61j//4v3zBCyauiJV5lD8XvSD5/Lvf/7JPtBfuP5BnB9Fpz0c5SMZmFmsjPzdrgLMYXv3jSRboHM8rY7WJCBwj6wGcZSVQPkN1WczLORflQsGEZQhxvHnShDINaf1yNbZ0/SMDbkbjzVI6vCLq9brM51Fv1JDw7rrgvrxDHaD79CzLGZfALKFrEYBjTiNCH5K9wODxvKynqc3kb8ayOJlDUqCwHD4EeC58u1kdc/PpeTff9Mhv37sHr2IbVZnjKfWkzXvaNuyklfijVrHNKehgCBNfunL+F2/5xsEP1etPbLS7CQ05oD9KwfmL4GgUckMoUoQ8oRF0rIgmbg5wkgEeAfxybnMuRj+Dy15OOCqBELEs4qQMqH3CsVXOF4BZmV+7HP3er6AfQmq3FyCaduGizczMYPLQFA32fjz88CNxp33zzbfilltuwa233orbb/8m77fvIf0hHDhwIKaNCp0CD1TY8iMqPgfHfhKKIkOprGswCCl8YaSBxp2VYw8VeYvhmTA21jv8/T/wgU+89EU7LzczcsWj/rDc1qsvOe/PL37dBb89O3XfbNadjycY2jmqMoyP40ZjSH7RtnB8EpAsBclTkIHXqZCO2pMkQa2eIuFOXX2g/w2t3cmR66iOp3SeUz9wpGjsicfx1WQ4t5GQRiwfjR4antIvvbxAvTmOVivB5GTxtKuvvfv39u/f3L92yAo9Zm+pSR6z4rcKPtUkcO+txZsuv+K2DybptzS934mMRjuaaK6MHVfqak/wDoYmitwh8OgNnsYZBU1DjhDkEpzlmuCrQTwqSIGsB6UTD7nHAuU9Etbiq3wJW1oi4a52EMbwEtQGrPq4yMHTdnbaPczPz0dMz07h4OQhGunb8c1vfhN33nM37rn/Pty/5wE8+NBD2Lt3Lw37PhRFQQTIKKs+iAY7Abjzt1Q7JGrTWK7xq/4wpkXMo7xgr0TQ4CeuiTQZRy0do9tE4mrYvm0Urc4kTwq6s9/1PW/7g9e+6wV/y7Z4MnvM3vPMWh9+9wv/5/OeveuygHbo8g5XC5+yPWW1JAuhDG3e15H1ajCOb2G1uMSMvQTIBXv/eKA2lmAvsqtZLOfYkh/Vo13saqji+y6HAYR+kIzUgjJUlhNgZhxDPi42e70OHE+IGjxFci6FTooyXu/o1zI73Qw6AdJvdChvyeXEfY3tSUIdTjomstWwFFhtA/QDc6l+MBdALZmgUa/h8CH/siu+ft+vTk6GbSSfdq877Vq01aBNkQAnpN39SHjxP/7jNb/Yao+fWUt3YnY+Q4CMBuIED3kBo/FOLUXqEvqNyiWsALwxjoqBaW1TanvyMeV6JypCSiW6CmvySRmqttrxaBfeuE5rLwAAEABJREFUbrd559fCAu+7pw5PIucOWrto40LIBR/zJpYiSRLUavV43FwZMvGibiU7H/tDyrUoAnxRGnIzByldx/xlWockNUjxMRWNfBHzBWp079mnLHtm9gDO2NWY/rb3vPb33/K+l/2J/oY/C3jM36c8BQf+xXe+7vdSd+BW5yd9yNoI3BW6UINR0XO8QjBj+wSOUzP5Oe64nTNLYMSJaojK2ggvM4vJzEo3Bjbxo3qtB4oilj7oVn5FKK/GimRVLhoNCceemUPRyzhW9YsOQL1eJ1Jo/BUcN91ezrguPO/QAw2ufkhOLtgPgAEIfdA55tfDzCLEItaVfQ84/ktYF4daPWE9WrDEYWLbbhp1uH0HFt5x3S17/tVkCKedUXfYerYksAEJHFzA2f/wmTt+fXJy50vT9ElufkEr8wBj3oQGQjBOpoQE427c511OfEDGAi6hJ2HaFGYJ9M/xG8E8bhVYNPpkVgBkF1HR5C7lAaJxDKu7pkXDKqjykPvia2Yws8Vw6XF0lsPYhgqeqiOC2QoEVrVEoFEUmDkallLZAMY00HY8eOgRvcuFUKvbwUKnjYWFOehX2WTctUASQENFzUhDxRxsCy0XFBaMigqss/h4n0PQKYiMfwJj7filfI3Hn+Ypf9bLYhiRn/JJCfvQQVLL0Rit9XkE1BsOE2OWv+zlF/7Pf/nht/z7k8WYg4+Z+Rd9q331u7/zZb86Wnt4f10/bN/zcLzqqVmTbTO4aJnYMUg4RgQHB6YRKANHQxM4zgYB0o8Gkp+AocfMYLYSSqb0Mo6CQ2CdNhMg/7WRwCgrMI2nry8byacPCwWMY07zJaEcBc0/ycy5hGMFaC/Mo8udeq2WQP95TuYztLotnt55dLqew7dG3k0U3E17Li4lA/VN4HjVfHCMTZyBL0B5LIHB+Dp+S1gAIpSOntx6yPjPK6wxzmujFA0kXEg4Xh3lvOsfbaasywLavTk0xkYx30lG7r6v+5M3XjH9fvaF4TR6JKXTqDlbTdkMCXDQj3zuS/t/7IH7e69L0jMRwgjvzQvaaU9F6ZbAwjWgHJUBzCMC1VPGAHLLb+mr4gddwMxWAAMP68R6hEWKwouBTfYcbVlmhsQ5GKiqQqAEDE5h0nVc3Om0uHMooR16r9cDaPRVjpReNOCSKQApQjrxjfHkF2ikl/whyqUMFzGdmcHMoj9+1DfRE4tBvd5ELW3E3b4WEyM06s51kOcz7Yte+ow//9kff9/Hd+ywqX6Wk8p55xvP+vwbLn7mn7YX9rW0S29xQZTnOY9YOS4pY8ABMtJyj1BzMztCiuOPVr8cP5cTyyGBwcw4j7HBhzKVPClXM5pkjj/JvKCBlshrNOxmRh2RodfNaUwDPE9OnNGwm+P4NJbjkKZpLFPcEB8Pc5zTi+OT/kgvP2b9MF0tWKE5YTlCEmBcbJgZjHUBF2nwiE/glZQ8ac2gumltXBQ1TE9j+933Tv36zXe1P8Q+aeI0eZZkeZo0aKsZJ1YCHOzJV7+efeD6q/b+RJHvmBD3+YVJ8NQN3ntOzhAhegUzTqw+Ktqj4bKuj0YxsYzFsqR8hEhFqaCCAtIoPsrIjErPAnWMh/QNuBWRK/nph9+0G19YWIi7857+e1UaJB2jK17lCOJoZjCj+iUUFoyMTOVRuQKazinJcunodQXLpNJzPSCRXyjrpuiUHdmabyNxo0QTE6MTWJifwrbxHE976tgN3/d97/j9M86wh5X2ZISZLbz7Qxf+2XNf8OS/DW6W17czNCDcHfIIftEAVBWnrEqvBEYZUHDMjwpl3KP7Vd+uh0ezNpUc5B6p3MU0lKnGqa6MBOXT8buMtcawFqeCDD44Po076MCTkYJGN9AIexjnBYZ0iId3HoHzhMngzZOtQMfKvhMd8DBLoDUAYwZeH/1RrowvWEdj2Vr4eu9QqzW4mKhjfi574jVfv+sP7rynuBinyeNOk3ZsNWOTJHD7XXjVl794xy/mvd3jzdrZ6GWeO7ceJ0QajZUmlYrW5JG7ONEZGPQzeNK8a1VEbRDWih+mbyStlJ3SVRAPyUX0brcN/SS7duiCFKKUoOfuXPGeOx7JV+mVr+IhV2FB/kAdF11quSBQgcWwIqQMTTv1EtoBydCJp5C4FKMjE+i0c6rXBDkNYa2WFaMT2XU//lPf9a+f9fTGvSrnZMYus5k3veGZ/1j41mySUplbhuZYE5Kv5Ley7laSKKfS8+h81SdHW5L6aD0cLb+Npq/KXD+9zIeDyVhS7Bq/Mtxqp06gEi4WNY673S7HF4/Gc89jdwfwONzz6L3I1Q8MY/DxWCybY9eYxMwijRmZ0BN6faSZlXFmJuIKJEmNeoo52deGFMEDadJAoz5KYsNac+m5111/38cPHAgvZL3dCganGOGUb8ApJu9TqroPT4YnfuGL9/7q5KHahfXmuTY773ks61BvjnMX1IXjCnq4QZwUi6RB/yJxyKM0FYaiVgTN7IiTWLxWZNxEgnYHgxguyjTDLCyStdsoUKCTdeJ/JiFDrvtH3fUVWQ9FkUN34ODuQ5mkGM2MXke6EaEP0UiOr/gr3Edw8Cy4LMuztAzg0aRgrIsZ06nvXAL9NLL+mE3qHOo1h5rLMNrMDvzYj37nb7zqRWddakatipP7ObgQzv3nL9zyvdt2bNuxfec2jI034EOGpJ6w4pRNbIKnny9lgwjFOcoSRDhmkOMRX41J4YgJH4MEXP9xrGBNFAhrxgWOIbVLY1TwRYh36Vne4zwN3AknEL3IAzqdLrodcuPuHK4BQx2ehQcuBjzLYC8h2KAAPDj2+oQYG/0xDcut4oxRFhyUVeCZOwTWGnocx7UWFcFqcCnLpFHv5UCWBWRdx5utCZs5jBde+fUHf52HZGcqz6kMdypXfqvumyeBqanw5M999u7fuff+hdemtbNdu82ZE1L0uKoOPoUmqSaVJnRVi8ovd6Oo8spdL89gvPzroeKzXpoqTmkr/7CrOGGYvn54eawUSkWRvOTXEaTuylut8oeJtJMULcu6VDRdFEWhZFEZVnkigZ+V9WG/kL7264Fo0JSuhHiaJVSlCRqNERw+eAAT4zUq2Hnu6Wenfuonv+c/vfB1T/0yToFn31w46//77zf84qED7TcamkmzMYqRsQlkXBipnYHLmRD/oFHRN9pGdwmrNVEyPpFYrYyN0o5Uj43yWSvdevzXyrOc7mAaSzzpEV1jVzt1GdEkSSCInmVFNOoypKAecSaj3oh9AY5EwPivXGSBj5nxC5jZCmADj5nFVGZyXSwnlKsB8mO9XA0jPJkKvs7VzEjy8EOTb7322j0fpDxUiZj3VPy4U7HSW3XeXAlwULuvXz///ddfd+j9Ljm7lvkaOr02krrBeAfW6wY4a9AAaB3seIwml/OC1SpCiOHK9aSthyrdaq7yVfTc+0W+8lcg+zVftmPNuKOJWI9PuUMAFl14ysijeswsesvdckGDncUfgNNPs8uQd1sL3Cm04zWGl+GhAZJrfT5SjIEyLaXrYVbyi0z5SViwILKZMT4hHIwH6GYJ9JiJXkJhgPHc1YCouQS7dvHEpXsQhsOHPvrdb//Ni19z/r87mX6ivazzyu/Bg2Hif/2Pb/zMnnuK70U4M2k2z2GiEWS9wN0gt2EMAXS1oDEuZgS2HTry5U7N0x+o5CXfQcRsp8lnsF3r+VdrrtKLXrnyD0NxnJo0mAFmFqMroy7DjsQhSZIY1+vlWJhvsW88cu7Ug6Uc5Qkh18Ezv2efeHPkIyDej7vA4NAbbIlQxnsSlsMsUEd5OFfyUj0dx7xQ1tsjoWHX4nphYaFx1113v/Xw4cNjZHTKvmVLT9nqb1X8REuAA7125XXFu776tXv/Za3+hGaW17krL5DUHebmZ6AfeNEPlRgnY/C1xeKZL07q43EXmfU94tX3RkdhGbhBxIhH4aOyj7qYvkLRXbjyC9qJl/fmHUjhdTqly2VQVHpSPma2KEu1VflUtpmhgsIVvTT2oghSanJLmCUAlVgZ0tfi4kM0qlDebc7yRGAOPky1P/Adr/+TH/iXL//3J+tPtKv2FfbtC2NXXzv3Q7d9Y+rHs/b2idGR89DkvWi3A8zOLmB8fBuvE3p9OWp3LoR+WPKlWELFbcmVTAexFHN6+6o2H3UrObY0RmUsNTaToZ26+LlaCiNd/1lQu52h3e4i5y2Q7tHB3TqidU7ZIQ5mBBejymdmctaAI93BvDrRR8NPQnzNDGYW/Xmew9Gg64f0zNTvBa8FFjA1fRD79u/BXffcivsf+Kbf88Bdj1xwwdP+Zvfu3bMx4yn6cadovbeqvUkSuPNBvPxzn7vjd9rtHWdlxSg6Wc6Vc47CZ6g3Uyp+KckCzuow7nKA4xtCZgazEqs1yWx5nFkZNrOYvFQmHnKllCKRHzNb5Gu2tj/wPs4b2EZwbxyWoaLLHUynsMBiaAyLaCTkF1SHCPhldO1aZMh1zK4dgQx5q72AwBLhyYNHxJ5aTrDgWfdAdktu5BnCIk8zYxpjuAC1WglyMyvpUmKC5GI06klChQmmLzxSc0ip5Iq8g3qjh1oy33rTm1/0Fx/54Bv/i5l1cZI/lIW78urDH/qHf7j+Z+DPHJnY9i2o1RuYnQuYb/H+1tWjwUiTGswSsE39FvkBV/IVKloZpbSDKKlrf1mXNSPXi6syKc0wqri13MH6BTMIasUgqpOtQdpq/rXKGKYP17EKm5XjTekHafJr7GVZxjFqiJsAjsGc9+z6e+/xv1vlMbwZl5WsmO7fQzAaZsfhHCKodGBW8jcAgqOxT5hHMDOYldBY10kVZzLL45yAB4c4F81dHDy4Hw/veQD33n0Hbr/tZnzj1htw373fxIMP3omZmQfRKw4/8p73v/mnXvOap/w1TvHHneL136r+CZQAjzDP/cyn7/35Tnv7hZbsct2uldyNBkfHlpwkAI0KjZAmrCZgmeDR/6p8lVq58gtVWO5GoDwVzPrtrQh0zSwqDXpXvDLq1EGRPlhWJCx+fDT6Ol6XERe63S53jx0qmww+p2xDiKnNyrLMLIbFM3rW+CiZWZkW7Bv9BDvYPxGxv4B6rQEpRmjhxd3MaLOJ4LlIK9oYGzM0aq38Wy88+29/5Kc/8LGzzrJ9axR10pAfCWH0qhuLj3zly7f/Rlo7+5xtO8+xgJSGPEcv/jEjg454wcd7x69DqDqJofgyB/o/JBjDx/ExszVzm60dN5jJzOIYMyvdwbjV/BoXwxhMp7jB8NH4lVc4mjxLaSXvpRA45vSXCrVLLooi9ouZ8Xoph+ZAxiP4cmefsP1J7CdPgpnFtLVaDXnRg2de8JHRFsyMaUMEP0Ao4HldpZ9BmZ+dxsOPPIhv3HYLrr76atx88404uH8v7rzrNkxPHcRCa5p3+dM09h006r0wMVE88v73vf633/j6J/yNmbVZzCn9DvfAKd2YrcofuwSmpsKOL37twK89+EDvjfOdBtrtgvPRaLoLzlSjsWwAABAASURBVBn6NdGWseeymkZkGekxCZQKW0r7SGATIAymO5oqh1AqkUGXSgCyF16SolLxSkOmotOJrxRar91Bt9WmMmlFYy4FJ+XlZVyZj1sSCNEo0xgH8hNEW4Yo8yXZq5wSWhSQvmio6AfiTlxtTl0t+nvdFmopORdzyPPD+YXPPOOLP/Nz3/uJ87bZISY/qV/K3R64Ed/5V3912e/08vHzmmM7UGuk6OQzVNSHkLNNlvQ4XjMUPIkIXHEFGXXemUOggUElP8vY1oKQ3Og8Rq/6br2iFS8MpqEc2MawJgbTHskvXqulEV1YLe6INE6IYJyXRml7HxeumgPVeI/XThyHnV4H8/PzyHoFZKi1EBPUXs+FbrfdwmizgZF6DfXEcW+ucZtx/vQ4jzrUUQs4dOgA9uy5n7vuG3H9Ddfg1m/chIf23IfW3CyMhl5Qmu3bxhB8l1cxDs1GQT0wE5K0dds73/nKH37TG574X4/YplMkgTtF6rlVzU2UACeuXXXjwjuvuWbvR5uj547kRYpWL+O9eW1ZqUwH2iuCyiQanJzxpeGgZ9NelTvIfDhcxVV0ucOQMqlog/7BvIqvwpUrWoWKJneQNuiXMrL+rApUKDpy1K+mtVottDsLcWci5SaD7gKoWHyUp3gKFS+5q4VFWxse5kqQM5P5WN628QkuJhYw0qzRmHv0ulNUajme/pTdt/3ID33oZy94auNOJt7093gKoDzsljvwor/7uyv/1fzC2LnN8bNsZGIH5lpz6GYtgIbcahyPSQ79yhrTw7mERaozBHoXX08fYUzPxRMDj9mreg5iuCJV3DC9Clfxciva0brKuxY2zovyXCWxWbmb1pjXf+QiY57xJEVzQj+TU51YxR171uVcKHgNlGJ0tImx8RG0F+YwPXOI992P4L7778Fd37wdt956M26+5XrcctMNuPvuO+OOfI4GPPDaKkmM/Q4eSuU0/B2kqcPYaIO7/C7SJEOnzbHfzDE2ku9///vf/EuXvOUZ/2BmHEA4LZ7hkX5aNGqrERuXACeyXXc7XnjlZXt+PC92NqfneigMvC+vxSPMuLMJNd5tGeEWAe1wrAdsskJk/XA0j9ILVR75BYXlCoN+hQXRBiHaeqAS4DGhwVNWFXTPbv0ZpUWDjHa73YaMuSDllfco36wH3ZUXRcYiHSwI9PJInNaItjiQBu4nja78SwjGxVQfiLJnXu5dYn0cecDzkzNvQQTU0xrm5uawfds42q1ZOF6Rj4zm4Yzdtu8HfvADv/+85+38BvMGZjqp32/cj+f/7f++4fdmZ8efPj7xZIxtOwMz8wtotWUEAtIax2aiZuQIXCkZFblzUSCPWruq8XI0BVZ55Cqf3COB/RXHnlzlqaB8/z977wEg2VGdC3+n7r3dEzavckCRIDBgkzHJgMhRZIHJiGBswARjMGDAYGP7Pcf/2X5+7zlhY+NEzmCiwIBAIHISQhJCabVhZrr7pqr/++r2nemZ7ZmdTdrRau7eryunU6fOqVPV09v6V+uSVFzTOHCQ31THQnui+QjI285SVDyF6hc58qrHDVgfs3O7aV1fjZ/+9Apcc+3PsHvnDui4fOcNO3D5ZT+msv4KvnDhZ/C1iy/CNy65GN/77jdx2WU/xDXX/BRzMztRsy5tmI2NJ2Yw47pAzZOZEjr10tRnnRTB1xjks8g6gLkKqGdD8Huuftx5D/7dh97/jI/jKHtE+aNsSOvD2R8K/PSnuOUnP/69v9q5E3dOss3IC4+Ki8Ay4w634EJJqC6o0NGFCykcQ9Q4bKIGjMCN+wQdEayiSeUT9pVVecahLTea1sbJXS5eaT4eM+aQAtcX4eQW5QBVVVHgVBQ4PgIci4OEkalYRFtvDKz44SH1Bc5IiMfJyuwptGoiNKCQq2m1TE92aZn0kBjntuJRJGZ3XPCCJ7/2Pr943DvNmElF1zCuuioc855/u+SN11ztHzA1eUK6ceOx2NMr0BtQeJMnAzrkWccNaI1SvEshr+HIL6EvKNzA0RkBFQ4jDvrVvLWVLPUrvBzaMnJH8ygstHHyrwTOI4SV8oxLUxlhXNqhiNNaEGreg+uOO88H0JrYs+cG7LjhOlx55RX4/ve/i4sv/iouuuhL+Dqt7h9d+j2mXcvTpTn4UAA8STHybpqAJ0yGJAVMJ1FU4GWeo+I9uza3UuKOeSzOvwe42RA6LFjmc0io0DduzK570hMe9YqHPPDsPzc7eixzDja+Ln6uf9wsKbBjRzjlo5+88q0/+UnvTkl3Q9Ib9GmZT1JHpChpRaZcCJDAk8LwjA/6PwwqGBeGOSoOCwhcaLwyo4sbHfs7aWa2l9BrBeZy7mgby+WRwGrz1VTSBRW3lPjc3ByFV5+CiUKHVxi6Fwy62yVIuvm+mDX9Mmvcpq5AR6CjV3SmAMNQSCkKVObzRJc/RgaYhB3zGwVbkhrnMoeOIsETlS2bJq8977yH/OYjH3LmP5vpmCUWWrMfVOanvfPfvv4nN1xbn+uwERPTG6Li3rWLG5RkI/dEmxDqadRlhuBTIgF1OjQnIUioB46NfEq6ieYNvSj1xdMCUw/2DZzzcVC94+JH45RnFJyTeb5Q/NKw4kbLj0tXnv1FW4/c5cuOSxGNhTFplB0yDnLKkpyKNx/+1PHs3B7M9WdpMPQRFTAnRso4SRwkVzSBwVdwjC+5AdCvKCospS2Y5pIIqDEx2YG+PGdmsQOsgRtXh8QJjOK1V3cihaFmFf2fPvqxD3vjQ8695buZclS+7qgc1fqg9kkBCoX0oouufu7XLr7qkd2JkxL9eExR1rznLbhAuqiLCt3uBMxsHuAiAhdZdNsWuGhb75FwlxEl810xa/o/HzH0mI2PVzJpgxZmy+dr87auynha57LEdVeoe0IduQ/yHpX6gIq1QO3LCAkjk8Kh4hU9zRa3Qx3BPqhm0wewlM4sJ8EW58MCnOamyRnzmjnGGTKXwMW8PaTWr+9057Pf+dJffeC/mNmgzb5WXdJz4gMf+t7LL7109vy8nJjeduwp5M8ce2ZnkSQZBkXNsVKBI0HCcJp0kFKQsxzMhzh2ehABkEKBn+3rWs9BuWqrrUB+YTTc+pdzOQ8YxXL5RuPVRovmuNkgF3zaUa3GbfOw2KK37c+iyGUDqsXBRf5s/IAjyV0s4XnUXpQ9nlZRgZd9DHj83evvRllzQ5YGmCuQpR6drmGSinciS0mPQN5vkKYpBE4ra2V+8rpmUpWbcQVQ8dd1zpOvMpYxMziXQk/g6ZSO2vWdkc1bcN1znvOEVz38QWf8pR2FlrnGKzRUl28dNxsKhBC6l3wTF3z4oz95SdI9daJXdLlb5iJwXQqGFOUgp2DMkPeLaOlU3OXW6MHz/tVzV1zD0FhDKYwLWWtsOYCCVVia7liHYPD0rQ5gP0bzSylq0jw/lkNNzSgsTVecwKJ7vVzwMHa4RSNAmhqWxokelGZwPM3wCKRjEa1yKfJolQx6qHhvHiR4qgE8hU9CCzpNSEWecqhuz3KeGwHOC9tN5iHB2MBiH2O/6Is04GbAeOVhFIhJWqGqSnTTDJ2kC8pQzh9dHp3UVYE0rbmJ2Dl317ue8ZcvffWT38J65ljNmn53h7DtX9571au/8JUrnppMHu+mt52EubxETmvPc4ApNyqJyOJygHuTAB7Nij8CyMMGx/kDwxg+zeyB3KsZI8WZFkjDQP4QRP9RKG418LDIwcEcWiiuZj8E+ZcDC0AwztPyAIx1jULrpkWztpiB68wBMe+o69i/xGyv+LY+hwTjYUg4JnjDvqDyRjkQqsCl4KCNFfj0e7MY9OaQD+ZQ5DP076I7S9kxYK9KGOVJJymQZTl5tISFVimzT5YCvE4RDWvOE2cMQiCtwB6D7ZkZAtdA4DrqdDIk3NTxap1rzHG8Dh2eTlmYqTZuKi953OPv84r73fv4d7FbR/XrjurRrQ9uLAW+fwXu8J73fuflaeeUbUU1QWGfUi5kXGhJzO9g/Ec/F02M4FLyXDgRilA8F5sWnIIrwYx1EW0es8XhNn41rpktyma2OLwo8RAFWiE/rjozg5nFpMYqz6Gj9gEt8gEVudyaVoKnAor3uLKULbAMBR8Cy42Cwfj6+Nl+mBnzN2jilE6oHtbrfUXBV2JiosMTgDIKs246Bf0pUCcFul0q82onzrnNyZ977Wue/bsnbLRrm3rW7uePQ5j4+Iev/7XPfe67r96w6RbHWLYFOYc5iAqd4+F9bEAJZyUQwUTyKCIYFbCKZ1WZVlHPQhYzWwis1hcCwgpYTTVkhZhtnKu6ubjHpitS6StBeVaCNlZNuiF1KQwubmDzog/xZlkNIAs95x12Uc2hqgfk/AoJN7VZgmiZdzPHsqQdB7DQFypr0sXMYLYADB8za3xcUymt+KqqEbj52LJlC4x8YLx7D2EOmzfaV5777Mc/49z73vIfzbjza0odtZ/uqB3Z+sDGUmDPnrD9A+/5/ouvvyE/wyPhUVUguBi4eJYW4AJYGnVQ4XH1KW4lLG1QeZfGHc6wBMxomwoLoOASkiSBwnVZosyLRqEPBsh5Z1gyruJ9ei0FRPqqngaAXOihQGoUUWCoBRU2hRJoT0ZwM4VhPscsWrRyWQASZp4iMjCv+uIp2LQJyZKAJMlRVddWp52+4aLXv+GFbz3mGKz5H44hLbMffbZ47Kc+8d3n+fqYycmp7aRVQsuuolKv44ZFgjugAKTMI50iRaD54Efzxk0n41u3ieWnHVJoHg4U7MhBvzJYVwtPPlk9jJQlrdwSyGofQWybvA3WbQnL8OQj51150e9RsVOZ09X/V5AP+gzzNCX4qLy7VMKdTkrrPIs83K6HwFZboihuMUBeCIQhaD2Yoa4YButJJrgiE+hUIEs8Nmz09bHHZpc+63mPe9Pd73T81wHcLB5y/M1inOuDJAVuuCFsfvf7rv2tn/0snO/cpsQHKnQe1VGIRqVkxsXLfO2r+Na/nKs8K2G03Gi+Nn40bpy/zTfqmllc1GY2Gn1Y/Ga2qK22j2qs9eu4Wwp8IMuckEArqxw1rfOad+aeVnSgwkUUVkFFG3qHxh8jooDyiIo7KvB66K/QlGOayisfY5rXwSWAcw7aPDhaOPqCUEZl3ulU6M9dje3H2g/e9nsv//Uzb2GfNWOGpuCa/CQ9kwu/XD/uP//zwj8s800nb5q+BeqyA95YoKg5firnJKEVaMb+e9KQNKLvULxmqrOpyWzB38Ss/tNs/8qa2Tx/me3tJ004zrAiVurdaPmV8h1omjaPaoOzQX4vyYc5N7N9aC30+7PRLYoBGsvcIyFvZh2H7kSGLhV6wjEvbVtsGsGdUnSZh2/MZmZ0faQZPeh2J9Dv55joTiFLDIlV3CTkTN/97Wc847HP/4XbbvoobkbPukK/mUw2F13ylUtmHvf1b+545mCwuZN0j8Gu2QEFhRYIuAAaF3yYl/GBvoN/27oO1N1nD6TgDgbLNqCl0cCMWpOCr5PlAAAQAElEQVT7/0BzRFDYrKGXrPK8P0Cv14vQUXtU6LTO66FlribMDGYmb6StjuAFRTSx8nl+tJAir2C0eARHZe4QWAciHDW5oyLv8yQg4SmBUBQVJrOUFlCNvH9tOPH4ztUv/bVf/sMzb4EvYI0/5A/7xndw/3/5x8+8OdTbT5maOtl8PUlhbbTOjZa5xY2Lo0IA59t4vJogiXe2jop+bzA/58vtBbDMoQPGPGbGObKYYmbRbzbeDcy1IgzgEJYFi4O0i5B/f6ByjcIMy/Zxr4aXNODBsoljrOfGq+B8zaEoByh45N7n3XlZ9FBXVLDc0GZcRjpen6BCJ5sioQJmQb5NeZDH2/7IAm8ABO5DA+nXQGEWGb7BJ5ie2gjP6ydzBaYn63pqMv/B8y544hvueLsNnzDT7niY+TA6a6VqUXKt9GW9H4eJAoFa6JJv40Gf+K/vvqHKN25z2Wbs2pMDyQQoF/dqlfn3ijvUEWpD2Fe9yrMS9lV+X+lc8MsKM6UtbVtxguqV5V0UOXIKL1kkUuQFrZGyKlDTOld6K6AAKWqVQhS+qrcJLf1UPoJCDAICM7Sgl2/bPr2x7zU3DhOdSSoqD++5sZi7BhRqu5/29Ee95dz7nfkO5q+Vd62CtLDv/gj3/Lu/+/Sf1GHb2Zs2noKp6W3xiL2kZU72ZdddpFtrEYLHrA0c0w7NSzpFeh6a2nBI68IqHtJxFbkWsmi8C6HxPtW5ElSHNqYVr5a0mdU6GFCRa03kvDevqMwRSirvACnzTtchjYrccz79kEYeehbWCkOmdPE9/TB98JM7Am7ejBs5tevoghtt7SeqYgZJ2qd1PvedF7zo/Ofc+fbb34+b4XPoVsPNkHg3lSFffjXOef/7vv3bg/7202pMozeoEJJOBLhARsehxauwFowg/2GF2j9QzHdMAuFQYb7SvTyih6CEikpbx+wSXBJkZbwjHMBTsAXeY+sb1rQrmdXDXICZRQEm+kbwbjIQS+nPAvFlkaigWyFn3BA4WNTxFhpXGXXEHusLAZM8xqzKnTxmd71HPebe//jQx//8P5kZd27KuXZx2XW449v/4Yv/syy33XZy4jjnrQP9pOuA1p33BTyFu+jAIUJ/Y25U5oYOEDIiIWxv7DVcx5jDAVa7hl/OP4Tlulhzw9igRvxHItcRgL5hrg3/8gioaBn3eM00NzcTj9elzAf5LE9VZsnvOdumMk89JjoJJroJOjTTUxeQcE4dPNVxICzyNQtAT7te5vsdHAyca+W0BEY4JPHEJnEeCY/Z06znjzkm/daLX/r01/zcrac+x7KV6jo6sPpRuNVnXc95U6TAzEw47kPv+cFrd+2cvJOvt5mEZaAiqWFcP4TtPSouBrTYO3X/Ytp6Wndp6TZ+ObdVVnKXlr0xwuP61VokeT6IR4xS6AMKtYLWelnKOi9pKVekL6lM4UVtw64Ggj4Ky+jhh+qmw0guw0BQYCEixs5/KJ/QRrS0MFZprC9NHSoqvzQt4ZK5mbvd9Zb/6wXPedhbt5rtasusVfen14Vb/81ff/EPdu6yO3c6Wy3tbkJRGQpdWVBZ1BTWsJLd52D5acY7dAp3QxKVO9b4o7laCZrXlbC/w1Nb48q0bSxNU/6VsDR/E27mQv6KG9t+fw69/gzvznsoqz5PrHrRNW4RHBUudTiyFEgzx3tugDdFAJV5hHmgheLoV18dMznONbgujAqcpWB0hUaZp3AWkCbi+V7Yvj37xvnnP/LZtzmz+xHcjB93Mx77UT90LtTNH/jgFb9xxZX+ib25DR24jRSWJQbFHLg2uEYWFmZLDDOLXpalQlr4Mk6MHPNhZjCzMSlN1L7qWZq+NGxmsX4zayq8kT91xCtE4UOBo2N0Ke0BLXIp8VLf6KVfyryuS9o7VD5SQsybpAt91rgkuKL1QSWvcFNvMyCFBfMBCcdqZhx3Al6ho5N2YUi4SfBIJejYivJZCDAKPMpKOPRRlteFO9zx1A9f8LIn/t6GDbbmv9F+za5w1jv/9ft/dM014YGWbsqmN28jb3rM9QYwMqhobY4bIxQIVA7Qn0r6LoJ+EY5jd4lH80iM7QtNTn2Kzi0UXgmrzbe0jqXlzDSfC2jzN9axRrcMOM6a0EhHoTihrWfUbdse5yrf0njFLQdd5zRp7F+8RqrhEq4GHpX0+rOYnd3DzVeOioo9p1wpuLHVby24qJhr8q5Fy1xfgpNiB8uBTO1Ij0RTxnWiDTJrBKMitC4E9TNNJ1CVAZNdXimRy/WdlZQdqMocCS1/YDZs2hx++stPf/Rbf+HnNn/ZLO7+mi7fDD8jSfdz3OvZbwIU4GJwH/vEjhd857uzz5udm8pcpi+OJKg8kHQyUC9QAeT7HAkXCBeZrSrfPjMd6gxUZoe6yqX1ORKKL+nlSAeKHQqkohzQCunTIumjKIpIRylzT4uSOViFh6PQs0i2EMOggKMnvoECOnpGPsyM9TdAHFfjTxLOGY/xdUfpWGfTFyChVd7tZsiMlfgBOp1Bdeop05981cue99bTtthOxq7plzTY9P73/vgNP/zhrgdm3ePcpk3HIafgHhS5RDxqbmycS+fHYNzQmBlpRCKAjzZNh+D7TuwHVgJbim+bJwb28aG8bZbWL3cUSh8NL+dXvsMJM1ux+oT8F4KPNNIGVZDy1t+WlyX5n4o1+mmZV3WOqh4AXAeyzDvc0HY7DmkGJJH/KXyiCz5NnfQMX62TxmtmrEPrjbxf1lAf9PsOofbxPxnydY8b2xqGXn3ccZ0PPeeC857887fd/IGm9M370928h390jj6EYF//Fu7y31++/gU37JrcXGOjSUfk1SxqWpGOa8coNp3JAqeNEOSOx/5QyMxgZvtT5BDlFRuPh1kCI4DF6YH30A3Gj5s0jEIMpFPrl7VSUJkPBr141K6jxgGt84rHw74mHSlwQEVkcVSqtwZojUSwHixCzISo6CXkBCw8DgZjH82Mc1bzqNLQSRxUV/AVDZ0+/QUmMg/zszh2e/j2y1/xrN844wxcslDL2vTt3Bm2/Ot/Xveqr3zliicGbOxu2HgsKdPBrt3izxopNyuBMUHzxntyCxMcSDOP5moYj3ERlblnvEBn2Vfpy0PW4UoA+zGKpXk561gKbyxBKF5+ueOgtJa3lnOXHdYwYfmRsQ/Ms690ZlnxNY6j7ZsZA6RHUQwi/+d09ffm+v5ISX/FzVjwPALn/HQzFy1zfQkuI98aNwXQWmBrZgbj3AoAeZpxes1MToRZ40+cw+TEBBU455/1zs3cgLqaw+RkCFs3uW8+7WkPff3tz970eTuKf841EmSVHwvUXGWBw55tvYGDpsDPduA27//gt35/z57J09LsWAqcLvraTfs+hWVKRWWo8gKZ4yI56Nb2roCLCy32Tj0yMepP27IEVOvfl6u8nlZ5ybvxvOhHQdbTT1pSqRe0TmoeNdbcJEnQg8KO2pVVUh1J6dJSiXGMWe5VuVG0+dSu/HI5TZw3h8CZ9BSYOmpMaLw6R2u22hkmu72fveylz/qfd7/TMV/jOIPKrVVwPN1Pf2HHr3z8E5e8BDhmYsvmU7gHSjEzk6PIK7iUPEmpVHkPp4FToYMw0MyL9C0BKyC6si66q3uVt8XqSqwul+ocl3O5+HF5126c+JhbAm02CfF5zismKfJBdOdQlD2iD/2Zmg8FksSgL8DJMs86RsscfHzkXXqiXHDOcW5d9BsSuoKDHvIvwzaE4g1zMzMwKnOHkuugxOSErycnqq8897lPfNUdzjlmzW9gNa4bCw0Vb6zW1ts57BS47rqw8cMf/emrrrkuuV9eb0jmKPsGVDgFj8KMizLrJNwTG3wVmg2zTPeD6JUE10owaxfnePcgmm6Kqv8HCtawUt+VxiwYtcwHVOQSZgU3SNW8Mg/MNhR8FF2Q4mFMW74JM30Yz6ThO4yjtemYJgQq7WZTAKi8Y06KNXDGUPF4XxZqt5sg4d2y8d48SXbu+tUXPfF37nvvk//VjBUx/1p9OZ7Ohz7Ze9onP/Xdl2XZiZsmp0+0fu6xe9ccuF9CpzsVBX3JjZLowPGQCFkDDYr8C12RCuRiKXpvpJoBsnYbePoX0FrGTZryBaYvIDjDSmjLtfUsddUtjkvOitBYRtFmDuz7waCt59C74mk0PEgFbBaotAfo9eegNVDyiF2Wuuaqscwr8mSgMnecxxQpLXTqdtiIZa4+mhQ4geAQRNw4jw5m5HLOpUUY9KjNEDwmpzLy/hzMBtgwDWzYGL73whed/7Lb33biY6RppbzraCjgGudm83lUD3RHCJsu/PLu3/zGN64+L8u2WVEl6FNSGldW2knhqWxKHg9bCLTOMy6rZL/oEVhuKfargiOYWf1um6cQaL0UEglhyyAwHrzPLeN9uQRZnwpdVkpZ5THe05IEKWuuyTvvj+HAdjwBqP0WMaL9iDpYeWrGKL9AL18zlatZto790JfAkjSgrHjkP9iDNB3MPfWp5/7FYx9/h78zSTuWWasvx5585gvlUz784a++pSi3HLNpyy1gbopKwkFfepJSU9/1XQEzQ+IyVPrCB/hQkTenGFWkRWDm4Cm6QopApcC6sRxY+pC8ZsY5aLCaCs2avGaNu7SMWRNvtrK7tNyhDpsttD+ubh2SgPwdrXMeq8drprzHeRug5hG7r5svLLokIMsSdDoZOpmB1+eckxrNuljcRpw/zSFh5mCWQAq+dVs/U5CyXv2ZG0KO1JV1mhb//YIXPvXXb3fr9ItYf/aigNsrZj3iJkuB7/93fe6XvnjFS4I/bku/MJQ8KrYON7ApkSSQEJTA1ABT68CFlFiZBUYFpcqNYjRtqb/NtzR+abjNd7jctr2l9Zs1QmYhXnQQ2hgpWUAboDzPedSu4/Z+VOxS5q11Dgo7lTAzOfNwMFonQGx/mGc+cd7jISvE4r1waPyshy/9IAw6ngxDq10C01G5VTwd2H7MlsG5597z7c87/9w/NzNeqGPNPqSB+8rXcc+PfOibry4HW0+c6J5ote+gP6gB8mGaTZFONXTqwbxIXAcW/848hXG80J/SuxyiQ/Di45QUzQgqArSPp0egs+gNDI2CwUXvaNrq/GZgvxpQJ+FggCP8cN+JFgkMDlgE8wH63xf7c3Mo+gNUVOq6M69y+nnypzlJDJjIUkzqS5qpg1mAOUQXfGLYmIl+zW8EGFYmWuqQnzuHwJbNDGYmH8C5L3laU/BYP+vwgua4jd9/2a8971W3P2fDR82MQg3rzxIKkOxLYtaDB06BI1SSC8R++JNwrw9/7Ou/OTczscGwmYrIELggqFIw0CKkZZ6mKXfRWVwwsiwrKvz97TLbovANESrbhuUfRRu/L3e0zI3uj8JErS5dBl6RRKACz3nEOCB60N1hRYtE1oqAukK0QCgRzZh9+GrMXnfofliPJP4wDVRDjbdJc+yDoLhYVxSGNSwq+ZrzRTEb0NBbd/I+pxVU7b7zz5/xBy9+wbmv2c46kgAAEABJREFUtQ12jcquVZAW9sMf4wnvfdfX/vr669PbTE6dArgNyKsKs/kc9JO5zAMXj3UNCTee4s2yrHkCkQJWIYAINfSEwE/SjJ9A5G8c8GNm+yxrZnG9LJeR0xXT5SqPQ5O/DYMKUfFteNTVuEfDy+VbLr4tq/QDh2PRUWCBQ0lf8Xl/MIe5uT3ccPWgcFXnPCUaIPgCjvPTyQL05bdO5jh/w/Gzc5pLszZsbGfhNTPmTdDMoSYVw6ftC+A482mnRpqVxYknbfjI05/+qF+51a3SNf8zxsOBHBFH1DsiDa83eugocN0enPWu93zvbTO9yTvVYRq6l3S0cvQlIy3PlPeESeLgnecScaipYGoqIclF/QrXwfREQknl5Y6D0lbCuDKjcXHBG5XfCKLiY//ljksfjQu0boXRuOgfdsp48WDGzQ81hdqlXomCpqpKzMzuRn8wQ+uc4FG7jtxlreuUg83D4uoJFOE1hVsFSOkQlGWQODJLIGXtYkgxDRKOpQFQl57dSdmLDhJWaFTktR9QD/RZf0W3RLfbhc9rdJOUeXvhrNM2ffHFL3vE/96yxdb8n6d9+0c46x/f/rVXXXvdxDmdiVM5ukl4mnQ3zN4Al3m4DmfHijhLgfSqqABJTbjEo+bmRXMCMSpPkwwJnHMgEYhyCA/MqyB693qNMePBKWfawb3qj4NB/MDJ4oR6sgHHFQAjOFS6ISonY4OOK7B1HTA2vk1vXLC88i12E7OGFmwbi4D4iG4CzGMptG4iWIevAwT9xG7BTRZzszHjfNTIywF2ze5Ev+ihIE8Ocq2DPah4QuR4VZS4EhlP/yYmPHk0cCwVApW9aGGcM18FxD4wBZwjM4t9Fs0MQKBBYUlAxXnWf9rCKOZMkBgNj9TBJTU6SY4Tjk8+9+xfftiv/sLtN37KjA0r4zrGUsCNjV2PXIsUGNunnSFsee+Hrnv1T68uf7Hy04m3SQpCh3xQYnpqioKmmeJmYTVVUJ9DYGITcRCfXGD7XVp9abHfhVmgLSuXwRXfKDxM4mN8Nk8rWvewZk0ehSsq85J35CWP+6TEC7qVvgDnS3ha3rrPVW1mRlHq6R0FBRUFNyMXXgq3kcDQ25TRqUlKJRUoQkueongKuU4npYDsUrh5Cs+cFVaYmkwoeGfqE0/YePGb3/iyN556DH42rGhNOpwb+86V4Vbve/c3//Da6+0OGzadgqkNW2jZeVp7c2A6ksTY94YO4GhBajYuho/SxL/GcELIVVjxDFJJIEL+I4OovLgJUesJ+29mkAs+SqMTR7YaN2FZM1uU38ygePDRyOnMpxv5THQcB+UTxqWNximPWQKtk4QbRskFz5OggvyvL71V5PmSylxrQWtAPxoD6lRzHswO3ZdnCdhHzgnjVR+0k4kewMyw8CgPEecsxDSyPpJE7accV4KJiQluEhzyYhZZllennLLxkqc/87y33u52m3+4UM+6bzkKuOUS1uNvGhT46ufLJ37tK99/fKg7rq4y1JVR8FtcLDV3yIBRbzuCcbVFQQo+FvzoumPM6l4zW13GMbnCUACNJrVx++uO1rEvv5nBrAGkXIVhIbUrr1mTXtc1ZIUPBgNa5n0Mer35u0NfFkBNug0FuJSJlLugOkYhYS6gtZCGiWZGnyeGL48sq1CwfzVSWiWJczBao6gdlTmo2DMqwVl424XJDeXlr3jFBa85/XT7gpmFYQ1r0vnZz3CL9//Hxf/jBz/Y8ShgopNkDkXdp6Ceg2icpROoK8e+DxHnhP4V3EBtE7w1Zdp8DB3cq/pWRoiUbvKM+gGbX0/gwznh54G/4kVhtIZxdSrPagHRaTmwoSp48hagdgTPDa42lloDua7qBN2XFzn5MEeAp+IN6KRUvrzY1ulRmmQwxoLzY5xC1dMC8Wn4XXEKRteRdiSp2sqyLnk+If9nmJvdg5SW/5ZNwEknTFz0+Mc/8Ll3uPXmT6vcOvZNAZJ/35nWc6w9CnBBJ9/4TvngT33qa28027wlTTfzrjzAc/FyXSHtdqNiiguay61xNd0CF9gSRYP9GGJckCvkV3oL9jMKPbnjiih+tRgt35YZjRvnb/O17rg8Rs2r/oZQo6J1Psh7vNudpULXn+j0Scc+4wv41jq3AEogijDD/j0sR4E4X4ZzIL1c8y4SVvMeMoOzBGVRxU1ZJ5WgpHU+VVO5X3f9S3/9GX9497tv/tR8+TXqmZkJx77jnd944/e+M/OQzVtOSzZsPg76Dzz27NnJ/VAB7lkotDPUBQDyawS941zN27j4mJ3KPZDZlWc5KN/BQPW25Vu/3BZtmvhH/taVfzVYWk9bpo2X28btj6ty+wbJT/pJiSuv3KqqyO95/M6ITqf0Fx0VlXmlP3vlKVJCls9okne6Kfk1pRJOOZ+SKU3vNH4B4nPyd3SZ1MQBo678CTcDnoaH2s5Sw2QXCJipN26sL37aUx/5+jvd/tiLmK/G+rMqCizMxKqyr2daKxS46iqc/dGPXfyGPbs7J6XJsTa7J8DTQjdLuCJ4U0dhl6Yddlf+hPonJRwBGBeb485cQFx02O+HiwzCaEGFhdG4ffmVfyWMlpfQGYXSpITHI8SNhASFsLScygqRXKSBp7Aq65IWZD8q8ubPc/q0SvpUQjkClblR1NCwACmKeMJBOiJCNXl+CHT0sk4I8keERfQylot1pAFJBgTm1TGn+ql5S9MUWSehIp9BCDM7XvKSp7/h9ueerj9PkxqMNa7Fjz17wjH/9u5L3/SNb91w/tSGszqWbOFIu8h5uqExGo9X9edovFlAknDgpCb2ASntpXmauENBAcdKVobaEpb2QWHNFyvgHAU5ixDTqDA5uYviFwV42mMqShcjGBendMU7GClmaNYN6IKPKhGMfmMcc5mLfsCAsQASzofq8dEyL7iZHCDv91DQKtevv+mX4HT0Dk5Yq8x53kIL3bgpM578kXc5Ro1V9bRgFLvL/sQFYwjsMSxpXMUBMDNYSKBj9sCjffg+tm7LwvR0+aULnn/+s8655fSa37xijT2a8TXWpfXu7IsCFJrb3/+x7776yivruzm3HTMzQFVn3DFPRcEpi7PmAkm4WFtBFIIWnkCPGqBkiOtd/oOAGRflEOOqMYvpcfGOSz+YOAmR1UBttPlav1xQiQre1yhohbSWuX4JTn9vXvC4saaS91TmpBzHECJUxqimtJGI9fCjrV8ug0veMAz7xlW79JkZdPzc6XSgO0zP0wFHqdnl8bTnvWW/vwNJMug/9tH3/8cnP/EX3nGqWZ/F1ux7dQjT7/3Ij57zqU9952mbt5zZTbJtPDVKMdcvyJ8BxmPaJPJkAKhAOrxiWO1gRuk66t9XeeU9WLRtLK2niXdRmY+mNfHN52j8OH+T68A/3bCo2YGtszTOgYcs86IoaJ33kRc9Yg4VT6qqOkfgCZL+XDLl/kvKvP3RGK2DdkyxG5Qpctt1YWbA8ATGLGGSg827TGNMlmXcPPTRzbg2bLbOsrmLXvbS573uNmd2LzHjfRTzrL+rp4Bbfdb1nGuBAteGsOHTX9z9yku+fsOT087p2aA3SaXQQZpNwXHFaTE131wPjK9hlJ2m7fJwYfF0mbtqx3guKMZz0WAlHMoxt+0cqjpVX1MXB9l49vpcyIM4TkiZtgDlDXc6EmbtnXlrmVe0UHxVUJhVzORhVODOQnRlWTuFh+Ul1Bz9DTxtEc9Q+4bocSxJivMTYDVoH+4lYBRyxvmRsutmhrrqUd/twaaN/oaHPvQeb77gOQ98K8exuy2zFl3SYOriT+x4yWc+felvbN9+m00u28IzjwQl6ZRzo+KRkpa00DjOLvnUIXCMFYciWq0O4m0BrLMBwHYJO2CA/VkNAk+8luZT2xwAXxcRuJ4U14KRCy/TICzERJ+ZyhqM7iiAJk7uKALZaR4iGxY/antxjOofxeJUbShLnp4MBn1oQ1vmfSryQQPGi+cTZ0ip+CeofDtZgiwFEgswnijQQQSrdewzHc5FkAPnmBGO/gZGPhcNjHFGWjgY/1FGuQKTU2V9wgmd91zw/Cc9/azT8BmsPwdEAXdApdYLHTEK/OgbuMcn/uvbv9ydOG1qkG9EFSZomW+E/stJ3Xd1eAlVVTnMtKj8mH5ajDMkkE8KHofpoRIaW7PiW4zNsI/IhbIe0W+2Knfvaj2VCu+neZlblIOhdTKAvtFb84SjjtZ5TQG1AFCZSGiG4Bnv965yUYzmQBHMp00Ey6q80MwPeHTZge4Qq8rzCNPB0Sgpyp2YnCzDrW51/H88/fyH/8nGjXadalnL+Ngnd9/z3//twhd1O6ds99hMuqbo5yWVRI6Ku5a0k8Foneto18ziUOR3okmkDaMO1GXRA30DteNKWLFebQaYYVx5RkeelLsSzGw+n9nefrMmzsyWrWa0/WUzxQTyYXTbj0BeL2iN94k5nlL1GB6g4n2555oItMx5qIIsCeRToyJ34F4MCU+RGv710GlgBLunzVaDhu/NEgAOxs0ceLQeEcOAmcFQ8UprFlNTZdi0yV/0zGc/4Tdvc+bE98y4CLD+HAgF3IEUWi9z41OAi9Z99/Jwlw994Guvr+vjT8yLTRj0U/jAI6u6QjaRQfKl5j1UmrF/XBNaaPTFVxOdGBcRETNyYckN3ClbCFgOKrMSVO9yUJ1Lyy7NGzu3nx+kBZVpiNi7aNtCkyKlIZ+Zxfyex+eN0KnhqWhklczNzaA3u5v0nKVAowKiMKt51OhDSSsDcAnhVC8inRJDfNQPo2IXgMC4BmwKDYz5AacAU5vXQ5HG6hzrrOtAcZchYyMSoFU1iw3TdXnKKROf/O03PudPzjjDBljDD2nQ/cJXw8Pe956L3tLpnH5yp3MCXLKRR+05SiqGQGUAEiyvKtR1zTngBop+lqM/cA483RqgMo9Kgi6o5H2omFbFeIWVLjfQ7o/zF13RGwf0mBnnyPZZNoTA/i3fDkcEGe8L4BbFnHqHiryxEM/eszkPQwtw7Y12YKW2lDYub4wnzcwMZg2UL7BuwcwgPiOrQY+Z8oBj8uT1kobADAaDHipeLxWDOa6BGZQFb3bE+5w7R6Xb7SSYnOjwWNx4uucRKG8MAYkzsKYIM4vtJEkCwQ0bTFyH/UqQJR22UcOB+YhAXjBXkTVmqm1b7HPPfc55rznnzO6lWH8OigLuoEqvF77RKHD1DTjnve++5C/nZjfdB+GYpKxTFB4UDsMucFGDShxcaLB6GDnqMHPM3QgnLXZQlYzmGOeXwFgJ48qMi2vraNOWhtv4/XMdBVMjcNv6lrqtYGkUu49Cx1EQSZmXPMkoeNQo5BRoOuFQXE3LPJBWZgEwD9DfgF7SV23IJ5gZzEzeMSDNNS/D8qrPHBbys/6UESXvLhPGyzo39DA1XV/81t971XNP3G7fxhp/vvi1+oH/8e+f+b95ufXuU9OnuM7kViqJAj1eWbiOa8bKMZoZ/Rgi0FW4AeLj41wu0Jm0G8ZHJ1X3QkUAABAASURBVNJQvtH41q/4/YPmUNi/UvufW220WFo6KvsQ4rjbPMu5bdk2PYbJPy0FFB/jlnyI7z03sXIReddzo9Qo85yKW6dRZTWgdd5HTbf2BbOVMOd5YuQx0U2R8Zg9ZbjZSDUtRn8YlTNNPObnyQHcVGjDWhQVyrLEFE8PEx4J+op35h2O2/dw1lnbv/L8Fzz5hbc5e+MnzcYKriUjWg+uRAFSfaXk9bS1QAH9D2of+dh1v37ZpeHny3yr5TmVOY9o9UtbgQojUJEHrgUB9O/d58CoIZifAQQYeAXGRXd4WUCCRlCbgvyC/AIXMQ4GqgMwgHv/BvTq1XGFQL/akwCiF2YcMu2nkspc9+X6Apy+1Zv35tDeHwbe+VJWskZmJpHkV1nMe2Jo2Q+1RzOGDYX5PGbGtlso3kN/ZRAFZhrgizlaQN5vmrYf/MHvvfZNZ5xol80XXoMejjH51vfD3T/4wa+84epr6hOPPf5WVvoOdu6aAQeG7mQH+llXcA6McFRcEO+JP8mrzET66I519YNjm6vPPMxpZvN0H0bNOwdS33zhfXq0roSFjGpvKZQa+LEveNJPGM3HYovetm5FmpkcwhNYRIOa10kFr5gay7xPvifvFz2UVOg6JUo4Tx1OTbeTxN9B0JE7qKjJpXQCjCcPZhbrBB8z4ydfloNWTRtmVOoSbJiahu7iHZV5ke9BXc8Re6rTTt306ac99aGvOPsWne8x6/p7CCiwmOMOQYXrVRxaCnCRTlz0rZkLvvTFy588OXlGmpcTvOMyVFyU4HFYo8C1aIXRtjm1FKRNDNO42AJKBhs/PXyZh5+H++UY5q2Qw93W0vrVtuLMjE5AoDKvqiIeM0qZR+s8p1Cjgle8pzVDiUVhRcFFAQQJMgpTxbGCA3hJb5YyU31o6mVfFAbnJKeAC75HqzxQ6M399JWvev6v3v6cqY9gjT8/vhK3+9d/vfCvrrqquuuxx93GBqWDOW00c/Rp+VVVBX17H3AciWAgCehf/MpKXRyDyCuriVuaZ7mweEBYmm5mS6MOeVjtCstVrLTVYLT8aP7R+KV+8ZiZxhiY1PB+ST6XItdmNqcSz7mRLOmWQ2WekufTDJAyn5hIo5WuekK7Dug658jHNg9WHl9DEuPAxzjvZgn05DzST1Pjcf4upGmBzZscpqerbz/vgie84jZnb7rQLO7wlHUdB0kBd5Dl14sfRgpw4brPf7V8yqf+6/uv7mSnTPd4Z57z+CrhzhlWogwFW/fEyKtfGZMiF7io2hRPy8hz3dRUaJ6KxDNtSck26yF1OYYV61P6SlixcEwUCxMa7yhiWqMcKDDQCiEpGv0KloTagIo8HrPzuL0uK+jIwhkFVQCMgkuWCPSMaCLpdjB1AeAjSi4Fo/masT6C3kVvwjjH+eh2Kkx0BsFXN+x83vOe+AcPuO+Jn7A1LOA4V7ZjJtz2b//2wt+94sriDpNTp7ru5LG45vodyHmU6jIjrSn+veeFTkpj3UVYnJsEIH968h5PY7HwcP4Ux8hAgP4WCgtteG93oZZxPvZ3XHSMI50BroWDAvb1tGMLYzcq2tAcMFZsWvy4kMFzPgpe7YjvtZEd5HPxm+xS5jWVPHhnnpAW88o8S3lipPmqye0BWgsOgeQ3NFOUaIWwAYPoaFTechkBuQ0CtEGWZZ6lNcc/h05W9LZtT977m6+84NfOugW+hvXnkFJA3HZIK1yv7NBR4NIrcdZnPnPpy2/YmR5nySbLeWlehQpF3YPLHAXnaFuaSmOEkNAV5BcYBBcjFyyoRCTkGrRpSr9pohEcNiJExvk5do6/5qlGQeUt60TKvNT9OZW67hE9LfPAzQ41DgnhKXwkjCgUh8q8oZfqYbLeQPEWRsKKG2KhT2HYL7qaHqY3aQyb+unhrKDQ252f97hz/+phD7792804Qcx3iN5DXs311+PEP/2zi/7kZ1dXD9mw8TTn0m3YPVvyiH2S9+Y9yOLLOgm63S7vZSvoiSSkIpcyB624BqJtk648QVoteoaEIn0VxL7cmGn5D83b0lTSOM7L0vjDGT6UbbZ1yVWfNcZRKK6Fcxa9VV3wHjtHTn7PuQYiz9MgqHi9pO+MOPK+lHknTWhFO+g/xwFVNhgvV221UIWxPU2hGYNGejoiWYADHNN0pZTy/r0qZ7FxQ4Ljjp38wHN/5QkvOvNM+4ytcV7nwG5yL8l+k+vzzaLDl10XTvzwRy59608vr28zNXEqdu3ZjaRTI8kq6JvsoHKW1dkQw8Eo+Mzz4qsVnK2rDMwLARVDXIVxodJ7E3ij4KDiXNalIpAyWEg3KuMWAaKR0sqyhP7WXPe6/X4fgsIVj4Z9XSPQgrEACBJEWPrILCE8HKlHGEG/6m6hIipr8jAXBVb0jX64AJYCBZ8hcUBV7u7/0v3u+rfPfuYD/3DbNtuNNfzs2BE2/e3bL37RlVfsfsDU5Ilpd/I4eJvA7j1z5MsUWdfBcUxSGjrx6FBDRMtOYw4JLfWMuqELkDfjKVG7dyHvRqociKsyK8C0gViSHvllyDc42Kete5l6zCzO9TLJIEsdFMbVK34cjReP61RKKHndVNclFCe0lnmWOlrkKU+LMnToN3j4WvICMBcamKF5HOfQ4riM9BUYAJxx/h29dGFQdm0kzFXwIS9OPuWYz736tc96221uMX0V1p/DQgF3WGpdr/SgKMAF6b725Z3P/vY3b3gM7Ngsr7pwSUYLaJb11rR+OghURHWhO3FGcfHps4Gm1Brv6KcED5QmMCEqeE/Pyi/7gpWwcmlwUduKwI3wxOPGckCF3ouQhSJLveRRYwhU5hESXo3gAulp1OxmNqZ3opmH+RqUc6QNYKStchrLIW6aKo45oK2Hnvg6pgXkMJQRzvr+Tnc++0PPeMYTf2+t/1eou3aFrf/yH9954w8u3fmrm7ackcgy7/U9er1+vCvXBqkoKtLDkGXkV5dGpWGjmzEpUWowRjFfiIiEiXwpnxvGNTxqliiSaMIYycdIvm08vcu8ZgYzWyb1EERrHQn7WZWZxX6RzVZVss036hppGQuT/6K75INNQH8qmBfawM6gP5hFxftyz/vyuuyjyGdhVLYuqZDSFsg6KbgHgzZlqkrrRu5iNDR3zJQkCWIXtBDaTIxwMM4UwQ1b4gbodAucduqWjzzvWY99/jGbsX7MjsP3uMNX9XrNB0IBKs/ORz+z+4mfu/BnL7TklE5Rd1DVUg0OqVYdF0tFRe7oJg4IVCwRlJKBi4nlEYJHoNIQmIOvMtI6CrKO5HL1Mge44Gq6dQhYDh6Iamo5d7lyq41nz7j4sTworNwIjEphFJ5XEOw9YF4j4dhJrGGPA48LPY/SBzxa172hIKHWH8w0gs0X8Zu9nveH5ljOqIhJT8fybb8S0VkwsI9hAWzPWUDqu0jQQWqOwtEDVkYEpoEWC/iYGUKdozvhSMw+FV4JCzPlWadv/9irf+v5v3n22XYFs63ZN4Sw6d0fvuwNX//G1S/pZGduseR4WGcDZknXmke5IL8llpEOXQ65S8suQV0FOAp9z1G11rh3JSJ9OFOiJlgicD61qSJhIJjoRvrLPxqvsKC4UZgZzBqwgviaNWEzAylOWofoyr8UWObhmCEskzwfrW1bIC+obytBOs/0FxNE62/qd+yfALoNwDwtRA4hlmFjWgs2vx5ACroIdcFx/YvmQgieR+wlZmZ3ot+fQamfcS1moxIvizm2NUCSlEj0K22ThukphyypofXidVol2nH+nEthbCFCcQyxtyBxmNdzhVVIeDKjNRTLgUl1gOdJQJdroeN6xWknT3zyuc9+xBtPP92+Y6aeMtP6e1go4A5LreuVHhAFQgj29e/jvE9+8ge/X5WbTwY2oabAq7lsPMH1yno1ZQmXWAotbkbEl2Wju/DB1Q9BMY4fBI86IYB+xjSvb5yb6CcFBIS2+/K7BDCnsXsKtYJKO6dLUMjIKq/oSnAFeAo0T8XD/JSaRmAZedPS11hGaPKF+XbAeEchqvjYNjcHIP3NDCkV++TkJAa9OUxSqYdqBtu3d7750pc/9/WnHmc/wBp+OG73b++98gUXf+XKZ6TZiUk2sZX0NPQGJRxPjZquk4eoZCDeihjlryYHSJ9FiPnH5WvzY6zHzOJ8m9midPZzPjzqn488XJ5l+GU1zbkA6sWwCCpnZvNjNCp3QWNa6lJcqIIGLGhm/AQVbU1+LyHLXCdRBa1xHX1XPKWqyhyem0tHeZIlAVOTGTqdBElibJMdYg1mxk8w3LhY8phZTDMzJKlh9+7dmJiYQjfrsPHAI3vDhkkH2Gw486xjPvrc5zz5BWefPbVumePwP6T64W9kvYXVUeDKa3C3j77/W6+f3dU5ra46blBw8dF69CGnaqhYyXDBIQPCEDDGN68WfeO76XxSFSwV9SuGA4XIaBmzZvyBGx9QSURlyuGLFrIYisEARb+H+b81l1VJuta+ouCrIGuGhgjMhvWEMBSwnq5aIqkZh/lesfL2lTC3HMZjS7UbXAJDAj3OAhxPQCQ4tVEo8wKTExNwrHXzps6Pf+2lT33dz98u+6ryrlWQhhP/9V/l87/wmZ++rj+7edvkxLGoyY9VPUerb470O7I9N1uYs6U9CXHOQGo3a6ZNV7zQhg/W5TRD2Fc9o22O+o0nQoJjNwUbKnD5BW8OiwGGR8BxeqJtPwSPitdxA1rkc3Mz0J9lVvoSXD6gks9R8/7cmCel+Oh2O+h2u+hwY2YmWo6oA4W5EQ2MXoAH2CmFychg11DztPDkE05GkZesv+LpU8qNxB64dC4/+bRNn37ikx/85lNPtR+YabG0vVx3DxcFRmbwcDWxXu9qKLBjRzjlkx+98o2XX17cOk2ORZpO8b53wH10SaFEZT5cDxYVhiH4jGiUB25mD4UDWgQKM0EkUJxchWWF5xRig0EPEm5yW4ulolCThW7wrIeSVIUWITDeIlQXxeei1IWAh6clrqNkPy/VuaS4sVAeimJQx8OzvU7G+qgME+tf/dznP/F1D7rvKR9lf2vlW4vguO3CLxePf8/7vvKaweCYTduPuRV8mERRFPHPJUv9xx0c6pHuO/u5bBeWpo2GwwjfLFvBjZgw2jc1q/DqQL4ygzamyl+W5QK/533O1yCi5L25+DChHMk6Rqs8xUQ3Q2oOKsdT9uiaqT7yv0Pk/5b3bZ6/Fc/0mM+iZb5zxw0wABMdWuihj40bE3/qKVve/synPvqCW505taY3rez2UfVy2o6q8dwkB8MFNfXZz+551Vcvvu6hqTsxzfMu5volsm7K8QSAO2WEhItGYYdAazRwmywww6KXdS0K7zsgFjgY7LuFw5nDiw5g/0UjQuOXhZLnOfr6bWoq9JyKvaSVUlMJBVlEwUMWNE8ZofwsDVI1AjwLMbNhlz1dAaS9IP8S0AoPVOqBglLA8KEhQ59HqCtkaeA2rIQvd5fnPeEh77zPI2/zXjMWYo61+JImdtF+dS/OAAAQAElEQVTX8Iv/9m9f+N09e6Zu0Z04gVZfF70+rb86BYeENHNIRDiOey2MgX2Oc9m6S/uk+KVxqwmr3MFAfGA+7NWU6lQk+QAtFFZ8A+N4Wj5UyhCBRG/BKIoCbiodN/4BBSdGJ1J5r8878z58lXOuBqh41F5ToZvzkDKfoFzp8pi9k7Iu1gFxfmj6KMWt/sTo4UcTduxnQljEMIklHdvxUZnrB5K63dKfccbWL7zg+Y/6w7PPnvghy67ZTWs7hqPJdUfTYG6KY+HitY9/Zu4JF37xx48LOAZlPQUkU5iZm0XCRQfHKYrKPKOuybjI21F6egQ6S17WyXzNAl2SdNQFKTBIIhcBeNR1HS2SwUDf7J2jUp/FgEq9+bvbkuP3MEpZKXMzg1GQiV5MiK+ZRVd1DT1AVFoeSx/j1OgIUkJQ+eUKCeswMzgiTZjCI+p8cP3g4Q+/9zue+ox7/fFxZrNYw8+Pr8Kt/vmdn33D7MyGUzdvPRXedbBrlkqiCigrh+BTTHSnSOcch/sZnZtxbSldWJqmOEHxrSv//kJlV8Iy9d2o0SHUPO4uyecNzw/y2Tg3VV2g4n257syNyrxDe0CKPMsM+tvwwBMjM4sK2lHOJEnjV+c1ZrlmCWwEQGR6JdFnKAY5jt2+hVdaOxg3W5xx+tb3POs5D3vJMcdg/T9aIUVu7Fezc2O3ud7eCAW+8yPc7mMf/84bi2LTKUU1SfswiT/rOjGVxUVpvC838CjLTwKBrnbnRuViBRCNvOUVtxblvsFqWQX1GsaBjQAwYCxw0E+gVmzAfrAZGtxYHWj9ig7DHkioVbw71JeABlTmeX+GwqaHIqcionXueewdfMVReDiWo+yCEGitC8Nq6JC2YN0kRiCMfguMjm+TBsUNI80MwRlc4mGuJgLMAhwYR3RTj9QGuN/97vj5F77gwW/YNmWXYw0/V/Lq5//9v4v+qNc/9tyJDWdYnaQofI4SfQQqBRMvhm7kFa9z2hthLJqHpVhtsyo3mldhYTRuJb+ZwWx5gDM9Di44CEHMvEwe9cPYODkIjQvYvPI0mBlI9EXQKdA8oMejqobKnCdS+mGfkidRlb4IR+i32V0S0KUSl2Xe6ThkDBtqBF8D5GVBPAsj7zogMM4zJbB9wYM9NMdYo08ZjJkYF5g/VOj3d6LbGYTbnHPch17wkof92snH2lfNonBiLevvjUkBzs6N2dx6W6MU2LUrnPme933nLVW97bRBQWXuJrCnN4eaO27jcZiXwAwJFw8VOehGwaAauJAkXAmFjhy4sOf7dOP3gkIjNiplLlrV8ZfgcuiuXCgKKvMyR02FVHtugCiSwCNyyJ1HrGL44aMrQRtBoRcjluSlbAMo/FSP+tDCUdwlFIeOaUJCmVbkO4vTTt/yiV950ZPesHUrrsQafq68Jtzx7//2m39x9c/wwOC3OLNp3pcDuR+gJOpQIMsyePJlrzfA5CRPkw7zeAKVxrgmFC+MpiksjMaN+ldKG823P/527pdz96euNu9oXW1cdK3hT8QAPxgO3JDKEi/KHg2AHi31ArLIa/K8jtoDqmiNyzKXMu9SsTvtZIc87SlrWgTS2nNu5aoPziUwMrtxk4G4zh0bFejwNdY9MeHhqxsGd7rzmf/yjGc94pXbJ7H+ozGkzZF6F2bnSPXgZtouF036n++/9AXXXmcPG+TTtO26KMoK2USC2sp4dGxJgkCFHrjbD97oD9DRmTE3T8ggiHyMpRphOg4EYNnl4bXIVwDHwX6x3bA3FgsBsdreMDOYCRIeiYazCGZKs5E4T79nm7QjKHwSCicJIVnig14P+gKcftq13+/xuH2OdBQtK+av2U5ARiGVQH0NVPQljMpXQBRwrJqv8UjeMd6hyacxMhpS4ubAx0NlzJp+VXmFTtplPOA4KZ4bizRh3W4OJ5w4+fk3/favP+e000z/CYWPmdbgx44dYdN//Pt3f+c737r+UROTJ3YnN24GWQ/9vEdlXsF4XOvJd6Wfg6O/k02gLAJA3jwcwxHNBdHTzFbVhJlxXmzZvGYW09s6zQyc6nmYD2gxGr+SX30cRVu+jcOSxwIwD5B8gg1d+vV68nULY+NkWchVmjNDQh50qoT5ev096PX2oKB1XnEDK8u8rHiaQh6UJS5MTmSYnOySRx0CrXILPvKpmVFNGxJzkS7gGhBfO9eEPev3tWN7GTKXoRyUMb9juRDr90jdHG57u5M/9rTnnPuKU48z3ZkHrD9HjALuiLV8M26Yi33Dxz4z+4If/qj3nKLc2Kn8JDwFI9cOl5QI4xG4aIzH7WC8YiDL0hrFFAKPy0JAHahwLKauyQ+Oc7/6NS5/G2dmQ6EDKM7MIMHjeeSn43QdM8oqz3nEXvCosfY5PI/Y66FlLsXvqPxb2pF68/Vh9IlWTyuTPPMEmFaJ0SXAGTKzYQmPLHVIWW+PmwnKXjgmpTxmB+b8ho3V91/8a7/8trPOsjV9zL6jF0799/dc+gc/+NHMAzdvOR0u2cjNZYmZ3i5wH4mFx6PlQ8RHhImeQ/5hRkKO1Gq2ODySdMi8Zsb5XsAhq/ggKgpa53VNXvbk+zrCUymL37V51RWT+L2ghS5lXtUDSNkmlBeODKlj9ixLqLSbsqovAgoH9oxzCs9xy88gQL/RI7jolyLXddbG6SkYTwU929jIK8Gq2jM466xj3vHylz3mpcdM4WoWWn+PMAXcEW7/Ztn8Rd/EPT934WVvmJmZ3l7WE7wzNy0vaElRRwOmL8DxmF0mEvTUAO9hAwZ0K+iJylzKPhZQzJGBmj8YNDqSI5d1RMc4pgaIlgwYL5iEDgEKOEHiRnF1WUKWSc478wEtlUFPd+ezjMshwRao1B0bSZIE2gCAj6flEaSp2FYUbqwzxBkgndkesysXsfCaqUUggcGxHwkzGQWmBKoE5vTEJJV7ilAOMJEGTHQGV734RU971f3vc+rHsYafb4bQ+fCHr33Jl7585bN5UjTV7W6FSxPM0PIDT4oATkrsv+MnwQ1PjIuuZxxf+Q8DRF+sUO++0mNZzhVWgBlnlABndSnatJVcssC8hS8/qTH2JbtAGJcoKoodWwRnaMHeRZ7jWR24b4wAeboqBhDPyzIv8zkUQjkHKVuHEgk3lR2KkMkOrWvemUM0MM2lWgMMrHnI02YGPcZ0s9ZvMGM/uJnYsnUTqRN4ItNHSp7odioUxS7c8fanX/isFzz2Nycn7cemwqpkHUeUAlyhR7T9m1XjVB7Jdy8Pd/nkp7792zt2JMe67BgrygRVHRqxaYGLKAGoyA0paZNCQsviT2bW9NeMC4SmLWE+uQwegdesWfD7appjxr6wUh1tWSlhQXnNKGiohBWWYBsMevGofaAvwxVzKHlvXtU5PAUfJMgEE91UGqTxvvreCL0ogWM5hYeggmlkl6cgJ7gRMJ4SlDzurKscnY4PSdK/+hnPfMKbHvHQW3/QjKYS1uazK4St3/vwntd++CNfe042cXxnetPxGFQB/YFo55HxvtxB41b/RTPyWyAUFEgLCPLfyCBdD0mLLX8dksr2s5LA/FLidJZ9Nc6EmtwR4ru6LiN/6ySq4XduYPNZlFUPgadRjvyY0h7odhLo/zNPuLlUucB51FhVnza2o64aV1iu0PrlJkmC/twsxNtTkw4hzCFLBrvOOeeEv37Osx70opO2Yf++F6IG1nHYKDCyOg9bG+sVDylwQx8nfeyjl77pssureyA5xmb7QE2LsOYirCkY4+KWuYsUCIKmpwKoExxhQSLAmMZ4Clabtyxw4I8U1n7A2LSAYRkteuEgOsCiHBM/21eCp4WET+tXusJqT8q6KHIMqMxz3h8KlY7ay4JWSkka1TAKMTfsr+qoaW0E0tdIN0H1qWXl03DAudCRvOKXwpH0rGpRtOgwOdFBkCLPAqanqPzCTP6IR933z375/Dv/E/vJyVtUZM0ESA+78ONzj/3oh771yqxz6rbu1FZuLD1Pi2rMcWOUJl3ojtxoySXQp3EDA047Q9xw4gg8pOchb5V0oJIKi3AoGxFfCSvVSZZEi6X5Ij/GCjykzGWJ93kKNejPQv4i7zGegoSbSnMV0syDRjlPiBy6PGoXbyN4zhtoZRss4SkSGTcMYXEtWGx21M9Zhng+S7hF4EZh44YMeb6TPF7jzDO3vuO5z3zoy487zvQLcFwZsfj6xxqgwFIZtQa6dHR2gYKj+18fv+GC731v5lwftid5laFXVPBcWBqxDRct83H9GaR4FB9XInzjZV5DF2YpoUXYxMfEI/xhZrFPZraoJ2Y2H2+2t380cxx7WCwfHDWymcVsZhbrUr6iKFAMBhj052hRzlHY9FHSMvcUbIECDKQZi8IlC2UC6xbM2jiL9Y77MAe2pb74xuWGS3PUwGKcpqwuPYVnBmc5299Vnfugu7zryY974J+aGaUs1uRDGnQuvLA69yMfuvjlvf7U9OYtp3JjhGidD0jXNO1wU0QC1Cn7b8SYlxvKMbGHLIr0I40tYrTSNn407lD7SR+uvxBxqOteXB9pvDhiSchD619KPSpzXucMuNmKd+f0V/UAdTWAp8LV/5jWzRxkmWdU5I533UYA4mFWYwatJQwfLREBMFhU6lThzAM+ZooTSAMaGxPdhPwwgKHfO/tWJ77r5S993O+fcILNMetae2/2/dkXR93sCXQoCEAB0fnEZwdP/Nxnf/Rc+OM7RbkRAxqRSUaByfsyagM2w8VLJUQPQOWB9qHVSMnCl0reZ/C03AMt+GBcqjGfyrWZD69rxkYPQxPGMQqyCObBdsScRiUsl+KGZAnwZYWSR8L6NSz9VrUEXN7vUbnnFG4VAq1wfsDM5gWYSfOC9GJdHkYqN2AUzNoxeQb9SBjRLyFoZtFv1rohhp2ToAPSNEVV7fG3vOVxn3vxC89720knWQ9r9CEvpl/9Gp747//+2b/szU6cs+3Y0zEzV9Ey53GqJ104F51OByJjmnLz6DswWuQioZF+IPWaoSVA4NnuYVDsZtY0cSN/mlmcV7MFd99dcMxyoCAJDSDZWUfzBq1pJ/4SmMhonSyV3Gjl/QE3rjnvrwvUOomqyO+oIMXdSQ3diSSiMxQr8DXHo3oEo5+A5lltOq6PFMYTGPDTzACmWVTuRn/zVjx9Ak8Haz/AXe5y+39+4Usf9sKpKbu8SV3/XGsUcGutQ0djf77xQ9zzc5/9/lt8OObEoppEPkBUAjo21ngdDLZoIXlGE1zcFMAIXPHBJ4jylAJUYS5JUNLiSD5mdlDNS0mEwHEiLFuPhFmIAwfHX1NxFih4tD7I+7Qqe7w7zCOitVLzuJ0WOuBhrNzROpd1o8oVNmN/GR/pJpcJEqBmjKffjC7jJSCVn1GsxyJk7SsupjnAOQpDA6YnA4XrjvwOt7vFB3/zNS/91W3b7BKVW4sgHd03voMH/8M//tebZ/tTZ01vPiUpywRVzYHw1Kef55AyL8sSSSJ+07wwjTx3Y43H0EhLwgAAEABJREFUjO0tacxs77glWQ44GOdUcx7b8MN6fJxzpTURvnHIV42nDTeh5T89FjbeoH8hrHiVY9M82l5ufNzA+oonP3nk9UHOk6hiDhWtcvF7WfXhEo8sCeCekkftCbppEufOzLhewjwwfNSSmSE1B0emFv9rlofJ0VGfWBqJVdg0nWLQu7Z333v/3DteeMF937jR7NqY6eb4cRMYs7sJ9PEm3cUrrg8nf/wTP37V1ddPntYvN1pRO6SdhBZlH10qnMR7GK0io9I2Km3wkSAxV1OoBCRpBickKVySEB5KYzZJiOis9sPMWOdiOBhWghZ3my6/wGMCyF0ObX65y+VRHVK2GmttJQ/2agRaJoEnFvShpsQLltANMFofSBD/HrpXzGC2v4vXFbuRF7PEDAVczupKooDRmkgzjom0raqCxTjeQFoSVFEMsz5ZLgJpTCUHz9bZHEiIWB4UZMb8mhcmIbWU8QG9/m5aQIbY7/gnhTVQXx1OOwWfecPrXvzKW55m38IafThOu+R7+KW/f/vFfzA3OPF06+onXTegl3N3SVrUtPa62QTIjnEEZDWOs6KfYzRP1xFGyKUjwhDGOTMz0md5KPdyYL/YTphPbsOt69kh+ZXBrGlDfkHxUkpmTbzZ3q5n35eiZr9bgLM/DppjoU2Tfxza9KXu0jbDSD/atsXn5g0pT0AE0A/KgsQc6UnW8iV5fTb+xYF4fjAQv8+iIN8HHren5F8LA2RpgP7WPOU6EU1EM9HHOfGtIeFkOiONxdPcHCfOgS0ADHvGB24KjG7NYxnjQuhmXXAJca3kqPJr/f3uc+t/Pf/Jd30JLfP1L8BhbT9ubXfvpt27mRCO/chHf/rWK6+szw1uKwKmqKDABWZInaHinS+MC03D5EKCQL8WJSAh6hthN4xnEl/PxR4I22+w8Jp4m/E1XZGg40D4WhMx8ql8EtgSULIa86KPnJa5LPSi7EGoqhIBJcsHUE7BUZFLODX0Y2Xm+QGmG6R8oHALgPEtLQGlKY/KmzX50zRFWeUwrpSNGzdiZmYPLSGmWYHEDeqtW5OvvfY3XvTbJ59s38Mafi69Anf5l3d+6fdnep3buWy7m5jajn4BBCqRQAUnWi+C4lpQCTRphsYNpHndYD6Nccv4RZa2nPwtzETHfUP5zUxOhFnjN2vcGDn8UDtD7346DZ8grjsVXRye54l2vcZ8bR7lX4o2rXG9eI5ZvGjKbke+Zx1mRuWaQA/3RhC/h+BR8bRplNcrbk5LWua1UOcAN676Bvv01AQ3mQkSKnMzVqz+CdDjyd+Mk5cwa/zGeTK2zSjuHyp0u122m6KTZkjM0diYQ4Kc/Zqduee9b/f2J5z/gDdv2mT6sXYVWcfhocAhqdUdklrWK9mLAiGE9HOfmHv6t7953ZNmZq1r6KCsK1RcmPNH7ZbuVa6NYPnolTuKGHkQH6N1yX8QVR1Q0aVttmGzRtgoPAoJONGrKPKozEtalFVexLv0ui4jPZVf+RJaImZNPVE4DoVW01FPR6DDVzKvgYNjEf0VgeNJQRS0jAisRycGVd1DwiNNSj5YcNg4vZkbsQK1vx6bt/hLX/zi57zyNrc/+b9Z5Zp9r7g63P7tf3/RH197TXnHEAzdCY7ZAfpioWh3MNBmaxyW1tkSR/Gt/1C4o/W1frlCUz8HCqEJLf2sEbczUrNjwf0OliKIP4ZYWh8gHhP2TlkuxqvlEGKy+i1LWcpcv3hY9HsoB32UxSDyunjeMT91LxVxBxMTE7wmmYinSC7W0HxwmtmTpk5oM8EF0fB2gNJEErI4MpdwLXnWX3GzhlhnVc/BktnZu9/j1v/jkQ+9z8uP34zLsP7cJCgwygM3iQ7fFDrJRWlf+xru9pnP/PCC4LdOmk2jqDy0UKV4WgEo62+l8bCevZLHxe2VaT8iVN9K2I+qDiCroxCxIQLdBqrIjFqWIqn2JWSdD/IeJOBy3vOWtJjjxogbJBZidk9LJIDGRXTjeCj0mLDoVbwi5LYwaXW2E4UeWIepXeaSEGR8h1uxJAWbqanI2RduKLpZTWtmrv+Mpz/yrx/wgFt/zppKWGjtvVddFY5517u+/7rLLu/dq9s9Ptu+7Tgqhgq7d++EePFw9bil77j6laZ4uS3aNbHUVT6hzde6bZxcQfFyRzEubjT9QPyqcxT7U4fKLc1f0RrXmJt4TxlR8Rqpj4H+HLPoRX9BZV6WA3ha5ikVc8Yru04nxUQ3a+YwaB0F8miAHvJjXAdyxdfRZcKC2+RjFBIaFXVZ8dg+hSz3It+t/8+8vtNdbvW+8x5zv7889VS7wdYwf2sM61igwLIKfSHLum9/KMBFa5ddibt99OM//INBf8vZeTlFy7yLAe+nZPGl3U5chIHb5IpKHnT3p37lZRtx8R6Iq/JcoFzwFqHwjQX1d2lbDgmNhYTjaRS7+iZF08oQWSj6FvtgjneHtFRyHblHAZdT+JWkJcBT9ghH4Wg+UDDx3pcNqa723hOMb1Az3bM9CcDG76i4EcFCwzdYzYo9BhSkjneM6lOn49BNa7bV2/OkJz3gTx983s//X7ZRDIusOWfXrrD1vR+88te+8pVrHrJ50y2QpptQ+Q5mZnpx7kO8qjAYkgMGqExaLFdPmy430NwdB6W1GJc+Lk7523gMH/GYMAwetKO6VgLg2cYCODwIjJx/2/KKsADyXwMMn0Br35tHxTvtiryd9+Z47N1HSV6vecRekQflmvPIqMwnuim6dDMyfsPvIfKzqiM/ck04yFWYHrBJtG4bL1coqcw3Tm9knwISVyDL8t4d73iLv3/iefd53Qkn4HqsPzcpCribVG9vAp3dsQMnfeADP/zdK39W38tjczrXB4I5SCF4eCqhGt4chWsGTyWjxY7D+Bzu+lfTdfVBGJdXQmUpdBeu/PEekQKusVb6PCIeQN/srXRtQeEHCkHlbZS/R6BVLoy2o3pajMbHNsX9VjG6gguOMo+g9DMDzNEDzzmqKCw9dCRv+uldzIb73u+OH3jGUx7+h1vNdmGNPleEMPmu91376xdddNVvbNp8xmZvU7BkAtdfv4dKYQqRH73nmG1F7Gt4ZgvllddsIWxmior1R8/IRzsnZhbTzca7bZE2/1J3afpy4TZ+f93l2mvrWZo+LtzmHecmUsrU8t7X5O08Wub9wSwG+SxPpvo8TcnhaZmblHkSoiLv0DrPWA7kT7OGbprPFmZNnNozS2AEQN6OLmBDF3x0bz67Zye6WUk+n/H3uMet//NJz7jvb55wgl1qzcJirvX3pkIBd2Q6enS2elUIUxf+d/7rX/vaDfdIs+Mx06Py5lC9lIa+kUol4SlEuXbhrEOkTHVcSIHu+HepgBifa/lYM9srcbTOvRIPcYTa2r8qpUQ9Wkslp5UilDxqr0pa5VTmgQQk1RCFoTjYfFTmC+1QUQVPeVeDshIOBrOlCIwjXAVlMkuA0IHRVRnJMmHz5s0ItUcSrZdi9vQzt/zLi1/wpDdt3mw3YI0+4sOLPlQ+68LPX/m8TveUbuWnkE1OYc/cHuh3DKYmNyPPa96fZsMROLoHD9EOpHaLpWHFK24clNaiTVdY/lFX/sVg1/VyQ4ZRKG4Rlo6vSfTBSJPlASNfDBE4tkUwwEeEodvUubrPwGyBa99TaZfxaF1XSoPhn6aVPG6vaJkHX8AlgQrXIMs8ywz6MzVDBTImGt41mAmB9dUR6leg5Q/2WTBQ1oSE+eiieRw4bl5fbdrUQV3dMPeAB9zxbx79uLv/1gkbcH2TY/3zpkYBd1Pr8FrtLxVX8oMv4Omf+tT3fmVi8tSpfpHAuxSUF9xpl1y0BTqdDo+0Mi44LiQmBC6wdjws33oXuYoXFkUyYGYwM/pWfs1s2Xzj6l25tkOfqj4Inhud5ng8oOa9ue4No6XCu8RWyLXfaq/rEjCPxBwta4/RR0rYzOajzBb8sBBpwWLRTRjWxkCgFwmM4CczOPodi/ZmZzhvAc71cfIp0x96/Vt+42XHHrt2v9FOWk5e/Ik9F3zgfV/5HZcee2KwjZZmU9hxwy6k3QlIyO/aM4vpqY0U4uDjiEP/mpF4K1RrZjCzZXNwHPNpZuPzmTXxo3nnCx0Gj5nFPpvZQdYe5stHXqfi1imU+Fw8XvOYva4LSJnDaqS0zjuZIx+moHEOY5janHUEtOsG8BAdWjARRm6OAijKGc2zgPiYGVV9hY1Thj27Lvf3ue8d3vuoh931dSdts8vNLGD9uUlSYGGGb5LdH9/pIxH7ne/g/h/60LdeARw3abyrnOsNuMQ8tKZcakiSjEq9Qk1lpPWiO3SY8V0AxjzjjtGUbXThKrwcmgU/fn2q7tXUozyj9ZtZFB5t3UpfDipntvwYVYfyRGub+QLpo2/15rRQclrnZdFHI+B0JOiRkGP1A3sptS3FWVT+PJOkPKsjAq3pCFI/KnDmjy4tdt2xS3knCIgnlmp4iDR1sa6a7XfTDEYTJzWH6QnOW7m7OuaY7LOveuUL33b2CbZmf1iDc9D95IX5C9/33q//VtY5YVuSbkCSpehTQQSj28vJbx5Zx7jJ9HA8JQoBcS5Zdqw7JM+Kjlkzv6OZVF87t4o3a/KYNa7ilkJlWrRpo2GzpqxZ4yqP0uXuhcCJJ5Q+HsYijvSwFTG+LInG0iu/qjthFjdEQ2d+wvGeyMzgQ8WTkj4xxxMp8nnZ5735gHNTMFuJlCd6KZV3l/flExMdTHQc+Z/9FS87QGtGMDO2odezbjA+gYEwx7prTEzwhCbpsO4KWZJyU5BxyeTMV6LXv+baxzz2fm8779H3fOXxx9s1WH9u0hQgW9yk+78mOv/THeHU97z/e2+u601nD+oO5volalJWX3QB6NFxF92479WHjuClcNZA780MZjbfEzNbFJ5POAhPoNZYira6RriFGIzWCu/MW2VeUMDlxRzvFinsePTofUWlI+uc+UnHVkGrsFnTb7PFrtJAWmsT1fqprYHhHPBgAGmSQKcBXQrMlJre1xW6WQe+LGC8N9+4yX3nNa958cvucM7mi7FGH9I3+cKX8ge9591feXknPflY7ycs60xFZV7xmoL2GwJpM999KjuQJ+fDB+Fh23uVHhe3V6aRiP3N3xY1M5g1aOOWc82afGaNu1y+0XizFfJGGo7mXuxfGBOpzzXAqiB+F//VPIUqeYWkkyjxeVH2UHITW/G+XJa5Qw2XeDTH7Amk2AP5WKdYaiUwXZDfzOj4SAd64mumOIdt27bRAp+h8k4wyU0BrEaR70HGK8A0yf1DH3b3v77bXX7+zTx1uioWXP+4SVNA2uYmPYAbv/OLW7zhhrD5Ex/rvebyn+Z36w2c5bTwipAj7ToqnwAEWXtCwuNhEBXFaA0pexqBiys7TKEFwcLuULC04dZVs2a2l0AwMyXtA57p49EIH0861BE+KuQ65m/TAJY1T+s4R8mjRynzeJfYn6XgmWu+CEfFGljWUIH6FgkC6eghwfkj4C8AABAASURBVGhmFHwW+25G1wFG0D5hPov55Acfc4FpgT6WZbvGTUGacm5cig0bO7zH3IPJqRTGtMA2pzpJmJ6sr/uNV1zwp3e+wzEXmwqw9Fp8v3cpfuE/3/O13xn0tpzU73eRdiZQVLT4qDQqX8cuO+PYRJx5RSQ6xKSD/hjlpVH/vipWXmFf+VaTzvmBMJrXIheQA8ww7lFsCzIphDY86jqWF0bjop/xgHwYPo5us/Y1LvG5XEbG1/RlTm4Y6yJHweukYkAeH8wiJwrGeSp0R2Wd8FSvw9OVKSrhbmbQtEF8yfWriozjAufRzKDHbME1M/K9AOj33zdt2oBBf45yp0TZn8HmzRl7PDt3t7uf886HPeSuf3HLW1qO9eeooIC476gYyJEaxKf/G8/47y9c+pSp6ZOTQQXUWnApYGYIgYuMi875lAvMwehHfChIqcS0QGNwhQ8Jg5WwQtEjltT2d7QDilPYjDShx6xxA4VXzU1QVZUoqNAHFHKDfI7+Hqqa1xahZG4P/e9RCY/Fo04V7QSQjkzVa2aR5vLvBeaVMm/o7ZkvDMEyFIz62/bBoI+NG7oUrDMY9HbymBLodIpdT33ao9/wwPue8U6LDe9V85qIuOzqcMb/+T9feHNVbr9Dd/I4l01uhEtT7J7dAzgj7RwSlyFah/rPfciXontDE6z4cNyklS2LtrDyjfO3cfvril+E/S2n/OqLIL/qaKHwclCeNm3U38at5LZtKY/KCvILC/4A0bwmr+e8RupTkfe5adUJVMGrpVFlnmaIlnm3myDLErR8r7rUlqC6WzRhNz9Hilec4HkEVfOEJo0Wucf0FJD3rsfd7nG7f37so+6u74P8TPnXcXRQwB0dw7jxR8HFNfHJz4SnfPYzP3hN0j1p6+7ZEiFJ4WlCMg1lWcPg5hV54uW3oVIX2T1gxIhSAoCbOjT20TFIqIxCaQrLDVTmsmCkzCsetZdUqlLmOQVcScuypiWjb/I6HhOSrFS9VMS0sqNiptVpQbUQVFAWAgQlC4yNr9oSXJwN0p/05lYL1HMR6kNK5QdZTpwPhwIbNxl8tWPwkAff7e+e9qQ7/z+Wn42VrcGPn1wdzvx/f//F/2/37OS5s3NdF1yXCiDF7NwcEvIjuIk0ZBwrx04/SEXEL0nVHE0NMxC2LDSfK8GsKYslj9n4+CXZGGzXQOOKHwRwnlYHxzoEOsO37e8wOO+08ePc+UxDT5tnGOTmnAqZPNaGW9eT94QAWuUERGMi8PhNdSifmSF17GPtuVEdQJvHPB9Ef/wFOG5kA6+UtGdMuWntZim6aYKJTorIlz6AF+7kbyAY63EJMIQZ/WzEzPjJNPbBTH5A9YFXS0nqmb1G2inh3Ez/1rc54d+f96x7/c4Ja/j7IFh/DogC4oADKnhzL/SDH+Dcz372W7/X73dPMJvG7KBAoLCsuGg9BWbiOlTmKbS0HIWTCQGM4wJkuugXqEDkHm6Y2XwTZgYzi2Gzxo2BG+nDrGlTwk7WQ1VVUbANomXeg5S5LHX9GlxNa0bCPZB2EEivGA4k5LC/qkcYBpc4fj5sFiCL1GLzivekA+MY7lBwTk9vxGCuR4soIHGD4j73ucM/POsZD/0TMyvnK1ljnp/9LBz7zn///uuvvAIPrsPGbGrDVuS8Ktg9swdVANJkgoooAY001IyQO69oSEtQ2Ee6HsZxaW5WQtt0m6cNt24bv5w7Ll8bJ3dpOcXtD9ryo2XaOLltvPxCGybfRK9ZAiOP6bpJm9TBQAq94fOKlnNVFJyfinkCOqmhQ4s8JRL6jTzruXFt6zUz5lsCOMYlbEtukwbFOcAokTppipInXp1Ojd7cdeGOdzz7X1/yq+f96tSUrf8XqDj6Hk770Teowz2iHTvCKR/4wDdfuWuXP31ycqvdsHMPJianUdYBwWdcSB0kbhLgTt3x3tdo9UEKSR3jkSeQykdQ6vLzcL5mFqs3M5hZ9OvDbMGvsISGIL8gvyD/arHa/MonZS7oqFFCrtfrod/vReUuQRcFGS14CTUzg5k13RhaKzJXzAEJ4+k0afHT+CnQ4Sufgz4ZGHmjcpcpT5RliUG/xNTUBmSJ75951nF/84qXP+W127bZmhV6V10VbvGhD/3gD7/x1Z1PdnaLdMPGLSjCHCpfwdHCG/QrJEmnYTsP8iV5jhtJbS4TKXPSInBj1KD5jkOzWVrsR+RbVrCMO67MaNy+y3PNsB/szgG9Tf+1jhzLC3T4LsQDZgZDEoElD4800MI88xFtWG4bN+oqXtD6DrTQBVCJNlhowMxioK5rblRz6Jh9wFOoPM9RUJELMA/xeIcWeaebotvNonXuqIyDdmCxBuVp6orj8qIq1bVpvAT7YGasJ2FuR9foonG5aduwYZJKfXbm3vf+hX967nMe9PoNG2z92+w4Oh93dA7r8I1qdjac8MGPX/O2n/y0uEfAVuzc048CtJYy58JK04zC03isViDeWVIQBqPAIZgMyov5zjXLbj542DxmCy2ZGcwstmVGoRAWC9QoMBgXM6zqo2EhlRuXXfHC0jTFeSqfgseNsiDyokchN4CscoSK2T1FZIBLjIrJ6IL9DtCjsoL8nnTlMJhmEeAmSvGC6YMbKlCoRQUeIzwkRCUSwQ1DmrBOGuHTkymKfI+/xanbPvpbv/Hi39+0ydbs/y519dXhuM995sq3fPZzPzh/w8YzJtN0M2pe6fT7fVroZaTDhg0bohIxsxg2a1zxpGgh+mlDJfdIAofwGR1HW62Ztd5518zmadJGquw4fxs36iqvYFon2mCOJspPJd3yWCAvN794OMf5GEB35lXZJ5/3UFd9mKuQ8UicYgMdKvVu5pBE69wQ2zBDnDO6GD6Kd/N87mHNEoypZhwbWdqBLnnfPNsqd8784r1u9ztPf+p9XkbL/IqYcf3jqKSAOypHdZgGxYVkX7wET/nK1697Yr8+tturN6I2KnC2Z5bQBkioJwISB3Qzrioqkpo77ZrpUlHyBy12eNAwhBtqdzMuvjFgsb1e9iEu9OXcvQoYFTbbC2PgeW/snINg1vRhr/LDiCDhRb9cgd7YD7mg6tX4WyjcxJMcrZWhcRMav1DWRWORD2aoSGeJGZTlbBRyCCWc1UiY31EogfeLId6ne8YBKS/AEzgeVXo2U8EzX83+6ThZbTsYHMftWAdlJOcjcIyGisf7aYfzxfyWBAQKUwPb4QlKqHfihBMmfvyqVzz/LWecMXkZ1uhD2mefv+S6J37wkz98VDJ1q046McXxB/QGNXzoIqFVzlNaxI0ReQ8tSItAWlac84pz4jm+YAmi4iE9DtQ1M5gtDwfgQJCwTmGlslKo5ALW7yMSC1CZpRitw7xxqAtg9+JrxjgiBvhBOkf+NmvizRZcrRdnKXnKIdX6YbsGDyGQn0A/6JrzqMjTBXm8LOboF3rk8xkgDKD/F8D8HDqZx9SkQ7cDsHOxXfBRH+jw1QgAM+M4DQn5X/ydGFCGAmnXIU0dNww51HQ36yIJHp2kQjcb1He721nveuqT7/V/1/ImFevPIaFAwymHpKqjuxIuruSSb+PeH/vYV59blNMdpFvQ4/rhKuNrMC41BLrcsRslqqzPQOEJLsJF0IqLQHxYb1zAy7kx0wofZmxzBCtkPegk9XG0EjNjsAW9fMfnYQJfpen4UUeNOmYf5D0KoT6KsoeqzkmHCkbaSBCm3PE46psooVgWFJpyRsEswyCFKTnZGGGuZlxgdsaxTFmWMDPoGH/DBio/3surD46CONQeoe5jy0YK57R/2fMveNrrbn3rqbX8t+YT7/3kdU//wAcufvXGrWdtTjrbkXMMkdeoqKDrnHnLDRx3AEjPvcHoNf6KV4TlurlS2miZcfnGxY2W2R+/mcGJzADpbUioZRkFT8u8KAbk70Hkb/F4WfXgyec+kCeZbtxgTU2kmOg4ZLFc4BoQ6uiCj5nWl3jZYv1mi93p6UloPYnPt2zazA2Nw6A3E5V5qHf3f+7nbvEP5z/zfm/YssV2srr19yinAMXgUT7CQzS8n/wEt/rEx7/3/+3end62PwiQENXCXKn6QKtxpXSzZnEul8fM9koy2ztuaSYzm1/8S9NWCq/UX6UtRVOXpJnQhBY+xVou9kPK08xiUuAxe1XmtMj7vJbgvflgjkIvp0VJISarxkIsEzPzg0EYFGcwM8YsvGaOwjQjqJApHGHcYRHBDcBIlnKYmJpCVQfUvkSvvwedToINjMt5Zz7ZnaAALlFWu2Ze9usv+t0HP/D0/zCjKbvQxJryffLC/MEffs+PficJZ546M1Nbd6JDa69saDfCa5ondZxjkXNYQcqSzs3cjfNj7IbCs08HjrhRnq+XVa3ybemyyuyryqZRaPRt3S3NS/L4QF/0JPr9OfJ6HyUVfOCG0tF6ThyQ0KqOv+KWdeG4wWwaVI2A6kmSJLryR3DnYFwQguwHxRX9AlPdKRhSzMzMotNNkGY1ks5cuPNdb/nuJz373N/YOmk/wfpzs6AA2epmMc6DGuSePeGYj3/iyl//yRXF7bJ0m8uSDZib61MZJHEnrcUsjDZiZjCjKqKgVZowmi5/G2fW5DVb7CrPOJg1+calKU71tlD4UGFfdSp9XFteR7xETWFWlgUV+ACDfA767yGrQsq8Ih3rSC+LHEmhZj7GgQJstE4zGw3CkKB5VIZ1uALGo85AS90oAIu84jyl0J0yKEg9+2A8vp/MOvFYsptW1z39mee98ZEPOeufzHiZ3lS2pj5J1/TLF4cHvffdX35zqI4/ods5GZMTW8iDc1GZi77qMPsvZx5Lw/MJN2EPaXFIen/I6uEmdKFDnhv9mhvEnDzeR5/KvNB3RKjItYkV/4P508xBf1kxMTEBKfKl8ySF7cjWjkfr2hDFdK4HuUvhXIqqoAJ3rJP1gnfmnW4xd9vbnvK3T3vK/X/jpE22/h+tLEzQUe9zR/0ID3KAXPiTn/r8rl/55rd3PKUutySDQZfWZUCaTFDXGJgeW5ArxAA/Wn/rMirmVXgUbbzcUSjPaHjUrzRBcXLHQWk3DjzHRRuFG5emPaPTAqRR4LF2jbooKXhy6Nex8v4M3VkKvR5q3Y8TRovL0dZrBRZGHsXJqhHaaGN70vVqyVGt607RybgmTHfjSnRAybv6JEmg+/Pp6WnIQlJbU5Mp6mq2fvgj7vNvv/zke/wfttFr615r7je+izu+851f+sO5uW13sGSLg6UoyoDKG2kfAAl7bl60gZF/v4DD+4zjzf2J23fvuJEj70jxrYTFVn1TRnFLIWU6imXbJ82VprGQd6iYEeeirHLyNa3xfECezyPPV1UJKXOeqiPlR4eKd7LbwaS+z0E+5l6XGwH1CWja5ryCj6NLBudNHpjA1cE22nAcMyAnSzIknP+pCYMPe/wd73CL9zzl2ef+5vbtdiVzrL83Iwq4m9FY93uoXKyTn/li/iuf+9wPXurDpg1F1UVdOZQVYDzicpZ46SNxAAAQAElEQVRyITtoQQvgwzJxYcttLSf5R8Fs86/yKE3uKNo4uUsxX3gFT1tmhSwxqc0nN0as8KExCqNZ9lWuye8hgRbvFIs55MUsynIQ7xMDj+AlVEHJZA6kZRiBwpRgWPw0dSqOeWnxUIwxEAiwbJM/UMDpy3JTvGOsaZHXnDRGIaWQ7KQBvZnrrn/wg+/xp097ysPfyvpmsAYf0jb9zg/CPf/hHz/31tnZzT/X6Z5orjOJ2d4siqpCoEJn35ftOcsvm3ZTTDj045ESbXEgFPFDfvNQ36S485yWOY/YxetV2UfFO/PADWvCDYD+oiLjfflEliJNHVyC+fLgM6/MqeQD14PqBLgomNa4LubXnAsMkZ8daq6lyQ55un/t7D3vec6fX/Ds+7/qxI12XSy2/nGzooC7WY12Pwd7yfdwz0998ie/tmdm87ZBmZrLUgx4RLxhw0b0egWc67DGvUmohSgwca9XC3E00hTgAqZEwFLsKy2mq/wYqB1hTNIBRamupZiviMIKFEDzYXocxyQF6ml+lLxPLGix5DyCzHlnXvC4vdb/AMZ7b6NFLWEnOIYd6xGM9ois7qZezxrbV35CbRLmSkSYgyEDQgKjH6xHdYdQsqDHxo2b6QIWapj1cac7n/kfz3rGw19/4/ynFDig59JrcM673/vDP7ru6ukHVX5TsmHLVirz3fC8VkhSz9ONfL5e8ZswH3GUeZYfG3mBc6353n8MiWTaDC6tZ5i2Yt1Nnjp4blALXiP1kEuZk8dz/TY7FbqnQrdQIeEmUvfbssopRuDI99zRggY7xLnqgtazmSGyb1M1eZVhGg82CktYhmAh7guwaVMH/f7P/IMeeKf3Pe1J93zL9LSt/0crQ/rd3Bx3cxvwasZL4WE/virc5r8+edlvXL+jc2qSHg8kU5jpzSHtJFw8fUxPbUQ+KCGFxfwQ2rrNrFmIY9w2z1LXbHGZpelLw2pPaOPN9q98W24l18wWJZstDjeW9WgWCUUJR4Hx5iFLJecdYn8wgwEF3WAo6Kq6D1DZRoGWADouloUCCtBAAam6RVus+HgKtjqCso051b8UCCnpz0oZ4+hImOpv3SVEu92Qb9s++dlXvuK5f3HSSbYmj9lDCHb5deGkd/37t3/9m9/aedfJjae5iantuPa6XXA8rjUnZV5C1h4ivULkP5bjiBfepeGFlLXvU98F9bR15T/kaBhnP6sVn6uILPOap08VdFeec6Oaa+Na9HmKN0BFhe54gqT/NS1LDbLMu7TQE/rBteGp6M0FyC+Y2Jf9MTM45+CouOmLvGzyR8QYmBkRMD0RsGfX5dc/9MH3/D+POu9ub9i0af3OHDfjZ12hj5n8q2dxzCc/fe3vXHpp/uCi3OjyPOGCrWFpwuVJ4emM1hEtPy5KFQ+BcUMofCAYrUP+1dahvIKU3ziYaeEfGEb70LYht8VouvyKN1rATkqGlKrrEoX+NK3fw6A/S8ygpLDTEaShAmilmKsB5jcpcU8/3YRcmfDeO0mMFkyIkOATZLVHMI9R+KU0UbRpSFhI7adJRkGXwAVHGanyDomEZhjA0MOmjfal1//Wy55+6ql2Cdboc80sjn3/e3/0tm9884anbd56ehJsAv2qAIdEReEjRDNtejQEs4X5VbiFmbXeZV3RbCUsLWhmMLOl0WPDqndswkikmcX6zGwkFovizGw+bLbYrzZGgSVPm7Ykej5oNqzPAUa0+fd2a27eK4jmyif6e/J6QaUta7zf54aVx+05r5R0+qTNqksoF1Bioptiw+QE0gxRbnjyuVFeOID1eTjKEwFcBw2YwFfrGUiZh33k5OvayBifGLcJPOHK0gpzvavr8x53//9973v9wsuO22w/ZPL6ezOmgLsZj33s0EMIna9fNPukb33j+nMDtlnlM5SBCzF+M8XBkKB5KkihNP69P8209MDFyEXNxct6x/r3LnloY5Zrd3/jx/fKNdEUNqpPATON26OiwMmHv/5WlHMxXPucB+naCNUwWpmJFLoF0pEl6WJeoHnSqiYCE0ZfPwzI9awjYMD7w2wig+O0BG4GgmdZD2RZl6coU6zDw3gSkKWFn97gr3j1q1/wR7e97eSa/TOeq0KY+vTHr37Rl7505ZMnp0/p1DxtqIJHTeXBT9LK4DhYswTBc9A4uMfMYLY8Qlg6B8C4uKW9WE2epWXMbGlUbEt1CW2i/C0A10ZHV/HRM/wwszi+YXBFZ2lZZVaclLhcMhIsNufhyVMVN1m6MxefCxX5vSbfB9/weEoelzLXptMlntV59gVE0yfnYmUA+X6xLPEA5Y1pjkn/bmcSeZ4j4+aVNgUt/1lMTSRcU3tmHv7wX/zbO/38OX9+xhk2YEXr782cAi1H3czJ0Ayfi9Y+92U85DOfufK1vd7mLWXZRekr2pq5lhyFC7fYIYOZIZF1biXAFH4ses1sUfhIBjgm9jscFMb138wiHYxCx8wg4dQAbKum0CkgyyXPZ2ilz0GWi47ZjceMUuQSdo40NAQYaSiBZsZ6Aig3QxTTjvEYwqjUlC+GWQ6CyiZkYWco6wEkNFMeZxpnzFc1ikGJqU6GEHhFQmX+/Bc96SV3vvNxH8IafThXk194745f/fCHv/crWeekTvDTqKjI65Cjrmt4r4470iuBhSkgdImUcIcRi+sO3vbZ1qI8w5nEKl2L/JRwoGyXZQIVW1tWfmEhTGZhzjbcuqN52ril9TbxsXD8IO2ju/RDOtfMYGZwDPAFyJMVlXlR9shj5G1a54WukvJZVLxKCiiQJYEK2NDtZuhwihw3rGTTWI+ZAQxoaC3fmxmMJ0mLwmYsm/Fkaw5Tk10YNwiJVUiSnP656v73u+PfPfxhd/jNM8+09d9m56ysv4BbJ8ICBX74E/z8f33i22+6YUd2YqdzDO98uXSp0AOFKrj6zDJmdpDAClQaTIWhFSpM4mtm/Fw7rwTVwUAjacvLL5gtjFFpIBuZGUAlG4/Zyz4GFG59HbNT0EmZl1UPteexMY8gJbQozyC3ActCDzUW6xBdGyhO8LAo7GzogmWFgDRNqeg8qqpExvtlKXVH4ZlQ+FkoGD/L3vVnnvGsx/3Jw8+97bvNLMcafEjH5MOf2vH493/oK69P0uOOm5g4Hi6ZoiL3pFuJQItwgSbUENxYIrSK71AMqBUF++subpvjWBxxkCHO17I1mC0/fvVDWFp4cX1ayyBtF6/hcWUskoVzoWskngrlvDoaDPq8iuuhJL9XjNMJlFEutMq800mpkAFtAkLwi9oJIcSwxqA+LQfl62QJPDd1XYqfotiFLM1n73vvX/jrRzz0zr/LO/M1+38OLKXjevjwUyCy6eFvZu23cNWecMx7P/jNN1CZ3z5Nttuu3b244JqeU6FE4dGE9KmFJsi/EpZbqG38SmUPRVrbznLugbQxOu5KPz3KTY3ialqR+gJcrzeL/mAPlfoeSJHLajFa5o735hShaDZBommgsvUjANp+Ij5MM+YxiyGwHaHZBARIydc0WykqkdIS50k08nwAl9SQ8EvTAr66Ye5JT3zw7z/uUT//D8NK1pxD2iU8GXr4f/7HV187MXnyhsnpYzEojKcaIP0cmA5LKkAnQrSQQ5Vw72RI+I96gemkKDec4aBAysbyi12gqVsuOFN7uw5N/DIur2OwApamBY2PWBqvsHG8gvwRaJ9l2o79XZwmGi30ty1Pl2OHMF+GcXw9+YtOfPVbBoO8h15vLkKb1pLH7FLmgZtVzhQ6iYMUuSxz/aSrM/IpQizf8K1FP0hX8DEzmBl9gGl8lDNmBjMhkJfF3QV7VWIwuIEb2LnyF+99+398zCN/7nXHHWdXY/1Zp8AIBcTtI8Gbp/e6uXDipz9x7Vsv/cHso6pqOi1yo2XEHTStQnApyTI3syFxtMBqgELKuPiANp6++Tw46h8pGcHR/DDSSIJSAi+PXwzqQV9UK3mfWPEoPFCRm6vBrDByXCPYGiGH4WPW0tHHmCZPG6e8AU1cALVZhP6TF896jXeL6kdVsmwIyBKLws8wmz/0ofd6+wuff+7/NLMbsAYf0jC76Fs47x/+4WN/kaQnnhNsK5zbAE+l1u/nCBySeE1d1waG+aETI7mKO3iIxoJqOlBXZbkkSPvGt/pPjWMUy5U0a/sG8sHQH8hMWPkZrVv+lXPvnWrGtoyygKd0FY/Zc95lDwZD/tafYxY5qrpgQY80M3S6Dt1OEi3zhHyo4uARfcO7Fvtu1rhOO1DocYxP5FkA2+RWCoGb5JonAN7P0TIvbrjPfe70V+c98p5v2bL+2+wLtFr3zVPAzftuph4ucrv44t4L//vzlz89sROTXt9jwIXanXCQAEU82uRZFxclZCFZHSlllsKQRr8+zEzOUQczg1mDcYNz1NKkIY8dS1rHeUQR/6/nAeNybox0XFyzjgDHe0UJNgk4x8oS1ksnvqrDjO1QXzsYnPzQE2DGeEIhwawJ02GdHhKcAMUfBXy3MwFwA5GlRXnPX7ztOy547mPeZmYDRq65l2O2b/wA93zHOy56s7njTqnrSaTJZuzek8Pit/UDzA27XTvuYxwS8mDiKo62gOepR5NqdA4ULHoI3nAAynxps6pjKdo8y8W36ePcEMK4aG6IpKAXgGiZj80KM4OsdPF0zmP2ggq8LEuenOSRv73nXHDXlSXgqVBCZZ5BX4IzKmTPTYBcM80NYl2BdIoAYFw7/IQedSHMTzbA4tBTVn1MTXUxNZ3d8MBzf/G3H/foe73umGPsp0pbxzoFllLALY24uYW/eyV+7mMfu+RZPmyfzMtJWNJBd7KD3mAuLkCAJKKiaOji6XjGg7CIwHQzw3JPXLztIh7jLlfuUMXvs33HvhNmFsdjNuruLRD3qs/XtFBKHg/PNV8QKuagY0hZ53LhSwqnEs48lRHYRmA4oH1kbUrBL4ApzMtP5lVfSH8FhoibLG2uIlhKis4SaGORpiYrhv3Z7U84ceq/X/i8X37D1q22Zr/RfsU1uN0//MNX/njXrs5tkmwbJqaO4VVFRaXewY4d12GSglzjAhyCTxDIhyHOFZWRcezeD6ly4I6ZDek83m1r1ry3/qXuSmne2E9CZeQfdeVX2RYKL0WbJrdNk78FgmujF7lKH41QuMVovPyKl9tioZ8eNRV2WebcqPZ56tNv+LzsoaTVXFLBJ7zeSVKPJA3IMkdlDrgEnKsQNwIYedSOoA0CMwxTwqL9hHE8FgBuI4gCGzekmOv9rLz73W/9T4962B3fvn277cH6s06BZSgwfjUsk/loi75mVzjr3/7tx79Th7NOGpRTGNQB3hyKsuadrCw9Lk7n4WiVGwfvkMCoPMwMwQWAikc7cBzEw1qwEjw3AS3G5WNPMArKe/YXC2CqWwZmFlM8Pz0rF2paG5490nF2BK0MwHOEngKq4pADNPQEjnGgwKOlUsyizGcp7PYgH+ym4NuFUM0ho6BLhQRITA1UrKqCsQ2wsVDTz3gjjsc9ggAAEABJREFUjfXnOAkrdgnzxZpBmce22LeENJdiM7OYYmZQvsQcMpsCihSUpUgdBW3xs3DSidnXX/PaF7/25JOxZi2ZS38abv1//u4Lb7l+l7tj2j3Ogm2gMq9RcgNU+D42bd5ApVFEGkC0ppYIPBHyPDGqQ8oZIf1p4YlaB4OWt5ZzR+sen4fzBENYBuAcCYF9XerGuITjGEFwrGssAvRTvosB1Gy5Doal8ACEmjmE0XJauw0MZgaXGKTEY12sL4BlubY9/ZqPvMrRpxLXt9rzfA4FeV1/OZF1PTzm0MlKTE05dLvgTHmg9rHeJNEmzFgbYtjMuA4csiSNbuCGjKzNtJobAcd1AfJwgqlOFwlPX1IruK6u3f348+77Z49+wt3esm2b7cb6s06BFSjgVkg7qpO4U04//omrX7Z7T/eRM3OdtF8YKo8GVDghAJ4LDlzYEZEaWpwCKGiZmQvezLggl0csdhAfZgt1H0Q1Y4sax9gkOEigCWbWRI35NLM4VifhrLFT2RfFAIN8hspIypyKnVZLxbtzfUkoUDlRpFF41RR0gbAIs6YeMwNiJzxGH0WTwvNtNWEfw2bWuEjoOtbnsGF6ElUxy3AfU9N+x/MvOP/1t7vV1s/bwe62Rjt1CP0/+Fk49u3//OU/vezK8hFZ57gEjv2vExRkQH2xEPBsbX5y6OdLpYUIUdQ1XmP8Gn+5zrhWqIy5oOTXpqB15R/tvuJXCittcR7RSbEHSghPnmnKztdrRgWPSN+aG84B+XkgZU4+l1VeU7n7wI0Wr3VAd4I7yaxDPnQsw/XQ1OOx3GPWtNekB27ackxOTkJH+mZGfgY3xbOYpD3hMFM88hH3/tsH/tId33TCRrsW6886BfZBAbLhPnIchclcdFMf+dSuF3/5S5eePztTJfovNgOFpXG7bKbFmcCkMAgEkqgF2keL0iio2vCN55oZzBZwsC2TFnDcwNA4pjtaG8dN8WKkyWisKSM3OZ4WhI4iKwq8Mu/TaulDX4ir9AUhC5DST2j5KL/ZsL8sazb0t67oLvrCRpuBmcI1VVtFG0sCtASsivEW+8Q5omvIUZW7kWQVKAqveuYzf/nV97/POR81YycZs9be668PJ7/3Py5926U/zB8wkZ6YJo6Sm+PXFwrrugb7HaF+h7BEqSuSFEFEDBzVH6JFM1a/j3GO0kl5hX0UGSbXCKhH6Uy20UZe81FSeef9HoTI4zx6r7lJhdYLyyVJAv0XqJ20Q0lhw/Xj4/yp74JOuWIC6wWhMFkeXFoxX5Zl0H/F3M0mkJhDh5uDgAE89tzw0Efc620PedAd3nzssTaD9WedAquggKT2KrIdXVku+RYe+NGPfOt3ar99e1UmkOBsFFACue1otSBbf3QpeKM78qHFvxJGsh6QV30YxQFVsj+ForRhgei6SBtI+hDqB1PiF92kvPv9OR6zz9G66BMUQqGkkArInCGhMpfAQ/tQmLXeUdcgxezQPNY4UWFRMHIDEFAyriYC6wbnBzCWcdZRj5AmJczmKCt7+fnnn/e3TzrvLv9sZiXW4EM+67zrfVdd8M2vX3f+RHZKNtU9EWUB6EtW4iHxnsD+x94zf3RvLh8at7DSeJU+ipXyriZNdBedVafyK1xyUvKcJ0/6NjuVeEXrvCh68FUJ4/Yy4bVQp5tispvxuD1Dag5tebkMAtzUBlrsCoNP69LLvOJliy6zYGpiUtnRzWQk9LFpY5I/8IF3/dtfevzt/2D92+yi2DpWSwG32oxHQz4uXLvmhnCH/3j3V3+zyLdu9GE7qiql0jIOT4sJ8NQdgWfPzBuP3OUyceGVUhcWYm7SPo4aDUB3iGAUMI5gSgDpww80T02BVtAKH5QUeLxP7PVmaJnvQV31EeLf4pKAUt4UaBgq5sZtyi98+gWv6CkMYyT8TH+OxnochadLgCQ1pCnvHpMESgcMOvnvdEoAe3Y96lEPeNvjnv6Lf8i0PiPW3LsjhE3v+M+fvfIzn//+yzrdEyez5Dj0egnKghYiLXN1mH2XA/GcEAPLfoh+wrIZbhIJGrMw2lmFl8NovsYvGoyiiV3tp+isTZTjJtSMnFpVzWmTfhCp30NFxa6TKE+eNx6zJ9yoTnRSTNCynuhk4J6TG0vyJADHCswBZgY9qtvMGKbRoAj6ubTQwDPeYpmJNIvKvNe7AZ00/9GDH3KPlz7kSXd88wnaqeLwPOu1Hp0UIPsdnQMbN6o9e7D1X//zR7+zY1d6t8JvRj93VDkpsxqBKEjlMbO42MxMwRivxRkDSz7MbD6v2d7+JdkPQ9AOqk6NS2grMVq/AvRQyWpzA1ikgayXqipojee0zHvQl4QKKvWSyl33iuYopKIi1gbAo3latwkt/TRLGNWyYYBpIxCP1kH/wtiM/QIf9aH2OTdbJYVhHo/b73ffX/jQc5/50D/fZrYmvzRE+rpPfWTXYz7xqW//+tT0CZvT7ibyXcZNkMbbjJ155mnsvY9+KRoO+ah+23EfqUHaAotBx+kFeVmnTwPyta6T9DsK88qcokJWdJal4ItUU+cDAje5ZkZ+BRxsOBQPs9avKMcPF+PMbN6dyDro9/agKHZh48aQP+CBv/AHj3vMLf96u9keFlh/1ymwXxRw+5X7JpyZgiP75Bd6519yyc6HBjsh7dMyz6vAEXFxUVlYi+Ficy7lomuVjcjUAs1DZQcBbfzhcQO38y2wV1tNVwADDggYWhiebogUmB8FxyZ/QnrICjGeDdY8fiwGfd4pzkToy3CVfrvaF0hoTev32RMDmj9RY30W6DcCYDUNWJkRbFAZoadR4p5egsqcWyuA9UFP4BwIMIa4sYhHKAX0K3DdyTq//c+d8YkXvuhp/2Ot/gQm+a778S/W53344999kyWnbHedzShJy9n+LiqCHA1dNDYOj68NNzhmC3GMXrMvZwQHA9IH41EzXqDCDAsQIWJ+KlEp0sgn4pXloAJjQV5jvJnBhwpS5PrBmLw/g2Iwh4pH7EUxw01Xn+yY84QImOD9dpdWuZR5Qt72vuIc1qA3gtXFV3/FYZzHUQSGucqYrlXlYAybGcuXmOgGTE+XOx72sLv/2QMff7t/sbggmPUm+653/EhRwB2phm/MdkMI7gtfxSM/+V/fe6lzJ3X6+QTyypBwcQY4Co4FgcG80CMrqR4ehSostGnyt1DcSmjzHQq3bWehroOdvqVKIyxUPfTJSjRmk/CqalrmtFxkvQwo9GSde8b5kEfBFCgYA48lAxVWC0rDYU3jHM9IgsLYCEiZW43oAjAzIoEhg7MOHH0uqdDJakxOlpjeWH/qV1/0tBcfsxkXY40+n78Ej3zvey/6n7256dOT7rFWhgyDokDaCSh9n2qphnhN3Ret0+G1gsKab7lrFtJk++icxrBajKtqXNk2n9LAs44GbexqXD/MFADyXV2XvDbqIyr0vIeS10dV2UdFax2hjJtV/T57h5o84z13wusftRl4kiKeNGM1AvvS8D3rBcStADfkguOm1A39ZszMvMa14qzgtd/O/P4PuMufnvfoc964bplj/TkICriDKHuTKMpFn3znUjzgve/72h8X5bazzY5Fv08V0e2g0M+SavdvVOoEXAIhGMniAriJZjgsgtJGYWYw2zcOBbHMmnY4pvlNCGhJj0JH5KuGxj7EXv2joFM7CUlS+1bgzWKg/3Clv5tCaA4BFEZU6EZFLqvcWaDwayC/7A8z9TmQRoFNeEIuwbwMAGzH2Acp8XhfzmN7J/LzwzgPaTIB7atM42QZh5Lh3fWxx2XffdlLn/22M8/c9D0zJmBtPaRd8tVLwj3/6R8+/ca82HyLyQ3HWlEaryocPMdSeyr1THTwMDKaECjwtYmUgmf5xQPiEAOVwLh4MG0cSD7sC86A5RDnDwHLugFQfxolVtO/N8A+r4x2mH5J+cAwG2iTyScYBePNjJ/t6+kR6Iy8oqWZIdHREfviaVXXNS3roPYC+bhoFDn5WpZ5Scu8LObgeWfuyItG3u5QiU9PTUIWOmcPYHm1nCQOrBqJPtg3saHjenGRd5UDTE9AvQ/NrUNCWjOep0xF3ocs88Hg6h1PePKD//BBj7v9n5lZD+vPPimwnmF5Crjlk46OlMt+hlu+5z1ffdPc3PRpaXa8zcx6BKPFx0Wnxe65vg73SCX0DkUbqkc4FHWN1kFBEoOqe1Q4G4WU/gytpLVSDFFWc6jqHDUFXqCi1zG7hJjRsjben0t4GxWMka5m/KAQjZXzw8wo4EYQuY9Cm+0wiTkokOmHwBDgKGxzbJiaRo8C19Gi6XQ8jj1m6rKnnv+wV9zj50/4XMy2Bj8uuwx3+fd3ffEvAo49x4fNVvkUdSB1OMQgxU3IBZX7artvZpF+q8lvZqvJtmwe8cKyiYsSOKBF4bUVkHJVj7TWgQDH3UuSJIpCTf7NqVjF27LK62qAirytU6cwtMwnugkyHrWLzxu+DnEOWvKaGevyjAt0936LosLUxDTv2w3OAjJa94PBHmycSmhY7Og/45mP+bNfuP0Zv7dWv/+B9ecmRYEoUm9SPd6Pzv5sJhz72c9c/rpLfzx3V3PbMDdXo+LuOMsSKqQaWZZxIXJBLhKqni0IdMa+ShvF2EzzkasXjPNFFnlUXlgUyYDiBHoP6tWGxsNBLu0rWhLc8NB6kfCTYpXFUvAYMh/M0DrfDfnrSoZEwXYrJCmQ0JLRF4QSCkyDh9FlIsxMziIEKmsBzCdISIKnIcpk1uQ3WjIYzkk3y1CWBbZv3cC296Cblrsf94SH/vGD73fbD5rpjB5r6uGc2BVXhLPf/i8X/9a116Q/78OWJPiMVlogz5WkbwB4/IrQhSdA2u/XAIzlRzGmMOkyJnb1URzD6jMfdE7PGgQ6417yC4RxaauIEy00HkHZFVZ9UuYFrfGCV0clr5F0fVSUc5BSN1rlaVJTPgRMTGbo0kKXtQ7yLPcDEFRXBPsWhhGqu4WDMZ+xbIeKew6BJwNZ4lEMdmNywiNNB5ef99j7/+49HnTmn5500rpljjXz3LQ74m7a3V++91zA01++8Npf+8pXr3jc1PSpWVlmmO0V6HRSSImE2sNRcbhw0yABxzM/2KV+hQ8I1OJmDm1ZNRAFEhVs4NF2RYsllzIvZnlUPEPFOkcLpkdFVMJokXNfhMQARxKKpiqPoTJv/Mt/xnaiYvKsKxAWMxvvy8GZUcC4sfBhQCE7C30LeHoKM790v7v+j6ecd/d3KH0t4srrcPbfv+PLf3HlT/GQzuQp8L5LS9BQ694g1OyyxmuAdRBotdODQ/mIrgdTn3jhYMqvtbLee3ZJoMOX2ypUVRHvzPuDHgY5eYs8XvK+XJa5UZk7Kl79j2ldWucUF0gSzVcAxK9A5FVZ/qK1IYEeswQxbLbITbnTTbg+Up5eFVxHE50qTHbKyx/1iPu+4gmPvfX/WLfMRb11HCoKkNUOVVVrq56vfau85Vcv+uFT6mrTZD/v4PpdM2u20NsAABAASURBVOhMZAhJQQE74DJMUOcLC33v3nvo+BnclS/G3jkPR4xZIxgOR92jdVJMwfNDgtzMaHGr3YCaQq/IexR8M8gHjdCreeweeNTuePSd0DKRZW4UVFHeSZFTAWP4GOuMYNgIML++3S7FL0SaKk6ZmG5mMCnzkAKEMQ7GjQN66E7kgN9V3+deP/cfT/21R/6Jme1U8lrDj0OY+Kd3fO1FP/pJ/aDu1KmdQZGgJHG9lHkFkiAgsRqmVccxhjheBbDsYxYpMTbdbPm0sQWO6kjRkdAGfRQcs5nBxV2nX1Dm/TkU/R6qMif65PcBeayElHnGY3Hdl09SoTvyKMTXPNkLvDv34nNa5IHcamYwa0APIKWOhN4mzsx4F19ispsihHxomfd7j33M/f7XYx55xvvN1ub/Aoj157BR4HBXzBVwuJs4MvVf8vXv3vv6G/on1pjkkVeAOR6vc6FW9YD3WR516dFJJwEtfnbRzPi58ErBLYRuXJ/Z4r6odbOFOLMFv9IODi0LNHVqE1PXJS3iPvo8Zu/3Z6IVoz/jqanMwVNu4xG7i4opwIWF1s3aOprIloZmFoXcQk7AWNBM8fQb+OgjoStYzJ+wDaCPNOkVd7/HbT72nBc8/k+OM5tlpjX37gxhy4f+7lsv/eGP8vO7k6ehVyZU5tw0VgGyEhOSJOW9udHVyQPiRpGBQzgSMzuo2tr5OqhK1lhhM4u8BCpinZIURcHTpkFEQatclrksdqNlnlA+dDLHUzyHhBNmXBpaD4hztXhgZgYoAzcKFpV4EtsxM7qNP6G/y/pm9uxAxiP8Tqe6/rGPvv/v3vsXz/krs3VljvXnkFOALHvI61wTFW7dftIV3e7GfGa2gEsn0J2ahBawURkZF3fCRZhJyQ8V+rKdbiQw0LpxcXscioeLeq9qlsYpLCzNqDgB8XjaMflAwGJ8nXMwgvoGBa2QvBhQidM65x1jXsyh5NF77QuA1kpC6ySN8KRggGgp0mD4sCYIwyDMrPVG16TIiRjgPMQw85hRCNJiNXRgdGM6FfrktKtOPW37+1/wvCc97/it9vUYv8Y+qAg3vfvvfvL6b1w896YkO/UEb9PoFTUsTSCaarhGvhEljNccsfsuhxHgGGN4hQ8zlVycwWxxnNni8OLc+w5xDGMzKX4lxELG9XCgiBWM+WjrG5O0OMoxKNAZ85oZ1H/9NntBvs7zPvI8hxR7Ses88G5bG6yEVXQ4X5OdDBOdFIkz6vE61igedQnguEbMLMY1Hywk+cH4+bC4n3nMmI9j0GZh67aNmJhA/xGPeMAfPepRt/3j9f8CtaHW+uehpgDIfYe+zjVR4z3vs/3LE5P157O0gC97KHm8lprDZGeSx24VpqYmMDc3EwVu7LAWZvRwkY66ksijiGn6oBCjkJbvQGBm+13MzGBm+11u7wKL+26WQMJK+SSAJPhKWi91nfN6okDgqYbu1B0FlOOGKHWI+Y2uyghmBjOTN7pmFt0YMU8nj1b5yxUoNQHWi+GjOKPfoWD5PBy7bfLCV730gt8+9dSpnzJ6zb1UFhP//u6rX3jhF3/yzBrHdJNkA/mqxPTUBm6K+uyv4zgSGLc/II/pm+0CSBMjLXEIHjNR7MAr4hgOsLA/wHL7KDbCD/vIuXyy6hBIZx9Kbkr7VOR9VEWfp3N9+KrHY/acArCGsxIJb3q6tKY7XYeUDG5m8WTFJYDWRoT8nMlIr+HGTF/wDMaNLfObGcyIANYZkHCzliU5Ute79tGPut+bHv3IM//czMQUWH/WKXA4KOAOR6Vroc5jp+2qp5x/zz9y4eobUtuNDZ0MKA1VzsWWdNCv54AJHody0XtzcRffLFSuRi5Wo/A13nPCcxVHGMB45RE8zS5BR3IKL4flaNHmX5rexreumTVCgq7yKl5uA/YbQxgQCMAzqYFR0DAw/5oxA/sNIvDuOxhvBFlICsbznrcY9CHkxSyV0R7Mzu1EUc5ByjzjcWSWBAqpAIo6gPeKofasu4H6FcE2AsEEgPXLeFE/nPxs3libhcBeG8wMepq/OiigO3l9eWgq9agHe3DC9o3ff+Wrnv+as87a8C3lW2vgeDvv/zie/qkv7n5d32/dPrFhezzhAI9vRccEBk2B52gDUo6csCQOQ/Hg/TrrgOC95iJEv8IxEz+UbyW4YRvL5VEbLcblGW2Lze33G4yswFLhAGHkxRYgj0Swrub1dFrQO/Zdks76xN+CkV91spTncxj0diMnT/X7u9Dv7aRCn0OmExL0MNGtsWEqRbfLBkKNuqogmiWO1OXARDeFBcZQQSdInCPlPTzXEQ/6UAdufFlWsVliyGj5d7hRSLGn/+Qn/NL/esQjTtffma/J6yKOev09SijgDuM4jnjVP3c2PveAB9zhD+BvmCnzndgw3YX+LjRJMtQUr5SzkLIxM7qjCAwLNjIGkaoF9hK8Ixn3y2s22sbiomZUf1R+YQSLcywNSbgtxKncQmihz2089zGgXIpjrXnUXlZ90qcHHUvqmN3TQneomO6RkF6ilYvSbaFWs7b/bduBiQJYTv2v6VFY6Q3csIyZ0i2emGyYnkTgSYCv9gCYxQknbPru8577pF+7/W22fdHUMGPX0ksaJp+6sH/ehz/6rdfu3N3ZmE5sRz+vSbuclKphwSMx8YvoY/DWYOkYzCzSycyWJq0qzH7M8+I4/2gl+0ofzXtj+9W3xW2KVxbHjAuZJfPRZkMamidNPGpfYjCYxYAKXddtFU/qPHlMv/7mUMK5CvriWydLwdN2ho1whMFsARg+Zgaw7mYJqH+Bm4CM8z7gkfoULfsUoS5R8qpqejpBJ+3/+PynPuqlP3eHW/yRrVvmWH8OPwUkcQ5/K0eoBS6i6v7nnvQvx5/U+bbZbvT7O7Bpegpzs30kLkW0irhGg1XwXNyervzBuFgF0I0AoiXCvM1QSLb5CPqbyAP+NJuveL4Os73jlCjBNwrHfIKEjKA8EjrRHX6YsS5ncQzDqKHACjCOz9dFPJIc0ELXD7jkgx6F0gBeFgc1vo4dZUXp2NHMwDdWo9OJ2JZoJbAuEEarBQm3TJGeQGDueXJZglgB+2PmkDj9+VbCuZnD1IYEWbdEZ7LoPfmpD//j+93vFp80ixVjLT0hBLv4G7jXhz/49d/bM1OfvmnTFkxNbmiUeQhIkiRuUsRfB9JvjhktDqT8uDLsM5VcWAT1b1z8aNy4ukbjxHPGiAMFi8Y+yV0MratRDFN5cha8IYK0Vl8BB7mC+FHjqssqnjbppKQgP+f9HjerA85Lwdw1XAKkaUqF3EWWdUhvxwaMCPTTJX8GheiN8sCRdvQzEeJlVkKvoegPsKE7Tf7NYezblP5uveO5mbhhcN4Tzv3fDzj3lL857jhbt8xJy/X38FNAXHz4WzkcLayyzhO34IpzH3THf8s6s3Mh7Ib3Ax6xdbm4KzitaukLgYooVhkllJYyQzGebpsmr1ayoON4IcYd/IcEeFvLqL+NG+96Ro+CQfZZgk1gaP5VnYIi5Aryl7xLLEpaMYM5FPke5HJpyUhZU5eTRoiWpvxG2pip1ALMjIItNKAij8o80kv9Cswo0OFrZvxsXjNjmQSJ6yJ1KTop2PZubNrk5u7/gLv++WMfdbt/MOOOoMm+pj6/9S2c86///N9vun5HcvrU9DZIufR6Uhgl++m4gyHgkFJhYD8ejpc0sf0osfqsqrvNLd4Q2vCBuxrngZdWyYPqBxWoyguqS5C/5mlTzrvyfn8OZZnz3jznhnXAo/QCxuuQ+KdpWUJFLmTk8WYcKiuA/Cv+DzzHk7+lnfhfbbSu/A4J6wQyS5hV9Rest/jZE5/4kLc96EG3+CuWrZVvHesUuDEo4G6MRo5kG1xQ/o6/OPnXd77TKf8bYUe/4pFuauD9WQbzKbSAtXg9Apex5xIOET6GqJS4MwcxuohBQeKGAAX3oRif+tHWM+pv41qX44lCv3UpRdgDT6gn7C8zLqQBwYiYygS+SnPSzvTXPB4sKPiKwUxUpjmVeVn2uemhYrKaihagocL2QgQssJReteMhqx2kE6D4MeDmAi1ILxBmDhZBAciqdF/Z1ZEn783TJMdtb3/yB5/zoof9sdna/LOey68JZ73zP7/yu1df7+7VmTzJ6jqjdTYgzUI8djUK+LoOYP/htGHE4X3Uzr7Q9kD55JfbQuGDBudVc3tAWK7xZerca21QkQbQQmc9XhZ7zTVcFSh52lQIeR86bq+rAaxV5hQA3U6CyS6VOYz/Gl4crbulj1xWjXGu4rKkQ/YP6GSe2XrwYffME5/0oN95wANO+X2m72bk+rtOgRuNAu5Ga+kINnSs2cz9HnDmn2/bjv9G2I2i2AX9iYr+lGVxt4yLM2LBHWZoFjsXrQRNjKMQoQCJ3oP4UL3C0ioUJyyNXxo29qHJx74tTWQ4pkmp0g8qX21MAt1KQo/KvCxmeMc4Q4U+QytmjgIph+4YEyp0YzmTyw0NLLAGtSEgCjgKrL3dmJd5WBbDp803DM47qlJftOvN7aRIznu/cKfb/OfzX/SsV20wu2Y+0xryXD8TzvmLv/rin//sWveIyY23oAifJq0yhGBIEioHSwGOJOGRe5KktA5Lhlf/aq6E1ZdYXU7Rv80pf4s2bq26osVSLO3r6Fg8FXZZFsijEu+j4ElTXsyhogvep8sy72SOFnTC9Q/EvzU3gzamZnQN5OdAGBx1vOPG1yyBEeC8Ni5gZtAj/k34kc/tYfWzmJz0V/7y0x/5+nMfcPLfm63NDan6vY6jlwI3C4Wu6TvnDLvsIQ+90184d33e6faRD/Ygo+ANgeqNAjkM4WFUd0YrXQgU1uOhe7qmzPh01bsaqG/C0ryKG4e983lm87Gf9My/FChooci2HALz+5pCrg/9cExezCLPd6Mo9vBIss8yJVLef0uZSwBK2IHUWFSHlLXASMoz6vpGwDEYX7XLiqLdDgrDQGEIGMxG2c0zivfsvo/tW7s48/Tj33nBi5/+4pO22k+wBp+rrgpTf/s333vdjusnHlTUW9PaTaDwAb0BrcGiRr+Xo9cbQHyRUJk7SyEcyFDauZJ7IOVHy6gOYTSu9ZtpTlZGm/fwun6hem2YiYU+i2dGAZgt7rPy6qSnGAyQ85hd0G+zVzptqgfkwwpJGtDtWLTKu5kh4cbTmIJQk38R63RRgRsDXE/gw3YCnQAH48kL2C+zBGCYH9Da8HWO6SmHicl89pnPeMRbfum+x/+lmfWUvo51CtzYFHA3doNHsr2732HDR084Of1A8NcXCTfQk9ytG1escaEighaW7sUjRBpZ4Vz2gZnYcQmOQOUWXcbJZfT+v0tKjKunjZM7iiVF0aYpXn65FChyRuCZr44AtysBJaqKiBb6HEoqdd2l+5AjoUXuKOyiMjeNuwaovAMFn8rKDz5qo4EEHCNg+liEJt3Quk2i6mzgMECnU5TdbvH5V73y+b93xnF2dZNnbX3OzYV/MGvLAAAQAElEQVQTP/Cxy9/2wx/OPD5gWzo5fSxm+gUq0seovCcnpzExMUXLL+O9eUbaVtwk5ZCC2NdINGct9pV3XHpbdiV3XLk1EUe+GtcPjaWNl19owj7yUuNvPsWXQrw+Kgc8bZqFro5kndcVN6jOIyUyKvQs3psblbvWtofKeG5ugza5EE9ynXB9g0+I69voU95RMIqvce4dKqRJyY1CcdWTn/iw37jXPY/R9z4KJq+/6xQ4IhQQpx6Rho9Eo/qFpudccO9Xm7v2oizpQZYp6opKzHHPndBNqa8S1EWg8ksAKnbPNe3Nsbs+ChMtZGZifotoF34IxjINwJTVA8N6bZELPqq7VYbLuUmSQIpjNJ1Fwe5E1Q1+Ki1xgFFYVUUPfR4R5oPdkNDTcXdd9djjChJ8slzSJMBRYAUeUxoVuVHoKeys7aOEH+KjPgIOcoUYyQ+jJeNcSpomqMsa6qe+rJTpRzsoCJ0r2e88TE3mn33tb7/4+aecgh+x2Jp7OabOv/zH5S+56EvXPQ92fNeSDejnBRzvYQfcEJkZFXgNT2sdMLoeZoaE6Z5HwNjHY2Yxv5ntlTOEBTqbWczXZlKa0IaXc81suaRVxZtZbNdssbuqwqvIpDEIo1nN1FbCdpMY7Zwjr0Rv5DOtP1nHQl0VKPIeisEcMYuozMnjvuYcoQZ8ASnziYkO9PvsiWPdUuCkrbFKF+t2bIu05gajDcs1M/JvxjrAdoH4bXhm01pIE4MhD52st/tpT3v475577qn/z2z9R2Ow/hxRCrgj2voRaPzs4+yHD3vYnf/G19f3MjdAahU8BW9dSyh7Cg5H5cN7Ua/OkTyBkDciRkafhEpEEzokn4FCpkVbYRtezvXDHyRRfm0+AMgbQQEDAVTqgULMc5xlNUDOe8VcQjCfZVJJYVWhUeTg+D0kKCFhSAHHDLGuhQ+/4I0+0cexnYSgC7lGv8VUfUxMTECWUFTmjsrdVax+1m+Ytste/ornvO12t9z4LbPYmLKvGYQQNvzLu65+yQ9/OPf8otw86bERZe3ij8cwDfv7LfZxA+O4F9FqNI/SRsNqczR8pPyHrB+L1tb40UixIvJvgNabeNO02eRGs6IyH+RzDT+Tp0ta6Pp1w8CTJsdTKCOv6Zhdlrk2q+ZAXq+hR3WIvqpP9QoKg20pHWBmQnGBCyvLMm5MS6jOmnfyGTekkxP+sqc+9eGvO+ecE3RnXjTl1j/XKXDkKCCuPXKtH6GWH3a/U9572ind91f51VWS5EioSxIeNZssUfYp1crnYg5Rd5FEUfDQZdqhfiUcWxxI3UGmuPoqy8MsVuGDThjqKLwCBV+gkKp9ToE0gO4WB/09yPM98ahdd4D6EpwEXkbLXK5DzRoBJxnKGl2sV8QQGMHXSBzK1aiMzCy6Er5m9INKnf0ygllpwZYA+5FYiYrtdrs1Oll15fnnP/Jld7/LLT6tPGsNnJPkg/81+8sXfu4nr7n2Otvqss2AdVB7wHMT5X0F+mBm4MeyIAkRYQEhAnQFR3eBp8yM1RjW+kO6LOqiRnAwMDOOOyGvkj6Rbxe7JpoxXjRX2wqTepGnclriJRV6yY1pQZTlLOq6j4ACRmWeJh5TtMy7mSFNHEw8y96bYAkcrXN642umWLAvjetgXAPGdZJjanoCg16PMTk2TDqIf4Pfc+kTn/yQX/2lXzrlr9f/zhzrzxqhgFsj/bhRu7Fxo1334Afe+W1Tk3NXeD8D40mZjuVgBYU1d/BU8FJmTafGkYhSvUmc/zQz1tNgPnIVHgmpgwLbjb3hpiOwvZrKpq2PQVCKIfDY0Vc5lfkM+gMq88EMlfkcwvBYkqfgFG7MSuGp/OAGQJDwNDO0j5nBRqB4tSVXeUFRaraQX/FVVVF5JxSOFYMFJrtAOdhRPOFJD/mbxz36Du83I9GZspZejsl95FP5gz7+sW+/PC82bXPZFrNkAkXFO1YqF0dlAFptEYe446QHRqHq2R8I8t+84LkePcD1KEtaPOa56a7ItwWt8cFgFrLK9ctsBa3mmjwuZa5NaScDOl3HY3JDmiWkacByj+gNrp/oklMbt8nd7XZR5jkmyLeSEWWxC92sP/v0ZzzmTx50/xM+zrxFk3P9c50CR54C7sh34cj04J73zC65691O/8/gb6iLfCcclXqS1Ah+wMUPSICIOFLscrHMY2bMb8uk3hjRTe8k8KnLEV12J+obdR6e1kxBS2MO8XiSQlD36KHWOMt415uwCsGxnEnu8T5YruPYmhH4sWOUgAXrF9Su8kaXAhhU7kLKipUvocWU0WLiiUjvwQ++5989+qG/+DdmMaOKrRmw/+mXvoZHf/Sj3/zD3TMbznTpZgRLMShz5FQigOM1TQoX0uhCj4i1LyjfKHR6QbC9OGdyR5Nb/3LxbfqN6Y7tCxUhDhSjnW/rmI/z0ac2ySfDDSdvanwJ/edBOS3zqshR0kqvOC9S5t4XSHjS1slcVOaT3RTG0yaLlrmn30Ps3cDBk/6GBP8/e+8BZ9dV3Qv/197n3HtnRtXqtmTL2Ma9yViycRE2brLc5Sr3jhsYYyAhNKfQCXmQhIQHJHx5vN/LSyEhgUASHkkgfOG9L4E8OoGAwcZVZWZuO23v77/OnTtzNRrJaiPNSPvorLvP2X3/z77rv9fa54700DbGhyIecSQA15y6QFAd4TH09A03XPzL569eoPM3RTgCAlMIAaryKdSbvdgVfoGL8y94+SeWLO7/HtD0eV6H5RdXuM9sqBS2D8z2U3uHoQppe9Kbd1eute6CGkpFr72x4NhK0fqKokCWpSTzJt2GDeRpq3RLqpvdcpwxCddaLQOU5eka13JqFZVhSdidq4k+tS2UedgJ5WcVzaghpVIhGTaH4Lh3L5K4lStP/uKt6695fN48+blmm2ry7z/Eir/863/7tcHByglxdZ5Nc0si9yg4L8Q4dpfC1ZK4mBDFIFegg5ufMGSBHT4nqmeHC09ixm6/dqWJbtlthVAi30bFWoYgcy57CkjAOecyF1bl78wT5FyUJpzPap0rmUdcwFYii5gu9irDSF1PnIOepN5tQueriOWtlCJiIND7bghoHujBsjn36cFFRJ4Nw5j24J13Xv+uC84//GPM09AsQQICUwkBM5U6s7f7ctgS/Gj16hVvnT+//0Xn6vwiZwBJ3XkuvPllFrpXqUYwduw9uKgw2B9VOmOtT3hlxvJ4XhvuC2pZ3XNUZdRuN6F/lrTZbCBJSehUgt5nsBxfpPmpy2SsitE2RTqR4g1tUgvx2EIwcggTRARCZdrByrEOPypFkcFY4T5kNT3llBM+e/cd171jwQIZHik+ZQKSh/nBj/3pn/2zb7z7xeeKY6LqHOS5QVZYLlc4PhKE/iESz/1ZfS/BkNCRk9SJD+A4jpcSZpngZLujC4EJkrcbpWW3m2EHErWOl5IdqGaPZ9E+aaUiUuKTc+smoetb53ObhK7XaZpycZoyvUBsDeKK0DK3dIlbWM5t4XMxEM5fDz1E+Bx7BZbRhtKJ5wVERAOA3w8RQV4knLsVVPvsT2+9Y90bVp998B+IUElgR4+QLyCw9xDQ2bz3WptiLfGLmV16nv3csiXx5yLTogMuBSSjNaaSw/NLDR7kLAgV95gAqiJUmLzNs6uUtpmhTNjyEbBPVCovVXNZsPwwJHAVL8JyKrQUqch0f5x7CUj05zzJEPfPlcwTdjyH5bgsrU1jtZ2C9XTIaJScWRc4XhURYbqenX6KSNmOxqiI8L6TxFszmiYiMPQAwLcQRe3i0MPm/sP999zw8OLF8i1MweOZZ7D0rz/3g1/7yU+b59t4fuToUs+4X8tBEE2BIR7eW6gDw+rYiLs+3zEREgux91uGgEFHGEx4ykhst9zILcbiOzFb3pdrzU7C9Pvk/BvtdO/1SKRiWl4yTeek43PI8hb3shuUJr1MTRQZ5zP3zQU5Im6VxZGD/jnX8qdpkZZ20EWtiEDEQigYeRYiAhEKF6Gec9SLfg+0DJ8Vn7vwWRswnZZ9f9XDyPALN99y6btfddYi/Z15S3MGCQhMRQTMVOzU3uyTiOR3XH/M783qS77jizYdqyRzkyO3JHQqBq8/f6EWt4WgFGcgVA6eyqAgKYLqfluiyqibpte90okHVJeoAumEQMkYpR+36FwzqnMaBioMytOVn0lO1yN7DSo/aF+o/FDQcqECzEnkWXuQSnAzvYZDQNGktZyhWrO0ZliXcIwmgy+F12UdWi3T0BExBEGtHREmGJJWJ2RFEBvRgs15GcFIhCL3iKN+eKfE56AuUBs1/ZIl8VcefPiqx5ctk6dZyZQ7n9rgl/7JXz3569/7fn11ZWA52nkVGZ9BgQSewlEDeQ1S9CPyMzi+GM5zcWQ0vSDsxEQfB13x+gjAUEjsQmJAGc8hjw+VkVVE4KGirXRC58E44i8qFmDoMZbumR+cg2C8Y85dlYJj1Lp2R5wIthTwfkz0e+I4rwqSo4peq+h17nPOyxwoOAJioQTsGKdzWT0+6gkR9jHnPnm7OczF6TDSlMJ5XWR1LrKaEN9ENSrQ3yeoleTrGOcAfmf5kADiVgqfhcAyDR1hf3TxHsUFEWxTMhgu0tJ2jggx+qIastYQBvrSr99666W3nHf2Iv1pGl14mFJH6ExAoBcBaoze2wPzetEi/Nu1V67+QNJ6vm6pHNRFHMcRkrxZAiJeA0cF4vRiC3Gyxe1O3oyrj4pvrAI/drnFVe8jc6USUkVEXQTVVLqXWCjJUwkmFFWA6jYEXcXGFiRZB+FCRPNb2+28Q+8hIhDpyJbxnvGeUWP59TfmRUGlyOhqtYbNmzejr1ZBhesAkQQHza0+fde9N7zjmJct+jYLTrlzwwY/6wtfeOrx//ut527ydn7NYwB5EXOh4kpstcP6/A0JWq10vQc4fnpyQCFMxKT7TKSTDIEnQYEhXuLwrBckHc3fudYCpizv2ExvvKZ377shyvJaZudFRHa+0PgSJEqojI/f1n13jo+EOndFBCJjonGKsSeZt9t1bhU1oS+/Zfw+FnmL2CRELIN6gPqqFhXumVvjOf0JGBepYN0infrAQ5TIeQ8eIozXvML8lIzfFcvveqVS4RrAYfaMAS4cGmxvM5YsmvHcTevXvHP1WQf/rQgnM8uHMyAwlRHoaqKp3MdJ7xu/rNmx58Z/dtLJi/7UZfVMCloOVB4x0WFaqTM9FUVh1ZrN2R8qDjBRZWeUGUuOP1UfjwoTvYoAHiQFXndOtrWNdrR/pahZx34XeUoF2Oq8BJfUkSRNFNwHFCovJXFVlppf6xW18nQo9DqoNcNmNZpSRkLLqHIECcyPuCbVPakiVJqglZMkbeYDWD2EvT5o7hxmbyPLhlCt5M+vu2bNb5x7+lFfZZseU+zw3le/+NUXrv7av/z4pqRdiaz0c2vCkcgjOHpkCu6hi+PKhCMDyRuq000LoDh6cRwx4LjKUXXD8mbkg/WTfNQN/9KiRXrrUBT0RAAAEABJREFUGF9WrdfxcaP3fFzkPkwkGJ1cgomuR+vwL93HCfNyDniV0fJsxqt06oN+R0rREVJ0Ho+IkGg956DrSe9g4Dhncy6sUrS4ZdRuNzmPW8jSNoosATjPDSdcFFvoglLJ2Fpa3yIYPdSrZPm9YZznc+JqHF3p3AtEhJgZxLaKVj0FmE/4XCu1DH0z0h+uv2XtG84+c8mXccAeYeDTDQHO+OnW5cnp70KR+kWXnPy7c2fKfxbtIVi67GJVCiQzVdyeCsTzC+9KYqMGZTeEimnPANipj1UCbAdbHD0tsL2xpG68g3NcgLC/RZFB32hPkgbaVIQJrZu8IOHSjWlpjUeRIVlpDQ6eSlhJQqhQu6Ipo8Kxah51e1I9A7xXEbVuDN3MI/dxxZZpXnHKUjguhIxhWAxn1667+HevvuzUT0uH/TGVDpJT9Uv/kF735b//7hNFNnvh7DlLkeWeXpkMJrJwBfHlfipIOlDcuaCDIZmQ1D2VPscEYRrrwZ44tL6J6tH6VSZKmw5x3b5LOc9kqy530zWhi4F6fNRy1nmcpkrkTehP03IuVp2j15vPIqJVrvvllShGh8z5vLQSfVYa9ki33jLkvC1DzlftU19tJtJWgTiOS+9Vq/0CZs1yz9x///VvO+P0WX/MvHzoPZWFy4DAFEZg5FswhXu4F7t26tH41uozX/aHFdnYikiSoIIHic+TxFW/02iDp0JwFEPFYbG1gtr57vaQ+c4XRiSG9g3plFa4Kr2MZK5/1zrjHmNe0Jpk34UErC/AGQswO/ToKlLhOHpFSbsUKjwde5fMRQQinkW1v2OihN+Np26F/knMpLmxddVV5338ouvP+E0RGWahKXd+85u45Auf/8Z7kvbsQyvVJWinlnvnviTzLMsgiGBNDfAVGGLEC44hhyOWig9zwpPQwZyKpQpGDo4ZXRmJ2m6geTVDN9TrrmicSvd+61C/wtsWTwtdBZwlE8vWNe6ZGGE1XeFleY71U8RCKBjtlyJclIvTPOfCtN1C0mpCXe1p1qK1zu0vl8Byu6gSG5Rkrvs65TwtK9/iQ+elij6rUkZSu1h2wzx16KvUyvqAJubMwX/ccvva1644ecZfMI+640ZKhmBPIxDq2/MI6Ddsz9c6TWvkFzg595XzPv6ywwa+lDZe8BY51Y1+px2ckN7Iho7CfByho+ypU+tSGV/f9h4P85Ng2R14nyGn9ZKkDbrb68i6ZO5TWh0cg/UQEpGIg7CMtiIiEBLSqPAeo4fjlWe9Hr3KEDxEWG5EAAe1pjwXP5XIwdAy977pX3nmKX9/8w1r371gipL5T37il3/2s1/7pY0b8kOqfQslLSpotFJYrkh0sZZwXzWmxZbnjsMX4qDiOfrO6TkrHLFzJH3npRM58inSuRcRiMhI7LYDkbE84xcFvaVEZIfq6y3Te611d6U3fu9cb9l37Ue3XRFN8+Wtxuck8zRrIiWJK5nreyA5r/VXG4aL07jSJXNDq9pyUVWgc3TqKD1IZZ3CaNPBrFyQ8VZPXot00pjK5+u5zaKLhbqfOcP/4s67rnnHK1+xQMk81exBAgLTCQEznTq7N/p68MHy4qtXH/NbCw6yP6+aDEILXYQKXRs3hgrE8oqwKTmS8EFSY8Qun0ogulgohe7sMqS+6YYiwj5YiDCcQFTZpfq73FYdapmrm13dlJ7WTEQSjyuA/qwnYt2m7KtjXVR+I3WpEhXvoaGORbgROzJaqHLsHZiI5a0ZFb2fMdAHVbbWFrCmnRx22EFfvO+hG940Vf9wDDuPFzcNHvmzJ39+hI2raCdcDBUOxsbgAEocykUPFz66WIESNpd2TARorcMzXyk13scQsRCRUdH6VRRPFZGxNJGtrzVvVzR/r3Tju6Gmda+nTujZFRUGE5xjfdax69wZyyQigOHcE8BxW0j/Alyq++WtBsp5TGLXP1ssTDPWlb8x15fgatUIluWg8RDwUZWVishYKBbgvefiiw+Xl3ZMoNfCe+F3A6hVC9fXX3z79tuvfmTlqXP/XIQ+fYRjeiNwYPZ+y2/YgYnBVqM+55yBr596ysH/vchfIK/mY+lc3aMrSo578nsvPUpRSUQVkbas7WmowkUEVR+vHFDmz6HknaR1WuZdJdiAc22WzqnHXOcN4IjZad1oWT9C3t0Q4w/WS4UGJXMRAbT9UuzYNWvXYsIut+rDqNJqgm/4OXPizz/+lkceWDIPP9D0qSqHLJ79teWHL/m7djroCy58FEt1z6ZpCsNFmzERcU1RrcZjQ+B+uiMRYDQkNkwVkZIYeDl6KrajNzt4oWV6pVtsorhu2vQPHXR8+g5Ioe9/5O3OPOZ8zvIW9I12yzmvZB5x+lVjQbVioe+C6Px0Suj6nouAz8DzwzGUHrG8ttBFmYiBlDKWrnV7P+T7+/Lv3HTzpQ+fcfqcz4pIgnAEBKYpAmaa9ntSu80vdX3t2oM/MW9e9p0iJWFZMiJbVItNJCZhEjYSpDFUIkrsTNveyfq2Sta4CQUGGm8hpA9B9/D0FDj9HRPbs5GhksrQplWecc+83RxEs7GZyrAOP/L3rLXLMbstqvRodWt5UDmqIixFWHf3nsxMHoOK6AfHJSJlD4yx7ILQvVmFJ7EXWYFKVEWeZqjGFpU4gkHm+wfk6cffeN/7D18iP5XSxMWUPeiFaV5//bm/V+1Lnsqyzb7Z2oSIY4k51qSdo1brZ98dCmIp3LMVwi1q8XGkKK11jeCzFwqfh35COn4NvVZxXDhtTzSPChsqTxGBIfZdERFWObFgBw6RicuKyBalRaRsZ4vInbjRtWdHPHmTwrI6Lk+sOsIItqFxJR7wEGsogJYz/B7pux/N1jBalHaivzevQ+M8PWD6VxvjyGNGfwXVWsS+eiiR8wMl/FxUCz1R0p2zImwQzGdLiUzEujJYq/fgdQLhM6twhaC/xJg92/3i1tvWvO3cVy74ZxFWhnAEBF4agamaw0zVju3rfi1YgP9cc+mpH3Zu00agDXBftVYlkXGvOoo6vdOXpzpX2/6kkth2IlM8Ff92hUQ+pqyoDPnElLRz9iMv2kizBrK8AX0BzqtlLlReVG6WRBTRegGVF5S4Sz3n2eJEpyNZF6CqpDDs6ZOIZQHDxUMKVYpVYqCWbF81pnJsk9Q9FxKDP3r9Y6953YnHHPSvzDwtzrkvxzcuvuT038myF4ZR1GkNtqEQDdQG0BpuktRryImxbomUGCqOJCkdHOEFJC3F+zG8MHLoM59IRpKhad3rnQ11ruxsmSmTnwzcGbvON842l6OtL7+lDaRpk/OJ81j3y0uvSYaIc7haEbraDXSByvUOjAUML3TNyIBDc+OEt1x4MhfAFYMugnXOFkUOa4C+vpj1FkhbQ1i4cOYPb7/zysdWrZr3N+xXwZLhDAhMawQ4xad1/yet8/yCuxXn9P/56asO+6f60JOY2V9F1mwioiK3JkeRpYjj6p5rn8pHFZCShcpoxY4kTDHwMCRmJfMiayNL6twzH6ZCHKQyVEJqMkdOsnCw1iMmmVsBhEQkJGjqUhjeYavDdWI0A/N2bqgL9YJ1KIH0981ARAtHy7s8w+yZfST4YcTcN0/TweYbX//gu848bZHuPZLltODUF/2Z4rGXL/jQqace+ilXbMrS1mbEZIi0nZXPtd1OS1IHjTZXiuOgKHwG4KJpTDzjJz45h9AVzdF7rff7txCrkfnkOf/A+SUjAsYXIy729sg8ztTNTlLPOLedz2BpuatlXuuLUKObPSYb80TnYN06N3V+i4xiLCJlsohoczAMtW0G0LI5Fw78GiPLBjFntn329tuufMPpKw76UxF+qcuS4SMgMBUQ2PU+mF0vuv+XnAVsuuLS5R9aMN99N21vcBYJXcyO1hzJkwQsiAjCzkOoSqYrrGAHTiowEolag46eAv19bqtdR6s9jDZdlFnO/iAtlWCkZE6xRkjwxVZ1U3mNKkBe8GQ+riA0nhqQ1g9GxHTSqIxb7QavPevn2F0LjfoGzJxFC72ob1h/49p3XHjh8s9s1dA0iDiBivzKK0/8/SWL7DddutFnyRDU81BkjuOVcSNwvFfxEBKSoTvYcCtDcesVZipPfb5qHeqNXmu4u7Kn6tndfuxM+bLPJHIQs644bgOVvzNv0yonyaZZE5mSuc5jn0CxVTKv1iwqkZTzEZz/iqd+BzznpAq6R1m/3nDOwvKCoRiGQKUSw3HxoC+I9vcLhgafwfyDqj+4467rHlxxcvULfHb6UMu84SMgMN0R6Mz66T6KSeo/v+z+8GX46po1p7wva/98sFZrw0oDjkonimK6mlUX7B6Ehu7BXgHVmYrqKBXLD0NlKNw/9+VvzVtIkyZlmEqwwcVFiwSTIbZAFHtYKkDVZaXiKxxYnCJbIeSoIEHhGNErmpFrFQ1KUasKbB+0mOhcp/VaoFYt2Pbm4sILVn56/fpV+lvzwTLzNPw4+Uh899KLTv2IkU0tgzrEt6Gu3thG3NNNuCgCRvEgXlAsOE7hc2OwzVMx1cQOCXluaWwpmrajouSlMnF+x+jdERafxFPnYm/1jmSe08uTkMB1Ydoh88489i7j96uA/jJDybyvGvHb4GF0Epe4q6te57JhlR1RnAWGc9hSNA09IQBuiWh9Im141/Dz5ld+cdfd17555YrKX7JszhzhDAjsNwiYHRjJAZ2FX3q38qSZf3biSQv+tF3/mUtoFVdsBVQziKLKpGNj6AbWRgoqu5yWRpq2uZBoIKVrsuBeo0eG8i3gGIgjQzLyJCUHtSI9LRmMHh1l173luKBCFQnN55jXU/npPUrlqTkdDC39KLKs1wF0NVt6J7Oi3jp5xZGfvvP2yz/EOpiAaXuw//7Ui2f96Zkrj/pks/lsu93cBH35ynEBFVmCSrJAKd0hGkDJ3EfEOQKNdCh+XWF9Ja4adp9dt+REYbfc9sKJyk2XOMXAEDJwTukczrhVlaRclHIep1lCD1MDmb7R7lLONYdKxaJaMajGBpZ7RvrCm5bFyKH1ldgK8YdlrFauwks+FxGNE2gexvDZZEhag6zP+Wo1+1/33HvjDaec2P85pk/reatjCxIQGI/AyDdhfHS470Vg4UKpX3zJ8Z+cOy/f5Emq8DE8HfCGVnpvvh25VsW9ZT59BGMiHiQKlBSisarMnCuQpwkVU5Nu9jplGDkJ3RUpLK1GtSjV1S681vpVwEOVX6cmlHXys1R0VGboPbx0WtJ4ld40fSFPXfuOClcJnV6AYuGimZ996LE7Xz93rvy0N+90vV4m0rr26mM+Ou8g+Q8bt9FqDsFwEWNo2jlEpCIDxciXT0U4TAvjqoCnlHGM4jkeO0ZNiLfG71HpTppdCV+iIzqm3RGtXudjURTQlyl1+6bVaqDdbvO+DX0nw3N+07EE3Svvq0WoVmMomUPyEfzAEND5rH0xJHMYC70eFei9BSDQOPAQ4uG4SJ01ewDVfvnFgw/d+yunnDBL/1+BnMnhDOURygAAABAASURBVAjsdwiYfT6iadKBZcfG3z5z1RF/VIkaLZc3ULEeKZXSWPcdL1UYlEpeoVXR+17pxmleR+XjtxDQIlaF5EUVk4dzDgWt8yynAswaUDdlxn3HTPcb6YKH7uWyemZHWTOVo6e1Dd6JCFP0LFMgYFtlmmeqZ4KHKj2VjrK0jLcQxBARGIoq4oH+CuIqbfe84QcG5P/86q/+0ruWzZaN2I+OQw/Fj668YtWn09Yzzdg24bmv67Ku3jclqTsYImhI5BSO3XjAikEHO2FM51T8uyIiJZYiW4adnLv76Xa3gu2XJyGWGV4qLDNN8DFSzrkcORefibrZW3Uk7QZ0DjvOYcOtnHJByu0itcwr1Yj75paVOZJ9gQ6OvIXoB0RGQrpGyjRx8GWUPhNe0EoHxTDeIkFsWlwotH5w2y1XvPak4+Jp8yuMcrDhIyCwkwjot2AnixyY2fWt6NXnHfWBg+Yl/5rnTyEyGWIqF+8EBf+JcXA+g1D10yhA2qL70PZDqFw0Tqj8O9eqrAh7GUGFRUIGlZrWoXcqqqBUcu+Q0TJOSeSt9iAtc32jfTNc0SC1JHT55+irxVSAhveOyq/gw+G10foFnrFaj6dykzLKs38kKZ8AKo4WUtFGjUo0owtUYFk3yxXCkhHFomIEebsJw73l+fOq3/7Vt7/+8aUL8R3sZ4eIpGetGvivp69Y+IW0+bM8QptkQDxJRgWfA2zMJ2vhiYeNQJxaUAwd94R10eW5UFJRWFgXuqJxKho/XjRehM9kOwK2um1hCjnMQZhrYkFnAmCb4Uinyvmhc6RX2C/PmnUrphtyQrOEQycEdOzQg+0oTDqm8tYyjX0D53eWJ2i3hjokXrTgOX9RNFlFG941uVVUoL/fQv8KnNW5yooM52Jkqsyj8zDmXIzLazgPVgDDvtnIozBFKY7PRUyEgnNXmzVcBBvUMXtm8tztN1/4S6evmKN/zjXXvgUJCOyvCPDru78OrRzXHv1YNl+evm7duR+xdtOg8Q0qozaqlYjuwRil0iOTO1rIFcb19/fTpZh22vdjMHcVXicBUIWO0cPxXuCpnLS+gvXpS0Nqletfg8tI7J6WDnQv2+ZsFzBUuChltBJejLXHyjr3VLiaW8SyDEUEhsSvFlGjMYxqtY/xBpGtUcH2sUqB435nZB0G+g0G+vD9x1533xuOPHKW/gGOAvvhMZteh8vXrnjv/HnFfxTJiyhoUUZ8FlEU8fk6olzAkeDzPIcYwEb8GIeDPt9eGZc8eqt59EbD7Ynm6Uo3X/d+e6Hm1XQNtyeaZ2JxI9FbhjovOwka7yAinVt+ikh5r9hom4pVwv3yhDimXDDmDPOshZyWuediUhdE1YqgGgsXpSzLRbGB578CnH3E3EOE8bAo57E3bEWFtyMLKM95XXK8Zzl+X2pVoedskAtdh5kz5Ht33XHtfStXLgt75kQunPs/Ap1vx/4/zj02wjNW9H3hla888VOt9tPpjP6iJG2fCeuPoIrf0VrPaPUauuSLIqdSkh7xzMdTFZP+xTFKwetiJBpKqbROhIuCgsSRUfm1kwYt8zr3HJvIMn3ruoAVoGINFaFlZQ6gVQPSjS4OVPQarGtU2IZHBEBf5osBqQHop9Tg2AcTcUECQUIXcyWOkSYJHK2qPlpN6g2Io2zzax6489dOOWXhP7LQfn2+/OX45kUXn/qJqDLc9K6OgphzTQPnWjBcSBkFnwgIDIrc8dn6UcEUO5RUX6pLmqdXxvKraphYPEm0K6P5hThwDkJDz+s8KxeE7WYTCd3smf4yg4SekuB139yQtnWfvNZXQbVWgV5zfQlw31znr3qVVESEcQ4iUgp4iHSvDYxU6Unp53chhjE54JuYM9f6voH8ybvvW//mU0+d/1cifHAsF86AwP6OgH5j9/cx7tHxUTkMXfjqwz+yaJH5Vl68QHLNqWhsqdy1IVVMGfe7lYyNMoFGogdmJV8VH1H5kGAnUI7OZyTvFpJkmMpwmATbKK0aakgYltWFg4q1lm13lBv7VbYEpncuHIOOdNNUcaNsV9umwCBLC1Sr1ZKUWABZlkH3NPUPemTZMGp9bsNVV130q+eetfSPWc+Iy0Fz7p+iY1x18eKPnXryIR8t8hfrXl3DdBtHJCvhYs1w8eXBRRr97qmahj0wKL5d6Ubrffe6G04U103bVthbpvd6W/l3NF7rUunm773uxo0PNc940TzETgOoZZ5xIaSL0STl3CWJZzkt80xd7CmElngUA7rVU4ujHjJ3LO9HpSR4xV2EcZ1TRCCi897CSATkFrW4ioyLBeGeubF1H8eN791z73V3rzipX/8CnFbYKRw+AwL7OQJmPx/fpAzviKX48QUXnvjJLP9Fy9oEFboMhS3lJEdjgTi2VP0ZqHdoh4BiOqKZqKCYFULLGLAQxBRL68JA1Lphep6nyOheb7dpmZPUU1477qUL9wstLUT19Aqop0gowsqEFngZ8ro8ldS7QgZSS6crjj1TKe+ZWWjpZ7Q0YyrFalxBnrQxY6CGSFIY38ouOv/MP1h/48pPikjB7AfEqf/t6wVrj/vgoiX4R19s5C7HIAg7MTF8LhlyelHAB22iGB5mQky6hKeJ4681TkXjNdwd2RN1aPs6JHBxqaLXXdH7rkwUp2U5NzQoRV3y5fwliaf0LuUk9DRrcsGbAFyoKplXuPddqxouFiMI4TOc97ovzpUAwHkrnLOlcFLTBwKnFj+vwe0P6JdKBIZsb0nolajKOZtiBq18uLqfPz/6j4cfvvnNJx1X+7KI5AhHQOAAQoBfpwNotHtoqFQU/hWrZvzFyacs+9Jw/SmXJptQq1gSstBF60plo1YKSM5AL8SOPegKL0nEFrbMzzsqroKWeLv8SVqSNBg2kFEhuqIFS3diZIGYrnwlfq1bX0gSli9FBJ2jW7/yL0V5eAvJAPVAqq6j8oxISs750kL33IOMY4+0PYhm88X2ea8+439effX50/oPx2AXj+OWyzNXXbbyo5XK5sFG/SmA2ygxrXLh8xSxyB2pZhRzbHWICERki/he8u1ea7g90Qo0XcNe6Y3Ta5Xe9O61xm9Puvk03F4+TdM840VERsbpoHNeLfOUW0UpSXyMzFvw3DPXOVyNUS6AY+6dVyKW5SpB5x3gR6vW+S0io/e9FyLC9ixFQ0FFyd+nKIphv2zp3O/fcfu1D55wTGmZ6xeht2i4Dgjs9wiY/X6EkzTA+f149pILj/3lJUvM19PsBdo2Gaq0FopcqNgMBXCytYjIqDJSK0S7VyrLIkeRJtC/AqdvtGfl37ZuwPsWDAlYX06rRA5qoVtVYiwoFEAfIYWLAxEp64YqR5I1StJOAVrbvSImg5iUksOxvDUx1KoSpKhEBYxtulWnHfOpG69d88sLFsgzOECP887p/6dVqw7+nb7qcD1PhiC0FK0xiOMYhQex47MmfugRESUbi964yb1mU7txighEZKsaPGf0eEE5zq2yco4WnO85lMT1J2ntFreJ2twu4mK0yBP40ruUI66A2zuAvrimf4oV3MqAztPeKtkXz3Yc23flPBaAlrmIlP1UY15FixgtjxbnbNsvWTzwldtuu+bek44b+EcRXcFqjiABgQMLATLBgTXgPTVaKg133JHy7dWvOvaD/X31zbRoS8VlESE2fYhsTAVk2ZyjdE6W6VyQCkCdowShtODpBi9cTou8Bd1zzJJmaZkXeROGJGvpalfLPKJrX610rYe8AnU7jlQ4QaDtqmiShh0RasNSGGp5rg00AwwVa1+/QZZvcsuWzf33u+657r8ccoj8vEw8QD+I8/DVa4/9rUOXVv8ZbjPUc0H/O5+vlIgwvQz1Q69V9HpPSrnY20aF49PG32+j2ITRvX3fVj0dS7qnOOeQxqllrr8zT2mZt5M6MkpKC73gvrm+yW7KBWmBOALUkxVxz8hYR7qmB4nfhU7bwu+LsHJVSSoC78E4S5FSwLzgPIUuVHktkkD8oF+6dOCHN1x76S8df3T0NdaVIxwBgQMUAf3mHKBD3zPDPufsGV895BB8uRo3vThVMIaWtqcCohVXFKXlwgQ25njtqMQcqKpgaF0434aQrF2WIin3yxvQN4LbdHmnWR3OJzDWI4od6O2l8nJwRQbQNc4KIdJVdHrHaN9xnYswnnvzxlRYJkJkqrBSYZu2DMVHcPQkgC4EawwibhCr9d9qbXCHHDLr6/e9Zv2jhx1W+SHCgYMPlhevuvKMjw3MaD4Ht8kbejuKPCOOBp5WpEIkIhqUomTYFUe3fBk5wYeIQOSlZYKi243qtt0bji/Qm9Z73cln2C8l0Y5onIj20zNe9BYgkYsBOHVK0ZdAk3YDBeex59aEknnGPXS1zD3neRwb9PfFKP82O8sJ48SzPhXWDc5MEW3PQGREwHudwxDW62DYZmeeAhFXoYZkDt9wiw6ufPP6685/7amn9v1vEWZCOAICBy4C5sAd+p4Z+aIZ8twVV696f2QHn3duCGpNV+lbdHkBKhgYCyhpqzUsIugcJHVaGqqYUlozWdZAlrVp2TSQJsO01NvwTknDlVZNRJejoUUPlhHp1gF4ErsK4MpqRQTGRGzXdITeAktStyR0KIkXEUAxUqWV2UeVGVNZpmgOv8hyiV80f+Bnd9+7/q0nHTf3n0S0QezqsV+VO+P0yhdWrz76o94921ZLHdwPjrkIiq2B4Ui3JkVG8iSG/Jze5xZjUL5U4ZB03qllnqTN0quUMtQ984xWuSOpi3qWOF9r3CuPOe1izmHlW1EyH5nCnboVQVZYnrz2KixQIkt8OZ+jyHA+e1jW1+b3w/smqhXvly076Ht33HnlIyecMPvvWFdRVhE+AgIHMALmAB77Hhv6qmPj/7N69fG/libPDVaiNuqNF1GtxlRCHc2liswbx3s/2qZHRms9QaZ75ST1hFZ5Uu471pGVrvYckfWIIiHZOpbVujT0vMfYQSUHiu7HU6lRDQolLkVI4r4wKFJbis9jWFQRSR+LkMzTAtXIY87MiNZT8f0777zhoZUrFn0V4dgCAeLavHLNob/9siMrX7Rm0LmiDnUnuzxF+Wxpaao1rsSuBZlfAy64xp53GTEpH/oV3raIWLa6ZXpvnPa5I8L+9krH29NJ61yzInTG5uBcDnWzJ/QspbpFRFF3u14XeRvgetBGDn21iG52A/UwqUXfKY+RelAewlmJksi37Cd4KK7CBav4HM3WZsyYYVCJU7dgXvVfr792zUNHHzHzX1jn3gCavQlnQGBqI6DfoKndw2nQOyqUYs35B3/miCNm/+9W6xmIacKanGpK9YxDRykW8OKpyKgcScAFXefqqsxyWuXpEC3zIZJ7A65IEJH8IwvEtG5onLCMEAVHGTtFNE7vHdO1XmEojDCUkZNKUtiLShSRsKtUrBX2paAnoAVf5KjVDNvdwHbS4RtvWPuh1Wcv+7wIfcqY4sc+6N6sWbLh2mvP/u3ZczK63jdyQdRsC5T7AAAQAElEQVSAIWkZCIhZKfugW5Pe5OjcJaliRJTMszyhZd7k4rONgnvnGS3znF4m/UUGl5CocKFYiQVVShTbchGqi87eDosYKHa9cYDp3HI7g18XcKLy++ABTstq1cO7ulu0eMZ3rrth7eMnnlgLniSEIyAwhsDIt2csIlztGgLz5+OZKy4//T2V2uafz5jRpjWxCWqljCksD1VohmaKhvoSXLvdpHu9SVIdRkpL3RVNRLagm11IsoJI3ZRUomqhqGIFD08lWIoqPk0XoVJkguajBhQKeG28Y46c+jBBuzXIPfpB5mvRc1CgUklp+TcQ2UY2f378zUsvfuXrrrjs+P+htQTZNgInvbz21YsvOOUN3r3wTDVucdsiA0jqIvoMxgR78BAZq1dk6+vdb0pVgMr2axKRMoOnZ6lwKTLul6ftFjJKTkLvkHkCxSOKgWol4iIyhuHWhC58ytLOQw8Rw8WtwHOGlvfGQ6TMUYbCeMN7EebhtlLMha01BWMTN2dm/Fe33nT5+lNPrH1FpJzsCEdAICDQQeClv8mdfOHzJRBQ5bJyBf7hrHOP/ni98XQbaLKEQ6nQRki8o38ciqIggackWSXzBlLuoTt1U6IgyYJkSyn1W8e6Z0WlotOwS+xsr4zTUOO7oZK5tqOLBqGlPzBgMWOWRbUvR1ZsRL3+FNt71s2Zh2dffsz8T96yfs3dt9+++g9ZfhjhUAS2KcQoufTC+f/z1FOW/UF96OmsoOvd0fWsz4Rp5fPQwnqvocZpOBWl2zcNty2kXM5dncM6p3TfPM9zzp82rfMW0rQNdbMndLerZwlc3FQig1o1Ksk8pmUuXFiiPFyJz2hb9Bxp9Oi9yGi6xnfE0cK32LThRVRi72fPrv7g7rvWv+O442Z+W4Rurk6m8BkQCAiMIGBGwhDsAQRUyaw+b/mfLV5c+76NcggJmnFQUctcFX2WZbSYU0qCJEnQpoVT0FWpeXXPvGIN4tKqAS0SgdogBgIrpnMvarV4aF3gIcI8TOMlRASGCthSqer+ZRTnaCUbfb35fFIUm5495ODa/7107el//sY33vbmd/7qPZf8xhO3vPaSS07+NxFtBeHYAQSIVbHu2lP+aO6c+FtZMugdF2LOudGS+lxUNIJ5NZgmYthPFQY9p45BRceobnadr61Wi3OXQkIv8hSeixrLKVTlPlGtEnMrpwL9ewnl5CXv6vTSOkoxESCWc9VCDxFh4CDjrXRGi+hcd5g1e8D31eJvPvTwvQ8cf/zAt1ggnAGBgMAECGz9DZ4gU4jacQSOXIwfrLl4xe/4fEPL0Eo3LiuJ2IDKiYovpXtS3esJXewZySAv2nQ9ZhDroC8OgXqOnAwYgQjLCBjaUgyVIfUm9GA06LiELgREEhJ5yqItWNtAZIYQxQ1XiYafPu7YxX+5/uYL3/Su9z22/r0feMN1jz58+a2vXv3yD7xs6Yx/F+HGpFYWZKcQWL4EP7r00hUfcfkzLe8aJLQM8DnrcKU4kpjjA1JhxMhpOuFe/dT+aIPbDjkH0BHPUEVGws41uH2jXojCJcjTlNtD9CgldWRpAy5vQsdtOV5dQFYqQKUqqJCz9eeW+p6GcFaKWBj92STFGsO5SqE13yFxBxGBHqL5oGkCYbsWCZwb8vPmx/95593XvemYI6F75k7zBgkIBAS2RsBsHRVidgcBEckvPGfm/zjt2IP+W6ykXiSoeEG70YYrQFflMJL2RqQZJd0I51solFcjj5iuShsbODHQv0Sm4rxlHqo3qrGc7k511yup6x45uFioxgmqpllE2NSoxJueXLTA/dOrzj3q44+/ft1tv/PxN5/+gffcvu6Om8768CnHzP3yglnyQ/aPWnh3RhjKEsP88ktm/tE5Zy78hM+eTYp0kC5mgS7QJAZyLtxMJPACOOhXzED0BcVSuvjxOTNNSX9npIBHr3SsX89KOUHYmrY4Kpwo5eKC1u9EIacW1I2udWgZJW4VjdN7rz8xY2sFF5769nqWDqFIh8nhdYDbRHAtWJ8hLt9mt+ivgde02DmnPffZDduHDo6zEy6CL4hJAXjiI6zXSM7kDI7/jESIbBUVqcJy4teM41JgyC9bbP797tsuuO3UE6tfIu6eAw1nQCAgsA0EzDbiQ/RuIEDFU1+7dsW7+2qtr/dFLejvZmtVi8bwZlo2SWnluLTJ6yFUK0CVaX0VCxovYGaeBeh1h+5BVisG+jt2JX5DS7waZbSA2rTmm97KcI5i+Mmjj1ryO7fddvX6977v7es+9P5Hb3ztQ5c9fObK5Z9eMCDPiNB82o2xhKITI0Bci0suWvnhuXP9N+A3YXDwORhanbroiuh2TrIUel2WJpFrSF4Fuo+jjDN83hTs+MF2t8is7n2VkcixgGRa5mVYRm4jFG1+JE3zC6/H4hwXnpynJPSCnqWMc7bzAlyT/eYcRIZqxXM+CmJbQEjCQnJmIoR75yICkY5oH0Q61wadUERQqfALwMSU1r+Q5POMdXOhENu2O2TxrO/edfcNj5144iL9C3CBzIlTOAMC20PAbC8xpO06AsccIz9Z/aoTPjZU/2nL+Q3YvOkpZO0hFEkbaVut9Qz9VPxZq44qlWjVGggtbvo1EfPeUrml7eHSIoIbRjVuuUq1MeTx/JMDM4a+suqMpZ+8/8Gr7v/w77/1rHe/69ZH1115wmePPEz+dWCgJPFk13seSu4oAkccgR9fve6c36pUhzdFUUpSA3xeMIz5vCrQP4gCmJHqaIeanNcFQOJHeXTTyps9+iHarroIXkJ0MaCCkUPJXETKRWVRZEg4X5OkhXa7gYRudt0y8owX72FI4LU+i0oV0J+miQig7ZKwwS0jcAUjFB2vcOzC/CDhC13r8BbGV2BRhcsdDpo3C216Omr9GWbNRTYwG1+6+97rbj366Bn/gHAEBAICO4SA2aFcIdMuIXDRq+f/7ZFHzfxMu/1kBj8IkRZawxtJ7HUUtEQc98/nzpqBKt2z4kkIpkAtzkkILVo9LczoTx33wZsD/cn3XrZ81ofXXX3Ouve+7w1XfuT33nrjr7xp3SOXXXzMJ5fNl6dFxO9SB0Oh3UJAcb/o3MpnTjtt2YeK7MWWyxvguowLtgS+cDCkq7EGHC89uGqDkho/dvlku5xLssvlewsqmXcFI9NIXe55ntKD1KKF3kaWNHndRJa2SL5tFi8QVwTVWsQQJHNPcgf75ClCsQBHzw+eOe+5iKH7HqUwiqcI9yYQoVlvYdaMmUia3LaoOS4kBt3MOcWXHrj/htcedVTlGxyrZ/ZwBgQCAjuAgNmBPCHLLiIwcyY2rrn4lI/k2VM/NbIBSet5GuCDmNlvMXtmBf1Vg1itlrSNyLXRH2e0Wjb7In02mTc3+fmKUxZ/5qGHrnrwg+959NX/5Tdf8/rbbz7n7084eu6/05X+Cyq6FsKxzxHgc0ivufLYP5l3kPt+ljzPBZmDkMyz1MM7W/ZP9689Xe2llETHrx3vy/cgyhy79sG2SZZSyvgaRkl6fMK4e25Xq80MGszwalXzrkvmCQk8p1Wela72NhcpCdty3AryqJKP+6rCfe+CixgPUbKm1a7tahPdvulwvRALimPdnuP2ZaRlmQh9lT64PGE9OWOH3MKF8Tfuf831bzr66Or3EY6AQEBgpxCgZtmp/CHzTiBApeZXrej7/9asOe2Phgb/s2g3noIrNpG061SOg1SKLW8w7KqVpD57lvznEUfO//y6a85/4p1PPHrPB9//+BVve8v6+y569fH/z/LlA8/sRLMh615GYPkS/Pjadef8bl9/Y2PSfMFXIkE16gOUJbUvkqNr/YK0BS8AyQ1lvOP1vjuNMTBWwLnKTjgUdKfry31K5im3fNKkAd3X9tzXNiTjOPaoxkLLXGAj8PAA4z33zHVMWo8Keg+mb3ErnfbYLCqsq0jrRKXplh827yuPvPaWh49YVg0/TesFLFwHBHYQAbOD+UK2XURARPI1F5/2qaNeNuefavFQUa0MwcgmN9CXNg5eUvvRuWe//I8fePCqB9/7vodXv/fdN1x+++2rnlh52vz/NneufJNlN1KoMXex8VBsryDAZ5Sdf1b/p84489AP+2JjI0+HYZyH1//RriRuD7XSnfDr5mna0tUsIJFLwf4x1OttiIg+/u3lATwtY1Y0crINbE9Gso0E2iX2H+ot8HmGlO71pN2km71e7pnn3BYq3IhlXgH6qhY1SmSBzhjcaPtaDyvieoX95d65FwBcMEAsRAyEYrgNIYwWfgjH74ph9Pf74uCDZ33tntfceN/SxZV/YXI4AwIBgV1AwOxCmVBkJxFYMhdPveGxOx9cfc7xv0Fy/62bbrzoTW9/+wPrfuM3XrP2DW9c+5qLLz7y00uXylMi40yZnWwnZN93CPDZZVdfc8JHFy2KPmcw6DNanXFkSmrdolf0yUCljCTxleH2P1j3NjNsSeZj2bSMyliMXo1rT3SxoAuCAvpztbxIyj1zdbOnWRP6H9DApxxDBmuL0jJXMo9jjss6Vkgy15+ljY5H6/MQkrX2S0VI4Cg9FYbxlqLpBcRkMKYNYxv58mVz/u7+e2987dIFMnn/ZS/CERDY/xEw+/8Q9/0IhUR99OHV7z/x9hvf8da3XPH6u+9+xQdPO23GFxculP9g2hBFteO+72jowW4hsHimPH/9Ta/6ML0wL0amgTwZgtAV7dICxkTgJZT/MlcgimOSKAmR1rUSX1fGd8A5N2E+za95OXdIkmRQvekRTe+K5lFDWZM1jp2Cob9b42Ja0i5vo92qUxpQN3s7qdPN3mJ/U4DWubrZ+/pi1GoRiR0QljHwWg3bjmBMTFGyFrAA9KU6MJ03sBKhyBxiU2N+w3uBbkkYSZhcT495+aK/vfX2tY8ccoh8gxHhDAgEBHYDAbMbZUPRgEBAYBwCZ56Cf73g1ce/s9386XO1CknLJ6hUKrAmGiHmAn19VSRJAsO4ccVJhn581DbvlZxVlPQ1nEhElGRJr1w4kFGhIqJtOLZV0K3epFXeojShlnlW/q9pTTi62rtkHnOfuxIBxrIcnUje5yP1CASWlRuI8HoC0b7pODWkyY/CtZHndRTFUPuEEw/9yI03XnXfsmW1H2F6H6H3AYEpgYCZEr0InQgI7CcIiEhy5isWfvKUkxd+oVH/ESK6ll2RI2snJPI+FL6NNG/QUjdwSoYTjFuJeYLoCaPG8hoStFD8NkUr6JJ518Wu1nhC67xjmQ8hpXVe5E3yfgqrbnbul9cqBjE3za1qC3oX2AD0MDTxOV6SuR2RcaTO8dHBgNhGxAFcEBTcfwesaaTHH3vIZ2+58eL3LVsmT2tdQQICAYHdR0C/ortfS6ghIBAQGEXg8MOlfeVlJ/732XPaT6ft53w1KpDlKZ3QpHC6utO0XVrtTtlutNSWF0rUKlvGbn3XIVQpE7rXvaHW4X0BMjTAJYSKo4Wd5Qkt8jYJvAnd79c9c32b3RUtWFrhwtKe1gAAEABJREFUdCqULnYl84gWuhnZMxdqDK2flfWcvTtGzAAVgTCHdznvcrSTYVibociHssOPWPj5u+6//JcWL5bnmSWcL4VASA8I7CAC+s3bwawhW0AgILCjCJxwAr5yycUnfkDwfN35jeWfSG00hqF/Pa5Sq5JaC8DIjla33Xxe3enbzOGgBExjmqEHSNaOVnaWcd+8XS9d7WnWQJ416WZPmF4gij0XHKZ8oz2OBFa1BMvAd+syEFZYvsXO+rROXSgAOp6OyMiLcnFs4ZEijjPWP5ge+bKFf/Xw/de9ZfEc+QnCERAICOxRBMwerS1UFhAICJQIiEjr3DMP+cTJJx38dxte+JE3kmBGXw1pmgPelPvpIK2XmXfyQwm8V7R4733vNfsBfQFOQ5B8C7r/1UNQ/s48S9gf7p1nLVrObUAK6F55hRa5/tY8YmgseDhAPPTQegzJXKSrOgoI69U0wEAQA54b7hyjxqm1n2V1VOIsPemko/78gceue2T+fPmepgWZEgiETuxHCJj9aCxhKAGBKYXAggUyfOElp3506aH9TyfJJlq+/Lp5SxIt4EmQXv+6GsNtdVqJeXza1nGsk0Q6Pl/3XgkYXDio2z3Pc7bdpvu7Wb6UlyQk8vI/kUkB9sNGHpWqpUTsq4VhHM1qhoDWo0QOErmHADAQAcSQ0FX0WvjB8Yn+zl4ipgs0HZJkxx63/M/uum/NO/SvHCIcAYGAwKQgYCal1lBpQCAgUCJw6rH46mVrX/Fu+A3Pb97wc8zo70M1rsAXDjR0mScHaBlDj9KyjaAWbkncSqgjYrxm0K9rV/QeJE1PEdZlylCEJDoiWr8nmTvu1Rcug+O+eZY0kCVN5Km62VtsK4NA6yhQsZZ9i1Chm13YJ10EOKaB9VmmiVYIFhlx8Yt02mIUs7B9WBjGdcQhkpQLiI3JypXHfvz2my9+VP/7Xs0b5ABCIAx1ryJg9mprobGAwAGGgIi0X3He3E+deuK83+uLN7daw8+iYoQEbJFltG65v6z/MQ/Ar6KPIeinVCBiAZKxQQrjcwjvDN3YQpe2kDg1O6xDURSA5iPZsi3ovraKxumiIGZbvkigb7K3W0PI9S32ZAg+rUMcCT1PoXkG+qroq0W0zMG+sUq60UsyZ3nHW+e1RpT1g3GiCw32yrGxKO5jVAXCPg9UaojpeZB8ENYPZqtWHPaZW288+/3hBTiCGM6AwCQjQC0yyS2E6gMCBzgCi0UaN119+h8snCffsFL3uf5pWAFiG0FJWP9Qy5YQmfJW0/SCWTUoRS11JWoPuu3VUiax6r1a4V1Ry7rMzLSM++SZutXL/2iFljn3y/O8CX2b3TiSeeRQqTjUYrA/HkbrRcbivCZx86I8ydtlqH3qFWsrrEugfSi4OEgSErlpI47S/PhjD/nLm2++7NHFi/vCC3AleuFjDyMQqhuHgBl3H24DAgGBSUBg+XI8ff4FK/7QFy8OWjuMrEXig0B8BXBkU7bpuRft6KZW8bSQGQXQDe8RMTQlaSqRQ/LOtS9Yg36FO2ma3wpgxYAn8xTQl98SuteTVPfNG0jobi9I8CwB/SlaX83RMnfQt9D1Z2WiZE6PAGso69HQwLKfhmRvR0Qg0hELEnruy/+spVL1iCopTNQsjj3ukC/etP7KJxYtkucQjoBAQGCvIGD2SiuhkYDAAY6AiGSXXTDzD1edecTH6kNPprVKDilSkq6FF5K6oZWrRE1C9yYlWvRx04XtjSWZC+9BEmUc3etkVxKrXmtcJw08hBY524GmF0WGgtZ4qkISz3TvnFZ6kbeZXkBfgKtVDWrVCHGk1jjr47452AdhPeguKKCHY9uddrT+jqATRy+BEabROu/vKxg3mB+6bOBv19912X2HHirfRjgCAtMVgWnY70Do0/ChhS5PTwRESf3SIz5xyNLoa3n7ec9bKD/7EQu9dL1LBkdi9V1C9SR8Q1I3JE0OW4ySK8mX14aWs4OHL5McYwAPx331DDkt8jZJPG03yuush8xj7r1XK4Iq/exRFHFxYFiQdTrPa4HlrVrw8BmELnguNSDewbBPnXsSN9vRLsXsm/7xmQrd9u3mC8WRR83/60dev/7xQxfILxCOgEBAYK8iwK/uXm0vNBYQOKAROGKp/HDdNWd/WLBxMGtvgHOdvXDdg4bSMcm5c01KFVIp7xWwTpzTSxgPiFiICIwxFMBaC0N/u+6f+yJBRre6krn+FbiMLveC++aGiwUlc/2deUxCjy3KOgC21am6vNc6pWzE8d6XArXa0T0MLwyEC4AibwFFE0U6mB+2fN6XH7jnhtfNmynfZYZwBgQCAttGYFJSzKTUGioNCAQEtonA6pV9nz/3rGM/aM3gMPwwnFcXu2N+oehX0tD+FbrjPZzr7JczgSfTSnOcIe/0tGKgAhKu5nV0qadpgjThPj1d7Tld7upmN7S0K7Ghi912/gKchdI41xBK2BYliYsleXfahfaACwZtQ0VEAG3bW4YW3hmNhjUJFw+b8yOOWvQ3D95786MHHSQ/KxPCR0AgILDXEeh8K/d6s6HBgMCBi4CIJJdffdSn5s/HN4HNEDQodGN7wDglzBheyRPkTrq6HZTUu5a8MJJCOmYyChJ+KT175kl7CCld7Wk6DO8Scn0KawvQu46+mkFcMYisB+hCV4seJG8ldBX1BKhA69efyYmFUEoy1zhKp28GnbKN1mkrXvbnt9x51euWLJHvIBwBgYDAPkNglND3WQ9CwwGBAxCBgw/CUzfeeN77rHnxJ3AbafcmKNq01LmfblRIps7pDnkGlC+qCTqHfmUNLNMNOTnS6CLt7JPTOtc/GpOldeR5A6Dl74s2idyV/9GKknlkBIZ79EKLHfo2ewSkdJmnzGdYWVytwbE3BS3wKO7jNTPom+xFhDjqg+65K5Fb610U5U+vvfSs199yyyX3LF8s4adpCEdAYN8ioNph3/YgtB4QOAARoJXuz1xhP/+qc4/9XWM3tfNkI+bOHYApPEjXFDI1CZ1b5DBC5lZRnEjkajGzvN7RQk+Qc888zRrQPxyTqHWe1OGUoJFB/9e0OBZUYg/LPXZdHHha/YCD1l24DAMDA+jv70eWFmg1E0S2yvwDSBMPsD1rDIx1TNvI+AzG1FnX8DPXXL36jddee+InFyyQ4bIz4SMgEBDYpwiYvdN6aCUgEBAYjwBJ2V165eGfXTTPf7sSN5C2NqLIm6iSeH3hSKwWpPWymPckV16xDFScL2g9pyThFol3mFJHSjJP2sPISe6gq92YHNUq98zpZq9EFlbfkIcnSResCSRmwzYqJOoUzUaGOK5hoDaXnvgKXGYQW4ZFgYG+mIuKFgZmFPDyQjJ3XvqDq68949cvv3TZH7MvGcIREAgITAkEzJToRehEQOAAReCQmfjxPfde+P4ie27T8ODPMHumoXXdgv7sLIo6X0/vZAwdut+do4ud7nX9jXlbX35TF3va5GKgBe/aJN8MUeRI0AJ1s8exhVrYwmpEPHSvXEOt1NMjUKv1o6/ajyJzaCdNCBcLkSHp+zZm9gtefPFJzJrhs8MPn/3PZ5951NsfePiGG6+48OhPinATXisJEhAICEwJBMyU6MVudiIUDwhMVwRIisWJh+MvLrt01RMD/c3ns+Q5EutGqPu9VW/AuAiW/4xYEjFHyf1v5xNkuu9N13qWNKBWeVb+NK0NMD3iXrha5gP93Pe2hgRfQNCxzNke6zEQ1ufLF+8MFw8FijSBZdlq7LgYaCMyDVSi4casmdl3V5977Kdvv/3SWx6675o1d912wftOOHzuN1lPinAEBAICUwoBM6V6EzoTEDgAESA5ZuvXLf2vy5b1f7aVPOMrVbrA65vQX+uDQQQjMZgHNJ3haJ2XZE63epLS1c4wy1vIaKE7T8ucbvUK98z76GqvVlmOlrbQMtcX2cBDRMq6RIR3IIl7rgFI5jZDrVZ4K8MuiurDRxw55/NrLzvzdQ8/eN31r33ovAfOOH3Bn4S98hKy8BEQmLIIBEJ/yUcTMgQEJh8BEWmuv3n1x+bMcj/Ks82+n/vW+pY7fEQer7ADBkWRlZZ5Qhd7QjLXv89e/s48S2FogcfWo1qxnb8ARze7wEEYLwyNMRC62zFyeJYA44EmKpWWi+PGxjlziq+efe6xH3jwtetueM19V95w/boTP3HUUdXvsG/DFD9SNAQBgYDAFEXATNF+hW4FBA44BI5/Gb5x2WVnvD3PnnvR5YOIaW2bERp15e/NE+jb7GlWL8Ocbvcsb0Jd8IYWdrUWodYXoRrTzU4id3kG7z0shC50lGKQ8q5NOm/6yNRb8w8y31ix4tB333Hr2usff/T29ffeec7bTz9p4d8sXCh1hCMgEBCYVgiYadXb/bCzYUgBgS4CtILzKy6a+6enHL/wb9P6s4h8G7WKAHSz62/G28kwWs2N8K5FSaG/OYckMHELNs4QVxxikrm617Msg3Cf3JK64yiC1d+csz4phl0tam5YcfLSf7j5xgve/MQ77rzisUfXvP388w/70tKl8hT7kHT7E8KAQEBgeiFgpld3Q28DAvs3AiTU/PobzvrowgX2h1n6nC/yofKlt3ZziJZ3hJxu98FNG5A0m3SvGxK1w4y+Psya2Q/962++SGCkILHTMjcpw8zn2aasyAc3LD9s3tduvGnNu9/2Kw9e//ADl9y8ds1Rvz9vniiJu/0b1TC6gMCBgUAg9P36OYfBTUcEjjgUX19z6cp3ODy/0RXPcY87RbMxhGeffhbNoYSu+BrUFV+0U/RF/aiiH6YwQObBnXamZwyHUGQv5v19yY9Xn3fCR1/32Po73/DYdWuuuuKYtx55ZPy/BgbkGS4e0umIT+hzQCAgMDEC1AITJ4TYgEBAYN8gQKLNL3r1jM+84hVL/2S48ZOi3XoatdhBXIFaVCmtckP3+dxZVcydNYAIGWJa5bNmGB9Jsw638QcnnbD0jx565OZ73vlr913+mnvOfcsZpy/6HK3xoX0zotBqQCAgsDcQCIS+N1DeT9sIw5o8BEjqyRXrTvvo0uXxdzdt/IFPWs9xz3wTXLsOiwQz+z36K3Spy2ZeJ6jF9fqcmen/u+biU97xxNsfWvPWX77ynvPOXvKpg+fL91lXg+Imr7eh5oBAQGAqIBAIfSo8hdCHgMAECBy+EN9dc+Er3lqpbf5Zvf4kBvpS9Pe30V9tY87MPO+rDr/Q39/851WvOOLXH3nkpmvf+q47r7rjtjN++5hj+n5CAk8nqDJEBQQCAvsxAoHQ9+OHO72HFnpPUs4vOW/Z584+++jfjOMXaWU/g2p1oz/ooOS5k09Z8oc33Pzqu9/znoeuffjR1W9btWr2F5fMlBdYJhB5mDoBgQMUgUDoB+iDD8OeHgiQoIt777/6jy+/6szfPfGEBV+88sozf/udTzx4zVveeOXrLr/4hL9auFCenR4jCb0MCAQEJhuBQOiTjXCof0oiMJ06tWiGPPf6BwKOJQcAAAOASURBVC552zvff8dN99yx8rEjl8vXSPTN6TSG0NeAQEBg8hEIhD75GIcWAgK7jQAJPJkjsolhvtuVhQoCAgGB/RKBQOj75WMNg9q3CITWAwIBgYDA3kcgEPrexzy0GBAICAQEAgIBgT2OQCD0PQ5pqDAgMLkIhNoDAgGBgMBECARCnwiVEBcQCAgEBAICAYFphkAg9Gn2wEJ3AwKTi0CoPSAQEJiuCARCn65PLvQ7IBAQCAgEBAICPQgEQu8BI1wGBAICk4tAqD0gEBCYPAQCoU8etqHmgEBAICAQEAgI7DUEAqHvNahDQwGBgMDkIhBqDwgc2AgEQj+wn38YfUAgIBAQCAjsJwgEQt9PHmQYRkAgIDC5CITaAwJTHYFA6FP9CYX+BQQCAgGBgEBAYAcQCIS+AyCFLAGBgEBAYHIRCLUHBHYfgUDou49hqCEgEBAICAQEAgL7HIFA6Pv8EYQOBAQCAgGByUUg1H5gIBAI/cB4zmGUAYGAQEAgILCfIxAIfT9/wGF4AYGAQEBgchEItU8VBAKhT5UnEfoREAgIBAQCAgGB3UAgEPpugBeKBgQCAgGBgMDkIhBq33EEAqHvOFYhZ0AgIBAQCAgEBKYsAoHQp+yjCR0LCAQEAgIBgclFYP+qPRD6/vU8w2gCAgGBgEBA4ABFIBD6Afrgw7ADAgGBgEBAYHIR2Nu1B0Lf24iH9gICAYGAQEAgIDAJCARCnwRQQ5UBgYBAQCAgEBCYXAS2rj0Q+taYhJiAQEAgIBAQCAhMOwQCoU+7RxY6HBAICAQEAgIBga0R2JOEvnXtISYgEBAICAQEAgIBgb2CQCD0vQJzaCQgEBAICAQEAgKTi8D0IfTJxSHUHhAICAQEAgIBgWmNQCD0af34QucDAgGBgEBAICDQQSAQegeH8BkQCAgEBAICAYFpjUAg9Gn9+ELnAwIBgYBAQCAg0EEgEHoHh8n9DLUHBAICAYGAQEBgkhEIhD7JAIfqAwIBgYBAQCAgsDcQCIS+N1Ce3DZC7QGBgEBAICAQEEAg9DAJAgIBgYBAQCAgsB8gEAh9P3iIkzqEUHlAICAQEAgITAsEAqFPi8cUOhkQCAgEBAICAYHtIxAIffv4hNTJRSDUHhAICAQEAgJ7CIFA6HsIyFBNQCAgEBAICAQE9iUCgdD3Jfqh7clFINQeEAgIBAQOIAT+fwAAAP//3xdCqQAAAAZJREFUAwC6V92ZEBttFwAAAABJRU5ErkJggg==";
var ce = Object.defineProperty, he = Object.getOwnPropertyDescriptor, $ = (x, a, l, p) => {
  for (var m = p > 1 ? void 0 : p ? he(a, l) : a, y = x.length - 1, D; y >= 0; y--)
    (D = x[y]) && (m = (p ? D(a, l, m) : D(m)) || m);
  return p && m && ce(a, l, m), m;
};
let V = class extends Vt {
  constructor() {
    super(...arguments), this.wallet = "", this.amount = 0, this.note = "checkout", this.useDialog = !0, this.qrCodeData = "", this.qrUrl = "", this.yid = "", this.confirmed = !1, this.isMobile = !1, this.connected = !1, this.amountError = "", this.dialogOpen = !1, this.isConfirming = !1, this.confirmingError = "", this.hasInitialized = !1, this.wsConnection = null, this.confirmingTimeoutId = null, this.handleKeyDown = (a) => {
      a.key === "Escape" && this.dialogOpen && (this.dialogOpen = !1);
    };
  }
  isMobileDevice() {
    return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
  }
  validateAmount() {
    return /^\d+(\.\d{1,2})?$/.test(this.amount.toString()) ? this.amount > 9999.99 ? (this.amountError = "Amount cannot exceed $9,999.99", !1) : this.amount < 0.01 ? (this.amountError = "Amount must at least $0.01", !1) : (this.amountError = "", !0) : (this.amountError = "Amount must have no more than two decimal places", !1);
  }
  async firstUpdated() {
    if (this.isMobile = this.isMobileDevice(), !this.validateAmount()) {
      console.error("yatori-checkout --> Amount must be between 9999.99 and 0.01 & must only have two decimal places for USD format!");
      return;
    }
    await this.generateQRCode(), this.hasInitialized = !0, !this.useDialog && !this.isMobile && this.startWebSocketConnection(), document.addEventListener("keydown", this.handleKeyDown);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("keydown", this.handleKeyDown), this.wsConnection && (this.wsConnection.close(), this.wsConnection = null);
  }
  // Watch for amount changes AFTER initial render
  updated(a) {
    this.hasInitialized && a.has("amount") && (this.validateAmount() ? this.amountError === "" && this.generateQRCode() : (this.connected = !1, this.confirmed = !1)), this.hasInitialized && a.has("note") && this.amountError === "" && this.generateQRCode(), a.has("dialogOpen") && this.dialogOpen && !this.isMobile && this.startWebSocketConnection(), a.has("useDialog") && !this.useDialog && !this.isMobile && this.hasInitialized && this.startWebSocketConnection();
  }
  resolveNote() {
    return (this.note?.trim() ?? "").replace(/[^a-zA-Z0-9 ]+/g, "").replace(/\s+/g, " ").trim().slice(0, V.NOTE_MAX_LENGTH).trim() || "checkout";
  }
  walletDisplayLabel() {
    return this.wallet === V.SOLANA_PLACE_WALLET ? "Solana Place" : `${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}`;
  }
  formatAmountPill() {
    const a = Number(this.amount);
    return Number.isFinite(a) ? `$${(Math.floor(a * 100) / 100).toFixed(2)}` : null;
  }
  renderAmountPill() {
    const a = this.formatAmountPill();
    return a === null ? "" : T`<div class="amount-pill">${a}</div>`;
  }
  renderQrContent() {
    return this.isConfirming || this.confirmingError ? this.confirmingError ? T`<div class="confirming-spinner-wrapper"><div class="confirming-error">${this.confirmingError}</div></div>` : T`<div class="confirming-spinner-wrapper"><div class="confirming-spinner"></div></div>` : T`
      <div class="qr-wrapper">
        ${this.qrCodeData ? T`<div class="qr-card"><img src="${this.qrCodeData}" alt="Yatori QR Code" /></div>` : T`<p>Loading QR…</p>`}
      </div>
    `;
  }
  renderQrStack() {
    return T`
      <div class="qr-stack">
        ${this.renderAmountPill()}
        ${this.renderQrContent()}
      </div>
    `;
  }
  getBlackLogoDataUrl() {
    return V.blackLogoPromise || (V.blackLogoPromise = new Promise((a, l) => {
      const p = new Image();
      p.onload = () => {
        const m = document.createElement("canvas");
        m.width = p.width, m.height = p.height;
        const y = m.getContext("2d");
        if (!y) {
          l(new Error("Could not create logo canvas context"));
          return;
        }
        y.filter = "brightness(0)", y.drawImage(p, 0, 0), a(m.toDataURL("image/png"));
      }, p.onerror = () => l(new Error("Could not load Yatori logo")), p.src = Bt;
    })), V.blackLogoPromise;
  }
  async generateQRCode() {
    const a = () => {
      const q = Date.now().toString().slice(-4), ht = Math.random().toString(36).substring(2, 6);
      return `${q}${ht}`;
    };
    this.yid = a(), console.log("YATORI YID CREATED");
    const l = encodeURIComponent(this.resolveNote()), p = {
      token: "usdcBasic",
      to: this.wallet,
      amount: this.amount,
      yid: this.yid
    };
    this.qrUrl = `https://yatori.io/mobile/yatoriRequest?token=${p.token}&to=${p.to}&amount=${p.amount}&yid=${p.yid}&type=note&note=${l}`;
    const m = await this.getBlackLogoDataUrl(), y = {
      width: 250,
      height: 250,
      data: this.qrUrl,
      margin: 0,
      image: m,
      dotsOptions: {
        color: "#000000",
        type: "dots"
      },
      backgroundOptions: {
        color: "#ffffff"
      },
      imageOptions: {
        margin: 0,
        imageSize: 0.32,
        hideBackgroundDots: !0
      },
      cornersSquareOptions: {
        type: "extra-rounded"
      },
      cornersDotOptions: {
        type: "rounded"
      }
    }, X = await new de(y).getRawData("png");
    if (X) {
      const q = new FileReader();
      q.onloadend = () => {
        this.qrCodeData = q.result;
      }, q.readAsDataURL(X);
    }
  }
  startWebSocketConnection() {
    if (this.wsConnection) {
      const a = this.wsConnection.readyState;
      if (a === WebSocket.OPEN || a === WebSocket.CONNECTING)
        return;
    }
    this.yid && this.setupYatoriWebSocket(this.wallet, this.yid, this.amount);
  }
  setupYatoriWebSocket(a, l, p) {
    if (this.wsConnection) {
      const D = this.wsConnection.readyState;
      if (D !== WebSocket.OPEN && D !== WebSocket.CONNECTING)
        this.wsConnection.close();
      else
        return;
    }
    const m = "ws://localhost:8080/confirmed", y = new WebSocket(m);
    this.wsConnection = y, y.addEventListener("open", () => {
      this.connected = !0;
      const D = { address: a, yid: l, amount: String(p) };
      y.send(JSON.stringify(D));
    }), y.addEventListener("message", (D) => {
      const X = JSON.parse(D.data);
      X.status === "confirming" && (this.confirmingTimeoutId && (clearTimeout(this.confirmingTimeoutId), this.confirmingTimeoutId = null), this.confirmingError = "", this.isConfirming = !0, this.confirmingTimeoutId = setTimeout(() => {
        this.confirmingTimeoutId = null, this.isConfirming = !1, this.confirmingError = "There was an error - check your transaction history";
      }, 6e4)), X.status === "confirmed" && (this.confirmingTimeoutId && (clearTimeout(this.confirmingTimeoutId), this.confirmingTimeoutId = null), this.confirmingError = "", this.isConfirming = !1, this.confirmed = !0, this.dialogOpen = !1, this.dispatchEvent(
        new CustomEvent("yatori-confirmed", {
          detail: {
            signature: X.signature,
            status: X.status
          },
          bubbles: !0,
          composed: !0
        })
      ), setTimeout(() => {
        this.dispatchEvent(
          new CustomEvent("yatori-animation-complete", {
            detail: {
              signature: X.signature,
              status: X.status
            },
            bubbles: !0,
            composed: !0
          })
        );
      }, 1400));
    }), y.addEventListener("error", (D) => {
      console.error("WebSocket error:", D), this.connected = !1, this.isConfirming = !1, this.confirmingError = "", this.confirmingTimeoutId && (clearTimeout(this.confirmingTimeoutId), this.confirmingTimeoutId = null);
    }), y.addEventListener("close", () => {
      console.log("Disconnected from proxy"), this.connected = !1, this.isConfirming = !1, this.confirmingError = "", this.confirmingTimeoutId && (clearTimeout(this.confirmingTimeoutId), this.confirmingTimeoutId = null), this.wsConnection = null;
    });
  }
  render() {
    if (this.amountError)
      return T`
        <div class="error-container">
          <svg class="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <circle cx="12" cy="16" r="0.5" fill="currentColor"></circle>
          </svg>
          <div class="error-message">${this.amountError}</div>
          <div class="error-details">
            Please adjust the payment amount to continue.
          </div>
        </div>
      `;
    const a = !this.useDialog && !this.connected && !this.confirmed && !this.qrCodeData;
    return T`
      ${a ? T`<div class="spinner"></div>` : this.confirmed && !this.useDialog ? T`
            <div class="flat-qr flat-confirmed">
              <div class="dialog-amount">Payment Complete</div>
              <div class="dialog-qr-row">
                <div class="dialog-wallet-vertical">${this.walletDisplayLabel()}</div>
                <div class="flat-confirmed-inner">
                  <svg viewBox="0 0 100 100" style="shape-rendering: geometricPrecision;">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#646CFF" stroke-width="6" class="animate-draw-circle"/>
                    <path d="M 30 50 L 45 65 L 75 30" fill="none" stroke="#646CFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" class="checkmark-path" style="stroke-dasharray: 55; stroke-dashoffset: 55;"/>
                  </svg>
                </div>
                <div class="dialog-wallet-vertical-right">${this.walletDisplayLabel()}</div>
              </div>
              <div class="dialog-wallet-bottom">${this.walletDisplayLabel()}</div>
            </div>
          ` : T`
            ${this.isMobile ? T`
                  <button
                    class="deeplink-btn"
                    @click=${() => {
      this.startWebSocketConnection(), window.location.href = this.qrUrl;
    }}
                  >
                    <img src="${Bt}" alt="Yatori Logo" />
                    YATORI PAY
                  </button>
                ` : this.useDialog ? T`
                    <button
                      class="deeplink-btn"
                      ?disabled=${this.confirmed}
                      @click=${() => {
      this.confirmed || (this.dialogOpen = !0);
    }}
                    >
                      ${this.confirmed ? T`
                            <svg viewBox="0 0 100 100" style="width: 24px; height: 24px; shape-rendering: geometricPrecision;">
                              <circle cx="50" cy="50" r="40" fill="none" stroke="#646CFF" stroke-width="6" class="animate-draw-circle"/>
                              <path d="M 30 50 L 45 65 L 75 30" fill="none" stroke="#646CFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" class="checkmark-path" style="stroke-dasharray: 55; stroke-dashoffset: 55;"/>
                            </svg>
                          ` : T`
                            <img src="${Bt}" alt="Yatori Logo" />
                            YATORI PAY
                          `}
                    </button>
                    ${this.dialogOpen ? T`
                      <div class="dialog-overlay" @click=${(l) => {
      l.target === l.currentTarget && (this.dialogOpen = !1);
    }}>
                        <div class="dialog-content">
                          <div class="dialog-qr-row">
                            <div class="dialog-wallet-vertical">${this.walletDisplayLabel()}</div>
                            ${this.renderQrStack()}
                            <div class="dialog-wallet-vertical-right">${this.walletDisplayLabel()}</div>
                          </div>
                          <div class="dialog-wallet-bottom">${this.walletDisplayLabel()}</div>
                          <button
                            class="dialog-close-btn"
                            @click=${() => this.dialogOpen = !1}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    ` : ""}
                  ` : T`
                  <div class="flat-qr">
                    <div class="dialog-qr-row">
                      <div class="dialog-wallet-vertical">${this.walletDisplayLabel()}</div>
                      ${this.renderQrStack()}
                      <div class="dialog-wallet-vertical-right">${this.walletDisplayLabel()}</div>
                    </div>
                    <div class="dialog-wallet-bottom">${this.walletDisplayLabel()}</div>
                  </div>
                `}
          `}
    `;
  }
};
V.NOTE_MAX_LENGTH = 50;
V.SOLANA_PLACE_WALLET = "AL3iHPM8s9g4epZJXm8RkBuACZNh1JVWxA5BmsSiMKM5";
V.blackLogoPromise = null;
V.styles = qt`
  :host {
    display: block;
    width: 100%;
    min-height: var(--yp-button-height, 48px);
    padding: 0;
    text-align: center;
    font-family: sans-serif;
    box-sizing: border-box;
    color: inherit;
  }

  :host > div {
    color: inherit;
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 12px auto;
  }

  .qr-wrapper {
    opacity: 1;
    transition: opacity 0.5s ease;
    background: #c1ff72;
    border-radius: 16px;
    padding: 14px;
    display: inline-block;
    box-sizing: border-box;
  }

  .qr-card {
    display: block;
    border-radius: 12px;
    background: #ffffff;
    overflow: hidden;
    line-height: 0;
    box-shadow:
      0 3px 6px rgba(0, 0, 0, 0.12),
      0 10px 22px rgba(0, 0, 0, 0.2),
      0 18px 36px rgba(0, 0, 0, 0.1);
  }

  .qr-card img {
    margin: 0;
    display: block;
    width: 250px;
    height: 250px;
  }

  .qr-wrapper.fade-out {
    opacity: 0;
  }

  .flat-qr {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }

  .flat-qr .qr-wrapper {
    background: #c1ff72;
  }

  .qr-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  .amount-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background: rgba(100, 108, 255, 0.14);
    border: none;
    box-shadow: none;
    padding: 10px 22px;
    color: #191818;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .flat-qr .dialog-amount {
    color: #e8e8e8;
    transition: color 0.7s ease;
  }

  .flat-qr .dialog-wallet-vertical,
  .flat-qr .dialog-wallet-vertical-right,
  .flat-qr .dialog-wallet-bottom {
    color: #d4d4d4;
    transition: color 0.7s ease;
  }

  /* Wave: starts later, slower; bottom → left → right → top */
  .flat-qr.flat-confirmed .dialog-wallet-bottom {
    color: #646CFF;
    transition-delay: 0.4s;
  }
  .flat-qr.flat-confirmed .dialog-wallet-vertical {
    color: #646CFF;
    transition-delay: 0.55s;
  }
  .flat-qr.flat-confirmed .dialog-wallet-vertical-right {
    color: #646CFF;
    transition-delay: 0.7s;
  }
  .flat-qr.flat-confirmed .dialog-amount {
    color: #646CFF;
    transition-delay: 0.85s;
  }

  .dialog-amount {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #1c1c1c;
    margin-bottom: 12px;
  }

  .dialog-qr-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .dialog-wallet-vertical {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #4a5568;
    user-select: none;
  }

  .dialog-wallet-vertical-right {
    writing-mode: vertical-lr;
    text-orientation: mixed;
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #4a5568;
    user-select: none;
  }

  .dialog-wallet-bottom {
    text-align: center;
    margin-top: 12px;
    transform: rotate(180deg);
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #4a5568;
    user-select: none;
  }

  .confirmed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 16px;
    padding: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 160px;
    min-height: 180px;
    gap: 12px;
  }

  .flat-confirmed-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 262px;
    height: 262px;
    flex-shrink: 0;
    box-sizing: border-box;
  }

  .flat-confirmed-inner svg {
    width: 48px;
    height: 48px;
  }

  .confirmed svg {
    width: 48px;
    height: 48px;
  }

  .confirmed-text {
    font-size: 12px;
    color: #646CFF;
    font-weight: 600;
  }

  @keyframes draw-circle {
    0% {
      stroke-dasharray: 251 251;
      stroke-dashoffset: 251;
      opacity: 1;
    }
    100% {
      stroke-dasharray: 251 251;
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  @keyframes draw-check {
    0% {
      stroke-dashoffset: 55;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  .animate-draw-circle {
    stroke-dasharray: 251 251;
    stroke-dashoffset: 251;
    animation: draw-circle 0.8s ease-out forwards;
    transform-origin: center;
    will-change: stroke-dashoffset;
  }

  .checkmark-path {
    stroke-dasharray: 55;
    stroke-dashoffset: 55;
    opacity: 0;
    animation: draw-check 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
    transform-origin: center;
    will-change: stroke-dashoffset, opacity;
  }

  .spinner {
    margin: 24px auto;
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .confirming-spinner-wrapper {
    width: 262px;
    height: 262px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-sizing: border-box;
  }

  .confirming-spinner {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(100, 108, 255, 0.25);
    border-top-color: #646CFF;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .confirming-error {
    width: 262px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 16px;
    box-sizing: border-box;
    color: #646CFF;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
  }

.deeplink-btn {
  background: white;
  color: #1c1c1c;
  border: var(--yp-button-border-width, 1px) solid var(--yp-button-border-color, black);
  border-radius: var(--yp-button-border-radius, 0px);
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 0.15em;
  padding: 10px 20px;
  width: max(var(--yp-button-width, 100%), 200px);
  min-width: 200px;
  height: max(var(--yp-button-height, 48px), 44px);
  min-height: 44px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
  margin: 0;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.deeplink-btn img {
  width: 18px;
  height: 18px;
  margin: 0;
  display: block;
  flex-shrink: 0;
}

.deeplink-btn:hover:not(:disabled) {
  background: #f5f5f5;
}

.deeplink-btn:active:not(:disabled) {
  background: white;
}

.deeplink-btn:disabled {
  cursor: not-allowed;
  opacity: 1;
}

.deeplink-btn svg {
  display: block;
  flex-shrink: 0;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.dialog-content {
  background: white;
  border-radius: 20px;
  padding: 24px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  position: relative;
  animation: slideUp 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.dialog-close-btn {
  background: #1c1c1c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 24px;
  cursor: pointer;
  margin-top: 16px;
  width: 100%;
  transition: background 0.2s ease;
}

.dialog-close-btn:hover {
  background: #333333;
}

.dialog-close-btn:active {
  background: #1c1c1c;
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 12px;
}

.error-icon {
  width: 48px;
  height: 48px;
  color: #ef4444;
}

.error-message {
  color: #ef4444;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.error-details {
  color: #6b7280;
  font-size: 14px;
  text-align: center;
  max-width: 280px;
}
  `;
$([
  At({ type: String })
], V.prototype, "wallet", 2);
$([
  At({ type: Number })
], V.prototype, "amount", 2);
$([
  At({ type: String })
], V.prototype, "note", 2);
$([
  At({
    type: Boolean,
    converter: { fromAttribute: (x) => x === null ? !0 : x !== "false" }
  })
], V.prototype, "useDialog", 2);
$([
  dt()
], V.prototype, "qrCodeData", 2);
$([
  dt()
], V.prototype, "qrUrl", 2);
$([
  dt()
], V.prototype, "yid", 2);
$([
  dt()
], V.prototype, "confirmed", 2);
$([
  dt()
], V.prototype, "isMobile", 2);
$([
  dt()
], V.prototype, "connected", 2);
$([
  dt()
], V.prototype, "amountError", 2);
$([
  dt()
], V.prototype, "dialogOpen", 2);
$([
  dt()
], V.prototype, "isConfirming", 2);
$([
  dt()
], V.prototype, "confirmingError", 2);
V = $([
  Ut("yatori-checkout")
], V);
const ve = ({
  wallet: x,
  amount: a,
  note: l,
  onYatoriConfirmed: p,
  onYatoriAnimationComplete: m
}) => {
  const y = Yt(null);
  return Nt(() => {
    const D = y.current;
    if (D)
      return p && D.addEventListener("yatori-confirmed", p), m && D.addEventListener("yatori-animation-complete", m), () => {
        p && D.removeEventListener("yatori-confirmed", p), m && D.removeEventListener("yatori-animation-complete", m);
      };
  }, [p, m]), Ft.createElement("yatori-checkout", {
    ref: y,
    wallet: x,
    amount: a,
    ...l !== void 0 && { note: l }
  });
};
export {
  ve as YatoriCheckout
};
