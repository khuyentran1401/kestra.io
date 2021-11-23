(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{493:function(t,a,e){"use strict";e.r(a);var r=e(12),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[e("img",{attrs:{width:"25",src:"data:image/svg+xml;base64,PHN2ZyBpZD0iUHJvZHVjdF9JY29ucyIgZGF0YS1uYW1lPSJQcm9kdWN0IEljb25zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNhZWNiZmE7fS5jbHMtMSwuY2xzLTIsLmNscy0ze2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTJ7ZmlsbDojNjY5ZGY2O30uY2xzLTN7ZmlsbDojNDI4NWY0O308L3N0eWxlPjwvZGVmcz48dGl0bGU+SWNvbl8yNHB4X0NvbG9yX0JpZ1F1ZXJ5PC90aXRsZT48ZyBpZD0iU2hhcGUiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYuNzMsMTAuODN2Mi42M0E0LjkxLDQuOTEsMCwwLDAsOC40NCwxNS4yVjEwLjgzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTkuODksOC40MXY3LjUzQTcuNjIsNy42MiwwLDAsMCwxMSwxNiw4LDgsMCwwLDAsMTIsMTZWOC40MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMy42NCwxMS44NnYzLjI5YTUsNSwwLDAsMCwxLjctMS44MlYxMS44NloiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNy43NCwxNi4zMmwtMS40MiwxLjQyYS40Mi40MiwwLDAsMCwwLC42bDMuNTQsMy41NGEuNDIuNDIsMCwwLDAsLjU5LDBsMS40My0xLjQzYS40Mi40MiwwLDAsMCwwLS41OWwtMy41NC0zLjU0YS40Mi40MiwwLDAsMC0uNiwwIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTEsMmE5LDksMCwxLDAsOSw5LDksOSwwLDAsMC05LTltMCwxNS42OUE2LjY4LDYuNjgsMCwxLDEsMTcuNjksMTEsNi42OCw2LjY4LDAsMCwxLDExLDE3LjY5Ii8+PC9nPjwvc3ZnPg==",alt:"ExtractToGcs"}}),t._v(" ExtractToGcs\n")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.plugin.gcp.bigquery.ExtractToGcs"')]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Extract data from BigQuery table to GCS (Google Cloud Storage)")])]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("blockquote",[e("p",[t._v("Extract a BigQuery table to a gcs bucket")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extract_to_gcs"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.plugin.gcp.bigquery.ExtractToGcs"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destinationUris")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gs://bucket_name/filename.csv"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sourceTable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_project.my_dataset.my_table"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CSV\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fieldDelimiter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("';'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("printHeader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),e("h2",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("h3",{attrs:{id:"compression"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compression"}},[t._v("#")]),t._v(" "),e("code",[t._v("compression")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("the compression value to use for exported files. If not set exported files are not compressed.")])]),t._v(" "),e("h3",{attrs:{id:"destinationuris"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#destinationuris"}},[t._v("#")]),t._v(" "),e("code",[t._v("destinationUris")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The list of fully-qualified Google Cloud Storage URIs (e.g. gs://bucket/path) where the extracted table should be written.")])]),t._v(" "),e("h3",{attrs:{id:"fielddelimiter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fielddelimiter"}},[t._v("#")]),t._v(" "),e("code",[t._v("fieldDelimiter")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v('The delimiter to use between fields in the exported data. By default "," is used.')])]),t._v(" "),e("h3",{attrs:{id:"format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#format"}},[t._v("#")]),t._v(" "),e("code",[t._v("format")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The exported file format. If not set table is exported in CSV format.")])]),t._v(" "),e("h3",{attrs:{id:"jobtimeoutms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jobtimeoutms"}},[t._v("#")]),t._v(" "),e("code",[t._v("jobTimeoutMs")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("integer")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("[Optional] Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.")])]),t._v(" "),e("h3",{attrs:{id:"labels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#labels"}},[t._v("#")]),t._v(" "),e("code",[t._v("labels")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("object")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The labels associated with this job.")])]),t._v(" "),e("p",[t._v("The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key."),e("br"),t._v("\nParameters:"),e("br"),t._v("\nlabels - labels or null for none")]),t._v(" "),e("h3",{attrs:{id:"location"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" "),e("code",[t._v("location")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The geographic location where the dataset should reside")])]),t._v(" "),e("p",[t._v("This property is experimental and might be subject to change or removed.")]),t._v(" "),e("p",[t._v("See "),e("a",{attrs:{href:"https://cloud.google.com/bigquery/docs/reference/v2/datasets#location"}},[t._v("Dataset Location")])]),t._v(" "),e("h3",{attrs:{id:"printheader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#printheader"}},[t._v("#")]),t._v(" "),e("code",[t._v("printHeader")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("boolean")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Whether to print out a header row in the results. By default an header is printed.")])]),t._v(" "),e("h3",{attrs:{id:"projectid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#projectid"}},[t._v("#")]),t._v(" "),e("code",[t._v("projectId")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The GCP project id")])]),t._v(" "),e("h3",{attrs:{id:"retryauto"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retryauto"}},[t._v("#")]),t._v(" "),e("code",[t._v("retryAuto")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" ====")]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h3",{attrs:{id:"retrymessages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retrymessages"}},[t._v("#")]),t._v(" "),e("code",[t._v("retryMessages")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("[due to concurrent update, Retrying the job may solve the problem]")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The message that are valid for a automatic retry.")])]),t._v(" "),e("p",[t._v("Message is tested as a substring of the full message and case insensitive")]),t._v(" "),e("h3",{attrs:{id:"retryreasons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retryreasons"}},[t._v("#")]),t._v(" "),e("code",[t._v("retryReasons")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("[rateLimitExceeded, jobBackendError, internalError]")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The reason that are valid for a automatic retry.")])]),t._v(" "),e("h3",{attrs:{id:"scopes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[t._v("#")]),t._v(" "),e("code",[t._v("scopes")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("[https://www.googleapis.com/auth/cloud-platform]")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The GCP scopes to used")])]),t._v(" "),e("h3",{attrs:{id:"serviceaccount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serviceaccount"}},[t._v("#")]),t._v(" "),e("code",[t._v("serviceAccount")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The GCP service account key")])]),t._v(" "),e("h3",{attrs:{id:"sourcetable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sourcetable"}},[t._v("#")]),t._v(" "),e("code",[t._v("sourceTable")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The table to export.")])]),t._v(" "),e("h3",{attrs:{id:"useavrologicaltypes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#useavrologicaltypes"}},[t._v("#")]),t._v(" "),e("code",[t._v("useAvroLogicalTypes")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("boolean")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v('[Optional] Flag if format is set to "AVRO".')])]),t._v(" "),e("p",[t._v('[Optional] If destinationFormat is set to "AVRO", this flag indicates whether to enable extracting applicable column types (such as TIMESTAMP) to their corresponding AVRO logical types (timestamp-micros), instead of only using their raw types (avro-long).'),e("br"),t._v("\nParameters:"),e("br"),t._v("\nuseAvroLogicalTypes - useAvroLogicalTypes or null for none")]),t._v(" "),e("h2",{attrs:{id:"outputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),e("h3",{attrs:{id:"destinationuris-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#destinationuris-2"}},[t._v("#")]),t._v(" "),e("code",[t._v("destinationUris")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The destination URI file")])]),t._v(" "),e("h3",{attrs:{id:"filecounts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filecounts"}},[t._v("#")]),t._v(" "),e("code",[t._v("fileCounts")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("integer")])])]),t._v(" "),e("blockquote",[e("p",[t._v("Number of extracted files")])]),t._v(" "),e("h3",{attrs:{id:"jobid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jobid"}},[t._v("#")]),t._v(" "),e("code",[t._v("jobId")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The job id")])]),t._v(" "),e("h3",{attrs:{id:"sourcetable-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sourcetable-2"}},[t._v("#")]),t._v(" "),e("code",[t._v("sourceTable")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("blockquote",[e("p",[t._v("source Table")])]),t._v(" "),e("h2",{attrs:{id:"definitions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[t._v("#")]),t._v(" Definitions")]),t._v(" "),e("h3",{attrs:{id:"random-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#random-1"}},[t._v("#")]),t._v(" "),e("code",[t._v("Random-1")])]),t._v(" "),e("h4",{attrs:{id:"maxattempt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxattempt"}},[t._v("#")]),t._v(" "),e("code",[t._v("maxAttempt")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("integer")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Minimum:")]),t._v(" "),e("code",[t._v("&gt;= 1")])])]),t._v(" "),e("h4",{attrs:{id:"maxduration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxduration"}},[t._v("#")]),t._v(" "),e("code",[t._v("maxDuration")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Format:")]),t._v(" "),e("code",[t._v("duration")])])]),t._v(" "),e("h4",{attrs:{id:"maxinterval"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxinterval"}},[t._v("#")]),t._v(" "),e("code",[t._v("maxInterval")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Format:")]),t._v(" "),e("code",[t._v("duration")])])]),t._v(" "),e("h4",{attrs:{id:"mininterval"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mininterval"}},[t._v("#")]),t._v(" "),e("code",[t._v("minInterval")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Format:")]),t._v(" "),e("code",[t._v("duration")])])]),t._v(" "),e("h3",{attrs:{id:"random-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#random-2"}},[t._v("#")]),t._v(" "),e("code",[t._v("Random-2")])]),t._v(" "),e("h3",{attrs:{id:"exponential-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exponential-2"}},[t._v("#")]),t._v(" "),e("code",[t._v("Exponential-2")])]),t._v(" "),e("h3",{attrs:{id:"constant-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constant-1"}},[t._v("#")]),t._v(" "),e("code",[t._v("Constant-1")])]),t._v(" "),e("h4",{attrs:{id:"interval"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interval"}},[t._v("#")]),t._v(" "),e("code",[t._v("interval")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Format:")]),t._v(" "),e("code",[t._v("duration")])])]),t._v(" "),e("h4",{attrs:{id:"maxattempt-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxattempt-2"}},[t._v("#")]),t._v(" "),e("code",[t._v("maxAttempt")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("integer")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Minimum:")]),t._v(" "),e("code",[t._v("&gt;= 1")])])]),t._v(" "),e("h4",{attrs:{id:"maxduration-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxduration-2"}},[t._v("#")]),t._v(" "),e("code",[t._v("maxDuration")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Format:")]),t._v(" "),e("code",[t._v("duration")])])]),t._v(" "),e("h3",{attrs:{id:"exponential-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exponential-1"}},[t._v("#")]),t._v(" "),e("code",[t._v("Exponential-1")])]),t._v(" "),e("h4",{attrs:{id:"delayfactor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delayfactor"}},[t._v("#")]),t._v(" "),e("code",[t._v("delayFactor")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("number")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"interval-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interval-2"}},[t._v("#")]),t._v(" "),e("code",[t._v("interval")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Format:")]),t._v(" "),e("code",[t._v("duration")])])]),t._v(" "),e("h4",{attrs:{id:"maxattempt-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxattempt-3"}},[t._v("#")]),t._v(" "),e("code",[t._v("maxAttempt")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("integer")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Minimum:")]),t._v(" "),e("code",[t._v("&gt;= 1")])])]),t._v(" "),e("h4",{attrs:{id:"maxduration-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxduration-3"}},[t._v("#")]),t._v(" "),e("code",[t._v("maxDuration")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Format:")]),t._v(" "),e("code",[t._v("duration")])])]),t._v(" "),e("h4",{attrs:{id:"maxinterval-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxinterval-2"}},[t._v("#")]),t._v(" "),e("code",[t._v("maxInterval")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Format:")]),t._v(" "),e("code",[t._v("duration")])])]),t._v(" "),e("h3",{attrs:{id:"constant-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constant-2"}},[t._v("#")]),t._v(" "),e("code",[t._v("Constant-2")])])])}),[],!1,null,null,null);a.default=s.exports}}]);