window.creditsListInitialized = false; window.isClientWindow = false; var CreditsList = Class.create({
    initialize: function (c) {
        window.isClientWindow = c; if (window.creditsListInitialized) { return } function d() {
            $$(".open[rel]").each(function (f) {
                f.observe("click", function (k) {
                    var i = f.up(".method"); var h = i.parentNode.select("." + f.getAttribute("rel"));
                    if (!!h && h.length > 0) {
                        if (h.first().visible()) { var j = h.first(); var g = j.up(".paymentmethods-client"); g.scrollTop = Math.max(j.cumulativeOffset()[1] - g.cumulativeOffset()[1], 0) } else {
                            h.invoke("remove"); i.insert({ after: h.first() }); var j = i.parentNode.select("." + f.getAttribute("rel")).first(); Effect.Fade(i, {
                                duration: 0.5, afterFinish: function () {
                                    var m = /.*(idx[0-9]+).*/;
                                    var l = i.className.replace(m, "$1"); var n = j.className.replace(m, "$1"); j.removeClassName(n).addClassName(l).show(); i.removeClassName(l).addClassName(n).hide()
                                }
                            })
                        }
                    }
                })
            }); $$("form.redeem").each(function (g) { new NewRedeemHabblet(g) })
        } d(); var b = function () {
            $$(".method-group.phone .method, .method-group.phone-single .method, .method-group.utilities .method,").each(function (f) {
                f.select("h2").invoke("insert", { after: '<div class="top"><div></div></div>' });
                f.insert('<div class="bottom"><div></div></div>')
            })
        }; b(); var e = function (h) {
            var f = h.select(".method:visible"); if (f.length > 2) { f = f.slice(0, 2) } var i = [f[0].getHeight(), f[1].getHeight()]; var k, j; var g = "spacer"; if (i[0] != i[1]) {
                if (i[0] > i[1]) {
                    j = i[0] - i[1]; if (f[1].select(".smallprint").length > 0) {
                        k = f[1].select(".smallprint:first")[0];
                        g += "-smallprint"
                    } else { k = f[1].select(".summary:first")[0]; g += "-summary" }
                } else { if (i[1] > i[0]) { j = i[1] - i[0]; if (f[0].select(".smallprint").length > 0) { k = f[0].select(".smallprint:first")[0]; g += "-smallprint" } else { k = f[0].select(".summary:first")[0]; g += "-summary" } } } k.insert({ after: '<div class="' + g + '" style="height: ' + j + 'px"></div>' })
            }
        }; var a = function (g) {
            var f = function (l) {
                var i = l.element(); if (!i.match("a")) { i = i.up("a") } if (i.hasClassName("exclude") || i.hasAttribute("onclick")) { if (!i.hasClassName("redeem-submit")) { l.stop() } return } else {
                    if (!i.getAttribute("target")) {
                        l.stop(); if (i.hasClassName("country")) {
                            var h = habboReqPath + "/habblet/" + (window.isClientWindow ? "paymentmethods_client" : "paymentmethods_cbs2");
                            new Ajax.Updater($$(".paymentmethods-client").first(), h, { method: "post", parameters: { viewName: "client", slug: i.getAttribute("rel") }, evalScripts: true, onComplete: function (m) { g.scrollTop = 0; b(); d(); $$(".selectPricePointFormForConfirmationPage").first().setAttribute("target", "_blank") } })
                        } else {
                            if (i.hasClassName("target-utilities")) {
                                var k = $$(".utilities").first();
                                if (!!k) { var j = k.up(".paymentmethods-client"); j.scrollTop = Math.max(k.cumulativeOffset()[1] - j.cumulativeOffset()[1], 0) }
                            } HabbletLoader.openLink(i)
                        }
                    }
                }
            }; g.observe("click", Event.delegate({ a: f, "a.new-button *": f }))
        }; if ($$(".paymentmethods-client").length == 0) {
            $$(".method-group.phone, .method-group.phone-single").each(e)
        } else { $$(".paymentmethods-client").each(a) } window.creditsListInitialized = true
    }
}); var NewRedeemHabblet = Class.create({
    form: null, busy: false, initialize: function (a) {
        this.form = $(a) || $("voucher-form"); if (!!this.form) {
            this.form.observe("submit", this._redeemVoucher.bind(this)); this.form.observe("click", this._clicked.bind(this))
        }
    }, _clicked: function (b) { if (this.busy) { return } var a = b.findElement(".redeem-submit"); if (!!a) { this._redeemVoucher(b, a) } }, _redeemVoucher: function (c, b) {
        if (this.busy) { return } c.stop(); this.busy = true; b.addClassName("disabled-button"); var a = this; setTimeout(function () {
            new Ajax.Updater(a.form, habboReqPath + "/habblet/ajax_redeemvoucher.php", {
                method: "post", parameters: { voucherCode: a.form.down("input[type=text]").value }, onComplete: function (d) {
                    a.form.select(".rounded").each(function (f) {
                        Rounder.addCorners(f, 8, 8)
                    }); var e = d.getHeader("X-Habbo-Balance"); if ((!!e || e === 0)) { $$(".redeem-balance-amount").each(function (f) { f.innerHTML = e }) } a.busy = false
                }.bind(a)
            })
        }, 5000)
    }
}); function submitCreditForm(b, g, d, j) {
    var k = b.getInputs("radio", "pricePointId"); var h = k.length; for (var e = 0; e < h; e++) {
        if (k[e].checked == true) {
            var f = k[e].up();
            var c = b.action; var a = k[e].value; b.action = b.action + "/" + g + "/" + a + "/" + d + (j != "" ? "/" + j : ""); b.submit(); b.action = c; return false
        }
    } return false
} __credits__defined__ = true;