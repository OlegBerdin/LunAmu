var HINT={20:'маленькие породы и щенки',25:'средние собаки',30:'крупные и активные собаки'};
function fmt(a){return a[0]+'–'+a[1]+' ₽'}
document.querySelectorAll('.product').forEach(function(c){
  var d=window.PRODUCTS[c.dataset.id];
  function upd(){
    var w=c.querySelector('input[name^="w-"]:checked').value;
    var vi=c.querySelector('input[name^="v-"]:checked');var v=d.vs[vi?+vi.value:0];
    var price=fmt(v.p[w]);
    c.querySelector('.price').textContent=price;
    c.querySelector('.hint').textContent='Ширина '+w+' мм: '+HINT[w];
    var t=d.name+', ширина '+w+' мм'+(v.label?', '+v.label.toLowerCase():'')+', '+price+'.\nОбхват шеи: ___ см'+(d.kind==='шлейка'?'\nОбхват груди: ___ см\nДлина спины: ___ см':'')+'\nЦвет: ___';
    c.querySelector('.order').href='contacts.html?item='+encodeURIComponent('Здравствуйте! Хочу заказать: '+t);
  }
  c.addEventListener('change',upd);upd();
});
