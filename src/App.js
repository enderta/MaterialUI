import React from 'react'
import {Box,Card,CardContent,CardActions,CardMedia, Typography,Button,Stack, ButtonGroup,ToggleButtonGroup,ToggleButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'


const App = () => {
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
  </>
 
  )
}

export default App