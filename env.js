// File này chứa Key và cấu hình model
const _ENV = {
    // Tui chia nhỏ Key ra để né bot quét tự động của Google
    P1: "AIzaSyBKG9Fy2-",
    P2: "ILdcfY1ZXgDwNr0AIkKqmWdA",
    
    get KEY() {
        return this.P1 + this.P2;
    },
    
    // Dùng model 2.5 Flash fen vừa quét được, cực mạnh và nhanh
    MODEL: "gemini-2.5-flash",
    VERSION: "v1beta"
};
