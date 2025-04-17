// 卡牌數據
const cardData = [
    { id: 1, en: "Remove specifics and convert to ambiguities.", title: "刪除細節並轉換為模糊性", description: "別再抓著小眉小角不放，畫面模糊點才有想像空間。像拍照開濾鏡一樣，焦點太清楚只會讓創意變成說明書。" },
    { id: 2, en: "Think of the radio.", title: "想想收音機", description: "想像你的作品是一台收音機，突然轉台、走音、雜訊都可能比你那完美無趣的內容更有靈魂。偶爾當個天線不良的人，也挺酷。" },
    { id: 3, en: "Don't be frightened of clichés.", title: "不要害怕陳詞濫調", description: "老哏也是哏，經典不是沒原因。大不了把玫瑰變火焰，或讓夕陽開口說話，一點創意，老招也能變魔法。" },
    { id: 4, en: "What is the reality of the situation?", title: "什麼是現實狀況？", description: "現實到底是誰說了算？有時候搞清楚你到底身處現實還是幻想，才能安心地繼續做夢（或假裝你清醒著）。" },
    { id: 5, en: "Are there sections? Consider transitions.", title: "有分段嗎？考慮過渡", description: "段落之間不要硬轉彎，觀眾沒你轉得快。像過馬路一樣，記得設個斑馬線，給人走進你腦袋一點緩衝。" },
    { id: 6, en: "Turn it upside down.", title: "把它顛倒過來", description: "看膩了嗎？上下顛倒！像貓一樣躺在天花板上思考人生，搞不好反而看見原本忽略的笑點或亮點。" },
    { id: 7, en: "Allow an easement (an easement is the abandonment of a stricture).", title: "允許寬緩（寬緩是放棄一種限制）", description: "別再對自己那麼嚴格，放掉一條規則，會換來更多創造空間。創作不是高壓鍋，是氣球，鬆點才飛得起來。" },
    { id: 8, en: "Simple subtraction.", title: "簡單的減法", description: "少就是多，減法才是藝術的肌肉線條。試試把你作品裡最得意的那一筆刪掉，看看剩下的會不會更帥。" },
    { id: 9, en: "Go slowly all the way round the outside.", title: "慢慢地繞外圍走一圈", description: "別急著直搗黃龍，外圈也有風景。繞一繞、拖一下，有時靈感就在你「不想走那條路」的旁邊打招呼。" },
    { id: 10, en: "A line has two sides.", title: "一條線有兩面", description: "線不只是界線，也可能是通道。看事情別只看表面，想想它的反面，或它的暗戀對象。" },
    { id: 11, en: "Infinitesimal gradations.", title: "微小的漸變", description: "有時候改變不用像變魔術，微妙的轉折才讓人回頭再看一眼。像眉毛偷偷往上一挑——誰看不出你壞笑呢？" },
    { id: 12, en: "Make an exhaustive list of everything you might do and do the last thing on the list.", title: "列出你可能做的所有事情，然後做列表上的最後一件事", description: "寫清單是給大腦安全感的，最後一項是它壓根沒打算讓你做的。做那個，才是真挑戰（或是驚喜）。" },
    { id: 13, en: "Into the impossible.", title: "進入不可能", description: "不可能？才正中下懷。進去看看嘛，說不定裡面有沙發、冰箱，還有另一個你，正說「這也行欸」。" },
    { id: 14, en: "Ask people to work against their better judgment.", title: "請別人違背他們的最佳判斷來工作", description: "讓專業誤判一下沒關係，反正藝術不靠安全駕駛。讓理性的人失手一次，他可能創造出一朵迷人的災難花。" },
    { id: 15, en: "Take away the elements in order of apparent non-importance.", title: "按照表面上不重要的順序去除元素", description: "別從「不重要」開始刪，因為那搞不好才是精華。刪掉表面上無關緊要的，結果可能會意外炸出靈魂。" },
    { id: 16, en: "Change instrument roles.", title: "改變樂器角色", description: "鼓手當主唱、鋼琴當打擊，給工具們角色互換的機會。他們悶很久了，給他們上戲，看看誰偷藏了主角病。" },
    { id: 17, en: "Accretion.", title: "積累", description: "一點一滴堆起來的東西，最後會變大怪獸。別急著一次完成傑作，堆著堆著，傑作會自己走出來嚇你。" },
    { id: 18, en: "Disconnect from desire.", title: "斷絕欲望", description: "放下「我要成功」「我要特別」的欲望，你才能真的創作。藝術不是許願池，是你放空後留下來的那一滴水。" },
    { id: 19, en: "Emphasize repetitions.", title: "強調重複", description: "重複不是偷懶，是洗腦。多重複幾次，連你媽都能哼得出你的創作主題曲。記住：魔性來自重播。" },
    { id: 20, en: "Don't be afraid of things because they're easy to do.", title: "不要因為事情容易做而害怕它們", description: "簡單的事也值得被做，重點是你怎麼做。別怕做蛋炒飯，炒得讓人感動流淚，那就是料理神作。" },
    { id: 21, en: "Is there something missing?", title: "是否有什麼東西缺失？", description: "如果總覺得哪裡怪怪的，那它可能真的少了什麼。不妨大膽問問自己：「這作品裡有靈魂嗎？還是只是拼圖少一塊？」" },
    { id: 22, en: "Don't be frightened to display your talents.", title: "不要害怕展示你的才華", description: "別再裝低調，這不是選美，是你開演唱會。才華就像腹肌，藏起來沒人知道你練過，不如直接來場華麗轉身。" },
    { id: 23, en: "Breathe more deeply.", title: "深呼吸", description: "創作卡住了？深吸一口氣，不是為了冷靜，是給大腦送點氧氣。記住，最偉大的靈感來自吸入氧和吐出廢話之間。" },
    { id: 24, en: "Honor thy error as a hidden intention.", title: "尊重你的錯誤，視其為隱藏的意圖", description: "做錯了？不，是你無意中召喚了另一種宇宙的創意。這不是失誤，是平行世界的你偷偷塞給你的一條神祕訊息。" },
    { id: 25, en: "Only one element of each kind.", title: "每種元素僅有一個", description: "像辦桌一樣，每樣菜只上一盤，才吃得出重點。什麼都來一點只會變拼盤，讓觀眾吃到一半開始滑手機。" },
    { id: 26, en: "Use unqualified people.", title: "使用不合格的人", description: "大師會被規矩框死，反而是「不懂」的人最敢亂來。找個外行，讓他用樂高拼你的交響樂，說不定比你還有戲。" },
    { id: 27, en: "How would you have done it?", title: "你會怎麼做？", description: "想像作品不是現在的你在做，而是那個風格狂野、無所畏懼、還沒怕過失敗的你。問他：「你會怎麼搞？」" },
    { id: 28, en: "Emphasize differences.", title: "強調差異", description: "別再追求融合，讓不搭配的東西放在一起撞火花。就像芥末配巧克力，奇怪到讓人無法忽視，說不定還上癮。" },
    { id: 29, en: "Do nothing for as long as possible.", title: "儘量長時間什麼都不做", description: "創作不動，靈感才會主動來找你。有時候，最有效的動作就是當一尊佛，擺爛擺到出神。" },
    { id: 30, en: "Bridges -build -burn.", title: "橋樑 - 建立 - 燒毀", description: "先連結，再破壞。創作就是玩一場「我建了它，然後我親手炸了它」的爽片。炸得夠帥，觀眾只想鼓掌。" },
    { id: 31, en: "Water.", title: "水", description: "做什麼像水一樣？流動、無形、入杯成杯。也可能是提醒你喝水啦，創意卡住前，先補補腦部水庫。" },
    { id: 32, en: "You don't have to be ashamed of using your own ideas.", title: "不必為使用自己的想法感到羞恥", description: "「欸我這想法好像有點俗……」拜託，那是你腦袋原汁原味的產物，誰說不能用？自己的創意自己驕傲！" },
    { id: 33, en: "Tidy up.", title: "收拾整齊", description: "混亂不是創意的代名詞。偶爾清一下桌面，你會發現「啊！原來筆還有墨水」，靈感原來不是逃走了，而是被你壓在便當盒下。" },
    { id: 34, en: "Do the words need changing?", title: "需要更改詞語嗎？", description: "同一句話，換個字就能從佛經變饒舌。詞語是咒語，換個角度唸，它就從溫柔變犀利，從沉默變嘻哈。" },
    { id: 35, en: "Ask your body.", title: "問問你的身體", description: "別老問腦袋，問問肩膀、肚子、腳趾頭。它們有時候比你聰明，知道什麼讓你緊張、興奮或想跳舞。" },
    { id: 36, en: "Make a sudden destructive unpredictable action; incorporate.", title: "做一個突然的、破壞性的、不可預測的行動；整合", description: "就像在水墨畫裡撒番茄醬那樣——瘋狂一擊，再試著解釋為什麼它其實很深奧。意外越大，越值得收編。" },
    { id: 37, en: "Consult other sources.", title: "諮詢其他來源", description: "問Google也行，問貓更妙。別讓靈感只活在自己腦內，外面的世界可能早就有你想要的答案，只是你還沒問。" },
    { id: 38, en: "Use an unacceptable color.", title: "使用一種不可接受的顏色", description: "選一個讓設計師皺眉、你媽嫌俗的顏色，大膽用上去。說不定它就是這作品最狂的態度。" },
    { id: 39, en: "Humanize something free of error.", title: "人性化某些無誤的東西", description: "太完美反而讓人不信。讓你的程式碼打個噴嚏、讓節拍打個嗝，它就不再是工具，而是一位會犯錯的朋友。" },
    { id: 40, en: "Use filters.", title: "使用濾鏡", description: "不是IG才用濾鏡，創作也能套色、變聲、拉長、壓扁。濾鏡是掩飾也是扭曲，看世界變色，也讓世界重新看你。" },
    { id: 41, en: "Balance the consistency principle with the inconsistency principle.", title: "在一致性原則與不一致性原則之間取得平衡", description: "做一個既守規則又會偷跑的人。就像穿西裝配拖鞋，讓人猜不到你下一步會開會還是跳舞，這才是藝術家的浪漫。" },
    { id: 42, en: "Fill every beat with something.", title: "填滿每一個節拍", description: "怕空？那就來點密集攻擊。每個拍子都別放空，讓節奏密不透風——創作變成衝鋒陷陣，連呼吸都得排隊。" },
    { id: 43, en: "Discard an axiom.", title: "拋棄公理", description: "連數學都能改，那你憑什麼不能打破常規？別讓「常識」綁住你的小宇宙，拋開那條定理，飛去火星！" },
    { id: 44, en: "What wouldn't you do?", title: "你不會做什麼？", description: "最怕的東西，往往就是你該試的東西。列出你永遠不會做的事——然後做一次。不要怕失敗，怕的是太安全。" },
    { id: 45, en: "Decorate decorate.", title: "裝飾，裝飾", description: "美感過剩沒關係，反正你不是在做稅表。畫龍不只要點睛，還要戴金鍊、抹眼影、貼鑽石貼紙，藝術就該浮誇一點。" },
    { id: 46, en: "Listen to the quiet voice.", title: "聆聽安靜的聲音", description: "把世界音量調到靜音，仔細聽那一點點微小的、幾乎不存在的聲音。可能是靈感，也可能是你內心喊「我想吃炸雞」。" },
    { id: 47, en: "Is it finished?", title: "完成了嗎？", description: "你真的確定嗎？這不是問作品，是問你內心的焦慮。它會說：「還不夠完美！」你要回：「我有 deadline，掰。」" },
    { id: 48, en: "Put in earplugs.", title: "塞上耳塞", description: "外界太吵？把它關靜音。有時創作要靠自己腦內環繞音效，不然靈感都被鄰居裝潢聲嚇跑了。" },
    { id: 49, en: "Give the game away.", title: "放棄比賽", description: "這不是奧運，創作不用比快、比高、比美。有時候，最自由的作品就是你宣佈：「我不玩了，來亂的。」" },
    { id: 50, en: "Reverse.", title: "逆轉", description: "從最後一句話開始寫，從副歌開始唱。顛倒順序，讓時間也搞不清你想幹嘛，觀眾更不敢眨眼。" },
    { id: 51, en: "Abandon normal instruments.", title: "放棄正常的樂器", description: "不要老用鋼琴彈鋼琴，拿菜刀敲鍵盤、用吸塵器吹口哨都行。只要你敢，它就能發聲——不保證好聽，但一定獨特。" },
    { id: 52, en: "Use fewer notes.", title: "使用較少的音符", description: "別彈整排音階，彈一顆音也能讓人落淚。就像聊天一樣，有時候「嗯」勝過一整段論文。" },
    { id: 53, en: "Repetition is a form of change.", title: "重複是一種變化", description: "同樣一句話說三次，大家就會以為你在強調重點。再多說幾次，大家就會以為你是天才。真的，重複一下也不錯。" },
    { id: 54, en: "Give way to your worst impulse.", title: "順從你最壞的衝動", description: "心中那個瘋子在喊「畫一條龍黏在貓臉上！」？別壓抑他，放出來讓他亂搞一次，說不定他比你理性多了。" },
    { id: 55, en: "Trust in the you of now.", title: "信任現在的你", description: "不是昨天的你、不是理想的你，是此時此刻、有點餓又精神恍惚的你。這樣的你，說不定才能寫出奇蹟。" },
    { id: 56, en: "What would your closest friend do?", title: "你最親近的朋友會怎麼做？", description: "如果你不敢做，就問問那個總是衝第一、敢講爛笑話、敢裸奔的朋友。他會說：「啊？我早做了。」" },
    { id: 57, en: "Distorting time.", title: "扭曲時間", description: "拉長一秒、縮短一小節，把時間揉成麵糰。誰說你不能把10分鐘的作品變成一世紀的感覺？" },
    { id: 58, en: "Make a blank valuable by putting it in an exquisite frame.", title: "通過將空白放在精緻的框架中使其具有價值", description: "就像把白紙放在金框裡，它就不是沒畫，是「極簡」。有時候，把「什麼都沒做」包裝得漂亮，就是藝術。" },
    { id: 59, en: "The inconsistency principle.", title: "不一致性原則", description: "今天說A，明天說Z，才是創作的日常。別怕自打嘴巴，這叫風格多變，是專業級的矛盾藝術。" },
    { id: 60, en: "Ghost echoes.", title: "幽靈回聲", description: "有些東西，聽不到卻一直在。創作裡那些沒被說出的、差點留下的，都在後頭回音，讓人忍不住回頭。" },
    { id: 61, en: "You can only make one dot at a time.", title: "你一次只能做一個點", description: "不要想一步登天，你又不是火箭。一次畫一點、寫一筆、敲一聲，慢慢地，創作這幅圖就會冒出來像復仇者集結。" },
    { id: 62, en: "Just carry on.", title: "只要繼續", description: "靈感像電梯，按了不會馬上來，但你得站著等，不能走掉。繼續做、繼續磨，別管是不是進度條在裝死。" },
    { id: 63, en: "(Organic) machinery.", title: "（有機的）機械", description: "讓冷冰冰的流程長出葉子。機械不代表無情，程序中也可以藏詩意。你寫的程式碼，也可能偷偷會談戀愛。" },
    { id: 64, en: "Don't break the silence.", title: "不要打破沉默", description: "有時候最強的聲音是沉默。創作裡的空白、靜音、留白，才是讓觀眾喘氣、驚嘆、內心尖叫的地方。" },
    { id: 65, en: "Discover the recipes you are using and abandon them.", title: "發現你正在使用的配方並放棄它們", description: "別再拿那招「起承轉合」套用每一首曲、每一幅畫。揭穿自己的公式，再狠狠地把它扔掉，讓創作自己走路。" },
    { id: 66, en: "Cascades.", title: "瀑布", description: "讓一切傾瀉而出，不要控制、不要剪輯，直接把靈感整桶倒下來。別怕淹水，才知道哪裡有詩。" },
    { id: 67, en: "Courage!", title: "勇氣！", description: "創作像裸奔——總得跨出那一步才會自由。別管別人怎麼看，站上台、開口說、亂畫一筆，膽子比技巧重要。" },
    { id: 68, en: "What mistakes did you make last time?", title: "上次你犯了什麼錯誤？", description: "回顧一下那次你「啊啊啊啊」的時刻。那其實可能不是錯，只是你在繞路找驚喜，現在可以故意再犯一次看看。" },
    { id: 69, en: "You are an engineer.", title: "你是一名工程師", description: "你不只是藝術家，你還是結構師、解決者、工具王。美感可以浪漫，但背後的設計，記得用螺絲鎖緊。" },
    { id: 70, en: "Consider different fading systems.", title: "考慮不同的淡出系統", description: "結尾不是隨便 fade out 就了事。試試崩塌式淡出、消失在狗吠聲中、用錄音機爆炸收尾。反正觀眾都愛意外。" },
    { id: 71, en: "Mute and continue.", title: "靜音並繼續", description: "關掉聲音也能繼續走，像默片時代的電影。有時候，作品不需要你大聲說，只需要你安靜地堅持。" },
    { id: 72, en: "It is quite possible (after all).", title: "這是完全有可能的（畢竟）", description: "再瘋的想法，也不是不可能。畢竟連冰淇淋都能出香菜口味了，你的點子再奇怪也可能會紅。" },
    { id: 73, en: "Don't stress one thing more than another.", title: "不要強調某一件事超過其他事", description: "主角不是唯一重要的，群演也要戲份。讓每一個元素平等一點，作品自然就像一個和諧的暴動。" },
    { id: 74, en: "Remove ambiguities and convert to specifics.", title: "去除模糊並轉換為具體", description: "說「夢幻般的質感」不如直接說「像奶油裡摔進貓」。模糊會浪漫，但具體才能讓人邊笑邊點頭。" },
    { id: 75, en: "Look at the order in which you do things.", title: "看看你做事的順序", description: "靈感跑掉也許是因為你把鞋穿在頭上了。重新檢查流程，換個順序，也許作品就不再打結。" },
    { id: 76, en: "Go outside. Shut the door.", title: "出去關上門", description: "離開房間，讓創作自己思考人生。你不是靈感的保姆，給它一點空間，它說不定會在你轉身時寫出神作。" },
    { id: 77, en: "Do we need holes?", title: "我們需要洞嗎？", description: "可能需要。洞代表空間、未知、讓觀眾腦補的地方。你的作品不一定要是滿的，有洞也可以很飽滿。" },
    { id: 78, en: "Cluster analysis.", title: "群集分析", description: "把看似無關的東西集合起來，分析一下，搞不好你剛發明一個全新流派。像火鍋裡加冰淇淋——先別笑，試試再說。" },
    { id: 79, en: "Work at a different speed.", title: "以不同的速度工作", description: "慢一點像太極，快一點像搖滾。換個節奏，腦袋會被你搞到懵，然後說：「好啦好啦我給你一個靈感啦。」" },
    { id: 80, en: "Do something boring.", title: "做一些無聊的事情", description: "去掃地、洗碗、看螞蟻排隊——越無聊越好。腦袋在放空時最會偷偷工作，靈感常常在你打哈欠時偷溜進來。" },
    { id: 81, en: "Define an area as 'safe' and use it as an anchor.", title: "定義一個「安全」的區域並將其用作錨點", description: "當創作把你扯到宇宙邊緣，記得劃一塊「小被被區」。讓你知道，哪裡是可以安心崩潰的地方，哪裡可以原地重啟。" },
    { id: 82, en: "Overtly resist change.", title: "明顯地抵制改變", description: "偶爾就硬著頭皮不變，讓人以為你是固執鬼，實際上你在等那個變化自己上門。這種反向操作，有時候反而是王道。" },
    { id: 83, en: "Accept advice.", title: "接受建議", description: "聽聽別人怎麼說，哪怕他是喝醉的路人。有時候你需要一個外星觀點來提醒你：「欸你那個畫起來像番茄。」" },
    { id: 84, en: "Look closely at the most embarrassing details and amplify them.", title: "仔細觀察最令人尷尬的細節並放大它們", description: "創作裡那個「欸好像怪怪的」東西？別藏！拿放大鏡照它、給它燈光、讓它上台——可能你正在壓抑的就是笑點或亮點。" },
    { id: 85, en: "Mechanicalize something idiosyncratic.", title: "使某些特有的東西機械化", description: "把你最靈魂的那一筆程式化試試看。讓靈感上工廠變量產，看會不會產出一整排奇葩的創意兵團。" },
    { id: 86, en: "Emphasize the flaws.", title: "強調缺陷", description: "別修圖了！那一筆抖動、那個破音、那句語無倫次，就是作品的靈魂通道。美到完美叫無聊，美到怪才叫藝術。" },
    { id: 87, en: "Remember those quiet evenings.", title: "記住那些寧靜的夜晚", description: "想想那時候，窗外有風，你一個人創作到深夜，寧靜到可以聽見靈感咳嗽。那種時刻，是你創作的初戀。" },
    { id: 88, en: "Take a break.", title: "休息一下", description: "停下來不是浪費時間，是讓靈感追得上你。去喝杯咖啡、抱一下貓，回來會發現腦袋自己幫你把問題解了。" },
    { id: 89, en: "The tape is now the music.", title: "錄音帶現在就是音樂", description: "不用再剪了，現在這段亂七八糟的錄音，就是作品本體。就像穿睡衣出門，反而成了一種風格。" },
    { id: 90, en: "Short circuit (example; a man eating peas with the idea that they will improve his virility shovels them straight into his lap).", title: "短路（例如：一個男人吃豌豆，認為它們會增強他的男子氣概，卻直接把它們推到他的腿上）", description: "用荒謬擊碎邏輯。讓原本很正經的想法直接跳線成笑話，或哲學。亂來有時候，是另一種真理跳出來的方式。" },
    { id: 91, en: "Use an old idea.", title: "使用一個舊的想法", description: "舊點子沒過期，只是你變得太潮了。翻出你大一寫的怪句子、國小畫的太空狗，那些可能才是真材實料。" },
    { id: 92, en: "Destroy -nothing -the most important thing.", title: "破壞 - 無 - 最重要的東西", description: "這句話故意沒說清楚，你自己來補空格。搞不好那空白本身就比內容還重要，因為你得自己定義什麼才是「最重要」。" },
    { id: 93, en: "Change nothing and continue with immaculate consistency.", title: "什麼都不改變並以無可挑剔的一致性繼續", description: "偶爾也可以固執如機器人，完美如Excel表格。讓觀眾驚嘆：「這人怎麼可以這麼堅持一件怪事堅持到底？」" },
    { id: 94, en: "Imagine the music as a moving chain or caterpillar.", title: "想像音樂是一條移動的鏈條或毛毛蟲", description: "畫面感來了吧？它有節奏、有轉折、還可能冒出觸角。創作當成一種蠕動的生命體來操作，彈性多了。" },
    { id: 95, en: "Intentions -credibility of -nobility of -humility of.", title: "意圖 - 可信度 - 高尚 - 謙遜", description: "提醒自己不是為了炫技，而是誠實地表達點什麼。再厲害的技巧，也要服膺一點人味、一點真誠、一點笑點。" },
    { id: 96, en: "Imagine the music as a set of disconnected events.", title: "想像音樂是一組不相關的事件", description: "別想著「它要有邏輯」，讓作品像小行星亂飛，有爆炸、有轉場、有麥克風掉地上。混亂中有自己的秩序。" },
    { id: 97, en: "What are you really thinking about just now? Incorporate.", title: "你現在真的在想什麼？整合進來。", description: "是不是其實在想午餐吃什麼？好啊，那就讓午餐變成靈感的一部分，搞不好你下一段旋律就是「拉麵的湯頭在唱歌」。" },
    { id: 98, en: "Children's voices -speaking -singing.", title: "兒童的聲音 - 說話 - 唱歌", description: "想想小孩在亂吼時的直率，他們不管走音、詞不搭、節奏歪，全靠感覺。那種自由，才是靈感的本體。" },
    { id: 99, en: "Assemble some of the instruments in a group and treat the group.", title: "將一些樂器組合在一起並處理該組合", description: "樂器不是單打獨鬥的，把他們湊在一起，當個樂器版的召喚師，看看這組合會生出什麼奇妙混種怪物。" },
    { id: 100, en: "Shut the door and listen from outside.", title: "關上門，從外面聽", description: "創作完別急著檢查，關門、走開、從「不是你自己」的角度再聽一次。你會發現作品像貓一樣，有自己的秘密行為。" },
    { id: 101, en: "Is the tuning appropriate?", title: "調音是否合適？", description: "你確定那個「咿呀呀」的聲音真的是你想要的？有時候，只是少轉了一格，整首歌就從靈魂樂變成喪屍喊。" },
    { id: 102, en: "Look at a very small object. look at its centre.", title: "看一個非常小的物體，看看它的中心", description: "拿起一粒米、看進紙屑中心，那裡可能藏著宇宙的入口。越小的東西，越能打開你腦中被遺忘的房間。" },
    { id: 103, en: "Feedback recordings into an acoustic situation.", title: "將錄音反饋到聲音情境中", description: "讓聲音回到現場，自己跟自己打招呼。像把夢做成回音，一層層堆疊，創造一種「我怎麼又聽到我自己」的幻覺。" },
    { id: 104, en: "Towards the insignificant.", title: "朝向微不足道", description: "去找最不起眼的那一秒、那一筆、那一聲。它們就像靈感的忍者，潛藏在角落，一出場就爆擊。" },
    { id: 105, en: "Simply a matter of work.", title: "僅僅是工作問題", description: "不要懷疑人生，不是你沒天份，只是還沒做到那一步。創作卡關時，當它是加班：累是一定的，但薪水（靈感）會來。" },
    { id: 106, en: "Not building a wall but making a brick.", title: "不是在建牆，而是在做一塊磚", description: "你現在不是在打造偉大藝術，只是在做一小塊素材。別想太大，先把這塊磚做好，城堡會自己長出來。" },
    { id: 107, en: "Revaluation (a warm feeling).", title: "重新評價（一種溫暖的感覺）", description: "你曾經否定的東西，也許現在看起來挺可愛。回頭看看那些你嫌醜的段落，可能是藝術的初戀臉。" },
    { id: 108, en: "Disciplined self-indulgence.", title: "有紀律的自我放縱", description: "想要自由狂野？OK，但先定個規則，像「每天只能狂30分鐘」。有邊界的瘋狂，反而更精準。" },
    { id: 109, en: "The most important thing is the thing most easily forgotten.", title: "最重要的事情是最容易被遺忘的", description: "那個你一開始最想講的主題，可能早就被你畫風一轉甩在腦後。快回去找它，不然作品只剩殼。" },
    { id: 110, en: "Idiot glee.", title: "愚蠢的快樂", description: "別再假裝深沉，放縱那種「哈哈哈為什麼這麼蠢我好愛」的感覺。創作不需要全程高尚，有時候幼稚最爽。" },
    { id: 111, en: "Be extravagant.", title: "要奢侈", description: "創意有時候就該鋪張浪費。用三百軌配音錄「喵」一聲也可以，只要你開心，它就值得存在。" },
    { id: 112, en: "State the problem in words as clearly as possible.", title: "盡可能清楚地用語言表述問題", description: "別繞，說清楚你到底在卡什麼。把問題寫下來，不要藏在「我只是感覺怪怪的」裡面。講清楚，它才會放你走。" },
    { id: 113, en: "Always first steps.", title: "永遠是第一步", description: "每次創作都是全新的開始。就算已經寫到第99章，今天坐下來，還是得裝作剛起步的自己——純真又不怕死。" },
    { id: 114, en: "Question the heroic approach.", title: "質疑英雄式的方法", description: "不要老以為自己要像某某傳奇一樣創作。你不需要一人打十行程式、彈一整晚鋼琴，只要穩穩地做你能做的。" },
    { id: 115, en: "Always give yourself credit for having more than personality.", title: "永遠相信你自己擁有的不僅僅是個性", description: "你不是只有怪腔怪調而已，你其實有內涵、有技術、有天份（雖然你有時候忘了）。請記得，怪也是一種才華全餐。" },
    { id: 116, en: "Faced with a choice. do both.", title: "面臨選擇時，兩者皆選", description: "非得選A或B？不，這是創作，不是考試。你可以A+B，甚至A混B炸C。選擇障礙在這裡是一種超能力。" },
    { id: 117, en: "Tape your mouth.", title: "用膠帶封住你的嘴", description: "讓嘴巴閉嘴，讓手、眼、耳和本能說話。當你不能講話時，其他感官才會開始唱歌。" },
    { id: 118, en: "Twist the spine.", title: "扭動脊柱", description: "這不只是物理建議，也是比喻。當你身體動起來，靈感也會像果汁機一樣高速旋轉起來。" },
    { id: 119, en: "Get your neck massaged.", title: "按摩你的脖子", description: "身體卡，靈感就卡。按一按脖子，不只是放鬆，是告訴你的腦：「該讓創意流下來囉。」" },
    { id: 120, en: "Do the washing up.", title: "洗碗", description: "是的，就是去洗碗。不只是因為碗太多，而是洗碗這件事本身，是一種創作冥想。泡泡裡住著靈感。" },
    { id: 121, en: "Convert a melodic element into a rhythmic element.", title: "將旋律元素轉換為節奏元素", description: "那段旋律老是怪怪的？別唱它，打它。讓音符變鼓點，旋律變節奏，你會發現節奏也會唱歌。" },
    { id: 122, en: "Spectrum analysis.", title: "光譜分析", description: "不是要你當科學家，而是拆解看看你創作中的各種頻率與層次。有時候你以為是聲音問題，其實是色調歪掉。" },
    { id: 123, en: "Lowest common denominator check -single beat -single note -single riff.", title: "最低公分母檢查 - 單一節拍 - 單一音符 - 單一重複段", description: "精簡到底，直到你只剩一滴音、一拍節奏、一個重複段落。然後問自己：「我能不能用這顆原子做出宇宙？」" },
    { id: 124, en: "Listen in total darkness or in a very large room. very quietly.", title: "在完全黑暗中聽，或者在非常大的房間裡，非常安靜地聽", description: "換個聽覺環境，你才會發現哪裡有鬼、哪裡有金礦。有些聲音，只會在黑暗裡說實話。" },
    { id: 125, en: "Would anybody want it?", title: "會有人想要它嗎？", description: "問一下，不是討好觀眾，是讓你重新檢查自己：「我做這東西，是不是只有我自己會收藏？」也許答案是 yes，也沒關係。" },
    { id: 126, en: "Retrace your steps.", title: "回顧你的步驟", description: "創作失憶症發作時，請倒帶。你可能在某個步驟就埋下奇怪伏筆，導致現在整件事變成芭樂劇。回去看看，修正一下。" },
    { id: 127, en: "Go to an extreme. move back to a more comfortable place.", title: "走向極端，再回到一個更舒適的地方", description: "先狂一下沒關係，把作品推出宇宙，再慢慢拉回來。當你走過火星，地球就顯得超好住。" },
    { id: 128, en: "Once the search is in progress. something will be found.", title: "一旦搜索開始，將會找到一些東西", description: "別怕開始，就算一開始只是亂翻，靈感會偷偷躲進你的筆記裡。動起來，它會自己現身。" },
    { id: 129, en: "Only a part. not the whole.", title: "只有部分，不是整體", description: "別妄想一口氣吞下整隻大象。先啃一小塊，做一個角、一句話、一聲笑。拼圖會自己湊上來。" },
    { id: 130, en: "From nothing to more than nothing.", title: "從無到有", description: "創作就像煮泡麵，水還沒滾前看起來都是空的。一開始什麼都沒有，但你已經在做「有」了，別懷疑。" },
    { id: 131, en: "Be less critical more often.", title: "更頻繁地減少批判", description: "把內建的那個毒舌評論員靜音，他沒被邀請參加創作派對。創作的時候，請多點溫柔，少點自殘。" }
]; 
// DOM元素
const deckElement = document.getElementById('deck');
const shuffleBtn = document.getElementById('shuffleBtn');
const drawBtn = document.getElementById('drawBtn');
const resetBtn = document.getElementById('resetBtn');
const cardResult = document.getElementById('cardResult');
const drawnCardElement = document.getElementById('drawnCard');
const cardTitleElement = document.getElementById('cardTitle');
const cardDescriptionElement = document.getElementById('cardDescription');
const fullImageOverlay = document.getElementById('fullImageOverlay');
const fullImage = document.getElementById('fullImage');
const closeFullImageBtn = document.getElementById('closeFullImage');

