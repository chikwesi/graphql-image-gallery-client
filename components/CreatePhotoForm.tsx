import { FormEvent, useCallback } from 'react'
import styled from 'styled-components'
import useForm from '../hooks/useForm'
import { nameOf } from '../lib/nameOf'
import { Button } from './Button'

interface CreatePhoto {
  image?: string
  location?: string
  caption?: string
  creator?: string
}

export const CreatePhotoForm = () => {
  const { inputs, handleChange } = useForm<CreatePhoto>({
    caption: 'enter caption',
    location: 'lagos',
    creator: '',
    image: '',
  })

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    },
    [inputs]
  )

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="image">
          Image
          <input
            type="file"
            name={nameOf<CreatePhoto>('image')}
            id="image"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="caption">
          caption
          <textarea
            name={nameOf<CreatePhoto>('caption')}
            id="caption"
            onChange={handleChange}
            value={inputs.caption}
          ></textarea>
        </label>
        <label htmlFor="location">
          location
          <input
            name={nameOf<CreatePhoto>('location')}
            id="location"
            value={inputs.location}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <Button type="submit">submit</Button>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  fieldset {
    border: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input {
    padding: 1em;
  }
`
