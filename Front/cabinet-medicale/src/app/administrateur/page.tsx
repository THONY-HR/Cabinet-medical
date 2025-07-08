// presentation/page.tsx
import type { Metadata } from "next";
import Header from "../Structure/Header";
import SidebarAdmin from "../Structure/SidebarAdmin";
import "../page.css"; // <--- important pour appliquer les styles de `.Page`

export const metadata: Metadata = {
    title: "Administrateur cabinet medicale",
    description: "Administrateur de ce cabinet medicale",
};


export default function AdmiPage() {
    return (
        <main>
            <Header />
            <SidebarAdmin />
        </main>
    );
}
