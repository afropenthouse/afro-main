"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var auth_routes_1 = __importDefault(require("./routes/auth-routes"));
var user_routes_1 = __importDefault(require("./routes/user-routes"));
var admin_routes_1 = __importDefault(require("./routes/admin-routes"));
var venue_routes_1 = __importDefault(require("./routes/venue-routes"));
var hook_routes_1 = __importDefault(require("./routes/hook-routes"));
var wallet_routes_1 = __importDefault(require("./routes/wallet-routes"));
var group_routes_1 = __importDefault(require("./routes/group-routes"));
var discounts_routes_1 = __importDefault(require("./routes/discounts-routes"));
var web_routes_1 = __importDefault(require("./routes/web-routes"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*"
    // credentials: true
}));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use('/auth', auth_routes_1.default);
app.use('/user', user_routes_1.default);
app.use('/admin', admin_routes_1.default);
app.use('/venue', venue_routes_1.default);
app.use('/web', web_routes_1.default);
app.use('/groups', group_routes_1.default);
app.use('/wallet', wallet_routes_1.default);
app.use('/discounts', discounts_routes_1.default);
app.use('/hooks', hook_routes_1.default);
app.all('*', function (req, res) {
    return res.status(404).json({ message: 'Route not found' });
});
exports.default = app;
