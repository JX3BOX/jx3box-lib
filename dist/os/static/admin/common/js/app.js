!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=6)}([function(e,t,o){const{default_avatar:n,__sourceType:i,__postType:s,__wikiType:r,__appType:c,__gameType:a,__imgPath:l,__iconPath:u,__clients:p,__ossMirror:d}=o(8),f=o(9);e.exports={resolveImagePath:function(e){return e&&e.length?e=(e=e.replace(/oss\.jx3box\.com/g,"console.cnyixun.com")).replace(/http:/g,"https:"):""},checkImageLoad:function(e){e.length&&e.one("error",(function(){var e=$(this).attr("src").replace(/console\.cnyixun\.com/g,"oss.jx3box.com");$(this).attr("src",e)}))},showAvatar:function(e,t="s",o=!0){let i="";i=e?e.replace(/http:/g,"https:"):n;const s={s:"?x-oss-process=style/avatar_s",m:"?x-oss-process=style/avatar_m",l:"?x-oss-process=style/avatar_l"};if(s[t])i+=s[t];else{i+=`?x-oss-process=image/auto-orient,1/resize,m_fill,w_${t},h_${t}/quality,Q_100`}return o&&(i=i.replace(/oss\.jx3box\.com/g,"console.cnyixun.com")),i},showBanner:function(e,t="mini_banner",o=!0){return e?(e=e.replace(/http:/g,"https:"),o&&(e=e.replace(/oss\.jx3box\.com/g,"console.cnyixun.com")),e+="?x-oss-process=style/"+t):""},getThumbnail:function(e,t=88,o=!0){return e?(e=e.replace(/http:/g,"https:"),o&&(e=e.replace(/oss\.jx3box\.com/g,"console.cnyixun.com")),Array.isArray(t)?e+=`?x-oss-process=image/auto-orient,1/resize,m_fill,w_${t[0]},h_${t[1]}/quality,Q_100`:isNaN(t)?e+="?x-oss-process=style/"+t:e+=`?x-oss-process=image/auto-orient,1/resize,m_fill,w_${t},h_${t}/quality,Q_100`,e):""},iconLink(e,t="std"){if(!e||isNaN(parseInt(e)))return l+"image/common/nullicon.png";return`${u}${"origin"==t?"origin_icon":"icon"}/${e}.png`},getAppIcon:e=>l+"image/box/"+e+".svg",editLink:function(e,t){return"/publish/#/"+e+"/"+t},publishLink:function(e){return"/publish/#/"+e},postLink:function(e,t){return"/"+e+"/"+t},getLink:function(e,t,o){if(t=t||"",i.cms_types.includes(e)||i.pvx_types.includes(e))return"/"+e+"/"+t;if(i.wiki_types.includes(e))return"item_plan"===e?"/item/plan_view/"+t:("achievement"===e&&(e="cj"),"wiki"===e&&(e="knowledge"),`/${e}/view/${t}`);if(i.app_types.includes(e))return`/${e}/view/${t}`;if(i.db_types.includes(e)){let n=`/app/database/?type=${e}&query=${t}`;return o&&(n+="&level="+o),n}if(i.team_types.includes(e))return"/team/"+e+"/"+t;if("rank"==e){let e=o,n="/rank/race/#/"+t;return e&&(n+="/rank?aid="+e),n}return i.exam_types.includes(e)?"/exam/"+e+"/"+t:""},authorLink:function(e){return"/author/"+e},tvLink:function(e,t){return f[e]+t},getRewrite:function(e){let t="",o=new URLSearchParams(location.search);if(!o.get(e)){t=location.pathname.slice(1).split("/")[1]}else t=o.get(e);return t},getPID:function(){let e=new URLSearchParams(location.search).get("pid");return e&&!isNaN(e)?e:0},getAppID:function(){let e=location.pathname.slice(1).split("/");return e.length&&!isNaN(e[1])?e[1]:0},getAppType:function(){return location.pathname.slice(1).split("/")[0]},getQuery:function(e){return new URLSearchParams(location.search).get(e)},getTypeLabel:function(e){return Object.assign({},s,r,c,a)[e]||"未知"},buildTarget:function(e=1025){return window.innerWidth<e?"_self":"_blank"},ts2str(e,t={polished:!0,separator:"-"}){let o=new Date(1e3*parseInt(e)),n=o.getFullYear(),i=o.getMonth()+1,s=o.getDate();return t.polished?`${n}${t.separator}${r(i)}${t.separator}${r(s)}`:`${n}${t.separator}${i}${t.separator}${s}`;function r(e){return e<10?"0"+e:e}},jx3ClientType:()=>location.hostname.includes("origin")?2:1,extractTextContent(e){const t=/<Text>text=(.*?)font=(\d+).*?<\/text>/gimsy;let o,n=[];for(;o=t.exec(e);)n.push(o);let i=[];for(let e of n)i.push({font:~~e[2],text:e[1].slice(1,-2).replace(/[\\n]/g,"")});return i},showSchoolIcon:e=>l+"image/school/"+e+".png",showForceIcon:e=>l+"image/force/"+e+".png",showMountIcon:e=>l+"image/xf/"+e+".png",showClientLabel:e=>p[e],getMedalLink:(e,t)=>`/rank/race/#/${e}/${t}`}},function(e){e.exports=JSON.parse('{"冰心诀":{"name":"冰心诀","id":10081,"force":5,"kungfuId":10,"school":4,"client":["all","std","origin"]},"云裳心经":{"name":"云裳心经","id":10080,"force":5,"kungfuId":9,"school":4,"client":["all","std","origin"]},"花间游":{"name":"花间游","id":10021,"force":2,"kungfuId":5,"school":2,"client":["all","std","origin"]},"离经易道":{"name":"离经易道","id":10028,"force":2,"kungfuId":7,"school":2,"client":["all","std","origin"]},"毒经":{"name":"毒经","id":10175,"force":6,"kungfuId":13,"school":9,"client":["all","std","origin"]},"补天诀":{"name":"补天诀","id":10176,"force":6,"kungfuId":14,"school":9,"client":["all","std","origin"]},"莫问":{"name":"莫问","id":10447,"force":22,"kungfuId":22,"school":19,"client":["all","std"]},"相知":{"name":"相知","id":10448,"force":22,"kungfuId":23,"school":19,"client":["all","std"]},"无方":{"name":"无方","id":10627,"force":212,"kungfuId":29,"school":24,"client":["all","std"]},"灵素":{"name":"灵素","id":10626,"force":212,"kungfuId":28,"school":24,"client":["all","std"]},"傲血战意":{"name":"傲血战意","id":10026,"force":3,"kungfuId":6,"school":1,"client":["all","std","origin"]},"铁牢律":{"name":"铁牢律","id":10062,"force":3,"kungfuId":8,"school":1,"client":["all","std","origin"]},"易筋经":{"name":"易筋经","id":10003,"force":1,"kungfuId":2,"school":5,"client":["all","std","origin"]},"洗髓经":{"name":"洗髓经","id":10002,"force":1,"kungfuId":1,"school":5,"client":["all","std","origin"]},"焚影圣诀":{"name":"焚影圣诀","id":10242,"force":10,"kungfuId":17,"school":8,"client":["all","std"]},"明尊琉璃体":{"name":"明尊琉璃体","id":10243,"force":10,"kungfuId":18,"school":8,"client":["all","std"]},"分山劲":{"name":"分山劲","id":10390,"force":21,"kungfuId":21,"school":18,"client":["all","std"]},"铁骨衣":{"name":"铁骨衣","id":10389,"force":21,"kungfuId":20,"school":18,"client":["all","std"]},"紫霞功":{"name":"紫霞功","id":10014,"force":4,"kungfuId":3,"school":3,"client":["all","std","origin"]},"太虚剑意":{"name":"太虚剑意","id":10015,"force":4,"kungfuId":4,"school":3,"client":["all","std","origin"]},"天罗诡道":{"name":"天罗诡道","id":10225,"force":7,"kungfuId":16,"school":10,"client":["all","std","origin"]},"惊羽诀":{"name":"惊羽诀","id":10224,"force":7,"kungfuId":15,"school":10,"client":["all","std","origin"]},"问水诀":{"name":"问水诀","id":10144,"force":8,"kungfuId":11,"school":6,"client":["all","std","origin"]},"山居剑意":{"name":"山居剑意","id":10145,"force":8,"kungfuId":11,"school":6,"client":["all","std","origin"]},"笑尘诀":{"name":"笑尘诀","id":10268,"force":9,"kungfuId":19,"school":7,"client":["all","std"]},"北傲诀":{"name":"北傲诀","id":10464,"force":23,"kungfuId":24,"school":20,"client":["all","std"]},"凌海诀":{"name":"凌海诀","id":10533,"force":24,"kungfuId":25,"school":21,"client":["all","std"]},"隐龙诀":{"name":"隐龙诀","id":10585,"force":25,"kungfuId":26,"school":22,"client":["all","std"]},"太玄经":{"name":"太玄经","id":10615,"force":211,"kungfuId":27,"school":23,"client":["all","std"]},"通用":{"name":"通用","id":0,"force":0,"kungfuId":0,"school":0,"client":["all","std","origin"]}}')},function(e){e.exports=JSON.parse('{"0":"通用","10002":"洗髓经","10003":"易筋经","10014":"紫霞功","10015":"太虚剑意","10021":"花间游","10026":"傲血战意","10028":"离经易道","10062":"铁牢律","10080":"云裳心经","10081":"冰心诀","10144":"问水诀","10145":"山居剑意","10175":"毒经","10176":"补天诀","10224":"惊羽诀","10225":"天罗诡道","10242":"焚影圣诀","10243":"明尊琉璃体","10268":"笑尘诀","10389":"铁骨衣","10390":"分山劲","10447":"莫问","10448":"相知","10464":"北傲诀","10533":"凌海诀","10585":"隐龙诀","10615":"太玄经","10626":"灵素","10627":"无方"}')},function(e){e.exports=JSON.parse('{"1":"少林","2":"万花","3":"天策","4":"纯阳","5":"七秀","6":"五毒","7":"唐门","8":"藏剑","9":"丐帮","10":"明教","21":"苍云","22":"长歌","23":"霸刀","24":"蓬莱","25":"凌雪","211":"衍天","212":"药宗"}')},function(e){e.exports=JSON.parse('{"0":"江湖","1":"天策","2":"万花","3":"纯阳","4":"七秀","5":"少林","6":"藏剑","7":"丐帮","8":"明教","9":"五毒","10":"唐门","18":"苍云","19":"长歌","20":"霸刀","21":"蓬莱","22":"凌雪","23":"衍天","24":"药宗"}')},function(e){e.exports=JSON.parse('{"team":{"dmd":"达摩洞百强团队","bdfy":"白帝江关百强团队","bdfy_qx":"白帝江关七秀天团","bdfy_mj":"白帝江关明教天团","bdfy_cy":"白帝江关纯阳天团","axf":"安小逢百强团队","lydz":"雷域大泽百强团队"},"user":{"dmd":"达摩洞百强团队成员","bdfy":"白帝江关百强团队成员","bdfy_qx":"白帝江关七秀天团成员","bdfy_mj":"白帝江关明教天团成员","bdfy_cy":"白帝江关纯阳天团成员","lydz":"雷域大泽百强团队成员"}}')},function(e,t,o){o(7),e.exports=o(10)},function(e,t,o){"use strict";o.r(t);var n=o(1),i=o(2),s=o(3),r=o(4),c=o(5),a=o(0);window.JX3BOX_DATA={xf:{xf:n,xfid:i,forceid:s,schoolid:r,medals:c}},window.JX3BOX_UTILS={getWikiLink:a.getLink,getLink:a.getLink}},function(e){e.exports=JSON.parse('{"__Domain":"www.jx3box.com","__Origin":"origin.jx3box.com","__Root":"https://www.jx3box.com/","__OriginRoot":"https://origin.jx3box.com/","__v2":"https://v2.jx3box.com/","__Github":"https://github.jx3box.com/","__server":"https://server.jx3box.com/","__sso":"https://sso.jx3box.com/","__cms":"https://cms.jx3box.com/","__node":"https://node.jx3box.com/","__spider":"https://spider.jx3box.com/","__proxy":"https://proxy.jx3box.com/","__next":"https://next2.jx3box.com/","__pay":"https://pay.jx3box.com/","__team":"https://team.api.jx3box.com/","__lua":"https://lua.jx3box.com","__helperUrl":"https://helper.jx3box.com/","__os":"https://os.jx3box.com/","__jx3":"https://xn--3-4g8a959k.com/","__ossRoot":"https://oss.jx3box.com/","__ossMirror":"https://console.cnyixun.com/","__staticPath":{"origin":"https://oss.jx3box.com/static/","github":"https://jx3box.github.io/","jsdelivr":"https://cdn.jsdelivr.net/gh/JX3BOX/","mirror":"https://console.cnyixun.com/static/"},"__dataPath":"https://data.jx3box.com/","__imgPath":"https://img.jx3box.com/","__iconPath":"https://icon.jx3box.com/","__luaPath":"https://lua.jx3box.com/","__clients":{"std":"重制","origin":"缘起","all":"双端"},"__postType":{"macro":"宏库","jx3dat":"插件","fb":"副本","bps":"职业","tool":"工具","share":"捏脸","bbs":"茶馆","notice":"公告"},"__wikiType":{"achievement":"成就","item":"物品","knowledge":"通识","quest":"任务"},"__appType":{"pz":"配装","joke":"骚话","emotion":"表情","collection":"小册","item_plan":"清单","question":"题目","paper":"试卷","calendar":"日历"},"__gameType":{"pet":"宠物","adventure":"奇遇","furniture":"家具","horse":"坐骑","book":"书籍","exterior":"外观"},"__sourceType":{"cms_types":["macro","jx3dat","fb","bps","tool","bbs","notice","house","share","joke","emotion","feedback","collection"],"wiki_types":["cj","achievement","item","item_plan","wiki","knowledge","quest"],"exam_types":["question","paper"],"db_types":["skill","buff","npc","doodad"],"team_types":["org","role","raid","apply"],"app_types":["pz","calendar","battle","dbm"],"pvx_types":["pet","adventure","furniture","horse","book","exterior"]},"__visibleMap":{"0":"公开","1":"仅自己可见","2":"仅亲友可见","3":"密码可见","4":"付费可见","5":"粉丝可见"},"__userGroup":{"0":"游客","1":"待验证用户","8":"邮箱验证用户","16":"手机验证用户","32":"特约签约作者","64":"编辑","128":"管理员","256":"开发组","512":"超级管理"},"__userLevel":{"1":[0,600],"2":[600,900],"3":[900,1800],"4":[1800,3600],"5":[3600,7200],"6":[7200,999999]},"__userLevelColor":{"1":"#32d3c4","2":"#86c0fb","3":"#33d9ff","4":"#ffdb2a","5":"#ffa739","6":"#ff70b2","7":"#ff3399","8":"#f93c3c"},"__Links":{"account":{"login":"/account/login","register":"/account/register","email_verify":"/account/email_verify","login_callback":"/account/login_callback"},"dashboard":{"home":"/dashboard","msg":"/dashboard/msg","feed":"/dashboard/feed","fav":"/dashboard/fav","profile":"/dashboard/profile","connect":"/dashboard/connect","work":"/publish","publish":"/publish"}},"default_avatar":"https://console.cnyixun.com/image/common/avatar.png","feedback":"https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=o8LHzsrN48nbkMHM243AzM4"}')},function(e){e.exports=JSON.parse('{"douyu":"https://www.douyu.com/","bilibili":"https://live.bilibili.com/","huya":"https://www.huya.com/"}')},function(e,t){}]);