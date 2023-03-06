import React, { useState } from 'react';
// Chakra imports
import { Button, Flex, Icon, Image, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
// Assets
import { FaEthereum } from 'react-icons/fa';
import { IoAddCircle, IoArrowBackSharp, IoArrowForwardCircleOutline, IoArrowForwardCircleSharp } from 'react-icons/io5';

export default function NFT(props: {
	image: string;
	name: string;
	author: string;
	date: string;
	price: string | number;
}) {
	const { image, name, author, date, price } = props;
	// Chakra Color Mode
	const textColor = useColorModeValue('brands.900', 'white');
	const bgItem = useColorModeValue(
		{ bg: 'white', boxShadow: '0px 40px 58px -20px rgba(112, 144, 176, 0.12)' },
		{ bg: 'navy.700', boxShadow: 'unset' }
	);const [ like, setLike ] = useState(false);
	const textColorDate = useColorModeValue('secondaryGray.600', 'white');
	return (
		<Card _hover={bgItem} bg='transparent' boxShadow='unset' px='24px' py='21px' transition='0.2s linear'>
			<Flex direction={{ base: 'column' }} justify='center'>
				<Flex position='relative' align='center'>
					<Image src={image} w='66px' h='66px' borderRadius='20px' me='16px' />
					<Flex
						direction='column'
						w={{ base: '70%', md: '100%' }}
						me={{ base: '4px', md: '32px', xl: '10px', '3xl': '32px' }}>
						<Text
							color={textColor}
							fontSize={{
								base: 'md'
							}}
							mb='5px'
							fontWeight='bold'
							me='14px'>
							{name}
						</Text>
						<Text
							color='secondaryGray.600'
							fontSize={{
								base: 'sm'
							}}
							fontWeight='400'
							me='14px'>
							{author}
						</Text>
					</Flex>
					<Flex me={{ base: '4px', md: '32px', xl: '10px', '3xl': '32px' }} align='center'>
					<Button
						position='absolute'
						bg='white'
						_hover={{ bg: 'whiteAlpha.900' }}
						_active={{ bg: 'white' }}
						_focus={{ bg: 'white' }}
						p='0px !important'
						top='15px'
						right='60px'
						borderRadius='50%'
						minW='36px'
						h='36px'
						onClick={() => {
							setLike(!like);
						}}>
					<Icon
							transition='0.2s linear'
							w='30px'
							h='30px'
							as={like ? IoArrowForwardCircleOutline : IoArrowForwardCircleSharp}
							color='brand.500'
						/></Button>
						<Text fontWeight='700' fontSize='md' color={textColor}>
							{price}
						</Text>
					</Flex>
					<Text ms='auto' fontWeight='700' fontSize='sm' color={textColorDate}>
						{date}
					</Text>
				</Flex>
			</Flex>
		</Card>
	);
}
