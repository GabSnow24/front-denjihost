import { ReactNode, useRef, useState } from 'react'
import { Button, FormControl, FormErrorMessage, FormLabel, Icon, Input, InputGroup } from '@chakra-ui/react'
import { useController, useForm, UseFormRegisterReturn } from 'react-hook-form'


type FileUploadProps = {
  register: UseFormRegisterReturn
  accept?: string
  multiple?: boolean
  children?: ReactNode
}

export const FileUpload = (props: FileUploadProps) => {
  const { register, accept, multiple, children } = props
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { ref, ...rest } = register as {ref: (instance: HTMLInputElement | null) => void}
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => inputRef.current?.click()

  function handleChange(event: any) {
    setInputValue(event)
  }
  return (
      <InputGroup onClick={handleClick}>
        <input
        onChange={(e) => {
            console.log("State b4 ", inputValue)
            handleChange(e.target.files[0])
            console.log("State after ", inputValue)
        }}
          type={'file'}
          name="file-upload"
          multiple={multiple || false}
          hidden
          value={inputValue}
          accept={accept}
          {...rest}
          ref={(e) => {
            ref(e)
            inputRef.current = e
          }}
        />
        <>
          {children}
        </>
      </InputGroup>

  )
}

type FormValues = {
  file_: FileList
}