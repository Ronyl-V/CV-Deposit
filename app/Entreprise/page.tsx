"use client"
import React from 'react';
import NavInscription from '../Components/NavInscription';
import { Building2 } from 'lucide-react';

const InscriptionPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      registreCommerce: form.registreCommerce.value,
      nomEntreprise: form.nomEntreprise.value,
      nom: form.nom.value,
      prenom: form.prenom.value,
      telephone: form.telephone.value,
      telephone2: form.telephone2.value,
      email: form.email.value,
      adresse: form.adresse.value,
      ville: form.ville.value,
      pays: form.pays.value,
      password: form.password.value,
      confirmPassword: form.confirmPassword.value,
      type: "ENTREPRISE"
    };

    if (data.password !== data.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    const res = await fetch('/api/auth/register-entreprise', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await res.json();
    if (result.success) {
      alert("Inscription entreprise réussie !");
      // Redirige vers login ou dashboard entreprise
    } else {
      alert("Erreur : " + result.error);
    }
  };

  return (
    <>
      <NavInscription />
      <div className="bg-indigo-50 min-h-screen w-full flex justify-center items-center py-12 px-4">
        <div className="max-w-2xl w-full bg-white/60 backdrop-blur-sm shadow-xl rounded-xl p-8">
          <div className="text-center">
            <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-16 h-16 flex items-center justify-center">
              <Building2 className="h-10 w-10 text-indigo-600" />
            </div>
            <h2 className="text-3xl text-gray-900 font-semibold">Inscription Entreprise</h2>
            <p className="text-gray-600 mt-1">Créez votre compte entreprise pour accéder aux CV</p>
          </div>

          <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
            {/* Connexion */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-2">Informations Entreprise</h3>
              <div>
                <label className="block mb-1 text-sm font-bold text-gray-700">Registre de Commerce *</label>
                <input name="registreCommerce" required placeholder="RC123456789" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-bold text-gray-700">Nom de L'Entreprise *</label>
                <input name="nomEntreprise" required placeholder="Nom de votre entreprise" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
              </div>
            </section>

            {/* Contact Principal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-2">Contact principal</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className='block mb-1 text-sm font-bold text-gray-700'>Nom *</label>
                  <input name="nom" placeholder="Dupont" required className='w-full border border-gray-300 px-3 py-2 rounded-md' />
                </div>
                <div>
                  <label htmlFor="prenom" className='block mb-1 text-sm font-bold text-gray-700'>Prénom *</label>
                  <input name="prenom" placeholder="Jean" required className='w-full border border-gray-300 px-3 py-2 rounded-md'/>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telephone" className='block mb-1 text-sm font-bold text-gray-700'>Téléphone principal *</label>
                  <input name="telephone" placeholder="01 23 45 67 89" required className='w-full border border-gray-300 px-3 py-2 rounded-md' />
                </div>
                <div>
                  <label htmlFor="telephone2" className='block mb-1 text-sm font-bold text-gray-700'>Téléphone secondaire</label>
                  <input name="telephone2" placeholder="06 12 34 56 78" className='w-full border border-gray-300 px-3 py-2 rounded-md' />
                </div>
              </div>
              <div>
                <label htmlFor="email" className='block mb-1 text-sm font-bold text-gray-700'>Email *</label>
                <input name="email" type="email" placeholder="contact@entreprise.com" required className='w-full border border-gray-300 px-3 py-2 rounded-md' />
              </div>
            </div>

            {/* Adresse */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-2">Adresse de L'Entreprise</h3>
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

            {/* Sécurité */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-2">Informations de connexion</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-bold text-gray-700">Mot de passe *</label>
                  <input name="password" type="password" required placeholder="••••••••" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-bold text-gray-700">Confirmer le mot de passe *</label>
                  <input name="confirmPassword" type="password" required placeholder="••••••••" className="w-full border border-gray-300 px-3 py-2 rounded-md" />
                </div>
              </div>
            </section>

            <button type="submit" className="w-full cursor-pointer py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md font-medium text-lg">
              Créer le compte entreprise
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
