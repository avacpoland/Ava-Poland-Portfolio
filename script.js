
document.querySelectorAll('img[data-lightbox]').forEach(img=>{
  img.addEventListener('click',()=>{
    const box=document.querySelector('.lightbox');
    box.querySelector('img').src=img.src;
    box.classList.add('open');
  });
});
const box=document.querySelector('.lightbox');
if(box){
  box.addEventListener('click',e=>{
    if(e.target===box || e.target.classList.contains('close')) box.classList.remove('open');
  });
}
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
