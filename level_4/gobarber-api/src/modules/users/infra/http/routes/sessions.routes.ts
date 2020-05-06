import { Router, Request, Response } from 'express';
import SessionController from '../controllers/SessionsController';

const sessionRouter = Router();

const sessionController = new SessionController();

sessionRouter.post('/', sessionController.create);

export default sessionRouter;
