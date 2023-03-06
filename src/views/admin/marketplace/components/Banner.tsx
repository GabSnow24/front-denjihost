import { Button, Flex, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import banner from 'assets/img/nfts/aki.jpeg';
import React from 'react';
import {ClickableSteps} from 'views/admin/default/components/Sizes';

export default function Banner() {
	const OverlayOne = () => (
		<ModalOverlay
			bg='blackAlpha.300'
			backdropFilter='blur(2px)'
		/>
	)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [overlay, setOverlay] = React.useState(<OverlayOne />)
	// Chakra Color Mode
	return (
		<Flex
			direction='column'
			bgImage={banner}
			bgSize='cover'
			py={{ base: '30px', md: '56px' }}
			px={{ base: '30px', md: '64px' }}
			borderRadius='30px'>
			<Text
				fontSize={{ base: '24px', md: '34px' }}
				color='white'
				mb='14px'
				maxW={{
					base: '100%',
					md: '64%',
					lg: '46%',
					xl: '70%',
					'2xl': '50%',
					'3xl': '42%'
				}}
				fontWeight='700'
				lineHeight={{ base: '32px', md: '42px' }}>
				Crie e hospede projetos com um clique
			</Text>
			<Text
				fontSize='md'
				color='#E3DAFF'
				maxW={{
					base: '100%',
					md: '64%',
					lg: '40%',
					xl: '56%',
					'2xl': '46%',
					'3xl': '34%'
				}}
				fontWeight='500'
				mb='40px'
				lineHeight='28px'>
				Deixe sua aplicação disponível para a internet com facilidade. Descubra a agilidade e facilidade da Denji Hosting!
			</Text>
			<Flex align='center'>
				<Button
					bg='white'
					color='black'
					_hover={{ bg: 'whiteAlpha.900' }}
					_active={{ bg: 'white' }}
					_focus={{ bg: 'white' }}
					fontWeight='500'
					fontSize='14px'
					py='20px'
					px='27'
					me='38px'
					onClick={() => {
						setOverlay(<OverlayOne />)
						onOpen()
					}}
				>
					Criar projeto
				</Button>
				<Modal isCentered isOpen={isOpen} onClose={onClose} size='xl'>
					{overlay}
					<ModalContent>
						<ModalHeader>Criar Projeto</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<ClickableSteps/>
						</ModalBody>
					</ModalContent>
				</Modal>
				<Link>
					<Text color='white' fontSize='sm' fontWeight='500'>
						Ver tutorial
					</Text>
				</Link>
			</Flex>
		</Flex>
	);
}
