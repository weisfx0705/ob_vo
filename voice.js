// 語音TTS處理函數
async function playTTS(text, apiKey, buttonElement) {
    try {
        // 如果文本超過300字，截斷到300字
        const trimmedText = text.length > 300 ? text.substring(0, 300) + "..." : text;
        
        // 從localStorage獲取設置
        const ttsVoice = localStorage.getItem('tts_voice') || 'onyx';
        let ttsInstructions = localStorage.getItem('tts_instructions');
        
        // 如果沒有保存的指令，使用預設的台灣風格指令
        if (!ttsInstructions) {
            ttsInstructions = `Voice: Deep, velvety, and effortlessly magnetic — like a late-night radio host in Taipei who's got a voice that makes hearts skip a beat.

Tone: Sultry and composed, with a tendency to speak intimately and draw the listener in.

Speech Mannerisms: Uses Taiwanese Mandarin with natural, relaxed phrasing; common expressions include "你懂的", "嘿～來聊聊", and often adds slight teasing pauses to create a flirtatious tone.

Pronunciation: Smooth and rounded, with slight nasal resonance and gentle tone-sandhi that reflects Taiwanese Mandarin's rhythm.

Tempo: Medium-fast, with a smooth, flowing pace that keeps the listener engaged without losing the sensual edge.`;
        }

        // 播放按鈕狀態更新
        if (buttonElement) {
            buttonElement.disabled = true;
            buttonElement.textContent = '播放中...';
        }

        // 發送請求到OpenAI API
        const response = await fetch('https://api.openai.com/v1/audio/speech', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini-tts",
                voice: ttsVoice,
                input: trimmedText,
                instructions: ttsInstructions,
                response_format: "mp3"
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || '語音合成發生錯誤');
        }

        // 將返回的音訊數據轉換為blob
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        
        // 創建音訊元素並播放
        const audio = new Audio(audioUrl);
        audio.play();
        
        // 監聽音訊播放完成事件
        audio.onended = () => {
            if (buttonElement) {
                buttonElement.disabled = false;
                buttonElement.textContent = '播放語音';
            }
            // 釋放資源
            URL.revokeObjectURL(audioUrl);
        };

    } catch (error) {
        console.error('TTS錯誤:', error);
        alert(`語音合成錯誤: ${error.message}`);
        
        // 重置播放按鈕狀態
        if (buttonElement) {
            buttonElement.disabled = false;
            buttonElement.textContent = '播放語音';
        }
    }
} 