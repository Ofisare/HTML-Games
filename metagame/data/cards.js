/* Gemeinsamer versionierter Kartenkatalog für Insel, Deckbuilder und Abenteuer. */
window.IslandCards=(()=>{
 const FALLBACK_VERSION='1.0.0';
 async function load(prefix='../'){
  const manifest=await fetch(prefix+'version.json?check='+Date.now(),{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Versionsdatei nicht erreichbar');return r.json()});
  const version=manifest.files?.['data/cards.json']||FALLBACK_VERSION;
  const key='island-cards-catalog-'+version;
  let data;try{data=JSON.parse(localStorage.getItem(key)||'null')}catch{}
  if(!data){const url=prefix+'data/cards.json?v='+encodeURIComponent(version);const r=await fetch(url,{cache:'no-store'});if(!r.ok)throw Error('Kartenkatalog nicht erreichbar');data=await r.json();if(data.schemaVersion!==1||!data.cards)throw Error('Unbekanntes Kartenformat');try{localStorage.setItem(key,JSON.stringify(data))}catch{}}
  return data;
 }
 function deck(data,save){let list=save?.deck;if(!Array.isArray(list)||list.length!==data.deckSize||list.some(id=>!data.cards[id]||data.cards[id].faction!=='player'||data.cards[id].unlocked===false))return [...data.starterDeck];return [...list]}
 function costs(data,list){const result={};for(const id of list){for(const [key,amount] of Object.entries(data.cards[id]?.resources||{}))result[key]=(result[key]||0)+amount}return result}
 // Cache cropped display-only artwork; the original map sprites stay untouched.
 const portraitCache=new Map();
 function portrait(url){
  if(!portraitCache.has(url))portraitCache.set(url,new Promise(resolve=>{
   const img=new Image();img.onerror=()=>resolve(url);img.onload=()=>{
    try{
     const canvas=document.createElement('canvas');canvas.width=img.naturalWidth;canvas.height=img.naturalHeight;
     const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.drawImage(img,0,0);
     const w=canvas.width,h=canvas.height,p=ctx.getImageData(0,0,w,h).data;
     let x0=w,y0=h,x1=-1,y1=-1;
     for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(p[(y*w+x)*4+3]>24){x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y)}
     if(x1<x0){resolve(url);return}
     const cw=x1-x0+1,ch=y1-y0+1,out=document.createElement('canvas');out.width=out.height=256;
     const scale=230/Math.max(cw,ch),dw=cw*scale,dh=ch*scale;
     out.getContext('2d').drawImage(img,x0,y0,cw,ch,(256-dw)/2,(256-dh)/2,dw,dh);
     resolve(out.toDataURL('image/png'));
    }catch(e){resolve(url)}
   };img.src=url;
  }));
  return portraitCache.get(url);
 }
 function setPortrait(img,url){portrait(url).then(src=>{img.src=src})}
 return {load,deck,costs,setPortrait};
})();
