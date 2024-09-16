'use client'; 

import ColorMode from "../color-mode";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';

export default function NavHeader() {
    const pathname = usePathname();
    return (
        <main>
            <div className="fixed w-full p-2 top-0 backdrop-blur-sm border-b border-gray-300 shadow-md" style={{zIndex:99999}}>
                <div className="flex flex-row justify-between items-center px-1">
                    <div className="flex flex-row ml-2 gap-1 items-center">
                        <BuildingStorefrontIcon className="h-5 w-5" />
                        <h1 className="text-md font-bold">
                            <Link
                                href="/"
                                className="hover:underline"
                            >
                            ECOMMERCE
                            </Link>
                        </h1>
                    </div>
                    <div>
                        <ul className="flex flex-row items-center">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={clsx(`p-1 px-4 rounded-md hover:underline`,
                                        {
                                            'underline' : pathname === item.href,
                                        }
                                    )}
                                >
                                    <li className="text-md">
                                        {item.label}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="px-2">
                        <ColorMode />
                    </div>
                </div>
            </div>
        </main>
    )
}

const navItems = [
    {
        label: 'Dashboard',
        href: '/dashboard',
    },
    {
        label: 'Products',
        href: '/dashboard/products',
    },
    {
        label: 'Orders',
        href: '/order',
    },
    {
        label: 'Payments',
        href: '/payments',
    }
];