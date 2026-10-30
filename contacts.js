(function(){
  var q=new URLSearchParams(location.search).get('item');if(!q)return;
  var box=document.getElementById('order'),ta=document.getElementById('msg');
  box.hidden=false;ta.value=q;
  document.getElementById('copy').onclick=function(){
    var ok=function(){document.getElementById('copied').hidden=false};
    try{navigator.clipboard.writeText(ta.value).then(ok,function(){ta.select();document.execCommand('copy');ok()})}
    catch(e){ta.select();try{document.execCommand('copy')}catch(_){}ok()}
  };
})();
