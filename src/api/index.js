import http from "../utlis/axios";

export const getLoginQrCKey = (params) => http.get("/login/qr/key", { params });

export default {};
