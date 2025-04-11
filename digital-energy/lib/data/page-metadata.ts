// import type { Metadata } from "next";
// import { revalidatePath } from "next/cache";

// import { DefaultMetadataType } from "../types/constant";
// import { getMetadataFromApi } from "../actions/getMetadata";
// import { defaultMetadata } from "./default-metadata";

// export async function generateMetadataValues(
//     { page, title, description }: DefaultMetadataType,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     previousImages: any
// ): Promise<Metadata> {
//     const meta = await getMetadataFromApi(page);

//     if (!meta) {
//         revalidatePath(page);
//         console.log("no meta fetched");

//         return {
//             ...defaultMetadata,
//             title,
//             description,
//             openGraph: {
//                 title,
//                 description
//             }
//         };
//     }

//     const {
//         can_index,
//         page_name,
//         page_description,
//         meta_keywords,
//         meta_image,
//         meta_image_alt,
//         og_title,
//         og_description,
//         og_image,
//         og_image_alt,
//     } = meta && meta;

//     console.log("it got here");

//     return {
//         ...defaultMetadata,
//         title: page_name,
//         description: page_description,
//         keywords: defaultMetadata.keywords?.concat(meta_keywords?.split(",")),
//         creator: 'Digital Energy Ltd',
//         publisher: 'Digital Energy Ltd',
//         openGraph: {
//             ...defaultMetadata.openGraph,
//             title: og_title,
//             description: og_description,
//             url: `https://digitalenergy.com/${page}`,
//             images: [
//                 ...previousImages,
//                 {
//                     url: `${process.env.NEXT_PUBLIC_BASE_URL_IMG_ALT}${og_image}`,
//                     width: 800,
//                     height: 600,
//                     alt: og_image_alt
//                 },
//                 {
//                     url: `${process.env.NEXT_PUBLIC_BASE_URL_IMG_ALT}${meta_image}`,
//                     width: 1800,
//                     height: 1600,
//                     alt: meta_image_alt
//                 },
//             ],
//         },
//         robots: {
//             index: can_index,
//             follow: true,
//             nocache: true,
//             googleBot: {
//                 index: can_index,
//                 follow: false,
//                 noimageindex: true,
//                 'max-video-preview': -1,
//                 'max-image-preview': 'large',
//                 'max-snippet': -1,
//             },
//         },
//         manifest: 'https://nextjs.org/manifest.json',
//     };
// };