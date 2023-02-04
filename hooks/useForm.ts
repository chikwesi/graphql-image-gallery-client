import { ChangeEvent, useState } from 'react'

function useForm<T>(initialValue?: T) {
  const [inputs, setInputs] = useState(initialValue)

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let { name, value, type } = e.target
    if (type == 'file') {
      value = (e.target as HTMLInputElement).files[0] as any
    }
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function resetForm() {
    setInputs(initialValue)
  }

  function clearForm() {
    const clearedInputs = Object.fromEntries(
      Object.entries(inputs).map(([key]) => [key, ''])
    ) as T
    setInputs(clearedInputs)
  }
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  }
}

export default useForm