// 狀態變量
let hasShuffled = false;
let cards = [];
let isShuffling = false;
let currentCardId = null;

// 初始化
function initCards() {
    deckElement.innerHTML = '';
    cards = [];
    
    // 創建131張卡牌，使用蓋牌圖像
    for (let i = 1; i <= 131; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = i;
        card.style.backgroundImage = `url('card/ob_back.png')`;
        card.style.transform = `translateZ(${-i * 0.5}px)`;
        deckElement.appendChild(card);
        cards.push(card);
    }
}

// 切牌動畫
function shuffleCards() {
    if (isShuffling || hasShuffled) return;
    
    isShuffling = true;
    shuffleBtn.disabled = true;
    
    // 分成上下兩疊
    const halfIndex = Math.floor(cards.length / 2);
    const topHalf = cards.slice(0, halfIndex);
    const bottomHalf = cards.slice(halfIndex);
    
    // 使用anime.js做切牌動畫
    const timeline = anime.timeline({
        easing: 'easeInOutSine',
        complete: function() {
            // 洗牌算法
            cards = shuffleArray([...cards]);
            
            // 重新排列卡片的Z位置
            cards.forEach((card, index) => {
                card.style.transform = `translateZ(${-index * 0.5}px)`;
                card.style.zIndex = cards.length - index;
            });
            
            hasShuffled = true;
            
            // 切完牌後立即可以抽牌
            drawBtn.disabled = false;
            
            isShuffling = false;
        }
    });
    
    // 上半部分移動
    timeline.add({
        targets: topHalf,
        translateX: '120%',
        duration: 800
    });
    
    // 下半部分移動
    timeline.add({
        targets: bottomHalf,
        translateX: '-120%',
        duration: 800
    }, '-=800');
    
    // 合併卡牌
    timeline.add({
        targets: [...topHalf, ...bottomHalf],
        translateX: 0,
        duration: 800
    });
}

