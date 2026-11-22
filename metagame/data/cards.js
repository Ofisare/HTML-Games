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
 return {load,deck,costs};
})();
