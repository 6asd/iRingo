/*
README: https://github.com/VirgilClyne/iRingo
*/
const $ = new Env(" iRingo: 📍 Location v3.1.3(3) response");
const URL = new URLs();
const XML = new XMLs();
const DataBase = {
	"Location":{
		"Settings":{"Switch":true,"PEP":{"GCC":"US"},"Services":{"PlaceData":"CN","Directions":"AUTO","Traffic":"AUTO","RAP":"XX","Tiles":"AUTO"},"Geo_manifest":{"Dynamic":{"Config":{"Country_code":{"default":"AUTO","iOS":"CN","iPadOS":"CN","watchOS":"US","macOS":"CN"}}}},"Config":{"Announcements":{"Environment:":{"default":"AUTO","iOS":"CN","iPadOS":"CN","watchOS":"XX","macOS":"CN"}},"Defaults":{"LagunaBeach":true,"DrivingMultiWaypointRoutesEnabled":true,"GEOAddressCorrection":true,"LookupMaxParametersCount":true,"LocalitiesAndLandmarks":true,"POIBusyness":true,"PedestrianAR":true,"6694982d2b14e95815e44e970235e230":true,"OpticalHeading":true,"UseCLPedestrianMapMatchedLocations":true,"TransitPayEnabled":true,"SupportsOffline":true,"SupportsCarIntegration":true,"WiFiQualityNetworkDisabled":false,"WiFiQualityTileDisabled":false}}}
	},
	"Weather":{
		"Settings":{"Switch":true,"NextHour":{"Switch":true},"AQI":{"Switch":true,"Mode":"WAQI Public","Location":"Station","Auth":null,"Scale":"EPA_NowCast.2204"},"Map":{"AQI":false}},
		"Configs":{
			"Availability":["currentWeather","forecastDaily","forecastHourly","history","weatherChange","forecastNextHour","severeWeather","airQuality"],
			"Pollutants":{"co":"CO","no":"NO","no2":"NO2","so2":"SO2","o3":"OZONE","nox":"NOX","pm25":"PM2.5","pm10":"PM10","other":"OTHER"}
		}
	},
	"Siri":{
		"Settings":{"Switch":true,"CountryCode":"SG","Domains":["web","itunes","app_store","movies","restaurants","maps"],"Functions":["flightutilities","lookup","mail","messages","news","safari","siri","spotlight","visualintelligence"],"Safari_Smart_History":true},
		"Configs":{
			"VisualIntelligence":{"enabled_domains":["pets","media","books","art","nature","landmarks"],"supported_domains":["ART","BOOK","MEDIA","LANDMARK","ANIMALS","BIRDS","FOOD","SIGN_SYMBOL","AUTO_SYMBOL","DOGS","NATURE","NATURAL_LANDMARK","INSECTS","REPTILES","ALBUM","STOREFRONT","LAUNDRY_CARE_SYMBOL","CATS","OBJECT_2D","SCULPTURE","SKYLINE","MAMMALS"]}
		}
	},
	"TV":{
		"Settings": {
			"Switch":true,"Third-Party":false,"HLSUrl":"play-edge.itunes.apple.com","ServerUrl":"play.itunes.apple.com","Tabs":["WatchNow","Originals","Store","Movies","TV","Sports","Kids","Library","Search"],
			"CountryCode":{"Configs":"AUTO","Settings":"AUTO","View":["SG","TW"],"WatchNow":"AUTO","Channels":"AUTO","Originals":"TW","Movies":"AUTO","TV":"AUTO","Sports":"US","Kids":"US","Persons":"SG","Search":"TW","Others":"AUTO"}
		},
		"Configs":{
			"Locale":[["AU","en-AU"],["CA","en-CA"],["GB","en-GB"],["KR","ko-KR"],["HK","yue-Hant"],["JP","ja-JP"],["MO","zh-Hant"],["TW","zh-Hant"],["US","en-US"],["SG","zh-Hans"]],
			"Tabs": [
				{ "title": "立即观看", "type": "WatchNow", "universalLinks": ["https://tv.apple.com/watch-now"], "destinationType": "Target", "target": { "id": "tahoma_watchnow", "type": "Root", "url": "https://tv.apple.com/watch-now" } },
				{ "title": "原创内容", "type": "Originals", "universalLinks": ["https://tv.apple.com/channel/tvs.sbd.4000", "https://tv.apple.com/atv"], "destinationType": "Target", "target": { "id": "tvs.sbd.4000", "type": "Brand", "url": "https://tv.apple.com/us/channel/tvs.sbd.4000" } },
				{ "title": "电影", "type": "Movies", "universalLinks": ["https://tv.apple.com/movies"], "destinationType": "Target", "target": { "id": "tahoma_movies", "type": "Root", "url": "https://tv.apple.com/movies" } },
				{ "title": "电视节目", "type": "TV", "universalLinks": ["https://tv.apple.com/tv-shows"], "destinationType": "Target", "target": { "id": "tahoma_tvshows", "type": "Root", "url": "https://tv.apple.com/tv-shows" } },
				{ "title": "商店", "type": "Store", "universalLinks": ["https://tv.apple.com/store"], "destinationType": "SubTabs", 
					"subTabs": [
						{ "title": "电影", "type": "Movies", "universalLinks": ["https://tv.apple.com/movies"], "destinationType": "Target", "target": { "id": "tahoma_movies", "type": "Root", "url": "https://tv.apple.com/movies" } },
						{ "title": "电视节目", "type": "TV", "universalLinks": ["https://tv.apple.com/tv-shows"], "destinationType": "Target", "target": { "id": "tahoma_tvshows", "type": "Root", "url": "https://tv.apple.com/tv-shows" } }
					]
				},
				{ "title": "体育节目", "type": "Sports", "universalLinks": ["https://tv.apple.com/sports"], "destinationType": "Target", "target": { "id": "tahoma_sports", "type": "Root", "url": "https://tv.apple.com/sports" } },
				{ "title": "儿童", "type": "Kids", "universalLinks": ["https://tv.apple.com/kids"], "destinationType": "Target", "target": { "id": "tahoma_kids", "type": "Root", "url": "https://tv.apple.com/kids" } },
				{ "title": "资料库", "type": "Library", "destinationType": "Client" },
				{ "title": "搜索", "type": "Search", "universalLinks": ["https://tv.apple.com/search"], "destinationType": "Target", "target": { "id": "tahoma_search", "type": "Root", "url": "https://tv.apple.com/search" } }
			],
			"i18n": {
				"WatchNow": [["en", "Watch Now"], ["zh", "立即观看"], ["zh-Hans", "立即观看"], ["zh-Hant", "立即觀看"]],
				"Originals": [["en", "Originals"], ["zh", "原创内容"], ["zh-Hans", "原创内容"], ["zh-Hant", "原創內容"]],
				"Movies": [["en", "Movies"], ["zh", "电影"], ["zh-Hans", "电影"], ["zh-Hant", "電影"]],
				"TV": [["en", "TV"], ["zh", "电视节目"], ["zh-Hans", "电视节目"], ["zh-Hant", "電視節目"]],
				"Store": [["en", "Store"], ["zh", "商店"], ["zh-Hans", "商店"], ["zh-Hant", "商店"]],
				"Sports": [["en", "Sports"], ["zh", "体育节目"], ["zh-Hans", "体育节目"], ["zh-Hant", "體育節目"]],
				"Kids": [["en", "Kids"], ["zh", "儿童"], ["zh-Hans", "儿童"], ["zh-Hant", "兒童"]],
				"Library": [["en", "Library"], ["zh", "资料库"], ["zh-Hans", "资料库"], ["zh-Hant", "資料庫"]],
				"Search": [["en", "Search"], ["zh", "搜索"], ["zh-Hans", "搜索"], ["zh-Hant", "蒐索"]]
			}
		}
	},
	"News":{
		"Settings":{"Switch":true,"CountryCode":"US","newsPlusUser":true}
	},
	"TestFlight":{
		"Settings":{"Switch":true,"CountryCode":"US","MultiAccount":false,"Universal":true}
	},
	"Default": {
		"Settings":{"Switch":true},
		"Configs":{
			"Storefront":[["AE","143481"],["AF","143610"],["AG","143540"],["AI","143538"],["AL","143575"],["AM","143524"],["AO","143564"],["AR","143505"],["AT","143445"],["AU","143460"],["AZ","143568"],["BA","143612"],["BB","143541"],["BD","143490"],["BE","143446"],["BF","143578"],["BG","143526"],["BH","143559"],["BJ","143576"],["BM","143542"],["BN","143560"],["BO","143556"],["BR","143503"],["BS","143539"],["BT","143577"],["BW","143525"],["BY","143565"],["BZ","143555"],["CA","143455"],["CD","143613"],["CG","143582"],["CH","143459"],["CI","143527"],["CL","143483"],["CM","143574"],["CN","143465"],["CO","143501"],["CR","143495"],["CV","143580"],["CY","143557"],["CZ","143489"],["DE","143443"],["DK","143458"],["DM","143545"],["DO","143508"],["DZ","143563"],["EC","143509"],["EE","143518"],["EG","143516"],["ES","143454"],["FI","143447"],["FJ","143583"],["FM","143591"],["FR","143442"],["GA","143614"],["GB","143444"],["GD","143546"],["GF","143615"],["GH","143573"],["GM","143584"],["GR","143448"],["GT","143504"],["GW","143585"],["GY","143553"],["HK","143463"],["HN","143510"],["HR","143494"],["HU","143482"],["ID","143476"],["IE","143449"],["IL","143491"],["IN","143467"],["IQ","143617"],["IS","143558"],["IT","143450"],["JM","143511"],["JO","143528"],["JP","143462"],["KE","143529"],["KG","143586"],["KH","143579"],["KN","143548"],["KP","143466"],["KR","143466"],["KW","143493"],["KY","143544"],["KZ","143517"],["TC","143552"],["TD","143581"],["TJ","143603"],["TH","143475"],["TM","143604"],["TN","143536"],["TO","143608"],["TR","143480"],["TT","143551"],["TW","143470"],["TZ","143572"],["LA","143587"],["LB","143497"],["LC","143549"],["LI","143522"],["LK","143486"],["LR","143588"],["LT","143520"],["LU","143451"],["LV","143519"],["LY","143567"],["MA","143620"],["MD","143523"],["ME","143619"],["MG","143531"],["MK","143530"],["ML","143532"],["MM","143570"],["MN","143592"],["MO","143515"],["MR","143590"],["MS","143547"],["MT","143521"],["MU","143533"],["MV","143488"],["MW","143589"],["MX","143468"],["MY","143473"],["MZ","143593"],["NA","143594"],["NE","143534"],["NG","143561"],["NI","143512"],["NL","143452"],["NO","143457"],["NP","143484"],["NR","143606"],["NZ","143461"],["OM","143562"],["PA","143485"],["PE","143507"],["PG","143597"],["PH","143474"],["PK","143477"],["PL","143478"],["PT","143453"],["PW","143595"],["PY","143513"],["QA","143498"],["RO","143487"],["RS","143500"],["RU","143469"],["RW","143621"],["SA","143479"],["SB","143601"],["SC","143599"],["SE","143456"],["SG","143464"],["SI","143499"],["SK","143496"],["SL","143600"],["SN","143535"],["SR","143554"],["ST","143598"],["SV","143506"],["SZ","143602"],["UA","143492"],["UG","143537"],["US","143441"],["UY","143514"],["UZ","143566"],["VC","143550"],["VE","143502"],["VG","143543"],["VN","143471"],["VU","143609"],["XK","143624"],["YE","143571"],["ZA","143472"],["ZM","143622"],["ZW","143605"]]
		}
	}
};

