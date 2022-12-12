!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).RevealNotes =
        e());
})(this, function () {
  "use strict";
  function t() {
    return {
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: "",
      highlight: null,
      langPrefix: "language-",
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    };
  }
  let e = {
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartLists: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1,
  };
  const n = /[&<>"']/,
    r = /[&<>"']/g,
    i = /[<>"']|&(?!#?\w+;)/,
    s = /[<>"']|&(?!#?\w+;)/g,
    a = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
    l = (t) => a[t];
  function o(t, e) {
    if (e) {
      if (n.test(t)) return t.replace(r, l);
    } else if (i.test(t)) return t.replace(s, l);
    return t;
  }
  const c = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function p(t) {
    return t.replace(c, (t, e) =>
      "colon" === (e = e.toLowerCase())
        ? ":"
        : "#" === e.charAt(0)
        ? "x" === e.charAt(1)
          ? String.fromCharCode(parseInt(e.substring(2), 16))
          : String.fromCharCode(+e.substring(1))
        : ""
    );
  }
  const u = /(^|[^\[])\^/g;
  function d(t, e) {
    (t = t.source || t), (e = e || "");
    const n = {
      replace: (e, r) => (
        (r = (r = r.source || r).replace(u, "$1")), (t = t.replace(e, r)), n
      ),
      getRegex: () => new RegExp(t, e),
    };
    return n;
  }
  const h = /[^\w:]/g,
    g = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function m(t, e, n) {
    if (t) {
      let t;
      try {
        t = decodeURIComponent(p(n)).replace(h, "").toLowerCase();
      } catch (t) {
        return null;
      }
      if (
        0 === t.indexOf("javascript:") ||
        0 === t.indexOf("vbscript:") ||
        0 === t.indexOf("data:")
      )
        return null;
    }
    e &&
      !g.test(n) &&
      (n = (function (t, e) {
        f[" " + t] ||
          (k.test(t) ? (f[" " + t] = t + "/") : (f[" " + t] = S(t, "/", !0)));
        const n = -1 === (t = f[" " + t]).indexOf(":");
        return "//" === e.substring(0, 2)
          ? n
            ? e
            : t.replace(x, "$1") + e
          : "/" === e.charAt(0)
          ? n
            ? e
            : t.replace(b, "$1") + e
          : t + e;
      })(e, n));
    try {
      n = encodeURI(n).replace(/%25/g, "%");
    } catch (t) {
      return null;
    }
    return n;
  }
  const f = {},
    k = /^[^:]+:\/*[^/]*$/,
    x = /^([^:]+:)[\s\S]*$/,
    b = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  const w = { exec: function () {} };
  function y(t) {
    let e,
      n,
      r = 1;
    for (; r < arguments.length; r++)
      for (n in ((e = arguments[r]), e))
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  }
  function v(t, e) {
    const n = t
      .replace(/\|/g, (t, e, n) => {
        let r = !1,
          i = e;
        for (; --i >= 0 && "\\" === n[i]; ) r = !r;
        return r ? "|" : " |";
      })
      .split(/ \|/);
    let r = 0;
    if (
      (n[0].trim() || n.shift(),
      n.length > 0 && !n[n.length - 1].trim() && n.pop(),
      n.length > e)
    )
      n.splice(e);
    else for (; n.length < e; ) n.push("");
    for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
    return n;
  }
  function S(t, e, n) {
    const r = t.length;
    if (0 === r) return "";
    let i = 0;
    for (; i < r; ) {
      const s = t.charAt(r - i - 1);
      if (s !== e || n) {
        if (s === e || !n) break;
        i++;
      } else i++;
    }
    return t.substr(0, r - i);
  }
  function T(t) {
    t &&
      t.sanitize &&
      !t.silent &&
      console.warn(
        "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
      );
  }
  function _(t, e) {
    if (e < 1) return "";
    let n = "";
    for (; e > 1; ) 1 & e && (n += t), (e >>= 1), (t += t);
    return n + t;
  }
  function z(t, e, n, r) {
    const i = e.href,
      s = e.title ? o(e.title) : null,
      a = t[1].replace(/\\([\[\]])/g, "$1");
    if ("!" !== t[0].charAt(0)) {
      r.state.inLink = !0;
      const t = {
        type: "link",
        raw: n,
        href: i,
        title: s,
        text: a,
        tokens: r.inlineTokens(a, []),
      };
      return (r.state.inLink = !1), t;
    }
    return { type: "image", raw: n, href: i, title: s, text: o(a) };
  }
  class A {
    constructor(t) {
      this.options = t || e;
    }
    space(t) {
      const e = this.rules.block.newline.exec(t);
      if (e && e[0].length > 0) return { type: "space", raw: e[0] };
    }
    code(t) {
      const e = this.rules.block.code.exec(t);
      if (e) {
        const t = e[0].replace(/^ {1,4}/gm, "");
        return {
          type: "code",
          raw: e[0],
          codeBlockStyle: "indented",
          text: this.options.pedantic ? t : S(t, "\n"),
        };
      }
    }
    fences(t) {
      const e = this.rules.block.fences.exec(t);
      if (e) {
        const t = e[0],
          n = (function (t, e) {
            const n = t.match(/^(\s+)(?:```)/);
            if (null === n) return e;
            const r = n[1];
            return e
              .split("\n")
              .map((t) => {
                const e = t.match(/^\s+/);
                if (null === e) return t;
                const [n] = e;
                return n.length >= r.length ? t.slice(r.length) : t;
              })
              .join("\n");
          })(t, e[3] || "");
        return {
          type: "code",
          raw: t,
          lang: e[2] ? e[2].trim() : e[2],
          text: n,
        };
      }
    }
    heading(t) {
      const e = this.rules.block.heading.exec(t);
      if (e) {
        let t = e[2].trim();
        if (/#$/.test(t)) {
          const e = S(t, "#");
          this.options.pedantic
            ? (t = e.trim())
            : (e && !/ $/.test(e)) || (t = e.trim());
        }
        const n = {
          type: "heading",
          raw: e[0],
          depth: e[1].length,
          text: t,
          tokens: [],
        };
        return this.lexer.inline(n.text, n.tokens), n;
      }
    }
    hr(t) {
      const e = this.rules.block.hr.exec(t);
      if (e) return { type: "hr", raw: e[0] };
    }
    blockquote(t) {
      const e = this.rules.block.blockquote.exec(t);
      if (e) {
        const t = e[0].replace(/^ *> ?/gm, "");
        return {
          type: "blockquote",
          raw: e[0],
          tokens: this.lexer.blockTokens(t, []),
          text: t,
        };
      }
    }
    list(t) {
      let e = this.rules.block.list.exec(t);
      if (e) {
        let n,
          r,
          i,
          s,
          a,
          l,
          o,
          c,
          p,
          u,
          d,
          h,
          g = e[1].trim();
        const m = g.length > 1,
          f = {
            type: "list",
            raw: "",
            ordered: m,
            start: m ? +g.slice(0, -1) : "",
            loose: !1,
            items: [],
          };
        (g = m ? `\\d{1,9}\\${g.slice(-1)}` : `\\${g}`),
          this.options.pedantic && (g = m ? g : "[*+-]");
        const k = new RegExp(`^( {0,3}${g})((?: [^\\n]*)?(?:\\n|$))`);
        for (
          ;
          t && ((h = !1), (e = k.exec(t))) && !this.rules.block.hr.test(t);

        ) {
          if (
            ((n = e[0]),
            (t = t.substring(n.length)),
            (c = e[2].split("\n", 1)[0]),
            (p = t.split("\n", 1)[0]),
            this.options.pedantic
              ? ((s = 2), (d = c.trimLeft()))
              : ((s = e[2].search(/[^ ]/)),
                (s = s > 4 ? 1 : s),
                (d = c.slice(s)),
                (s += e[1].length)),
            (l = !1),
            !c &&
              /^ *$/.test(p) &&
              ((n += p + "\n"), (t = t.substring(p.length + 1)), (h = !0)),
            !h)
          ) {
            const e = new RegExp(
              `^ {0,${Math.min(3, s - 1)}}(?:[*+-]|\\d{1,9}[.)])`
            );
            for (
              ;
              t &&
              ((u = t.split("\n", 1)[0]),
              (c = u),
              this.options.pedantic &&
                (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
              !e.test(c));

            ) {
              if (c.search(/[^ ]/) >= s || !c.trim()) d += "\n" + c.slice(s);
              else {
                if (l) break;
                d += "\n" + c;
              }
              l || c.trim() || (l = !0),
                (n += u + "\n"),
                (t = t.substring(u.length + 1));
            }
          }
          f.loose || (o ? (f.loose = !0) : /\n *\n *$/.test(n) && (o = !0)),
            this.options.gfm &&
              ((r = /^\[[ xX]\] /.exec(d)),
              r &&
                ((i = "[ ] " !== r[0]), (d = d.replace(/^\[[ xX]\] +/, "")))),
            f.items.push({
              type: "list_item",
              raw: n,
              task: !!r,
              checked: i,
              loose: !1,
              text: d,
            }),
            (f.raw += n);
        }
        (f.items[f.items.length - 1].raw = n.trimRight()),
          (f.items[f.items.length - 1].text = d.trimRight()),
          (f.raw = f.raw.trimRight());
        const x = f.items.length;
        for (a = 0; a < x; a++) {
          (this.lexer.state.top = !1),
            (f.items[a].tokens = this.lexer.blockTokens(f.items[a].text, []));
          const t = f.items[a].tokens.filter((t) => "space" === t.type),
            e = t.every((t) => {
              const e = t.raw.split("");
              let n = 0;
              for (const t of e) if (("\n" === t && (n += 1), n > 1)) return !0;
              return !1;
            });
          !f.loose &&
            t.length &&
            e &&
            ((f.loose = !0), (f.items[a].loose = !0));
        }
        return f;
      }
    }
    html(t) {
      const e = this.rules.block.html.exec(t);
      if (e) {
        const t = {
          type: "html",
          raw: e[0],
          pre:
            !this.options.sanitizer &&
            ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
          text: e[0],
        };
        return (
          this.options.sanitize &&
            ((t.type = "paragraph"),
            (t.text = this.options.sanitizer
              ? this.options.sanitizer(e[0])
              : o(e[0])),
            (t.tokens = []),
            this.lexer.inline(t.text, t.tokens)),
          t
        );
      }
    }
    def(t) {
      const e = this.rules.block.def.exec(t);
      if (e) {
        e[3] && (e[3] = e[3].substring(1, e[3].length - 1));
        return {
          type: "def",
          tag: e[1].toLowerCase().replace(/\s+/g, " "),
          raw: e[0],
          href: e[2],
          title: e[3],
        };
      }
    }
    table(t) {
      const e = this.rules.block.table.exec(t);
      if (e) {
        const t = {
          type: "table",
          header: v(e[1]).map((t) => ({ text: t })),
          align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          rows:
            e[3] && e[3].trim()
              ? e[3].replace(/\n[ \t]*$/, "").split("\n")
              : [],
        };
        if (t.header.length === t.align.length) {
          t.raw = e[0];
          let n,
            r,
            i,
            s,
            a = t.align.length;
          for (n = 0; n < a; n++)
            /^ *-+: *$/.test(t.align[n])
              ? (t.align[n] = "right")
              : /^ *:-+: *$/.test(t.align[n])
              ? (t.align[n] = "center")
              : /^ *:-+ *$/.test(t.align[n])
              ? (t.align[n] = "left")
              : (t.align[n] = null);
          for (a = t.rows.length, n = 0; n < a; n++)
            t.rows[n] = v(t.rows[n], t.header.length).map((t) => ({ text: t }));
          for (a = t.header.length, r = 0; r < a; r++)
            (t.header[r].tokens = []),
              this.lexer.inlineTokens(t.header[r].text, t.header[r].tokens);
          for (a = t.rows.length, r = 0; r < a; r++)
            for (s = t.rows[r], i = 0; i < s.length; i++)
              (s[i].tokens = []),
                this.lexer.inlineTokens(s[i].text, s[i].tokens);
          return t;
        }
      }
    }
    lheading(t) {
      const e = this.rules.block.lheading.exec(t);
      if (e) {
        const t = {
          type: "heading",
          raw: e[0],
          depth: "=" === e[2].charAt(0) ? 1 : 2,
          text: e[1],
          tokens: [],
        };
        return this.lexer.inline(t.text, t.tokens), t;
      }
    }
    paragraph(t) {
      const e = this.rules.block.paragraph.exec(t);
      if (e) {
        const t = {
          type: "paragraph",
          raw: e[0],
          text:
            "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1],
          tokens: [],
        };
        return this.lexer.inline(t.text, t.tokens), t;
      }
    }
    text(t) {
      const e = this.rules.block.text.exec(t);
      if (e) {
        const t = { type: "text", raw: e[0], text: e[0], tokens: [] };
        return this.lexer.inline(t.text, t.tokens), t;
      }
    }
    escape(t) {
      const e = this.rules.inline.escape.exec(t);
      if (e) return { type: "escape", raw: e[0], text: o(e[1]) };
    }
    tag(t) {
      const e = this.rules.inline.tag.exec(t);
      if (e)
        return (
          !this.lexer.state.inLink && /^<a /i.test(e[0])
            ? (this.lexer.state.inLink = !0)
            : this.lexer.state.inLink &&
              /^<\/a>/i.test(e[0]) &&
              (this.lexer.state.inLink = !1),
          !this.lexer.state.inRawBlock &&
          /^<(pre|code|kbd|script)(\s|>)/i.test(e[0])
            ? (this.lexer.state.inRawBlock = !0)
            : this.lexer.state.inRawBlock &&
              /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) &&
              (this.lexer.state.inRawBlock = !1),
          {
            type: this.options.sanitize ? "text" : "html",
            raw: e[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            text: this.options.sanitize
              ? this.options.sanitizer
                ? this.options.sanitizer(e[0])
                : o(e[0])
              : e[0],
          }
        );
    }
    link(t) {
      const e = this.rules.inline.link.exec(t);
      if (e) {
        const t = e[2].trim();
        if (!this.options.pedantic && /^</.test(t)) {
          if (!/>$/.test(t)) return;
          const e = S(t.slice(0, -1), "\\");
          if ((t.length - e.length) % 2 == 0) return;
        } else {
          const t = (function (t, e) {
            if (-1 === t.indexOf(e[1])) return -1;
            const n = t.length;
            let r = 0,
              i = 0;
            for (; i < n; i++)
              if ("\\" === t[i]) i++;
              else if (t[i] === e[0]) r++;
              else if (t[i] === e[1] && (r--, r < 0)) return i;
            return -1;
          })(e[2], "()");
          if (t > -1) {
            const n = (0 === e[0].indexOf("!") ? 5 : 4) + e[1].length + t;
            (e[2] = e[2].substring(0, t)),
              (e[0] = e[0].substring(0, n).trim()),
              (e[3] = "");
          }
        }
        let n = e[2],
          r = "";
        if (this.options.pedantic) {
          const t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
          t && ((n = t[1]), (r = t[3]));
        } else r = e[3] ? e[3].slice(1, -1) : "";
        return (
          (n = n.trim()),
          /^</.test(n) &&
            (n =
              this.options.pedantic && !/>$/.test(t)
                ? n.slice(1)
                : n.slice(1, -1)),
          z(
            e,
            {
              href: n ? n.replace(this.rules.inline._escapes, "$1") : n,
              title: r ? r.replace(this.rules.inline._escapes, "$1") : r,
            },
            e[0],
            this.lexer
          )
        );
      }
    }
    reflink(t, e) {
      let n;
      if (
        (n = this.rules.inline.reflink.exec(t)) ||
        (n = this.rules.inline.nolink.exec(t))
      ) {
        let t = (n[2] || n[1]).replace(/\s+/g, " ");
        if (((t = e[t.toLowerCase()]), !t || !t.href)) {
          const t = n[0].charAt(0);
          return { type: "text", raw: t, text: t };
        }
        return z(n, t, n[0], this.lexer);
      }
    }
    emStrong(t, e, n = "") {
      let r = this.rules.inline.emStrong.lDelim.exec(t);
      if (!r) return;
      if (r[3] && n.match(/[\p{L}\p{N}]/u)) return;
      const i = r[1] || r[2] || "";
      if (!i || (i && ("" === n || this.rules.inline.punctuation.exec(n)))) {
        const n = r[0].length - 1;
        let i,
          s,
          a = n,
          l = 0;
        const o =
          "*" === r[0][0]
            ? this.rules.inline.emStrong.rDelimAst
            : this.rules.inline.emStrong.rDelimUnd;
        for (
          o.lastIndex = 0, e = e.slice(-1 * t.length + n);
          null != (r = o.exec(e));

        ) {
          if (((i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]), !i))
            continue;
          if (((s = i.length), r[3] || r[4])) {
            a += s;
            continue;
          }
          if ((r[5] || r[6]) && n % 3 && !((n + s) % 3)) {
            l += s;
            continue;
          }
          if (((a -= s), a > 0)) continue;
          if (((s = Math.min(s, s + a + l)), Math.min(n, s) % 2)) {
            const e = t.slice(1, n + r.index + s);
            return {
              type: "em",
              raw: t.slice(0, n + r.index + s + 1),
              text: e,
              tokens: this.lexer.inlineTokens(e, []),
            };
          }
          const e = t.slice(2, n + r.index + s - 1);
          return {
            type: "strong",
            raw: t.slice(0, n + r.index + s + 1),
            text: e,
            tokens: this.lexer.inlineTokens(e, []),
          };
        }
      }
    }
    codespan(t) {
      const e = this.rules.inline.code.exec(t);
      if (e) {
        let t = e[2].replace(/\n/g, " ");
        const n = /[^ ]/.test(t),
          r = /^ /.test(t) && / $/.test(t);
        return (
          n && r && (t = t.substring(1, t.length - 1)),
          (t = o(t, !0)),
          { type: "codespan", raw: e[0], text: t }
        );
      }
    }
    br(t) {
      const e = this.rules.inline.br.exec(t);
      if (e) return { type: "br", raw: e[0] };
    }
    del(t) {
      const e = this.rules.inline.del.exec(t);
      if (e)
        return {
          type: "del",
          raw: e[0],
          text: e[2],
          tokens: this.lexer.inlineTokens(e[2], []),
        };
    }
    autolink(t, e) {
      const n = this.rules.inline.autolink.exec(t);
      if (n) {
        let t, r;
        return (
          "@" === n[2]
            ? ((t = o(this.options.mangle ? e(n[1]) : n[1])),
              (r = "mailto:" + t))
            : ((t = o(n[1])), (r = t)),
          {
            type: "link",
            raw: n[0],
            text: t,
            href: r,
            tokens: [{ type: "text", raw: t, text: t }],
          }
        );
      }
    }
    url(t, e) {
      let n;
      if ((n = this.rules.inline.url.exec(t))) {
        let t, r;
        if ("@" === n[2])
          (t = o(this.options.mangle ? e(n[0]) : n[0])), (r = "mailto:" + t);
        else {
          let e;
          do {
            (e = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
          } while (e !== n[0]);
          (t = o(n[0])), (r = "www." === n[1] ? "http://" + t : t);
        }
        return {
          type: "link",
          raw: n[0],
          text: t,
          href: r,
          tokens: [{ type: "text", raw: t, text: t }],
        };
      }
    }
    inlineText(t, e) {
      const n = this.rules.inline.text.exec(t);
      if (n) {
        let t;
        return (
          (t = this.lexer.state.inRawBlock
            ? this.options.sanitize
              ? this.options.sanitizer
                ? this.options.sanitizer(n[0])
                : o(n[0])
              : n[0]
            : o(this.options.smartypants ? e(n[0]) : n[0])),
          { type: "text", raw: n[0], text: t }
        );
      }
    }
  }
  const E = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences:
      /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
    html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
    def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
    table: w,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph:
      /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    text: /^[^\n]+/,
    _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
    _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
  };
  (E.def = d(E.def)
    .replace("label", E._label)
    .replace("title", E._title)
    .getRegex()),
    (E.bullet = /(?:[*+-]|\d{1,9}[.)])/),
    (E.listItemStart = d(/^( *)(bull) */)
      .replace("bull", E.bullet)
      .getRegex()),
    (E.list = d(E.list)
      .replace(/bull/g, E.bullet)
      .replace(
        "hr",
        "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
      )
      .replace("def", "\\n+(?=" + E.def.source + ")")
      .getRegex()),
    (E._tag =
      "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
    (E._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
    (E.html = d(E.html, "i")
      .replace("comment", E._comment)
      .replace("tag", E._tag)
      .replace(
        "attribute",
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
      )
      .getRegex()),
    (E.paragraph = d(E._paragraph)
      .replace("hr", E.hr)
      .replace("heading", " {0,3}#{1,6} ")
      .replace("|lheading", "")
      .replace("|table", "")
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace(
        "html",
        "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
      )
      .replace("tag", E._tag)
      .getRegex()),
    (E.blockquote = d(E.blockquote)
      .replace("paragraph", E.paragraph)
      .getRegex()),
    (E.normal = y({}, E)),
    (E.gfm = y({}, E.normal, {
      table:
        "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    })),
    (E.gfm.table = d(E.gfm.table)
      .replace("hr", E.hr)
      .replace("heading", " {0,3}#{1,6} ")
      .replace("blockquote", " {0,3}>")
      .replace("code", " {4}[^\\n]")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace(
        "html",
        "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
      )
      .replace("tag", E._tag)
      .getRegex()),
    (E.gfm.paragraph = d(E._paragraph)
      .replace("hr", E.hr)
      .replace("heading", " {0,3}#{1,6} ")
      .replace("|lheading", "")
      .replace("table", E.gfm.table)
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace(
        "html",
        "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
      )
      .replace("tag", E._tag)
      .getRegex()),
    (E.pedantic = y({}, E.normal, {
      html: d(
        "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
      )
        .replace("comment", E._comment)
        .replace(
          /tag/g,
          "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: w,
      paragraph: d(E.normal._paragraph)
        .replace("hr", E.hr)
        .replace("heading", " *#{1,6} *[^\n]")
        .replace("lheading", E.lheading)
        .replace("blockquote", " {0,3}>")
        .replace("|fences", "")
        .replace("|list", "")
        .replace("|html", "")
        .getRegex(),
    }));
  const $ = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: w,
    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: "reflink|nolink(?!\\()",
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      rDelimAst:
        /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
      rDelimUnd:
        /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: w,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/,
  };
  function L(t) {
    return t
      .replace(/---/g, "—")
      .replace(/--/g, "–")
      .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
      .replace(/'/g, "’")
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
      .replace(/"/g, "”")
      .replace(/\.{3}/g, "…");
  }
  function R(t) {
    let e,
      n,
      r = "";
    const i = t.length;
    for (e = 0; e < i; e++)
      (n = t.charCodeAt(e)),
        Math.random() > 0.5 && (n = "x" + n.toString(16)),
        (r += "&#" + n + ";");
    return r;
  }
  ($._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"),
    ($.punctuation = d($.punctuation)
      .replace(/punctuation/g, $._punctuation)
      .getRegex()),
    ($.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
    ($.escapedEmSt = /\\\*|\\_/g),
    ($._comment = d(E._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex()),
    ($.emStrong.lDelim = d($.emStrong.lDelim)
      .replace(/punct/g, $._punctuation)
      .getRegex()),
    ($.emStrong.rDelimAst = d($.emStrong.rDelimAst, "g")
      .replace(/punct/g, $._punctuation)
      .getRegex()),
    ($.emStrong.rDelimUnd = d($.emStrong.rDelimUnd, "g")
      .replace(/punct/g, $._punctuation)
      .getRegex()),
    ($._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
    ($._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
    ($._email =
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
    ($.autolink = d($.autolink)
      .replace("scheme", $._scheme)
      .replace("email", $._email)
      .getRegex()),
    ($._attribute =
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
    ($.tag = d($.tag)
      .replace("comment", $._comment)
      .replace("attribute", $._attribute)
      .getRegex()),
    ($._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
    ($._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
    ($._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
    ($.link = d($.link)
      .replace("label", $._label)
      .replace("href", $._href)
      .replace("title", $._title)
      .getRegex()),
    ($.reflink = d($.reflink)
      .replace("label", $._label)
      .replace("ref", E._label)
      .getRegex()),
    ($.nolink = d($.nolink).replace("ref", E._label).getRegex()),
    ($.reflinkSearch = d($.reflinkSearch, "g")
      .replace("reflink", $.reflink)
      .replace("nolink", $.nolink)
      .getRegex()),
    ($.normal = y({}, $)),
    ($.pedantic = y({}, $.normal, {
      strong: {
        start: /^__|\*\*/,
        middle:
          /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g,
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g,
      },
      link: d(/^!?\[(label)\]\((.*?)\)/)
        .replace("label", $._label)
        .getRegex(),
      reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace("label", $._label)
        .getRegex(),
    })),
    ($.gfm = y({}, $.normal, {
      escape: d($.escape).replace("])", "~|])").getRegex(),
      _extended_email:
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal:
        /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    })),
    ($.gfm.url = d($.gfm.url, "i")
      .replace("email", $.gfm._extended_email)
      .getRegex()),
    ($.breaks = y({}, $.gfm, {
      br: d($.br).replace("{2,}", "*").getRegex(),
      text: d($.gfm.text)
        .replace("\\b_", "\\b_| {2,}\\n")
        .replace(/\{2,\}/g, "*")
        .getRegex(),
    }));
  class I {
    constructor(t) {
      (this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = t || e),
        (this.options.tokenizer = this.options.tokenizer || new A()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options),
        (this.tokenizer.lexer = this),
        (this.inlineQueue = []),
        (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
      const n = { block: E.normal, inline: $.normal };
      this.options.pedantic
        ? ((n.block = E.pedantic), (n.inline = $.pedantic))
        : this.options.gfm &&
          ((n.block = E.gfm),
          this.options.breaks ? (n.inline = $.breaks) : (n.inline = $.gfm)),
        (this.tokenizer.rules = n);
    }
    static get rules() {
      return { block: E, inline: $ };
    }
    static lex(t, e) {
      return new I(e).lex(t);
    }
    static lexInline(t, e) {
      return new I(e).inlineTokens(t);
    }
    lex(t) {
      let e;
      for (
        t = t.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "),
          this.blockTokens(t, this.tokens);
        (e = this.inlineQueue.shift());

      )
        this.inlineTokens(e.src, e.tokens);
      return this.tokens;
    }
    blockTokens(t, e = []) {
      let n, r, i, s;
      for (this.options.pedantic && (t = t.replace(/^ +$/gm, "")); t; )
        if (
          !(
            this.options.extensions &&
            this.options.extensions.block &&
            this.options.extensions.block.some(
              (r) =>
                !!(n = r.call({ lexer: this }, t, e)) &&
                ((t = t.substring(n.raw.length)), e.push(n), !0)
            )
          )
        )
          if ((n = this.tokenizer.space(t)))
            (t = t.substring(n.raw.length)),
              1 === n.raw.length && e.length > 0
                ? (e[e.length - 1].raw += "\n")
                : e.push(n);
          else if ((n = this.tokenizer.code(t)))
            (t = t.substring(n.raw.length)),
              (r = e[e.length - 1]),
              !r || ("paragraph" !== r.type && "text" !== r.type)
                ? e.push(n)
                : ((r.raw += "\n" + n.raw),
                  (r.text += "\n" + n.text),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = r.text));
          else if ((n = this.tokenizer.fences(t)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if ((n = this.tokenizer.heading(t)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if ((n = this.tokenizer.hr(t)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if ((n = this.tokenizer.blockquote(t)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if ((n = this.tokenizer.list(t)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if ((n = this.tokenizer.html(t)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if ((n = this.tokenizer.def(t)))
            (t = t.substring(n.raw.length)),
              (r = e[e.length - 1]),
              !r || ("paragraph" !== r.type && "text" !== r.type)
                ? this.tokens.links[n.tag] ||
                  (this.tokens.links[n.tag] = { href: n.href, title: n.title })
                : ((r.raw += "\n" + n.raw),
                  (r.text += "\n" + n.raw),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = r.text));
          else if ((n = this.tokenizer.table(t)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if ((n = this.tokenizer.lheading(t)))
            (t = t.substring(n.raw.length)), e.push(n);
          else {
            if (
              ((i = t),
              this.options.extensions && this.options.extensions.startBlock)
            ) {
              let e = 1 / 0;
              const n = t.slice(1);
              let r;
              this.options.extensions.startBlock.forEach(function (t) {
                (r = t.call({ lexer: this }, n)),
                  "number" == typeof r && r >= 0 && (e = Math.min(e, r));
              }),
                e < 1 / 0 && e >= 0 && (i = t.substring(0, e + 1));
            }
            if (this.state.top && (n = this.tokenizer.paragraph(i)))
              (r = e[e.length - 1]),
                s && "paragraph" === r.type
                  ? ((r.raw += "\n" + n.raw),
                    (r.text += "\n" + n.text),
                    this.inlineQueue.pop(),
                    (this.inlineQueue[this.inlineQueue.length - 1].src =
                      r.text))
                  : e.push(n),
                (s = i.length !== t.length),
                (t = t.substring(n.raw.length));
            else if ((n = this.tokenizer.text(t)))
              (t = t.substring(n.raw.length)),
                (r = e[e.length - 1]),
                r && "text" === r.type
                  ? ((r.raw += "\n" + n.raw),
                    (r.text += "\n" + n.text),
                    this.inlineQueue.pop(),
                    (this.inlineQueue[this.inlineQueue.length - 1].src =
                      r.text))
                  : e.push(n);
            else if (t) {
              const e = "Infinite loop on byte: " + t.charCodeAt(0);
              if (this.options.silent) {
                console.error(e);
                break;
              }
              throw new Error(e);
            }
          }
      return (this.state.top = !0), e;
    }
    inline(t, e) {
      this.inlineQueue.push({ src: t, tokens: e });
    }
    inlineTokens(t, e = []) {
      let n,
        r,
        i,
        s,
        a,
        l,
        o = t;
      if (this.tokens.links) {
        const t = Object.keys(this.tokens.links);
        if (t.length > 0)
          for (
            ;
            null != (s = this.tokenizer.rules.inline.reflinkSearch.exec(o));

          )
            t.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) &&
              (o =
                o.slice(0, s.index) +
                "[" +
                _("a", s[0].length - 2) +
                "]" +
                o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; null != (s = this.tokenizer.rules.inline.blockSkip.exec(o)); )
        o =
          o.slice(0, s.index) +
          "[" +
          _("a", s[0].length - 2) +
          "]" +
          o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      for (; null != (s = this.tokenizer.rules.inline.escapedEmSt.exec(o)); )
        o =
          o.slice(0, s.index) +
          "++" +
          o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
      for (; t; )
        if (
          (a || (l = ""),
          (a = !1),
          !(
            this.options.extensions &&
            this.options.extensions.inline &&
            this.options.extensions.inline.some(
              (r) =>
                !!(n = r.call({ lexer: this }, t, e)) &&
                ((t = t.substring(n.raw.length)), e.push(n), !0)
            )
          ))
        )
          if ((n = this.tokenizer.escape(t)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if ((n = this.tokenizer.tag(t)))
            (t = t.substring(n.raw.length)),
              (r = e[e.length - 1]),
              r && "text" === n.type && "text" === r.type
                ? ((r.raw += n.raw), (r.text += n.text))
                : e.push(n);
          else if ((n = this.tokenizer.link(t)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if ((n = this.tokenizer.reflink(t, this.tokens.links)))
            (t = t.substring(n.raw.length)),
              (r = e[e.length - 1]),
              r && "text" === n.type && "text" === r.type
                ? ((r.raw += n.raw), (r.text += n.text))
                : e.push(n);
          else if ((n = this.tokenizer.emStrong(t, o, l)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if ((n = this.tokenizer.codespan(t)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if ((n = this.tokenizer.br(t)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if ((n = this.tokenizer.del(t)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if ((n = this.tokenizer.autolink(t, R)))
            (t = t.substring(n.raw.length)), e.push(n);
          else if (this.state.inLink || !(n = this.tokenizer.url(t, R))) {
            if (
              ((i = t),
              this.options.extensions && this.options.extensions.startInline)
            ) {
              let e = 1 / 0;
              const n = t.slice(1);
              let r;
              this.options.extensions.startInline.forEach(function (t) {
                (r = t.call({ lexer: this }, n)),
                  "number" == typeof r && r >= 0 && (e = Math.min(e, r));
              }),
                e < 1 / 0 && e >= 0 && (i = t.substring(0, e + 1));
            }
            if ((n = this.tokenizer.inlineText(i, L)))
              (t = t.substring(n.raw.length)),
                "_" !== n.raw.slice(-1) && (l = n.raw.slice(-1)),
                (a = !0),
                (r = e[e.length - 1]),
                r && "text" === r.type
                  ? ((r.raw += n.raw), (r.text += n.text))
                  : e.push(n);
            else if (t) {
              const e = "Infinite loop on byte: " + t.charCodeAt(0);
              if (this.options.silent) {
                console.error(e);
                break;
              }
              throw new Error(e);
            }
          } else (t = t.substring(n.raw.length)), e.push(n);
      return e;
    }
  }
  class C {
    constructor(t) {
      this.options = t || e;
    }
    code(t, e, n) {
      const r = (e || "").match(/\S*/)[0];
      if (this.options.highlight) {
        const e = this.options.highlight(t, r);
        null != e && e !== t && ((n = !0), (t = e));
      }
      return (
        (t = t.replace(/\n$/, "") + "\n"),
        r
          ? '<pre><code class="' +
            this.options.langPrefix +
            o(r, !0) +
            '">' +
            (n ? t : o(t, !0)) +
            "</code></pre>\n"
          : "<pre><code>" + (n ? t : o(t, !0)) + "</code></pre>\n"
      );
    }
    blockquote(t) {
      return "<blockquote>\n" + t + "</blockquote>\n";
    }
    html(t) {
      return t;
    }
    heading(t, e, n, r) {
      return this.options.headerIds
        ? "<h" +
            e +
            ' id="' +
            this.options.headerPrefix +
            r.slug(n) +
            '">' +
            t +
            "</h" +
            e +
            ">\n"
        : "<h" + e + ">" + t + "</h" + e + ">\n";
    }
    hr() {
      return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
    }
    list(t, e, n) {
      const r = e ? "ol" : "ul";
      return (
        "<" +
        r +
        (e && 1 !== n ? ' start="' + n + '"' : "") +
        ">\n" +
        t +
        "</" +
        r +
        ">\n"
      );
    }
    listitem(t) {
      return "<li>" + t + "</li>\n";
    }
    checkbox(t) {
      return (
        "<input " +
        (t ? 'checked="" ' : "") +
        'disabled="" type="checkbox"' +
        (this.options.xhtml ? " /" : "") +
        "> "
      );
    }
    paragraph(t) {
      return "<p>" + t + "</p>\n";
    }
    table(t, e) {
      return (
        e && (e = "<tbody>" + e + "</tbody>"),
        "<table>\n<thead>\n" + t + "</thead>\n" + e + "</table>\n"
      );
    }
    tablerow(t) {
      return "<tr>\n" + t + "</tr>\n";
    }
    tablecell(t, e) {
      const n = e.header ? "th" : "td";
      return (
        (e.align ? "<" + n + ' align="' + e.align + '">' : "<" + n + ">") +
        t +
        "</" +
        n +
        ">\n"
      );
    }
    strong(t) {
      return "<strong>" + t + "</strong>";
    }
    em(t) {
      return "<em>" + t + "</em>";
    }
    codespan(t) {
      return "<code>" + t + "</code>";
    }
    br() {
      return this.options.xhtml ? "<br/>" : "<br>";
    }
    del(t) {
      return "<del>" + t + "</del>";
    }
    link(t, e, n) {
      if (null === (t = m(this.options.sanitize, this.options.baseUrl, t)))
        return n;
      let r = '<a href="' + o(t) + '"';
      return e && (r += ' title="' + e + '"'), (r += ">" + n + "</a>"), r;
    }
    image(t, e, n) {
      if (null === (t = m(this.options.sanitize, this.options.baseUrl, t)))
        return n;
      let r = '<img src="' + t + '" alt="' + n + '"';
      return (
        e && (r += ' title="' + e + '"'),
        (r += this.options.xhtml ? "/>" : ">"),
        r
      );
    }
    text(t) {
      return t;
    }
  }
  class M {
    strong(t) {
      return t;
    }
    em(t) {
      return t;
    }
    codespan(t) {
      return t;
    }
    del(t) {
      return t;
    }
    html(t) {
      return t;
    }
    text(t) {
      return t;
    }
    link(t, e, n) {
      return "" + n;
    }
    image(t, e, n) {
      return "" + n;
    }
    br() {
      return "";
    }
  }
  class q {
    constructor() {
      this.seen = {};
    }
    serialize(t) {
      return t
        .toLowerCase()
        .trim()
        .replace(/<[!\/a-z].*?>/gi, "")
        .replace(
          /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
          ""
        )
        .replace(/\s/g, "-");
    }
    getNextSafeSlug(t, e) {
      let n = t,
        r = 0;
      if (this.seen.hasOwnProperty(n)) {
        r = this.seen[t];
        do {
          r++, (n = t + "-" + r);
        } while (this.seen.hasOwnProperty(n));
      }
      return e || ((this.seen[t] = r), (this.seen[n] = 0)), n;
    }
    slug(t, e = {}) {
      const n = this.serialize(t);
      return this.getNextSafeSlug(n, e.dryrun);
    }
  }
  class O {
    constructor(t) {
      (this.options = t || e),
        (this.options.renderer = this.options.renderer || new C()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.textRenderer = new M()),
        (this.slugger = new q());
    }
    static parse(t, e) {
      return new O(e).parse(t);
    }
    static parseInline(t, e) {
      return new O(e).parseInline(t);
    }
    parse(t, e = !0) {
      let n,
        r,
        i,
        s,
        a,
        l,
        o,
        c,
        u,
        d,
        h,
        g,
        m,
        f,
        k,
        x,
        b,
        w,
        y,
        v = "";
      const S = t.length;
      for (n = 0; n < S; n++)
        if (
          ((d = t[n]),
          this.options.extensions &&
            this.options.extensions.renderers &&
            this.options.extensions.renderers[d.type] &&
            ((y = this.options.extensions.renderers[d.type].call(
              { parser: this },
              d
            )),
            !1 !== y ||
              ![
                "space",
                "hr",
                "heading",
                "code",
                "table",
                "blockquote",
                "list",
                "html",
                "paragraph",
                "text",
              ].includes(d.type)))
        )
          v += y || "";
        else
          switch (d.type) {
            case "space":
              continue;
            case "hr":
              v += this.renderer.hr();
              continue;
            case "heading":
              v += this.renderer.heading(
                this.parseInline(d.tokens),
                d.depth,
                p(this.parseInline(d.tokens, this.textRenderer)),
                this.slugger
              );
              continue;
            case "code":
              v += this.renderer.code(d.text, d.lang, d.escaped);
              continue;
            case "table":
              for (c = "", o = "", s = d.header.length, r = 0; r < s; r++)
                o += this.renderer.tablecell(
                  this.parseInline(d.header[r].tokens),
                  { header: !0, align: d.align[r] }
                );
              for (
                c += this.renderer.tablerow(o),
                  u = "",
                  s = d.rows.length,
                  r = 0;
                r < s;
                r++
              ) {
                for (l = d.rows[r], o = "", a = l.length, i = 0; i < a; i++)
                  o += this.renderer.tablecell(this.parseInline(l[i].tokens), {
                    header: !1,
                    align: d.align[i],
                  });
                u += this.renderer.tablerow(o);
              }
              v += this.renderer.table(c, u);
              continue;
            case "blockquote":
              (u = this.parse(d.tokens)), (v += this.renderer.blockquote(u));
              continue;
            case "list":
              for (
                h = d.ordered,
                  g = d.start,
                  m = d.loose,
                  s = d.items.length,
                  u = "",
                  r = 0;
                r < s;
                r++
              )
                (k = d.items[r]),
                  (x = k.checked),
                  (b = k.task),
                  (f = ""),
                  k.task &&
                    ((w = this.renderer.checkbox(x)),
                    m
                      ? k.tokens.length > 0 && "paragraph" === k.tokens[0].type
                        ? ((k.tokens[0].text = w + " " + k.tokens[0].text),
                          k.tokens[0].tokens &&
                            k.tokens[0].tokens.length > 0 &&
                            "text" === k.tokens[0].tokens[0].type &&
                            (k.tokens[0].tokens[0].text =
                              w + " " + k.tokens[0].tokens[0].text))
                        : k.tokens.unshift({ type: "text", text: w })
                      : (f += w)),
                  (f += this.parse(k.tokens, m)),
                  (u += this.renderer.listitem(f, b, x));
              v += this.renderer.list(u, h, g);
              continue;
            case "html":
              v += this.renderer.html(d.text);
              continue;
            case "paragraph":
              v += this.renderer.paragraph(this.parseInline(d.tokens));
              continue;
            case "text":
              for (
                u = d.tokens ? this.parseInline(d.tokens) : d.text;
                n + 1 < S && "text" === t[n + 1].type;

              )
                (d = t[++n]),
                  (u +=
                    "\n" + (d.tokens ? this.parseInline(d.tokens) : d.text));
              v += e ? this.renderer.paragraph(u) : u;
              continue;
            default: {
              const t = 'Token with "' + d.type + '" type was not found.';
              if (this.options.silent) return void console.error(t);
              throw new Error(t);
            }
          }
      return v;
    }
    parseInline(t, e) {
      e = e || this.renderer;
      let n,
        r,
        i,
        s = "";
      const a = t.length;
      for (n = 0; n < a; n++)
        if (
          ((r = t[n]),
          this.options.extensions &&
            this.options.extensions.renderers &&
            this.options.extensions.renderers[r.type] &&
            ((i = this.options.extensions.renderers[r.type].call(
              { parser: this },
              r
            )),
            !1 !== i ||
              ![
                "escape",
                "html",
                "link",
                "image",
                "strong",
                "em",
                "codespan",
                "br",
                "del",
                "text",
              ].includes(r.type)))
        )
          s += i || "";
        else
          switch (r.type) {
            case "escape":
              s += e.text(r.text);
              break;
            case "html":
              s += e.html(r.text);
              break;
            case "link":
              s += e.link(r.href, r.title, this.parseInline(r.tokens, e));
              break;
            case "image":
              s += e.image(r.href, r.title, r.text);
              break;
            case "strong":
              s += e.strong(this.parseInline(r.tokens, e));
              break;
            case "em":
              s += e.em(this.parseInline(r.tokens, e));
              break;
            case "codespan":
              s += e.codespan(r.text);
              break;
            case "br":
              s += e.br();
              break;
            case "del":
              s += e.del(this.parseInline(r.tokens, e));
              break;
            case "text":
              s += e.text(r.text);
              break;
            default: {
              const t = 'Token with "' + r.type + '" type was not found.';
              if (this.options.silent) return void console.error(t);
              throw new Error(t);
            }
          }
      return s;
    }
  }
  function N(t, e, n) {
    if (null == t)
      throw new Error("marked(): input parameter is undefined or null");
    if ("string" != typeof t)
      throw new Error(
        "marked(): input parameter is of type " +
          Object.prototype.toString.call(t) +
          ", string expected"
      );
    if (
      ("function" == typeof e && ((n = e), (e = null)),
      T((e = y({}, N.defaults, e || {}))),
      n)
    ) {
      const r = e.highlight;
      let i;
      try {
        i = I.lex(t, e);
      } catch (t) {
        return n(t);
      }
      const s = function (t) {
        let s;
        if (!t)
          try {
            e.walkTokens && N.walkTokens(i, e.walkTokens), (s = O.parse(i, e));
          } catch (e) {
            t = e;
          }
        return (e.highlight = r), t ? n(t) : n(null, s);
      };
      if (!r || r.length < 3) return s();
      if ((delete e.highlight, !i.length)) return s();
      let a = 0;
      return (
        N.walkTokens(i, function (t) {
          "code" === t.type &&
            (a++,
            setTimeout(() => {
              r(t.text, t.lang, function (e, n) {
                if (e) return s(e);
                null != n && n !== t.text && ((t.text = n), (t.escaped = !0)),
                  a--,
                  0 === a && s();
              });
            }, 0));
        }),
        void (0 === a && s())
      );
    }
    try {
      const n = I.lex(t, e);
      return e.walkTokens && N.walkTokens(n, e.walkTokens), O.parse(n, e);
    } catch (t) {
      if (
        ((t.message +=
          "\nPlease report this to https://github.com/markedjs/marked."),
        e.silent)
      )
        return (
          "<p>An error occurred:</p><pre>" + o(t.message + "", !0) + "</pre>"
        );
      throw t;
    }
  }
  (N.options = N.setOptions =
    function (t) {
      var n;
      return y(N.defaults, t), (n = N.defaults), (e = n), N;
    }),
    (N.getDefaults = t),
    (N.defaults = e),
    (N.use = function (...t) {
      const e = y({}, ...t),
        n = N.defaults.extensions || { renderers: {}, childTokens: {} };
      let r;
      t.forEach((t) => {
        if (
          (t.extensions &&
            ((r = !0),
            t.extensions.forEach((t) => {
              if (!t.name) throw new Error("extension name required");
              if (t.renderer) {
                const e = n.renderers ? n.renderers[t.name] : null;
                n.renderers[t.name] = e
                  ? function (...n) {
                      let r = t.renderer.apply(this, n);
                      return !1 === r && (r = e.apply(this, n)), r;
                    }
                  : t.renderer;
              }
              if (t.tokenizer) {
                if (!t.level || ("block" !== t.level && "inline" !== t.level))
                  throw new Error(
                    "extension level must be 'block' or 'inline'"
                  );
                n[t.level]
                  ? n[t.level].unshift(t.tokenizer)
                  : (n[t.level] = [t.tokenizer]),
                  t.start &&
                    ("block" === t.level
                      ? n.startBlock
                        ? n.startBlock.push(t.start)
                        : (n.startBlock = [t.start])
                      : "inline" === t.level &&
                        (n.startInline
                          ? n.startInline.push(t.start)
                          : (n.startInline = [t.start])));
              }
              t.childTokens && (n.childTokens[t.name] = t.childTokens);
            })),
          t.renderer)
        ) {
          const n = N.defaults.renderer || new C();
          for (const e in t.renderer) {
            const r = n[e];
            n[e] = (...i) => {
              let s = t.renderer[e].apply(n, i);
              return !1 === s && (s = r.apply(n, i)), s;
            };
          }
          e.renderer = n;
        }
        if (t.tokenizer) {
          const n = N.defaults.tokenizer || new A();
          for (const e in t.tokenizer) {
            const r = n[e];
            n[e] = (...i) => {
              let s = t.tokenizer[e].apply(n, i);
              return !1 === s && (s = r.apply(n, i)), s;
            };
          }
          e.tokenizer = n;
        }
        if (t.walkTokens) {
          const n = N.defaults.walkTokens;
          e.walkTokens = function (e) {
            t.walkTokens.call(this, e), n && n.call(this, e);
          };
        }
        r && (e.extensions = n), N.setOptions(e);
      });
    }),
    (N.walkTokens = function (t, e) {
      for (const n of t)
        switch ((e.call(N, n), n.type)) {
          case "table":
            for (const t of n.header) N.walkTokens(t.tokens, e);
            for (const t of n.rows)
              for (const n of t) N.walkTokens(n.tokens, e);
            break;
          case "list":
            N.walkTokens(n.items, e);
            break;
          default:
            N.defaults.extensions &&
            N.defaults.extensions.childTokens &&
            N.defaults.extensions.childTokens[n.type]
              ? N.defaults.extensions.childTokens[n.type].forEach(function (t) {
                  N.walkTokens(n[t], e);
                })
              : n.tokens && N.walkTokens(n.tokens, e);
        }
    }),
    (N.parseInline = function (t, e) {
      if (null == t)
        throw new Error(
          "marked.parseInline(): input parameter is undefined or null"
        );
      if ("string" != typeof t)
        throw new Error(
          "marked.parseInline(): input parameter is of type " +
            Object.prototype.toString.call(t) +
            ", string expected"
        );
      T((e = y({}, N.defaults, e || {})));
      try {
        const n = I.lexInline(t, e);
        return (
          e.walkTokens && N.walkTokens(n, e.walkTokens), O.parseInline(n, e)
        );
      } catch (t) {
        if (
          ((t.message +=
            "\nPlease report this to https://github.com/markedjs/marked."),
          e.silent)
        )
          return (
            "<p>An error occurred:</p><pre>" + o(t.message + "", !0) + "</pre>"
          );
        throw t;
      }
    }),
    (N.Parser = O),
    (N.parser = O.parse),
    (N.Renderer = C),
    (N.TextRenderer = M),
    (N.Lexer = I),
    (N.lexer = I.lex),
    (N.Tokenizer = A),
    (N.Slugger = q),
    (N.parse = N);
  return () => {
    let t,
      e,
      n = null;
    function r() {
      if (n && !n.closed) n.focus();
      else {
        if (
          ((n = window.open(
            "about:blank",
            "reveal.js - Notes",
            "width=1100,height=700"
          )),
          (n.marked = N),
          n.document.write(
            "\x3c!--\r\n\tNOTE: You need to build the notes plugin after making changes to this file.\r\n--\x3e\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\">\r\n\r\n\t\t<title>reveal.js - Speaker View</title>\r\n\r\n\t\t<style>\r\n\t\t\tbody {\r\n\t\t\t\tfont-family: Helvetica;\r\n\t\t\t\tfont-size: 18px;\r\n\t\t\t}\r\n\r\n\t\t\t#current-slide,\r\n\t\t\t#upcoming-slide,\r\n\t\t\t#speaker-controls {\r\n\t\t\t\tpadding: 6px;\r\n\t\t\t\tbox-sizing: border-box;\r\n\t\t\t\t-moz-box-sizing: border-box;\r\n\t\t\t}\r\n\r\n\t\t\t#current-slide iframe,\r\n\t\t\t#upcoming-slide iframe {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tborder: 1px solid #ddd;\r\n\t\t\t}\r\n\r\n\t\t\t#current-slide .label,\r\n\t\t\t#upcoming-slide .label {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 10px;\r\n\t\t\t\tleft: 10px;\r\n\t\t\t\tz-index: 2;\r\n\t\t\t}\r\n\r\n\t\t\t#connection-status {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tz-index: 20;\r\n\t\t\t\tpadding: 30% 20% 20% 20%;\r\n\t\t\t\tfont-size: 18px;\r\n\t\t\t\tcolor: #222;\r\n\t\t\t\tbackground: #fff;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t\tbox-sizing: border-box;\r\n\t\t\t\tline-height: 1.4;\r\n\t\t\t}\r\n\r\n\t\t\t.overlay-element {\r\n\t\t\t\theight: 34px;\r\n\t\t\t\tline-height: 34px;\r\n\t\t\t\tpadding: 0 10px;\r\n\t\t\t\ttext-shadow: none;\r\n\t\t\t\tbackground: rgba( 220, 220, 220, 0.8 );\r\n\t\t\t\tcolor: #222;\r\n\t\t\t\tfont-size: 14px;\r\n\t\t\t}\r\n\r\n\t\t\t.overlay-element.interactive:hover {\r\n\t\t\t\tbackground: rgba( 220, 220, 220, 1 );\r\n\t\t\t}\r\n\r\n\t\t\t#current-slide {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\twidth: 60%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\tpadding-right: 0;\r\n\t\t\t}\r\n\r\n\t\t\t#upcoming-slide {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\twidth: 40%;\r\n\t\t\t\theight: 40%;\r\n\t\t\t\tright: 0;\r\n\t\t\t\ttop: 0;\r\n\t\t\t}\r\n\r\n\t\t\t/* Speaker controls */\r\n\t\t\t#speaker-controls {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 40%;\r\n\t\t\t\tright: 0;\r\n\t\t\t\twidth: 40%;\r\n\t\t\t\theight: 60%;\r\n\t\t\t\toverflow: auto;\r\n\t\t\t\tfont-size: 18px;\r\n\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-time.hidden,\r\n\t\t\t\t.speaker-controls-notes.hidden {\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-time .label,\r\n\t\t\t\t.speaker-controls-pace .label,\r\n\t\t\t\t.speaker-controls-notes .label {\r\n\t\t\t\t\ttext-transform: uppercase;\r\n\t\t\t\t\tfont-weight: normal;\r\n\t\t\t\t\tfont-size: 0.66em;\r\n\t\t\t\t\tcolor: #666;\r\n\t\t\t\t\tmargin: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-time, .speaker-controls-pace {\r\n\t\t\t\t\tborder-bottom: 1px solid rgba( 200, 200, 200, 0.5 );\r\n\t\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\t\tpadding: 10px 16px;\r\n\t\t\t\t\tpadding-bottom: 20px;\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-time .reset-button {\r\n\t\t\t\t\topacity: 0;\r\n\t\t\t\t\tfloat: right;\r\n\t\t\t\t\tcolor: #666;\r\n\t\t\t\t\ttext-decoration: none;\r\n\t\t\t\t}\r\n\t\t\t\t.speaker-controls-time:hover .reset-button {\r\n\t\t\t\t\topacity: 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-time .timer,\r\n\t\t\t\t.speaker-controls-time .clock {\r\n\t\t\t\t\twidth: 50%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-time .timer,\r\n\t\t\t\t.speaker-controls-time .clock,\r\n\t\t\t\t.speaker-controls-time .pacing .hours-value,\r\n\t\t\t\t.speaker-controls-time .pacing .minutes-value,\r\n\t\t\t\t.speaker-controls-time .pacing .seconds-value {\r\n\t\t\t\t\tfont-size: 1.9em;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-time .timer {\r\n\t\t\t\t\tfloat: left;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-time .clock {\r\n\t\t\t\t\tfloat: right;\r\n\t\t\t\t\ttext-align: right;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-time span.mute {\r\n\t\t\t\t\topacity: 0.3;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-time .pacing-title {\r\n\t\t\t\t\tmargin-top: 5px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-time .pacing.ahead {\r\n\t\t\t\t\tcolor: blue;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-time .pacing.on-track {\r\n\t\t\t\t\tcolor: green;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-time .pacing.behind {\r\n\t\t\t\t\tcolor: red;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-notes {\r\n\t\t\t\t\tpadding: 10px 16px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.speaker-controls-notes .value {\r\n\t\t\t\t\tmargin-top: 5px;\r\n\t\t\t\t\tline-height: 1.4;\r\n\t\t\t\t\tfont-size: 1.2em;\r\n\t\t\t\t}\r\n\r\n\t\t\t/* Layout selector */\r\n\t\t\t#speaker-layout {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 10px;\r\n\t\t\t\tright: 10px;\r\n\t\t\t\tcolor: #222;\r\n\t\t\t\tz-index: 10;\r\n\t\t\t}\r\n\t\t\t\t#speaker-layout select {\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\theight: 100%;\r\n\t\t\t\t\ttop: 0;\r\n\t\t\t\t\tleft: 0;\r\n\t\t\t\t\tborder: 0;\r\n\t\t\t\t\tbox-shadow: 0;\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\topacity: 0;\r\n\r\n\t\t\t\t\tfont-size: 1em;\r\n\t\t\t\t\tbackground-color: transparent;\r\n\r\n\t\t\t\t\t-moz-appearance: none;\r\n\t\t\t\t\t-webkit-appearance: none;\r\n\t\t\t\t\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#speaker-layout select:focus {\r\n\t\t\t\t\toutline: none;\r\n\t\t\t\t\tbox-shadow: none;\r\n\t\t\t\t}\r\n\r\n\t\t\t.clear {\r\n\t\t\t\tclear: both;\r\n\t\t\t}\r\n\r\n\t\t\t/* Speaker layout: Wide */\r\n\t\t\tbody[data-speaker-layout=\"wide\"] #current-slide,\r\n\t\t\tbody[data-speaker-layout=\"wide\"] #upcoming-slide {\r\n\t\t\t\twidth: 50%;\r\n\t\t\t\theight: 45%;\r\n\t\t\t\tpadding: 6px;\r\n\t\t\t}\r\n\r\n\t\t\tbody[data-speaker-layout=\"wide\"] #current-slide {\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t}\r\n\r\n\t\t\tbody[data-speaker-layout=\"wide\"] #upcoming-slide {\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t}\r\n\r\n\t\t\tbody[data-speaker-layout=\"wide\"] #speaker-controls {\r\n\t\t\t\ttop: 45%;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 50%;\r\n\t\t\t\tfont-size: 1.25em;\r\n\t\t\t}\r\n\r\n\t\t\t/* Speaker layout: Tall */\r\n\t\t\tbody[data-speaker-layout=\"tall\"] #current-slide,\r\n\t\t\tbody[data-speaker-layout=\"tall\"] #upcoming-slide {\r\n\t\t\t\twidth: 45%;\r\n\t\t\t\theight: 50%;\r\n\t\t\t\tpadding: 6px;\r\n\t\t\t}\r\n\r\n\t\t\tbody[data-speaker-layout=\"tall\"] #current-slide {\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t}\r\n\r\n\t\t\tbody[data-speaker-layout=\"tall\"] #upcoming-slide {\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 0;\r\n\t\t\t}\r\n\r\n\t\t\tbody[data-speaker-layout=\"tall\"] #speaker-controls {\r\n\t\t\t\tpadding-top: 40px;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 45%;\r\n\t\t\t\twidth: 55%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tfont-size: 1.25em;\r\n\t\t\t}\r\n\r\n\t\t\t/* Speaker layout: Notes only */\r\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #current-slide,\r\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #upcoming-slide {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\r\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #speaker-controls {\r\n\t\t\t\tpadding-top: 40px;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tfont-size: 1.25em;\r\n\t\t\t}\r\n\r\n\t\t\t@media screen and (max-width: 1080px) {\r\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\r\n\t\t\t\t\tfont-size: 16px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t@media screen and (max-width: 900px) {\r\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\r\n\t\t\t\t\tfont-size: 14px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t@media screen and (max-width: 800px) {\r\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\r\n\t\t\t\t\tfont-size: 12px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t</style>\r\n\t</head>\r\n\r\n\t<body>\r\n\r\n\t\t<div id=\"connection-status\">Loading speaker view...</div>\r\n\r\n\t\t<div id=\"current-slide\"></div>\r\n\t\t<div id=\"upcoming-slide\"><span class=\"overlay-element label\">Upcoming</span></div>\r\n\t\t<div id=\"speaker-controls\">\r\n\t\t\t<div class=\"speaker-controls-time\">\r\n\t\t\t\t<h4 class=\"label\">Time <span class=\"reset-button\">Click to Reset</span></h4>\r\n\t\t\t\t<div class=\"clock\">\r\n\t\t\t\t\t<span class=\"clock-value\">0:00 AM</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"timer\">\r\n\t\t\t\t\t<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\r\n\t\t\t\t<h4 class=\"label pacing-title\" style=\"display: none\">Pacing – Time to finish current slide</h4>\r\n\t\t\t\t<div class=\"pacing\" style=\"display: none\">\r\n\t\t\t\t\t<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"speaker-controls-notes hidden\">\r\n\t\t\t\t<h4 class=\"label\">Notes</h4>\r\n\t\t\t\t<div class=\"value\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"speaker-layout\" class=\"overlay-element interactive\">\r\n\t\t\t<span class=\"speaker-layout-label\"></span>\r\n\t\t\t<select class=\"speaker-layout-dropdown\"></select>\r\n\t\t</div>\r\n\r\n\t\t<script>\r\n\r\n\t\t\t(function() {\r\n\r\n\t\t\t\tvar notes,\r\n\t\t\t\t\tnotesValue,\r\n\t\t\t\t\tcurrentState,\r\n\t\t\t\t\tcurrentSlide,\r\n\t\t\t\t\tupcomingSlide,\r\n\t\t\t\t\tlayoutLabel,\r\n\t\t\t\t\tlayoutDropdown,\r\n\t\t\t\t\tpendingCalls = {},\r\n\t\t\t\t\tlastRevealApiCallId = 0,\r\n\t\t\t\t\tconnected = false\r\n\r\n\t\t\t\tvar connectionStatus = document.querySelector( '#connection-status' );\r\n\r\n\t\t\t\tvar SPEAKER_LAYOUTS = {\r\n\t\t\t\t\t'default': 'Default',\r\n\t\t\t\t\t'wide': 'Wide',\r\n\t\t\t\t\t'tall': 'Tall',\r\n\t\t\t\t\t'notes-only': 'Notes only'\r\n\t\t\t\t};\r\n\r\n\t\t\t\tsetupLayout();\r\n\r\n\t\t\t\tlet openerOrigin;\r\n\r\n\t\t\t\ttry {\r\n\t\t\t\t\topenerOrigin = window.opener.location.origin;\r\n\t\t\t\t}\r\n\t\t\t\tcatch ( error ) { console.warn( error ) }\r\n\r\n\t\t\t\t// In order to prevent XSS, the speaker view will only run if its\r\n\t\t\t\t// opener has the same origin as itself\r\n\t\t\t\tif( window.location.origin !== openerOrigin ) {\r\n\t\t\t\t\tconnectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tvar connectionTimeout = setTimeout( function() {\r\n\t\t\t\t\tconnectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';\r\n\t\t\t\t}, 5000 );\r\n\r\n\t\t\t\twindow.addEventListener( 'message', function( event ) {\r\n\r\n\t\t\t\t\tclearTimeout( connectionTimeout );\r\n\t\t\t\t\tconnectionStatus.style.display = 'none';\r\n\r\n\t\t\t\t\tvar data = JSON.parse( event.data );\r\n\r\n\t\t\t\t\t// The overview mode is only useful to the reveal.js instance\r\n\t\t\t\t\t// where navigation occurs so we don't sync it\r\n\t\t\t\t\tif( data.state ) delete data.state.overview;\r\n\r\n\t\t\t\t\t// Messages sent by the notes plugin inside of the main window\r\n\t\t\t\t\tif( data && data.namespace === 'reveal-notes' ) {\r\n\t\t\t\t\t\tif( data.type === 'connect' ) {\r\n\t\t\t\t\t\t\thandleConnectMessage( data );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\telse if( data.type === 'state' ) {\r\n\t\t\t\t\t\t\thandleStateMessage( data );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\telse if( data.type === 'return' ) {\r\n\t\t\t\t\t\t\tpendingCalls[data.callId](data.result);\r\n\t\t\t\t\t\t\tdelete pendingCalls[data.callId];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t// Messages sent by the reveal.js inside of the current slide preview\r\n\t\t\t\t\telse if( data && data.namespace === 'reveal' ) {\r\n\t\t\t\t\t\tif( /ready/.test( data.eventName ) ) {\r\n\t\t\t\t\t\t\t// Send a message back to notify that the handshake is complete\r\n\t\t\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\telse if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {\r\n\r\n\t\t\t\t\t\t\tdispatchStateToMainWindow( data.state );\r\n\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t} );\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * Updates the presentation in the main window to match the state\r\n\t\t\t\t * of the presentation in the notes window.\r\n\t\t\t\t */\r\n\t\t\t\tconst dispatchStateToMainWindow = debounce(( state ) => {\r\n\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );\r\n\t\t\t\t}, 500);\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * Asynchronously calls the Reveal.js API of the main frame.\r\n\t\t\t\t */\r\n\t\t\t\tfunction callRevealApi( methodName, methodArguments, callback ) {\r\n\r\n\t\t\t\t\tvar callId = ++lastRevealApiCallId;\r\n\t\t\t\t\tpendingCalls[callId] = callback;\r\n\t\t\t\t\twindow.opener.postMessage( JSON.stringify( {\r\n\t\t\t\t\t\tnamespace: 'reveal-notes',\r\n\t\t\t\t\t\ttype: 'call',\r\n\t\t\t\t\t\tcallId: callId,\r\n\t\t\t\t\t\tmethodName: methodName,\r\n\t\t\t\t\t\targuments: methodArguments\r\n\t\t\t\t\t} ), '*' );\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * Called when the main window is trying to establish a\r\n\t\t\t\t * connection.\r\n\t\t\t\t */\r\n\t\t\t\tfunction handleConnectMessage( data ) {\r\n\r\n\t\t\t\t\tif( connected === false ) {\r\n\t\t\t\t\t\tconnected = true;\r\n\r\n\t\t\t\t\t\tsetupIframes( data );\r\n\t\t\t\t\t\tsetupKeyboard();\r\n\t\t\t\t\t\tsetupNotes();\r\n\t\t\t\t\t\tsetupTimer();\r\n\t\t\t\t\t\tsetupHeartbeat();\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * Called when the main window sends an updated state.\r\n\t\t\t\t */\r\n\t\t\t\tfunction handleStateMessage( data ) {\r\n\r\n\t\t\t\t\t// Store the most recently set state to avoid circular loops\r\n\t\t\t\t\t// applying the same state\r\n\t\t\t\t\tcurrentState = JSON.stringify( data.state );\r\n\r\n\t\t\t\t\t// No need for updating the notes in case of fragment changes\r\n\t\t\t\t\tif ( data.notes ) {\r\n\t\t\t\t\t\tnotes.classList.remove( 'hidden' );\r\n\t\t\t\t\t\tnotesValue.style.whiteSpace = data.whitespace;\r\n\t\t\t\t\t\tif( data.markdown ) {\r\n\t\t\t\t\t\t\tnotesValue.innerHTML = marked( data.notes );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\telse {\r\n\t\t\t\t\t\t\tnotesValue.innerHTML = data.notes;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse {\r\n\t\t\t\t\t\tnotes.classList.add( 'hidden' );\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t// Update the note slides\r\n\t\t\t\t\tcurrentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );\r\n\t\t\t\t\tupcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );\r\n\t\t\t\t\tupcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t// Limit to max one state update per X ms\r\n\t\t\t\thandleStateMessage = debounce( handleStateMessage, 200 );\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * Forward keyboard events to the current slide window.\r\n\t\t\t\t * This enables keyboard events to work even if focus\r\n\t\t\t\t * isn't set on the current slide iframe.\r\n\t\t\t\t *\r\n\t\t\t\t * Block F5 default handling, it reloads and disconnects\r\n\t\t\t\t * the speaker notes window.\r\n\t\t\t\t */\r\n\t\t\t\tfunction setupKeyboard() {\r\n\r\n\t\t\t\t\tdocument.addEventListener( 'keydown', function( event ) {\r\n\t\t\t\t\t\tif( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {\r\n\t\t\t\t\t\t\tevent.preventDefault();\r\n\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tcurrentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );\r\n\t\t\t\t\t} );\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * Creates the preview iframes.\r\n\t\t\t\t */\r\n\t\t\t\tfunction setupIframes( data ) {\r\n\r\n\t\t\t\t\tvar params = [\r\n\t\t\t\t\t\t'receiver',\r\n\t\t\t\t\t\t'progress=false',\r\n\t\t\t\t\t\t'history=false',\r\n\t\t\t\t\t\t'transition=none',\r\n\t\t\t\t\t\t'autoSlide=0',\r\n\t\t\t\t\t\t'backgroundTransition=none'\r\n\t\t\t\t\t].join( '&' );\r\n\r\n\t\t\t\t\tvar urlSeparator = /\\?/.test(data.url) ? '&' : '?';\r\n\t\t\t\t\tvar hash = '#/' + data.state.indexh + '/' + data.state.indexv;\r\n\t\t\t\t\tvar currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;\r\n\t\t\t\t\tvar upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;\r\n\r\n\t\t\t\t\tcurrentSlide = document.createElement( 'iframe' );\r\n\t\t\t\t\tcurrentSlide.setAttribute( 'width', 1280 );\r\n\t\t\t\t\tcurrentSlide.setAttribute( 'height', 1024 );\r\n\t\t\t\t\tcurrentSlide.setAttribute( 'src', currentURL );\r\n\t\t\t\t\tdocument.querySelector( '#current-slide' ).appendChild( currentSlide );\r\n\r\n\t\t\t\t\tupcomingSlide = document.createElement( 'iframe' );\r\n\t\t\t\t\tupcomingSlide.setAttribute( 'width', 640 );\r\n\t\t\t\t\tupcomingSlide.setAttribute( 'height', 512 );\r\n\t\t\t\t\tupcomingSlide.setAttribute( 'src', upcomingURL );\r\n\t\t\t\t\tdocument.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * Setup the notes UI.\r\n\t\t\t\t */\r\n\t\t\t\tfunction setupNotes() {\r\n\r\n\t\t\t\t\tnotes = document.querySelector( '.speaker-controls-notes' );\r\n\t\t\t\t\tnotesValue = document.querySelector( '.speaker-controls-notes .value' );\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * We send out a heartbeat at all times to ensure we can\r\n\t\t\t\t * reconnect with the main presentation window after reloads.\r\n\t\t\t\t */\r\n\t\t\t\tfunction setupHeartbeat() {\r\n\r\n\t\t\t\t\tsetInterval( () => {\r\n\t\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );\r\n\t\t\t\t\t}, 1000 );\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfunction getTimings( callback ) {\r\n\r\n\t\t\t\t\tcallRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {\r\n\t\t\t\t\t\tcallRevealApi( 'getConfig', [], function ( config ) {\r\n\t\t\t\t\t\t\tvar totalTime = config.totalTime;\r\n\t\t\t\t\t\t\tvar minTimePerSlide = config.minimumTimePerSlide || 0;\r\n\t\t\t\t\t\t\tvar defaultTiming = config.defaultTiming;\r\n\t\t\t\t\t\t\tif ((defaultTiming == null) && (totalTime == null)) {\r\n\t\t\t\t\t\t\t\tcallback(null);\r\n\t\t\t\t\t\t\t\treturn;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t// Setting totalTime overrides defaultTiming\r\n\t\t\t\t\t\t\tif (totalTime) {\r\n\t\t\t\t\t\t\t\tdefaultTiming = 0;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\tvar timings = [];\r\n\t\t\t\t\t\t\tfor ( var i in slideAttributes ) {\r\n\t\t\t\t\t\t\t\tvar slide = slideAttributes[ i ];\r\n\t\t\t\t\t\t\t\tvar timing = defaultTiming;\r\n\t\t\t\t\t\t\t\tif( slide.hasOwnProperty( 'data-timing' )) {\r\n\t\t\t\t\t\t\t\t\tvar t = slide[ 'data-timing' ];\r\n\t\t\t\t\t\t\t\t\ttiming = parseInt(t);\r\n\t\t\t\t\t\t\t\t\tif( isNaN(timing) ) {\r\n\t\t\t\t\t\t\t\t\t\tconsole.warn(\"Could not parse timing '\" + t + \"' of slide \" + i + \"; using default of \" + defaultTiming);\r\n\t\t\t\t\t\t\t\t\t\ttiming = defaultTiming;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\ttimings.push(timing);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\tif ( totalTime ) {\r\n\t\t\t\t\t\t\t\t// After we've allocated time to individual slides, we summarize it and\r\n\t\t\t\t\t\t\t\t// subtract it from the total time\r\n\t\t\t\t\t\t\t\tvar remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );\r\n\t\t\t\t\t\t\t\t// The remaining time is divided by the number of slides that have 0 seconds\r\n\t\t\t\t\t\t\t\t// allocated at the moment, giving the average time-per-slide on the remaining slides\r\n\t\t\t\t\t\t\t\tvar remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length\r\n\t\t\t\t\t\t\t\tvar timePerSlide = Math.round( remainingTime / remainingSlides, 0 )\r\n\t\t\t\t\t\t\t\t// And now we replace every zero-value timing with that average\r\n\t\t\t\t\t\t\t\ttimings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\tvar slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length\r\n\t\t\t\t\t\t\tif ( slidesUnderMinimum ) {\r\n\t\t\t\t\t\t\t\tmessage = \"The pacing time for \" + slidesUnderMinimum + \" slide(s) is under the configured minimum of \" + minTimePerSlide + \" seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).\";\r\n\t\t\t\t\t\t\t\talert(message);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\tcallback( timings );\r\n\t\t\t\t\t\t} );\r\n\t\t\t\t\t} );\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * Return the number of seconds allocated for presenting\r\n\t\t\t\t * all slides up to and including this one.\r\n\t\t\t\t */\r\n\t\t\t\tfunction getTimeAllocated( timings, callback ) {\r\n\r\n\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\r\n\t\t\t\t\t\tvar allocated = 0;\r\n\t\t\t\t\t\tfor (var i in timings.slice(0, currentSlide + 1)) {\r\n\t\t\t\t\t\t\tallocated += timings[i];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tcallback( allocated );\r\n\t\t\t\t\t} );\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * Create the timer and clock and start updating them\r\n\t\t\t\t * at an interval.\r\n\t\t\t\t */\r\n\t\t\t\tfunction setupTimer() {\r\n\r\n\t\t\t\t\tvar start = new Date(),\r\n\t\t\t\t\ttimeEl = document.querySelector( '.speaker-controls-time' ),\r\n\t\t\t\t\tclockEl = timeEl.querySelector( '.clock-value' ),\r\n\t\t\t\t\thoursEl = timeEl.querySelector( '.hours-value' ),\r\n\t\t\t\t\tminutesEl = timeEl.querySelector( '.minutes-value' ),\r\n\t\t\t\t\tsecondsEl = timeEl.querySelector( '.seconds-value' ),\r\n\t\t\t\t\tpacingTitleEl = timeEl.querySelector( '.pacing-title' ),\r\n\t\t\t\t\tpacingEl = timeEl.querySelector( '.pacing' ),\r\n\t\t\t\t\tpacingHoursEl = pacingEl.querySelector( '.hours-value' ),\r\n\t\t\t\t\tpacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),\r\n\t\t\t\t\tpacingSecondsEl = pacingEl.querySelector( '.seconds-value' );\r\n\r\n\t\t\t\t\tvar timings = null;\r\n\t\t\t\t\tgetTimings( function ( _timings ) {\r\n\r\n\t\t\t\t\t\ttimings = _timings;\r\n\t\t\t\t\t\tif (_timings !== null) {\r\n\t\t\t\t\t\t\tpacingTitleEl.style.removeProperty('display');\r\n\t\t\t\t\t\t\tpacingEl.style.removeProperty('display');\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t// Update once directly\r\n\t\t\t\t\t\t_updateTimer();\r\n\r\n\t\t\t\t\t\t// Then update every second\r\n\t\t\t\t\t\tsetInterval( _updateTimer, 1000 );\r\n\r\n\t\t\t\t\t} );\r\n\r\n\r\n\t\t\t\t\tfunction _resetTimer() {\r\n\r\n\t\t\t\t\t\tif (timings == null) {\r\n\t\t\t\t\t\t\tstart = new Date();\r\n\t\t\t\t\t\t\t_updateTimer();\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\telse {\r\n\t\t\t\t\t\t\t// Reset timer to beginning of current slide\r\n\t\t\t\t\t\t\tgetTimeAllocated( timings, function ( slideEndTimingSeconds ) {\r\n\t\t\t\t\t\t\t\tvar slideEndTiming = slideEndTimingSeconds * 1000;\r\n\t\t\t\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\r\n\t\t\t\t\t\t\t\t\tvar currentSlideTiming = timings[currentSlide] * 1000;\r\n\t\t\t\t\t\t\t\t\tvar previousSlidesTiming = slideEndTiming - currentSlideTiming;\r\n\t\t\t\t\t\t\t\t\tvar now = new Date();\r\n\t\t\t\t\t\t\t\t\tstart = new Date(now.getTime() - previousSlidesTiming);\r\n\t\t\t\t\t\t\t\t\t_updateTimer();\r\n\t\t\t\t\t\t\t\t} );\r\n\t\t\t\t\t\t\t} );\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\ttimeEl.addEventListener( 'click', function() {\r\n\t\t\t\t\t\t_resetTimer();\r\n\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t} );\r\n\r\n\t\t\t\t\tfunction _displayTime( hrEl, minEl, secEl, time) {\r\n\r\n\t\t\t\t\t\tvar sign = Math.sign(time) == -1 ? \"-\" : \"\";\r\n\t\t\t\t\t\ttime = Math.abs(Math.round(time / 1000));\r\n\t\t\t\t\t\tvar seconds = time % 60;\r\n\t\t\t\t\t\tvar minutes = Math.floor( time / 60 ) % 60 ;\r\n\t\t\t\t\t\tvar hours = Math.floor( time / ( 60 * 60 )) ;\r\n\t\t\t\t\t\thrEl.innerHTML = sign + zeroPadInteger( hours );\r\n\t\t\t\t\t\tif (hours == 0) {\r\n\t\t\t\t\t\t\thrEl.classList.add( 'mute' );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\telse {\r\n\t\t\t\t\t\t\thrEl.classList.remove( 'mute' );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tminEl.innerHTML = ':' + zeroPadInteger( minutes );\r\n\t\t\t\t\t\tif (hours == 0 && minutes == 0) {\r\n\t\t\t\t\t\t\tminEl.classList.add( 'mute' );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\telse {\r\n\t\t\t\t\t\t\tminEl.classList.remove( 'mute' );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tsecEl.innerHTML = ':' + zeroPadInteger( seconds );\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tfunction _updateTimer() {\r\n\r\n\t\t\t\t\t\tvar diff, hours, minutes, seconds,\r\n\t\t\t\t\t\tnow = new Date();\r\n\r\n\t\t\t\t\t\tdiff = now.getTime() - start.getTime();\r\n\r\n\t\t\t\t\t\tclockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );\r\n\t\t\t\t\t\t_displayTime( hoursEl, minutesEl, secondsEl, diff );\r\n\t\t\t\t\t\tif (timings !== null) {\r\n\t\t\t\t\t\t\t_updatePacing(diff);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tfunction _updatePacing(diff) {\r\n\r\n\t\t\t\t\t\tgetTimeAllocated( timings, function ( slideEndTimingSeconds ) {\r\n\t\t\t\t\t\t\tvar slideEndTiming = slideEndTimingSeconds * 1000;\r\n\r\n\t\t\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\r\n\t\t\t\t\t\t\t\tvar currentSlideTiming = timings[currentSlide] * 1000;\r\n\t\t\t\t\t\t\t\tvar timeLeftCurrentSlide = slideEndTiming - diff;\r\n\t\t\t\t\t\t\t\tif (timeLeftCurrentSlide < 0) {\r\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing behind';\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\telse if (timeLeftCurrentSlide < currentSlideTiming) {\r\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing on-track';\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\telse {\r\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing ahead';\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );\r\n\t\t\t\t\t\t\t} );\r\n\t\t\t\t\t\t} );\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * Sets up the speaker view layout and layout selector.\r\n\t\t\t\t */\r\n\t\t\t\tfunction setupLayout() {\r\n\r\n\t\t\t\t\tlayoutDropdown = document.querySelector( '.speaker-layout-dropdown' );\r\n\t\t\t\t\tlayoutLabel = document.querySelector( '.speaker-layout-label' );\r\n\r\n\t\t\t\t\t// Render the list of available layouts\r\n\t\t\t\t\tfor( var id in SPEAKER_LAYOUTS ) {\r\n\t\t\t\t\t\tvar option = document.createElement( 'option' );\r\n\t\t\t\t\t\toption.setAttribute( 'value', id );\r\n\t\t\t\t\t\toption.textContent = SPEAKER_LAYOUTS[ id ];\r\n\t\t\t\t\t\tlayoutDropdown.appendChild( option );\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t// Monitor the dropdown for changes\r\n\t\t\t\t\tlayoutDropdown.addEventListener( 'change', function( event ) {\r\n\r\n\t\t\t\t\t\tsetLayout( layoutDropdown.value );\r\n\r\n\t\t\t\t\t}, false );\r\n\r\n\t\t\t\t\t// Restore any currently persisted layout\r\n\t\t\t\t\tsetLayout( getLayout() );\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * Sets a new speaker view layout. The layout is persisted\r\n\t\t\t\t * in local storage.\r\n\t\t\t\t */\r\n\t\t\t\tfunction setLayout( value ) {\r\n\r\n\t\t\t\t\tvar title = SPEAKER_LAYOUTS[ value ];\r\n\r\n\t\t\t\t\tlayoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );\r\n\t\t\t\t\tlayoutDropdown.value = value;\r\n\r\n\t\t\t\t\tdocument.body.setAttribute( 'data-speaker-layout', value );\r\n\r\n\t\t\t\t\t// Persist locally\r\n\t\t\t\t\tif( supportsLocalStorage() ) {\r\n\t\t\t\t\t\twindow.localStorage.setItem( 'reveal-speaker-layout', value );\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * Returns the ID of the most recently set speaker layout\r\n\t\t\t\t * or our default layout if none has been set.\r\n\t\t\t\t */\r\n\t\t\t\tfunction getLayout() {\r\n\r\n\t\t\t\t\tif( supportsLocalStorage() ) {\r\n\t\t\t\t\t\tvar layout = window.localStorage.getItem( 'reveal-speaker-layout' );\r\n\t\t\t\t\t\tif( layout ) {\r\n\t\t\t\t\t\t\treturn layout;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t// Default to the first record in the layouts hash\r\n\t\t\t\t\tfor( var id in SPEAKER_LAYOUTS ) {\r\n\t\t\t\t\t\treturn id;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfunction supportsLocalStorage() {\r\n\r\n\t\t\t\t\ttry {\r\n\t\t\t\t\t\tlocalStorage.setItem('test', 'test');\r\n\t\t\t\t\t\tlocalStorage.removeItem('test');\r\n\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tcatch( e ) {\r\n\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfunction zeroPadInteger( num ) {\r\n\r\n\t\t\t\t\tvar str = '00' + parseInt( num );\r\n\t\t\t\t\treturn str.substring( str.length - 2 );\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**\r\n\t\t\t\t * Limits the frequency at which a function can be called.\r\n\t\t\t\t */\r\n\t\t\t\tfunction debounce( fn, ms ) {\r\n\r\n\t\t\t\t\tvar lastTime = 0,\r\n\t\t\t\t\t\ttimeout;\r\n\r\n\t\t\t\t\treturn function() {\r\n\r\n\t\t\t\t\t\tvar args = arguments;\r\n\t\t\t\t\t\tvar context = this;\r\n\r\n\t\t\t\t\t\tclearTimeout( timeout );\r\n\r\n\t\t\t\t\t\tvar timeSinceLastCall = Date.now() - lastTime;\r\n\t\t\t\t\t\tif( timeSinceLastCall > ms ) {\r\n\t\t\t\t\t\t\tfn.apply( context, args );\r\n\t\t\t\t\t\t\tlastTime = Date.now();\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\telse {\r\n\t\t\t\t\t\t\ttimeout = setTimeout( function() {\r\n\t\t\t\t\t\t\t\tfn.apply( context, args );\r\n\t\t\t\t\t\t\t\tlastTime = Date.now();\r\n\t\t\t\t\t\t\t}, ms - timeSinceLastCall );\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t})();\r\n\r\n\t\t</script>\r\n\t</body>\r\n</html>"
          ),
          !n)
        )
          return void alert(
            "Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view."
          );
        !(function () {
          const r = e.getConfig().url,
            i =
              "string" == typeof r
                ? r
                : window.location.protocol +
                  "//" +
                  window.location.host +
                  window.location.pathname +
                  window.location.search;
          (t = setInterval(function () {
            n.postMessage(
              JSON.stringify({
                namespace: "reveal-notes",
                type: "connect",
                state: e.getState(),
                url: i,
              }),
              "*"
            );
          }, 500)),
            window.addEventListener("message", s);
        })();
      }
    }
    function i(t) {
      let r = e.getCurrentSlide(),
        i = r.querySelectorAll("aside.notes"),
        s = r.querySelector(".current-fragment"),
        a = {
          namespace: "reveal-notes",
          type: "state",
          notes: "",
          markdown: !1,
          whitespace: "normal",
          state: e.getState(),
        };
      if (
        (r.hasAttribute("data-notes") &&
          ((a.notes = r.getAttribute("data-notes")),
          (a.whitespace = "pre-wrap")),
        s)
      ) {
        let t = s.querySelector("aside.notes");
        t
          ? ((a.notes = t.innerHTML),
            (a.markdown = "string" == typeof t.getAttribute("data-markdown")),
            (i = null))
          : s.hasAttribute("data-notes") &&
            ((a.notes = s.getAttribute("data-notes")),
            (a.whitespace = "pre-wrap"),
            (i = null));
      }
      i &&
        ((a.notes = Array.from(i)
          .map((t) => t.innerHTML)
          .join("\n")),
        (a.markdown =
          i[0] && "string" == typeof i[0].getAttribute("data-markdown"))),
        n.postMessage(JSON.stringify(a), "*");
    }
    function s(r) {
      if (
        (function (t) {
          try {
            return window.location.origin === t.source.location.origin;
          } catch (t) {
            return !1;
          }
        })(r)
      ) {
        let i = JSON.parse(r.data);
        i && "reveal-notes" === i.namespace && "connected" === i.type
          ? (clearInterval(t), a())
          : i &&
            "reveal-notes" === i.namespace &&
            "call" === i.type &&
            (function (t, r, i) {
              let s = e[t].apply(e, r);
              n.postMessage(
                JSON.stringify({
                  namespace: "reveal-notes",
                  type: "return",
                  result: s,
                  callId: i,
                }),
                "*"
              );
            })(i.methodName, i.arguments, i.callId);
      }
    }
    function a() {
      e.on("slidechanged", i),
        e.on("fragmentshown", i),
        e.on("fragmenthidden", i),
        e.on("overviewhidden", i),
        e.on("overviewshown", i),
        e.on("paused", i),
        e.on("resumed", i),
        i();
    }
    return {
      id: "notes",
      init: function (t) {
        (e = t),
          /receiver/i.test(window.location.search) ||
            (null !== window.location.search.match(/(\?|\&)notes/gi)
              ? r()
              : window.addEventListener("message", (t) => {
                  if (!n && "string" == typeof t.data) {
                    let r;
                    try {
                      r = JSON.parse(t.data);
                    } catch (t) {}
                    r &&
                      "reveal-notes" === r.namespace &&
                      "heartbeat" === r.type &&
                      ((e = t.source),
                      n && !n.closed
                        ? n.focus()
                        : ((n = e),
                          window.addEventListener("message", s),
                          a()));
                  }
                  var e;
                }),
            e.addKeyBinding(
              { keyCode: 83, key: "S", description: "Speaker notes view" },
              function () {
                r();
              }
            ));
      },
      open: r,
    };
  };
});
