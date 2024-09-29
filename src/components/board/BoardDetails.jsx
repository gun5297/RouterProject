import { BOARDETAILSCONTAINER } from './styled';

const BoardDetails = ({ body }) => {
    return (
        <BOARDETAILSCONTAINER>
            <p>{body}</p>
        </BOARDETAILSCONTAINER>
    );
};

export default BoardDetails;
