
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'


import { withRouter } from 'react-router'
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/makima.jpg";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import apiService from "./Api";

function SignUp() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [formData, setFormData] = useState({});
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const history = useHistory()
  const handleFormData = (event: any) =>{
    setFormData({...formData, [event.target.id]: event.target.value})
  };
  const handleSubmit = () =>{
    console.log(formData)
    const dataToSend = {...formData, admin: false}
    const response = apiService
    .post("/user", dataToSend)
    .then((response) => response.status)
    .catch((err) => {
      console.error("Ops! ocorreu um erro" + err);
    });
  }
  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "5vh" }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='10px'>
           Cadastrar
          </Heading>
          <Text
            mb='36px'
            ms='4px'
            color={textColorSecondary}
            fontWeight='400'
            fontSize='md'>
            Insira suas informações para cadastrar!
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
          <Button
            fontSize='sm'
            me='0px'
            mb='26px'
            py='15px'
            h='50px'
            borderRadius='16px'
            bg={googleBg}
            color={googleText}
            fontWeight='500'
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}>
            <Icon as={FcGoogle} w='20px' h='20px' me='10px' />
            Cadastrar com Google
          </Button>
          <Flex align='center' mb='25px'>
            <HSeparator />
            <Text color='gray.400' mx='14px'>
              ou
            </Text>
            <HSeparator />
          </Flex>
          <FormControl>
          <form onSubmit={handleSubmit}>
          <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              mb='8px'>
              Nome de usuário<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              id="username"
              onChange={handleFormData}
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='email'
              placeholder='denjidev24'
              mb='24px'
              fontWeight='500'
              size='lg'
            />
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              mb='8px'>
              Email<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              id="email"
              onChange={handleFormData}
              ms={{ base: "0px", md: "0px" }}
              type='email'
              placeholder='email@denjidev.com'
              mb='24px'
              fontWeight='500'
              size='lg'
            />
            <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              display='flex'>
              Senha<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size='md'>
              <Input
                isRequired={true}
                fontSize='sm'
                placeholder='Min. 8 caracteres'
                mb='24px'
                size='lg'
                id="password"
                onChange={handleFormData}
                type={show ? "text" : "password"}
                variant='auth'
              />

              <InputRightElement display='flex' alignItems='center' mt='4px'>
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              mb='8px'>
              Telefone<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='cellphone'
              id="cellphone"
              onChange={handleFormData}
              placeholder='+55 (73) 98801-5449'
              mb='24px'
              fontWeight='500'
              size='lg'
            />
            <Button
              type="button"
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='100%'
              h='50'
              mb='24px'>
              Criar
            </Button>
            </form>
          </FormControl>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignUp;
