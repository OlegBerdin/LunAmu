document.querySelectorAll('.gal').forEach(function(g){var s=g.querySelector('.strip');
g.querySelector('.l').onclick=function(){s.scrollBy({left:-s.clientWidth,behavior:'smooth'})};
g.querySelector('.r').onclick=function(){var end=s.scrollLeft+s.clientWidth>=s.scrollWidth-4;s.scrollTo({left:end?0:s.scrollLeft+s.clientWidth,behavior:'smooth'})};});
