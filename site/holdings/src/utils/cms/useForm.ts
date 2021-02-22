import {
  useForm as baseUseForm,
  FormOptions,
  WatchableFormValue,
} from 'tinacms'

export const useForm = (options: FormOptions, watch?: WatchableFormValue) =>
  baseUseForm(
    {
      buttons: {
        save: 'Save Changes',
        reset: 'Reset Form',
      },
      ...options,
    },
    watch,
  )
