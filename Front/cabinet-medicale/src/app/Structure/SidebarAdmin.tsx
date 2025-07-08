// Structure/Header.tsx
import Link from "next/link";
import "../Header.css";

export default function SidebarAdmin() {
    return (
        <div className="flex">
            {/* Sidebar fixé à gauche */}
            <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col py-8 px-4 shadow-lg fixed top-0 left-0 z-40">
                
                <nav className="flex flex-col gap-6">
                    <div className="mb-8 text-1xl font-bold text-center">Admin Panel</div>
                    <Link className="hover:bg-gray-700 rounded px-3 py-2 transition-colors" href="/administrateur/parameter">Parametre</Link>
                    <Link className="hover:bg-gray-700 rounded px-3 py-2 transition-colors" href="/administrateur/phrarmaceutical">Medicament</Link>
                    <Link className="hover:bg-gray-700 rounded px-3 py-2 transition-colors" href="/administrateur/phrarmaceutical/stock">Stock</Link>
                    <Link className="hover:bg-gray-700 rounded px-3 py-2 transition-colors" href="/administrateur/exam">Examen</Link>
                    <Link className="hover:bg-gray-700 rounded px-3 py-2 transition-colors" href="/administrateur/symptom">Symptome</Link>
                    <Link className="hover:bg-gray-700 rounded px-3 py-2 transition-colors" href="/administrateur/unite">Unite</Link>
                    <Link className="hover:bg-gray-700 rounded px-3 py-2 transition-colors" href="/administrateur/symptom-exam">Symptome examen</Link>
                    <Link className="hover:bg-gray-700 rounded px-3 py-2 transition-colors" href="/administrateur/acte">Acte medicale</Link>
                    <Link className="hover:bg-gray-700 rounded px-3 py-2 transition-colors" href="/administrateur/informationpersonnal">Caracteristique</Link>
                </nav>
            </aside>
            {/* Décalage du contenu principal pour ne pas passer sous le sidebar */}
            {/* Le main ici ne doit pas afficher de fond ni de padding, il doit juste servir de wrapper si besoin */}
            {/* Supprimé le fond blanc/gris ici */}
        </div>
    );
}
