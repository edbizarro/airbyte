"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[16047],{18310:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={description:"Shopify is a proprietary e-commerce platform for online stores and retail point-of-sale systems."},l="Shopify",p={unversionedId:"integrations/sources/shopify",id:"integrations/sources/shopify",title:"Shopify",description:"Shopify is a proprietary e-commerce platform for online stores and retail point-of-sale systems.",source:"@site/../docs/integrations/sources/shopify.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/shopify",permalink:"/integrations/sources/shopify",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/shopify.md",tags:[],version:"current",frontMatter:{description:"Shopify is a proprietary e-commerce platform for online stores and retail point-of-sale systems."},sidebar:"mySidebar",previous:{title:"SFTP",permalink:"/integrations/sources/sftp"},next:{title:"Shortio",permalink:"/integrations/sources/shortio"}},o={},d=[{value:"Getting started",id:"getting-started",level:2},{value:"Connect using <code>API PASSWORD</code> option",id:"connect-using-api-password-option",level:3},{value:"Scopes Required for Custom App",id:"scopes-required-for-custom-app",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Troubleshooting tips",id:"troubleshooting-tips",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Stream sync recommendations",id:"stream-sync-recommendations",level:3},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Features",id:"features",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],s={toc:d},m="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"shopify"},"Shopify"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Our Shopify Source Connector does not support OAuth at this time due to limitations outside of our control. If OAuth for Shopify is critical to your business, ",(0,n.kt)("a",{parentName:"p",href:"mailto:product@airbyte.io"},"please reach out to us")," to discuss how we may be able to partner on this effort.")),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"This connector supports the ",(0,n.kt)("inlineCode",{parentName:"p"},"API PASSWORD")," (for private applications) athentication methods."),(0,n.kt)("h3",{id:"connect-using-api-password-option"},"Connect using ",(0,n.kt)("inlineCode",{parentName:"h3"},"API PASSWORD")," option"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("inlineCode",{parentName:"li"},"https://YOURSTORE.myshopify.com/admin/apps/private")),(0,n.kt)("li",{parentName:"ol"},"Enable private development if it isn't enabled."),(0,n.kt)("li",{parentName:"ol"},"Create a private application."),(0,n.kt)("li",{parentName:"ol"},"Select the resources you want to allow access to. Airbyte only needs read-level access.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Note: The UI will show all possible data sources and will show errors when syncing if it doesn't have permissions to access a resource."))),(0,n.kt)("li",{parentName:"ol"},"The password under the ",(0,n.kt)("inlineCode",{parentName:"li"},"Admin API")," section is what you'll use as the ",(0,n.kt)("inlineCode",{parentName:"li"},"API PASSWORD")," for the integration."),(0,n.kt)("li",{parentName:"ol"},"You're ready to set up Shopify in Airbyte!")),(0,n.kt)("h3",{id:"scopes-required-for-custom-app"},"Scopes Required for Custom App"),(0,n.kt)("p",null,"Add the following scopes to your custom app to ensure Airbyte can sync all available data. To see a list of streams this source supports, see our full ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/shopify/"},"Shopify documentation"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_analytics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_assigned_fulfillment_orders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_gdpr_data_request")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_locations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_price_rules")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_product_listings")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_products")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_reports")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_resource_feedbacks")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_script_tags")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_shipping")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_locales")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_shopify_payments_accounts")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_shopify_payments_bank_accounts")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_shopify_payments_disputes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_shopify_payments_payouts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_content")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_themes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_third_party_fulfillment_orders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_translations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_customers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_discounts")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_draft_orders")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_fulfillments")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_gift_cards")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_inventory")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_legal_policies")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_marketing_events")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_merchant_managed_fulfillment_orders")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_online_store_pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_order_edits")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_orders"))),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Shopify source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,n.kt)("p",null,"This source can sync data for the ",(0,n.kt)("a",{parentName:"p",href:"https://shopify.dev/api/admin-rest"},"Shopify REST API")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://shopify.dev/api/admin-graphql"},"Shopify GraphQl API"),"."),(0,n.kt)("h2",{id:"troubleshooting-tips"},"Troubleshooting tips"),(0,n.kt)("p",null,"Check out common troubleshooting issues for the Shopify source connector on our Discourse ",(0,n.kt)("a",{parentName:"p",href:"https://discuss.airbyte.io/tags/c/connector/11/source-shopify"},"here"),"."),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/article"},"Articles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/blog"},"Blogs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/abandoned-checkouts#top"},"Abandoned Checkouts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/collect#top"},"Collects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/collection"},"Collections")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/docs/api/admin-rest/2023-04/resources/country"},"Countries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/customcollection#top"},"Custom Collections")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/docs/api/admin-rest/2023-04/resources/customer-address"},"CustomerAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/docs/api/admin-rest/2023-04/resources/customersavedsearch"},"CustomerSavedSearch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/smartcollection"},"Smart Collections")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/customer#top"},"Customers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/draftorder#top"},"Draft Orders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/discountcode#top"},"Discount Codes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/metafield#top"},"Metafields")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/order#top"},"Orders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/refund#top"},"Orders Refunds")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/order-risk#top"},"Orders Risks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/product#top"},"Products")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-graphql/2022-10/queries/products"},"Products (GraphQL)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/product-image"},"Product Images")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/product-variant"},"Product Variants")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/transaction#top"},"Transactions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/tendertransaction"},"Tender Transactions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/page#top"},"Pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/pricerule#top"},"Price Rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/location"},"Locations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/inventoryItem"},"InventoryItems")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-01/resources/inventorylevel"},"InventoryLevels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/fulfillmentorder"},"Fulfillment Orders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/fulfillment"},"Fulfillments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/shop"},"Shop"))),(0,n.kt)("h3",{id:"stream-sync-recommendations"},"Stream sync recommendations"),(0,n.kt)("p",null,"For better experience with ",(0,n.kt)("inlineCode",{parentName:"p"},"Incremental Refresh")," the following is recommended:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Order Refunds"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Order Risks"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Transactions")," should be synced along with ",(0,n.kt)("inlineCode",{parentName:"li"},"Orders")," stream."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Discount Codes")," should be synced along with ",(0,n.kt)("inlineCode",{parentName:"li"},"Price Rules")," stream.")),(0,n.kt)("p",null,"If child streams are synced alone from the parent stream - the full sync will take place, and the records are filtered out afterwards."),(0,n.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Shopify has some ",(0,n.kt)("a",{parentName:"p",href:"https://shopify.dev/concepts/about-apis/rate-limits"},"rate limit restrictions"),". Typically, there should not be issues with throttling or exceeding the rate limits but in some edge cases, user can receive the warning message as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\"Caught retryable error '<some_error> or null' after <some_number> tries. Waiting <some_number> seconds then retrying...\"\n")),(0,n.kt)("p",null,"This is expected when the connector hits the 429 - Rate Limit Exceeded HTTP Error. With given error message the sync operation is still goes on, but will require more time to finish."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.4.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-06-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/27083"},"27083")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"CustomerSavedSearch"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"CustomerAddress")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"Countries")," streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-05-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25961"},"25961")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added validation for ",(0,n.kt)("inlineCode",{parentName:"td"},"shop")," in input configuration (accepts non-url-like inputs)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-04-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25110"},"25110")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed issue when ",(0,n.kt)("inlineCode",{parentName:"td"},"cursor_field")," is ",(0,n.kt)("inlineCode",{parentName:"td"},'"None"'),", added missing properties to stream schemas, fixed ",(0,n.kt)("inlineCode",{parentName:"td"},"access_scopes")," validation error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23473"},"23473")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed OOM / Memory leak issue for Airbyte Cloud")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/21461"},"21461")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"discount_applications")," to ",(0,n.kt)("inlineCode",{parentName:"td"},"orders")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19492"},"19492")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added support for graphql and add a graphql products stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18298"},"18298")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated API version to the ",(0,n.kt)("inlineCode",{parentName:"td"},"2022-10"),", make stream schemas backward cpmpatible")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.39"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17962"},"17962")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added metafield streams; support for nested list streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.38"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17777"},"17777")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed ",(0,n.kt)("inlineCode",{parentName:"td"},"404")," for configured streams, fix missing ",(0,n.kt)("inlineCode",{parentName:"td"},"cursor")," error for old records")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.37"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12500"},"12500")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve input configuration copy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.36"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9850"},"9850")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"BalanceTransactions")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.35"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10915"},"10915")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed a bug which caused ",(0,n.kt)("inlineCode",{parentName:"td"},"full-refresh")," syncs of child REST entities configured for ",(0,n.kt)("inlineCode",{parentName:"td"},"incremental"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.34"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10794"},"10794")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Minor specification re-order, fixed links in documentation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.33"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10419"},"10419")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed wrong field type for tax_exemptions for ",(0,n.kt)("inlineCode",{parentName:"td"},"Abandoned_checkouts")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10449"},"10449")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"tender_transactions")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.31"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10175"},"10175")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed compatibility issues for legacy user config")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.30"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9648"},"9648")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added permission validation before sync")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.29"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9248"},"9049")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"shop_url")," to the record for all streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.28"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9591"},"9591")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Implemented ",(0,n.kt)("inlineCode",{parentName:"td"},"OAuth2.0")," authentication method for Airbyte Cloud")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.27"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9049"},"9049")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.26"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8597"},"8597")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed ",(0,n.kt)("inlineCode",{parentName:"td"},"mismatched number of tables")," for base-normalization, increased performance of ",(0,n.kt)("inlineCode",{parentName:"td"},"order_refunds")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.25"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8297"},"8297")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added Shop stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7783"},"7783")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Reviewed and corrected schemas for all streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7973"},"7973")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"InventoryItems"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7107"},"7101")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added FulfillmentOrders, Fulfillments streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.21"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7382"},"7382")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed ",(0,n.kt)("inlineCode",{parentName:"td"},"InventoryLevels")," primary key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7063"},"7063")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"Location")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"InventoryLevels")," as streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.19"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6951"},"6951")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added support of ",(0,n.kt)("inlineCode",{parentName:"td"},"OAuth 2.0")," authorisation option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6056"},"6056")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"pre_tax_price")," to the ",(0,n.kt)("inlineCode",{parentName:"td"},"orders/line_items")," schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5244"},"5244")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Created data type enforcer for converting prices into numbers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5945"},"5965")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed the connector's performance for ",(0,n.kt)("inlineCode",{parentName:"td"},"Incremental refresh"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5853"},"5853")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed ",(0,n.kt)("inlineCode",{parentName:"td"},"amount")," type in ",(0,n.kt)("inlineCode",{parentName:"td"},"order_refund")," schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5801"},"5801")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed ",(0,n.kt)("inlineCode",{parentName:"td"},"line_items/discount allocations")," & ",(0,n.kt)("inlineCode",{parentName:"td"},"duties")," parts of ",(0,n.kt)("inlineCode",{parentName:"td"},"orders")," schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5470"},"5470")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed rate limits throttling")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5276"},"5276")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added status property to product schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4943"},"4943")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed products schema up to API 2021-07")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4830"},"4830")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed for streams json schemas, upgrade to API version 2021-07")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4472"},"4472")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental sync is now using updated","_","at instead of since","_","id by default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4121"},"4121")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added draft orders stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4290"},"4290")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed the bug when limiting output records to 1 caused infinity loop")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4009"},"4009")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added pages, price rules and discount codes streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3973"},"3973")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"AIRBYTE_ENTRYPOINT")," for Kubernetes support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3926"},"3926")),(0,n.kt)("td",{parentName:"tr",align:"left"},"New attributes to Orders schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3787"},"3787")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added Native Shopify Source Connector")))))}k.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(a),N=n,f=m["".concat(o,".").concat(N)]||m[N]||k[N]||i;return a?r.createElement(f,l(l({ref:e},s),{},{components:a})):r.createElement(f,l({ref:e},s))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:n,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"}}]);