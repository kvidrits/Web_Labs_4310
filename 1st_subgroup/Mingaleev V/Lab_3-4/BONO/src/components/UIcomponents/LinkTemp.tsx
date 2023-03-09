import React, {FC} from 'react';
import {Link} from "react-router-dom";
import classes from './LinkTemplate.module.css'

interface LinkTemplateProps {
    text: string,
    src: string
}

const LinkTemp: FC<LinkTemplateProps> = ({text, src}) => {
    return (
        <Link to={src} className={classes['link-template']}>
            {text}
        </Link>
    );
};

export default LinkTemp;