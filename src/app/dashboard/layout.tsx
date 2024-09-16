import NavHeader from "@/components/navigation/nav-header"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
    <div className="relative flex min-h-screen">
        <NavHeader />
    <div className="flex-1 flex flex-col md:mx-6 mx-4 mt-14">
        <main className="p-4 flex-1 overflow-auto">
            {children}
        </main>
    </div>
    </div>
    )
}