import express from "express"
import morgan from "morgan"
import cors from "cors"
import authRoutes from "./routes/auth-routes"
import userRoutes from "./routes/user-routes"
import adminRoutes from "./routes/admin-routes"
import venueRoutes from "./routes/venue-routes"
import hookRoutes from "./routes/hook-routes"
import walletRoutes from "./routes/wallet-routes"
import groupRoutes from "./routes/group-routes"
import discountRoutes from "./routes/discounts-routes"
import webRoutes from "./routes/web-routes"

const app  = express()

app.use(cors({
    origin:"*"
    // credentials: true
}))

app.use(morgan("dev"))
app.use(express.json())

app.use('/auth',authRoutes)
app.use('/user',userRoutes)
app.use('/admin',adminRoutes)
app.use('/venue',venueRoutes)
app.use('/web',webRoutes)
app.use('/groups',groupRoutes)
app.use('/wallet',walletRoutes)
app.use('/discounts',discountRoutes)
app.use('/hooks',hookRoutes)


app.all('*', (req, res) => {
    return res.status(404).json({ message: 'Route not found' });
});

export default app