// 抽牌動畫
function drawCard() {
    if (!hasShuffled) return;
    
    drawBtn.disabled = true;
    shuffleBtn.disabled = true;
    
    // 隨機選擇一張卡
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];
    const cardId = parseInt(selectedCard.dataset.id);
    currentCardId = cardId; // 保存當前卡片ID
    
    // 使用anime.js做抽牌動畫
    anime.timeline({
        easing: 'easeOutQuad'
    }).add({
        targets: selectedCard,
        translateY: '-100px',
        translateZ: '50px',
        rotateY: '180deg',
        scale: 1.5,
        opacity: 0,
        duration: 1000,
        complete: function() {
            // 顯示結果區域
            drawnCardElement.src = `card/ob_${String(cardId).padStart(3, '0')}.png`;
            
            // 找到對應的卡牌數據
            const cardInfo = cardData.find(card => card.id === cardId);
            
            if (cardInfo) {
                cardTitleElement.textContent = cardInfo.title;
                cardDescriptionElement.textContent = cardInfo.description;
                
                // 創建或獲取按鈕容器
                let buttonContainer = document.getElementById('buttonContainer');
                if (!buttonContainer) {
                    buttonContainer = document.createElement('div');
                    buttonContainer.id = 'buttonContainer';
                    buttonContainer.className = 'button-container';
                    cardResult.appendChild(buttonContainer);
                }
                
                // 創建播放本地音檔按鈕
                if (!document.getElementById('playAudioBtn')) {
                    const playAudioBtn = document.createElement('button');
                    playAudioBtn.id = 'playAudioBtn';
                    playAudioBtn.className = 'btn audio-btn';
                    playAudioBtn.textContent = '播放語音';
                    
                    // 將播放按鈕放入按鈕容器
                    buttonContainer.appendChild(playAudioBtn);
                    
                    // 為播放按鈕添加事件監聽器
                    playAudioBtn.addEventListener('click', function() {
                        playLocalAudio(cardId, this);
                    });
                } else {
                    // 如果按鈕已存在，重置其狀態
                    const playAudioBtn = document.getElementById('playAudioBtn');
                    playAudioBtn.disabled = false;
                    playAudioBtn.textContent = '播放語音';
                }
                
                // 將重新開始按鈕移至按鈕容器中
                resetBtn.remove(); // 從原位置移除
                buttonContainer.appendChild(resetBtn);
                
                // 添加點擊卡片顯示大圖功能
                drawnCardElement.onclick = showFullImage;
            }
            
            // 隱藏牌堆和按鈕，顯示結果
            deckElement.style.display = 'none';
            shuffleBtn.style.display = 'none';
            drawBtn.style.display = 'none';
            
            // 顯示結果
            cardResult.style.display = 'flex';
        }
    });
}

