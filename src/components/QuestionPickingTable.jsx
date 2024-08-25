import React from "react";
import {
  Grid,
  TextField,
  IconButton,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useFormContext } from "../context/FormContext";

const QuestionPickingTable = () => {
  const { formState, updateFormState, message, updateMessage } = useFormContext();

  const handleAddRow = () => {
    const newRow = { topic: "", easy: '', medium: '', hard: '', total: 0 };
    updateFormState("questions", [...formState.questions, newRow]);
    updateMessage('', false)
  };

  const handleRemoveRow = (index) => {
    const updatedQuestions = formState.questions.filter((_, i) => i !== index);
    updateFormState("questions", updatedQuestions);
  };

  const handleInputChange = (index, field, value) => {
    const updatedQuestions = [...formState.questions];
    updatedQuestions[index][field] = value;

    updatedQuestions[index].total =
      parseInt(updatedQuestions[index].easy) +
      parseInt(updatedQuestions[index].medium) +
      parseInt(updatedQuestions[index].hard);

    updateFormState("questions", updatedQuestions);
  };

  const topics = ["Math", "Science", "History", "Geography"];
  return (
    <Box>
      {formState.questions.map((question, index) => (
        <Grid container spacing={2} key={index} pb={2}>
          <Grid item xs={3}>
            <FormControl fullWidth size="small" required>
              <InputLabel>Topic</InputLabel>
              <Select
                value={question.topic}
                onChange={(e) =>
                  handleInputChange(index, "topic", e.target.value)
                }
                label="Topic"
              >
                {topics.map((topic) => (
                  <MenuItem key={topic} value={topic}>
                    {topic}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Easy"
              type="number"
              required
              size="small"
              value={question.easy}
              onChange={(e) =>
                handleInputChange(index, "easy", parseInt(e.target.value))
              }
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Medium"
              type="number"
              required
              size="small"
              value={question.medium}
              onChange={(e) =>
                handleInputChange(index, "medium", parseInt(e.target.value))
              }
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Hard"
              type="number"
              required
              size="small"
              value={question.hard}
              onChange={(e) =>
                handleInputChange(index, "hard", parseInt(e.target.value))
              }
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Total"
              type="number"
              required
              size="small"
              value={question.total}
              disabled
            />
          </Grid>
          <Grid item xs={1} textAlign="center">
            <IconButton onClick={() => handleRemoveRow(index)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Box>
        {message.show && <Typography variant="subtitle2" color="error" mb={2}>{message.message}</Typography>}
        <Button
          variant="outlined"
          color="success"
          startIcon={<AddIcon />}
          onClick={handleAddRow}
          className="button button-small"
        >
          Add Topic
        </Button>
      </Box>
    </Box>
  );
};

export default QuestionPickingTable;
