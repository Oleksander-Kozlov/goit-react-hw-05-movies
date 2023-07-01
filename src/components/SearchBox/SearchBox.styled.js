import styled from 'styled-components';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Field as FormikField } from 'formik';
import { Form as FormikForm } from 'formik';


export const Field = styled(FormikField)`
  padding: 10px;
  border: 2px solid orangered;
  border-radius: 4px;
  font-size: 16px;
  width: 200px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;


 
export const Form = styled(FormikForm)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const BTNSubmit = styled.button`
  background-color: orangered;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  :hover {
    background-color: white;
    color: orangered;
    border: 2px solid orangered;
  }

  // export const ButtonLabel = styled.span
`;
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
// `
export const InputSearch = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

// export const FcSearch = styled.svg` 
//   size: 2em;
//   vertical-align: middle;
// `;