(() => {
  "use strict";
  function e(e) {
    this.type = e;
  }
  (e.prototype.init = function () {
    const e = this;
    (this.оbjects = []),
      (this.daClassname = "_dynamic_adapt_"),
      (this.nodes = document.querySelectorAll("[data-da]"));
    for (let e = 0; e < this.nodes.length; e++) {
      const t = this.nodes[e],
        s = t.dataset.da.trim().split(","),
        i = {};
      (i.element = t),
        (i.parent = t.parentNode),
        (i.destination = document.querySelector(s[0].trim())),
        (i.breakpoint = s[1] ? s[1].trim() : "767"),
        (i.place = s[2] ? s[2].trim() : "last"),
        (i.index = this.indexInParent(i.parent, i.element)),
        this.оbjects.push(i);
    }
    this.arraySort(this.оbjects),
      (this.mediaQueries = Array.prototype.map.call(
        this.оbjects,
        function (e) {
          return (
            "(" + this.type + "-width: " + e.breakpoint + "px)," + e.breakpoint
          );
        },
        this
      )),
      (this.mediaQueries = Array.prototype.filter.call(
        this.mediaQueries,
        function (e, t, s) {
          return Array.prototype.indexOf.call(s, e) === t;
        }
      ));
    for (let t = 0; t < this.mediaQueries.length; t++) {
      const s = this.mediaQueries[t],
        i = String.prototype.split.call(s, ","),
        n = window.matchMedia(i[0]),
        a = i[1],
        l = Array.prototype.filter.call(this.оbjects, function (e) {
          return e.breakpoint === a;
        });
      n.addListener(function () {
        e.mediaHandler(n, l);
      }),
        this.mediaHandler(n, l);
    }
  }),
    (e.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          (s.index = this.indexInParent(s.parent, s.element)),
            this.moveTo(s.place, s.element, s.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const s = t[e];
          s.element.classList.contains(this.daClassname) &&
            this.moveBack(s.parent, s.element, s.index);
        }
    }),
    (e.prototype.moveTo = function (e, t, s) {
      t.classList.add(this.daClassname),
        "last" === e || e >= s.children.length
          ? s.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? s.children[e].insertAdjacentElement("beforebegin", t)
          : s.insertAdjacentElement("afterbegin", t);
    }),
    (e.prototype.moveBack = function (e, t, s) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[s]
          ? e.children[s].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (e.prototype.indexInParent = function (e, t) {
      const s = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(s, t);
    }),
    (e.prototype.arraySort = function (e) {
      "min" === this.type
        ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? -1
                : "last" === e.place || "first" === t.place
                ? 1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          })
        : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? 1
                : "last" === e.place || "first" === t.place
                ? -1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          });
    });
  new e("max").init();
  let t = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
      );
    },
  };
  let s = (e, t = 500, s = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = s ? `${s}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !s),
            !s && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !s && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide");
        }, t));
    },
    i = (e, t = 500, s = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          s && e.style.removeProperty("height");
        let i = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = i + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t);
      }
    },
    n = (e, t = 500) => (e.hidden ? i(e, t) : s(e, t)),
    a = !0,
    l = (e = 500) => {
      let t = document.querySelector("body");
      if (a) {
        let s = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (a = !1),
          setTimeout(function () {
            a = !0;
          }, e);
      }
    },
    r = (e = 500) => {
      let t = document.querySelector("body");
      if (a) {
        let s = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < s.length; e++) {
          s[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (a = !1),
          setTimeout(function () {
            a = !0;
          }, e);
      }
    };
  function o(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  function c(e, t) {
    const s = Array.from(e).filter(function (e, s, i) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (s.length) {
      const e = [];
      s.forEach((s) => {
        const i = {},
          n = s.dataset[t].split(",");
        (i.value = n[0]),
          (i.type = n[1] ? n[1].trim() : "max"),
          (i.item = s),
          e.push(i);
      });
      let i = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      i = (function (e) {
        return e.filter(function (e, t, s) {
          return s.indexOf(e) === t;
        });
      })(i);
      const n = [];
      if (i.length)
        return (
          i.forEach((t) => {
            const s = t.split(","),
              i = s[1],
              a = s[2],
              l = window.matchMedia(s[0]),
              r = e.filter(function (e) {
                if (e.value === i && e.type === a) return !0;
              });
            n.push({ itemsArray: r, matchMedia: l });
          }),
          n
        );
    }
  }
  let d = (e, t = !1, s = 500, i = 0) => {
    const n = document.querySelector(e);
    if (n) {
      let a = "",
        r = 0;
      t &&
        ((a = "header.header"), (r = document.querySelector(a).offsetHeight));
      let c = {
        speedAsDuration: !0,
        speed: s,
        header: a,
        offset: i,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (l(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(n, "", c);
      else {
        let e = n.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: r ? e - r : e, behavior: "smooth" });
      }
      o(`[gotoBlock]: Юхуу...едем к ${e}`);
    } else o(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
  };
  class p {
    constructor(e, t = null) {
      if (
        ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
        (this.selectClasses = {
          classSelect: "select",
          classSelectBody: "select__body",
          classSelectTitle: "select__title",
          classSelectValue: "select__value",
          classSelectLabel: "select__label",
          classSelectInput: "select__input",
          classSelectText: "select__text",
          classSelectLink: "select__link",
          classSelectOptions: "select__options",
          classSelectOptionsScroll: "select__scroll",
          classSelectOption: "select__option",
          classSelectContent: "select__content",
          classSelectRow: "select__row",
          classSelectData: "select__asset",
          classSelectDisabled: "_select-disabled",
          classSelectTag: "_select-tag",
          classSelectOpen: "_select-open",
          classSelectActive: "_select-active",
          classSelectFocus: "_select-focus",
          classSelectMultiple: "_select-multiple",
          classSelectCheckBox: "_select-checkbox",
          classSelectOptionSelected: "_select-selected",
        }),
        (this._this = this),
        this.config.init)
      ) {
        const e = t
          ? document.querySelectorAll(t)
          : document.querySelectorAll("select");
        e.length
          ? (this.selectsInit(e),
            this.setLogging(`Проснулся, построил селектов: (${e.length})`))
          : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
      }
    }
    getSelectClass(e) {
      return `.${e}`;
    }
    getSelectElement(e, t) {
      return {
        originalSelect: e.querySelector("select"),
        selectElement: e.querySelector(this.getSelectClass(t)),
      };
    }
    selectsInit(e) {
      e.forEach((e, t) => {
        this.selectInit(e, t + 1);
      }),
        document.addEventListener(
          "click",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "keydown",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "focusin",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "focusout",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        );
    }
    selectInit(e, t) {
      const s = this;
      let i = document.createElement("div");
      if (
        (i.classList.add(this.selectClasses.classSelect),
        e.parentNode.insertBefore(i, e),
        i.appendChild(e),
        (e.hidden = !0),
        t && (e.dataset.id = t),
        i.insertAdjacentHTML(
          "beforeend",
          `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
        ),
        this.selectBuild(e),
        this.getSelectPlaceholder(e) &&
          ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
          this.getSelectPlaceholder(e).label.show))
      ) {
        this.getSelectElement(
          i,
          this.selectClasses.classSelectTitle
        ).selectElement.insertAdjacentHTML(
          "afterbegin",
          `<span class="${this.selectClasses.classSelectLabel}">${
            this.getSelectPlaceholder(e).label.text
              ? this.getSelectPlaceholder(e).label.text
              : this.getSelectPlaceholder(e).value
          }</span>`
        );
      }
      (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
        e.addEventListener("change", function (e) {
          s.selectChange(e);
        });
    }
    selectBuild(e) {
      const t = e.parentElement;
      (t.dataset.id = e.dataset.id),
        t.classList.add(
          e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
        ),
        e.multiple
          ? t.classList.add(this.selectClasses.classSelectMultiple)
          : t.classList.remove(this.selectClasses.classSelectMultiple),
        e.hasAttribute("data-checkbox") && e.multiple
          ? t.classList.add(this.selectClasses.classSelectCheckBox)
          : t.classList.remove(this.selectClasses.classSelectCheckBox),
        this.setSelectTitleValue(t, e),
        this.setOptions(t, e),
        e.hasAttribute("data-search") && this.searchActions(t),
        e.hasAttribute("data-open") && this.selectAction(t),
        this.selectDisabled(t, e);
    }
    selectsActions(e) {
      const t = e.target,
        s = e.type;
      if (
        t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
        t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
      ) {
        const i = t.closest(".select")
            ? t.closest(".select")
            : document.querySelector(
                `.${this.selectClasses.classSelect}[data-id="${
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ).dataset.selectId
                }"]`
              ),
          n = this.getSelectElement(i).originalSelect;
        if ("click" === s) {
          if (!n.disabled)
            if (
              t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
            ) {
              const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                ),
                s = document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                );
              this.optionAction(i, n, s);
            } else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectTitle)
              )
            )
              this.selectAction(i);
            else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              )
            ) {
              const e = t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              );
              this.optionAction(i, n, e);
            }
        } else
          "focusin" === s || "focusout" === s
            ? t.closest(this.getSelectClass(this.selectClasses.classSelect)) &&
              ("focusin" === s
                ? i.classList.add(this.selectClasses.classSelectFocus)
                : i.classList.remove(this.selectClasses.classSelectFocus))
            : "keydown" === s && "Escape" === e.code && this.selectsСlose();
      } else this.selectsСlose();
    }
    selectsСlose() {
      const e = document.querySelectorAll(
        `${this.getSelectClass(
          this.selectClasses.classSelect
        )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
      );
      e.length &&
        e.forEach((e) => {
          this.selectAction(e);
        });
    }
    selectAction(e) {
      const t = this.getSelectElement(e).originalSelect,
        s = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement;
      s.classList.contains("_slide") ||
        (e.classList.toggle(this.selectClasses.classSelectOpen),
        n(s, t.dataset.speed));
    }
    setSelectTitleValue(e, t) {
      const s = this.getSelectElement(
          e,
          this.selectClasses.classSelectBody
        ).selectElement,
        i = this.getSelectElement(
          e,
          this.selectClasses.classSelectTitle
        ).selectElement;
      i && i.remove(),
        s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
    }
    getSelectTitleValue(e, t) {
      let s = this.getSelectedOptionsData(t, 2).html;
      if (
        (t.multiple &&
          t.hasAttribute("data-tags") &&
          ((s = this.getSelectedOptionsData(t)
            .elements.map(
              (t) =>
                `<span role="button" data-select-id="${
                  e.dataset.id
                }" data-value="${
                  t.value
                }" class="_select-tag">${this.getSelectElementContent(
                  t
                )}</span>`
            )
            .join("")),
          t.dataset.tags &&
            document.querySelector(t.dataset.tags) &&
            ((document.querySelector(t.dataset.tags).innerHTML = s),
            t.hasAttribute("data-search") && (s = !1))),
        (s = s.length ? s : t.dataset.placeholder),
        this.getSelectedOptionsData(t).values.length
          ? e.classList.add(this.selectClasses.classSelectActive)
          : e.classList.remove(this.selectClasses.classSelectActive),
        t.hasAttribute("data-search"))
      )
        return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
      {
        const e =
          this.getSelectedOptionsData(t).elements.length &&
          this.getSelectedOptionsData(t).elements[0].dataset.class
            ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
            : "";
        return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
      }
    }
    getSelectElementContent(e) {
      const t = e.dataset.asset ? `${e.dataset.asset}` : "",
        s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
      let i = "";
      return (
        (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
        (i += t ? `<span class="${this.selectClasses.classSelectData}">` : ""),
        (i += t ? s : ""),
        (i += t ? "</span>" : ""),
        (i += t ? `<span class="${this.selectClasses.classSelectText}">` : ""),
        (i += e.textContent),
        (i += t ? "</span>" : ""),
        (i += t ? "</span>" : ""),
        i
      );
    }
    getSelectPlaceholder(e) {
      const t = Array.from(e.options).find((e) => !e.value);
      if (t)
        return {
          value: t.textContent,
          show: t.hasAttribute("data-show"),
          label: { show: t.hasAttribute("data-label"), text: t.dataset.label },
        };
    }
    getSelectedOptionsData(e, t) {
      let s = [];
      return (
        e.multiple
          ? (s = Array.from(e.options)
              .filter((e) => e.value)
              .filter((e) => e.selected))
          : s.push(e.options[e.selectedIndex]),
        {
          elements: s.map((e) => e),
          values: s.filter((e) => e.value).map((e) => e.value),
          html: s.map((e) => this.getSelectElementContent(e)),
        }
      );
    }
    getOptions(e) {
      let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
        s = e.dataset.scroll ? `style="max-height:${e.dataset.scroll}px"` : "",
        i = Array.from(e.options);
      if (i.length > 0) {
        let n = "";
        return (
          ((this.getSelectPlaceholder(e) &&
            !this.getSelectPlaceholder(e).show) ||
            e.multiple) &&
            (i = i.filter((e) => e.value)),
          (n += t
            ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
            : ""),
          i.forEach((t) => {
            n += this.getOption(t, e);
          }),
          (n += t ? "</div>" : ""),
          n
        );
      }
    }
    getOption(e, t) {
      const s =
          e.selected && t.multiple
            ? ` ${this.selectClasses.classSelectOptionSelected}`
            : "",
        i = e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
        n = e.dataset.class ? ` ${e.dataset.class}` : "",
        a = !!e.dataset.href && e.dataset.href,
        l = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
      let r = "";
      return (
        (r += a
          ? `<a ${l} ${i} href="${a}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
          : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
        (r += this.getSelectElementContent(e)),
        (r += a ? "</a>" : "</button>"),
        r
      );
    }
    setOptions(e, t) {
      this.getSelectElement(
        e,
        this.selectClasses.classSelectOptions
      ).selectElement.innerHTML = this.getOptions(t);
    }
    optionAction(e, t, s) {
      if (t.multiple) {
        s.classList.toggle(this.selectClasses.classSelectOptionSelected);
        this.getSelectedOptionsData(t).elements.forEach((e) => {
          e.removeAttribute("selected");
        });
        e.querySelectorAll(
          this.getSelectClass(this.selectClasses.classSelectOptionSelected)
        ).forEach((e) => {
          t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
            "selected",
            "selected"
          );
        });
      } else
        t.hasAttribute("data-show-selected") ||
          (e.querySelector(
            `${this.getSelectClass(
              this.selectClasses.classSelectOption
            )}[hidden]`
          ) &&
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ).hidden = !1),
          (s.hidden = !0)),
          (t.value = s.hasAttribute("data-value")
            ? s.dataset.value
            : s.textContent),
          this.selectAction(e);
      this.setSelectTitleValue(e, t), this.setSelectChange(t);
    }
    selectChange(e) {
      const t = e.target;
      this.selectBuild(t), this.setSelectChange(t);
    }
    setSelectChange(e) {
      if (
        (e.hasAttribute("data-validate") && h.validateInput(e),
        e.hasAttribute("data-submit") && e.value)
      ) {
        let t = document.createElement("button");
        (t.type = "submit"), e.closest("form").append(t), t.click(), t.remove();
      }
      const t = e.parentElement;
      this.selectCallback(t, e);
    }
    selectDisabled(e, t) {
      t.disabled
        ? (e.classList.add(this.selectClasses.classSelectDisabled),
          (this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement.disabled = !0))
        : (e.classList.remove(this.selectClasses.classSelectDisabled),
          (this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement.disabled = !1));
    }
    searchActions(e) {
      this.getSelectElement(e).originalSelect;
      const t = this.getSelectElement(
          e,
          this.selectClasses.classSelectInput
        ).selectElement,
        s = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement,
        i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
        n = this;
      t.addEventListener("input", function () {
        i.forEach((e) => {
          e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
            ? (e.hidden = !1)
            : (e.hidden = !0);
        }),
          !0 === s.hidden && n.selectAction(e);
      });
    }
    selectCallback(e, t) {
      document.dispatchEvent(
        new CustomEvent("selectCallback", { detail: { select: t } })
      );
    }
    setLogging(e) {
      this.config.logging && o(`[select]: ${e}`);
    }
  }
  const u = { inputMaskModule: null, selectModule: null };
  let h = {
    getErrors(e) {
      let t = 0,
        s = e.querySelectorAll("*[data-required]");
      return (
        s.length &&
          s.forEach((e) => {
            (null === e.offsetParent && "SELECT" !== e.tagName) ||
              e.disabled ||
              (t += this.validateInput(e));
          }),
        t
      );
    },
    validateInput(e) {
      let t = 0;
      return (
        "email" === e.dataset.required
          ? ((e.value = e.value.replace(" ", "")),
            this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
          : ("checkbox" !== e.type || e.checked) && e.value
          ? this.removeError(e)
          : (this.addError(e), t++),
        t
      );
    },
    addError(e) {
      e.classList.add("_form-error"),
        e.parentElement.classList.add("_form-error");
      let t = e.parentElement.querySelector(".form__error");
      t && e.parentElement.removeChild(t),
        e.dataset.error &&
          e.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form__error">${e.dataset.error}</div>`
          );
    },
    removeError(e) {
      e.classList.remove("_form-error"),
        e.parentElement.classList.remove("_form-error"),
        e.parentElement.querySelector(".form__error") &&
          e.parentElement.removeChild(
            e.parentElement.querySelector(".form__error")
          );
    },
    formClean(e) {
      e.reset(),
        setTimeout(() => {
          let t = e.querySelectorAll("input,textarea");
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            s.parentElement.classList.remove("_form-focus"),
              s.classList.remove("_form-focus"),
              h.removeError(s),
              (s.value = s.dataset.placeholder);
          }
          let s = e.querySelectorAll(".checkbox__input");
          if (s.length > 0)
            for (let e = 0; e < s.length; e++) {
              s[e].checked = !1;
            }
          if (u.selectModule) {
            let t = e.querySelectorAll(".select");
            if (t.length)
              for (let e = 0; e < t.length; e++) {
                const s = t[e].querySelector("select");
                u.selectModule.selectBuild(s);
              }
          }
        }, 0);
    },
    emailTest: (e) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
  };
  function m(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function f(e = {}, t = {}) {
    Object.keys(t).forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : m(t[s]) && m(e[s]) && Object.keys(t[s]).length > 0 && f(e[s], t[s]);
    });
  }
  const g = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function v() {
    const e = "undefined" != typeof document ? document : {};
    return f(e, g), e;
  }
  const S = {
    document: g,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function w() {
    const e = "undefined" != typeof window ? window : {};
    return f(e, S), e;
  }
  class b extends Array {
    constructor(e) {
      "number" == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function C(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...C(e)) : t.push(e);
      }),
      t
    );
  }
  function y(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function E(e, t) {
    const s = w(),
      i = v();
    let n = [];
    if (!t && e instanceof b) return e;
    if (!e) return new b(n);
    if ("string" == typeof e) {
      const s = e.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let e = "div";
        0 === s.indexOf("<li") && (e = "ul"),
          0 === s.indexOf("<tr") && (e = "tbody"),
          (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
          0 === s.indexOf("<tbody") && (e = "table"),
          0 === s.indexOf("<option") && (e = "select");
        const t = i.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1)
          n.push(t.childNodes[e]);
      } else
        n = (function (e, t) {
          if ("string" != typeof e) return [e];
          const s = [],
            i = t.querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) s.push(i[e]);
          return s;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) n.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof b) return e;
      n = e;
    }
    return new b(
      (function (e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1)
          -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(n)
    );
  }
  E.fn = b.prototype;
  const T = "resize scroll".split(" ");
  function x(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          T.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : E(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  x("click"),
    x("blur"),
    x("focus"),
    x("focusin"),
    x("focusout"),
    x("keyup"),
    x("keydown"),
    x("keypress"),
    x("submit"),
    x("change"),
    x("mousedown"),
    x("mousemove"),
    x("mouseup"),
    x("mouseenter"),
    x("mouseleave"),
    x("mouseout"),
    x("mouseover"),
    x("touchstart"),
    x("touchend"),
    x("touchmove"),
    x("resize"),
    x("scroll");
  const $ = {
    addClass: function (...e) {
      const t = C(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = C(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = C(e.map((e) => e.split(" ")));
      return (
        y(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = C(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1)
        if (2 === arguments.length) this[s].setAttribute(e, t);
        else
          for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, s, i, n] = e;
      function a(e) {
        const t = e.target;
        if (!t) return;
        const n = e.target.dom7EventData || [];
        if ((n.indexOf(e) < 0 && n.unshift(e), E(t).is(s))) i.apply(t, n);
        else {
          const e = E(t).parents();
          for (let t = 0; t < e.length; t += 1)
            E(e[t]).is(s) && i.apply(e[t], n);
        }
      }
      function l(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
      }
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const r = t.split(" ");
      let o;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (s)
          for (o = 0; o < r.length; o += 1) {
            const e = r[o];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: i, proxyListener: a }),
              t.addEventListener(e, a, n);
          }
        else
          for (o = 0; o < r.length; o += 1) {
            const e = r[o];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: i, proxyListener: l }),
              t.addEventListener(e, l, n);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, s, i, n] = e;
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const a = t.split(" ");
      for (let e = 0; e < a.length; e += 1) {
        const t = a[e];
        for (let e = 0; e < this.length; e += 1) {
          const a = this[e];
          let l;
          if (
            (!s && a.dom7Listeners
              ? (l = a.dom7Listeners[t])
              : s && a.dom7LiveListeners && (l = a.dom7LiveListeners[t]),
            l && l.length)
          )
            for (let e = l.length - 1; e >= 0; e -= 1) {
              const s = l[e];
              (i && s.listener === i) ||
              (i &&
                s.listener &&
                s.listener.dom7proxy &&
                s.listener.dom7proxy === i)
                ? (a.removeEventListener(t, s.proxyListener, n), l.splice(e, 1))
                : i ||
                  (a.removeEventListener(t, s.proxyListener, n),
                  l.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = w(),
        s = e[0].split(" "),
        i = e[1];
      for (let n = 0; n < s.length; n += 1) {
        const a = s[n];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s];
          if (t.CustomEvent) {
            const s = new t.CustomEvent(a, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            });
            (n.dom7EventData = e.filter((e, t) => t > 0)),
              n.dispatchEvent(s),
              (n.dom7EventData = []),
              delete n.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function s(i) {
            i.target === this && (e.call(this, i), t.off("transitionend", s));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = w();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = w(),
          t = v(),
          s = this[0],
          i = s.getBoundingClientRect(),
          n = t.body,
          a = s.clientTop || n.clientTop || 0,
          l = s.clientLeft || n.clientLeft || 0,
          r = s === e ? e.scrollY : s.scrollTop,
          o = s === e ? e.scrollX : s.scrollLeft;
        return { top: i.top + r - a, left: i.left + o - l };
      }
      return null;
    },
    css: function (e, t) {
      const s = w();
      let i;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1)
            for (const t in e) this[i].style[t] = e[t];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, s) => {
            e.apply(t, [t, s]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = w(),
        s = v(),
        i = this[0];
      let n, a;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (n = E(e), a = 0; a < n.length; a += 1) if (n[a] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof b) {
        for (n = e.nodeType ? [e] : e, a = 0; a < n.length; a += 1)
          if (n[a] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return E([]);
      if (e < 0) {
        const s = t + e;
        return E(s < 0 ? [] : [this[s]]);
      }
      return E([this[e]]);
    },
    append: function (...e) {
      let t;
      const s = v();
      for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const i = s.createElement("div");
            for (i.innerHTML = t; i.firstChild; )
              this[e].appendChild(i.firstChild);
          } else if (t instanceof b)
            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = v();
      let s, i;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof e) {
          const n = t.createElement("div");
          for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
            this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof b)
          for (i = 0; i < e.length; i += 1)
            this[s].insertBefore(e[i], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && E(this[0].nextElementSibling).is(e)
            ? E([this[0].nextElementSibling])
            : E([])
          : this[0].nextElementSibling
          ? E([this[0].nextElementSibling])
          : E([])
        : E([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return E([]);
      for (; s.nextElementSibling; ) {
        const i = s.nextElementSibling;
        e ? E(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return E(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && E(t.previousElementSibling).is(e)
            ? E([t.previousElementSibling])
            : E([])
          : t.previousElementSibling
          ? E([t.previousElementSibling])
          : E([]);
      }
      return E([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return E([]);
      for (; s.previousElementSibling; ) {
        const i = s.previousElementSibling;
        e ? E(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return E(t);
    },
    parent: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (e
            ? E(this[s].parentNode).is(e) && t.push(this[s].parentNode)
            : t.push(this[s].parentNode));
      return E(t);
    },
    parents: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let i = this[s].parentNode;
        for (; i; ) e ? E(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
      }
      return E(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? E([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].querySelectorAll(e);
        for (let e = 0; e < i.length; e += 1) t.push(i[e]);
      }
      return E(t);
    },
    children: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].children;
        for (let s = 0; s < i.length; s += 1)
          (e && !E(i[s]).is(e)) || t.push(i[s]);
      }
      return E(t);
    },
    filter: function (e) {
      return E(y(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys($).forEach((e) => {
    Object.defineProperty(E.fn, e, { value: $[e], writable: !0 });
  });
  const k = E;
  function L(e, t = 0) {
    return setTimeout(e, t);
  }
  function P() {
    return Date.now();
  }
  function A(e, t = "x") {
    const s = w();
    let i, n, a;
    const l = (function (e) {
      const t = w();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((n = l.transform || l.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (a = new s.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((a =
            l.MozTransform ||
            l.OTransform ||
            l.MsTransform ||
            l.msTransform ||
            l.transform ||
            l
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = a.toString().split(","))),
      "x" === t &&
        (n = s.WebKitCSSMatrix
          ? a.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (n = s.WebKitCSSMatrix
          ? a.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      n || 0
    );
  }
  function M(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function O(...e) {
    const t = Object(e[0]),
      s = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < e.length; n += 1) {
      const a = e[n];
      if (
        null != a &&
        ((i = a),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? i instanceof HTMLElement
          : i && (1 === i.nodeType || 11 === i.nodeType)))
      ) {
        const e = Object.keys(Object(a)).filter((e) => s.indexOf(e) < 0);
        for (let s = 0, i = e.length; s < i; s += 1) {
          const i = e[s],
            n = Object.getOwnPropertyDescriptor(a, i);
          void 0 !== n &&
            n.enumerable &&
            (M(t[i]) && M(a[i])
              ? a[i].__swiper__
                ? (t[i] = a[i])
                : O(t[i], a[i])
              : !M(t[i]) && M(a[i])
              ? ((t[i] = {}), a[i].__swiper__ ? (t[i] = a[i]) : O(t[i], a[i]))
              : (t[i] = a[i]));
        }
      }
    }
    var i;
    return t;
  }
  function _(e, t, s) {
    e.style.setProperty(t, s);
  }
  function I({ swiper: e, targetPosition: t, side: s }) {
    const i = w(),
      n = -e.translate;
    let a,
      l = null;
    const r = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(e.cssModeFrameID);
    const o = t > n ? "next" : "prev",
      c = (e, t) => ("next" === o && e >= t) || ("prev" === o && e <= t),
      d = () => {
        (a = new Date().getTime()), null === l && (l = a);
        const o = Math.max(Math.min((a - l) / r, 1), 0),
          p = 0.5 - Math.cos(o * Math.PI) / 2;
        let u = n + p * (t - n);
        if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), c(u, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: u });
            }),
            void i.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = i.requestAnimationFrame(d);
      };
    d();
  }
  let z, B, D;
  function G() {
    return (
      z ||
        (z = (function () {
          const e = w(),
            t = v();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const s = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, s);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      z
    );
  }
  function q(e = {}) {
    return (
      B ||
        (B = (function ({ userAgent: e } = {}) {
          const t = G(),
            s = w(),
            i = s.navigator.platform,
            n = e || s.navigator.userAgent,
            a = { ios: !1, android: !1 },
            l = s.screen.width,
            r = s.screen.height,
            o = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = n.match(/(iPad).*OS\s([\d_]+)/);
          const d = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            p = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            u = "Win32" === i;
          let h = "MacIntel" === i;
          return (
            !c &&
              h &&
              t.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${l}x${r}`) >= 0 &&
              ((c = n.match(/(Version)\/([\d.]+)/)),
              c || (c = [0, 1, "13_0_0"]),
              (h = !1)),
            o && !u && ((a.os = "android"), (a.android = !0)),
            (c || p || d) && ((a.os = "ios"), (a.ios = !0)),
            a
          );
        })(e)),
      B
    );
  }
  function N() {
    return (
      D ||
        (D = (function () {
          const e = w();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      D
    );
  }
  const H = {
    on(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      const n = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][n](t);
        }),
        i
      );
    },
    once(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      function n(...s) {
        i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(i, s);
      }
      return (n.__emitterProxy = t), i.on(e, n, s);
    },
    onAny(e, t) {
      const s = this;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((i, n) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(n, 1);
                });
          }),
          s)
        : s;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners) return t;
      let s, i, n;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
        : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
        i.unshift(n);
      return (
        (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(n, [e, ...i]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(n, i);
              });
        }),
        t
      );
    },
  };
  const j = {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i[0].clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(i.css("padding-left") || 0, 10) -
            parseInt(i.css("padding-right") || 0, 10)),
          (s =
            s -
            parseInt(i.css("padding-top") || 0, 10) -
            parseInt(i.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const i = e.params,
        { $wrapperEl: n, size: a, rtlTranslate: l, wrongRTL: r } = e,
        o = e.virtual && i.virtual.enabled,
        c = o ? e.virtual.slides.length : e.slides.length,
        d = n.children(`.${e.params.slideClass}`),
        p = o ? e.virtual.slides.length : d.length;
      let u = [];
      const h = [],
        m = [];
      let f = i.slidesOffsetBefore;
      "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
      let g = i.slidesOffsetAfter;
      "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        S = e.slidesGrid.length;
      let w = i.spaceBetween,
        b = -f,
        C = 0,
        y = 0;
      if (void 0 === a) return;
      "string" == typeof w &&
        w.indexOf("%") >= 0 &&
        (w = (parseFloat(w.replace("%", "")) / 100) * a),
        (e.virtualSize = -w),
        l
          ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        i.centeredSlides &&
          i.cssMode &&
          (_(e.wrapperEl, "--swiper-centered-offset-before", ""),
          _(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const E = i.grid && i.grid.rows > 1 && e.grid;
      let T;
      E && e.grid.initSlides(p);
      const x =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < p; n += 1) {
        T = 0;
        const l = d.eq(n);
        if (
          (E && e.grid.updateSlide(n, l, p, t), "none" !== l.css("display"))
        ) {
          if ("auto" === i.slidesPerView) {
            x && (d[n].style[t("width")] = "");
            const a = getComputedStyle(l[0]),
              r = l[0].style.transform,
              o = l[0].style.webkitTransform;
            if (
              (r && (l[0].style.transform = "none"),
              o && (l[0].style.webkitTransform = "none"),
              i.roundLengths)
            )
              T = e.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0);
            else {
              const e = s(a, "width"),
                t = s(a, "padding-left"),
                i = s(a, "padding-right"),
                n = s(a, "margin-left"),
                r = s(a, "margin-right"),
                o = a.getPropertyValue("box-sizing");
              if (o && "border-box" === o) T = e + n + r;
              else {
                const { clientWidth: s, offsetWidth: a } = l[0];
                T = e + t + i + n + r + (a - s);
              }
            }
            r && (l[0].style.transform = r),
              o && (l[0].style.webkitTransform = o),
              i.roundLengths && (T = Math.floor(T));
          } else
            (T = (a - (i.slidesPerView - 1) * w) / i.slidesPerView),
              i.roundLengths && (T = Math.floor(T)),
              d[n] && (d[n].style[t("width")] = `${T}px`);
          d[n] && (d[n].swiperSlideSize = T),
            m.push(T),
            i.centeredSlides
              ? ((b = b + T / 2 + C / 2 + w),
                0 === C && 0 !== n && (b = b - a / 2 - w),
                0 === n && (b = b - a / 2 - w),
                Math.abs(b) < 0.001 && (b = 0),
                i.roundLengths && (b = Math.floor(b)),
                y % i.slidesPerGroup == 0 && u.push(b),
                h.push(b))
              : (i.roundLengths && (b = Math.floor(b)),
                (y - Math.min(e.params.slidesPerGroupSkip, y)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(b),
                h.push(b),
                (b = b + T + w)),
            (e.virtualSize += T + w),
            (C = T),
            (y += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, a) + g),
        l &&
          r &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
        i.setWrapperSize &&
          n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
        E && e.grid.updateWrapperSize(T, u, t),
        !i.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < u.length; s += 1) {
          let n = u[s];
          i.roundLengths && (n = Math.floor(n)),
            u[s] <= e.virtualSize - a && t.push(n);
        }
        (u = t),
          Math.floor(e.virtualSize - a) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - a);
      }
      if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
        const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
        d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
          [s]: `${w}px`,
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t) => {
          e += t + (i.spaceBetween ? i.spaceBetween : 0);
        }),
          (e -= i.spaceBetween);
        const t = e - a;
        u = u.map((e) => (e < 0 ? -f : e > t ? t + g : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (m.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
          (e -= i.spaceBetween),
          e < a)
        ) {
          const t = (a - e) / 2;
          u.forEach((e, s) => {
            u[s] = e - t;
          }),
            h.forEach((e, s) => {
              h[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: d,
          snapGrid: u,
          slidesGrid: h,
          slidesSizesGrid: m,
        }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        _(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
          _(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - m[m.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      p !== c && e.emit("slidesLengthChange"),
        u.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        h.length !== S && e.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && e.updateSlidesOffset();
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      let n,
        a = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const l = (e) =>
        i
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          t.visibleSlides.each((e) => {
            s.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !i) break;
            s.push(l(e));
          }
      else s.push(l(t.activeIndex));
      for (n = 0; n < s.length; n += 1)
        if (void 0 !== s[n]) {
          const e = s[n].offsetHeight;
          a = e > a ? e : a;
        }
      (a || 0 === a) && t.$wrapperEl.css("height", `${a}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let s = 0; s < t.length; s += 1)
        t[s].swiperSlideOffset = e.isHorizontal()
          ? t[s].offsetLeft
          : t[s].offsetTop;
    },
    updateSlidesProgress: function (e = (this && this.translate) || 0) {
      const t = this,
        s = t.params,
        { slides: i, rtlTranslate: n, snapGrid: a } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let l = -e;
      n && (l = e),
        i.removeClass(s.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < i.length; e += 1) {
        const r = i[e];
        let o = r.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
        const c =
            (l + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (r.swiperSlideSize + s.spaceBetween),
          d =
            (l - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (r.swiperSlideSize + s.spaceBetween),
          p = -(l - o),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (p <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(r),
          t.visibleSlidesIndexes.push(e),
          i.eq(e).addClass(s.slideVisibleClass)),
          (r.progress = n ? -c : c),
          (r.originalProgress = n ? -d : d);
      }
      t.visibleSlides = k(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: a, isEnd: l } = t;
      const r = a,
        o = l;
      0 === i
        ? ((n = 0), (a = !0), (l = !0))
        : ((n = (e - t.minTranslate()) / i), (a = n <= 0), (l = n >= 1)),
        Object.assign(t, { progress: n, isBeginning: a, isEnd: l }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        a && !r && t.emit("reachBeginning toEdge"),
        l && !o && t.emit("reachEnd toEdge"),
        ((r && !a) || (o && !l)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: s,
          $wrapperEl: i,
          activeIndex: n,
          realIndex: a,
        } = e,
        l = e.virtual && s.virtual.enabled;
      let r;
      t.removeClass(
        `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
      ),
        (r = l
          ? e.$wrapperEl.find(
              `.${s.slideClass}[data-swiper-slide-index="${n}"]`
            )
          : t.eq(n)),
        r.addClass(s.slideActiveClass),
        s.loop &&
          (r.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
                )
                .addClass(s.slideDuplicateActiveClass)
            : i
                .children(
                  `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
                )
                .addClass(s.slideDuplicateActiveClass));
      let o = r.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
      let c = r.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
      s.loop &&
        0 === c.length &&
        ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
        s.loop &&
          (o.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${o.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${o.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass),
          c.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: i,
          snapGrid: n,
          params: a,
          activeIndex: l,
          realIndex: r,
          snapIndex: o,
        } = t;
      let c,
        d = e;
      if (void 0 === d) {
        for (let e = 0; e < i.length; e += 1)
          void 0 !== i[e + 1]
            ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
              ? (d = e)
              : s >= i[e] && s < i[e + 1] && (d = e + 1)
            : s >= i[e] && (d = e);
        a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
      }
      if (n.indexOf(s) >= 0) c = n.indexOf(s);
      else {
        const e = Math.min(a.slidesPerGroupSkip, d);
        c = e + Math.floor((d - e) / a.slidesPerGroup);
      }
      if ((c >= n.length && (c = n.length - 1), d === l))
        return void (c !== o && ((t.snapIndex = c), t.emit("snapIndexChange")));
      const p = parseInt(
        t.slides.eq(d).attr("data-swiper-slide-index") || d,
        10
      );
      Object.assign(t, {
        snapIndex: c,
        realIndex: p,
        previousIndex: l,
        activeIndex: d,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        r !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        i = k(e).closest(`.${s.slideClass}`)[0];
      let n,
        a = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (a = !0), (n = e);
            break;
          }
      if (!i || !a)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              k(i).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const V = {
    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
      const { params: t, rtlTranslate: s, translate: i, $wrapperEl: n } = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let a = A(n[0], e);
      return s && (a = -a), a || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        {
          rtlTranslate: i,
          params: n,
          $wrapperEl: a,
          wrapperEl: l,
          progress: r,
        } = s;
      let o,
        c = 0,
        d = 0;
      s.isHorizontal() ? (c = i ? -e : e) : (d = e),
        n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
        n.cssMode
          ? (l[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -c
              : -d)
          : n.virtualTranslate ||
            a.transform(`translate3d(${c}px, ${d}px, 0px)`),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? c : d);
      const p = s.maxTranslate() - s.minTranslate();
      (o = 0 === p ? 0 : (e - s.minTranslate()) / p),
        o !== r && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
      const a = this,
        { params: l, wrapperEl: r } = a;
      if (a.animating && l.preventInteractionOnTransition) return !1;
      const o = a.minTranslate(),
        c = a.maxTranslate();
      let d;
      if (
        ((d = i && e > o ? o : i && e < c ? c : e),
        a.updateProgress(d),
        l.cssMode)
      ) {
        const e = a.isHorizontal();
        if (0 === t) r[e ? "scrollLeft" : "scrollTop"] = -d;
        else {
          if (!a.support.smoothScroll)
            return (
              I({ swiper: a, targetPosition: -d, side: e ? "left" : "top" }), !0
            );
          r.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (a.setTransition(0),
            a.setTranslate(d),
            s &&
              (a.emit("beforeTransitionStart", t, n), a.emit("transitionEnd")))
          : (a.setTransition(t),
            a.setTranslate(d),
            s &&
              (a.emit("beforeTransitionStart", t, n),
              a.emit("transitionStart")),
            a.animating ||
              ((a.animating = !0),
              a.onTranslateToWrapperTransitionEnd ||
                (a.onTranslateToWrapperTransitionEnd = function (e) {
                  a &&
                    !a.destroyed &&
                    e.target === this &&
                    (a.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      a.onTranslateToWrapperTransitionEnd
                    ),
                    a.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      a.onTranslateToWrapperTransitionEnd
                    ),
                    (a.onTranslateToWrapperTransitionEnd = null),
                    delete a.onTranslateToWrapperTransitionEnd,
                    s && a.emit("transitionEnd"));
                }),
              a.$wrapperEl[0].addEventListener(
                "transitionend",
                a.onTranslateToWrapperTransitionEnd
              ),
              a.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                a.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function F({ swiper: e, runCallbacks: t, direction: s, step: i }) {
    const { activeIndex: n, previousIndex: a } = e;
    let l = s;
    if (
      (l || (l = n > a ? "next" : n < a ? "prev" : "reset"),
      e.emit(`transition${i}`),
      t && n !== a)
    ) {
      if ("reset" === l) return void e.emit(`slideResetTransition${i}`);
      e.emit(`slideChangeTransition${i}`),
        "next" === l
          ? e.emit(`slideNextTransition${i}`)
          : e.emit(`slidePrevTransition${i}`);
    }
  }
  const W = {
    slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
      if ("number" != typeof e && "string" != typeof e)
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const a = this;
      let l = e;
      l < 0 && (l = 0);
      const {
        params: r,
        snapGrid: o,
        slidesGrid: c,
        previousIndex: d,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: m,
      } = a;
      if ((a.animating && r.preventInteractionOnTransition) || (!m && !i && !n))
        return !1;
      const f = Math.min(a.params.slidesPerGroupSkip, l);
      let g = f + Math.floor((l - f) / a.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1),
        (p || r.initialSlide || 0) === (d || 0) &&
          s &&
          a.emit("beforeSlideChangeStart");
      const v = -o[g];
      if ((a.updateProgress(v), r.normalizeSlideIndex))
        for (let e = 0; e < c.length; e += 1) {
          const t = -Math.floor(100 * v),
            s = Math.floor(100 * c[e]),
            i = Math.floor(100 * c[e + 1]);
          void 0 !== c[e + 1]
            ? t >= s && t < i - (i - s) / 2
              ? (l = e)
              : t >= s && t < i && (l = e + 1)
            : t >= s && (l = e);
        }
      if (a.initialized && l !== p) {
        if (!a.allowSlideNext && v < a.translate && v < a.minTranslate())
          return !1;
        if (
          !a.allowSlidePrev &&
          v > a.translate &&
          v > a.maxTranslate() &&
          (p || 0) !== l
        )
          return !1;
      }
      let S;
      if (
        ((S = l > p ? "next" : l < p ? "prev" : "reset"),
        (u && -v === a.translate) || (!u && v === a.translate))
      )
        return (
          a.updateActiveIndex(l),
          r.autoHeight && a.updateAutoHeight(),
          a.updateSlidesClasses(),
          "slide" !== r.effect && a.setTranslate(v),
          "reset" !== S && (a.transitionStart(s, S), a.transitionEnd(s, S)),
          !1
        );
      if (r.cssMode) {
        const e = a.isHorizontal(),
          s = u ? v : -v;
        if (0 === t) {
          const t = a.virtual && a.params.virtual.enabled;
          t &&
            ((a.wrapperEl.style.scrollSnapType = "none"),
            (a._immediateVirtual = !0)),
            (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (a.wrapperEl.style.scrollSnapType = ""),
                  (a._swiperImmediateVirtual = !1);
              });
        } else {
          if (!a.support.smoothScroll)
            return (
              I({ swiper: a, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        a.setTransition(t),
        a.setTranslate(v),
        a.updateActiveIndex(l),
        a.updateSlidesClasses(),
        a.emit("beforeTransitionStart", t, i),
        a.transitionStart(s, S),
        0 === t
          ? a.transitionEnd(s, S)
          : a.animating ||
            ((a.animating = !0),
            a.onSlideToWrapperTransitionEnd ||
              (a.onSlideToWrapperTransitionEnd = function (e) {
                a &&
                  !a.destroyed &&
                  e.target === this &&
                  (a.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    a.onSlideToWrapperTransitionEnd
                  ),
                  a.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    a.onSlideToWrapperTransitionEnd
                  ),
                  (a.onSlideToWrapperTransitionEnd = null),
                  delete a.onSlideToWrapperTransitionEnd,
                  a.transitionEnd(s, S));
              }),
            a.$wrapperEl[0].addEventListener(
              "transitionend",
              a.onSlideToWrapperTransitionEnd
            ),
            a.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              a.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
      const n = this;
      let a = e;
      return n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, s, i);
    },
    slideNext: function (e = this.params.speed, t = !0, s) {
      const i = this,
        { animating: n, enabled: a, params: l } = i;
      if (!a) return i;
      let r = l.slidesPerGroup;
      "auto" === l.slidesPerView &&
        1 === l.slidesPerGroup &&
        l.slidesPerGroupAuto &&
        (r = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const o = i.activeIndex < l.slidesPerGroupSkip ? 1 : r;
      if (l.loop) {
        if (n && l.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      return l.rewind && i.isEnd
        ? i.slideTo(0, e, t, s)
        : i.slideTo(i.activeIndex + o, e, t, s);
    },
    slidePrev: function (e = this.params.speed, t = !0, s) {
      const i = this,
        {
          params: n,
          animating: a,
          snapGrid: l,
          slidesGrid: r,
          rtlTranslate: o,
          enabled: c,
        } = i;
      if (!c) return i;
      if (n.loop) {
        if (a && n.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = d(o ? i.translate : -i.translate),
        u = l.map((e) => d(e));
      let h = l[u.indexOf(p) - 1];
      if (void 0 === h && n.cssMode) {
        let e;
        l.forEach((t, s) => {
          p >= t && (e = s);
        }),
          void 0 !== e && (h = l[e > 0 ? e - 1 : e]);
      }
      let m = 0;
      return (
        void 0 !== h &&
          ((m = r.indexOf(h)),
          m < 0 && (m = i.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((m = m - i.slidesPerViewDynamic("previous", !0) + 1),
            (m = Math.max(m, 0)))),
        n.rewind && i.isBeginning
          ? i.slideTo(i.slides.length - 1, e, t, s)
          : i.slideTo(m, e, t, s)
      );
    },
    slideReset: function (e = this.params.speed, t = !0, s) {
      return this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
      const n = this;
      let a = n.activeIndex;
      const l = Math.min(n.params.slidesPerGroupSkip, a),
        r = l + Math.floor((a - l) / n.params.slidesPerGroup),
        o = n.rtlTranslate ? n.translate : -n.translate;
      if (o >= n.snapGrid[r]) {
        const e = n.snapGrid[r];
        o - e > (n.snapGrid[r + 1] - e) * i && (a += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[r - 1];
        o - e <= (n.snapGrid[r] - e) * i && (a -= n.params.slidesPerGroup);
      }
      return (
        (a = Math.max(a, 0)),
        (a = Math.min(a, n.slidesGrid.length - 1)),
        n.slideTo(a, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: s } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        a = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(k(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? a < e.loopedSlides - i / 2 ||
              a > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (a = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                L(() => {
                  e.slideTo(a);
                }))
              : e.slideTo(a)
            : a > e.slides.length - i
            ? (e.loopFix(),
              (a = s
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              L(() => {
                e.slideTo(a);
              }))
            : e.slideTo(a);
      } else e.slideTo(a);
    },
  };
  const R = {
    loopCreate: function () {
      const e = this,
        t = v(),
        { params: s, $wrapperEl: i } = e,
        n = i.children().length > 0 ? k(i.children()[0].parentNode) : i;
      n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
      let a = n.children(`.${s.slideClass}`);
      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - (a.length % s.slidesPerGroup);
        if (e !== s.slidesPerGroup) {
          for (let i = 0; i < e; i += 1) {
            const e = k(t.createElement("div")).addClass(
              `${s.slideClass} ${s.slideBlankClass}`
            );
            n.append(e);
          }
          a = n.children(`.${s.slideClass}`);
        }
      }
      "auto" !== s.slidesPerView ||
        s.loopedSlides ||
        (s.loopedSlides = a.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(s.loopedSlides || s.slidesPerView, 10)
        )),
        (e.loopedSlides += s.loopAdditionalSlides),
        e.loopedSlides > a.length && (e.loopedSlides = a.length);
      const l = [],
        r = [];
      a.each((t, s) => {
        const i = k(t);
        s < e.loopedSlides && r.push(t),
          s < a.length && s >= a.length - e.loopedSlides && l.push(t),
          i.attr("data-swiper-slide-index", s);
      });
      for (let e = 0; e < r.length; e += 1)
        n.append(k(r[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      for (let e = l.length - 1; e >= 0; e -= 1)
        n.prepend(k(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: s,
        loopedSlides: i,
        allowSlidePrev: n,
        allowSlideNext: a,
        snapGrid: l,
        rtlTranslate: r,
      } = e;
      let o;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const c = -l[t] - e.getTranslate();
      if (t < i) {
        (o = s.length - 3 * i + t), (o += i);
        e.slideTo(o, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((r ? -e.translate : e.translate) - c);
      } else if (t >= s.length - i) {
        (o = -s.length + t + i), (o += i);
        e.slideTo(o, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((r ? -e.translate : e.translate) - c);
      }
      (e.allowSlidePrev = n), (e.allowSlideNext = a), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: s } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        s.removeAttr("data-swiper-slide-index");
    },
  };
  function X(e) {
    const t = this,
      s = v(),
      i = w(),
      n = t.touchEventsData,
      { params: a, touches: l, enabled: r } = t;
    if (!r) return;
    if (t.animating && a.preventInteractionOnTransition) return;
    !t.animating && a.cssMode && a.loop && t.loopFix();
    let o = e;
    o.originalEvent && (o = o.originalEvent);
    let c = k(o.target);
    if ("wrapper" === a.touchEventsTarget && !c.closest(t.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = "touchstart" === o.type),
      !n.isTouchEvent && "which" in o && 3 === o.which)
    )
      return;
    if (!n.isTouchEvent && "button" in o && o.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!a.noSwipingClass &&
      "" !== a.noSwipingClass &&
      o.target &&
      o.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (c = k(e.path[0]));
    const d = a.noSwipingSelector
        ? a.noSwipingSelector
        : `.${a.noSwipingClass}`,
      p = !(!o.target || !o.target.shadowRoot);
    if (
      a.noSwiping &&
      (p
        ? (function (e, t = this) {
            return (function t(s) {
              return s && s !== v() && s !== w()
                ? (s.assignedSlot && (s = s.assignedSlot),
                  s.closest(e) || t(s.getRootNode().host))
                : null;
            })(t);
          })(d, o.target)
        : c.closest(d)[0])
    )
      return void (t.allowClick = !0);
    if (a.swipeHandler && !c.closest(a.swipeHandler)[0]) return;
    (l.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
      (l.currentY =
        "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
    const u = l.currentX,
      h = l.currentY,
      m = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
      f = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
    if (m && (u <= f || u >= i.innerWidth - f)) {
      if ("prevent" !== m) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (l.startX = u),
      (l.startY = h),
      (n.touchStartTime = P()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      a.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== o.type)
    ) {
      let e = !0;
      c.is(n.focusableElements) && (e = !1),
        s.activeElement &&
          k(s.activeElement).is(n.focusableElements) &&
          s.activeElement !== c[0] &&
          s.activeElement.blur();
      const i = e && t.allowTouchMove && a.touchStartPreventDefault;
      (!a.touchStartForcePreventDefault && !i) ||
        c[0].isContentEditable ||
        o.preventDefault();
    }
    t.emit("touchStart", o);
  }
  function Y(e) {
    const t = v(),
      s = this,
      i = s.touchEventsData,
      { params: n, touches: a, rtlTranslate: l, enabled: r } = s;
    if (!r) return;
    let o = e;
    if ((o.originalEvent && (o = o.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", o)
      );
    if (i.isTouchEvent && "touchmove" !== o.type) return;
    const c =
        "touchmove" === o.type &&
        o.targetTouches &&
        (o.targetTouches[0] || o.changedTouches[0]),
      d = "touchmove" === o.type ? c.pageX : o.pageX,
      p = "touchmove" === o.type ? c.pageY : o.pageY;
    if (o.preventedByNestedSwiper) return (a.startX = d), void (a.startY = p);
    if (!s.allowTouchMove)
      return (
        (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(a, { startX: d, startY: p, currentX: d, currentY: p }),
          (i.touchStartTime = P()))
        )
      );
    if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
      if (s.isVertical()) {
        if (
          (p < a.startY && s.translate <= s.maxTranslate()) ||
          (p > a.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (d < a.startX && s.translate <= s.maxTranslate()) ||
        (d > a.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      i.isTouchEvent &&
      t.activeElement &&
      o.target === t.activeElement &&
      k(o.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", o),
      o.targetTouches && o.targetTouches.length > 1)
    )
      return;
    (a.currentX = d), (a.currentY = p);
    const u = a.currentX - a.startX,
      h = a.currentY - a.startY;
    if (s.params.threshold && Math.sqrt(u ** 2 + h ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && a.currentY === a.startY) ||
      (s.isVertical() && a.currentX === a.startX)
        ? (i.isScrolling = !1)
        : u * u + h * h >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", o),
      void 0 === i.startMoving &&
        ((a.currentX === a.startX && a.currentY === a.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !n.cssMode && o.cancelable && o.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && o.stopPropagation(),
      i.isMoved ||
        (n.loop && !n.cssMode && s.loopFix(),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (i.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", o)),
      s.emit("sliderMove", o),
      (i.isMoved = !0);
    let m = s.isHorizontal() ? u : h;
    (a.diff = m),
      (m *= n.touchRatio),
      l && (m = -m),
      (s.swipeDirection = m > 0 ? "prev" : "next"),
      (i.currentTranslate = m + i.startTranslate);
    let f = !0,
      g = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (g = 0),
      m > 0 && i.currentTranslate > s.minTranslate()
        ? ((f = !1),
          n.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + i.startTranslate + m) ** g))
        : m < 0 &&
          i.currentTranslate < s.maxTranslate() &&
          ((f = !1),
          n.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - i.startTranslate - m) ** g)),
      f && (o.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(m) > n.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (i.currentTranslate = i.startTranslate),
          void (a.diff = s.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
        n.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        n.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function U(e) {
    const t = this,
      s = t.touchEventsData,
      { params: i, touches: n, rtlTranslate: a, slidesGrid: l, enabled: r } = t;
    if (!r) return;
    let o = e;
    if (
      (o.originalEvent && (o = o.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", o),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    i.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const c = P(),
      d = c - s.touchStartTime;
    if (t.allowClick) {
      const e = o.path || (o.composedPath && o.composedPath());
      t.updateClickedSlide((e && e[0]) || o.target),
        t.emit("tap click", o),
        d < 300 &&
          c - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", o);
    }
    if (
      ((s.lastClickTime = P()),
      L(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === n.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let p;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (p = i.followFinger
        ? a
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      i.cssMode)
    )
      return;
    if (t.params.freeMode && i.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: p });
    let u = 0,
      h = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < l.length;
      e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== l[e + t]
        ? p >= l[e] && p < l[e + t] && ((u = e), (h = l[e + t] - l[e]))
        : p >= l[e] && ((u = e), (h = l[l.length - 1] - l[l.length - 2]));
    }
    const m = (p - l[u]) / h,
      f = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (d > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (m >= i.longSwipesRatio ? t.slideTo(u + f) : t.slideTo(u)),
        "prev" === t.swipeDirection &&
          (m > 1 - i.longSwipesRatio ? t.slideTo(u + f) : t.slideTo(u));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
        ? o.target === t.navigation.nextEl
          ? t.slideTo(u + f)
          : t.slideTo(u)
        : ("next" === t.swipeDirection && t.slideTo(u + f),
          "prev" === t.swipeDirection && t.slideTo(u));
    }
  }
  function Q() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: n, snapGrid: a } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = i),
      e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
  }
  function K(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function Z() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const a = e.maxTranslate() - e.minTranslate();
    (n = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
      n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let J = !1;
  function ee() {}
  const te = (e, t) => {
    const s = v(),
      {
        params: i,
        touchEvents: n,
        el: a,
        wrapperEl: l,
        device: r,
        support: o,
      } = e,
      c = !!i.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      p = t;
    if (o.touch) {
      const t = !(
        "touchstart" !== n.start ||
        !o.passiveListener ||
        !i.passiveListeners
      ) && { passive: !0, capture: !1 };
      a[d](n.start, e.onTouchStart, t),
        a[d](
          n.move,
          e.onTouchMove,
          o.passiveListener ? { passive: !1, capture: c } : c
        ),
        a[d](n.end, e.onTouchEnd, t),
        n.cancel && a[d](n.cancel, e.onTouchEnd, t);
    } else
      a[d](n.start, e.onTouchStart, !1),
        s[d](n.move, e.onTouchMove, c),
        s[d](n.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) &&
      a[d]("click", e.onClick, !0),
      i.cssMode && l[d]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[p](
            r.ios || r.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Q,
            !0
          )
        : e[p]("observerUpdate", Q, !0);
  };
  const se = {
      attachEvents: function () {
        const e = this,
          t = v(),
          { params: s, support: i } = e;
        (e.onTouchStart = X.bind(e)),
          (e.onTouchMove = Y.bind(e)),
          (e.onTouchEnd = U.bind(e)),
          s.cssMode && (e.onScroll = Z.bind(e)),
          (e.onClick = K.bind(e)),
          i.touch && !J && (t.addEventListener("touchstart", ee), (J = !0)),
          te(e, "on");
      },
      detachEvents: function () {
        te(this, "off");
      },
    },
    ie = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const ne = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: s,
          loopedSlides: i = 0,
          params: n,
          $el: a,
        } = e,
        l = n.breakpoints;
      if (!l || (l && 0 === Object.keys(l).length)) return;
      const r = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
      if (!r || e.currentBreakpoint === r) return;
      const o = (r in l ? l[r] : void 0) || e.originalParams,
        c = ie(e, n),
        d = ie(e, o),
        p = n.enabled;
      c && !d
        ? (a.removeClass(
            `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !c &&
          d &&
          (a.addClass(`${n.containerModifierClass}grid`),
          ((o.grid.fill && "column" === o.grid.fill) ||
            (!o.grid.fill && "column" === n.grid.fill)) &&
            a.addClass(`${n.containerModifierClass}grid-column`),
          e.emitContainerClasses());
      const u = o.direction && o.direction !== n.direction,
        h = n.loop && (o.slidesPerView !== n.slidesPerView || u);
      u && s && e.changeDirection(), O(e.params, o);
      const m = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        p && !m ? e.disable() : !p && m && e.enable(),
        (e.currentBreakpoint = r),
        e.emit("_beforeBreakpoint", o),
        h &&
          s &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - i + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", o);
    },
    getBreakpoint: function (e, t = "window", s) {
      if (!e || ("container" === t && !s)) return;
      let i = !1;
      const n = w(),
        a = "window" === t ? n.innerHeight : s.clientHeight,
        l = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: a * t, point: e };
          }
          return { value: e, point: e };
        });
      l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < l.length; e += 1) {
        const { point: a, value: r } = l[e];
        "window" === t
          ? n.matchMedia(`(min-width: ${r}px)`).matches && (i = a)
          : r <= s.clientWidth && (i = a);
      }
      return i || "max";
    },
  };
  const ae = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: s, rtl: i, $el: n, device: a, support: l } = e,
        r = (function (e, t) {
          const s = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((i) => {
                    e[i] && s.push(t + i);
                  })
                : "string" == typeof e && s.push(t + e);
            }),
            s
          );
        })(
          [
            "initialized",
            s.direction,
            { "pointer-events": !l.touch },
            { "free-mode": e.params.freeMode && s.freeMode.enabled },
            { autoheight: s.autoHeight },
            { rtl: i },
            { grid: s.grid && s.grid.rows > 1 },
            {
              "grid-column":
                s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
            },
            { android: a.android },
            { ios: a.ios },
            { "css-mode": s.cssMode },
            { centered: s.cssMode && s.centeredSlides },
          ],
          s.containerModifierClass
        );
      t.push(...r), n.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const le = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function re(e, t) {
    return function (s = {}) {
      const i = Object.keys(s)[0],
        n = s[i];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in n
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              O(t, s))
            : O(t, s))
        : O(t, s);
    };
  }
  const oe = {
      eventsEmitter: H,
      update: j,
      translate: V,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          i.cssMode ||
            (i.autoHeight && s.updateAutoHeight(),
            F({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          (s.animating = !1),
            i.cssMode ||
              (s.setTransition(0),
              F({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: W,
      loop: R,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (s.style.cursor = "move"),
            (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (s.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: se,
      breakpoints: ne,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s;
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: ae,
      images: {
        loadImage: function (e, t, s, i, n, a) {
          const l = w();
          let r;
          function o() {
            a && a();
          }
          k(e).parent("picture")[0] || (e.complete && n)
            ? o()
            : t
            ? ((r = new l.Image()),
              (r.onload = o),
              (r.onerror = o),
              i && (r.sizes = i),
              s && (r.srcset = s),
              t && (r.src = t))
            : o();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const i = e.imagesToLoad[s];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    ce = {};
  class de {
    constructor(...e) {
      let t, s;
      if (
        (1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
        s || (s = {}),
        (s = O({}, s)),
        t && !s.el && (s.el = t),
        s.el && k(s.el).length > 1)
      ) {
        const e = [];
        return (
          k(s.el).each((t) => {
            const i = O({}, s, { el: t });
            e.push(new de(i));
          }),
          e
        );
      }
      const i = this;
      (i.__swiper__ = !0),
        (i.support = G()),
        (i.device = q({ userAgent: s.userAgent })),
        (i.browser = N()),
        (i.eventsListeners = {}),
        (i.eventsAnyListeners = []),
        (i.modules = [...i.__modules__]),
        s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
      const n = {};
      i.modules.forEach((e) => {
        e({
          swiper: i,
          extendParams: re(s, n),
          on: i.on.bind(i),
          once: i.once.bind(i),
          off: i.off.bind(i),
          emit: i.emit.bind(i),
        });
      });
      const a = O({}, le, n);
      return (
        (i.params = O({}, a, ce, s)),
        (i.originalParams = O({}, i.params)),
        (i.passedParams = O({}, s)),
        i.params &&
          i.params.on &&
          Object.keys(i.params.on).forEach((e) => {
            i.on(e, i.params.on[e]);
          }),
        i.params && i.params.onAny && i.onAny(i.params.onAny),
        (i.$ = k),
        Object.assign(i, {
          enabled: i.params.enabled,
          el: t,
          classNames: [],
          slides: k(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === i.params.direction,
          isVertical: () => "vertical" === i.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: i.params.allowSlideNext,
          allowSlidePrev: i.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (i.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              i.support.touch || !i.params.simulateTouch
                ? i.touchEventsTouch
                : i.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: i.params.focusableElements,
            lastClickTime: P(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: i.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        i.emit("_swiper"),
        i.params.init && i.init(),
        i
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = s.minTranslate(),
        n = (s.maxTranslate() - i) * e + i;
      s.translateTo(n, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return e.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper-slide") ||
            0 === e.indexOf(t.params.slideClass)
        )
        .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((s) => {
        const i = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: s,
        slides: i,
        slidesGrid: n,
        slidesSizesGrid: a,
        size: l,
        activeIndex: r,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = i[r].swiperSlideSize;
        for (let s = r + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > l && (e = !0));
        for (let s = r - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > l && (e = !0));
      } else if ("current" === e)
        for (let e = r + 1; e < i.length; e += 1) {
          (t ? n[e] + a[e] - n[r] < l : n[e] - n[r] < l) && (o += 1);
        }
      else
        for (let e = r - 1; e >= 0; e -= 1) {
          n[r] - n[e] < l && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (i(), e.params.autoHeight && e.updateAutoHeight())
          : ((n =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            n || i()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const s = this,
        i = s.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${i}`)
            .addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = k(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = k(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => s.children(e)), t;
        }
        return s.children(i());
      })();
      if (0 === n.length && t.params.createElements) {
        const e = v().createElement("div");
        (n = k(e)),
          (e.className = t.params.wrapperClass),
          s.append(e),
          s.children(`.${t.params.slideClass}`).each((e) => {
            n.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: n,
          wrapperEl: n[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === n.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const s = this,
        { params: i, $el: n, $wrapperEl: a, slides: l } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            n.removeAttr("style"),
            a.removeAttr("style"),
            l &&
              l.length &&
              l
                .removeClass(
                  [
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      O(ce, e);
    }
    static get extendedDefaults() {
      return ce;
    }
    static get defaults() {
      return le;
    }
    static installModule(e) {
      de.prototype.__modules__ || (de.prototype.__modules__ = []);
      const t = de.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => de.installModule(e)), de)
        : (de.installModule(e), de);
    }
  }
  Object.keys(oe).forEach((e) => {
    Object.keys(oe[e]).forEach((t) => {
      de.prototype[t] = oe[e][t];
    });
  }),
    de.use([
      function ({ swiper: e, on: t, emit: s }) {
        const i = w();
        let n = null;
        const a = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s("beforeResize"), s("resize"));
          },
          l = () => {
            e && !e.destroyed && e.initialized && s("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== i.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((n = new ResizeObserver((t) => {
                const { width: s, height: i } = e;
                let n = s,
                  l = i;
                t.forEach(
                  ({ contentBoxSize: t, contentRect: s, target: i }) => {
                    (i && i !== e.el) ||
                      ((n = s ? s.width : (t[0] || t).inlineSize),
                      (l = s ? s.height : (t[0] || t).blockSize));
                  }
                ),
                  (n === s && l === i) || a();
              })),
              n.observe(e.el))
            : (i.addEventListener("resize", a),
              i.addEventListener("orientationchange", l));
        }),
          t("destroy", () => {
            n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
              i.removeEventListener("resize", a),
              i.removeEventListener("orientationchange", l);
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: i }) {
        const n = [],
          a = w(),
          l = (e, t = {}) => {
            const s = new (a.MutationObserver || a.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const t = function () {
                  i("observerUpdate", e[0]);
                };
                a.requestAnimationFrame
                  ? a.requestAnimationFrame(t)
                  : a.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              n.push(s);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = e.$el.parents();
                for (let e = 0; e < t.length; e += 1) l(t[e]);
              }
              l(e.$el[0], { childList: e.params.observeSlideChildren }),
                l(e.$wrapperEl[0], { attributes: !1 });
            }
          }),
          s("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const pe = de;
  function ue(e, t, s, i) {
    const n = v();
    return (
      e.params.createElements &&
        Object.keys(i).forEach((a) => {
          if (!s[a] && !0 === s.auto) {
            let l = e.$el.children(`.${i[a]}`)[0];
            l ||
              ((l = n.createElement("div")),
              (l.className = i[a]),
              e.$el.append(l)),
              (s[a] = l),
              (t[a] = l);
          }
        }),
      s
    );
  }
  function he({ swiper: e, extendParams: t, on: s, emit: i }) {
    function n(t) {
      let s;
      return (
        t &&
          ((s = k(t)),
          e.params.uniqueNavElements &&
            "string" == typeof t &&
            s.length > 1 &&
            1 === e.$el.find(t).length &&
            (s = e.$el.find(t))),
        s
      );
    }
    function a(t, s) {
      const i = e.params.navigation;
      t &&
        t.length > 0 &&
        (t[s ? "addClass" : "removeClass"](i.disabledClass),
        t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
        e.params.watchOverflow &&
          e.enabled &&
          t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
    }
    function l() {
      if (e.params.loop) return;
      const { $nextEl: t, $prevEl: s } = e.navigation;
      a(s, e.isBeginning && !e.params.rewind),
        a(t, e.isEnd && !e.params.rewind);
    }
    function r(t) {
      t.preventDefault(),
        (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev();
    }
    function o(t) {
      t.preventDefault(),
        (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
    }
    function c() {
      const t = e.params.navigation;
      if (
        ((e.params.navigation = ue(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !t.nextEl && !t.prevEl)
      )
        return;
      const s = n(t.nextEl),
        i = n(t.prevEl);
      s && s.length > 0 && s.on("click", o),
        i && i.length > 0 && i.on("click", r),
        Object.assign(e.navigation, {
          $nextEl: s,
          nextEl: s && s[0],
          $prevEl: i,
          prevEl: i && i[0],
        }),
        e.enabled ||
          (s && s.addClass(t.lockClass), i && i.addClass(t.lockClass));
    }
    function d() {
      const { $nextEl: t, $prevEl: s } = e.navigation;
      t &&
        t.length &&
        (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)),
        s &&
          s.length &&
          (s.off("click", r), s.removeClass(e.params.navigation.disabledClass));
    }
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
      },
    }),
      (e.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }),
      s("init", () => {
        c(), l();
      }),
      s("toEdge fromEdge lock unlock", () => {
        l();
      }),
      s("destroy", () => {
        d();
      }),
      s("enable disable", () => {
        const { $nextEl: t, $prevEl: s } = e.navigation;
        t &&
          t[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          ),
          s &&
            s[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            );
      }),
      s("click", (t, s) => {
        const { $nextEl: n, $prevEl: a } = e.navigation,
          l = s.target;
        if (e.params.navigation.hideOnClick && !k(l).is(a) && !k(l).is(n)) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === l || e.pagination.el.contains(l))
          )
            return;
          let t;
          n
            ? (t = n.hasClass(e.params.navigation.hiddenClass))
            : a && (t = a.hasClass(e.params.navigation.hiddenClass)),
            i(!0 === t ? "navigationShow" : "navigationHide"),
            n && n.toggleClass(e.params.navigation.hiddenClass),
            a && a.toggleClass(e.params.navigation.hiddenClass);
        }
      }),
      Object.assign(e.navigation, { update: l, init: c, destroy: d });
  }
  function me(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function fe({ swiper: e, extendParams: t, on: s, emit: i }) {
    const n = "swiper-pagination";
    let a;
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (e) => e,
        formatFractionTotal: (e) => e,
        bulletClass: `${n}-bullet`,
        bulletActiveClass: `${n}-bullet-active`,
        modifierClass: `${n}-`,
        currentClass: `${n}-current`,
        totalClass: `${n}-total`,
        hiddenClass: `${n}-hidden`,
        progressbarFillClass: `${n}-progressbar-fill`,
        progressbarOppositeClass: `${n}-progressbar-opposite`,
        clickableClass: `${n}-clickable`,
        lockClass: `${n}-lock`,
        horizontalClass: `${n}-horizontal`,
        verticalClass: `${n}-vertical`,
      },
    }),
      (e.pagination = { el: null, $el: null, bullets: [] });
    let l = 0;
    function r() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        !e.pagination.$el ||
        0 === e.pagination.$el.length
      );
    }
    function o(t, s) {
      const { bulletActiveClass: i } = e.params.pagination;
      t[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
    }
    function c() {
      const t = e.rtl,
        s = e.params.pagination;
      if (r()) return;
      const n =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        c = e.pagination.$el;
      let d;
      const p = e.params.loop
        ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
        : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((d = Math.ceil(
              (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
            )),
            d > n - 1 - 2 * e.loopedSlides && (d -= n - 2 * e.loopedSlides),
            d > p - 1 && (d -= p),
            d < 0 && "bullets" !== e.params.paginationType && (d = p + d))
          : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
        "bullets" === s.type &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const i = e.pagination.bullets;
        let n, r, p;
        if (
          (s.dynamicBullets &&
            ((a = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
            c.css(
              e.isHorizontal() ? "width" : "height",
              a * (s.dynamicMainBullets + 4) + "px"
            ),
            s.dynamicMainBullets > 1 &&
              void 0 !== e.previousIndex &&
              ((l += d - (e.previousIndex - e.loopedSlides || 0)),
              l > s.dynamicMainBullets - 1
                ? (l = s.dynamicMainBullets - 1)
                : l < 0 && (l = 0)),
            (n = Math.max(d - l, 0)),
            (r = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
            (p = (r + n) / 2)),
          i.removeClass(
            ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
              .map((e) => `${s.bulletActiveClass}${e}`)
              .join(" ")
          ),
          c.length > 1)
        )
          i.each((e) => {
            const t = k(e),
              i = t.index();
            i === d && t.addClass(s.bulletActiveClass),
              s.dynamicBullets &&
                (i >= n && i <= r && t.addClass(`${s.bulletActiveClass}-main`),
                i === n && o(t, "prev"),
                i === r && o(t, "next"));
          });
        else {
          const t = i.eq(d),
            a = t.index();
          if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
            const t = i.eq(n),
              l = i.eq(r);
            for (let e = n; e <= r; e += 1)
              i.eq(e).addClass(`${s.bulletActiveClass}-main`);
            if (e.params.loop)
              if (a >= i.length) {
                for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                  i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                  `${s.bulletActiveClass}-prev`
                );
              } else o(t, "prev"), o(l, "next");
            else o(t, "prev"), o(l, "next");
          }
        }
        if (s.dynamicBullets) {
          const n = Math.min(i.length, s.dynamicMainBullets + 4),
            l = (a * n - a) / 2 - p * a,
            r = t ? "right" : "left";
          i.css(e.isHorizontal() ? r : "top", `${l}px`);
        }
      }
      if (
        ("fraction" === s.type &&
          (c.find(me(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
          c.find(me(s.totalClass)).text(s.formatFractionTotal(p))),
        "progressbar" === s.type)
      ) {
        let t;
        t = s.progressbarOpposite
          ? e.isHorizontal()
            ? "vertical"
            : "horizontal"
          : e.isHorizontal()
          ? "horizontal"
          : "vertical";
        const i = (d + 1) / p;
        let n = 1,
          a = 1;
        "horizontal" === t ? (n = i) : (a = i),
          c
            .find(me(s.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${a})`)
            .transition(e.params.speed);
      }
      "custom" === s.type && s.renderCustom
        ? (c.html(s.renderCustom(e, d + 1, p)), i("paginationRender", c[0]))
        : i("paginationUpdate", c[0]),
        e.params.watchOverflow &&
          e.enabled &&
          c[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
    }
    function d() {
      const t = e.params.pagination;
      if (r()) return;
      const s =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        n = e.pagination.$el;
      let a = "";
      if ("bullets" === t.type) {
        let i = e.params.loop
          ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          !e.params.loop &&
          i > s &&
          (i = s);
        for (let s = 0; s < i; s += 1)
          t.renderBullet
            ? (a += t.renderBullet.call(e, s, t.bulletClass))
            : (a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
        n.html(a), (e.pagination.bullets = n.find(me(t.bulletClass)));
      }
      "fraction" === t.type &&
        ((a = t.renderFraction
          ? t.renderFraction.call(e, t.currentClass, t.totalClass)
          : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
        n.html(a)),
        "progressbar" === t.type &&
          ((a = t.renderProgressbar
            ? t.renderProgressbar.call(e, t.progressbarFillClass)
            : `<span class="${t.progressbarFillClass}"></span>`),
          n.html(a)),
        "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
    }
    function p() {
      e.params.pagination = ue(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const t = e.params.pagination;
      if (!t.el) return;
      let s = k(t.el);
      0 !== s.length &&
        (e.params.uniqueNavElements &&
          "string" == typeof t.el &&
          s.length > 1 &&
          ((s = e.$el.find(t.el)),
          s.length > 1 &&
            (s = s.filter((t) => k(t).parents(".swiper")[0] === e.el))),
        "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
        s.addClass(t.modifierClass + t.type),
        s.addClass(t.modifierClass + e.params.direction),
        "bullets" === t.type &&
          t.dynamicBullets &&
          (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
          (l = 0),
          t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
        "progressbar" === t.type &&
          t.progressbarOpposite &&
          s.addClass(t.progressbarOppositeClass),
        t.clickable &&
          s.on("click", me(t.bulletClass), function (t) {
            t.preventDefault();
            let s = k(this).index() * e.params.slidesPerGroup;
            e.params.loop && (s += e.loopedSlides), e.slideTo(s);
          }),
        Object.assign(e.pagination, { $el: s, el: s[0] }),
        e.enabled || s.addClass(t.lockClass));
    }
    function u() {
      const t = e.params.pagination;
      if (r()) return;
      const s = e.pagination.$el;
      s.removeClass(t.hiddenClass),
        s.removeClass(t.modifierClass + t.type),
        s.removeClass(t.modifierClass + e.params.direction),
        e.pagination.bullets &&
          e.pagination.bullets.removeClass &&
          e.pagination.bullets.removeClass(t.bulletActiveClass),
        t.clickable && s.off("click", me(t.bulletClass));
    }
    s("init", () => {
      p(), d(), c();
    }),
      s("activeIndexChange", () => {
        (e.params.loop || void 0 === e.snapIndex) && c();
      }),
      s("snapIndexChange", () => {
        e.params.loop || c();
      }),
      s("slidesLengthChange", () => {
        e.params.loop && (d(), c());
      }),
      s("snapGridLengthChange", () => {
        e.params.loop || (d(), c());
      }),
      s("destroy", () => {
        u();
      }),
      s("enable disable", () => {
        const { $el: t } = e.pagination;
        t &&
          t[e.enabled ? "removeClass" : "addClass"](
            e.params.pagination.lockClass
          );
      }),
      s("lock unlock", () => {
        c();
      }),
      s("click", (t, s) => {
        const n = s.target,
          { $el: a } = e.pagination;
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          a.length > 0 &&
          !k(n).hasClass(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && n === e.navigation.nextEl) ||
              (e.navigation.prevEl && n === e.navigation.prevEl))
          )
            return;
          const t = a.hasClass(e.params.pagination.hiddenClass);
          i(!0 === t ? "paginationShow" : "paginationHide"),
            a.toggleClass(e.params.pagination.hiddenClass);
        }
      }),
      Object.assign(e.pagination, {
        render: d,
        update: c,
        init: p,
        destroy: u,
      });
  }
  function ge(e, t) {
    return e.transformEl
      ? t
          .find(e.transformEl)
          .css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
      : t;
  }
  function ve({ swiper: e, extendParams: t, on: s }) {
    t({ fadeEffect: { crossFade: !1, transformEl: null } });
    !(function (e) {
      const {
        effect: t,
        swiper: s,
        on: i,
        setTranslate: n,
        setTransition: a,
        overwriteParams: l,
        perspective: r,
      } = e;
      i("beforeInit", () => {
        if (s.params.effect !== t) return;
        s.classNames.push(`${s.params.containerModifierClass}${t}`),
          r && r() && s.classNames.push(`${s.params.containerModifierClass}3d`);
        const e = l ? l() : {};
        Object.assign(s.params, e), Object.assign(s.originalParams, e);
      }),
        i("setTranslate", () => {
          s.params.effect === t && n();
        }),
        i("setTransition", (e, i) => {
          s.params.effect === t && a(i);
        });
    })({
      effect: "fade",
      swiper: e,
      on: s,
      setTranslate: () => {
        const { slides: t } = e,
          s = e.params.fadeEffect;
        for (let i = 0; i < t.length; i += 1) {
          const t = e.slides.eq(i);
          let n = -t[0].swiperSlideOffset;
          e.params.virtualTranslate || (n -= e.translate);
          let a = 0;
          e.isHorizontal() || ((a = n), (n = 0));
          const l = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(t[0].progress), 0)
            : 1 + Math.min(Math.max(t[0].progress, -1), 0);
          ge(s, t)
            .css({ opacity: l })
            .transform(`translate3d(${n}px, ${a}px, 0px)`);
        }
      },
      setTransition: (t) => {
        const { transformEl: s } = e.params.fadeEffect;
        (s ? e.slides.find(s) : e.slides).transition(t),
          (function ({ swiper: e, duration: t, transformEl: s, allSlides: i }) {
            const { slides: n, activeIndex: a, $wrapperEl: l } = e;
            if (e.params.virtualTranslate && 0 !== t) {
              let t,
                r = !1;
              (t = i ? (s ? n.find(s) : n) : s ? n.eq(a).find(s) : n.eq(a)),
                t.transitionEnd(() => {
                  if (r) return;
                  if (!e || e.destroyed) return;
                  (r = !0), (e.animating = !1);
                  const t = ["webkitTransitionEnd", "transitionend"];
                  for (let e = 0; e < t.length; e += 1) l.trigger(t[e]);
                });
            }
          })({ swiper: e, duration: t, transformEl: s, allSlides: !0 });
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function Se() {
    let e = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)'
    );
    e &&
      e.forEach((e) => {
        e.parentElement.classList.add("swiper"),
          e.classList.add("swiper-wrapper");
        for (const t of e.children) t.classList.add("swiper-slide");
      });
  }
  window.addEventListener("load", function (e) {
    Se(),
      document.querySelector(".masters__slider") &&
        new pe(".masters__slider", {
          modules: [he, fe],
          observer: !0,
          observeParents: !0,
          slidesPerView: 3,
          spaceBetween: 30,
          autoHeight: !0,
          speed: 800,
          loop: !0,
          lazy: !0,
          pagination: {
            el: ".body-pagin__pagination",
            clickable: !0,
            type: "fraction",
          },
          navigation: {
            nextEl: ".body-pagin__right",
            prevEl: ".body-pagin__left",
          },
          breakpoints: {
            320: { slidesPerView: 1.3, spaceBetween: 10, autoHeight: !0 },
            500: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 20 },
          },
          on: {},
        }),
      Se(),
      document.querySelector(".comments__slider") &&
        new pe(".comments__slider", {
          modules: [he, fe, ve],
          effect: "fade",
          autoplay: { delay: 3e3, disableOnInteraction: !1 },
          observer: !0,
          observeParents: !0,
          slidesPerView: 1,
          spaceBetween: 30,
          autoHeight: !0,
          speed: 800,
          loop: !0,
          lazy: !0,
          pagination: {
            el: ".comments-pagin__pagination",
            clickable: !0,
            type: "fraction",
          },
          navigation: {
            nextEl: ".comments-pagin__right",
            prevEl: ".comments-pagin__left",
          },
          on: {},
        });
  });
  let we = !1;
  setTimeout(() => {
    if (we) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  const be = document.querySelector(".video"),
    Ce = be.querySelector(".video__item");
  Ce &&
    be.addEventListener("click", function () {
      Ce.paused
        ? (Ce.play(), be.classList.add("video-play"))
        : (Ce.pause(), be.classList.remove("video-play"));
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    t.any() && document.documentElement.classList.add("touch"),
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.documentElement.classList.add("loaded");
      }, 0);
    }),
    (function () {
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          a &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? l(e) : r(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      if (document.querySelectorAll("[data-fullscreen]").length && t.any()) {
        function e() {
          let e = 0.01 * window.innerHeight;
          document.documentElement.style.setProperty("--vh", `${e}px`);
        }
        window.addEventListener("resize", e), e();
      }
    })(),
    (function () {
      const e = document.querySelectorAll("[data-showmore]");
      let t, n;
      function a(e) {
        e.forEach((e) => {
          l(e.itemsArray, e.matchMedia);
        });
      }
      function l(e, t) {
        e.forEach((e) => {
          !(function (e, t = !1) {
            const n = (e = t ? e.item : e).querySelector(
                "[data-showmore-content]"
              ),
              a = e.querySelector("[data-showmore-button]"),
              l = r(e, n);
            (t.matches || !t) &&
            l <
              (function (e) {
                let t = e.offsetHeight;
                e.style.removeProperty("height");
                let s = e.offsetHeight;
                return (e.style.height = `${t}px`), s;
              })(n)
              ? (s(n, 0, l), (a.hidden = !1))
              : (i(n, 0, l), (a.hidden = !0));
          })(e, t);
        });
      }
      function r(e, t) {
        let s = 0;
        if ("items" == (e.dataset.showmore ? e.dataset.showmore : "size")) {
          const e = t.dataset.showmoreContent ? t.dataset.showmoreContent : 2,
            i = t.children;
          for (let t = 1; t < i.length; t++) {
            if (((s += i[t - 1].offsetHeight), t == e)) break;
          }
        } else {
          s = t.dataset.showmoreContent ? t.dataset.showmoreContent : 150;
        }
        return s;
      }
      function o(e) {
        const o = e.target,
          c = e.type;
        if ("click" === c) {
          if (o.closest("[data-showmore-button]")) {
            const e = o
                .closest("[data-showmore-button]")
                .closest("[data-showmore]"),
              t = e.querySelector("[data-showmore-content]"),
              n = e.dataset.showmoreButton ? e.dataset.showmoreButton : "500",
              a = r(e, t);
            t.classList.contains("_slide") ||
              (e.classList.contains("_showmore-active")
                ? s(t, n, a)
                : i(t, n, a),
              e.classList.toggle("_showmore-active"));
          }
        } else "resize" === c && (t.length && l(t), n && a(n));
      }
      e.length &&
        ((t = Array.from(e).filter(function (e, t, s) {
          return !e.dataset.showmoreMedia;
        })),
        t.length && l(t),
        document.addEventListener("click", o),
        window.addEventListener("resize", o),
        (n = c(e, "showmoreMedia")),
        n &&
          n.length &&
          (n.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              l(e.itemsArray, e.matchMedia);
            });
          }),
          a(n)));
    })(),
    (function () {
      const e = document.querySelectorAll(
        "input[placeholder],textarea[placeholder]"
      );
      e.length &&
        e.forEach((e) => {
          e.dataset.placeholder = e.placeholder;
        }),
        document.body.addEventListener("focusin", function (e) {
          const t = e.target;
          ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
            (t.dataset.placeholder && (t.placeholder = ""),
            t.classList.add("_form-focus"),
            t.parentElement.classList.add("_form-focus"),
            h.removeError(t));
        }),
        document.body.addEventListener("focusout", function (e) {
          const t = e.target;
          ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
            (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
            t.classList.remove("_form-focus"),
            t.parentElement.classList.remove("_form-focus"),
            t.hasAttribute("data-validate") && h.validateInput(t));
        });
    })(),
    (u.selectModule = new p({})),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const s = t.closest("[data-goto]"),
              i = s.dataset.goto ? s.dataset.goto : "",
              n = !!s.hasAttribute("data-goto-header"),
              a = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
            d(i, n, a), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            s = t.target;
          if ("navigator" === s.dataset.watch) {
            const e = s.id,
              i =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? i && i.classList.add("_navigator-active")
              : i && i.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })();
})();
