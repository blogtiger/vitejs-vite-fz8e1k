export const a8=[

    
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      n("span", [
                        e._v(
                          "\n                    " +
                            e._s(e.headerResult) +
                            "\n                "
                        ),
                      ]),
                    ]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t[e.listName],
                        },
                      }),
                    ],
                    1
                  ),
                  e._v(" "),
                  n("timestamps"),
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
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = { props: { columnsListName: String } });
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n(
                      "h1",
                      { staticClass: "doc-header" },
                      [
                        n("object-icon", {
                          attrs: {
                            title: e._dot(function () {
                              return e.lo_.find(t.summary, [
                                "field",
                                "Type",
                              ]).value;
                            }, ""),
                            size: "2x",
                            obj: t,
                          },
                        }),
                        e._v(
                          "\n                " +
                            e._s(
                              e.$store.state.repository.structureById[
                                e.$route.params.id
                              ].name
                            ) +
                            "\n            "
                        ),
                      ],
                      1
                    ),
                  ]),
                  e._v(" "),
                  n("summary-table", { attrs: { items: t.summary } }),
                  e._v(" "),
                  t.description
                    ? n("div", {
                        staticClass: "doc-description",
                        domProps: { innerHTML: e._s(t.description) },
                      })
                    : e._e(),
                  e._v(" "),
                  n("columns", {
                    attrs: {
                      columns: t.columns,
                      keys: t.unique_keys,
                      "custom-fields": t.columns_custom_fields,
                      columnsListName: e.columnsListName,
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
                  n("dependencies", {
                    attrs: {
                      dependencies: t.dependencies,
                      "object-id": t.object_id,
                    },
                  }),
                  e._v(" "),
                  n("sql-script", { attrs: { script: t.script } }),
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
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(5);
    n.n(r);
    t.default = {
      props: { header: String, listName: String },
      computed: {
        headerResult: function () {
          return this.header || "Objects";
        },
      },
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      t.title_prefix
                        ? n("span", [
                            e._v(
                              "\n                    " +
                                e._s(t.title_prefix) +
                                ":\n                "
                            ),
                          ])
                        : e._e(),
                      e._v(
                        "\n                " + e._s(e.header) + "\n            "
                      ),
                    ]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t[e.listName],
                        },
                      }),
                    ],
                    1
                  ),
                  e._v(" "),
                  n("timestamps"),
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
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(5);
    n.n(r);
    t.default = {
      props: { header: String, listName: String },
      computed: {
        headerResult: function () {
          return this.header || "Objects";
        },
      },
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      n("span", [
                        e._v(
                          "\n                    " +
                            e._s(e.headerResult) +
                            "\n                "
                        ),
                      ]),
                    ]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t[e.listName],
                        },
                      }),
                    ],
                    1
                  ),
                  e._v(" "),
                  n("timestamps"),
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
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = { props: { parametersListName: String } });
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n(
                      "h1",
                      { staticClass: "doc-header" },
                      [
                        n("object-icon", {
                          attrs: {
                            title: e._dot(function () {
                              return e.lo_.find(t.summary, [
                                "field",
                                "Type",
                              ]).value;
                            }, ""),
                            size: "2x",
                            obj: t,
                          },
                        }),
                        e._v(
                          "\n                " +
                            e._s(
                              e.$store.state.repository.structureById[
                                e.$route.params.id
                              ].name
                            ) +
                            "\n            "
                        ),
                      ],
                      1
                    ),
                  ]),
                  e._v(" "),
                  n("summary-table", { attrs: { items: t.summary } }),
                  e._v(" "),
                  t.description
                    ? n("div", {
                        staticClass: "doc-description",
                        domProps: { innerHTML: e._s(t.description) },
                      })
                    : e._e(),
                  e._v(" "),
                  n("parameters", {
                    attrs: {
                      parameters: t.parameters,
                      "custom-fields": t.parameters_custom_fields,
                      parametersListName: e.parametersListName,
                    },
                  }),
                  e._v(" "),
                  n("dependencies", {
                    attrs: {
                      dependencies: t.dependencies,
                      "object-id": t.object_id,
                    },
                  }),
                  e._v(" "),
                  n("sql-script", { attrs: { script: t.script } }),
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
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(5);
    n.n(r);
    t.default = {
      props: { header: String, listName: String },
      computed: {
        headerResult: function () {
          return this.header || "Objects";
        },
      },
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      t.title_prefix
                        ? n("span", [
                            e._v(
                              "\n                    " +
                                e._s(t.title_prefix) +
                                ":\n                "
                            ),
                          ])
                        : e._e(),
                      e._v(
                        "\n                " + e._s(e.header) + "\n            "
                      ),
                    ]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t[e.listName],
                        },
                      }),
                    ],
                    1
                  ),
                  e._v(" "),
                  n("timestamps"),
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
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(5);
    n.n(r);
    t.default = {
      props: { header: String, listName: String },
      computed: {
        headerResult: function () {
          return this.header || "Objects";
        },
      },
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      n("span", [
                        e._v(
                          "\n                    " +
                            e._s(e.headerResult) +
                            "\n                "
                        ),
                      ]),
                    ]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t[e.listName],
                        },
                      }),
                    ],
                    1
                  ),
                  e._v(" "),
                  n("timestamps"),
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
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = {
        props: { columnsListName: String, parametersListName: String },
      });
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n(
                      "h1",
                      { staticClass: "doc-header" },
                      [
                        n("object-icon", {
                          attrs: {
                            title: e._dot(function () {
                              return e.lo_.find(t.summary, [
                                "field",
                                "Type",
                              ]).value;
                            }, ""),
                            size: "2x",
                            obj: t,
                          },
                        }),
                        e._v(
                          "\n                " +
                            e._s(
                              e.$store.state.repository.structureById[
                                e.$route.params.id
                              ].name
                            ) +
                            "\n            "
                        ),
                      ],
                      1
                    ),
                  ]),
                  e._v(" "),
                  n("summary-table", { attrs: { items: t.summary } }),
                  e._v(" "),
                  t.description
                    ? n("div", {
                        staticClass: "doc-description",
                        domProps: { innerHTML: e._s(t.description) },
                      })
                    : e._e(),
                  e._v(" "),
                  n("parameters", {
                    attrs: {
                      parameters: t.parameters,
                      "custom-fields": t.parameters_custom_fields,
                      areFromReport: !0,
                      parametersListName: e.parametersListName,
                    },
                  }),
                  e._v(" "),
                  n("columns", {
                    attrs: {
                      columns: t.columns,
                      keys: t.unique_keys,
                      "custom-fields": t.columns_custom_fields,
                      areFromReport: !0,
                      columnsListName: e.columnsListName,
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
    var r = n(471);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("2456979a", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-obj-count[data-v-4717f50c]{opacity:.7}",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    n(6);
    t.default = {
      data: function () {
        return { obj: {} };
      },
      computed: {
        hasLinkedObjects: function () {
          return this.obj.domain_links && this.obj.domain_links.length > 0;
        },
        groupedLinks: function () {
          return _.groupBy(this.obj.domain_links, function (e) {
            return e.object_menu_caption;
          });
        },
      },
      methods: {
        loaded: function (e) {
          this.obj = e;
        },
      },
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          on: { loaded: e.loaded },
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n(
                      "h1",
                      { staticClass: "doc-header" },
                      [
                        n("object-icon", {
                          attrs: {
                            title: e._dot(function () {
                              return e.lo_.find(t.summary, [
                                "field",
                                "Type",
                              ]).value;
                            }, ""),
                            size: "2x",
                            type: t.object_type,
                          },
                        }),
                        e._v(
                          "\n                " +
                            e._s(
                              e.$store.state.repository.structureById[
                                e.$route.params.id
                              ].name
                            ) +
                            "\n            "
                        ),
                      ],
                      1
                    ),
                  ]),
                  e._v(" "),
                  n("summary-table", { attrs: { items: t.summary } }),
                  e._v(" "),
                  n("div", {
                    staticClass: "doc-description",
                    domProps: { innerHTML: e._s(t.description) },
                  }),
                  e._v(" "),
                  e._l(e.groupedLinks, function (e, t) {
                    return n("div", [
                      n(
                        "div",
                        { attrs: { id: "{objectType}" } },
                        [
                          n("domain-links", {
                            attrs: { links: e, objectType: t },
                          }),
                        ],
                        1
                      ),
                    ]);
                  }),
                  e._v(" "),
                  n("timestamps"),
                ];
              },
            },
          ]),
        });
      },
      staticRenderFns: [],
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      e._v("Data Domains"),
                    ]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t.domains,
                        },
                      }),
                    ],
                    1
                  ),
                  e._v(" "),
                  n("timestamps"),
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
    var r = n(476);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("50c38ca3", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-obj-count[data-v-688011bc]{opacity:.7}",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    n(6);
    t.default = {
      data: function () {
        return { obj: {} };
      },
      computed: {
        hasLinkedObjects: function () {
          return this.obj.domain_links && this.obj.domain_links.length > 0;
        },
        groupedLinks: function () {
          return _.groupBy(this.obj.domain_links, function (e) {
            return e.object_menu_caption;
          });
        },
      },
      methods: {
        loaded: function (e) {
          this.obj = e;
        },
      },
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          on: { loaded: e.loaded },
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n(
                      "h1",
                      { staticClass: "doc-header" },
                      [
                        n("object-icon", {
                          attrs: {
                            title: e._dot(function () {
                              return e.lo_.find(t.summary, [
                                "field",
                                "Type",
                              ]).value;
                            }, ""),
                            size: "2x",
                            type: t.object_type,
                          },
                        }),
                        e._v(
                          "\n                " +
                            e._s(
                              e.$store.state.repository.structureById[
                                e.$route.params.id
                              ].name
                            ) +
                            "\n            "
                        ),
                      ],
                      1
                    ),
                  ]),
                  e._v(" "),
                  n("summary-table", { attrs: { items: t.summary } }),
                  e._v(" "),
                  n("div", {
                    staticClass: "doc-description",
                    domProps: { innerHTML: e._s(t.description) },
                  }),
                  e._v(" "),
                  e._l(e.groupedLinks, function (e, t) {
                    return n("div", [
                      n(
                        "div",
                        { attrs: { id: "{objectType}" } },
                        [
                          n("domain-links", {
                            attrs: { links: e, objectType: t },
                          }),
                        ],
                        1
                      ),
                    ]);
                  }),
                  e._v(" "),
                  n("timestamps"),
                ];
              },
            },
          ]),
        });
      },
      staticRenderFns: [],
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      e._v("Business Domains"),
                    ]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("domain-items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t.domains,
                        },
                      }),
                    ],
                    1
                  ),
                  e._v(" "),
                  n("timestamps"),
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
    var r = n(481);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("832fe21a", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-obj-count[data-v-aee79c6a]{opacity:.7}",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    n(6);
    t.default = {
      data: function () {
        return { obj: {} };
      },
      computed: {
        hasLinkedObjects: function () {
          return this.obj.area_links && this.obj.area_links.length > 0;
        },
        groupedLinks: function () {
          return _.groupBy(this.obj.area_links, function (e) {
            return e.object_menu_caption;
          });
        },
      },
      methods: {
        loaded: function (e) {
          this.obj = e;
        },
      },
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          on: { loaded: e.loaded },
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n(
                      "h1",
                      { staticClass: "doc-header" },
                      [
                        n("object-icon", {
                          attrs: {
                            title: e._dot(function () {
                              return e.lo_.find(t.summary, [
                                "field",
                                "Type",
                              ]).value;
                            }, ""),
                            size: "2x",
                            type: t.object_type,
                          },
                        }),
                        e._v(
                          "\n                " +
                            e._s(
                              e.$store.state.repository.structureById[
                                e.$route.params.id
                              ].name
                            ) +
                            "\n            "
                        ),
                      ],
                      1
                    ),
                  ]),
                  e._v(" "),
                  n("summary-table", { attrs: { items: t.summary } }),
                  e._v(" "),
                  t.erd && t.erd.length > 0
                    ? n(
                        "div",
                        { staticClass: "doc-section" },
                        [
                          n("svg2erd", [
                            n("span", { domProps: { innerHTML: e._s(t.erd) } }),
                          ]),
                        ],
                        1
                      )
                    : e._e(),
                  e._v(" "),
                  t.erd && t.erd.length > 0
                    ? n(
                        "div",
                        { staticClass: "doc-actions" },
                        [
                          n(
                            "router-link",
                            {
                              attrs: {
                                to:
                                  "/fragments/module-diagram/" +
                                  e.$route.params.id,
                              },
                            },
                            [e._v(" Diagram view ")]
                          ),
                        ],
                        1
                      )
                    : e._e(),
                  e._v(" "),
                  n("div", {
                    staticClass: "doc-description",
                    domProps: { innerHTML: e._s(t.description) },
                  }),
                  e._v(" "),
                  e._l(e.groupedLinks, function (e, t) {
                    return n("div", [
                      n(
                        "div",
                        { attrs: { id: "{objectType}" } },
                        [
                          n("domain-links", {
                            attrs: { links: e, objectType: t },
                          }),
                        ],
                        1
                      ),
                    ]);
                  }),
                  e._v(" "),
                  n("timestamps"),
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
    var r = n(485);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("a30705a0", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-obj-count[data-v-5f1e6416]{opacity:.7}",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    n(6);
    t.default = {
      data: function () {
        return { obj: {} };
      },
      computed: {
        hasLinkedObjects: function () {
          return this.obj.area_links && this.obj.area_links.length > 0;
        },
        groupedLinks: function () {
          return _.groupBy(this.obj.area_links, function (e) {
            return e.object_menu_caption;
          });
        },
      },
      methods: {
        loaded: function (e) {
          this.obj = e;
        },
      },
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          on: { loaded: e.loaded },
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n(
                      "h1",
                      { staticClass: "doc-header" },
                      [
                        n("object-icon", {
                          attrs: {
                            title: e._dot(function () {
                              return e.lo_.find(t.summary, [
                                "field",
                                "Type",
                              ]).value;
                            }, ""),
                            size: "2x",
                            type: t.object_type,
                          },
                        }),
                        e._v(
                          "\n                " +
                            e._s(
                              e.$store.state.repository.structureById[
                                e.$route.params.id
                              ].name
                            ) +
                            "\n            "
                        ),
                      ],
                      1
                    ),
                  ]),
                  e._v(" "),
                  n("summary-table", { attrs: { items: t.summary } }),
                  e._v(" "),
                  t.erd && t.erd.length > 0
                    ? n(
                        "div",
                        { staticClass: "doc-section" },
                        [
                          n("svg2erd", [
                            n("span", { domProps: { innerHTML: e._s(t.erd) } }),
                          ]),
                        ],
                        1
                      )
                    : e._e(),
                  e._v(" "),
                  t.erd && t.erd.length > 0
                    ? n(
                        "div",
                        { staticClass: "doc-actions" },
                        [
                          n(
                            "router-link",
                            {
                              attrs: {
                                to:
                                  "/fragments/module-diagram/" +
                                  e.$route.params.id,
                              },
                            },
                            [e._v(" Diagram view ")]
                          ),
                        ],
                        1
                      )
                    : e._e(),
                  e._v(" "),
                  n("div", {
                    staticClass: "doc-description",
                    domProps: { innerHTML: e._s(t.description) },
                  }),
                  e._v(" "),
                  e._l(e.groupedLinks, function (e, t) {
                    return n("div", [
                      n(
                        "div",
                        { attrs: { id: "{objectType}" } },
                        [
                          n("domain-links", {
                            attrs: { links: e, objectType: t },
                          }),
                        ],
                        1
                      ),
                    ]);
                  }),
                  e._v(" "),
                  n("timestamps"),
                ];
              },
            },
          ]),
        });
      },
      staticRenderFns: [],
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      e._v("Data Sources"),
                    ]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t.documentations,
                        },
                      }),
                    ],
                    1
                  ),
                  e._v(" "),
                  n("timestamps"),
                ];
              },
            },
          ]),
        });
      },
      staticRenderFns: [],
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("doc-item", {
          scopedSlots: e._u([
            {
              key: "default",
              fn: function (t) {
                //debugger;
return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      e._v("Glossaries"),
                    ]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t.glossaries,
                        },
                      }),
                    ],
                    1
                  ),
                  e._v(" "),
                  n("timestamps"),
                ];
              },
            },
          ]),
        });
      },
      staticRenderFns: [],
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this.$createElement;
        return (this._self._c || e)(this.objectPageByType, {
          tag: "component",
          attrs: {
            header: this.objectPageCaptionByType,
            listName: this.objectListNameByType,
            columnsListName: this.columnsListNameByType,
            parametersListName: this.parametersListNameByType,
          },
        });
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(
      n(494),
      n(495),
      !1,
      function (e) {
        n(492);
      },
      "data-v-07138386",
      null
    );
    e.exports = r.exports;
  },
  function (e, t, n) {
    var r = n(493);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("55dafc6c", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".mts[data-v-07138386]{margin-top:10px}.mtm[data-v-07138386]{margin-top:25px}.mtl[data-v-07138386]{margin-top:45px}.v-trial-alert[data-v-07138386]{margin:0 auto;padding:60px 30px;min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:440px}.v-trial-image[data-v-07138386]{width:100%}.v-font-small[data-v-07138386]{opacity:.4;font-size:.9em}",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = {
        computed: {
          expiresAt: function () {
            var e = this.$store.state.repository.licenseExpiresAt;
            return null === e || void 0 === e
              ? null
              : moment(e, "YYYY-MM-DD").add(7, "days");
          },
          isBrowserable: function () {
            return (
              "trial" !== this.$store.state.repository.license ||
              null === this.expiresAt ||
              moment().isSameOrBefore(this.expiresAt)
            );
          },
        },
        mounted: function () {
          "trial" === this.$store.state.repository.license &&
            this.isBrowserable &&
            this.displayTrialPopup();
        },
        methods: {
          displayTrialPopup: function () {
            var e = Math.abs(moment().diff(this.expiresAt, "days")),
              t = e > 1 ? e + " days" : "1 day";
            $("body").append(
              '\n                \'<script src="https://dataedo.com/asset/js/html-export-popup-v2.js"\n                         data-hep-template="trial"\n                         data-hep-expire-in="' +
                t +
                '">\n                </script>'
            );
          },
          scrollTop: function () {
            $(".v-content").scrollTop(0);
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
        return n(
          "app-layout",
          [
            n("template", { slot: "side-nav" }, [n("side-nav")], 1),
            e._v(" "),
            n(
              "template",
              { slot: "content" },
              [
                e.isBrowserable
                  ? n(
                      "transition",
                      {
                        attrs: { name: "slide-left", mode: "out-in" },
                        on: { "after-leave": e.scrollTop },
                      },
                      [n("router-view", { key: e.$route.fullPath })],
                      1
                    )
                  : n("div", { staticClass: "v-trial-alert" }, [
                      n("img", {
                        staticClass: "v-trial-image",
                        attrs: {
                          src: "images/trial-ended.png",
                          alt: "Trial ended",
                        },
                      }),
                      e._v(" "),
                      n("h1", { staticClass: "mtl" }, [
                        e._v("Trial expired :("),
                      ]),
                      e._v(" "),
                      n(
                        "div",
                        { staticClass: "mtm" },
                        [
                          n(
                            "v-button",
                            {
                              attrs: {
                                primary: "",
                                href: "https://dataedo.com/pricing",
                                target: "_blank",
                              },
                            },
                            [e._v("Purchase now")]
                          ),
                          e._v(" "),
                          n(
                            "v-button",
                            {
                              attrs: {
                                href: "mailto:sales@dataedo.com?subject=Dataedo purchase inquiry (trial export expired)",
                                target: "_blank",
                              },
                            },
                            [e._v("Contact sales")]
                          ),
                        ],
                        1
                      ),
                      e._v(" "),
                      n("div", { staticClass: "v-font-small mts" }, [
                        e._v(
                          "\n                Get subscription and generate this document again.\n            "
                        ),
                      ]),
                    ]),
              ],
              1
            ),
          ],
          2
        );
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(n(497), n(498), !1, null, null, null);
    e.exports = r.exports;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = {
        metaInfo: function () {
          return { title: this.$store.state.repository.title };
        },
        computed: {
          documentations: function () {
            return _.filter(
              this.$store.state.repository.structureById,
              function (e) {
                return "documentation" === e.type;
              }
            );
          },
          glossaries: function () {
            return _.filter(
              this.$store.state.repository.structureById,
              function (e) {
                return "glossary" === e.type;
              }
            );
          },
          dataDomains: function () {
            return _.filter(
              this.$store.state.repository.structureById,
              function (e) {
                return "data_domain" === e.type;
              }
            );
          },
          businessDomains: function () {
            return _.filter(
              this.$store.state.repository.structureById,
              function (e) {
                return "business_domain" === e.type;
              }
            );
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
        return n(
          "div",
          { staticClass: "doc" },
          [
            n("breadcrumb", {
              staticClass: "doc-breadcrumb",
              attrs: { id: this.$route.params.id },
            }),
            e._v(" "),
            e._m(0),
            e._v(" "),
            e.businessDomains.length > 0
              ? n("div", { staticClass: "doc-section" }, [
                  n("h2", { staticClass: "doc-section-header" }, [
                    e._v("Business Domains"),
                  ]),
                  e._v(" "),
                  n(
                    "ul",
                    { staticClass: "doc-list" },
                    e._l(e.businessDomains, function (e) {
                      return n(
                        "li",
                        [
                          n("item-link", {
                            attrs: { item: e, type: "business_domain" },
                          }),
                        ],
                        1
                      );
                    })
                  ),
                ])
              : e._e(),
            e._v(" "),
            e.dataDomains.length > 0
              ? n("div", { staticClass: "doc-section" }, [
                  n("h2", { staticClass: "doc-section-header" }, [
                    e._v("Data Domains"),
                  ]),
                  e._v(" "),
                  n(
                    "ul",
                    { staticClass: "doc-list" },
                    e._l(e.dataDomains, function (e) {
                      return n(
                        "li",
                        [
                          n("item-link", {
                            attrs: { item: e, type: "data_domain" },
                          }),
                        ],
                        1
                      );
                    })
                  ),
                ])
              : e._e(),
            e._v(" "),
            e.glossaries.length > 0
              ? n("div", { staticClass: "doc-section" }, [
                  n("h2", { staticClass: "doc-section-header" }, [
                    e._v("Glossaries"),
                  ]),
                  e._v(" "),
                  n(
                    "ul",
                    { staticClass: "doc-list" },
                    e._l(e.glossaries, function (e) {
                      return n(
                        "li",
                        [
                          n("item-link", {
                            attrs: { item: e, type: "glossary" },
                          }),
                        ],
                        1
                      );
                    })
                  ),
                ])
              : e._e(),
            e._v(" "),
            e.documentations.length > 0
              ? n("div", { staticClass: "doc-section" }, [
                  n("h2", { staticClass: "doc-section-header" }, [
                    e._v("Databases"),
                  ]),
                  e._v(" "),
                  n(
                    "ul",
                    { staticClass: "doc-list" },
                    e._l(e.documentations, function (e) {
                      return n(
                        "li",
                        [
                          n("item-link", {
                            attrs: { item: e, type: "documentation" },
                          }),
                        ],
                        1
                      );
                    })
                  ),
                ])
              : e._e(),
            e._v(" "),
            n("timestamps"),
          ],
          1
        );
      },
      staticRenderFns: [
        function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", { staticClass: "sticky-header" }, [
            t("h1", { staticClass: "doc-header" }, [this._v(" Repository ")]),
          ]);
        },
      ],
    };
  }
];