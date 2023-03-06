import { Avatar, Box, Button, Flex, FormLabel, Icon, Select, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import Brazil from 'assets/img/dashboards/brazil.png';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import {  MdAttachMoney,MdFileCopy } from 'react-icons/md';
import ComplexTable from 'views/admin/default/components/ComplexTable';
import DailyTraffic from 'views/admin/default/components/DailyTraffic';
import PieCard from 'views/admin/default/components/PieCard';
import TotalSpent from 'views/admin/default/components/TotalSpent';
import tableDataComplex from 'views/admin/default/variables/tableDataComplex';
import { IoAdd, IoAddCircle, IoAddCircleOutline, IoAddOutline, IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useState } from 'react';

export default function UserReports() {
	// Chakra Color Mode
	const brandColor = useColorModeValue('brand.500', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const [ like, setLike ] = useState(false);
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }} gap='20px' mb='20px'>
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg={boxBg}
							icon={<Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />}
						/>
					}
					name='Gastos do mês'
					value='$642.39'
				/>
				<MiniStatistics
					endContent={
						<Flex me='-16px' mt='10px'>
							<FormLabel htmlFor='balance'>
								<Avatar src={Brazil} />
							</FormLabel>
							<Select id='balance' variant='unstyled' mt='5px' me='0px' defaultValue='brl'>
								{/* <option value='usd'>USD</option>
								<option value='eur'>EUR</option> */}
								<option value='brl'>BRL</option>
							</Select>
						</Flex>
					}
					name='Sua conta'
					value='R$1,000'
				/>
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg={boxBg}
							icon={<Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />}
						/>
					}
					name='Projetos Hospedados'
					value='1'
				/>
				<MiniStatistics
					endContent={
						<Flex me='-16px' mt='10px'>
							<FormLabel htmlFor='balance'>
							<Button
						position='absolute'
						bg='white'
						_hover={{ bg: 'whiteAlpha.900' }}
						_active={{ bg: 'white' }}
						_focus={{ bg: 'white' }}
						p='0px !important'
						top='32px'
						right='32px'
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
							as={like ? IoAddCircle : IoAddCircleOutline}
							color='brand.500'
						/>
					</Button>
							</FormLabel>
						</Flex>
					}
					name='Criar'
					value='Projeto'
				/>
			</SimpleGrid>

			<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
				<TotalSpent />
				<DailyTraffic />
			</SimpleGrid>
			<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
			<ComplexTable tableData={tableDataComplex} />
				<PieCard />
			</SimpleGrid>
			
			
		</Box>
	);
}
