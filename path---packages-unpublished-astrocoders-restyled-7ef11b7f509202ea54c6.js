webpackJsonp([0xd9df16874362],{1064:function(e,s){e.exports={data:{package:{id:"unpublished/Astrocoders/restyled",score:0,name:"Astrocoders/restyled",version:"1.0.0",description:"Boilerplate for BuckleScript NPM package",keywords:[],license:"MIT",updated:"2017-12-23T12:43:15.338Z",stars:18,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1>bs-restyled</h1>\n<p><a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/Astrocoders/restyled.svg" alt="Greenkeeper badge"></a>\n<a href="https://travis-ci.org/Astrocoders/restyled"><img src="https://travis-ci.org/Astrocoders/restyled.svg?branch=master" alt="Build Status"></a></p>\n<p>Styled Components concept for Reason</p>\n<h2>Install</h2>\n<ul>\n<li><code>yarn add bs-styled</code></li>\n<li>Then add it to your bs-dependencies</li>\n</ul>\n<pre><code class="language-js">{\n  "name": "myapp",\n  "reason": {\n    "react-jsx": 2\n  },\n  "bs-dependencies": [\n    "bs-react-native",\n    "reason-react",\n    "bs-restyled"\n  ],\n  "bsc-flags": ["-bs-super-errors"],\n}\n</code></pre>\n<h2>Usage</h2>\n<pre><code class="language-ml">module Wrapper = Styled.View {\n  type styleParams = unit;\n  let style (_) => Style.(style([flex(1), flexDirection(`column), justifyContent(`center)]));\n};\n\nlet component = ReasonReact.statelessComponent("MyView");\n\nlet make = (_children) => {\n  ...component,\n  render: (_self) =>\n    &#x3C;Wrapper>\n      ...anything else...\n    &#x3C;/Wrapper>\n}\n</code></pre>\n<p>Take a look in the <a href="https://github.com/Astrocoders/restyled/blob/master/re/REStyled.re">REStyled.re</a> for more</p>\n<h3>Acknowledgments</h3>\n<p>Thanks everyone in Reason Discord for pointing me\ndirections and specially to Jared who proposed this\nusage to me here <a href="https://gist.github.com/jaredly/a5e0102c060b7a1b40525d41f87843a8">https://gist.github.com/jaredly/a5e0102c060b7a1b40525d41f87843a8</a></p>\n',homepageUrl:null,repositoryUrl:"https://github.com/Astrocoders/restyled",npmUrl:null,issuesUrl:null,slug:"packages/unpublished/Astrocoders/restyled"}},pathContext:{id:"unpublished/Astrocoders/restyled"}}}});
//# sourceMappingURL=path---packages-unpublished-astrocoders-restyled-7ef11b7f509202ea54c6.js.map