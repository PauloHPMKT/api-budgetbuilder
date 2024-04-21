import express, { Application } from 'express';

export class App {
  public readonly app: Application;

  constructor() {
    this.app = express();
  }

  listen(port: number) {
    const host = `http://localhost:${port}`;
    this.app.listen(port, () => {
      console.log(`[API_BUDGETBUILDER] - Server is running on host: ${host}`);
    });
  }
}
