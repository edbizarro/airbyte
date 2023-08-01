"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[40835],{43329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={},o="Upgrading to Destinations V2",l={unversionedId:"release_notes/upgrading_to_destinations_v2",id:"release_notes/upgrading_to_destinations_v2",title:"Upgrading to Destinations V2",description:"What is Destinations V2?",source:"@site/../docs/release_notes/upgrading_to_destinations_v2.md",sourceDirName:"release_notes",slug:"/release_notes/upgrading_to_destinations_v2",permalink:"/release_notes/upgrading_to_destinations_v2",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/release_notes/upgrading_to_destinations_v2.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"What is Destinations V2?",id:"what-is-destinations-v2",level:2},{value:"Deprecating Legacy Normalization",id:"deprecating-legacy-normalization",level:2},{value:"Breakdown of Breaking Changes",id:"breakdown-of-breaking-changes",level:3},{value:"Quick Start to Upgrading",id:"quick-start-to-upgrading",level:2},{value:"Advanced Upgrade Paths",id:"advanced-upgrade-paths",level:2},{value:"Upgrading Connections One by One with Dual-Writing",id:"upgrading-connections-one-by-one-with-dual-writing",level:3},{value:"Steps to Follow for All Sync Modes",id:"steps-to-follow-for-all-sync-modes",level:4},{value:"Additional Steps for Incremental Sync Modes",id:"additional-steps-for-incremental-sync-modes",level:4},{value:"Testing Destinations V2 for a Single Connection",id:"testing-destinations-v2-for-a-single-connection",level:3},{value:"Upgrading as a User of Raw Tables",id:"upgrading-as-a-user-of-raw-tables",level:3},{value:"Upgrade Paths for Connections using CDC",id:"upgrade-paths-for-connections-using-cdc",level:3},{value:"Destinations V2 Compatible Versions",id:"destinations-v2-compatible-versions",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"upgrading-to-destinations-v2"},"Upgrading to Destinations V2"),(0,i.kt)("h2",{id:"what-is-destinations-v2"},"What is Destinations V2?"),(0,i.kt)("p",null,"Starting today, Airbyte Destinations V2 provides you with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One-to-one table mapping: Data in one stream will always be mapped to one table in your data warehouse. No more sub-tables."),(0,i.kt)("li",{parentName:"ul"},"Improved error handling with ",(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_meta"),": Airbyte will now populate typing errors in the ",(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_meta")," column instead of failing your sync. You can query these results to audit misformatted or unexpected data."),(0,i.kt)("li",{parentName:"ul"},"Internal Airbyte tables in the ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_internal")," schema: Airbyte will now generate all raw tables in the ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_internal")," schema. We no longer clutter your destination schema with raw data tables."),(0,i.kt)("li",{parentName:"ul"},"Incremental delivery for large syncs: Data will be incrementally delivered to your final tables. No more waiting hours to see the first rows in your destination table.")),(0,i.kt)("p",null,"To see more details and examples on the contents of the Destinations V2 release, see this ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/typing-deduping"},"guide"),". The remainder of this page will walk you through upgrading connectors from legacy normalization to Destinations V2."),(0,i.kt)("h2",{id:"deprecating-legacy-normalization"},"Deprecating Legacy Normalization"),(0,i.kt)("p",null,"The upgrade to Destinations V2 is handled by moving your connections to use ",(0,i.kt)("a",{parentName:"p",href:"#destinations-v2-compatible-versions"},"updated versions of Airbyte destinations"),". Existing normalization options, both ",(0,i.kt)("inlineCode",{parentName:"p"},"Raw data (JSON)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Normalized tabular data")," will be unsupported starting ",(0,i.kt)("strong",{parentName:"p"},"Nov 1, 2023"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Legacy Normalization",src:n(6180).Z,width:"2420",height:"860"})),(0,i.kt)("p",null,"As a Cloud user, existing connections using legacy normalization will be paused on ",(0,i.kt)("strong",{parentName:"p"},"Oct 1, 2023"),". As an Open Source user, you may choose to upgrade at your convenience. However, destination connector versions prior to Destinations V2 will no longer be supported as of ",(0,i.kt)("strong",{parentName:"p"},"Nov 1, 2023"),"."),(0,i.kt)("h3",{id:"breakdown-of-breaking-changes"},"Breakdown of Breaking Changes"),(0,i.kt)("p",null,"The following table details the delivered data modified by Destinations V2:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Current Normalization Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Source Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Impacted Data (Breaking Changes)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Raw JSON"),(0,i.kt)("td",{parentName:"tr",align:null},"All"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_airbyte")," metadata columns, raw table location")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Normalized tabular data"),(0,i.kt)("td",{parentName:"tr",align:null},"API Source"),(0,i.kt)("td",{parentName:"tr",align:null},"Unnested tables, ",(0,i.kt)("inlineCode",{parentName:"td"},"_airbyte")," metadata columns, SCD tables")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Normalized tabular data"),(0,i.kt)("td",{parentName:"tr",align:null},"Tabular Source (database, file, etc.)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_airbyte")," metadata columns, SCD tables")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Airbyte Destinations V2 Column Changes",src:n(44843).Z,width:"2112",height:"604"})),(0,i.kt)("p",null,"Whenever possible, we've taken this opportunity to use the best data type for storing JSON for your querying convenience.  For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"destination-bigquery")," now loads ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," blobs as type ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," in BigQuery (introduced last ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/data-analytics/bigquery-now-natively-supports-semi-structured-data"},"year"),"), instead of type ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("h2",{id:"quick-start-to-upgrading"},"Quick Start to Upgrading"),(0,i.kt)("p",null,"The quickest path to upgrading is to click upgrade on any out-of-date connection in the UI:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Upgrade Path",src:n(76304).Z,width:"1906",height:"548"})),(0,i.kt)("p",null,"After upgrading the out-of-date destination to a ",(0,i.kt)("a",{parentName:"p",href:"#destinations-v2-effective-versions"},"Destinations V2 compatible version"),", the following will occur at the next sync ",(0,i.kt)("strong",{parentName:"p"},"for each connection")," sending data to the updated destination:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Existing raw tables replicated to this destination will be copied to a new ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte")," schema. "),(0,i.kt)("li",{parentName:"ol"},"The new raw tables will be updated to the new Destinations V2 format."),(0,i.kt)("li",{parentName:"ol"},"The new raw tables will be updated with any new data since the last sync, like normal."),(0,i.kt)("li",{parentName:"ol"},"The new raw tables will be typed and de-duplicated according to the Destinations V2 format."),(0,i.kt)("li",{parentName:"ol"},"Once typing and de-duplication has completed successfully, your previous final table will be replaced with the updated data.")),(0,i.kt)("p",null,'Pre-existing raw tables, SCD tables and "unnested" tables will always be left untouched. You can delete these at your convenience, but these tables will no longer be kept up-to-date by Airbyte syncs.\nEach destination version is managed separately, so if you have multiple destinations, they all need to be upgraded one by one.'),(0,i.kt)("p",null,"Versions are tied to the destination. When you update the destination, ",(0,i.kt)("strong",{parentName:"p"},"all connections tied to that destination will be sending data in the Destinations V2 format"),". For upgrade paths that will minimize disruption to existing dashboards, see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upgrading-connections-one-by-one-with-dual-writing"},"Upgrading Connections One by One with Dual-Writing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#testing-destinations-v2-for-a-single-connection"},"Testing Destinations V2 on a Single Connection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upgrade-paths-for-connections-using-cdc"},"Upgrading Connections One by One Using CDC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upgrading-as-a-user-of-raw-tables"},"Upgrading as a User of Raw Tables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#oss-only-rolling-back-to-legacy-normalization"},"Rolling back to Legacy Normalization"))),(0,i.kt)("h2",{id:"advanced-upgrade-paths"},"Advanced Upgrade Paths"),(0,i.kt)("h3",{id:"upgrading-connections-one-by-one-with-dual-writing"},"Upgrading Connections One by One with Dual-Writing"),(0,i.kt)("p",null,"Dual writing is a method employed during upgrades where new incoming data is written simultaneously to both the old and new systems, facilitating a smooth transition between versions. We recommend this approach for connections where you are especially worried about breaking changes or downtime in downstream systems."),(0,i.kt)("h4",{id:"steps-to-follow-for-all-sync-modes"},"Steps to Follow for All Sync Modes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"[Open Source]")," Update the default destination version for your workspace to a ",(0,i.kt)("a",{parentName:"li",href:"#destinations-v2-effective-versions"},"Destinations V2 compatible version"),". This sets the default version for any newly created destination.  All existing syncs will remain on their current version.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Upgrade your default destination version",src:n(72304).Z,width:"1415",height:"239"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create and configure a new destination connecting to the same database as your existing destination except for ",(0,i.kt)("inlineCode",{parentName:"li"},"Default Schema"),", which you should update to a new value to avoid collisions.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create a new destination",src:n(49486).Z,width:"812",height:"215"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create a new connection leveraging your existing source and the newly created destination. Match the settings of your pre-existing connection."),(0,i.kt)("li",{parentName:"ol"},"If the streams you are looking to replicate are in ",(0,i.kt)("strong",{parentName:"li"},"full refresh")," mode, enabling the connection will now provide a parallel copy of the data in the updated format for testing. If any of the streams in the connection are in an ",(0,i.kt)("strong",{parentName:"li"},"incremental")," sync mode, follow the steps below before enabling the connection.")),(0,i.kt)("h4",{id:"additional-steps-for-incremental-sync-modes"},"Additional Steps for Incremental Sync Modes"),(0,i.kt)("p",null,"These steps allow you to dual-write for connections incrementally syncing data without re-syncing historical data you've already replicated:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy the raw data you've already replicated to the new schema being used by your newly created connection. You need to do this for every stream in the connection with an incremental sync mode. Sample SQL you can run in your data warehouse:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mysql"},"BEGIN\nDECLARE gcp_project STRING;\nDECLARE target_dataset STRING;\nDECLARE target_table STRING;\nDECLARE source_dataset STRING;\nDECLARE source_table STRING;\nDECLARE old_table STRING;\nDECLARE new_table STRING;\n\nSET gcp_project = '';\nSET target_dataset = 'airbyte_internal';\nSET target_table = ''; \nSET source_dataset = '';\nSET source_table = '';\nSET old_table = CONCAT(gcp_project, '.', source_dataset, '.', source_table);\nSET new_table = CONCAT(gcp_project, '.', target_dataset, '.', target_table);\n\nEXECUTE IMMEDIATE FORMAT('''\nCREATE OR REPLACE TABLE `%s` (_airbyte_raw_id STRING, _airbyte_data JSON, _airbyte_extracted_at TIMESTAMP, _airbyte_loaded_at TIMESTAMP)\nPARTITION BY DATE(_airbyte_extracted_at)\nCLUSTER BY _airbyte_extracted_at\nAS (\n    SELECT\n        _airbyte_ab_id AS _airbyte_raw_id,\n        PARSE_JSON(_airbyte_data) AS _airbyte_data,\n        _airbyte_emitted_at AS _airbyte_extracted_at,\n        CAST(NULL AS TIMESTAMP) AS _airbyte_loaded_at\n    FROM `%s`\n) \n''', new_table, old_table);\n\nEND;\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Go to your newly created connection, and navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," tab."),(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"Advanced")," settings to see the connection state (which manages incremental syncs). Select the existing connection you are duplicating, then click ",(0,i.kt)("inlineCode",{parentName:"li"},"Inherit State"),". This will ensure historical data is not replicated again.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:n(25890).Z,width:"760",height:"708"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Enabling the connection will now provide a parallel copy of all streams in the updated format. "),(0,i.kt)("li",{parentName:"ol"},"You can move your dashboards to rely on the new tables, then pause the out-of-date connection.")),(0,i.kt)("h3",{id:"testing-destinations-v2-for-a-single-connection"},"Testing Destinations V2 for a Single Connection"),(0,i.kt)("p",null,"You may want to verify the format of updated data for a single connection. To do this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If all of the streams you are looking to test with are in ",(0,i.kt)("strong",{parentName:"li"},"full refresh mode"),", follow the ",(0,i.kt)("a",{parentName:"li",href:"#steps-to-follow-for-all-sync-modes"},"steps for upgrading connections one by one"),". Ensure any connections you create have a ",(0,i.kt)("inlineCode",{parentName:"li"},"Manual")," replication frequency."),(0,i.kt)("li",{parentName:"ol"},"For any streams in ",(0,i.kt)("strong",{parentName:"li"},"incremental")," sync modes, follow the ",(0,i.kt)("a",{parentName:"li",href:"#additional-steps-for-incremental-sync-modes"},"steps for upgrading incremental syncs"),". For testing, you do not need to copy pre-existing raw data. By solely inheriting state from a pre-existing connection, enabling a sync will provide a sample of the most recent data in the updated format for testing.")),(0,i.kt)("p",null,"When you are done testing, you can disable or delete this testing connection, and ",(0,i.kt)("a",{parentName:"p",href:"#quick-start-to-upgrading"},"upgrade your pre-existing connections in place")," or ",(0,i.kt)("a",{parentName:"p",href:"#upgrading-connections-one-by-one-with-dual-writing"},"upgrade one-by-one with dual writing"),"."),(0,i.kt)("h3",{id:"upgrading-as-a-user-of-raw-tables"},"Upgrading as a User of Raw Tables"),(0,i.kt)("p",null,'If you have written downstream transformations directly from the output of raw tables, or use the "Raw JSON" normalization setting, you should know that:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multiple column names are being updated (from ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_ab_id")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_raw_id"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_emitted_at")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_extracted_at"),")."),(0,i.kt)("li",{parentName:"ul"},"The location of raw tables will from now on default to an ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyte")," schema in your destination. "),(0,i.kt)("li",{parentName:"ul"},"When you upgrade to a ",(0,i.kt)("a",{parentName:"li",href:"#destinations-v2-effective-versions"},"Destinations V2 compatible version")," of your destination, we will never alter your existing raw data. Although existing downstream dashboards will go stale, they will never be broken."),(0,i.kt)("li",{parentName:"ul"},"You can dual write by following the ",(0,i.kt)("a",{parentName:"li",href:"#upgrading-connections-one-by-one-with-dual-writing"},"steps above")," and copying your raw data to the schema of your newly created connection.")),(0,i.kt)("p",null,"We may make further changes to raw tables in the future, as these tables are intended to be a staging ground for Airbyte to optimize the performance of your syncs. We cannot guarantee the same level of stability as for final tables in your destination schema."),(0,i.kt)("h3",{id:"upgrade-paths-for-connections-using-cdc"},"Upgrade Paths for Connections using CDC"),(0,i.kt)("p",null,"For each ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/understanding-airbyte/cdc"},"CDC-supported")," source connector, we recommend the following:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"CDC Source"),(0,i.kt)("th",{parentName:"tr",align:null},"Recommendation"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Postgres"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#quick-start-to-upgrading"},"Upgrade connection in place")),(0,i.kt)("td",{parentName:"tr",align:null},"You can optionally dual write, but this requires resyncing historical data from the source. You must create a new Postgres source with a different replication slot than your existing source to preserve the integrity of your existing connection.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#advanced-upgrade-paths"},"All above upgrade paths supported")),(0,i.kt)("td",{parentName:"tr",align:null},"You can upgrade the connection in place, or dual write. When dual writing, Airbyte can leverage the state of an existing, active connection to ensure historical data is not re-replicated from MySQL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SQL Server"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#quick-start-to-upgrading"},"Upgrade connection in place")),(0,i.kt)("td",{parentName:"tr",align:null},"You can optionally dual write, but this requires resyncing historical data from the SQL Server source.")))),(0,i.kt)("h2",{id:"destinations-v2-compatible-versions"},"Destinations V2 Compatible Versions"),(0,i.kt)("p",null,"For each destination connector, Destinations V2 is effective as of the following versions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Destination Connector"),(0,i.kt)("th",{parentName:"tr",align:null},"Safe Rollback Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Destinations V2 Compatible"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BigQuery"),(0,i.kt)("td",{parentName:"tr",align:null},"1.4.4"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,i.kt)("td",{parentName:"tr",align:null},"0.4.1"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Redshift"),(0,i.kt)("td",{parentName:"tr",align:null},"0.4.8"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MSSQL"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1.24"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1.20"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1.19"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TiDB"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DuckDB"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Clickhouse"),(0,i.kt)("td",{parentName:"tr",align:null},"0.2.3"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0+")))))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=i,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},76304:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/airbyte_destinations_v2_upgrade_prompt-d7d59edc5a9b493f4e5d221c41fe7a91.png"},49486:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/airbyte_dual_destinations-efef9d501361782454ad2b9aba5ed58f.png"},25890:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/airbyte_inherit_state-8091ea79f3654a98df72a8d14fae194f.png"},6180:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/airbyte_legacy_normalization-bf5c7c2f6906afe0e77748c29d407a58.png"},72304:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/airbyte_version_upgrade-a77ce8a8e4730d65420ecc985d975ff3.png"},44843:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/destinations-v2-column-changes-27431401480ec03f5dee0374d0216b6f.png"}}]);