import React, { useEffect, useState } from 'react';
import './style.css';

const A='/assets/';
const svg=`<svg class="decor-star" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 1 23.5 15.5 39 20 23.5 24.5 20 39 16.5 24.5 1 20 16.5 15.5Z" fill="currentColor"/></svg>`;
const arrowSvg='<svg class="arrow-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const products=[
['01','classic','Double Chocolate','Deep chocolate. Double the mood.','chocolate-waffle.png',59,109,'CLASSIC CHOCOLATE'],
['02','classic','White Chocolate Delight','Sweet, smooth, golden-hearted.','berry-waffles-overhead.png',59,109,'CLASSIC CHOCOLATE'],
['03','classic','Dark Chocolate Fantasy','A little dark. A lot delicious.','oreo-waffle.png',59,109,'CLASSIC CHOCOLATE'],
['04','loaded','Belgian Milk Chocolate','Silky chocolate, full-on comfort.','chocolate-waffle.png',69,119,'LOADED WAFFLES'],
['05','loaded','Oreo Blast','Cookie crumble. Creamy chaos.','oreo-waffle-closeup.png',69,129,'LOADED WAFFLES'],
['06','loaded','Kitkat Crunch','Crunch into your chocolate era.','choco-stick-waffle.png',69,129,'LOADED WAFFLES'],
['07','premium','Triple Chocolate Overload','For the serious chocolate people.','chocolate-waffle.png',89,149,'PREMIUM SPECIAL'],
['08','premium','Nutella Crush Waffle','Hazelnut heaven, waffle edition.','choco-stick-waffle.png',89,159,'PREMIUM SPECIAL'],
['09','premium','Biscoff Delight','Sweet spice, soft centre, big love.','sprinkle-waffle.png',79,149,'PREMIUM SPECIAL'],
['10','premium','Red Velvet Love','A little romance in every bite.','sprinkle-waffle.png',99,179,'PREMIUM SPECIAL'],
['11','premium','Lotus Biscoff Supreme','The ultimate Biscoff fix.','oreo-waffle-closeup.png',119,199,'PREMIUM SPECIAL'],
['12','premium','Kunafa Pistachio Special','Pistachio, crunch, and indulgence.','chocolate-waffle.png',119,199,'PREMIUM SPECIAL']
].map(([num,category,name,description,image,mini,regular,type])=>({num,category,name,description,image,mini,regular,type}));
const filters=[['all','ALL THE GOODNESS'],['classic','CLASSICS'],['loaded','LOADED'],['premium','THE FANCY ONES']];
const beforeMenu=`<div class="topline"><span>FRESH OFF THE IRON</span><span>INDORE · WAFFLE CRUSH</span><span>CRUSH YOUR SWEET CRAVINGS</span></div>
<header class="nav"><a class="brand-logo" href="#top" aria-label="Waffle Crush home"><img src="${A}waffle-crush-logo.png" alt="Waffle Crush logo"></a><nav><a href="#manifesto">THE CRUSH</a><a href="#menu">WAFFLE INDEX</a><a href="#visit">FIND YOUR FIX</a></nav><a class="nav-order" href="#order">GET YOUR WAFFLE <b>${arrowSvg}</b></a><button class="hamb" aria-label="Open menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button></header>
<main id="top"><section class="hero"><div class="hero-side">A SMALL<br>HAPPINESS<br>PROJECT <span>${svg}</span></div><div class="hero-title"><p class="eyebrow">NOT HERE TO BE SUBTLE.</p><h1>WAFFLE<br><i>CRUSH.</i></h1><div class="hero-under"><span>GOLDEN. GOOEY.<br>GONE IN MINUTES.</span><span class="hero-sticker">MADE<br>FRESH<br><b>ALWAYS</b></span><p>Big cravings call for<br><em>big waffle energy.</em></p></div></div><div class="hero-art"><div class="hero-photo"><img src="${A}berry-waffles-overhead.png" alt="Golden waffles with berries"></div><div class="photo-label">01 — THE BERRY<br>DAYDREAM</div><div class="scribble">so<br>good!</div></div><div class="hero-bottom"><span>SCROLL, THEN CRAVE</span><span class="down"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v17m-7-7 7 7 7-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>MINI FROM ₹59</span></div></section>
<div class="marquee"><div>CRISP EDGES <b>${svg}</b> SOFT CENTRE <b>${svg}</b> EXTRA CHOCOLATE <b>${svg}</b> ZERO REGRETS <b>${svg}</b> CRISP EDGES <b>${svg}</b> SOFT CENTRE <b>${svg}</b> EXTRA CHOCOLATE <b>${svg}</b> ZERO REGRETS <b>${svg}</b></div></div>
<section class="manifesto" id="manifesto"><div class="section-no">01 / THE REASON</div><div class="manifesto-content"><p class="mini-label">A NOTE FROM THE CRAVING DEPARTMENT</p><h2>Some days need<br>no reason.<br><em>Just waffles.</em></h2><div class="manifesto-right"><p>We make the kind of waffles that interrupt your day in the best way. Hot, golden, loaded with the good stuff—and never pretending to be anything other than a really, really good treat.</p><span class="hand-note">you deserve this ↙</span></div></div><div class="manifesto-bottom"><span>FRESHLY MADE</span><span>HAPPILY LOADED</span><span>BEST SHARED (OR NOT)</span></div></section>
<section class="feature-spread"><div class="feature-big"><img src="${A}strawberry-waffles.png" alt="Strawberry waffles"><span class="vertical-caption">A LITTLE SWEET. A LITTLE WILD.</span><div class="feature-circle">THE<br>GOOD<br>STUFF<span>${svg}</span></div></div><div class="feature-note"><span class="section-no">02 / MADE FOR THE MOMENT</span><h2>That first<br><em>crunch.</em></h2><p>Hear it? That’s the sound of a very good decision. Pick your topping mood, grab your favourite people—or keep it all to yourself.</p><div class="note-rule"></div><span class="mono">THE WAFFLE IS THE MOMENT.</span></div></section>
<section class="menu" id="menu"><div class="menu-top"><div><span class="section-no">03 / THE WAFFLE INDEX</span><h2>Pick your<br><em>crush.</em></h2></div><div class="menu-aside"><span class="price-note">MINI / REGULAR</span><p>12 ways to make<br>your day sweeter.</p></div></div>`;
const afterMenu=`</section>
<section class="closing-photo"><img src="${A}oreo-waffle-closeup.png" alt="Chocolate cookie waffle close up"><div class="closing-type">ONE MORE<br><em>BITE?</em></div><span class="closing-caption">WE KNEW YOU'D SAY YES.</span></section>
<section class="order" id="order"><div class="order-sticker">CRAVING<br>STATUS:<br><b>REAL.</b></div><span class="section-no">04 / MAKE IT A WAFFLE DAY</span><h2>Let's make<br>something <em>sweet.</em></h2><p>Tell us what you're craving. We'll get the waffle iron going.</p><a class="order-button" href="https://wa.me/918982429222?text=Hi%20Waffle%20Crush!%20I%27d%20like%20to%20place%20an%20order." target="_blank" rel="noopener">ORDER ON WHATSAPP <span>${arrowSvg}</span></a><small>FRESHLY MADE · READY FOR YOUR CRAVINGS</small></section></main>
<footer id="visit"><div class="footer-main"><a class="footer-logo" href="#top" aria-label="Waffle Crush home"><img src="${A}waffle-crush-logo.png" alt="Waffle Crush logo"></a><p>Crush your<br><em>sweet cravings.</em></p><span class="footer-spark">${svg}</span></div><div class="footer-contact"><div><span class="contact-label">COME FIND US</span><p>Near Shree Trijal Library, near Astha Hospital,<br>Rajiv Awas Vihar, Part I, Scheme No. 114,<br>Indore, Madhya Pradesh 452010</p><a href="https://www.google.com/maps/search/?api=1&query=The+Waffle+Crush+near+Shree+Trijal+Library+Astha+Hospital+Scheme+No+114+Indore+452010" target="_blank" rel="noopener">GET DIRECTIONS ${arrowSvg}</a></div><div><span class="contact-label">SAY HELLO</span><p><a href="tel:+918982429222">+91 89824 29222</a></p><a href="https://www.instagram.com/thewafflecrush/" target="_blank" rel="noopener">@thewafflecrush ${arrowSvg}</a></div></div><div class="footer-bottom"><span>© 2026 WAFFLE CRUSH</span><span>MADE WITH A LITTLE EXTRA</span><a href="#top">BACK TO TOP ↑</a></div></footer>`;
function Raw({html}){return <div dangerouslySetInnerHTML={{__html:html}}/>}
function App(){
 const [filter,setFilter]=useState('all'); const [product,setProduct]=useState(null); const [size,setSize]=useState(''); const [menuOpen,setMenuOpen]=useState(false);
 const visible=products.filter(p=>filter==='all'||p.category===filter);
 const close=()=>{setProduct(null);setSize('')};
 useEffect(()=>{
  const nav=document.querySelector('.nav nav'); const hamburger=document.querySelector('.hamb'); const toggleNav=()=>nav?.classList.toggle('open'); hamburger?.addEventListener('click',toggleNav); nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.manifesto-content,.feature-big,.feature-note,.menu-top,.menu-item,.closing-photo,.order').forEach(el=>{el.classList.add('reveal');obs.observe(el)});
  const onScroll=()=>{const hero=document.querySelector('.hero-art');if(hero&&window.innerWidth>800)hero.style.transform=`translateY(${Math.min(window.scrollY*.12,70)}px) rotate(3deg)`};window.addEventListener('scroll',onScroll,{passive:true});
  return()=>{obs.disconnect();window.removeEventListener('scroll',onScroll);hamburger?.removeEventListener('click',toggleNav)};
 },[filter]);
 useEffect(()=>{
  if(!product) return;
  const body=document.body;
  const scrollY=window.scrollY;
  const previous={position:body.style.position,top:body.style.top,width:body.style.width,overflow:body.style.overflow,paddingRight:body.style.paddingRight};
  const scrollbarGap=window.innerWidth-document.documentElement.clientWidth;
  body.style.position='fixed';body.style.top=`-${scrollY}px`;body.style.width='100%';body.style.overflow='hidden';
  if(scrollbarGap>0) body.style.paddingRight=`${scrollbarGap}px`;
  body.classList.add('modal-lock');
  const key=e=>{if(e.key==='Escape')close()};
  window.addEventListener('keydown',key);
  return()=>{window.removeEventListener('keydown',key);body.classList.remove('modal-lock');Object.assign(body.style,previous);window.scrollTo(0,scrollY)};
 },[product]);
 const open=p=>{setProduct(p);setSize('')};
 const price=product?(size==='Mini'?product.mini:product.regular):0;
 const message=product&&size?`Hi Waffle Crush! I'd like to order ${product.name} (${size}) for ₹${price}. Please confirm my order.`:'';
 const wa=message?`https://wa.me/918982429222?text=${encodeURIComponent(message)}`:'#';
 return <><Raw html={beforeMenu}/><div className="menu-controls">{filters.map(([id,label])=><button key={id} className={`filter ${filter===id?'active':''}`} onClick={()=>setFilter(id)}>{label}</button>)}</div><div className="menu-list">{visible.map(p=><article key={p.num} className="menu-item" role="button" tabIndex="0" onClick={()=>open(p)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(p)}}}><div className="item-num">{p.num}</div><div className="item-photo"><img src={A+p.image} alt={p.name}/></div><div className="item-info"><span className="item-type">{p.type}</span><h3>{p.name}</h3><p>{p.description}</p></div><div className="item-price"><span>₹{p.mini}</span><small>₹{p.regular}</small></div></article>)}</div><Raw html={afterMenu}/>
 {product&&<div className="waffle-modal open" aria-hidden="false" onClick={e=>{if(e.target===e.currentTarget)close()}}><button className="modal-close" aria-label="Close product view" onClick={close}>×</button><div className="modal-spark"><svg className="decor-star" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 1 23.5 15.5 39 20 23.5 24.5 20 39 16.5 24.5 1 20 16.5 15.5Z" fill="currentColor"/></svg></div><div className="modal-image-wrap"><img src={A+product.image} alt={product.name}/></div><div className="modal-copy"><span className="item-type">{product.type}</span><h2>{product.name}</h2><p>{product.description}</p><div className="modal-prices"><label className={`size-option ${size==='Mini'?'selected':''}`}><input type="radio" name="waffle-size" checked={size==='Mini'} onChange={()=>setSize('Mini')}/><span>MINI <b>₹{product.mini}</b></span></label><label className={`size-option ${size==='Regular'?'selected':''}`}><input type="radio" name="waffle-size" checked={size==='Regular'} onChange={()=>setSize('Regular')}/><span>REGULAR <b>₹{product.regular}</b></span></label></div><p className="size-hint">{size?`${size} selected · ₹${price} · Ready to send your order.`:'Choose your waffle size to continue.'}</p><a className={`modal-order ${size?'is-ready':'is-disabled'}`} href={wa} target="_blank" rel="noopener" onClick={e=>{if(!size)e.preventDefault()}}>MAKE THIS MY CRUSH <svg className="arrow-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div></div>}
 </>
}
export default App;
