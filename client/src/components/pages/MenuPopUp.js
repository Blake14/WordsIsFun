import HostGame from './HostGame';
import JoinGame from './JoinGame';
import { FaRegWindowClose } from 'react-icons/fa';
import { FiRefreshCcw } from 'react-icons/fi';

const MenuPopUp = (props) => {
	if (props.menuType === 'NONE') {
		return <></>;
	} else if (props.menuType === 'HOST') {
		return (
			<>
				<HostGame
					FaRegWindowClose={FaRegWindowClose}
					setMenuType={props.setMenuType}
					gameData={props.gameData}
					players={props.players}
					FiRefreshCcw={FiRefreshCcw}
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