/***************** Processing *****************/
(async () => {
	const { Settings, Caches, Configs } = setENV("iRingo", "Location", DataBase);
	$.log(`⚠ ${$.name}`, `Settings.Switch: ${Settings?.Switch}`, "");
	switch (Settings.Switch) {
		case true:
		default:
			let url = URL.parse($request?.url);
			const METHOD = $request?.method, HOST = url?.host, PATH = url?.path, PATHs = url?.paths;
			// 解析格式
			const FORMAT = ($response?.headers?.["Content-Type"] ?? $response?.headers?.["content-type"])?.split(";")?.[0];
			$.log(`⚠ ${$.name}`, `METHOD: ${METHOD}`, `HOST: ${HOST}`, `PATH: ${PATH}`, `PATHs: ${PATHs}`, `FORMAT: ${FORMAT}`, "");
			// 创建空数据
			let body = {};
			// 格式判断
			switch (FORMAT) {
				case undefined: // 视为无body
					break;
				case "application/x-www-form-urlencoded":
				case "text/plain":
				case "text/html":
				default:
					switch (HOST) {
						case "gspe1-ssl.ls.apple.com":
							switch (PATH) {
								case "pep/gcc":
									await setGCC("pep", Caches);
									switch (Settings.PEP.GCC) {
										case "AUTO":
											break;
										default:
											$response.body = Settings.PEP.GCC;
											break;
									};
									break;
							};
							break;
					};
					break;
				case "application/x-mpegURL":
				case "application/x-mpegurl":
				case "application/vnd.apple.mpegurl":
					break;
				case "text/xml":
				case "application/xml":
				case "text/plist":
				case "application/plist":
				case "application/x-plist":
					body = XML.parse($response.body);
					switch (HOST) {
						case "configuration.ls.apple.com":
							switch (PATH) {
								case "config/defaults":
									const plist = body.plist;
									// set settings
									// CN
									plist["com.apple.GEO"].CountryProviders.CN.ShouldEnableLagunaBeach = Settings?.Config?.Defaults?.LagunaBeach ?? true; // XX
									plist["com.apple.GEO"].CountryProviders.CN.DrivingMultiWaypointRoutesEnabled = Settings?.Config?.Defaults?.DrivingMultiWaypointRoutesEnabled ?? true; // 驾驶导航途径点
									//plist["com.apple.GEO"].CountryProviders.CN.EnableAlberta = false; // CN
									//plist["com.apple.GEO"].CountryProviders.CN.EnableClientDrapedVectorPolygons = false; // CN
									plist["com.apple.GEO"].CountryProviders.CN.GEOAddressCorrectionEnabled = Settings?.Config?.Defaults?.GEOAddressCorrection ?? true; // CN
									if (Settings?.Config?.Defaults?.LookupMaxParametersCount ?? true) {
										delete plist["com.apple.GEO"].CountryProviders.CN.GEOBatchSpatialEventLookupMaxParametersCount // CN
										delete plist["com.apple.GEO"].CountryProviders.CN.GEOBatchSpatialPlaceLookupMaxParametersCount // CN
									}
									plist["com.apple.GEO"].CountryProviders.CN.LocalitiesAndLandmarksSupported = Settings?.Config?.Defaults?.LocalitiesAndLandmarks ?? true; // CN
									plist["com.apple.GEO"].CountryProviders.CN.POIBusynessDifferentialPrivacy = Settings?.Config?.Defaults?.POIBusyness ?? true; // CN
									plist["com.apple.GEO"].CountryProviders.CN.POIBusynessRealTime = Settings?.Config?.Defaults?.POIBusyness ?? true; // CN
									plist["com.apple.GEO"].CountryProviders.CN.TransitPayEnabled = Settings?.Config?.Defaults?.TransitPayEnabled ?? true; // CN
									plist["com.apple.GEO"].CountryProviders.CN.SupportsOffline = Settings?.Config?.Defaults?.SupportsOffline ?? true; // CN
									plist["com.apple.GEO"].CountryProviders.CN.SupportsCarIntegration = Settings?.Config?.Defaults?.SupportsCarIntegration ?? true; // CN
									// TW
									//plist["com.apple.GEO"].CountryProviders.CN.GEOShouldSpeakWrittenAddresses = true; // TW
									//plist["com.apple.GEO"].CountryProviders.CN.GEOShouldSpeakWrittenPlaceNames = true; // TW
									// US
									plist["com.apple.GEO"].CountryProviders.CN["6694982d2b14e95815e44e970235e230"] = Settings?.Config?.Defaults?.["6694982d2b14e95815e44e970235e230"] ?? true; // US
									plist["com.apple.GEO"].CountryProviders.CN.PedestrianAREnabled = Settings?.Config?.Defaults?.PedestrianAR ?? true; // 现实世界中的线路
									plist["com.apple.GEO"].CountryProviders.CN.OpticalHeadingEnabled = Settings?.Config?.Defaults?.OpticalHeading ?? true; // 举起以查看
									plist["com.apple.GEO"].CountryProviders.CN.UseCLPedestrianMapMatchedLocations = Settings?.Config?.Defaults?.UseCLPedestrianMapMatchedLocations ?? true; // 导航准确性-增强
									break;
							};
							break;
					};
					$response.body = XML.stringify(body);
					break;
				case "text/vtt":
				case "application/vtt":
					break;
				case "text/json":
				case "application/json":
					break;
				case "application/x-protobuf":
				case "application/grpc":
				case "application/grpc+proto":
				case "applecation/octet-stream":
					break;
			};
			break;
		case false:
			break;
	};
})()
	.catch((e) => $.logErr(e))
	.finally(() => {
		switch ($response) {
			default: { // 有回复数据，返回回复数据
				const FORMAT = ($response?.headers?.["Content-Type"] ?? $response?.headers?.["content-type"])?.split(";")?.[0];
				$.log(`🎉 ${$.name}, finally`, `$response`, `FORMAT: ${FORMAT}`, "");
				//$.log(`🚧 ${$.name}, finally`, `$response: ${JSON.stringify($response)}`, "");
				if ($response?.headers?.["Content-Encoding"]) $response.headers["Content-Encoding"] = "identity";
				if ($response?.headers?.["content-encoding"]) $response.headers["content-encoding"] = "identity";
				if ($.isQuanX()) {
					switch (FORMAT) {
						case undefined: // 视为无body
							// 返回普通数据
							$.done({ headers: $response.headers });
							break;
						default:
							// 返回普通数据
							$.done({ headers: $response.headers, body: $response.body });
							break;
						case "application/x-protobuf":
						case "application/grpc":
						case "application/grpc+proto":
						//case "applecation/octet-stream":
							// 返回二进制数据
							//$.log(`${$response.bodyBytes.byteLength}---${$response.bodyBytes.buffer.byteLength}`);
							$.done({ headers: $response.headers, bodyBytes: $response.bodyBytes.buffer.slice($response.bodyBytes.byteOffset, $response.bodyBytes.byteLength + $response.bodyBytes.byteOffset) });
							break;
					};
				} else $.done($response);
				break;
			};
			case undefined: { // 无回复数据
				break;
			};
		};
	})

