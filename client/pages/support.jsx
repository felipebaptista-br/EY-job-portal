import React, { useEffect } from "react";
import content from "../utils/content/support.json";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setUser } from "../utils/reducers/users";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SideHeader from "../components/sideHeader";

import style from "../styles/pages/support.module.css";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Support() {
    // declaration of variables
    const navigate = useRouter();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    // global state data
    const user = useSelector(state => state.user);

    // functions
    useEffect(() => {
        var storeData = localStorage.getItem('auth');
        const data = JSON.parse(storeData);
        dispatch(
            setUser(data)
        );
        if (!data.active) {
            navigate.push('/login')
        }
    }, []);

    return (
        <>{
            user && user.active ?
                <main style={{ display: 'flex' }}>
                    <SideHeader menuData='support' />
                    <div className={style['container-support']}>
                        <section style={{ marginBottom: '2rem' }}>
                            <h4 style={{ marginBottom: '1.5rem' }}>{content['fale-conosco']}</h4>
                            <p>{content.contato}</p>
                        </section>
                        <section>
                            <h4 style={{ marginBottom: '1.5rem' }}>POLÍTICA DE SEGURANÇA:</h4>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography style={{ fontSize: '0.9rem' }}>Confidencialidade</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ fontSize: '0.8rem' }}>
                                        {content.confidencialidade}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography style={{ fontSize: '0.9rem' }}>Integridade</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ fontSize: '0.8rem' }}>
                                        {content.integridade}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                    <Typography style={{ fontSize: '0.9rem' }}>Disponibilidade</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ fontSize: '0.8rem' }}>
                                        {content.disponibilidade}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </section>
                    </div>
                </main>
                : <></>
        }</>
    )
}
