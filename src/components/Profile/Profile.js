import { TextField, Button, Grid, Box } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

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

  // Create
  const createProfile = (newProfile) => {
    axios
      .post(URL, newProfile)
      .then((response) => {
        // Handle response
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Update
  const updateProfile = (updatedProfile) => {
    axios
      .put(`${URL}/${updatedProfile.id}`, updatedProfile)
      .then((response) => {
        // Handle response
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Delete
  const deleteProfile = (profileId) => {
    axios
      .delete(`${URL}/${profileId}`)
      .then((response) => {
        // Handle response
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //form
  const [formValues, setFormValues] = useState({
    name: data.name || '',
    address: data.address || '',
    avatar: data.avatar || '',
    contacts: data.contacts || '',
  });

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const profileId = "65f27c8bf4d19bcf96938f5b"; // Replace with your profile ID
    const URL = `http://localhost:3000/Profiles/${profileId}`;

    axios
      .put(URL, formValues)
      .then((response) => {
        // Handle response
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
   <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box p={1}>
              <TextField
                name="name"
                label="Name"
                value={formValues.name}
                onChange={handleInputChange}
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
      </form>
    </div>
  );
}

export default ProfileForm;