/***************** Function *****************/
/**
 * Set Environment Variables
 * @author VirgilClyne
 * @param {String} name - Persistent Store Key
 * @param {Array} platforms - Platform Names
 * @param {Object} database - Default DataBase
 * @return {Object} { Settings, Caches, Configs }
 */
function setENV(name, platforms, database) {
	$.log(`☑️ ${$.name}, Set Environment Variables`, "");
	let { Settings, Caches, Configs } = getENV(name, platforms, database);
	/***************** Settings *****************/
	$.log(`✅ ${$.name}, Set Environment Variables`, `Settings: ${typeof Settings}`, `Settings内容: ${JSON.stringify(Settings)}`, "");
	/***************** Caches *****************/
	//$.log(`✅ ${$.name}, Set Environment Variables`, `Caches: ${typeof Caches}`, `Caches内容: ${JSON.stringify(Caches)}`, "");
	/***************** Configs *****************/
	Configs.Storefront = new Map(Configs.Storefront);
	return { Settings, Caches, Configs };
};

/**
 * Set GCC
 * @author VirgilClyne
 * @param {String} name - Config Name
 * @param {Object} caches - Caches
 * @return {Promise<*>}
 */
async function setGCC(name, caches) {
	$.log(`⚠ ${$.name}, Set GCC`, `caches.${name}.gcc = ${caches?.[name]?.gcc}`, "");
	if ($response.body !== caches?.[name]?.gcc) {
		let newCaches = caches;
		newCaches[name] = { "gcc": $response.body };
		$.setjson(newCaches, "@iRingo.Location.Caches");
	}
	return $.log(`🎉 ${$.name}, Set GCC`, `caches.${name}.gcc = ${caches?.[name]?.gcc}`, "");
};

