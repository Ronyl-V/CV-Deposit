import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const utilisateur = await prisma.utilisateur.findUnique({
    where: { id: Number(id) },
    include: {
      cvs: true, // Assure-toi que la relation existe dans ton schema.prisma
    },
  });

  if (!utilisateur) {
    return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 });
  }

  return NextResponse.json(utilisateur);
}
