(function() {
    // 1. TỰ ĐỘNG INJECT HTML VÀO BODY KHI LOAD FILE
    const mapContainer = document.createElement('div');
    mapContainer.innerHTML = `
        <div id="map-widget-overlay"></div>
        <div id="map-widget-window">
            <div class="map-header">
                <h3 id="map-title">Chỉ đường Thổ Địa</h3>
                <span id="close-map-btn" style="cursor:pointer; font-size:28px; line-height:1; color:#64748b;">&times;</span>
            </div>
            <div id="leaflet-render-box"></div>
        </div>
    `;
    document.body.appendChild(mapContainer);

    let leafletMap = null;
    let markersGroup = null;

    const overlay = document.getElementById('map-widget-overlay');
    const windowMap = document.getElementById('map-widget-window');
    const closeBtn = document.getElementById('close-map-btn');

    // 2. KHỞI TẠO BẢN ĐỒ (CHỈ CHẠY 1 LẦN DUY NHẤT)
    function initLeafletInstance(lat, lon) {
        if (!leafletMap) {
            // Khởi tạo map nhắm vào id 'leaflet-render-box'
            leafletMap = L.map('leaflet-render-box').setView([lat, lon], 14);
            
            // Nạp layer bản đồ miễn phí của OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(leafletMap);

            // Tạo một nhóm chứa Marker để sau này dễ xóa/vẽ lại không bị trùng ghim cũ
            markersGroup = L.layerGroup().addTo(leafletMap);
        } else {
            leafletMap.setView([lat, lon], 14);
        }
    }

    // 3. XUẤT HÀM TOÀN CỤC (GLOBAL FUNCTION) ĐỂ FILE KHÁC GỌI LỆNH
    window.DalatOS_Map = {
        open: function(latQuan, lonQuan, tenQuan) {
            if (!latQuan || !lonQuan || isNaN(latQuan) || isNaN(lonQuan)) {
                alert("⚠️ Quán này chưa có tọa độ chuẩn fen ơi!");
                return;
            }

            // Hiển thị Popup và làm mờ nền
            overlay.style.display = 'block';
            windowMap.style.display = 'flex';
            setTimeout(() => windowMap.classList.add('active'), 10);

            // Lấy GPS thực tế của khách từ biến toàn cục (nếu có), không có thì lấy trung tâm Đà Lạt
            const latKhach = (window.userPos && window.userPos.lat) ? window.userPos.lat : 11.9406;
            const lonKhach = (window.userPos && window.userPos.lon) ? window.userPos.lon : 108.4373;

            // Đổi tiêu đề popup theo tên quán
            document.getElementById('map-title').innerText = `Đường đến: ${tenQuan}`;

            // Khởi động Leaflet
            initLeafletInstance(latKhach, lonKhach);

            // Xóa ghim cũ trước khi cắm ghim mới
            markersGroup.clearLayers();

            // Cắm 2 ghim mới: Khách & Quán
            const khachMarker = L.marker([latKhach, lonKhach]).addTo(markersGroup).bindPopup('Vị trí của fen').openPopup();
            const quanMarker = L.marker([latQuan, lonQuan]).addTo(markersGroup).bindPopup(`<b>${tenQuan}</b>`);

            // Ép bản đồ tự zoom vừa vặn để nhìn thấy cả 2 điểm cùng lúc
            const group = new L.featureGroup([khachMarker, quanMarker]);
            leafletMap.fitBounds(group.getBounds().pad(0.2));

            // Fix lỗi bản đồ bị sọc vỡ hình khi render trong container ẩn
            setTimeout(() => {
                leafletMap.invalidateSize();
            }, 300);
        },
        
        close: function() {
            windowMap.classList.remove('active');
            setTimeout(() => {
                windowMap.style.display = 'none';
                overlay.style.display = 'none';
            }, 300);
        }
    };

    // 4. GÁN SỰ KIỆN ĐÓNG MAP
    closeBtn.onclick = () => window.DalatOS_Map.close();
    overlay.onclick = () => window.DalatOS_Map.close();
})();
