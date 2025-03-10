import { useState } from 'react'
import { useSelector } from 'react-redux'

// material-ui
import { useTheme } from '@mui/material/styles'
import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material'

// third party
import * as Yup from 'yup'
import { Formik } from 'formik'

// project imports
import useScriptRef from 'hooks/useScriptRef'
import AnimateButton from 'ui-component/extended/AnimateButton'

// assets
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import UserService from '../../../../services/user.service'
import { useNavigate } from 'react-router-dom'

const FirebaseLogin = ({ ...others }) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const scriptedRef = useScriptRef()
  const customization = useSelector((state) => state.customization)
  const [ checked, setChecked ] = useState(true)

  const [ showPassword, setShowPassword ] = useState(false)

  return (
      <>
        <Grid container direction="column" justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
            >
              <Divider sx={{ flexGrow: 1 }} orientation="horizontal"/>

              <Button
                  variant="outlined"
                  sx={{
                    cursor: 'unset',
                    m: 2,
                    py: 0.5,
                    px: 7,
                    borderColor: `${theme.palette.grey[100]} !important`,
                    color: `${theme.palette.grey[900]}!important`,
                    fontWeight: 500,
                    borderRadius: `${customization.borderRadius}px`
                  }}
                  disableRipple
                  disabled
              >
                Sign in with Email address
              </Button>

              <Divider sx={{ flexGrow: 1 }} orientation="horizontal"/>
            </Box>
          </Grid>
        </Grid>

        <Formik
            initialValues={{
              email: '',
              password: '',
              submit: null
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
              try {
                if (scriptedRef.current) {
                  setStatus({ success: true })
                  const { email, password } = values

                  await UserService.login(email, password)
                  navigate('/dashboard')
                  setSubmitting(false)
                }
              } catch (err) {
                console.error(err)
                if (scriptedRef.current) {
                  setStatus({ success: false })
                  setErrors({ submit: err.message })
                  setSubmitting(false)
                }
              }
            }}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
              <form noValidate onSubmit={handleSubmit} {...others}>
                <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
                  <OutlinedInput
                      id="outlined-adornment-email-login"
                      type="email"
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Email Address / Username"
                      inputProps={{}}
                  />
                  {touched.email && errors.email && (
                      <FormHelperText error id="standard-weight-helper-text-email-login">
                        {errors.email}
                      </FormHelperText>
                  )}
                </FormControl>

                <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                  <OutlinedInput
                      id="outlined-adornment-password-login"
                      type={showPassword ? 'text' : 'password'}
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword((prevState) => !prevState)}
                              edge="end"
                              size="large"
                          >
                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      inputProps={{}}
                  />
                  {touched.password && errors.password && (
                      <FormHelperText error id="standard-weight-helper-text-password-login">
                        {errors.password}
                      </FormHelperText>
                  )}
                </FormControl>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                  <FormControlLabel
                      control={
                        <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary"/>
                      }
                      label="Remember me"
                  />
                  <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                    Forgot Password?
                  </Typography>
                </Stack>
                {errors.submit && (
                    <Box sx={{ mt: 3 }}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Box>
                )}

                <Box sx={{ mt: 2 }}>
                  <AnimateButton>
                    <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                      Sign in
                    </Button>
                  </AnimateButton>
                </Box>
              </form>
          )}
        </Formik>
      </>
  )
}

export default FirebaseLogin
