export const a7=[

    
  function (e, t, n) {
    var r = n(1)(
      n(381),
      n(382),
      !1,
      function (e) {
        n(379);
      },
      "data-v-3ce34ef7",
      null
    );
    e.exports = r.exports;
  },
  function (e, t, n) {
    var r = n(380);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("0b06635e", r, !0, {});
  },
  function (e, t, n) {
    var r = n(15);
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-term[data-v-3ce34ef7]{padding-top:2px;padding-bottom:2px}.v-term-icon[data-v-3ce34ef7]{margin-top:-2px;vertical-align:middle}.v-term-name[data-v-3ce34ef7]{margin-left:1px}.v-long-description[data-v-3ce34ef7]{overflow:hidden;white-space:normal;max-height:40vh;max-width:40vh}.v-long-description>.v-loader[data-v-3ce34ef7]{width:16px;height:16px;background:#fff url(" +
        r(n(17)) +
        ") 50% no-repeat;background-size:75%;color:transparent;overflow:hidden}",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(10),
      i = n.n(r);
    function s(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(i, s) {
            try {
              var a = t[i](s),
                o = a.value;
            } catch (e) {
              return void n(e);
            }
            if (!a.done)
              return Promise.resolve(o).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(o);
          })("next");
        });
      };
    }
    t.default = {
      props: ["term"],
      data: function () {
        return {
          description: null,
          descriptionDefault: '<div class="v-loader">Loading...</div>',
          freeDescriptionWorker: null,
          freeDescriptionAfter: 6e3,
        };
      },
      created: function () {
        this.description = this.descriptionDefault;
      },
      methods: {
        onMouseEnter: (function () {
          var e = s(
            i.a.mark(function e() {
              var t;
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (null === this.freeDescriptionWorker) {
                          e.next = 3;
                          break;
                        }
                        return (
                          this.stopFreeDescriptionWorker(), e.abrupt("return")
                        );
                      case 3:
                        return (
                          (e.prev = 3),
                          (e.next = 6),
                          this.$store.dispatch(
                            "repository/getObjectDetails",
                            this.term.id
                          )
                        );
                      case 6:
                        (t = e.sent),
                          this.stopFreeDescriptionWorker(),
                          this.$set(this, "description", t.description),
                          (e.next = 15);
                        break;
                      case 11:
                        (e.prev = 11),
                          (e.t0 = e.catch(3)),
                          this.stopFreeDescriptionWorker(),
                          this.$set(this, "description", null);
                      case 15:
                        this.$refs.tooltip.scheduleRepaint();
                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[3, 11]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        onMouseLeave: (function () {
          var e = s(
            i.a.mark(function e() {
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        this.startFreeDescriptionWorker();
                      case 1:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        startFreeDescriptionWorker: function () {
          this.stopFreeDescriptionWorker(),
            (this.freeDescriptionWorker = setTimeout(
              this.freeDescription,
              this.freeDescriptionAfter
            ));
        },
        stopFreeDescriptionWorker: function () {
          null !== this.freeDescriptionWorker &&
            (clearTimeout(this.freeDescriptionWorker),
            (this.freeDescriptionWorker = null));
        },
        freeDescription: function () {
          (this.description = this.descriptionDefault),
            this.stopFreeDescriptionWorker();
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
        return n(
          "tooltip",
          { ref: "tooltip", attrs: { placement: "bottom-start" } },
          [
            n(
              "span",
              {
                staticClass: "v-term",
                on: { mouseenter: e.onMouseEnter, mouseleave: e.onMouseLeave },
              },
              [
                n("object-icon", {
                  staticClass: "v-term-icon",
                  attrs: { obj: e.term },
                }),
                e._v(" "),
                n(
                  "span",
                  { staticClass: "v-term-name" },
                  [
                    n("item-link", { attrs: { item: e.term } }, [
                      e._v(e._s(e.term.name)),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
            e._v(" "),
            n("template", { slot: "popup" }, [
              n("div", {
                staticClass: "v-long-description",
                domProps: { innerHTML: e._s(e.description) },
              }),
            ]),
          ],
          2
        );
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(
      n(386),
      n(387),
      !1,
      function (e) {
        n(384);
      },
      "data-v-13ed68c6",
      null
    );
    e.exports = r.exports;
  },
  function (e, t, n) {
    var r = n(385);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("7ebd6a27", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-clickable[data-v-13ed68c6]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-popup[data-v-13ed68c6]{position:relative;background:#fff;border-radius:4px;padding:6px 8px;-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,.4);box-shadow:0 0 3px 0 rgba(0,0,0,.4);border-bottom:1px solid rgba(0,0,0,.4);color:#2c2c2c;z-index:9999}.v-popup[data-v-13ed68c6] a{color:#c7e9ff}.v-popup[data-v-13ed68c6] a:hover{color:#a6dbff}.v-arrow[data-v-13ed68c6]{position:absolute;display:inline-block;width:8px;height:8px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:#fff;border:.8px solid rgba(0,0,0,.12)}.v-popup[x-placement^=bottom][data-v-13ed68c6]{margin-top:5px}.v-popup[x-placement^=bottom] .v-arrow[data-v-13ed68c6]{top:-4px;margin-left:8px;margin-right:8px;border-bottom-color:transparent;border-right-color:transparent}.v-popup[x-placement^=top][data-v-13ed68c6]{margin-bottom:5px}.v-popup[x-placement^=top] .v-arrow[data-v-13ed68c6]{bottom:-4px;margin-left:8px;margin-right:8px;border-top-color:transparent;border-left-color:transparent}.v-popup[x-placement^=left][data-v-13ed68c6]{margin-right:5px}.v-popup[x-placement^=left] .v-arrow[data-v-13ed68c6]{right:-4px;margin-top:8px;margin-bottom:8px;border-bottom-color:transparent;border-left-color:transparent}.v-popup[x-placement^=right][data-v-13ed68c6]{margin-left:5px}.v-popup[x-placement^=right] .v-arrow[data-v-13ed68c6]{left:-4px;margin-top:8px;margin-bottom:8px;border-top-color:transparent;border-right-color:transparent}",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(19);
    t.default = {
      props: { trigger: { default: "hover", type: String }, placement: String },
      data: function () {
        return { popper: null, visible: !1, hasContent: !1 };
      },
      created: function () {
        document.addEventListener("click", this.documentClick);
      },
      beforeDestroy: function () {
        document.removeEventListener("click", this.documentClick),
          this.popper.destroy();
      },
      mounted: function () {
        this.checkContent(),
          (this.popper = new r.a(this.$refs.trigger, this.$refs.popup, {
            removeOnDestroy: !0,
            placement: this.placement || "bottom",
            modifiers: {
              preventOverflow: { boundariesElement: $("body")[0] },
              arrow: { enabled: !0, element: this.$refs.arrow },
            },
          }));
      },
      methods: {
        checkContent: function () {
          this.hasContent = $(this.$refs.popup).text().trim().length > 0;
        },
        click: function () {
          "click" === this.trigger &&
            ((this.visible = !this.visible), this.scheduleRepaint());
        },
        documentClick: function (e) {
          var t = $(e.target).closest(this.$refs.trigger).length > 0,
            n = $(e.target).closest(this.$refs.popup).length > 0;
          "click" !== this.trigger || t || n || (this.visible = !1);
        },
        mouseenter: function () {
          "hover" === this.trigger &&
            ((this.visible = !0), this.scheduleRepaint());
        },
        mouseleave: function () {
          "hover" === this.trigger && (this.visible = !1);
        },
        scheduleRepaint: function () {
          var e = this;
          this.$nextTick(function () {
            e.$refs.trigger && (e.checkContent(), e.popper.scheduleUpdate());
          });
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
        return n(
          "span",
          { staticClass: "v-tooltip" },
          [
            n(
              "span",
              {
                ref: "trigger",
                staticClass: "v-clickable",
                on: {
                  click: e.click,
                  mouseenter: e.mouseenter,
                  mouseleave: e.mouseleave,
                },
              },
              [e._t("default")],
              2
            ),
            e._v(" "),
            n("transition", { attrs: { name: "fade" } }, [
              n(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.visible && e.hasContent,
                      expression: "visible && hasContent",
                    },
                  ],
                  ref: "popup",
                  staticClass: "v-popup",
                },
                [
                  n("span", { ref: "arrow", staticClass: "v-arrow" }),
                  e._v(" "),
                  e._t("popup"),
                ],
                2
              ),
            ]),
          ],
          1
        );
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(
      n(394),
      n(395),
      !1,
      function (e) {
        n(389), n(392);
      },
      "data-v-60468e66",
      null
    );
    e.exports = r.exports;
  },
  function (e, t, n) {
    var r = n(390);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("0f527c36", r, !0, {});
  },
  function (e, t, n) {
    var r = n(15);
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-tree-nav[data-v-60468e66]{padding-left:20px;padding-right:20px}.v-tree-nav[data-v-60468e66] ul{list-style-type:none}.v-box[data-v-60468e66]{background:url(" +
        r(n(391)) +
        ") 0 0 repeat-y}.v-item[data-v-60468e66]{background:#f9fafb}",
      "",
    ]);
  },
  function (e, t) {
    e.exports = "./data.core/images/placeholder.png?5f6398483cd38b967f6d62c3f98f87e5";
  },
  function (e, t, n) {
    var r = n(393);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("2bff2ff8", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-tree-nav[data-v-60468e66]{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;overflow-y:auto;overflow-x:hidden}.v-box[data-v-60468e66]{position:relative}.v-visible[data-v-60468e66]{position:absolute;width:100%}",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(10),
      i = n.n(r),
      s = n(14);
    t.default = {
      data: function () {
        return { scroll: 0, height: 0, itemHeight: 26, preloadedCount: 20 };
      },
      computed: {
        items: function () {
          return this.$store.getters["repository/visibleStructureTree"];
        },
        areaOffset: function () {
          this.preloadedCount, this.itemHeight;
          return this.renderableFromIndex * this.itemHeight;
        },
        areaHeight: function () {
          var e = this.items.length * this.itemHeight;
          return (
            e > 21474836 &&
              console.error(
                "Tree nav component reached height above maximum supported value. Component may contains potential issues with scrolling and displaying items."
              ),
            e
          );
        },
        renderableFromIndex: function () {
          var e = this.preloadedCount * this.itemHeight;
          return Math.max(0, Math.floor((this.scroll - e) / this.itemHeight));
        },
        renderableToIndex: function () {
          var e = this.preloadedCount * this.itemHeight;
          return Math.ceil(
            (this.scroll + this.height + 2 * e) / this.itemHeight
          );
        },
        visibleFromIndex: function () {
          return Math.max(0, Math.ceil(this.scroll / this.itemHeight));
        },
        visibleToIndex: function () {
          return Math.floor((this.scroll + this.height) / this.itemHeight);
        },
        renderableItems: function () {
          return this.items.slice(
            this.renderableFromIndex,
            this.renderableToIndex
          );
        },
      },
      created: function () {
        (this.onScroll = _.debounce(this.onScroll, 20)),
          s.a.$on("scrollMenuToIndex", this.scrollMenuToIndex);
      },
      mounted: function () {
        this.onScroll(),
          this.onResize(),
          s.a.$on("refresh.tree-nav", this.onResize),
          window.addEventListener("resize", this.onResize),
          setTimeout(this.onResize, 50);
      },
      beforeDestroy: function () {
        window.removeEventListener("resize", this.onResize),
          s.a.$off("scrollMenuToIndex", this.scrollMenuToIndex);
      },
      methods: {
        onScroll: function () {
          this.scroll = this.$refs.container.scrollTop;
        },
        onResize: (function () {
          var e,
            t =
              ((e = i.a.mark(function e() {
                return i.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), this.$nextTick();
                        case 2:
                          return (e.next = 4), e.sent;
                        case 4:
                          this.height = this.$refs.container.clientHeight;
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })),
              function () {
                var t = e.apply(this, arguments);
                return new Promise(function (e, n) {
                  return (function r(i, s) {
                    try {
                      var a = t[i](s),
                        o = a.value;
                    } catch (e) {
                      return void n(e);
                    }
                    if (!a.done)
                      return Promise.resolve(o).then(
                        function (e) {
                          r("next", e);
                        },
                        function (e) {
                          r("throw", e);
                        }
                      );
                    e(o);
                  })("next");
                });
              });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        scrollMenuToIndex: function (e) {
          var t = _.findIndex(this.items, function (t) {
            return t.index === e;
          });
          if (
            !(
              -1 === t ||
              (t >= this.visibleFromIndex && t <= this.visibleToIndex)
            )
          ) {
            if (t < this.visibleFromIndex)
              return $(this.$refs.container).scrollTop(t * this.itemHeight);
            if (t > this.visibleToIndex) {
              var n = Math.max(
                0,
                t * this.itemHeight - this.height + this.itemHeight
              );
              return $(this.$refs.container).scrollTop(n);
            }
          }
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
        return n(
          "div",
          {
            ref: "container",
            staticClass: "v-tree-nav",
            on: { scroll: e.onScroll },
          },
          [
            n(
              "div",
              { staticClass: "v-box", style: { height: e.areaHeight + "px" } },
              [
                n(
                  "div",
                  {
                    staticClass: "v-visible",
                    style: { top: e.areaOffset + "px" },
                  },
                  [
                    n(
                      "ul",
                      e._l(e.renderableItems, function (t) {
                        return n(
                          "li",
                          {
                            key:
                              t.index + "::" + e.$store.state.repository.filter,
                            staticClass: "v-item",
                          },
                          [
                            n("tree-nav-node", {
                              attrs: {
                                index: t.index,
                                "item-height": e.itemHeight,
                              },
                            }),
                          ],
                          1
                        );
                      })
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(
      n(399),
      n(400),
      !1,
      function (e) {
        n(397);
      },
      "data-v-51dcd9de",
      null
    );
    e.exports = r.exports;
  },
  function (e, t, n) {
    var r = n(398);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("2d605a8d", r, !0, {});
  },
  function (e, t, n) {
    var r = n(15);
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-node[data-v-51dcd9de]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.v-toggle[data-v-51dcd9de]{font-size:0;margin-right:4px}.v-link[data-v-51dcd9de]{cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.v-node-icon[data-v-51dcd9de]{margin-right:4px}.icon-expand[data-v-51dcd9de]{-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.icon-expand.is-expanded[data-v-51dcd9de]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.is-loading[data-v-51dcd9de]{background:url(" +
        r(n(17)) +
        ") 50% no-repeat}.is-loading i[data-v-51dcd9de]{visibility:hidden}",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(10),
      i = n.n(r);
    n(14);
    function s(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(i, s) {
            try {
              var a = t[i](s),
                o = a.value;
            } catch (e) {
              return void n(e);
            }
            if (!a.done)
              return Promise.resolve(o).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(o);
          })("next");
        });
      };
    }
    t.default = {
      data: function () {
        return {
          metadata: null,
          id: null,
          node: null,
          levelMargin: null,
          loading: !1,
        };
      },
      props: { itemHeight: Number, index: Number },
      created: function () {
        (this.metadata =
          this.$store.state.repository.structureTree[this.index]),
          (this.id = this.metadata.id),
          (this.node = this.$store.state.repository.structureById[this.id]),
          (this.levelMargin = 20 * this.metadata.level);
      },
      computed: {
        hasAnyChild: function () {
          return this.metadata.hasAnyChild;
        },
        hasAnyChildVisible: function () {
          return this.metadata.hasAnyChildVisible;
        },
      },
      methods: {
        toggleChildrenVisibility: (function () {
          var e = s(
            i.a.mark(function e() {
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (this.loading = !0), (e.next = 3), this.$nextTick()
                        );
                      case 3:
                        this.$store.dispatch("repository/toggle", this.index),
                          (this.loading = !1);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        itemClicked: (function () {
          var e = s(
            i.a.mark(function e() {
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (this.loading = !0), (e.next = 3), this.$nextTick()
                        );
                      case 3:
                        this.$store.dispatch("repository/expand", this.index),
                          (this.loading = !1);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
      },
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            staticClass: "v-node",
            style: {
              height: e.itemHeight + "px",
              "margin-left": e.levelMargin + "px",
            },
            attrs: { "data-nw-id": e.id, "data-nw-name": e.node.name },
          },
          [
            n(
              "span",
              { staticClass: "v-toggle", class: { "is-loading": e.loading } },
              [
                this.hasAnyChild
                  ? n("i", {
                      class: {
                        "icon-expand": !0,
                        "is-expanded": this.hasAnyChildVisible,
                      },
                      on: { click: e.toggleChildrenVisibility },
                    })
                  : n("i", { staticClass: "icon-empty" }),
              ]
            ),
            e._v(" "),
            n(
              "span",
              { staticClass: "v-link", attrs: { title: e.node.name } },
              [
                n(
                  "item-link",
                  {
                    attrs: { item: e.node, force: !0, "scroll-menu": !1 },
                    nativeOn: {
                      click: function (t) {
                        return e.itemClicked(t);
                      },
                    },
                  },
                  [
                    n("object-icon", {
                      staticClass: "v-node-icon",
                      attrs: { obj: e.node },
                    }),
                    e._v(" "),
                    n("filter-highlight", { attrs: { "filter-key": "name" } }, [
                      e._v(e._s(e.node.name)),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ]
        );
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(
      n(404),
      n(405),
      !1,
      function (e) {
        n(402);
      },
      "data-v-39e52f50",
      null
    );
    e.exports = r.exports;
  },
  function (e, t, n) {
    var r = n(403);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("3feccdd6", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".gray[data-v-39e52f50]{color:gray}",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = { props: ["path", "name"] });
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.path && "" !== e.path
          ? n("span", [
              n("span", { staticClass: "gray" }, [e._v(e._s(e.path) + ".")]),
              e._v(e._s(e.name)),
            ])
          : n("span", [e._v(e._s(e.name))]);
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = n(1)(n(407), n(408), !1, null, null, null);
    e.exports = r.exports;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(10),
      i = n.n(r),
      s = n(5);
    n.n(s);
    t.default = {
      props: { customFields: Array, items: Array },
      data: function () {
        return { visibleItemsCount: 50, scrollableArea: null };
      },
      watch: {
        items: function (e, t) {
          this.onContentScroll();
        },
      },
      mounted: function () {
        (this.scrollableArea = $(".v-content")),
          this.scrollableArea.bind("scroll", this.onContentScroll);
      },
      beforeDestroy: function () {
        this.scrollableArea.unbind("scroll", this.onContentScroll);
      },
      computed: {
        customFieldsArray: function () {
          return this.customFields || [];
        },
        visibleItems: function () {
          return (this.items || []).slice(0, this.visibleItemsCount);
        },
      },
      methods: {
        customFieldTextAlign: function (e) {
          return "checkbox" === e.type.toLowerCase() ? "center" : "left";
        },
        onContentScroll: (function () {
          var e,
            t =
              ((e = i.a.mark(function e() {
                var t, n, r, s;
                return i.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = $(this.$refs.table).offset().top),
                            (n = $(this.$refs.table).outerHeight()),
                            (r = this.scrollableArea.outerHeight()),
                            (s = this.scrollableArea.scrollTop()),
                            !(r + s >= s + t + n))
                          ) {
                            e.next = 11;
                            break;
                          }
                          if (
                            ((this.visibleItemsCount += 5),
                            !(this.visibleItemsCount < this.items.length))
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (e.next = 10), this.$nextTick();
                        case 10:
                          this.onContentScroll();
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })),
              function () {
                var t = e.apply(this, arguments);
                return new Promise(function (e, n) {
                  return (function r(i, s) {
                    try {
                      var a = t[i](s),
                        o = a.value;
                    } catch (e) {
                      return void n(e);
                    }
                    if (!a.done)
                      return Promise.resolve(o).then(
                        function (e) {
                          r("next", e);
                        },
                        function (e) {
                          r("throw", e);
                        }
                      );
                    e(o);
                  })("next");
                });
              });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
      },
    };
  },
  function (e, t) {
    e.exports = {
      render: function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "table" }, [
          n(
            "table",
            { ref: "table" },
            [
              n(
                "tr",
                [
                  n("th"),
                  e._v(" "),
                  n("th"),
                  e._v(" "),
                  n("th", [e._v("Name")]),
                  e._v(" "),
                  e._l(e.customFieldsArray, function (t) {
                    return n("th", [
                      e._v("\n                " + e._s(t) + "\n            "),
                    ]);
                  }),
                ],
                2
              ),
              e._v(" "),
              e._l(e.visibleItems, function (t, r) {
                return n(
                  "tr",
                  [
                    n("td", [e._v(e._s(r + 1))]),
                    e._v(" "),
                    n("td", [n("object-icon", { attrs: { obj: t } })], 1),
                    e._v(" "),
                    n("td", [n("item-link", { attrs: { item: t } })], 1),
                    e._v(" "),
                    e._l(e.customFieldsArray, function (r) {
                      return n(
                        "td",
                        {
                          style: {
                            "text-align": e.customFieldTextAlign(
                              t.custom_fields[r]
                            ),
                          },
                        },
                        [
                          t.custom_fields && void 0 !== t.custom_fields[r]
                            ? n(
                                "span",
                                [
                                  n("custom-field", {
                                    attrs: { field: t.custom_fields[r] },
                                  }),
                                ],
                                1
                              )
                            : n("span"),
                        ]
                      );
                    }),
                  ],
                  2
                );
              }),
            ],
            2
          ),
        ]);
      },
      staticRenderFns: [],
    };
  },
  function (e, t, n) {
    var r = {
      "./docs-object.vue": 410,
      "./docs.vue": 491,
      "./docs/business-area.vue": 59,
      "./docs/business-domain.vue": 56,
      "./docs/business-domains.vue": 57,
      "./docs/data-area.vue": 58,
      "./docs/data-domain.vue": 54,
      "./docs/data-domains.vue": 55,
      "./docs/data-sources.vue": 60,
      "./docs/dataset.vue": 51,
      "./docs/datasets.vue": 50,
      "./docs/documentation.vue": 30,
      "./docs/function.vue": 23,
      "./docs/functions.vue": 41,
      "./docs/glossaries.vue": 61,
      "./docs/glossary.vue": 43,
      "./docs/lookup.vue": 49,
      "./docs/lookups.vue": 48,
      "./docs/module-functions.vue": 36,
      "./docs/module-procedure-like-objects.vue": 13,
      "./docs/module-procedures.vue": 35,
      "./docs/module-sql-queries.vue": 47,
      "./docs/module-structures.vue": 37,
      "./docs/module-table-like-objects.vue": 8,
      "./docs/module-tables.vue": 33,
      "./docs/module-views.vue": 34,
      "./docs/module.vue": 32,
      "./docs/modules.vue": 31,
      "./docs/procedure-like-object.vue": 9,
      "./docs/procedure-like-objects.vue": 12,
      "./docs/procedure.vue": 22,
      "./docs/procedures.vue": 40,
      "./docs/report-like-object.vue": 27,
      "./docs/report-like-objects.vue": 26,
      "./docs/report.vue": 53,
      "./docs/reports.vue": 52,
      "./docs/repository.vue": 496,
      "./docs/sql-queries.vue": 46,
      "./docs/sql-query.vue": 25,
      "./docs/structure.vue": 24,
      "./docs/structures.vue": 42,
      "./docs/table-like-object.vue": 4,
      "./docs/table-like-objects.vue": 7,
      "./docs/table.vue": 20,
      "./docs/tables.vue": 38,
      "./docs/term.vue": 45,
      "./docs/terms.vue": 44,
      "./docs/view.vue": 21,
      "./docs/views.vue": 39,
      "./fragments.vue": 499,
      "./fragments/module-diagram.vue": 503,
      "./fragments/structure-essential.vue": 505,
      "./fragments/structure.vue": 507,
      "./fragments/structures.vue": 512,
      "./fragments/table-essential.vue": 514,
      "./fragments/table.vue": 516,
      "./fragments/tables.vue": 521,
      "./not-found.vue": 523,
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
      (i.id = 409);
  },
  function (e, t, n) {
    var r = n(1)(
      n(413),
      n(490),
      !1,
      function (e) {
        n(411);
      },
      "data-v-34de7157",
      null
    );
    e.exports = r.exports;
  },
  function (e, t, n) {
    var r = n(412);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("1cdb8894", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([e.i, "", ""]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = {
        data: function () {
          return {
            typeToComponent: {
              documentation: n(30),
              modules: n(31),
              module: n(32),
              module_tables: n(33),
              module_table: n(20),
              module_views: n(34),
              module_view: n(21),
              module_procedures: n(35),
              module_procedure: n(22),
              module_functions: n(36),
              module_function: n(23),
              module_structures: n(37),
              module_structure: n(24),
              tables: n(38),
              table: n(20),
              views: n(39),
              view: n(21),
              procedures: n(40),
              procedure: n(22),
              functions: n(41),
              function: n(23),
              structures: n(42),
              structure: n(24),
              glossary: n(43),
              terms: n(44),
              term: n(45),
              sql_queries: n(46),
              sql_query: n(25),
              module_sql_queries: n(47),
              module_sql_query: n(25),
              lookups: n(48),
              lookup: n(49),
              datasets: n(50),
              dataset: n(51),
              reports: n(52),
              report: n(53),
              graph_nodes: n(7),
              graph_node: n(4),
              module_graph_nodes: n(8),
              module_graph_node: n(4),
              app_lists: n(7),
              app_list: n(4),
              module_app_lists: n(8),
              module_app_list: n(4),
              cubes: n(7),
              cube: n(4),
              module_cubes: n(8),
              module_cube: n(4),
              data_types: n(7),
              data_type: n(4),
              module_data_types: n(8),
              module_data_type: n(4),
              destinations: n(7),
              destination: n(4),
              module_destinations: n(8),
              module_destination: n(4),
              dimensions: n(7),
              dimension: n(4),
              module_dimensions: n(8),
              module_dimension: n(4),
              entities: n(7),
              entity: n(4),
              module_entities: n(8),
              module_entity: n(4),
              forms: n(7),
              form: n(4),
              module_forms: n(8),
              module_form: n(4),
              graph_edges: n(7),
              graph_edge: n(4),
              module_graph_edges: n(8),
              module_graph_edge: n(4),
              search_indexes: n(7),
              search_index: n(4),
              module_search_indexes: n(8),
              module_search_index: n(4),
              sequences: n(7),
              sequence: n(4),
              module_sequences: n(8),
              module_sequence: n(4),
              sources: n(7),
              source: n(4),
              module_sources: n(8),
              module_source: n(4),
              topics: n(7),
              topic: n(4),
              module_topics: n(8),
              module_topic: n(4),
              packages: n(12),
              package: n(9),
              module_packages: n(13),
              module_package: n(9),
              etl_programs: n(12),
              etl_program: n(9),
              module_etl_programs: n(13),
              module_etl_program: n(9),
              programs: n(12),
              program: n(9),
              module_programs: n(13),
              module_program: n(9),
              apis: n(12),
              api: n(9),
              module_apis: n(13),
              module_api: n(9),
              jobs: n(12),
              job: n(9),
              module_jobs: n(13),
              module_job: n(9),
              sql_scripts: n(12),
              sql_script: n(9),
              module_sql_scripts: n(13),
              module_sql_script: n(9),
              dashboards: n(26),
              dashboard: n(27),
              visualizations: n(26),
              visualization: n(27),
              data_domain: n(54),
              data_domains: n(55),
              business_domain: n(56),
              business_domains: n(57),
              data_area: n(58),
              business_area: n(59),
              data_sources: n(60),
              glossaries: n(61),
            },
          };
        },
        computed: {
          objectPageByType: function () {
            var e =
                this.$store.state.repository.structureById[
                  this.$route.params.id
                ],
              t = this.typeToComponent[e.type];
            return void 0 === t ? null : t;
          },
          objectPageCaptionByType: function () {
            return (
              {
                modules: "Modules",
                module_tables: "Tables",
                module_views: "Views",
                module_procedures: "Procedures",
                module_functions: "Functions",
                module_structures: "Structures",
                tables: "Tables",
                views: "Views",
                procedures: "Procedures",
                functions: "Functions",
                structures: "Structures",
                terms: "Terms",
                sql_queries: "SQL Queries",
                sql_query: "SQL Query",
                module_sql_queries: "SQL Queries",
                lookups: "Lookups",
                lookup: "Lookup",
                datasets: "Datasets",
                dataset: "Dataset",
                reports: "Reports",
                report: "Report",
                graph_nodes: "Graph Nodes",
                graph_node: "Graph Node",
                module_graph_nodes: "Graph Nodes",
                app_lists: "App Lists",
                module_app_lists: "App Lists",
                cubes: "Cubes",
                module_cubes: "Cubes",
                data_types: "Data Types",
                module_data_types: "Data Types",
                destinations: "Destinations",
                module_destinations: "Destinations",
                dimensions: "Dimensions",
                module_dimensions: "Dimensions",
                entities: "Entities",
                module_entities: "Entities",
                forms: "Forms",
                module_forms: "Forms",
                graph_edges: "Graph Edges",
                module_graph_edges: "Graph Edge",
                search_indexes: "Search Indexes",
                module_search_indexes: "Search Indexes",
                sequences: "Sequences",
                module_sequences: "Sequences",
                sources: "Sources",
                module_sources: "Sources",
                topics: "Topics",
                module_topics: "Topics",
                packages: "Packages",
                module_packages: "Packages",
                etl_programs: "ETL Programs",
                module_etl_programs: "ETL Programs",
                programs: "Programs",
                module_programs: "Programs",
                apis: "APIs",
                module_apis: "APIs",
                jobs: "Jobs",
                module_jobs: "Jobs",
                sql_scripts: "SQL Scripts",
                module_sql_scripts: "SQL Scripts",
                dashboards: "Dashboards",
                module_dashboards: "Dashboards",
                visualizations: "Visualizations",
                module_visualizations: "Visualizations",
              }[
                this.$store.state.repository.structureById[
                  this.$route.params.id
                ].type
              ] || "Objects"
            );
          },
          objectListNameByType: function () {
            var e =
              this.$store.state.repository.structureById[this.$route.params.id];
            return (
              {
                module_tables: "tables",
                module_views: "views",
                module_procedures: "procedures",
                module_functions: "functions",
                module_structures: "structures",
                module_sql_queries: "sql_queries",
                module_graph_nodes: "graph_nodes",
                module_app_lists: "app_lists",
                module_cubes: "cubes",
                module_data_types: "data_types",
                module_destinations: "destinations",
                module_dimensions: "dimensions",
                module_entities: "entities",
                module_forms: "forms",
                module_graph_edges: "graph_edges",
                module_search_indexes: "search_indexes",
                module_sequences: "sequences",
                module_sources: "sources",
                module_topics: "topics",
                module_packages: "packages",
                module_etl_programs: "etl_programs",
                module_programs: "programs",
                module_apis: "apis",
                module_jobs: "jobs",
                module_sql_scripts: "sql_scripts",
                module_dashboards: "dashboards",
                module_visualizations: "visualizations",
              }[e.type] || e.type
            );
          },
          columnsListNameByType: function () {
            return (
              {
                structure: "Fields",
                report: "Visualizations and fields",
                graph_node: "Properties",
                cube: "Dimensions and measures",
                data_type: "Fields",
                dimension: "Attributes",
                entity: "Attributes",
                form: "Fields",
                graph_edge: "Properties",
                search_index: "Keys",
                sequence: "Fields",
                topic: "Fields",
                dashboard: "Visualizations and fields",
                visualization: "Visualizations and fields",
              }[
                this.$store.state.repository.structureById[
                  this.$route.params.id
                ].type
              ] || "Columns1"
            );
          },
          parametersListNameByType: function () {
            return (
              { api: "Properties" }[
                this.$store.state.repository.structureById[
                  this.$route.params.id
                ].type
              ] || "Parameters"
            );
          },
        },
      });
  },
  function (e, t, n) {
    var r = n(415);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("b3a0f472", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-obj-count[data-v-458b20c9]{opacity:.7}",
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
        hasModules: function () {
          return this.obj.modules && this.obj.modules.length > 0;
        },
        hasDbObjects: function () {
          return this.obj.dbObjects && this.obj.dbObjects.length > 0;
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
                            type: "database",
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
                  e.hasModules
                    ? n("div", { staticClass: "doc-section" }, [
                        n("h2", { staticClass: "doc-section-header" }, [
                          e._v("Subject Areas"),
                        ]),
                        e._v(" "),
                        n(
                          "ul",
                          { staticClass: "doc-list" },
                          e._l(t.modules, function (e) {
                            return n(
                              "li",
                              [n("item-link", { attrs: { item: e } })],
                              1
                            );
                          })
                        ),
                      ])
                    : e._e(),
                  e._v(" "),
                  e.hasDbObjects
                    ? n("div", { staticClass: "doc-section" }, [
                        n("h2", { staticClass: "doc-section-header" }, [
                          e._v("Database objects"),
                        ]),
                        e._v(" "),
                        n(
                          "ul",
                          { staticClass: "doc-list" },
                          e._l(t.dbObjects, function (t) {
                            return n(
                              "li",
                              [
                                n("item-link", { attrs: { item: t } }, [
                                  e._v(e._s(t.name)),
                                ]),
                                e._v(" "),
                                n("span", { staticClass: "v-obj-count" }, [
                                  e._v("(" + e._s(t.count) + ")"),
                                ]),
                              ],
                              1
                            );
                          })
                        ),
                      ])
                    : e._e(),
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
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      e._v("Subject Areas"),
                    ]),
                  ]),
                  e._v(" "),
                  t.modules && t.modules.length > 0
                    ? n(
                        "div",
                        { staticClass: "doc-section" },
                        [
                          n("items-table", {
                            attrs: {
                              "custom-fields": t.custom_fields,
                              items: t.modules,
                            },
                          }),
                        ],
                        1
                      )
                    : e._e(),
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
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      n("i", { staticClass: "icon2x-module" }),
                      e._v(
                        "\n                " + e._s(t.name) + "\n            "
                      ),
                    ]),
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
                  t.description
                    ? n("div", {
                        staticClass: "doc-description",
                        domProps: { innerHTML: e._s(t.description) },
                      })
                    : e._e(),
                  e._v(" "),
                  t.tables && t.tables.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "tables" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Tables\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.tables_custom_fields,
                                  items: t.tables,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.views && t.views.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "views" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Views\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.views_custom_fields,
                                  items: t.views,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.graph_nodes && t.graph_nodes.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "graph_nodes" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Graph Nodes\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.graph_nodes_custom_fields,
                                  items: t.graph_nodes,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.graph_edges && t.graph_edges.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "graph_edges" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Graph Edges\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.graph_edges_custom_fields,
                                  items: t.graph_edges,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.search_indexes && t.search_indexes.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "search_indexes" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v(
                              "\n                Search Indexes\n            "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields":
                                    t.search_indexes_custom_fields,
                                  items: t.search_indexes,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.cubes && t.cubes.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "cubes" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Cubes\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.cubes_custom_fields,
                                  items: t.cubes,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.dimensions && t.dimensions.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "dimensions" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Dimensions\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.dimensions_custom_fields,
                                  items: t.dimensions,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.structures && t.structures.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "structures" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Structures\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.structures_custom_fields,
                                  items: t.structures,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.procedures && t.procedures.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "procedures" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Procedures\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.procedures_custom_fields,
                                  items: t.procedures,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.functions && t.functions.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "functions" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Functions\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.functions_custom_fields,
                                  items: t.functions,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.packages && t.packages.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "packages" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Packages\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.packages_custom_fields,
                                  items: t.packages,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.etl_programs && t.etl_programs.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "etl_programs" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v(
                              "\n                ETL Programs\n            "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.etl_programs_custom_fields,
                                  items: t.etl_programs,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.programs && t.programs.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "programs" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v(
                              "\n                Scripts/Programs\n            "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.programs_custom_fields,
                                  items: t.programs,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.apis && t.apis.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "apis" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                APIs\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.apis_custom_fields,
                                  items: t.apis,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.data_types && t.data_types.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "data_types" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Data Types\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.data_types_custom_fields,
                                  items: t.data_types,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.sequences && t.sequences.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "sequences" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Sequences\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.sequences_custom_fields,
                                  items: t.sequences,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.jobs && t.jobs.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "jobs" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Tasks/Jobs\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.jobs_custom_fields,
                                  items: t.jobs,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.topics && t.topics.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "topics" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Topics\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.topics_custom_fields,
                                  items: t.topics,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.sql_queries && t.sql_queries.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "sql_queries" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                SQL Queries\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.sql_queries_custom_fields,
                                  items: t.sql_queries,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.sql_scripts && t.sql_scripts.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "sql_scripts" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                SQL Scripts\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.sql_scripts_custom_fields,
                                  items: t.sql_scripts,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.app_lists && t.app_lists.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "app_lists" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v(
                              "\n                Application Lists\n            "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.app_lists_custom_fields,
                                  items: t.app_lists,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.forms && t.forms.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "forms" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v(
                              "\n                Application Forms\n            "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.formscustom_fields,
                                  items: t.forms,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.entities && t.entities.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "entities" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Entities\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.entities_custom_fields,
                                  items: t.entities,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.sources && t.sources.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "sources" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Sources\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.sources_custom_fields,
                                  items: t.sources,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.destinations && t.destinations.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "destinations" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v(
                              "\n                Destinations\n            "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.destinations_custom_fields,
                                  items: t.destinations,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.dashboards && t.dashboards.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "dashboards" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Dashboards\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.dashboards_custom_fields,
                                  items: t.dashboards,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.data_sources && t.data_sources.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "data_sources" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v(
                              "\n                Data Sources\n            "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.data_sources_custom_fields,
                                  items: t.data_sources,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  t.visualizations && t.visualizations.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "visualizations" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v(
                              "\n                Visualizations\n            "
                            ),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields":
                                    t.visualizations_custom_fields,
                                  items: t.visualizations,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
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
                return [
                  n(
                    "div",
                    { staticClass: "doc-actions" },
                    [
                      n(
                        "router-link",
                        {
                          attrs: {
                            to: "/fragments/tables/" + e.$route.params.id,
                          },
                        },
                        [e._v(" Direct link ")]
                      ),
                    ],
                    1
                  ),
                  e._v(" "),
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
                      e._v("\n                Tables\n            "),
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
                          items: t.tables,
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
    var r = n(422);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("117ced18", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-value[data-v-42eff553]{margin-top:10px}",
      "",
    ]);
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
                console.log(2565);
                return [n("div", { staticClass: "sticky-header" }, [
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
                  n("div", { staticClass: "doc-actions" }, [
                    n(
                      "div",
                      [
                        n(
                          "router-link",
                          {
                            attrs: {
                              to: "/fragments/table/" + e.$route.params.id,
                            },
                          },
                          [e._v(" Direct link ")]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    n(
                      "div",
                      [
                        n(
                          "router-link",
                          {
                            attrs: {
                              to:
                                "/fragments/table-essential/" +
                                e.$route.params.id,
                            },
                          },
                          [e._v(" Essential view ")]
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
                      e._v("\n                Views\n            "),
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
                          items: t.views,
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
                      e._v("\n                Procedures\n            "),
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
                          items: t.procedures,
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
                      e._v("\n                Functions\n            "),
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
                          items: t.functions,
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
                return [
                  n(
                    "div",
                    { staticClass: "doc-actions" },
                    [
                      n(
                        "router-link",
                        {
                          attrs: {
                            to: "/fragments/structures/" + e.$route.params.id,
                          },
                        },
                        [e._v(" Direct link ")]
                      ),
                    ],
                    1
                  ),
                  e._v(" "),
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
                      e._v("\n                Structures\n            "),
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
                          items: t.structures,
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
                  n("div", { staticClass: "doc-actions" }, [
                    n(
                      "div",
                      [
                        n(
                          "router-link",
                          {
                            attrs: {
                              to: "/fragments/structure/" + e.$route.params.id,
                            },
                          },
                          [e._v(" Direct link ")]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    n(
                      "div",
                      [
                        n(
                          "router-link",
                          {
                            attrs: {
                              to:
                                "/fragments/structure-essential/" +
                                e.$route.params.id,
                            },
                          },
                          [e._v(" Essential view ")]
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
                  n("schema-script", { attrs: { script: t.script } }),
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
                return [
                  n(
                    "div",
                    { staticClass: "doc-actions" },
                    [
                      n(
                        "router-link",
                        {
                          attrs: {
                            to: "/fragments/tables/" + e.$route.params.id,
                          },
                        },
                        [e._v(" Direct link ")]
                      ),
                    ],
                    1
                  ),
                  e._v(" "),
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [e._v("Tables")]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t.tables,
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
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [e._v("Views")]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t.views,
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
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      e._v("Procedures"),
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
                          items: t.procedures,
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
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [e._v("Functions")]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t.functions,
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
                return [
                  n(
                    "div",
                    { staticClass: "doc-actions" },
                    [
                      n(
                        "router-link",
                        {
                          attrs: {
                            to: "/fragments/structures/" + e.$route.params.id,
                          },
                        },
                        [e._v(" Direct link ")]
                      ),
                    ],
                    1
                  ),
                  e._v(" "),
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      e._v("Structures"),
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
                          items: t.structures,
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
    var r = n(439);
    "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
    n(3)("54041241", r, !0, {});
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      ".v-obj-count[data-v-01ed641b]{opacity:.7}",
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
        hasModules: function () {
          return this.obj.modules && this.obj.modules.length > 0;
        },
        hasDbObjects: function () {
          return this.obj.dbObjects && this.obj.dbObjects.length > 0;
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
                  n("div", {
                    staticClass: "doc-description",
                    domProps: { innerHTML: e._s(t.description) },
                  }),
                  e._v(" "),
                  t.terms && t.terms.length > 0
                    ? n(
                        "collapsible",
                        { attrs: { uid: "terms" } },
                        [
                          n("template", { slot: "header" }, [
                            e._v("\n                Terms\n            "),
                          ]),
                          e._v(" "),
                          n(
                            "div",
                            { staticClass: "doc-section" },
                            [
                              n("items-table", {
                                attrs: {
                                  "custom-fields": t.terms_custom_fields,
                                  items: t.terms,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : e._e(),
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
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [e._v("Terms")]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t.terms,
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
                  n("term-lookups", { attrs: { links: t.related_lookups } }),
                  e._v(" "),
                  n("related-terms", { attrs: { terms: t.related_terms } }),
                  e._v(" "),
                  n("term-data-links", { attrs: { links: t.data_links } }),
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
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [
                      e._v("SQL Queries"),
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
                          items: t.sql_queries,
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
                      e._v("\n                SQL Queries\n            "),
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
                          items: t.sql_queries,
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
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [e._v("Lookups")]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t.lookups,
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
                  n("lookup-values", {
                    attrs: {
                      lookup_values: t.lookup_values,
                      "custom-fields": t.lookup_values_custom_fields,
                    },
                  }),
                  e._v(" "),
                  n("lookup-linked-terms", {
                    attrs: { lookup_linked_terms: t.linked_terms },
                  }),
                  e._v(" "),
                  n("lookup-linked-columns", {
                    attrs: { lookup_linked_columns: t.linked_columns },
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
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [e._v("Datasets")]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t.items,
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
                return [
                  n("div", { staticClass: "sticky-header" }, [
                    n("h1", { staticClass: "doc-header" }, [e._v("Reports")]),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    { staticClass: "doc-section" },
                    [
                      n("items-table", {
                        attrs: {
                          "custom-fields": t.custom_fields,
                          items: t.items,
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
  }
];