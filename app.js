
const T={
  ja:{
    eyebrow:"ジャック・ルージュリー財団 · 2026 · 建築とイノベーション部門",
    subtitle:"動きつづける集落",
    lede:"かつて海の一部だったグランド・サント（ダンケルク）の干拓地で、上昇する水と共に暮らす集落。家は水位とともに浮き上がり、広場は水を受けとめ、約10年をかけて少しずつつくられていきます。",
    files:"プロジェクトファイル",
    site:"敷地", siteVal:"フランス、グランド・サント（ダンケルク）",
    author:"制作", authorVal:"Neo Shimane",
    category:"部門", categoryVal:"建築とイノベーション",
    download:"ダウンロード", open:"開く",
    preparing:"準備中…", confirm:"ダウンロードを確認してください…", saved:"保存しました。",
    unavailable:"ここではダウンロードできません。「開く」から保存してください。",
    declined:"ダウンロードをキャンセルしました。", busy:"別のダウンロードが確認待ちです。少し待ってからもう一度お試しください。",
    failed:"ダウンロードに失敗しました。「開く」から保存してください。",
    items:{
      poster:["コンペティションボード","A0 · 1ページ · PDF · 1.3 MB"],
      book:["プロジェクトブック","A3横 · 13ページ · PDF · 1.5 MB"],
      slides:["プレゼンテーション","16:9 · 2枚 · PDF · 0.7 MB"],
      film:["映像","1920×1080 · 0:53 · MP4 · 12 MB"]
    }
  },
  en:{
    eyebrow:"Fondation Jacques Rougerie · 2026 · Architecture & Innovation",
    subtitle:"",
    lede:"A settlement that lives alongside rising water on the Grande-Synthe polder, once part of the sea. Houses rise with the water, squares hold it, and the place is built gradually over about ten years.",
    files:"Project files",
    site:"Site", siteVal:"Grande-Synthe, Dunkirk, France",
    author:"Author", authorVal:"Neo Shimane",
    category:"Category", categoryVal:"Architecture & Innovation",
    download:"Download", open:"Open",
    preparing:"Preparing…", confirm:"Confirm the download…", saved:"Saved.",
    unavailable:"Download isn't available here. Use Open, then save from the viewer.",
    declined:"Download cancelled.", busy:"Another download is waiting. Try again in a moment.",
    failed:"Download failed. Use Open instead.",
    items:{
      poster:["Competition board","A0 · 1 page · PDF · 1.3 MB"],
      book:["Project book","A3 landscape · 13 pages · PDF · 1.5 MB"],
      slides:["Presentation","16:9 · 2 slides · PDF · 0.7 MB"],
      film:["Film","1920×1080 · 0:53 · MP4 · 12 MB"]
    }
  }
};
const FILES=[
  {id:"poster",src:"files/poster-a0.pdf",name:"A Settlement in Motion - A0 Board - Neo Shimane.pdf",img:"cover-poster.jpg"},
  {id:"book",src:"files/book.pdf",name:"A Settlement in Motion - Book - Neo Shimane.pdf",img:"cover-book.jpg"},
  {id:"slides",src:"files/presentation.pdf",name:"A Settlement in Motion - Presentation - Neo Shimane.pdf",img:"cover-slides.jpg"},
  {id:"film",src:"files/settlement-in-motion.mp4",name:"A Settlement in Motion - Film - Neo Shimane.mp4",img:"poster.jpg"}
];
let lang="ja";
const shelf=document.getElementById("shelf");
const cards={};
FILES.forEach(f=>{
  const el=document.createElement("article");el.className="item";
  el.innerHTML=`<div class="thumb"><img alt="" loading="lazy"></div><div class="body"><h3></h3><div class="spec"></div>
  <div class="actions"><a class="dl" id="dl-${f.id}"></a><a class="op" target="_blank" rel="noopener"></a></div><div class="status" aria-live="polite"></div></div>`;
  el.querySelector("img").src=f.img;
  const dl=el.querySelector("a.dl");dl.href=f.src;dl.setAttribute("download",f.name);
  el.querySelector("a.op").href=f.src;
  const st=el.querySelector(".status");
  cards[f.id]={el,st};
  shelf.appendChild(el);
});
function render(){
  const t=T[lang];
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(n=>{n.textContent=t[n.dataset.i18n]; n.hidden=!t[n.dataset.i18n];});
  FILES.forEach(f=>{
    const {el,st}=cards[f.id],[title,spec]=t.items[f.id];
    el.querySelector("h3").textContent=title;
    el.querySelector(".spec").textContent=spec;
    el.querySelector("img").alt=title;
    el.querySelector("a.dl").textContent=t.download;
    el.querySelector("a.op").textContent=t.open;
    st.textContent="";
  });
  document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.lang===lang)));
}
document.querySelectorAll(".lang button").forEach(b=>b.addEventListener("click",()=>{lang=b.dataset.lang;render();}));
render();

