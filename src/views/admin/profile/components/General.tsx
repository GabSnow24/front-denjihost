// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import Information from 'views/admin/profile/components/Information';

// Assets
export default function GeneralInformation(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');
	return (
		<Card mb={{ base: '0px', '2xl': '20px' }} {...rest}>
			<Text color={textColorPrimary} fontWeight='bold' fontSize='2xl' mt='10px' mb='4px'>
				Informações Gerais
			</Text>
			<SimpleGrid columns={2} gap='20px'>
				<Information boxShadow={cardShadow} title='Education' value='UESC' />
				<Information boxShadow={cardShadow} title='Languages' value='Português' />
				<Information boxShadow={cardShadow} title='Department' value='Product Design' />
				<Information boxShadow={cardShadow} title='Work History' value='MB' />
				<Information boxShadow={cardShadow} title='Organization' value='DenjiDev' />
				<Information boxShadow={cardShadow} title='Birthday' value='20 de Julho 1986' />
			</SimpleGrid>
		</Card>
	);
}
