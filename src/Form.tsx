import type { FieldErrors } from 'react-hook-form'
import { useForm } from 'react-hook-form'

function Form() {
  const defaultValues: {
    tpX: number,
    tpY: number,
    tpZ: number,
    rpX: number,
    rpY: number,
    rpZ: number,
  } = {
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

  const onSubmit = (data: typeof defaultValues) => console.log(data)
  const onError = (err: FieldErrors<typeof defaultValues>) => console.error(err)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div>
          <p>送信器の座標</p>
          <div>
            <label htmlFor="tpX">X:</label>
            <input id="tpX" type="number" step="1" min="0" max="10"
            {...register('tpX', {
              required: 'TP X is required',
              max: {
                value: 10,
                message: 'TP X must be at most 10'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.tpX?.message}</div>
          <div>
            <label htmlFor="tpY">Y:</label>
            <input id="tpY" type="number" step="1" min="0" max="10"
            {...register('tpY', {
              required: 'TP Y is required',
              max: {
                value: 10,
                message: 'TP Y must be at most 10'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.tpX?.message}</div>
          <div>
            <label htmlFor="tpZ">Z:</label>
            <input id="tpZ" type="number" step="1" min="0" max="10"
            {...register('tpZ', {
              required: 'TP Z is required',
              max: {
                value: 10,
                message: 'TP Z must be at most 10'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.tpZ?.message}</div>
        </div>
        <div>
          <p>受信器の座標</p>
          <div>
            <label htmlFor="rpX">X:</label>
            <input id="rpX" type="number" step="1" min="0" max="10"
            {...register('rpX', {
              required: 'RP X is required',
              max: {
                value: 10,
                message: 'RP X must be at most 10'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.rpX?.message}</div>
          <div>
            <label htmlFor="rpY">Y:</label>
            <input id="rpY" type="number" step="1" min="0" max="10"
            {...register('rpY', {
              required: 'RP Y is required',
              max: {
                value: 10,
                message: 'RP Y must be at most 10'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.rpY?.message}</div>
          <div>
            <label htmlFor="rpZ">Z:</label>
            <input id="rpZ" type="number" step="1" min="0" max="10"
            {...register('rpZ', {
              required: 'RP Z is required',
              max: {
                value: 10,
                message: 'RP Z must be at most 10'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.rpZ?.message}</div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default Form
