import { cn } from "@/lib/utils";

const Container = ({
    className,
    children
}: {
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <div className={cn(
            "w-full max-w-[1248px] 2xl:max-w-[1535px] mx-auto px-5 md:px-6",
            className
        )}>
            {children}
        </div>
    )
};

export default Container;
