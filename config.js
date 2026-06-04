// config.js
const CONFIG = {
    // 🚨 Giữ nguyên 2 đường link chuẩn của fen trên app test
    CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnXggiUJriOBPHz05pt01aIq_qaCDeQAcWpyYTG6zx1XI9WzfVDTbb8rPwYPf2w8uHxeDpx3Tznx53/pub?gid=615358788&single=true&output=csv",
    WORKER_URL: "https://ai-test.kyuu2601.workers.dev",
    
    // 🔥 HÀM CHA ĐIỀU PHỐI PROMPT ĐỘNG THEO CHUYÊN MỤC TỪ KHÓA
    // Thằng này sẽ tự bốc data từ DALAT_KEYWORDS và DALAT_PROMPTS đang nằm trên RAM để xử lý
    SYSTEM_PROMPT: function(userMessage, knowledgeBase) {
        // Chuyển tin nhắn user về chữ thường để quét từ khóa không sót một chữ
        const messageLower = userMessage.toLowerCase();
        
        // Bước 1: LUÔN LUÔN nạp bộ Xương Sống Bắt Buộc từ prompts.js vào đầu tiên
        let activeParts = [DALAT_PROMPTS.BASE_XUONG_SONG];

        // Bước 2: Duyệt qua từng chuyên mục được định nghĩa trong file keywords.js toàn cục
        for (const groupName in DALAT_KEYWORDS) {
            const keywordList = DALAT_KEYWORDS[groupName];
            
            // Check xem câu chat của user có dính từ khóa nào trong chuyên mục này không
            const isMatched = keywordList.some(keyword => messageLower.includes(keyword));
            
            if (isMatched) {
                // In ra màn hình Console (F12) để fen kiểm tra xem hệ thống nhận diện đúng chuyên mục không
                console.log(`🧩 [Hàm Cha Cấu Hình]: Phát hiện từ khóa thuộc chuyên mục [${groupName}] -> Đã tiêm thêm tri thức bổ trợ.`);
                
                // Sang file prompts.js toàn cục hốt đúng nội dung Chuyên Mục đó ném vào mảng
                if (DALAT_PROMPTS[groupName]) {
                    activeParts.push(DALAT_PROMPTS[groupName]);
                }
            }
        }

        // Bước 3: Nhồi cục dữ liệu cẩm nang CSV gốc của dự án vào cuối prompt để Bot tra cứu thực tế
        activeParts.push(`\n--- DỮ LIỆU CẨM NANG CSV BẮT BUỘC TRONG HỆ THỐNG ---\n${knowledgeBase}`);

        // Gộp tất cả các mảng tri thức lại bằng 2 dấu xuống dòng, trả về một Prompt siêu sạch và tiết kiệm token
        return activeParts.join("\n\n");
    }
};
