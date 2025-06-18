import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, motDePasse, type } = await req.json();

  if (!email || !motDePasse || !type) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  if (type === "particulier") {
    const user = await prisma.utilisateur.findUnique({ where: { email } });
    if (!user || user.password !== motDePasse) {
      return NextResponse.json({ error: "Email ou mot de passe invalide" }, { status: 401 });
    }
  } else if (type === "entreprise") {
    const ent = await prisma.entreprise.findUnique({ where: { email } });
    if (!ent || ent.password !== motDePasse) {
      return NextResponse.json({ error: "Email ou mot de passe invalide" }, { status: 401 });
    }
  } else {
    return NextResponse.json({ error: "Type d'utilisateur invalide" }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
