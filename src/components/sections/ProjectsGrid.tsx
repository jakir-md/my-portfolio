"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Layers } from "lucide-react";

export function ProjectsGrid() {
    const { projects } = portfolioData;

    // Real images from HTML to simulate the "exact" look
    const projectImages = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDm-RzuUF-0BKFdXFrIm1pNjUo_u9taHptoqPh1JgzMABryNtn2C4mgWre5wKAOtzyFZXk92IlJ2hWvIF34PtkCTThb7CxmAYY-BhfXovqeHH36DQAwgDnxqMoiUPGk4bJ6c2B3LtvV4I-lS_aEdvg0qKj1Ig5cDsJCdgribEbrPNO85lOqhsW8m5XFc0ZTw_bET67EUxraeEPFtpEwBgrr_7B33WtcblsAlzVTLDa9n_mhgitlgF3ITQE0d_mAJ-7kyd68HVqIDIA",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBT39Pmx3ul5Z2S5e_ClltWPcL5ZSWTX0EO6O5bjnxvWMJbeIG95hTC9cwj9JVM5-6Xn0ez5Nv5Bimtly19sl-mdhGSRJBYXzzXLE0DUEzZHvw5VFNGXY6vVvLYnM9YhUi3qNLzeCrBSeZa349M2QPd3hGH0g8Q0TxlIXoUSi6psakNqt8R36TSjaolnFEY5MdIXiGvMA19246-bgm7lF55QsrRRT86jI9VM5e32bS84vfzp4si00CvmFt2GIK-fGw_vhOhbp2beIw",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCzrYff8tphHh0Z1I9fFsJoqZWtienklyc08khxjx4YiCfvwAzTRCkePZCWTeevYvSNKH6c2nTxmRW-RQtu_ELJup0ebPiIQO5YygmxhWzmK42cX0gkAzFTCsGf8ne2377D53uvMn8d_fH_5uZL35VEzIa_hPYTCdY-TRB2w_sAwtPZLJwOM4elhotqj8uOoz_vGPmjDiHTXRSzKCatspLwi4-P2cZfRMtWT8wHari0G8B0FstEHzju97O52z5tcgMrw-VBcB6IAbA",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCbKwQrcT53mXod61fruicZRyjoC44xw_Qr2ZTCycD1-oX7Qf4Au8fbqJr1Kub5CB4BvRHIGC5XE2iWB1fB5VTUAbPqs7AQY-nmtso-YAwupXfkOYZq0zAMGMykB-VLfX-xzqJET4h4I0g25r8ryq-R0JIUmonQ6tkUfOyLTW7hbUrQ9WPL1_jd-UNbv3ZZHImBbPs_mxaSpbwNBHtGioqOsjhSPbW8FaCHESje-pZOX6_ECY-W7NYXXnE-xOjjWQ142wUHkJjgKSo",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAxDEpZvn5wtUtsdgAXVVa9Vq6Yfkz3Ly8ALIPyk_Hr4sAg587ieeD4dgKpsCG_0hSOC04NG2CzWocEKt6Wm1VFSnONhqIuRYyxlCyCw6kSfCOX9hXHl20dsQJjjJHDB2fNYC0vHohtBZ_PV04wW9QUhIy7cM1n_Zhc8PzWMgvJLeafJHPUXdE6Vn1IXebqfARKC7ANz1xSEeXTHQKLnBo40ZnvZ6v6pkt1eyjFseCqh_vAsWrOjJB8VspZ4pzyEo9gDlLzZPaKPqM",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAYy7nLZ0AdaMNYCdUTFJj9i4tXRFxrVZYnXEo2OTtWhc65jI0FWaNPPb214va8-tgPT0mMSMFU69jucbY5VPNQm8clHdNk4E3yCR4SQdBgBOWDw3hNp6kGfdpCflcsv3T3-Tr-C_Dxb-8_Ap28dqNDBY7MiQhjAWSC_et_44ATFP5GLEE6J-6eP6fJKkNqx3ZPvvZPElqeBJpQ3DH3RDNyi5J1krHOZt3Snuf_d01OfgzFD5VW0BIgTX00B6ysB_uquPc6yT4FThI"
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
            {projectImages.map((img, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800 aspect-[4/3] cursor-pointer"
                >
                    <img
                        alt={`Project ${index + 1}`}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                        src={img}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">View Project</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
