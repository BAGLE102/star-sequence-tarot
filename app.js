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
Object.assign(spreads,{
  two:["目前的狀態","適合採取的回應"],
  mindbody:["身體正在訴說的訊息","內心真正的感受","靈性與長期方向"],
  choice:["你目前的位置","選擇 A 的助力","選擇 A 的課題","選擇 B 的助力","選擇 B 的課題"],
  horseshoe:["過去的影響","現在的處境","正在形成的趨勢","最適合的態度","外在環境","需要留意的阻礙","可能的結果"],
  celtic:["問題核心","交叉的挑戰","意識中的目標","深層根源","近期過去","近期未來","你的立場","外在環境","希望與恐懼","長期發展"]
});
const $=selector=>document.querySelector(selector);
const shuffleButton=$("#shuffle"), tableIntro=$("#table-intro"), drawArea=$("#draw-area"), tablePanel=$("#table-panel");
let currentDraw=[];
let ritualDeck=[],ritualPositions=[],ritualSelected=[],ritualShuffleCount=0,manualGatherCards=null;

function getMode(){return document.querySelector('input[name="mode"]:checked')?.value||"quick"}
function currentQuestion(){return $("#question").value.trim()}
function haptic(pattern=12){
  if("vibrate" in navigator){
    const pulses=Array.isArray(pattern)?pattern:[pattern];
    try{navigator.vibrate(pulses)}catch(error){/* Haptics are optional. */}
  }
}

