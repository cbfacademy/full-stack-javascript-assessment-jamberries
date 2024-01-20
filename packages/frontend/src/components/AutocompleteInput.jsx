import React, { useState, useEffect } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import {
  InputAdornment,
  TextField,
  CircularProgress,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const tmdb_url = process.env.REACT_APP_TMDB_SEARCH_URL
const tmdb_api = `&api_key=${process.env.REACT_APP_TMDB_KEY}`

export default function AutocompleteInput() {

  const [options, setOptions] = useState([]);
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);
  const loading = open && options.length === 0 && inputText.length > 0;

  useEffect(() => {
    async function fetchData(searchText) {
      const res = await fetch(`${tmdb_url}?query=${searchText}&include_adult=false&language=en-US&page=1${tmdb_api}`)
      ;
      const json = await res.json();
      json.results ? setOptions(json.results) : setOptions([]);
    }

    //check if acTING
    if (inputText?.length > 0) {
        fetchData(inputText);
      } else {
        setOptions([]);
        setOpen(false);
      }
    }, [inputText, setOptions]);

  return (
        <Autocomplete
          id="actorSearch"
          options={options}
          filterOptions={(options) => options}
          open={open}
          style={{ width: 400 }}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          onChange={(event, value) => {
          }}
          onMouseDownCapture={(event) => {
            event.stopPropagation();
          }}
          onInputChange={(event, newValue) => {
            setInputText(newValue);
          }}
          getOptionLabel={(options) => options.name}
          // renderOption={(props, option, { selected }) => (
          //     <li {...props}>
          //         {option.name}
          // </li>)}
          renderOption={(props, option, { selected }) => {
            return (
              <li {...props}>
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
            <>
              <TextField
                {...params}
                label="Start typing actor's name"
                variant="outlined"
                value={inputText}
                InputProps={{
                  ...params.InputProps, 
                  // autoComplete: "new-password", // forces no auto-complete history
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
            </>
          )}
          
        />
  );
}