// 顯示大圖功能
function showFullImage() {
    if (currentCardId) {
        fullImage.src = `card_big/ob_${String(currentCardId).padStart(3, '0')}.png`;
        fullImageOverlay.style.display = 'flex';
        
        // 添加簡單的動畫效果
        anime({
            targets: fullImage,
            scale: [0.9, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }
}

// 關閉大圖功能
function closeFullImage() {
    anime({
        targets: fullImage,
        scale: [1, 0.9],
        opacity: [1, 0],
        duration: 300,
        easing: 'easeOutQuad',
        complete: function() {
            fullImageOverlay.style.display = 'none';
        }
    });
}

// 重置功能
function resetGame() {
    hasShuffled = false;
    currentCardId = null;
    
    // 重新顯示牌堆和按鈕
    deckElement.style.display = 'block';
    shuffleBtn.style.display = 'inline-block';
    shuffleBtn.disabled = false;
    drawBtn.style.display = 'inline-block';
    drawBtn.disabled = true;
    
    // 隱藏結果區域
    cardResult.style.display = 'none';
    
    // 移除音頻播放按鈕和按鈕容器(如果存在)
    const playAudioBtn = document.getElementById('playAudioBtn');
    if (playAudioBtn) {
        playAudioBtn.remove();
    }
    
    const buttonContainer = document.getElementById('buttonContainer');
    if (buttonContainer) {
        buttonContainer.remove();
    }
    
    // 移除卡片點擊事件
    drawnCardElement.onclick = null;
    
    // 重新初始化卡牌
    initCards();
}

// 洗牌算法（Fisher-Yates）
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 事件監聽器
shuffleBtn.addEventListener('click', shuffleCards);
drawBtn.addEventListener('click', drawCard);
resetBtn.addEventListener('click', resetGame);
closeFullImageBtn.addEventListener('click', closeFullImage);

// 點擊背景也可以關閉大圖
fullImageOverlay.addEventListener('click', function(e) {
    if (e.target === fullImageOverlay) {
        closeFullImage();
    }
});

// 頁面加載時初始化
window.addEventListener('DOMContentLoaded', initCards); 