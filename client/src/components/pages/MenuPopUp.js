import HostGame from './HostGame';
import JoinGame from './JoinGame';
import { FaRegWindowClose } from 'react-icons/fa';

const MenuPopUp = (props) => {
	if (props.menuType === 'NONE') {
		return <></>;
	} else if (props.menuType === 'HOST') {
		return (
			<>
				<HostGame
					FaRegWindowClose={FaRegWindowClose}
					setMenuType={props.setMenuType}
				/>
			</>
		);
	} else if (props.menuType === 'JOIN') {
		return (
			<>
				<JoinGame
					FaRegWindowClose={FaRegWindowClose}
					setMenuType={props.setMenuType}
				/>
			</>
		);
	}
};

export default MenuPopUp;
