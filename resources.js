const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { Components, componentLoader } = require("./components/Component");
const { ValidationError } = require("adminjs");
const uploadFeature = require("@adminjs/upload");

const usersNavigation = {
  name: "Users",
  icon: "User",
};

const customBefore = (request, context) => {
  const { query = {} } = request;
  const newQUery = {
    ...query,
    ["filters.status"]: "active",
  };

  request.query = newQUery;
  return request;
};

const customAfter = (originalResponse, request, context) => {
  if (!originalResponse && !originalResponse?.meta) {
    console.log("----------------im custom after hook");
    return null;
  }
  console.log(originalResponse);
  return originalResponse;
};

const dashboardHandler = async () => {
  // Asynchronous code where you, e. g. fetch data from your database

  return { message: "Hello World" };
};
const validateForm = (request, context) => {
  const { payload = {}, method } = request;

  // We only want to validate "post" requests
  if (method !== "post") return request;

  // Payload contains data sent from the frontend
  const { age = null, email = "" } = payload;

  // We will store validation errors in an object, so that
  // we can throw multiple errors at the same time
  const errors = {};

  // We are doing validations and assigning errors to "errors" object
  // if (!age || age < 18) {
  //   errors.age = {
  //     message: "A user must be at least 18 years old",
  //   };
  // }

  if (email.trim().length === 1) {
    errors.email = {
      message: "email name is required",
    };
  }

  // We throw AdminJS ValidationError if there are errors in the payload
  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request;
};

const PostResourceOptions = {
  resource: {
    // root: "/admin/resources/posts",
    model: prisma._baseDmmf.modelMap.Post,
    client: prisma,
  },
  options: {
    actions: {
      show: {
        isAccessible: true,
        isVisible: true,
      },
      list: {
        showFilter: true,
      },
      delete: {
        guard: "doYouReallyWantToDoThis",
      },
      myCustomAction: {
        actionType: "record",
        component: Components.MyCustomAction,
        handler: (request, response, context) => {
          const { record, currentAdmin } = context;
          console.log(currentAdmin);
          return {
            record: record.toJSON(currentAdmin),
            msg: "Hello Worlds!!!!!!",
          };
        },
        // showInDrawer: true,
        parent: "More",
      },
      myOtherCustomAction: {
        actionType: "record",
        component: false,
        handler: (request, response, context) => {
          const { record, currentAdmin } = context;
          console.log(currentAdmin);
          return {
            record: record.toJSON(currentAdmin),
            msg: "Hello Worlds!!!!!!",
          };
        },
        // showInDrawer: true,
        parent: "More",
      },
    },
    properties: {
      someText: {
        type: "string",
        components: {
          edit: Components.MyInput, // this is our custom component
        },
      },
      someText: {
        type: "string",
        components: {
          list: Components.MyRandomPicture,
          show: Components.MyRandomPicture,
        },
      },
      content: {
        description: "userLinksHint",
      },
    },
  },
};

const UserResourceOptions = {
  resource: {
    // root: "/admin/resources/users",
    model: prisma._baseDmmf.modelMap.Users,
    client: prisma,
  },
  options: {
    // navigation: usersNavigation,
    actions: {
      // list: {
      //   before: [customBefore],
      //   after: [customAfter],
      // },
      new: {
        before: [validateForm],
      },
    },
    properties: {
      email: {
        availableValues: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "other", label: "Other" },
          { value: "notSay", label: "Rather not say" },
        ],
      },
      name: {
        type: "password",
      },
      phone: {
        components: {
          edit: Components.FileUploadInput,
          new: Components.FileUploadInput,
        },
      },
    },
  },
};

exports.AdminJResourceConfig = {
  resources: [PostResourceOptions, UserResourceOptions],
  componentLoader,
  dashboard: {
    component: Components.Dashboard,
    // handler: dashboardHandler,
  },
  // softwareBrothers: false,
};
