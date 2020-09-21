(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{439:function(e,t,a){"use strict";a.r(t);var s=a(25),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"schedule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[e._v("#")]),e._v(" Schedule")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"org.kestra.core.models.triggers.types.Schedule"')]),e._v("\n")])])]),a("blockquote",[a("p",[e._v("Kestra is able to trigger flow based on Schedule (aka the time). If you need to wait another system to be ready and can't use any event mechanism, you can schedule 1 or more time for the current flow.")])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("triggers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" schedule\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" org.kestra.core.models.triggers.types.Schedule\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("cron")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*/15 * * * *"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("backfill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token datetime number"}},[e._v("2020-06-25T14:00:00Z")]),e._v("\n")])])]),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[e._v("#")]),e._v(" Inputs")]),e._v(" "),a("h3",{attrs:{id:"id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[e._v("#")]),e._v(" "),a("code",[e._v("id")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("Badge",{attrs:{vertical:"middle",text:"String"}})],1),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ✔")])]),e._v(" "),a("blockquote",[a("p",[e._v("unique for a flow. The scheduler will keep the last execution date for this schedule. This allow you to change the cron expression without restart all the past execution (if backfill exists)")])]),e._v(" "),a("h3",{attrs:{id:"cron"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cron"}},[e._v("#")]),e._v(" "),a("code",[e._v("cron")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("Badge",{attrs:{vertical:"middle",text:"String"}})],1),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ✔")])]),e._v(" "),a("blockquote",[a("p",[e._v("a "),a("a",{attrs:{href:"https://crontab.guru/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cron expression"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"backfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backfill"}},[e._v("#")]),e._v(" "),a("code",[e._v("backfill")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("Badge",{attrs:{vertical:"middle",text:"Backfill"}})],1),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"#backfill-2"}},[e._v("Backfill")]),e._v(" in order to play the past")])]),e._v(" "),a("h3",{attrs:{id:"backfill-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backfill-start"}},[e._v("#")]),e._v(" "),a("code",[e._v("backfill.start")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("Badge",{attrs:{vertical:"middle",text:"ZonedDateTime"}})],1),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ✔")])]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"#backfill-2"}},[e._v("Backfill")]),e._v(" date")])]),e._v(" "),a("h2",{attrs:{id:"backfill-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backfill-2"}},[e._v("#")]),e._v(" Backfill")]),e._v(" "),a("p",[e._v("Kestra will handle optionnaly a backfill. The concept of backfill is the replay the missing schedule because we create the flow later.")]),e._v(" "),a("p",[e._v("Backfill will do all schedules between define date & current date and will start after the normal schedule.")]),e._v(" "),a("h2",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),a("p",[e._v("When the flow is schedule, some context variables are injected to allow some customization of the flow"),a("br"),e._v("\n(like filename, where in sql query).")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[e._v("{{ schedule.date }}")])]),e._v(" "),a("td",[e._v("the date of current schedule")])]),e._v(" "),a("tr",[a("td",[a("code",{pre:!0},[e._v("{{ schedule.next }}")])]),e._v(" "),a("td",[e._v("the date of next schedule")])]),e._v(" "),a("tr",[a("td",[a("code",{pre:!0},[e._v("{{ schedule.previous }}")])]),e._v(" "),a("td",[e._v("the date of previous schedule")])])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Schedule cannot overlap, this mean that we can't have any concurrent schedule. If the previous schedule is not ended when the next one must start, the scheduler will wait the end of the previous one. Same is applied for backfill.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);