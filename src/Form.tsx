import type { FieldErrors } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import type { FormInputData, ResponseData } from './type'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@react-three/drei';

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
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div>
          <p>環境のタイプ</p>
          <div>
            <TextField id="enviType" type="number" label="タイプ" variant='outlined'
            {...register('enviType', {
              required: '環境のタイプは必須です',
              max: {
                value: 10,
                message: '環境のタイプは10以下である必要があります'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.enviType?.message}</div>
        </div>
        <div>
          <p>反射回数</p>
          <div>
            <TextField id="N" type="number" label="N" variant='outlined'
            {...register('N', {
              required: '反射回数は必須です',
              max: {
                value: 2,
                message: '反射回数は2以下である必要があります'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.N?.message}</div>
        </div>
        <div>
          <p>送信器の座標</p>
          <Box display="flex" flexDirection="row" gap={2}>
            <TextField
              id="tpX"
              type="number"
              label="X"
              variant="outlined"
              {...register('tpX', {
                required: 'TP X is required',
                max: {
                  value: 10,
                  message: 'TP X must be at most 10'
                },
                valueAsNumber: true,
              })}
              error={!!errors.tpX}
              helperText={errors.tpX?.message}
            />
            <TextField
              id="tpY"
              type="number"
              label="Y"
              variant="outlined"
              {...register('tpY', {
                required: 'TP Y is required',
                max: {
                  value: 10,
                  message: 'TP Y must be at most 10'
                },
                valueAsNumber: true,
              })}
              error={!!errors.tpY}
              helperText={errors.tpY?.message}
            />
            <TextField
              id="tpZ"
              type="number"
              label="Z"
              variant="outlined"
              {...register('tpZ', {
                required: 'TP Z is required',
                max: {
                  value: 10,
                  message: 'TP Z must be at most 10'
                },
                valueAsNumber: true,
              })}
              error={!!errors.tpZ}
              helperText={errors.tpZ?.message}
            />
          </Box>
        </div>
        <div>
          <p>受信器の座標</p>
          <Box display="flex" flexDirection="row" gap={2}>
            <TextField
              id="rpX"
              type="number"
              label="X"
              variant="outlined"
              {...register('rpX', {
                required: 'RP X is required',
                max: {
                  value: 10,
                  message: 'RP X must be at most 10'
                },
                valueAsNumber: true,
              })}
              error={!!errors.rpX}
              helperText={errors.rpX?.message}
            />
            <TextField
              id="rpY"
              type="number"
              label="Y"
              variant="outlined"
              {...register('rpY', {
                required: 'RP Y is required',
                max: {
                  value: 10,
                  message: 'RP Y must be at most 10'
                },
                valueAsNumber: true,
              })}
              error={!!errors.rpY}
              helperText={errors.rpY?.message}
            />
            <TextField
              id="rpZ"
              type="number"
              label="Z"
              variant="outlined"
              {...register('rpZ', {
                required: 'RP Z is required',
                max: {
                  value: 10,
                  message: 'RP Z must be at most 10'
                },
                valueAsNumber: true,
              })}
              error={!!errors.rpZ}
              helperText={errors.rpZ?.message}
            />
          </Box>
        </div>
        <div>
          <Button type="submit" variant='outlined'>Submit</Button>
        </div>
      </form>
    </>
  )
}

export default Form
