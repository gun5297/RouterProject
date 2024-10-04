import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { TagContext } from '../../contexts/TagContext';

const TagForm = () => {
    const { user } = useContext(AuthContext);
    const { addTagData } = useContext(TagContext);
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        addTagData(text);
        setText('');
    };
    return (
        <form onSubmit={onSubmit}>
            <span>{user}님</span>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button>등록</button>
        </form>
    );
};

export default TagForm;
