let knowledgeBase = "";

// Nạp dữ liệu khi vào trang
window.onload = async () => {
    try {
        const res = await fetch(CONFIG.CSV_URL);
        knowledgeBase = await res.text();
        document.getElementById('status').style.display = 'none';
        addMessage('ai', "Chào fen! Tui là Thổ Địa đây. Fen muốn tìm quán gì hay lên lịch trình đi đâu không?");
    } catch (e) {
        document.getElementById('status').innerText = "❌ Lỗi nạp dữ liệu!";
    }
};

async function handleChat() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    if (!text || !knowledgeBase) return;

    addMessage('user', text);
    input.value = '';

    const loadingId = 'loading-' + Date.now();
    addMessage('ai', `
        <div class="typing" id="${loadingId}">
            <span>Thổ địa đang tính...</span>
            <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        </div>
    `);

    try {
        const response = await fetch(CONFIG.WORKER_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: CONFIG.SYSTEM_PROMPT(knowledgeBase) + "\n\nKhách: " + text
            })
        });

        const data = await response.json();
        const aiMsg = data.candidates[0].content.parts[0].text;
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) {
            loadingElement.closest('.msg').innerHTML = marked.parse(aiMsg);
        }
    } catch (err) {
        document.getElementById(loadingId).closest('.msg').innerText = "Lỗi kết nối rồi fen!";
    }
}

function addMessage(role, content) {
    const chatBox = document.getElementById('chat-box');
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    div.innerHTML = role === 'ai' && !content.includes('typing') ? marked.parse(content) : content;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}
