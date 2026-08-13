const majors = [
  ["愚者","新的起點、信任直覺","欠缺準備、逃避責任"],["魔術師","主動創造、善用資源","能量分散、言行不一"],["女祭司","傾聽內在、耐心觀察","忽略直覺、祕而不宣"],["皇后","滋養成長、豐盛創意","過度付出、忽略自己"],["皇帝","建立秩序、穩定承擔","控制僵化、權責失衡"],["教皇","傳承學習、價值指引","挑戰慣例、尋找己見"],["戀人","真誠選擇、關係連結","價值衝突、猶豫不決"],["戰車","集中意志、向前推進","方向失焦、急於求成"],["力量","溫柔堅定、內在勇氣","自我懷疑、壓抑情緒"],["隱者","獨處反思、尋找真知","封閉孤立、逃避連結"],["命運之輪","週期轉動、把握機緣","抗拒變化、重複模式"],["正義","誠實衡量、承擔結果","偏見失衡、逃避責任"],["倒吊人","換個視角、暫停鬆手","徒勞犧牲、拖延停滯"],["死神","結束轉化、騰出空間","抗拒告別、停在過去"],["節制","調和節奏、耐心整合","失去分寸、能量失衡"],["惡魔","看見束縛、承認慾望","鬆開枷鎖、重拾自主"],["高塔","真相揭露、結構重建","害怕震盪、延遲必要改變"],["星星","恢復希望、真實敞開","失去信心、與願景斷線"],["月亮","穿越不安、辨認投射","迷霧漸散、恐懼可被看見"],["太陽","清晰喜悅、生命綻放","暫時低潮、快樂被遮蔽"],["審判","回應召喚、重新評估","自我苛責、拒絕醒來"],["世界","完成整合、進入新章","尚未收尾、缺少閉環"]
];
const suitData = {
  cups:{zh:"聖杯",file:"cups",meanings:[
    ["情感萌芽、心門開啟","情緒堵塞、錯過感受"],["互相理解、真誠合作","失和疏離、期待落差"],["共享喜悅、友誼支持","人際消耗、過度迎合"],["重新覺察、看見機會","走出冷淡、願意嘗試"],["允許失落、看見仍擁有的","困在遺憾、難以釋懷"],["回憶善意、單純連結","美化過去、停滯不前"],["選項繁多、辨認真正渴望","幻想散去、做出選擇"],["離開耗損、尋找更深意義","害怕離開、反覆徘徊"],["願望靠近、享受成果","空虛過度、滿足短暫"],["情感圓滿、歸屬和諧","家庭壓力、表面和睦"],["好奇感受、傳遞消息","情緒幼稚、訊息混亂"],["浪漫行動、跟隨心意","理想化、承諾不穩"],["情緒成熟、慈悲直覺","過度敏感、照顧失衡"],["穩定包容、情感智慧","壓抑情緒、被感受淹沒"]]},
  pents:{zh:"錢幣",file:"pents",meanings:[
    ["實際機會、穩健開端","機會延遲、基礎不穩"],["彈性調度、維持平衡","忙亂失衡、超出負荷"],["專業合作、磨練技藝","協作不良、品質不足"],["守住資源、建立安全","害怕失去、過度執著"],["面對匱乏、尋求支援","困境緩解、重建信心"],["公平給予、資源流動","交換失衡、附帶條件"],["耐心耕耘、評估進度","急於成果、投入無效"],["專注練習、日益精熟","完美主義、工作倦怠"],["獨立富足、享受累積","價值焦慮、依賴外在"],["長期穩定、傳承根基","家族壓力、短視損失"],["務實學習、好消息","缺乏計畫、進展遲緩"],["穩定前進、可靠承諾","僵化拖延、只顧例行"],["滋養現實、照顧身心","工作失衡、忽略需求"],["資源掌握、穩健領導","物質至上、固守權力"]]},
  swords:{zh:"寶劍",file:"swords",meanings:[
    ["真相突破、清楚決斷","思緒混亂、言語傷人"],["暫緩決定、保留空間","僵局鬆動、資訊超載"],["承認心痛、讓傷口呼吸","療癒開始、壓抑悲傷"],["休息整頓、恢復心力","難以放鬆、耗竭警訊"],["衝突代價、重新選擇","願意和解、放下爭勝"],["離開風浪、逐步過渡","背負舊事、抗拒前行"],["策略行動、保留判斷","真相曝光、欺瞞自己"],["限制多由信念形成","看見出口、取回選擇"],["焦慮浮現、需要支持","恐懼緩解、學會安頓"],["一個循環已到盡頭","復原開始、拒絕結束"],["敏銳觀察、求知溝通","流言猜疑、說話莽撞"],["快速推進、直指目標","衝動攻擊、方向失控"],["清晰界線、獨立判斷","冷酷批判、封閉心門"],["理性領導、公平決策","權威濫用、固執無情"]]},
  wands:{zh:"權杖",file:"wands",meanings:[
    ["靈感點燃、行動萌芽","熱情受阻、方向未明"],["規劃遠景、擴大視野","害怕未知、計畫受限"],["進展可期、等待回應","延遲受阻、期待落空"],["慶祝里程、安穩歸屬","基礎不穩、團體失和"],["良性競爭、觀點碰撞","衝突消散、壓抑異議"],["獲得肯定、信心上升","自負失落、渴望掌聲"],["守住立場、迎接挑戰","力氣耗盡、想要退讓"],["快速發展、訊息抵達","延誤混亂、節奏失控"],["保持韌性、最後防線","戒備過度、接近倦怠"],["責任沉重、需要分擔","放下負擔、重新排序"],["探索熱情、勇敢嘗試","三分鐘熱度、消息延遲"],["果斷冒險、全心投入","急躁冒進、難以持續"],["自信溫暖、感染他人","嫉妒不安、能量內耗"],["願景領導、大膽開創","霸道衝動、承諾不足"]]}
};
const ranks=["一","二","三","四","五","六","七","八","九","十","侍者","騎士","皇后","國王"];
const cards=[...majors.map((m,i)=>({id:`major-${String(i).padStart(2,"0")}`,name:m[0],up:m[1],rev:m[2],major:true,image:`assets/cards/major-${String(i).padStart(2,"0")}.jpg`}))];
Object.values(suitData).forEach(suit=>suit.meanings.forEach((m,i)=>cards.push({id:`${suit.file}-${String(i+1).padStart(2,"0")}`,name:`${suit.zh}${ranks[i]}`,up:m[0],rev:m[1],major:false,image:`assets/cards/${suit.file}-${String(i+1).padStart(2,"0")}.jpg`})));

