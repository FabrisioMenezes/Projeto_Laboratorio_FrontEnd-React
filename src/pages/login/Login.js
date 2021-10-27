import React, { Component } from "react"
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";



export class Login extends Component {
    render() {
        return (

            <div>
                <Container component="main" maxWidth={"xs"}>
                    <div className="mt-3 mt-md-5">
                        <div className="mt-4">
                            <img width={400} src="images/Logotipo.png"/>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="username"
                                type="email"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Senha"
                                name="password"
                                type="password"
                            />
                            <h6 className="text-center mt-3"><a className="m-auto">Esqueci minha senha</a></h6>
                            <Button
                                type="button"
                                variant="contained"
                                fullWidth
                                color="primary"
                                size="large"
                                className="mb-3 mb-md-4 mt-4"
                            >
                                Login
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Login)