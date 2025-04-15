// 語音TTS處理函數
async function playTTS(text, apiKey, buttonElement) {
    try {
        // 如果文本超過300字，截斷到300字
        const trimmedText = text.length > 300 ? text.substring(0, 300) + "..." : text;
        
        // 從localStorage獲取設置
        const ttsVoice = localStorage.getItem('tts_voice') || 'verse';
        let ttsInstructions = localStorage.getItem('tts_instructions');
        
        // 如果沒有保存的指令，使用預設的台灣風格指令
        if (!ttsInstructions) {
            ttsInstructions = `Voice: Loud, punchy, and distinctly local — like a charismatic Taiwanese variety show host who's been hyping products for 20年 and still loves every second of it.

Tone: Over-the-top and full of sunshine, with a tendency to shout in excitement and keep the energy level cranked to max.

Speech Mannerisms: Uses Mandarin with a strong Taiwanese accent, tossing in classic expressions like "衝一波啦～", "哩敢有聽到～？", and "登登登～" for that extra flair. Often speaks like he's talking to a live crowd or in a街頭促銷場。

Pronunciation: Big and bold, with exaggerated intonation, high-low pitch jumps, and dragged-out syllables on key words to mimic traditional賣場播音風格.

Tempo: Very fast-paced, with energetic pauses and explosive delivery that keeps the momentum racing like a carnival ride.`;
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