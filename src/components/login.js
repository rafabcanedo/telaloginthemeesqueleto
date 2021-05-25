import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
//import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined'; utilizado no projeto Who is Happy
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Login=()=>{
    const paperStyle={padding : 20,height:'70vh',width:280,margin:"20px auto"}
    const avatarstyle={backgroundColor:'#00e673'} // color avatar
    const btnstyle={margin:'8px 0'}
    return(
        /*"Login Here" */ // aqui vamos criar o form
        // <Paper elevation={10}> Login Block após style paper !! 
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                 <Avatar style={avatarstyle}><EmojiPeopleOutlinedIcon/></Avatar>
                  <h2>Sign In</h2>
                </Grid>
                <TextField label= 'Username' placeholder='Enter Username' fullWidth required />
                <TextField label= 'Password' placeholder='Enter Password' type='password' fullWidth required />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="checkedB"
                      color="primary"
          />
        }
        label="Remember me"
          />

          <Button type='submit' color='secondary' variant="contained" style={btnstyle} fullWidth>
              Sign In
              </Button>
              <Typography>
                  <Link href="#">
                    Forgot Password ?
                  </Link>
              </Typography>
              
              <Typography> Do you have an account ?
                  <Link href="#">
                    Sign Up 
                  </Link>
              </Typography>
            </Paper>
        </Grid>
    )
}

export default Login

//                 <Avatar>R</Avatar> test Avatar,imagem.Se tiver sem image aparece a primeira(ideia)
//                   <Grid align='center'> centralizou
// mudando background do avatar
// <TextField label= 'Username' placeholder='Enter Username' /> textbox mais facil
/* Username box ao clicar aparece Enter Username(placeholder) util para o projeto */

/* 
                <FormControlLabel confirm box (remember me)
*/