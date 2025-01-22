import * as React from 'react'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@mui/styles'
import { visuallyHidden } from '@mui/utils'
import MainCard from 'ui-component/cards/MainCard'
import gameService from '../../services/game.service'
import { getComparator, rowsInitial, stableSort } from '../../utils/table-filter'
import { IconDeviceDesktop, IconDeviceMobile, IconPlus } from '@tabler/icons'
import {
  Button,
  CardContent,
  DialogContent,
  DialogTitle,
  Fab,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
  Typography
} from '@mui/material'

import { Search as SearchIcon, VisibilityTwoTone as VisibilityTwoToneIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { STATUS } from '../../utils/enum'
import categoryService from '../../services/category.service'

const headCells = [
  {
    id: 'name',
    numeric: false,
    label: 'Game Names',
    align: 'left'
  },
  {
    id: 'shorDescription',
    numeric: false,
    label: 'Short Description',
    align: 'center'
  },
  {
    id: 'developer',
    numeric: true,
    label: 'Developer',
    align: 'center'
  },
  {
    id: 'platform',
    numeric: true,
    label: 'Platform',
    align: 'center'
  },
  {
    id: 'like',
    numeric: false,
    label: 'Likes',
    align: 'center'
  },
  {
    id: 'actions',
    numeric: false,
    label: 'View',
    align: 'center'
  }
]

// style constant
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  sortSpan: visuallyHidden
}))

// ===========================|| TABLE HEADER ||=========================== //

function EnhancedTableHead({ classes, order, orderBy, onRequestSort }) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
              <TableCell
                  key={headCell.id}
                  align={headCell.align}
                  padding={headCell.disablePadding ? 'none' : 'normal'}
                  sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                      <span className={classes.sortSpan}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</span>
                  ) : null}
                </TableSortLabel>
              </TableCell>
          ))}
        </TableRow>
      </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf([ 'asc', 'desc' ]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
}

// ===========================|| CUSTOMER LIST ||=========================== //