function secureShuffle(items){
  const a=[...items];
  const random=new Uint32Array(a.length);crypto.getRandomValues(random);
  for(let i=a.length-1;i>0;i--){const j=random[i]%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a;
}
function startReading(){
  if(getMode()==="ritual"){startRitual();return}
  const spread=document.querySelector('input[name="spread"]:checked').value;
  const positions=spreads[spread];
  const pool=$("#major-only").checked?cards.filter(c=>c.major):cards;
  const uprightOnly=$("#upright-only").checked;
  const directionBits=new Uint32Array(positions.length);crypto.getRandomValues(directionBits);
  currentDraw=secureShuffle(pool).slice(0,positions.length).map((card,i)=>({...card,reversed:!uprightOnly&&directionBits[i]%2===1,position:positions[i]}));
  tableIntro.hidden=true;drawArea.classList.add("active");
  drawArea.innerHTML=`<div class="ritual-screen quick-shuffle-screen"><p class="table-kicker">THE CARDS ARE MOVING</p><div class="ritual-deck is-mixing" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><h3>正在洗牌</h3><p>讓牌序離開原本的位置，回到你的問題。</p></div>`;
  shuffleButton.disabled=true;tablePanel.classList.add("is-shuffling");haptic([10,35,10]);
  setTimeout(()=>{tablePanel.classList.remove("is-shuffling");renderDraw();shuffleButton.disabled=false;},1150);
}

function startRitual(){
  const spread=document.querySelector('input[name="spread"]:checked').value;
  ritualPositions=spreads[spread];
  const pool=$("#major-only").checked?cards.filter(c=>c.major):cards;
  ritualDeck=secureShuffle(pool);
  ritualSelected=[];ritualShuffleCount=0;
  tableIntro.hidden=true;drawArea.classList.add("active");
  renderRitualStage("prepare");
  if(innerWidth<900)tablePanel.scrollIntoView({behavior:"smooth",block:"start"});
}

function ritualSteps(active){
  const labels=["理牌","洗牌","切牌","選牌"];
  const activeIndex=labels.indexOf(active);
  return `<ol class="ritual-steps">${labels.map((label,i)=>`<li class="${i<activeIndex?"done":i===activeIndex?"active":""}"><span>${i<activeIndex?"✓":i+1}</span>${label}</li>`).join("")}</ol>`;
}

function renderRitualStage(stage){
  const question=currentQuestion();
  const header=`<div class="draw-header"><div class="question-display">${question?`「${escapeHtml(question)}」`:"你此刻需要看見的訊息"}</div><p>完整儀式 · ${ritualPositions.length} 張牌</p></div>`;
  if(stage==="prepare"){
    drawArea.innerHTML=`${header}${ritualSteps("理牌")}<div class="ritual-screen"><p class="table-kicker">GATHER THE DECK</p><div class="ritual-deck gathering" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><h3>先把牌理回一疊</h3><p>把散亂的注意力收回來，確認問題後再開始洗牌。</p><button class="ritual-primary" data-ritual="organize">理好牌，開始洗牌</button></div>`;
  }
  if(stage==="shuffle"){
    drawArea.innerHTML=`${header}${ritualSteps("洗牌")}<div class="manual-shuffle"><div class="tabletop-head"><div><p class="table-kicker">MANUAL SHUFFLE TABLE</p><h3>用手把牌推散、混合</h3><p>牌已先為你散開。按住桌面上的牌來回撥動，每一張都會跟著你的手勢移動。</p></div><div class="tabletop-tools" aria-label="牌桌工具"><button class="active" type="button" aria-pressed="true">⌁ 洗牌</button><button type="button" data-table-action="gather">▱ 理牌</button><button type="button" data-table-action="scatter">✦ 重新散牌</button></div></div><div class="mixing-table" id="mixing-table" role="application" tabindex="0" aria-label="自由洗牌桌，按住並拖曳牌堆">${Array.from({length:40},(_,i)=>`<i class="loose-card" data-loose-card="${i}" aria-hidden="true"><span>✦</span></i>`).join("")}<div class="table-cursor-hint" id="table-cursor-hint"><b>按住任一區域</b><span>來回推動洗牌</span></div></div><div class="mix-feedback"><div><span id="mix-label">牌已打散，開始來回推動</span><strong id="mix-count">0 次手勢</strong></div><i><b id="mix-level"></b></i></div><div class="ritual-actions"><button class="ritual-primary ritual-finish" data-ritual="to-cut" disabled><span>完成洗牌</span><small>再完成 3 次有效手勢</small></button></div><p class="gesture-help">可自由洗任意次數；完成三次有效手勢後即可進入切牌</p></div>`;
    bindManualShuffleTable();
  }
  if(stage==="cut"){
    drawArea.innerHTML=`${header}${ritualSteps("切牌")}<div class="manual-cut"><div class="cut-heading"><p class="table-kicker">CUT THE DECK</p><h3>選一張牌，從那裡開始切</h3><p>${ritualDeck.length} 張牌全部展開如下。憑直覺點選一張牌背，該位置會成為新牌序的起點。</p></div><div class="all-card-grid cut-all-grid" role="group" aria-label="全部切牌位置">${ritualDeck.map((card,i)=>`<button class="all-card cut-grid-card" data-cut-index="${i}" aria-label="從第 ${i+1} 張牌的位置切牌"><span>✦</span><small>${i+1}</small></button>`).join("")}</div><p class="cut-choice" id="cut-choice">請從上方全部牌中選擇切牌位置</p></div>`;
    drawArea.querySelectorAll("[data-cut-index]").forEach(button=>button.addEventListener("click",()=>cutRitualDeckAtIndex(Number(button.dataset.cutIndex),button)));
  }
  if(stage==="select"){
    drawArea.innerHTML=`${header}${ritualSteps("選牌")}<div class="selection-head"><div><p class="table-kicker">CHOOSE YOUR CARDS</p><h3>一張一張，選出你的牌</h3></div><strong id="selected-count">0 / ${ritualPositions.length}</strong></div><p class="fan-hint">${ritualDeck.length} 張牌全部展開如下；選中的牌會依序對應牌位。</p><div class="selected-tray" id="selected-tray">${ritualPositions.map((p,i)=>`<div><span>${i+1}</span><small>${p}</small></div>`).join("")}</div><div class="all-card-grid select-all-grid" role="group" aria-label="全部可選塔羅牌">${ritualDeck.map((card,i)=>`<button class="all-card select-grid-card" data-card-index="${i}" aria-label="選擇第 ${i+1} 張牌"><span>✦</span><small>${i+1}</small></button>`).join("")}</div><div class="draw-actions"><button type="button" id="finish-selection" disabled>完成抽牌，開始翻牌</button></div>`;
    drawArea.querySelectorAll("[data-card-index]").forEach(button=>button.addEventListener("click",()=>chooseRitualCard(button)));
  }
  drawArea.querySelectorAll("[data-ritual]").forEach(button=>button.addEventListener("click",()=>handleRitualAction(button.dataset.ritual)));
}

function handleRitualAction(action){
  if(action==="organize"){
    const deck=drawArea.querySelector(".ritual-deck");deck?.classList.add("is-gathered");haptic([18,30,12]);
    setTimeout(()=>renderRitualStage("shuffle"),650);
  }
  if(action==="to-cut"&&ritualShuffleCount>=3)finishManualShuffle();
}

function bindManualShuffleTable(){
  const table=$("#mixing-table"),cards=[...drawArea.querySelectorAll(".loose-card")];if(!table)return;
  const states=cards.map((card,i)=>({x:(i%5-2)*.7,y:(i%7-3)*.45,r:(i%3-1)*.22}));
  let dragging=false,lastX=0,lastY=0,travel=0;
  const bounds=()=>({x:Math.max(75,table.clientWidth/2-38),y:Math.max(90,table.clientHeight/2-58)});
  const paint=(transition=true)=>cards.forEach((card,i)=>{const s=states[i];card.style.transition=transition?"transform .52s cubic-bezier(.2,.8,.2,1),box-shadow .2s":"none";card.style.transform=`translate(calc(-50% + ${s.x}px),calc(-50% + ${s.y}px)) rotate(${s.r}deg)`;card.style.zIndex=String(i+1)});
  const registerMix=()=>{
    ritualShuffleCount++;ritualDeck=secureShuffle(ritualDeck);haptic([7,16,9]);
    const level=Math.min(100,ritualShuffleCount/5*100),label=$("#mix-label"),count=$("#mix-count"),bar=$("#mix-level"),finish=drawArea.querySelector('[data-ritual="to-cut"]');
    if(label)label.textContent=ritualShuffleCount<3?"牌序正在鬆開":ritualShuffleCount<5?"牌序已充分混合":"牌序已深度混合";
    if(count)count.textContent=`${ritualShuffleCount} 次手勢`;if(bar)bar.style.width=`${level}%`;if(finish){finish.disabled=ritualShuffleCount<3;const hint=finish.querySelector("small");if(hint)hint.textContent=ritualShuffleCount<3?`再完成 ${3-ritualShuffleCount} 次有效手勢`:"進入切牌"}
  };
  const gather=()=>{states.forEach((s,i)=>{s.x=(i%4-1.5)*.45;s.y=(i%6-2.5)*.32;s.r=(i%3-1)*.15});paint();table.classList.add("is-gathering");setTimeout(()=>table.classList.remove("is-gathering"),560);haptic(12)};
  const scatter=(countGesture=true)=>{const b=bounds();states.forEach((s,i)=>{s.x=(Math.random()-.5)*b.x*1.75;s.y=(Math.random()-.5)*b.y*1.65;s.r=(Math.random()-.5)*38;s.z=i});paint();table.classList.add("is-scattered");setTimeout(()=>table.classList.remove("is-scattered"),560);if(countGesture)registerMix()};
  const stir=(clientX,clientY,dx,dy)=>{
    const rect=table.getBoundingClientRect(),localX=clientX-rect.left-rect.width/2,localY=clientY-rect.top-rect.height/2,b=bounds(),radius=Math.min(150,rect.width*.3);
    states.forEach((s,i)=>{const distance=Math.hypot(s.x-localX,s.y-localY);if(distance>radius)return;const force=1-distance/radius,twist=i%2?1:-1;s.x=Math.max(-b.x,Math.min(b.x,s.x+dx*(.55+force*1.7)-dy*.18*twist));s.y=Math.max(-b.y,Math.min(b.y,s.y+dy*(.55+force*1.7)+dx*.18*twist));s.r+=dx*.045*twist+dy*.025;cards[i].style.zIndex=String(100+i)});paint(false)
  };
  table.addEventListener("pointerdown",event=>{dragging=true;travel=0;lastX=event.clientX;lastY=event.clientY;table.classList.add("is-stirring");table.setPointerCapture?.(event.pointerId);$("#table-cursor-hint")?.classList.add("hidden");haptic(6)});
  table.addEventListener("pointermove",event=>{if(!dragging)return;const dx=event.clientX-lastX,dy=event.clientY-lastY;travel+=Math.hypot(dx,dy);stir(event.clientX,event.clientY,dx,dy);lastX=event.clientX;lastY=event.clientY});
  const end=event=>{if(!dragging)return;dragging=false;table.classList.remove("is-stirring");if(table.hasPointerCapture?.(event.pointerId))table.releasePointerCapture(event.pointerId);if(travel>34)registerMix()};
  table.addEventListener("pointerup",end);table.addEventListener("pointercancel",end);table.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();scatter()}});
  drawArea.querySelectorAll('[data-table-action="gather"]').forEach(button=>button.addEventListener("click",gather));
  drawArea.querySelectorAll('[data-table-action="scatter"]').forEach(button=>button.addEventListener("click",()=>scatter(true)));
  paint(false);
  manualGatherCards=gather;
  setTimeout(()=>scatter(false),120);
}

