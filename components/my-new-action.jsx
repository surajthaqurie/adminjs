import { Box } from "adminjs";

const MyNewAction = (props) => {
  const { resource, action, data } = props;

  console.log(resource);
  console.log(action);
  console.log(data);

  return <Box>Some Action Content</Box>;
};

export default MyNewAction;
