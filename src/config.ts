const env = Deno.env;

export const APP_HOST: string = env.get("APP_HOST") || "127.0.0.1";
export const APP_PORT: number = env.get("APP_PORT")
  ? Number(env.get("APP_PORT"))
  : 4000;
