import React, {useContext} from 'react';
import {Div, Title} from "@vkontakte/vkui";
import styles from './Accordion.module.css';

const Ctx = React.createContext('');

interface Props {
  title: string;
  id: string;
  onSelect: (id: string) => void;
}

const Accordion: React.FunctionComponent<Props> = ({title, id, children, onSelect}) => {
  const context = useContext(Ctx);
  return <Div className={styles.container + ' ' + (context === id ? '' : styles.closed)} onClick={() => onSelect(id)}>
    <Title className={styles.title} weight={'bold'} level={'3'}>{title}</Title>
    <Div className={styles.body + ' ' + (context === id ? '' : styles.closed)}>
      {children}
    </Div>
  </Div>
};

export const AccordionProvider = Ctx.Provider;

export default Accordion;
