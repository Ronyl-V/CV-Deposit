"use client"
import React from 'react';
import NavInscription from '../Components/NavInscription';
import { User } from 'lucide-react';

const InscriptionPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      email: form.email.value,
      password: form.password.value,
      confirmPassword: form.confirmPassword.value,
      nom: form.nom.value,
      prenom: form.prenom.value,
      dateNaissance: form.dateNaissance.value,
      telephone: form.telephone.value,
      adresse: form.adresse.value,
      ville: form.ville.value,
      pays: form.pays.value,
      niveauEtude: form.niveauEtude.value,
      profil: form.profil.value,
      type: "PARTICULIER",
    };

    if (data.password !== data.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await res.json();
    if (result.success) {
      alert("Inscription réussie !");
      // Redirige vers login ou dashboard
    } else {
      alert("Erreur : " + result.error);
    }
  };

  return (
    <>
      <NavInscription />
      <div className="bg-blue-50 min-h-screen w-full flex justify-center items-center py-12 px-4">
        <div className="max-w-2xl w-full bg-white/60 backdrop-blur-sm shadow-xl rounded-xl p-8">
          <div className="text-center">
            <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-16 h-16 flex items-center justify-center">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl text-gray-900 font-semibold">Inscription Particulier</h2>
            <p className="text-gray-600 mt-1">Créez votre compte pour commencer à gérer vos CV</p>
          </div>

          <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
            {/* Connexion */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-2">Informations de connexion</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-bold text-gray-700">Email *</label>
                  <input name="email" type="email" required placeholder="votre.email@example.com" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-bold text-gray-700">Mot de passe *</label>
                  <input name="password" type="password" required placeholder="••••••••" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm font-bold text-gray-700">Confirmer le mot de passe *</label>
                <input name="confirmPassword" type="password" required placeholder="••••••••" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
              </div>
            </section>

            {/* Infos personnelles */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-2">Informations personnelles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-bold text-gray-700">Nom *</label>
                  <input name="nom" required placeholder="Dupont" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-bold text-gray-700">Prénom *</label>
                  <input name="prenom" required placeholder="Jean" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-bold text-gray-700">Date de naissance</label>
                  <input name="dateNaissance" type="date" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-bold text-gray-700">Téléphone</label>
                  <input name="telephone" placeholder="06 12 34 56 78" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
                </div>
              </div>
            </section>

            {/* Adresse */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-2">Adresse</h3>
              <div>
                <label className="block mb-1 text-sm font-bold text-gray-700">Adresse</label>
                <input name="adresse" placeholder="123 rue de la Paix" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-bold text-gray-700">Ville</label>
                  <input name="ville" placeholder="Paris" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-bold text-gray-700">Pays</label>
                  <input name="pays" placeholder="France" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
                </div>
              </div>
            </section>

            {/* Professionnel */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-2">Informations professionnelles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-bold text-gray-700">Niveau d&apos;étude</label>
                  <select name="niveauEtude" className="w-full border border-gray-300 px-3 py-2 rounded-md">
                    <option value="">Sélectionnez votre niveau</option>
                    <option value="bac">Baccalauréat</option>
                    <option value="bac+2">Bac +2</option>
                    <option value="bac+3">Bac +3 (Licence)</option>
                    <option value="bac+5">Bac +5 (Master)</option>
                    <option value="bac+8">Bac +8 (Doctorat)</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-sm font-bold text-gray-700">Profil professionnel</label>
                  <select name="profil" className="w-full border border-gray-300 px-3 py-2 rounded-md">
                    <option value="">Sélectionnez votre profil</option>
                    <option value="DEVELOPPEUR">Développeur</option>
                    <option value="DESIGNER">Designer</option>
                    <option value="AUTRE">Autre</option>
                  </select>
                </div>
              </div>
            </section>

            <button type="submit" className="w-full cursor-pointer py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md font-medium text-lg">
              Créer mon compte
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Déjà un compte ? <button className="text-blue-600 hover:underline">Se connecter</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InscriptionPage;
