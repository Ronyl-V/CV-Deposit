'use client';

import React from 'react';
import { FileText, Users } from 'lucide-react';

const DashboardEntreprise = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedProfile, setSelectedProfile] = React.useState('');
  const navigate = (path: string) => {
    window.location.href = path;
  };

  const toast = ({ title, description }: { title: string; description: string }) => {
    alert(`${title}\n${description}`);
  };

  const companyData = {
    nom: 'TechCorp Solutions',
    contact: 'Jean Dupont',
    email: 'contact@techcorp.com'
  };

  const cvList = [
    {
      id: 1,
      nom: 'Marie Martin',
      prenom: 'Marie',
      email: 'marie.martin@email.com',
      profil: 'Développeur',
      niveauEtude: 'Bac +5',
      ville: 'Paris',
      age: 28,
      experience: '3 ans',
      competences: ['React', 'Node.js', 'TypeScript']
    },
    {
      id: 2,
      nom: 'Pierre Durand',
      prenom: 'Pierre',
      email: 'pierre.durand@email.com',
      profil: 'Designer',
      niveauEtude: 'Bac +3',
      ville: 'Lyon',
      age: 26,
      experience: '2 ans',
      competences: ['Figma', 'Adobe Creative', 'UI/UX']
    }
  ];

  const handleLogout = () => {
    toast({
      title: 'Déconnexion',
      description: 'Vous avez été déconnecté avec succès',
    });
    navigate('/');
  };

  const handleViewCV = (cvId: number) => {
    toast({
      title: 'Consultation CV',
      description: 'Ouverture du CV détaillé...',
    });
    console.log(`Consultation du CV ${cvId}`);
    navigate(`/cv-detail/${cvId}`);
  };

  const filteredCVs = cvList.filter(cv => {
    const matchesSearch =
      cv.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cv.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cv.ville.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cv.competences.some(comp => comp.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesProfile = selectedProfile === '' || cv.profil === selectedProfile;
    return matchesSearch && matchesProfile;
  });

  const uniqueProfiles = [...new Set(cvList.map(cv => cv.profil))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FileText className="text-blue-600 w-6 h-6" />
            <h1 className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CVPlatform
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold">{companyData.nom}</p>
              <p className="text-xs text-gray-500">{companyData.contact}</p>
            </div>
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-red-600 border border-red-200 px-3 py-1 rounded hover:bg-red-50 transition"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Dashboard Entreprise</h2>
          <p className="text-gray-600">Explorez les CV des candidats et trouvez vos futurs talents</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-4">Filtres</h3>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm mb-4"
                placeholder="Rechercher..."
              />
              <select
                value={selectedProfile}
                onChange={(e) => setSelectedProfile(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm mb-4"
              >
                <option value="">Tous les profils</option>
                {uniqueProfiles.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedProfile('');
                }}
                className="w-full border border-gray-300 text-gray-700 bg-gray-50 rounded-md py-2 text-sm"
              >
                Réinitialiser
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-4">Statistiques</h3>
              <ul className="text-sm space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <FileText className="w-4 h-4 text-indigo-500" />
                  <span>CV disponibles : <strong>{filteredCVs.length}</strong></span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Users className="w-4 h-4 text-purple-500" />
                  <span>Profils uniques : <strong>{uniqueProfiles.length}</strong></span>
                </li>
              </ul>
            </div>
          </aside>

          {/* Liste des CV */}
          <section className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="text-indigo-600 w-5 h-5" />
              <h3 className="text-xl font-semibold text-gray-800">Liste des CV</h3>
            </div>

            {filteredCVs.map((cv) => (
              <div
                key={cv.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">{cv.prenom} {cv.nom}</h4>
                    <p className="text-sm text-gray-600">{cv.email}</p>
                  </div>
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 text-xs rounded-full font-medium">
                    {cv.profil}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
                  <div>
                    <p><span className="font-medium">Niveau :</span> {cv.niveauEtude}</p>
                    <p><span className="font-medium">Ville :</span> {cv.ville}</p>
                  </div>
                  <div>
                    <p><span className="font-medium">Âge :</span> {cv.age} ans</p>
                    <p><span className="font-medium">Expérience :</span> {cv.experience}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Compétences :</p>
                  <div className="flex flex-wrap gap-2">
                    {cv.competences.map((c, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 border border-gray-300 text-gray-700 px-2 py-1 text-xs rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleViewCV(cv.id)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow hover:bg-indigo-700 transition"
                  >
                    Voir le CV complet
                  </button>
                  <button
                    className="border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition"
                    onClick={() => alert('Fonction de téléchargement à venir')}
                  >
                    Télécharger
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default DashboardEntreprise;
