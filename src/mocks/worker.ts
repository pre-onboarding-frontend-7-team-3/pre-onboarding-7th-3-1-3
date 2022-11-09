/* eslint-disable import/prefer-default-export */
import { setupWorker } from "msw";
import { handlers } from "./handler";

export const worker = setupWorker(...handlers);
