import type { Request, Response } from "express";
import { authService } from "./auth.service";

//Signup
const signupUser=async(req:Request,res:Response)=>
  {
    
     try {
      const result=await authService.createUserIntoDB(req.body);
        res.status(201).json(
          {
            success: true,
            message:"User registered successfully",
            data: result.rows[0]
          }
        )
     } catch (error :any) {
      res.status(500).json(
        {
          message: error.message,
          error: error
        }
      ) }
 }

 //Login 
 const loginUser = async (req: Request, res: Response) => 
 {
  const {email, password} = req.body;
  try {
    const result = await authService.loginUserIntoDB(email as string, password as string)
    const {token ,user} = result;
    // console.log(token ,user);
    res.status(200).json(
      {
        success: true,
        message:"Login successfully",
        data: result
      }
    )

    
  } catch (error:any) {
    res.status(400).json(
      {
        message: error.message,
        error: error
      }
    )
  }

 }



 export const authController={
  signupUser,
  loginUser
}