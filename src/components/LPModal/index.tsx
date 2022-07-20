import { Modal, Button } from "react-bootstrap";

interface LPModalProps {
	title: string;
	description: string;
	onHide: (show: boolean) => void;
}

export const LPModal: React.FC<LPModalProps> = (props) => {
	const { title, description, onHide } = props;

	return (
		<Modal show={true} onHide={onHide} backdrop="static" keyboard={false}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{description}</Modal.Body>
		</Modal>
	);
};
