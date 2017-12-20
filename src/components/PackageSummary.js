// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Tag                  = require("./Tag.js");
var Icon                 = require("../vendor/icons/Icon.js");
var Link                 = require("../../bindings/gatsby/link.js");
var React                = require("react");
var Control              = require("./helpers/Control.js");
var Helpers              = require("../utils/Helpers.js");
var TimeAgo              = require("../vendor/TimeAgo.js");
var ReasonReact          = require("reason-react/src/ReasonReact.js");
var Js_primitive         = require("bs-platform/lib/js/js_primitive.js");
var PackageSummaryStyles = require("./PackageSummaryStyles.js");

var component = ReasonReact.statelessComponent("PackageSummary");

function make($$package, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      var param = $$package.license;
      return React.createElement("div", {
                  className: PackageSummaryStyles.root($$package.type)
                }, React.createElement("div", {
                      className: PackageSummaryStyles.left
                    }, ReasonReact.element(/* None */0, /* None */0, Link.make($$package.slug, /* None */0, /* None */0, /* array */[Helpers.text($$package.name)])), React.createElement("span", {
                          className: PackageSummaryStyles.version
                        }, Helpers.text($$package.version)), React.createElement("span", {
                          className: PackageSummaryStyles.unpublishedLabel($$package.type)
                        }, Helpers.text("unpublished")), React.createElement("div", {
                          className: PackageSummaryStyles.description
                        }, Helpers.text($$package.description)), React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Icon.Tags[/* make */0](/* Some */[PackageSummaryStyles.tagsIcon], /* array */[])), ReasonReact.element(/* None */0, /* None */0, Control.$$Map[/* make */1]($$package.keywords, (function (keyword) {
                                    return ReasonReact.element(/* Some */[keyword], /* None */0, Tag.make(keyword, /* array */[]));
                                  }))))), React.createElement("div", {
                      className: PackageSummaryStyles.right
                    }, React.createElement("div", {
                          className: PackageSummaryStyles.updated
                        }, ReasonReact.element(/* None */0, /* None */0, TimeAgo.make($$package.updated, /* array */[]))), (param == null) ? React.createElement("div", {
                            className: PackageSummaryStyles.nolicense
                          }, Helpers.text("No license")) : React.createElement("div", {
                            className: PackageSummaryStyles.license
                          }, Helpers.text(param)), ReasonReact.element(/* None */0, /* None */0, Control.IfSome[/* make */1](Js_primitive.null_undefined_to_opt($$package.stars), (function (stars) {
                                return React.createElement("div", {
                                            className: PackageSummaryStyles.stars
                                          }, Helpers.text(stars), ReasonReact.element(/* None */0, /* None */0, Icon.Star[/* make */0](/* Some */[PackageSummaryStyles.starIcon], /* array */[])));
                              })))));
    });
  return newrecord;
}

var Styles = 0;

exports.Styles    = Styles;
exports.component = component;
exports.make      = make;
/* component Not a pure module */