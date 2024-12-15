import { Request, Response } from 'express';
import { VisitorService } from '../services/visitor.service';
import { ActivityService } from '../services/activity.service';
import { VisitorSchema } from '../../types/visitor';
import { ZodError } from 'zod';

const visitorService = new VisitorService();
const activityService = new ActivityService();

export const checkInVisitor = async (req: Request, res: Response) => {
  try {
    const validatedData = VisitorSchema.parse(req.body);
    const visitor = await visitorService.checkIn(validatedData);
    
    await activityService.addActivity({
      type: 'visitor',
      title: 'New Visitor',
      description: `${visitor.name} checked in for ${visitor.purpose}`,
    });

    res.status(201).json(visitor);
  } catch (error) {
    console.error('Check-in error:', error);
    
    if (error instanceof ZodError) {
      return res.status(400).json({ 
        error: 'Validation failed',
        details: error.errors 
      });
    }
    
    res.status(500).json({ 
      error: 'Failed to check in visitor',
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    });
  }
};

export const checkOutVisitor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const visitor = await visitorService.checkOut(id);
    
    await activityService.addActivity({
      type: 'visitor',
      title: 'Visitor Checkout',
      description: `${visitor.name} has checked out`,
    });

    res.json(visitor);
  } catch (error) {
    console.error('Check-out error:', error);
    res.status(404).json({ 
      error: 'Failed to check out visitor',
      message: error instanceof Error ? error.message : 'Visitor not found'
    });
  }
};

export const getVisitors = async (_req: Request, res: Response) => {
  try {
    const visitors = await visitorService.getAll();
    res.json(visitors);
  } catch (error) {
    console.error('Get visitors error:', error);
    res.status(500).json({ 
      error: 'Failed to get visitors',
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    });
  }
};