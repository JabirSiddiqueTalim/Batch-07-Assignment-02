import type { NextFunction, Request, Response } from "express";
import type { IUser } from "./issues.interface";
import { issueService } from "./issues.service";

const createIssue = async (req: Request, res: Response) => {
  const user = req.user as IUser;
  try {
    const result = await issueService.createIssueIntoDB(req.body, user);
    res.status(201).json(
      {
        success: true,
        message: "Issue created successfully",
        data: result.rows[0]
      }
    )

  } catch (error: any) {
    res.status(500).json(
      {
        success: false,
        message: error.message,
        error: error
      }
    )

  }
};
const getAllIssues = async (req: Request, res: Response) => {
  const { sort, type, status } = req.query;
  try {
    const result = await issueService.getAllIssuesFromDB(
      sort as string,
      type as string,
      status as string,
    );
    res.status(200).json({
      success: true,
      //message: "",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};
const getSingleIssue = async (req: Request, res:Response, next:NextFunction,
) => {
  const id = req.params.id;
  try {
    const result = await issueService.getSingleIssueFromDB(id as string);
    
  } catch (error: any) {
    
  }
};
export const issueController = {
  createIssue,
  getAllIssues,
  getSingleIssue
}