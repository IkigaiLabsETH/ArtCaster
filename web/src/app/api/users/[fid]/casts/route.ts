import { getCasts } from '@lib/services/casts';
import { ProfileCastsApiResponse } from '@shared/types/api';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(
  _request: NextApiRequest,
  { params: { fid } }: { params: { fid: string } },
) {
  if (!fid) {
    return NextResponse.json({ error: 'fid is required' }, { status: 400 });
  }

  const payload: ProfileCastsApiResponse = { casts: await getCasts({ fid }) };
  return NextResponse.json(payload);
}
