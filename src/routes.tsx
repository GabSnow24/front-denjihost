import { Icon } from '@chakra-ui/react';
import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart, MdOutlineComputer } from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';


// Auth Imports
import SignInCentered from 'views/auth/signIn';
import  SignUp  from 'views/auth/signIn/signUp';

const routes = [
	{
		name: 'Dashboard Principal',
		layout: '/admin',
		path: '/default',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: MainDashboard
	},
	{
		name: 'Projetos',
		layout: '/admin',
		path: '/projetos',
		icon: <Icon as={MdOutlineComputer} width='20px' height='20px' color='inherit' />,
		component: NFTMarketplace,
		secondary: true
	},
	{
		name: 'Perfil',
		layout: '/admin',
		path: '/perfil',
		icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
		component: Profile
	},
	{
		name: 'Entrar',
		layout: '/auth',
		path: '/login',
		icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
		component: SignInCentered
	},
	{
		name: 'Cadastrar',
		layout: '/auth',
		path: '/sign-up',
		icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
		component: SignUp
	},
];

export default routes;
