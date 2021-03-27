import styled from "styled-components";

const FormWrapper = styled.div`
  max-width: 700px;
  background-color: #ffffff;
  padding: 2rem 1.5rem;
  margin: 2.4rem auto 2.4rem 0;
  border-radius: 10px;
  font: ${({theme}) => theme.fonts.paragraph};
  transition: box-shadow .3s;

  :hover {
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.01)
  }
`;

const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    input, textarea {
        padding: .4rem .3rem;
        border: none;
        border-bottom: 2px solid #ccc;
        outline-color: #ccc;
        transition: border-bottom .3s;
        font-family: Inter;
        letter-spacing: 1px;
        margin-bottom: 1rem;

        :hover {
            border-bottom: 2px solid ${({theme}) => theme.colors.richYellow};
        }

        ::placeholder {
            color: #ddd;
        }
    }

    small {
        font-size: .8rem;
        color: rgba(0,0,0,0.5)
    }

    button {
        width: 200px;
        padding: .6rem 0;
        border: 1px solid ${({theme}) => theme.colors.primaryRed};
        background-color: #fff;
        color: ${({theme}) => theme.colors.primaryRed};
        font: ${({theme}) => theme.fonts.smallParagraph};
        letter-spacing: 2px;
        cursor: pointer;
        transition: background-color .3s, color .2s;

        :hover {
            background-color: ${({theme}) => theme.colors.primaryRed};
            color: #fff;
        }
    }
`

export default function Form() {
  return (
    <FormWrapper>
        <MyForm>
            <label htmlFor="name">Como quer ser chamado?</label>
            <input type="text" id="name" name="name" placeholder="Seu nome" />
            <label htmlFor="email">Qual o seu melhor e-mail para contato?
            <br /><small>Não divulgamos seus dados nem enviamos spam.</small>
            </label>
            <input type="text" id="email" name="email" placeholder="Seu e-mail" />
            <label htmlFor="story">Quer enviar algum comentário?</label>
            <textarea id="story" name="story" placeholder="Escreva o que quiser" />
            <button type="submit" onClick={e => e.preventDefault}>Enviar</button>
        </MyForm>
    </FormWrapper>
  );
}