/***************** Env *****************/
// prettier-ignore
// https://github.com/chavyleung/scripts/blob/master/Env.min.js
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,a)=>{s.call(this,t,(t,s,r)=>{t?a(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const a=this.getdata(t);if(a)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,a)=>e(a))})}runScript(t,e){return new Promise(s=>{let a=this.getdata("@chavy_boxjs_userCfgs.httpapi");a=a?a.replace(/\n/g,"").trim():a;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[i,o]=a.split("@"),n={url:`http://${o}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":i,Accept:"*/*"},timeout:r};this.post(n,(t,e,a)=>s(a))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e);if(!s&&!a)return{};{const a=s?t:e;try{return JSON.parse(this.fs.readFileSync(a))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):a?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const a=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of a)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,a)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[a+1])>>0==+e[a+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,a]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,a,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,a,r]=/^@(.*?)\.(.*?)$/.exec(e),i=this.getval(a),o=a?"null"===i?null:i||"{}":"{}";try{const e=JSON.parse(o);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),a)}catch(e){const i={};this.lodash_set(i,r,t),s=this.setval(JSON.stringify(i),a)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:a,statusCode:r,headers:i,rawBody:o}=t,n=s.decode(o,this.encoding);e(null,{status:a,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:a,response:r}=t;e(a,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let a=require("iconv-lite");this.initGotEnv(t);const{url:r,...i}=t;this.got[s](r,i).then(t=>{const{statusCode:s,statusCode:r,headers:i,rawBody:o}=t,n=a.decode(o,this.encoding);e(null,{status:s,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:s,response:r}=t;e(s,r,r&&a.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in a)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t}queryStr(t){let e="";for(const s in t){let a=t[s];null!=a&&""!==a&&("object"==typeof a&&(a=JSON.stringify(a)),e+=`${s}=${a}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",a="",r){const i=t=>{switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{let e=t.url||t.openUrl||t["open-url"];return{url:e}}case"Loon":{let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}case"Quantumult X":{let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,a=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":a}}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,a,i(r));break;case"Quantumult X":$notify(e,s,a,i(r));break;case"Node.js":}if(!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),a&&t.push(a),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t);break;case"Node.js":this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack)}}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;switch(this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}

