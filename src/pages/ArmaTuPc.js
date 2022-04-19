import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export const ArmaTuPc = () => {
  return (
    <Box fontFamily="Urbanist" p="8" w="full" display="flex" flexDir="column">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w="full"
        mb="8"
      >
        <Text
          sx={{
            fontSize: "20px",
            fontWeight: "500",
          }}
          as="h1"
        >
          Armá tu pc
        </Text>
      </Box>
      <Box
        w="full"
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gap="4"
        sx={{
          "@media screen and (max-width: 630px)": {
            gridTemplateColumns: "1fr",
          },
        }}
      >
        <Box display="flex" justifyContent="center">
          <Image
            borderRadius="sm"
            src={`https://firebasestorage.googleapis.com/v0/b/compragamer-702bc.appspot.com/o/legal%2Fintel.jpg?alt=media&token=136348f5-1f09-428f-b642-09615a06520b`}
            alt="marca Intel"
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Image
            borderRadius="sm"
            src={`https://firebasestorage.googleapis.com/v0/b/compragamer-702bc.appspot.com/o/legal%2Famd.jpg?alt=media&token=2636aa7b-8a8e-4dd2-90e7-8dce59788bc5`}
            alt="marca Amd"
          />
        </Box>
      </Box>
    </Box>
  );
};
