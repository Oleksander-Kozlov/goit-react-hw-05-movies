import { Formik,  ErrorMessage } from 'formik';
import { Field, Form, BTNSubmit } from './SearchBox.styled';
const initialValues = { searchimg: '' };
export const SearchBox = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmit', e.currentTarget);
    }
    const onChange = ({target}) => {
        console.log('onChange', target.value);
    }
    return (
        <Formik initialValues={initialValues}>
            
        <Form onSubmit={onSubmit} className="form">
          <Field
            className="input"
            name="searchImg"
            type="text"
            autoComplete="off"
            autoFocus
            onChange={onChange}
            placeholder="Search movies"
          />
          <BTNSubmit type="submit" className="button">
            Search video
            {/* <ButtonLabel className="button-label"></ButtonLabel> */}
          </BTNSubmit>

          <ErrorMessage name="searchImg" component="div" />
        </Form>
      </Formik>
    
    );
};