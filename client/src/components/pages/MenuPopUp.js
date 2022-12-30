import HostGame from './HostGame';
import JoinGame from './JoinGame';
import { FaRegWindowClose } from 'react-icons/fa';

const MenuPopUp = (props) => {
	const GenerateGameID = (length) => {
		var length = 5;
		var result = '';
		var characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	};
	if (props.menuType === 'NONE') {
		return <></>;
	} else if (props.menuType === 'HOST') {
		return (
			<>
				<HostGame
					FaRegWindowClose={FaRegWindowClose}
					setMenuType={props.setMenuType}
					GenerateGameID={GenerateGameID}
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
