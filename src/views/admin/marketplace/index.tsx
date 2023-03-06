import React from 'react';


import { Box, Button, Flex, Grid, Link, Text, useColorModeValue, SimpleGrid } from '@chakra-ui/react';

// Custom components
import Banner from 'views/admin/marketplace/components/Banner';
import TableTopCreators from 'views/admin/marketplace/components/TableTopCreators';
import HistoryItem from 'views/admin/marketplace/components/HistoryItem';
import NFT from 'components/card/NFT';
import Card from 'components/card/Card';
import banner from 'assets/img/auth/banner.png';
import avatar from 'assets/img/avatars/avatar4.png';
// Assets
import Nft1 from 'assets/img/nfts/Nft1.png';
import NodeLogo from 'assets/img/nfts/node-1.png';
import ReactLogo from 'assets/img/nfts/react.png';
import Nft2 from 'assets/img/nfts/Nft2.png';
import Nft3 from 'assets/img/nfts/Nft3.png';
import Nft4 from 'assets/img/nfts/Nft4.png';
import Nft5 from 'assets/img/nfts/Nft5.png';
import Nft6 from 'assets/img/nfts/Nft6.png';
import Avatar1 from 'assets/img/avatars/avatar1.png';
import Avatar2 from 'assets/img/avatars/avatar2.png';
import Avatar3 from 'assets/img/avatars/avatar3.png';
import Avatar4 from 'assets/img/avatars/avatar4.png';
import tableDataTopCreators from 'views/admin/marketplace/variables/tableDataTopCreators'; 
import Projects from '../profile/components/Projects';

export default function Marketplace() {
	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorBrand = useColorModeValue('brand.500', 'white');
	return (
		<Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
			{/* Main Fields */}
			<Grid
				mb='20px'
				gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
				gap={{ base: '20px', xl: '20px' }}
				display={{ base: 'block', xl: 'grid' }}>
				<Flex flexDirection='column' gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
					<Banner />
					<Flex
							mt='45px'
							mb='20px'
							justifyContent='space-between'
							direction={{ base: 'column', md: 'row' }}
							align={{ base: 'start', md: 'center' }}>
						
						</Flex>
					<Flex direction='column'>
					<Projects
					banner={banner}
					avatar={avatar}
					name='Adryelle Paula'
					job='Product Designer'
					posts='17'
					followers='9.7k'
					following='274'
				/>
					</Flex>
				</Flex>
				<Flex flexDirection='column' gridArea={{ xl: '1 / 3 / 2 / 4', '2xl': '1 / 2 / 2 / 3' }}>
					<Card p='0px'>
						<Flex
							align={{ sm: 'flex-start', lg: 'center' }}
							justify='space-between'
							w='100%'
							px='22px'
							py='18px'>
							<Text color={textColor} fontSize='xl' fontWeight='600'>
								Templates
							</Text>
							{/* <Button variant='action'>See all</Button> */}
						</Flex>

						<HistoryItem
							name='React Frontend'
							author=''
							date='30s ago'
							image={ReactLogo}
							price=''
						/>
						<HistoryItem
							name='NodeJS + Prisma'
							author=''
							date='30s ago'
							image={NodeLogo}
							price=''
						/>
					</Card>
				</Flex>
			</Grid>
			{/* Delete Product */}
		</Box>
	);
}
