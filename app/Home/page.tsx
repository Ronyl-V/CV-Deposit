import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Link from 'next/link'
import {FileText, Download, Eye, Building2, Users, Plus} from "lucide-react"

const Homepage = () => {
    return (
      <>
        <NavBar />
  
        <div className="bg-blue-50 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <section className="w-full flex flex-col justify-center items-center text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Votre plateforme de CV
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                professionnelle
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Créez, gérez et partagez vos CV en ligne. Connectez talents et entreprises sur une plateforme moderne et intuitive.
            </p>
          </section>
  

          <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group p-6 rounded-2xl border-2 border-transparent hover:border-blue-300 bg-white/60 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Particulier</h3>
                <p className="text-gray-600 mt-1">Créez et gérez votre CV professionnel</p>
              </div>
  
              <div className="space-y-4 mt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Plus className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Créer votre CV</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Gérer vos informations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Télécharger en PDF/DOC</span>
                  </div>
                </div>
  
                <div className="mt-4">
                <Link href="/Particulier" className="inline-block w-full text-center py-3 px-6 rounded-xl text-white text-base font-semibold shadow-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Commencer maintenant
                </Link>
                </div>
              </div>
            </div>
  
            <div className="group p-6 rounded-2xl border-2 border-transparent hover:border-indigo-300 bg-white/60 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-10 w-10 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Entreprise</h3>
                <p className="text-gray-600 mt-1">Trouvez les meilleurs talents</p>
              </div>
  
              <div className="space-y-4 mt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Consulter les CV</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Voir les détails</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Gestion des candidats</span>
                  </div>
                </div>
  
                <div className="mt-4">
                <Link href="/Entreprise" className="inline-block w-full text-center py-3 px-6 rounded-xl text-white text-base font-semibold shadow-md bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.03] active:scale-100 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                Découvrir les talents
                </Link>
                </div>
              </div>
            </div>
          </section>


          <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pourquoi choisir CVPlatform ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interface moderne</h3>
              <p className="text-gray-600">Une interface intuitive et responsive pour une expérience optimale</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Download className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Export facile</h3>
              <p className="text-gray-600">Téléchargez vos CV en PDF ou DOC en un clic</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Connexion directe</h3>
              <p className="text-gray-600">Mettez en relation candidats et recruteurs efficacement</p>
            </div>
            </div>
          </div>
        </div>
  
        <Footer />
      </>
    )
  }

export default Homepage
