"use client";

import React, { useEffect, useState } from "react";
import { FileText, User, Plus, Edit, Download, Eye, LogOut } from "lucide-react";

type CV = {
  id: number;
  titre: string;
  dateModification: string;
  statut: "Complet" | "Brouillon" | string;
};

type UserData = {
  prenom: string;
  nom: string;
  email: string;
  profil: string;
  cvs: CV[];
};

const DashboardParticulier = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Remplace ici par l'ID réel de l'utilisateur connecté
  const userId = 1;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/particulier/${userId}/cv`)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des données");
        return res.json();
      })
      .then((data) => {
        setUserData({
          prenom: data.prenom,
          nom: data.nom,
          email: data.email,
          profil: data.profil,
          cvs: data.cvs || [],
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  const handleLogout = () => {
    alert("Vous avez été déconnecté avec succès");
    window.location.href = "/";
  };

  const handleDownloadCV = (cvId: number) => {
    alert("Le CV est en cours de téléchargement...");
    console.log(`Téléchargement du CV ${cvId}`);
  };

  const goTo = (path: string) => {
    window.location.href = path;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl font-semibold">
        Chargement...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  if (!userData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                CVPlatform
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {userData.prenom} {userData.nom}
                </p>
                <p className="text-xs text-gray-600">{userData.profil}</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-sm text-red-600"
              >
                <LogOut className="h-4 w-4" />
                <span>Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Bienvenue, {userData.prenom} !
        </h1>
        <p className="text-gray-600 mb-6">
          Gérez vos CV et vos informations professionnelles
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/60 backdrop-blur-sm shadow-lg p-6 rounded-xl">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Plus className="h-5 w-5 text-blue-600" /> Actions rapides
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <button
                  onClick={() => goTo("/creer-cv")}
                  className="h-20 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl flex flex-col justify-center items-center"
                >
                  <Plus className="h-6 w-6" />
                  Créer un nouveau CV
                </button>
                <button
                  onClick={() => goTo("/mes-informations")}
                  className="h-20 border-2 border-blue-200 hover:border-blue-300 rounded-xl flex flex-col justify-center items-center"
                >
                  <User className="h-6 w-6" />
                  Modifier mes infos
                </button>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm shadow-lg p-6 rounded-xl">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" /> Mes CV
              </h2>
              <p className="text-sm text-gray-600 mt-1 mb-4">
                {userData.cvs.length} CV{userData.cvs.length > 1 ? "s" : ""} créé
                {userData.cvs.length > 1 ? "s" : ""}
              </p>

              <div className="space-y-4">
                {userData.cvs.map((cv) => (
                  <div
                    key={cv.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{cv.titre}</h3>
                        <p className="text-sm text-gray-600">
                          Modifié le{" "}
                          {new Date(cv.dateModification).toLocaleDateString("fr-FR")}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs rounded ${
                          cv.statut === "Complet"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {cv.statut}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="border px-3 py-1 text-sm rounded hover:bg-gray-100 flex items-center gap-1">
                        <Eye className="h-4 w-4" /> Voir
                      </button>
                      <button className="border px-3 py-1 text-sm rounded hover:bg-gray-100 flex items-center gap-1">
                        <Edit className="h-4 w-4" /> Modifier
                      </button>
                      <button
                        onClick={() => handleDownloadCV(cv.id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-sm rounded flex items-center gap-1"
                      >
                        <Download className="h-4 w-4" /> Télécharger
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm shadow-lg p-6 rounded-xl text-center">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-16 h-16 flex items-center justify-center">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">
                {userData.prenom} {userData.nom}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{userData.email}</p>
              <div className="text-left space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Profil :</span>
                  <span>{userData.profil}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>CV créés :</span>
                  <span>{userData.cvs.length}</span>
                </div>
              </div>
              <button
                onClick={() => goTo("/mes-informations")}
                className="mt-4 w-full border border-gray-300 hover:bg-gray-100 text-sm py-2 rounded"
              >
                Modifier mon profil
              </button>
            </div>

            <div className="bg-white/60 backdrop-blur-sm shadow-lg p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Statistiques</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">
                    {userData.cvs.length}
                  </div>
                  <div className="text-sm text-gray-600">CV créés</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {userData.cvs.filter((cv) => cv.statut === "Complet").length}
                  </div>
                  <div className="text-sm text-gray-600">CV complets</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">
                    {userData.cvs.filter((cv) => cv.statut === "Brouillon").length}
                  </div>
                  <div className="text-sm text-gray-600">Brouillons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardParticulier;
