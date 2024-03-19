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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import the styles

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
    phoneNumber: "",
    avater: "",
    address: "",
    skills: "",
    education: "",
    experience: "",
  });
  //text
  const handleTextFieldChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      [event.target.address]: event.target.value,
      [event.target.phoneNumber]: event.target.value,
      [event.target.avater]: event.target.value,
    });
    console.log(event.target.value);
  };
  //content editor
  const handleEditorChange = (name, content) => {
    setFormData({
      ...formData,
      [name]: content,
    });
  };
  const updateData = () => {
    const newData = { ...data };

    const firstKey = Object.keys(newData)[0];

    newData[firstKey].name = formData.name;
    newData[firstKey].address = formData.address;
    newData[firstKey].phoneNumber = formData.phoneNumber;
    newData[firstKey].avater = formData.avater;
    newData[firstKey].skills = formData.skills;
    newData[firstKey].education = formData.education;
    newData[firstKey].experience = formData.experience;

    console.log(formData.avater);

    const id = newData[firstKey]._id;
    axios
      .patch(`${URL}/${id}`, newData[firstKey])
      .then((response) => {
        console.log(response.data);
        setData(newData); // Update the state with the new data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  return (
    <Box >
      <Grid container spacing={2}>
        <Grid item xs={12}> 
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
                >{`${subValue}`}</Typography>
              ))}
          </CardContent>
        </Card>
      ))}
      <br />
      <Button
        variant="contained"
        onClick={() => setIsShortDisplay(!isShortDisplay)}
      >
        {isShortDisplay ? "Show more" : "Show less"}
      </Button>
        </Grid>
      
      <Grid item xs={12}>
      <>
        <Typography variant="h5">Update Profile</Typography>
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
        <TextField
        name="phoneNumber"
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={handleTextFieldChange}
        fullWidth
      />
         <TextField
        name="avater"
        label="Avater"
        value={formData.avater}
        onChange={handleTextFieldChange}
        fullWidth
      />
      <Typography> Skills</Typography>
      <ReactQuill
        value={formData.skills}
        onChange={(content) => handleEditorChange("skills", content)}
      />
      <Typography> Education</Typography>

      <ReactQuill
        value={formData.education}
        onChange={(content) => handleEditorChange("education", content)}
      />
      <Typography> Experience</Typography>

      <ReactQuill
        value={formData.experience}
        onChange={(content) => handleEditorChange("experience", content)}
      />

      <Button variant="contained" onClick={updateData}>
        Update
      </Button>

      </>
      </Grid>
     
      </Grid>
     
      {/* Update */}
    
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
    </Box>
  );
}

export default ProfileForm;
