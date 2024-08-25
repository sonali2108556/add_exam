import React from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { useFormContext } from "../context/FormContext";
import QuestionPickingTable from "./QuestionPickingTable";

const BasicDetails = ({ onNext }) => {
  const { formState, updateFormState } = useFormContext();

  return (
    <Box className="flex column" component="form" onSubmit={onNext}>
      <Box className="bg">
        <Typography variant="body1" mb={2}><strong>Basic Details</strong></Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Exam Name"
              size="small"
              variant="outlined"
              fullWidth
              required
              value={formState.examName}
              onChange={(e) => updateFormState("examName", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Exam Duration (in minutes)"
              type="number"
              size="small"
              variant="outlined"
              fullWidth
              required
              value={formState.examDuration}
              onChange={(e) => updateFormState("examDuration", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel>Question Picking</InputLabel>
              <Select
                value={formState.questionPicking}
                onChange={(e) => updateFormState("questionPicking", e.target.value)}
                label="Question Picking"
              >
                <MenuItem value="Auto">Auto</MenuItem>
                <MenuItem value="Manual">Manual</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            {formState.questionPicking === "Manual" && (
              <QuestionPickingTable />
            )}
          </Grid>
        </Grid>
      </Box>
      <Box className="flex" justifyContent="flex-end">
        <Button variant="contained" size="small" className="button" type="submit">
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default BasicDetails;
