import type { Request, Response } from "express";
import type { IUser } from "./issues.interface";
import { issueService } from "./issues.service";

const createIssue = async (req: Request, res: Response) => {
  const user = req.user as IUser;
  try {
    const result = await issueService.createIssueIntoDB(req.body, user);
    res.status(201).json(
      {
        success:true,
        message: "Issue created successfully",
        data: result.rows[0]
      }
    )
    
  } catch (error: any) {
    res.status(500).json(
      {
        success:false,
        message: error.message,
        error: error
      }
    )
   
  }
};
export const issueController={
  createIssue,
}