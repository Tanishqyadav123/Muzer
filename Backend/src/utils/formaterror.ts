import { error } from "console";
import { ZodIssue } from "zod";

export const formatError = (zodError: ZodIssue[]): string[] => {
  let errors: string[] = [];

  zodError.forEach((issue: ZodIssue) => {
    errors.push(`${issue.path} : ${issue.message}`);
  });

  return errors;
};
