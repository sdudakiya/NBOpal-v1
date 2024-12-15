import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { getActivities } from '../controllers/activity.controller';

export const activityRouter = Router();

activityRouter.get('/', asyncHandler(getActivities));