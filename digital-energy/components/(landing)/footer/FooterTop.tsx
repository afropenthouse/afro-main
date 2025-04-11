import Link from "next/link"
import Image from "next/image"
import { footerNavLinks, socialLinks } from "@/lib/data/navigation"
import { Images } from "@/public/images"

const FooterTop = async () => {
    return (
        <div className="py-16 sm:py-20">
            <nav className="flex flex-wrap justify-between gap-y-10 gap-x-8 sm:gap-x-6 xl:gap-x-12">
                <div className="flex flex-col justify-between w-full max-w-[500px] lg:max-w-[280px] xl:max-w-[380px] text-de_gray_c5">
                    <div className="space-y-4">
                        <Link href="/">
                            <Image
                                src={Images.logoWhite}
                                alt="Digital Energy logo"
                                width={115}
                                height={50}
                                className="w-[115px] h-auto object-contain"
                            />
                        </Link>

                        <p>
                            Oil and gas solution incorporated as a wholly indigenous provider of integrated engineering
                        </p>
                    </div>

                    <ul className="flex gap-x-2.5">
                        {socialLinks?.map(link => (
                            <li key={link.id}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-6 w-6 inline-flex justify-center items-center hover:text-white"
                                    aria-label={link.id}
                                >
                                    {link.icon && (
                                        <link.icon size={16} />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full lg:w-auto grid gap-y-10 gap-x-6 md:gap-x-8 lg:gap-x-6 xl:gap-x-12 grid-cols-1 sm:grid-cols-3 md:grid-cols-3">
                    {footerNavLinks?.map(item => (
                        <div key={item.id} className="flex flex-col gap-y-4">
                            <h3 className="text-lg font-medium text-white">{item.name}</h3>

                            <menu className="flex flex-col gap-y-3">
                                {item.links.map(link => (
                                    <li key={link.id} className="text-de_gray_c5">
                                        <Link
                                            href={link.path}
                                            className="underline-offset-4 hover:underline hover:text-white"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </menu>
                        </div>
                    ))}

                    <div className="flex flex-col gap-y-4">
                        <h3 className="text-lg font-medium text-white">Contact us</h3>

                        <menu className="flex flex-col gap-y-3">
                            <li className="text-de_gray_c5">
                                <a
                                    href="mailto:info@digitalenergyng.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline-offset-4 hover:underline hover:text-white"
                                >
                                    info@digitalenergyng.com
                                </a>
                            </li>
                            <li className="text-de_gray_c5">
                                <a
                                    href="tel:+234 810 125 9849"
                                    target="_blank" rel="noopener noreferrer"
                                    className="underline-offset-4 hover:underline hover:text-white"
                                >
                                    +234 810 125 9849, +2348101259849
                                </a>
                            </li>
                        </menu>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default FooterTop