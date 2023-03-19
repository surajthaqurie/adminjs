const { ComponentLoader } = require("adminjs");

const componentLoader = new ComponentLoader();

const Components = {
  MyInput: componentLoader.add("MyInput", "./my-input"),
  MyButton: componentLoader.add("MyButton", "./my-button"),
  MyNewAction: componentLoader.add("MyNewAction", "./my-new-action"),
  MyCustomAction: componentLoader.add(
    "MyCustomAction",
    "./my-custom-action.jsx"
  ),
  MyRandomPicture: componentLoader.add(
    "MyRandomPicture",
    "./my-random-picture"
  ),
  FileUploadInput: componentLoader.add(
    "FileUploadInput",
    "./file-upload-input"
  ),
  Dashboard: componentLoader.add("Dashboard", "./dashboard"),
  // other custom components
};

module.exports = { componentLoader, Components };
