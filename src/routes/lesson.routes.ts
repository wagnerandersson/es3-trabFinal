import { Router } from 'express';
import { getRepository } from 'typeorm';
import Lesson from '../models/Lesson';

const lessonRouter = Router();

lessonRouter.post('/', async (request, response) => {
  try {
    response.json(await getRepository(Lesson).save(request.body));
  } catch (err) {
    console.log('err.message: >>', err.message);
  }
});

lessonRouter.get('/', async (request, response) => {
  response.json(await getRepository(Lesson).find());
});

export default lessonRouter;
