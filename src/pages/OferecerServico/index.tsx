import React, { useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom';
import PageHeader from '../../components/PageHeader';


import './styles.css';
import Input from '../../components/input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function OferecerServico() {
    const history = useHistory();

    const[name, setName] = useState('');
    const[avatar, setAvatar] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[bio, setBio] = useState('');

    const[subject, setSubject] = useState('');
    const[cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        {week_day:0, from:'', to:''},
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day:0, from:'', to:''}
        ]);

        scheduleItems.push({
            week_day: 0,
            from:'',
            to:''
        })
    }

    function setScheduleItemValue(position:number, field:string, value:string ){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!')

            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!')
        })

        console.log({
            name,
            avatar,
            whatsapp,
            subject,
            cost,
            scheduleItems
        });
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer oferecer seus serviços." 
            description="O primeiro passo é preencher esse formulário de inscrição"
            
            />

            <main>
                <form onSubmit={handleCreateClass} >
                <fieldset>
                    <legend> Dados do Profissional </legend>

                    <legend> Qual serviço <br/>
                            deseja oferecer ? </legend>


                            <fieldset>

                    <Select 
                    name="subject" 
                    label="Serviço"
                    /*value={subject} 
                    onChange={(e) => {setSubject(e.target.value)}}*/
                    options={[
                        {value:'Artes', label: 'Artes'},
                        {value:'Biologia', label: 'Biologia'},
                        {value:'Ciências', label: 'Ciências'},
                        {value:'Educação física', label: 'Educação física'},
                        {value:'Espanhol', label: 'Espanhol'},
                        {value:'Física', label: 'Física'},
                        {value:'Geografia', label: 'Geografia'},
                        {value:'História', label: 'História'},
                        {value:'Informática', label: 'Informática'},
                        {value:'Inglês', label: 'Inglês'},
                        {value:'Matemática', label: 'Matemática'},
                        {value:'Português', label: 'Português'},
                        {value:'Química', label: 'Química'}

                    ]}
                    />
                    <Input 
                        name="cost" 
                        label="Custo da diária / hora"
                        /*value={cost} 
                        onChange={(e) => {setCost(e.target.value)}}*/
                        />


                <label>
                        Possui registro ?
                      
                        <div className="radio">
                        <label>
                            sim
                            <input type="radio" value="option1" checked={true} />
                            
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            não
                            <input type="radio" value="option2" />
                            
                        </label>
                        </div>

            
                </label>

                <Input 
                        name="registro" 
                        label="Registro"
                        /*value={cost} 
                        onChange={(e) => {setCost(e.target.value)}}*/
                        />

    
                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + novo horário
                        </button>
                    </legend>
                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                            <div  key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                name="week_day" 
                                label="Dia da semana"
                                value={scheduleItem.week_day}
                                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                options={[
                                    {value:'0', label: 'Domingo'},
                                    {value:'1', label: 'Segunda-feira'},
                                    {value:'2', label: 'Terça-feira'},
                                    {value:'3', label: 'Quarta-feira'},
                                    {value:'4', label: 'Quinta-feira'},
                                    {value:'5', label: 'Sexta-feira'},
                                    {value:'6', label: 'Sábado'},  
                                ]}
                                />
                        <Input 
                        name="from" 
                        label="Das" 
                        type="time"
                        value={scheduleItem.from}
                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)} 
                        />

                        <Input 
                        name="to" 
                        label="Até" 
                        type="time"
                        value={scheduleItem.to}
                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)} 
                        />

                    </div>
                        );

                    })}
                </fieldset>

                <fieldset>
                    <legend>Meios de pagamento
                        <button type="button" onClick={addNewScheduleItem}>
                            + Adicionar outro
                        </button>
                    </legend>
                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                            <div  key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                name="week_day" 
                                label="Dia da semana"
                                value={scheduleItem.week_day}
                                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                options={[
                                    {value:'0', label: 'picpay'},
                                    {value:'1', label: 'Segunda-feira'},
                                    {value:'2', label: 'Terça-feira'},
                                    {value:'3', label: 'Quarta-feira'},
                                    {value:'4', label: 'Quinta-feira'},
                                    {value:'5', label: 'Sexta-feira'},
                                    {value:'6', label: 'Sábado'},  
                                ]}
                                />
                    

                        <Input 
                        name="to" 
                        label="Nome / ID de usuário do serviço" 
                        type="text"
                        value={scheduleItem.to}
                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)} 
                        />

                    </div>
                        );

                    })}
                </fieldset>
                    
                    
                </fieldset>


                

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Preencha todos os dados

                    </p>
                    <button type="submit">Salvar o cadastro</button>
                </footer>
                </form>
            </main>
        </div>
    )
}

export default OferecerServico;