const Games = () => {
  const classes = useStyles()
  const theme = useTheme()
  const navigate = useNavigate()

  const [ games, setGames ] = useState([])
  const [ createGame, setCreateGame ] = useState({
    gameName: '',
    description: '',
    thumbnail: '',
    gamePreview: '',
    rating: '',
    developer: '',
    technology: '',
    platform: '',
    shortDescription: '',
    categories: [],
    url: '',
    isSupportMobile: false,
    isSupportDesktop: false,
    likes: 0,
    disLikes: 0
  })
  const [ categories, setCategories ] = useState([])
  const [ mobileSupport, setMobileSupport ] = useState()
  const [ desktopSupport, setDesktopSupport ] = useState()
  const [ order, setOrder ] = React.useState('asc')
  const [ orderBy, setOrderBy ] = React.useState('calories')
  const [ page, setPage ] = React.useState(0)
  const [ rowsPerPage, setRowsPerPage ] = React.useState(10)
  const [ search, setSearch ] = React.useState('')
  const [ rows, setRows ] = React.useState(rowsInitial)
  const [ openModel, setOpenModel ] = React.useState(false)

  useEffect(() => {
    fetchGames()
    fetchCategories()
  }, [])

  async function fetchGames() {
    try {
      const response = await gameService.getGameList()
      setGames(response.games)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function fetchCategories() {
    try {
      const response = await categoryService.getCategoryList()
      setCategories(response.categories)
    } catch (error) {
      console.log(error)
    }
  }

  async function addGame(event) {
    try {
      event.preventDefault()
      const res = await gameService.createGames(createGame)

      setGames([ ...games, res.data ])
      setCreateGame({
        gameName: '',
        slug: '',
        description: '',
        thumbnail: '',
        gamePreview: '',
        rating: '',
        developer: '',
        technology: '',
        platform: '',
        shortDescription: '',
        categories: [],
        url: '',
        isSupportMobile: false,
        isSupportDesktop: false,
        likes: 0,
        disLikes: 0
      })
    } catch (error) {
      console.log(error.message)
    } finally {
      setOpenModel(false)
    }
  }

  const handleSearch = (event) => {
    const newString = event.target.value
    setSearch(newString)

    if (newString) {
      const newRows = rows.filter((row) => {
        let matches = true

        const properties = [ 'name', 'email', 'location', 'orders' ]
        let containsQuery = false

        properties.forEach((property) => {
          if (row[property].toString().toLowerCase().includes(newString.toString().toLowerCase())) {
            containsQuery = true
          }
        })

        if (!containsQuery) {
          matches = false
        }
        return matches
      })
      setRows(newRows)
    } else {
      setRows(rowsInitial)
    }
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  return (
      <MainCard title="Games" content={false}>
        <CardContent>
          <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                  InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon fontSize="small"/>
                        </InputAdornment>
                    )
                  }}
                  onChange={handleSearch}
                  placeholder="Search games..."
                  value={search}
                  size="small"
              />
            </Grid>
            <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: '10px' }}>
              <Fab
                  sx={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'rgb(103, 58, 183)',
                    color: 'white',
                    ':hover': { backgroundColor: 'rgb(126, 82, 201)' }
                  }}
                  aria-label="add"
                  onClick={() => setOpenModel(true)}
              >
                <IconPlus stroke={2.5} size="1.3rem"/>
              </Fab>
              <Modal
                  open={openModel}
                  onClose={() => setOpenModel(false)}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Grid item xs={12} sm={6} sx={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px' }}>
                  <DialogTitle sx={{ fontSize: '22px', fontWeight: '600', padding: 0, paddingBottom: '10px', color: 'rgb(97, 68, 146)' }}>
                    Add Game
                  </DialogTitle>
                  <DialogContent sx={{ fontSize: '16px', paddingX: 0, paddingBottom: '25px', color: 'rgb(93, 62, 146)' }}>
                    Fill in the information of new game.
                  </DialogContent>
                  <form onSubmit={addGame}>
                    <Stack spacing={3}>
                      <TextField
                          sx={{ width: '100%' }}
                          required
                          variant="outlined"
                          type="text"
                          label="Game Name"
                          placeholder="Game Name"
                          value={createGame.gameName || ''}
                          onChange={(e) =>
                              setCreateGame({
                                ...createGame,
                                gameName: e.target.value,
                                slug: e.target.value.toLowerCase().trim().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '') })}
                      />
                      <TextField
                          required
                          id="outlined-multiline-static"
                          label="Short Description"
                          multiline
                          rows={2}
                          value={createGame.shortDescription}
                          onChange={(e) => setCreateGame({ ...createGame, shortDescription: e.target.value })}
                      />
                      <TextField
                          required
                          variant="outlined"
                          type="text"
                          label="Description"
                          placeholder="Description"
                          multiline
                          rows={2}
                          value={createGame.description || ''}
                          onChange={(e) => setCreateGame({ ...createGame, description: e.target.value })}
                      />

                      <Grid item xs={12} sx={{ display: 'flex', gap: '20px' }}>
                        <Grid item xs={4}>
                          <TextField
                              required
                              variant="outlined"
                              type="url"
                              label="Game URL"
                              placeholder="Game URL"
                              value={createGame.url || ''}
                              onChange={(e) => setCreateGame({ ...createGame, url: e.target.value })}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                              sx={{ width: 'full' }}
                              required
                              variant="outlined"
                              type="url"
                              label="Thumbnail URL"
                              placeholder="Thumbnail URL"
                              value={createGame.thumbnail || ''}
                              onChange={(e) => setCreateGame({ ...createGame, thumbnail: e.target.value })}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                              required
                              variant="outlined"
                              type="url"
                              label="Game Preview URL"
                              placeholder="Game Preview URL"
                              value={createGame.gamePreview || ''}
                              onChange={(e) => setCreateGame({ ...createGame, gamePreview: e.target.value })}
                          />
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sx={{ display: 'flex', gap: '20px' }}>
                        <Grid item xs={6}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                required
                                variant="outlined"
                                type="text"
                                label="Status"
                                labelId="demo-simple-select-label"
                                name="status"
                                value={createGame.status || STATUS.value}
                                onChange={(e) => setCreateGame({ ...createGame, status: e.target.value })}
                            >
                              {STATUS.map((status, index) => (
                                  <MenuItem key={index} value={status.value}>
                                    {status.label}
                                  </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                            <Select
                                required
                                variant="outlined"
                                type="text"
                                label="Categories"
                                labelId="demo-simple-select-label"
                                value={createGame.categories || categories.value}
                                onChange={(e) => setCreateGame({ ...createGame, categories: e.target.value })}
                            >
                              {categories.map((category) => (
                                  <MenuItem sx={{ display: 'flex', gap: '8px' }} key={category._id} value={category.categoryName} selected={category.categoryName === games.categories}>
                                    <img src={category.categoryIcon} width={20} height={20} alt="icon"/>
                                    {category.categoryName}
                                  </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sx={{ display: 'flex', gap: '20px' }}>
                        <Grid item xs={4}>
                          <TextField
                              required
                              variant="outlined"
                              type="text"
                              label="Platform"
                              placeholder="Platform"
                              value={createGame.platform || ''}
                              onChange={(e) => setCreateGame({ ...createGame, platform: e.target.value })}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                              required
                              variant="outlined"
                              type="text"
                              label="Technology"
                              placeholder="Technology"
                              value={createGame.technology || ''}
                              onChange={(e) => setCreateGame({ ...createGame, technology: e.target.value })}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                              required
                              variant="outlined"
                              type="text"
                              label="Developer"
                              placeholder="Developer"
                              value={createGame.developer || ''}
                              onChange={(e) => setCreateGame({ ...createGame, developer: e.target.value })}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sx={{ display: 'flex', gap: '20px', marginLeft: '20px', marginY: '15px' }}>
                        <Grid item xs={4}>
                          <TextField
                              required
                              variant="outlined"
                              type="text"
                              label="Rating"
                              placeholder="Rating"
                              value={createGame.rating || ''}
                              onChange={(e) => setCreateGame({ ...createGame, rating: e.target.value })}
                          />
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: '20px', marginY: '15px' }}>
                          <Typography>Support :</Typography>
                          <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton onClick={() => setMobileSupport((prevState) => !prevState)}>
                              <IconDeviceMobile color={mobileSupport ? '#ae3ec9' : '#000000'}/>
                            </IconButton>
                            <IconButton onClick={() => setDesktopSupport((prevState) => !prevState)}>
                              <IconDeviceDesktop color={desktopSupport ? '#ae3ec9' : '#000000'}/>
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Button variant="contained" color="success" sx={{ color: 'rgb(35, 8, 82)' }} type="submit">
                        Add Game
                      </Button>
                    </Stack>
                  </form>
                </Grid>
              </Modal>
            </Grid>
          </Grid>
        </CardContent>

        {/* table */}
        <TableContainer sx={{ width: '95%', margin: 'auto' }}>
          <Table className={classes.table} aria-labelledby="GameTable">
            <EnhancedTableHead classes={classes} order={order} orderBy={orderBy} onRequestSort={handleRequestSort} rowCount={rows.length}/>
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`

                return (
                    <TableRow hover tabIndex={-1} key={index}>
                      <TableCell component="th" id={labelId} scope="row" sx={{ cursor: 'pointer' }}>
                        <Typography variant="subtitle1" sx={{ color: theme.palette.mode === 'dark' ? theme.palette.grey[600] : 'grey.900' }}>
                          {row.name}
                        </Typography>
                        <Typography variant="caption"> {row.shortDescription} </Typography>
                      </TableCell>
                      <TableCell>{row.shortDescription}</TableCell>
                      <TableCell align="right">{row.developer}</TableCell>
                      <TableCell align="center">{row.platform}</TableCell>
                      <TableCell align="center">{row.likes}</TableCell>
                      <TableCell align="center" sx={{ pr: 3 }} onClick={() => navigate(`/games/${row.slug}`)}>
                        <IconButton color="primary">
                          <VisibilityTwoToneIcon sx={{ fontSize: '1.3rem' }}/>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                )
              })}

              {games.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`

                return (
                    <TableRow hover tabIndex={-1} key={index}>
                      <TableCell component="th" id={labelId} scope="row" sx={{ cursor: 'pointer' }}>
                        <Grid item xs={12} sx={{ display: 'flex', alignItems:'center', gap: '20px' }}>
                          <Grid item xs={3}>
                            <img
                                src={row.thumbnail}
                                width="70px"
                                height="70px"
                                style={{ borderRadius: '50px', objectFit: 'cover' }}
                                alt="game"
                            />
                          </Grid>
                          <Grid item xs={9}>
                            <Typography
                                variant="subtitle1"
                                sx={{ color: theme.palette.mode === 'dark' ? theme.palette.grey[600] : 'grey.900' }}
                            >
                              {row.gameName}
                            </Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell align="center">{row.shortDescription}</TableCell>
                      <TableCell align="center">{row.developer}</TableCell>
                      <TableCell align="center">{row.platform}</TableCell>
                      <TableCell align="center">{row.likes}</TableCell>
                      <TableCell align="center" sx={{ pr: 3 }} onClick={() => navigate(`/games/${row.slug}`)}>
                        <IconButton color="primary">
                          <VisibilityTwoToneIcon sx={{ fontSize: '1.3rem' }}/>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                )
              })}

              {emptyRows > 0 && (
                  <TableRow
                      style={{
                        height: 53 * emptyRows
                      }}
                  >
                    <TableCell colSpan={6}/>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
            rowsPerPageOptions={[ 5, 10, 25 ]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </MainCard>
  )
}

export default Games
