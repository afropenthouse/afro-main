import { Hero } from "@/component/ui-home/Hero";
import HomeProducts from "@/component/ui-home/HomeProducts";

import AuthGuard from "@/component/AuthGaurd";
export default function HomePage() {
    return (
        <>
        <AuthGuard>
            <Hero />
            <HomeProducts />
        </AuthGuard>
        </>
    )
}
