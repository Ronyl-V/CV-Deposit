import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function POST(req: Request) {
  const data = await req.json()

  try {
    const hashedPassword = await bcrypt.hash(data.password, 10)

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        type: 'ENTREPRISE',
        nom: data.nom,
        prenom: data.prenom,
        telephone: data.telephone,
        telephone2: data.telephone2,
        adresse: data.adresse,
        ville: data.ville,
        pays: data.pays,
        registreCommerce: data.registreCommerce,
        nomEntreprise: data.nomEntreprise,
      },
    })

    return NextResponse.json({ success: true, user })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
