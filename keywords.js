// keywords.js - Bản full 100% từ khóa (Cũ + Mới) gánh mọi case của Cha và Mẹ
const DALAT_KEYWORDS = {
    // 🍔 1. Module: CSV_AN_UONG (Gu ăn uống, món ăn, vị giác trẻ nhỏ, tiểu đường)
    CSV_AN_UONG: [
        "ăn gì ngon", "an gi ngon", "ăn xế", "an xe", "ăn khuya", "an khuya", "mở khuya", "mo khuya", 
        "bữa sáng", "bua sang", "buổi sáng", "buoi sang", "buổi tối", "buoi toi", "ăn gì ngon nhất", "an gi ngon nhat", 
        "bánh canh", "banh canh", "nước ngọt thanh", "nuoc ngot thanh", "không cay", "khong cay", 
        "bánh mì xíu mại", "banh mi xiu mai", "xiu mai", "lẩu gà lá é", "lau ga la e", "lau ga", "la e", 
        "không phải đợi lâu", "khong phai doi lau", "lẩu bò ba toa", "lau bo ba toa", "cơm gia đình", "com gia dinh", 
        "cơm niêu", "com nieu", "vị miền nam", "vi mien nam", "nấu vị miền nam", "nau vi mien nam", 
        "cháo ngon", "chao ngon", "cháo trẻ con", "chao tre con", "gà rán", "ga ran", "gà nướng cơm lam", "ga nuong com lam", 
        "pizza", "mì ý", "mi y", "món việt", "mon viet", "món tây", "mon tay", "buffet rau", "bánh tráng nướng", "banh trang nuong", 
        "btn", "bún bò", "bun bo", "chè nóng", "che nong", "kem bơ", "kem bo", "xiên que", "xien que", 
        "đói bụng", "doi bung", "bún bò vị miền nam", "trái cây cắt sẵn", "trai cay cat san", 
        "ăn kem có sao không", "an kem co sao khong", "bị lạnh bụng", "bi lanh bung", "ít ngọt", "it ngot", 
        "không quá ngọt", "khong qua ngot", "tiểu đường", "tieu duong", "ăn sáng tiện đậu xe", "an sang tien dau xe",
        "dừng ăn giữa đường", "dung an giua duong"
    ],

    // 🏢 2. Module: CSV_TIM_KIEM (Định vị điểm chơi, farm thú, cây xăng, siêu thị, đồi chè)
    CSV_TIM_KIEM: [
        "quán ăn nào", "quan an nao", "chỗ ăn nào", "cho an nao", "chỗ chơi", "cho choi", "điểm chơi", "diem choi", 
        "quán cafe cho trẻ con", "quan cafe cho tre con", "chạy chơi", "chay choi", "farm", "vườn dâu", "vuon dau", 
        "tự hái", "tu hai", "khu vui chơi trong nhà", "khu vui choi trong nha", "đi cáp treo", "di cap treo", 
        "máng trượt", "mang truot", "sở thú", "so thu", "farm cún", "farm cun", "cho thú ăn", "cho thu an", 
        "langbiang", "ngắm hoa", "ngam hoa", "hướng dương", "huong duong", "lavender", "picnic", "tô tượng", "to tuong", 
        "làm đồ handmade", "lam do handmade", "workshop", "puppy farm", "thông đẹp", "thong dep", "ga đà lạt", "ga da lat", 
        "tàu hỏa", "tau hoa", "trại mát", "trai mat", "hồ tuyền lâm", "ho tuyen lam", "dạo mát", "dao mat", 
        "ngắm thông", "ngam thong", "chợ đà lạt", "cho da lat", "chợ đêm", "cho dem", "đêm ở đà lạt", "dem o da lat", 
        "studio", "chụp hình gia đình", "chup hinh gia dinh", "sống ảo", "song ao", "chỗ nào buổi tối đẹp", "cho nao buoi toi dep", 
        "quán nổi tiếng", "quan noi tieng", "đồi chè", "doi che", "vòng xoay", "vong xoay", "cây xăng", "cay xang", 
        "trạm dừng", "tram dung", "trạm dừng chân", "tram dung chan", "sân bay", "san bay", "liên khương", "lien khuong"
    ],

    // 🚗 3. Module MỚI: QUAN_LY_XE_VA_BAI_DAU (Cẩm nang bãi xe, đậu đỗ, cạ gầm cho bố tài xế)
    DI_CHUYEN: [
        "bãi đậu ô tô", "bai dau o to", "bãi xe", "bai xe", "đậu qua đêm", "dau qua dem", 
        "cách quán bao xa", "cach quan bao xa", "bãi xe tới điểm tham quan", "bai xe toi diem tham quan", 
        "đi bộ bao xa", "di bo bao xa", "sedan đi nổi không", "sedan di noi khong", "xe thấp gầm", "xe thap gam", 
        "cạ gầm", "ca gam", "cạ không", "ca khong", "gửi xe ngoài", "gui xe ngoai", "đi bộ vào", "di bo vao", 
        "ô tô vào tận nơi", "o to vao tan noi", "ô tô quay đầu", "o to quay dau", "quay đầu dễ không", "quay dau de khong", 
        "bảo vệ coi xe", "bao ve coi xe", "camera", "tính phí bao nhiêu", "tinh phi bao nhieu", "phí giữ xe", "phi giu xe", 
        "mái che", "mai che", "xe 16 chỗ", "xe 16 cho", "xe đông lúc mấy giờ", "xe dong luc may gio", 
        "đặt chỗ đậu xe trước", "dat cho dau xe truoc", "hầm gửi xe", "ham gui xe", "nhà vệ sinh gần bãi xe", "nha ve sinh gan bai xe", 
        "khuất tầm nhìn", "khuat tam nhin", "rửa xe", "rua xe", "cấm đậu xe", "cam dau xe", 
        "vừa ăn vừa nhìn thấy xe", "vua an vua nhin thay xe", "xếp hàng đậu", "xep hang dau"
    ],

    // 📞 4. Module: YEU_CAU_TAI_CHOT (Tiện ích cơ sở vật chất khuyên gọi hotline check trước)
    LIEN_HE_QUAN: [
        "ghế em bé", "ghe em be", "toilet sạch", "toilet sach", "vệ sinh sạch", "ve sinh sach", 
        "đặt quán trước", "dat quan truoc", "phục vụ nhanh", "phuc vu nhanh", "đói là quạo", "doi la quao", 
        "có chỗ đậu xe ô tô lớn", "co cho dau xe o to lon", "không phải đợi lâu", "khong phai doi lau", 
        "không phải xếp hàng dài", "khong phai xep hang dai", "có cần đặt quán trước", "co can dat quan truoc", 
        "bật máy sưởi", "bat may suoi", "máy sưởi", "may suoi", "bồn tắm", "bon tam", 
        "khách sạn có bồn tắm", "khach san co bon tam", "chăn riêng", "chan rieng", "đem theo chăn riêng", "dem theo chan rieng", 
        "family room", "chỗ cho tài xế nghỉ", "cho cho tai xe nghi", "đặt vé trước", "dat ve truoc", "khỏi đứng chờ", "khoi dung cho"
    ],

    // 🥶 5. Module: KIEU_THOI_TIET_TRANG_PHUC (Tư vấn nhiệt độ, quần áo, xử lý ngày mưa)
    THOI_TIET: [
        "mặc nhiêu lớp", "mac nhieu lop", "tối có lạnh nhiều", "toi co lanh nhieu", "lạnh quá", "lanh qua", 
        "chuẩn bị gì tháng mưa", "chuan bi gi thang mua", "mang dù hay áo mưa", "mang du hay ao mua", 
        "có mưa không", "co mua khong", "thời tiết đà lạt", "thoi tiet da lat", "chiều mưa đi đâu", "chieu mua di dau", 
        "hay mưa giờ nào", "hay mua gio nao", "đà lạt tháng này hay mưa", "da lat thang nay hay mua", 
        "thuê áo ấm", "thue ao am", "mua luôn tiện hơn", "mua luon tien hon", "tiệm giặt sấy nhanh", "tiem giat say nhanh", "giặt ủi", "giat ui"
    ],

    // 🚗 6. Module: AN_TOAN_DI_CHUYEN (Đèo dốc, tay lái yếu, sương mù, say xe trẻ nhỏ)
    AN_TOAN: [
        "đường lên khó đi", "duong len kho di", "yếu tay lái", "yeu tay lai", "tay lái yếu", "tay lai yeu", 
        "đường đèo", "duong deo", "dốc gắt", "doc gat", "sương mù", "suong mu", "đường vắng", "duong vang", 
        "thuê xe hơi", "thue xe hoi", "ghế trẻ em", "ghe tre em", "taxi đàng hoàng", "taxi dang hoang", 
        "đi xe máy chở 2 bé nguy hiểm không", "di xe may cho 2 be nguy hiem khong", "trạm nghỉ", "tram nghi", 
        "dừng ăn giữa đường", "dung an giua duong", "sài gòn lên", "sai gon len", "đường nào buổi tối sương mù", "duong nao buoi toi suong mu", 
        "đi bộ được ít", "di bo duoc it", "mệt không", "met khong", "say xe", "thuốc chống say", "thuoc chong say", 
        "đem thuốc", "dem thuoc", "chạy tới mất bao lâu", "chay toi mat bao lau", "chạy mất bao lâu", "chay mat bao lau", 
        "đường hẹp", "duong hep", "né xe ngược chiều", "ne xe nguoc chieu", "bê tông hết chưa", "be tong het chua", 
        "đèn đường", "den duong", "khúc cua gắt", "khuc cua gat", "xuong dốc dài", "xuong doc dai", 
        "sương mù nhiều", "suong mu nhieu", "đường đang sửa", "duong dang sua", "sạt lở", "sat lo", 
        "đường đèo nguy hiểm", "duong deo nguy hien", "đường trơn", "duong tron", "tối về chạy an toàn", "toi ve chay an toan", 
        "chạy một chiều", "chay mot chieu", "chạy hai chiều", "chay hai chieu", "google map chỉ đúng", "google map chi dung", 
        "xe điện", "xe dien", "xe đầy tải", "xe day tai", "xe số mạnh", "xe so manh", "xe nhỏ", "xe nho", 
        "fog buổi chiều", "fog buoi chieu", "mới lái đèo", "moi lai deo", "nhường đường khó", "nhuong duong kho", 
        "mimosa", "prenn", "xe tải lớn", "xe tai lon", "kinh nghiệm đổ đèo", "kinh nghiem do deo", 
        "chưa quen cung này", "chua quen cung nay", "mất thắng", "mat thang", "biển báo rõ", "bien bao ro", 
        "cua hơn", "cua hon", "thắng tốt", "thang tot", "5h chiều", "5h chieu"
    ],

    // 📝 7. Module: THIET_KE_LICH_TRINH (Lộ trình 3n2d nhẹ nhàng, phân phối thời gian cho cả nhà)
    LICH_TRINH: [
        "lịch trình nhẹ nhàng", "lich trinh nhe nhang", "3 ngày 2 đêm", "3 ngay 2 dem", "3n2d", 
        "một ngày tối đa mấy điểm", "mot ngay toi da may diem", "không bị mệt", "khong bi met", 
        "đi đâu trước đi đâu sau", "di dau truoc di dau sau", "ngược đường", "nguoc duong", 
        "tiện đường", "tien duong", "thời gian biểu", "thoi gian bieu", "lt", 
        "đi Langbiang với trẻ con có mệt không", "di Langbiang voi tre con co met khong", 
        "đi hồ tuyền lâm bao lâu", "di ho tuyen lam bao lau", "đi một ngày có đủ không", "di mot ngay co du khong"
    ],

    // 🛑 8. Module: CANH_BAO_BOC_PHOT (Cẩm nang dập tắt review ảo, né bẫy chợ đêm, dâu tây lừa đảo)
    CANH_BAO: [
        "tiktok có ngon không", "tiktok co ngon khong", "chỉ đẹp chụp hình", "chi dep chup hinh", 
        "không đáng đi", "khong dang di", "review quá trời", "review qua troi", "mạng review", "mang review", 
        "chặt chém", "chat chem", "bị hét giá", "bi het gia", "dâu không bị thuốc", "dau khong bi thuoc", 
        "mua hồng treo gió ở chợ đêm", "mua hong treo gio o cho dem", "tour không bắt shopping", "tour khong bat shopping", 
        "tự đi hay mua tour", "tu di hay mua tour", "đà lạt còn yên bình không", "da lat con yen binh khong", 
        "điểm nào không đáng đi", "diem nao khong dang di", "nhà có trẻ con thì nên tránh quán nào", "nha co tre con thi nen tranh quan nao", 
        "đi chợ đêm nên ăn gì trước", "di cho dem nen an gi truoc", "farm nào chủ yếu người lớn chụp hình", "farm nao chu yeu nguoi lon chup hinh", 
        "khu yên tĩnh", "khu yen tinh", "khu chợ đêm có ồn không", "khu cho dem co on khong", "ngủ không được", "ngu khong duoc", 
        "ở gần chợ đêm có ồn", "o gan cho dem co on", "homestay phù hợp gia đình", "homestay phu hop gia dinh", 
        "nên ở khu chợ đêm hay khu yên tĩnh", "nen o khu cho dem hay khu yen tinh", "đáng tiền", "dang tien", 
        "tt", "toptop", "top top"
    ],

    // ⏱️ 9. Module: FLEX_GIO_GIAO_THONG (Giờ kẹt xe vòng xoay, né giờ check-in, app xem camera)
    GIAO_THONG: [
        "cuối tuần kẹt xe", "cuoi tuan ket xe", "đà lạt cuối tuần kẹt xe nhiều hong", "da lat cuoi tuan ket xe nhieu hong", 
        "tuyến đường tránh đông", "tuyen duong tranh dong", "mở cửa từ mấy giờ", "mo cua tu may gio", "đóng cửa", "dong cua", 
        "mở sớm 5-6h sáng", "mo som 5-6h sang", "né giờ check-in", "ne gio check-in", "giờ check in", "gio check in", 
        "xếp hàng", "xep hang", "đứng chờ ngoài đường", "dung cho ngoai duong", "camera giao thông", "camera giao thong", 
        "app xem camera", "app xem camera"
    ],

    // 🏥 10. Module ĐẶC BIỆT: Y_TE_KHAN_CAP (Thông tin cứu hộ y tế khẩn cấp, bệnh nhi, tiệm thuốc đêm)
    Y_TE: [
        "sốt nhẹ", "sot nhe", "đưa đi đâu", "dua di dau", "bệnh viện tốt cho trẻ con", "benh vien tot cho tre con", 
        "tiệm thuốc nào mở khuya", "tiem thuoc nao mo khuya", "bệnh viện", "benh vien", "tiệm thuốc", "tiem thuoc"
    ]
};
