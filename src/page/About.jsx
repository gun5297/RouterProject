import AboutInfo from '../components/about/AboutInfo';
import SubNav from '../components/common/SubNav';
import { ABOUTCONTAINER } from './styled';

const About = () => {
    return (
        <ABOUTCONTAINER>
            <AboutInfo />
            <SubNav />
        </ABOUTCONTAINER>
    );
};

export default About;
