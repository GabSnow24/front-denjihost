import { Flex, useColorModeValue } from '@chakra-ui/react';

import { DenjiHostingLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {

	let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			
			<DenjiHostingLogo h='26px' w='175px' my='32px' color={logoColor} />
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
