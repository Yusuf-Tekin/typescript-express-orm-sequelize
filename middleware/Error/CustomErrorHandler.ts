import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../Core/Error/CustomError";



export function errorHandle(err:CustomError,req:Request,res:Response,next:NextFunction){
    if(err.code == 400) {
        err = new CustomError('test',400);
    }


    res.json({
        message: err.message,
        code: err.code
    })
}