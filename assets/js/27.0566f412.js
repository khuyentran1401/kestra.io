(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{601:function(t,e,a){"use strict";a.r(e);var s=a(12),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"storage-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-configuration"}},[t._v("#")]),t._v(" Storage configuration")]),t._v(" "),a("p",[t._v("Kestra need a "),a("a",{attrs:{href:"../../../architecture#storage"}},[t._v("internal storage")]),t._v(" in order to store file proceed (uploaded files & between tasks).")]),t._v(" "),a("p",[t._v("The default storage is Local storage "),a("strong",[t._v("not production ready")])]),t._v(" "),a("p",[t._v("Available storage are :")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#gcs"}},[t._v("Storage GCS")]),t._v(" for "),a("a",{attrs:{href:"https://cloud.google.com/storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Cloud Storage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"#minio"}},[t._v("Storage Minio")]),t._v(" compatible with "),a("a",{attrs:{href:"https://aws.amazon.com/s3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS S3"),a("OutboundLink")],1),t._v(" and all others "),a("em",[t._v("S3 like")]),t._v(" storage")])]),t._v(" "),a("h2",{attrs:{id:"gcs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gcs"}},[t._v("#")]),t._v(" GCS")]),t._v(" "),a("p",[t._v("For you need to be sure to have the GCS storage plugins installed, you can install it with Kestra command :"),a("br"),t._v(" "),a("code",[t._v("./kestra plugins install io.kestra.storage.gcs:storage-gcs:LATEST")]),t._v(", it will download the plugins jar on kestra plugins directory.")]),t._v(" "),a("p",[t._v("After you need to enable the storage with this configuration:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kestra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gcs\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gcs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bucket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your-bucket-name>"')]),t._v("\n")])])]),a("p",[t._v("Kestra will use the default service account GCP service account, meaning that :")]),t._v(" "),a("ul",[a("li",[t._v("will use on GKE, the service account defined on the cluster")]),t._v(" "),a("li",[t._v("will use on GCE, the service account defined on the VM.")]),t._v(" "),a("li",[t._v("you can provide an environment variable "),a("code",[t._v("GOOGLE_APPLICATION_CREDENTIALS")]),t._v(" with a path to a json GCP service account key.")])]),t._v(" "),a("p",[t._v("More detail can be found "),a("a",{attrs:{href:"https://cloud.google.com/docs/authentication/production",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"minio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minio"}},[t._v("#")]),t._v(" Minio")]),t._v(" "),a("p",[t._v("For you need to be sure to have the Minio storage plugins installed, you can install it with Kestra command :"),a("br"),t._v(" "),a("code",[t._v("./kestra plugins install io.kestra.storage.minio:storage-minio:LATEST")]),t._v(", it will download the plugins jar on kestra plugins directory.")]),t._v(" "),a("p",[t._v("After you need to enable the storage with this configuration:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kestra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("minio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your-endpoint>"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your-port>"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your-accessKey>"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your-secretKey>"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("region")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your-region>"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your-secure>"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bucket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your-bucket>"')]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);