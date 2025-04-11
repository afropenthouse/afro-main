import { cn } from "@/lib/utils";

const Container = ({ className, children }) => {
    return (
        <div className={cn(
            "w-full max-w-[1248px] mx-auto px-4 sm:px-5 md:px-6",
            className
        )}>
            {children}
        </div>
    )
};

export default Container;
