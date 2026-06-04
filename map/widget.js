(function() {
    // 1. TỰ ĐỘNG BƠM HTML POPUP VÀO TRANG WEB
    const mapNodes = document.createElement('div');
    mapNodes.innerHTML = `
        <div id="gg-map-overlay"></div>
        <div id="gg-map-window">
            <div class="gg-map-header">
                <span id="gg-map-title" class="title">Bản đồ Thổ Địa</span>
                <span id="gg-map-close" class="close-btn">×</span>
            </div>
            <iframe id="gg-map-frame" src="" allowfullscreen="" loading="lazy"></iframe>
        </div>
    `;
    document.body.appendChild(mapNodes);

    const overlay = document.getElementById('gg-map-overlay');
    const windowMap = document.getElementById('gg-map-window');
    const titleBox = document.getElementById('gg-map-title');
    const iframe = document.getElementById('gg-map-frame');
    const closeBtn = document.getElementById('gg-map-close');

    // 2. ĐỔI TÊN HÀM TOÀN CỤC ĐỂ INDEX GỌI (Vẫn nằm trong window để index móc ra xài)
    window.DalatOS_InAppMap = {
open: function(latKhach, lonKhach, latQuan, lonQuan, tenQuan) {
            if (!latQuan || !lonQuan) {
                alert("⚠️ Chỗ này chưa cập nhật tọa độ fen ơi!");
                return;
            }

            // Đổi tiêu đề popup cho chuyên nghiệp
            titleBox.innerText = `Đường đến: ${tenQuan}`;

            // 🔥 ĐÂY LÀ ĐOẠN LINK DIRECTION CHUẨN ĐÃ FIX CÚ PHÁP
            // 🔥 SỬA CHÍNH XÁC DÒNG NÀY TRONG FILE WIDGET.JS TRÊN GITHUB CỦA FEN:
            const embedUrl = `https://maps.google.com/maps?saddr=${latKhach},${lonKhach}&daddr=${latQuan},${lonQuan}&output=embed`;
            
            // 🚨 MẸO NẾU FEN CHƯA CÓ API KEY (Xài link thô này để không bị lỗi màn hình trắng):
            // const embedUrl = `https://maps.google.com/maps?saddr=${latKhach},${lonKhach}&daddr=${latQuan},${lonQuan}&output=embed`;

            // Nạp link chuẩn vào iframe
            iframe.src = embedUrl;

            // Bật hiệu ứng hiển thị Popup
            overlay.style.display = 'block';
            windowMap.style.display = 'flex';
            
            // Thêm class active để tạo hiệu ứng bung lên mượt mà
            setTimeout(() => {
                windowMap.classList.add('active');
            }, 10);
        },

        close: function() {
            windowMap.classList.remove('active');
            setTimeout(() => {
                windowMap.style.display = 'none';
                overlay.style.display = 'none';
                iframe.src = ""; // Xóa src để tắt hẳn load ngầm
            }, 250);
        }
    };

    closeBtn.onclick = () => window.DalatOS_InAppMap.close();
    overlay.onclick = () => window.DalatOS_InAppMap.close();
})();
