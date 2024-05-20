import { useTheme } from '@mui/material/styles'
import { Stack, Typography } from '@mui/material'
import config from '../config'

const Logo = () => {
  const theme = useTheme()
  return (
      <Stack direction="row" alignItems="center" justifyContent="center">
        <svg
            className="icon icon-tabler icon-tabler-flask"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={theme.palette.secondary.dark}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 3l6 0"/>
          <path d="M10 9l4 0"/>
          <path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6"/>
        </svg>
        <Typography variant="h3" sx={{ ml: 1, color: theme.palette.secondary.dark }}>
          {config.webName}
        </Typography>
      </Stack>
  )
}

export default Logo
