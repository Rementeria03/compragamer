import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export const MarcasSponsor = () => {
  return (
    <Box p="8" display="grid" gridTemplateColumns="repeat(2, 1fr)" sx={{"@media screen and (max-width: 630px)":{
        gridTemplateColumns: "1fr"
    }}}>
      <Box display="flex" justifyContent="center">
        <Image
          alt="Hyperx logo"
          src={`https://firebasestorage.googleapis.com/v0/b/compragamer-702bc.appspot.com/o/legal%2Fhyperx.png?alt=media&token=1573f8a7-2b47-4a5d-9000-fec956a4d11a`}
        />
      </Box>
      <Box>
        <Image
          alt="zotac gaming logo"
          src={`https://firebasestorage.googleapis.com/v0/b/compragamer-702bc.appspot.com/o/legal%2FzotacGaming.png?alt=media&token=de8a9e75-bf56-4fb1-b607-fa1a8bfb9416`}
        />
      </Box>
      <Box>
        <Image></Image>
      </Box>
      <Box>
        <Image></Image>
      </Box>
      <Box>
        <Image></Image>
      </Box>
    </Box>
  );
}
