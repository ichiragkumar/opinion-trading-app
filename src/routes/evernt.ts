import express from 'express';
import { createEvent } from '../controllers/events/createEvent';
import { updateEvent } from '../controllers/events/updateEvent';
import { deleteEvent } from '../controllers/events/deleteEvent';
import { deleteMultipleEvents } from '../controllers/events/deletemultiple';

const eventRouter = express.Router();

eventRouter.post('/event', createEvent);
eventRouter.patch('/event/:id', updateEvent);
eventRouter.delete('/event/:id', deleteEvent);

eventRouter.delete('/events', deleteMultipleEvents);
