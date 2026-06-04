// keywords.js
const DALAT_KEYWORDS = {
// 🍳 1. Đầu mục ĂN UỐNG (Món ăn, Vị giác, Tốc độ phục vụ)
    AN_UONG: [
        "ăn gì ngon", "an gi ngon", "ăn xế", "an xe", "ăn khuya", "an khuya", "mở khuya", "mo khuya", 
        "bữa sáng", "bua sang", "buổi sáng", "buoi sang", "buổi tối", "buoi toi", "ăn gì ngon nhất", "an gi ngon nhat", 
        "bánh canh", "banh canh", "nước ngọt thanh", "nuoc ngot thanh", "không cay", "khong cay", 
        "bánh mì xíu mại", "banh mi xiu mai", "xiu mai", "lẩu gà lá é", "lau ga la e", "lau ga", "la e", 
        "không phải đợi lâu", "khong phai doi lau", "lẩu bò ba toa", "lau bo ba toa", "cơm gia đình", "com gia dinh", 
        "cơm niêu", "com nieu", "vị miền nam", "vi mien nam", "nấu vị miền nam", "nau vi mien nam", 
        "cháo ngon", "chao ngon", "cháo trẻ con", "chao tre con", "gà rán", "ga ran", "gà nướng cơm lam", "ga nuong com lam", 
        "pizza", "mì ý", "mi y", "món việt", "mon viet", "món tây", "mon tay", "buffet rau", "đáng tiền", "dang tien", 
        "sữa đậu nành", "sua dau nanh", "bánh tráng nướng", "banh trang nuong", "btn", "bún bò", "bun bo", 
        "chè nóng", "che nong", "trái cây cắt sẵn", "trai cay cat san", "kem bơ", "kem bo", "xiên que", "xien que", 
        "đói bụng", "doi bung", "đói là quạo", "doi la quao", "phục vụ nhanh", "phuc vu nhanh", 
        "nhất định phải ăn", "nhat dinh phai an", "ăn kem có sao không", "an kem co sao khong", 
        "bị lạnh bụng", "bi lanh bung"
    ],

    // 🏢 2. Đầu mục TÌM KIẾM (Địa điểm trung tâm, Không gian rộng, Tránh đông)
    TIM_KIEM: [
        "chợ đà lạt", "cho da lat", "chợ đêm", "cho dem", "đêm ở đà lạt", "dem o da lat", 
        "không phải xếp hàng", "khong phai xep hang", "xếp hàng dài", "xep hang dai", 
        "quán nổi tiếng", "quan noi tieng", "tiktok", "tt", "top top", "toptop", 
        "không quá đông", "khong qua dong", "đông chen chúc", "dong chen chuc", "thoán", "thoang", "thoáng đãng", "thoang dang", 
        "rộng rãi", "rong rai", "ghế em bé", "ghe em be", "không gian rộng", "khong gian rong", 
        "toilet sạch", "toilet sach", "vệ sinh sạch", "ve sinh sach", "chặt chém", "chat chem", 
        "bị hét giá", "bi het gia", "đặt quán trước", "dat quan truoc", "cuối tuần", "cuoi tuan", 
        "kẹt xe", "ket xe", "quán ăn nào", "quan an nao", "chỗ ăn nào", "cho an nao"
    ],

    // 🎯 3. Đầu mục LỊCH TRÌNH
    LICH_TRINH: [
        "lịch trình", "lich trinh", "lt", "route", "nhẹ nhàng", "nhe nhang", 
        "3 ngày 2 đêm", "3 ngay 2 dem", "3n2d", "một ngày", "mot ngay", 
        "tối đa mấy điểm", "toi da may diem", "không bị mệt", "khong bi met", 
        "đi đâu trước", "di dau truoc", "đi đâu sau", "di dau sau", 
        "ngược đường", "nguoc duong", "tiện đường", "tien duong", 
        "thời gian biểu", "thoi gian bieu", "đi dạo", "di dao"
    ],

    // 🎯 4. Đầu mục DI CHUYỂN AN TOÀN
    GIAO_THONG: [
        "đường lên", "duong len", "khó đi", "kho di", "yếu tay lái", "yeu tay lai", "tay lái yếu", "tay lai yeu", 
        "đường đèo", "duong deo", "dốc gắt", "doc gat", "hẻm dốc", "hem doc", "sương mù", "suong mu", 
        "đường vắng", "duong vang", "thuê xe máy", "thue xe may", "xm", "xe ga", "xe số", "xe so", 
        "thuê xe hơi", "thue xe hoi", "ghế trẻ em", "ghe tre em", "taxi", "hãng nào đàng hoàng", "hang nao dang hoang", 
        "đi xe máy chở 2 bé", "di xe may cho 2 be", "nguy hiểm", "nguy hiem", "trạm nghỉ", "tram nghi", 
        "dừng ăn", "dung an", "giữa đường", "giua duong", "sài gòn lên", "sai gon len"
    ],

    // 🎯 5. Đầu mục THỜI TIẾT NGÀY NGHỈ
    THOI_TIET_NGAY_NGHI: [
        "tối có lạnh nhiều", "toi co lanh nhieu", "mặc nhiêu lớp", "mac nhieu lop", 
        "thời tiết đà lạt", "thoi tiet da lat", "có mưa không", "co mua khong", 
        "chiều mưa", "chieu mua", "hay mưa giờ nào", "hay mua gio nao", 
        "mặc đồ gì", "mac do gi", "mang áo mưa", "mang ao mua", "dù", "ô", 
        "mở cửa thứ hai", "mo cua thu hai", "nghỉ tết", "nghi tet", "nghỉ lễ", "nghi le", 
        "mở cửa từ mấy giờ", "mo cua tu may gio", "đóng cửa", "dong cua", 
        "mở sớm", "mo som", "5h sáng", "5h sang", "6h sáng", "6h sang"
    ],

    // 🧩 6. Đầu mục mới: ĐIỂM CHƠI TRẺ EM
    VUI_CHOI: [
        "quán cafe cho trẻ con", "quan cafe cho tre con", "chạy chơi", "chay choi", "farm", 
        "đáng đi", "dang di", "chủ yếu chụp hình", "chu yeu chup hinh", "sống ảo", "song ao", 
        "vườn dâu", "vuon dau", "tự hái", "tu hai", "khu vui chơi trong nhà", "khu vui choi trong nha", 
        "đi cáp treo", "di cap treo", "máng trượt", "mang truot", "sở thú", "so thu", "farm cún", "farm cun", 
        "không hôi", "khong hoi", "cho thú ăn", "cho thu an", "langbiang", "mệt không", "met khong", 
        "thuê jeep", "thue jeep", "đi bộ được ít", "di bo duoc it", "ngắm hoa", "ngam hoa", 
        "hướng dương", "huong duong", "lavender", "picnic", "tô tượng", "to tuong", 
        "làm đồ handmade", "lam do handmade", "workshop", "puppy farm", "thông đẹp", "thong dep", 
        "ga đà lạt", "ga da lat", "tàu hỏa", "tau hoa", "trại mát", "trai mat", "điểm nào trẻ con thích hơn", "diem nao tre con thich hon"
    ],

    // 🧩 7. Đầu mục mới: MUA SẮM QUÀ CÁP
    MUA_SAM: [
        "dâu đà lạt", "dau da lat", "mua ở đâu ngon", "mua o dau ngon", "không bị thuốc", "khong bi thuoc", 
        "đặc sản", "dac san", "mua về làm quà", "mua ve lam qua", "đỡ bị hét", "do bi het", "mứt", "mut", 
        "trẻ con thích ăn", "tre con thich an", "hồng treo gió", "hong treo gio", 
        "có nên mua ở chợ đêm", "co nen mua o cho dem", "atiso", "uy tín", "uy tin", "siêu thị lớn", "sieu thi lon"
    ],

    // 🧩 8. Đầu mục mới: Y TẾ SỨC KHỎE
    SUC_KHOE: [
        "say xe", "thuốc chống say", "thuoc chong say", "đem thuốc", "dem thuoc", "tiểu đường", "tieu duong", 
        "ít ngọt", "it ngot", "không quá ngọt", "khong qua ngot", "lạnh bụng", "lanh bung", "tiệm thuốc", "tiem thuoc", 
        "mở khuya", "mo khuya", "sốt nhẹ", "sot nhe", "đưa đi đâu", "dua di dau", 
        "bệnh viện tốt cho trẻ con", "benh vien tot cho tre con", "bảo hiểm du lịch", "bao hiem du lich", 
        "máy sưởi", "may suoi", "bật máy sưởi", "bat may suoi", "nước uống dễ đau bụng", "nuoc uong de dau bung"
    ],

    // 🧩 9. Đầu mục mới: LƯU TRÚ TIỆN ÍCH
    LUU_TRU: [
        "thuê áo ấm", "thue ao am", "mua luôn", "mua luon", "tiệm giặt sấy nhanh", "tiem giat say nhanh", 
        "giặt ủi", "giat ui", "khách sạn", "khach san", "family room", "sạch sẽ", "sach se", 
        "khu yên tĩnh", "khu yen tinh", "khu chợ đêm có ồn không", "khu cho dem co on khong", 
        "ngủ không được", "ngu khong duoc", "homestay phù hợp gia đình", "homestay phu hop gia dinh", 
        "couple sống ảo", "couple song ao", "bồn tắm", "bon tam", "resort có khu vui chơi", "resort co khu vui choi", 
        "chăn riêng", "chan rieng"
    ]
};
