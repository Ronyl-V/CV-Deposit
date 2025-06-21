// app/api/cv/[id]/download/route.ts
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const cv = await prisma.cv.findUnique({
    where: { id },
  });

  if (!cv || !cv.fichierUrl) {
    return NextResponse.json({ error: 'CV introuvable' }, { status: 404 });
  }

  return NextResponse.redirect(cv.fichierUrl);
}
