// presentation/page.tsx
import type { Metadata } from "next";
import Header from "../Structure/Header";
import "../page.css"; // <--- important pour appliquer les styles de `.Page`
import SidebarClient from "../Structure/SidebarClient";

export const metadata: Metadata = {
    title: "Client cabinet medicale",
    description: "Client de ce cabinet medicale",
};


export default function AdmiPage() {
    return (
        <main>
            <Header />
            <SidebarClient />
        </main>
    );
}
