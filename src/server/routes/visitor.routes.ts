import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { 
  checkInVisitor, 
  checkOutVisitor, 
  getVisitors 
} from '../controllers/visitor.controller';

export const visitorRouter = Router();

visitorRouter.post('/check-in', asyncHandler(checkInVisitor));
visitorRouter.post('/check-out/:id', asyncHandler(checkOutVisitor));
visitorRouter.get('/', asyncHandler(getVisitors));