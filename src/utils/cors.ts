import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

export const cors = Cors({
  methods: ['POST'],
  origin: '*',
});
