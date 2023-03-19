require("dotenv").config();
const express = require("express");

const AdminJs = require("adminjs");
const AdminJSExpress = require("@adminjs/express");

const Connect = require("connect-pg-simple");
const session = require("express-session");

const { Resource, Database } = require("@adminjs/prisma");

const { AdminJResourceConfig } = require("./resources");

const PORT = process.env.PORT || 3000;
const DEFAULT_ADMIN = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

AdminJs.registerAdapter({ Database, Resource });

const start = async () => {
  const app = express();
  const admin = new AdminJs(AdminJResourceConfig);
  admin.watch(); // this builds your frontend code in development environment

  const ConnectSession = Connect(session);
  const sessionStore = new ConnectSession({
    conObject: {
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === "production",
    },
    tableName: "session",
    createTableIfMissing: true,
  });

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: "admin-auth",
      cookiePassword: "session-secret",
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: "sessionsecret",
      cookie: {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      },
      name: "admin-auth",
    }
  );
  app.use(admin.options.rootPath, adminRouter);

  app.listen(PORT, () => {
    console.info(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();
