import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Text,
    Select,
    Box,
    Flex,
    Icon,
    useColorModeValue,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    useClipboard
} from '@chakra-ui/react'
import { FileUpload } from './FileUpload';
import { FiFile } from 'react-icons/fi'
import { useState } from 'react';
import Delayed from './Delayed';
const formName = {
    "Nome": "Nome do Projeto",
    "Porta": "Porta do Servidor",
    "Tipo": "Tipo de Projeto",
    "Repositorio": "Insira sua URL do GitHub",
    "Deploy": ""
}

interface IHookFormProps {
    projectInfos: { projectName: string, placeHolder: string }[],
    showSubmit: boolean
}


export default function HookForm(props: IHookFormProps) {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()
    const [ value, setValue ] = useState("url-to-service.app");
    const { onCopy, hasCopied } = useClipboard(value);
    function onSubmit(values: any) {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.name}>

                {props.projectInfos.map((projectInfo, index) => {
                    const inputToRender = {
                        "Repositorio": () => (
                                <InputGroup size='sm'>
                                <InputLeftAddon children='git@github.com:' />
                                <Input placeholder='GabSnow24/service-to-host' />
                                <InputRightAddon children='.git' />
                            </InputGroup>
                        ),
                        "Deploy": () => (
                            <InputGroup size='sm'>
                                <InputLeftAddon children='https://' />
                                <Input placeholder='url-to-service' value={value} isReadOnly/>
                                <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
                            </InputGroup>
                        ),
                        "Tipo": () => (
                            <Select placeholder='Selecione o tipo de projeto'>
                                <option value='option1'>Node + PrismaORM</option>
                                <option value='option2'>ReactJS</option>
                            </Select>),
                    }
                    return (
                        <><FormLabel htmlFor='project-name'>{projectInfo.projectName}</FormLabel>{projectInfo.projectName === "Tipo" || projectInfo.projectName === "Repositorio" || projectInfo.projectName === "Deploy" ?
                            (inputToRender)[projectInfo.projectName]() : <Input
                                id={`project-name${index}`}
                                mb="15px"
                                placeholder={(formName as any)[projectInfo.projectName]}
                                {...register(projectInfo.projectName, {
                                    required: 'Campo obrigatório',
                                    minLength: { value: 4, message: 'Digite pelo menos 4 letras' },
                                })} />}</>
                    )
                })}
                <FormErrorMessage>{errors.name ? errors.name.message.toString() : null}
                </FormErrorMessage>
            </FormControl>
            {props.showSubmit && <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Enviar
            </Button>}
        </form>
    )
}