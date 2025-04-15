document.addEventListener('DOMContentLoaded', () => {
    // DOM 元素
    const apiKeyInput = document.getElementById('api-key');
    const saveApiKeyBtn = document.getElementById('save-api-key');
    const ttsVoiceSelect = document.getElementById('tts-voice');
    const ttsInstructionsTextarea = document.getElementById('tts-instructions');
    const updateTtsBtn = document.getElementById('update-tts');
    const goToIndexBtn = document.getElementById('go-to-index');

    // 狀態變數
    let apiKey = localStorage.getItem('openai_api_key') || '';
    let ttsVoice = localStorage.getItem('tts_voice') || 'verse';
    let ttsInstructions = localStorage.getItem('tts_instructions') || '';

    // 預設的語音指令
    const defaultTtsInstructions = `Voice Affect: Calm, composed, and reassuring. Competent and in control, instilling trust.

Tone: Sincere, empathetic, with genuine concern for the message.

Pacing: Slower during key concepts to allow for clarity and processing. Faster when providing descriptions to signal engagement.

Emotions: Calm reassurance, interest, and thoughtful consideration.

Pronunciation: Clear, precise: Ensures clarity, especially with unfamiliar terms. Focus on key words.

Pauses: Natural pauses between English and Chinese parts to help distinguish the sections.`;

    // 初始化
    init();

    // 初始化函數
    function init() {
        // 載入API Key
        if (apiKey) {
            apiKeyInput.value = '********'; // 不顯示實際API Key
        }
        
        // 載入TTS語音
        ttsVoiceSelect.value = ttsVoice;
        
        // 載入TTS指令
        if (ttsInstructions) {
            ttsInstructionsTextarea.value = ttsInstructions;
        } else {
            // 如果沒有保存的指令，使用預設的
            ttsInstructionsTextarea.value = defaultTtsInstructions;
            ttsInstructions = defaultTtsInstructions;
            localStorage.setItem('tts_instructions', ttsInstructions);
        }
    }

    // 儲存API Key
    saveApiKeyBtn.addEventListener('click', () => {
        const newApiKey = apiKeyInput.value.trim();
        if (newApiKey && newApiKey !== '********') {
            apiKey = newApiKey;
            localStorage.setItem('openai_api_key', apiKey);
            apiKeyInput.value = '********';
            alert('API Key 已儲存！');
        } else if (newApiKey === '') {
            alert('請輸入有效的 API Key');
        }
    });
    
    // 更新TTS設定
    updateTtsBtn.addEventListener('click', () => {
        const newTtsVoice = ttsVoiceSelect.value;
        const newTtsInstructions = ttsInstructionsTextarea.value.trim();
        
        // 更新語音類型
        ttsVoice = newTtsVoice;
        localStorage.setItem('tts_voice', ttsVoice);
        
        // 更新指令
        if (newTtsInstructions) {
            ttsInstructions = newTtsInstructions;
            localStorage.setItem('tts_instructions', ttsInstructions);
        } else {
            // 如果指令為空，使用預設值
            ttsInstructions = defaultTtsInstructions;
            ttsInstructionsTextarea.value = defaultTtsInstructions;
            localStorage.setItem('tts_instructions', ttsInstructions);
        }
        
        alert('語音合成設定已更新！');
    });
    
    // 返回主頁
    goToIndexBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}); 