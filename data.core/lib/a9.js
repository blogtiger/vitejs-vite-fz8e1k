export const a9 = [
  function (e, t, n) {
    var r = n(1)(
      null,
      n(502),
      !1,
      function (e) {
        n(500);
      },
      "data-v-6db69ddb",
      null
    );
    e.exports = r.exports;
  },
  function (e, t, n) {
    var r = n(501);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("b918cb36", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-fragment[data-v-6db69ddb]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%;background:#fff;overflow-y:auto}",
      "",
    ]);
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this.$createElement,
          t = this._self._c || e;
        return t(
          "div",
          { staticClass: "v-fragment" },
          [t("router-view", { key: this.$route.fullPath })],
          1
        );
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(null, n(504), !1, null, null, null);
    e.exports = r.exports;
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          attrs: { "with-breadcrumb": !1 },
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                return [
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("svg2erd", [
                        n("span", { domProps: { innerHTML: e._s(t.erd) } }),
                      ]),
                    ],
                    1
                  ),
                ];
              },
            },
          ]),
        });
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(null, n(506), !1, null, null, null);
    e.exports = r.exports;
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          attrs: { "with-breadcrumb": !1 },
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      n("i", { staticClass: "icon2x-structure" }),
                      e._v(
                        "\n                " +
                          e._s(t.name) +
                          "\n                "
                      ),
                      t.title
                        ? n("span", [e._v("(" + e._s(t.title) + ")")])
                        : e._e(),
                    ]),
                  ]),
                  e._v(" "),
                  n("div", {
                    staticClass: "doc-description",
                    domProps: { innerHTML: e._s(t.description) },
                  }),
                  e._v(" "),
                  n("columns", {
                    attrs: {
                      columns: t.columns,
                      keys: t.unique_keys,
                      "custom-fields": t.columns_custom_fields,
                    },
                  }),
                  e._v(" "),
                  n("timestamps", { attrs: { obj: t } }),
                ];
              },
            },
          ]),
        });
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(
      n(510),
      n(511),
      !1,
      function (e) {
        n(508);
      },
      "data-v-de0c9d60",
      null
    );
    e.exports = r.exports;
  },
  function (e, t, n) {
    var r = n(509);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("f20f79ca", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-current[data-v-de0c9d60]{font-weight:700}tr .icon-expand[data-v-de0c9d60]{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}tr.is-expanded .icon-expand[data-v-de0c9d60]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = {
        data: function () {
          return { obj: {}, triggers: {} };
        },
        methods: {
          loaded: function (e) {
            this.obj = e;
          },
          toggleTrigger: function (e) {
            void 0 === this.triggers[e]
              ? this.$set(this.triggers, e, !0)
              : this.$set(this.triggers, e, !this.triggers[e]);
          },
          currentRelationObject: function (e) {
            return !e || e === this.obj.object_id;
          },
          linkableRelationObject: function (e) {
            return e && e !== this.obj.object_id;
          },
        },
      });
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          attrs: { "with-breadcrumb": !1 },
          on: { loaded: e.loaded },
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      n("i", { staticClass: "icon2x-structure" }),
                      e._v(
                        "\n                " +
                          e._s(t.name) +
                          "\n                "
                      ),
                      t.title
                        ? n("span", [e._v("(" + e._s(t.title) + ")")])
                        : e._e(),
                    ]),
                  ]),
                  e._v(" "),
                  n("summary-table", { attrs: { items: t.summary } }),
                  e._v(" "),
                  n("div", {
                    staticClass: "doc-description",
                    domProps: { innerHTML: e._s(t.description) },
                  }),
                  e._v(" "),
                  n("columns", {
                    attrs: {
                      columns: t.columns,
                      keys: t.unique_keys,
                      "custom-fields": t.columns_custom_fields,
                    },
                  }),
                  e._v(" "),
                  n("relations", {
                    attrs: {
                      relations: t.relations,
                      "object-id": t.object_id,
                      "custom-fields": t.relations_custom_fields,
                    },
                  }),
                  e._v(" "),
                  n("unique-keys", {
                    attrs: {
                      "unique-keys": t.unique_keys,
                      "custom-fields": t.unique_keys_custom_fields,
                    },
                  }),
                  e._v(" "),
                  n("triggers", {
                    attrs: {
                      triggers: t.triggers,
                      "custom-fields": t.triggers_custom_fields,
                    },
                  }),
                  e._v(" "),
                  n("timestamps", { attrs: { obj: t } }),
                ];
              },
            },
          ]),
        });
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(null, n(513), !1, null, null, null);
    e.exports = r.exports;
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this.$createElement,
          t = this._self._c || e;
        return t("doc-item", {
          attrs: { "with-breadcrumb": !1 },
          scopedSlots: this._u([
            {
              key: "default",
              fn: function (e) {
                return [
                  t(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      t("items-table", {
                        attrs: {
                          "custom-fields": e.custom_fields,
                          items: e.tables,
                        },
                      }),
                    ],
                    1
                  ),
                ];
              },
            },
          ]),
        });
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(null, n(515), !1, null, null, null);
    e.exports = r.exports;
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          attrs: { "with-breadcrumb": !1 },
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      n("i", { staticClass: "icon2x-table" }),
                      e._v(
                        "\n                " +
                          e._s(t.name) +
                          "\n                "
                      ),
                      t.title
                        ? n("span", [e._v("(" + e._s(t.title) + ")")])
                        : e._e(),
                    ]),
                  ]),
                  e._v(" "),
                  n("div", {
                    staticClass: "doc-description",
                    domProps: { innerHTML: e._s(t.description) },
                  }),
                  e._v(" "),
                  n("columns", {
                    attrs: {
                      columns: t.columns,
                      keys: t.unique_keys,
                      "custom-fields": t.columns_custom_fields,
                    },
                  }),
                  e._v(" "),
                  n("timestamps", { attrs: { obj: t } }),
                ];
              },
            },
          ]),
        });
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(
      n(519),
      n(520),
      !1,
      function (e) {
        n(517);
      },
      "data-v-3157aeda",
      null
    );
    e.exports = r.exports;
  },
  function (e, t, n) {
    var r = n(518);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("c23a722e", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-current[data-v-3157aeda]{font-weight:700}tr .icon-expand[data-v-3157aeda]{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}tr.is-expanded .icon-expand[data-v-3157aeda]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = {
        data: function () {
          return { obj: {}, triggers: {} };
        },
        methods: {
          loaded: function (e) {
            this.obj = e;
          },
          toggleTrigger: function (e) {
            void 0 === this.triggers[e]
              ? this.$set(this.triggers, e, !0)
              : this.$set(this.triggers, e, !this.triggers[e]);
          },
          currentRelationObject: function (e) {
            return !e || e === this.obj.object_id;
          },
          linkableRelationObject: function (e) {
            return e && e !== this.obj.object_id;
          },
        },
      });
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          attrs: { "with-breadcrumb": !1 },
          on: { loaded: e.loaded },
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      n("i", { staticClass: "icon2x-table" }),
                      e._v(
                        "\n                " +
                          e._s(t.name) +
                          "\n                "
                      ),
                      t.title
                        ? n("span", [e._v("(" + e._s(t.title) + ")")])
                        : e._e(),
                    ]),
                  ]),
                  e._v(" "),
                  n("summary-table", { attrs: { items: t.summary } }),
                  e._v(" "),
                  n("div", {
                    staticClass: "doc-description",
                    domProps: { innerHTML: e._s(t.description) },
                  }),
                  e._v(" "),
                  n("columns", {
                    attrs: {
                      columns: t.columns,
                      keys: t.unique_keys,
                      "custom-fields": t.columns_custom_fields,
                    },
                  }),
                  e._v(" "),
                  n("relations", {
                    attrs: {
                      relations: t.relations,
                      "object-id": t.object_id,
                      "custom-fields": t.relations_custom_fields,
                    },
                  }),
                  e._v(" "),
                  n("unique-keys", {
                    attrs: {
                      "unique-keys": t.unique_keys,
                      "custom-fields": t.unique_keys_custom_fields,
                    },
                  }),
                  e._v(" "),
                  n("triggers", {
                    attrs: {
                      triggers: t.triggers,
                      "custom-fields": t.triggers_custom_fields,
                    },
                  }),
                  e._v(" "),
                  n("timestamps", { attrs: { obj: t } }),
                ];
              },
            },
          ]),
        });
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(null, n(522), !1, null, null, null);
    e.exports = r.exports;
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this.$createElement,
          t = this._self._c || e;
        return t("doc-item", {
          attrs: { "with-breadcrumb": !1 },
          scopedSlots: this._u([
            {
              key: "default",
              fn: function (e) {
                return [
                  t(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      t("items-table", {
                        attrs: {
                          "custom-fields": e.custom_fields,
                          items: e.tables,
                        },
                      }),
                    ],
                    1
                  ),
                ];
              },
            },
          ]),
        });
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(
      null,
      n(526),
      !1,
      function (e) {
        n(524);
      },
      "data-v-4b3c632c",
      null
    );
    e.exports = r.exports;
  },
  function (e, t, n) {
    var r = n(525);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("49a9c410", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-box[data-v-4b3c632c]{width:100%;height:100%;overflow:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.v-content[data-v-4b3c632c]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;background:#fff;padding:40px 60px;border:1px solid #ebebeb;border-radius:2px}.v-logo[data-v-4b3c632c]{margin-bottom:20px}p[data-v-4b3c632c]{margin-top:5px}",
      "",
    ]);
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this.$createElement,
          t = this._self._c || e;
        return t("div", { staticClass: "v-box" }, [
          t("div", { staticClass: "v-content" }, [
            t(
              "div",
              { staticClass: "v-logo" },
              [
                t("router-link", { attrs: { to: "/" } }, [
                  t("img", { attrs: { src: "images/logo.png" } }),
                ]),
              ],
              1
            ),
            this._v(" "),
            this._m(0),
            this._v(" "),
            t(
              "p",
              [
                this._v("Go back to the "),
                t("router-link", { attrs: { to: "/" } }, [this._v("homepage")]),
                this._v("."),
              ],
              1
            ),
          ]),
        ]);
      },
      staticRenderFns: [
        function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("p", [
            t("b", [this._v("Whoops...")]),
            this._v(" page not found."),
          ]);
        },
      ],
    };
  },
  function (e, t, n) {
    var r = {
      "./af": 62,
      "./af.js": 62,
      "./ar": 63,
      "./ar-dz": 64,
      "./ar-dz.js": 64,
      "./ar-kw": 65,
      "./ar-kw.js": 65,
      "./ar-ly": 66,
      "./ar-ly.js": 66,
      "./ar-ma": 67,
      "./ar-ma.js": 67,
      "./ar-sa": 68,
      "./ar-sa.js": 68,
      "./ar-tn": 69,
      "./ar-tn.js": 69,
      "./ar.js": 63,
      "./az": 70,
      "./az.js": 70,
      "./be": 71,
      "./be.js": 71,
      "./bg": 72,
      "./bg.js": 72,
      "./bm": 73,
      "./bm.js": 73,
      "./bn": 74,
      "./bn-bd": 75,
      "./bn-bd.js": 75,
      "./bn.js": 74,
      "./bo": 76,
      "./bo.js": 76,
      "./br": 77,
      "./br.js": 77,
      "./bs": 78,
      "./bs.js": 78,
      "./ca": 79,
      "./ca.js": 79,
      "./cs": 80,
      "./cs.js": 80,
      "./cv": 81,
      "./cv.js": 81,
      "./cy": 82,
      "./cy.js": 82,
      "./da": 83,
      "./da.js": 83,
      "./de": 84,
      "./de-at": 85,
      "./de-at.js": 85,
      "./de-ch": 86,
      "./de-ch.js": 86,
      "./de.js": 84,
      "./dv": 87,
      "./dv.js": 87,
      "./el": 88,
      "./el.js": 88,
      "./en-au": 89,
      "./en-au.js": 89,
      "./en-ca": 90,
      "./en-ca.js": 90,
      "./en-gb": 91,
      "./en-gb.js": 91,
      "./en-ie": 92,
      "./en-ie.js": 92,
      "./en-il": 93,
      "./en-il.js": 93,
      "./en-in": 94,
      "./en-in.js": 94,
      "./en-nz": 95,
      "./en-nz.js": 95,
      "./en-sg": 96,
      "./en-sg.js": 96,
      "./eo": 97,
      "./eo.js": 97,
      "./es": 98,
      "./es-do": 99,
      "./es-do.js": 99,
      "./es-mx": 100,
      "./es-mx.js": 100,
      "./es-us": 101,
      "./es-us.js": 101,
      "./es.js": 98,
      "./et": 102,
      "./et.js": 102,
      "./eu": 103,
      "./eu.js": 103,
      "./fa": 104,
      "./fa.js": 104,
      "./fi": 105,
      "./fi.js": 105,
      "./fil": 106,
      "./fil.js": 106,
      "./fo": 107,
      "./fo.js": 107,
      "./fr": 108,
      "./fr-ca": 109,
      "./fr-ca.js": 109,
      "./fr-ch": 110,
      "./fr-ch.js": 110,
      "./fr.js": 108,
      "./fy": 111,
      "./fy.js": 111,
      "./ga": 112,
      "./ga.js": 112,
      "./gd": 113,
      "./gd.js": 113,
      "./gl": 114,
      "./gl.js": 114,
      "./gom-deva": 115,
      "./gom-deva.js": 115,
      "./gom-latn": 116,
      "./gom-latn.js": 116,
      "./gu": 117,
      "./gu.js": 117,
      "./he": 118,
      "./he.js": 118,
      "./hi": 119,
      "./hi.js": 119,
      "./hr": 120,
      "./hr.js": 120,
      "./hu": 121,
      "./hu.js": 121,
      "./hy-am": 122,
      "./hy-am.js": 122,
      "./id": 123,
      "./id.js": 123,
      "./is": 124,
      "./is.js": 124,
      "./it": 125,
      "./it-ch": 126,
      "./it-ch.js": 126,
      "./it.js": 125,
      "./ja": 127,
      "./ja.js": 127,
      "./jv": 128,
      "./jv.js": 128,
      "./ka": 129,
      "./ka.js": 129,
      "./kk": 130,
      "./kk.js": 130,
      "./km": 131,
      "./km.js": 131,
      "./kn": 132,
      "./kn.js": 132,
      "./ko": 133,
      "./ko.js": 133,
      "./ku": 134,
      "./ku.js": 134,
      "./ky": 135,
      "./ky.js": 135,
      "./lb": 136,
      "./lb.js": 136,
      "./lo": 137,
      "./lo.js": 137,
      "./lt": 138,
      "./lt.js": 138,
      "./lv": 139,
      "./lv.js": 139,
      "./me": 140,
      "./me.js": 140,
      "./mi": 141,
      "./mi.js": 141,
      "./mk": 142,
      "./mk.js": 142,
      "./ml": 143,
      "./ml.js": 143,
      "./mn": 144,
      "./mn.js": 144,
      "./mr": 145,
      "./mr.js": 145,
      "./ms": 146,
      "./ms-my": 147,
      "./ms-my.js": 147,
      "./ms.js": 146,
      "./mt": 148,
      "./mt.js": 148,
      "./my": 149,
      "./my.js": 149,
      "./nb": 150,
      "./nb.js": 150,
      "./ne": 151,
      "./ne.js": 151,
      "./nl": 152,
      "./nl-be": 153,
      "./nl-be.js": 153,
      "./nl.js": 152,
      "./nn": 154,
      "./nn.js": 154,
      "./oc-lnc": 155,
      "./oc-lnc.js": 155,
      "./pa-in": 156,
      "./pa-in.js": 156,
      "./pl": 157,
      "./pl.js": 157,
      "./pt": 158,
      "./pt-br": 159,
      "./pt-br.js": 159,
      "./pt.js": 158,
      "./ro": 160,
      "./ro.js": 160,
      "./ru": 161,
      "./ru.js": 161,
      "./sd": 162,
      "./sd.js": 162,
      "./se": 163,
      "./se.js": 163,
      "./si": 164,
      "./si.js": 164,
      "./sk": 165,
      "./sk.js": 165,
      "./sl": 166,
      "./sl.js": 166,
      "./sq": 167,
      "./sq.js": 167,
      "./sr": 168,
      "./sr-cyrl": 169,
      "./sr-cyrl.js": 169,
      "./sr.js": 168,
      "./ss": 170,
      "./ss.js": 170,
      "./sv": 171,
      "./sv.js": 171,
      "./sw": 172,
      "./sw.js": 172,
      "./ta": 173,
      "./ta.js": 173,
      "./te": 174,
      "./te.js": 174,
      "./tet": 175,
      "./tet.js": 175,
      "./tg": 176,
      "./tg.js": 176,
      "./th": 177,
      "./th.js": 177,
      "./tk": 178,
      "./tk.js": 178,
      "./tl-ph": 179,
      "./tl-ph.js": 179,
      "./tlh": 180,
      "./tlh.js": 180,
      "./tr": 181,
      "./tr.js": 181,
      "./tzl": 182,
      "./tzl.js": 182,
      "./tzm": 183,
      "./tzm-latn": 184,
      "./tzm-latn.js": 184,
      "./tzm.js": 183,
      "./ug-cn": 185,
      "./ug-cn.js": 185,
      "./uk": 186,
      "./uk.js": 186,
      "./ur": 187,
      "./ur.js": 187,
      "./uz": 188,
      "./uz-latn": 189,
      "./uz-latn.js": 189,
      "./uz.js": 188,
      "./vi": 190,
      "./vi.js": 190,
      "./x-pseudo": 191,
      "./x-pseudo.js": 191,
      "./yo": 192,
      "./yo.js": 192,
      "./zh-cn": 193,
      "./zh-cn.js": 193,
      "./zh-hk": 194,
      "./zh-hk.js": 194,
      "./zh-mo": 195,
      "./zh-mo.js": 195,
      "./zh-tw": 196,
      "./zh-tw.js": 196,
    };
    function i(e) {
      return n(s(e));
    }
    function s(e) {
      var t = r[e];
      if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
      return t;
    }
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.resolve = s),
      (e.exports = i),
      (i.id = 527);
  },
  function (e, t, n) {
    (function (n) {
      var r, i, s;
      (i = function (e) {
        var t,
          r = !1,
          i = [],
          s = Object.keys,
          a = Object.create(null),
          o = Object.create(null),
          u = !0,
          l = /^(no-?highlight|plain|text)$/i,
          c = /\blang(?:uage)?-([\w-]+)\b/i,
          d = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
          f = "</span>",
          _ =
            "Could not find the language '{}', did you forget to load/include a language module?",
          m = {
            hideUpgradeWarningAcceptNoSupportOrSecurityUpdates: !1,
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: void 0,
          },
          p = "of and for in not or if then".split(" ");
        function h(e) {
          return e
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        }
        function v(e) {
          return e.nodeName.toLowerCase();
        }
        function y(e) {
          return l.test(e);
        }
        function g(e) {
          var t,
            n = {},
            r = Array.prototype.slice.call(arguments, 1);
          for (t in e) n[t] = e[t];
          return (
            r.forEach(function (e) {
              for (t in e) n[t] = e[t];
            }),
            n
          );
        }
        function b(e) {
          var t = [];
          return (
            (function e(n, r) {
              for (var i = n.firstChild; i; i = i.nextSibling)
                3 === i.nodeType
                  ? (r += i.nodeValue.length)
                  : 1 === i.nodeType &&
                    (t.push({ event: "start", offset: r, node: i }),
                    (r = e(i, r)),
                    v(i).match(/br|hr|img|input/) ||
                      t.push({ event: "stop", offset: r, node: i }));
              return r;
            })(e, 0),
            t
          );
        }
        function M(e) {
          return (
            e.variants &&
              !e.cached_variants &&
              (e.cached_variants = e.variants.map(function (t) {
                return g(e, { variants: null }, t);
              })),
            e.cached_variants
              ? e.cached_variants
              : (function e(t) {
                  return !!t && (t.endsWithParent || e(t.starts));
                })(e)
              ? [g(e, { starts: e.starts ? g(e.starts) : null })]
              : Object.isFrozen(e)
              ? [g(e)]
              : [e]
          );
        }
        function L(e) {
          if (t && !e.langApiRestored) {
            for (var n in ((e.langApiRestored = !0), t))
              e[n] && (e[t[n]] = e[n]);
            (e.contains || []).concat(e.variants || []).forEach(L);
          }
        }
        function k(e, t) {
          var n = {};
          return (
            "string" == typeof e
              ? r("keyword", e)
              : s(e).forEach(function (t) {
                  r(t, e[t]);
                }),
            n
          );
          function r(e, r) {
            t && (r = r.toLowerCase()),
              r.split(" ").forEach(function (t) {
                var r = t.split("|");
                n[r[0]] = [
                  e,
                  (function (e, t) {
                    return t
                      ? Number(t)
                      : ((n = e), -1 != p.indexOf(n.toLowerCase()) ? 0 : 1);
                    var n;
                  })(r[0], r[1]),
                ];
              });
          }
        }
        function w(e) {
          function t(e) {
            return (e && e.source) || e;
          }
          function n(n, r) {
            return new RegExp(
              t(n),
              "m" + (e.case_insensitive ? "i" : "") + (r ? "g" : "")
            );
          }
          function r(e) {
            var r,
              i,
              s = {},
              a = [],
              o = {},
              u = 1;
            function l(e, t) {
              (s[u] = e),
                a.push([e, t]),
                (u += new RegExp(t.toString() + "|").exec("").length - 1 + 1);
            }
            for (var c = 0; c < e.contains.length; c++) {
              l(
                (i = e.contains[c]),
                i.beginKeywords ? "\\.?(?:" + i.begin + ")\\.?" : i.begin
              );
            }
            e.terminator_end && l("end", e.terminator_end),
              e.illegal && l("illegal", e.illegal);
            var d = a.map(function (e) {
              return e[1];
            });
            return (
              (r = n(
                (function (e, n) {
                  for (
                    var r = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
                      i = 0,
                      s = "",
                      a = 0;
                    a < e.length;
                    a++
                  ) {
                    var o = (i += 1),
                      u = t(e[a]);
                    for (a > 0 && (s += n), s += "("; u.length > 0; ) {
                      var l = r.exec(u);
                      if (null == l) {
                        s += u;
                        break;
                      }
                      (s += u.substring(0, l.index)),
                        (u = u.substring(l.index + l[0].length)),
                        "\\" == l[0][0] && l[1]
                          ? (s += "\\" + String(Number(l[1]) + o))
                          : ((s += l[0]), "(" == l[0] && i++);
                    }
                    s += ")";
                  }
                  return s;
                })(d, "|"),
                !0
              )),
              (o.lastIndex = 0),
              (o.exec = function (t) {
                var n;
                if (0 === a.length) return null;
                r.lastIndex = o.lastIndex;
                var i = r.exec(t);
                if (!i) return null;
                for (var u = 0; u < i.length; u++)
                  if (void 0 != i[u] && void 0 != s["" + u]) {
                    n = s["" + u];
                    break;
                  }
                return (
                  "string" == typeof n
                    ? ((i.type = n), (i.extra = [e.illegal, e.terminator_end]))
                    : ((i.type = "begin"), (i.rule = n)),
                  i
                );
              }),
              o
            );
          }
          if (e.contains && -1 != e.contains.indexOf("self")) {
            if (!u)
              throw new Error(
                "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
              );
            e.contains = e.contains.filter(function (e) {
              return "self" != e;
            });
          }
          !(function i(s, a) {
            s.compiled ||
              ((s.compiled = !0),
              (s.keywords = s.keywords || s.beginKeywords),
              s.keywords && (s.keywords = k(s.keywords, e.case_insensitive)),
              (s.lexemesRe = n(s.lexemes || /\w+/, !0)),
              a &&
                (s.beginKeywords &&
                  (s.begin =
                    "\\b(" + s.beginKeywords.split(" ").join("|") + ")\\b"),
                s.begin || (s.begin = /\B|\b/),
                (s.beginRe = n(s.begin)),
                s.endSameAsBegin && (s.end = s.begin),
                s.end || s.endsWithParent || (s.end = /\B|\b/),
                s.end && (s.endRe = n(s.end)),
                (s.terminator_end = t(s.end) || ""),
                s.endsWithParent &&
                  a.terminator_end &&
                  (s.terminator_end += (s.end ? "|" : "") + a.terminator_end)),
              s.illegal && (s.illegalRe = n(s.illegal)),
              null == s.relevance && (s.relevance = 1),
              s.contains || (s.contains = []),
              (s.contains = Array.prototype.concat.apply(
                [],
                s.contains.map(function (e) {
                  return M("self" === e ? s : e);
                })
              )),
              s.contains.forEach(function (e) {
                i(e, s);
              }),
              s.starts && i(s.starts, a),
              (s.terminators = r(s)));
          })(e);
        }
        function x(e, t, i, s) {
          m.hideUpgradeWarningAcceptNoSupportOrSecurityUpdates ||
            ("object" == typeof n &&
              Object({ NODE_ENV: "production" }).HLJS_HIDE_UPGRADE_WARNING) ||
            r ||
            ((r = !0),
            console.log(
              "Version 9 of Highlight.js has reached EOL and is no longer supported.\nPlease upgrade or ask whatever dependency you are using to upgrade.\nhttps://github.com/highlightjs/highlight.js/issues/2877"
            ));
          var o = t;
          function l(e, t) {
            var n = M.case_insensitive ? t[0].toLowerCase() : t[0];
            return e.keywords.hasOwnProperty(n) && e.keywords[n];
          }
          function c(e, t, n, r) {
            if (!n && "" === t) return "";
            if (!e) return t;
            var i = '<span class="' + (r ? "" : m.classPrefix);
            return (i += e + '">') + t + (n ? "" : f);
          }
          function d() {
            (D +=
              null != k.subLanguage
                ? (function () {
                    var e = "string" == typeof k.subLanguage;
                    if (e && !a[k.subLanguage]) return h(j);
                    var t = e
                      ? x(k.subLanguage, j, !0, T[k.subLanguage])
                      : Y(j, k.subLanguage.length ? k.subLanguage : void 0);
                    return (
                      k.relevance > 0 && (S += t.relevance),
                      e && (T[k.subLanguage] = t.top),
                      c(t.language, t.value, !1, !0)
                    );
                  })()
                : (function () {
                    var e, t, n, r;
                    if (!k.keywords) return h(j);
                    for (
                      r = "",
                        t = 0,
                        k.lexemesRe.lastIndex = 0,
                        n = k.lexemesRe.exec(j);
                      n;

                    )
                      (r += h(j.substring(t, n.index))),
                        (e = l(k, n))
                          ? ((S += e[1]), (r += c(e[0], h(n[0]))))
                          : (r += h(n[0])),
                        (t = k.lexemesRe.lastIndex),
                        (n = k.lexemesRe.exec(j));
                    return r + h(j.substr(t));
                  })()),
              (j = "");
          }
          function p(e) {
            (D += e.className ? c(e.className, "", !0) : ""),
              (k = Object.create(e, { parent: { value: k } }));
          }
          function v(e) {
            var t = e[0],
              n = e.rule;
            return (
              n &&
                n.endSameAsBegin &&
                (n.endRe = new RegExp(
                  t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
                  "m"
                )),
              n.skip
                ? (j += t)
                : (n.excludeBegin && (j += t),
                  d(),
                  n.returnBegin || n.excludeBegin || (j = t)),
              p(n),
              n.returnBegin ? 0 : t.length
            );
          }
          function y(e) {
            var t = e[0],
              n = o.substr(e.index),
              r = (function e(t, n) {
                if (
                  (function (e, t) {
                    var n = e && e.exec(t);
                    return n && 0 === n.index;
                  })(t.endRe, n)
                ) {
                  for (; t.endsParent && t.parent; ) t = t.parent;
                  return t;
                }
                if (t.endsWithParent) return e(t.parent, n);
              })(k, n);
            if (r) {
              var i = k;
              i.skip
                ? (j += t)
                : (i.returnEnd || i.excludeEnd || (j += t),
                  d(),
                  i.excludeEnd && (j = t));
              do {
                k.className && (D += f),
                  k.skip || k.subLanguage || (S += k.relevance),
                  (k = k.parent);
              } while (k !== r.parent);
              return (
                r.starts &&
                  (r.endSameAsBegin && (r.starts.endRe = r.endRe), p(r.starts)),
                i.returnEnd ? 0 : t.length
              );
            }
          }
          var g = {};
          function b(e, t) {
            var n = t && t[0];
            if (((j += e), null == n)) return d(), 0;
            if (
              "begin" == g.type &&
              "end" == t.type &&
              g.index == t.index &&
              "" === n
            )
              return (j += o.slice(t.index, t.index + 1)), 1;
            if ("illegal" === g.type && "" === n)
              return (j += o.slice(t.index, t.index + 1)), 1;
            if (((g = t), "begin" === t.type)) return v(t);
            if ("illegal" === t.type && !i)
              throw new Error(
                'Illegal lexeme "' +
                  n +
                  '" for mode "' +
                  (k.className || "<unnamed>") +
                  '"'
              );
            if ("end" === t.type) {
              var r = y(t);
              if (void 0 != r) return r;
            }
            return (j += n), n.length;
          }
          var M = C(e);
          if (!M)
            throw (
              (console.error(_.replace("{}", e)),
              new Error('Unknown language: "' + e + '"'))
            );
          w(M);
          var L,
            k = s || M,
            T = {},
            D = "";
          for (L = k; L !== M; L = L.parent)
            L.className && (D = c(L.className, "", !0) + D);
          var j = "",
            S = 0;
          try {
            for (
              var O, E, H = 0;
              (k.terminators.lastIndex = H), (O = k.terminators.exec(o));

            )
              (E = b(o.substring(H, O.index), O)), (H = O.index + E);
            for (b(o.substr(H)), L = k; L.parent; L = L.parent)
              L.className && (D += f);
            return { relevance: S, value: D, illegal: !1, language: e, top: k };
          } catch (t) {
            if (t.message && -1 !== t.message.indexOf("Illegal"))
              return { illegal: !0, relevance: 0, value: h(o) };
            if (u)
              return {
                relevance: 0,
                value: h(o),
                language: e,
                top: k,
                errorRaised: t,
              };
            throw t;
          }
        }
        function Y(e, t) {
          t = t || m.languages || s(a);
          var n = { relevance: 0, value: h(e) },
            r = n;
          return (
            t
              .filter(C)
              .filter(O)
              .forEach(function (t) {
                var i = x(t, e, !1);
                (i.language = t),
                  i.relevance > r.relevance && (r = i),
                  i.relevance > n.relevance && ((r = n), (n = i));
              }),
            r.language && (n.second_best = r),
            n
          );
        }
        function T(e) {
          return m.tabReplace || m.useBR
            ? e.replace(d, function (e, t) {
                return m.useBR && "\n" === e
                  ? "<br>"
                  : m.tabReplace
                  ? t.replace(/\t/g, m.tabReplace)
                  : "";
              })
            : e;
        }
        function D(e) {
          var t,
            n,
            r,
            s,
            a,
            u = (function (e) {
              var t,
                n,
                r,
                i,
                s = e.className + " ";
              if (
                ((s += e.parentNode ? e.parentNode.className : ""),
                (n = c.exec(s)))
              ) {
                var a = C(n[1]);
                return (
                  a ||
                    (console.warn(_.replace("{}", n[1])),
                    console.warn(
                      "Falling back to no-highlight mode for this block.",
                      e
                    )),
                  a ? n[1] : "no-highlight"
                );
              }
              for (t = 0, r = (s = s.split(/\s+/)).length; t < r; t++)
                if (y((i = s[t])) || C(i)) return i;
            })(e);
          y(u) ||
            (m.useBR
              ? ((t = document.createElement("div")).innerHTML = e.innerHTML
                  .replace(/\n/g, "")
                  .replace(/<br[ \/]*>/g, "\n"))
              : (t = e),
            (a = t.textContent),
            (r = u ? x(u, a, !0) : Y(a)),
            (n = b(t)).length &&
              (((s = document.createElement("div")).innerHTML = r.value),
              (r.value = (function (e, t, n) {
                var r = 0,
                  s = "",
                  a = [];
                function o() {
                  return e.length && t.length
                    ? e[0].offset !== t[0].offset
                      ? e[0].offset < t[0].offset
                        ? e
                        : t
                      : "start" === t[0].event
                      ? e
                      : t
                    : e.length
                    ? e
                    : t;
                }
                function u(e) {
                  s +=
                    "<" +
                    v(e) +
                    i.map
                      .call(e.attributes, function (e) {
                        return (
                          " " +
                          e.nodeName +
                          '="' +
                          h(e.value).replace(/"/g, "&quot;") +
                          '"'
                        );
                      })
                      .join("") +
                    ">";
                }
                function l(e) {
                  s += "</" + v(e) + ">";
                }
                function c(e) {
                  ("start" === e.event ? u : l)(e.node);
                }
                for (; e.length || t.length; ) {
                  var d = o();
                  if (
                    ((s += h(n.substring(r, d[0].offset))),
                    (r = d[0].offset),
                    d === e)
                  ) {
                    a.reverse().forEach(l);
                    do {
                      c(d.splice(0, 1)[0]), (d = o());
                    } while (d === e && d.length && d[0].offset === r);
                    a.reverse().forEach(u);
                  } else
                    "start" === d[0].event ? a.push(d[0].node) : a.pop(),
                      c(d.splice(0, 1)[0]);
                }
                return s + h(n.substr(r));
              })(n, b(s), a))),
            (r.value = T(r.value)),
            (e.innerHTML = r.value),
            (e.className = (function (e, t, n) {
              var r = t ? o[t] : n,
                i = [e.trim()];
              return (
                e.match(/\bhljs\b/) || i.push("hljs"),
                -1 === e.indexOf(r) && i.push(r),
                i.join(" ").trim()
              );
            })(e.className, u, r.language)),
            (e.result = { language: r.language, re: r.relevance }),
            r.second_best &&
              (e.second_best = {
                language: r.second_best.language,
                re: r.second_best.relevance,
              }));
        }
        function j() {
          if (!j.called) {
            j.called = !0;
            var e = document.querySelectorAll("pre code");
            i.forEach.call(e, D);
          }
        }
        var S = { disableAutodetect: !0 };
        function C(e) {
          return (e = (e || "").toLowerCase()), a[e] || a[o[e]];
        }
        function O(e) {
          var t = C(e);
          return t && !t.disableAutodetect;
        }
        return (
          (e.highlight = x),
          (e.highlightAuto = Y),
          (e.fixMarkup = T),
          (e.highlightBlock = D),
          (e.configure = function (e) {
            m = g(m, e);
          }),
          (e.initHighlighting = j),
          (e.initHighlightingOnLoad = function () {
            window.addEventListener("DOMContentLoaded", j, !1),
              window.addEventListener("load", j, !1);
          }),
          (e.registerLanguage = function (t, n) {
            var r;
            try {
              r = n(e);
            } catch (e) {
              if (
                (console.error(
                  "Language definition for '{}' could not be registered.".replace(
                    "{}",
                    t
                  )
                ),
                !u)
              )
                throw e;
              console.error(e), (r = S);
            }
            (a[t] = r),
              L(r),
              (r.rawDefinition = n.bind(null, e)),
              r.aliases &&
                r.aliases.forEach(function (e) {
                  o[e] = t;
                });
          }),
          (e.listLanguages = function () {
            return s(a);
          }),
          (e.getLanguage = C),
          (e.requireLanguage = function (e) {
            var t = C(e);
            if (t) return t;
            throw new Error(
              "The '{}' language is required, but not loaded.".replace("{}", e)
            );
          }),
          (e.autoDetection = O),
          (e.inherit = g),
          (e.debugMode = function () {
            u = !1;
          }),
          (e.IDENT_RE = "[a-zA-Z]\\w*"),
          (e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*"),
          (e.NUMBER_RE = "\\b\\d+(\\.\\d+)?"),
          (e.C_NUMBER_RE =
            "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
          (e.BINARY_NUMBER_RE = "\\b(0b[01]+)"),
          (e.RE_STARTERS_RE =
            "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
          (e.BACKSLASH_ESCAPE = { begin: "\\\\[\\s\\S]", relevance: 0 }),
          (e.APOS_STRING_MODE = {
            className: "string",
            begin: "'",
            end: "'",
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE],
          }),
          (e.QUOTE_STRING_MODE = {
            className: "string",
            begin: '"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE],
          }),
          (e.PHRASAL_WORDS_MODE = {
            begin:
              /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
          }),
          (e.COMMENT = function (t, n, r) {
            var i = e.inherit(
              { className: "comment", begin: t, end: n, contains: [] },
              r || {}
            );
            return (
              i.contains.push(e.PHRASAL_WORDS_MODE),
              i.contains.push({
                className: "doctag",
                begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                relevance: 0,
              }),
              i
            );
          }),
          (e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$")),
          (e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/")),
          (e.HASH_COMMENT_MODE = e.COMMENT("#", "$")),
          (e.NUMBER_MODE = {
            className: "number",
            begin: e.NUMBER_RE,
            relevance: 0,
          }),
          (e.C_NUMBER_MODE = {
            className: "number",
            begin: e.C_NUMBER_RE,
            relevance: 0,
          }),
          (e.BINARY_NUMBER_MODE = {
            className: "number",
            begin: e.BINARY_NUMBER_RE,
            relevance: 0,
          }),
          (e.CSS_NUMBER_MODE = {
            className: "number",
            begin:
              e.NUMBER_RE +
              "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0,
          }),
          (e.REGEXP_MODE = {
            className: "regexp",
            begin: /\//,
            end: /\/[gimuy]*/,
            illegal: /\n/,
            contains: [
              e.BACKSLASH_ESCAPE,
              {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [e.BACKSLASH_ESCAPE],
              },
            ],
          }),
          (e.TITLE_MODE = {
            className: "title",
            begin: e.IDENT_RE,
            relevance: 0,
          }),
          (e.UNDERSCORE_TITLE_MODE = {
            className: "title",
            begin: e.UNDERSCORE_IDENT_RE,
            relevance: 0,
          }),
          (e.METHOD_GUARD = {
            begin: "\\.\\s*" + e.UNDERSCORE_IDENT_RE,
            relevance: 0,
          }),
          [
            e.BACKSLASH_ESCAPE,
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            e.PHRASAL_WORDS_MODE,
            e.COMMENT,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.HASH_COMMENT_MODE,
            e.NUMBER_MODE,
            e.C_NUMBER_MODE,
            e.BINARY_NUMBER_MODE,
            e.CSS_NUMBER_MODE,
            e.REGEXP_MODE,
            e.TITLE_MODE,
            e.UNDERSCORE_TITLE_MODE,
            e.METHOD_GUARD,
          ].forEach(function (e) {
            !(function e(t) {
              Object.freeze(t);
              var n = "function" == typeof t;
              Object.getOwnPropertyNames(t).forEach(function (r) {
                !t.hasOwnProperty(r) ||
                  null === t[r] ||
                  ("object" != typeof t[r] && "function" != typeof t[r]) ||
                  (n &&
                    ("caller" === r || "callee" === r || "arguments" === r)) ||
                  Object.isFrozen(t[r]) ||
                  e(t[r]);
              });
              return t;
            })(e);
          }),
          e
        );
      }),
        (s =
          ("object" == typeof window && window) ||
          ("object" == typeof self && self)),
        void 0 === t || t.nodeType
          ? s &&
            ((s.hljs = i({})),
            void 0 ===
              (r = function () {
                return s.hljs;
              }.apply(t, [])) || (e.exports = r))
          : i(t);
    }).call(t, n(16));
  },
  function (e, t) {
    e.exports = function (e) {
      var t = e.COMMENT("--", "$");
      return {
        case_insensitive: !0,
        illegal: /[<>{}*]/,
        contains: [
          {
            beginKeywords:
              "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with",
            end: /;/,
            endsWithParent: !0,
            lexemes: /[\w\.]+/,
            keywords: {
              keyword:
                "as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
              literal: "true false null unknown",
              built_in:
                "array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varchar2 varying void",
            },
            contains: [
              {
                className: "string",
                begin: "'",
                end: "'",
                contains: [{ begin: "''" }],
              },
              {
                className: "string",
                begin: '"',
                end: '"',
                contains: [{ begin: '""' }],
              },
              { className: "string", begin: "`", end: "`" },
              e.C_NUMBER_MODE,
              e.C_BLOCK_COMMENT_MODE,
              t,
              e.HASH_COMMENT_MODE,
            ],
          },
          e.C_BLOCK_COMMENT_MODE,
          t,
          e.HASH_COMMENT_MODE,
        ],
      };
    };
  },
  function (e, t) {
    var n =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    $.fn.resizable = function (e) {
      var t = {
        handleSelector: null,
        resizeWidth: !0,
        resizeHeight: !0,
        resizeWidthFrom: "right",
        resizeHeightFrom: "bottom",
        onDragStart: null,
        onDragEnd: null,
        onDrag: null,
        touchActionNone: !0,
        instanceId: null,
      };
      return (
        "object" == (void 0 === e ? "undefined" : n(e)) && (t = $.extend(t, e)),
        this.each(function () {
          var n,
            r,
            i = $.extend({}, t);
          i.instanceId || (i.instanceId = "rsz_" + new Date().getTime());
          var s,
            a = $(this);
          if ("destroy" === e) {
            if (!(i = a.data("resizable"))) return;
            return (
              (s = d(i.handleSelector, a)).off(
                "mousedown." + i.instanceId + " touchstart." + i.instanceId
              ),
              i.touchActionNone && s.css("touch-action", ""),
              void a.removeClass("resizable")
            );
          }
          function o(e) {
            e.stopPropagation(), e.preventDefault();
          }
          function u(e) {
            var t,
              r,
              s = c(e);
            (t =
              "left" === i.resizeWidthFrom
                ? n.width - s.x + n.x
                : n.width + s.x - n.x),
              (r =
                "top" === i.resizeHeightFrom
                  ? n.height - s.y + n.y
                  : n.height + s.y - n.y),
              (i.onDrag && !1 === i.onDrag(e, a, t, r, i)) ||
                (i.resizeHeight && a.height(r), i.resizeWidth && a.width(t));
          }
          function l(e) {
            return (
              e.stopPropagation(),
              e.preventDefault(),
              $(document).off("mousemove." + i.instanceId),
              $(document).off("mouseup." + i.instanceId),
              (window.Touch || navigator.maxTouchPoints) &&
                ($(document).off("touchmove." + i.instanceId),
                $(document).off("touchend." + i.instanceId)),
              $(document).off("selectstart." + i.instanceId, o),
              a.css("transition", r),
              $("iframe").css("pointer-events", "auto"),
              i.onDragEnd && i.onDragEnd(e, a, i),
              !1
            );
          }
          function c(e) {
            var t = { x: 0, y: 0, width: 0, height: 0 };
            if ("number" == typeof e.clientX)
              (t.x = e.clientX), (t.y = e.clientY);
            else {
              if (!e.originalEvent.touches) return null;
              (t.x = e.originalEvent.touches[0].clientX),
                (t.y = e.originalEvent.touches[0].clientY);
            }
            return t;
          }
          function d(e, t) {
            return e && ">" === e.trim()[0]
              ? ((e = e.trim().replace(/^>\s*/, "")), t.find(e))
              : e
              ? t.parent().find(e)
              : t;
          }
          a.data("resizable", i),
            (s = d(i.handleSelector, a)),
            i.touchActionNone && s.css("touch-action", "none"),
            a.addClass("resizable"),
            s.on(
              "mousedown." + i.instanceId + " touchstart." + i.instanceId,
              function (e) {
                e.preventDefault && e.preventDefault();
                if (
                  (((n = c(e)).width = parseInt(a.width(), 10)),
                  (n.height = parseInt(a.height(), 10)),
                  (r = a.css("transition")),
                  a.css("transition", "none"),
                  i.onDragStart && !1 === i.onDragStart(e, a, i))
                )
                  return;
                $(document).on("mousemove." + i.instanceId, u),
                  $(document).on("mouseup." + i.instanceId, l),
                  (window.Touch || navigator.maxTouchPoints) &&
                    ($(document).on("touchmove." + i.instanceId, u),
                    $(document).on("touchend." + i.instanceId, l));
                $(document).on("selectstart." + i.instanceId, o),
                  $("iframe").css("pointer-events", "none");
              }
            );
        })
      );
    };
  },
  function (e, t) {},
  function (e, t) {},
];
