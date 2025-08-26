import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: radial-gradient(1200px 800px at 10% -10%, rgba(124, 92, 255, .15), transparent 60%),
              radial-gradient(900px 600px at 110% 10%, rgba(61, 224, 178, .13), transparent 60%),
              #0b0c10;
  padding: 24px;
`;

export const Form = styled.form`
  background: linear-gradient(180deg, #111319, #141824);
  border: 1px solid #22283a;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,.35);
  padding: 32px;
  display: grid;
  gap: 20px;
  width: min(600px, 100%);
`;

export const CharacterSheet = styled.form`
  background: linear-gradient(180deg, #111319, #141824);
  border: 1px solid #22283a;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,.35);
  padding: 32px;
  display: grid;
  gap: 20px;
  width: min(200px, 100%);
`;

export const SheetFields = styled.section`
  display: flex;
  align-items: center;
`;

export const SheetFieldKey = styled.span`
  color: #a9b3c7;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

export const SheetFieldValue = styled.span`
  padding: 12px 14px;
  color: #e8ecf1;
  width: 100%;
  text-align: center;
`;


export const Field = styled.div`
  display: grid;
  gap: 8px;
`;

export const Label = styled.label`
  color: #a9b3c7;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 570px;
  padding: 12px 14px;
  color: #e8ecf1;
  background: #0f1220;
  border: 1px solid #22283a;
  border-radius: 12px;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;

  &::placeholder {
    color: #8892a6;
  }

  &:hover {
    border-color: #2a3150;
  }

  &:focus {
    border-color: #7c5cff;
    box-shadow: 0 0 0 4px rgba(124, 92, 255, 0.15), 0 2px 10px rgba(0,0,0,.25);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px 14px;
  color: #e8ecf1;
  background: #0f1220;
  border: 1px solid #22283a;
  border-radius: 12px;
  outline: none;
  appearance: none;
  transition: border-color .15s ease, box-shadow .15s ease;

  &:hover {
    border-color: #2a3150;
  }

  &:focus {
    border-color: #7c5cff;
    box-shadow: 0 0 0 4px rgba(124, 92, 255, 0.15), 0 2px 10px rgba(0,0,0,.25);
  }
`;

export const File = styled.div`
  position: relative;
`;

export const FileButton = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #22283a;
  background: #0f1220;
  color: #e8ecf1;
  font-weight: 600;
  cursor: pointer;
  transition: transform .04s ease, box-shadow .15s ease, border-color .15s ease;

  &:hover {
    border-color: #2a3150;
  }
  &:active {
    transform: translateY(1px);
  }

  input[type="file"] {
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
  }
`;


function UpdateSpecificObjProperty() {
    const [character, setCharacter] = useState({
      name:'',
      race:'',
      class:''
    });

    function handleInputChange(e) {
      const value = e.target.value;
      const key = e.target.id;
      setCharacter((prev) => ({...prev, [key]: value}));
    }


    return (
      <Main>
        <Form>
          <Field>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" type="text" placeholder="Ex: Arannis" onChange={ (e) => handleInputChange(e)}/>
          </Field>

          <Field>
            <Label htmlFor="race">Raça</Label>
            <Select id="race" onChange={ (e) => handleInputChange(e)}>
              <option value="">Selecione...</option>
              <option value="Humano">Humano</option>
              <option value="Elfo">Elfo</option>
              <option value="Anão">Anão</option>
              <option value="Orc">Orc</option>
            </Select>
          </Field>

          <Field>
            <Label htmlFor="class">Classe</Label>
            <Select id="class" onChange={ (e) => handleInputChange(e)}>
              <option value="">Selecione...</option>
              <option value="Guerreiro">Guerreiro</option>
              <option value="Mago">Mago</option>
              <option value="Ladino">Ladino</option>
              <option value="Clérigo">Clérigo</option>
            </Select>
          </Field>

          <Field>
            <Label>Imagem</Label>
            <File>
              <FileButton>
                Upload de imagem
                <input type="file" accept="image/*" />
              </FileButton>
            </File>
          </Field>
        </Form>

        <CharacterSheet>
          <SheetFields>
            <SheetFieldKey>Nome</SheetFieldKey> 
            <SheetFieldValue>{character.name}</SheetFieldValue>
          </SheetFields>

          <SheetFields>
            <SheetFieldKey>Raça</SheetFieldKey>
            <SheetFieldValue>{character.race}</SheetFieldValue>
          </SheetFields>

          <SheetFields>
            <SheetFieldKey>Classe</SheetFieldKey>
            <SheetFieldValue>{character.class}</SheetFieldValue>
          </SheetFields>
        </CharacterSheet>
      </Main>
);

}

export default UpdateSpecificObjProperty