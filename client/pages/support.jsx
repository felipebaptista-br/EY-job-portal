import React, { useEffect } from "react";
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
                        <section>
                            <h4 style={{ marginBottom: '1.5rem' }}>POLÍTICA DE SEGURANÇA:</h4>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography style={{ fontSize: '0.9rem' }}>Confidencialidade</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ fontSize: '0.8rem' }}>
                                        O conceito de confidencialidade não foge muito à noção que o próprio termo nos passa. A confidencialidade, no contexto da segurança da informação, nada mais é do que a garantia de que determinada informação, fonte ou sistema é acessível apenas às pessoas previamente autorizadas a terem acesso.
                                        <br />
                                        Ou seja, sempre que uma informação confidencial é acessada por um indivíduo não autorizado, intencionalmente ou não, ocorre o que se chama de quebra da confidencialidade. A ruptura desse sigilo, a depender do teor das informações, pode ocasionar danos inestimáveis para a empresa, seus clientes e até mesmo para todo o mercado.
                                        <br />
                                        A exemplo, instituições financeiras, detentoras de dados pessoais e bancários de uma infinidade de usuários, não só precisam, mas devem manter a confidencialidade de todas as informações em seu domínio. A quebra desse sigilo significaria expor à riscos uma grande quantidade de pessoas, causando prejuízos incalculáveis.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography style={{ fontSize: '0.9rem' }}>Integridade</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ fontSize: '0.8rem' }}>
                                        Quando empresas lidam com dados, um dos seus grandes deveres é mantê-los intocados, de forma a preservar a sua originalidade e confiabilidade. Caso contrário, erros podem ocorrer na interpretação dessas informações, gerando também rupturas no compliance do negócio e, no pior dos casos, sanções penais pesadas.
                                        <br />
                                        Nesse contexto, garantir a integridade é, pois, adotar todas as precauções necessárias para que a informação não seja modificada ou eliminada sem autorização, isto é, que mantenha a sua legitimidade e consistência, condizendo exatamente com a realidade.
                                        <br />
                                        Qualquer falha nesse quesito, seja por uma alteração, falsificação ou acesso irregular, gera a quebra da integridade. Da mesma forma que a quebra de confidencialidade, a ruptura na integridade das informações também pode implicar impactos negativos de grande monta em uma empresa, sobretudo de grande porte, em que os dados e informações têm um valor ainda maior.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                    <Typography style={{ fontSize: '0.9rem' }}>Disponibilidade</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ fontSize: '0.8rem' }}>
                                        A relação da segurança da informação com a disponibilidade é basicamente a garantia de acesso aos dados sempre que necessário. Ou seja, é a possibilidade de os colaboradores e membros da organização acessarem os dados de maneira fluida, segura e eficiente.
                                        <br />
                                        No contexto corporativo, a disponibilidade das informações é matéria de extrema importância, visto que o negócio pode depender da disponibilidade dos seus dados e sistemas para fechar contratos, vendas e atender os clientes.
                                        <br />
                                        Imagine como pode ser prejudicial para uma empresa que trabalha com vendas sofrer algum ataque na sua base de dados e, em razão disso, ter o sistema derrubado por um dia inteiro. Além do prejuízo à imagem, há também perdas financeiras com o não fechamento de vendas. Logo, a disponibilidade também figura como um dos pilares para a segurança da informação.
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
