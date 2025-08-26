import React, { useState } from 'react'
import { useReducer } from 'react'
import styled from 'styled-components'
import { 
    ModalContent, 
    ModalOverlay, 
    ModalText,
    ModalTitle, 
    CloseButton, 
    ModalButtons} from './ModalFact';

export const MainContainer = styled.main`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fdf6e3;
  border: 3px solid #8b5e3c;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  font-family: "IM Fell English SC", serif;
  color: #2b1d0e;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #3b2a1a;
  text-shadow: 1px 1px 0 #e0c097;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  border-bottom: 2px solid #8b5e3c;
  padding-bottom: 0.3rem;
`;

export const AttributeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export const PirateButton = styled.button`
  background: #8b5e3c;
  color: #fdf6e3;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #a8734f;
    transform: scale(1.1);
  }
`;

export const AttributeValue = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.3rem 0.8rem;
  background: #fff2d5;
  border: 2px solid #8b5e3c;
  border-radius: 6px;
`;

export const FactCard = styled.div`
  background: #fff9e6;
  border: 2px solid #c4a484;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
  font-family: "Cinzel Decorative", serif;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);

  &:hover {
    background: #f4e4c1;
    transform: scale(1.02);
    transition: 0.2s;
    cursor: pointer;
  }
`;

function reducer(state, action){
    switch (action.type) {
        case 'hpIncrement':
            return {...state, hp:state.hp+1};
        case 'hpDecrement':
            return {...state, hp:state.hp-1};
        case 'powerIncrement':
            return {...state, power:state.power+1};
        case 'powerDecrement':
            return {...state, power:state.power-1};
        case 'incrementFactPower':
            const updatedFacts = state.facts.map((fact, idx) => {
                return idx === action.factIndex ? {...fact, charge:fact.charge+1 } : fact}
            );
            return {...state, facts:updatedFacts};
        case 'decrementFactPower':
            state.facts[action.factIndex].charge -= 1;
            return {...state };
        default:
            return state;
    }
}

export default function ReducerHook() {
    const [character, dispatch] = useReducer(reducer, {
        name:'Selene', 
        hp:4,
        power:3, 
        facts:[
            {fact:'esgrima avançada', charge:3, description:'combate com espada refinado e mortal.'},
            {fact:'presença intimidante', charge:3, description:'inimigos fracos hesitam antes de atacar.'},
            {fact:'contrato vampírico', charge:4, description:'aumenta força e velocidade em combate, mas exige "alimentação" de energia vital de inimigos.'}
        ]
    });

    const [selectedFactID, setSelectedFactID] = useState(-1);

  return (
    <MainContainer>
        <Title>{character.name}</Title>
        <SectionTitle>HP</SectionTitle>
        <AttributeBox>
            <PirateButton onClick={() => dispatch({type:'hpDecrement'})}>-</PirateButton>
            <AttributeValue>{character.hp}</AttributeValue>
            <PirateButton onClick={() => dispatch({type:'hpIncrement'})}>+</PirateButton>
        </AttributeBox>

        <SectionTitle>Power</SectionTitle>
        <AttributeBox>
            <PirateButton onClick={() => dispatch({type:'powerDecrement'})}>-</PirateButton>
            <AttributeValue>{character.power}</AttributeValue>
            <PirateButton onClick={() => dispatch({type:'powerIncrement'})}>+</PirateButton>            
        </AttributeBox>

        <SectionTitle>Fatos</SectionTitle>
        {character.facts.map((f, index) => (
            <FactCard key={index} onClick={() => setSelectedFactID(index)}>
                <span>{f.fact}</span>
                <AttributeBox>
                    <AttributeValue>{f.charge}</AttributeValue>
                </AttributeBox>
            </FactCard>
        ))}

        {selectedFactID > -1 && (
            <ModalOverlay onClick={() => setSelectedFactID(-1)}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                    <CloseButton onClick={() => setSelectedFactID(-1)}>X</CloseButton>
                    <ModalTitle>{character.facts[selectedFactID].fact}</ModalTitle>
                    <ModalText>{character.facts[selectedFactID].description || "Nenhuma descrição disponível"}</ModalText>
                    <ModalButtons>
                        <PirateButton onClick={() => dispatch({type:'decrementFactPower', factIndex:selectedFactID})}>-</PirateButton>
                        <AttributeValue>{character.facts[selectedFactID].charge}</AttributeValue>
                        <PirateButton onClick={() => dispatch({type:'incrementFactPower', factIndex:selectedFactID})}>+</PirateButton>
                    </ModalButtons>
                </ModalContent>
            </ModalOverlay>
            
        )}
    </MainContainer>
  )
}

