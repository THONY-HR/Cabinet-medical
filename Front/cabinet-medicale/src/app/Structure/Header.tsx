// Structure/Header.tsx
import Link from "next/link";
import "../Header.css";

export default function Header() {
    return (
        <div className="header">
            <main className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <Link
                    className="hover:underline hover:underline-offset-4 text-white text-lg"
                    href="/presentation"
                >
                    Presentation
                </Link>

                <Link
                    className="hover:underline hover:underline-offset-4 text-white text-lg"
                    href="/administrateur"
                >
                    Administrateur
                </Link>

                <Link
                    className="hover:underline hover:underline-offset-4 text-white text-lg"
                    href="/client/consultation"
                >
                    Cabinet medecin consultation
                </Link>
            </main>
        </div>
    );
}
