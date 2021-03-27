import styled from "styled-components";

const FormWrapper = styled.div`
  background-color: #ffffff;
  padding: 2rem 1.5rem;
  margin: 2.4rem auto;
  border-radius: 10px;
  font: ${({theme}) => theme.fonts.paragraph};
`;

export default function Form() {
  return (
    <FormWrapper>
        this will soon be a form
    </FormWrapper>
  );
}
