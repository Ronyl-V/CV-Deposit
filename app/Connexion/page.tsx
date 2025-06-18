"use client"
import React, { useState } from "react";
import { FileText, ArrowLeft, User, Building2 } from "lucide-react";
import NavInscription from "../Components/NavInscription";

const Connexion = () => {
  const [activeTab, setActiveTab] = useState<"particulier" | "entreprise">("particulier");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, userType: string) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    if (!email || !password) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, type: userType.toUpperCase() }),
      });

      let data;
      try {
        data = await res.json();
      } catch (e) {
        alert("La réponse du serveur n'est pas un JSON valide");
        console.error("Réponse brute :", await res.text());
        return;
      }

      if (res.ok && data.success) {
        alert(`Connexion réussie (${userType})`);
        window.location.href = userType === "particulier" ? "/dashboard/particulier" : "/dashboard/entreprise";
      } else {
        alert(data.error || "Échec de la connexion");
      }
    } catch (err) {
      alert("Erreur lors de la connexion, veuillez réessayer plus tard.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <NavInscription />

      {/* Formulaire de connexion */}
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white/60 backdrop-blur-sm border border-gray-300 shadow-xl rounded-lg p-6">
          <h2 className="text-3xl text-center text-gray-900 font-bold mb-2">
            Connexion
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Connectez-vous à votre espace personnel
          </p>

          {/* Onglets */}
          <div className="flex justify-around border-b border-gray-300 mb-4">
            <button
              onClick={() => setActiveTab("particulier")}
              className={`tab-button ${
                activeTab === "particulier" ? "active" : ""
              }`}
            >
              <User className="inline-block mr-1" />
              Particulier
            </button>
            <button
              onClick={() => setActiveTab("entreprise")}
              className={`tab-button ${
                activeTab === "entreprise" ? "active" : ""
              }`}
            >
              <Building2 className="inline-block mr-1" />
              Entreprise
            </button>
          </div>

          {/* Formulaire Particulier */}
          {activeTab === "particulier" && (
            <form
              onSubmit={(e) => handleSubmit(e, "particulier")}
              className="space-y-4"
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                placeholder="votre.email@example.com"
              />
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                name="motDePasse"
                required
                className="w-full p-2 mb-6 border border-gray-300 rounded"
                placeholder="••••••••"
              />
              <button
                type="submit"
                className="w-full py-2 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded"
              >
                Se connecter
              </button>
              <p className="text-center text-gray-600 mt-4">
                Pas encore de compte ?{" "}
                <a
                  href="/inscription-particulier"
                  className="text-blue-600 underline"
                >
                  S'inscrire
                </a>
              </p>
            </form>
          )}

          {/* Formulaire Entreprise */}
          {activeTab === "entreprise" && (
            <form
              onSubmit={(e) => handleSubmit(e, "entreprise")}
              className="space-y-4"
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                placeholder="contact@entreprise.com"
              />
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                name="motDePasse"
                required
                className="w-full p-2 mb-6 border border-gray-300 rounded"
                placeholder="••••••••"
              />
              <button
                type="submit"
                className="w-full py-2 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded"
              >
                Se connecter
              </button>
              <p className="text-center text-gray-600 mt-4">
                Pas encore de compte ?{" "}
                <a
                  href="/inscription-entreprise"
                  className="text-indigo-600 underline"
                >
                  S'inscrire
                </a>
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .tab-button {
          padding: 0.5rem 1rem;
          font-weight: 600;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
          cursor: pointer;
          background: none;
          border: none;
        }
        .tab-button.active {
          color: #1d4ed8;
          border-bottom-color: #6366f1;
        }
      `}</style>
    </div>
  );
};

export default Connexion;
