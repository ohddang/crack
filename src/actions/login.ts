"use server";

import * as z from "zod";

export const login = (values: any) => {
  console.log("login server action", values);
};