/**
 * Get Environment Variables
 * @link https://github.com/VirgilClyne/GetSomeFries/blob/main/function/getENV/getENV.min.js
 * @author VirgilClyne
 * @param {String} key - Persistent Store Key
 * @param {Array} names - Platform Names
 * @param {Object} database - Default Database
 * @return {Object} { Settings, Caches, Configs }
 */
function getENV(key,names,database){let BoxJs=$.getjson(key,database),Argument={};if("undefined"!=typeof $argument&&Boolean($argument)){let arg=Object.fromEntries($argument.split("&").map((item=>item.split("="))));for(let item in arg)setPath(Argument,item,arg[item])}const Store={Settings:database?.Default?.Settings||{},Configs:database?.Default?.Configs||{},Caches:{}};Array.isArray(names)||(names=[names]);for(let name of names)Store.Settings={...Store.Settings,...database?.[name]?.Settings,...BoxJs?.[name]?.Settings,...Argument},Store.Configs={...Store.Configs,...database?.[name]?.Configs},BoxJs?.[name]?.Caches&&"string"==typeof BoxJs?.[name]?.Caches&&(BoxJs[name].Caches=JSON.parse(BoxJs?.[name]?.Caches)),Store.Caches={...Store.Caches,...BoxJs?.[name]?.Caches};return function traverseObject(o,c){for(var t in o){var n=o[t];o[t]="object"==typeof n&&null!==n?traverseObject(n,c):c(t,n)}return o}(Store.Settings,((key,value)=>("true"===value||"false"===value?value=JSON.parse(value):"string"==typeof value&&(value?.includes(",")?value=value.split(","):value&&!isNaN(value)&&(value=parseInt(value,10))),value))),Store;function setPath(object,path,value){path.split(".").reduce(((o,p,i)=>o[p]=path.split(".").length===++i?value:o[p]||{}),object)}}

