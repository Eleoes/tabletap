import Link from "next/link";
import NavBar from "../../../components/NavBar";

export default function Menu(){
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                {/* HEADER */}
                <NavBar />
                {/* HERO BANNER */}
                <div className="h-96 overflow-hidden">
                    <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
                    <h1 className="text-7xl text-white capitalize text-shadow text-center">Tycoon Kitchen (San Francisco)</h1>
                    </div>
                </div>
                {/* HEADER */}
                {/* MAIN CONTENT */}
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                    <div className="bg-white w-[100%] rounded p-3 shadow">
                        {/* RESTAURANT NAVBAR */}
                        <nav className="flex text-reg border-b pb-2">
                            <Link href="/restaurant/milestone-grill" className="mr-7">Overview</Link>
                            <Link href="/restaurant/milestone-grill/menu" className="mr-7">Menu</Link>
                        </nav>
                        {/* RESTAURANT NAVBAR */}
                        {/* MENU */}
                        <main className="bg-white mt-5">
                            <div>
                                <div className="mt-4 pb-1 mb-1">
                                    <h1 className="font-bold text-4xl">Menu</h1>
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    {/* MENU CARD */}
                                    <div className="border rounded p-3 w-[49%] mb-3">
                                        <h3 className="font-bold text-lg">Red Curry</h3>
                                        <p className="font-light mt-1 text-sm">A red curry with tofu, beef, chicken or shrimp.</p>
                                        <p className="mt-7">$14.00</p>
                                    </div>
                                    {/* MENU CARD */}
                                </div>
                            </div>
                        </main>
                    {/* MENU */}
                    </div>
                </div>
                {/* MAIN CONTENT */}
            </main>
        </main>
    )
}