function finishManualShuffle(){manualGatherCards?.();setTimeout(()=>renderRitualStage("cut"),620)}

function cutRitualDeckAtIndex(index,button){
  drawArea.querySelectorAll(".cut-grid-card").forEach(card=>card.disabled=true);button.classList.add("selected","cut-chosen");
  ritualDeck=[...ritualDeck.slice(index),...ritualDeck.slice(0,index)];
  const choice=$("#cut-choice");if(choice)choice.textContent=`已選擇第 ${index+1} 張牌，正在重新整理牌序⋯`;
  haptic([12,24,18]);setTimeout(()=>renderRitualStage("select"),760);
}

function bindFanNavigation(){
  const fan=$("#card-fan"),previous=drawArea.querySelector(".fan-prev"),next=drawArea.querySelector(".fan-next");
  if(!fan||!previous||!next)return;
  let dragging=false,startX=0,startScroll=0,moved=false;
  const page=()=>Math.max(180,fan.clientWidth*.78);
  const update=()=>{
    const maximum=Math.max(0,fan.scrollWidth-fan.clientWidth),ratio=maximum?fan.scrollLeft/maximum:0;
    previous.disabled=fan.scrollLeft<=2;next.disabled=fan.scrollLeft>=maximum-2;
    const progress=$("#fan-progress"),range=$("#fan-range");
    if(progress)progress.style.width=`${Math.max(8,ratio*100)}%`;
    if(range){const first=Math.min(ritualDeck.length,Math.floor(ratio*Math.max(0,ritualDeck.length-1))+1);range.textContent=`瀏覽位置 ${first} / ${ritualDeck.length}`}
  };
  const move=direction=>fan.scrollBy({left:direction*page(),behavior:"smooth"});
  previous.addEventListener("click",()=>move(-1));next.addEventListener("click",()=>move(1));
  fan.addEventListener("pointerdown",event=>{dragging=true;moved=false;startX=event.clientX;startScroll=fan.scrollLeft});
  fan.addEventListener("pointermove",event=>{
    if(!dragging)return;
    const distance=event.clientX-startX;
    if(Math.abs(distance)>8&&!moved){moved=true;fan.classList.add("is-dragging");fan.setPointerCapture?.(event.pointerId)}
    if(moved)fan.scrollLeft=startScroll-distance;
  });
  const endDrag=event=>{dragging=false;fan.classList.remove("is-dragging");if(fan.hasPointerCapture?.(event.pointerId))fan.releasePointerCapture(event.pointerId)};
  fan.addEventListener("pointerup",endDrag);fan.addEventListener("pointercancel",endDrag);
  fan.addEventListener("click",event=>{if(moved){event.preventDefault();event.stopPropagation();moved=false}},true);
  fan.addEventListener("wheel",event=>{if(Math.abs(event.deltaY)>Math.abs(event.deltaX)){event.preventDefault();fan.scrollLeft+=event.deltaY}},{passive:false});
  fan.addEventListener("keydown",event=>{if(event.key==="ArrowLeft"){event.preventDefault();move(-1)}if(event.key==="ArrowRight"){event.preventDefault();move(1)}});
  fan.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",update,{once:true});update();
}

