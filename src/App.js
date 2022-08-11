import React from 'react'
import {
  ImageList,ImageListItem,Box,Card,CardContent,CardActions,CardMedia, Typography,Button,Stack} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'


const App = () => {
  const images=[
    {
      src: 'https://source.unsplash.com/random',
      title: 'Image 1',
      description: 'Image 1 description'
    },
    {
      src: 'https://source.unsplash.com/random',
      title: 'Image 2',
      description: 'Image 2 description'
    },
    {
      src: 'https://source.unsplash.com/random',
      title: 'Image 3',
      description: 'Image 3 description'
    }
    ,{
      src: 'https://source.unsplash.com/random',
      title: 'Image 4',
      description: 'Image 4 description'
    }
    ,{
      src: 'https://source.unsplash.com/random',
      title: 'Image 5',
      description: 'Image 5 description'
    }
  ]

  return (<>
   <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Card>
        <CardContent>
        <CardMedia image="https://source.unsplash.com/random" height='140' component='img' />
        <CardContent>
          <Typography variant="h5" component="h2">
            Hello World
          </Typography>

        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" startIcon={<SendIcon />}>
            Send
          </Button>
        </CardActions>
        </CardContent>
      </Card>
      
    </Box>
    <Stack spacing={2}>
    <ImageList sx={{width: 500}} cols={3} rowHeight={164} >
      {images.map(image => (
        <ImageListItem key={image.src}>
          <img src={image.src} alt={image.title} />
          </ImageListItem>
      ))}
    </ImageList>
    </Stack>

  </>
 
  )
}

export default App