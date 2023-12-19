import { Request, Response, NextFunction } from 'express';

interface PingResponse {
    message: string;
  }
export default class  PingController {
    //[GET] /
  public getMessage(req: Request, res: Response, next: NextFunction): void {
    const response: PingResponse = {
        message: "pong",
      };
      res.json(response);
  }
}
