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
        open: function(lat, lon, tenQuan) {
            if (!lat || !lon) {
                alert("⚠️ Chỗ này chưa cập nhật tọa độ fen ơi!");
                return;
            }

            titleBox.innerText = `Đường đến: ${tenQuan}`;

            // Tạo link nhúng chính thức của Google Maps dựa trên Tọa độ
            const embedUrl = `https://maps.google.com/maps?q=${lat},${lon}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
            
            iframe.src = embedUrl;

            overlay.style.display = 'block';
            windowMap.style.display = 'flex';
            setTimeout(() => windowMap.classList.add('active'), 10);
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
