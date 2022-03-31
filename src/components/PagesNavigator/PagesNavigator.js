import { Box } from "@chakra-ui/react";
import ButtonsPageNavigator from "../ButtonsPageNavigator/ButtonsPageNavigator";
import { useState } from "react";

function PagesNavigator() {
  const [view, setView] = useState(false);

  const navs = [
    { id: 0, cat: "Productos" },
    { id: 1, cat: "Armá tu pc" },
    { id: 2, cat: "Ayuda" },
    { id: 3, cat: "Marcas sponsor" },
  ];

  return (
    <Box
      w="full"
      h="4rem"
      backgroundColor="#fd611a"
      py="1"
      px="4"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      sx={{
        "@media screen and (max-width: 800px)": {
          justifyContent: "flex-start",
        },
      }}
    >
      <ButtonsPageNavigator view={view} setView={setView} navs={navs} />
    </Box>
  );
}

export default PagesNavigator;
