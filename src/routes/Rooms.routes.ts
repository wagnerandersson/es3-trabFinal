import { Router } from 'express';
import { getRepository } from 'typeorm';
import Rooms from '../models/Rooms';
import { validate } from 'class-validator';

const roomsRouter = Router();

roomsRouter.post('/', async (request, response) => {
  try {
    const rep = getRepository(Rooms);
    const { number, classHour } = request.body;
    const rooms = rep.create({
      number,
      classHour,
    });

    const errors = await validate(rooms);
    console.log(rooms);

    if (errors.length === 0) {
      const res = await rep.save(rooms);
      return response.status(201).json(res);
    }
    response.status(400).json(errors);
    // response.json(await getRepository(Rooms).save(request.body));
  } catch (err) {
    console.log('err.message: >>', err.message);
    return response.status(400).send();
  }
});

roomsRouter.get('/', async (request, response) => {
  response.json(await getRepository(Rooms).find());
});

export default roomsRouter;
