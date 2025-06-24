import type { FieldErrors } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import type { FormInputData, ResponseData } from './type'
import { Grid, Button, TextField, Paper, Typography, Divider } from '@mui/material'
// import SendIcon from '@mui/icons-material/Send'

type FormProps = {
  setRes: (data: ResponseData) => void
};

function Form({ setRes }: FormProps) {
  const defaultValues: FormInputData = {
    enviType: 5,
    N: 1,
    tpX: 0,
    tpY: 0,
    tpZ: 0,
    rpX: 0,
    rpY: 0,
    rpZ: 0,
  }

  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues,
  })

  const onSubmit = async(data: FormInputData) => {
    const res = await fetch("http://127.0.0.1:8000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData: ResponseData = await res.json();
    setRes(resData);
    console.log(resData);
  };

  const onError = (err: FieldErrors<typeof defaultValues>) => console.error(err)

  return (
    <Paper elevation={3} sx={{ p: 4, margin: 'auto', mt: 4 }}>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <Typography variant="h5" gutterBottom>Setting</Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={3} direction="column">
          {/* Environment Type */}
          <Grid size={12}>
            <Typography variant="subtitle1" gutterBottom>Environment</Typography>
            <TextField
              fullWidth
              label="タイプ"
              type="number"
              inputProps={{ step: 1, min: 0, max: 10 }}
              error={!!errors.enviType}
              helperText={errors.enviType?.message}
              {...register('enviType', {
                required: '環境のタイプは必須です',
                max: {
                  value: 10,
                  message: '環境のタイプは10以下である必要があります'
                },
                valueAsNumber: true,
              })}
            />
          </Grid>

          {/* Tx */}
          <Grid size={12}>
            <Typography variant="subtitle1" gutterBottom>Tx</Typography>
            <Grid container spacing={1} direction="row">
              <Grid size={4}>
                <TextField
                  fullWidth
                  label="X"
                  type="number"
                  inputProps={{ step: 1, min: 0, max: 10 }}
                  error={!!errors.tpX}
                  helperText={errors.tpX?.message}
                  {...register('tpX', {
                    required: 'TP X is required',
                    max: {
                      value: 10,
                      message: 'TP X must be at most 10',
                    },
                    valueAsNumber: true,
                  })}
                />
              </Grid>
              <Grid size={4}>
                <TextField
                  fullWidth
                  label="Y"
                  type="number"
                  inputProps={{ step: 1, min: 0, max: 10 }}
                  error={!!errors.tpY}
                  helperText={errors.tpY?.message}
                  {...register('tpY', {
                    required: 'TP Y is required',
                    max: {
                      value: 10,
                      message: 'TP Y must be at most 10',
                    },
                    valueAsNumber: true,
                  })}
                />
              </Grid>
              <Grid size={4}>
                <TextField
                  fullWidth
                  label="Z"
                  type="number"
                  inputProps={{ step: 1, min: 0, max: 10 }}
                  error={!!errors.tpZ}
                  helperText={errors.tpZ?.message}
                  {...register('tpZ', {
                    required: 'TP Z is required',
                    max: {
                      value: 10,
                      message: 'TP Z must be at most 10',
                    },
                    valueAsNumber: true,
                  })}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Rx */}
          <Grid size={12}>
            <Typography variant="subtitle1" gutterBottom>Rx</Typography>
            <Grid container spacing={1} direction="row">
              <Grid size={4}>
                <TextField
                  fullWidth
                  label="X"
                  type="number"
                  inputProps={{ step: 1, min: 0, max: 10 }}
                  error={!!errors.rpX}
                  helperText={errors.rpX?.message}
                  {...register('rpX', {
                    required: 'RP X is required',
                    max: {
                      value: 10,
                      message: 'RP X must be at most 10',
                    },
                    valueAsNumber: true,
                  })}
                />
              </Grid>
              <Grid size={4}>
                <TextField
                  fullWidth
                  label="Y"
                  type="number"
                  inputProps={{ step: 1, min: 0, max: 10 }}
                  error={!!errors.rpY}
                  helperText={errors.rpY?.message}
                  {...register('rpY', {
                    required: 'RP Y is required',
                    max: {
                      value: 10,
                      message: 'RP Y must be at most 10',
                    },
                    valueAsNumber: true,
                  })}
                />
              </Grid>
              <Grid size={4}>
                <TextField
                  fullWidth
                  label="Z"
                  type="number"
                  inputProps={{ step: 1, min: 0, max: 10 }}
                  error={!!errors.rpZ}
                  helperText={errors.rpZ?.message}
                  {...register('rpZ', {
                    required: 'RP Z is required',
                    max: {
                      value: 10,
                      message: 'RP Z must be at most 10',
                    },
                    valueAsNumber: true,
                  })}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Propagation N */}
          <Grid size={12}>
            <Typography variant="subtitle1" gutterBottom>Propagation</Typography>
            <TextField
              fullWidth
              label="N"
              type="number"
              inputProps={{ step: 1, min: 0, max: 2 }}
              error={!!errors.N}
              helperText={errors.N?.message}
              {...register('N', {
                required: '反射回数は必須です',
                max: {
                  value: 2,
                  message: '反射回数は2以下である必要があります'
                },
                valueAsNumber: true
              })}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" sx={{ mt: 3 }}>
          <Button type="submit" variant="contained">
            Send
          </Button>
        </Grid>
      </form>
    </Paper>
  )
}

export default Form
