import {
  TextField,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
// import ChipInput from "material-ui-chip-input";
// import Input from '@mui/material/Input';

function ProfileForm() {
  const [data, setData] = useState({});

  const URL = "http://localhost:3000/Profiles";

  // Read
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [isShortDisplay, setIsShortDisplay] = useState(true);
  //update

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    skills: [],
    education: [],
    experience: [],
  });

  const handleTextFieldChange = (event) => {
    
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      [event.target.address]: event.target.value,
      [event.target.skills]: event.target.value,
      [event.target.education]: event.target.value,
      [event.target.experience]: event.target.value,
    });
  };

  const updateData = () => {
    const newData = { ...data };

    const firstKey = Object.keys(newData)[0];

    newData[firstKey].name = formData.name;
    newData[firstKey].address = formData.address;
    newData[firstKey].skills = formData.skills;
    newData[firstKey].education = formData.education;
    newData[firstKey].experience = formData.experience;

    axios
      .put(`${URL}/${firstKey}`, newData[firstKey])
      .then((response) => {
        console.log(response.data);
        setData(newData); // Update the state with the new data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {Object.keys(data).map((key, index) => (
        <Card key={index} sx={{ margin: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {key}
            </Typography>
            {isShortDisplay && <Typography>{data[key].name}</Typography>}
            {!isShortDisplay &&
              Object.entries(data[key]).map(([subKey, subValue], subIndex) => (
                <Typography
                  key={subIndex}
                >{`${subKey}: ${subValue}`}</Typography>
              ))}
          </CardContent>
        </Card>
      ))}

      <Button
        variant="contained"
        onClick={() => setIsShortDisplay(!isShortDisplay)}
      >
        {isShortDisplay ? "Show more" : "Show less"}
      </Button>
      {/* Update */}
      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleTextFieldChange}
        fullWidth
      />

      <TextField
        name="address"
        label="Address"
        value={formData.address}
        onChange={handleTextFieldChange}
        fullWidth
      />

      <TextField  label="skills" name="skills" onChange={handleTextFieldChange} />
      <TextField  label="education" name="education" onChange={handleTextFieldChange} />
      <TextField  label="experience" name="experience" onChange={handleTextFieldChange} />

      <Button variant="contained" onClick={updateData}>
        Update
      </Button>
      {/* Create  */}
      {/* <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box p={1}>
              <TextField
                name="name"
                label="Name"
                // value={formValues.name}
                // onChange={handleInputChange}
                fullWidth
              />{" "}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box p={1}>
              <TextField
                label="Address"
                defaultValue={data.address}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box p={1}>
              <TextField label="Avatar" defaultValue={data.avatar} fullWidth />
            </Box>
          </Grid>
          {data.contacts?.map((contact, index) => (
            <Grid item xs={12} key={index}>
              <Box p={1}>
                <TextField
                  label={contact.label}
                  defaultValue={contact.value}
                  fullWidth
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form> */}
    </div>
  );
}

export default ProfileForm;