function chooseRitualCard(button){
  if(button.disabled||ritualSelected.length>=ritualPositions.length)return;
  const index=Number(button.dataset.cardIndex),card=ritualDeck[index];
  const bit=new Uint32Array(1);crypto.getRandomValues(bit);
  const reversed=!$("#upright-only").checked&&bit[0]%2===1;
  ritualSelected.push({...card,reversed,position:ritualPositions[ritualSelected.length]});
  button.disabled=true;button.classList.add("selected");button.innerHTML=`<b>${ritualSelected.length}</b><span>✦</span><small>${index+1}</small>`;haptic(15);
  const count=$("#selected-count");if(count)count.textContent=`${ritualSelected.length} / ${ritualPositions.length}`;
  const tray=$("#selected-tray");const slot=tray?.children[ritualSelected.length-1];slot?.classList.add("filled");
  if(slot)slot.querySelector("span").textContent="✦";
  const finish=$("#finish-selection");
  if(ritualSelected.length===ritualPositions.length){finish.disabled=false;finish.addEventListener("click",()=>{currentDraw=[...ritualSelected];renderDraw();haptic([12,25,12])},{once:true})}
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
function updateModeCopy(){
  const ritual=getMode()==="ritual";
  $("#start-label").textContent=ritual?"進入完整儀式":"洗牌並開始";
  $("#start-hint").textContent=ritual?"理牌・洗牌・切牌・親手選牌":"準備好後，深呼吸三次";
}
document.querySelectorAll('input[name="mode"]').forEach(input=>input.addEventListener("change",updateModeCopy));
shuffleButton.addEventListener("click",startReading);updateModeCopy();$("#year").textContent=new Date().getFullYear();
