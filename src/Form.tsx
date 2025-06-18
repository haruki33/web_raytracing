import type { FieldErrors } from 'react-hook-form'
import { useForm } from 'react-hook-form'

function Form() {
  const defaultValues: {
    enviType: number
    N: number,
    tpX: number,
    tpY: number,
    tpZ: number,
    rpX: number,
    rpY: number,
    rpZ: number,
  } = {
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

  const onSubmit = async(data: typeof defaultValues) => {
    
		const res = await fetch("http://127.0.0.1:8000/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const resData = await res.json();
		console.log(resData);
	};

  const onError = (err: FieldErrors<typeof defaultValues>) => console.error(err)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div>
          <p>環境のタイプ</p>
          <div>
            <label htmlFor="enviType">タイプ:</label>
            <input id="enviType" type="number" step="1" min="0" max="10"
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
            <label htmlFor="N">N:</label>
            <input id="N" type="number" step="1" min="0" max="10"
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
