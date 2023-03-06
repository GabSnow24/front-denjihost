import { Box, Grid } from '@chakra-ui/react';

import Banner from 'views/admin/profile/components/Banner';
import General from 'views/admin/profile/components/General';
import Notifications from 'views/admin/profile/components/Notifications';
import Projects from 'views/admin/profile/components/Projects';
import Storage from 'views/admin/profile/components/Storage';
import Upload from 'views/admin/profile/components/Upload';

// Assets
import banner from 'assets/img/auth/banner.png';
import avatar from 'assets/img/avatars/avatar4.png';

export default function Overview() {
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			{/* Main Fields */}
			<Grid
				templateColumns={{
					base: '1fr',
					lg: '1.34fr 1fr 1.62fr'
				}}
				templateRows={{
					base: 'repeat(3, 1fr)',
					lg: '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				<Banner
					gridArea='1 / 1 / 2 / 2'
					banner={banner}
					avatar={avatar}
					name='Adryelle Paula'
					job='DevOps'
				/>
				<Storage gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }} used={5} total={10} />
			</Grid>
			<Grid
				mb='20px'
				templateColumns={{
					base: '1fr',
					lg: 'repeat(2, 1fr)',
					'2xl': '1.34fr 1.62fr 1fr'
				}}
				templateRows={{
					base: '1fr',
					lg: 'repeat(2, 1fr)',
					'2xl': '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				<General gridArea='1 / 1 / 2 / 2' minH='365px' pe='20px' />
			</Grid>
		</Box>
	);
}