const spreads={
  one:["此刻的指引"],
  three:["過去留下的影響","現在的核心","未來的發展方向"],
  five:["目前處境","需要跨越的阻礙","可運用的資源","最適合的行動","可能的發展趨勢"],
  relationship:["你在關係中的位置","對方的狀態","你們之間的連結","需要被看見的課題","關係的發展方向"]
};
const $=selector=>document.querySelector(selector);
const shuffleButton=$("#shuffle"), tableIntro=$("#table-intro"), drawArea=$("#draw-area"), tablePanel=$("#table-panel");
let currentDraw=[];

function secureShuffle(items){
  const a=[...items];
  const random=new Uint32Array(a.length);crypto.getRandomValues(random);
  for(let i=a.length-1;i>0;i--){const j=random[i]%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a;
}
function startReading(){
  const spread=document.querySelector('input[name="spread"]:checked').value;
  const positions=spreads[spread];
  const pool=$("#major-only").checked?cards.filter(c=>c.major):cards;
  const uprightOnly=$("#upright-only").checked;
  const directionBits=new Uint32Array(positions.length);crypto.getRandomValues(directionBits);
  currentDraw=secureShuffle(pool).slice(0,positions.length).map((card,i)=>({...card,reversed:!uprightOnly&&directionBits[i]%2===1,position:positions[i]}));
  shuffleButton.disabled=true;tablePanel.classList.add("is-shuffling");
  setTimeout(()=>{tablePanel.classList.remove("is-shuffling");renderDraw();shuffleButton.disabled=false;},950);
}
function renderDraw(){
  tableIntro.hidden=true;drawArea.classList.add("active");
  const question=$("#question").value.trim();
  drawArea.innerHTML=`<div class="draw-header"><div class="question-display">${question?`「${escapeHtml(question)}」`:"你此刻需要看見的訊息"}</div><p>依照直覺，逐張點擊牌背翻開</p></div><div class="cards-grid">${currentDraw.map((c,i)=>`<div class="card-slot"><p class="card-position">${c.position}</p><div class="tarot-card" role="button" tabindex="0" aria-label="翻開第 ${i+1} 張牌" data-index="${i}"><div class="card-inner"><div class="card-face card-back"></div><div class="card-face card-front ${c.reversed?"reversed":""}"><img src="${c.image}" alt="${c.name}${c.reversed?"逆位":"正位"}"></div></div></div><div class="card-summary"><h4>${c.name}</h4><span class="orientation">${c.reversed?"逆位":"正位"}</span><p>${c.reversed?c.rev:c.up}</p></div></div>`).join("")}</div><div class="draw-actions"><button type="button" id="reveal-all">全部翻開</button></div>`;
  drawArea.querySelectorAll(".tarot-card").forEach(el=>{el.addEventListener("click",()=>reveal(el));el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();reveal(el)}})});
  $("#reveal-all").addEventListener("click",()=>drawArea.querySelectorAll(".tarot-card").forEach((el,i)=>setTimeout(()=>reveal(el),i*170)));
  if(innerWidth<900)tablePanel.scrollIntoView({behavior:"smooth",block:"start"});
}
function reveal(el){if(el.classList.contains("revealed"))return;el.classList.add("revealed");el.setAttribute("aria-label",`${currentDraw[+el.dataset.index].name}，${currentDraw[+el.dataset.index].reversed?"逆位":"正位"}`)}
function escapeHtml(s){return s.replace(/[&<>'"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[ch]))}
shuffleButton.addEventListener("click",startReading);$("#year").textContent=new Date().getFullYear();