// https://github.com/VirgilClyne/GetSomeFries/blob/main/function/URL/URLs.embedded.min.js
function URLs(t){return new class{constructor(t=[]){this.name="URL v1.2.2",this.opts=t,this.json={scheme:"",host:"",path:"",type:"",query:{}}}parse(t){let s=t.match(/(?:(?<scheme>.+):\/\/(?<host>[^/]+))?\/?(?<path>[^?]+)?\??(?<query>[^?]+)?/)?.groups??null;return s?.path?s.paths=s?.path?.split("/"):s.path="",s?.paths&&(s.type=s?.paths?.[s?.paths?.length-1]?.split(".")?.[1]),s?.query&&(s.query=Object.fromEntries(s.query.split("&").map((t=>t.split("="))))),s}stringify(t=this.json){let s="";return t?.scheme&&t?.host&&(s+=t.scheme+"://"+t.host),t?.path&&(s+=t?.host?"/"+t.path:t.path),t?.query&&(s+="?"+Object.entries(t.query).map((t=>t.join("="))).join("&")),s}}(t)}

// https://github.com/DualSubs/XML/blob/main/XML.embedded.min.js
function XMLs(e){return new class{#e="@";#t="#";#r={"&amp;":"&","&lt;":"<","&gt;":">","&apos;":"'","&quot;":'"'};#s={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"};constructor(e){this.name="XML v0.3.6-2",this.opts=e,BigInt.prototype.toJSON=()=>this.toString()}parse(e=new String,t=""){const r=this.#r,s=this.#e,n=this.#t;let a=function e(t,r){let a;switch(typeof t){case"string":case"undefined":a=t;break;case"object":const l=t.raw,u=t.name,f=t.tag,$=t.children;a=l||(f?function(e,t){if(!e)return;const r=e.split(/([^\s='"]+(?:\s*=\s*(?:'[\S\s]*?'|"[\S\s]*?"|[^\s'"]*))?)/),n=r.length;let a,i;for(let e=0;e<n;e++){let n=l(r[e]);if(!n)continue;a||(a={});const u=n.indexOf("=");if(u<0)n=s+n,i=null;else{i=n.substr(u+1).replace(/^\s+/,""),n=s+n.substr(0,u).replace(/\s+$/,"");const e=i[0];e!==i[i.length-1]||"'"!==e&&'"'!==e||(i=i.substr(1,i.length-2)),i=c(i)}t&&(i=t(n,i)),o(a,n,i)}return a;function l(e){return e?.trim?.()}}(f,r):$?{}:{[u]:void 0}),"plist"===u?a=Object.assign(a,i($[0],r)):$?.forEach?.(((t,s)=>{"string"==typeof t?o(a,n,e(t,r),void 0):t.tag||t.children||t.raw?o(a,t.name,e(t,r),void 0):o(a,t.name,e(t,r),$?.[s-1]?.name)})),r&&(a=r(u||"",a))}return a;function o(e,t,r,s=t){if(void 0!==r){const n=e[s];Array.isArray(n)?n.push(r):n?e[s]=[n,r]:e[t]=r}}}(function(e){const t=e.split(/<([^!<>?](?:'[\S\s]*?'|"[\S\s]*?"|[^'"<>])*|!(?:--[\S\s]*?--|\[[^\[\]'"<>]+\[[\S\s]*?]]|DOCTYPE[^\[<>]*?\[[\S\s]*?]|(?:ENTITY[^"<>]*?"[\S\s]*?")?[\S\s]*?)|\?[\S\s]*?\?)>/),r=t.length,s={children:[]};let n=s;const a=[];for(let e=0;e<r;){const r=t[e++];r&&o(r);const s=t[e++];s&&i(s)}return s;function i(e){let t={};switch(e[0]){case"/":const r=e.replace(/^\/|[\s\/].*$/g,"").toLowerCase();for(;a.length;){const e=n?.name?.toLowerCase?.();if(n=a.pop(),e===r)break}break;case"?":"xml"===e.slice(1,4)?(t.name="?xml",t.raw=e.slice(5,-1)):(t.name="?",t.raw=e.slice(1,-1)),l(t);break;case"!":"DOCTYPE"===e.slice(1,8)?(t.name="!DOCTYPE",t.raw=e.slice(9)):"[CDATA["===e.slice(1,8)&&"]]"===e.slice(-2)?(t.name="!CDATA",t.raw=e.slice(9,-2)):(t.name="!",t.raw=e.slice(1)),l(t);break;default:if(t=function(e){const t={children:[]};e=e.replace(/\s*\/?$/,"");const r=e.search(/[\s='"\/]/);r<0?t.name=e:(t.name=e.substr(0,r),t.tag=e.substr(r));return t}(e),l(t),"/"===e.slice(-1))delete t.children;else a.push(n),n=t}}function o(e){(e=function(e){return e?.replace?.(/^(\r\n|\r|\n|\t)+|(\r\n|\r|\n|\t)+$/g,"")}(e))&&l(c(e))}function l(e){n.children.push(e)}}(e),t);return a;function i(e,t){let r;switch(typeof e){case"string":case"undefined":r=e;break;case"object":const s=e.name,n=e.children;switch(r={},s){case"plist":let e=i(n[0],t);r=Object.assign(r,e);break;case"dict":let a=n.map((e=>i(e,t)));a=function(e,t){var r=0,s=[];for(;r<e.length;)s.push(e.slice(r,r+=t));return s}(a,2),r=Object.fromEntries(a);break;case"array":Array.isArray(r)||(r=[]),r=n.map((e=>i(e,t)));break;case"key":r=n[0];break;case"true":case"false":const c=s;r=JSON.parse(c);break;case"integer":const o=n[0];r=BigInt(o);break;case"real":const l=n[0];r=parseFloat(l);break;case"string":r=n[0]}t&&(r=t(s||"",r))}return r}function c(e){return e.replace(/(&(?:lt|gt|amp|apos|quot|#(?:\d{1,6}|x[0-9a-fA-F]{1,5}));)/g,(function(e){if("#"===e[1]){const t="x"===e[2]?parseInt(e.substr(3),16):parseInt(e.substr(2),10);if(t>-1)return String.fromCharCode(t)}return r[e]||e}))}}stringify(e=new Object,t=""){this.#s;const r=this.#e,s=this.#t;let n="";for(let t in e)n+=a(e[t],t,"");return n=t?n.replace(/\t/g,t):n.replace(/\t|\n/g,""),n;function a(e,t,n){let c="";switch(typeof e){case"object":if(Array.isArray(e))c=e.reduce(((e,r)=>e+`${n}${a(r,t,`${n}\t`)}\n`),"");else{let o="",l=!1;for(let s in e)s[0]===r?(o+=` ${s.substring(1)}="${e[s].toString()}"`,delete e[s]):void 0===e[s]?t=s:l=!0;if(c+=`${n}<${t}${o}${l?"":"/"}>`,l){if("plist"===t)c+=i(e,t,`${n}\t`);else for(let t in e)if(t===s)c+=e[t];else c+=a(e[t],t,`${n}\t`);c+=("\n"===c.slice(-1)?n:"")+`</${t}>`}}break;case"string":switch(t){case"?xml":c+=`${n}<${t} ${e.toString()}?>\n`;break;case"?":c+=`${n}<${t}${e.toString()}${t}>`;break;case"!":c+=`${n}\x3c!--${e.toString()}--\x3e`;break;case"!DOCTYPE":c+=`${n}<!DOCTYPE ${e.toString()}>`;break;case"!CDATA":c+=`${n}<![CDATA[${e.toString()}]]>`;case s:c+=e;break;default:c+=`${n}<${t}>${e.toString()}</${t}>`}break;case"undefined":c+=n+`<${t.toString()}/>`}return c}function i(e,t,r){let s="";switch(typeof e){case"boolean":s=`${r}<${e.toString()}/>`;break;case"number":s=`${r}<real>${e.toString()}</real>`;break;case"bigint":s=`${r}<integer>${e.toString()}</integer>`;break;case"string":s=`${r}<string>${e.toString()}</string>`;break;case"object":let c="";if(Array.isArray(e)){for(var n=0,a=e.length;n<a;n++)c+=`${r}${i(e[n],t,`${r}\t`)}`;s=`${r}<array>${c}${r}</array>`}else{let t="";Object.entries(e).forEach((([e,s])=>{t+=`${r}<key>${e}</key>`,t+=i(s,e,r)})),s=`${r}<dict>${t}${r}</dict>`}}return s}}}(e)}
