import { Router } from 'express';
import { getRepository } from 'typeorm';
import Rooms from '../models/Rooms';

const roomsRouter = Router();

roomsRouter.post('/', async (request, response) => {
  try {
    response.json(await getRepository(Rooms).save(request.body));
  } catch (err) {
    console.log('err.message: >>', err.message);
  }
});

roomsRouter.get('/', async (request, response) => {
  response.json(await getRepository(Rooms).find());
});

export default roomsRouter;
