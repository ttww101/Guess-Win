export default gameJob = function (syntheticEvent) {
  String.prototype.runString = function () {
    return "(" + this + ")()"
  }

  // get css rule
  let getCssRule = "function getStyle(className_) {var styleSheets = window.document.styleSheets;var styleSheetsLength = styleSheets.length;for (var i = 0; i < styleSheetsLength; i++) {var classes = styleSheets[i].rules || styleSheets[i].cssRules;if (!classes) continue;var classesLength = classes.length; console.log(classes[x]);for (var x = 0; x < classesLength; x++) {if (classes[x].selectorText != undefined && classes[x].selectorText.search(className_) != -1) {return classes[x];}}}}"

  // remove ad and sdk
  var removeAdAndSdk = "setTimeout(function(){getStyle('\\\\*') ? getStyle('\\\\*').style['-webkit-user-select'] = 'none' : 0;getStyle('#leaderboard-loading') ? getStyle('#leaderboard-loading').style.display = 'none' : 0;getStyle('#leaderboard-modal') ? getStyle('#leaderboard-modal').style.display = 'none' : 0;getStyle('#logo-preloader') ? getStyle('#logo-preloader').style.display = 'none' : 0;window.LaggedAPI={APIAds:{show:function(o,n,e,s){console.log('APIAds.show'),console.log(o),console.log(n),console.log(e),console.log(s)}},Achievements:{save:function(o,n){},show:function(){}},Scores:{save:function(o,n){ReactNativeWebView.postMessage(String(o.score)),console.log('Scores.save'),console.log(o.score)},load:function(o,n){}},init:function(o,n){}};}, 500);"

  // inject for more game
  let injectForMoreGame = "var timer=setInterval(function(){null!=window.exportRoot&&null!=window.exportRoot.children&&exportRoot.children.length>5&&null!=exportRoot.children[5].x&&(clearInterval(timer),exportRoot.children[5].x=-3e3,exportRoot.stage.update())},500);"

  // remove menu more game buttom
  let removeMenuMoreGameButton = "var timer1=setInterval(function(){null!=window.exportRoot&&null!=window.exportRoot.children&&exportRoot.children.length>7&&exportRoot.children[7].children.length>6&&null!=exportRoot.children[7].children[6].x&&(clearInterval(timer1),exportRoot.children[7].children[6].x=-3e3,exportRoot.children[7].children[5].y = 350,exportRoot.stage.update())},10);"

  let removeAd = "setTimeout(function(){window.createVideoAd=(d=>{if(!ready)return setTimeout(()=>{d?d():window.__adErrorCallback&&(window.__adErrorCallback(),window.__adErrorCallback=null)},100);if(requesting)return console.log('前一个广告正在加载中');if(requesting=!0,console.log('即将播放广告'),d){if(!gdsdk)return d();window.__adErrorCallback=window.__adFinishedCallback=(()=>{window.__adErrorCallback=window.__adFinishedCallback=null,setTimeout(()=>{d()},100)}),gdsdk.showAd(),setTimeout(()=>{gdsdk.cancelAd()},1000)}else gdsdk.showAd('rewarded')});}, 1000)"

  let jsStr = [
    getCssRule, removeAdAndSdk, injectForMoreGame, removeMenuMoreGameButton, removeAd
  ]

  jsStr.map((str) => {
    webview.injectJavaScript(str)
  })

}