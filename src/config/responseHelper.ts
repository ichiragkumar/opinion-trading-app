import { Response } from "express";

export const successResponse = (res: Response, data: any) => {
    res.status(200).json({
        success: true,
        message: "Request successful",
        data: data,
    });
};

export const createdResponse = (res: Response) => {
    res.status(201).json({
        success: true,
        message: "Resource created successfully",
    });
};

export const badRequestResponse = (res: Response, error: any) => {
    res.status(400).json({
        success: false,
        message: "Bad request",
        error: error,
    });
};

export const unauthorizedResponse = (res: Response, error: any) => {
    res.status(401).json({
        success: false,
        message: "Unauthorized",
        error: error,
    });
};

export const forbiddenResponse = (res: Response, error: any) => {
    res.status(403).json({
        success: false,
        message: "Forbidden",
        error: error,
    });
};

export const notFoundResponse = (res: Response, error: any) => {
    res.status(404).json({
        success: false,
        message: "Resource not found",
        error: error,
    });
};

export const conflictResponse = (res: Response, error: any) => {
    res.status(409).json({
        success: false,
        message: "Conflict - Resource already exists",
        error: error,
    });
};

export const validationErrorResponse = (res: Response, error: any) => {
    res.status(422).json({
        success: false,
        message: "Validation error",
        error: error,
    });
};

export const serverErrorResponse = (res: Response, error: any) => {
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error,
    });
};

export const serviceUnavailableResponse = (res: Response, error: any) => {
    res.status(503).json({
        success: false,
        message: "Service unavailable",
        error: error,
    });
};
