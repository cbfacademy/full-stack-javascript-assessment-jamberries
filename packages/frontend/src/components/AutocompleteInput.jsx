import { useState, useEffect } from "react";
import {
  Autocomplete,
  InputAdornment,
  TextField,
  CircularProgress,
  Typography,
  Grid,
  Box,
  Alert
} from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const tmdb_url = process.env.REACT_APP_TMDB_SEARCH_URL
const tmdb_api = `&api_key=${process.env.REACT_APP_TMDB_KEY}`

/**
 * Component for autocomplete actor names for input
 * @component
 * @param {object} props The Actors api call from TMDB
 * @returns {ReactComponentElement} autocomplete input component
 */
export default function AutocompleteInput(props) {

  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  
  const loading = open && options.length === 0 && inputValue.length > 0;

  useEffect(() => {
    async function fetchData(searchText) {
      const res = await fetch(`${tmdb_url}?query=${searchText}&include_adult=false&language=en-US&page=1${tmdb_api}`)
      ;
      const json = await res.json();
      json.results ? setOptions(json.results) : setOptions([]);
    }

    if (inputValue.length > 0) {
        fetchData(inputValue);
      } else {
        setOptions([]);
        setOpen(false);
      }
    }, [inputValue, setOptions]);

    const handleChange = (event, value) => {
      if(value.hasOwnProperty('id')) {
        props.setSelected(value)
      } else {
        setAlert(true)
      }
   }

  return (
    <Box mt={5}>
      {alert ? <Alert severity="error" onClose={() => {setAlert(false)}}> Please Select a valid actor</Alert> : ""}
          <Autocomplete
            id="actorSearch"
            multiple
            selectOnFocus
            clearOnBlur
            freeSolo
            options={options}
            filterOptions={(options, state) => {
              if (state.inputValue.length < 3) {
                return options.filter((item) =>
                  String(item.label)
                    .toLowerCase()
                    .includes(state.inputValue.toLowerCase())
                );
              }
              return options;
            }}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            onInputChange={(event, newValue) => {
              setInputValue(newValue);
            }}
            onChange={handleChange}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(options, value) => options.name === value.name}
            renderOption={(props, option, { selected }) => {
              return (
                <li {...props} key={option.id}>
                    <Grid container>
                      <Grid item xs={4}>
                        {
                        option.name &&
                        option.profile_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w90_and_h90_face/${option.profile_path}`}
                            width="50"
                            height="50"
                            alt=""
                          />
                        ) : (
                          <PersonOutlineIcon size="50" />
                        )}
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h5">
                          {option.name}
                        </Typography>
                      </Grid>
                    </Grid>
                </li>
              );
            }}
            renderInput={(params) => (
                <TextField
                  {...params}
                  label="Start typing actor's name"
                  variant="outlined"
                  color="secondary"
                  value={inputValue}
                  InputProps={{
                    ...params.InputProps, 
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        color="inherit"
                      >
                        <>
                          {loading ? (
                            <CircularProgress color="secondary" size={"2rem"} />
                          ) : null}
                        </>
                      </InputAdornment>
                    ),
                    style: {
                      paddingRight: "5px"
                    }
                  }}
                />
            )}
            
          />
        
      </Box>
  );
}
