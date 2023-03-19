import React, { useState } from "react";
import {
  Box,
  RichTextEditor,
  Icon,
  Button,
  Input,
  Drawer,
  Header,
  DrawerContent,
  Label,
  DropZone,
} from "@adminjs/design-system";

export const DashBoardComponent = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  return (
    <Box variant="grey" width={1}>
      <Label>Im new dashboard </Label>
      <Label>Drop splash screen</Label>
      <DropZone />
    </Box>
  );
};

export default DashBoardComponent;
