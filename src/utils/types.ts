export type RESTUpConfigType = {
  name?: string;
  description?: string;
  'cli-version'?: string;
  controllers: string[];
  middlewares: string[];
  models: string[];
  routers: string[];
}

export type RESTUpClasses = {
  controllers: string[];
  middlewares: string[];
  models: string[];
  routers: string[];
}
