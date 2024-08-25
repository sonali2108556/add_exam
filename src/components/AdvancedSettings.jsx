import React from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useFormContext } from "../context/FormContext";

const AdvancedSettings = ({ onBack, onSave }) => {
  const { formState, updateFormState } = useFormContext();

  return (
    <Box className="flex column" component="form" onSubmit={onSave}>
      <Box className="bg">
        <Typography variant="body1" mb={2}><strong>Advanced Settings</strong></Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Negative Marking (%)"
              type="number"
              variant="outlined"
              fullWidth
              value={formState.negativeMarking}
              onChange={(e) =>
                updateFormState("negativeMarking", parseInt(e.target.value))
              }
              inputProps={{ min: 0, max: 100 }}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Easy Marks"
              type="number"
              variant="outlined"
              fullWidth
              value={formState.easyMarks}
              onChange={(e) =>
                updateFormState("easyMarks", parseInt(e.target.value))
              }
              required
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Medium Marks"
              type="number"
              variant="outlined"
              fullWidth
              value={formState.mediumMarks}
              onChange={(e) =>
                updateFormState("mediumMarks", parseInt(e.target.value))
              }
              required
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Hard Marks"
              type="number"
              variant="outlined"
              fullWidth
              value={formState.hardMarks}
              onChange={(e) =>
                updateFormState("hardMarks", parseInt(e.target.value))
              }
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Minimum Passing Score (%)"
              type="number"
              variant="outlined"
              fullWidth
              value={formState.passingScore}
              onChange={(e) =>
                updateFormState("passingScore", parseInt(e.target.value))
              }
              inputProps={{ min: 0, max: 100 }}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={6}>

            <FormControlLabel
              control={
                <Checkbox size="small"
                  checked={formState.captureImage}
                  onChange={(e) =>
                    updateFormState("captureImage", e.target.checked)
                  }
                />
              }
              label="Capture image during the exam"
            />
          </Grid>
          <Grid item xs={6}>

            <FormControlLabel
              control={
                <Checkbox size="small"
                  checked={formState.registrationForm}
                  onChange={(e) =>
                    updateFormState("registrationForm", e.target.checked)
                  }
                />
              }
              label="Registration form"
            />
          </Grid>
          {formState.captureImage && (
            <Grid item xs={12}>
              <TextField
                label="Time Interval (seconds)"
                type="number"
                variant="outlined"
                fullWidth
                value={formState.captureInterval}
                onChange={(e) =>
                  updateFormState("captureInterval", parseInt(e.target.value))
                }
                required
                size="small"
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              label="Instructions"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={formState.instructions}
              onChange={(e) =>
                updateFormState("instructions", e.target.value)
              }
              required
              size="small"
            />
          </Grid>

        </Grid>
        <Box className="flex" justifyContent="flex-end" mt={2}>
          <Button variant="text" className="button" size="small" type="button" onClick={onBack} color="success">
            Back
          </Button>
          <Button variant="contained" className="button" size="small" type="submit">
            Save and Close
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdvancedSettings;
